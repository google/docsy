---
title: "Guide to Engineering Analytics Data"
description: Overview of key Engineering data sources and data models
---

## Introduction

Product Data Insights is responsible for building and evolving analytics capabilities and creating insights for Engineering to understand how well we are building our product. In this case, "wellness" is measured in terms of efficiency, as well as cost.

## Data Sources

Dive into our analytics by exploring the specific data sources that underpin our metrics.

- [GitLab.com](https://internal.gitlab.com/handbook/enterprise-data/platform/pipelines/saas-gitlab-com/) data is used for reporting on metrics like MR Rate & Performance KPIs
- [Workday](Workday) is GitLab's current central HRIS and we use this data to determine which group a team member is a part of.
- Zendesk data is used to fuel Customer Support metrics.

## How We Count MRs and Issues

For most engineering metrics, we only report on internal projects - specifically the ones that impact our product. What counts as "internal" is defined in two files:

- [internal_gitlab_projects.csv](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/seeds/seed_data/internal_gitlab_projects.csv)
- [internal_gitlab_namespaces.csv](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/seeds/seed_data/internal_gitlab_namespaces.csv)

If a project or namespace isn't listed in one of those CSVs, we don’t pull data for it. That means stuff like titles, labels, and descriptions won’t show up. If you want to include a project or group, you'll need to open an MR and ping an analyst. Only projects and namespaces specifically listed in the file will be included in the data (child groups needed to be added separately). Once the MR is merged, data for the new group/project will start getting pulled from that point forward (no historical backfill). We also need to do a full refresh of the source and downstream models (backfill [issue](https://gitlab.com/gitlab-data/analytics/-/issues/22244) example). Click [here](https://internal.gitlab.com/handbook/enterprise-data/platform/pipelines/#internal-only-filtering) to read more about what "internal" is. After that, we narrow our engineering metrics down even further to focus on projects that directly affect our product. Those are listed in the file below.

- [projects_part_of_product.csv](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/seeds/seed_engineering/projects_part_of_product.csv)

Right now, the following namespaces are included in the metrics:

| Namespace name | Namespace path |
|-----------------|-----------------|
| GitLab.org | gitlab-org |
| GitLab.com | gitlab-com |
| GitLab Chef Cookbooks | gitlab-cookbooks |
| GitLab components | components |

### Commonly Asked Questions

| Question        | Solution        |
|-----------------|-----------------|
| I don't see any issues for my project    | Project needs to be included in the seed files mentioned above.    |
| My issues are showing up but with no metadata    | Only data for internal projects are ingested.   |
| I don't see labels flowing through    | Check which group/project the label is created at. The group/project should be listed in the seed files.    |

## Data Models

In this section, we share commonly used data models that fuel many of our dashboards.

### workspace_engineering.engineering_merge_requests

- **Description**: This table is filtered down to all merge requests that directly affect our product.
- **Granularity**: One row per merge request
- **Documentation**: https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.engineering_merge_requests

### workspace_engineering.internal_merge_requests

- **Description**: This table is filtered down to all internal merge requests at GitLab
- **Granularity**: One row per merge request
- **Documentation**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.internal_merge_requests)

### workspace_engineering.engineering_issues

- **Description**: This table is filtered down to all issues that directly affect our product.
- **Granularity**: One row per issue
- **Documentation**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.engineering_issues)

### workspace_engineering.internal_issues

- **Description**: This table is filtered down to all internal issues at GitLab
- **Granularity**: One row per issue
- **Documentation**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.internal_issues)

### workspace_engineering.internal_notes

- **Description**: Table containing GitLab.com notes from Epics, Issues and Merge Requests. It includes the namespace ID and the ultimate parent namespace ID.
- **Granularity**: One row per issue
- **Documentation**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.internal_notes)

### workspace_engineering.agg_mttr_mttm

- **Description**: This table calculates Mean Time to Resolve (MTTR) and Mean Time to Merge (MTTM)
- **Granularity**: One row per issue
- **Documentation**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.agg_mttr_mttm)

### workspace_engineering.issues_history

- **Description**: Table containing age metrics & related metadata for gitlab.com internal issues. Used for tracking internal work progress for things like Engineering Allocation & Corrective Actions These metrics are available for individual issues at daily level & can be aggregated up from there
- **Granularity**: One row per issue and day
- **Documentation**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.issues_history)

### workspace_engineering.merge_request_rate

- **Description**: A model containing merge request rate by department and group.
- **Granularity**: One row per MR rate per month per granularity level (department, group)
- **Documentation**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.issues_history)

### workspace_engineering.open_merge_request_review_time

- **Description**: A model containing merge request rate by department and group.
- **Granularity**: One row per day per MR
- **Documentation**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.open_merge_request_review_time)

## Zendesk Data

### PREP.zendesk.zendesk_ticket_audits_source

- **Description**: SLA policies and priority per ticket
- **Granularity**: One row per audit
- **Documentation**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.zendesk_ticket_audits_source)

### PREP.zendesk.zendesk_tickets_source

- **Description**: Zendesk ticket data
- **Granularity**: One row per audit
- **Documentation**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.zendesk_tickets_source)

### PREP.zendesk.zendesk_ticket_metrics_source

- **Description**: Zendesk ticket data
- **Granularity**: One row per audit
- **Documentation**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.zendesk_ticket_metrics_source)

### PREP.zendesk.zendesk_sla_policies_source

- **Description**: SLA policies
- **Granularity**: One row per audit
- **Documentation**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.zendesk_sla_policies_source)

### workspace_engineering.zendesk_frt

- **Description**: A model built to calculate First Reply Time (FRT) metric.
- **Granularity**: One row per Zendesk ticket
- **Documentation**: [DBT docs](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.zendesk_frt)

## Additional Resources

- [Data governance](/handbook/sales/field-operations/data-intelligence/data-governance/)
- [Data quality](/handbook/enterprise-data/data-governance/data-quality/)
- [Data Team Handbook](/handbook/enterprise-data/)
- [DBT Docs](https://dbt.gitlabdata.com/#!/overview) - This resource contains comprehensive documentation on all available dbt models. This is a great starting point to understanding our models. For specific Engineering Analytics Models, please reference the Commonly Used Data Models section for a starting point.
- [Definitive guides to data subject areas](/handbook/enterprise-data/data-governance/data-catalog) managed by the Data team.
- [Documentation on data pipelines](/handbook/enterprise-data/platform/pipelines/) for the technically curious analyst. This page goes into each data source and extraction details.Contact
- [Tableau Developer Guide](/handbook/enterprise-data/platform/tableau/tableau-developer-guide/) - Date handling, handbook embedding, general tips and tricks
- [Tableau Style Guide](/handbook/enterprise-data/platform/tableau/tableau-developer-guide/tableau-style-guide/)

### Repo Shortcuts

- [Performance Indicator files](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/performance_indicators?ref_type=heads)
- [Performance Indicator page shortcodes](https://gitlab.com/gitlab-com/content-sites/handbook/-/tree/main/layouts/partials/performance-indicators)
- [Performance Indictoar page generator](https://gitlab.com/gitlab-com/content-sites/handbook/-/blob/main/layouts/shortcodes/performance-indicators.md?ref_type=heads&plain=1)
- [Performance Indicator Pages](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/performance_indicators?ref_type=heads )

If you have any questions, please feel free to drop them in `#g_engineering_analytics` or open a [new issue](https://gitlab.com/gitlab-org/quality/engineering-analytics/team-tasks/-/issues/new) for our team.
