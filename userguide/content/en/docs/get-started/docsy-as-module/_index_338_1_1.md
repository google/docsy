---
title: "Gitaly Team"
---

## What is Gitaly?

The Gitaly team is responsible for building and maintaining systems to ensure
that the Git data storage tier of GitLab instances, and _GitLab.com in particular_,
is reliable, secure and fast. For more information about Gitaly, see the [README in the repository](https://gitlab.com/gitlab-org/gitaly/-/blob/master/README.md) and the [roadmap](#roadmap) below.

The team includes [Backend Engineers](/job-families/engineering/development/backend/#gitaly) and [SREs](/job-families/engineering/infrastructure/site-reliability-engineer/#gitaly) collaborating to deliver a reliable, scalable and fast data storage to our customers.

### Functional boundary

While GitLab is the primary consumer of the Gitaly project, Gitaly is a standalone product which can be used external to GitLab. As such, we strive to achieve a functional boundary around Gitaly. The goal of this is to ensure that the Gitaly project creates an interface to manage Git data, but does not make business decisions around how to manage the data.

For example, Gitaly can provide a robust and efficient set of APIs to move Git repositories between storage solutions, but it would be up to the calling application to decide when such moves should occur.

Processes fully independent of business inputs (such as repository maintenance) should be fully contained within Gitaly as they provide substantial value to anyone using the Gitaly project.

### Roadmap

Please see the public [product direction for Gitaly](https://about.gitlab.com/direction/gitaly/).

The [vision and principles](https://internal.gitlab.com/handbook/engineering/infrastructure/core-platform/systems/gitaly/roadmap/) driving the roadmap can be found in the internal handbook.

The current roadmap is [this epic board](https://gitlab.com/groups/gitlab-org/-/epic_boards/1058926?label_name[]=Roadmap&label_name[]=group%3A%3Agitaly). See [Roadmap planning](#roadmap-planning) below as to how this is managed.

#### Featured upcoming large architectural changes

- [Iterate on the design of object pools](https://docs.gitlab.com/ee/architecture/blueprints/object_pools/)
- [Rework repository backups](https://docs.gitlab.com/ee/architecture/blueprints/repository_backups/)
- [Gitaly Adaptive Concurrency Limit](https://docs.gitlab.com/ee/architecture/blueprints/gitaly_adaptive_concurrency_limit/)
- [Handle upload-pack traffic in a pure HTTP/2 server](https://docs.gitlab.com/ee/architecture/blueprints/gitaly_handle_upload_pack_in_http2_server/)
- [Transaction management in Gitaly](https://docs.gitlab.com/ee/architecture/blueprints/gitaly_transaction_management/)

## Stable Counterparts

The following members of other functional teams are our stable counterparts:

{{< engineering/stable-counterparts role="[&,] Systems:Gitaly( API)?" manager-role="Backend Engineering Manager, Gitaly" >}}

## How to contact the team

### Urgent issues and outages

If you're not part of the Support organization, please consider seeking help
from them first -- Support has better availability and can help in most common
cases.

If you still need help, please file an issue [here](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Gitaly). Post it on [#g_gitaly](https://gitlab.slack.com/archives/g_gitaly) for more immediate visibility and tag EM and PM, and the Support person you're working with,
and `@tier2-oncall-gitaly` to notify the Gitaly team member who is on
call.

#### On Call Rotation

Gitaly on-call should only be paged by the following people:

- SRE on-call or IMOC during **production incidents only**.
- Support Engineers or Support Managers during **customer emergencies**.

Use `/incident escalate` on Slack for these cases, then select the Gitaly EOC under On-call teams.
For all other cases please file an issue under [Customer issues](#customer-issues).

Please do not page on-call outside of these cases. If you're working on a
customer emergency but not part of Support, please contact Support instead!

##### Rotation

The [incident.io schedule](https://app.incident.io/gitlab/on-call/schedules/01JJWAE08T9WDE8T6D4VZPBNXE?startTime=2025-03-03T00%3A00%3A00.000%2B00%3A00&timePeriodOption=two_weeks&calendarToggle=timeline) is the
source of truth for who is on-call.

The rotation is staffed during working hours of team members (no weekends). This still covers 24h of workdays, given the distribution of team members, but without guarantees.

- Weekends are explicitly out of scope (not staffed), and escalation must fall back to the current EOC rotation.
- Given that responsibilities are only during working hours, there's no additional compensation unless explicitly specified otherwise.
- You can choose to take time in lieu via Workday, selecting `the On-Call Time in Lieu` option after a shift.

##### Expectations during on-call shift

- Refer to the [Responder Quick Start Guide](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/incident-io-onboard/oncall.md?ref_type=heads#responder-quick-start-guide) for a streamlined onboarding process.
**Note : All escalations to the Gitaly team will be made via incident.io**
- 15 minutes response time to a incident.io page while
  on-call. This does not apply to pings to the `@tier2-oncall-gitaly` Slack handle,
  which should be used to inform the Gitaly on-call of relevant happenings, but
  should not be used for emergencies.
  - The on-call is expected to be _available and reachable_ (but not necessarily actively working, as long as you can start the investigation within this SLO.)
  - If paged less than 15 minutes before the end of a shift, you still must respond and explicitly hand off the incident.
- Serve as point of contact for questions in the `#g_gitaly` channel as well as new Request For Help issues.
  - Acknowledge inquiries in the `#g_gitaly` channel on a best-effort basis.
  - Triage new Request for Help issues: establish urgency and work with EM/PM to assign a milestone.
- Ongoing production incidents and customer escalations are explicitly handed off by the outgoing on-call to the next Gitaly on-call using the incident channel on Slack.
- Team members are responsible for finding coverage for PTO and Holidays. Install [`incident.io` mobile application](https://play.google.com/store/apps/details?id=com.incidentio.incidentio&hl=en_IN), navigate to `Schedules` then click on the person icon with arrows to request for cover

### Customer issues

Please file an issue [here](https://gitlab.com/gitlab-com/request-for-help/-/issues/new?issuable_template=SupportRequestTemplate-Gitaly). Post it on [#g_gitaly](https://gitlab.slack.com/archives/g_gitaly) for more immediate visibility.

**A note on customer escalations and engagements**

We are happy to help when a customer needs it! But please keep in mind that we are primarily a _development_ team, not equipped for "field engineering".

Our _engineers_ can help, preferably [async](/handbook/company/culture/all-remote/asynchronous/), with:

- deep technical investigation based on _data_ and able technical collaboration, in close partnership with Support and CSM
- providing product-level fixes or improvements, work to be scheduled and results released as usual, under [direction of EM and PM](#working-with-product)
- improving our documentation if something's unclear

_Engineering Managers_ (`@jcaigitlab`) and _Product Managers_ (`@mjwood`) are also happy to engage with customers if you need assistance clarifying roadmaps, product features and timelines, or to ensure the correct prioritization.

We are not a good fit however if you need:

- advice on GitLab instance configuration or architecture in self-hosted scenarios ([Reference Architectures](https://docs.gitlab.com/ee/administration/reference_architectures/) and Professional Services can help)
- engagements without clear exit criteria (please clarify them first, "let's jump on a call to discuss" is usually in this category)
- long-term "advise us" scenarios (please refer to Support and the documentation, or engage Professional Services)

This [epic](https://gitlab.com/groups/gitlab-org/-/epics/11576) discusses possible development of this engagement model.

### Normal priority requests

To get Gitaly team work on something, it's best to create an issue on the [Gitaly issue tracker](https://gitlab.com/gitlab-org/gitaly/issues)
and add the `group::gitaly` and `workflow::problem validation` labels,
along with any other appropriate labels.  Then, feel free to tag the relevant
Product Manager and/or Engineering Manager as listed above.

For information requests and other quick one-offs, feel free to use [#g_gitaly](https://gitlab.slack.com/archives/g_gitaly) on Slack to get attention on the issue.

### Issues with `Infradev` labels

These are typically [Corrective Actions or other followup items](/handbook/engineering/workflow/#infradev) that have strict
SLO tracking. They will be scheduled through either of the above paths, by EM
and/or PM polling [these dashboards](#useful-links).

#### Training material

- https://handbook.gitlab.com/handbook/engineering/on-call/#expectations-for-on-call
- [Debugging Gitaly](debug.md)
- [Production Training](https://gitlab.com/gitlab-org/gitaly/-/issues/new?issuable_template=Production%20Training) issues

#### Roster management

Please refer to https://handbook.gitlab.com/handbook/engineering/on-call/#pagerduty for the mechanics (swapping on-call, adding new team members to the rotation).

## Team Members

{{< team-by-departments "Gitaly Team" >}}

## Working with product

### Agile workflow in Gitaly

We generally follow the [Product Development Flow](/handbook/product-development/product-development-flow/#workflow-summary) to schedule and track our work.

Work is executed in small chunks (2-3 days of work), each tracked as an issue. This allows for natural "checkpoints" for safe context switching.
Triaging and scheduling is separate from executing the current work. All incoming work is tracked and we are intentional about picking up new work.

Incoming work of all kind (both projects and ad-hoc interrupts) passes by EM and PM for triage. There may be some engineering consultation here about feasibility,
fit with the product's strategy roadmap etc. Some will get scheduled, some goes to the backlog. If the effort is not deemed necessary or not believed
to align with the roadmap, we will close the issue with commentary as to why it is not being pursued for future reference.

We aim to scope milestones such that we have a task list that is ambitious, but not overwhelming. We deliberately leave some capacity for incoming incidents.
We want to avoid the feeling of a never ending mountain of work to promote a healthy work / life balance.
It is also important to stress that milestones are recommendations only and we work on a best effort basis.

For issues with a strict SLO, we follow the process defined [below](#handling-issues-with-strict-slo)

We use the following workflow labels on the issues:

1. `workflow::problem validation` - A good spot to put features that we may / may not want to pursue. This is where product can do some user interviews, cost analysis, market fit, etc to decide if it's an opportunity we wish to pursue.
1. `workflow::solution validation` - Use this label for features / issues where Engineering needs to investigate / propose a solution going forward, or break it down into smaller issues.
1. `workflow::planning breakdown` - Issues ready to be scheduled in the next few milestones (unblocked or soon unblocked, with a known solution). Leaders of long-running (pre-approved) projects use this to communicate with PM.
1. `workflow::ready for development` - Work that is scheduled for a milestone (either the current one, or one in the future).
1. `workflow::in dev` - Actively being worked by the Engineering team
1. `workflow::in review` - Work that is in review
1. `workflow::verification` - code is in production and pending verification by the DRI engineer
1. `workflow::complete` - changes are verified, issue can be closed

Issues that we definitely want to prioritize for a release receive a `Deliverable` label and are moved to the top of the list.
These `Deliverable` issues help show our commitment to GitLab and our customers around working on these issues.

#### Workflow

##### Project Work

The top level [Gitaly epic](https://gitlab.com/groups/gitlab-org/data-access/gitaly/-/epics/1)
contains linked epics representing projects the team is working on. Team members
will either be the [primary owner](#dri--supporting-contributors) of an epic, or
a [supporting contributor](#dri--supporting-contributors). This way knowledge gets
shared across the team.

###### DRI & Supporting contributors

The [DRI](/handbook/people-group/directly-responsible-individuals/) of an epic
will be responsible for [making decisions](/handbook/leadership/making-decisions/#making-decisions)
regarding technical direction of a project. Making a decision will involve
creating proposals and gathering feedback from peers and the Engineering
Manager. It also involves reaching out and collaborating with stakeholders
external to the team when applicable.

The DRI is also responsible for project management, which means
keeping the epic up to date with relevant issues, removing issues that are no
longer relevant, and writing weekly updates the automatically generated comment
in the epic with the following format:

```markdown
HIGH_LEVEL_SUMMARY

:tada: **achievements**:
-

:issue-blocked: **blockers**:
-

:arrow_forward: **next**:
-
```

The supporting contributor(s) of an epic will be responsible for supporting the
DRI in working on issues, reviewing MRs, and participating in technical
discussions. The secondary owner can also act as the primary owner when the
DRI is OOO, depending on their bandwidth.

Supporting contributors are highly recommended but optional. There can also be
multiple secondary owners for a project.

Not everyone needs to be a DRI, but everyone should be a supporting contributor
on at least one project.

The structure of having both DRIs and supporting contributors does not introduce
any hard requirements for moving MRs forward, as reviews and approvals can be
done by anyone on the team.

##### Technical Roadmap, Customer Issues, and Cross Functional Issues

The [Gitaly Technical Roadmap & Customer Issues](https://gitlab.com/groups/gitlab-org/-/boards/8913037?label_name[]=workflow%3A%3Aready%20for%20development&milestone_title=Upcoming)
board contain one-off issues that are not a part of any projects, but are important
issues to address. These include [technical roadmap](/handbook/engineering/#technical-roadmaps)
issues, customer issues, and cross functional work in Gitaly that other teams
rely on. These issues will be sorted by priority. Team members can pick up work
from this board in addition to issues they are working on as part of project
epics.

As a rule of thumb, the ratio of [project](#project-work) work to technical
roadmap, customer issues should be roughly 70/30.

##### Urgent and high priority issues

P1/S1 issues should be treated with urgency. If such issues have not been
scheduled, [bias for action](/handbook/values/#operate-with-a-bias-for-action) is encouraged.
Go ahead and pull them into the current milestone, but do notify the EM and PM.

##### Blocked issues

If your work is blocked, use `workflow::blocked` and set a blocking issue for
clarity. Then consider asking for help and/or helping to unblock another team
member's blocked work before picking up something else.

Issues blocked for a long time should be removed from this process by removing the milestone and unassigning.

#### Adding more work for the team

Everyone can file new issues as more work is discovered, and feed them into this
process. To do so, file an issue, tag EM and PM, and assign `workflow::planning
breakdown` without a milestone. Please explain both _what_ needs to be done and
_why_ (ie the impact and urgency), and make it clear whether the work is ready
to be picked up. (This is also how project DRIs add the next steps in their
projects to the workflow.)

#### Meta

A weekly call is held between the product manager and engineering managers (of
both Gitaly and Git teams). Everyone is welcome to join and these calls are
used to discuss any roadblocks, concerns, status updates, deliverables, or other
thoughts that impact the group.

### Roadmap planning

The current roadmap is [this epic board](https://gitlab.com/groups/gitlab-org/-/epic_boards/1058926?label_name[]=Roadmap&label_name[]=group%3A%3Agitaly). It consists of themes/projects running for a quarter or longer (in some cases, much longer). It is okay to add sub-projects directly to the roadmap in the latter case.

- Anyone can propose a project: file an epic and discuss with the team (and EM+PM). Don't forget the `group::gitaly` label.
- Once accepted, we add the `Roadmap` label.
- Ongoing roadmap items get `roadmap::now`,  while `roadmap::next` and `roadmap::later` show what's been triaged and pushed into the future for now.
- At each quarterly planning:
  - we review roadmap items (using arguments from the [vision and principles](https://internal.gitlab.com/handbook/engineering/infrastructure/core-platform/systems/gitaly/roadmap/), current business priorities etc)
  - and then take on OKRs that push those goals forward.

### Quarterly Planning

Quarterly planning is done before every quarter for the next 3 milestones, with
input from everyone. At that time, we must already have a good idea of the work
that needs to be done.

The process is as follows:

1. EM+PM (with input from engineers and stakeholders): decide the scope we'll be
   working on, which will align with department level OKRs.

1. EM+PM+Engineers: Based on roadmap items, file smaller epics/issues if needed
   that can be completed in 3 milestones (ie one quarter). Tie them to the
   overall project epics. This is where we'll track the actual work.

1. EM: Modify the [top level Gitaly epic](https://gitlab.com/groups/gl-gitaly/-/epics/1)
   to reflect the work.

1. PM: Once the scope of the quarter is clear, take the list of issues and
   assign one of the three milestones, along        with `workflow::planning
   breakdown` (for large issues in need of breakdown) or `workflow::ready for
   development`.

1. Engineers: help break down `workflow::planning breakdown` items and file
   smaller issues if needed, adding them to the same 3 milestones as reasonable.
   Raise exceptions as needed.

### Handling issues with strict SLO

Issues with `Infradev` label are typically [Corrective Actions or other followup items](/handbook/engineering/workflow/#infradev) that have strict
SLO tracking. They will be scheduled through either of the above paths, by EM
and/or PM polling these dashboards:

[Infradev Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DraftInfrastructureEmbeddedDashboard/InfradevDashboard?:iid=1)
[Past due Infradev issues](https://10az.online.tableau.com/#/site/gitlab/views/DraftInfrastructureEmbeddedDashboard/InfrastructureEmbeddedDashboard?:iid=1)

1. EM+PM: Poll the dashboards at least weekly. Triage and schedule these issues so that SLOs can be met. If needed, move the issue to the Gitaly tracker, or file a proxy issue there so that it shows up on work boards, and mark it as blocking. Drag issues to the top of the `workflow::ready for development` column.

1. EM+PM: If the issue is blocked or depends on ongoing work, add a Milestone that fits the SLO and the pending work (so that we don't forget it). Ensure that blocking work gets scheduled before.

1. Engineers: please prioritize picking up this work, and post frequent (at most weekly, even if no changes) updates in the original issue. Mark any blocking issues as such.

## Gitaly consumers

To have a constant communication flow about planned changes, updates and maybe
breaking changes we have the [#g_gitaly](https://gitlab.slack.com/archives/g_gitaly) Slack channel. In the
channel we will provide updates for all teams using the service but also ask
for assistance to provide feedback and insights about planned changes or improvements.

To support this pro-active communication additionally there is also an individual
counterpart on the consumer side to help with research in the codebases and
coordination with all the teams consuming Gitaly. The DRI on Consumer side is Igor Drozdov.

The Gitaly consumers are:

- [GitLab Rails](https://gitlab.com/gitlab-org/gitlab)
- [GitLab Shell](https://gitlab.com/gitlab-org/gitlab-shell)
- [GitLab Workhorse](https://gitlab.com/gitlab-org/gitlab/-/blob/master/doc/development/workhorse/index.md)
- [GitLab Elasticsearch Indexer](https://gitlab.com/gitlab-org/gitlab-elasticsearch-indexer)

## Gitaly Deprecations

Gitaly offers many customer facing features. As such, all deprecations to customer facing features will follow the standard [GitLab feature deprecations guidance](/handbook/marketing/blog/release-posts/#deprecations-removals-and-breaking-changes) and announced within the [deprecations documentation page](https://docs.gitlab.com/ee/update/deprecations.html).

Gitaly also offers many non-customer facing features, which are used by GitLab and other customers who directly interface with Gitaly. These Gitaly level deprecations will not be announced using the above methods as they are not designed for GitLab end users to interface with directly. Some examples of these non-customer facing features are storage level APIs, which should never be called by GitLab users.

## Metrics

### On gitlab.com

- [Incidents](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/?sort=created_date&state=all&label_name%5B%5D=Service%3A%3AGitaly&label_name%5B%5D=incident&first_page_size=100) (not all pages are incidents)
- [Pages](https://nonprod-log.gitlab.net/goto/2e1a9f00-f006-11ed-bb50-33eb1f5eb489)
- [Global Apdex](https://dashboards.gitlab.net/d/gitaly-main/gitaly-overview?orgId=1&viewPanel=3357097446)
- [Alerts](https://log.gprd.gitlab.net/goto/17c536b0-efd0-11ed-8afc-c9851e4645c0) (S1/S2 are paging, S3/S4 are not)

### Useful links

- [Debugging Gitaly](debug.md)
- [Actual pending Infradev issues](https://10az.online.tableau.com/#/site/gitlab/views/DraftInfrastructureEmbeddedDashboard/InfrastructureEmbeddedDashboard?:iid=1) (sort by group, focus on gitaly)
- [Out of SLO Infradev issues](https://10az.online.tableau.com/#/site/gitlab/workbooks/2219735/views)
- [Error budget](https://dashboards.gitlab.net/d/stage-groups-detail-gitaly/stage-groups-gitaly-group-error-budget-detail?orgId=1&from=now-28d%2Fm&to=now)
- [MR review workload](https://gitlab-org.gitlab.io/gitlab-roulette/?currentProject=gitaly)

### Dashboards

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="gitaly" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="gitaly" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="gitaly" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="gitaly" >}}
{{< /tableau >}}

## Team development

### Onboarding

To complete team-specific onboarding, please file an issue
[here](https://gitlab.com/gitlab-org/gitaly/-/issues/new?issuable_template=Team%20Member%20Onboarding).

### Offboarding

Maintainer rights are revoked, and to remove the developer from the list of
authorized approvers, remove them from the `gl-gitaly` GitLab.com group.
