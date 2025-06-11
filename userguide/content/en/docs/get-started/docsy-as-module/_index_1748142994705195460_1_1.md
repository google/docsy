---
title: "Gainsight Administration"
description: "This page shows the data structure, integrations, and other technical information about how GitLab administers Gainsight."
---
<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Gainsight overview

[Gainsight](https://www.gainsight.com/) is a customer success software that our Customer Success Managers (CSMs) and Enterprise Sales team use in order to support our customers and manage their workflows. This page shows the data structure, integrations, and other technical information about how GitLab uses Gainsight. Gainsight is owned by CS Operations, and Sales Operations and Sales Systems play very active and important roles in its continual expansion and improvement.

## Gainsight support

All teams should use the `#gainsight-users` Slack Channel for questions or issues with Gainsight for quick attention. Customer Success Operations provides support for all Customer Success teams.

### Guidelines for CSOps teams assisting in addressing questions/concerns on the `#gainsight-users' channel

- For general Gainsight questions, start by exploring in system to see if you can find an obvious reason; some exaples include: simple setup questions, adding a filter or column to a report, straightforward reasons for a rule failing, etc.
- For product usage reporting questions, loop in the SME who can usually support/address the concerns directly; the product usage reporting SME can decide if / when to loop in other team member as needed. SME: @nk312
- For questions about Digital Customer Programs, please reach out to the SMEs: @mharris3 and @jgamboa;
- For questions about Scale programs, process, operations, please reach out to Scale SME: @rgorbanescu

### What items can be handled via channel vs. an issue

- Any questions that will take minimal amount of time to sort out (15-30 min) can be handled directly via the channel
- If troubleshooting time piles up, ask to have an issue created
- If the ask if for an enhancement, ie new process, changes to existing ones, feature request, etc - ask to have an issue created

For Sales teams, we use this escalation path:

1. Login problems (Tier 1 support) = Sales Ops
1. If Sales Ops diagnoses the issue to be more significant than login problems (Tier 2)
   - Updates to permissions/access bundles = CS Ops
   - Issues with rules, connectors, etc. that are not sales-specific = CS Ops
     - Example: issue with contact loading in SFDC
   - Issues with rules, connectors, etc. that are sales-specific
     - Example: processes that support account planning
     - Issue diagnosis and requirements collection = Sales Ops
     - Fixing issue = CS Ops

### Important old issues with resolutions

- [Duplicate records in `Instance Data` table](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/255)
- [Snowflake > Gainsight connector - known data issues](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/98)

## Account Classification Fields (FY24)

With some changes made in FY24, some fields used in Gainsight for account classification purposes have shifted. In order to align more with the Sales org, the same fields with the same naming conventions that are used in Salesforce are now being used in Gainsight.

### Fields no longer used in Gainsight

|Field                             | Description                                                                                                                                           |
|----------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|
| CSM Team                         | The team name of the CSM. This field is now exclusively used for comp and is no longer used in Gainsight.                                             |
| CSM Segment                      | The CS-defined segment. This was used in FY23 but no longer applies in FY24, so is no longer used in Gainsight                                        |
| Account Owner Team               | The team name of the Sales account owner on the account. This field is no longer used or maintained in Salesforce, and is no longer used in Gainsight.|

### Fields Used Now in Gainsight

|Field                             | Description                                                                                       | Example Values                    |
|----------------------------------|---------------------------------------------------------------------------------------------------|-----------------------------------|
| Sales Segment                    | The sales-determined segment based on employee count                                              | Large, Mid-Market, SMB, PubSec    |
| Account Demographics: Geo        | The general location in the world the account is located                                          | AMER, EMEA                        |
| Account Demographics: Region     | If applicable, a more specific location within a Geo                                              | WEST, DACH                        |
| Account Demographics: Business Unit | The type of business                                                                           | ENTG, COMM                        |
| Account Demographics: Role Type  | Which type of team will work with the account                                                     | MAJ, STR, KEY, TERR               |
| PubSec Type                      | Determines if an account is a PubSec account and where it is located in the world (US vs non-US)  | US-PubSec, ROW-PubSec             |

## Gainsight User Provisioning

See [Gainsight User Administration](/handbook/sales/field-operations/customer-success-operations/gainsight/gainsight-user-management).

## Gainsight data structure

Gainsight uses a series of standard and custom objects. Some objects/data closely mirrors others systems (such as Salesforce) while other objects are unique to Gainsight.

### Hierarchy

We use the account structure in Gainsight for hierarchy. There are also subscriptions under accounts.

### Standard objects

These are some notable standard/system objects in Gainsight:

| Object Name | Data Source | Description |
| --- | --- | --- |
| Company | Salesforce Account, manual inputs, calculations from inside Gainsight | Information about specific accounts. Mapping to Account object in Salesforce. Most used object. Where CSMs conduct their work. |
| User | Salesforce User object | Gainsight users, populated by the User object in Salesforce |
| Person/Company Person | Salesforce Contact object, manual inputs | Gainsight contacts, maps to Contact object in Salesforce |
| Scorecard object |  |  |
| Activity Timeline | Manual inputs in Gainsight |  |
| Call to Action | Rules engine, manually created |  |
| Success Plan | Rules engine, manually created |  |

<br>

### Custom objects

These are some notable custom objects that we have created in Gainsight:

| Object Name | Data Source | Description |
| --- | --- | --- |
| Customer Subscription | Salesforce Customer Subscription object |  |
| Gainsight Opportunity | Salesforce Opportunity object |  |
| Stage Adoption | Account Object (SFDC) |  |
| CSM History Tracking | Real time rule in Gainsight |  |
| Zendesk Tickets V2 | Zendesk Organization and Ticket objects |  |
| MonthlyMart SelfManaged Usage Data | Snowflake | All basic product usage from [Snowflake unioned dbt table](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_product_usage_paid_user_metrics_monthly).<br> This product has many records per instance. It should have one record per month per instance.<br> See how this was set up in [this video](https://gainsight.hubs.vidyard.com/watch/oMU8aPjpxK7azFDr87iFVt?). |
| Product Usage Metrics | Data Designer: MonthlyMart SelfManaged Usage Data <br> SaaS Usage Data | Calculated metrics (A/B = C) based on the MonthlyMart table. |
| Instance Data | Data Designer: MonthlyMart SelfManaged Usage Data | Updated rule is set to de-dupe the fetch from MonthlyMart data designer down to a single record for each UUID/Hostname/SFDC_AcctID combination.<br>  SSOT for which instances (self-managed) are Production or not.<br> This object allows CSMs to label the instance as one of the following:<br>  - Unknown (default) <br> - Production <br> - Non-production <br> - Obsolete <br> - Geo secondary mode  <br> This object has only one record per instance. |

<br>

### Data designer objects

- [Issue #276: GS Documentation - Review Data Designer designs and add descriptions](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/276)
- Defined in Google doc: [Gainsight Data Dictionary](https://docs.google.com/spreadsheets/d/1NxDPleVfKK1wnD0Cp8MdfWgGlUdMVdrK4WIIJKwyKMQ/edit?usp=sharing)

## Gainsight connectors and integrations

The [Gainsight connectors](https://support.gainsight.com/gainsight_nxt/Connectors) are the main way we pull data from other systems into Gainsight. We have connectors set up for the following external systems:

- Zendesk
- Snowflake
- Salesforce

### Zendesk connector

The Zendesk connector has one active job: `Zendesk Sync - Tickets`. This maps to the `Zendesk Tickets V2` custom object and runs daily.

Zendesk objects used in Connector job to load data to `Zendesk Ticket V2 MDA` object:

- Organizations
  - Contains general information about the organization/customer related to the ticket.
- Tickets
  - Contains data on specifics related to individual Zendesk tickets.
  - `Updated_at` field is used as the indicator for the timestamp of date closed or last modified.
- Users
  - User object contains data on both internal (GitLab agents) as well as external requester data (who submitted the ticket.)
- Closed Date
  - Zendesk does not provide a field for the closed date of the ticket. Instead, use `Updated_at` with a filter for `ticket status == closed`. This is based on the assumption that the last update on a ticket is its closure.

### Snowflake connector

More details in the Product Usage Data section.

At the time of writing, the Snowflake connector is only available to use in the Data Designer and in Adoption Explorer. You cannot see the jobs from the Connector 2.0 interface in Gainsight.

We are only using this in Data Designer. We pull product usage data from Snowflake in the `MonthlyMart SelfManaged Usage Data` object.

Username and password are saved in Jeff Beaumont's 1Password account. If you need to reset permissions, please ask him.

### Salesforce Connector

`Connectors` is used as one of the main import methods of data from Salesforce to Gainsight, and is a native integration that exists between the two systems. The connector is authenticated using a Gainsight Integration user in our Salesforce instance. More information in regards to the connector and how to set it up in the [Gainsight Knowledge Base](https://support.gainsight.com/gainsight_nxt/Connectors/CRM_Integrations/Salesforce_Connector).

`Connectors` is used between our Salesforce and Gainsight instances to sync these objects:

| Job Name               | SFDC Object           | Gainsight Object      |
| ---------------------- | --------------------- | --------------------- |
| SFDC Account Sync      | Account               | Company               |
| SFDC Opportunity Sync  | Opportunity           | Gainsight Opportunity |
| SFDC Contact Sync      | Contact               | Company Person        |
| SFDC Subscription Sync | Customer Subscription | Customer Subscription |
| SFDC User Sync         | User                  | User                  |

Note: The Upsert key for contacts is their email address. This is useful when it comes to the bi-directional sync of contacts that are created in Gainsight.

<details>
<summary markdown='span'>Gainsight to Salesforce fields and data types</summary>

|          Source Field (SFDC)         | Source Data Type |       Target Field (Gainsight)       |
|:------------------------------------:|:----------------:|:------------------------------------:|
| Account ID                           | id               | SFDC Account ID                      |
| Account Name                         | string           | Name                                 |
| Employees                            | int              | Employees                            |
| CARR (All Child Accounts)            | currency         | ARR (All Child Accounts)             |
| CARR (Total)                         | currency         | ARR (Total)                          |
| Federal Account                      | boolean          | Federal Account                      |
| Region/Sub-Region                    | string           | Region/Sub-Region                    |
| Account Description                  | textarea         | Description                          |
| Partner Account                      | boolean          | Is Partner?                          |
| Account Owner Team                   | string           | Account Owner Team                   |
| Count of Active Subscription Charges | double           | Count of Active Subscription Charges |
| Count of Active Subscriptions        | double           | Count of Active Subscriptions        |
| Customer Advisory Board (CAB)        | boolean          | Customer Advisory Board (CAB)        |
| Customer Slack Channel (Internal)    | string           | Customer Slack Channel               |
| Executive Sponsor                    | reference        | Executive Sponsor                    |
| Solutions Architect                  | reference        | Solutions Architect                  |
| Support Level                        | picklist         | Support Level                        |
| Industry                             | picklist         | Industry                             |
| Account Type                         | picklist         | Company Type                         |
| CARR (This Account)                  | currency         | ARR                                  |
| Sales Segment                        | string           | Sales Segment                        |
| Ultimate Parent Account ID           | string           | Ultimate Parent SFDC Account ID      |
| Executive Sponsor Program Status     | picklist         | Executive Sponsor Program Status     |
| Region                               | picklist         | Region                               |
| Is a Child Account                   | double           | Is a Child Account                   |
| Sub-Region                           | string           | Sub-Region                           |
| Account Phone                        | phone            | Phone                                |
| Customer Since                       | date             | Original Contract Date               |
| Next Renewal Date                    | date             | Renewal Date                         |
| License Utilization (%)              | percent          | License Utilization (Rules Engine)   |
| Products Purchased (This Account)    | textarea         | Subscription                         |
| Sub-Industry                         | picklist         | Sub-Industry                         |
| Zendesk Organization ID (ADMIN)      | string           | Zendeal Org ID                       |
| User ID                              | id               | Account Owner                        |
| Manage Tech                          | picklist         | Manage Tech                          |
| Manage Appetite for Replacement      | picklist         | Manage Appetite for Replacement      |
| Manage Contract End Date             | date             | Manage Contract End Date             |
| Billing City                         | string           | Billing City                         |
| Billing Country                      | string           | Billing Country                      |
| Billing State/Province               | string           | Billing State/Province               |
| Billing Street                       | textarea         | Billing Street                       |
| Billing Zip/Postal Code              | string           | Billing Postal Code                  |
| Number of Licenses (This Account)    | double           | Licensed User Count                  |
| Parent Account ID                    | id               | Parent Company                       |
| Customer Success Manager            | id               | CSM                                  |

</details>

### Gainsight rule chains

We have to supplement the data that is brought in through the connector to correctly display it within Gainsight and to coordinate bi-directional data syncs. The rules that exist in Gainsight are highlighted and shared to reflect their use in various Rule Chains in Gainsight.

<details>
<summary markdown='span'>Rule chain list</summary>

These rules are built out in order to correctly associate our accounts to one another to match our account hierarchy in Salesforce:

- Admin Daily - Load to Company
- Admin - Load Ultimate Parent Accounts
- Admin - Load Non-Customer Child Accounts
- Admin - Load Prospect Details to Company
- Admin - Set Company Status (Active/Inactive)
- Admin - Load Public Sector Flag
- Admin - Load Inactive Users (Permission Set Based)
- Admin - Load Onboarding Start Date to Company
- Admin - Load Onboarding End Date to Company
- Admin - Load First Engagement Date to Company
- Admin - Load Last Activity Date to Company
- Admin - Load Open Zendesk Ticket Count to Company
- Admin - License Utilization Calculation
- Admin - Delete UnMatch Records
- Admin - Load GS Contacts to SFDC
- SFDC RefEdge Reference Status

</details>

### Gainsight to Salesforce sync data

The following fields are pushed from Gainsight to their associated Salesforce field:

<details>
<summary markdown='span'>Gainsight to Salesforce data</summary>

| Source Object (Gainsight)        | Source Field (Gainsight)   | Target Object (Salesforce) | Target Field (Salesforce)          |
| -------------------------------- | -------------------------- | -------------------------- | ---------------------------------- |
| Company                          | Architecture Diagram Link  | Account                    | [GS] Architecture Diagram Link     |
| Company                          | Collaboration Project URL  | Account                    | GitLab Customer Success Project    |
| Company                          | Google Doc Notes           | Account                    | [GS] Google Doc Notes              |
| Company                          | Triage Issue URL           | Account                    | [GS] Triage Issue URL              |
| Company                          | Customer Slack Channel     | Account                    | Customer Slack Channel (Internal)  |
| Company                          | Geo?                       | Account                    | [GS] Geo?                          |
| Company                          | High Availability?         | Account                    | [GS] High Availability?            |
| Company                          | Stage Count                | Account                    | [GS] Stage Count                   |
| Company                          | Current Score --> Color    | Account                    | [GS] Health Score Hex code         |
| Company                          | First Value Date           | Account                    | [GS] First Value Date              |
| Company                          | CSM Prioritization         | Account                    | [GS] CSM Prioritization            |
| Company                          | Customer Conversion Source | Account                    | [GS] Customer Type                 |
| Company                          | Hosting                    | Account                    | [GS] Hosting                       |
| Company                          | Provider                   | Account                    | [GS] Provider                      |
| Unified Scorecard Fact - Company | CD Adoption                | Account                    | [GS] Health: CD                    |
| Unified Scorecard Fact - Company | CI Adoption                | Account                    | [GS] Health: CI                    |
| Unified Scorecard Fact - Company | DevSecOps Adoption         | Account                    | [GS] Health: DevSecOps             |
| Unified Scorecard Fact - Company | SCM Adoption               | Account                    | [GS] Health: SCM                   |
| Unified Scorecard Fact - Company | License Utilization        | Account                    | [GS] Health: License Utilization   |
| Unified Scorecard Fact - Company | Product Usage              | Account                    | [GS] Health: Overall Product Usage |
| Unified Scorecard Fact - Company | CSM Sentiment              | Account                    | [GS] CSM Sentiment                 |
| Company Person                   | Email Opt Out              | Contact                    | Email Opt Out                      |
| Company Person                   | Inactive Contact           | Contact                    | Inactive Contact                   |
| Company Person                   | GitLab Role                | Contact                    | Role                               |
| Company Person                   | Email                      | Contact                    | Email                              |
| Company Person                   | First Name                 | Contact                    | First Name                         |
| Company Person                   | Last Name                  | Contact                    | Last Name                          |
| Company Person                   | Title                      | Contact                    | Title                              |

</details>

To see the complete list of fields and objects that are synced back from Gainsight to Salesforce, see [Using Gainsight Data in SFDC](/handbook/customer-success/product-usage-data/using-gainsight-data-in-sfdc/).

## Gainsight rules engine

The [rules engine](https://support.gainsight.com/gainsight_nxt/03Rules_Engine) is the main automation tool in Gainsight, and allows us to do a variety of actions including bring in and/or send data to other systems, populate field values, create CTAs, set scores, and many others.

We have a team email address cs-ops@gitlab.com that we use for rule failure emails in Gainsight.

### CSM assignment push to SFDC

Gainsight is the single source of truth (SSoT) on this field (`CSM` often labeled as `CSM Name` in GS and `Customer Success Manager` in SFDC).

- This field is updated in Gainsight and synced one-way to Salesforce. It is locked in Salesforce so users are unable to update there.
- The update is done with a real-time rule called `Push CSM change to SFDC`. This is triggered any time the field changes, and any change should load to Salesforce within seconds. The rule uses the SFDC User ID found in the `CSM` field in Gainsight to push to the `Customer Success Manager` field in Salesforce.

### CSM History Tracking object

You can pull reports on when the CSM changed on an account with this object.

The `CSM Change Date Stamp` rule runs every time the `CSM` field changes in Gainsight, for any account. It loads some information to the `CSM History Tracking` object which includes:

- The old CSM name
- The new CSM name
- The timestamp when the `CSM` field was changed

A field on the `Company` object called `CSM First Assigned Date` was created based on the MIN date of the CSM Change Date Stamp per Account.

### Create Gainsight CTAs and success plans

We have several rules that create items in Gainsight such as CTAs and Success Plans. Some notable rules are:

- Assignment needed CTA
- Onboarding CTA
- Triggered when an opportunity is greater than $50k
- EBR cta
- ROI success plan

### Set score

All of the scorecard measures in Gainsight are set using rules.

Rules in place:

- Baseline rule
- Changes rule
- Blanks rule
- CSM sentiment
- Engagement
- ROI
- Data designers (null)

#### Rules to null scorecard measures

A rule exists to null Health Score Measures (ROI, Engagement, CSM Sentiment) for Non-CSM owned accounts, or when no CSM is assigned on accoun. The rule runs once per week on Monday.

### Admin Daily - Stage Adoption

These rules act as field rollups to calculate fields within Gainsight:

- Admin - Load Stage Counts to Company
- Admin - Load Aggregated Stage Adoption Data to MDA

## Deleting and Merging Old Records

When an account record is deleted or merged in Salesforce, the matching record in Gainsight is not automatically deleted/merged. In order to catch these records and clean them up in Gainsight we have some rules and reports to identify them.

### Rules

- `Admin - Mark old Account records to be Deleted/Merged`: this rule brings in a list of all accounts in Salesforce and a list of all accounts in Gainsight. It then compares the lists and retains only the accounts that exist in Gainsight but NOT in Salesforce. The rule also looks to see if the Gainsight record has any important information attached to it such as a CSM name, CTAs, Success Plans, or Timeline activities. If the Gainsight record does have these items, the boolean field `Merge?` is checked. If none of these items exist on the account, the field `Delete?` is checked. The account name will also be appended with either "TO BE MERGED NO LONGER IN SALESFORCE" or "TO BE DELETED NO LONGER IN SFDC."
  - The rules `Load to Company: Count CTAs`, `Load to Company: Count Success Plans`, and `Load to Company: Last Timeline Activity` all calculate information about the account that is then used in the `Admin - Mark old Account records to be Deleted/Merged` rule to determine if the account needs to be merged or deleted.

### Reports

The following reports are located on the CS Ops dashboard in Gainsight. They are also scheduled to be emailed to the CS Ops email address every Monday morning so that a member of the team can be reminded to review them weekly.

- `Accounts Flagged to Merge`: This report identifies accounts where the `Merged?` field is checked. The accounts that appear on this report need to be reviewed and merged with the correct account. This can be done in the Data Operations section in Gainsight by filtering to accounts where `Merge?` = Yes. More instructions on merging accounts in Gainsight can be found on the [Gainsight documentation website](https://support.gainsight.com/gainsight_nxt/02Data_Management/Managing_Data_in_Gainsight/Company_Merge).
- `Accounts Flagged to Delete`: This report identifies accounts where the `Delete?` field is checked. These accounts need to be deleted completely from Gainsight. This can be done in the Data Operations section in Gainsight by filtering to accounts where `Delete?` = Yes. More instructions on deleting accounts in Gainsight can be found on the [Gainsight documentation website](https://support.gainsight.com/gainsight_nxt/02Data_Management/Managing_Data_in_Gainsight/Data_Operations_-_Old#Delete_Records).

#### GS Admin quick tip on resetting dashboards

Some of our Gainsight users and champions have reported not being able to see new field, field values added to GS Dashboards. One known reason why that can happen is that Gainsight caches dashboards for quicker loading.  This includes both the state of the dashboard and the data in reports. When GS Admins make changes to dashboards, it is likely for users to still see the cached version of the dashboard (previous version).

In order to reset the cache, GS Admins can take one of the following actions:

1. Next to "Save Layout" click on the 3 dots and select "Clear State".  This will clear the cached state and the next time a user loads the dashboard, it will be the most recent version of the dashboard.
2. A GS admin can add and remove a filter to the dashboard.  The act of adding a filter automatically clears the state.

## Gainsight sync timing

Gainsight syncs any updates, new customer accounts, and more into Gainsight first before pushing information back to Salesforce.

| Rule | Rule Type | Time | Day Type |
|---|---|---|---|
| User, Company, and Company Person sync | Connector 2.0 | 12:00AM PST | Daily |
| Admin Daily - Load to Company | Gainsight Rules Engine | 3:00AM PST | Daily |
| Admin Daily - Stage Adoption | Gainsight Rules Engine | 3:30AM PST | Daily |
| Scorecard Rules | Gainsight Rules Engine | 4:00AM PST | Daily |
| CTAs - Daily | Gainsight Rules Engine | 4:30AM PST | Daily |
| Bi-directional Builds - Weekday | Gainsight Rules Engine | 5:00AM PST | Weekday |
| Push to SFDC - Weekday | Gainsight Rules Engine | 5:30AM PST | Weekday |
| Push to SFDC - Weekend | Weekend | 9:00AM PST | Weekend |
| Bi-directional Builds - Weekend | Weekend | 8:00AM PST | Weekend |

## Recommendations

Codification standards and naming conventions are to be used to clearly articulate how we organize our terminology

| Gainsight Feature                  | Admin Best Practice                                                                                                                                                                                                                                                                                                                                                                                                               | Example                                                                                                                                                                  |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Rules                              | The start of each rule should be named with its primary "action or purpose." Always make sure rules contain a clear description of purpose.<br><br>When creating new rules that are being built and not yet live, start the rule name with: STAGING so it is clear which rules are currently in the build process. These rules should be put into the STAGING folder and moved to their new applicable folder once they are live. | {Insert Name of CTA} Set Score: {Insert Name of Scorecard Measure} Load to {Object}: {Insert Name of Data Load Task}<br><br>Load to People: Load Contact Role from Oppty |
| Folders                            | Folders should be created for each type of Rule                                                                                                                                                                                                                                                                                                                                                                                   | (CTA Rules, Load to Object Rules, Set Score Rules, etc).                                                                                                                 |
| Rule Chains                        | Rules should be put into Rules chains when applicable for more efficient management and workflow.                                                                                                                                                                                                                                                                                                                                 | Group CTA rules into a CTA Rule Chain. Group Scorecard Rules into a Scorecard Rule Chain.                                                                                |
| Inactive Rules                     | For Inactive rules, if they will need to be referenced in the future for any reason, deactivate the rule and put it in a deprecated folder. For rules that will never need to be referenced or used in the future, delete the rule entirely to keep the instance clean and the # of inactive rules low.                                                                                                                           |                                                                                                                                                                          |
| Reports and Dashboards             | Report naming should be up to each admins own discretion to name it accordingly. Stay active on deleting reports that were created or cloned for testing purposes. Do not keep reports that are no longer needed.                                                                                                                                                                                                                 |                                                                                                                                                                          |
| Report Folders                     | The best naming convention for report folders is to name them by either who they are created for, or the general purpose of the reports;                                                                                                                                                                                                                                                                                          | C360 Reports TAM Reports Manager Reports Executive Reports                                                                                                               |
| Dashboards                         | Dashboards should be named to clearly indicate the purpose/meaning of the dashboard or the user profile/team the dashboard is created for.                                                                                                                                                                                                                                                                                        |                                                                                                                                                                          |
| Dashboard Folders                  | Creating Dashboard folders is often not necessary and can be repetitive. They are useful when your Gainsight instance is very large and there are a lot of different user profiles (TAM, Onboarding, CSM, etc). Remove any unused dashboards or dashboard folders, there is rarely a strong reason to keep deprecated dashboards.                                                                                                 |                                                                                                                                                                          |
| Data Model Improvements and Upkeep | When managing MDA data tables out of Data Management, always remove unused Data tables to limit technical debt. The only tables that should exist are those that are active or in staging. Always add descriptions to every custom MDA table. The description should clearly indicate what data resides in the table.                                                                                                             |                                                                                                                                                                          |
| Journey Orchestrator               | Remove old/unused templates as well as outdated programs that are no longer in use and analytics will not need to be referenced in the future. Create folders for different types of programs                                                                                                                                                                                                                                     | (Onboarding Programs, Adoption Programs, Retention Programs, Growth Programs)                                                                                            |
| Templates                          | For any templates used in Email Assist or Programs start all templates with                                                                                                                                                                                                                                                                                                                                                       | Email Assist: {Insert Template Name} or Email Program: {insert Template Name} Email # - subject Example: Email Onboarding Program: Email 1 - Intro to GitLab             |
| Email Template Folders             | Create email template folders that indicate the purpose of the email                                                                                                                                                                                                                                                                                                                                                              | Email Assist Templates Onboarding Templates Renewal Templates                                                                                                            |

## Rule title labeling

When creating rules, we add the following prefixes to rule titles for organization and clarity:

- STAGING: For any rules that are being tested/are not live/are not active or scheduled. Meant to be either deleted/deactivated or name-changed once done with testing.
- OTR: One-time run rules. These are used in specific situations such as loading historical data, clearing fields, etc. Should be deactivated after use.
- Load to SFDC: Rules that push data to Salesforce. Example: Load to SFDC - Account Attributes
- Load to Company/GS Object Name: Rules that update any Gainsight object. Example: Load to Company - Last Timeline Activity
- CTA
- Set Score

See more about labeling in [this issue](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/42).

<details>
<summary markdown='span'>Gainsight Rule Label Recommendations</summary>

| Gainsight Feature | Admin Recommendation | Example |
| --- | --- | --- |
| Rules | <ul><li>The start of each rule should be named with its primary "action or purpose."</li><li>Always make sure rules contain a clear description of purpose.</li><li>When creating new rules that are being built and not yet live, start the rule name with: STAGING so it is clear which rules are currently in the build process. These rules should be put into the STAGING folder and moved to their new applicable folder once they are live.</li></ul> | `{Insert Name of CTA}` Set Score: `{Insert Name of Scorecard Measure}` Load to `{Object}: {Insert Name of Data Load Task}` Load to People: Load Contact Role from Oppty |
| Folders | Folders should be created for each type of rule. | (CTA Rules, Load to Object Rules, Set Score Rules, etc). |
| Rules Chains | Rules should be put into rules chains when applicable for more efficient management and workflow. | Group CTA rules into a CTA Rule Chain. Group Scorecard Rules into a Scorecard Rule Chain. |
| Inactive Rules | <ul><li>For inactive rules, if they will need to be referenced in the future for any reason, deactivate the rule and put it in a deprecated folder.</li><li>For rules that will never need to be referenced or used in the future, delete the rule entirely to keep the instance clean and the # of inactive rules low.</li></ul> |  |
| Reports and Dashboards | <ul><li>Report naming should be up to each admins own discretion to name it accordingly.</li><li>Stay active on deleting reports that were created or cloned for testing purposes.</li><li>Do not keep reports that are no longer needed.</li></ul> |  |
| Report Folders | The best naming convention for report folders is to name them by either who they are created for, or the general purpose of the reports; | C360 Reports CSM Reports Manager Reports Executive Reports |
| Dashboards | Dashboards should be named to clearly indicate the purpose/meaning of the dashboard or the user profile/team the dashboard is created for. |  |
| Dashboard Folders | <ul><li>Creating Dashboard folders is often not necessary and can be repetitive. They are useful when your Gainsight instance is very large and there are a lot of different user profiles (Onboarding, CSM, etc).</li><li>Remove any unused dashboards or dashboard folders; there is rarely a strong reason to keep deprecated dashboards.</li></ul> |  |
| Data Model Improvements and Upkeep | <ul><li>When managing MDA data tables out of Data Management, always remove unused Data tables to limit technical debt. The only tables that should exist are those that are active or in staging.</li><li>Always add descriptions to every custom MDA table. The description should clearly indicate what data resides in the table.</li></ul> |  |
| Journey Orchestrator | <ul><li>Remove old/unused templates as well as outdated programs that are no longer in use and analytics will not need to be referenced in the future.</li><li>Create folders for different types of programs.</li></ul> | (Onboarding Programs, Adoption Programs, Retention Programs, Growth Programs) |
| Templates | For any templates used in Email Assist or Programs start all templates with | Email Assist: `{Insert Template Name}` or Email Program: `{insert Template Name}` Email # - subject Example: Email Onboarding Program: Email 1 - Intro to GitLab |
| Email Template Folders | Create email template folders that indicate the purpose of the email | Email Assist Templates Onboarding Templates Renewal Templates |

</details>

### Description recommendations

- Always add a rule description when creating rules.
- Link to the GitLab issue in the description: [Issue #275: GS Documentation - Review rule descriptions and titles](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/275)

## Gainsight Scorecards

We are currently using the following scorecard groups and measures:

| Group Name | Measure Name | Rules and Methodology |
| --- | --- | --- |
| Customer Outcomes | ROI |  |
| Customer Sentiment | CSM Sentiment |  |
|  | Engagement |  |
| Support Experience | Support Issues |  |
| Product Usage | License Usage |  |
|  | User Engagement |  |
|  | SCM Adoption |  |
|  | CI Adoption |  |
|  | DevSecOps Adoption |  |

<br>

## Product usage data in Gainsight

We bring in product usage data to Gainsight directly from Snowflake. We use a Data Designer project called `MonthlyMart SelfManager Usage Data`.

The Gainsight integration with Snowflake is still new, so we use a Data Designer project to import the data. Once Gainsight enhances the Snowflake connection we will be able to use a Connector job if needed.

(To be completed:)

- Identifiers explained and why we have multiple identifiers
- How instances roll up to account
- Different types of instances

### Troubleshooting tips

- If you see a null value in Gainsight, check Snowflake. If there are values in Snowflake and not Gainsight, try a Data Designer reset and report update.

### Explanation of redis, namespace_ids, and snowplow collection

The data team does not use Snowplow as a source for the new Automated Service Ping processes. Instead, they use clones of GitLab.com postgres and GitLab.com Redis counters.

Here are the four types of Service Ping we have:

1. Self-Managed Service Ping
1. Manual SaaS Service Ping
1. Automated SaaS Instance Service Ping
1. Automated SaaS Namespace Service Ping

The namespaces list used by SaaS Namespace Service Ping is driven by a clone of the GitLab namespaces table.

**Caveat**: Redis-sourced metrics (noted in the metric dictionary as either redis or redis_hll) are not yet available at the namespace level. For the time being, SaaS Namespace Service Ping will only have Postgres-sourced metrics (as of 2021-09-08).

### Data definitions

- [UUID](https://docs.gitlab.com/ee/api/usage_data.html#export-service-ping-sql-queries): originally intended as unique identifier
- `Hostname`: the url for the company's on-prem server (e.g., gitlab.gainsight.com)
- `Namespace id`: the GitLab-defined ID for namespaces (SaaS)
- `Namespace name`: the customer-defined name for their namespace. Note: many are listed as "BLOCKED" because of PII
- Metric definitions: https://metrics.gitlab.com/
- `Ping_date`: The specific date of the Service Ping (e.g., 2021-08-11 12:00). This is a weekly ping so the rows of data are updated with the latest ping values.
  - Use case: Use this field to see the exact date that the ping was sent.
- `Snapshot_month`: each row of data is tied to the snapshot month. The ping_date field will update the values in `Snapshot_month` for the current month.
  - Example: The monthly values (the fields) are updated on a weekly basis (Friday). Using July as an example, the ping date will update (July 1, July 8, July 15, July 22….) but the snapshot_month will remain 2021-07-01. When comparing July and August, you'll see the value as of July 31 (roughly) and August 7 (assuming 1 week off). Put differently, July and August may be very similar in numbers.
  - Use case: 99% of the time use `snapshot_month` vs. `ping_date`.
  - Reasons we wouldn't see snapshot month:
    - Canceled subscription (they canceled in May and, thus, stopped sending us data)
    - Data quality (something broke somewhere)
    - For self-managed, the customer disabled or blocked sending us data

### Product usage data flows

![Product Usage Data Flow Diagram](https://lucid.app/publicSegments/view/cba91861-d0aa-4f96-8848-56a2eec5798b/image.jpeg)

### Product usage mapping

GitLab customers will have an account and may have multiple subscriptions. Each subscription may have multiple instances, such as production or staging.

![Instance Mapping](https://lucid.app/publicSegments/view/74e7b4aa-6e71-4f60-83bb-6439c459358c/image.png)

In Gainsight there is a tri-level structure, so an account will have multiple instances related to it. While we have the subscription ID mapped so we can see which subscriptions have instances, the visualization in Gainsight is a one-to-many relationship (Account:instances).

### Journey Orchestrator Program Names

When the CS Ops team creates a new program in Journey Orchestrator, utilizing an easy-to-follow naming convention will allow other Gainsight Administrators to understand its context. Try to use the following order:

1. Issue # - Related issue number from the Customer Success Operations GitLab Project.
2. Segment - CSM/CSE or Sales Segment this JO Program affects.
3. Title - Description of the program's purpose or objective.
4. Region - The region/timezone this program is designed to serve.

The naming convention is as follows:

<strong>[Issue #] - Segment - Title (Region)</strong>

E.g., `1661 - Scale - CI Enablement  (APAC)`

From this program name, we are ble to quickly understand that it relates to Issue #1661, focuses on Scale segment customers in the Asia-Pacific region and is a CI Enablement program. Don't forget to add the program to your preferred folder!

## Snowflake tables

- [Monthly](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_product_usage_wave_1_3_metrics_monthly) metrics
- [Latest](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_product_usage_wave_1_3_metrics_latest) metrics
- [Self-managed and SaaS](https://dbt.gitlabdata.com/#!/model/model.gitlab_snowflake.mart_product_usage_paid_user_metrics_monthly)
