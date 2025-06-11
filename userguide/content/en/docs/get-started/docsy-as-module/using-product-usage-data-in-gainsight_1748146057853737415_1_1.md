---
title: "How to Use Product Usage Reporting"
description: "Effective ways to apply product usage reporting for Sales and Customer Success teams to support their customers' top initiatives and business objectives."
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

---

## Purpose

To guide users in how to use the customer's product usage reporting within Gainsight, review use case adoption strategies, and understand how the data connects and what to do with data quality concerns.

For a richer explanation of the purpose and intended outcomes, see the [Product Usage Reporting Vision](/handbook/customer-success/product-usage-data/) page for more information.

For the overall 3-year vision, see [Product Usage Reporting Roadmap](https://docs.google.com/presentation/d/1_v4hxKdbL6--UjpjVdveGEGD_MjmUnBg0-OIU1R14m8/edit#slide=id.p) (internal GitLab document).

## Videos

For a high level overview (7 minutes), see the [Using Product Usage Reporting in Gainsight - Introduction](https://youtu.be/bny-SoH-MNc) video.

- [What is Product Usage Reporting and Health Scoring and How to Find it in Gainsight](https://www.youtube.com/watch?v=H6l3_AmQif8)
- [How to Find License Utilization and What it Means in Gainsight](https://www.youtube.com/watch?v=Mezt6knBxI0)

## Quick links

<div class="grid-container" markdown="0">
  <a href="/handbook/customer-success/product-usage-data/" class="btn btn-purple">Operational Data <br> Vision Page</a>
  <a href="https://metrics.gitlab.com/" class="btn btn-purple">Metrics Dictionary</a>
  <a href="/handbook/sales/field-operations/sales-systems/license-usage-app/" class="btn btn-purple">Salesforce License <br> Utilizaton App</a>
  <a href="https://internal.gitlab.com/handbook/enterprise-data/data-governance/data-catalog/product-usage-data/" class="btn btn-purple">Data Team Handbook</a>
  <a href="/handbook/customer-success/product-usage-data/use-case-adoption/" class="btn btn-purple">Health Scoring - Calculations and Methodology</a>
  <a href="/handbook/customer-success/product-usage-data/using-gainsight-data-in-sfdc/" class="btn btn-purple">Using Gainsight Usage Reporting <br> in Salesforce</a>
  <a href="/handbook/customer-success/product-usage-data/use-case-adoption/#license-utilization-in-gainsight" class="btn btn-purple">License Utilization <br> in Gainsight</a>
  <a href="/handbook/customer-success/csm/health-score-triage/#gainsight-scorecard-attributes-and-calculations" class="btn btn-purple">Gainsight Scorecard <br> Attributes and Calculations</a>
  <a href="/handbook/customer-success/product-usage-data/freemium-saas-usage-data/" class="btn btn-purple">SaaS Free/Trial <br>Usage Reporting</a>
  <a href="/handbook/customer-success/product-usage-data/using-product-usage-data-in-gainsight/#frequently-asked-questions" class="btn btn-purple"> Product Usage Reporting FAQs </a>
</div>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 10px;
  width: 100%;
}

.btn {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
  height: 100%;
  min-height: 80px;
  text-decoration: none;
  font-weight: bold;
  border-radius: 5px;
}

.btn-purple {
  background-color: #6666c4;
  color: white;
}

## Gainsight reports and dashboards

Use the [Product Usage Reporting - v2](https://gitlab--jbcxm.vf.force.com/one/one.app#eyJjb21wb25lbnREZWYiOiJvbmU6YWxvaGFQYWdlIiwiYXR0cmlidXRlcyI6eyJhZGRyZXNzIjoiaHR0cHM6Ly9naXRsYWItLWpiY3htLnZmLmZvcmNlLmNvbS9hcGV4L0dhaW5zaWdodE5YVCNkYXNoYm9hcmQlMjMlMkYxNzE0MTVhNy04ZTJhLTQ3YWYtODFmMy1iYTU1N2IxNjlhOGQifX0=) Dashboard to see the full list of your accounts.

When using the Account C360 page, these topics are most relevant for evaluating usage:

| Report Name | Description | Application |
| ------ | ------ | ------ |
| **Summary** | Shows Company-wide License Utilization and Total Licenses Sold | Use this to quickly identify the depth of adoption, if the account is Reporting  |
| **User Adoption Metrics** | Contextually-based metrics to graph the adoption percentage of the account (e.g., users who ran a pipeline divided by monthly active users). | Metrics to help the account team understand monthly use case and license usage to assess for expansion or enablement decisions. Toggle through the different reports to see different graphs. |
| **Product Usage Trends** | Month-over-Month trend analyses for use cases such as SCM, CI, DevSecOps, and License Utilization | Monthly data points for use case-specific metrics. To be used to help the account team learn feature and deployment depth and adoption — use this in conjunction with the Monthly Distilled Metrics. Toggle through the reports to analyze the top metrcs on a per use case basis. |
| **Instance and Namespace Details** | List of all instances related to the account with `Instance Type` meta data | Use [Updating Self Managed Instance Type to update the hostname](#self-managed) |

## Ways to use these metrics

There will be several limitations with the MVC deployment. As you come across use cases, please [open an issue](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues) or [request a new metric](#requesting-new-metrics) as needed. Here are several potential use cases for utilizing data:

| Topic | Description | Questions to Address | References |
| :--- | --- | --- | --- |
| **Understand my customer's usage** | With usage data, quickly look up accounts to see which instances we are receiving usage data. <br> User story: see all instances and namespaces related to your account (Production and non-Production) and activity. <br> **Note*- : Must be tied to active subscriptions. | - Who is sending their service ping data? <br> &bull; Are they sending Production data? <br> &bull; Is their activity in line with my expectations? <br>&bull; Does the activity agree with what I know about their usage? | <br>&bull; [VIDEO: Using Product Usage Data in Gainsight - Introduction](https://www.youtube.com/watch?v=bny-SoH-MNc)<br> &bull; [VIDEO: What is Product Usage Data and How to Find it in Gainsight](https://youtu.be/H6l3_AmQif8) |
| **C360: Instance and Namespace Details** | I need to know which GitLab version they're on to help them upgrade or patch their self-managed instance. | <br>&bull; Which version(s) are my customers on?<br>&bull; If multiple instances, how do I know the version for their instance?<br>&bull; What is their namespace? | C360: Instance and Namespace<br><br> Product Usage Data Dashboard (`Self Managed Instances - Current GitLab Version Details` report) |
| **How many licenses has my customer deployed?** | Understand my customers' License Utilization (see above) to know how many licenses have been deployed  `billable_user_count/licensed seats`. <br> Example: a customer purchased 200 licenses and deployed 80 after 9 months, 80/200 = 40%. | <br>&bull; What trends can I see?<br>&bull; How do I understand my customer's License Utilization? | <br>&bull; [VIDEO: How to Find License Utilization and What it Means in Gainsight](https://youtu.be/Mezt6knBxI0)<br>&bull; C360: User Adoption Metrics<br>&bull; Product Usage Data dashboard<br>&bull; [License Utilization Handbook](/handbook/customer-success/product-usage-data/use-case-adoption/)<br>&bull; [VIDEO: Using Product Usage Data in Gainsight - Introduction](https://www.youtube.com/watch?v=bny-SoH-MNc) |
| **Understand my customer's GitLab adoption** | Know the metrics per use case: SCM, CI, CD, and DevSecOps to understand their adoption.<br> Use the [Use Case Adoption guide](/handbook/customer-success/product-usage-data/use-case-adoption/) for use case adoption definitions. <br> See the [GitLab Adoption Journey](/handbook/customer-success/customer-success-vision/#high-level-visual-of-gitlab-adoption-journey) for an explanation on the adoption of SCM, CI, CD, and DevSecOps. | <br>&bull; Which use cases has my customer adopted?<br>&bull; What degree have they adopted?<br>&bull; Which features have they adopted?</li><li>Does feature adoption align to customer purchase intent? | C360: Scorecard<br><br>Product Usage Data dashboard |
| **How do I understand the health score with product usage reporting?** | Use Gainsight for a quick, high level roll-up of the customer's adoption. Identify if the customer is on track per GitLab use case. |<br>&bull; My customer's Use Case health is red, yellow, or green — how is that calculated?<br>&bull; How is Product Usage Data weighted?<br>&bull; What is "good" health? | [Use Case Adoption methodology](/handbook/customer-success/product-usage-data/use-case-adoption/)<br><br>[Health Score Measure Weightings](/handbook/customer-success/csm/health-score-triage/#enterprise)<br><br>[VIDEO: What is Product Usage Reporting and How to Find it in Gainsight](https://youtu.be/H6l3_AmQif8)<br><br>[Usage Trends Dashboard](https://gitlab.gainsightcloud.com/v1/ui/dashboard#/ced1d18a-62f4-4e22-8efd-a7b1d7abcac2) |

Remember, this is an MVC — please [create an issue to suggest new metrics](#requesting-new-metrics), different ways to evaluate the customer's journey, or other ideas.

For specifics on use cases and their health methodology, see [Use Case Adoption](/handbook/customer-success/product-usage-data/use-case-adoption/).

## Using Gainsight data in Salesforce

A variety of product usage statistics are pushed back from Gainsight to Salesforce. To see a complete list of customer health related fields that are synced back from Gainsight to Salesforce, please review [Customer Health](/handbook/customer-success/product-usage-data/using-gainsight-data-in-sfdc/#customer-health) within the [Using Gainsight Data in SFDC](/handbook/customer-success/product-usage-data/using-gainsight-data-in-sfdc/) page.

## Labeling Customer Instances and Namespaces

### Definitions

- **Instance**: a customer's *self-managed* deployment of GitLab
- **Namespace**: a customer's *SaaS* deployment of GitLab on gitlab.com
- **Labeling**: the practice of internally identifying instances as Production, Non-Production, etc. within Gainsight and syncing to Snowflake. See [link](/handbook/customer-success/product-usage-data/using-product-usage-data-in-gainsight/#viewing-all-unknown-self-managed-instances) for more information
- **Project**: a specific project or folder within a customer's GitLab instance (e.g., "field operations" project within the `gitlab-com` use)

### Why it matters

For GitLab and customers, we must know which instance(s) are used by our customers as their `Production` instance where they develop their production code. This is required to ensure we are accurately helping customers appropriately adopt GitLab ([Product Usage Reporting Vision](/handbook/customer-success/product-usage-data/)).

As a general rule, each subscription has one production instance **or** namespace attached to it. Covered below is how the instances are determined, labeled, and the data is applied within GitLab.

#### Self-Managed

A customer's server lacks identification of the type (production, test, non-production, mirror, etc.). When GitLab receives a customer's service ping, we do not know if it is used to deploy production code, a test server, or as a mirror.

**Problem**: this is critical for self-managed customers because a customer may have anywhere from one to ten instances tied to a single subscription and GitLab could be receiving data from one production instance, several, or none based on whether the customer is air-gapped, blocking our IP ports, etc.

#### SaaS

For namespaces, this is irrelevant because the customer pays directly for the namespace and any testing can be done in various *projects* within the namespace. For SaaS, it is generally solved before it becomes a problem.

### How are labeled instances used?

1. To calculate Customer Health based on the production instance
2. To provide insights to the account team on what their customers are doing in their production instances (Gainsight and Snowflake)
3. License Utilization reporting for customer subscriptions (Gainsight, Snowflake, and Salesforce)
4. Company-wide reporting capabilities for aggregate usage (Snowflake)
5. Propensity model input (Snowflake)
6. Track our Usage Data coverage (how many accounts are sending us Operational Metrics?) (Snowflake)

### How instances are labeled

#### Self-Managed

##### CSM-Owned Accounts (Strategic and Growth)

For self-managed customers, a CSM labels their customers' instances as Production, Staging, or Obsolete. Steps:

1. Go to the customer in Gainsight
2. In the left nav panel, click **Instance and Namespace Details** at the bottom
3. Click **⋮** for the instance you want to update
4. Click **Edit**
5. For the field `Instance Type`, select the proper option
6. Click **Update** and do not make any other changes

**Notes**:

1. If unsure of the instance type, check with the customer or in the left nav panel click on **Product Usage Trends** and then toggle to the **NOT Production Instance Usage** report to see usage trends for that instance
2. Anything labeled as "Unknown" should be treated as a *temporary* holding title that needs to be updated to Production, Non-Production, or Obsolete.
3. Please be aware that `Non-Production`/`Unknown`/`Obsolete`/`Geo Secondary Node` instances will not reflect in the Product Usage Trends section of the account, with the exception of `NOT Production Instance Usage` report.
4. If `Instance Type` is switched to `Production` from any other type, please allow 24 hours before they are reflected in the usage reports.

##### Non-CSM Owned Accounts (Scale and Digital)

While the above process works for any account, we do require automation for the smaller accounts that do not have CSM ownership. The automation in Gainsight falls under two methods:

1. **Rule**: *NEW Admin: Set Instance Type - Programmatically by License Utilization*
   1. **Context**: This sets self-managed instances as `Production` based on License Utilization or UMAU utilization of 20% or greater. This is intended to quickly identify new instances while excluding test instances attached to a single subscription that is only used by a few users
1. **Rule**: *NEW Admin: Set Instance Type - Programmatically by Instance Count = 1*
   1. **Context**: Because most subscriptions (especially small ones)

#### SaaS

Namespaces are automatically labeled within Gainsight, using the Gainsight Rule "[Load to Instance Data - Label SaaS Instances as Production](https://gitlab.gainsightcloud.com/v1/ui/rules#v2/rule/3027ca2b-34e6-4dbb-be5f-8f640a636074)".

### Caveats and risks

1. Because of our licensing, a few customers have unique licensing deals that allow them to use one subscription across multiple production instances. This causes difficulty in calculating how many licenses are deployed
2. Because of required automation with small accounts, we have incorrectly labeled some instances as production and have neglected others
3. Because Strategic/Growth CSM-owned accounts are manually labeled, there will be a delay in propagating through all systems

### **CSM/CSE Actions**

#### **Viewing all unknown self-managed instances**

New self-managed instances come online all the time. The different types include:

- **Production**: The production instance tied to the subscription
- **Non-production**: A test, staging, or dev server
- **Obsolete**: No longer in use server
- **Unknown**: Not yet labeled server
- **Geo Secondary Node**: a secondary or mirror server

To make sure we're correctly identifying Production vs. other types, use these instructions to see a full list of instances yet to be labeled:

1. Go to the `CSM Burn-Down Dashboard`
2. Filter to your name
3. Scroll down to the `* Unknown Instances - CSM Owned` report
4. Click on it to see the full list
5. Click on the account
    1. In the account and on the left nav panel, click on `Product Usage Trends`
    2. Toggle to the `NOT Production Instance Usage` report
    3. Review usage for insights
6. Under the `Instance and Namespace Details` section, label the instance accordingly

This process is critical, as a customer can have multiple subscriptions and each subscription can have multiple instances. See the example diagram:

![Fictitious Self-Managed diagram](https://lucid.app/publicSegments/view/74e7b4aa-6e71-4f60-83bb-6439c459358c/image.png)

### Snowflake Sync

The instance types are synced from Gainsight to Snowflake weekly and updated Sunday nights PST. Gainsight collects the data and uploads it to an S3 bucket using the rule *[Admin - Drop Instance Type to S3 for Snowflake Pickup](https://gitlab.gainsightcloud.com/v1/ui/rules#v2/rule/46570bbe-742c-4e2a-8475-1dd1973b7b49/basicInfo)* and then Snowflake processes and updates tables every Sunday night.

### Multiple Production Instances Health Scoring

When an account has multiple GitLab instances identified as Production (Instructions on how to [Update Self-Managed Instance Type](#self-managed)).

Health Scores are now calculated by aggregating usage data at the Account level combining all the instances across the organization as well as in Gainsight health scoring. The values are provided to Gainsight and the proper Red/Yellow/Green values are displayed based on the following [thresholds](/handbook/customer-success/product-usage-data/use-case-adoption/).

Users will still need to verify and assign which instance is the primary one if there are any issues observed.

<details>

<summary markdown='span'>Multiple Production Instances: Gainsight Admin Processes</summary>
<br>

Because the DevSecOps health measure looks to the account as "Ultimate", this step was added to make sure the correct production instance is scored in the case of multiple subscriptions under a given account.

If a CSM has marked a production instance under a Premium subscription, DevSecOps health will appear as be "NA". Meaning, even if there are two subscriptions with one Premium and another Ultimate, as long as the CSM marked the Premium one for health scoring, you will no longer see a DevSecOps health score (generally red) on the account.

**Gainsight Rules:**

1. `NEW: Admin: Update Plan Name on Product Usage Instance Metrics`
   1. This pushes `Plan Name` from the Customer Subscription object to the Product Usage Instance Metrics object
2. `Set Score: DevSecOps Adoption Individual Measures`
   1. The rule looks at the `Plan Name` on the Product Usage Instance Metrics object instead of the `Products Purchased` on the Company object

</details>

## Field definitions

The Product Stage definitions have been extracted from the [Metrics Dictionary](https://docs.gitlab.com/ee/development/internal_analytics/metrics/metrics_dictionary.html). For more information on Stage metrics, please review the dictionary.

Eventually, the metrics list and definitions will be embedded directly in the handbook. As a first iteration, the list of metrics and their definitions are in the [Data Mart - Table Definitions](https://docs.google.com/spreadsheets/d/1EhSXqx6YXcpqHg2TpS0ZN5Rk_d2hhrTPrW5FTbmuZjw/edit#gid=0) spreadsheet.

See our technical documentation for our [instance of Gainsight Adoption Explorer](https://docs.google.com/document/d/1TvSCT_yj73AS0PuLxPonuF5QHWyM3dqG_i8H1U1cwf0/edit).

### User and project adoption metrics

See the `User & Project Adoption Metrics` tab on [Product Usage Reporting for Gainsight Definitions](https://docs.google.com/spreadsheets/d/1EhSXqx6YXcpqHg2TpS0ZN5Rk_d2hhrTPrW5FTbmuZjw/edit#gid=650262484) for calculated metrics.

## Data

### Data integrations

Data is integrated from Snowflake to Gainsight on a monthly basis. Over time, this will move to bi-weekly and then weekly.

![Product Usage Data Flow Diagram](https://lucid.app/publicSegments/view/cba91861-d0aa-4f96-8848-56a2eec5798b/image.jpeg)

### Triaging data quality

1. Confirm with CS Operations whether the data quality issue is specific to Gainsight or upstream (post in #cs-product-analytics).
   1. Alternatively, compare Gainsight to LicensesDot.
1. If the data quality issue is upstream, create a data quality issue in the [Data Quality Project](https://gitlab.com/gitlab-org/data-quality/-/issues). Please use the `Data Quality Problem` issue template.
   1. Attach to the [data quality epic](https://gitlab.com/groups/gitlab-org/-/epics/10586).
   1. Please include screenshots for troubleshooting and *mark issue as confidential*.

### Re-mapping License<>Subscription mapping

If your customer IS sending data but it does not appear in Gainsight, here are the instructions to manually re-map it.

1. Confirm GitLab is receiving the data
   1. For self-managed instances, confirm we are receiving recent pings in [Version App](https://version.gitlab.com/) from their production instance
   1. For SaaS, if you're not seeing the namespace data in Gainsight then we know there's a breakage (no need to confirm)
1. Find the subscription id that should be mapped to the instance in question and the license id (license md5) of that instance.
1. Share with CS Ops via this [issue template](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/new?issuable_template=Manual%20License%20Mapping%20Self-Managed)(DRI: Brandon)
1. CS Ops to update the CSV file
   1. [Self-managed CSV file](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/data/license_md5_to_subscription_mapping_temp.csv)
   1. NEED TO ADD SaaS CSV FILE
1. Data Team (DRI: Miles) reviews and approves change
1. Data Team assigns to manager for merging (DRI: Israel)

Note: this process may take several days or a week, given schedules and load. Please be patient as this is an entirely manual process until automation resolves these issues.

### Timing and flow

Because of the data integrations (listed above), there are certain delays from the moment the customer sends data via Service Ping (self-managed) or collected via Snowplow (SaaS) to when it is visible and usable in systems such as Gainsight and Salesforce. This delay is 1-2 days from when the Service Ping is received from the customer.

Data from SaaS customers is collected on Mondays at 00:00 UTC (Sundays at 5:00 pm PST) each week. Once collected it makes its way through the Snowflake lineage and is then ingested by Gainsight on Mondays at 15:00 UTC (Mondays at 8:00 am PST).

Data from Self-Managed customers also comes in on a weekly basis but each instance has its own day and time when the data is collected. Since this process is not standardized the way SaaS collection is, longer delays are expected based on the time the data is collected (between 1 and 2 days).

### Data sources and application

Below are the various data sources, their definitions, and uses.

#### Cloud licensing and operational metrics (self-managed only)

When they activate with Cloud Licensing, customers share `Subscription Data`, which contains basic license usage and instance version information. This data helps to automate activation, provisioning, co-terms and renewals. The sharing of `Subscription Data` is a standard part of GitLab's subscription agreement. `Operational Metrics` contains more detailed product usage metrics and is a subset of Service Ping. This data enable us to serve and support our customers through guiding them with [use case adoption scores](/handbook/customer-success/product-usage-data/maturity-scoring/), assisting with best practices, offering guidance, and assisting with upgrade recommendations. See this [7-min video on the data](https://youtu.be/8kbuZ-6Z5gs) (internal only) for more information. Customers are able to seek an exemption of sharing `Operational Metrics`, if national security is a risk.

#### What is the relationship between Cloud Licensing, Service Ping and Operational Metrics?

- **Cloud Licensing**: an activation method that allows a customer to share `Subscription Data`
  - Available on 14.1+
  - [Cloud Licensing Overview](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/)
- **Service Ping**: a service that collects the payload including Subscription, Operational, and Optional Metrics
  - [Operational Service Data](https://internal.gitlab.com/handbook/product/fulfillment/archive/operational-service-data/#register) - internal handbook
- **Operational Metrics**: a subset of Service Ping containing product usage data that is required to collect the core metrics required metrics per [Customer Success Services](/handbook/customer-success/csm/digital-journey/))
  -. Available on 14.1+

**References**:

- [Customer Success Services](/handbook/customer-success/csm/digital-journey/) (client facing)
- [Operational Data Vision](/handbook/customer-success/product-usage-data/)
- [Cloud Licensing Documentation](https://internal.gitlab.com/handbook/product/fulfillment/cloudlicensing/cloud-licensing/) (internal handbook)
- [Strict Cloud Licensing](https://internal.gitlab.com/handbook/product/fulfillment/cloudlicensing/strictcloudlicensing/) (internal handbook)
- [Service Ping Metrics list](https://metrics.gitlab.com/) (subscription, operational, and optional)
- [Operational Service Data](https://internal.gitlab.com/handbook/product/fulfillment/archive/operational-service-data/#register) (internal handbook)

#### Service Ping (self-managed)

We utilize Service Ping to derive self-managed customer usage reporting. For more details, see [Service Ping FAQs](/handbook/customer-success/csm/service-ping-faq/). Any references to "Service Ping" in Gainsight explicitly refers to self-managed product usage data (licenses + feature use).

#### SaaS (Snowplow)

SaaS customer usage is in Gainsight and collected via the Snowplow collector.

#### Mapping licenses to subscriptions

When licenses are automatically generated (either via WebStore or Deal Desk) a Zuora subscription ID is mapped to a license. This mapping enables the data to link in Gainsight to create a complete picture of an account.

If there is ever an issue where that data is not mapped, follow the steps below:

1. Confirm the account has Service Ping enabled by checking the VersionApp.
1. Check to see if their license key has a Zuora subscription linked in CustomersDot.
1. If the Zuora subscription is missing, [open a support issue](/handbook/support/internal-support/#regarding-licensing-and-subscriptions) to generate a new license with the correct Zuora subscription ID.

Example Issue where this issue was discovered: https://gitlab.com/gitlab-data/analytics/-/issues/8518

## Requesting new metrics

To request a new metric, please open an issue in the [Product Analytics project](https://gitlab.com/gitlab-org/product-analytics/-/issues/new) and at-mention Product Analytics PM. You can see [Add per project count](https://gitlab.com/gitlab-org/product-analytics/-/issues/425) as an example. However, before you create an issue, please confirm the metric does not already exist in the [Event Dictionary](https://docs.google.com/spreadsheets/d/1VzE8R72Px_Y_LlE3Z05LxUlG_dumWe3vl-HeUo70TPw/edit#gid=618391485&fvid=1422977269).

Examples of new metrics can include:

- Tracking a new feature
- Looking at feature use in a different context (raw count, activity per user, per project, etc.)
- Expanding an existing metric to track usage at different product tiers (e.g., specifically tracking the feature component used in Core vs. a paid tier)

## Frequently Asked Questions  (FAQs)

### Data availability

#### Why does my customer not have any product usage stats?

- Self-managed - They are not opted into Service Ping, or they turned it off.
- Self-managed - None of their instances are labeled as Production. [Here are instructions](#self-managed) on how to label instances as Production.
- SaaS - If the correct Namespace isn't showing up in Gainsight, the customer will need to associate their Namespace with their (new) subscription. This tends to happen when customers shift from SM to SaaS, or to net new customers where the customer is responsible for tying the namespace back to their subscription. To check if your customer's namespace is tied to their subscription, go to https://customers.gitlab.com/admin/order and type in the most recent `Subscription Name` (i.e. A-S00012345) found in their Salesforce record. If the `Gl namespace` field is blank, then their subscription is not tied to their namespace. This can be fixed by opening an [Internal Support Ticket](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) on your customer's behalf, or alternatively, they may reach out to support themselves.

#### Why is my customer's Billable Users (OR License Utilization) value `Null`?

This is because [`Billable Users`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/config/metrics/license/20210531204603_license_billable_users.yml) was instrumented in version 14.0, hence if your SM customer is on a legacy version lower than 14.0, the `Billable Users` value will not be collected and show up as `Null`, also affecting `License Utilization` score since the measure is calculated using `Billable Users` / `Licensed Users`.

#### What does it mean if I see details in instance and namespace details but no usage trends?

If the customer is self-managed, check if they have an instance labeled `Production`. They must have an instance labeled as `Production` to appear in the Usage Trends report.

The purpose of the Instance and Namespace Details report section is to show:

- If we have any SaaS or Self-Managed instances reporting stats.
- The GitLab version (for Self-Managed).
- The last reporting stats. For example, they sent us stats and then stopped on 2021-07-01.

#### Why is a metric is missing from my self-managed customer?

If a metric was implemented in a later release, it will not appear. Check the Data Mart Table definitions to identify the release for the metric in question. You can check the instance and namespace details to confirm which release version the customer is on. Example: `Billable Users` was instrumented in 14.0, and if a customer is on 13.9 or earlier, then this field will appear as `NULL`.

#### What is the process of manually uploading service ping data for offline/air-gapped instances?

The customer or the account team may upload the JSON file using this link - https://version.gitlab.com/usage_data/new

#### How long does it take for manually uploaded service ping data to populate in Gainsight?

This process can take anywhere from 24-48 hours before it starts to populate Gainsight reports and scorecards.

#### After updating instance data, how long does it take for the data to refresh?

Please allow 24-48 hours after making any changes to the instances in Gainsight.

### What is Service Ping?

Service Ping is a GitLab process that collects customer analytics on self-managed instances and sends a weekly payload to GitLab. The payload provides important high-level statistics that helps our product, support, and sales teams understand how GitLab is used.

- [Service Ping Guide](https://docs.gitlab.com/ee/development/internal_analytics/service_ping/)
- [Service Ping FAQ](/handbook/customer-success/csm/service-ping-faq/)

#### How can we confirm that a customer has opted into Service Ping?

The only way to confirm if they have opted into Service Ping is if we have data for them. See the [Service Ping Guide](https://docs.gitlab.com/ee/development/internal_analytics/service_ping/) for more information.

#### Can my customer opt out of Service Ping?

Yes.

#### Can my customer opt out of Cloud Licensing?

No, unless they do a contractual exemption (limited to certain PubSec orgs).

#### What stats comes from Cloud Licensing?

Operational metrics.

#### How does Service Ping work for Usage Stats in Gainsight?

Usage Statistics are received and collected weekly, and those stats are added to Gainsight every week. Even though the metrics are received and added weekly, the metrics are still shown as monthly, such as `Last 28 Days (L28)` or `All-Time`.

### How often is the data updated in Gainsight?

- SaaS - Usage Ping is manually pulled weekly on a schedule for the entire instance, for all customers/namespaces at once, typically on Mondays. It's loaded and passed through Snowflake into Gainsight, and those processes can take a day or two to complete.
- Self-Managed - Each self-managed instance usage ping is updated weekly, and the schedule of the weekly ping varies from instance to instance. It's loaded and passed through Snowflake into Gainsight, and those processes can take a day or two to complete.

### How do Last 28 Days metrics work?

- Shows the data for the last 28 days, including the most recent usage ping date.<br>

**Example:**<br>

- Jan 9th ping shows data for Dec 12 - Jan 9
- Jan 16th ping shows data for Dec 19 - Jan 16
- Jan 23th ping shows data for Dec 26 - Jan 23
- Jan 30th ping shows data for Jan 3 - Jan 30
- Since this is the final ping, January data is Jan 3 - Jan 30.
- January data in Gainsight would include Jan 3 - Jan 30 and exclude Jan 1, 2, 31.
- Feb 6th ping shows data for Jan 9 - Feb 6 <br>

<details>
  <summary markdown="span"> Refer to the visual for example: </summary>
 ![28d Logic](https://lucid.app/publicSegments/view/0de4f2de-99f8-44a1-a47d-a7b31cab896e/image.png)
</details>

### Do we have metrics for the calendar week/month?

No. Please refer to [How do Last 28 Days metrics work?](#how-do-last-28-days-metrics-work)

### Why are usage stats missing at the beginning of the month?

You may notice usage stats missing for the first week of a month up until a ping is collected from the customer. The ping snapshot date will differ for each customer.

### Does setting CSM sentiment to y/g for a Red DevSecOps score override the Red health score?

There's no DevSecOps-specific override, however, there is one option to override which is the CSM Sentiment. The CSM can change that to Red, making the overall account red. [HB Reference](/handbook/customer-success/csm/health-score-triage/#csm-sentiment). CSM Sentiment overall weighting is 25%, whereas Product is 50%

---

## Data Definitions

### What's the best way to understand what a metric is measuring?

Check the [Product Usage Data for Gainsight Definitions](https://docs.google.com/spreadsheets/d/1EhSXqx6YXcpqHg2TpS0ZN5Rk_d2hhrTPrW5FTbmuZjw/edit?usp=sharing).

### What's the best way to understand details about a metric?

Check the [Product Usage Data for Gainsight Definitions](https://docs.google.com/spreadsheets/d/1EhSXqx6YXcpqHg2TpS0ZN5Rk_d2hhrTPrW5FTbmuZjw/edit?usp=sharing).

### What are the differences between billable user, licensed user, and active user?

- Active user count was removed because it includes bots, guest users.
- Billable user includes active users, excluding bots and guests. We can accurately compare this to the number of licenses sold to determine license utilization.
- Licensed user is number of licenses provisioned in CustomersDOT.

### What is UUID?

UUID is the GitLab-assigned ID of a server. There can be more than one server for one hostname.

### What is the difference between Product Usage Stats and telemetry?

Telemetry has the connotation of third-party analytics, so we avoid using this word. See more information and alternatives on the [Top Misused Terms Handbook Page](/handbook/communication/top-misused-terms/#telemetry).

---

## Multiple hostnames and subscriptions

The following reports are not effective for accounts with multiple hostnames and subscriptions:

- Product Usage Scorecard Calcs
- Scorecard Product Usage Metrics
