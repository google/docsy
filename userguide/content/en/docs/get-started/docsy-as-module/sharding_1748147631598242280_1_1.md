---
title: "Sharding Working Group"
description: "The initial focus of this Sharding working group was to increase the scalability of our database with a long-term goal of 100x scalability."
---

## Attributes

| Property        | Value           |
|-----------------|-----------------|
| Date Created    | February 11, 2020 |
| End Date | June 22, 2020 |
| Slack           | [#wg_database-sharding](https://gitlab.slack.com/archives/CTNSZFHEZ) (only accessible from within the company) |
| Google Doc      | [Sharding Working Group Agenda](https://drive.google.com/drive/search?q=Sharding%20Working%20group) (only accessible from within the company) |
| Recordings | [Sharding Working Group Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KoF37DSMO2sNEaP9JH3jEip) |

## Outcome - Closed

We have decided to close this Sharding focused working group and will open a Scaling Working Group with a different focus.  The initial focus of this Sharding working group was to increase the scalability of our database with a long-term goal of 100x scalability.  At the onset of this group, it was theorized that we would hit a database scalability wall within 6-12 months.  Subsequent analysis and incremental scalbility efforts have indicated that we have significantly more scaling headroom.  Based on the analysis we have a high degree of confidence that the current architecture is in good shape to handle our needs for the next 12 months: [Database Capacity and Saturation Analysis (Iteration 1)](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/10340)  This analysis will continue on a monthly basis.  We have also identified areas of incremental database scalability that has been prioritzed by the database team: [Reduce total size and growth of GitLab.com's PostgreSQL database](https://gitlab.com/groups/gitlab-com/-/epics/374).  Between the ongoing analysis and incremental database improvements we have greatly reduced the urgency of database scalability.

Additionally, we have come to the consensus that sharding is not the desired approach for our long term scalability needs.  This decision was informed through investigation, proofs of concept, research, interviews and various implementation proposals.  Here's a brief list of items that helped to inform our decision to close this working group:

- [Introducing PostgreSQL table partitioning to GitLab's database](/handbook/engineering/infrastructure-platforms/data-access/database-framework/doc/partitioning/)
- [Table partitioning: Issue group search as an example](/handbook/engineering/infrastructure-platforms/data-access/database-framework/doc/issue-group-search-partitioning/)
- [Sharding with CitusDB](/handbook/engineering/infrastructure-platforms/data-access/database-framework/doc/citus/)
- [Postgres: Sharding with foreign data wrappers and partitioning](/handbook/engineering/infrastructure-platforms/data-access/database-framework/doc/fdw-sharding/)
- [Sharding GitLab by root namespace](/handbook/engineering/infrastructure-platforms/data-access/database-framework/doc/root-namespace-sharding/)
- [Database Sharding Proposal: Sharding by Namespace](https://drive.google.com/drive/search?q=sharding%20by%20namespace)
- [An Alternateive Database Sharding Proposal: Tenant Sharding](https://drive.google.com/drive/search?q=Tenant%20sharding%20by%20namespace)

The core members of this working group will continue on with the Scaling Working Group to determine our long term scaling strategy and implementation. The rest of this working group page will remain for reference purposes.

---

## Business Goals

A scalability approach that will give us 100x headroom over what we have now on GitLab.com.  Additionally, the ability to isolate customer data is an influencing factor on the design and implementation.

### Background

At the onset of this working group, anecdotal information indicated that we were going to "hit a wall" on scaling our database to support our projected customer growth.  Early estimates indicated us hitting a scaling wall anywhere from 6 - 12 months down the road.  This estimate has since been revised to a rolling 12 month window due to [Database Capacity and Saturation Analysis (Iteration 1)](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/10340).  Database sharding was proposed as a solution to improve our scalability while simultaneously improving performance.  We have since expanded our discussions from solely focusing on database sharding.  Any solution, even if using database sharding technology, will require signifcant application changes as well.

The goal for customer isolation serves multiple purposes.  Isolation of customer data would likely include distributing data across multiple servers.  This level of distribution would improve availability by removing the single point of failure of our single database architecture.  Additionally, we hearing more requests from customers to provide a solution that better separates customer data.

### Areas of Investigation

In support of our business goals of scalability and customer isolation we've identified the following areas of investigation.

#### Namespace Sharding

Details can be found in the [Postgres Sharding (&1854)](https://gitlab.com/groups/gitlab-org/-/epics/1854) epic.  This area of investigation is focuses on sharding at the top-level namespace.  The initial investigations were database-centric, focusing on sharding the tables. Our investigations have indicated the following:

- Several application changes would need to happen in coordination with the database changes in order for features to continue to function
  - [Identify potential application changes needed to support sharding](https://gitlab.com/gitlab-org/gitlab/-/issues/207273)
- Many tables do not easily lend themselves to namespace sharding
  - [Compatible and conflicting features for namespace sharding](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/50)

### Tenant Sharding

A [proposal](https://drive.google.com/drive/search?q=tenant%20sharding) titled *Tenant Sharding* was recently introduced.  Instead of sharding by the namespace, we introduce a higher-level entity, the tenant. By introducing the tenant entity, we turn GitLab.com into a multi-tenant SAAS platform, in the model of SAAS multi-tenant applications. Well known examples include Slack, Pagerduty, Datadog, etc. Each of these examples offers their users a scoped, isolated tenancy.

### Incremental Scalability Improvements

In parallel with the sharding investigation, the database team continues to look for areas of incremental database scalability improvements. Those efforts are being tracked under these issues/epics:

- [Reduce total size and growth of GitLab.com's PostgreSQL database](https://gitlab.com/groups/gitlab-com/-/epics/374)
- [Workload analysis on GitLab.com - first iteration](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/75)

### Database Partitioning Implementations

Partitioning is an important subject to cover separate from sharding. If we ultimately decide that database sharding is the chosen solution to achieve our business objectives, then database partitioning is the foundation upon which database sharding is built in PostgreSQL. Even if we don't use it for sharding, partitioning directly improves query performance and is therefore a great tool to use on its own. Our first iteration of database partitioning will be implemented on [audit events](https://gitlab.com/groups/gitlab-org/-/epics/3206). We expect that the implementation of paritioning will result in performance improvements and tooling implementation (e.g. migrations) for subsequent partitioning and sharding implementations.

### Investigation Summary

The different sharding approaches, Namespace vs. Tenant, are being evaluated.  They are competing approaches but each have the same goal of achieving our business goals.  We are still working through the potential first iteration and implementation details of these approaches. In both cases we will need to identify and quantify the changes required at the database and application level.

While we continue to investigate Namespace vs. Tenant sharding, we can continue with the Incremental Scalability Improvements and Database Partitioning Implementation and realize immediate performance and scalability improvements.

## Exit Criteria

- [x] Infra: [PostgreSQL 11 deployed on GitLab.com](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/106) - April
  - [x] Distribution: [Add support for PostgreSQL 11](https://gitlab.com/groups/gitlab-org/-/epics/2414) (13.0)
- Deploy MVC partition (Dependent on PG11 Deployment)
  - Define partition key (may be different than [tenancy model](https://gitlab.com/gitlab-org/gitlab/-/issues/196224) for MVC)
  - [x] [Partitioning spike: Investigate impact on search when partitionining issues](https://gitlab.com/gitlab-org/gitlab/-/issues/201871)
  - Implement partitioning MVC [Partitioning: Design and implement partitioning strategy for Audit Events](https://gitlab.com/groups/gitlab-org/-/epics/3206)
  - Document process to enable backend teams to implement their own partitioning solution going forward
  - Measure results
- Investigation
  - [x] [Explore CitusDB as a sharding solution](https://gitlab.com/gitlab-org/gitlab/issues/207833)
  - [x] Document impact of [Sharding GitLab by root namespace](/handbook/engineering/infrastructure-platforms/data-access/database-framework/doc/root-namespace-sharding/#data-access-pattern)
    - Identify application changes required by namespace sharding
  - Review Tenant Sharding approach
    - Identify application changes required by namespace sharding
- Implement sharding strategy
  - Implement and Demonstrate POCs
  - Gather feedback and metrics from POCs
  - Roll out sharding implementation

## Roles and Responsibilities

| Working Group Role                       | Person                          | Title                                    |
|------------------------------------------|---------------------------------|------------------------------------------|
| Executive Stakeholder                    | Christopher Lefelhocz           | VP of Development           |
| Facilitator                              | Craig Gomes                     | Engineering Manager, Database            |
| DRI for Sharding Working Group           | Craig Gomes                     | Engineering Manager, Database            |
| Functional Lead                          | Nailia Iskhakova                | Software Engineer in Test, Database      |
| Functional Lead                          | Josh Lambert                    | Group Manager, Product Management, Enablement  |
| Functional Lead                          | Gerardo "Gerir" Lopez-Fernandez | Engineering Fellow, Infrastructure       |
| Functional Lead                          | Stan Hu                         | Engineering Fellow, Development          |
| Functional Lead                          | Andreas Brandl                  | Staff Backend Engineer, Database         |
| Member                                   | Chun Du                         | Director of Engineering, Enablement      |
| Member                                   | Pat Bair                        | Senior Backend Engineer, Database        |
| Member                                   | Tanya Pazitny                   | Quality Engineering Manager, Enablement  |
| Member                                   | Mek Stittri                     | Director of Quality Engineering          |

## Meeting Recap

The agenda doc can be found in our Google Drive when searching for "Sharding Working Group Agenda"

- 2020-02-10 - First meeting.  Validate attendees, priorities and timing of meetings
  - Blocker identified - We can't ship any changes until PG11 is shipped
  - Blocker identified - We can't use declarativie partioning until completion of [Use structure.sql instead of schema.rb](https://gitlab.com/gitlab-org/gitlab/-/issues/29465)
  - Limiting factor - Database team only consists of Andreas plus Pat who joined 2 weeks prior
- 2020-02-19
  - PG11 testing on reference architecture initiated
  - Capacity planning started to determine head room of current architecture
  - Clarity on expectations discussed - performance and scalability
  - Issue created to investigate issues where sharding would have helped
- 2020-02-24
  - Partitioning Issue [Spike](https://gitlab.com/gitlab-org/gitlab/issues/201871)
  - Handbook entry published [On table partitioning](/handbook/engineering/infrastructure-platforms/data-access/database-framework/doc/partitioning/)
  - PG11 Nightly pipeline for [gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab/issues/200036#note_291786476)
  - PG11 10k Reference Architecture [test](https://gitlab.com/gitlab-org/quality/team-tasks/issues/389#note_292242462)
- 2020-03-02
  - Exploration of CitusDB [started](https://gitlab.com/gitlab-org/gitlab/issues/207833)
- 2020-03-09
  - Incident Review [feedback](https://gitlab.com/gitlab-org/gitlab/issues/207327#breakdown-by-priority-and-severity)
  - Handbook entry update to explicitly set [priorities](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/42496/diffs) for sharding
  - Handbook entry [Introducing PostgreSQL table partitioning to GitLab's database](/handbook/engineering/infrastructure-platforms/data-access/database-framework/doc/partitioning/)
- 2020-03-16
  - Partitioning spike [complete](https://gitlab.com/gitlab-org/gitlab/-/issues/201871)
  - Run GDK against a [Citus Installation](https://gitlab.com/gitlab-org/gitlab/-/issues/207833#note_302891589)
- 2020-03-23
  - [Identify MVC Tenancy Model for Partitioning](https://gitlab.com/gitlab-org/gitlab/-/issues/196224#note_307785195)
  - Unblocked from using PG11 Features when it is available with completion of [Use structure.sql instead of schema.rb](https://gitlab.com/gitlab-org/gitlab/-/issues/29465)
  - [Partitioning: Investigate increase in planning time (with PG11 and PG12)](https://gitlab.com/gitlab-org/gitlab/-/issues/209800)
  - Yannis Roussos joins Database team
- 2020-03-30
  - Set up Citus [Cluster](https://gitlab.com/gitlab-org/gitlab/-/issues/210554) for experimentation
- 2020-04-06
  - Discussions with Legal regarding Citus Community AGPL licensing
  - Discussions with Citus to discuss Enterprise Licensing model
  - Published results for [Partitioning: Implement cascading deletes without foreign keys](https://gitlab.com/gitlab-org/gitlab/-/issues/201872#note_317474157)
  - Blocker Identified - Test data for Citus Cluster is a concern
- 2020-04-13
  - Follow up meeting with Citus to discuss licensing model and pricing negotiations
  - Data collection on table sizes to better understand impact of performance and migrations
- 2020-04-20
  - Determined that Citus is a non-starter for community edition due to AGPL and Enterprise due to licensing costs
  - Service Extraction discussions
- 2020-04-27
  - Sharding Brainstorming discussions continue
  - [Partitioning/sharding and isolating access patterns](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/50)
- 2020-05-04
  - [Postgres sharding with partitioning and FDW](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/53)
  - [Part 1 - partitioning + FDW](https://www.youtube.com/watch?v=MiZFtM84x44)
  - [Part 2 - Schema migrations](https://www.youtube.com/watch?v=nt4Khi9Gr3o)
  - [Part 3 - Reference tables with logical replication](https://www.youtube.com/watch?v=ztQtNmSYmEo)
  - MR [WIP / experimental: Postgres partitions + FDW](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/30715)
- 2020-05-11
  - PG11 Shipped to production - we are now unblocked from being able to push MRs to production
  - Focus on [Audit Events](https://gitlab.com/groups/gitlab-org/-/epics/3206) for partitioning
  - [Partitioning: Identify access patterns for Audit Events](https://gitlab.com/gitlab-org/gitlab/-/issues/216653)
- 2020-05-18
  - [Capacity assessment for our main production DB cluster](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/10258)
  - Created issue to quantify [Conflicting features for namespace sharding](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/50)
  - Work underway for Audit Events partitioning
    - [Migration strategy to partition existing tables: Create partitioned tables](https://gitlab.com/gitlab-org/gitlab/-/issues/202618)
    - [Partitioning: Identify access patterns for Audit Events](https://gitlab.com/gitlab-org/gitlab/-/issues/216653)
- 2020-05-26
  - [Audit log database design changes](https://gitlab.com/gitlab-org/gitlab/-/issues/217471)
  - [Create script to generate test audit_events data](https://gitlab.com/gitlab-org/gitlab/-/issues/219055)
  - [Compatible and conflicting features for namespace sharding](https://gitlab.com/gitlab-org/database-team/team-tasks/-/issues/50)
- 2020-06-01
  - There were a few topics of discussion for this working group
    - `Tenant Sharding` vs. `Namespace Sharding`
    - Goals - Availability, Scalability, Customer Isolation
  - We spent some time discussing different implementation approaches
  - [Database Capacity and Saturation Analysis (Iteration 1)](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/10340)
    - Snippet: Given 3-month timeframe we have analyzed, we have a high-degree of confidence that the current architecture is in good shape to handle our needs over the next 12 months
  - Progress continues on [Partitioning: Design and implement partitioning strategy for Audit Events](https://gitlab.com/groups/gitlab-org/-/epics/3206)
- 2020-06-08
  - Working group updates
  - Timeline of Tenant vs. Namespace Sharding
  - Discussions of incremental database changes
