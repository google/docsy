---
title: "Group Cost Metrics"
description: "Group Cost Metrics"
---

---

## Overview

[Group Cost Metrics SSOT](https://app.periscopedata.com/app/gitlab/744908/Group-GCP-Cost-PI's)

[How to Engage](/handbook/engineering/infrastructure/cost-management/how-to-engage)

We maintain a set of base level cost metrics for groups to use in Periscope in this [Dashboard](https://app.periscopedata.com/app/gitlab/744908/Infrafin-Base-Cost-Metric-SSOT---Groups). These are created in conjunction with a strict definition that explains what is and is not included in the metric, so understanding the definition is crucial to understanding the metric itself.

Currently we aim to have no more than 5 of these metrics per group, but may expand this. Generally we have 1 metric for total cost, 1 metric for total cost MoM growth, and up to 3 additional metrics around specific sub-categories of cost within the group. This is to try and keep the number of metrics manageable as we expand to more groups.

## Using the Metrics

The reason for keeping all these type of metrics in one place is so that we have this as the Single Source of Truth (SSOT) for the group level metrics we create and we have a place where everyone can read the exact definitions of the metrics.

When you would like to use these metrics to create a final KPI, for example taking gitaly cost and dividing by total storage amount, you can copy/paste the query used into a subquery in your own dashboard, combine it with the SQL for the rest of the metric and have your final metric. Please make sure to include the original definition as part of your chart description when you do this. If you need help with any part of this, please ask for help in #infrafin or #g_engineering_analytics slack channel.

## Requirements / Limitations

- Include the original metric definition in your newly created charts, or otherwise link back to the source
- Less than 6 base level cost metrics per group

## Requesting a New Group Level Cost Metric

If you are a PM or just see a need for a new metric to be added, please read the instructions under "I would like to see a new group or service level cost metric" in [How to Engage](/handbook/engineering/infrastructure/cost-management/how-to-engage)
