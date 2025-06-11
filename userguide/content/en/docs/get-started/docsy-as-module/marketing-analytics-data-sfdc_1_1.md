---
title: Marketing Analytics Data - SFDC Models
description: >-
  The SFDC Models grouping is used to designate models built from the Salesforce source objects. 
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Mart_crm_attribution_touchpoint

The Attribution Touchpoint mart is the consolidated repository of Marketo Measure’s (Bizible’s) Attribution Touchpoint data. An Attribution Touchpoint is a touchpoint associated with an Opportunity in SFDC. This mart allows you to analyze engagement by Opportunity and/or Account during the entire lifecycle of either. 

### Use Cases

1. Attributed ARR
1. Touchpoints during a given stage

### Key Fields

1. Attribution Touchpoint
   1. The record of engagement, captured through Bizible (Marketo Measure) that is associated with an Opportunity in SFDC. 
1. Net ARR
   1. Definition
1. Attribution Models
   1. [Bizible-defined](https://experienceleague.adobe.com/en/docs/marketo-measure/using/introduction-to-marketo-measure/overview-resources/marketo-measure-attribution-models)
   1. Linear
      1. An even distribution of weight/attribution split amongst every touchpoint related to the record. 
1. Is MGP Channel Based
   1. At least 2 unique marketing channel touchpoints for First Order and 3 unique marketing channel touchpoints for Growth opportunities, within a window of 365 days before Pipeline Created Date
1. Is MGP Opportunity
   1. Is MGP Channel Based = TRUE and Sales Qualified Source = SDR
1. Gitlab Model Weight
1. Time Decay Model Weight
1. Data Driven Model Weight
1. Touchpoint Sales Stage
   1. The Sales funnel stage the touchpoint occurred in. 
1. Is FMM Influenced
   1. Whether a given touchpoint is influenced by FMM effort. 
1. Is FMM Sourced
   1. Whether a given touchpoint is sourced by FMM effort. 

### Key Metrics

1. Attributed Weight
   1. The weight of a given touchpoint, based on which attribution model you are looking at. 
1. Attributed Net ARR
   1. The attributed net arr, based on which attribution model you are looking at. 

### Data Lineage

1. Data is sourced from SFDC and Bizible/Marketo Measure
1. The full lineage can be seen [here](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_attribution_touchpoint?g_v=1&g_i=%2Bmart_crm_attribution_touchpoint%2B)

### DBT Solution

The dbt solution generates a dimensional model from RAW source data. The exceptions are the following fields that are calculated based on business logic implemented within specific dbt models:

| Field                  | Business Logic   |
|------------------------|------------------|
| touchpoint_sales_stage | [Defined in model](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_attribution_touchpoint.sql#L114) |
| is_mgp_opportunity     | [Defined in model](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common/facts_sales_and_marketing/fct_crm_attribution_touchpoint.sql#L191) |
| is_fmm_influenced      | [Defined in model](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_attribution_touchpoint.sql#L322) |
| is_fmm_sourced         | [Defined in model](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_attribution_touchpoint.sql#L331) |

## Mart_crm_event

The SFDC Event mart is the organized and formatted consolidation of Event data from SFDC. Events are a form of Activity in SFDC, usually associated with meetings (digital or in-person). 

### Use Cases

1. Volume/timeline of Events in the Opportunity lifecycle
1. Efficacy of a given Event in progressing an Opportunity towards Closed Won. 

### Key Fields

1. sales_dev_rep_*
   1. The associated Sales Dev Rep and their Manager’s information from SFDC

### Key Metrics

1. Count of Events (`dim_crm_event_pk`)

### Data Lineage

1. Data is sourced from SFDC
1. The full lineage can be seen [here](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_event?g_v=1&g_i=%2Bmart_crm_event%2B)

### DBT Solution

The dbt solution generates a dimensional model from RAW source data. 

## Mart_crm_person

The seamless combination of SFDC Leads and Contacts into a consolidated Person object. This mart allows for quick and easy access to both SFDC objects in a single table. It also integrates information from Bizible/Marketo Measure, Marketo, and IDs from other GitLab Tech Stack sources. 

### Use Cases

1. Number of people in a given funnel stage
1. Progression of a given person record through the funnel
1. Conversion from one funnel stage to the next

### Key Fields

1. `Dim_crm_person_id` - the unique surrogate key for each person record

### Key Metrics

1. MQL Count
1. Inquiry Count
1. Inquiry to MQL Conversion

### Data Lineage

1. Data is sourced from SFDC
1. The full lineage can be seen [here](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_person?g_v=1&g_i=%2Bmart_crm_person%2B)

### DBT Solution

The dbt solution generates a dimensional model from RAW source data. The exceptions are the following fields that are calculated based on business logic implemented within specific dbt models:

| Field                     | Business Logic   |
|---------------------------|------------------|
| is_lead_source_trial      | [Defined in model](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_person.sql#L250) |
| is_abm_tier_inquiry       | [Defined in model](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common/facts_sales_and_marketing/fct_crm_person.sql#L420) |
| is_abm_tier_mql           | [Defined in model](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common/facts_sales_and_marketing/fct_crm_person.sql#L447) |
| person_first_country      | [Defined in model](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_prep/prep_crm_person.sql#L584) |
| is_exclude_from_reporting | [Defined in model](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_prep/prep_crm_person.sql#L608) |

## Mart_crm_tasks

The SFDC Tasks mart is the organized and formatted consolidation of Task data from SFDC. Tasks are usually notes from the Sales Dev or Sales team on actions taken or engagements that took place. 

### Use Cases

1. Volume/timeline of Tasks in the Opportunity lifecycle
1. Efficacy of a given Task in progressing an Opportunity towards Closed Won. 

### Key Fields

1. sales_dev_rep_*
   1. The associated Sales Dev Rep and their Manager’s information from SFDC

### Key Metrics

1. Count of Tasks (`dim_crm_task_pk`)

### DBT Lineage

1. Data is sourced from SFDC
1. The full lineage can be seen [here](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_task?g_v=1&g_i=%2Bmart_crm_task%2B)

### DBT Solution

The dbt solution generates a dimensional model from RAW source data. 

## Mart_crm_touchpoint

The Person/Buyer Touchpoint mart is the consolidated repository of Marketo Measure’s (Bizible’s) Person/Buyer Touchpoint data. A Person/Buyer Touchpoint is an engagement associated with a Person (Lead/Contact) based on the rules set by the organization for important/capturable engagements. 

### Use Cases

1. Touchpoints during a given stage
1. Touchpoints per record

### Key Fields

1. Buyer (Person) Touchpoint
   1. The record of engagement, captured through Bizible (Marketo Measure) that is associated with a Person (Lead/Contact) in SFDC. 
1. Attribution Models
   1. [Bizible-defined](https://experienceleague.adobe.com/en/docs/marketo-measure/using/introduction-to-marketo-measure/overview-resources/marketo-measure-attribution-models)
   1. Linear
      1. An even distribution of weight/attribution split amongst every touchpoint related to the record. 
1. Is FMM Influenced
   1. Whether a given touchpoint is influenced by FMM effort. 
1. Is FMM Sourced
   1. Whether a given touchpoint is sourced by FMM effort. 

### Key Metrics

1. Attributed Weight
   1. The weight of a given touchpoint, based on which attribution model you are looking at. 

### Data Lineage

1. Data is sourced from SFDC and Bizible/Marketo Measure
1. The full lineage can be seen [here](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_touchpoint?g_v=1&g_i=%2Bmart_crm_touchpoint%2B)

### DBT Solution

The dbt solution generates a dimensional model from RAW source data. The exceptions are the following fields that are calculated based on business logic implemented within specific dbt models:

| Field             | Business Logic   |
|-------------------|------------------|
| is_fmm_influenced | [Defined in model](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_attribution_touchpoint.sql#L311) |
| is_fmm_sourced    | [Defined in model](https://gitlab.com/gitlab-data/analytics/-/blob/master/transform/snowflake-dbt/models/common_mart_marketing/mart_crm_attribution_touchpoint.sql#L320) |
