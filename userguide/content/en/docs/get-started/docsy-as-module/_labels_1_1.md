---
draft: true
description: Partial not currently in use
---

### Labels

| Label                        | List                                        | Focus          |
| ---------------------------- | ------------------------------------------- | -------------- |
| `Director of Infrastructure` | Director of Infrastructure                  | Infrastructure |
| `team::CI/CD & Enablement`   | Reliability Engineering: CI/CD & Enablement | Reliability    |
| `team::Dev & Ops`            | Reliability Engineering: Dev & ops          | Availability   |
| `team::Sec`                  | Reliability Engineering: Sec | Observability  |
| `team::Delivery`             | Delivery Engineering                        | Scalability    |
| `DE::Infrastructure`         | Distinguished Engineer, Infrastructure      | Infrastructure |
| `OA::Infrastructure`         | Operations Analyst, Infrastructure          | Cost           |

Other labels are relevant to issues in the board:

| Label             | Purpose                                                      |
| ----------------- | ------------------------------------------------------------ |
| `OKR`             | Denotes OKR-related issue. It is used to communicate status and progress for quarerly KRs as assigned to erach team. |
| `KPI`             | Denotes KPI-related issue. It is used to track progress on definition, implementation and tracking of Infrastructure KPIs. |
| `workflow-infra::state` | Denotes the state of an issue according to our [workflow](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/labels?utf8=%E2%9C%93&subscribed=&search=workflow-infra) conventions: `Ready`, `In Progress`, `Under Review`, `Blocked`, `Done`, and `Cancelled`. |

#### List Labels

Board lists are driven by the following labels:

| Type    | Label                         | List                        | Notes                                      |
| ------- | ----------------------------- | ----------------------------| ------------------------------------------ |
| *group* | `Ongres`                      | Issues assigned to OnGres   |                                            |
| *group* | `Ongres::Support`             | OnGres support issues       | Support                                    |
| *group* | `Ongres::Project`             | OnGres project issues       | Project                                    |
| *group* | `workflow-infra::Ready`       | Issues ready to start       | Issues must always be prioritized          |
| *group* | `workflow-infra::In Progress` | Issues in progress          | Issues must always have a **Due Date**     |
| *group* | `workflow-infra::Blocked`     | Issues blocked              | Issues must describe what can unblock them |

#### Priority and Criticality Labels

Issues are labeled by priority and criticality. Priority incidetes what should be worked on first. Criticality describes the risk of not doing the work.

All issues must have priority and critically assigned to them. This is a requirement for issues in the `workflow-infra::Ready` state.

| Type    | Priority Label  | Description                                                                               |
| ------- | --------------- | ----------------------------------------------------------------------------------------- |
| *group* | `priority::1`   | Highest priority items that require immediate action, with expected ETA in hours/days     |
| *group* | `priority::2`   | Items that require prompt attention, with expected ETA within the week                    |
| *group* | `priority::3`   | Items with expected ETA within the current milestone       |
| *group* | `priority::4`   | Items with expected ETA within the following milestone or beyond |

| Type    | Criticaility Label  | Description                                                                               |
| ------- | ------------------- | ----------------------------------------------------------------------------------------- |
| *group* | `C1`   | Immediate threat to availability, performance or data durability  |
| *group* | `C2`   | Expected threat to availability and/or performance within 30 days |
| *group* | `C3`   | Expected threat to availability and/or performance within 60 days |
| *group* | `C4`   | Expected threat to availability and/or performance beyond 60 days |

Note: **data loss** is always a `C1` criticality.

All the issues with the Priority 1 `priority::1` label should be updated daily.

The time duration of our milestones is 2 weeks.
