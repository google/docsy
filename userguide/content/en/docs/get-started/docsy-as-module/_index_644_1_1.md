---
title: Personal Productivity Engineering Team
description: The Personal Productivity Engineering team is responsible for work relating to cross-stage features such as navigation, settings, and notifications.
---

## About

We're the Personal Productivity team and we are part of the [Foundations Stage](/handbook/product/categories/#foundations-stage).

We hope it's a good entry point to learn more about who we are and what we do.

## Team Members

{{% stable-counterparts role="Foundations:Personal Productivity" %}}

## What do we work on?

<!-- TODO: Pull this from the product side -->
- **Navigation & Settings** ([Direction Page](https://about.gitlab.com/direction/foundations/personal_productivity/))

## Communication

To get in touch with the Personal Productivity team, it's best to create an issue in the relevant project (typically [GitLab](https://gitlab.com/gitlab-org/gitlab)) and add the `~"group::personal productivity"` label, along with any other appropriate labels.
Then, ping the relevant Product Manager and/or Engineering Manager (see [team members](#team-members)).

For more urgent items or if you are unsure who to ask, ping `@gitlab-org/foundations/personal-productivity` or use [#g_personal-productivity](https://gitlab.slack.com/archives/C010NAWPRV4) on Slack (internal only).

## How do we work?

In general, we use the standard GitLab [Product Development Flow](/handbook/product-development-flow/). Here are some specific workflows we use:

{{% include "includes/engineering/foundations/weighting_scale.md" %}}

{{% include "includes/engineering/foundations/fifth_week_of_focus.md" %}}

## Metrics

{{< tableau height="600px" toolbar="hidden" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/TopEngineeringMetrics/TopEngineeringMetricsDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="personal productivity" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/MergeRequestMetrics/OverallMRsbyType_1" >}}
  {{< tableau/filters "GROUP_LABEL"="personal productivity" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/Flakytestissues/FlakyTestIssues" >}}
  {{< tableau/filters "GROUP_NAME"="personal productivity" >}}
{{< /tableau >}}

{{< tableau height="600px" src="https://us-west-2b.online.tableau.com/t/gitlabpublic/views/SlowRSpecTestsIssues/SlowRSpecTestsIssuesDashboard" >}}
  {{< tableau/filters "GROUP_LABEL"="personal productivity" >}}
{{< /tableau >}}
