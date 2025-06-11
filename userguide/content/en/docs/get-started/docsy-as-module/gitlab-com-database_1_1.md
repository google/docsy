---
aliases: /handbook/engineering/infrastructure/core-platform/data_stores/database/doc/gitlab-com-database.html
title: Working with the GitLab.com database for developers
---







## A developer's guide to working with the GitLab.com database

GitLab.com is powered by a large PostgreSQL database ("the database" in this doc) which is often used as a point of reference in terms of scale - after all, this is the largest installation of GitLab we have access to.

From a development perspective, it is often necessary to gather statistics and other insights from this database - for example to provide insights for query optimization during database review or when we need more insight into data distribution to inform a product or development decision.

This overview is aimed at developers wanting to access the database and also explains how to get this type of access in the first place.

### Types of access

There are a couple ways to directly access the database for developers:

#### Direct access to production

##### Direct database access to a production replica

This is the most straight forward type of access: You'll have access to a psql console to an actual replica of the database (which typically serves live traffic). The console will be read-only and a 15s statement timeout must be adhered to.

How to get access: File an [access-request](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/#individual-or-bulk-access-request) and ask for *production database console access* (role: `db-console`)
to receive permanent SSH access, or [use Teleport to request temporary access](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Database_Console_via_Teleport.md) (Recommended).
See below for setting up SSH access.

##### Access to the "archive" replica

In this case, you'll have access to a psql console to the "archive" replica. This is a replica of the database which does not serve live traffic and is prepared to be used in a rather "exploratory" fashion (suitable for rather analytical queries, too). The console access is read-only and a 15 minute statement timeout applies. You can verify this by going db console and issuing `show statement_timeout`  command.

How to get access: File an [access-request](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/#individual-or-bulk-access-request) and ask for *console access to the archive database in production* (role: `db-console-archive`). See below for setting up SSH access.

##### Rails console access

A Rails console can be used to access the database, too. Use with extreme care as this is typically a read-write console.

How to get access: File an [access-request](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/#individual-or-bulk-access-request) and ask for *Rails console access in production* (role: `rails-console`)
to receive permanent SSH access, or [use Teleport to request temporary access](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Rails_Console_via_Teleport.md) (Recommended).
See below for setting up SSH access.

##### Setup SSH configuration for direct access

In order to setup direct access, you will have to configure SSH to use the *bastion* instances as a proxy:

1. [Setup bastions to access production (gprd)](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/bastions/gprd-bastions.md#console-access)
2. [Setup bastions to access stating (gstg)](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/bastions/gstg-bastions.md#console-access)

This is an example configuration for a user named `joe` (replace this with your gitlab email user) to access psql and Rails consoles in `gprd`:

```text
# GCP production bastion host
Host lb-bastion.gprd.gitlab.com
        User                    joe

Host gprd-rails
        User                    joe-rails
        StrictHostKeyChecking   no
        HostName                console-01-sv-gprd.c.gitlab-production.internal
        ProxyCommand            ssh lb-bastion.gprd.gitlab.com -W %h:%p

Host gprd-psql
        User                    joe-db
        StrictHostKeyChecking   no
        HostName                console-01-sv-gprd.c.gitlab-production.internal
        ProxyCommand            ssh lb-bastion.gprd.gitlab.com -W %h:%p

Host gprd-psql-archive
        User                    joe-db-archive
        StrictHostKeyChecking   no
        HostName                console-01-sv-gprd.c.gitlab-production.internal
        ProxyCommand            ssh lb-bastion.gprd.gitlab.com -W %h:%p
```

With this setup, the user `joe` could use the following commands:

```sh
ssh gprd-rails        # opens a rails console
ssh gprd-psql         # opens a psql console
ssh gprd-psql-archive # opens a psql console on a replica
```

#### DatabaseLabs

##### Use postgres.ai to work with a thin clone of the database (includes direct psql access to the thin clone)

We have access to postgres.ai which gives us the ability to work with a thin clone of the database. This has the benefit of providing a fully isolated read-write database for a single user. Thin clones are inexpensive to create and can be used and destroyed as needed.

With the extended setup, you'll be able to use a psql console on a thin clone, too. This is the most flexible way of working with the database, as this even allows you to e.g. create new tables (e.g. for intermediate results) as needed.

#### Query plans and optimization

In order to evaluate query performance, we have the following tools available:

1. Retrieve query plans through [ChatOps on Slack](https://docs.gitlab.com/ee/development/database/understanding_explain_plans.html#chatops)
1. Use [`#database-lab` Slack channel to work with a thin clone of the database](https://docs.gitlab.com/ee/development/database/understanding_explain_plans.html#database-lab)
1. Use [postgres.ai](https://postgres.ai/) (currently under [evaluation](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/47)) to fully immerse into working with a thin clone to optimize queries

### Where do I get help with setting up access or any other questions?

Please reach out to `#database` on Slack and consider adding to this page afterwards.

### Resources and Tips

#### Process

Various Product and Engineering processes are available to advocate database improvements that may not fit anywhere in the feature development roadmaps.

1. Leverage the [Planning as a team](https://gitlab.com/gitlab-com/Product/-/issues/2185)
According to [this finding](https://gitlab.com/gitlab-org/gitlab/-/issues/326555#note_563868873), more than 50% of known query performance issues were identified long time ago. Leverage the `planning as a team` to prioritize these issues with Product. The process is being implemented by [Introducing Error Budgets to Stage Groups](/handbook/product/performance-indicators/#other-pi-pages).
1. Follow the intructions in [Prioritize technical decisions](/handbook/engineering/development/principles/#prioritizing-technical-decisions) when collaborating with Product in release planning, which also mirrored in the [Product handbook page](/handbook/product/product-processes/#prioritization).
1. Consider [Engineering Allocation](/handbook/engineering/#engineering-allocation) for tech-debt issues, which is also mirrored in the [Product handbook](/handbook/product/product-processes/#engineering-allocation).
1. Keep the [Architecture](/handbook/engineering/architecture/) process in mind when running into large scale fundamental design challenges.

#### Best practices

Common issues seen in the application codebase are N+1 queries, inappropriate use of CTEs, and read-only queries not leveraging read replicas.

1. Guidance on N+1 Queries
   1. [Query Recorder](https://docs.gitlab.com/ee/development/database/query_recorder.html)
   1. [Performance guidelines](https://docs.gitlab.com/ee/development/performance.html)
   1. [Merge request performance guidelines - Query counts](https://docs.gitlab.com/ee/development/merge_request_concepts/performance.html#query-counts)
   1. [Merge request performance guidelines - Cached queries](https://docs.gitlab.com/ee/development/merge_request_concepts/performance.html#cached-queries)
1. [Use CTEs wisely](https://docs.gitlab.com/ee/development/merge_request_concepts/performance.html#use-ctes-wisely)
1. [Use read replicas when possible](https://docs.gitlab.com/ee/development/merge_request_concepts/performance.html#use-read-replicas-when-possible)

#### Knowledge sharing

1. Video recording - [Techniques for researching inefficient DB queries](https://www.youtube.com/watch?v=cKQr9o2ttqA). Highly recommended!
1. [Using Elasticsearch with PostgreSQL slow logs](https://gitlab.com/gitlab-com/runbooks/-/merge_requests/3361) for troubleshooting.
1. [Slow queries chart](https://dashboards.gitlab.net/d/RZmbBr7mk/gitlab-triage?viewPanel=1352&orgId=1&refresh=1h&from=now-90d&to=now) to identify potential sub-optimal queries.

#### Tools

1. [Postgres.ai](https://docs.gitlab.com/ee/development/database/database_lab.html) for testing with production like data.
1. [Query plans and optimization](/handbook/engineering/infrastructure/core-platform/data_stores/database/doc/gitlab-com-database.html#query-plans-and-optimization).
