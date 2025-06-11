---
title: Cloud Connector Group
---

## Vision

Make it easy to build a feature into GitLab across multiple types of deployment.

We have formalized our technical vision in a separate [vision document](/handbook/engineering/infrastructure/team/cloud-connector/technical_vision/), a living document that we
commit to revisiting at least once a year.

## Mission

GitLab Cloud Connector is a way to access services common to multiple GitLab deployments, instances, and cells. GitLab customers can choose between the following deployment options:

* GitLab.com's multi-tenant SaaS offering.
* Deploying their own self-managed GitLab instance.
* Signing up for GitLab Dedicated, our managed single-tenant solution.

The goal of GitLab Cloud Connector is to ensure that GitLab features can work equally across all three. This aligns with Enablement's mission of accelerating other product groups by reducing the friction of developing for multiple deployments.

You can check our [direction page](https://about.gitlab.com/direction/cloud-connector/) for more information on our mission, and our short term and long term roadmap.

## Team Members

The following people are permanent members of the Cloud Connector group:

{{< team-by-manager-slug manager="pjphillips" role="Cloud Connector|Core Platform" >}}

## Stable Counterparts

The following members of other functional teams are our stable counterparts:

{{< stable-counterparts role="Senior Product Manager.*Cloud Connector|Core Platform.*Cloud Connector" manager-role="Backend Engineering Manager, Cloud Connector" >}}

## Meetings

Where we can we follow the GitLab values and communicate asynchronously.  However, there have a few important recurring meetings.  Please reach out to the [#g_cloud_connector](https://gitlab.slack.com/messages/CGN8BUCKC) Slack channel if you'd like to be invited.

* Weekly Cloud Connector group meeting - Mondays 4:00PM UTC (3:00PM UTC during daylight savings time)
* Cloud Connector group Office Hours
  * Tuesdays and Thursdays at 10:00AM UTC ( 09:00AM UTC during daylight savings time)

## Work

We follow the GitLab [engineering workflow](/handbook/engineering/workflow/) guidelines.  To bring an issue to our attention please create an issue in the relevant project, or in the [Cloud Connector team project](https://gitlab.com/gitlab-org/cloud-connector-team/team-tasks/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=).  Add the `~"group::cloud connector"` label along with any other relevant labels.  If it is an urgent issue, please reach out to the Product Manager or Engineering Manager listed in the [Stable Counterparts](/handbook/engineering/infrastructure/team/cloud-connector/#stable-counterparts) section above.

### Planning

When planning for a milestone, the Cloud Connector group creates a [planning issue](https://gitlab.com/gitlab-org/cloud-connector-team/team-tasks/-/blob/master/.gitlab/issue_templates/Planning.md) to discuss the upcoming milestone asynchronously. We outline the major efforts planned for the milestone along with who is working on each effort. Often there are individual issues that are either operational in nature, or don't belong to an epic. These issues are also called out in the planning issue for prioritization.

We have three main boards for tracking our work (listed below).

#### Boards

[Cloud Connector by Milestone](https://gitlab.com/groups/gitlab-org/-/boards/1143987?label_name[]=group%3A%3Acloud%20connector)
The Milestone board gives us a "big picture" view of issues planned in each milestone.

[Cloud Connector: Build](https://gitlab.com/groups/gitlab-org/-/boards/2333522?label_name[]=cloud%20connector%3A%3Aactive&label_name[]=group%3A%3Acloud%20connector)
The build board gives you an overview of the current state of work for `"group::cloud connector"`. These issues have already gone through validation and are on the [Product Development Build Track](/handbook/product-development-flow/#build-track). Issues are added to this board by adding the `cloud connector::active` and `"group::cloud connector"` labels. Issues in the `workflow::ready for development` column are ordered in priority order (top down). Team members use this column to select the next item to work on.

[Cloud Connector: Validation](https://gitlab.com/groups/gitlab-org/-/boards/2334157?label_name[]=cloud%20connector%3A%3Avalidation&label_name[]=group%3A%3Acloud%20connector)
The validation board is a queue for incoming issues for the Product Manager to review. A common scenario for the Cloud Connector group's validation board is when an issue is created that requires further definition before it can be prioritized. The issue typically states a big picture idea but is not yet detailed enough to take action. The Cloud Connector group will then go through a refinement process to break down the issue into actionable steps, create exit criteria and prioritize against ongoing efforts. If an issue becomes too large, it will be promoted to an epic and small sub-issues will be created.

#### Say/Do Ratio

We use the `~Deliverable` label to track our Say/Do ratio.  At the beginning of each milestone, during an Cloud Connector group Weekly meeting, we review the issues and determine those issues we are confident we can deliver within the milestone.  The issue will be marked with the `~Deliverable` label.  At the end of the milestone the successfully completed issues with the `~Deliverable` label are tracked in two places.  We have a dashboard in Sisense that will calculate how many were delivered within the milestone and account for issues that were moved.  Additionally, our milestone retro issue lists all of the `~Deliverable` issues shipped along with those that missed the milesone.

### Roadmap

The Cloud Connector group's [Roadmap](https://gitlab.com/groups/gitlab-org/-/roadmap?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=group%3A%3Acloud%20connector) gives a view of what is currently in flight as well as projects that have been prioritized for the next 3+ months.

## Links

[2024 Cloud Connector Team Impact Overview](https://gitlab.com/gitlab-org/cloud-connector-team/team-tasks/-/issues/207)

### Knowledge sharing and lessons learned

* [Cloud Connector group's Approach](approach.html)
* [Cloud Connector group's Knowledge Sharing](knowledge.html)

#### Blog posts (when team was working as Application Performance)

* [Scaling down: How we shrank image transfers by 93%](https://about.gitlab.com/blog/2020/11/02/scaling-down-how-we-prototyped-an-image-scaler-at-gitlab/)
* [Ruby 2.7: Understand and debug problems with heap compaction](https://about.gitlab.com/blog/2021/04/28/puma-nakayoshi-fork-and-compaction/)

### More about how we work

* [Cloud Connector group's (as Application Performance) 2020 Recap](2020.html)
* [Cloud Connector group's YouTube playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0Kq_5ZWIHYfbcAYjtXYcEZA3)
* [Cloud Connector group's subgroup](https://gitlab.com/gitlab-org/cloud-connector-team)
* [Retrospective page](https://gitlab.com/gl-retrospectives/cloud-connector-team)
* Slack Channel [#g_cloud_connector(https://gitlab.slack.com/messages/CGN8BUCKC)
* [Product Development Timeline](/handbook/engineering/workflow/#product-development-timeline)

## Dashboards

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="cloud connector" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="cloud connector" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="cloud connector" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="cloud connector" >}}
{{< /tableau >}}
