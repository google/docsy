---
title: "Database Scalability Working Group"
description: "The charter of this working group is to produce the first iteration of a scalable database backend architecture for GitLab"
---

## Attributes

| Property        | Value           |
|-----------------|-----------------|
| Date Created    | March 15, 2021 |
| End Date        | July 18, 2022 |
| Slack           | [#wg_database-scalability](https://gitlab.slack.com/archives/C01NB475VDF) (only accessible from within the company) |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/17go_0DWgU5CZXKiXmlU_CUmWfen5typtFzKrD1qv13w/edit#heading=h.mty28tz7llip) (only accessible from within the company) |
| Issue Board     | [Sharding:Build Board](https://gitlab.com/groups/gitlab-org/-/boards/2594854?scope=all&utf8=%E2%9C%93&label_name[]=group%3A%3Asharding&label_name[]=sharding%3A%3Aactive)             |

### Exit Criteria

The charter of this working group is to produce a set of blueprints, design and initial implementation for scaling the database backend storage. These exit criteria will set us on a path to achieve the following high-level goals:

- Accomodate 10M daily-active users (DAU) on GitLab.com
- Do not allow a problem with any given data store to affect all users
- Minimize or eliminate complexity for our self-managed use-case

These entail access, separation, synchronization, and lifecycle management considerations for various use-cases (see [Scaling patterns](#scaling-patterns) below).

| #  | Start Date | Completed Date | Criteria |
| -- | ------     | ------         | ------   |
| 1  | 2021-03-25 | 2021-06-02     | Blueprints for database scaling patterns ([read-mostly](https://gitlab.com/gitlab-org/gitlab/-/issues/326037), [time-decay](https://gitlab.com/gitlab-org/gitlab/-/issues/326035), [sharding](https://gitlab.com/gitlab-org/gitlab/-/issues/326222))|
| 2  | 2021-04-21 | 2021-06-03     | [Horizontal sharding evaluation and proof of concept](https://gitlab.com/groups/gitlab-org/-/epics/5838) |
| 3  | 2021-04-26 | 2021-06-10     | [Decomposition (vertical sharding) evaluation and proof of concept](https://gitlab.com/groups/gitlab-org/-/epics/5883) |
| 4  | 2021-06-11 | 2022-07-02     | [Rollout decomposed CI database on gitlab.com](https://gitlab.com/groups/gitlab-org/-/epics/6168) |
| 5  | 2022-07-05 | 2022-07-18     | Working group closing tasks, communications, cleanup |

### Closing Summary

We successfully completed the final exit criteria, [decomposing the gitlab.com database into main and CI](https://gitlab.com/groups/gitlab-org/-/epics/6168), on 2022-07-02.

After a couple of weeks of monitoring, the site appears stable and there are significant headroom improvements and reductions in saturation. We will continue to track and report on decomposition improvements in the issue [CI Decomposition Performance Summary](https://gitlab.com/gl-retrospectives/sharding-group/-/issues/18).

Although this working group is closing, our work to improve GitLab's database and overall application scalability is not finished. Some of our upcoming priorities that will follow up on the work done in this group include:

- [Database Partitioning](https://gitlab.com/groups/gitlab-org/-/epics/2023)
- [CI Decomposition Follow-up](https://gitlab.com/groups/gitlab-org/-/epics/6718) and [Decomposition support for self-managed customers](https://gitlab.com/groups/gitlab-org/-/epics/7509)
- [PoCs and first iterations for GitLab Pods](https://gitlab.com/groups/gitlab-org/-/epics/7582)

### Glossary

| Preferred Term | What Do We Mean | Terms Not To Use | Examples |
|----------------|-----------------|------------------|----------|
| Case | An instance under a scaling pattern | | ci_builds, web_hooks_logs |
| Cluster | A database cluster is a collection of interconnected database instances that replicate data. | | The PostgreSQL cluster of GitLab.com (managed by Patroni) that hosts the main logical database and consists of the primary database instance along with its read-only replicas. |
| Decomposition | Feature-owned database tables are on many logical databases on multiple database servers. The application manages various operations (ID generation, rebalancing etc.) | Y-Axis, Vertical Sharding | All CI tables in a separate logical database. [Design illustration](https://gitlab.com/groups/gitlab-org/-/epics/5883#design-overview) |
| Instance| A database instance is comprised of related processes running in the database server. Each instance runs its own set of database processes. | Physical Database | |
| Logical database  | A logical database groups database objects logically, like schemas and tables. It is available within a database instance and independent of other logical databases. | Database | GitLab's rails database.  |
| Node | Equivalent to a Database Server in the context of this working group. | Physical Database | |
| Replication    | Replication of data with no bias. | X-Axis, Cloning | What we do with our database clusters today.|
| Scaling Pattern | A general solution based on data taxonomy that enables scaling for several cases | Split Pattern | Read-Mostly, Time-Decay, Entity/Service |
| Schema |A database schema is a namespace that contains named database objects such as tables, views, indexes, data types, functions, stored procedures and operators.| | |
| Server | A database server is a physical or virtual system running an operating system that is running one or more database instances. | Physical Database | |
| Sharding | Separation of data by customer or requestor bias, or within a resource without bias towards affinity. Sharding via a sharding key, for example top-level namespace, where data is separated into many logical databases on multiple database servers. The application manages various operations (ID generation, rebalancing etc.)| Z-Axis, horizontal sharding | Each top-level namespace is located in its own logical database. [Design illustration](https://gitlab.com/groups/gitlab-org/-/epics/5838#design-overview) |
| Table | A database table is a collection of tuples having a common data structure (the same number of attributes, in the same order, having the same name and type per position) ([source](https://www.postgresql.org/docs/13/glossary.html#GLOSSARY-TABLE)) | | |
| Table Partitioning | A table that contains a part of the data of a partitioned table (horizontal slice). ([source](https://www.postgresql.org/docs/12/ddl-partitioning.html))| Partition | |
| Track | A sub-group within the WG that tackles one scaling pattern. | | |

![Database Terms](/images/company/working-groups/database-scalability/DB-terminology.png)

### Overview

Our current architecture relies, almost exclusively and by design, on a [single database](/handbook/engineering/infrastructure-platforms/data-access/database-framework/doc/strategy/#single-data-store) to be the sole and absolute manager of data in terms of storage, consistency, and query results collation. Strictly speaking, we use a single **logical** database that is implemented across several **physical** [replicas](/handbook/engineering/architecture/practice/scalability/#example-postgres-current-state) to handle load demands on the database backend (with the single pseudo-exception of storing diffs on object storage).  Regular analysis of database load, however, is showing that this approach is unsustainable, as the primary RW database server is experiencing high peaks that are approaching the limits of vertical scalability.

We explored [sharding](/handbook/company/working-groups/sharding/) last year and scoped it to the database layer. We concluded that while there are solutions available in the market, they did not fit our requirements, both in financial and product fit terms, as they would have forced us into a solution that was difficult (if not impossible) to ship as part of the product.

We are now kicking off a new iteration on this problem, where the scope is **expanded** from the database layer into the application itself, as we recognize this problem cannot be solved to meet our needs and requirements if we limit ourselves to the database: we must consider careful changes in the application to make it a reality.

#### Data management as a discipline

Deferring most, if not all, data management responsibities to the database has enabled us to offload decisions and rely on PostgreSQL's excellent capabilities to cope with application demands. While we have run into a few scalability limits (which were addressed through [`infradev`](/handbook/engineering/workflow/#infradev)), the database has, for the most part, held its ground, aided by copious amounts of hardware. This has provided specific fixes to very specific problems, and has afforded us development speed but blindsided us to long-term issues as the database grows. Spot fixes will not be sufficient to sustain growth on GitLab.com. This is now reflected in significant technical debt issues such as [`ci_builds`](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/52203), where the current schema and usage is making our ability to scale it difficult. Thus, we will need to take a more strategic view to provide a long-term, comprehensive solution, and adopt **data management as a full-fledged discipline**.

Data management as a discipline entains looking beyond a given schema definition to meet immediate application needs. We must achieve a long-term understanding of how the scheme will behave at scale (both in terms of performance and usability), whether we are asking too much of a given schema definition and refactoring is in order, growth and limitations, appropriate observabilily against each and every table, queries running against them, and  predictions on their scalability limitations (for instance, PK growth).

There will be areas of the database where discipline and scalability will overlap. In general, we should tackle discipline first and scalability later.

#### Trade-offs

As we look at scaling the database backend, two primary trade-offs will dominate our decisions:

- Latency: Currently, we rely on synchonicity and available capacity to achieve acceptable levels of latency, which mostly happens . We will have to pay detailed attention to latency expectations and manage them accordingly.
- Complexity: scaling the database backend will inherently introduce additional complexity, which we must manage carefully.

Additionally, we will need to evolve and mature our data migration strategies. Over time, it will be difficult to perform migrations, even if these are carried in the background. Some of them will need to become part of the application as live, in-app migrations (for example, migrating a table into a new schema may need to happen opportunistically: when a record is read, a lookup takes place in the new table; failing that, the lookup happens in the old table and the result is both returned to the user and migrated into a new table).

### Functional decomposition split

We are at the stage of having to embrace functional decomposition by separating data by meaning, function or usage, but we must do so in ways that enable the application to continue to view the database backends as a single entity. This entails the minimization of introducing new database engines into the stack while taking on some of the data management responsibilities.

### Data access layer

We recognize the advantages of a [single application](/handbook/product/categories/gitlab-the-product/single-application/#single-application) and wish to maintain the view of a [single data store](/handbook/product/categories/gitlab-the-product/single-application/#single-data-store) as far down the stack as possible. It is imperative we maintain a high-degree of flexibility and low-resistance for developers, which translates into a cohesive experience for administrators and users. To that end, we will need to build and introduce a data access layer that the rest of the application can leverage to access backend data stores (which is not a new concept for GitLab, as the success of [Gitaly](https://gitlab.com/gitlab-org/gitaly) clearly shows).

As we look at scaling the database backend, a *global* reliance on the database to be the sole executor of data management capabilities is no longer possible. In essence, the scope of responsibility is now more *localized*, and the application must accept some of these responsibilities. These cannot be implemented in an ad-hoc fashion, and should be centralized in a data access layer that, on the one hand, understands the various backends supporting data storage, and on the front-end, can service complex queries and provide the necessary caching capabilities to address the latencies that will be introduced by trying to scale the database horizontally, all while hiding the backend details from the rest of the application.

As the database backend is decomposed through the use of the tentatively proposed scaling patterns, the need to implement a data access layer becomes apparent. We can no longer rely on the database to perform all data composition duties. The application itself (or a service on its behalf) must take on those responsibilities.

### Scaling Patterns

We must ensure we approach database scalability both systematically and holistically. We should not enable disjoined approaches to scaling the database. We therefore propose deciding on a small number of patterns to break down the problem and provide solutions that can apply to a variety of tables, keeping the solution space small, manageable, and with a certain degree of flexibility. Once we understand the solutions applicable to these patterns, we can think holistically about the data access layer, enabling us to apply iteration to its development while minimizing disruption to the rest of the application.

#### Read-Mostly Data

There are small pockets of data that are frequently read but seldomly written, and rarely participate in complex queries (such as the `license` table). They should be offloaded to more appropriate backends that are better suited for high-frequency reads, minimally for caching purposes (since the only backend we consider to be durable is the database). While the queries are simple and the amount of data is small, these queries do contribute a significant amount of context switches in the database.

For details, see the [blueprint]({{<ref "read-mostly" >}}).

#### Time-Decay Data

Some datasets are subject to strong time-decay effects, in which recent data is accessed far more frequently, or is more valuable, than older data. This effect is usually tied to product and/or application semantics, and we can potentially take advantage of this pattern.

We should consider some of the following patterns:

1. Partitioning based on time
1. Deleting old data which is no longer valuable
1. Shifting data to object storage

These patterns can also be used in combination. For example, partition based on time and drop partitions older than X months.

For details, see the [blueprint](/handbook/company/working-groups/database-scalability/time-decay/).

#### Entity/Service

A popular database scalability methodology entails decomposing concrete entities (e.g., users) into separate data stores. This approach is typically associated with *microservices*, and while at times it may be useful to encapsulate an *entity* behind a *service*, this is not a strict requirement, especially within the context of our application (even though, as mentioned earlier, we have already done this with [Gitaly](https://gitlab.com/gitlab-org/gitaly)).

This approach shifts consistency concerns to the application, as the database runtime cannot possibly track external dependencies. This strategy works particularly well when a portion of the column data can be streamlined and kept on the "main" database while offloading the rest of the metadata to a separate backend.

#### Sharding

One of the most widely used methodolgies to database scalability is [**sharding**](https://en.wikipedia.org/wiki/Shard_(database_architecture)). It is also one of the hardest to implement, as sharding shifts logical data consistency and query resolution demands into the application, significantly elevating the relevance of the [CAP theorem](https://en.wikipedia.org/wiki/CAP_theorem) in our design choices. CAP effects today are negligible: there is a replication delay, but so small it can be, and is, ignored. While these are not trivial problems to solve, they **are** solvable.

### Asynchronicity and CAP

As we dive into the relevance of the CAP theorem, we should also consider it outside the context of sharding. This is a point @andrewn crystalized in a recent conversation where we discussed the topic of database vertically scalability. In this context, we should evaluate the need for full transactional synchronicity, and shift, where possible, to asynchronous mode.

### The importance of nomenclature

It is important we settle on specific nomenclature. Currently, there is a fair amount of discussion on *sharding*, and while it is a part of this equation, it isn't the *whole* equation. Thus, let's make sure we talk about database scalability, y-axis split, etc appropriately.

### Plan

1. Kick-off working group: handbook, agenda, meeting
1. Determine authoritative list of scaling patterns and determine a path for sharding to comprise the first iteration
   1. A blueprint per scaling pattern should be produced by an assigned DRI to:
      1. Describe the scaling pattern
      1. Applicable use cases in the database
      1. Analysis and evaluation of current use cases, their effects on the database
      1. A brief overview of the design
   1. A blueprint for the path of how to shard the database
      1. Describe the goals of sharding
      1. Determine the sharding key
      1. Articulate required application and operation changes
1. Based on these scaling patterns, a blueprint about the Data Access Layer and caching considerations
1. First iteration implementation plan
   1. Must include a plan to measure effects on both the database and the application
   1. Must include validation (testing) plan
   1. Must complete Proof of Concepts (PoC) of sharding, determine a viable path, and produce building blocks from the PoC

### Work Streams and DRI

#### Decompose GitLab's database to improve scalability

1. Epic/Issue: [https://gitlab.com/groups/gitlab-org/-/epics/6168](https://gitlab.com/groups/gitlab-org/-/epics/6168)
1. DRI: Nick Nguyen

#### CI/CD Data Model

1. Epic/Issue: [https://gitlab.com/gitlab-org/architecture/tasks/-/issues/5](https://gitlab.com/gitlab-org/architecture/tasks/-/issues/5)
1. DRI: Grzegorz Bizon
1. Blueprint: [https://gitlab.com/gitlab-org/gitlab/-/merge_requests/52203](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/52203)

## Roles and Responsibilities

| Working Group Role                       | Person                          | Title                                    |
|------------------------------------------|---------------------------------|------------------------------------------|
| Executive Stakeholder                    | Eric Johnson                    | Chief Technology Officer |
| Functional Lead                          | Kamil Trzciński                 | Distinguished Engineer, Ops and Enablement (Development) |
| Functional Lead                          | Jose Finotto                    | Staff Database Reliability Engineer (Infrastructure) |
| Facilitator/DRI                          | Nick Nguyen                     | Sr. Engineering Manager, Datastore |
| DRI - Ops Section                        | Sam Goldstein                   | Director of Engineering, Ops |
| DRI - Infrastructure                     | Steve Loyd                      | VP of Infrastructure |
| Member                                   | Gerardo "Gerir" Lopez-Fernandez | Engineering Fellow, Infrastructure |
| Functional Lead                          | Fabian Zimmer                   | Group Product Manager, Enablement |
| Member                                   | Stan Hu                         | Engineering Fellow |
| Member                                   | Andreas Brandl                  | Staff Backend Engineer, Database |
| Member/CICD Data Model DRI               | Grzegorz Bizon                  | Staff Backend Engineer (Time-decay data `ci_builds` ) |
| Member                                   | Christopher Lefelhocz           | Cleaner |
| Member                                   | Chun Du                         | Director of Engineering, Enablement |
| Member                                   | Adam Hegyi                      | Senior Backend Engineer, Manage |
| Member                                   | Tanya Pazitny                   | Quality Engineering Manager, Enablement & Secure |
| Member                                   | Nick Westbury                   | Senior Software Engineer in Test, Geo |
| Member                                   | Nailia Iskhakova                | Senior Software Engineer in Test, Distribution |
| Member                                   | Grant Young                     | Staff Software Engineer in Test, Memory |
