---
title: "FinOps Team"
---

The [FinOps function](../../../../../job-families/engineering/infrastructure/site-reliability-engineer#finops) brings experience in both Site Reliability Engineering (SRE) and Software Engineering (SWE), leveraging these skills to optimize the financial operations of our cloud services and data resources. This technical expertise enables us to not only ensure alignment with financial objectives but also drive operational efficiency at scale. Our team’s deep understanding of cloud cost structures, infrastructure, data management, and automation empowers us to manage the full lifecycle of cloud consumption, from cost allocation to detailed analysis, while maintaining the high standards of reliability and performance expected in modern cloud environments.

|  |  |
|--|--|
| GitLab Handle | @tonyganga |
| Issue Tracker | [FinOps Issue Tracker](https://gitlab.com/gitlab-com/gl-infra/finops/team/-/boards/5046766) |
| Slack | [#g_finops](https://gitlab.enterprise.slack.com/archives/C05KWUER6SV) |

## Our Core Responsibilities

We focus on several key activities:

- Analysis of costs related to cloud infrastructure.
- Providing insights into cloud resource utilization, identifying inefficiencies, and helping stakeholders optimize their spend.
- Provide analysis on spend trends, forecasting future expenses, and helping teams plan their budgets accordingly.
- Helping stakeholders access and interpret the cloud cost data they need for decision-making.

## How We Work

If something requires immediate attention, please tag the relevant person/team in the GitLab issue and include a clear description of the urgency. 
DMs and ad-hoc requests can lead to duplicated work or missed context and should be avoided in favor of formal issue submission. Slack should be used primarily for quick clarifications or urgent escalations but not for initiating work requests.

Whenever possible, we encourage stakeholders to refer to the data available in our data warehouses (e.g., Snowflake, Google BigQuery, etc) to find the data they need. When in doubt, [check dbt](https://dbt.gitlabdata.com/#!/overview). If you still can't find what you need, reach out to us in an issue. 

- **Work Requests:** All tasks and requests should be tracked via [issues in GitLab](https://gitlab.com/gitlab-com/gl-infra/finops/team/-/issues/new). This allows for clear documentation, prioritization, and tracking of requests.
- **Roadmap**: Our [roadmap](https://gitlab.com/gitlab-com/gl-infra/finops/team/-/issues/198) is updated weekly.

## Educating Stakeholders

- We encourage stakeholders to access our data repositories and take ownership of their use cases and views. We do our best to ensure data we find useful finds its way into our [data warehouse](../../../../enterprise-data/platform/_index.md).

> **Important:** The FinOps team does not create or maintain dashboards (including Tableau) for other teams, as this requires deep domain knowledge that resides with the business stakeholders. Creating dashboards for the entire business is not scalable for our small team and would detract from our core responsibilities of cost analysis and optimization.

- We provide the necessary data foundation, but visualization and dashboard creation are the responsibility of the teams who best understand their specific needs and data context.

📊 **Need Tableau help?** The Data team provides documentation on [getting started with Tableau](../../../../enterprise-data/organization/programs/data-for-product-managers/index.md).

### Engaging with Stakeholders

We manage a variety of stakeholder relationships across the organization. Each stakeholder group has specific needs, and we aim to support them in a way that’s both efficient and scalable.

- **FP&A:** Provide cost insights and analysis for financial forecasting.
- **Data Teams (PDI & AI):** Collaborate to ensure the data required from our stakeholders is present in the data warehouse. This ensures structure and aligns with both operational and financial needs.
- **Engineering and Infrastructure:** Work closely with engineering teams to analyze resource utilization and identify cost-saving opportunities in cloud infrastructure.
