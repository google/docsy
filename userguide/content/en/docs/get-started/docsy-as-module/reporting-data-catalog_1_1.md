---

title: "Reporting Data Catalog"
description: "Giltab's Reporting Data Catalog"
---







---

## Introduction

This is GitLab's catalog of published Tableau Datasources and Dashboards.  While it is possible to search for and discover datasources and dashboards directly in the Tableau site this catalog acts as the documentation for what content is available for reporting and use.

Each entry in the catalog will have the following information:

- Name
- Description
- Link: A link to the item on the internal Tableau site.
- Owner: Team responsible to maintain
- Keywords: Common terms used for searching
- Certification: The level at which the published item has been certified by the enterprise data team.
- Lineage: Links to database tables, sources, and published datasources used in the creation of the item.

## Datasources

### Mart ARR

A data source to explore ARR.  Designed directly from the [`mart_arr`](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_arr) table in the data warehouse.

- Link: https://10az.online.tableau.com/#/site/gitlab/datasources/49022247
- Owner: Enterprise Data Team
- Keywords: ARR
- Certification: Certified
- Lineage: [restricted_safe_common_mart_sales.mart_arr](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_arr)

### Mart CRM Opportunity

A data source to explore sales and marketing metrics.  Designed directly from the [`mart_crm_opportunity`](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_opportunity) table in the data warehouse.

- Link: https://10az.online.tableau.com/#/site/gitlab/datasources/49059356
- Owner: Enterprise Data Team
- Keywords: Opportunity
- Certification: Certified
- Lineage: [restricted_safe_common_mart_sales.mart_crm_opportunity](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_opportunity)

### Report Ping Metric Totals with Estimates (Monthly)

Total, recorded, and estimated usage for Self-Managed and SaaS Service Ping metrics. Designed directly from the [`rpt_ping_metric_totals_w_estimates_monthly`](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_ping_metric_totals_w_estimates_monthly) table in the data warehouse.

- Link: https://10az.online.tableau.com/#/site/gitlab/datasources/50320253
- Owner: Enterprise Data Team
- Keywords: Service Ping
- Certification: Certified
- Lineage: [common_mart_product.rpt_ping_metric_totals_w_estimates_monthly](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_ping_metric_totals_w_estimates_monthly)

## Dashboards
