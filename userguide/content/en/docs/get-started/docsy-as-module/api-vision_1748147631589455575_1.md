---
title: "API Vision"
description: "The GitLab API Vision Working Group aims to improve the current APIs and define their future evolution."
status: active
---

## Attributes

| Property        | Value                                                                                                                                             |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| Date Created    | 2022-02-07                                                                                                                                        |
| End Date        | 2023-11-17                                                                                                                                               |
| Slack           | [#wg_api_vision](https://gitlab.slack.com/archives/C030DMJE0SZ) (only accessible from within the company)                                         |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/1o4Tq84Lt5VnxrVZmhlP0u4qiErzC1MtVfivnIc6_29E) (only accessible from within the company) |
| Issue Board     | [Issue Board](https://gitlab.com/groups/gitlab-org/-/boards/3929903)                                                |
| Overview & Status | See [Exit Criteria](#exit-criteria) below |

## Goal

The GitLab API Vision Working Group aims to improve the current APIs and define their future evolution.

### Overview

We don't have a cohesive view between the REST and GraphQL APIs. We specify that the GraphQL API is the primary means of interacting programmatically with GitLab, but we often don't follow this criteria. Both APIs cover a different set of features, but none is feature-complete.

### Goals

This is a list of topics that we want to discuss:

- Responsibilities, Directly Responsible Individual, and technical experts. At the moment, the `Manage:Integrations` group is the DRI of the APIs but there is also the `@graphql-experts` group.
- General vision of the GitLab API:
  - REST / GraphQL API consistency.
  - REST first vs. GraphQL first vs. another approach.
- Review APIs:
  - General architecture.
  - Permissions and scopes.
  - Feature coverage.
  - Performance.
- Testing:
  - Coverage.
  - Automated testing.
  - Tools (eg. Postman collections).
- API deprecations lifecycle and strategy:
  - REST v5 API or further iterations.
  - GraphQL deprecation process.
- API standards, including OpenAPI specification.
- Documentation:
  - Improve current documentation.
  - Review the first-time API user experience.
  - Automation of the documentation.
  - Full catalog of all public and internal APIs.
- Learning and contributions:
  - Review contributors' documentation.
  - Create learning paths for team members, especially about GraphQL.

### Exit Criteria

The table below lists all exit criteria for the working group. This is the [top-level epic](https://gitlab.com/groups/gitlab-org/-/epics/8638).

| # | Completed Date | Progress | DRI             | Criteria                                                                                                                                        |
|---|----------------|----------|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------|
| 1 | TBD            | 10%       | @g.hickman      | [Define the vision of the GitLab API for the future years](https://gitlab.com/groups/gitlab-org/-/epics/8633) |
| 2 | TBD            | 0%       | @m_gill | [Set the foundation of a cohesive development strategy going forward](https://gitlab.com/groups/gitlab-org/-/epics/8634)                        |
| 3 | TBD            | 0%       |     | [Capture work needed for next generation API](https://gitlab.com/groups/gitlab-org/-/epics/8115)                       |
| 4 | TBD            | 15%       | @.luke          | [API Deprecation and Lifecycle policies](https://gitlab.com/groups/gitlab-org/-/epics/7667)                                                           |
| 5 | TBD            | 15%       | TBD      | [Create a concept and roadmap to automatically generate API documentation](https://gitlab.com/groups/gitlab-org/-/epics/8636)                                                    |
| 6 | TBD            | 5%       |   TBD              | [Define minimum levels of performance and stability, with appropriate checks and monitoring](https://gitlab.com/groups/gitlab-org/-/epics/7520) |
| 7 | TBD            |       | | [Robust Open API](https://gitlab.com/groups/gitlab-org/-/epics/8926) |

## Roles and Responsibilities

| Working Group Role      | Username        | Person                                                                   | Title                                                           |
| :---------------------- | :-------------- | ------------------------------------------------------------------------ | :-------------------------------------------------------------- |
| Executive Stakeholder   | @timzallmann    | [Tim Zallmann](/handbook/company/team/#timzallmann)       | Senior Director of Engineering, Dev                             |
| Facilitator             | @arturoherrero  | [Arturo Herrero](/handbook/company/team/#arturoherrero)   | Engineering Manager, Manage:Integrations                     |
| Facilitator             | @g.hickman      | [Grant Hickman](/handbook/company/team/#g.hickman)        | Senior Product Manager, Manage:Integrations                  |
| Functional Lead         | @.luke          | [Luke Duncalfe](/handbook/company/team/#.luke)            | Senior Backend Engineer, Manage:Integrations                 |
| Functional Lead         | @axil           | [Achilleas Pipinellis](/handbook/company/team/#axil)      | Senior Technical Writer, Enablement                             |
| Functional Lead         | @Andysoiron     | [Andy Soiron](/handbook/company/team/#andysoiron)         | Senior Backend Engineer, Manage:Integrations                 |
| Member                  | @grzesiek       | [Grzegorz Bizon](/handbook/company/team/#grzesiek)        | Principal Engineer, Verify                                      |
| Member                  | @f_caplette     | [Frédéric Caplette](/handbook/company/team/#f_caplette)   | Senior Frontend Engineer, Verify:Pipeline Authoring             |
| Member                  | @bmarjanovic    | [Bojan Marjanovic](/handbook/company/team/#bmarjanovic)   | Senior Backend Engineer, Manage:Integrations                 |
| Member                  | @kerrizor       | [Kerri Miller](/handbook/company/team/#kerrizor)          | Senior Backend Engineer, Create:Code Review                     |
| Member                  | @lauraX         | [Laura Montemayor](/handbook/company/team/#laurax)        | Backend Engineer, Verify:Pipeline Authoring                     |
| Member                  | @nagyv-gitlab   | [Viktor Nagy](/handbook/company/team/#nagyv-gitlab)       | Senior Product Manager, Configure                               |
| Member                  | @kpaizee        | [Kati Paizee](/handbook/company/team/#kpaizee)            | Senior Technical Writer, Growth and Ecosystem                   |
| Member                  | @fabiopitino    | [Fabio Pitino](/handbook/company/team/#fabiopitino)       | Staff Backend Engineer, Verify:Pipeline Execution               |
| Member                  | @dstull         | [Doug Stull](/handbook/company/team/#dstull)              | Staff Fullstack Engineer, Growth:Expansion                      |
| Member                  | @ntepluhina     | [Natalia Tepluhina](/handbook/company/team/#ntepluhina)   | Staff Frontend Engineer, Plan:Project Management                |
| Member                  | @avielle        | [Avielle Wolfe](/handbook/company/team/#avielle)          | Backend Engineer, Verify:Pipeline Authoring                     |
