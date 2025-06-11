---
title: "Customer Product Usage Information"
description: "GitLab's Product Usage Data policies"
---

GitLab is committed to providing value and functionality through our free, open-source software and paid offerings (collectively, the “Software”). In order to continue innovating and supporting our growing user base, it is helpful to have in-depth knowledge of how our users are utilizing the Software, which we collect as certain metrics generated through a customer or a users’ use of the Software (“Metrics”).  To achieve the foregoing, GitLab collects information about how the features and functionality of the Software are used at an instance, namespace, or user level.

Instance or namespace level Metrics constitute total counts, such as the total number of projects, pipelines, issues, and merge requests related to that entire instance or namespace.  These Metrics may also include an instance or namespace’s settings, such as database_version or container_registry_enabled.  User level Metrics are events related to specific user interactions with the Software, such as whether a user viewed a certain page or clicked a certain button in the Software.  Subject to the exceptions described in the proceeding sections, the personal data of individual users is generally not collected.

The Metrics collected can be separated into three collection services: Service Ping, Snowplow, and License Sync (collectively, “Product Usage Data”).  The details of each collection service can be found below, including the applicable Software type in which the Product Usage Data operates, the cadence for collection, and the types of Metrics collected.

## What are the data collection services that constitute Product Usage Data

As stated above, there are three collection services GitLab uses to generate Product Usage Data, which in turn allow us to invest more efficiently and continue to expand both the open source and paid Software offerings.

### Service Ping (formerly known as Usage Ping)

*Purpose*: GitLab collects Service Ping Metrics to collaborate with our customers to accelerate value attribution, achieve return-on-investment (ROI) goals, and accomplish business outcomes with the Software.  Service Ping Metrics are composed of aggregate count Metrics related to an entire instance or namespace, as well as true/false Metrics regarding the enablement of certain settings or features. Aggregate counts are tallied in an “all-time” format and a “28-day” format.  Please see our Service Ping FAQ [here](/handbook/customer-success/csm/service-ping-faq/).

*Applicable Software*: Service Ping Metrics are collected in the Self-Managed and SaaS versions of the Software.  Generally, “Service Ping” is the name of the technology that collects the applicable Metrics from individual Self-Managed installations.  Since GitLab.com is essentially a GitLab-hosted multi-tenant version of a Self-Managed instance, a version of Service Ping has been implemented for SaaS and provides SaaS equivalent Metrics to what we achieve with Self-Managed instances. For more information on how Service Ping operates exclusive to Self-Manage instances, please see our [Service Ping Guide](https://docs.gitlab.com/ee/development/service_ping/).

*Configuration*: Self-Managed Service Ping payloads contain instance-level Metrics for each individual Self-Managed installation. SaaS Service Ping Metrics relate to both the entire GitLab.com instance as well as every GitLab.com namespace.

*Personal Data Collected*: Since Service Ping Metrics are aggregated, these Metrics generally do not relate to an individual and do not contain information about projects or usernames.  However, there are two possible exceptions where Service Ping Metrics may relate to an identifiable person.

The first exception is in the collection of hostname and IP address for Self-Managed instances.  These Metrics are intended to relate to the instance, but the personal data of a natural person could be collected depending on the Software type.  For example, if the Self-Managed instance is installed in an individual’s home server, we may get a home IP address.  Similarly, the collection of a SaaS namespace could possibly contain the personal data of a natural person depending on the naming convention.  The second exception is in the collection of paid licensee information.  Because all Service Ping Metrics are correlated to an active licensee’s name, email address, and company name, all Metrics collected by Service Ping may relate to that licensee.

*Data Sharing*: Service Ping Metrics are not shared with independent third-parties.  The data is sent from Self-Managed instances or SaaS namespaces to the Versions App and our data warehouse for processing.  These are GitLab-controlled systems.

*Cadence*: Service Ping collected via Self-Managed payloads and SaaS namespaces are automatically collected on a weekly basis.

*Ownership*: Service Ping is owned by the [GitLab Analytics Instrumentation Group](/handbook/engineering/development/analytics/analytics-instrumentation/).

*Types of Data*: Service Ping Metrics have been broken down into the four categories of Metrics listed below:

- **Operational Data**: Operational Data is a collection of aggregated usage and true/false Metrics that we are contractually obligated to collect in order to render Customer Success Services. Operational Data tracks how value is delivered through the use of the Software and provides insights into optimal customer implementation.

   A full list of the Operational Data collected can be viewed [here](https://metrics.gitlab.com/?q=operational&_gl=1%2abdc7u9%2a_ga%2aMTg0OTU3OTI2Ny4xNjQyNzAyNDIx%2a_ga_ENFH3X7M5Y%2aMTY3MTgxNTA0Mi4zNTEuMS4xNjcxODE5OTUwLjAuMC4w).

- **Optional Data**: Optional Data is a collection of aggregated usage and true/false data generated by our users that is not required to support our day-to-day operations, yet provide valuable insights and knowledge that GitLab can use to improve our process, Software, and investment decisions.  Optional Data compare counts month over month (or week over week) to get a rough sense for how an instance uses different Software features, collect other facts that help us classify and understand GitLab installations, and calculate our Stage Monthly Active Users (SMAU), which helps to measure the success of our stages and features.

    A full list of the Optional Data collected can be viewed [here](https://metrics.gitlab.com/?q=optional).

- **Subscription Data**: Subscription Data is a collection of license-related Metrics synced to our data warehouse from Self-Managed instances on version 14.1 or higher and connected to the internet.  As described in our Subscription Agreement, these Metrics are needed because they provide basic information on user count and instance version, which helps to facilitate discussions regarding customer behavior in the areas of provisioning and renewals.

    A full list of the Subscription Data collected can be viewed [here](https://metrics.gitlab.com/?q=subscription).

- **Standard Data**: Standard Data is a collection of metadata, such as hostname and edition, that allows us to associate other Service Ping categories to the correct instance or namespace.  Collection of these Metrics must be enabled to properly correlate Service Ping metrics in our data warehouse between the other three categories of Service Ping Metrics.

    A full list of the Standard Data collected can be viewed [here](https://metrics.gitlab.com/?q=standard).  In addition, the IP address of an instance is another piece of metadata collected under this category.

*Opting-Out*: Each of the four Service Ping categories have different parameters regarding Opt-Out:

- **Operational Data**
  - <ins>Free Self-Managed instances (CE or EE Distribution)</ins>: Operational Data is not collected since the purpose of these Metrics are to assist customers with optimal use of the Software.
  - <ins>Paid Self-Managed instances (EE Distribution)</ins>: Operational Data is intended to be required and configuration is connected to your paid license. If you wish to opt-out you can speak with a GitLab sales representative or [contact support](https://support.gitlab.com/hc/en-us/requests/new).  If your instance is on an [Offline License](/handbook/support/license-and-renewals/workflows/self-managed/cloud-licensing/#cloud-licensing-exemptions), then GitLab will not automatically collect Operational Data for as long as the instance remains disconnected from the Internet.
  - <ins>Free and Paid SaaS users</ins>: Do-Not-Track (“DNT”) signals may prevent the collection of certain Operational Data Metrics that relate to browser level aggregate totals, such as the number of times a button was clicked by a user with DNT signals enabled.  However, please note that DNT signals depend on how the event is triggered and thus may not be recognized in all situations.  Further, DNT signals will not prevent the collection of downstream non-synchronous Metrics. For  example, if a user with DNT enabled signals clicks a button to start a CI job, this button click will not be tracked. But if the same user pushes new code to a repository, thereby inciting an automated run of the same job, this run will be counted since it occurred non-synchronously from the user’s direct action. Any other interactions that happen outside of the browser, such as a direct call to GitLab’s API, may also be included in the Metrics.
- **Optional Data**:
  - <ins>Free and Paid Self-Managed instances (CE or EE distribution)</ins>: These Metrics are collected by default. Optional Data can be disabled by through an in-app admin setting or through modifying the configuration file.  Please [visit our documentation](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#enable-or-disable-usage-statistics) to learn more.
  - <ins>Free and Paid SaaS users</ins>: Similar to Operational Data, DNT signals may prevent the collection of certain Optional Data Metrics that relate to browser level aggregate totals. However, please note that DNT signals depend on how the event is triggered and thus may not be recognized in all situations.
- **Subscription Data**:
  - <ins>Free Self-Managed instances (CE or EE distribution)</ins>: These Metrics are collected by default.  Subscription Data can be disabled by through an in-app admin setting or through modifying the configuration file.  Please [visit our documentation](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#enable-or-disable-usage-statistics) to learn more.
  - <ins>Paid Self-Managed instances (EE distribution)</ins>: Subscription Data cannot be disabled.  Its collection is described in our  Subscription Agreement.  However, if your instance is on an [Offline License](https://docs.gitlab.com/ee/subscriptions/self_managed/#export-your-license-usage), then GitLab will not automatically collect Subscription Data for as long as the instance remains disconnected from the Internet.  Further, if your instance is on a [Legacy License](/handbook/support/license-and-renewals/workflows/self-managed/cloud-licensing/#1-which-license-type-should-i-provide-for-an-approved-opt-out), then Subscription Data may not be automatically collected.
  - <ins>Free and Paid SaaS users</ins>: You cannot opt-out of Subscription Data for any of our SaaS offerings.
- **Standard Data**:
  - <ins>Free Self-Managed instances (CE or EE distribution)</ins>: These Metrics are collected by default.  Standard Data can be disabled through an in-app admin setting or through modifying the configuration file.  Please [visit our documentation](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html#enable-or-disable-usage-statistics) to learn more.
  - <ins>Paid Self-Managed instances (EE distribution)</ins>: Standard Data cannot be disabled.  However, if your instance is on an [Offline License](https://docs.gitlab.com/ee/subscriptions/self_managed/#export-your-license-usage), then GitLab will not automatically collect Standard Data for as long as the instance remains disconnected from the Internet.
  - <ins>Free and Paid SaaS users</ins>: You cannot opt-out of Standard Data for any of our SaaS offerings.

### Snowplow

*Purpose*: GitLab operates a product intelligence platform in our infrastructure called Snowplow to collect user-level interactions within the SaaS version of the Software (e.g., viewing a specific page, clicking a button, etc).  This allows us to provide detailed usage information to customers and it allows us to understand how users navigate the product.  Unlike with Service Ping, the Metrics collected are not aggregated across an entire instance or namespace, but are attributable to a specific user, subject to a subsequent pseudonymization process.  For more information on Snowplow, please see our comprehensive [Internal Analytics documentation](https://docs.gitlab.com/ee/development/internal_analytics/).

*Applicable Software*: Snowplow collects Metrics from free and paid SaaS users.

*Configuration*: The Snowplow collector takes user events in real time from GitLab.com and sends these user Metrics through our pseudonymization process. At this stage, the Metrics are stripped of personal identifiers, subject to the exceptions below, but the Metrics are still attributable to a SaaS namespace and project.

*Personal Data Collected*:  Snowplow does collect the personal data of individual users in a raw format.  These raw Metrics, however, are sent through a pseudonymization process and subsequently purged, meaning only the pseudonymized Metrics are delivered to our data warehouse.  These pseudonymized Metrics are still considered personal data under applicable data protection laws since these Metrics are capable of re-identification. GitLab, however, does not undertake any processes to re-identify or relate the Metrics back to individual users.   There are two pieces of Snowplow Metrics that we do not pseudonymize: Project_ID and Namespace_ID.  We also collect the country and region of the user’s location, but we do not store IP addresses.

*Data Sharing*: Snowplow Metrics are not shared with independent third-parties.  All systems and software used in the collection and transfer of Snowplow Metrics are GitLab-controlled systems.

*Cadence*: Snowplow Metrics are collected from GitLab.com and sent to the data warehouse contemporaneously.

*Ownership*: Snowplow is owned by the [GitLab Analytics Instrumentation Group](/handbook/engineering/development/analytics/analytics-instrumentation/).

*Types of Metrics*: Snowplow Metrics are composed of all the pseudonymized user interaction Metrics found [here](https://metrics.gitlab.com/snowplow/), as well as Project_ID, Namespace_ID, and the country and region of the user’s location.

*Opting-Out*: Since Snowplow Metrics pertain to individual pseudonymized user events, Snowplow Metrics can only be opted-out on an individual basis using DNT signals.  However, please note that DNT signals depend on how the event is triggered and thus may not be recognized in all situations.

### License Sync

*Purpose*: GitLab collects certain Metrics for Self-Managed instances through License Sync to be able to determine if the amount of users provisioned under a paid license exceeds the monetary value of the subscription.  If there is a disjunction between the subscription and the number of users under a license, these Metrics are used by the GitLab Fulfillment Team as part of a monthly, quarterly or annual reconciliation process.  These Metrics also allows us to determine the number of open seats under a license and assists in our analysis of renewals and licensing consolidation.

*Applicable Software*: License Sync Metrics are collected from paid Self-Managed (EE Distribution) instances.    License Sync does not collect Metrics from free Self-Managed (CE or EE Distribution).  For SaaS versions of the software, the GitLab Fulfillment Team uses the Subscription Data collected by Service Ping to facilitate the reconciliation review described in the preceding paragraph. Please read our [GitLab SaaS subscriptions](https://docs.gitlab.com/ee/subscriptions/gitlab_com/) and [Self-managed subscriptions](https://docs.gitlab.com/ee/subscriptions/self_managed/) pages for more information.

*Configuration*: License Sync collects Metrics from paid Self-Managed instances to activate [Cloud Licensing](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/).  Further, License Sync ingests these Metrics for Self-Managed customers and sends it to our [Customer Portal](https://docs.gitlab.com/ee/subscriptions/customers_portal.html) for the aforementioned license management and reconciliations.  Then the Metrics are sent to our data warehouse.

*Personal Data Collected*: The only personal data collected by License Sync is the name, email address, and company of the individual listed on the paid Self-Managed license.  These personal data elements are encrypted within the license key.  Please read [here](https://docs.gitlab.com/ee/subscriptions/self_managed/#subscription-data) for more details.

*Data Sharing*: License Sync Metrics are not shared with independent third-parties.  License Sync, Customer Portal, and data warehouse are GitLab-controlled systems.

*Cadence*: License Sync Metrics are collected daily.

*Ownership*: License Sync is owned by the [GitLab Fulfillment Team](https://about.gitlab.com/direction/fulfillment/).

*Types of Data*: The Metrics collected include name, email and company of the individual listed on the paid Self-Managed license, as well as those Metrics listed [here](https://docs.gitlab.com/ee/subscriptions/self_managed/#subscription-data).

*Opting-Out*:  By default, all paid Self-Managed subscriptions on 14.1 or higher with an internet connection will have Subscription Data collected via License Sync.  If a customer wishes to opt-out of License Sync, they should consult with GitLab Sales to obtain a Legacy or Offline License. For paid SaaS subscriptions, you cannot opt-out of Subscription Data collected via Service Ping.

## Usage Data for AI-Powered Features

AI-powered features, such as Code Suggestions, are not encompassed by the descriptions on this page.  Those features are subject to their own collection configuration.  Usage data and telemetry collected for AI-powered features will be detailed on the Gitlab Duo Docs page [here](https://docs.gitlab.com/ee/user/gitlab_duo/data_usage.html#telemetry).
