---
title: "Core Platform:Gitaly Team"
---

## What is Gitaly?

The Gitaly team is responsible for building and maintaining systems to ensure
that the Git data storage tier of GitLab instances, and _GitLab.com in particular_,
is reliable, secure and fast. For more information about Gitaly, see the [README in the repository](https://gitlab.com/gitlab-org/gitaly/-/blob/master/README.md) and the [roadmap](#roadmap) below.

Gitaly team consists of two subgroups, [Gitaly:Cluster team](#cluster-team) and [Gitaly:Git team](#git-team), together referred to as **Gitaly**.

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

{{< stable-counterparts role="[&,] Systems:Gitaly( API)?" manager-role="Backend Engineering Manager, Gitaly" >}}

## How to contact the team

### Urgent issues and outages

Gitaly team members do not carry pagers, but we live around the world and there's a good chance that someone is available during their working hours. There is no coverage for weekends; instead, we strive to empower incident responders to mitigate any circumstance.

These issues relate to ongoing production outages or similar. They interrupt our process used to [schedule work](https://gitlab.com/groups/gitlab-org/-/boards/1140874?label_name%5B%5D=group%3A%3Agitaly&milestone_title=Upcoming) and get attention as soon as possible.
Please only interrupt us sparingly, in these cases:

- [Severity 1 or 2](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/#availability) issues, where you believe that Gitaly team has _immediately actionable_ work to do
- Ongoing incidents where no mitigation exists that would tide us over until the next business day.

**Getting attention on an urgent, interrupting issue**

- If there's no issue filed yet, file one in the [Gitaly issue tracker](https://gitlab.com/gitlab-org/gitaly/issues) (remember that Security incidents and those containing customer details should be Confidential).
- Tag Engineering Manager and Product manager (listed above) as well as `@gl-gitaly` (the [whole team](https://gitlab.com/groups/gl-gitaly/-/group_members)) on the issue.
- Post on [#g_gitaly](https://gitlab.slack.com/archives/g_gitaly) on Slack, mention the issue, and tag EM and PM again.
- The issue will be attended to by the first available staff member during their working hours, who will assign it to themselves, and explicitly hand it off by reassigning to the next person should this be necessary.

### Customer issues

Please file an issue [here](https://gitlab.com/gitlab-org/gitaly/-/issues/new?issuable_template=Support%20Request). Post it on [#g_gitaly](https://gitlab.slack.com/archives/g_gitaly) for more immediate visibility.

**A note on customer escalations and engagements**

We are happy to help when a customer needs it! But please keep in mind that we are primarily a _development_ team, not equipped for "field engineering".

Our _engineers_ can help, preferably [async](/handbook/company/culture/all-remote/asynchronous/), with:

- deep technical investigation based on _data_ and able technical collaboration, in close partnership with Support and CSM
- providing product-level fixes or improvements, work to be scheduled and results released as usual, under [direction of EM and PM](#working-with-product)
- improving our documentation if something's unclear

_Engineering Managers_ (`@jcaigitlab` & `@andrashorvath`) and _Product Managers_ (`@mjwood`) are also happy to engage with customers if you need assistance clarifying roadmaps, product features and timelines, or to ensure the correct prioritization.

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

## Cluster team

**Mission**: Provide a durable, performant, and reliable Git storage layer for GitLab.

[Responsibilities](/job-families/engineering/backend-engineer/#cluster) |
[In the product hierarchy](/handbook/product/categories/#gitalycluster-group)

{{< team-by-departments "Gitaly Cluster Team" >}}

## Git team

**Mission**: Develop Git in accordance with the goals of the community and GitLab, and integrate it into our products.

[Responsibilities](/job-families/engineering/backend-engineer/#git) |
[In the product hierarchy](/handbook/product/categories/#gitalygit-group)

{{< team-by-departments "Gitaly Git Team" >}}

## Working with product

### Agile workflow in Gitaly

We generally follow the [Product Development Flow](/handbook/product-development-flow/#workflow-summary) to schedule and track our work.

Work is executed in small chunks (2-3 days of work), each tracked as an issue. This allows for natural "checkpoints" for safe context switching.
Triaging and scheduling is separate from executing the current work. All incoming work is tracked and we are intentional about picking up new work.

Incoming work of all kind (both projects and ad-hoc interrupts) passes by EM and PM for triage. There may be some engineering consultation here about feasibility,
fit with the product's strategy roadmap etc. Some will get scheduled, some goes to the backlog. If the effort is not deemed necessary or not believed
to align with the roadmap, we will close the issue with commentary as to why it is not being pursued for future reference.

We aim to scope milestones such that we have a task list that is ambitious, but not overwhelming. We deliberatly leave some capacity for incoming incidents.
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

#### Picking up new work

We work off the [Gitaly ongoing work issue board](https://gitlab.com/groups/gitlab-org/-/boards/1140874?label_name%5B%5D=group%3A%3Agitaly&milestone_title=Upcoming), where the `workflow::ready for development` column is loosely sorted with higher priority items on top. Engineers ready to pick up more work do not necessarily need to assign the topmost item, but rather make an informed choice with affinity (area of expertise, relative urgency, interest etc). However, please take care not to work "siloed" for long periods, but rather use the opportunity of picking up new work to address infrastructure issues (eg flaky tests) or to help out and learn in another area.

Assign yourself to the item of choice and move it to `workflow::in dev` (and later as appropriate).

Note that P1/S1 work should be the only one to preempt this default flow. Do involve PM and EM if urgent work needs to be prioritized, but for P1/S1 burning fires a [bias for action](/handbook/values/#bias-for-action) is of course preferred, just keep everyone informed.

#### Blocked issues

If your work is blocked, use `workflow::blocked` and set a blocking issue for clarity. Then consider asking for help and/or helping to unblock another team member's blocked work before picking up something else.

Issues blocked for a long time should be removed from this process by removing the milestone and unassigning.

#### Adding more work for the team

Everyone can file new issues as more work is discovered, and feed them into this process. To do so, file an issue, tag EM and PM, and assign `workflow::planning breakdown` without a milestone. Please explain both _what_ needs to be done and _why_ (ie the impact and urgency), and make it clear whether the work is ready to be picked up. (This is also how project DRIs add the next steps in their projects to the workflow.)

#### Meta

A weekly call is held between the product manager and engineering managers (of both Cluster and Git teams).
Everyone is welcome to join and these calls are used to discuss any roadblocks, concerns, status updates, deliverables, or other thoughts that impact the group.

### Workflow in upstream Git

Because the Git project is an upstream project, we must use a different workflow.

#### Planning

The Git project has a different release schedule where a new release is published roughly every three months. The
schedule can be seen in the [Git project's calendar](http://tinyurl.com/gitcal). Furthermore, it is expected that most
topics will take significantly longer both to develop and to be merged upstream. As a consequence, our usual milestones
are not a good mechanism to properly track the target GitLab version in the context of upstream issues.

Instead, we use labels like `git-milestone::v2.42` to annotate our target Git version for open issues as well as the
actual version something has landed in for completed issues. These milestone labels are applied in addition to our
normal milestones.

This means that we assign milestones as a timeframe to schedule the implementation of the work by the Gitaly team
members, but this does not correspond to the timeframe when the work will be released by the Git project. Their meaning
is reduced to a planning tool such that Git issues continue to show up on usual issue boards and are readily
discoverable. Consequentially, our usual way of picking up new work applies to Git issues, as well.

#### Differences to normal review process

When working with the upstream Git Project, we still use a simple workflow where the developer implements the issue in a
topic branch, creates a merge request, and assigns reviewers as usual, where issues and merge requests should be created
in our [mirror of the Git project](https://gitlab.com/gitlab-org/git). However, because the changes must undergo
upstream review, the workflow diverges from our normal workflow

- Changes may optionally undergo internal review.
- After the optional internal review, patches are sent to the Git mailing list.

The meaning of the merge requests thus gets reduced to be purely informational.

Developers are encouraged to skip the optional internal review and instead send their patches to the mailing list
directly. In that case, they should add a comment to the merge request that links to the mailing list thread on
<https://public-inbox.org/git/>. The review should then happen on the mailing list directly.

Encouraging developers to send patches to the mailing list directly has multiple benefits:

- Reviewers get exposure to the Git mailing list. This demonstrates to the wider Git community there is a whole team
  working on Git at GitLab while also building up credibility for the reviewer.
- Topics which may otherwise not get a lot of attention may get more when our own reviews are visible.
- We avoid having to do two sequential reviews, which would otherwise further delay topics.

The optional internal review is specifically with new internal contributors in mind. It should help to lower the bar for
entry and reduce the level of discomfort that wider exposure to the Git community may bring with it. In the same spirit,
reviewers may post review comments internally first before sending them to the Git mailing list. Ultimately, the goal
should be that we mentor these new contributors internally such that they eventually start to post to the Git mailing
list directly.

The following is a non-exhaustive list of exceptions where we prefer internal reviews:

- Security issues are implemented in our [private security mirror](https://gitlab.com/gitlab-org/security/git).
- Potentially controversial topics where we need to assess whether a proposed solution addresses our own usecases.

#### Long-running topics

In some contexts it may be necessary to collaborate on long-running topics when it is infeasible to land changes in a
single release. Our usual iterative development approach does not always work well within the Git project. Most
importantly, for an open source project the assumption needs to be that contributors may go away in the middle of their
endeavour, leaving behind dangling pieces that might have complicated some of our architecture without actually reaping
the intended benefits. In contrast to company-led projects, the Git project has no way of ensuring that these would
eventually get finished.

For topics that span over multiple releases we are forced to use long-running feature branches until the topic becomes
upstreamable. The workflow here is thus different to normal upstream work and happens on a separate topic branch that
the developer creates from the current upstream `master` branch. From here on, the development of the topic happens
internally and follows our usual merge request workflow including internal reviews, where each of the merge requests
targets the topic branch.

One problem in this context is that the topic branch will eventually start to become outdated when the upstream `master`
branch progresses. While it would be possible to regularly merge from `master` into the topic branch, the end result
would not be in an upstreamable state. On the other hand, rebasing the topic branch on top of `master` would require
other contributors to adapt to the resulting forced update.

Instead, we use a combination of rebases and merges to update the topic branch with upstream's `master` branch:

1. The topic branch is fake-merged into the `master` branch, discarding all changes. The resulting tree is the same tree
   as the tree of `master`.
1. All commits of the topic branch are rebased on top of the fake merge.
1. Optionally, the rebased commits are squashed or reorganized so that the result becomes upstreamable.

While complicated, this workflow provides a bunch of benefits:

- We never need to force-update the topic branch.
- The topic branch remains in an upstreamable state.
- The history of the topic branch remains intact, which also means that individual contributions remain intact even if
  they are squashed into other commits.

This workflow is similar to what Git for Windows uses and can be implemented via its
[shears.sh](https://github.com/git-for-windows/build-extra/blob/5b12303a092b159a22a2640d7b8aee84715091de/shears.sh)
script:

```shell
## Update origin, pulling in new changes for origin/master
$ git fetch origin
## Switch to the topic branch
$ git switch topic
## Find the current root of the topic branch. This could either be the last fake-merge
$ base=$(git rev-parse ':/Start the merging-rebase')
## Or it could be the merge-base of origin/master and your topic branch
$ base=$(git merge-base origin/master topic)
## Rebase the topic branch onto origin/master
$ ./shears.sh --merging --onto origin/master $base
```

### Roadmap planning

The current roadmap is [this epic board](https://gitlab.com/groups/gitlab-org/-/epic_boards/1058926?label_name[]=Roadmap&label_name[]=group%3A%3Agitaly). It consists of themes/projects running for a quarter or longer (in some cases, much longer). It is okay to add sub-projects directly to the roadmap in the latter case.

- Anyone can propose a project: file an epic and discuss with the team (and EM+PM). Don't forget the `group::gitaly` label.
- Once accepted, we add the `Roadmap` label.
- Ongoing roadmap items get `roadmap::now`,  while `roadmap::next` and `roadmap::later` show what's been triaged and pushed into the future for now.
- At each quarterly planning:
  - we review roadmap items (using arguments from the [vision and principles](https://internal.gitlab.com/handbook/engineering/infrastructure/core-platform/systems/gitaly/roadmap/), current business priorities etc)
  - and then take on OKRs that push those goals forward.

### Quarterly OKR planning

OKR planning is done before every quarter for the next 3 milestones, with input from everyone. At that time, we must already have a good idea of the work that needs to be done.

The process is as follows:

1. EM+PM (with input from engineers and stakeholders): decide the scope we'll be working on. Update roadmap items.

1. EM+PM+Engineers: Based on roadmap items, file smaller epics/issues if needed that can be completed in 3 milestones (ie one quarter). Tie them to the overall project epics. This is where we'll track the actual work.

1. EM: File Objectives and Key Results [here](https://gitlab.com/gitlab-com/gitlab-OKRs/-/issues/?sort=created_date&state=opened&label_name%5B%5D=group%3A%3Agitaly&first_page_size=20) and tie them to the actual work. We use these for reporting/communication of what we want to work on, project goals for the quarter, and its progress. Where possible, align with the larger organization's objectives. If possible, add a preliminary scoring table ("what does it mean to reach 20% of this OKR?").

1. PM: Once the scope of the quarter is clear, take the list of issues and assign one of the three milestones, along with `workflow::planning breakdown` (for large issues in need of breakdown) or `workflow::ready for development`.

1. Engineers: help break down `workflow::planning breakdown` items and file smaller issues if needed, adding them to the same 3 milestones as reasonable. Raise exceptions as needed.

### Handling issues with strict SLO

Issues with `Infradev` label are typically [Corrective Actions or other followup items](/handbook/engineering/workflow/#infradev) that have strict
SLO tracking. They will be scheduled through either of the above paths, by EM
and/or PM polling these dashboards:

[Infradev Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DraftInfrastructureEmbeddedDashboard/InfradevDashboard?:iid=1)
[Past due Infradev issues](https://10az.online.tableau.com/#/site/gitlab/views/DraftInfrastructureEmbeddedDashboard/InfrastructureEmbeddedDashboard?:iid=1)

1. EM+PM: Poll the dashboards at least weekly. Triage and schedule these issues so that SLOs can be met. If needed, move the issue to the Gitaly tracker, or file a proxy issue there so that it shows up on work boards, and mark it as blocking. Drag issues to the top of the workflowready for development column.

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

## Retrospectives

At the beginning of each release, the Gitaly EM will create a retrospective issue
to collect discussion items during the release. The first weekly Gitaly meeting
after the 18th that issue will be used to discuss what was brought up.

## Metrics

### On gitlab.com

- [Incidents](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/?sort=created_date&state=all&label_name%5B%5D=Service%3A%3AGitaly&label_name%5B%5D=incident&first_page_size=100) (not all pages are incidents)
- [Pages](https://nonprod-log.gitlab.net/goto/2e1a9f00-f006-11ed-bb50-33eb1f5eb489)
- [Global Apdex](https://dashboards.gitlab.net/d/gitaly-main/gitaly-overview?orgId=1&viewPanel=3357097446)
- [Alerts](https://log.gprd.gitlab.net/goto/17c536b0-efd0-11ed-8afc-c9851e4645c0) (S1/S2 are paging, S3/S4 are not)

### Useful links

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
