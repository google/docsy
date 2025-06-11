---
title: Tenant Scale Group
description: "The Tenant Scale Group is the direct outcome of applying our value of Iteration to the direction of the Database Scalability Working Group."
---

## About

The Tenant Scale group (formerly Pods or Sharding group) is part of the [Data Stores stage](/handbook/engineering/infrastructure/core-platform/data_stores/). We
offer support for groups, projects, and user profiles within our product, but
our main focus is a long-term horizontal scaling solution for GitLab.

This page covers processes and information specific to the Tenant Scale group.
See also the [direction page](https://about.gitlab.com/direction/enablement/tenant-scale/) and the
[features we support per category](/handbook/product/categories/features/#data-storestenant-scale-group).

### Contact

To get in touch with us, it's best to create an issue in the relevant
project (typically [GitLab](https://gitlab.com/gitlab-org/gitlab)) and add the
`~"group::tenant scale"` label, along with any other appropriate labels.

For urgent items, feel free to use the Slack channel (internal): [#g_tenant-scale](https://gitlab.slack.com/archives/g_tenant-scale).

### Vision

There are multiple proposals and ideas to increase horizontal scalability via
solutions such as database sharding and tenant isolation. The objective of this
group is to explore, iterate on, validate, and lead implementation of proposals
to provide a solution to accommodate GitLab.com's daily-active user growth.

As we brainstorm and iterate on horizontal scalability proposals, we will
provide implementation details, prototypes, metrics, demos, and documentation to
support our hypotheses and outcomes.

Currently, [Cells](https://docs.gitlab.com/ee/architecture/blueprints/cells/) is
our proposal of a new architecture for our SaaS that is horizontally scalable,
resilient, and provides a more consistent user experience.

### Goals

The executive summary goals for the Tenant Scale group include:

- Support GitLab.com's daily-active user growth
- Do not allow a problem with any given data store to affect all users
- Minimize or eliminate complexity for our self-managed use-case

### Team Members

The following people are permanent members of the Tenant Scale group:

{{% team-by-manager-slug manager="sissiyao" %}}

### Stable Counterparts

The following members of other functional teams are our stable counterparts:

{{% stable-counterparts manager="sissiyao" role="Tenant Scale|Principal Engineer, Data Stores|Senior Distinguished Engineer, Ops and Core Platform" %}}

## Projects

We are working on different large projects where each project has a [Directly Responsible Individual (DRI)](/handbook/people-group/directly-responsible-individuals/).
The role of the DRI involves helping to define the scope of the work needed for
the project, ensuring clarity on objectives with the responsibility of looking
forward 3-6 months to identify potential blocks or risks. Their work is not
limited to that area and they also work in other areas as needed.

| Project | DRI | Team |
| ------ | ------ | ------ |
| Application Readiness questions | Manoj | |
| [Organization for Cells 1.0](https://gitlab.com/groups/gitlab-org/-/epics/10018) | Alex | Abdul, Rutger, Peter, Zack Cuddy |
| [Organization isolation](https://gitlab.com/groups/gitlab-org/-/epics/11670) | Manoj | |
| Cells Services: [HTTP Routing](https://gitlab.com/groups/gitlab-org/-/epics/12491) | Thong | Bojan, Filipe Santos |
| Cells Services: [SSH Routing](https://gitlab.com/groups/gitlab-org/-/epics/12708) | Vasilii Iakliushin | |
| Cells Services: [Topology Service](https://gitlab.com/groups/gitlab-org/-/epics/13153) | Thong | Omar, Manoj, David Leach, Jonathon Sisson |
| Cells Services: [Database sequences](https://gitlab.com/groups/gitlab-org/-/epics/13155) | Prabakaran Murugesan | |

## Meetings

We are a globally distributed group and we communicate mostly asynchronously,
however, we also have synchronous meetings. It's unlikely everyone can attend
those meetings, so we record them and share written summaries ([agenda](https://docs.google.com/document/d/1W7QsQL_2wMLW9KJU5ZEZdyIqYtRC6_bwOoNXJUWNbiU/edit)).
Currently we have the following recurring meetings scheduled:

- Weekly Monday - Tenant Scale Group Sync (APAC/EMEA) 8:30AM UTC (2:30AM PDT)
- Weekly Thursday - Tenant Scale Group Sync (EMEA/AMER) 3:00PM UTC (7:00AM PDT)

## Work

The Product Manager (PM) compiles the list of issues following
the [product prioritization process](/handbook/product/product-processes/#prioritization),
with input from the team, Engineering Manager (EM), and other stakeholders.
The iteration cycle lasts from the 18th of one month until the 17th of the next month,
and is identified by the GitLab version set to be released.

Engineers are encouraged to work as closely as needed with their stable
counterparts. Quality engineering is included in our workflow via the
[quad planning process](/handbook/engineering/infrastructure/test-platform/quad-planning/).

### Milestone Planning

Before starting a milestone, the group coordinates using [planning issues](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks/-/issues/?label_name%5B%5D=Planning%20Issue).
We follow this process:

- The PM defines the goals of the milestone.
- The team members comment about the issues they consider relevant for the milestone.
- The PM and EM work together to decide the final list of issues.
- The whole team reviews the items lined up before the milestone begins.

### What To Work On

The primary source for things to work on is the [milestone prioritization board](https://gitlab.com/groups/gitlab-org/-/boards/5548886),
which lists all issues scheduled for the current cycle in priority order (from most to least important): p1,
p2, and p3. You should first pick up issues that have the highest priority, which are listed at the top of the first board column.
When you assign yourself to an issue, you indicate that you are working on it.

If anything is blocking you from getting started with the top issue immediately,
like unanswered questions or unclear requirements, you can skip it, as long as
you put your findings and questions in the issue.
This helps the next engineer who picks up the issue.

Usually issues are not directly assigned to people, except when
a person has clearly the most knowledge or context to work on an issue.
However, we encourage engineers to have a sense of ownership of specific
projects or epics to make significantly more impact in the company.

### Product Development Workflow

We follow the GitLab [product development workflow](/handbook/product-development-flow/)
guidelines. To get a high-level overview of the status of all issues in the
current milestone, check the [development workflow board](https://gitlab.com/groups/gitlab-org/-/boards/2594854).

The process primarily follows this:

- `workflow::ready for design` to signal an issue was ready to begin the design.
- `workflow::design` designer would use this to signal it was actively being worked on.
- `workflow::refinement` to signal that the design is complete and the issue is ready for engineering input. Please also tag the PM to assign the appropriate milestone for implementation.
- `workflow::planning breakdown` to signal that the design is complete and is ready to be broken down into sub-issues for implementation. To preserve context and decisions during the design process, where possible, we re-use the design issue by promoting it to an epic, and attach the implementation issues to it. That way, the epic can be used as the SSOT for design, all discussions are in one place, and we don't end up with inconsistencies between the original design issue and the corresponding implementation issue.
- `workflow::ready for development` to signal it was ready to be worked on for engineering.

### Development Workflow

We follow the GitLab [engineering workflow](/handbook/engineering/workflow/)
guidelines. To get a high-level overview of the status of all issues in the
current milestone, check the [development workflow board](https://gitlab.com/groups/gitlab-org/-/boards/2594854).

As owners of the issues assigned to them, engineers are expected to keep the
workflow labels on their issues up to date. When an engineer starts working an
issue, they mark it with the `workflow::in dev` label as the starting point
and continue [updating the issue throughout development](/handbook/engineering/workflow/#updating-workflow-labels-throughout-development).
Before closing an issue, it's important to add the `workflow::complete` label, because this is one
of the requirements for the completed items to appear in the Improvements and Bugs
overview of each month's release post. The process primarily follows this diagram:

``` mermaid
graph LR

  classDef workflowLabel fill:#428BCA,color:#fff;

  A(workflow::in dev):::workflowLabel
  B(workflow::in review):::workflowLabel
  C(workflow::verification):::workflowLabel
  F(workflow::complete):::workflowLabel

  A -- Push an MR --> B
  B -- Merged --> C
  C --> D{Works on production?}
  D -- YES --> F
  F --> CLOSE
  D -- NO --> E[New MR]
  E --> A
```

### Issue Boards

We track our work on the following issue boards:

- [Core Platform:Tenant Scale milestone prioritization](https://gitlab.com/groups/gitlab-org/-/boards/5548886?label_name[]=group%3A%3Atenant%20scale)
- [Core Platform:Tenant Scale cross-functional prioritization](https://gitlab.com/groups/gitlab-org/-/boards/4424394?label_name[]=group%3A%3Atenant%20scale)
- [Core Platform:Tenant Scale planning](https://gitlab.com/groups/gitlab-org/-/boards/7487616?label_name[]=group%3A%3Atenant%20scale)
- [Core Platform:Tenant Scale validation](https://gitlab.com/groups/gitlab-org/-/boards/7487708?label_name[]=group%3A%3Atenant%20scale)
- [Core Platform:Tenant Scale development workflow](https://gitlab.com/groups/gitlab-org/-/boards/2594854?label_name[]=group%3A%3Atenant%20scale)
- [Core Platform:Tenant Scale bugs](https://gitlab.com/groups/gitlab-org/-/boards/7487700?label_name[]=group%3A%3Atenant%20scale&label_name[]=type%3A%3Abug)
- [Core Platform:Tenant Scale release posts](https://gitlab.com/groups/gitlab-org/-/boards/7487687?label_name[]=group%3A%3Atenant%20scale)
- [Core Platform:Tenant Scale milestones](https://gitlab.com/groups/gitlab-org/-/boards/5549104?label_name[]=group%3A%3Atenant%20scale)
- [Core Platform:Tenant Scale team members](https://gitlab.com/groups/gitlab-org/-/boards/5549106?label_name[]=group%3A%3Atenant%20scale)
- [Core Platform:Tenant Scale important](https://gitlab.com/groups/gitlab-org/-/boards/1438588?label_name[]=group%3A%3Atenant%20scale)
- [Core Platform:Tenant Scale community contributions](https://gitlab.com/groups/gitlab-org/-/boards/7487739?label_name[]=group%3A%3Atenant%20scale&label_name[]=Community%20contribution)

### Tracking Dashboards

In addition to issue boards, we also track progress on major initiatives with bespoke dashboards such as the [Cells Progress Tracker](https://gitlab.com/gitlab-org/tenant-scale-group/cells-progress-tracker).

The team has also spun off [Epic Dashboards](https://gitlab.com/gitlab-org/tenant-scale-group/epic-dashboard) into a project that other teams can use to create their own epic-based tracking dashboards.

@manojmj is the creator and DRI of [Epic Dashboards](https://gitlab.com/gitlab-org/tenant-scale-group/epic-dashboard) and supports this project on a best-effort basis outside of core project responsibilities.

### Capacity Planning

We use a simple issue weighting system for capacity planning, ensuring a
manageable amount of work for each milestone. We consider both the team's
throughput and each engineer's upcoming availability from Time Off by Deel using a
[Google Apps Script](https://script.google.com/home/projects/1cH4Hrv03Kf_dlqPyxPdoyxWcV_x2d2u2PKNnGP_YwNjGifjcD4c29GKJ/edit).

The weights are intended to be used in aggregate, and what takes one person a
certain amount of time may be different for another, depending on their level of
knowledge of the issue. We should strive to be accurate, but understand that
they are estimates. Change the weight if it is not accurate or if the issue
becomes more difficult than originally expected. Leave a comment indicating why the
weight was changed and tag the EM and PM so we can better understand the scope
and continue to improve.

#### Weights

To weigh an issue, consider the following important factors:

- Volume of work: expected size of the change to the code base.
- Complexity:
  - Problem understanding: how well the problem is understood.
  - Problem-solving difficulty: the level of difficulty we expect to encounter.

When estimating development work, please assign an issue the appropriate weight:

| Weight     | Description                                                                                                                                                                                                                                                                                      | Examples                                                                                                                                                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1: Trivial | The simplest possible change. We are confident there will be no side effects. Negligible complexity.                                                                                                                                                                                             | Documentation updates, simple regressions, and other bugs that have already been investigated and discussed and can be fixed with a few lines of code, or technical debt that we know exactly how to address, but just haven't found time for yet. |
| 2: Small   | A simple change (minimal code changes), where we understand all of the requirements. Some small uncertainties exist but we are confident of a solution.                                                                                                                                          | Simple features, like a new API endpoint to expose existing data, or regular bugs or performance issues where all investigation has already taken place.                                                                                           |
| 3: Medium  | A change with a bigger code footprint (e.g. lots of different files, or tests affected). There are uncertainties that we will need to work through.                                                                                                                                              | Regular features, potentially with a backend and frontend component, or most bugs or performance issues.                                                                                                                                           |
| 5: Large   | A more complex change that will impact multiple areas of the codebase. There may also be some refactoring involved. Requirements are poorly understood and you feel there are multiple important gaps. We will need to break this issue into smaller pieces before we can begin a merge request. | Large features with a backend and frontend component, or bugs or performance issues that have seen some initial investigation but have not yet been reproduced or understood.                                                                      |

Anything with a weight of 5 or larger should be broken down if possible.

### Backlog Refinement

Every week the engineering team completes a backlog refinement process
to review upcoming issues. The goal of this effort is for all issues to have a
weight so we can more accurately plan each milestone and also improve our
knowledge sharing.

In addition to the backlog refinement process, engineers can estimate any
issues without following this backlog refinement process.

#### Step 1: Identifying Issues for Refinement

The team will identify issues that need to be refined using the
`workflow::refinement` label. If there are issues that are good
candidates for the backlog refinement process (without weight,
unclear requirements, etc.), please use the label. We will refine
a maximum of 5 issues per week.

The EM will use the [refinement script](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks/-/blob/main/scripts/refinement)
to generate an issue with all the issues identified for refinement.

#### Step 2: Refining Issues

Over the week, each engineer on the team will look at the list of issues
selected for backlog refinement. [Current backlog refinement issues](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks/-/issues/?label_name%5B%5D=workflow%3A%3Arefinement).

For each issue, team members will review the issues and provide:

- An estimated weight.
- A proposal of how to break down the issue into different issues or merge requests.

When refining issues, consider the following:

- Keep the conversation on the original issues.
- Update the issue description, implementation plan, and labels as more information is gathered.
- For efficiency, engineers can also skip the refinement of some issues depending on the feedback that we already have.
- Where the fix is clear and easy, engineers can assign the issue to themselves, give it a weight of 1 and push the fix.

#### Step 3: Finalizing Refinement

After engineers have had a chance to provide input, the EM or PM will:

- Assign a weight.
- Inform stable counterparts if there are any concerns.
- Remove the `workflow::refinement` label.
- Add the `workflow::ready for development` label.

For any issues that were not discussed and given a weight, we will work with
the engineers to see if we need to get more information from PM or UX.

### Retrospectives

We hold scheduled "per milestone" retrospectives, and can have ad-hoc "per project"
retrospectives.

#### Per Milestone

We have [milestone retrospectives issues](https://gitlab.com/gl-retrospectives/enablement-section/tenant-scale/-/issues).
These include the EM, PM, engineers, UX, and all stable counterparts.
Participation is highly encouraged for every milestone. For more information, see [group retrospectives](/handbook/engineering/management/group-retrospectives/) created on the 26th of each
month, for the currently running milestone.

#### Per Project

If an issue, a feature, or other sort of project turns into a
particularly useful learning experience, we may hold a synchronous or
asynchronous retrospective to learn from it. If you think something you're
working on deserves a retrospective:

1. [Create an issue](https://gitlab.com/gitlab-org/tenant-scale-group/group-tasks/-/issues) explaining why you want to have a retrospective and indicate whether this should be synchronous or asynchronous.
1. Include your EM and anyone else who should be involved (like the PM and counterparts).
1. Coordinate a synchronous meeting if applicable. Add all feedback from the retrospective to the issue for future reference.

## OKR

Each quarter we have a series of Objectives and Key Results (OKRs) for our
group. To find the current OKRs for this [quarter](/handbook/finance/#fiscal-year),
check the [OKR project](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Atenant%20scale&milestone_title=Started).

## Error Budgets

GitLab uses [error budgets](/handbook/engineering/error-budgets/) to measure the
availability and performance of our features. Each engineering group has its own
budget spend. The current 28-day spend for the Tenant Scale group can be found
in this [Grafana dashboard](https://dashboards.gitlab.net/d/stage-groups-detail-tenant_scale/stage-groups-tenant-scale-group-error-budget-detail?orgId=1).

An error budget exception of 99.85% was [approved](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/121190)
to allow the group to focus on long-term scalability work.

## Dashboards

You can find our group metrics in the [Tenant Scale Group Engineering Metrics page](/handbook/engineering/metrics/enablement/data-stores/tenant-scale).

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="tenant scale" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="tenant scale" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="tenant scale" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="tenant scale" >}}
{{< /tableau >}}
