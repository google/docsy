---
title: "Distribution Team Workflow"
description: "Overview of how work is performed by Distribution Engineers, for Omnibus, Helm and other Engineering projects."
---

## Common links

* [Engineering Team Workflow](/handbook/engineering/workflow/)

## Summary

Distribution team members are expected to:

* Be kind in their interaction with the rest of the community and other teams
* Ensure that fixing red main branch in projects takes the highest priority
* Pick items to work on from the project scheduled queues
* Define test plans for changes not covered by integration tests
* Label issues and merge requests to track [engineering metrics](/handbook/product/groups/product-analysis/engineering/dashboards/)

## Groups

The distribution team is comprised of two groups, Distribution:Build and Distribution:Deploy.

### Distribution Build tasks

* Maintain all team pipelines for all Distribution projects
* Research for the support of new clouds, platforms, architecture, and components
* Access controls, permissions, and CVE patches
* Team infrastructure/resource management
* Dependency updates
* License management
* Submissions to Partners for validations/certifications

### Distribution Deploy tasks

* Initial installation and composability
* Upgrades / Downgrades
* Scaling deployments
* Migration between platforms or providers
* Data lifecycle management
* Secure configuration & communication
* Research of clouds and platforms for integration to existing tools

## Work prioritization

Work to be completed by the Distribution team members who are not currently
acting as the [Distribution DRI](#distribution-dri) is prioritized as follows:

| Priority level | Work item |
| -|- |
| 1 | Unblock in-review `~priority::1` Merge Requests |
| 1 | Pick up `~priority::1` [Merge Requests for review](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/) |
| 1 | Work on in-progress `~priority::1` [Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming) |
| 1 | Pick up available `~priority::1` [Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming) |
| 2 | Unblock remaining in-review Merge Requests |
| 3 | Work on in-progress `~priority::2` [Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming) |
| 3 | Pick up [SLO-breaching](merge_requests.md#service-level-objective) [Merge Requests for review](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/) |
| 4 | Pick up [SLO-near-breaching](merge_requests.md#service-level-objective) [Merge Requests for review](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/) |
| 5 | Pick up available `~priority::2` [Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming) |
| 6 | Work on in-progress `~priority::3` [Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming) |
| 6 | Pick up available `~priority::3` [Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming) |
| 6 | Pick up [SLO-non-breaching](merge_requests.md#service-level-objective) [Merge Requests for review](https://gitlab-org.gitlab.io/distribution/monitoring/mrs/) |
| 7 | Work on in-progress `~priority::4` [Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming) |
| 7 | Pick up available `~priority::4` [Deliverable Issues](https://gitlab.com/groups/gitlab-org/-/boards/2415614?label_name[]=Deliverable&label_name[]=group%3A%3Adistribution&assignee_id=None&milestone_title=Upcoming) |

Use this prioritization outline as a general guide when determining what to do each day. This list helps direct
work toward overall team priorities and goals laid out by the team managers.

## Workflow Summary

Distribution groups use the [GitLab product development flow](/handbook/product-development/product-development-flow/#workflow-summary) and labels in principle, we usually skip below phases due to the nature of our work:

* [Validation phase 3: Design](/handbook/product-development/product-development-flow/#validation-phase-3-design)
* [Validation phase 4: Solution Validation](/handbook/product-development/product-development-flow/#validation-phase-4-solution-validation)

### Planning process

All the planning dashboards are bookmarked on the `#g_distribution` `Issue dashboards` folder.

#### Quarterly planning

On the 3rd month of the quarter:

1. **PM & EM & Staff Engineer**: By 1st week, they draft OKRs for the upcoming quarter.
1. **OKR DRI**: From 2nd week, they pick up a OKR and start scoping with other team members or stakeholders.
1. **All Engineers**: From 2nd week, they start contributing to any OKR scoping they are interested in.
1. **EM**: By the end of 2nd week, they decide whether any reserved planning days require per the current status of scoping.
1. **Everyone**: At the end of the month, the OKRs and their scoping should be finalized.

#### Milestone planning

At the end of the [current milestone](https://gitlab.com/groups/gitlab-org/-/milestones/), every engineer is
expected to update their assigned issues and roll over uncompleted ones to the next milestone for review.

Engineering manager and Product manager are responsible for scheduling work that is a direct responsibility
of the Distribution team.

Any unassigned issue is available for anyone to work on. You can show your interest in working on a specific task by leaving a comment in the issue.
To do so, comment must contain the *date* on which you will commence the work. If the comment does not contain the date, or the date has passed, the item is free to be picked up by anyone again.

##### Add `Unplanned` work to current milestone

Sometimes, there are works that were not originally planned but require urgent attention, anyone could pick up and work on the reasonable ones. A typical workflow is:

1. Assesses the work's urgency with your best judgement, the urgency usually could be determined by active incident, internal and external customer impact, SLA and polices, and deadline.
1. If it is a reasonable request, assigns `Unplanned` and all other required labels, and works on it per the [work prioritization](#work-prioritization).
1. If it is not, explains the reason to the requestor and provides possible alternatives, escalates to EM&PM when necessary.
1. If not sure, asks for clarification from the requestor, and seeks advice from EM&PM when necessary.

#### Backlog reviewing

**To be updated**

### Required labels

Besides the [GitLab product development flow](/handbook/product-development/product-development-flow/#workflow-summary) labels, there are a number of additional **required** labels applied at any time to Epics, issues and merge requests (items):

* `group::distribution` - Items specific to, or authored by Distribution team. It is a [scoped label](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels) to be applied to all Distribution subgroups items until further guidance.
* `group::distribution::*` - Items specific to, or authored by one of Distribution subgroups. They are [nested scope labels](https://docs.gitlab.com/ee/user/project/labels.html#nested-scopes), and mutually exclusive, but can be used with `group::distribution` scoped label together.
  * `group::distribution::build` - Items specific to, or authored by [build](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution#distributionbuild-charter) group.
  * `group::distribution::deploy` - Items specific to, or authored by [deployment](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution#distributiondeploy-charter) group.
* `FY(Year in two digitals)::*` (1-4) - [scoped label](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels) to indicate efforts targeted for release within a quarter. i.e., `FY24::Q2`.

There are also a number of additional **required** labels under certain scenarios:

* `Unplanned` - Urgent requests that were not originally planned for the current milestone. Work on these items is
usually event driven - another team requires help, regression affecting users, or technical debt that is causing inefficiency in the team.
* `spike` - Issues which primarily involve research to understand options and the breakdown of future deliverables. [Spikes](/handbook/product/product-processes/#spikes) are often the first issue in a new Epic where the output defines additional issues and order of serial/parallel work.

In addition to the labels outlined above, see also [workflow labels used during merge request review](merge_requests.html#workflow) and [labels used during issue triage](triage.html#label-glossary).

### Priority definition

**To be updated**

## Distribution DRI

In order to minimize disruption and context switching for team members, Distribution designates one engineer on a weekly rotation basis (DRI, Directly Responsible Individual), who will be responsible for the following duties during their normal office hours. For urgent requests outside of those hours, it will be handled via the [on call process](/handbook/engineering/on-call/).

### Expectation

Similar to [Development Escalation Process](/handbook/engineering/development/processes/infra-dev-escalation/process/#expectation), the DRI is not solely responsible for a resolution of any requests, they should engage any SME and escalate to engineering manager and/or product manager whenever requires. In addition to that, there is also no expectation that the DRI can complete the same amount of `Deliverable` work during the week.

### Duties

The Distribution DRI works on the following areas per the order of the list.

#### During the week

1. Support incidents escalated from production.
1. [Support customer requests](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#engaging-distribution-for-expertise-in-support)
    * [Support help requests for Build and Self-managed](https://gitlab.com/gitlab-com/request-for-help/-/issues)
1. Answer or redirect questions in [#g_distribution](https://gitlab.slack.com/archives/C1FCTU4BE) Slack channel.
1. [Perform issue triage](triage.md).
1. Respond to `@gitlab-org/distribution` group mentions in GitLab.
1. **Optional:** Work on deliverables for the current milestone or other Distribution related tasks.

#### Handover

1. Close the assigned DRI issue.
1. Rotate your name to the end of [the shift assignment list](https://docs.google.com/document/d/1ny8dB9N_jlt9cGCkNXlN5GpjTkOePUKvi-lnON2jBdA/edit#bookmark=id.nzrf04qngt3n).
1. Create a new issue for the next shift and assign it to the next team member on the list. The issue title should be `Distribution DRI rotation week of <starting date>`. Use the `Distribution-DRI` template to fill in the description.
1. For requests still active at the time of handoff, the DRI should use best judgement and consider one or several options:
    * Close the request with a documented mitigation and open a follow-up issue.
    * Add a comment that hands off the request to the next week's DRI.
    * Continue to act as SME, though handoff to the next DRI with clear documentation to share knowledge is strongly preferred.
    * Pass information to the next DRI in a synchronous conversation.

### Other team members

When you are not on DRI duty, please consider the following when the request is not [Stuff that should Just Work](https://gitlab.com/groups/gitlab-org/-/labels?subscribed=&search=Stuff+that+should+Just+Work):

1. Redirect any [active incident](/handbook/engineering/infrastructure/incident-management/) and [deployment blocker](/handbook/engineering/deployments-and-releases/deployments/#deployment-blockers) request to the Distribution DRI during their normal office hours, or take the request if you are the first available team member
1. Redirect any Slack DM to the channel [#g_distribution](https://gitlab.slack.com/archives/C1FCTU4BE)
1. Redirect any GitLab direct mention to `@gitlab-org/distribution` group
1. Redirect any other requests to [How to work with Distribution](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#how-to-work-with-distribution)

## Iteration

Use iteration to better control scope and deliver measurable value in each release. A timebox measurement process would ensure that if expected progress isn't achieved, there's a procedure to follow.

* If a project goes more than 2 milestones without delivering on the success criteria within the defined MVC/issue, a detailed evaluation/retrospective should be performed.
* If the project goes 3 milestones without meeting success criteria, then a larger evaluation should be performed with the section leaders.

The goal is to catch scope creep, ensure we are iterating in ways that deliver measurable value, and establish circuit breakers to address earlier as needed.

## Distribution dependency maintenance policy

Distribution team follows below dependency maintenance policy in order to achieve our [technology vision](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/#vision).

Distribution aims to add support to newer release of Distribution managed dependencies within 3 to 5 milestones after their original release unless specified below otherwise.

## Kubernetes release support policy

Distribution team follows [kubernetes release support policy](k8s-release-support-policy.md) for supporting Kubernetes releases.

Distribution aims to add support for newer releases of Kubernetes within 3 months of their release.

### OS

All the operating systems supported by GitLab and their EOL policy are listed in the [Supported OS doc page](https://docs.gitlab.com/ee/administration/package_information/supported_os.html) and [installation page](https://about.gitlab.com/install/).

For new OS release, Distribution team aims to provide Linux package support per the below timeline:

| OS | Expected to be supported by |
| ------ | ------ |
| Ubuntu LTS release | within 2 milestones after OS release date |
| RHEL(& RHEL Clones) major and minor release | within 3 milestones after OS release date |
| Debian LTS and minor release | within 3 milestones after OS release date |
| All others minor release | within 3 milestones after OS release date |
| All others major release | within 4 milestones after OS release date |

## Interviews

See the [`hiring-process`](https://gitlab.com/gitlab-com/people-group/hiring-processes/-/tree/master/Engineering/Infrastructure/CorePlatforms/Distribution)
project for information on conducting interviews for positions on the Distribution team.
