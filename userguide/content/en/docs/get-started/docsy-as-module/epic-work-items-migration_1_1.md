---
title: "Epic Work Items Migration"
description: "Stage Working Group for Epics to Work Items migration plan and status"
---

Epics to Work Items conversion plan and status

## Attributes

|Property|Value|
|---|---|
|Date Created|2023-10-02|
|Target End Date| 2024-07-12 |
|Slack|#s_plan, #f_work-item, #g_product_planning (only accessible from within the company)|
|Google Doc|[Agenda](https://docs.google.com/document/d/1Mh0U-cH0n9FqyAPn4_OMMvpTTJm74-WAmz5ewLVOuJM/edit) (only accessible from within the company)|
|Epic|[&9290](https://gitlab.com/groups/gitlab-org/-/epics/9290)|
|Overview & Status|See [Exit Criteria Progress](#exit-criteria)|

### Context

Plan stage is developing [Work Items](https://docs.gitlab.com/ee/architecture/blueprints/work_items/) as a platform to build GitLab features like Issues,
Epics, Tasks, etc. to be more extensible to meet product needs. This working group is focused on the [migration of Epics to Work Items](https://gitlab.com/groups/gitlab-org/-/epics/9290)
and provides detailed insight on individuals involved in the effort, the technical plan for the migration, as well as current status and exit criteria.

#### Weekly Sync

WG members meet for sync call every Thursday at 14:30 UTC to discuss the actions taken since last call as well as steps for next week, meeting is recorded and publicly shared in [GitLab Unfiltered YouTube channel](https://www.youtube.com/playlist?list=PL05JrBw4t0KrEtDK8xRruSY5VtQb9DmdX).

<iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PL05JrBw4t0KrEtDK8xRruSY5VtQb9DmdX" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

### Exit Criteria

Updates are being tracked in [&11777](https://gitlab.com/groups/gitlab-org/-/epics/11777) (updated every Monday).

This Working Group has the following exit criteria:

1. A working Epic Work Item Type is available to all customers running the latest version of GitLab.
1. The implementation does not create significant scaling or saturation risks for at least 6 months, and does not block feature development.
1. A plan is in place to clean up technical debt within 6 months.

#### Stage 1 - Achieving Feature Parity between Epics and Work Items

|Task|Progress|DRI (group or individual)|
|---|---|---|
|[Add native support for work items at group-level](https://gitlab.com/groups/gitlab-org/-/epics/8308)| 90% | Project Management |
|[Add support for relating work items based on different relationship types](https://gitlab.com/groups/gitlab-org/-/epics/7459)| 100% | Product Planning |
|[Add support for relating legacy issues as children to work items](https://gitlab.com/groups/gitlab-org/-/epics/10851)| 90% | Product Planning |
|[Add support for cross-group hierarchies in Hierarchy widget](https://gitlab.com/gitlab-org/gitlab/-/issues/424896)| 100% | Product Planning |
|[Start and Due date inheritance support in Work Items](https://gitlab.com/groups/gitlab-org/-/epics/11409)| 60% | [Kassio Borges](/handbook/company/team/#kassio) (BE) & [Himanshu Kapoor](/handbook/company/team/#himkp) (FE) - Knowledge |
|[Roll-up statistics around children count, weight sum, and health status in Hierarchy widget](https://gitlab.com/groups/gitlab-org/-/epics/11402)| 5% | Project Management |
|[Add support for Ancestor widgets](https://gitlab.com/groups/gitlab-org/-/epics/9291)| | |

#### Stage 2 - Epics data migration plan

|Task|Progress|DRI (group or individual)|
|---|---|---|
|Block widgets which will be unavailable for migrated Epics| | |
|Setup synchronization between Epics table and Work Items table in database| | |
|Setup synchronization of widgets data between Epics and Work Items along with handling change in Epic Work Item ID| | |
|Introduce Work Item Epic creation ability at Group level| | |

#### Stage 3 - Post-migration roll-out preparation

|Task|Progress|
|---|---|
|[Ensure REST API interoperability with migrated Epics](https://gitlab.com/groups/gitlab-org/-/epics/10845)| |
|Determine migration strategy for unique ID and IID of migrating epics to ensure that stale reference redirect| |
|Database cleanup for stale columns and implementation logic of legacy Epics| |

### Roles and Responsibilities

| Working Group Role | Work Stream/Specialism(s) | Person | Title |
|---|---|---|---|
|Facilitator & Functional Lead| Backfilling (3) | [Alexandru Croitor](/handbook/company/team/#acroitor)|Senior Backend Engineer, Plan:Project Management|
|Functional Lead| Q4 Facilitator | [Kushal Pandya](/handbook/company/team/#kushalpandya)|Fullstack Engineering Manager, Plan:Product Planning|
|Functional Lead| Feature Parity (1) | [Eugenia Grieff](/handbook/company/team/#egrieff)|Senior Backend Engineer, Plan:Product Planning|
|Functional Lead| Syncing (2) | [Felipe Artur](/handbook/company/team/#felipe_artur)|Senior Backend Engineer, Plan:Optimize|
|Functional Lead| Delegation (4) | [Nicolas Dular](/handbook/company/team/#nicolasdular)|Staff Backend Engineer, Plan:Product Planning|
|Functional Lead| Create legacy epics for WI epics (5) | [Mario Celi](/handbook/company/team/#mcelicalderong)|Backend Engineer, Plan:Project Management|
|Functional Lead| Customer Pilot (6) | [Heinrich Lee Yu](/handbook/company/team/#engwan)|Staff Backend Engineer, Plan:Project Management|
|Member| | [Kassio Borges](/handbook/company/team/#kassioborges)|Staff Backend Engineer, Plan:Knowledge|
|Member| | [Himanshu Kapoor](/handbook/company/team/#himkp)|Senior Frontend Engineer, Plan:Knowledge|
|Member| | [Adam Hegyi](/handbook/company/team/#ahegyi)|Staff Backend Engineer, Plan:Optimize|
|Member| | [Coung Ngo](/handbook/company/team/#cngo)|Senior Frontend Engineer, Plan:Project Management|
|Member| | [Florie Guibert](/handbook/company/team/#fguibert)|Senior Frontend Engineer, Plan:Product Planning|
|Member| | [Rajan Mistry](/handbook/company/team/#ramistry)|Frontend Engineer, Plan:Product Planning|
|Member| | [Abhilash Kotte](/handbook/company/team/#akotte)|Sr Full Stack Engineer, Plan:Product Planning|
|Member| | [Donald Cook](/handbook/company/team/#donaldcook)|Fullstack Engineering Manager, Plan:Project Management|
|Member| | [Gabe Weaver](/handbook/company/team/#gweaver)|Senior Product Manager, Plan:Project Management|
|Member| | [Amanda Rueda](/handbook/company/team/#gweaver)|Senior Product Manager, Plan:Product Planning|
|Member| | [Jacki Bauer](/handbook/company/team/#jackib)|Product Design Manager, Plan|
