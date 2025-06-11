---

title: "Data Quality"
description: "MVC for a Data Quality Program at GitLab"
---







## Overview

In an effort to improve data quality at GitLab, the Central Data Team is creating a MVC for a data quality program. The approach is to develop a program that the Data Community can use to improve data quality while we wait for a new Data Quality Manager to be hired. This handbook page will document the MVC and provide team members with guidance on how they can contribute to improved data quality at GitLab.

## Data Quality Runbook

<details markdown=1>

<summary><b>Runbook</b></summary>

**New Data Quality Issue Runbook**

1. All data quality issues that are detected should be opened and triaged in the [Data Quality Project](https://gitlab.com/gitlab-org/data-quality). Issues in scope that are opened in the Data Team project can be moved to the Data Quality project.

1. The triager should apply the following labels to help determine next steps on the issue:
    1. DQ: Waypoint: Select Waypoint where the root cause of the data quality problem needs to be investigated and/or resolved. Choices are source system owner, data platform team, analytics engineering, or data consumer.

1. The triager should search the Data Quality Epics and see if the new issue could be related to an existing epic. If there is an existing epic that addresses the root cause of the problem identified in the issue, then the issue should be linked to that epic and a comment sent to the author of the issue and DRI of the existing epic that a new issue has been linked.

1. The DRI of the epic can validate that the newly linked issues are related.

1. If there is no epic opened that addresses the problem, then the issue requires further validation to determine if a governance plan is needed. If the issue relates to one of the detection rules [in a Data Quality Scorecard Detection framework, which is coming in the future], then the triager can refer the issue to the R&D Data Fusion Team manager for next steps. If the issue does not relate to one of the detection rules, then the triager should follow the business as usual triage process.

**Governance Plan Runbook**

The governance plan runbook is intended to facilitate the implementation and adoption of the governance plan. It is meant to make data management easy and provide flexibility and continuous improvement. The below steps should be considered when implementing the plan:

1. Determine the DRI that will write the problem statement in step #1, will open the epic in the Data Quality Project, and will be responsible for guiding the cross-functional team through the remaining steps of the data governance plan.

1. Create a new section on this handbook page for the data quality issue and provide the governance plan. Provide a link to the epic in the Data Quality Project.

1. The DRI should facilitate the completion of the data quality governance plan. This should be a collaborative effort between business, functional analytics, and central data teams.

</details>

## Data Quality Project in GitLab

<details markdown=1>

<summary><b>Project</b></summary>

[Data Quality Project](https://gitlab.com/gitlab-org/data-quality). Please open an issue [HERE](https://gitlab.com/gitlab-org/data-quality/-/issues/new) and use the Data Quality Problem issue template.

</details>

## Governance Planning and Process

<details markdown=1>

<summary><b>1. Identify Governance Plan DRI</b></summary>

Given we do not have a Data Quality Manager, a DRI will need to be assigned on a governance plan by plan basis to guide the team through the governance planning and process.

</details>

<details markdown=1>

<summary><b>2. Develop Data Quality Problem Statement</b></summary>

The problem statement should define what the data quality problem is and what impact it has on business outcomes. The problem statement should be added to an epic in the Data Quality Project using the data quality epic template.

</details>

<details markdown=1>

<summary><b>3. Develop Potential Root Causes</b></summary>

The root causes for the data quality issue identified in the problem statement should be determined. These root causes can be business process related or they can be related to technical configurations in source system applications. All issues related to the same problem statement and root causes should be opened in the Data Quality Project and linked to the related epic. Oftentimes, many data quality issues are opened for the same problem statement. This approach of having a high level epic with the problem statement and linking related issues to it will help correlate data quality problems to the right root cause Epic.

</details>

<details markdown=1>

<summary><b>4. Define Data Definitions</b></summary>

Pursuant to the root causes identified in the problem statement, identify the source system, source system database table, source system field, and source system field definition. This step is meant to document the source system entities and definitions at the point of data production before that data is emitted in a data pipeline.

</details>

<details markdown=1>

<summary><b>5. Develop Data Flow Diagram for the System and Problem</b></summary>

Solving data quality problems requires a cross-functional team working collaboratively to resolve the issues. It can be challenging to align on the various systems, applications, and data when team members may not be familiar with certain areas of the data pipelines. Therefore, a data flow diagram that is simple to understand for all stakeholders and provides an overview of the systems, applications, and data should be provided.

</details>

<details markdown=1>

<summary><b>6. Define Quality Standards and Monitoring</b></summary>

Quality standards relating to the issues defined in the problem statement should be identified. For example, for mapping SaaS Namespaces to subscriptions, should the quality standard be 95% or 100% coverage, or somewhere inbetween? A Tableau chart should be developed to provide the data detection rule results to monitor the quality standard. Also, a business impact detection chart should be provided to illustrate the impact to the business for not meeting the quality standard.

</details>

<details markdown=1>

<summary><b>7. Determine Data Table and Column Ownership</b></summary>

All applicable data tables and fields should be listed. The four main tables to focus on are:

1. The source system table
2. The source table in the RAW or PREP database in Snowflake, depending upon any de-duping or cleanup that happens for a data source
3. The `common_prep` or `common` enterprise dimensional model table in Snowflake, depending on where the data lands in COMMON first
4. A mart or report table in Snowflake

Team members should be assigned to each table and column as DRIs for the quality of data in the respective table and field. Generally speaking, the Backend Engineer and/or Product Manager should be DRI for the source system table, the Data Platform Engineer should be DRI for the source table in Snowflake, the Analytics Engineer should be DRI for the common_prep or common table, and the Functional Analyst should be the DRI for any mart or reporting table.

</details>

<details markdown=1>

<summary><b>8. Solutions</b></summary>

The solutions to the root causes identified in the governance plan should be documented in this step. These solutions can consist of temporary workarounds as well as permanent solutions. Estimated ship dates for the solutions can be provided if they are available.

</details>

## Governance Plan for SaaS Namespace <> Subscription Mapping

<details markdown=1>

<summary><b>1. Governance Plan DRI</b></summary>

`@jdbeaumont`

</details>

<details markdown=1>

<summary><b>2. Data Quality Problem Statement</b></summary>

There have been a number of issues raised to the CS Ops team related to customer namespaces that either do not have product usage data displaying, or their product usage data is very outdated. As a result, we cannot generate health, adoption, and maturity scores for the customers experiencing these problem.

[Epic in the Data Quality Project](https://gitlab.com/groups/gitlab-org/-/epics/10470)

</details>

<details markdown=1>

<summary><b>3. Potential Root Causes</b></summary>

**SaaS subscription are not assigned to a namespace/group in Zuora for several potential reasons** (in descending order of frequency):

1. **Multi-year ramped subscriptions (old)**, where each ramp segment is created as a separate subscription in Zuora. It's likely the customer loses access when the previous ramp subscription segment expires.
1. **Subscriptions with Entity other than US**. This may mean that a subscription was created as a renewal on a different Zuora account, and none of the previous data transferred. It's likely the customer doesn't have access.
1. **Subscriptions are created by a Human in Zuora**. Namespace assignment doesn't automatically transfer to the new subscription. This might be a subset of `#2`.
1. **Order in CustomersDot has NamespaceId assigned, but not the related Zuora Subscription**. Customer does have access in this case. [Issue](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/5171).
1. **Subscription was purchased via a Reseller**. Support has to help with namespace assignment, because customer has no access to CDot to do it themselves. It's likely the customer doesn't have access.
1. **Subscription was de-booked / rebooked to correct an error**. The quote is pushed from SFDC, but Zuora notification profile is silenced to avoid notifications sent to customer. De-booked subscription data (like namespace) doesn’t transfer. <sup>\*</sup>Need to [understand this more](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/634#note_1237253100).

</details>

<details markdown=1>

<summary><b>4. Data Definitions</b></summary>

| Source System | Source System Table | Source System Field Name | Source System Field Name Definition |
|     --        | --                  | --                       | --                |
|   [Zuora](https://knowledgecenter.zuora.com/Zuora_Central_Platform/API/G_SOAP_API/E1_SOAP_API_Object_Reference/Subscription)      |  subscription       |   id (SubscriptionId)    |  The ID of this object. Upon creation, the ID of this object is SubscriptionId.  |
|     Zuora        | `subscription`        | `GITLABNAMESPACEID__C`     | The SaaS Namespace Id that the subscription is associated with. This is a custom field added by GitLab's Fulfillment team   |

</details>

<details markdown=1>

<summary><b>5. Data Flow Diagram for the System and Problem</b></summary>

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/40f3b89f-d24a-4483-bdc7-893216dc6c89" id="SjnyTai~HuDZ"></iframe></div>

</details>

<details markdown=1>

<summary><b>6. Quality Standards and Monitoring</b></summary>

**Quality Standards**

A SaaS section of a data quality dashboard for Instances w/out Subscriptionsshould provide the following metrics:

1. Percent of Paying SaaS Subscriptions Missing Namespace ID
1. Number of paying SaaS Subscriptions Missing Namespace ID
1. Percent of SaaS ARR Missing Namespace ID
1. Total SaaS ARR Missing Namespace ID
1. Total SaaS ARR Missing Namespace ID and Number of paying SaaS Subscriptions Missing Namespace ID by Product Tier

**DRAFT: Quality standards should be considered and set for the above metrics.**

</details>

<details markdown=1>

<summary><b>7. Data Table and Column Ownership</b></summary>

**Source System Table**

| System | Table | Column | DRI |
|     --        | --           | --           | --  |
|    Zuora           |    `subscription`      |    `subscriptionid`          | @courtmeddaugh   |
|    Zuora           |    `subscription`      |    `GITLABNAMESPACEID__C`    |  @courtmeddaugh   |

**Snowflake Source Table**

| System | Table | Column | DRI |
|     --        | --           | --           | --  |
|     Snowflake          |    `raw.zuora_stitch.subscription`      |   `id`     |  @paul_armstrong   |
|     Snowflake          |    `raw.zuora_stitch.subscription`      |   `GITLABNAMESPACEID__C`        |  @paul_armstrong   |

**Snowflake Common_Prep or Common Table**

| System | Table | Column | DRI |
|     --        | --           | --           | --  |
|     Snowflake          |     `prod.common_prep.prep_subscription`   |    `dim_subscription_id`     |  @mdrussell   |
|     Snowflake          |     `prod.common_prep.prep_subscription`   |    `namespace_id`     |  @mdrussell   |

**Snowflake Mart or Reporting Table**

| System | Table | Column | DRI |
|     --        | --           | --           | --  |
|     Snowflake    |    `PROD.PUMPS.PUMP_GAINSIGHT_METRICS_MONTHLY_PAID`   |   `DIM_NAMESPACE_ID`    |  @mdrussell @bbutterfield    |
|     Snowflake    |    `PROD.PUMPS.PUMP_GAINSIGHT_METRICS_MONTHLY_PAID`   |   `DIM_SUBSCRIPTION_ID_ORIGINAL`    |  @mdrussell @bbutterfield    |

</details>

<details markdown=1>

<summary><b>8. Solutions</b></summary>

**Temporary, Work-Around Solutions**

`Coming soon...`

**Permanent Solutions**

`Coming soon...`

</details>

## Types Of Data Quality Problems

Traditional Data Quality programs break down quality problems into several types, including completeness, accuracy, consistency, validity, uniqueness, and integrity, and more.
These nuances can and do create confusion when dealing with non-Data Quality experts.
To simplify this problem, the GitLab Data Quality Program recognizes the following Data Quality problem types:

- **Inaccurate Data**: Inaccurate Data is data that does not match a real-world value it *should* represent.
An example of Inaccurate Data is a 3-digit US ZIPCODE.

- **Missing Data**: Missing Data is a NULL or empty field or record that *should* exist.
An example of Missing Data is a NULL ZIPCODE value within an address record.

- **Duplicate Data**: Duplicate Data is the same data repeated when it should not be repeated.
Duplicate data can be complex to identify because duplicates can naturally occur based on how data is reported.
An example of Duplicate Data is two (almost) identical customer records in a CUSTOMER master table when both are linked to a single 'real world' customer.

## Data Quality Scorecards, Detection Rules, Dashboards, and Operational Process

The Data Quality System is composed of **Scorecards**, which help people monitor problems over time, and **Detection Rules**, which locate specific known problems with data.

- **Data Quality Scorecard** - The Data Quality Scorecard is a dashboard used by Data Customers and Data Creators. The Dashboard displays the overall quality of a subject area as measured by the status of individual Detection Rules for the subject area. Specific and independent Data Quality Scorecards can and will be created for specific purposes. For example, we are actively developing a "Data Quality Scorecard - Product Usage Data" and anticipate developing a separate "Data Quality Scorecard - Zuora" to measure quality of our Zuora billing system.

- **Data Quality Detection Rule** - A Data Quality Detection Rule is a SQL-based test to check the quality of data in a field or row versus a pre-defined condition. To run a Detection Rule, data must already exist in the Enterprise Data Warehouse. Detection Rules are enumerated and only one test is expressed per SQL statement. Examples of Detection Rules are:
  - Detection Rule 1: Inaccurate Data - State Field in Account Location record
  - Detection Rule 2: Duplicate Data - Account Name in Account Master record
  - Detection Rule 3: Missing Data - License Key should exist for new Usage Ping submissions

- **Operational Process** - Every week, the Detection Rule “Batch” is run and output is saved in a persistent table. The persistent table includes a run date, detection rule identifier, and transaction id to enable linking to the source system. The persistent table is the basis from which the Scorecard is generated.

### Product Data Quality Scorecard

**Purpose** - Product Data Quality Scorecard quantifies the Data Quality Issues with respect to the Product Usage Data.

The Scorecard Dashboard contains visualizations that display the following information:

- **Pass/Fail Percentage** of each of the Product Data Quality Detection rules. The Percentage of records passed is calculated by taking the Percentage of total number of records that have satisfy the condition or the data quality detection rule. The formula used for the Calculation is:
**((passed_record_count/processed_record_count)*100)**

Likewise, the Percentage of records failed is calculated by taking the percentage of total number of records that have failed to satisfy the condition or the data quality detection rule.
**((failed_record_count/processed_record_count)*100)**

The Passing and Failing of a Detection rule is determined by comparing the percentage of records passed with that of the Threshold limit. As of now the threshold value is set to 50. The exact threshold value needs to be determined by the DRI.

IF the **percentage of records passed > threshold limit** then the Status of Detection rule is **Green**. For example, if the percentage of records passed is 72%(which is more than 50%), it means that 72% of records have satisfied the Data Detection Rule/condition.

IF the **percentage of records passed < threshold limit** then the Status of Detection rule is **Red**. For example, if the percentage of records passed is 40%(which is less than 50%), it means that 60% of records have failed to satisfy the Data Detection Rule/condition. And they need attention and the data needs to be fixed by the Source teams.

- **Trend Analysis Chart** indicates the change in Pass/Fail percentage of each of the Data Quality Detection Rules over the period of a week.

- **Summarized Counts for each day** shows the Total number of processed rows for each of the Data Quality Detection Rule along with the Number of rows that Satisfy(pass) the rule/condition and that also do not satisfy(fail) the rule/condition for each day that is tracked by the Rule Run date.

### Data Pipeline Health Dashboard

See [issue (internal link)](https://gitlab.com/gitlab-data/analytics/-/issues/4808)

The first iteration has added with a focus on:

- SQL statements to test the daily record insert and update velocity of key tables (rowcount tests)
- SQL statements to test the aggregate totals of key fields of key tables  (column value tests)
- A wireframe Dashboard to visualize these results in a simple manner

### Product Usage Metrics Coverage Dashboard

This dashboard captures the percentage of data availability for Product Usage Metrics, based on our [Metrics Dictionary](https://metrics.gitlab.com) and [Metrics to Snowflake Mapping](https://docs.google.com/spreadsheets/d/1EhSXqx6YXcpqHg2TpS0ZN5Rk_d2hhrTPrW5FTbmuZjw/edit#gid=0), which includes:

- A table and graphical visualization representing the Product Usage Metrics, Percentage of Data Availability, Percentage of Missing Values, Data Source, Description, and Performance Indicator Type for both SaaS and Self-Managed
  - The table provides details to the above fields
  - The bar chart visualizes metrics by highest percentage of data availability to lowest and by data source
- Description of above fields:
  - Product Usage Metrics: Metrics relating to product usage such as count of Active User, Merge Requests, DAST Jobs
  - Percentage of Data Availability: Percentage of how many records capture this data
  - Percentage of Missing Values: Percentage of how many records are missing this data
  - Data Source: whether the data comes from source such as database, redis, redis_hll, or system
  - Description: Definition of the metric
  - Performance Indicator Type Flags: whether the metric IS UMAU/SMAU/GMAU/PAID GMAU. Please refer to the [xMAU Analysis page](https://internal.gitlab.com/handbook/enterprise-data/data-catalog/xmau-analysis/) for more information
- Refresh runs on a weekly cadence

### Quick Links

The Data Quality Detection Rules that have currently been identified for Product usage data are:

| Detection Rule ID | Rule Description | DRI |
| - | - | - |
|1|Missing instance types for Hostnames||
|2|Licenses with missing Subscription IDs||
|3|Subscriptions with missing Licenses||
|4|Subscriptions with Self-Managed plans having License Start dates in the future||
|5|Subscriptions with Self-Managed plans having License Start date greater than License Expire date||
|6|Expired License IDs with Subscription End Dates in the Past||
|7|SaaS Subscriptions with missing Namespace IDs||

## Additional Resources

### Guides and Books

- [Getting In Front Of Data](https://www.amazon.com/Getting-Front-Data-Does-What-ebook/dp/B01KTTJXZ4)
- [Non-Invasive Data Governance](https://www.amazon.com/Non-Invasive-Data-Governance-Robert-Seiner/dp/1935504851)
- [Data Lifecycle Management (DLM)](https://assets.red-gate.com/simple-talk/database-lifecycle-management-ebook.PDF) or equivalently robust approach.

#### SaaS Tools

Both Fivetran and Stitch, being managed services, provide their own data quality checks. Any problems with these data at extraction should be addressed to the vendor's support team.

#### Custom

We have Monte Carlo as our Data Observability tool.

##### BambooHR

We [extract BambooHR data](https://gitlab.com/gitlab-data/analytics/tree/master/extract/bamboohr) via custom code. Our data quality checks include verifying a 200 response from the API and the existence of a minimum number of records in the JSON data.

##### Postgres Pipeline

Our own [Postgres_Pipeline](https://gitlab.com/gitlab-data/analytics/tree/master/extract/postgres_pipeline) (which handles data from gitlab.com, customers.gitlab.com, license.gitlab.com, version.gitlab.com) checks for agreement of row counts between the source and destination databases.

### Transformation Data Quality

We use dbt for all transformations in the warehouse. [We require tests on all new dbt models](/handbook/business-technology/data-team/#transformation) and regularly update tests as needed. These tests, as well as the extraction tests and checks, should be written in line with the data quality philosophy described above.

### Data Quality Incidents Resulting in Permanently Lost Data

| Issue | Impacted Data Source | Impact | Impact Window |
| --- | --- | --- | --- |
| [Snowplow endpoint certificate expired for a day](https://gitlab.com/gitlab-org/gitlab/-/issues/416991) | Snowplow | No Snowplow events recorded for most of one day | `2023-07-04` |
| [Redis/RedisHLL events don't get triggered](https://gitlab.com/gitlab-org/gitlab/-/issues/442875) | Automated GitLab.com Service Ping | GitLab.com customers will underreport values for Redis metrics at the instance level | `2024-02-15` to `2024-03-05` for 7d metrics; `2024-02-15` to `2024-03-26` for 28d metrics |
| [Missing Service Pings for version <= 12.0](https://gitlab.com/gitlab-org/gitlab/-/issues/443639#note_1887042557) | SM Service Ping | All installations on v12.0 or earlier were not sending Service Pings | `2024-02-12` to `2024-04-28` |
| [Service Pings not mapped to country Feb 2023 - June 2023](https://gitlab.com/gitlab-data/analytics/-/issues/15980) | SM Service Ping | Service pings from `2023-02-21` to `2023-06-21` have a null `dim_location_country_id` | `2023-02-21` to `2023-06-21` |
