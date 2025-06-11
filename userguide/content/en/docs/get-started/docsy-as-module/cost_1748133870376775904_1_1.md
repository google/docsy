---
title: Cost of Observability Stack
---

## Elastic Cloud Costs (Snowflake)

**Where to Find the Views**
You can find the view [here](https://app.snowflake.com/ys68254/gitlab/#/elasticcloud-cost-breakdown-dPmMm74OV).

**Access Requirements**
To view the dashboard, you need access to Snowflake as a `SNOWFLAKE_ANALYST`. Follow these steps to gain access:

1. **Create an Access Request (AR)**: Use the [provided template](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/30250) to submit your AR.
2. **Create a Merge Request (MR)**: Once your AR is approved, [create an MR](https://gitlab.com/gitlab-data/analytics/-/merge_requests/10402/diffs) to grant yourself permissions. Use the template and instructions provided.

After gaining access, you will be able to view and execute the dashboard.

**How the Views Are Built**
The views for Elastic Cloud are constructed using SQL queries (worksheets in Snowflake). The main query retrieves daily cost data for Elastic Cloud services by SKU from the billing table for the `gitlab-logs-prod` deployment. It organizes this data by date, SKU, and daily cost to help track and analyze expenses. These visualizations are reusable and can be integrated into other Snowflake dashboards.

**What the Views Display**

1. **Breakdown By SKU (Daily)**: Shows daily ECU expenditure by SKU.
2. **ECU Spend (Monthly)**: Displays total ECU expenditure by SKU for each month.
3. **Breakdown by Data Transfer**: Illustrates daily ECU spent on data transfer, including in, out, and between nodes.
4. **ECU Burndown (Daily)**: Provides a burndown chart of daily ECU expenditure, starting from the total ECU available as of February 16th 2024 (when we started recording this data in Snowflake).
5. **Estimated ECU Exhaustion**: Shows a table with the estimated ECU exhaustion date, calculated by dividing the remaining balance by the daily average cost (The daily average cost is found by first adding up the daily costs for each day and then averaging these totals).

## GCP Cost (Looker Studio)

**Where to Find the Views**
You can find the view [here](https://lookerstudio.google.com/s/kJQfeVRUsdM).

**How the Views Are Built**

1. **GKE Cluster Cost and Usage Calculation**
   This query assesses the cost of the GKE cluster and tracks CPU/memory usage for each namespace using data from the `gke_usage_metering.gke_cluster_resource_usage` table in BigQuery and GCP billing export. Costs are calculated based on the weighted average resource usage by namespace.

2. **GCP SKU Resources Query**
   This query lists all GCP SKU resources related to our tooling (e.g., Mimir, Sentry), including their descriptions and daily prices.

**What the Views Display**

- **GKE Operational Cost**: Shows the daily costs for each observability namespace within the GKE footprint over the past 30 days.
- **GCP Operational Cost**: Breaks down the costs of various GCP services by SKU, such as load balancer data processing and storage snapshots, also for the past 30 days.
