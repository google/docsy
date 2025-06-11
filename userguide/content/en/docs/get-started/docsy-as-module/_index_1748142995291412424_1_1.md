---
title: "Product Analytics for UX Research"
description: "This page provides useful information and best practices for team members interested in using product analytics as part of user experience research projects."
---

This page aims to serve as a resource for team members interested in leveraging data we collect about GitLab usage in order to perform or inform user experience research. It provides background information on what GitLab's internal structures are, what data is available and where, and some best practices and tips to help team members get started.

While the information here is meant as a shortcut for people doing UX Research, it only scratches the surface of GitLab's capabilities with data. For more in-depth information, see the [Data team's handbook](/handbook/enterprise-data/).

## Understanding the Product Analytics Landscape

To efficiently get to the usage data you need to conduct research, it's important to understand the various tools and teams involved in data and analytics at GitLab.

### Tools

_In order of most to least relevant to UX Researchers:_

- **Tableau** - the business intelligence analytics tool we use as a 'frontend' to analyze and visualize data from Snowflake and Service Ping.
- **Snowflake** - a cloud-based data warehousing platform primarily used for storing and analyzing structured data (i.e., the thing that stores the event data).
- **Service Ping** - an event tracking tool GitLab built to perform event tracking on self-managed instances (i.e., the thing that tracks events on GitLab self managed).
- **Snowplow** - an open-source event tracking platform used for collecting, processing, and enriching event-level data from various sources (i.e., the thing that tracks the events on GitLab.com).

### Useful Links

- [Tableau workbooks](https://docs.google.com/document/d/10JoLjHSFCUvSzXXN_Fv4CFxj1yu07n5zZoAHka17qV4/edit#heading=h.unc286iee2a) (A list of workbooks UX Researchers have found useful)
- [Tableau handbook page](/handbook/enterprise-data/platform/tableau/) (The GitLab handbook page on Tableau)
- [Analytics relevant to each product stage](/handbook/product/groups/product-analysis/crash-course/#learn-about-analytics-relevant-product-stage-topics-grouped-by-section) (A GitLab handbook page for product stage resources)
- [GitLab Metrics Dictionary](https://metrics.gitlab.com/) (A website listing all the metrics we collect from Service Ping and Snowplow)
- [Data Catalog](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/) (Internal handbook page with examples of commonly used data models)
- [DBT](https://dbt.gitlabdata.com/#!/overview) (Explains the underlying code and column definitions of all GitLab data sets)

![Simplified usage data stack](/images/product/ux/ux-research/product-analytics-for-ux-research/datastack_simple.png)
The above illustration shows a simplified version of GitLab's usage data stack, based on [this document.](/handbook/enterprise-data/platform/#i-classfas-fa-cubes-fa-fw-stylecolorrgb25210938-font-size85em-aria-hiddentrueiour-data-stack)

### Getting Access

Complete an [access request to use Tableau](/handbook/enterprise-data/platform/tableau/#tableau-online-access). Some UX Researchers have Explorer roles, and some have Viewer roles - if you want to see the differences in capabilities between the two roles, [check this handbook page](/handbook/enterprise-data/platform/tableau/#capabilities).

To view some dashboards and data, you will need SAFE access, but others are available without. If you do find yourself unable to access information you need, complete a [SAFE-related access request](/handbook/enterprise-data/platform/safe-data/#accessing-a-safe-dashboard) for Tableau.

NOTE: Obtaining SAFE access to user data will put you on the [designated insiders list](/handbook/legal/publiccompanyresources/#designated-insiders), which will require you to obtain pre-clearance in order to sell any GitLab shares you own, as well as restrict the trading window in which you can do so.

### Teams to collaborate with

There's a [more complete explanation](/handbook/enterprise-data/#how-data-works-at-gitlab) of the various groups that are responsible for data at GitLab, but here are two teams you'll want to know about if you're performing UX Research.

[Product Data Insights (PDI)](/handbook/product/groups/product-analysis/) – As the name suggests, this team is responsible for helping folks in Product use data to gain insights. Typically, there is a team member assigned to your area of the product (find your partner on the product data insights team [here](/handbook/product/groups/product-analysis/)).
The Product Data Insights team can take requests (via an [issue](/handbook/product/groups/product-analysis/#issue-intake)) for certain kinds of analysis, they can help you find the data you're looking for and are generally a great resource for asking questions during [Office Hours](/handbook/product/groups/product-analysis/#office-hours) or over [Slack](/handbook/product/groups/product-analysis/#channels). They are well-versed in Tableau.

[Analytics Instrumentation](/handbook/engineering//development/analytics/monitor/analytics-instrumentation/) - This group is focused on building out the instrumentation capabilities of GitLab and its team members, including [increased instrumentation coverage](https://gitlab.com/groups/gitlab-org/analytics-section/analytics-instrumentation/-/epics/6) across the product and scaling the instrumentation system we use to handle more use cases. This is a group to contact if you run into a block where something you want to do isn't currently available (or you're not sure and the Product Data Insights team doesn't know).

The Analytics Instrumentation team members are the DRIs for data collection across both GitLab.com and Self-Managed. They own Service Ping and Snowplow. They are the ones to go to for questions like:

- How do I instrument a new statistic for self-managed?
- What are the best practices for adding to Service Ping?
- How can I use Snowplow to track a frontend interaction on GitLab.com?
- Can I utilize Snowplow to track events on the server-side?

## The state of available information

[GitLab has pledged to not use 3rd party software for telemetry](https://about.gitlab.com/blog/2019/10/10/update-free-software-and-telemetry/), so we have built our own (Service Ping). Due to this and the rapid growth of the product, currently there are gaps in which parts of the product are instrumented for usage analytics and telemetry.

As mentioned above, the analytics instrumentation team has efforts underway to gain more coverage, ensure new features are instrumented before release, and to work on the backlog of non-instrumented features.

Is it possible to associate user level behavior in our GitLab.com data to our Snowplow events (i.e., can we track a single user's behavior)? ([Source](/handbook/product/groups/product-analysis/data-model-cheat-sheet/#faqs-1))

_No. Our Snowplow user identifiers are anonymized, while our GitLab.com user identifiers are not. However, it is possible to join Snowplow and GitLab.com data at the namespace (group/project) level (i.e., track more broadly)._

### Common metrics and segments that GitLab tracks

- Monthly active users (MAU)
  - Examples: MAU per stage, per group, per section
- Performance indicators (PI)
  - Examples: MAU, conversion rate, category maturity advancement
- User segments
  - Examples: Geo Region, # of seats, industry vertical
- Product tiers
  - Examples: Free, Premium, Ultimate
- Product sections:
  - Examples: Analytics, CD, CI, Dev, Sec
- Delivery
  - Examples: SaaS, Paid SaaS, Self-Managed

## Working with Product Data Insights team

[PDI How to work with us](/handbook/product/groups/product-analysis/#working-with-us) is a great resource on how to open up a product data insight request.

1. **Get access to:**

   - The right tools (usually Tableau online is sufficient)
   - The data (do you need SAFE access)

1. **Determine the set of questions you're trying to answer, including:**

   - Which user criteria / segment?
   - Which metrics?
   - Which components or features (if applicable)?

1. **Check with your PM (and/or your PDI counterpart) to determine:**

   - Is this tracked today?
     - This can be difficult to determine, try asking in #data or by working with your PM and PDI counterpart.
     - If not, consider reaching out to the Analytics Instrumentation team or ask in #data.
   - Is there a dashboard or analysis done already, or do you need a new chart or dashboard?
     - Before opening a request, do a quick search to see if an analysis already exists. If you have trouble determining that, you can ask in #data.
     - If new analysis is needed, open a PDI request. Alternatively, you can try to build out your own charts and dashboards, though based on past UXR experiences, partnering with PDI is a great way to get more familiar with Tableau and product usage data.

### How can I get help?

- If you ever get stuck or have a question, please ask for help in the #data Slack channel.
- Attend the [Product Data Insights team's office hours](/handbook/product/groups/product-analysis/#office-hours).
- [Tableau Training Videos](https://www.tableau.com/learn/training)

## Example UXR-PDI use case

- Finding quantitative data to triangulate with qualitative research findings (e.g., prioritizing active, commonly used flows; understanding scale and scope of usage).
  - Example: [What % of new users are software developers vs. other job titles?](https://10az.online.tableau.com/#/site/gitlab/views/Gitlab_comUserSignups/GrowthMetrics?:iid=1)
- How many (or what percent) of users (Monthly Active Users, MAU) did X action?
  - Example: [How many (and %) of SaaS - Ultimate accounts (not users), used code review features within the last 3 months?](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTMetricsDemographics/AccountDemographicDashboard2?:iid=1)
- How many (or what percent) of users went from point A to point B? (i.e., funnel analysis)
  - Example: [GitLab .com registration funnel analysis](https://10az.online.tableau.com/#/site/gitlab/views/SaaSRegistrationFunnel/RegistrationFunnelAnalyses?:iid=1)
- How has usage of X action changed over time? (e.g., for adoption of a feature / since a change was introduced)
  - Example: [Monthly changes in number of Self-Managed, Ultimate accounts that used Code Review features over the past year, broken out by number of seats](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTMetricsDemographics/AccountUsageforaMetric-OverTime?:iid=1)

## Simplified Metrics Glossary

Some terminology used in product analytics dashboards:

- **AMAU** - Action Monthly Active Users (Unique MAU which engaged with a specific feature)
- **CMAU** - Estimated Combined Monthly Active Users (Sum of SMAUs across all stages)
- **GMAU** - Group Monthly Active Users (Unique MAU using features within a specific group)
- **SMAU** - Stage Monthly Active Users (Unique MAU that used features within a stage)
- **Section MAU** - Section Monthly Active Users
- **UMAU** - Unique Monthly Active Users
- **DAU/WAU** - Daily/Weekly Active Users
- **PI** - Performance Indicator
- **PPI** - Primary Performance Indicator (some stages/groups may prefer a different metric than MAU)
- **SpU** - Stages per user
- **SpO** - Stages per organization

For more information (or if something's not listed above):

- [Data catalog metrics and terms index (internal)](https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/#metrics-and-terms-index)
- [Product performance indicators (internal)](https://internal.gitlab.com/handbook/company/performance-indicators/product/)

## Useful Tableau Workbooks

There are many dashboards available by searching around in Tableau. Here's a list of a few that UX team members have created or found:

- [A list of all dashboards created by the Product Data Insights team](https://10az.online.tableau.com/#/site/gitlab/search/workbooks?search=peterson%20hervas%20raisinghani%20neuberger%20petersen%20braza&tag=Product)
- [PDI Dashboards, Analysis, & Insights handbook page](/handbook/product/groups/product-analysis/dashboards-analysis-insights/)
- [Firmographic Product Metric Usage Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTMetricsDemographics/README?:iid=1)
- [Centralized Product Usage Metrics Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DRAFTCentralizedGMAUDashboard/MetricReporting?:iid=1)
- [Customer Request Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/CustomerIssueDashboard/README?:iid=1)
- [Subscription Feature Usage Trends](https://10az.online.tableau.com/#/site/gitlab/workbooks/2301184/views)
- [UX KPIs](https://10az.online.tableau.com/#/site/gitlab/views/DRAFT-UXKPIs/Summary?:iid=2)
- [Snowplow Event Exploration last 30 days](https://10az.online.tableau.com/#/site/gitlab/views/SnowplowEventExplorationLast30Days/SnowplowEventExplorationLast30D?:iid=1)
- [Service Ping Metrics Exploration Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/PDServicePingExplorationDashboard/MetricsExploration)
- [GitLab.com Programming Languages](https://10az.online.tableau.com/#/site/gitlab/views/GitLab_comProgrammingLanguages_17061381253400/GitLab_comProgrammingLanguages?:iid=3)
