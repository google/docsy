---
title: "Plan:Project Management"
---

### Plan: Project Management {#welcome}

[View all team members and stable counterparts](/handbook/product/categories/#project-management-group)

The responsibilities of this collective team are described by the [Project Management Group](/handbook/product/categories/#project-management-group). Among other things, this means working on GitLab's functionality around work items, boards, milestones, iterations, to-do list, time tracking, planning analytics, and notifications.

- I have a question. Who do I ask?

In GitLab issues, questions should start by mentioning the Product Manager (`@gweaver`). For UX questions, mention the Product Designer (`@nickleonard`). GitLab team-members can also use [#s_plan](https://gitlab.slack.com/messages/C72HPNV97).

### Direction

[GitLab](https://about.gitlab.com/direction/) > [Dev Section](https://about.gitlab.com/direction/dev/) > [Plan Stage](https://about.gitlab.com/direction/plan/) > [Project Management Group](https://about.gitlab.com/direction/plan/project_management/)

### Performance Indicators

#### Customer Value

- [Paid Monthly Active Users (Paid GMAU)](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/3315ab7c-ed1d-4053-bba8-cb8fc870af2b/AllGMAU?:iid=1)
- [Monthly Active Users](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting/97aea9ea-11af-4f4e-8e6b-21db9738de2b/PaidGMAU?:iid=1)
- [Team Planning and Planning Analytics Category Maturity](https://about.gitlab.com/direction/#maturity)
- System Usability Score (SuS) - Decrease the count of detractors attributable to the Project Management product surface area on a rolling quarterly basis

#### Product Quality

- Target [Error Budget](https://dashboards.gitlab.net/d/stage-groups-project_management/stage-groups-group-dashboard-plan-project-management?orgId=1) of `> 99.95%`
- Escaped defects - The count of bug or security issues filed for defects or vulnerabilities found on canary or production on a rolling monthly basis

#### Process

- Open MR Age (OMA)
- Open MR Review Time (OMRT)
- Merge Request Rate - Average MRs per engineer on a rolling monthly basis
- Lead Time - The median number of days it takes for an issue to flow throw `workflow::validation backlog` to `closed`.
- Validation Track Cycle Time - The median number of days it takes for an issues to flow through `workflow::validation backlog` to `workflow::planning breakdown`.
- Build Track Phase 1 Cycle Time - The median number of days it takes for an issues to flow through `workflow::planning breakdown` to `workflow::ready for development`.
- Build Track Phase 2 Cycle Time - The median number of days it takes for an issues to flow through `workflow::ready for development` to `closed`.
- Adoption of Product Development Flow workflow labels

### History of Process Improvement Efforts

| Goal | Status | Issue |
| --------------- | ------ | ----- |
| > 90% of issues correctly reflect their current Product Development Workflow stage | In Progress | https://gitlab.com/gitlab-org/plan/-/issues/442 |
| Engineering committed issues in the current release have the `Deliverable` label applied by the 17th each month | In Progress | https://gitlab.com/gitlab-org/plan/-/issues/442 |

### How we work

- In accordance with our [GitLab values](/handbook/values/).
- Transparently: nearly everything is public, we record/livestream meetings whenever possible.
- We get a chance to work on the things we want to work on.
- Everyone can contribute; no silos.
- We do an optional, asynchronous daily stand-up in [#s_plan_standup](https://gitlab.slack.com/messages/CF6QWHRUJ).

#### Capacity Planning

When we're planning capacity for a future release, we consider the following:

1. Availability of the teams during the next release. (Whether people are out of the office, or have other demands on their time coming up.)
1. Work that is currently in development but not finished.
1. Historical delivery (by weight) per group.

The first item gives us a comparison to our maximum capacity. For instance, if the team has four people, and one of them is taking half the month off, then we can say the team has 87.5% (7/8) of its maximum capacity.

The second item is challenging and it's easy to understimate how much work is left on a given issue once it's been started, particularly if that issue is blocking other issues. We don't currently re-weight issues that carry over (to preserve the original weight), so this is fairly vague at present.

The third item tells us how we've been doing previously. If the trend is downwards, we can look to discuss this in our [retrospectives](#retrospectives).

Subtracting the carry over weight (item 2) from our expected capacity (the product of items 1 and 3) should tell us our capacity for the next release.

#### Workflow

Issues and epics generally follow our [Product Development Flow](/handbook/product-development/product-development-flow/).

Starting in January 2022, we will be running a 3-6 month experiment to shift the planning cadence from milestones to iterations with the primary goal of planning in smaller batches to enable more timely, better decision making. Iteration planning will take place via our 30 minute weekly Engineering/Product/UX sync. Only issues that have been weighted and marked as `~workflow::ready for development` will be scheduled into upcoming iterations. While we will be leveraging iterations, we will still follow our documented [product development timeline](/handbook/engineering/workflow/#product-development-timeline)

Project Management Boards:

- [Validation Track](https://gitlab.com/groups/gitlab-org/-/boards/4058642?label_name[]=group%3A%3Aproject%20management)
- [Build Track](https://gitlab.com/groups/gitlab-org/-/boards/1235826?label_name[]=group%3A%3Aproject%20management)
- [Iteration Planning](https://gitlab.com/groups/gitlab-org/-/boards/2528314?label_name[]=group::project+management)
- [Milestone Planning](https://gitlab.com/groups/gitlab-org/-/boards/1910149?label_name[]=group%3A%3Aproject%20management)
- [Team](https://gitlab.com/groups/gitlab-org/-/boards/2089576)

#### Themes

A small number of high priority features will be chosen as 'themes' for a period of time. Themes provide an opportunity for the whole team to rally around a deliverable, even if they don't contribute directly to it. These items are given especially close attention by all those involved with a view to delivering small iterations and keeping work unblocked. There should never be more than two themes in progress at a time per team.

- A Slack channel is created with the convention #f_[feature name].
- An epic hierarchy is created with sub-epics mapping to iterations, each achievable within a milestone.
- Iterations are broken into multiple issues that can be accomplished independently, and PMs schedule those as normal.
- Other actions may be established, such as regular 'office hours' calls.

Team-members work together to continuously refine the iterations as complexity is revealed.

Examples of successful themes:

1. **Requirements Management** ([#f_requirements-management](https://app.slack.com/client/T02592416/CUEQBQ7K8), [Epic](https://gitlab.com/groups/gitlab-org/-/epics/2703))
1. **Jira Importer** ([#f_jira-importer](https://app.slack.com/client/T02592416/CUS6GB2JH), [Epic](https://gitlab.com/groups/gitlab-org/-/epics/2738))

#### Talking With Customers

In a perfect world, we would have cross-functional representation in every conversation we have with customers. To help work towards realizing this, anyone who is scheduling a call with a customer via sales, conducting usabiity reasearch, or generally setting up a time to speak with customers or prospects is encouraged to add [the Plan Customer Interviews calender](https://calendar.google.com/calendar/u/0/embed?src=gitlab.com_5icpbg534ot25ujlo58hr05jd0@group.calendar.google.com) as an invitee to the event. This will automatically populate the shared calendar with upcoming customer and user iteractions. All team members are welcome and encouraged to join -- even if it's just to listen in and get context.

You can subscribe to the calendar and invite it as a participant in a customer meeting that you are scheduling using the URL [gitlab.com_5icpbg534ot25ujlo58hr05jd0@group.calendar.google.com](mailto:gitlab.com_5icpbg534ot25ujlo58hr05jd0@group.calendar.google.com).

#### Retrospectives

The Plan stage conducts monthly retrospectives in GitLab issues.
These are confidential during the initial discussion,
then made public in time for each month's [GitLab retrospective]. For
more information, see [team retrospectives].

The retrospective issue is created by a scheduled pipeline in the
[async-retrospectives] project. For more information on how it works, see that
project's README.

- [GitLab retrospective](/handbook/engineering/management/group-retrospectives/)
- [team retrospectives](/handbook/engineering/management/group-retrospectives/)
- [async-retrospectives](https://gitlab.com/gitlab-org/async-retrospectives)
- [retros](https://gitlab.com/gl-retrospectives/plan/issues?scope=all&utf8=%E2%9C%93&state=all&label_name[]=retrospective)

### Product Shadowing

Engineering team-members can shadow a product stable-counterpart. Shadowing sessions last two working days, or the equivalent split over multiple days to maximize experience with different functions of the role. To shadow a counterpart on the team:

1. Create an issue in the [plan](https://gitlab.com/gitlab-org/plan) project tracker using the `Product-Shadowing` template;
1. Create a WIP MR to this page to update the table below, adding your name and issue link, and
1. When your counterpart is assigned to the issue, add their name, remove WIP status and assign to your manager for review.

| Month | Engineering counterpart | Product counterpart | Issue link |
| ----- | ----------------------- | ------------------- | ---------- |
| 2020-07 | Charlie Ablett ([@cablett](https://gitlab.com/cablett)) | Keanon O'Keefe ([@kokeefe](https://gitlab.com/kokeefe)) | [gitlab-org/plan#118](https://gitlab.com/gitlab-org/plan/-/issues/118) |
| 2020-10 | Jan Provaznik ([@jprovaznik](https://gitlab.com/jprovaznik)) | Gabe Weaver ([@gweaver](https://gitlab.com/gweaver)) | [gitlab-org/plan#185](https://gitlab.com/gitlab-org/plan/-/issues/185) |

### Speed Runs

- Labels
  - [Scoped Labels](https://youtu.be/ebyCiKMFODg)
- Issues
  - [Description Change History](https://youtu.be/-JgfJSSLYlI)
