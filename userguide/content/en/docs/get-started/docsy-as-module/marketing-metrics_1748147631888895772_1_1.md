---
title: "Marketing Metrics"
description: "We use Tableau to view and analyze our marketing metrics from multiple data sources."
---

## Marketing Metrics

Below are the definitions of our primary Marketing Metrics.

### Inquiry

An inquiry is a stage of the lead/contact objects in SFDC. GitLab defines inquiry as an Inbound request or response to [an outbound marketing effort](/handbook/marketing/marketing-operations/#lead-and-contact-statuses).

#### First Order Inquiries

Inquiries that are part of a parent account that has not made an order through GitLab are classified as first order inquiries. To find them, we join the account table to the person table on the inquiry's account ID. If the field `has_first_order_available` is true on the corresponding account object, the inquiry is first order. If the inquiry does not have an account associated with it, it is also first order.

#### Date of Inquiry

Finding when a person became an inquiry requires accounting for person records who skipped the inquiry stage. To do this take the lesser of `inquiry_date` and `inquiry_inferred_date`.

The logic for finding when a person became an inquiry is captured in the `true_inquiry_date` field. It should always be used to report inquiries unless you are looking for something specific.

#### Technical Definition

Any lead or contact with `Status != to Raw` and the first date between Inquiry Date and Inquiry Inferred.
Any lead or contact from the fct_crm_person table where `Status != to Raw` and `inquiry_date` or `inquiry_inferred_date` is not null.

Example Query, this will return a list of inquiries with the date they became an inquiry:

```sql
  SELECT
  dim_crm_person_id,
  sfdc_record_id,
  email_hash,
  inquiry_reporting_date
  FROM common_mart_marketing.mart_crm_person
  where
  lower(Status) != 'raw`
  and true_inquiry_date is not null
```

#### Source & Metric

An Inquiry is defined by records in the [Person Mart](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_person). To find the number of inquiries, take the unique count of `email_hash`

### MQL

A Marketing Qualified Lead (MQL) is a stage of the lead/contact objects in SFDC. GitLab defines an MQL as a person who is [Marketing Qualified through systematic means](/handbook/marketing/marketing-operations/#lead-and-contact-statuses).

#### First Order MQLs

MQLs that are part of a parent account that has not made an order through GitLab are classified as first-order MQLs. To find them, we join the account table to the person table on the MQL account ID. If the field `has_first_order_available` is true on the account, the MQL is first order. If the MQL does not have an account associated with it, it is also first order.

There is a set of fields that show information regarding the First Order (FO) status of a MQL:

1. `Is First Order Person` - this shows whether or not the record is currently a FO record
1. `FO Intial MQL` - this shows whether or not, at the time of the `Intitial MQL DateTime` (the first time the record MQL'd), the record was a FO record
1. `FO MQL` - this shows whether or not, at the time of the `MQL DateTime` (the most recent time the record MQL'd), the record was a FO record

#### Date of MQL

To find the date of when someone became an MQL, we use the date field from Marketo (`Marketo MQL DateTime` in SFDC). While this field is not stampted and can change if someone re-MQLs, it makes our reporting easier to understand, matches what Sales Development uses, and matches the data in Marketo.

While we use `Marketo MQL DateTime` for all our standard reporting, we are aware of some of the issues with using this field:

- MQL Dates can change if a person re-MQLs
- The MQL field will be blank for someone who skips the MQL stage

For circumstances where the cavacts above impact reports, we have created the MQL fields below:

| Field Label (SFDC)           | Field API Name           | Definition                                                                                                                              | Purpose and When to Use                                         |
|------------------------------|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------|
| Marketo MQL DateTime         | MQL_Date__c              | Set by Marketo when a record reaches the MQL Threshold.  Updates each time this happens.                                                 | Default when reporting on MQLs              |
| [Beta] MQL DateTime          | True_MQL_Date__c         | The true/reportable MQL Date for the most recent MQL of a record. Lesser of Marketo MQL DateTime and SFDC MQL DateTime                   | Current MQL Count/ When a record most recently MQL'd |
| Initial MQL DateTime         | True_Initial_MQL_Date__c | The true/reportable MQL Date for the first/initial MQL of a record. Lesser of Initial Marketo MQL DateTime and Initial SFDC MQL DateTime | When a record First MQL'd                            |
| Initial Marketo MQL DateTime | Initial_MQL_Date__c      | Set by Marketo when a record reaches the MQL Threshold. Stamped the first time this happens                                              | input metric - not needed for reporting              |
| Initial SFDC MQL DateTime    | Initial_MQL_DateTime__c  | Set by SFDC when a record skips the MQL Stage, Inquiry > Accepted for example. Stamped the first time this happens.                      | input metric - not needed for reporting              |
| SFDC MQL DateTime            | MQL_DateTime_Inferred__c | Set by SFDC when a record skips the MQL Stage, Inquiry > Accepted for example. Updates each time this happens.                           | input metric - not needed for reporting              |

#### Technical Definition

Any lead or contact from the [fct_crm_person](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_crm_person) table where the MQL latest or Inferred MQL date is not null.

This is captured in the [fct_crm_person](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_crm_person) table by the `is_mql = TRUE`.

Example Query, this will return a list of MQLs with the date they became an MQL:

```sql
  SELECT
  dim_crm_person.dim_crm_person_id,
  dim_crm_person.sfdc_record_id,
  Dim_crm_person.email_hash,
  collate(mql_date_latest_pt, inferred_mql_date_latest) as mql_date
  FROM mart_crm_person
  where
  is_mql = TRUE
```

#### Source

An MQL is defined by records in the [Person Mart](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_person).

### SAO

A Sales Accepted Opportunity (SAO) is an Opportunity that has reached the accepted stage, the criteria to accept or reject an opportunity is set by sales and defined in [their handbook](/handbook/sales/field-operations/gtm-resources/#criteria-for-sales-accepted-opportunity-sao).

#### First Order SAOs

SFDC stamps the order type on each SAO when it is created, meaning that each SAO knows its order type. The `order_type` field stores this information.
The logic for first-order SAOs is captured in the `is_new_logo_first_order` flag. It should always be used when querying for FO SAOs.

#### Date of SAO

To find the date the opportunity became an SAO, use the `sales_accepted_date` field.

#### Technical Definition

Any opportunity from the [fct_crm_opportunity](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_crm_opportunity#description) table where the stage_name is not `10-Duplicate` and `is_edu_oss` is 0, and the sales_accepted_date is not null.
These conditions are captured in the `is_sao` field on the fct_crm_opportunity table.

Example Query

```sql
SELECT
sales_accepted_date,
dim_crm_opportunity_id
FROM mart_crm_opportunity
WHERE
is_sao = TRUE
and is_new_logo_first_order = TRUE
```

#### Source

An SAO is defined by records in the [Opportunity Mart](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_opportunity).

#### Sisense Snippet

[​​rpt_crm_opportunity_accepted_period_sao](https://app.periscopedata.com/app/gitlab:safe-dashboard/view/rpt_crm_opportunity_accepted_period_sao/5ea9956269564639ac39d14beae7c945/edit)

### Closed Won Opportunity

A Closed Won Opportunity (CW) is an opportunity where the sales team won the deal.

#### First Order CW Opportunities

Because a closed-won deal is an opportunity, the order_type field stores the first order information.
When querying for First Order Closed Won, it's best to use the `is_new_logo_first_order` flag, this ensures that all our dashboards are using the same logic to find FO CW.

#### Date of Closed Deal

To find the date the opportunity closed, use the `close_date` field.

#### Finding Net ARR for an Opportunity

When reporting on the [Net ARR](/handbook/sales/sales-term-glossary/arr-in-practice/) of a closed deal, we need to ensure the deal will contribute to the company's Net ARR. To this, add the `is_net_arr_closed_deal` flag as true to the query.

#### Technical Definition

Any opportunity from the [fct_crm_opportunity](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.fct_crm_opportunity#description) table where the stage_name is not `10-Duplicate` and `is_edu_oss` is 0, and the `is_won` is true, and `is_closed` is true.

These conditions are captured in the `is_closed_won` field on the fct_crm_opportunity table. The `is_closed_won` field should always be used when querying for closed-won deals.

Example Query

```sql
SELECT
sales_accepted_date,
dim_crm_opportunity_id
FROM mart_crm_opportunity
WHERE
is_closed_won = TRUE
and is_new_logo_first_order = TRUE
and is_net_arr_closed_deal = TRUE
```

#### Source

A CW Opportunity is defined by records in the [Opportunity Mart](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_crm_opportunity).

Sisense Snippet: [rpt_crm_opportunity_closed_period_closed_won](https://app.periscopedata.com/app/gitlab:safe-dashboard/view/rpt_crm_opportunity_closed_period_closed_won/5e22f16719214a549899c36ffd8ff02c/edit)

### SaaS Trials

#### SaaS Trial Volume

GitLab counts the number of SaaS trial signups by counting the number of Inquiries in Salesforce with a lead source = 'SaaS Free Trial'.

#### Trial-to-Paid Conversion Metric

GitLab measures the Trial-to-Paid conversion rate by looking at the number of top-level group namespaces created for business use by time period, then finding the percent of those namespaces that became paying after 45 days from their trial start date.

We do not count every namespace trial. Instead, we only include those with the following criteria:

- Only trials considered [Valuable Signups](https://internal.gitlab.com/handbook/marketing/growth/growth/#valuable-signup-metric)
- First time going through the trial
- Top-level namespaces
- Non-GitLab company related namespaces.

##### Trial-to-Paid Dashboard

You can find the SSoT for the [Trial-to-Paid metric in Tableau](https://10az.online.tableau.com/#/site/gitlab/views/TrialNamespaceConversionRateCohorted/ThreeLines_1?:iid=1). This dashboard is the source of trial conversion metrics for Marketing in Key Reviews and other executive readouts. The dashboard cohorts the company trial conversion rate described above to 45 days, 30 days, and 90 days. While the 45-Day rate is the primary metrics we use for reporting, we've included the others as they give more context to decision-makers.

The dashboard creates the cohorts in the following way:

1. Find all trial records that meet the criteria above
1. Find the 30, 45, and 90 days from the start of the trial. These calculated dates define when the trial record enters into the 30, 45, and 90-day cohort
1. Create a row for each cohort above for each trial
1. Since many trials will not have reached any of the cohorts, they are hidden from the dashboard until they have aged at least 30 days
1. Add fiscal dates to datasource
1. Chart the percent of converted trial records by the cohort date

**Filters on the Dashboard:**
The dashboard has the following filters:
Date Grouping - This filter changes the resolution of the view, the data is calculated by date but can be presented from Week to Fiscal Year
Time Period - This filter selects which fiscal quarters are included in the dashboard view
Order Type - A filter limit to the view to persons in SFDC who are consider first order

You can see the code in [this file](https://gitlab.com/gitlab-com/marketing/marketing-strategy-performance/-/blob/master/ssot_code_base/cohorted_trial_conversions).

## Marketing Sisense Dashboards

In [Sisense](https://app.periscopedata.com/app/gitlab/403199/Welcome-Dashboard-%F0%9F%91%8B) there are mutlipe marketing metric dashboards. You can quickly find the current source of truth dashboards by referencing the `Marketing` topic within Sisense. There are 3 topics that marketing leverages:

1. `Marketing` - These are the actively maintained dashboards.
1. `Marketing-WIP` - These are the WIP dashboards. They can be viewed but are not reliable yet.
1. `Marketing-Archive` - These are the archived/old dashboards. They are not to make decisions off of and no longer supported.

Below you can find a few of the major dashboards in use and descriptions/links of/to them.

### Marketing sources

To help us improve our paid and organic campaigns, we split marketing activities out by source in to Inbound and Demand Generation related activity. Inbound and Demand Generation sources use the following Google Analytics mediums for our breakdown.

#### Inbound

- Organic
- Direct/none
- Non-paid social
- Referral

#### Demand Generation

- Display
- Paid Social
- Generic Paid Search
- Branded Paid Search

### Defining Conversion Rate

There are several ways we can use conversion rate optimization to improve marketing performance on GitLab web properties. To create a common, [MECEFU](/handbook/communication/#mecefu-terms) oriented definition for our teams we use the following formulas.

**Overall conversion rate**
We use the overall conversion rate to quickly measure the effectiveness of our marketing website. This measurement helps us establish a baseline for engagement and move to update CTAs and offers across our marketing website to improve our conversion motions. This is the formula we use to arrive at the overall conversion rate.

overall conversion rate = `goal conversion events on about.gitlab.com/total sessions on about.gitlab.com`

For example, in December 2020 there were 2,829,601 sessions across our Google Analytics profile, with 23,218 goal conversion events.

Our overall conversion rate in December 2020 was 0.82% (23,218/2,829,601).

**Offer specific conversion rate** (trial, demo, etc)
We use offer specific conversion rates to help us measure the effectiveness of pages with conversion events. This includes our trial page, demo, webcasts, resources, and other pages we use to convert visitors to inquiries. We use this formula to calculate the offer conversion rate.

offer conversion rate = `offer conversion/visits to offer pages`

Looking at December 2020 again, there were 7,226 `/demo/` pageviews with 600 `demo` conversion events.

Our demo conversion rate in December 2020 was 8.3% (600/7,226).

### Marketing Metrics Dashboard

The [Marketing Metrics Dashboard](https://app.periscopedata.com/app/gitlab/798262/TD---Marketing-Metrics) is the centralized hub of all major marketing metrics and [marketing KPIs](/handbook/marketing/performance-indicators/). It is an evergreen source of information brought in from Salesforce that is comprised of numerous individual graphs/charts and allows the viewer to quickly filter results using pre-defined filters on the dashboard itself.

### Marketing Attribution

The [Marketing Linear Attribution Dashboard](https://app.periscopedata.com/app/gitlab/556414/Marketing-Linear-Attribution) provides insight into the campaigns, channels, assets, forms and landing pages that drive our goals.

### Marketing trial sign up flow

We use a variety of methods and systems to collect leads and understand how people discover GitLab. This is a basic overview of these visitors move through marketing systems.
Note: The time delay between a record being added to SFDC and the time it takes to process in Marketo, get a score, and get pushed back to SFDC as a MQL causes a discrepancy between Inquiries and MQLs for trials on a given day or in a given month (when the trial occurs on the first/last day of the month) when viewed on the [Marketing Metrics Dashboard](https://app.periscopedata.com/app/gitlab/431555/Marketing-Metrics).

![Trial sign up flow](/images/handbook/marketing/marketing-operations/trial-sign-up-flow.png)

### Alternative Method for Account Demographics Fields on Leads

In Q3 FY23 we completed the first phase of creating an alternative method for supplementing our Account Demographics fields on SFDC leads. We started this project after noticing a large portion of our leads had `null` values in the Account Demographics fields for segment, geo, etc.

To address this, we created and validated two new alternative mappings to account demographics fields for Segment and Geo. We took a waterfall approach, by first using the Account Demographics fields if present, then falling back to data enrichment fields on the lead record. Below is the more detialed logic:

To find Segment the logic is as follows (`employee_bucket_segment_custom`):

- If Lean_Data_Matched_Account_Sales_Segment__c shows as pubsec, use it first; otherwise use Account Demographics
- If still null, use the ZoomInfo employee count
- If still null, use the manual input employee count

To find Geo the logic is as follows (`geo_custom`):
We used the [FY23 Territories Mapping File - SSoT](https://docs.google.com/spreadsheets/d/1gElhORjqraKDMQnWzApPelyP_vVa24tAOA85vb5f3Uc/edit#gid=1236326957) mapping doc to find how countries mapped to Geos across segments.

- If Account Demographics, use it
- Otherwise find the first non-null value from Zoominfo then Cognism
- Map the found country to a GEO via a hardcoded list.

This logic has been [added to DBT](https://gitlab-data.gitlab.io/analytics/#!/model/model.gitlab_snowflake.map_alternative_lead_demographics), and can be used in models as needed.

We have added new charts to the [Weekly Marketing Dashboard](https://app.periscopedata.com/app/gitlab:safe-intermediate-dashboard/965065/TD:-Weekly-Marketing-Metrics) with the alternative mappings while keeping the Account Demographics (original) version. We have also added tables to the [Integrated Marketing Dashboard](https://app.periscopedata.com/app/gitlab:safe-intermediate-dashboard/1061201/Draft:-Integrated-Marketing-v1), ensuring we left the original Account Demographics versions too.

## Filters on Marketing Dashboards

Filters are a native and integral piece of any dashboard! They allow you to quickly and easily isolate and filter your data based on pre-determined values and sets. They are of *no use* to anyone if we don't all know what a specific filter represents though! Here are the most common filters used on marketing dashboards, what data they pull from, and what they mean to you as the end-user!

### Date Filters

1. `Group_by_Time` - this groups the X-axis dates by the specified value - either Month, Quarter, or Year
1. Fiscal Year - this groups the X-axis dates (unless noted on the chart) by GitLab's [Fiscal Years](/handbook/finance/#fiscal-year)

### Salesforce Data Filters

All of these filters pull from the linked/specified field(s) from Salesforce. Notes will indicate when there are groupings used. As all of these pull directly from SFDC and are not cleaned (except for those specified as being bucketed/grouped, anomalies may occur when our data is not properly maintained in SFDC)

1. User Segment Name - this pulls from SoT for `Segment` for each object as shown below in the [Reporting Fields Source of Truth](/handbook/marketing/strategy-performance/marketing-metrics/#reporting-fields-source-of-truth) section.
1. Source Bucket - this pulls from the `Lead Source` for Leads/Contacts as shown below in the [Reporting Fields Source of Truth](/handbook/marketing/strategy-performance/marketing-metrics/#reporting-fields-source-of-truth) section. Note: these are grouped into **buckets** which, once updatd, will be displayed in a table below. This is considered the SoT for where a specific Lead/Contact came from/was sourced.
1. Sales Qualified Source - this pulls from the [Sales Qualified Source](https://gitlab.my.salesforce.com/00N6100000HZPjd?setupid=OpportunityFields) of the Opportunity. This is considered the SoT for where an Opportunity came from/was sourced.
1. Order Type - this pulls from the [Order Type](https://gitlab.my.salesforce.com/00N4M00000Ib8Ok?setupid=OpportunityFields) field on the Opportunity. It is used to define whether an Opportunity is `New First Order`, `New Connected`, etc.
1. User Region Name - Using the [Opportunity Owner's](https://gitlab.my.salesforce.com/_ui/common/config/field/StandardFieldAttributes/d?id=Owner&type=Opportunity&retURL=%2Fp%2Fsetup%2Flayout%2FLayoutFieldList%3Ftype%3DOpportunity%26setupid%3DOpportunityFields%26retURL%3D%252Fui%252Fsetup%252FSetup%253Fsetupid%253DOpportunity&_CONFIRMATIONTOKEN=VmpFPSxNakF5TVMwd05DMHhObFF4TnpveE56bzBPUzR5TURGYSxWQmZIWkc5eUh2TmFZdmtNbXhOeVBSLFl6UTNNekF5&setupid=OpportunityFields) `User Region`
1. User Geo Name - Using the [Opportunity Owner's](https://gitlab.my.salesforce.com/_ui/common/config/field/StandardFieldAttributes/d?id=Owner&type=Opportunity&retURL=%2Fp%2Fsetup%2Flayout%2FLayoutFieldList%3Ftype%3DOpportunity%26setupid%3DOpportunityFields%26retURL%3D%252Fui%252Fsetup%252FSetup%253Fsetupid%253DOpportunity&_CONFIRMATIONTOKEN=VmpFPSxNakF5TVMwd05DMHhObFF4TnpveE56bzBPUzR5TURGYSxWQmZIWkc5eUh2TmFZdmtNbXhOeVBSLFl6UTNNekF5&setupid=OpportunityFields) `User Geo`
1. User Area Name - Using the [Opportunity Owner's](https://gitlab.my.salesforce.com/_ui/common/config/field/StandardFieldAttributes/d?id=Owner&type=Opportunity&retURL=%2Fp%2Fsetup%2Flayout%2FLayoutFieldList%3Ftype%3DOpportunity%26setupid%3DOpportunityFields%26retURL%3D%252Fui%252Fsetup%252FSetup%253Fsetupid%253DOpportunity&_CONFIRMATIONTOKEN=VmpFPSxNakF5TVMwd05DMHhObFF4TnpveE56bzBPUzR5TURGYSxWQmZIWkc5eUh2TmFZdmtNbXhOeVBSLFl6UTNNekF5&setupid=OpportunityFields) `User Area`

### Lead Source Buckets

To give executives a better view of lead sources and showing where leads and contact are sourced from we created a bucketed feild. Its often refered to as `lead source buckets` in Sisense.

This grouping was first used in the [CMO Plan](https://app.periscopedata.com/app/gitlab:safe-dashboard/943559/WIP:-CMO-Plan)

Below is the table mapping for each lead source and its Source Bucket.

| Initial Source                                                                                                         | Source Bucket      |
|------------------------------------------------------------------------------------------------------------------------|--------------------|
| Advertisement                                                                                                          | paid demand gen    |
| AE Generated                                                                                                           | AE Generated       |
| CE Download                                                                                                            | product            |
| CE Usage Ping                                                                                                          | product            |
| Channel Qualified Lead                                                                                                 | partner marketing  |
| Clearbit                                                                                                               | SDR prospecting    |
| Conference                                                                                                             | paid demand gen    |
| CORE Check-Up                                                                                                          | product            |
| Datanyze                                                                                                               | SDR prospecting    |
| Demo                                                                                                                   | organic inbound    |
| DiscoverOrg                                                                                                            | SDR prospecting    |
| Drift                                                                                                                  | organic inbound    |
| Education                                                                                                              | organic inbound    |
| Email Request                                                                                                          | organic inbound    |
| Email Subscription                                                                                                     | organic inbound    |
| Employee Referral                                                                                                      | other              |
| Event Partner                                                                                                          | partner marketing  |
| Executive Roundtable                                                                                                   | paid demand gen    |
| Existing Client                                                                                                        | product            |
| External Referral                                                                                                      | product            |
| Field Event                                                                                                            | paid demand gen    |
| Gainsight                                                                                                              | product            |
| Gated Content                                                                                                          | organic inbound    |
| Gated Content -                                                                                                        | organic inbound    |
| Gated Content - Demo                                                                                                   | organic inbound    |
| Gated Content - eBook                                                                                                  | organic inbound    |
| Gated Content - General                                                                                                | organic inbound    |
| Gated Content - Report                                                                                                 | organic inbound    |
| Gated Content - Reports                                                                                                | organic inbound    |
| Gated Content - select one (you may NOT choose from an option other than these): whitepaper,report,video,eBook,general | organic inbound    |
| Gated Content - study                                                                                                  | organic inbound    |
| Gated Content - Video                                                                                                  | organic inbound    |
| Gated Content - webcast                                                                                                | organic inbound    |
| Gated Content - Whitepaper                                                                                             | organic inbound    |
| GitLab DataMart                                                                                                        | product            |
| GitLab Subscription Portal                                                                                             | product            |
| GitLab.com                                                                                                             | product            |
| hopin                                                                                                                  | paid demand gen    |
| Impartner                                                                                                              | partner marketing  |
| Investor                                                                                                               | organic inbound    |
| Leadware                                                                                                               | SDR prospecting    |
| LinkedIn                                                                                                               | SDR prospecting    |
| List - DB - GACoreUpsert - 20200706                                                                                    | SDR prospecting    |
| List - Demandbase - GACoreInsert - 20200706                                                                            | SDR prospecting    |
| List-2HCentric-DB-20200914                                                                                             | SDR prospecting    |
| Newsletter                                                                                                             | product            |
| OSS                                                                                                                    | organic inbound    |
| Other                                                                                                                  | other              |
| Owned Event                                                                                                            | paid demand gen    |
| Partner                                                                                                                | partner marketing  |
| Prof Serv Request                                                                                                      | organic inbound    |
| Promotion                                                                                                              | paid demand gen    |
| Prospecting                                                                                                            | SDR prospecting    |
| Prospecting - General                                                                                                  | SDR prospecting    |
| Prospecting - LeadIQ                                                                                                   | SDR prospecting    |
| Public Relations                                                                                                       | organic inbound    |
| Purchased List                                                                                                         | SDR prospecting    |
| Registered                                                                                                             | organic inbound    |
| Request - Contact                                                                                                      | organic inbound    |
| Request - Professional Services                                                                                        | organic inbound    |
| Request - Public Sector                                                                                                | organic inbound    |
| SDR Generated                                                                                                          | SDR prospecting    |
| Security Newsletter                                                                                                    | product            |
| Startup Application                                                                                                    | product            |
| Trial - Enterprise                                                                                                     | Trial - Enterprise |
| Trial - GitLab.com                                                                                                     | Trial - GitLab.com |
| Virtual Sponsorship                                                                                                    | paid demand gen    |
| Web                                                                                                                    | organic inbound    |
| Web Chat                                                                                                               | organic inbound    |
| Web Direct                                                                                                             | Web Direct         |
| Webcast                                                                                                                | paid demand gen    |
| Word of mouth                                                                                                          | organic inbound    |
| Workshop                                                                                                               | paid demand gen    |
| ZI-EMEA-MM-OutboundQ4-2020.08.19                                                                                       | SDR prospecting    |
| Zoominfo                                                                                                               | SDR prospecting    |

## Reporting Fields Source of Truth

This section captures and links the most often used fields in reporting so that anyone pulling a Salesforce report can and is using the correct fields and the same fields that are being used in Periscope reports/dashboards.

Note: There is a current transition to move towards the [Territory Success Planning fields](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/)

### Lead

1. [Lead Source](https://gitlab.my.salesforce.com/_ui/common/config/field/StandardFieldAttributes/d?id=LeadSource&type=Lead&retURL=%2Fp%2Fsetup%2Flayout%2FLayoutFieldList%3Ftype%3DLead%26setupid%3DLeadFields%26retURL%3D%252Fui%252Fsetup%252FSetup%253Fsetupid%253DLead&setupid=LeadFields)
1. [MQL Date](https://gitlab.my.salesforce.com/00N6100000CJuLB?setupid=LeadFields) - if this is blank, the record is *not* counted as a `MQL`
1. [Sales Segment](https://gitlab.my.salesforce.com/00N6100000HHdoa?setupid=LeadFields)

### Contact

1. [Lead Source](https://gitlab.my.salesforce.com/_ui/common/config/field/StandardFieldAttributes/d?id=LeadSource&type=Contact&retURL=%2Fp%2Fsetup%2Flayout%2FLayoutFieldList%3Ftype%3DContact%26setupid%3DContactFields%26retURL%3D%252Fui%252Fsetup%252FSetup%253Fsetupid%253DContact&setupid=ContactFields)
1. [MQL Date](https://gitlab.my.salesforce.com/00N4M00000IW0Jx?setupid=ContactFields) - if this is blank, the record is *not* counted as a `MQL`
1. Sales Segment - See the Account `Sales Segment` field.

### Account

1. `Sales Segment` - Using the [Account Owner's](https://gitlab.my.salesforce.com/_ui/common/config/field/StandardFieldAttributes/d?id=Owner&type=Account&retURL=%2Fp%2Fsetup%2Flayout%2FLayoutFieldList%3Ftype%3DAccount%26setupid%3DAccountFields%26retURL%3D%252Fui%252Fsetup%252FSetup%253Fsetupid%253DAccount&_CONFIRMATIONTOKEN=VmpFPSxNakF5TVMwd05DMHhOMVF4TlRveE5qb3dOaTQzTnpOYSxURnIyR3gyTDhNSWx5dWJmTW1ObUxGLFl6UTNNekF5&setupid=AccountFields) - `User Segment`

### Opportunity

1. [SDR/BDR](https://gitlab.my.salesforce.com/00N6100000I1Y02?setupid=OpportunityFields)
1. [Closed Date](https://gitlab.my.salesforce.com/_ui/common/config/field/StandardFieldAttributes/d?id=CloseDate&type=Opportunity&retURL=%2Fp%2Fsetup%2Flayout%2FLayoutFieldList%3Ftype%3DOpportunity%26setupid%3DOpportunityFields&setupid=OpportunityFields)
1. [Net ARR](https://gitlab.my.salesforce.com/00N4M00000Ib5n8?setupid=OpportunityFields)
1. [Lead Source](https://gitlab.my.salesforce.com/_ui/common/config/field/StandardFieldAttributes/d?id=LeadSource&type=Opportunity&retURL=%2Fp%2Fsetup%2Flayout%2FLayoutFieldList%3Ftype%3DOpportunity%26setupid%3DOpportunityFields%26retURL%3D%252Fui%252Fsetup%252FSetup%253Fsetupid%253DOpportunity&setupid=OpportunityFields)
1. [Sales Accepted Date](https://gitlab.my.salesforce.com/00N6100000HmPaK?setupid=OpportunityFields)
1. [Sales Qualified Source](https://gitlab.my.salesforce.com/00N6100000HZPjd?setupid=OpportunityFields)
1. [Stage Name](https://gitlab.my.salesforce.com/_ui/common/config/field/StandardFieldAttributes/d?id=StageName&type=Opportunity&retURL=%2Fp%2Fsetup%2Flayout%2FLayoutFieldList%3Ftype%3DOpportunity%26setupid%3DOpportunityFields%26retURL%3D%252Fui%252Fsetup%252FSetup%253Fsetupid%253DOpportunity&setupid=OpportunityFields)
1. [Order Type](https://gitlab.my.salesforce.com/00N4M00000Ib8Ok?setupid=OpportunityFields)

## Dashboard Review Videos

### Marketing Metrics

[Marketing Metrics](https://app.periscopedata.com/app/gitlab/798262/TD---Marketing-Metrics)

<iframe width="560" height="315" src="https://www.youtube.com/embed/7cT_IsyWrus" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### SDR Metrics

[SDR Metrics](https://app.periscopedata.com/app/gitlab/641469/SDR-Metrics)

[Video Walkthrough](https://www.youtube.com/watch?v=ygeZvKvU9uc) (Private Video)

## Useful things to know when it comes to Sisense vs. SFDC data

Given the way that our systems are connected and synched, you may see a discrepancy in the data within Sisense vs. Sales Force.com. A few things to note:

1. Opportunity amount will be updated immediately within sales force, but will NOT show up in Sisense until the next day, as our data synchs overnight.
1. There is about a 7 hour time difference between Sisense and SFDC, so this time lag can also create discrepancies as well.

## Field Marketing Metrics

This section will go into specifics on the workflow for a Field Marketer to check their results.

At the highest level, Field Marketing is responsible for helping to progress MQLs and influencing pipeline. Those MQLs will ultimately create [Sales Accepted Opportunities](/handbook/sales/field-operations/gtm-resources/#opportunities) by the Sales Development team.

Field Marketing also has an 10X spend to pipeline goal. So if the company gives us $1, we need to give $10 in pipeline back.

### The Field Marketing Dashboard

Our FMM Dashboard lives in the SAFE space within Tableau and provides an overview on the performance of the Field Marketing programs.

- [TD Campaigns Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DraftTDCampaigns-L2RInteractions/CampaignDrillDown)

### Useful Links

This section provides links to relevant reports that may live outside of the Field Marketing Dashboard.

- [SAOs accepted by last touch = Field Marketing Campaigns](https://gitlab.my.salesforce.com/00O4M000004FYB0)
- [Sales Pipeline Report stages 1-3](https://gitlab.my.salesforce.com/00O4M000004aJh9)
- [Workshop attendance rates](https://gitlab.my.salesforce.com/00O4M000004aXke) - note, if you want to see attendance rates by a different tactic, just modify the report!
- List of campaign members with Outreach stages listed - to help facilitate the FMM<>SDR convo on lead status follow-up. If you are a FMM reading this, then we suggest you add `Campaign Owner Name` to filter to your specific campaigns. Feel free to play around with the filters and save your own copy as well!
  - [AMER FMM Campaign Members](https://gitlab.my.salesforce.com/00O4M000004aNoL)
  - [APAC FMM Campaign Members](https://gitlab.my.salesforce.com/00O4M000004aQLL)
  - [EMEA FMM Campaign Members](https://gitlab.my.salesforce.com/00O4M000004aQLV)
- [FY23 SFDC reporting fields](https://gitlab.com/groups/gitlab-com/sales-team/field-operations/-/epics/100#important-fields-for-fy23-reporting)

### How to track the ROI of your Digital Tactics

#### 3rd Party digital agency

In order to track engagement for any work we do with on the digital side of the house, a campaign UTM code will be created. For more information on UTM's at GitLab [can be found here](/handbook/marketing/integrated-marketing/digital-strategy/digital-strategy-management/#utm-tracking).

You will follow this process when you are working with our 3rd party digital agency to serve your target audience ads/LinkedIn InMails.

At the highest level, it's interesting to see the spend, clicks, impressions, CPC (cost per click), inquiries, and CPI (cost per inquiry). This is done by going to the Field Marketing Specific digital spend Dashboard via our digital team, linked in the `Useful Links` section and searching for your campaign using the campaigns UTM code. Here is the report as well, because we know sometimes you just want the link in the exact place you are looking for it in ;) . [WW SFDC Field Marketing Digital Report](https://gitlab.my.salesforce.com/00O4M000004aA0V)

Inquiries (people who end up registering for your event or engaging with your ad) are the most important to look into and really the status of them attending your event or interacting with your campaign, eventually leading to an SAO and then pipeline!

If you were driving people to register for something, then hop over to your SFDC campaign. Then go down to the `Custom Links` section and click on the `View All Campaign Members` report.

You'll then want to sort by `Ad Campaign Name (FT)`, which answers the question "What was the 1st touch ad this record interacted with?" and also the `Ad Campaign Name (LC)`, which answers the question "What ad created this lead?".

If you did not have a specific SFDC Campaign you were driving to, and you wanted to see the success of your campaign, then you would still refer to the [WW SFDC Field Marketing Digital Report](https://gitlab.my.salesforce.com/00O4M000004aA0V), add in your campaigns UTM there, using the filter `Ad Campaign Name` [contains] and add your UTM.

Please note that whilst you can track leads via SFDC campaigns or UTM reports, pipeline generated should be viewed in [Tableau](https://10az.online.tableau.com/#/site/gitlab/views/DraftTDCampaigns-L2RInteractions/Overview?:iid=2) only, as SFDCs last touch model is different from our multi touch attribution model.

## Channel Marketing Reporting

We track marketing influence on channel opportunies as well as deal regisiration impact from [Market Development Funds](/handbook/resellers/channel-program-guide/mdf/).

| Report Name                                    | Platform   | Description                                                                                                                                                                                                                                  | Link                                                                                                                                  |
| ---------------------------------------------- | ---------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Partner Lead Status                            | Tableau   | This dashboard shows the overview of the leads shared with partners via [Vartopia](/handbook/marketing/marketing-operations/vartopia/). This includes the Share Status by partners, partner leads, campaign and geo. | [🖇️](https://10az.online.tableau.com/#/site/gitlab/views/DraftPartnerMarketingv2/PartnerLeadsContacts?:iid=1)                             |
| Partner Sourced Opportunities                  | Tableau    | This dashboard shows the opportunities generated by Marketing campaigns.                                                                                                                                                                     | [🖇️](https://10az.online.tableau.com/#/site/gitlab/views/DraftPartnerMarketingv2/PartnerSourcedOpps?:iid=1)                  |
| Focus Partner Tech Capabilities                | Salesforce | This report shows all the focus partner and an overview of their company information.                                                                                                                                                        | [🖇️](https://gitlab.my.salesforce.com/00O8X00000963VI)                                                                               |
| Partner Marketing Trials Funnel - SaaS & Self Managed        | Tableau    | This dashboard shows an overview of all the SaaS & Self Managed free trial submissions by partners.                                                                                                                                                         | [🖇️](https://10az.online.tableau.com/#/site/gitlab/views/DraftPartnerMarketingv2/PartnerTrials?:iid=1) |
| Channel Partner Participation                  | Salesforce | This report captures an overview of [partner program offerings](/handbook/marketing/channel-marketing/#channel-partner-program-participation-overview) that partners are actively enrolled in.                       | [🖇️](https://gitlab.my.salesforce.com/00O8X00000963dq)                                                                               |
| Partner Recall Leads  & Contacts                        | Salesforce | This report captures the partner leads that have been recalled in the current FY.                                                                                                                                                            | [🖇️ Leads](https://gitlab.my.salesforce.com/00O8X000008muTH)  [🖇️ Contacts](https://gitlab.my.salesforce.com/00O8X000008muWG)                                                                        |
| MDF Funds Request with Funds Claim                       | Salesforce | This report captures a list of the current FY Funds Requests received and their respected. claims                                                                                                                                                            | [🖇️](https://gitlab.my.salesforce.com/00OPL0000002ILp)                                                                               |
| MDF Funds Request with Partner Account                       | Salesforce | This report captures a list of the current FY Funds Requests with Partner Account name filtered by status.                                                                                                                                                            | [🖇️](https://gitlab.my.salesforce.com/00OPL0000002IP3)                                                                               |
| Instant Marketing Campaigns Asset Report                       | Impartner | This report captures views, downloads, shares and cobrands of our Instant Marketing Campaigns and assets.                                                                                                                                                             | [🖇️](https://prod.impartner.live/en/s/channel-intel/dashboard/65e60883f43d1e0033b33d6e)                                                                               |

### Channel Marketing Tableau Dashboard

[This Tableau Dashboard](https://10az.online.tableau.com/#/site/gitlab/views/DraftPartnerMarketingv2/PartnerSourcedOpps?:iid=1) is the SSOT for Channel Marketing Reporting.

Under the `Partner Leads & Contacts` tab, there may be campaigns with Partner Share Status = `No Value`. This is the result of two reasons:

1. Distributor do not receive partner leads, so their status will show as `No Value`.
2. There may be a sync error, and the sync need to be attended. Create a [Marketing Operations issue](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new) for investigation.

#### SFDC Report Template - Records Passed to Partners

These reports are used as template for your reference. Please clone and modify the reports based on the campaign name you are wanting to dig into. Reminder that SFDC treats leads and contacts separetely, so you'll need both a leads and a contacts report to see full picture.

Note: You need to change the campaign name to the actual name of the campaign you're wanting this report for.

1. [Campaigns with Leads](https://gitlab.my.salesforce.com/00O4M000004enu7)
1. [Campaigns with Contacts](https://gitlab.my.salesforce.com/00O4M000004enuC)

#### Back up SFDC pipeline reports

We have 3 reports we use that shows different types of contribution to the GitLab channel program.

1. [FMM_DP_Channel_AllCampaigns](https://gitlab.my.salesforce.com/00O4M000004opQ0) - Field Marketing Deal Path = Channel. Field Marketing impact on all deal path = Channel. Includes MORE than just channel generated opps & regardless if a specific channel partner was directly involved with campaign.
1. [FMM_SQS_Channel_Generated](https://gitlab.my.salesforce.com/00O4M000004opqh) - Field Marketing Sales Qualified Source = Channel. FMM impact on Deal path = channel AND channel generated opps and regardless if a specific channel partner was directly involved with campaign.
1. [FMM CAMPAIGNS specific impact DP channel](https://gitlab.my.salesforce.com/00O4M000004opqr) - Field Marketing Campaigns impact to Deal Path = Channel.  Opp Deal path = Channel - Impact from FMM campaigns runs specifically with channel.

The above reports are Bizible attribution reports at the person level, you will need to understand how many unique opportunies are in your report. In order to do this, you will download the report from SFDC, and then upload into google sheets, then use the unique count formula (=countA(unique(B:B)),where counta = the bizible touchpoint ID & unique B = the name of the opportunity.

[Example SFDC report](https://gitlab.my.salesforce.com/00O4M000004opfA) and an [example google sheet](https://docs.google.com/spreadsheets/d/12vKuafod5__ORqv0bCGiasMr1ANPlzPUY_95RN6Pwr0/edit#gid=48544605&range=P1) with the forumla.

- [Records passed to partners](https://gitlab.my.salesforce.com/00O8X000008RSHg) - As part of our [campaigns we run jointly with channel partners](/handbook/marketing/marketing-operations/campaigns-and-programs/#joint-gitlab-and-partner-campaigns), we would like to understand the status of records we've passed to partners, this report give us that insight.

### Contribution to sales pipeline

This can be calculated by heading to the [Marketing Influenced Pipeline dashboard](https://10az.online.tableau.com/#/site/gitlab/views/MarketingInfluencedPipeline/MarketingInfluencedPipelineReview?:iid=2).

#### How to trouble shoot your ROI questions

If you have a quick 1 off question on reporting, then please feel free to ask the question in the #fieldmarketing slack channel.

If you have several questions or a more robust analysis of data you'd like help with, please open a [FMM leadership request](https://gitlab.com/gitlab-com/marketing/field-marketing/-/issues/new?issuable_template=leadership_request) and assign it to your manager. Your manager will review and will pull in the Director or other folks as needed.
