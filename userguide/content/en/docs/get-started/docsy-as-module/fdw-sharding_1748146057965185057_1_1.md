---
title: PostgreSQL 11 sharding with foreign data wrappers and partitioning
---

## PostgreSQL 11 sharding with foreign data wrappers and partitioning

This document captures our exploratory testing around using foreign data wrappers in combination with partitioning. The idea is to implement partitions as foreign tables and have other PostgreSQL clusters act as shards and hold a subset of the data.

### Background

With [PostgreSQL 11 declarative partitioning](https://www.postgresql.org/docs/11/ddl-partitioning.html), we can slize tables horizontally. That is, we keep working with the top-level table as usual but underneath we organize the data in multiple partitions. Those can be thought of as regular tables that are being attached to the top-level table (much like table inheritance in PostgreSQL).

In order to implement partitioning, we choose a partitioning key and a partitioning method (hash or range based - read more about it in the [docs](https://www.postgresql.org/docs/11/ddl-partitioning.html#DDL-PARTITIONING-OVERVIEW)). With any of the methods, a partition contains data only for a subset of the partitioning key's values. Queries benefit from this only if they contain a filter on the partitioning key. In that case, the query planner statically derives which partitions have to be scanned for a particular query. Best case it only scans one partition to satisfy the query and excludes all other partitions.

Standard PostgreSQL partitioning creates all partitions equal and on the same physical cluster. Therefore, partitioning is not a built-in way to distribute data across multiple clusters. Instead, it implements logical data organization and splitting but does not natively support distributing data. This is where [PostgreSQL foreign data wrappers](https://www.postgresql.org/docs/12/postgres-fdw.html) come in and provide a way to access a foreign table just like we are accessing regular tables in the local database. In our exploratory scheme, each partition is a foreign table and physically lives in a separate database. We call this a "shard", which can also live in a totally separate database cluster.

The PostgreSQL community has a [roadmap to build sharding capabilities](https://wiki.postgresql.org/wiki/Built-in_Sharding) into native PostgreSQL in upcoming versions.

### Initial setup

In this demo, we go through the process of setting up the schema.

<figure class="video_container">
  <iframe src="https://www.youtube.com/watch?v=MiZFtM84x44" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

In our example, we picked `issues` table as we did in previous examples. Choosing the `project_id` as the partitioning key (because that is already available), we [re-create the top-level table](https://gitlab.com/gitlab-org/gitlab/-/blob/611126f9ea4f27be3e597aa2384a801319db1793/db/migrate/20200429095943_partition_issues_table.up.sql) with HASH(project_id) based partitioning:

```sql
CREATE TABLE public.issues (
    id integer NOT NULL,
    title character varying
    -- ...
    project_id integer,
    -- ...
) PARTITION BY HASH (project_id);
```

As a next step, we [prepare two shards](https://gitlab.com/gitlab-org/gitlab/-/blob/611126f9ea4f27be3e597aa2384a801319db1793/db/migrate/20200429095943_partition_issues_table.up.sql#L65) to contain the actual partitioned data: Two local databases `shard1, shard2` - which could also live on a separate PostgreSQL cluster.

```sql
CREATE EXTENSION IF NOT EXISTS postgres_fdw;

CREATE SERVER IF NOT EXISTS shard1 FOREIGN DATA WRAPPER postgres_fdw OPTIONS (dbname 'shard1', host '...');
CREATE SERVER IF NOT EXISTS shard2 FOREIGN DATA WRAPPER postgres_fdw OPTIONS (dbname 'shard2', host '...');
```

We then proceed and [create partitions on the local database](https://gitlab.com/gitlab-org/gitlab/-/blob/611126f9ea4f27be3e597aa2384a801319db1793/db/migrate/20200429095943_partition_issues_table.up.sql#L73). Note that we are creating those as foreign tables and distribute them across `shard1, shard2`:

```sql
CREATE FOREIGN TABLE parts.issues_0 PARTITION OF public.issues FOR VALUES WITH (modulus 8, remainder 0) SERVER shard1;
CREATE FOREIGN TABLE parts.issues_1 PARTITION OF public.issues FOR VALUES WITH (modulus 8, remainder 1) SERVER shard2;
-- ...
```

Now the local database is prepared but we still have to [create the actual tables in the shards](https://gitlab.com/gitlab-org/gitlab/-/blob/611126f9ea4f27be3e597aa2384a801319db1793/db/sharding/shards_template.sql). For each of the partitions, we create a regular table along with indexes in the `shard1, shard2` databases.

A limitation at this point is that we cannot add foreign keys on these tables to any table that does not reside in the same shard.

With this setup, we can now run queries like the following and see them accessing one partition only which lives on the remote shard:

```sql
SELECT *
FROM issues
WHERE project_id = ?
```

We can continue to work with the `issues` table as usual. If we added more immutable conditions to the query, those would be pushed down on the shard.

### Schema migrations

In order to change the existing schema, we've discussed two examples: [Adding](https://gitlab.com/gitlab-org/gitlab/-/tree/611126f9ea4f27be3e597aa2384a801319db1793/db/sharding/add_column) and [dropping](https://gitlab.com/gitlab-org/gitlab/-/tree/611126f9ea4f27be3e597aa2384a801319db1793/db/sharding/drop_column) a column.

<figure class="video_container">
  <iframe src="https://www.youtube.com/watch?v=nt4Khi9Gr3o" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

The example migrations need coordination in a sense that the foreign table's schema needs to be a subset of the actual table. For adding a column, we would first add the column to all the actual tables on the shards and only later make this visible by adding the column to the foreign tables (the other way around for dropping columns).

### Reference tables

So far, the shards only contain regular tables for partitioned data. That data cannot reference data that does not reside on the shard. For example, we might have a `users` table that isn't sharded and we want it to be available globally across shards.

In this step, we explore using logical replication to replicate selected tables across shards and make them available locally. This allows us to connect to a shard directly and work with the reference table and one of the partitions directly. However, this requires knowledge of which shard holds the partition of data we are actually interested in.

<figure class="video_container">
  <iframe src="https://www.youtube.com/watch?v=ztQtNmSYmEo" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
In this example, we setup logical replication slots for both shards and publish two tables: `user, projects`. On the shards, we subscribe to the publication and start replicating the reference tables locally.

This will allow us to run queries like the following:

```sql
SELECT *
FROM users
JOIN issues_0 as issues -- note this is a single partition!
WHERE users.id = ? AND issues.title ~* ?
```

This is also possible on the main database of course. We've been exploring this as an option to run more queries directly on the shard. It remains to be seen how useful this is really.

### Summary

This has been an exploration of combining foreign data wrappers with partitioning. PostgreSQL does not natively support sharding and distributing data across multiple physical clusters (yet). Foreign data wrappers serve as a tool to read data from remote servers and can be used to distribute data.

However, this setup comes with a lot of complexity and limitations compared to a classic PostgreSQL setup:

1. Need to maintain connection details to foreign servers.
2. Difficult to maintain consistent schema across a set of clusters.
3. Foreign keys are only supported locally.
4. Overhead risk when partitioning key is not available is higher when data is remote.
5. Risk of certain suboptimal joins and filters if not being pushed down to foreign table.
6. Performance degradation if multiple shards need to be accessed for a query.
7. Balancing increase in query planning times with execution times.
8. Each shard requires its own HA cluster.
9. [No parallel scans of foreign tables.](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/53#note_334748021)
10. Updates to reference tables still need to go to the main cluster creating a bottleneck for write-scalability and a single-point of failure.
11. No global transaction management.

In order to really benefit from this approach, we'd have to shard relevant tables by the same dimension and make it possible to execute queries directly on shards.

With a lot of different access patterns in GitLab, this seems not feasible before we agree on an application-wide sharding key and deal with conflicting access patterns (e.g. by means of service extraction or isolation).

Fortunately, partitioning is the groundwork that allows us to tackle the same set of problems without introducing much of the complexity coming from distributing the data physically. As such, introducing partitioning throughout the application is an iterative way of working towards a more scalable database solution in general.

We are going to tackle the [audit log database design](https://gitlab.com/groups/gitlab-org/-/epics/320) as a first step to introduce the groundwork for partitioning and prepare the application to make wider use of this pattern.

---

Author: [Andreas Brandl](https://gitlab.com/abrandl)
