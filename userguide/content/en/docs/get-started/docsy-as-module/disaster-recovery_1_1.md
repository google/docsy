---
title: "Disaster Recovery Working Group"
description: "The Disaster Recovery Working Group improves the disaster recovery mechanism for GitLab SaaS and Self-Hosted Products."
status: active
---

## Attributes

| Property       | Value                                                        |
| -------------- | ------------------------------------------------------------ |
| Date Restarted | August 1, 2022                                               |
| Date Created   | November 11, 2020                                            |
| End Date       | TBD                                                          |
| Slack          | [#wg_disaster-recovery](https://gitlab.slack.com/archives/C01D6Q0DHAL) (only accessible from within the company) |
| Google Doc     | [Working Group Agenda](https://docs.google.com/document/d/1dLgmLlvET5WyWF0CpX5JUxiyQKyDzctocs7unwLueY8) (only accessible from within the company) |
| Issue Board    | [Working Group Issue Board](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/5908541?label_name[]=WG%3A%3ADisasterRecovery&group_by=epic) |
| Epic           | [Link](https://gitlab.com/groups/gitlab-com/-/epics/1899) |
| Overview & Status | [Main Epic](https://gitlab.com/groups/gitlab-com/-/epics/1899), [Internal Handbook (more specific)](https://internal.gitlab.com/handbook/engineering/disaster-recovery/disaster-recovery-wg-sow/#current-goals-and-status) |

### Scope and Definitions

In the context of this working group:

1. **Recovery Point Objective (RPO)**: maximum duration of time in which data might be lost due to an incident.
1. **Recovery Time Objective (RTO)**: maximum duration of time that a service is unavailable due to an incident.

### Exit criteria

The exit criteria and target goals for the working group are defined [here](https://internal.gitlab.com/handbook/engineering/disaster-recovery/disaster-recovery-wg-sow/#exit-criteria) in the internal handbook.

### Sequence Order Of Deliverables and Exit Criteria

Planned:

1. [Complete an assessment of zonal outage and identify next step iterations towards 4 hour recovery goal](https://app.ally.io/objectives/2235994?time_period_id=155987) (Epic: [gitlab.com&1900](https://gitlab.com/groups/gitlab-com/-/epics/1900)). **DRI:** John Jarvis
1. [Improve node snapshot capabilities](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/935) **DRI:** John Jarvis
1. Define a medium to long term strategy for DR capabilities for GitLab Dedicated and Cells via Geo.  **DRI:** Sampath Ranasinghe

Completed:

- Create and update [a single handbook page](https://internal.gitlab.com/handbook/engineering/gitlab-com-disaster-recovery), and deprecate resources in other locations. **DRI:** Fabian Zimmer
- [Define and clarify the FY24 recovery goals](https://app.ally.io/objectives/2228900?time_period_id=155987) **DRI:** Steve Loyd

## Roles and Responsibilities

| Working Group Role     | Person                  | Title                                          |
|------------------------|-------------------------|------------------------------------------------|
| Executive Stakeholder  | Jörg Heilig             | CTO                                            |
| Facilitator/DRI        | Andras Horvath          | Engineering Manager, Gitaly                    |
| Product Management DRI | Mark Wood               | Senior Product Manager, Gitaly                 |
| Member                 | Ethan Guo               | Director, Infrastructure Technical Program Management |
| Member                 | Gerardo Lopez-Fernandez | Engineering Fellow, Infrastructure             |
| Member                 | Chun Du                 | Director of Engineering, Enablement            |
| Member                 | Juan Silva              | Fullstack Engineering Manager, Geo             |
| Member                 | Sampath Ranasinghe      | Senior Product Manager, Geo                    |
| Member                 | John Jarvis             | Staff SRE, Infrastructure                      |
| Member                 | Michele Bursi           | Engineering Manager, Delivery                  |
| Member                 | Sami Hiltunen           | Senior Backend Engineer, Gitaly                |
| Member                 | Joshua Lambert          | Director of Product Management, Enablement     |
| Member                 | Ahmad Sherif            | Senior SRE, Infrastructure                     |
| Member                 | Fabian Zimmer           | Director of Product Management, SaaS Platforms |
| Member                 | Nick Westbury           | Senior Software Engineer in Test, Geo          |
| Member                 | Sean Carroll            | Engineering Manager, Source Code               |

## Related Links

- [Disaster Recovery at GitLab](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/library/disaster-recovery/index.md)
- [DR presentation (internal)](https://docs.google.com/presentation/d/1-8KxO31IvOb7DYT3N0j8Add-3A0FZquIYQ2vjmLLU2s/edit#slide=id.g1319217f3a3_0_0)
