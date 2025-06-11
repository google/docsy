---
title: "GTM Product Usage Data"
description: "Effective use of Product Usage Data within the go to market motion"
---

## Attributes

| Property        | Value           |
|-----------------|-----------------|
| Date Created    | March 10, 2020 |
| End Date | 2022-03-10 |
| Slack           | [#wg-gtm-product-analytics](https://gitlab.slack.com/archives/C01BMJKC8UF) (only accessible from within the company) |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/1riUXq1GdavnSWJklrebBeZnzcAl6XATyLod9tR6-AlQ/edit) (only accessible from within the company) |
| Quarterly Updates | [FY21-Q4](https://docs.google.com/presentation/d/1ydBmyP610IFfBBFTwyW-EFnsP3vyX86JJ3jiJoNPfwQ/edit#slide=id.p) [FY22-Q1](https://gitlab.com/groups/gitlab-com/-/epics/1294) [FY22-Q2 EOQ Review](https://docs.google.com/presentation/d/16jk3lQEkrHlOLBM_2r-AIWC34PaJQKIKEuATdKPfjDg/edit#slide=id.gdb5c16c7a1_2_0) |
| Related Overview   | [GTM Product Analytics: Status, Gaps and the Road Forward](https://docs.google.com/document/d/17dw3qpX5PbvF_WwQXNEQuCPqGUcng1zy85R-2fIL1k8/edit#) |
| Associated OKRs | [FY21-Q2 - Architect Telemetry](https://gitlab.com/groups/gitlab-com/-/epics/532), [FY21-Q3 - Deploy Product Analytics](https://gitlab.com/groups/gitlab-com/-/epics/736), [FY21-Q4 - Deploy Product Analytics in GTM Motion](https://gitlab.com/groups/gitlab-com/-/epics/1013) |

## Problem To Solve

Integrate GitLab product usage data and related data into CRO organization business processes to accelerate customer adoption and improve customer retention.

## Business Goal

Embed product usage and related data across GTM business processes and systems (Salesforce, Gainsight, Marketo, SiSense, etc.).

### Exit Criteria

KR: Deploy license usage in Salesforce and Gainsight for self-managed customers with usage ping data received and 99% of SaaS
KR: Automate basic metrics for Create, Verify, and Secure within Salesforce and Gainsight to track and drive adoption and expansion
KR: Ensure delivery of basic Salesforce and Gainsight enablement to GTM teams

For a more extensive resource, see [GTM Product Analytics: Status, Gaps and the Road Forward](https://docs.google.com/document/d/17dw3qpX5PbvF_WwQXNEQuCPqGUcng1zy85R-2fIL1k8/edit#).

#### Step 1: [Understand what is needed and Architect Product Analytics](https://gitlab.com/groups/gitlab-com/-/epics/532) `= 100%`

- ✅ Collect [Sales Specific feedback on Usage Ping](https://gitlab.com/gitlab-com/sales-team/field-operations/sales-operations/-/issues/738))
- ✅  Design and send [Master Subscription schema table](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/772) to Salesforce
- ✅  Develop basic architectural plans for mapping data to Salesforce

#### Step 2: [Deploy Telemetry](https://gitlab.com/groups/gitlab-com/-/epics/736) `=> 90%`

- ✅  [Deploy License Usage to Salesforce](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/911)
- ✅ Identify the [top metrics for Create, Verify, Secure](https://gitlab.com/gitlab-com/customer-success/tam/-/issues/293) to drive account adoption and expansion
- ✏️ Create [Metrics Dictionary for Usage Ping](https://gitlab.com/groups/gitlab-org/-/epics/4174) - [Metrics Dictionary](https://docs.gitlab.com/ee/development/usage_ping/dictionary.html)
- ✅ [Link usage data with subscription and account data](https://gitlab.com/groups/gitlab-org/-/epics/3602)
- ✅ [Determine Wave 3 Product Analytics metrics](https://gitlab.com/gitlab-com/sales-team/field-operations/sales-operations/-/issues/1681)
- ✅ [Identify top data quality blockers](https://gitlab.com/gitlab-com/sales-team/field-operations/sales-operations/-/issues/1721) - issues have been identified for [Product Analytics](https://gitlab.com/gitlab-com/Product/-/issues/1992) and [Fulfillment](https://gitlab.com/gitlab-com/Product/-/issues/1999)
- ✏️ Deploy license usage in Salesforce and Gainsight for self-managed customers with usage ping data received and 99% of SaaS

#### Step 3: [Deploy Product Analytics across entire GTM Motion](https://gitlab.com/groups/gitlab-com/-/epics/1013) `=> 40%`

- ✅ [Deploy from Sisense to Salesforce and Gainsight (internal link)](https://gitlab.com/gitlab-data/analytics/-/issues/6666)
- ✏️ Automate basic metrics for Create, Verify, and Secure within Salesforce and Gainsight to track and drive adoption and expansion
- ✏️ [Enable GTM teams with best practices](https://gitlab.com/gitlab-com/sales-team/field-operations/sales-operations/-/issues/1092)

## Roles and Responsibilities

| Working Group Role                   | Person                   | Title                          |
|--------------------------------------|--------------------------|--------------------------------|
| Executive Stakeholder                 | David Sakamoto           | VP Customer Success         |
| Facilitator | Emily McInerney | Manager Customer Success Operations|
| Functional Lead, Customer Success Operations                        | Jeff Beaumont            | Director Customer Success Operations    |
| Functional Lead, Data                 | Rob Parker               | Senior Director, Data and Analytics |
| Functional Lead, Product Analytics    | Amanda Rueda             | Interim PM, Product Intelligence |
| Functional Lead, Fulfillment          | Justin Farris            | Group Manager, Product - Fulfillment |
| Functional Lead, Sales Systems        | Jack Brennan             | Director Sales Systems |
| Functional Lead, Product Intelligence | Nicolas Dular            | Engineering Manager, Product Intelligence |
| Functional Lead, Product Usage        | Sushma Nalamaru          | Senior Data Engineer |
| Member                                | Jim Petr                 | Business Systems Engineer |
| Member                                | Jake Bielecki            | Senior Director, Sales Strategy & Analytics |
| Member                                | Caitlin Ankney           | Customer Success Operations Analyst |
| Member                                | Melia Vilain             | Manager, Sales Analytics |
| Member                                | Brandon Butterfield         | Customer Success Operations Analytics Analyst  |
| Member                                | Justin Stark             | Staff Data Engineer |
| Member                                | Michael Arntz            | Customer Success Strategy Manager |

## Meetings

Meeting notes are logged in the [Weekly Meeting Notes](https://docs.google.com/document/d/1riUXq1GdavnSWJklrebBeZnzcAl6XATyLod9tR6-AlQ/edit).

## Working Group Closure

1. We've acheived our original exit criteria
1. We've built a reliabile working model between Customer Success, Product & Engineering, and the Data team. We no longer need a formal working group to maintain progress
1. Work on this initiative will continue via the [top 12 inititiaves](/handbook/company/working-groups/#top-cross-functional-initiatives)
