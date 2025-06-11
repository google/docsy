---
title: "Monitor:Platform Insights Group"
---

## Who we are?

The Platform Insights group is part of the GitLab [Monitor stage](/handbook/engineering/development/analytics/monitor/) and builds [GitLab Observability](https://about.gitlab.com/direction/monitor/platform-insights/) and [Product Analytics](https://about.gitlab.com/direction/monitor/platform-insights/) products.

### Team members

{{< team-by-manager-role "Engineering Manager(.*)Monitor:Platform Insights" >}}

### Stable counterparts

{{< stable-counterparts manager-role="Engineering Manager(.*)Monitor:Platform Insights" role="Product(.*)Platform Insights|Principal(.*)Monitor|Security(.*)Monitor" >}}

## Technical Architecture

### Architecture Blueprints

* [Error Tracking](https://gitlab.com/gitlab-org/opstrace/opstrace/-/blob/main/docs/architecture/error-tracking.md)
* [Tracing](https://docs.gitlab.com/ee/architecture/blueprints/observability_tracing/)
* [Metrics](https://docs.gitlab.com/ee/architecture/blueprints/observability_metrics/)
* [Logs](https://docs.gitlab.com/ee/architecture/blueprints/observability_logging/)

### Architecture Documentation

* See [this page](https://gitlab.com/gitlab-org/opstrace/opstrace/-/tree/main/docs/architecture)

### Project Links

* [Top-level Epic](https://gitlab.com/groups/gitlab-org/opstrace/-/epics/92)
* [Source Code Repository](https://gitlab.com/gitlab-org/opstrace/opstrace)

### ClickHouse Datastore

Observability and analytics features have big data and insert heavy requirements which are not a good fit for Postgres or Redis. [ClickHouse](https://github.com/ClickHouse/ClickHouse) was selected as a good fit to meet these features requirements. ClickHouse is an open-source column-oriented database management system. It is attractive for these use cases because it can efficiently filter, aggregate, and sum across large numbers of rows. ClickHouse is not intended to replace Postgres or Redis in GitLab's stack.

We initially managed our own self-hosted Clickhouse instance, but decided to migrate to Clickhouse Cloud to enable the team to move quicker by offloading maintenance and scalability to Clickhouse.

Learn more: [Clickhouse Datastore Working Group](/handbook/company/working-groups/clickhouse-datastore/)

## How we work?

We base our workflow on the company's [Product Development Flow](/handbook/product-development-flow/). Any modifications or clarifications on how we apply the workflow are detailed below.

### Async Standups

We have slack-based standups (using [Geekbot](https://geekbot.com/)) on Wednesdays and retrospectives on Fridays. We use these async standups to communicate what we have accomplished, any current blockers and what we plan to work on next.

### Async Updates

Every Friday, the EM provides an async update of the team's progress, following the [Ops sub-department async updates](/handbook/engineering/development/ops/#async-updates-no-status-in-meetings) process.

These updates are published as [issues in the `general` project](https://gitlab.com/gitlab-org/opstrace/general/-/issues/?sort=created_date&state=all&label_name%5B%5D=OpsSection%3A%3AWeekly-Update&first_page_size=100).

Updates and highlights from all teams in Ops are collected automatically [here](https://gitlab.com/gitlab-com/ops-sub-department/ops-status-updates/-/issues/?sort=created_date&state=opened&first_page_size=20), grouped by week / month / quarter.

### Meetings

* **Weekly Team Sync:** These are focused on organizing ongoing work or specific efforts such as rollout-outs or bigger initiatives.
* Bi-monthly social hour: This meeting is non-work related and helps team socialize and get to know each other better.
* **Team member coffee chats:** Each team member should schedule a coffee chat with all other team members rough every 4-6 weeks. Feel free to discuss work or non-work topics. If timezones are an issue find another way to connect, such as a async slack thread to checkin. The goal is to get to know your other team members on a 1:1 basis.
* **Dev Syncs:** These are developer-organized sync meetings where ICs can meet and discuss technical issues or organize technical work amongst themselves without requiring the presence of a EM.

### Communication

We use several Slack channels to organize ourselves:

* Primary channel: [#g_monitor_platform_insights](https://gitlab.enterprise.slack.com/archives/C02Q93U8J07)
* Standup channel: [#g_monitor_platform_insights_standup](https://gitlab.enterprise.slack.com/archives/C02VAHG10HW)
* Social channel: [#g_monitor_platform_insights_internal](https://gitlab.enterprise.slack.com/archives/C02QLQUB0JZ)

### How we do planning?

We are following the monthly milestone cadence. Work is organized into [epics](https://gitlab.com/groups/gitlab-org/opstrace/-/epics/92 "Observability Group - FY25 HQ") and assigned to the relevant milestones.

Milestone starting date is defined in [gitlab.org group milestones](https://gitlab.com/groups/gitlab-org/-/milestones?search_title=17.0&state=&sort=). It changes every month, according to the [new GitLab release calendar](https://about.gitlab.com/blog/2023/09/18/gitlab-release-date-change/).

Milestone Planning timeline:

* 10 days before milestone starting date: Planning [draft issue](https://gitlab.com/groups/gitlab-org/opstrace/-/epics/80) is created by PM/EM, with high level milestone goals.
* 8 days before milestone starting date: Planning draft is shared with team. Individual contributors recommend epics and issues related to these goals or carried over from previous milestones.
* 5 days before milestone starting date: Planning is reviewed during team sync meeting.
* On milestone starting date: Milestone goals and related epics and issues should be finalized and prioritized. All planned work can be seen on the [Milestone Board](https://gitlab.com/groups/gitlab-org/-/boards/7850744) Previous milestone issues are moved to the new milestone or backlog.
* During the milestone, we analyze progress and reprioritize as needed.

### Issue prioritization

Our priorities should follow overall guidance for Product. This should be reflected in the priority label for scheduled issues:

| Priority | Description | Probability of shipping in milestone |
| ------ | ------ | ------ |
| priority::1 | **Urgent**: top priority for achieving in the given milestone. These issues are the most important goals for a release and should be worked on first; some may be time-critical or unblock dependencies. | ~100% |
| priority::2 | **High**: important issues that have significant positive impact to the business or technical debt. Important, but not time-critical or blocking others.  | ~75% |
| priority::3 | **Normal**: incremental improvements to existing features. These are important iterations, but deemed non-critical. | ~50% |
| priority::4 | **Low**: stretch issues that are acceptable to postpone into a future release. | ~25% |

### How to find something to work on?

Normally at the beginning of the Milestone the EM will discuss an overview of the work and what relevant areas you will focus on. Sometimes issues will already be assigned to you before the Milestone begins.

If you are ever looking for additional issues to work on:

1. Look at the Platform Insight [Milestone board](https://gitlab.com/groups/gitlab-org/-/boards/7850744)
1. Identify an issue that is unassigned.
1. Assign yourself to the issue.
1. Add a `workflow:in dev` label to the issue
1. If the scope or description are unclear, connect with the EM and or PM for clarification or (if feeling confident) groom the issue yourself and proceed.
1. Begin working on the issue.
1. Once all relevent MRs are merged, set the `~workflow::verification` label.
    * Ensure any MRs do not auto-close issues. (Use `Relates to #11111` rather than `Closes #11111` in MR descriptions.)
1. Verify the changes and comment on the issue which environment you used for verification, for example `Verified on production`.
1. Close the issue! 🎉
1. Repeat.

### How to enable Observability Beta for a customer?

To enable access to Logs, Tracing, and Metrics Beta for a certain customer, follow this process:

For SaaS:

* Before hand, make sure you have the right access and permissions to run ChatOps command as detailed in [this page](https://docs.gitlab.com/ee/development/chatops_on_gitlabcom.html#requesting-access).
* Ask customer for their top-level group name (example: `gitlab-org` for https://gitlab.com/gitlab-org/)
* In #production, run the following commands to enable the feature flags for this group (replace `gitlab-org` by the customer's group name):

```text
/chatops run feature set --group=gitlab-org observability_features true
```

To see the list of groups that have been already enabled, you can run the following command:

```text
/chatops run feature get observability_features
```

The list returns group IDs and not group names though. To know a group's ID, browse to the group's page ([example](https://gitlab.com/gitlab-org/)), open the "..." menu on the top-right of the page and select "Copy group ID". If you don't have access to the group, ask the customer to do it.

Learn more: see related [feature flag issue](https://gitlab.com/gitlab-org/opstrace/opstrace/-/issues/2444).

For Self-Managed:

* not available for now

## Dashboards

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="platform insights" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="platform insights" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="platform insights" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="platform insights" >}}
{{< /tableau >}}
