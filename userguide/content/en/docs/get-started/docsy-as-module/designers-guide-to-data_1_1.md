---
title: "Data for Design Decisions"
description: "Guide on tools used within GitLab to find the data to support design decisions."
---

## Using data for design decisions at GitLab

Data is another way designers and researchers at GitLab can understand user behavior. Analytics can provide valuable input throughout the Product Development Flow. By using data, we can understand and quantify the impact of the iteration that we shipped.

We should not depend entirely on data to make decisions, but it should be an essential input to decision making. To learn more about quantitative data/research, see the [Using Data to Find Insights](/handbook/product/ux/ux-research/quantitative-data/) handbook page.

{{< youtube "J-USG9BKH-g" >}}

## Aligning hypothesis to impact

Part of the design process is to have a [strong hypothesis](/handbook/product/ux/ux-research/defining-goals-objectives-and-hypotheses/) to guide our work.

Ideally, the hypothesis will be based on information from user research.

For example:

> We believe `storing information about how an incident was resolved, how long the resolution took, and what the outcome was in a way that’s easy` for `engineers responsible for incident management` to access will achieve `a 20% faster resolution time for incidents`.

Here are possible ways one could use data to understand whether `a 20% faster resolution time for incidents` was achieved or not:

- Measure time between two steps in the user journey
- Measure the total time spent for resolution
- Conduct an A/B test to compare the two solutions

These data points would be hard to obtain during solution validation but when measured they help connect the dots from research, iteration, to impact.

By observing and measuring, it should spark further questions to help generate more possible iterations in the future.

## How is data being captured

To generate reports and dashboards, we use a third party tool called Tableau to visualize the data captured.

The data source determines the table names used in Tableau queries. We have three primary data sources that are useful from a product perspective: service ping, product database, and internal events.

**Our goal is to analyze product usage. NOT to track individual users**. This means on the frontend we respect browser settings of "do not track" and allow opting out of usage ping. In addition to that, the Analytics Instrumentation team is responsible for data pseudonymization so that there no personally identifiable information saved. This [video highlights how Snowplow, usage ping, and pseudonymization work together](https://www.youtube.com/watch?v=awWhNtwuVNs).

### Overview of the data sources

- **Service Ping** (for Self-Managed and GitLab.com)
  - A custom GitLab tool to collect aggregate information from our customers who host our product on their own hardware.
  - Video: [Usage Ping Workshop](https://www.youtube.com/watch?v=D4eGDbpIY5c)
  - Examples of when to use:
    - Total number of issues
    - Count of distinct users creating issues
    - Instance settings - Git version, database version
    - Count of feature enabled
    - Count of created notes on Snippets
    - Count of notes on Merge Request
- **GitLab.com Postgres Database** (for GitLab.com)
- **Internal Events** (for GitLab.com)
  - Captures client/server side events and page views
  - [Tools for viewing events](https://docs.gitlab.com/ee/development/internal_analytics/internal_event_instrumentation/local_setup_and_debugging.html) for exploration/testing
  - [Implementing event tracking](https://docs.gitlab.com/ee/development/internal_analytics/internal_event_instrumentation/quick_start.html)
- **deprecated** Snowplow (for GitLab.com)
  - Captures client/server side events and page views
  - Video: [Snowplow 2.0 Workshop](https://www.youtube.com/watch?v=CaxhdskjWvg)
  - [Tools for viewing events](https://docs.gitlab.com/13.12/ee/development/snowplow/#developing-and-testing-snowplow) for exploration/testing
  - [Implementing Snowplow click tracking for designers](https://www.youtube.com/watch?v=95wNcGMrpMg&ab_channel=GitLabUnfiltered)

[Key Data Sources for Product Managers at GitLab](/handbook/business-technology/data-team/programs/data-for-product-managers/#key-data-sources-for-product-managers-at-gitlab) elaborates on how each data source is used and queried.

These visualizations will help you understand how the systems work together:

- A [simplified diagram](https://docs.gitlab.com/ee/development/internal_analytics/#data-flow) showing the interactions between GitLab Inc and self-managed instances.
- A detailed diagram of the [data platform's data stack](/handbook/business-technology/data-team/platform/#our-data-stack).

## Examples of using data for design decisions

The issues and merge requests below are examples of how we have used data for decisions.

- [Adds snowplow-based event tracking to see how often users are expanding the unit test report MR widget](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/46048)
- [Left sidebar and top nav navigation interaction (internal link)](https://gitlab.com/gitlab-data/analytics/-/issues/5357#note_596307748)
- [How many users are setup to approve more than one rule (internal link)](https://gitlab.com/gitlab-data/analytics/-/issues/10862)
- [Choosing between a textarea and an input](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/73506#note_722625421)
- [Standardizing device width in designs](https://gitlab.com/gitlab-org/gitlab-design/-/issues/1634)

## Frequently asked questions

- **Who can I ask for data help?** If you have any specific questions around Data or Tableau, you can connect with them on Slack in `#data`.
- **What happens when there is no baseline metric to measure from?** When there is no baseline, use the data that is to be tracked as the baseline after a month of data.

## Resources

- [Data for Product Managers](/handbook/business-technology/data-team/programs/data-for-product-managers/)
- [Internal Analytics at GitLab](https://docs.gitlab.com/ee/development/internal_analytics/)
- [Experimentation Design & Analysis](/handbook/product/product-analysis/experimentation/)
- [Growth Experiments Knowledge Base](/handbook/marketing/growth/)
- [Using Data to Find Insights](/handbook/product/ux/ux-research/quantitative-data/)
