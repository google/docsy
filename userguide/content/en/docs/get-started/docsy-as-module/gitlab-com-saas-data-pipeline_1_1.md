---
title: "GitLab.com SAAS Data Pipeline"
description: "The GitLab.com SAAS Data Pipeline Working Group"
status: active
---

## Attributes

| Property        | Value                                                                                                                                             |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| Date Created    | 2022-09-30                                                                                                                                       |
| Target End Date | 2023-10-01                                                                                                                                        |
| Slack           | `#wg_gitlab_to_snowflake_pipeline` (only accessible from within the company)                                         |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/1plhr7UkyxVoIAP_RHJ6HU3QprQlFxIwTZg9wOlMAr4w/edit?usp=sharing) (only accessible from within the company) |
| Issue Board     | Issue Board                                                |

## Business Goal

Provide reliable, stable, scalable and secure data feed for reporting and analytics use cases like MR Rate & Performance KPIs (Product development), Product Usage for Gainsight, License Utilization (Customer Success), Product Health Dashboard (Health) Propensity to Expand and Churn Models, Forecast, Territory Management (Sales).

## Technical Goal

Implement a data pipeline that captures `create`, `update` and `delete` operations and stores them in the GitLab Data platform to be available for further processing and analytics.

![High Level Design](./HLD.png)

## Exit Criteria

- Reliable: All 'metadata' and relevant descriptive data (`create`, `update` and `delete`) operations in the PostgreSQL database are captured, transfered and loaded into the data platform within 6 hours of the original event. `Partially achieved`.
  - Background migrations are not captured due to the fact that `updated_at` column not gets updated.
- Stable: End to end solution runs for 30 days without interruption or human intervention. `Achieved`
- Scalable: Solution scales with GitLab.com and does not require undue burden to expand as new GitLab.com databases, shards, zones, tenants, or cloud locations are deployed `Partially achieved`
  - Partially achieved as this is not possible with the existing architecture. With changing architecture this is included as requirements.
- Secure: Red data is not loaded or it is hashed if stored on a system that is not a data sub-processor.  `Achieved`
- Defined and agreed SLO with all business partners. `Achieved`
- Full end to end monitoring. `Achieved`

## Roles and Responsibilities

| Working Group Role              | Person                  |  Title                              |
|---------------------------------|------------------------ | ----------------------------------- |
| Executive Stakeholder           | David Sakamoto | VP, Customer Success |
| Working Group DRI / Facilitator | Dennis van Rooijen      | Senior Manager Data                 |
| Functional Lead Data            | Ved Prakash             | Staff Data Engineer                 |
| Functional Lead Infra           |                         |                                     |
| Member                          | t.b.d.                  | Senior Data Engineer Big Data       |
| Member                          | Justin Wong             | Data Engineer                       |
| Member - Infra                  | Gerardo Lopez-Fernandez | Engineering Fellow, Infrastructure  |
| Member - Database Reliability   | Alexandar Sosna         | Senior Database Reliability Engineer|
| Member - Product                |                         |                                     |
| Member - Security               | Kyle Smith              | Sr. Security Risk Engineer          |
| Member - Development            | Nick Nguyen             | Senior EM, Enablement: Data Stores  |
