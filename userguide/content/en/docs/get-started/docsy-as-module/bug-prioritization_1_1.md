---
title: "Bug Prioritization"
description: "This page describes the bug prioritization process performed by the quality engineering sub-department as part of the cross-functional prioritization process."
---

## Overview

This page describes the bug prioritization process performed by the quality engineering sub-department as part of the cross-functional prioritization process.

An overview of the full process can be found on the [cross-functional prioritization](/handbook/product/cross-functional-prioritization/) handbook page.

## Timeline

As defined in our [Product Development Timeline](/handbook/engineering/workflow/#product-development-timeline), there are specific deadlines for prioritization. Given a milestone `m` that will be shipped in month `M` (on the [release date](/handbook/engineering/releases/)):

- By the Monday, 19 days before the milestone begins:
  - Bug Prioritization triage report is created with a list of prioritized `type::bug` issues to the product managers of each groups.
- By the Monday, 12 days before the milestone begins:
  - the quad for each counterpart group (PMs, EMs, UX, and Quality) discusses which issues to include in the upcoming milestone.
  - the product manager, taking into consideration prioritization input from the quad, creates a plan of issues for the upcoming milestone.

## Bug Prioritization triage report

An automated [Bug Prioritization triage report](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/policies/template/group/bug-prioritization.yml.erb) is created for each group on a monthly basis containing the Top 10 open issues of `~"type::bug"`. The report is generated with issues that are prioritized based on the below conditions:

  1. Severity based on label `severity::*`
  1. Security vulnerabilities based on label `bug::vulnerability`
  1. Customer issues based on label `customer`
  1. Age of the issues(oldest)

Bug Prioritization triage report are automatically assigned to specific PMs, EMs of each group, listed in
[the group definition file](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/master/group-definition.yml),
or directly in the triage report policy files
[policy YAML files](https://gitlab.com/gitlab-org/quality/triage-ops/tree/master/policies).

To change who an issue gets assigned to, open a merge request for the above
files. If the group definition file is changed, we'll need to
[run some scripts](https://gitlab.com/gitlab-org/quality/triage-ops#generating-policy-files-and-ci-jobs)
to update the generated files as well.

## Bug Prioritization Dashboard

The [bug prioritization dashboard](https://10az.online.tableau.com/#/site/gitlab/views/OpenBugAgeOBA/BugPrioritizationDashboard?:iid=2) can also be used to put together a suggested list of bugs for each group.
This dashboard should be revisited for each milestone, as the data will change over time.

As a general guideline, the total amount of bugs proposed should match the burndown plan from the dashboard for your specific group.
This total can be found under **Total Bugs** in the chart titled **Milestone planning (bug counts to schedule)**.

It is also helpful to include the **Total Bug %** as well, which can be found in the **Milestone planning (bug % of scheduled issues)** chart.
This metric can help groups aim toward scheduling the appropriate percentage of bugs if they do not have the capacity to work on every bug listed.

This process is not intended to be one-size-fits-all, and groups are encouraged to find what best works for the team.

### Dashboard Walkthrough

This table includes a list of the charts that can be found on the bug prioritization dashboard and a description of what each one represents.

The [bug prioritization dashboard walkthrough](https://www.youtube.com/watch?v=qd3NjPV6zkk) video also offers an overview of the dashboard with examples.

| Chart Name                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|-------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Bugs per milestone (6mo avg)                    | The percentage of issues worked on per milestone that were bugs, on average, over the last 6 months.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| Bug Growth Rate (6mo total)                     | The total percentage of bug growth over the last 6 months.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Bugs opened and closed by severity (6mo totals) | The total number of bugs opened and closed, by severity, over the last 6 months.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Open bugs by severity                           | The total number of open bugs, by severity, including the number and percentage past SLO.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| Selected burndown plan                          | Summary of the burndown plan selected in the filters.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| Milestone planning (bug counts to schedule)     | This chart helps determine the number of bugs needed to be pulled into the milestone in order to meet the selected burndown plan. <br/><br/> The "Open Bugs (Total)" column uses the same data from the "Open bugs by severity" chart. <br/><br/> The "Burndown Bugs" column shows how many bugs must be pulled in per milestone, by severity, in order to start reducing the backlog. <br/><br/>  The "New Bugs" column approximates how many new bugs of each severity we can expect to have open in a given milestone. The total number of new bugs here is the minimum needed to be scheduled to not grow the backlog.  |
| Milestone planning (bug % of scheduled issues)  | This chart represents the same concept as the Milestone planning (bug counts) chart, but in percentages of the total number of MRs merged over time. <br/><br/> The "New Bug %" column is the percentage of bugs needed to be taken up in the upcoming milestone in order to not grow the backlog, without burndown. <br/><br/> The "Total Bug %" column is the percentage of bugs needed to be taken up in the upcoming milestone in order to burn down the backlog.                                                                                                                                                       |
| Open bugs over time                             | This graph visualizes the number of bugs opened over time by severity.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| S1 Bug Backlog Over Time                        | This graph visualizes the number of open S1 bugs in the backlog over time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| S2 Bug Backlog Over Time                        | This graph visualizes the number of open S2 bugs in the backlog over time.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Open bugs (with severity label)                 | Lists open bugs with links to their respective issues, sorted by severity in descending order (`severity::1` - `severity::4`). Each severity group is then sorted by bug age, from oldest to newest. <br/><br/> SETs / QEMs can use this list to put together a suggested list of bugs for their counterpart groups.                                                                                                                                                                                                                                                                                                        |
| Open bugs (missing severity label)              | Lists open bugs that are missing a severity label.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| Avg MRs per milestone (6mo)                     | The average number of MRs opened per milestone over the last 6 months.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| Bugs MRs merged per bug issue closed (6mo)      | The number of bug MRs merged per bug issue closed over the last 6 months.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

### Prioritization Guidelines

The following considerations can be helpful to keep in mind when determining which bugs to prioritize.

- Age (older vs. newer)
- Severity (higher vs. lower)
- Past due bugs (bugs that slipped from previous milestones, missed SLOs, etc.)
- Customer reported vs. internal (issues tagged with `customer`)
- "Support Priority" or "Support Efficiency" which indicate a significant number of customer tickets
- Popularity/number of users impacted
  - This will require some investigation and discussion among the quad, but there a few indicators that can help us get started:
    - Number of upvotes on an issue
    - Context from comments or customer support mentioning the number of users impacted
    - [Kibana](https://log.gprd.gitlab.net/) and [Sentry](https://sentry.gitlab.net/gitlab/gitlabcom/) prod logs for tracking how many users are experiencing specific errors
    - Some product groups have dashboards and other tools to track [xMAU (monthly active usage)](/handbook/business-technology/data-team/data-catalog/xmau-analysis/) for their features. This can help us gauge how impactful a bug may be if it is affecting a feature with high usage.
- Not actively being worked on
- Not already assigned to a future milestone (unless it requires escalation)
- Not currently blocked
- Aligns with the group's current feature work and roadmap (ex: it may be more efficient to fix bugs relating to `feature A` together,
  while `feature A` is being updated in a future milestone)

We should also aim to align our decisions with the below [product prioritization framework](/handbook/product/product-processes/#prioritization)

{{% include "includes/master-prioritization-list.md" %}}
