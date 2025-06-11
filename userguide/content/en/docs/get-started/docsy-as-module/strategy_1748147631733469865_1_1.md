---
title: Database Strategy
---

## Database Strategy: Guidance for proposed database changes

GitLab is offered as a [Single Application](/handbook/product/categories/gitlab-the-product/single-application/) with a [Single data-store](/handbook/product/categories/gitlab-the-product/single-application/#single-data-store).  This handbook entry is meant as guidance for when you encounter a situation where you are considering changes or additions to our data-store architecture.  For information on tooling, migrations, debugging and best practices please read the [Database guides](https://docs.gitlab.com/ee/development/#database-guides) section in [GitLab Docs](https://docs.gitlab.com/).

### Requirement

When you propose any database additions, updates or deletions it is required that you have participated in a [Database Review](https://docs.gitlab.com/ee/development/database_review.html#database-review-guidelines) prior to deployment (best early in development).

### PostgreSQL

The GitLab web app uses [PostgreSQL](https://docs.gitlab.com/ee/development/architecture.html#postgresql) for our persistent database imformation.  We have dropped support for [MySQL](https://gitlab.com/gitlab-org/gitlab-foss/-/issues/52442) and will be requiring PosgreSQL 11 with the release of GitLab 13.0.

#### When to consider another data-store

Over time there have been proposals to use different types of data-stores (e.g. NoSQL). At this point we are not considering adding another data-store for our persistent data.  Please read [Single data-store](/handbook/product/categories/gitlab-the-product/single-application/#single-data-store).

#### Single Data-store

We are intentionally requiring that the data for GitLab lives in a single data-store, in this case that means a single database.  The term "database" can be taken many different ways.  Here is how we are using the following terms:

- [database](https://www.postgresql.org/docs/11/manage-ag-overview.html) - A database is a named collection of SQL objects ("database objects"). Generally, every database object (tables, functions, etc.) belongs to one and only one database.
- [database cluster](https://www.postgresql.org/docs/8.1/creating-cluster.html) -  A database cluster is a collection of databases that is managed by a single instance of a running database server.
- [schema](https://www.postgresql.org/docs/8.1/ddl-schemas.html) - A database contains one or more named schemas, which in turn contain tables. Schemas also contain other kinds of named objects, including data types, functions, and operators. The same object name can be used in different schemas without conflict; for example, both schema1 and myschema may contain tables named mytable. Unlike databases, schemas are not rigidly separated: a user may access objects in any of the schemas in the database he is connected to, if he has privileges to do so.

##### Why a single database?

- Our [company strategy](/handbook/company/strategy/) is built around the [advantages of a single application](/handbook/product/categories/gitlab-the-product/single-application/).
  - Sid describes the importance of our single database strategy and the [Flywheel with two turbos](/handbook/company/strategy/#flywheel-with-two-turbos) in [this video](https://youtu.be/TGulb4sGJ9g?t=877).
- Our current efforts around database scalability are focusing on database sharding as a solution.

##### The trouble with microservices

Often, moving to a separate service or microservice is seen as a solution to a scaling or performance problem within the GitLab application.  However, moving to a microservice based solution may simply be defering the problem while creating a more complex architecture.  The articles and quotes below discuss real world examples of the struggles with microservices.

- [To Microservices and Back Again - Why Segment Went Back to a Monolith](https://www.infoq.com/news/2020/04/microservices-back-again/)

>"If microservices are implemented incorrectly or used as a band-aid without addressing some of the root flaws in your system, you'll be unable to do new product development because you're drowning in the complexity."

- [Bad Reasons For Microservices](https://www.youtube.com/watch?v=V9tQXugskR8)

>Maintaining a bunch of loose microservices is not easier than maintaining a monolith. There might be an argument for moving from a distributed monolith to microservices, provided that the organizational problems that led to a distributed monolith have been addressed. A shift to microservices is likely to make things worse before it makes them better. If things are already bad, that's going to make life difficult.

### Process for proposing a separate database

The process for proposing a separate database has moved to the [required approvals](/handbook/engineering/development/required-approvals/) section of our handbook.
