---

title: Product Data Insights Data Models Cheat Sheet
---







## Objectives for this page

This handbook page is intended to provide a high-level overview of the most common data models used by the Product Data Insights team as well as some known nuances and/or caveats about those data models that are helpful to be aware of.

To collaborate on the content in this page, please either submit an MR (preferred) or start a discussion in [this Epic](https://gitlab.com/groups/gitlab-data/-/epics/771).

## Helpful places to start

- [DBT Docs](https://dbt.gitlabdata.com/#!/overview) - This resource contains comprehensive documentation on all available dbt models. When in doubt, search DBT!

- [Data guides to data subject areas](/handbook/business-technology/data-team/data-catalog/) managed by the Data team.

- [Documentation on data pipelines](/handbook/business-technology/data-team/platform/pipelines/) for the technically curious analyst. This page goes into each data source and extraction details.

- [Table of data sources and refresh schedules](/handbook/business-technology/data-team/platform/#data-sources) to understand standard load times for each data source.

## Data Model Categories

These categories are grouped by data source and subject area.

### Service Ping

[Service Ping](https://docs.gitlab.com/ee/development/service_ping/) is GitLab's mechanism to collect data by generating a JSON payload of usage data every week to be sent to GitLab. It provides aggregated data to our Product, Customer Success, Support, and Sales teams to understand how GitLab is used. Service Ping is our only data source for understanding Self-Managed product behavior. Service Ping methodology allows us to protect our Self-Managed users' privacy by aggregating metrics at the installation level.

#### FAQs

> Is it possible to report at the namespace or user level using Service Ping data?

- Nope! As part of our [Commitment to Individual User Privacy](/handbook/product/analytics-instrumentation-guide/service-usage-data-commitment/), GitLab only collects usage metrics aggregated at the installation level.

> What is the difference between an instance and an installation?

- An installation is the unique combination of instance_id and host_id. [Read more here](/handbook/business-technology/data-team/data-catalog/self-managed/). We do Self-Managed analysis and reporting at the installation level.

#### Documentation

<details markdown="1"><summary>Click to expand</summary>

- [Service Ping Overview](https://docs.gitlab.com/ee/development/service_ping/)

- [Service Ping metrics dictionary](https://metrics.gitlab.com/)

- [Data Guide to Self-Managed Analysis](/handbook/business-technology/data-team/data-catalog/self-managed/)

- [Data Guide to xMAU Analysis](/handbook/business-technology/data-team/data-catalog/xmau-analysis/)

</details>

#### Commonly Used Data Models

<details markdown="1"><summary>Click to expand</summary>

| Schema | Table Name | Data Grain | Description | Notes |
| --- | --- | --- | --- | --- |
| common_mart | [mart_ping_instance](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_ping_instance) | `dim_ping_instance_id` | Ping-level data with information with additional attributes for installation, subscription, account, and product information.  | No metrics are included in this data. |
| common_mart | [mart_ping_instance_metric](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_ping_instance_metric)| `dim_ping_instance_id`, `metrics_path`  | Ping- and metric-level data with additional attributes for installation, subscription, account, and product information.  | This is a UNION of other tables that are filtered by a certain timeframe: `mart_ping_instance_metric_28_day` `mart_ping_instance_metric_7_day` `mart_ping_instance_metric_all_time` |
| common | [fct_ping_instance_metric_none_null](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_ping_instance_metric_none_null) | `dim_ping_instance_id`, `metrics_path` | Ping- and metric-level data about metrics with `none` and `null` timeframes. | |
| common_mart_product | [rpt_ping_latest_subscriptions_monthly](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_ping_latest_subscriptions_monthly) | `ping_created_date_month`, `latest_subscription_id`, `dim_installation_id` | Active Self-Managed subscriptions by month, including seat count. If a subscription sends Service Ping, then installation-level data is provided.| This includes seat count and can be used to calculate Service Ping opt-in rate |
| common_mart_product | [rpt_ping_metric_totals_w_estimates_monthly](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_ping_metric_totals_w_estimates_monthly) | `ping_created_date_month`, `metrics_path`, `ping_edition`, `estimation_grain`, `ping_edition_product_tier`, `ping_delivery_type` | This model is used for xMAU/PI reporting and is the source for Service Ping data in the [td_xmau] snippet. | |

</details>

#### Good to Know

<details markdown="1"><summary>Click to expand</summary>

- [Categories of data collected: Subscription, Operational, Optional](/handbook/legal/privacy/customer-product-usage-information/index.html.md#what-are-the-data-collection-services-that-constitute-product-usage-data)
  - [Operational metrics](https://metrics.gitlab.com/?q=operational)
  - [Optional metrics](https://metrics.gitlab.com/?q=optional)

- Installations are randomly assigned a day of week to generate service pings, but that assignment is persistent over time. For example, if an installation is assigned Tuesdays to generate pings, it will always generate pings on Tuesdays. We generate and load service ping on different days to distribute the payload load evenly over the entire week.

- The `milestone` field of the [metrics dictionary](https://metrics.gitlab.com/) can also be used to identify the version when a metric was instrumented, but there a couple of limitations. First, many metrics are just labeled `< 13.9`, so there is a lack of more detail for older metrics. Second, metrics can be introduced on different versions for CE and EE, so `milestone` could be incorrect for one edition/distribution. For these reasons, we recommend using [common_mart_product.rpt_ping_metric_first_last_versions](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_ping_metric_first_last_versions) if you are looking to find out when a metric was instrumented.

</details>

### GitLab.com

GitLab.com (SaaS) is a single installation reporting a single ping within our Service Ping framework. In order to access more granular data by product tier, plan type, namespace, or user, we utilize the [GitLab.com Postgres database](/handbook/business-technology/data-team/programs/data-for-product-managers/#gitlabcom-postgres-database). This data source replicates any service ping events that create a [backend table](https://gitlab.com/gitlab-org/gitlab/-/tree/master/db/docs).

#### FAQs

> Why don't all events for all Stages and Groups show up in our GitLab.com data?

- This is due to limitations in replicating Service Ping counters using the gitlab.com db Postgres replica

> Is it possible to associate user level behavior in our GitLab.com data to our Snowplow events?

- No. Our snowplow user identifiers are anonymized, while our GitLab.com user identifiers are not. However, it is possible to join Snowplow and GitLab.com data at the namespace (group/project) level.

> I've heard there are some reliability issues with our GitLab.com data. How can I stay up to date on outages or known problems?

- [This Issue](https://gitlab.com/gitlab-data/analytics/-/issues/12921) documents all known problems with the GitLab.com replica.

#### Documentation

<details markdown="1"><summary>Click to expand</summary>

- [Data Guide for Product Managers documentation on GitLab.com postgres replica data](/handbook/business-technology/data-team/programs/data-for-product-managers/#gitlabcom-postgres-database)

- [DB docs](https://gitlab.com/gitlab-org/gitlab/-/tree/master/db/docs) document which service ping metrics are replicated in a database. Click in to the .yml files for each table to access table specific descriptions.

- [DBT documentation on the prep_event model](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.prep_event) contains compiled SQL logic to better understand any filtering applied to events.

- [Data Guide to xMAU Analysis](/handbook/business-technology/data-team/data-catalog/xmau-analysis/)

- [Schema file](https://gitlab.com/gitlab-org/gitlab/-/blob/master/db/structure.sql) containing SQL logic for the creation of each postgres table available in production.

</details>

#### Commonly Used Data Models

<details markdown="1"><summary>Click to expand</summary>

| Schema | Table Name | Data Grain | Description | Notes |
| --- | --- | --- | --- | --- |
| common_mart | [mart_event_user_daily](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_event_user_daily) | `event_date`, `event_name`, `dim_user_id`, `dim_ultimate_parent_namespace_id` | Daily user-, namespace-, and event-level data, including attributes about the namespace and plan |  |
| common_mart | [mart_event_namespace_daily](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_event_namespace_daily) | `event_date`, `event_name`, `dim_ultimate_parent_namespace_id` | Daily namespace- and event-level data, including attributes about the namespace and plan |  |
| common_mart_product | [rpt_event_xmau_metric_monthly](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_event_xmau_metric_monthly) | `event_calendar_month`, `user_group`, `section_name`, `stage_name`, `group_name`  | Monthly user group- and xMAU metric-level data | This is the model used in reporting paid SaaS xMAU and is used in the `[td_xmau]` snippet |
| common_mart_product | [rpt_event_plan_monthly](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.rpt_event_plan_monthly) | `event_calendar_month`, `plan_id_at_event_month`, `event_name` | Monthly plan- and event-level data |  |

</details>

#### Good to Know

<details markdown="1"><summary>Click to expand</summary>

- GitLab.com data sources are not exhaustive of all of the actions users can take within GitLab's SaaS offering.

</details>

### Snowplow

Snowplow is an open source event tracking tool that is used at GitLab to track GitLab.com front-end events like page views, CTA clicks, link clicks, etc. This data source does not collect identifiable user data to protect our user's privacy. Our Snowplow data source is how we implement and track experiments at GitLab.

#### FAQs

> Why doesn't the metric that my team implememented show up in the [metrics dictionary](https://metrics.gitlab.com/snowplow)?

- In order to show up in the [metrics dictionary](https://metrics.gitlab.com/snowplow), every event needs a [.yml file](https://gitlab.com/gitlab-org/gitlab/-/tree/master/config/events). This will not happen automatically and should be created by the engineer that implements snowplow tracking.

> Why is the value for `gsc_namespace_id` null for some proportion of snowplow events?

- Engineers need to enable tracking for `gsc_namespace_id` when implementing new events. If tracking for `gsc_namespace_id` is already enabled and nulls are still occurring, the events may be triggered in a location within GitLab.com that is not specific to any one namespace like the ToDos page.

> What is the correct logic to identify events triggered in production environments?

- Apply the following logic `WHERE app_id IN ('gitlab','gitlab_customers')`

> How should I interpret the `event_category` value in structured snowplow event payloads?

- The `event_category` value will be automatically populated according to [this codified logic](https://gitlab.com/gitlab-org/gitlab/-/blob/master/app/helpers/application_helper.rb?ref_type=heads#L143-143) unless the engineer instrumenting the event overrides this logic, which is often the case for backend events. A great place to search for the meaning of these values is by key word searching in [this EE controllers repository]( https://gitlab.com/gitlab-org/gitlab/-/tree/master/ee/app/controllers). Controllers outside of EE are also searchable and located [here](https://gitlab.com/gitlab-org/gitlab/-/tree/master/app/controllers). Otherwise, you can reach out to the engineering slack channel for the team who instrumented the event of interest and ask for validation on the correct interpretation of your `event_category` value there.

#### Documentation

<details markdown="1"><summary>Click to expand</summary>

- [Guide to Snowplow for Product Managers](/handbook/business-technology/data-team/programs/data-for-product-managers/#sts=Snowplow)

- [Technical Snowplow overview](/handbook/business-technology/data-team/platform/snowplow/)

- [Snowplow docs on standard fields](https://docs.snowplow.io/docs/understanding-your-pipeline/canonical-event/)

- [Snowplow schema definitions in GitLab docs](https://docs.gitlab.com/ee/development/snowplow/schemas.html)

- [PDI: Snowplow New Models Onboarding](https://docs.google.com/presentation/d/1L6g2XCHWhRRXAbJ5txBavdxPW0Jja1E43QzxbtYvQK0/edit?usp=sharing)

</details>

#### Commonly Used Data Models

<details markdown="1"><summary>Click to expand</summary>

| Schema | Table Name | Data Grain | Description | Notes |
| --- | --- | --- | --- | --- |
| common_mart | [mart_behavior_structured_event](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_behavior_structured_event) | `behavior_structured_event_pk` | Enriched Snowplow table for the analysis of structured events.| Depending on analysis use case, it could be helpful to filter by `behavior_date` for queries to run within reasonable timeframes.|
| common | [fct_behavior_structured_event_without_assignment](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_behavior_structured_event_without_assignment) | `behavior_structured_event_pk` | Derived fact table containing data for Snowplow structured events excluding assignment events. Assignment events are events that signifies a user was enrolled into an Experiment. | `fct_behavior_structured_event_without_assignment_190` and `fct_behavior_structured_event_without_assignment_400` are also available. |
| common | [fct_behavior_structured_event_experiment](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_behavior_structured_event_experiment) | `behavior_structured_event_pk` | Derived fact table for structured events related to experiments. |  |
| common | [fct_behavior_website_page_view](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_behavior_website_page_view) | `fct_behavior_website_page_view_sk` | Fact table containing quantitative data for Page views. Page views are a subset of Snowplow events and are fired by the Javascript tracker. |  |
| common | [fct_behavior_unstructured_event](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_behavior_unstructured_event) | `fct_behavior_unstructured_sk` | Derived fact table for unstructured events. |  |
| common | [dim_behavior_event](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_behavior_event) | `dim_behavior_event_sk` | Dimensional model containing distinct events types from Snowplow. |  |

</details>

#### Good to Know

<details markdown="1"><summary>Click to expand</summary>

- If you are wondering if Snowplow events are implemented in a certain area of the product, the [Snowplow Inspector](https://chrome.google.com/webstore/detail/snowplow-inspector/maplkdomeamdlngconidoefjpogkmljm?hl=en) is a good complimentary resource to the [Metrics Dicitonary](https://metrics.gitlab.com/) which is not exhaustive. The Snowplow Inspector will not show server side events.

- We do not use snowplow on our self-managed instances, only on GitLab.com

- If developers or PMs are wondering about standard implementation, the event schema is documented [here](https://docs.gitlab.com/ee/development/snowplow/index.html#event-schema).

</details>

### Namespaces, users, & memberships

This category of data models includes GitLab.com (SaaS) [namespaces](https://docs.gitlab.com/ee/user/namespace/) (which include both projects and groups), their firmographic attributes, and individual members.

#### FAQs

> What is a namespace?

- Starting with the basics! GitLab has two categories of namespaces; groups and projects. In general, a namespace provides one place to organize your related projects. Read more [here](https://docs.gitlab.com/ee/user/namespace/). Namespaces exist within GitLab SaaS and Self-Managed products, but to product the privacy of our Self-Managed users, we only collect identifiable namespace data for SaaS.

> What types of namespaces do we normally analyze?

- We normally perform analyses at the Ultimate parent namespace level.

> Do we have access to membership history data?

- No. Membership history at GitLab is not recorded in any data models.

#### Documentation

<details markdown="1"><summary>Click to expand</summary>

- [Data Guide to Namespace Analysis](/handbook/business-technology/data-team/data-catalog/namespace/) contains comprehensive documentation on namespace analytics and example SQL code.

- [This knowledge base page](https://docs.gitlab.com/ee/topics/set_up_organization.html) covers an overview of namespaces, members and groups.

- [Member-specific knowledge base page](https://docs.gitlab.com/ee/user/project/members/index.html) explaining direct and indirect memberships as well as shared group memberships.

</details>

#### Commonly Used Data Models

<details markdown="1"><summary>Click to expand</summary>

| Schema | Table Name | Data Grain | Description | Notes |
| --- | --- | --- | --- | --- |
| common | [dim_namespace](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_namespace) | `dim_namespace_id` | Dimension table that contains all GitLab.com namespaces and namespace attributes including plan. |  |
| common | [dim_namespace_hist](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_namespace_hist) | `namespace_snapshot_id`, `dim_namespace_id`, `valid_from`, `valid_to` | Historical snapshot of `common.dim_namespace` model. |  |
| common | [dim_user](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_user) | `dim_user_id` | Dimension table that contains all GitLab.com Users. |  |
| common | [dim_user_hist](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_user_hist) | `dim_user_snapshot_hist_id`, `dim_user_id`, `valid_from`, `valid_to` | Historical snapshot of `common.dim_user` model. |  |
| legacy | [gitlab_dotcom_memberships](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.gitlab_dotcom_memberships) | `membership_source_id`, `user_id` | This model unions together all of the other models that represent a user having (full or partial) access to a namespace, AKA "membership". | Includes both direct and indirect membership types. |
| legacy | [gitlab_dotcom_members](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.gitlab_dotcom_members) | `member_id`, `user_id` | Base model for GitLab.com members. | Only includes direct membership links. Used for invite related fields. |

</details>

#### Good to Know

<details markdown="1"><summary>Click to expand</summary>

- `member_count` fields found in any `common` models are not accurate and should not be used. Use `legacy.gitlab_dotcom_memberships` for any analyses intended to measure # members per namespace. [Here is the Issue](https://gitlab.com/gitlab-data/analytics/-/issues/12566) representing work to correct these accuracy problems.

</details>

### Trials, Subscriptions & Charges

Models used to report on trials, subscriptions and charges.

#### FAQs

> How mature is the [Trusted Data](/handbook/business-technology/data-team/platform/#tdf) approach to namespace and installation trial and paid conversion analysis?

- This category of data models is the next priority for refactoring and aligning with the [Trusted Data Framework](/handbook/business-technology/data-team/platform/#tdf).

#### Documentation

<details markdown="1"><summary>Click to expand</summary>

- [How GitLab SaaS subscriptions work](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/enablement/dotcom-subscriptions/) is a handbook page that covers SaaS subscriptions in depth.

- [GitLab Tiers](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/tiers/) covers all SM and SaaS Tiers in the GitLab handbook.

- [This pricing page](https://about.gitlab.com/pricing/) is our customer facing page covering all GitLab tiers.

</details>

#### Commonly Used Data Models

<details markdown="1"><summary>Click to expand</summary>

| Schema | Table Name | Data Grain | Description | Notes |
| --- | --- | --- | --- | --- |
| legacy | [customers_db_charges_xf](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.customers_db_charges_xf) | `rate_plan_charge_id` | This model first unions the 2 ephemeral models customers_db_charges_with_valid_charges and customers_db_charges_with_incomplete_charges which provides a clean list of all orders that have been created in the subscription portal and that can be linked to Zuora subscriptions and charges. |  Product Data Insights will use this model to calculate paid conversion analyses until customers_db_charges_xf is refactored using the TD framework. |
| legacy | [customers_db_trial_histories](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.customers_db_trial_histories) | `gl_namespace_id`, `start_date`, `expired_on` | Historical table of namespaces with trials. |  |
| restricted_safe_common_mart_sales | [mart_arr](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_arr) | `primary_key`, `arr_month`, `subscription_name` | Data mart to explore ARR. | `dim_subscription_id` column has the **latest** subscription ID for each subscription.  |
| common | [dim_subscription](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_subscription) | `subscription_name`, `term_start_date`, `term_end_date` | Dimension table representing subscription details. | The data grain here is used to identify unique terms per subscription. |

</details>

#### Good to Know

<details markdown="1"><summary>Click to expand</summary>

- [SSOT Historical Namespace Subscriptions](https://gitlab.com/gitlab-data/analytics/-/issues/14401) is an Issue for Data to clarify and refactor models used for subscription and charge analysis.

- Findings from Issue intended to [record differences between using legacy.customers_db_charges_xf vs common.dim_order_hist for namespace paid conv. analysis](https://gitlab.com/gitlab-data/product-analytics/-/issues/820#note_1227834945).

- There are some known problems with our license to subscription mapping in SM and SaaS reporting. [Issue with more details](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/634).

- To understand active subscriptions, filtering [dim_subscription](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_subscription) on `subscription_status = 'Active'` is not sufficient as a subscription can have this status and be past its term end date. To understand active subscriptions at a given date, use the following filter: `subscription_status = 'Active' AND  term_end_date > CURRENT_DATE`.

- When a subscription is updated (example: seat addtions or changes to subscription settings) a new subscription version number is created per term which is reflected in `dim_subscription_id` in [dim_subscription](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_subscription). To understand each unique subscription version per term, the grain of [dim_subscription](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_subscription) is `dim_subscription_id`,`subscription_name`, `term_start_date`, `term_end_date`

- [dim_subscription](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_subscription) reflects the latest greatest settings (example Cloud Licensing status) per subscription per term. To understand historical settings of subscriptions please refer to [dim_subscription_snapshot_model](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.dim_subscription_snapshot_model)

</details>
