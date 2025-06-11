---
title: "Work Items API Performance Working Group"
description: "Stage Working Group for improving Work Items API performance"
---

## Attributes

| Property            | Value                                                                                                   |
|---------------------|---------------------------------------------------------------------------------------------------------|
| Date Created        | 2025-03-03                                                                                              |
| Target End Date     | 2025-08-29                                                                                              |
| Slack               | [#wg_work-items-api-performance](https://gitlab.enterprise.slack.com/archives/C08G0G394CD)              |
| Google Doc          | [Agenda](https://docs.google.com/document/d/1S5ZSbEOSCAUWe0U3gZPGXSUKIaFjjn_HD1UGkz2hhXY/edit?tab=t.0)  |
| Epic                | https://gitlab.com/groups/gitlab-org/-/epics/16919                                                      |
| Overview & Status   | See [Exit Criteria Progress](#exit-criteria)                                                            |

### Context

Many Plan features depend on the same work-items APIs, database and search architecture:

- issue searches for projects and groups
- boards
- GLQL

These features have similar performance problems:

- [Relatively simple search queries on the large groups](https://gitlab.com/groups/gitlab-org/-/issues/?sort=created_date&state=closed&label_name%5B%5D=group%3A%3Acode%20review&label_name%5B%5D=bug%3A%3Avulnerability&first_page_size=100) currently time-out.
- GLQL queries timing out

Performance of these APIs also affects our error budgets.

#### Weekly Sync

TBD

### Exit Criteria

- [ ] Migrate issue filters for groups/projects to Work Items API
- [ ] Measure performance of the Work Items API and set improvement targets, such us:
  - Specific common queries not timing-out
  - Get X-th request duration percentile under X target
  - Get Error-budget in the green
- [ ] Reach targets set on the previous step

### Roles and Responsibilities

| Working Group Role | Person            | Title                                               |
|--------------------|-------------------|-----------------------------------------------------|
| Facilitator        | Vladimir Shushlin | Engineering Manager - Plan::Knowledge               |
| Member             | Alisa Frunza      | Backend Engineer - Plan::Knowledge                  |
| Member             | Heinrich Lee Yu   | Staff Backend Engineer - Plan::Project Management   |
| Member             | Kassio Borges     | Staff Backend Engineer - Plan::Product Planning     |
| Member             | Alexandru Croitor | Senior Backend Engineer - Plan:Project Management   |
| Member             | Nicolas Dular     | Staff Backend Engineer - Plan::Product Planning     |
| Member             | Eugenia Grieff    | Senior Backend Engineer - Plan::Product Planning    |
| Member             | Dmitry Gruzd      | Staff Backend Engineer - Foundations::Global Search |
