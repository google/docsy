---
title: Plan:Product Planning Engineering Team
---

## Plan:Product Planning team

The Plan:Product Planning team works on both the backend and frontend parts of
GitLab's [Product Planning](/handbook/product/categories/#product-planning-group) category in the [Plan stage](/handbook/engineering/development/dev/plan/).

For more details about the vision for this area of the product, see the
[Plan stage](/handbook/engineering/development/dev/plan/) page.

### Team members

{{% team-by-manager-role "Fullstack Engineering Manager(.*)Plan:Product Planning" %}}

### Stable counterparts

{{% stable-counterparts manager-role="Fullstack Engineering Manager(.*)Plan:Product Planning" role="(.*)Plan:Product Planning$|Product Manager(.*)Plan Stage|Security(.*)Plan|Engineering(.*)Plan$|Principal(.*)Plan$|Group(.*)Plan" %}}

### Hiring chart

Check out our [jobs page](https://about.gitlab.com/jobs/) for current openings.

### Team metrics dashboard

We have a [metrics dashboard](https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard) intended to
track against some of the [Development Department KPIs](/handbook/company/kpis/#development-department-kpis), particularly
those around merge request creation and acceptance. From that dashboard, the
following chart shows [MR Rate](/handbook/engineering/performance-indicators/#engineering-mr-rate). Please reference the dashboard section below.

### Application performance dashboard

We have useful dashboards tracking the performance of parts of the application we're responsible for:

- Application dashboards; showing request throughput, latency, SQL query counts, cache hits, Sidekiq jobs for Web and API endpoints, git usage and error budgets. Also links to other useful resources in Kibana.
  - [Product Planning]
- The [Sitespeed Dashboard](https://dashboards.gitlab.net/d/product-plan/product-performance-plan?orgId=1); showing the results of ongoing synthetic tests against representative product pages. Useful for identifying changes in page load time (TTFB), LCP, etc.

## OKRs

Beginning FY24, we have moved away from Ally.io and have been using GitLab to track OKRs. Please note that the links below are only accessible to GitLab team members.

### Active Quarter OKRs

The current quarter (FY25-Q3) OKRs are visible [here](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=title_asc&state=opened&label_name%5B%5D=devops%3A%3Aplan&label_name%5B%5D=group%3A%3Aproduct%20planning&first_page_size=100).

### Previous Quarter OKRs

All the previous quarter OKRs are available [here](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=title_asc&state=closed&label_name%5B%5D=devops%3A%3Aplan&label_name%5B%5D=group%3A%3Aproduct%20planning&first_page_size=100).

## Work

See the [Plan stage page](/handbook/product/categories/#plan-stage) and the [Plan:Project Management backend team page](/handbook/engineering/development/dev/plan/project-management/).

### Milestone Planning

The week after a release of current milestone, planning issue for next milestone is created by automation and is available [here](https://gitlab.com/gitlab-org/plan-stage/product/-/issues/?sort=title_asc&state=opened&label_name%5B%5D=group%3A%3Aproduct%20planning&first_page_size=100).
Once the issue is created, Product Manager fills out initial information (i.e. broader theme for the milestone, product priorities, deliverable areas, etc.) within the issue description and refines the [Milestone Planning board](https://gitlab.com/gitlab-org/gitlab/-/boards/7695201?not[label_name][]=product%20work&label_name[]=group%3A%3Aproduct%20planning&milestone_title=Started).

Beginning with [17.8](https://gitlab.com/groups/gitlab-org/-/milestones/107#tab-issues), we have altered the way issues are scheduled for milestones. Refer to following steps on how it is done;

1. Product Manager, in collaboration with Engineering Manager and Product Designer, identifies list of issues that are candidates for upcoming milestone.
    - Number of issues, along with weight and effort is determined based on rolling capacity (i.e. work carried over from previous milestones), available capacity from the team in upcoming milestone, as well as potential time-off and holidays.
    - These issues have `~workflow::planning breakdown` label present along with the assigned milestone, implying that they're ready to be triaged by engineering.
2. Identified candidate issues list is posted in the Milestone Planning issue by PM by last week of the calendar month.
3. Engineering Manager then assigns these issues to all the team members **two weeks before** the start of upcoming milestone.
    - Assignees of issues are picked based on team member availability as well as expressed interest by a team member to work on a specific product area.
    - Additionally, if the assignee is known to be not familiar with the product area of an issue, SME can be optionally included in the triage notification to encourage collaboration during triage.
4. Along with assignment of issues, EM also includes a comment to notify assignees (and SMEs, if included) that they allocate some time during the week to triage the issues by following [Definition of Ready](#definition-of-ready), and wrap it up before the last week of current milestone.
    - The goal of this triage exercise is to ensure that assignees know what they'll be working on in the next milestone, ensuring they have all the information needed to begin implementation, and eventually move the issue to `~workflow::ready for development` state.
    - There can be multiple outcomes during triaging of the issue as follows;
         - Issue is too big as a single issue (eg; Weight 4 or higher), in this case, we break down that issue into either sub-tasks (if shipping in the same milestone) or multiple issues (if shipping in multiple milestones).
         - Issue has a blocking dependency that either doesn't have a tracking issue or the issue is present in the backlog or future milestone. In this case, we ensure that the relevant issue is brought up in the upcoming milestone to unblock the dependency and is triaged similarly and the original issue is moved out of the milestone in coordination with the Product Manager as per the schedule of blocking issue.
         - Issue is not feasible to be implemented at this point, in this case, raise it mentioning PM and EM in the issue so that appropriate steps can be taken.
5. At the end of triaging an issue, if it was determined that issue is ready to be worked on, ensure that issue has following attributes present;
    - Workflow label changed to `~workflow::ready for development`.
    - An implementation plan present within the issue description (this may include technical details too).
    - Child tasks or related issues in case original issue was broken down.
    - Appropriate weight representing approximate effort.
6. In a week prior to the start of the upcoming milestone, EM's responsibility is to ensure that all candidate issues have either moved to `~workflow::ready for development` as per guidance in point 5, or an appropriate triage action is taken as outlined in point 4.

### Capacity Planning

#### Estimating effort

When estimating the effort involved in upcoming work, we use the same approach and numerical scale as other groups in the Plan stage.

{{% include "includes/engineering/plan/estimating-effort.md" %}}

#### Weighing bugs

{{% include "includes/engineering/plan/weighing-bugs.md" %}}

#### Consider a Spike and/or a Design Document

Work that arrives in ~"workflow::ready for development" that is out of scope
or ill-defined should be
[returned to ~"workflow::planning breakdown" for further refinement](/handbook/product-development-flow/#build-phase-2-develop--test).
To avoid the disruption this introduces we try to reduce the number of times
it happens by planning more carefully. While it's not always possible, we aim
to identify complexity before the build phase, such as by assigning an engineering
[DRI](/handbook/people-group/directly-responsible-individuals/) during the design and validation phase.

However, sometimes complexity can't be accurately estimated until development
work starts. If you anticipate this during planning, consider creating a spike to produce a
design document. Notify the participants in the issue, especially the PM, that
a spike is required, create a separate issue and follow these
steps:

1. Title the issue with the goal of the spike;
1. Add the ~spike, ~backend, and corresponding stage/group labels;
1. List the unknowns and questions to be answered;
1. List decisions, architectural or otherwise, that need to be made;
1. Identify specializations required to complete the spike (e.g. Backend, Frontend and UX) assign a DRI from each;
1. Mark the issue as blocking the original, and
1. Label with ~"workflow::ready for development" and assign to the current
milestone.

The deliverable is a design document that answers the questions set out in the
issue description. This can simply be the issue itself, containing a summary
of the discussion in the description, answers to the questions and links to
any PoC MRs produced.

#### Collaborating to Improve Velocity

As a team we often work on features that require close collaboration. We've identified a list of techniques and characteristics that help projects like this proceed at a pace that is sustainable, predictable, and challenging, yet rewarding. An example of such feature was [Epic Linking](https://gitlab.com/groups/gitlab-org/-/epics/7546).

1. Feature is designed and broken down in advance of milestone start, including a [spike](#consider-a-spike-andor-a-design-document) if appropriate.
1. Participants in the spike take part in delivery of the feature.
1. Prior to closing the description is updated with Acceptance Criteria, with sign-off by each assignee + PM. This is what will be delivered.
1. For efforts that are part of larger initiatives (like [Work Items](https://docs.gitlab.com/ee/development/work_items.html)), architectural documents are kept up to date with larger decisions; for example, around API design or functionality.
1. Requirements are well-defined with a goal that is achievable within a single milestone and provides business value. For larger features, work may be spread out over several milestones.
1. Items that must be delivered in separate milestones are identified and prioritized first; such as migrations, security issues, and other [multi-version compatibility](https://docs.gitlab.com/ee/development/multi_version_compatibility.html) issues.
1. The stable counterpart from documentation is included at the start of the spike.
1. Reviews are kept inside the team where possible to ensure domain expertise, capacity and a low level of context switching.
1. EM and PM work to remove or limit unneccessary/distracting work.
1. Feature is set as primary deliverable.
1. Due dates defined well in advance.
1. DRIs assigned to every upcoming and in-progress piece of work.
1. Use of Slack and synchronous communication to capture regular updates.
1. If team members have PTO during the milestone, make a plan to hand over work in progress to another team member.

### Collaborating across disciplines

#### Workflow Labels

Most issues, especially features, involve working with other disciplines. A
single issue will often be shared between frontend and backend and it
can be difficult to know which workflow label should be applied, especially
when progress is at different stages.

To ensure visibility for other team-members, for issues with a frontend and
backend component:

- Assign yourself as early as possible if you have capacity to work on it;
- When both frontend and backend DRIs are assigned, consider hosting a small kickoff discussion.
- When the backend work is merged and verified add [the ~"backend complete" label](#using-the-backend-complete-label).

We value [velocity over predictability](/handbook/engineering/development/principles/)
so use your own judgement on whether you should wait for your counterpart to
get involved before proceeding with development.

#### Using the ~"backend complete" label

The ~"backend complete" label is added to issues with multiple specializations (usually backend and
frontend) to indicate that the backend component is complete. Backend engineers should add this label when the backend work is
functionally complete, merged and verified but frontend, or other work is ongoing.

### Definition of Ready

During the planning and breakdown process we usually need to make issues and tasks that outline the technical work required.

A Definition of Ready is an agreed set of guidelines for ensuring an issue or task is ready to be picked up and worked on. Its job is to provide a reference that we can use when deciding whether we can add the 'ready for development' workflow label and expect somebody to be able to complete the work.

To determine whether an issue or task is suitable to be deemed `ready for development`, consider the following Definition of Ready.

1. The work is described in sufficient detail. A reader without previous context or assumed knowledge is able to understand what work is to be undertaken. What we're doing and why we're doing it is described.
2. Acceptance Criteria or Requirements are clearly defined. This should help the assignee understand the scope of the work and verify the intended happy/sad paths are functional and tested.
   - Including the relevant license level and feature flags in the Acceptance Criteria or Requirements is also advised.
3. Other work that blocks or is blocked by the work is linked with the correct relationship.
4. Relevant resources such as designs, documents, and external links are attached.
5. Cross-functional dependencies are described; such as needing to ask for Technical Writing assistance.
6. Documentation that needs to be updated or added is linked.
7. In case of feature development, a weight has been added and confirmed with at least one other engineer (preferably a domain expert).
   - In case an item is weighed as `4` or above, domain expert can provide guidance on breaking down this issue into separate issues (or tasks).

> During the process of populating an Issue or Task for engineering work, we will probably need to ask questions for extra clarity or to help prevent us from making assumptions. We may also feel we don't have enough information to be able to properly break down work into suitably sized chunks. Consider [a spike](#consider-a-spike-andor-a-design-document) where the path forward is not clear.

#### Why?

During the planning/breakdown process, it's important that we keep in mind a couple of things:

1. The author of the issue/task may not be the person to work on it
2. We might not start working on the issue/task right away

Our Definition of Ready should help ensure that our work is defined well enough that the two points above are not problems.

Due to our async nature and distributed team, treating a Definition of Ready as a hard quality gate could have a negative effect on productivity. Because of this, the Definition of Ready should be used as a guide rather than as rules and we shouldn't prevent work from being picked up if an issue/task doesn't adhere to the Definition of Ready perfectly.

Issues and tasks are mutable — we can always go back and change plans, add missing context, document decisions made during development, etc.

#### Health Status

To help with visibility of whether or not an issue can be delivered in a milestone, the team uses health status to communicate quickly.
At the beginning of a milestone, all issues relating to the primary deliverable are assigned the "On track" status. Throughout the milestone, feature DRIs are responsible for updating issues statuses when necessary. If the health status is set to a status that is not "On Track", feature DRIs should leave a comment with additional details about why and if there's a way others on the team can help.
Using health status allows stakeholders, such as product and engineering managers, designers, and other engineers, to get a quick and easy overview of what is unlikely to make it into the current milestone.

#### Documentation

Documentation should accompany code for any [new or changed functionality](/handbook/product/ux/technical-writing/workflow/#for-a-product-change) as per our
[definition of done](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#definition-of-done). This can become tricky when collaborating on a feature that is
behind a feature flag.

Since all feature flags start as disabled by default, we should aim to document the
feature as soon as it's safe for testing by users using the [feature flag template](https://docs.gitlab.com/ee/development/documentation/feature_flags.html#features-disabled-by-default).
Don't wait until a feature is performant and stable to document it, instead do so once
it's secure and won't leave data in a corrupt, interim state.

Try to include docs with the first MR to introduce usable functionality. If this is
an API addition with no UI, document that and allow the FE engineers to update it as
work proceeds. As the feature flag rollout proceeds, the [documentation should be updated](https://docs.gitlab.com/ee/development/documentation/feature_flags.html#features-that-became-enabled-by-default).

This avoids the rush to provide documentation that often accompanies the release cutoff.

### Dashboards

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="product planning" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="product planning" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="product planning" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="product planning" >}}
{{< /tableau >}}

Detailed metrics are available on the [Engineering Metrics page](/handbook/product/groups/product-analysis/engineering/dashboards/).

Product Planning is part of a test of new MR sub-type labels which are designed to make it easier to understand which top-level type should be applied. You can read more about them in the [Work Type Classification](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification) section of the metrics page.

Note: MR Type may differ from issue type. For example, a ~"maintenance::dependency" change that supports a new ~"feature::enhancement".

### Picking something to work on

The team [Build Board](https://gitlab.com/groups/gitlab-org/-/boards/1569369?label_name[]=devops%3A%3Aplan&label_name[]=group%3A%3Aproduct%20planning&milestone_title=Started) always shows work in the current
release, with [workflow columns](/handbook/product-development-flow/) relevant to implementation. Filtering it by
~backend shows issues for backend engineers to work on.

It's OK to not take the top item if you are not confident you can solve
it, but please post in [#s_plan](https://gitlab.slack.com/archives/s_plan) if that's the case, as this probably
means the issue should be better specified.

### Direction Items

Items that are customer-facing deliverables and high impact are labeled with ~"direction". We strive to have these items in production by two days before the release cut-off to give ample time for validation.

#### High Severity Issues

{{% include "includes/engineering/plan/high-severity-items.md" %}}

### Working on unscheduled issues

Everyone at GitLab has the freedom to manage their work as they see fit,
because [we measure impact, not activity](/handbook/values/#results). Part of this is the
opportunity to work on items that aren't scheduled as part of the
regular monthly release. This is mostly a reiteration of items elsewhere
in the handbook, and it is here to make those explicit:

1. We expect people to be [managers of one](/handbook/values/#efficiency), and we [use GitLab ourselves](/handbook/values/#collaboration). If you see something that you think
   is important, you can [request for it to be scheduled](/handbook/engineering/workflow/#requesting-something-to-be-scheduled), or you can
   [work on a proposal yourself](/handbook/values/#iteration), as long as you keep your
   other tasks in mind.
1. From time to time, there are events that GitLab team-members can participate
   in, like the [issue bash](https://about.gitlab.com/community/issue-bash/). Anyone is welcome
   to participate in these.
1. If you feel like you want to have some specific time set aside, but
   aren't interested in the topics of an existing event, feel free to
   label issues with "For Scheduling" and copy your manager for visibility.

When you pick something to work on, please:

1. Follow the standard workflow and assign it to yourself.
1. Share it in [#s_plan](https://gitlab.slack.com/archives/s_plan) - if not even more widely (like in [#development](https://gitlab.slack.com/archives/development)
   or [#backend](https://gitlab.slack.com/archives/backend)).

## Useful links

- [:Plan:Product Planning](https://gitlab.com/groups/gitlab-org/-/boards/1569369?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=devops%3A%3Aplan&not[label_name][]=group%3A%3Aproject%20management]) - Apply a milestone filter to see work in the current release
- [#s_plan](https://gitlab.slack.com/archives/s_plan) in Slack
- [Recorded meetings](https://www.youtube.com/playlist?list=PL05JrBw4t0KoceqcTneOVmAzhEp6NinY0)
- [Retrospectives](https://gitlab.com/gl-retrospectives/plan/issues?scope=all&utf8=%E2%9C%93&state=all&label_name[]=retrospective)
- [Group Conversations](https://gitlab-org.gitlab.io/group-conversations/plan/) (archive; group conversations now happen at a the
  [section level](/handbook/company/structure/#organizational-structure))
