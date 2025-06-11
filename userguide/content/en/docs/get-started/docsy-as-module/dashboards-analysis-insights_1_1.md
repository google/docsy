---
title: PDI Dashboards, Analysis, & Insights
description: This page aggregates dashboards, analysis, and insights generated or owned by the Product Data Insights team.
---

### Dashboards

[Here is a list of Tableau dashboards](https://10az.online.tableau.com/#/site/gitlab/search/workbooks?search=peterson%20hervas%20raisinghani%20neuberger%20petersen%20braza&tag=Product)
owned by the Product Data Insights team. Note:

* Viewing dashboards in the `SAFE` project require
additional steps to [obtain SAFE Dashboard access](/handbook/business-technology/data-team/platform/safe-data/)
(if you do not already have SAFE access in Tableau)
* This list includes dashboards in draft. Dashboards carrying the `Draft` tag should not be
used for reporting.

| Dashboard Name | Description | Date | Location | SAFE Access Required? |
| --- | --- | --- | --- | --- |
| [Product Data Insights General Collection](https://10az.online.tableau.com/#/site/gitlab/collections/2b35eb4c-1d4f-4339-b53e-5e3f58147e92?:origin=card_share_link) | This is a Tableau Collection containing analytics resources that are broadly useful to the Product Org. | Ongoing | Product/General | N |
| [Product Data Insights SAFE Collection](https://10az.online.tableau.com/#/site/gitlab/collections/a565fb9b-6478-4bba-9581-ebf84d49c99d?:origin=card_share_link) | This is a Tableau Collection containing SAFE analytics resources that are broadly useful to the Product Org. | Ongoing | Product/SAFE | Y |
| [PDI: Duo Pro Collection](https://10az.online.tableau.com/#/site/gitlab/collections/16d7490e-931b-4aa7-b4de-afb4916bb518) | This is a Tableau Collection containing PDI-owned resources related to Duo Pro adoption and usage. It contains both general and SAFE workbooks. | Ongoing | Product/General & Product/SAFE | Y & N |
| [PD: Cloud Licensing Adoption Dashboard](https://10az.online.tableau.com/#/site/gitlab/workbooks/1891137/views) | This dashboard provides insights on adoption of Cloud Licensing | FY24 Q1 | Ad-hoc/Product/SAFE | Y |
| [PD: Centralized Product Usage Metrics](https://10az.online.tableau.com/#/site/gitlab/workbooks/2069845/views) | Monthly reporting metrics and trends for product performance indicators | FY24 Q4 | Ad-hoc/Product/General | N |
| [PD: Firmographic Product Metric Usage](https://10az.online.tableau.com/#/site/gitlab/workbooks/2137023/views) | Segment metric usage by company size, industry, and seat count. | FY24 Q4 | Development/Product/SAFE | Y |
| [PD: Code Suggestions](https://10az.online.tableau.com/#/site/gitlab/workbooks/2260169/views) | Code Suggestions usage (ex: User Count), quality (ex: Acceptance Rate), and performance (ex: Load Time) metrics over time by delivery, language, etc. | FY24 Q4 | Ad-hoc/Product/General | N |

If you have any questions about using and/or interpreting the insights from these dashboards,
please reach out to the dashboard owner or tag `@product-analysts` in the `#data` channel on Slack.

### Analysis & Insights

| Analysis | Description | Date |
| --- | --- | --- |
| [Groups per Organization Metric Exploration](https://gitlab.com/gitlab-data/product-analytics/-/issues/982#note_1282380262) | Establishes usage benchmarks (days used per month and consecutive months used) for group event usage.| FY24 Q1 |
| [Release AMAU Decline Investigation](https://gitlab.com/gitlab-data/product-analytics/-/issues/933#note_1254640824) | What caused the decline of Release AMAU from November 2022? | FY24 Q1 |
| [Average Environments for Namespaces and Projects](https://gitlab.com/gitlab-data/product-analytics/-/issues/929#note_1321275080) | This analysis covers what the average number of environments and environment variables projects and namespaces on GitLab.com use | FY24 Q1 |
| [Payments declined due to lack of 3D Secure Authentication](https://gitlab.com/gitlab-data/product-analytics/-/issues/946#note_1252097963) | This analysis gives us insights on how many payments are declined because we lack 3D Secure functionality| FY24 Q1 |
| [Understanding user accounts with invalid zip/city combination](https://gitlab.com/gitlab-data/product-analytics/-/issues/1023#note_1307758646) | This analysis gives us insights on the impact of how many customers can not purchase a subscription if they have an invalid zip/city combination| FY24 Q1 |
| [SaaS Team Activation Metric 2022](https://docs.google.com/presentation/d/1rJG8FaqEjfgA-Nz9Ww3blgcUwRGzri7CeKkn1e2eEHY/edit?usp=sharing) | Covers the development of a Growth and Marketing metric used to identify team actions performed in the 1st 14 days that are predictive of paid conversion and retention. | FY23 Q4 |
| [Secrets Management Usage Spike](https://gitlab.com/gitlab-data/product-analytics/-/issues/764#note_1145165090) | What caused a spike in Secrets Management Usage in August 2022? | FY23 Q3 |
| [Investigation How Remote:Include Timeouts on GitLab.com](https://gitlab.com/gitlab-data/product-analytics/-/issues/727#note_1156508624) | This analysis investigates why there was a large spike in HTTP 503 errors when running pipelines | FY23 Q4 |
| [Verify Benchmark Analysis](https://app.periscopedata.com/app/gitlab/1108418/Verify-Benchmark-Dashboard) | This analysis was done to get an understanding of what typical test environments look like for Verify users | FY23 Q4 |
| [Delayed Value Analysis](https://gitlab.com/gitlab-data/product-analytics/-/issues/781#note_1153295255) | Studies key feature usage among Trial-to-Paid conversions and presents how trial feature adoption expedites paid feature adoption.| FY23 Q4 |
| [CI Runner Usage for Accounts with 1000+ Seats](https://gitlab.com/gitlab-data/product-analytics/-/issues/603#note_1095355443) | Study of the CI Runner Usage of large accounts with more than 1000+ | FY23 Q4 |
| [Analysis of User Caps feature usage and account growth](https://gitlab.com/gitlab-data/product-analytics/-/issues/794#note_1149817915) | This analysis gives us insights on correlation between 'User Cap' feature usage and growth metrics| FY23 Q4 |
| [Analysis on behavior of Change Linked Namespace flow](https://gitlab.com/gitlab-data/product-analytics/-/issues/870#note_1207139514) | This analysis gives us insights on how many SaaS subscriptions change their assigned Namespace| FY23 Q4 |
| [Characterize CI -> SAST Funnel among Free Projects](https://gitlab.com/gitlab-data/product-analytics/-/issues/709#note_1109629880) |Analysis to understand how SAST usage churns over time, and how much of this churn is due to dormant projects (that aren't using CI) vs. active projects that disable SAST. | FY23 Q3 |
| [Relationship between Sec Section Features & Ultimate Customer's Purchase Decisions](https://gitlab.com/gitlab-data/product-analytics/-/issues/624#note_1041184439) | Dissection of post purchase survey data to identify how important Sec features were in motivating Ultimate plan purchases. | FY23 Q3 |
| [Free vs. Paid. vs OSS/EDU Subscriptions: Engagement Comparison](https://gitlab.com/gitlab-data/product-analytics/-/issues/549#note_1019828866) | Comparison of similar metrics (SpO, user-stage engagement, Service Ping Opt-In rate, version adoption rate, etc) based on subscription type (Paid, Free, OSS/EDU) | FY23 Q3 |
| [Verify Usage Patterns for Legitimate users & Malicious Users](https://gitlab.com/gitlab-data/product-analytics/-/issues/656#note_1092057211) | Study of initial concurrent pipeline & job usage among free accounts to determine benchmarks between legitimate and malicious users | FY23 Q3 |
| [Valuable Signup Metric 2022](https://docs.google.com/presentation/d/1xHBrnvwdMxQGqmX0TtcQz5tUYsAeU6CAMnpcDlhHUpc/edit?usp=sharing) | Covers the development of a Growth and Marketing metric used to narrow down to a subset of the GitLab.com user population with a higher likelihood of converting to paid. | FY23 Q3 |
| [Understand User Adoption of Truncating Container Registry Image Name](https://gitlab.com/gitlab-data/product-analytics/-/issues/706#note_1118258405) | A deep dive into the usage of truncating registry image names to determine rollout to all users | FY23 Q3 |
| [SaaS & Self-Managed Purchase Funnel Analysis Overview](https://docs.google.com/presentation/d/1OGRGCia7cmXRELBmYV3-b59tmonmAQgOCPXMZ91qw5Y/edit#slide=id.g120637fa0fc_0_0) | Deep dive analysis with multiple insights for SaaS & Self-Managed purchase funnel| FY23 Q2 |
| [FY23-Q2 xMAU Estimation Exploration](https://docs.google.com/presentation/d/1lKAvTid3agGfgOAgmreBZBVa2_7YU5DViYw-AvRKFyM/edit?usp=sharing)| Exploration into viability of different Self-Managed estimation methodologies using data models available in July 2022 | FY23 Q2 |
| [Release Stage Retention: SaaS vs Self-Managed](https://gitlab.com/gitlab-data/product-analytics/-/issues/427#note_969892541) | What is causing the large discrepancy between Release retention on SaaS vs Release retention on Self-Managed? | FY23 Q2 |
| [Projects and Namespaces that use GitLab.com Terraform State](https://gitlab.com/gitlab-data/product-analytics/-/issues/263#note_903422594) | A deep dive into the percentage of projects and namespaces use the GitLab.com Terraform state. | FY23 Q2 |
| [User Impact of Turning Off Certificate-Based Clusters](https://gitlab.com/gitlab-data/product-analytics/-/issues/299#note_877785073) | How many users (internal and external) will be affected by turning off certificate-based clusters? | FY23 Q1 |
| [SaaS Trial Firmographic Analysis](https://docs.google.com/presentation/d/1ME_rD5pweUKIkkD-xXsEZkWjdxqRwzxrfEqEph_dJ4o/edit?usp=sharing) |  | FY22 Q4 |
| [FY22-Q3 xMAU Estimation Exploration](https://docs.google.com/presentation/d/1ifKhhGw2rWF33g22n42bdD6Yqq6m3o_djqxo6qvJVoo/edit?usp=sharing) | Exploration into viability of different Self-Managed estimation methodologies using data models available in August 2021 | FY22 Q3 |
| [Paid SpO Trends among Retained and Churned Namespaces](https://docs.google.com/presentation/d/1RR5qwaE2E2OUtfSgU53GMs8FHjexNx2CFJcUbtiNS-0/edit?usp=sharing) | What stage adoption trends are present when looking at churning namespaces vs.retained namespaces? | FY22 Q3 |
| [SSO Login Deep Dive Analysis](https://docs.google.com/presentation/d/1j66MejLh8uKhUDUkSVIhPLI79M1LtbgCSxuvJKzRRaI/edit?usp=sharing) | Takes a deep look into registrations that are created through SSO and what their subsequent product usage looks like | FY22 Q2 |
| [Secure Free-to-Paid Funnel and Feature Adoption Analysis](https://docs.google.com/presentation/d/1bbvfsNzKoZw4kCYB9coexiXzPiLZ5E3XPe6hOsbZlag/edit?usp=sharing) | Which Secure features are the most adopted during trials and which features have the highest correlation with Ultimate plan paid conversion? | FY22 Q2 |
| [Stage Adoption Patterns: SCM <> Code Review <> CI](https://docs.google.com/presentation/d/1BcRhn8kJZTw8QcWSQLAk9mv72lJfk4d2jteGWCBYfo4/edit?usp=sharing) | How do organizations go from using SCM to Verify, and is Code Review used between or after these stages? | FY22 Q1 |
