---
title: "Organizations and Cells"
owning-stage: "~devops::tenant scale"
group: Organizations
toc_hide: true
---

## Organizations and Cells Integration

Watch a [video introduction](https://www.youtube.com/watch?v=kDinjEHVVi0) that summarizes what Organization isolation is and why we need it for Cells.

Operating GitLab.com poses some important technical challenges:

1. Scalability challenges: As the user base grows, it becomes increasingly difficult to scale the entire application uniformly.
2. Performance bottlenecks: Heavy usage by one organization can potentially impact the performance for others.
3. Limited isolation: Issues affecting one part of the application can potentially impact all users.
4. Maintenance complexity: Updating or maintaining the system requires careful coordination to avoid disrupting all users simultaneously.

The Organization and Cell concepts aim to address these limitations by introducing a more modular and scalable architecture. Here's how they work together:

1. Organizations provide logical separation: They group related users, groups, and projects under a single entity, allowing for better management and isolation of resources.
2. Cells provide physical separation: Each Cell is an independent set of infrastructure components that can host multiple Organizations.

By combining Organizations and Cells, we can achieve:

1. Improved scalability: We can add new Cells as needed to accommodate growth, rather than scaling the entire application.
2. Better performance isolation: Issues or heavy usage in one Cell won't affect Organizations in other Cells.
3. Enhanced reliability: Problems in one Cell are contained, reducing the risk of system-wide outages.
4. Easier maintenance: Cells can be updated or maintained independently, minimizing disruption to users.

This approach allows GitLab.com to grow more efficiently while providing a more stable and performant experience for all users.

## Overview

GitLab.com, our SaaS offering, is growing rapidly.
This growth requires that the underlying infrastructure components are able to scale to accommodate additional users.

Scaling GitLab requires different strategies for the individual components.
For example, web application nodes are stateless and can be scaled relatively easily by creating more individual servers.
Stateful components are much harder to scale. As a single solution for the entire DevOps lifecycle, GitLab depends on a single data store which serves as a the single source of truth of data.
For GitLab, this data store is mostly a single PostgreSQL database.
Given the continuing growth of GitLab.com, this PostgreSQL database needs to handle more and more transactions per second.
Reading data can be accelerated by provisioning additional replicas.
Writing new data, however, can't be easily scaled in the same way.
There can only be one primary server and all writes have to go through it.
In order to address this problem there are several possible solutions:

1. Buy more capable hardware - Bigger servers can handle more transactions. This is generally referred to as vertical scaling.
1. Define a horizontal scaling strategy.

GitLab.com is approaching a point where buying bigger servers is no longer easily possible.
Hence, the shift to a [Cells](https://docs.gitlab.com/ee/architecture/blueprints/cells/index.html) architecture is an investment into our horizontal scaling strategy.
This architecture creates many mostly isolated GitLab instances, called Cells, that include all required services (database, web, Redis, Gitaly, Runners, Sidekiq etc.).
The number of Cells can grow alongside the growth of the business.

Organizations will be the vehicle to distribute customers amongst different Cells.
While customers will not be exposed to Cells via the UI and they will operate in the context of Organizations, they are likely to benefit from improved service availability as a result of this architecture change.
Further, the increased isolation of functionality will allow us to tailor the user experience more to an organization's context.

[Cells](https://docs.gitlab.com/ee/architecture/blueprints/cells/index.html) provide a solution for organizations in the small to medium business (up to 100 users) and the mid-market segment (up to 2000 users). Larger organizations may benefit substantially from [GitLab Dedicated](https://docs.gitlab.com/ee/subscriptions/gitlab_dedicated/index.html).

In a cellular architecture, each Organization's data, configurations, and resources are isolated.
This is particularly important for customers in highly regulated industries, such as finance, healthcare, or government.
Top-level Groups of the same Organization can interact with each other but not with Groups in other Organizations, providing clear boundaries for an Organization, similar to a self-managed instance.
Isolation should have a positive impact on performance and availability as things like User dashboards can be scoped to Organizations.

Isolating Organizations makes it possible to allocate and distribute them across different Cells.
A group of Organizations is fully isolated from other Organizations located on a different Cell.
If an issue arises within one Organization, the impact is contained within the Cell the Organization is on, preventing a single point of failure from affecting the entire platform.
This enhances the overall reliability of GitLab, reducing the risk of widespread outages and improving customer satisfaction.
Having isolated Organizations is a pre-requisite to distribute customers amongst multiple Cells.
