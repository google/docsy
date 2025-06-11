---
title: Database Engineering
---

This page is dedicated to database application engineering and provides an entry-point for resources on this topic.

Also see [Database Team](/handbook/engineering/infrastructure-platforms/data-access/database-framework/) in Enablement.

## GitLab development

Please refer to the [development documentation for database guidelines](https://docs.gitlab.com/ee/development/#database-guides).

### Database Roles at GitLab

We have two primary job roles that are focused on the database aspect:

1. [Backend Engineer, Database](/job-families/engineering/backend-engineer/) - in Development
2. [Database Reliability Engineer](/job-families/engineering/infrastructure/database-reliability-engineer/) - in Infrastructure

The Backend Engineer, Database role is a software engineering role concentrated on application-side improvements and foundational database work in the GitLab codebase.

The Database Reliability Engineer is an operational role targeting and running the database infrastructure for GitLab.com from within the Reliability Engineering teams.

#### Database Maintainer

For the [GitLab codebase](https://gitlab.com/gitlab-org/gitlab), Database Maintainers contribute to the [code review process](https://docs.gitlab.com/ee/development/code_review.html) by reviewing database-related changes and applying [database review guidelines](https://docs.gitlab.com/ee/development/database_review.html). They typically engage into conversations about database queries and their performance, database schema design and database migrations.

The Database Maintainer role:

* Is an additional role, typically for Backend Engineers.
* Follows the same definition as any other [GitLab maintainer](/handbook/engineering/workflow/code-review/#maintainer).
* It does not come with operational responsibility for GitLab.com and its database infrastructure. This responsibility belongs to the [Database Reliability Engineer](/job-families/engineering/infrastructure/database-reliability-engineer/).
* It is not expected to participate in incident management issues.
* Adheres to the [review turnaround time](https://docs.gitlab.com/ee/development/code_review.html#review-turnaround-time) of 2 working days.

If you're interested in participating in database reviews, please start by reviewing [the Database maintainer process](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/sites/handbook/source/handbook/engineering/workflow/code-review/index.md#project-maintainer-process-for-gitlab-database) which contains all the resources for a reviewer.

## Recommended links and reference materials

### GitLab resources

* Database Office Hours are bi-weekly and can be found on the [GitLab Team Meetings Calendar](/handbook/tools-and-tips/#gitlab-team-meetings-calendar)
* Database Office Hours playlist on GitLab Unfiltered under the [Database Office Hours Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0Kp-kqXeiF7fF7cFYaKtdqXM)

### Books

*(In no particular order.)*

* I. Ahmed, G. Smith et al: "[PostgreSQL 10 High Performance: Expert techniques for query optimization, high availability, and efficient database maintenance.](https://www.amazon.com/dp/1788474481)" (2018)
* Hans-Jürgen Schönig: "[Mastering PostgreSQL 11](https://www.amazon.com/Mastering-PostgreSQL-techniques-fault-tolerant-applications/dp/1789537819)" (2018)
* Markus Winand: "[SQL Performance Explained](https://sql-performance-explained.com/)"
* Dimitri Fontaine: "[The Art of PostgreSQL](https://theartofpostgresql.com/)" - [Virtual training is available for GitLab team members.](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/23)
* Alex Petrov: "[Database Internals](https://www.databass.dev/)"

### Other resources

* [Official PostgreSQL mailinglists](https://www.postgresql.org/list/), particularly `pgsql-general`
* [Postgres Weekly](https://postgresweekly.com)
* [Planet PostgreSQL](https://planet.postgresql.org)
* [SQL Indexing and Tuning e-Book](https://use-the-index-luke.com/) (also known as "Use The Index Luke")
* Weekly show on [Scaling PostgreSQL](https://www.scalingpostgres.com/)
* Detailed documentation of the operations and fields in [PostgreSQL EXPLAIN query plans](https://www.pgmustard.com/docs/explain)
* Weekly podcast about all things PostgreSQL [postgres.fm](https://postgres.fm)
