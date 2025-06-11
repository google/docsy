---
title: "Database"
controlled_document: true
---

## Database Reliability at GitLab

The group of Database Reliability Engineers (DBREs) are on the Reliability
Engineering teams that run GitLab.com. We care most about database
reliability aspects of the infrastructure and GitLab as a product.

We strive to approach database reliability from a data driven
perspective as much as we can. As such, we start by defining Service
Level Objectives below and document what service levels we currently aim
to maintain for GitLab.com.

## Database SLOs

We use [Service Level Objects](https://en.wikipedia.org/wiki/Service_level_objective) (SLOs) to reason about the performance and
reliability aspects of the database. We think of SLOs as "commitments by
the architects and operators that guide the design and operations of the
system to meet those commitments."[^1]

### Backup and Recovery

In backup and recovery, there are two SLOs:

| SLO           | Current level | Definition |
| ------------- |:-------------:| -----:|
| `DB-DR-TTR`  | 8 hours       | Maximum time to recovery from a full database backup in case of disaster|
| `DB-DR-RETENTION-MULTIREGIONAL`  | 7 days       | The number of days we keep backups for recovery purposes in [Multi-regional](https://cloud.google.com/storage/docs/storage-classes#standard) Storage class in GCS. |
| `DB-DR-RETENTION-COLDLINE`  | From 8 to 90 days       | The number of days we keep backups for recovery purposes in [Coldline](https://cloud.google.com/storage/docs/storage-classes#coldline) storage class in GCS. |

The backup strategy is to take a daily snapshot of the full database
(basebackup) and store this in Google Cloud Storage. Additionally, we capture the
write-ahead log data in GCS to be able to perform point-in-time recovery
(PITR) using one of the basebackups. [Read more on Disaster Recovery](/handbook/engineering/infrastructure/database/disaster_recovery/)

For `DB-DR-TTR` we need to consider worst-case scenarios with the
latest backup being 24 hours old. Hence recovery time includes the time
it takes to perform PITR to recover from archive to a certain point in
time (right before the disaster).

We are able to recover to any point in time within the last `DB-DR-RETENTION` days.

### High Availability

For [GitLab.com we maintain availability](/handbook/engineering/infrastructure/production/#gitlabcom) above 99.95%. For the PostgreSQL database,
we define the following SLOs:

| SLO            | Level       | Definition |
| -------------- |:-----------:| ----------:|
| `DB-HA-UPTIME` | 99.9%       | General database availability |
| `DB-HA-PERF`   | p99 < 200ms | 99th percentile of database queries runtime below this level. |
| `DB-HA-LOSS`   | 60s         | Maximum accepted data loss in face of a primary failure |

A `DB-HA-UPTIME` of 99.9% allows for roughly 45 minutes of downtime per month. Uptime means, the database cluster is available to serve
queries from the application while maintaining other database SLOs.

We allocate a downtime budget of 45 minutes per month for planned downtimes,
although we strive to keep downtime as low as possible. The downtime
budget can be used to introduce change to the system. If the budget is
used up (planned or unplanned), we stop introducing change and focus on
availability (similar to SRE [error budgets](https://landing.google.com/sre/book/chapters/embracing-risk.html)).

As for `DB-HA-PERF`, 99% of queries should finish below 200ms.

With `DB-HA-LOSS` we require an upper bound on replication lag. A write
on the primary is considered at risk as long as it has not been
replicated to a secondary (or to the PITR archive).

## Common Links

To make it easier to find your way around you can find a list of useful or important links below.

### Monitoring & Performance Related Tools

As a database specialist the following tools can be very helpful:

- [Postgres Checkup](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues?label_name%5B%5D=postgres-checkup):Detailed report about the status of the PostgreSQL database.
- [Private Grafana](https://dashboards.gitlab.net/): for both application and system level performance data.
- [Performance Bar](https://docs.gitlab.com/ee/administration/monitoring/performance/performance_bar.html): type `pb` in GitLab and a bar with performance metrics will show up at the top of the page. This tool is especially useful for viewing the queries executed and their timings.
- [Sherlock](https://docs.gitlab.com/ee/development/profiling.html#sherlock): a tool similar to the performance bar but meant for development environments. Sherlock is able to show backtraces and the output of `EXPLAIN ANALYZE` for executed queries. Enable by starting Rails with `env ENABLE_SHERLOCK=1 bundle exec rails s`.
- <https://explain.depesz.com/> for visualizing the output of `EXPLAIN ANALYZE`.

### Dashboards

The following (private) Grafana dashboard are important / useful for database specialists:

- [PostgreSQL Database Overview](https://dashboards.gitlab.net/d/000000144/postgresql-overview?orgId=1)
- [Patroni PostgreSQL HA cluster Overview](https://dashboards.gitlab.net/d/patroni-main/patroni3a-overview?orgId=1)
- [PgBouncer Database Proxy Overview](https://dashboards.gitlab.net/d/PwlB97Jmk/pgbouncer-overview?orgId=1)

### Documentation

Basically everything under <https://docs.gitlab.com/ee/development/#databases>, but the following guides in particular are important:

- [What requires downtime?](https://docs.gitlab.com/ee/update/with_downtime.html)
- [Adding database indexes](https://docs.gitlab.com/ee/development/database/adding_database_indexes.html)
- [Post Deployment Migrations](https://docs.gitlab.com/ee/development/database/post_deployment_migrations.html)
- [Background Migrations](https://docs.gitlab.com/ee/development/database/batched_background_migrations.html)
- [SQL Migration Style Guide](https://docs.gitlab.com/ee/development/migration_style_guide.html)
- [SQL Query Guidelines](https://docs.gitlab.com/ee/development/sql.html)
- [Infrastructure runbooks and documentation](https://gitlab.com/gitlab-com/runbooks#postgresql)

For various other development related guides refer to <https://docs.gitlab.com/ee/development/>.

[^1]: From "Database Reliability Engineering", O'Reilly Media, 2017
