---
title: Database Partitioning
---

## Introducing PostgreSQL table partitioning to GitLab's database

This is a working document to discuss how we are going to introduce table partitioning to GitLab.

### Motivation

The PostgreSQL database we run for GitLab.com has grown to over 5 TB in total size as of early 2020. However, the total database size is *not* the driver to introduce partitioning but the size of individual tables is:

![gitlab-com-table-sizes](/images/engineering/infrastructure-platforms/data-access/database-framework/doc/gitlab-com-table-sizes.png)

We can see here that there are individual tables larger than 100 GB, some even go up in the terabytes range.

There is one notable table that we can ignore in this discussion: `merge_request_diff_files` which is the largest table and makes up more than 30% of the total database size today. This is being addressed by [externalizing this data](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues/7356) and move it into cloud storage.

The other tables shown here is where GitLab's most used features have their data:

* CI: Build jobs, trace sections, artifacts and pipelines
* Merge requests: Descriptions, commits and notes
* Issues: Descriptions and notes
* Web hooks
* Events, audit events and notifications

### Growing table sizes

Table size has a direct impact on query performance and execution times. Up until this point, we've been improving query times by adding the appropriate indexes only. This particularly improves queries with low selectivity (very targeted ones).

The impact of growing table sizes is:

1. Index maintenance overhead grows
2. Index lookup performance becomes worse
3. Data is physically spread out over a large table leading to unnecessarily high IO
4. Managing table bloat becomes more difficult
5. Relevant working set does not fit into memory anymore, leading to an increase in IO

### Example: Issue group search

The [gitlab-org group](https://gitlab.com/groups/gitlab-org/-/issues) has about 135k issues out of a total of 23M issues on GitLab.com.

We can perform a text search on the group's issues and look for all issues with "foobar" in their title or description along with other filters we can apply: [It takes about 8s to just perform the text search](https://gitlab.com/groups/gitlab-org/-/issues?scope=all&utf8=%E2%9C%93&state=opened&search=foobar) in this group.

Under the hoods, we rely on trigram indexes for text search. Simplified, there are two ways to do this:

1. Text search first: Use the global trigram index to find all issues matching "foobar" and then apply other filters
2. Other filters first: Apply the group filter and permission checks first to find issues in the group and perform an online text search on their text data.

Which of these approaches is more efficient depends on data distribution and each of the approaches becomes slow the more data we have.

#### Problem 1: Large trigram index

In approach 1 we use the global trigram index first. Finding relevant records with "foobar" already takes 2.8s today, even though the query is very low selectivity (it yields <2,000 records) and rather well suited for the trigram index.

The trigram index is global: There is only one GIN index available (per column). This index structure is already 19 GB in size as of today (for `issues.description`).

#### Problem 2: Many issues per group

In approach 2, we first find all issues in the group we have access to. This uses btree indexes as usual but overall this yields 135k issues. Now we can't use the trigram index anymore to perform the text search but instead have to read all text data into memory and perform a sequential online search. The more issues a group has (and the larger the text size), the longer this approach takes.

#### Table partitioning to the rescue

In this example, table partitioning breaks down the `issues` table into manageable chunks aka partitions: Let's break the table down into 128 partitions using hash partitioning on the top-level namespace. Each partition contains issue records for roughly 1/128 of the total issues. Each top-level namespace, in our example that's `gitlab-org`, has their issue data in exactly one partition.

How does this change the situation?

1. Each partition has their own trigram index and those are now much smaller (containing only roughly 1/128 of records).
2. The scope of our search example is per group: The query planner uses this information to directly navigate to the one relevant partition for our top-level namespace and thereby excludes scanning all others.

With the much smaller trigram index, we can perform the text search in much less time. An additional improvement for this particular problem is to use a [combined GIN index](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/33).

We analyzed the impact of partitioning for group-based issue search ([summary](issue-group-search-partitioning.html), [issue](https://gitlab.com/gitlab-org/gitlab/-/issues/201871)).

### The GitLab database schema: Partitioning keys

This is a simplified view of a part of GitLab's database schema: Largest tables on GitLab.com along with a few of their references. The color indicates how large the table roughly is: Deep red (> 200 GB), orange (> 100 GB), yellow (> 60 GB), blue (else). For detailed sizes please refer to the image at the top of the doc.

![gitlab-model-simplified](/images/engineering/infrastructure-platforms/data-access/database-framework/doc/gitlab-model-simplified.png)

*(Disclaimer: Highly simplified, WIP and likely not detailed enough)*

Unsurprisingly, most of the tables relate to a Project: User-specific data aside, a Project is referenced by most of the large tables shown here (directly or indirectly).

Moreover, a project is always part of the namespace hierarchy and as such there is always exactly one top-level namespace for a project.

As such, we can consider a project or a namespace as a partitioning key. While most of GitLab's features happen inside a project, there are types of searches that are scoped on a namespace. In our example above, the top-level namespace is the search scope. Hence, the top-level namespace is likely a good partitioning key in general.

#### Partitioning by top-level namespace

In order to partition a table by their top-level namespace, the table has to contain a reference to the top-level namespace (a `top_level_namespace_id` column). None of the existing tables have this for a good reason: The schema is normalized and the top-level namespace can be figured out through the hierarchy in `namespaces`.

Adding the top-level namespace reference to a table, e.g. `issues` is a form of denormalization. It is necessary to do this in order to partition the table by top-level namespace.

The downside of denormalization is that there may be situations where a mass-update is necessary. In our case, this happens when we move a project to a different top-level namespace. In this case, all the records with a reference to the top-level namespace for the project have to be updated. Without denormalization, we would just update a single reference.

#### Hash partitioning strategy

We analyzed how issues distribute across partitions using a hash-based partitioning strategy (by top-level namespace). This is how the number of issues distributes across a set of 128 partitions (find more graphs for [64](https://gitlab.com/abrandl/gitlab-issue-partitioning/-/blob/master/issues_with_64_partitions.png), [256](https://gitlab.com/abrandl/gitlab-issue-partitioning/-/blob/master/issues_with_256_partitions.png) and [512](https://gitlab.com/abrandl/gitlab-issue-partitioning/-/blob/master/issues_with_512_partitions.png) partitions). The red line indicates the desired optimal distribution (1/128 per partition).

![issues_with_128_partitions](/images/engineering/infrastructure-platforms/data-access/database-framework/doc/issues_with_128_partitions.png)

### Implementation roadmap

This section discusses several topics we already identified that have to be tackled along the way.

#### Support for advanced PostgreSQL features

The way we track the database schema needs to support advanced PostgreSQL features in order to implement partitioning. The currently used `schema.rb` does not support syntax for partitions, triggers and other advanced features we're likely going to need.

This means we're going to replace `schema.rb` with `structure.sql` and transition over to managing the database schema with SQL instead of the Rails abstraction for it.

Issue: [Use structure.sql instead of schema.rb](https://gitlab.com/gitlab-org/gitlab/issues/29465)

#### Handling foreign keys to partitioned tables

PostgreSQL 11 does not support foreign keys referencing partitioned tables. We need to find ways to remove foreign keys from a table and still retain what we use foreign keys for:

1. Referential integrity throughout the database
2. Cascading deletes

In order to support cascading deletes, a trigger-based solution seems usable and gives us the same functionality. We need to implement handling the trigger definitions nicely.

Without foreign keys, we need to make the application more robust to flaws in referential integrity. Plus, we should have ways of detecting and possibly also fixing inconsistent data.

Issues:

* [Referential integrity without foreign keys](https://gitlab.com/gitlab-org/gitlab/issues/201873)
* [Cascading deletes without foreign keys](https://gitlab.com/gitlab-org/gitlab/issues/201872)

#### Strategy to migrate an existing table into a partitioned table

In order to migrate an existing, large table into a partitioned table we have to have an online migration strategy available. It has to migrate a lot of data and copy it over into a partitioned table hierarchy. This strategy has to be transparent to the application, i.e. we can't have a downtime from this. It should happen in the background with minimal impact on the production system.

Issue: [Migration strategy for existing tables](https://gitlab.com/gitlab-org/gitlab/issues/202618)

#### Enhancing the schema to contain the partitioning key

Depending on the choice of partitioning key, we have to enhance the schema of relevant tables to contain the partitioning key. In our example above, we would add the reference to the top-level namespace to the `issues` table. As a consequence, we'll have to implement a background job to update this reference whenever a project is being transferred to another top-level namespace (which is deemed to be a rare event but it potentially affects a lot of records at once).

#### Enforcing the use of partitioning keys

In order to benefit from table partitioning, queries must be formed in a way that they always include the partitioning key. Oftentimes this is an artificial construct which doesn't change the semantics of the query. For example, a filter by `project_id` may semantically be enough and the additional filter on the partitioning key is redundant to that. However, it's important to include the partitioning key so that the query planner can exclude irrelevant partitions.

Often, we can derive the partition key from the URL already: Many queries that happen for requests inside the `gitlab-org` namespace likely should have the top-level namespace as a filter. We might consider using [activerecord-multi-tenant](https://github.com/citusdata/activerecord-multi-tenant) (by CitusData), which has an automatic approach to detect the partitioning key and make sure queries contain the appropriate filter by partitioning key for relevant models.

Issue: [Explore usage of activerecord-multi-tenant to enforce partitioning key in queries](https://gitlab.com/gitlab-org/gitlab/issues/207397)

Results:

1. [Implementation example using the gem](https://gitlab.com/gitlab-org/gitlab/-/commit/653752e94b905d2f6067bd5b5bc18f13c5550a46)
2. The gem also takes care of setting the partitioning key when creating records
3. For mass-updates of the partitioning key, we might need to implement a background job (see above)
4. We may want to add a check to make sure we're always adding the partitioning key to queries. Here is an [example](https://gitlab.com/gitlab-org/gitlab/-/commit/653752e94b905d2f6067bd5b5bc18f13c5550a46#072db6104653f6979bd52697fb25e48434b591d1_0_3) with parsing SQL (it may be possible to hook this into ActiveRecord at a higher level, too).

#### Type of partitioning and schema handling for partitions

There are different types of table partitioning available in PostgreSQL:

* RANGE/LIST
* HASH

For RANGE/LIST partitioning, partitions are created for an explicit range or list of values. With a growing dataset this means that an automatic way to create new partitions has to be implemented.

Hash-based partitioning instead allows us to create a fixed number of partitions to contain the full space. The drawback here is that refining the partitioning scheme to create more, smaller partitions is a bit more involved and splitting a partition into two smaller parts is possible but has to be implemented properly.

Hash-based partitioning is a static approach in context of partition creation and handling. As such, it is simpler to manage because we can simply create all partitions ahead of time and as part of the static database schema.

---

Author: [Andreas Brandl](https://gitlab.com/abrandl)
