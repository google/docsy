---
title: "Vue.js 3 Migration Working Group"
description: "Learn more about the Vue.js 3 Migration Working Group attributes, goals, roles and responsibilities."
status: active
---

## Attributes

| Property          | Value                                                                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Date Created      | 2023-02-10                                                                                                                           |
| Target End Date   | 2025-12-31                                                                                                                           |
| Slack             | #wg_vue3_migration (only accessible from within the company)                                                                         |
| Google Doc        | [Agenda](https://docs.google.com/document/d/1Ad8mbz5HzMsBI2sR6DgQ34afOn1L1OJy5m_RrrpXaqE) (only accessible from within the company)  |
| Epic              | [gitlab-org/&2652](https://gitlab.com/groups/gitlab-org/-/epics/6252)                                                                |
| Overview & Status | See [Exit Criteria](#exit-criteria)                                                                                                  |

### Context

[Vue.js 3](https://vuejs.org) is the latest version of the frontend framework used by GitLab.

With [2023-12-31 Vue.js 2](https://v2.vuejs.org/lts/) (which is currently the version used by GitLab) reaches official end-of-life, including security updates and browser compatibility which might affect entire GitLab users.

Additionally, current GitLab codebase relies on subset of libraries which were not updated to be compatible with Vue 3 which might pose additional risks during migration.

We want to ensure that we are not creating additional security risks for our users by using an unmaintained version of a framework. At the same time increasing developer productivity by using new features of the latest version of the framework. Also an upgrade to Vue.js 3 hopefully will result in performance gains through out the application of 20-30% and most probably even more for heavy frontend applications like Code Review for example.

### Goals

This Working Group has the following goals:

1. Ensure all GitLab projects (including, but not limited to GitLab.com, customers portal, status page, etc.) are using latest Vue.js version
1. Develop & Socialize upgrade strategy for Vue.js 3.
   1. Identify dependencies which are blocking upgrade and ensure that decisions regarding these dependencies will be taken in timely fashion.
   1. Ensure visibility of upgrade process on per-application level
   1. Promote new patterns and update handbook with guidelines appropriate for new framework version
1. Develop a Rollout Strategy and Plan for gradual migration
   1. Create tooling and proper infrastructure to be able to use both framework versions in production during migration process.
   1. Ensure our test suite could be run using both versions of Vue.js to embrace values of iteration of results and allow gradual migration of codebase to Vue.js 3
   1. Implement compatibility layer for unifying differences between framework versions
   1. Create automated tooling (where applicable) to migrate existing Vue.js 2 code to be compatible with latest framework version
   1. Create deprecation strategy for patterns and solutions which are not compatible with Vue.js 3 to rest of the teams
1. Develop and implement a communication plan for the outcomes of the working group.

#### Exit Criteria

| Criteria                                                                                                  | Start Date | Completion Date | Progress | DRI                                        |
| --------------------------------------------------------------------------------------------------------- | ---------- | --------------- | -------- | ------------------------------------------ |
| [Get Bootstrap Vue running with Vue Compat mode 2](https://gitlab.com/groups/gitlab-org/-/epics/12385)    | 2021-06-21 | 2022-10-25      | 100%     | [@xanf](https://gitlab.com/xanf)           |
| [Get GitLab UI running with Vue Compat mode 2](https://gitlab.com/groups/gitlab-org/-/epics/12386)        | 2021-06-21 | 2024-04-30      | 70%      | [@markrian](https://gitlab.com/markrian)   |
| [Get main GitLab repo vue-router working with Vue Compat mode](https://gitlab.com/groups/gitlab-org/-/epics/10046) | 2023-05-18 | 2024-05-31      | 50%       | TBD                                        |
| [Use Vue.js 3 for running test suites on main repo](https://gitlab.com/groups/gitlab-org/-/epics/9862)    | 2023-05-18 | 2024-05-31      | 30%      | [@xanf](https://gitlab.com/xanf)           |
| [Get CustomersDot running with Vue Compat mode 2](https://gitlab.com/groups/gitlab-org/-/epics/12388)     | 2024-02-01 | 2024-04-30      | 0%       | [@vitallium](https://gitlab.com/vitallium) |
| [Switch Vue Compat from mode 2 to mode 3](https://gitlab.com/groups/gitlab-org/-/epics/12389)             | 2024-05-31 | 2024-10-31      | 0%       | TBD                                        |
| [Switch to using Vue 3 proper](https://gitlab.com/groups/gitlab-org/-/epics/12390)                        | 2024-10-31 | 2025-12-01      | 0%       | TBD                                        |

### Roles and Responsibilities

| Working Group Role | Person              | Title                                               |
| ------------------ | ------------------- | --------------------------------------------------- |
| Executive Sponsor  | Tim Zallmann        | Senior Director of Engineering                      |
| Facilitator        | Sam Beckham         | Engineering Manager, Manage:Foundations             |
| Functional Lead    | Illya Klymov        | Senior Frontend Engineer, Govern:Compliance         |
| Functional Lead    | Natalia Tepluhina   | Principal Engineer, Plan                            |
| Functional Lead    | Stanislav Lashmanov | Senior Frontend Engineer, Create: Code Review       |
| Functional Lead    | Andrew Fontaine     | Senior Frontend Engineer, Deploy:Environments       |
| Member             | Mark Florian        | Staff Frontend Engineer, Manage:Foundations         |
| Member             | Andrei Zubov        | Frontend Engineer, Deploy:Environments              |
| Member             | Artur Fedorov       | Senior Frontend Engineer, Govern:Security Policies  |
| Member             | Frédéric Caplette   | Senior Frontend Engineer, Verify:Pipeline Authoring |
| Member             | Vitaly Slobodin     | Staff Frontend Engineer, Fulfillment                |
| Member             | Marina Mosti        | Senior Frontend Engineer, Switchboard               |
