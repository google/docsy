---
title: "ClickHouse Working Group"
description: "Learn more about the ClickHouse Datastore Working Group attributes, goals, roles and responsibilities."
---

## Attributes

| Property        | Value           |
|-----------------|-----------------|
| Date Created    | 2022-12-01 |
| End Date | 2024-04-25 |
| Slack           | #f_clickhouse (only accessible from within the company) |
| Google Doc      | [Agenda](https://docs.google.com/document/d/1ZZ7fE7s18Yxww9wp0-lO7mFxJmwop3pWvqINCQPNubA/edit#) (only accessible from within the company) |
| Epic            | [Link](https://gitlab.com/groups/gitlab-com/-/epics/2070) |
| Overview & Status | See [Exit Criteria Progress](#exit-criteria-progress) |

### Context

[ClickHouse](https://clickhouse.com) is an open-source column-oriented database management system. It can efficiently filter, aggregate, and sum across large numbers of rows.

In FY23 ClickHouse was selected as GitLab's standard datastore for features with big data and insert-heavy requirements (e.g. Observability, Analytics, etc.)  ClickHouse is not intended to replace Postgres or Redis in GitLab's stack.

In FY23-Q2 the Monitor:Observability team developed and shipped a [ClickHouse data platform](https://gitlab.com/groups/gitlab-org/-/epics/7772) to store and query data for Error Tracking and other observability features.  Other teams have also begun to incorporate ClickHouse into their current or planned architectures.

We want ensure teams can efficiently leverage the ClickHouse data platform when developing new features and that we can maintain and support this functionality effectively for SaaS and self-managed customers.

### WG Exit

In April 2024 the ClickHouse Working Group was closed out.  The group made major progress introducing ClickHouse to GitLab's architecture to support GitLab's analytics and monitoring features.

* Enabled usage of ClickHouse Cloud with GitLab, including security and legal approval for storing customer RED data and production readiness reviews.
* Consolidated our multiple ClickHouse hosting setups into ClickHouse Cloud, reducing operational load for our teams and improving reliability.
* Released multiple features that would not have been possible without ClickHouse's capabilities.
* Fixed features such as Contributor Analytics which were no longer performant on GitLab.com.
* Developed documentation and tooling for using ClickHouse in GitLab's development process.

Due to the overlap with the recently created [Product Usage Data Architecture Working Group](https://internal.gitlab.com/handbook/company/internal-working-groups/product-usage-data-architecture/), the decision was made to wind down the ClickHouse group, and roll those concerns into that group's work defining the architecture for analytical features.

### Exit Criteria

This Working Group has the following goals:

1. Document and review the current uses/capabilities and future use cases.
1. Develop & Socialize Architecture Strategy for ClickHouse usage.
    1. Architecture Blueprint for ClickHouse usage within GitLab.
    1. Architecture Blueprint for scalable data ingestion pipeline for ClickHouse within GitLab.
    1. Provides guidance which sets expectations on scaling and query design/debugging/guardrails/etc.
    1. Define sane and secure defaults. Provide security recommendations and guardrails.
1. Develop a Rollout Strategy and Plan (e.g. feature flags, would customers ever want to disable/remove it, etc.).
    1. SaaS rollout strategy for identified use cases.
    1. Lay the groundwork to add ClickHouse to [our reference architectures](https://docs.gitlab.com/ee/administration/reference_architectures/) through self-managed support.
        * Packaging ClickHouse for our self-managed installations.
        * Research and understand the component costs and maintenance requirements of running a ClickHouse instance.
        * Determine the scale and deployment targets where adding ClickHouse makes sense.
        * Consider an abstraction layer to interacting with ClickHouse or alternatives.
1. Develop and implement a communication plan for the outcomes of the working group.

#### Exit Criteria Progress

| Criteria | Start Date | Completed Date | Progress | DRI |
|----------|------------|------------|------------|------------|
| [Document and review current ClickHouse uses/capabilities and future use cases](https://gitlab.com/groups/gitlab-com/-/epics/2075) | 2022-12-08 | 2023-02-01 | 100% | Marshall Cottrell |
| [Develop and socialize architecture strategy for ClickHouse usage](https://gitlab.com/groups/gitlab-com/-/epics/2076) | 2023-01-05 | 2023-05-25 | 100% | Nick Nguyen |
| [Develop a ClickHouse rollout strategy and plan](https://gitlab.com/groups/gitlab-com/-/epics/2077) | 2023-01-05 | | 60% | Sam Goldstein |
| [Develop Recommendation for ClickHouse Ownership Model](https://gitlab.com/groups/gitlab-com/-/epics/2094) | | | 0% | |
| [Develop and implement a communication plan for the working group](https://gitlab.com/groups/gitlab-com/-/epics/2078) | 2023-01-18 | | 0% | Nicole Williams |
| [Complete production readiness through to GA](https://gitlab.com/groups/gitlab-com/-/epics/2316) | 2023-08-04 | | 75% | Nathan Rosandich |

### Current and Planned Use Cases

* [Current status of ClickHouse and GitLab's implementation](https://gitlab.com/gitlab-com/ops-sub-department/ops-engineering-management/-/issues/205)
* [ClickHouse Use Cases](https://gitlab.com/gitlab-org/gitlab/-/issues/384184)

### Roles and Responsibilities

| Working Group Role    | Person                | Title                          |
|-----------------------|-----------------------|--------------------------------|
| Executive Sponsor     | Christopher Lefelhocz | VP of Development            |
| Facilitator DRI | Sam Goldstein | Director of Engineering, Ops |
| Co-Facilitator | Nick Nguyen | Senior Engineering Manager, Data Stores |
| Co-Facilitator | Nicole Williams | Senior Engineering Manager, Monitor & Runner |
| Co-Facilitator | Nathan Rosandich | Engineering Manager, Govern:Compliance |
| Functional Lead - Analytics | Mikołaj Wawrzyniak | Staff Backend Engineer, Analytics:Analytics Instrumentation |
| Functional Lead - Optimize | Adam Hegyi | Staff Backend Engineer, Plan:Optimize |
| Functional Lead - ModelOps | Mon Ray| Engineering Manager, ModelOps |
| Functional Lead - Monitor | Mat Appelman | Principal Engineer, Monitor |
| Functional Lead - Distribution | Dmytro Makovey | Senior Backend Engineer, Distribution:Build|
| Functional Lead - Quality | Kassandra Svoboda | Quality Engineering Manager, Enablement & SaaS Platforms |
| Functional Lead - Infrastructure | Reuben Pereira | Senior Backend Engineer, Delivery:System |
| Functional Lead - Product | Dilan Orrino | Senior Product Manager, Enablement:Distribution |
| Member | Pavel Shutsin | Senior Backend Engineer, Plan:Optimize |
| Member | Dennis Tang | Engineering Manager, Analyze:Product Analytics |
| Member | Max Woolf            | Senior Backend Engineer, Analyze:Product Analytics |
| Member | Sebastian Rehm | Engineering Manager, Analytics:Analytics Instrumentation  |
| Member | Piotr Skorupa   | Backend Engineer, Analytics:Analytics Instrumentation |
| Member | Alex Ives | Engineering Manager, Database (PostgreSQL) |
| Member | Brandon Labuschagne | Engineering Manager, Plam:Optimize |
| Member | Dylan Griffith | Principal Engineer, Data Stores |
| Member | João Pereira | Staff Backend Engineer, Package:Container Registry |
| Member | Haim Snir | Senior Product Manager, Plan:Optimize |
| Member | Lucas Charles | Staff Backend Engineer, Secure::Static Analysis |
| Member | Kamil Niechajewicz | Engineering Manger, Growth:Acquisition  |
| Member | Doug Stull | Staff FullStack Engineer, Growth:Acquisition  |
| Member | Nicholas Klick | Engineering Manager, Observability |
| Member | Arun Sori | Senior Backend Engineer, Monitor:Observability |
| Member | Nailia Ishakkova | Senior Software Engineer in Test, Enablement: Distribution |
