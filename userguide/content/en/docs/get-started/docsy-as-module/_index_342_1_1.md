---
title: Data Access Sub Department
---

## Vision

The Data Access sub-department is responsible for the **sustainability** and **availability** of access to GitLab’s user data, in alignment with customer needs and GitLab’s business objectives.

The scope of user data includes Git, PostgreSQL, ClickHouse, Redis, Object Storage and the development of a scalable backup system for all GitLab deployments.

For all GitLab deployments:

1. We design, operate and evolve GitLab’s data storage architecture and interfaces, or provide assistance to those responsible.
2. We guide feature owners in reaching business goals safely, throughout the feature life cycle.
3. We aid customers directly in incidents or escalations, and indirectly by innovating to meet their needs.

It is the job of each Data Access team to hold feature owners *accountable* for responsible access patterns and to thereby ensure the stability of our shared data storage systems. This is an active process and requires building relationships for collaboration, guiding through paved paths, and providing tools and knowledge Team Members can use and build on.

## About sustainability and availability

Here, *sustainability* means long-term maintainability, efficiency, and scalability of our data storage systems and the software architecture that uses it. Good sustainability requires good up-front planning as well as continued adaptation as features, business goals and infrastructure evolve. Effects of new additions and changes must be considered in the context of the entire GitLab application and the storage infrastructure.

*Availability* means that critical user journeys continuously provide great user experience, during normal operations as well as state transitions such as migrations or upgrades. We must design our architecture, processes and tools such that they minimize interruptions and quality degradations.

## Achieving the vision

### What we do

1. Own and drive GitLab’s relevant sustainability goals end to end, holding each other and feature owners accountable.
2. Measure key metrics of data scalability and access patterns in their services, track their changes and relations to breaking points.
3. Publish tools to attribute usage of shared resources to their sources (for example, tie growth of a metric or a database query to a given product feature).
4. Define the "paved paths" (good patterns to follow when storing and accessing data) through documentation, consultation, processes, and frameworks.
5. Actively detect and prevent non-scalable patterns from entering GitLab as early in the development cycle as possible, through processes and automated tooling.
6. Drive the work to make existing patterns sustainable, as they are discovered.
7. Innovate, test, deploy, and migrate to infrastructure changes that contribute to long-term sustainability.
8. Build defense-in-depth technologies to keep storage services available (like loadshedding, request isolation).
9. Collaborate with other Data Access teams closely. Share knowledge, ideas, concepts and best practices to foster innovation, and deliver consistent solutions to customers.
10. Measure the impact of our actions, set targets, and report on progress.

### FY26 goals

(in alignment with GitLab’s [product principles](/handbook/product/product-principles/#our-product-principles) and the [\[INTERNAL\] Three year (FY26-FY28) - Platforms strategy](https://docs.google.com/document/d/1E5T9TSkqxWkvCpWNbfrqmEFM5sXMO4HT-D22m_QjfyA/edit?tab=t.0))

1. Identify historical storage architecture issues and create a mitigation plan/roadmap ([epic](https://gitlab.com/groups/gitlab-org/data-access/-/epics/3)).
2. Establish a framework (automation, processes, information) to ensure scalability of new launches ([epic](https://gitlab.com/groups/gitlab-org/data-access/-/epics/1)).

### Principles for launches

Below is a non-exhaustive list of considerations from the perspective of new features. The responsibility to exercise good judgement remains with the domain experts AND the feature owners. (This description uses terminology from [RFC2119](https://datatracker.ietf.org/doc/html/rfc2119).)

**Each of these points MUST be considered for all GitLab installation types: Cells, Dedicated, SaaS, and Self-Managed:**

1. Growth of a feature over time MUST NOT endanger the service as a whole.
2. Failure of a feature MUST NOT endanger the service as a whole.
3. Safeguards SHOULD be architectural failsafes (isolation, [circuit breaker pattern](https://en.wikipedia.org/wiki/Circuit_breaker_design_pattern) etc), not reactive mechanisms.
4. The critical path of operating a feature MUST be fully automated. (For example, humans watching graphs and reacting is not allowed.)
5. Specific observability (monitoring and alerting) MUST be in place, to pinpoint and attribute sources of load and growth.
6. Data ownership plans MUST include the entire lifecycle of the data, including:
   1. Backup and restoration plans
   2. Data retention policies that are tied to business goals and consider all potential legal implications (such as PII, personally identifying information)
   3. Replication plans (Geo)
   4. Cost analysis
   5. Compatibility with existing data management features, like export and import
7. Data for any user-facing feature MUST reside, and be accessed through, a data store corresponding to the feature maturity.
   1. For example, a General Availability launch REQUIRES data to be stored in, and accessed through, a production-quality Infrastructure-owned data store.
8. Changes MUST have documented rollout plans.
9. The points above MUST be reconsidered each time a feature experiences a lifecycle change (launch, significant growth, change in [maturity](https://about.gitlab.com/direction/#maturity) or scope, sunsetting) before the lifecycle change can take place. The responsibility to revisit belongs to feature owners, aided by Data Access experts.
10. Exceptions to any of the above MUST be thoroughly and permanently documented with risk assessment and business considerations, and approved by Senior Manager, Data Access or above, and the appropriate Product counterpart(s).

## All Team Members

The following people are permanent members of teams that belong to the Data
Access Sub-department:

### Database Framework

The [Database Framework](/handbook/engineering/infrastructure-platforms/data-access/database-framework/)
team develops solutions for scalability, application performance, data growth and
developer enablement especially where it concerns interactions with the
database.

{{< team-by-manager-slug manager="alexives" >}}

### Database Operations

The [Database Operations](/handbook/engineering/infrastructure-platforms/data-access/database-operations/)
team builds, runis, and owns the entire lifecycle of the PostgreSQL database
engine for GitLab.com.

{{< team-by-manager-slug manager="rmar1" >}}

### Durability

The [Durability](/handbook/engineering/infrastructure-platforms/data-access/durability/)
team is dedicated to safeguarding and securing customer data that is stored by
the GitLab application and set guidelines for data access. We strive to build
and maintain resilient infrastructure and improve the management of Redis,
Sidekiq, and Gitaly.

{{< team-by-manager-slug manager="jarv" >}}

### Gitaly

The [Gitaly](/handbook/engineering/infrastructure-platforms/data-access/gitaly/)
team builds and maintains systems to ensure Git data of GitLab instances, and
*GitLab.com in particular*, is reliable, secure and fast.

{{< team-by-manager-slug manager="jcaigitlab" >}}

### Git

The [Git](/handbook/engineering/infrastructure-platforms/data-access/git/) team
develops Git in accordance with the goals of the community and GitLab, and
integrate it into our products.

{{< team-by-departments "Git Team" >}}
