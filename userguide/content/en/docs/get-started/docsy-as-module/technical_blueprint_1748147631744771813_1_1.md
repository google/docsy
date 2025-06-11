---
title: "Technical Blueprint"
---

The purpose of this document is to detail the goals and guidelines for the Observability team. The focus is on our principles and our goals for the next five years.

## Team Principles

### Observability for GitLab, not just SaaS Platforms

We are better when we work together.

Although our main mandate is to support GitLab's SaaS Platforms, we actively share knowledge with other teams at GitLab and other customers and build tools and frameworks that work for everyone.

### Self-Service, Discoverability and Accessibility

We favor providing repeatable self-service opportunities to those who use our stack over doing the work ourselves, which increases efficiency for everyone.
These opportunities are easy to use and easy to discover for our users.
Internal users can improve the observability of our platform and access observability data freely, through higher level means (dashboards, reports, etc.) and lower-level well-defined interfaces to underlying data.

### Improve the product with the tools we create when possible

Not all of what we do belongs in the product, but some of it might!

In line with our [Dogfooding philosophy](/handbook/product/product-processes/dogfooding-for-r-d/), we go beyond the SaaS context and consider what we can offer upstream to other GitLab customers.
Similarly, we prefer using GitLab's own features and tools when they fit our requirements.

### Tool Portability

GitLab's SaaS Infrastructure is complex.

We aim to provide observability solutions that are portable or tool agnostic to efficiently deliver a similar and more cohesive experience across our different platforms.

### We implement against Standards

The observability space is a mature and competitive industry, meaning there are usually many different (open source) tools to choose from that have their own benefits and nuances.

We opt for industry accepted standards and implementations, which reinforces our principle of portability.

### Data should have one source of truth

We have a lot of data, and duplicating it in multiple different locations becomes expensive.

We maintain a well-defined data stack with a single source of truth for the contained data.

## Goals

This is an aspirational list of goals that we would like to achieve in the next five years and should be used as a source of inspiration for project planning and roadmap creation.

### Theme 1: Improve how we work with other teams at GitLab

We are faster together.  If we improve how we work with other teams at GitLab, we make their jobs and our jobs easier, and we can focus on new and additional problems.

#### Goals within this theme

- Determine who our internal customers are and make certain that we're meeting their needs by soliciting feedback
- Determine other observability tools and who is using them and who owns them (Sentry, Tableau, etc)
- Dogfood the Monitor:Observability tracing tool for GitLab.com
- Collaborate with Dedicated to help create and integrate Observability Units
- Support the observability components of Cells and other GitLab initiatives
- Work with other teams (SIRT, business analytics, finops, etc) to de-duplicate logging and metrics and define scope of what goes where
- Improve customer experience for error budgets to make it easier for stage groups to focus on the problems in the code, not the problems in the tooling.
- Expand error budgets to additional teams/environments (e.g. staging environment, Dedicated and include Infrastructure teams)
- Expand capacity planning to additional teams/environments (e.g. ops and staging environment, Dedicated, etc.)
- Create an observability Single Pane of Glass (SPOG)

### Theme 2: Make it easier for teams to onboard to the observability stack

Adding a new service to the observability stack today is a complicated and not well understood process.  Adding new metrics to the source side is also only partially understood.  We should create as the right tools and abstractions to make it so that all our customers can self-service onboarding to the system.  This will also have the benefit that the system will become easier to maintain.

#### Goals within this theme

- Provide reference tooling for teams to onboard themselves to the observability stack (helm charts, cloud run configs)
- Create reusable abstractions that can be used for a wide variety of systems within GitLab and are easy to self-service
- Improve our cardinality of metrics and educate teams on the best practices, making it easy to do the right thing and hard to do the wrong thing, and create a feedback loop to help iterate over improvements
- Create well understood patterns to add metrics at the source side (LabKit, etc)

### Theme 3: Make the observability stack easier to manage and maintain

In order to work efficiently, we make data driven decisions on the health of our system, improve the ease of use for ourselves and for other teams, and make certain that we're focusing on self-service.

#### Goals within this theme

- Set SLOs for availability and correctness of observability tools (metrics, logging, capacity planning, etc)
- Set SLOs for mean time for changes to take effect for metrics and observability deployments
- Use capacity planning to forecast saturation for all aspects of the observability stack
- Improve deployment tooling for observability deployments (helm files, deployment tools, etc)
- Split the runbooks repository into smaller, self contained repositories
- Create a cost effective and easy to manage logging solution
- Push capacity planning as far left as possible (docs on how to use it, live grafana views, etc)
- Create a system to audit metrics, logs and dashboards to delete data that no one uses

### Theme 4: Improve our ability to answer FAQ from the past and unknown questions for the future

We've had a number of situations where lack of observability into aspects of our environment has cost us time, money, and availability.  We need to constantly iterate to improve how we are able to observe our environment by providing appropriate tools and data to the teams who own the services.

#### Goals within this theme

- Increased redis key analysis to better understand how we use Redis

 We have had multiple incidents and multiple issues where a subset of keys have either been unused and were wasted space or grew substantially without anyone realizing it until it was too late.  We also have very little knowledge of which teams own which pieces of data within redis which makes additional analysis even harder.  We need to improve our ability to understand how we're using shared data resources so that we improve how we use them.

- Improve database analysis and observability

Database scale is a core problem for us and our engineering teams are dealing with regular and also not so well known problems due to the scale of the database systems we run. They need database observability tech beyond what you'd usually expect to aid database analysis and getting insights into scaling bottlenecks we need to resolve.

- Provide the ability to answer unknown questions with the data we presently have

### Theme 5: Improve external customer experiences

- Availability reflects the customer experience
- Create a toolchest for self-managed customers so that they can use the knowledge we have
- Create a capacity planning tool for self-managed customers
