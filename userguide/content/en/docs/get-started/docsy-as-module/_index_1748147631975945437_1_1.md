---
title: "Go to Market"
description: "Operations, Procedures, Documentation"
---

---

## Reaching the Teams (internally)

### Issues and Projects

- [Sales](https://gitlab.com/groups/gitlab-com/sales-team/-/issues) - general sales related needs & issues
- [Marketing](https://gitlab.com/groups/gitlab-com/marketing/-/issues) - all issues related to website, product, design, events, webcasts, lead routing, social media and Developer Relations
- [Customer Success SA Triage](https://gitlab.com/gitlab-com/customer-success/sa-triage-boards) - technical pre-sales requests
- [Requesting Internal Support in Salesforce](/handbook/sales/field-operations/requesting-internal-support/)
- [HelpLab](https://helplab.gitlab.systems/esc) (through Okta) - Salesforce bug fixes and feature requests (IT)

### Slack: A short list of the helpful Slack channels

- `#customer-success`
- `#sales-support`
- `#sdr_global`
- `#smb`
- `#mktgops`
- `#it_help`
- `#marketing_programs`
- `#marketing`
- `#community-programs`

## Glossary

| Term | Definition |
| ---- | ---------- |
| Accepted Lead | A lead a Business Development Rep or Sales Development Rep agrees to work until qualified in or qualified out |
| Account | An organization tracked in salesforce.com. An account can be a prospect, customer, former customer, integrator, reseller, or prospective reseller |
| AM | Account Manager |
| AE | Account Executive |
| APAC | Asia-Pacific |
| BDR | Business Development Representative |
| CAM | Channel Account Manager |
| CS | Customer Success |
| BDR | Business Development Represenative - focused on outbound |
| EMEA | Europe, Middle East and Africa |
| EULA | End User Licence Agreement |
| High intent | an event, webcast, demo that is a strong indicator of purchase or evaluation |
| Inquiry | an Inbound request or response to an outbound marketing effort |
| IQM | Initial Qualifying Meeting |
| LATAM | Latin America (includes all of Central & South America) |
| MQL | Marketo Qualified Lead - an inquiry that has been qualified through systematic means (e.g. through demographic/firmographic/behavior lead scoring) |
| MVC | [Minimal Valuable Change](/handbook/product/product-principles/#the-minimal-valuable-change-mvc) (not Model View Controller) |
| NCSA | North, Central, South America (legacy region being phased out) |
| NORAM | North America |
| Qualified Lead | A lead a Business Development Rep or Sales Development Rep has qualified, converted to an opportunity and assigned to a Sales Representative (Stage `0-Pending Acceptance`) |
| RD | Regional Director |
| ROW | Rest of World |
| SAE | Strategic Account Executive |
| Sales Admin | Sales Administrator |
| Sales Serve | A sales method where a quota bearing member of the sales team closes the deal |
| [SAO](/handbook/sales/field-operations/gtm-resources/#opportunities) | Sales Accepted Opportunity - an opportunity Sales agrees to pursue following an Initial Qualifying Meeting |
| SDR | Sales Development Representative - inbound focused |
| Self Serve | A sales method where a customer purchases online through our web store |
| SLA | Service Level Agreement |
| SQO | Sales Qualified Opportunity |
| CSM | Customer Success Manager |
| TEDD | Technology, Engineering, Development and Design - used to estimate the maximum potential users of GitLab at a company |
| UPA | Ultimate Parent Account |
| Won Opportunity | Contract signed to Purchase GitLab |

## Customer Lifecycle

A customer lifecycle is a term used to track the different milestones prospective customers go through as they learn about GitLab and interact with our sales and marketing teams.
Each subsequent milestone is a subset of the previous milestone, and represents a progression from not knowing GitLab to being a customer (and fan) of GitLab.

At the highest level of abstraction, we use the terms `lead`, `opportunity`, and `customer` to represent a person's progression towards becoming a customer of GitLab.
Those three terms also correspond to record types in salesforce.com.

Lead => Opportunity => Customer

Please see below for a high-level overview of the Customer Lifecycle at GitLab. This lifecycle is created through the lens of Salesforce data, and it is cross-functional - covering inputs from Sales, Marketing, and Finance.

![Customer Lifecycle Flowchart](/images/handbook/sales/customer-lifecycle.jpeg)

In addition, these are the more granular steps within the above milestones that are used to track the above process with more precision.
They are tracked as follows:

| Funnel stage | Record Type | Status or Stage |
| ------------ | ----------- | --------------- |
| Raw | Lead or Contact | Raw |
| Inquiry | Lead or Contact | Inquiry |
| Marketo Qualified Lead | Lead or Contact | MQL |
| Accepted Lead | Lead or Contact | Accepted |
| Qualifying | Lead or Contact | Qualifying |
| Qualified | Lead or Contact | Qualified (converted) |
| Pending Acceptance | Opportunity | 0 - Pending Acceptance |
| Sales Accepted Opportunity | Opportunity | 1 - Discovery |
| Sales Qualified Opportunity | Opportunity | 2 Scoping - 6 Awaiting Signature |
| Customer | Opportunity | Closed Won |

When going from Qualifying to Qualified Lead the lead is duplicated to an opportunity, and the lead is set to qualified and not being used anymore.

Lead or Contact: #lead--contact-statuses

Opportunity: #opportunity-stages

Sales Accepted Opportunity: #criteria-for-sales-accepted-opportunity-sao

## AE Sales Capacity

The following calculation is used to measure/plan for sales capacity.
This is a calculation only and should be used to set goals and plan.
Sales capacity is an individual metric that is based on several factors (lead source, tenure of salesperson, competitive landscape, geographic location, rep productivity) not included in the formula below:

- Days to close - 180 days
- Months to close - 6 months
- Win rate - 33%
- Months to lose - 3 months (half of months to close, expecting constant fallout)
- Months on average - 4 (33.3% times 6 and 66.7% of 3)
- Capacity Goal (active opportunities in [Stage 1-6](#customer-lifecycle)) - 40 opportunities
- [SCLAU](/handbook/sales/field-operations/gtm-resources/#glossary) per month - 10 (40 opportunities / 4 months)

## How Tos & Setup

### Events

Conferences, Field Events, Owned Events

Event details are owned by the Field Marketing Team with execution of system tracking, landing pages, reminders, and follow up completed by Marketing Program Managers.
See the [events handbook page](/handbook/marketing/events/) for more details.

### How to do Step 1 cleanup of lead lists before passing to MktgOPS

[List cleaning instructions](/handbook/marketing/marketing-operations/list-import/#import-cleaning-template---info-for-pre-mktgops-hand-off)

## Record Management

### MQL Definition and Scoring

A breakdown of MQLs and lead scoring can be found in the [marketing operations handbook](/handbook/marketing/marketing-operations/).

### Segmentation

Sales Segmentation is based on `Account Demographics: Max Family Employees`, which is the maximum of all `Account Demographics: Employee Count` values from the accounts within this hierarchy.

- The `Account Demographics: Employee Count` can differ from one account to another within a hierarchy, but the `Account Demographics: Max Family Employees` value will be the same for all accounts within a hierarchy.
- If the employee count is unknown or blank and manual research cannot confirm, Sales Operations will mark the account as `SMB` with a placeholder of `-1` employees in the  Number of Employees: Manual - Admin field in order to get a Territory to populate and assign the account to an account rep.

We use a hierarchy structure to determine what the number of employees is for the account.
The hierarchy of our data tools on *Accounts* as they relate to the `Account Demographic Max Family Employees` count is shown below.

1. Number of Employees: Manual - Admin
2. [ZI] Employees (ZoomInfo)

*LinkedIn/Websites are not designated data sources.*

 If a prospect communicates a different employee size from Zoominfo that conflicts with segmentation of what is determined by Zoominfo then SalesOPS should be notified via chatter on the record with documented proof from the prospect. Admins have the ability to override the Employees and bypass this hierarchy but only during our [sales segment review process](#sales-segment-and-hierarchy-review-process).

Mid-Market accounts can be managed either as a [MM Key Account or belong to a MM Territory AE](/handbook/sales/commercial/#mid-market-roles).

### Sales Segment and Hierarchy Review Process

In order to address issues when it is believed that the employee count, account address and/or account ownership is incorrect follow the [Sales Operations process](/handbook/sales/field-operations/sales-operations/#what-if-tsp-is-wrong-how-can-i-request-a-change) to have the `Account Demographics` fields updated and the account will be reviewed per the Rules of Engagement.

Provide the URL to validate the request. Examples of valid sources include but are not limited to financial filings, newspaper articles, reports directly from the company. During the Sales Ops review period it is at the discretion of the Sales Ops team to have the Total Employee count updated or to have it remain the same.

If the number of employees, according to our sources based on our hierarchy as described in Segmentation has changed, the Sales Ops team will automatically update the accounts segment and follow the [Rules of Engagement](/handbook/sales/field-operations/gtm-resources/rules-of-engagement/#account-ownership-rules-of-engagement) account review process.

### Territories

[Territory tables](/handbook/sales/territories/) are maintained within the Sales Handbook.
Both maps & written tables are kept up to date with all pairings and territory assignments.
Our Traction Complete routing workflows and SFDC reports are based on these tables.

The Location of each account used to determine its `Sales Territory` is determined by a combination of 3rd party data systems (Zoominfo,Zuora Billing Accouunts) and manual overrides. This address is stored in "Account Address (fka Billing Address)" on the Account object in SalesForce. This field inherits data from other fields in the following priority:

1. Admin Manual Override (if present)
1. Zoominfo
1. Zuora Billing Account

### Industries & Sub-Industries

GitLab recognizes the grouping of companies that are related based on their primary business activities in the following ways:

1. **Account Hierarchy Industry**
    - This [field](https://gitlab.my.salesforce.com/00N4M00000IWRVd?setupid=AccountFields) is the chosen industry value for an entire account hierarchy. It is the industry value that shows up on the most account records within the hierarchy.
    - All accounts within a hierarchy will share the same Account Hierarchy Industry value.
    - This field is used for account routing and for LAM calculations.
1. **Industry**
    - This is the account level of classification of industry
    - A list of GitLab's Industry values can be found [HERE](https://gitlab.my.salesforce.com/_ui/common/config/field/StandardFieldAttributes/d?id=Industry&type=Account)
1. **Sub-Industry**
    - Sub-Industry is a more granular/detailed classification of Industry.
    - A list of GitLab's Sub-Industry values can be found [HERE](https://gitlab.my.salesforce.com/00N6100000HIhad).  This list aligns with the industries used by DemandBase

The Industry and Sub-Industry of each account is determined by a combination of 3rd party data and manual overrides. The information is stored in the `Industry` and `Sub-Industry` fields on the Account object in SalesForce and inherit data in the following priority:

1. Admin Manual Override
1. Zoominfo mapping to `Industry` and `Sub-Industry`

**Industry & Sub-Industry Enrichment Cadence**

The Industry and Sub-Industry data on an Account is enriched and updated automatically on a daily cadence.

### Account Ranking for Enterprise Sales

Account Ranking in SFDC allows sales to focus and prioritize activities for their target customers, easily nominate or flag accounts for both marketing support and ABM campaigns. Account ranking would also be leveraged to drive discussions during QBRs.

In order to rank accounts each Enterprise Sales rep would update the 'Account Rank' field located in Account Rank Information section and can also add the Account Rank Notes. The Account rank should be added at the Ultimate Parent Account level and to not more than 50 Accounts.

[The Account Ranking Guide](https://docs.google.com/document/d/1u2Dg_jorRi_tgcC_2L-FjAmEqnMya76bvZ6WmAt4qGA/edit) can be used to help the Strategic Account Executive focus on a cadence to target each Account Rank.

#### Definitions for Enterprise Account Ranking

- **Rank 1** highest priority accounts that require both sales focus, sales development, and marketing support in the next quarter. These are the accounts reviewed in QBR's each quarter by sales and include both Land and Expand accounts.
- **Rank 2** accounts that match our ICP and should be a focus for sales and marketing in the current FY but are not a Rank 1 account. Should include both Land and Expand.
- **Rank 3** don't match our current ICP but are strategic for sales & GitLab in the region. Should include both Land and Expand

## Account Ranking for Commercial Sales

It is a requirement for the Commercial Sales Team to tier their accounts using the fields on the Account Object. This helps prioritize the accounts to go after when prospecting for new or expansion. Please see the [Account Ranking section of the Commercial Sales handbook](/handbook/sales/commercial/#account-ranking) for definitions specific to SMB and Mid-Market AEs.

### Account Ownership, Opportunity Ownership & Order Type Rules of Engagement

[Go to Market Rules of Engagement](/handbook/sales/field-operations/gtm-resources/rules-of-engagement/)

### Account Sources, Routing and Other Requirements

#### Website

Since an accounts `Website` is a key data point in determining [the accounts segment](#segmentation) and the accounts address and thus the resulting territory and ownership, the website on an account in salesforce is a required field on the layout.
In the event that the account is linked to an individual that uses a free email domain (or other similar cases) than the value of `[Blank]` should be used as the value for the accounts website.

#### Initial Source

A breakdown of `Initial Source` can be found in the [marketing operations handbook](/handbook/marketing/marketing-operations/#initial-source).

#### Lead & Contact Statuses

A breakdown of lead and contact statuses can be found in the [marketing operations handbook](/handbook/marketing/marketing-operations/#lead-and-contact-statuses).

#### Routing

Routing is determined by `Sales Segmentation`, `Region`, and `Global Account Ownership`. Routing through Lean Data when a record has no less than 30 points, this means that they have engaged with at least one piece of content or visited a high value page.

#### Routing & Traction Complete

**Traction** works within the Salesforce ecosystem and is the primary tool leveraged to manage all routing workflows.
The Marketing Operations team is responsible for ongoing management and customizations within Traction.
For more information see the [dedicated Traction Complete  page](/handbook/marketing/marketing-operations/traction-lead-complete).

#### Contact Requests

All `Contact Us` requests must be followed up within **one (1) business day** Service Level Agreement (SLA) and follow up must be tracked as an activity on the record within Salesforce.

U.S. Public Sector: Routed to the U.S. Public Sector Inside Sales team.

- [GitLab Public Sector Rules of Engagement](/handbook/sales/public-sector/)

#### Professional Service Requests

`Professional Service Requests` are treated like a [`Contact Us` request](#contact-requests) and followed up within **one (1) business day** Service Level Agreement (SLA).
Follow up must be tracked as an activity on the record within SFDC.

Requests submitted through the professional services page will be routed following `Global Account Ownership` rules.
Notification of form submission will be sent to the Strategic Account Executive (SAE) and Sales Development Representative (SDR) as well as Customer Success manager.
Initial response to form submission is the responsibility of the Account Owner (i.e. SAE).

#### Trial Requests

Trials can be requested through [web form](https://about.gitlab.com/free-trial/) or within product UI for both self-managed or SaaS.
Default trial length is thirty (30) days, but can be manually extended by the GitLab team for both the SaaS and self-managed products. Trial extensions for the SaaS product use the [`plan_change_request` issue](https://gitlab.com/gitlab-com/support/internal-requests/issues/new?issuable_template=plan_change_request) template found in the `dotcom` Group, `internal-requests` project.
Extending self-managed trials requires access to the internal `Licensing App`.

#### Universities

United States

- **Public** University = [Public Sector team](https://internal.gitlab.com/handbook/sales/public-sector/#us-state--local-government)
- **Private** University = [Public Sector team](https://internal.gitlab.com/handbook/sales/public-sector/#us-state--local-government)

Rest of the World

- **Any** University = appropriate regional Business Development Representative

#### Lead and Contact Record Ownership

Contact Ownership follows the rules as laid out below. Contact ownership cannot be updated as it is maintained by an [automated process in Salesforce](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/#contact-ownership) which means that the ownership will revert in the nightly run.

- Large Accounts
  - BDR (If present, otherwise AE)
  - If AE, should own all contact follow up then the BDR Prospecting Status needs to be in Restricted.
- MM Accounts (Sales Segment = MM)
  - Customer Accounts and BDR Prospecting Status not equal to Actively Working
    - AE, (Actively Working, BDR)
  - Non-Customer Accounts
    - BDR (If present otherwise AE)
- SMB Accounts (Sales Segment = SMB)
  - AE

AE's should use the following views to manage their contacts:

- [My MQLs](https://gitlab.my.salesforce.com/003?fcf=00B4M000004oZF7&rolodexIndex=-1&page=1)(showcases any contacts in your name that are in MQL status. You should move these to accepted when you're working them. Other statuses can be used to showcase you've seen the MQL and dispositioned accordingly. These should not stay in MQL status)
- [My Contacts w/ new LIM](https://gitlab.my.salesforce.com/003?fcf=00B4M000004taHN&rolodexIndex=-1&page=1)( showcases contacts in other statuses -not MQL - with a new Last Interesting Moment)
- [My Contacts in Qualifying](https://gitlab.my.salesforce.com/003?fcf=00B4M000004oZFC&rolodexIndex=-1&page=1)(showcases contacts who have been in sequence and then engaged, should help with follow up)

When an BDR is assigned to an Account to support and assist with outreach, the BDR will be added in the `BDR Assigned` lookup field to the account in Salesforce.
This field then populates down to the related Contact records.
Only BDR team members are able to edit the `BDR Assigned` field. They are enabled to mass update the BDR assigned field based on public account views, enablement and support from their manager.

Records, both `LEAD` and `CONTACT`, need to be synced to Outreach to ensure email activity is properly mapped back to `Activity History` in SFDC.
The owner of the record in SFDC **does not** need to match the owner in Outreach.

#### Record Ownership and Record Visibility

In order to meet compliance standards our SFDC instance uses a private model.
This private model allows for some records to be visible by all GitLab team members who use Salesforce, while other records may not be visible to them.
Currently this is in place as it pertains to records owned by the Public Sector team.
All salesforce records (leads, contacts, accounts, opportunities etc.) owned by the Public Sector team are only visibility to other members of the public sector team and a group of supporting staff who have been reviewed and permitted to view the these records.
All other records (owned by non-public sector team members) maintain their standard visibility levels.

This is important as it relates to inbound records or accounts in a sales reps name.
If you believe you have been incorrectly assigned a record that should belong to the public sector team member please coordinate with your manager, the sales-ops team or a member of the public sector team to review the record.

## Changing Ownership in Salesforce

### Changing Account Ownership in Salesforce

Only Sales Systems, Sales Operations and Channel Operations have the ability to change the account owner in Salesforce. This is to ensure that the Rules of Engagement are followed and to ensure that the account is assigned to the correct account owner based on Account Demographic outputs and parent/child association. If there is an issue with account assignment, follow the exception process outlined in the [Account Ownership Rules of Engagement](/handbook/sales/field-operations/gtm-resources/rules-of-engagement/#account-ownership-rules-of-engagement).

To request an update to the account owner, please tag @sales-support in Salesforce Chatter on the account record you are attempting to update.

- **Note**: Only approved Profiles (those noted above) will have the appropriate buttons on their layouts in SFDC to change owners. The buttons auto-select the correct default behaviors when clicked.

### Changing Opportunity Ownership in Salesforce

Only Sales Systems, Sales Operations, Channel Operations, Deal Desk, and Finance have the ability to change the opportunity owner in Salesforce. This is to ensure the Rules of Engagement are followed and opportunity assignment to the correct owner based on the corresponding Account Owner (see [Opportunity Ownership](/handbook/sales/field-operations/gtm-resources/rules-of-engagement/#opportunity-ownership-rules-of-engagement) for exceptions), Account Demographic outputs, parent/child association, and compensation plan. If there is an issue with opportunity assignment, follow the exception process outlined in the [Opportunity Ownership Rules of Engagement](/handbook/sales/field-operations/gtm-resources/rules-of-engagement/#opportunity-ownership-rules-of-engagement).

To request an update to the opportunity owner, please tag @sales-support in Salesforce Chatter on the opportunity record you are attempting to update.

- **Note**: Only approved Profiles (those noted above) will have the appropriate buttons on their layouts in SFDC to change owners. The buttons auto-select the correct default behaviors when clicked.

### Changing Contact Ownership in Salesforce

Contact Ownership follows the rules as laid out below. This contact ownership cannot be updated as it is maintained by an [automated process in Salesforce](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/#contact-ownership)

- Large Accounts
  - BDR (If present otherwise AE)
- MM & SMB Accounts
  - Customer Accounts
    - AE
  - Non-Customer Accounts
    - BDR (If present otherwise AE)

### Changing Lead Ownership in Salesforce

Lead ownership is set by Traction Complete due to specific rules based on lead status, segment and by region/territory which may include round robin. Lead ownership changes are based on role permissions. Currently a lead owner can change the lead to a new owner. If the lead is owned by a queue, ownership can be changed by all SDRs and BDRs but should only be done if activity is going to be immediately placed on the lead and should be done as part of a specific account strategy. SDR/BDR Team Leads as well as SDR/BDR Leadership have expanded privileges that allow them to change ownership of leads not owned by queues (ex. a lead owned by an incorrect BDR).

The majority of leads are owned by the related status queue or the sales development team.

### Default Ownership

- In the event that Ops encounters that there is not enough information to assign a record to a specific user in Salesforce it is to be assigned to the default user: [`Sales Admin`](https://gitlab.my.salesforce.com/00561000000mpHT?noredirect=1&isUserEntityOverride=1).
**This user should only be used by ADMINS. Non-Admins should not be reassigning records to this user**.
Before assigning to this user, admins should do their best to assign records to the actual users within Salesforce.
If you are unsure of who to assign it to please coordinate with the SalesOps Team.
This is also only a temporary solution until we have a more scalable solution in place that will reassign records to individuals who can and will actually be able to work records.

### Record Creation in Salesforce

ACCOUNT records in Salesforce are created in a number of ways - [list imports](/handbook/sales/field-operations/sales-operations/), [mass creation screen flows](#mass-create-contacts-on-opportunities-with-contact-roles), field event booth scans, research, networking, webcasts, content downloads.
Ideally all ACCOUNTS exist in Salesforce and team members are only creating CONTACT records; however, if a connection is made at an event and follow up needs to be done *prior* to official event list upload occurs team members should do the following:

- Search Salesforce to be sure ACCOUNT does not already exist **AND** search using the person's email address to ensure duplicate record is not created
- Record **does not** exist:
  - Create `Standard` ACCOUNT type - required fields are `Account Name` & `Account Type`
  - Create `Standard` CONTACT type - required fields are `Last Name`, `Account Name` (use lookup tool to find ACCOUNT just created) & `Initial Source` (i.e. where is this name coming from `Conference` = Field Event, `SDR Generated` or `AE Generated` = regular networking event, etc)
  - Be accurate where the name is collect from, `Unknown` is **not** acceptable.
  - The `Initial Source` on a CONTACT record *does not* equal `Source` on an opportunity. Refer to [`Initial Source`](#initial-source) for guidance on why this is important.
- Record **does** exist:
  - If LEAD or CONTACT is unowned or "owned by Sales Admin, James Harrison or Chad Malchow", this record is adoptable by anyone - change `Record Owner` to your name
  - If LEAD or CONTACT is owned by a Sales Development team member, **before** reaching out Chatter on the record asking BDR/SDR to transfer ownership. Ownership *must* be transferred **before** reaching out to avoid confusion, cross-communication and/or multiple people reaching out to same contact.

When official event list import is completed the created ACCOUNT or CONTACT record will be appended with the additional data collected at the event.
If there are any questions or you need assistance, please ping Marketing or Sales OPS in Slack `#sfdc-users` channel.

### Best practices

1. Be as accurate with your data as possible.
If you do not have a Contact `Phone` do not substitute the Account `Phone` - Leave it blank on the Contact record.
1. Search the database for duplicates before creating new records.
1. When merging records, retain the `Initial Source` of the record that was created first.

#### Mass create contacts on opportunities with contact roles

This process is specific for the unique cases of creating totally new contacts for an account that also have to be associated with an opportunity.
An example of when to use this process is when you meet a number of new contacts at an account during a demo for a specific opportunity.
The process to create these contacts for that account and to have them related with that opportunity would be through the steps listed below or as demonstrated in this [video](https://drive.google.com/file/d/1iEO4dQUAfa4tkbEmip1Xne7-9Tg2nR6h/view?usp=sharing):

1. Navigate to the Opportunity record in Salesforce that these contacts should be associated with
1. Click on the button `New Contacts & Opp Contact Roles`
1. Follow the screen flow and instructions for creating all contacts and associating them with the opportunity, providing all required and known information
1. If there is additional information for any of the contacts that you have but you were not able to input the information via the screen flow, navigate to the contact(s) once the operation is complete and fill in any additional information you have for the contact(s)

It is important to note that by following this process that all contacts must meet the following criteria:

1. All of the contacts that are created are to be associated with both the account and opportunity for that opportunity record.
1. All of the contacts are net new and do not exist within Salesforce already - as either contacts or leads.
1. All of the contacts will be assigned a contact role on the opportunity.
1. There already is a primary contact, or one of the new contacts will be the primary contact on the opportunity.

Territories are assigned based on [Sales Segmentation](#segmentation) and routing for each type of inbound request is [through Traction Complete](/handbook/marketing/marketing-operations/traction-lead-complete).

LEAD/CONTACT Records with the `Initial Source` of `GitLab.com` are **not** to be engaged, prospected or targeted unless they have taken a handraising 'active' activity, such as `Trial - Enterprise`, `Trial - GitLab.com`, `Contact Us`, `Demo`, 'Webcast', 'Content' and/or engaged in `Web Chat`.

For information about GitLab's email policy and the types and number of emails we send, please see our [Email Communication Policy](/handbook/marketing/marketing-operations/).

#### Active vs. Passive

`Initial Source` cannot be used to determine if a lead is 'active' or 'passive' since the Initial Source is set upon first touch attribution; therefore, looking at the `Last Interesting Moment` field is the primary field used to begin determining if a record is actively being worked.
Reviewing the `Activity History` in Salesforce is another factor considered when evaluating 'active' or 'passive'.

A LEAD or CONTACT is considered 'Active' if they have taken an `Trial - Enterprise`, `Trial - GitLab.com`, attended a high intent live webcast or demo and/or engaged `Web Chat`, these are all handraising 'active' activities.
These types of records are considered 'Active' for a minimum of 60 days from the date of the handraising activity.
For example: the record is considered 'Active' for entire duration of EE trial, plus 30 days after `EE Trial End Date`.

## Campaigns

Salesforce campaigns are used to track efforts of marketing tactics - field events, webcasts, content downloads, etc.
The campaign types align with how marketing tracks spend and align the way records are tracked across three of our core systems (Marketo, Salesforce and Bizible) for consistent tracking.
Leveraging campaign aligns our efforts across Marketing, Sales and Finance. For information on integrated campaigns (managed by Marketing Programs), please see the [Integrated Campaigns handbook page](/handbook/marketing/campaigns/) and to learn more about planned, in progress, and previously executed campaign tactics, please see the [Marketing Programs handbook page](/handbook/marketing/).

## Outreach & Tracking End of Availability Customers

To ensure that we're engaged with those customers who were a part of the Starter/Bronze End of Availability initiative, Sales is asked to track their outreach (and other engagements) in SFDC by way of activities.  Below are the steps to ensure we're capturing that activity:

**Process For Tracking EoA Customer Outreach:** You should follow your existing outreach cadence and tracking via SFDC activities.  However, for any/all outreach to EoA customers, you make two important updates in SFDC:

1. Enter the words "Starter", "Bronze" or "EoA" in some capacity in the Activity Comments
1. Update the `EoA Sentiment` field on the Account (red, yellow, green - defined in the help text)

**Reporting**:

- All EoA customers can now be tracked in SFDC leveraging the `FY22 On Starter/Bronze` field (if box is checked, they're an EoA customer).  A full list by segment, region and owner can be found [HERE](https://gitlab.my.salesforce.com/00O4M000004ajNm)
- EoA account list: https://gitlab.my.salesforce.com/00O4M000004ajNm
- EoA accounts with activity: https://gitlab.my.salesforce.com/00O4M000004ajpR

## System Set-up

### Marketo Programs

The Marketo programs for the corresponding campaign types have been prebuilt to include all the possible necessary smart campaigns, email programs, reminder emails and tokens that are to be leveraged in the building of the program.

You can find a breakdown of all Marketo program types and progression statuses in the [Marketing Operations handbook](/handbook/marketing/marketing-operations/)

### Reports and Dashboard Naming Convention

Naming convention for reports and dashboards will leverage sequence of periods (.) to help identify importance.

- . [Name of Report or Dashboard]
- **Example**:
  - . Sales Dashboards
  - .. APAC ENT Dashboards

## Opportunities

### Criteria for Inbound Sales Accepted Opportunity (SAO)

The following criteria are **required** for inbound SAOs:

1. An Opportunity is deemed a Sales Accepted Opportunity (SAO) when the Opportunity is moved from Stage `0-Pending Acceptance` to `1-Discovery` by the Strategic Account Executive.
1. SDRs do not input the Net ARR $ value, the Sales Opportunity owners do.
1. Required field settings to identify an SAO are:
     - The "SDR Sales Accepted Date" is defined
     - The "Is EDU/OSS Opportunity flag" is 'N'
     - Stage <> `10-Duplicate`

The following criteria is required for a SDR to submit an opportunity to sales:

**Authority**
The prospect being met is directly involved in a project or team related to the potential purchase of GitLab within this buying group, either as an evaluator, decision maker, technical buyer, or *influencer.
*If the "influencer" is not directly involved (i.e. is related to a "decision maker" in another group/division or someone who is not directly tied to the opportunity at hand) the SDR will continue to own the opportunity and will seek to set-up the next meeting with a key contact in the buying group (leaving 0-pending status until date/referral is confirmed), updating the current opportunity with the new directly-involved point of contact in the buying group once it's acquired.

**Initiative**
An initiative the company is working on has been identified and GitLab can potentially help the initiative.
Identified by either a business problem (i.e too many tools), strategic direction or modernization interest (impetus to change).

**Fit**
The following fields have been obtained:

- Current DevOps or software development lifecycle tools (from conversation or credible data source)
- Expected entry point use case (e.g. SCM or CI)
- Potential seats of the first opportunity (if this is a new account or buying group)

**Timing**
After the initial qualifying meeting with the account leader/executive, there must be a tangible next step scheduled with the prospect that is set to occur within a *60 day timeframe.
(*If next step isn't within a 60 day timeframe, the opportunity remains in stage 0 and in SDR ownership to nurture until the next step is actualized.)

***Sales Development best practice:***
Ask prospect about their environment, what they develop software for etc. to try build a picture of the company and how we will be able to help them.
Share relevant resources with the point of contact.
Add other potential influencers/buyers from that company into our database and the Outreach cadence in an effort to build more momentum within that organization.

***Before the IQM with the account leader/executive, the SDR will also aim to gather:***

- SaaS vs. Self Hosted
- Potential Future Seats in the Buying Group
- Total Seats Available Estimate at the company

***Post IQM:***
Opportunities in `1-Discovery` stage are accepted and owned by the account leader/executive.
The account leader/executive is responsible for the progression, activities, engaging other resources, and converting this early engagement to a mutual win.
The Sales account leader/excutive is responsible for taking the next step within 60 days, or reverting the opportunity back to SDR ownership or disqualifying the SAO if ultimately there is no opportunity.
Managers should be able to use the 'NEXT STEP DATE' field to determine if the IQM has taken place but opportunity has not been moved to new stage.
Opportunities should be moved to new stage within 48 hours of IQM.

### Criteria for Outbound Sales Accepted Opportunity (SAO)

The following criteria are **required** for outbound SAOs:

1. An Opportunity is deemed a Sales Accepted Opportunity (SAO) when the Opportunity is moved from Stage `0-Pending Acceptance` to `1-Discovery` by the Strategic Account Executive.
1. BDRs do not input the Net ARR $ value, the Sales Opportunity owners do.
1. Required field settings to identify an SAO are:
     - The "SDR Sales Accepted Date" is defined
     - The "Is EDU/OSS Opportunity flag" is 'N'
     - Stage <> `10-Duplicate`

The following criteria is required for a BDR to submit an outbound opportunity to sales:

**Internal Decision-Making Unit and Procurement Process**
The prospect should be able to indicate a clear path to the decision maker, and to be able to identify other evaluators, technical buyer, or influencer in the decision making unit.

**Identified Need**
An identified need in the company that is either actively worked on or not, identified by either a business problem (i.e too many tools), strategic direction or modernization interest (impetus to change).

**Fit**
The following fields have been obtained:

- Current DevOps or software development lifecycle tools (from conversation or credible data source)
- Expected entry point use case (e.g. SCM or CI)
- Potential seats of the first opportunity (if this is a new account or buying group)

**Timing**
After the initial qualifying meeting with the account leader/executive, there must be a tangible next step agreed upon with the prospect.

***Before the IQM with the account leader/executive, the BDR will also aim to gather:***

- SaaS vs. Self Hosted
- Potential Future Seats in the Buying Group
- Total Seats Available Estimate at the company

These should be an approximation based on research and not necessarily verified.

[Outbound BDR SAO Notes - Template](https://docs.google.com/document/d/1m5YBOCc--M1Iq5-SEEd2OUWDjYyc6VJ3xTsDEEqisUQ/edit)

***Post IQM:***
Opportunities in `1-Discovery` stage are accepted and owned by the account leader/executive.
The account leader/executive is responsible for the progression, activities, engaging other resources, and converting this early engagement to a mutual win.
The Sales account leader/excutive is responsible for taking the next step within 60 days, or reverting the opportunity back to BDR ownership or disqualifying the SAO if ultimately there is no opportunity.
Managers should be able to use the 'NEXT STEP DATE' field to determine if the IQM has taken place but opportunity has not been moved to new stage.
Opportunities should be moved to new stage within 48 hours of IQM.

### How to create an Opportunity

An OPPORTUNITY can be created in Salesforce a) when converting a LEAD to CONTACT; b) from a CONTACT.
**All opportunities** should be created with a Stage = `0-Pending Acceptance` regardless of how you create the OPPORTUNITY.
Once the initial setup is complete, the [OPPORTUNITY Stage](#opportunity-stages) can updated based on the criteria below.

#### Creating a New Business Opportunity from CONTACT record

1. On CONTACT record, click the `New Opportunity` button. Required fields are:
    - Opportunity Name - using [Opportunity Naming Convention](#opportunity-naming-convention)
    - Account Name = This should NOT need to be changed as it pulls from the CONTACT object
    - Type = `New Business`
    - Initial Source = DO NOT CHANGE
    - Close Date = if no time frame defined, **BDR** set close date rolling 9-months
    - Stage = `0-Pending Acceptance` - starting stage for ALL opportunities
    - Add as much detail on the OPPORTUNITY record as you can.
    - Click `SAVE`
1. Scroll down OPPORTUNITY record to the `Contact Roles` section, **click** `New`. CONTACTS associated to the ACCOUNT will be listed (up to 50 records). You must select a CONTACT as **Primary** and define the `Role`.
    - If you do not define a **Primary** CONTACT marketing attribution & activity influence on the OPPORTUNITY will not be accurately captured.
1. Change the OPPORTUNITY Owner to the `Account Owner` (i.e. SAE/AM). Click `Save`.
1. Within the OPPORTUNITY record, click the `Initial Qualifying Meeting` button. Enter the required fields (Start/End dates, Type) and update the description field with any notes the SAE/AM should have and review *before* taking the scheduled meeting.
    - Fill in the `Related to` section for BOTH the CONTACT and the OPPORTUNITY
    - Change the `Assigned to` field to the OPPORTUNITY owner
    - Click `Save`
1. Update the 'NEXT STEP DATE FIELD' with the date of the next action step (most often an IQM).
1. Enter in 'NEXT STEPS' with details that correlate to the NEXT STEP DATE FIELD.

#### Creating a New Business Opportunity from LEAD record

1. On LEAD record, fill out the required qualification questions, add additional notes to the optional sections, if gathered, AND update to `Lead Status` = `Qualified`. Click <b>`Save`</b>.
1. Click the `Convert` button:
    - Change `Record Owner` to the Account Owner (based on Rules of Engagement)
    - Check the "Send Email to the Owner" box
    - Lookup the correct `Account Name` (remove company suffix to avoid duplicates) - if unsure assign OPPORTUNITY to the "Parent" account
    - Opportunity Name - using [Opportunity Naming Convention](#opportunity-naming-convention)
    - Click `CONVERT`
        - If CONTACT record exists, associate converted LEAD to existing CONTACT. *Do not create duplicate if possible*
1. The OPPORTUNITY will need to be updated with the following:
    - Click `Edit`
    - Type = `New Business`
    - Initial Source = DO NOT CHANGE
    - Close Date = if no time frame defined, **SDR** set close date rolling 9-months
    - Add as much detail on the OPPORTUNITY record as you can.
    - Click `SAVE`
1. Scroll down OPPORTUNITY record to the `Contact Roles` section, the converted LEAD will automatically be set as **"Primary"**. Click `Edit` and define the `Role`.
    - Add any additional CONTACTS and define their `Role` that need to be associated with the OPPORTUNITY
    - Opportunities must have a **Primary** CONTACT defined so marketing attribution & activity influence is accurately captured.
    Change the OPPORTUNITY Owner to the `Account Owner` (i.e. SAE/AM). Click `Save`.
1. Within the OPPORTUNITY record, click the `Initial Qualifying Meeting` button. Enter the required fields (Start/End dates, Type) and update the description field with any notes the SAE/AM should have and review *before* taking the scheduled meeting.
    - Fill in the `Related to` section for BOTH the CONTACT and the OPPORTUNITY
    - Change the `Assigned to` field to the OPPORTUNITY owner
1. Update the 'NEXT STEP DATE FIELD' with the date of the next action step (most often an IQM).
1. Enter in 'NEXT STEPS' with details that correlate to the NEXT STEP DATE FIELD.

#### Creating an Add-on Opportunity

An `Add-On` OPPORTUNITY will inherit information from the *original* `New Business` OPPORTUNITY.
The steps to create an `Add-on` OPPORTUNITY varies slightly from the instructions above because this type of OPPORTUNITY is created from the `New Business` OPPORTUNITY **not** from a converted LEAD or CONTACT.

This creates a parent-child relationship between the *original* `New Business` OPPORTUNITY and the `Add-on` OPPORTUNITY.

1. Navigate to the *original* `New Business` OPPORTUNITY (this will become the "parent" opp).
    - Example: If you are selling additional seats to an existing subscription - you should go to the original `New Business` OPPORTUNITY.
1. Click the `New Add-on Opportunity` button.
1. **UPDATE** the OPPORTUNITY Name - see the [Opportunity Naming Convention] guidelines
1. Define:
   - `Initial Source` = see the [definition table](#initial-source) to choose the most correct source. It is important to be accurate as this does impact reporting and marketing attribution.
   - Close Date = if no timeframe defined input close date on a rolling 9-months.
   - Stage = All opportunities start as `0-Pending Acceptance`
1. Add any additional details on the OPPORTUNITY record
1. Click `Save`

Within the parent-child OPPORTUNITY hierarchy some information will pass from the parent (`New Business`) to the child (`Add-on`). This information will be used in our reporting and analysis to track add-on business OPPORTUNITIES to their `Initial Source` and contributing team members.

There are additional validation rules that are presently in effect:

- The **Parent** OPPORTUNITY must either be a `New Business` or `Renewal` OPPORTUNITY.
- A **Parent** OPPORTUNITY *cannot* be another `Add-on` OPPORTUNITY
- All sales-assisted non-portal `Add-on` OPPORTUNITIES **must** have a parent opportunity.

#### Creating an Upside ARR Opportunity

An `Upside ARR` OPPORTUNITY will inherit information from the *original* OPPORTUNITY.
The steps to create an `Upside ARR` OPPORTUNITY varies slightly from the instructions above because this type of OPPORTUNITY is created from the OPPORTUNITY **not** from a converted LEAD or CONTACT.
An `Upside ARR` OPPORTUNITY has a minimal amount of fields as it's only for tracking the potential upside amount.

This creates a parent-child relationship between the *original* OPPORTUNITY and the `Upside ARR` OPPORTUNITY.

1. Navigate to the *original* OPPORTUNITY (this will become the "parent" opp).
1. Click the `Upside ARR` button.
1. **UPDATE** the OPPORTUNITY Name - see the [Opportunity Naming Convention] guidelines
1. Define:
    - Opportunity Type should always be New Business
    - The Net ARR value of the Upside ARR opportunity should always be the delta between the Most Likely scenario (Main opportunity) and the best possible case .
    - The stage and forecast category will always be lower than the ones in the main opportunity
    - The close date of both opportunities will be the same
    - The Upside ARR record does not require Next Steps or Command Plan completion as this will be completed on the main record.
    - Once the main opportunity is Closed Won or Closed Lost, the Upside ARR record needs to be closed as Duplicate
1. Click `Save`

All final ARR (including any won upside ARR) will be attributed to the PARENT OPPORTUNITY.

#### Creating a Professional Services Opportunity

A `Professional Services` OPPORTUNITY will be used to cover any integration, consulting, training or other service that a Sales rep will sell to a prospect/client and needs or wants to be invoiced separately.
To invoice separately a new quote and opportunity must be created.

A full list of professional services can be found [here](about.gitlab.com/services/catalog).
See [Working with Professional Services](/handbook/customer-success/professional-services-engineering/working-with/) for workflow details.

##### Steps for creating a Professional Services opportunity in SFDC

*Here is [a video](https://gitlab.highspot.com/items/6655fc408e0d8cc5d7a7c166?lfrm=srp.0) explaining the below process.*

1. Navigate to the *original* OPPORTUNITY (this will become the "parent" opp). Note that this must be a standard license or subscription Opportunity.
1. Click the "Create Services Opportunity" button (in Lightning, this button is on the dropdown list in the top right of the page) and fill out the following:
   <!-- - OPPORTUNITY Name = will already be set correctly; do not change
   - Type = do not change it will populate from parent OPPORTUNITY
   - Initial Source = do not change it will populate from parent OPPORTUNITY
   - Close Date = if no timeframe defined input close date on a rolling 9-months.
   - Stage = All opportunities start as `0-Pending Acceptance`
   - Professional Services Value (ProServe Value) = enter dollar value, which is defined as the total value of all consulting, training, integration, or other professional services as outlined in the Statement of Work.
   - ACV = **do not populate** an automated workflow will fill this information
   - Amount = **do not populate** an automated workflow will fill this information
   - Professional Services Description, Project Scope, Task Schedule and Key Assumption fields = these will push to the Statement of Work when a PDF is generated from Zuora. -->
   - Close Date
   - Stage
   - Customer Folder URL (this will be auto-populated by a field **on the account object** that needs to be completed)
1. Click `Next` and you're done! A child Professional Services opportunity will be created once submitted. Also, all of the scoping issue, estimation spreadsheet and proposal template will be automatically created and cross-linked!
1. To create a quote, see the [Creating Quotes](/handbook/sales/field-operations/sales-operations/deal-desk/#quoting-professional-services) Deal Desk page.

#### How to Share an Opportunity

1. On the Opportunity record in SFDC that you want to share, navigate to the `Opportunity Teams` section and click the `Add` button.
1. Once there, add the User you want to share with, Team Role and Opportunity Access.
1. Save
1. Only the Opportunity Owner (or their manager(s)), will be able to add Opportunity Team members.

#### Tracking Sales Qualified Source in the Opportunity

Sales Qualified Source is dimension used when analyzing pipeline creation, lead conversion, sales cycles, and conversion rates.
Sales Qualified Source may be different from the Lead Source of an Opportunity, which captures the original source (event, campaign, etc).
For example, if a prospect originates from a trial (lead source), that prospect can be qualified by a SDR, Account Executive, Channel Partner, or the Web (sales qualified source).

The logic for the Sales Qualified Source is as follows:

1. If the Sales Development Representative field (Opportunity) is populated, regardless of opportunity owner, the Sales Qualified Source is "SDR Generated"
1. If the Sales Development Representative fields are NULL and the opportunity owner is:
   - a Regional Director, Account Executive, or Account Manager, the Sales Qualified Source is "AE Generated"
   - a GitLab team-member that is not a Regional Director, Account Executive, or Account Manager, the Sales Qualified Source is "Other"
   - an authorized reseller, the Sales Qualified Source is "Channel Generated"
   - the Sales Admin, the Sales Qualified Source is "Web Direct Generated"

#### Reseller Opportunities

Opportunities utilizing a reseller require slightly different data:

Lead/Contact:
The partner record should be converted to their company channel type account.
The end user record should be converted to the end user standard account type.

Opportunity Name:
If the partner is an authorized reseller, rename the opportunity with the partner's nickname in front, then a dash.
For instance; if it is a Perforce deal, the opportunity name should start with P4 - (whatever your opportunity name is)
This is important for the workflow that solicits updates from the reseller.

Account Name:
It is important that opportunities using a reseller are created on the END CUSTOMER's account, and not the reseller's account.
The account name on an opportunity is never a reseller.
Resellers do not buy licenses; they purchase them on the behalf of an end customer.
For instance, the account name field on an opportunity should never be SHI.

Opportunity Owner:
The AE/SAE/Channel Manager who is working the deal with the reseller

Deal Registrant:
The reseller who registered the deal.

Associating Contact Roles:
After creating the opportunity, click "New" in the contact section to associate contacts with the opportunity.

- The primary contact should always be a contact at the end user's account and not a contact at the reseller.
This is important as resellers come and go, and if we do not capture the contact at the end user account, we will not be able to sell to this account if the reseller ends their relationship with us or with the end account.
- A reseller contact (say, the sales rep at ReleaseTEAM) can, and should be added to the opportunity with the role of Influencer.
NOTE: A contact that works for a reseller should never be added to an end user account.
For instance an employee of SoftwareOne should be a contact of the SoftwareOne account only, and not the Boeing account.

Associating Partners to an Opportunity:
After creating the opportunity, click "New" in the Partners section to associate the reseller with the opportunity.

- You can associate multiple partners with an opportunity if there is more than one reseller involved in the opportunity.
This is not uncommon for government opportunities, or opportunities where the customer is asking multiple fulfillment houses (like SHI and SoftwareOne) to fulfill the order.
- Unofficial resellers should never be marked primary
- If there are any authorised resellers associated, at least 1 must be marked as primary
  - In order of precedence this would be:
    - The deal registrant (`Deal Registrar` field in SFDC, This should be confirmed with the appropriate channel manager)
    - The deal fulfiller (i.e.: The one issuing the PO)
    - The distributor

Opportunity Team List:
Add the reseller user to the Opportunity team list with the role of "Reseller" or else they cannot see the opportunity.

#### Opportunity Naming Convention

Opportunities for subscriptions will use the following guidelines:

- **New Business**: [Quantity]
  - [Name of Company]- [Quantity] [Edition]
  - Example: Acme, Inc- 50 Starter
- **Add-On Business (seats only)**:
  - [Name of Company]- Add [Quantity] [Product]
  - Example: Acme, Inc- Add 25 Starter
- **Add-On Business (Upgrade from Starter to Premium)**:
  - [Name of Company]- Upgrade to Ultimate
  - Example: Acme, Inc- Upgrade to Ultimate
- **Renewal Business (no changes)**:
  - [Name of Company]- [Quantity] [Product] Renewal [MM/YY]
  - Example: Acme, Inc- 50 Premium Renewal 01/17
- **Renewal Business + Add On Business (seats)**:
  - [Name of Company]- [Quantity] [Product] Renewal [MM/YY]+ Add [Quantity]
  - Example: Acme, Inc- 50 Premium Renewal 01/17 + Add 25
- **Renewal Business + Upgrade**:
  - [Name of Company]- [Quantity] Upgrade to Premium + Renewal [MM/YY]
  - Example: Acme, Inc- 50 Upgrade to Premium + Renewal 01/17
- **Professional Services**:
  - [Name of Company]- Professional Services [MM/YY]
  - Example: Acme, Inc- Professional Services 06/18
- **Refunds**:
  - [Original Opportunity Name] - REFUND
  - Example: Acme, Inc- 50 Upgrade to Premium + Renewal 01/17 - REFUND

#### Subscription Cancellation Policy

Customer subscriptions will be moved to cancelled no more than 30 days after the subscription term end date, and the related Renewal Opportunity will be moved to Closed Lost.

#### Opportunity Requirements for Returning Customers

- **Customers Returning within 180 Days of Subscription Term End Date**:
  - If a customer returns to purchase another GitLab subscription **within 180 days** of the previous subscription term end date, the transaction must be booked under a **Renewal Opportunity**, using a new subscription quote. In this scenario, the following actions should be taken:
    - **Sales**: A new renewal opportunity should be created, and Closed Won with the correct booking values.
    - **Deal Desk**: A second new renewal opportunity should be created, and Closed Lost, where Amount, Net ARR and ARR Basis represent the inverse of the same values on the original Closed Lost opportunity.
    - In this scenario, the Order Type 2.0 will be [3. Growth](/handbook/sales/sales-term-glossary/#growth-customers)
    - Example:

      ```markdown
      | **Opportunity** | **Stage** | **Net ARR** | **ARR Basis** | **ACV** |
      | --- | --- | --- | --- | --- |
      | New Business 2020| Closed Won | 100 | 0 | 100 |
      | Renewal 2021| Closed Won | 0 | 100 | 100 |
      | Renewal 2022 | Closed Lost | -100 | 100 | 100 |
      | Renewal 2022 | Closed Won | 0 | 100 | 100 |
      | Renewal 2022 | Closed Lost (Debook) | 100 | -100 | -100 |
      ```

- **Customers Returning More Than 180 Days After Subscription Term End Date**:
  - If a customer returns to purchase another GitLab subscription **more than 180 days** after the previous subscription term end date, the transaction must be booked under a **New Business Opportunity**.
    - In this scenario, the original Closed Lost opportunity will not be reversed and the Order Type will be [1. New - First Order](/handbook/sales/sales-term-glossary/#first-order-customers) or [2. New - Connected](/handbook/sales/sales-term-glossary/#connected-new-customers) based on the Account Family.

## Opportunity Types

There are three things that can be new or existing:

- Account (organization)
- Subscription (linked to a GitLab instance)
- Amount (dollars paid for the subscription)

That gives 4 types of opportunities:

1. **New account** (new account, new subscription, new amount): This type should be used for any new subscription who signs up either through the sales team or via the web portal.
Paid training also falls under this type if the organization does not have an enterprise license.
This should be marked as New Business.
1. **New subscription** (existing account, new subscription, new amount): If an existing account is purchasing a new license for another GitLab instance, this will be New Business.
1. **Add On Business** (existing account, existing subscription, new amount): This type should be used for any incremental/upsell business sold into an existing subscription division mid-term, meaning not at renewal.
This may be additional seats for their subscription or an upgrade to their plan.
If an existing account is adding a new subscription, this would be new business, not an add-on.
1. **Renewal** (existing subscription, existing subscription, existing amount): This type should be used for an existing account renewing their license with GitLab.
Renewals can have their value increased, decreased, or stay the same.
We capture incremental annual contract value growth/loss as a field in Salesforce.com.
Renewal business can be a negative amount if renewed at less than the previous dollars paid for the subscription (renewal rate).
Only the part that is more or less than the old amount is IACV, the rest is part of the renewal opportunity.

- In the event that the customer wants to reset their contract, this would be considered a renewal.
For example, a customer starts January 1st for 12 months, but wants to reset starting April 1st for another 12 month term.

**New business** is the combination of new account and new subscription

### Opportunity Stages

To help move sales through the sales process, [here](https://docs.google.com/document/d/1ag7YY9aJ93j0CRZb-DrbfgH3vmHprTEdjG7l3O57xEk/edit) is a list of questions to ask at each stage

**0-Pending Acceptance**: This is the initial stage once an opportunity is created.

- What to Complete in This Stage:
  - For BDR/SDR sourced opportunities, the opportunity meets [Sales Accepted Opportunity criteria](/handbook/sales/field-operations/gtm-resources/#opportunities).
  - The BDR/SDR has scheduled a call via Google Calendar, sent invites, created an event on the account object, named the event: GitLab Introductory Meeting - {{Account Name}}
  - The opportunity will populate the Stage 1 XDR Net ARR field with an estimate of the Net ARR value of this opportunity based on a per-Geo/Segment/deal type average and median.
  - Once it is confirmed that the opportunity meets our Sales Accepted Opportunity criteria, the SAE or AE should move the opportunity to the next stage and the `Amount` field must be populated with estimated pipeline. This will then populate the Stage 1 Net ARR field which will demonstrate Net ARR value of this opportunity as it crosses into Stage 1. The date the opportunity moves from this to the next stage in the sales cycle will populate the `Sales Accepted Date` field on the opportunity record.
  - If the details on the opportunity do not meet our Sales Accepted Opportunity criteria, the SAE or AE should move the opportunity to an `9-Unqualified` stage (this is the only time an opportunity can move into `9-Unqualified` stage)
  - All Opps that are sales assisted must first enter this stage before they can be moved further in the pipeline. If they do not enter this stage at some point you will encounter a validation rule error.
  - For renewal opportunities, `0-Pending Acceptance` is only to be used if the renewal is not being actively worked by the Account Executive/Strategic Account Executive.

**1-Discovery**: Uncover as much intelligence about the project as you can, which will be confirmed at later stages throughout the sales cycle.

- What to Complete in This Stage:
  - Begin filling out [MEDDPPICC](/handbook/sales/meddppicc/)
  - Send Plan Letter/Recap Email to Attendees- [Example](https://docs.google.com/document/d/16Gurj_MVREmKoqXTdB1F0OQ3eyq1gzbTNU8LNHHuoEM/edit)
  - Scheduled Scoping Call
  - Provide an estimate for the `Expected Number of Users` and the `Expected Product` for the Opportunity. This information is used to help the customer success team to predict their future workload as well as to help them with their hiring plans.
  - Should the opportunity progress from `1-Discovery` to the next stage (not 8-Closed Lost or 9-Duplicate), it will be considered a `Sales Qualified Opportunity`. The following values are entered once the opportunity progresses from this stage:
    - `Sales Qualified` is True.
    - `Sales Qualified Date` is the date the opportunity moves from this stage to the next open or won stage.
    - `Initial IACV` captures the value in the `Incremental ACV` field. `Initial IACV` is a snapshot field that will not change, even when the `Incremental ACV` field is updated and will be used for `Deal Size` analysis.

**2-Scoping**: Uncover business challenges/objectives, the competitive landscape, realizing fit.

- What to Complete in This Stage:
  - Complete a Demo (Optional)
  - Schedule a Technical Evaluation Call
  - Confirm and collect new [MEDDPPICC](/handbook/sales/meddppicc/) information.
  - Make adjustments to expected opp amount as this will impact the field Stage 3 Net ARR which popluates the Net ARR value of this opportunity as it crosses into Stage 3.

**3-Technical Evaluation**: Confirming technical requirements. A proof-of-concept (POC) might occur at this stage. This is also the stage to confirm information before a proposal is delivered.

- What to Complete in This Stage:
  - Enter POC Notes and POC Success Criteria (if applicable) and enter into the POC Notes and POC Success Criteria fields related to the opportunity.
  - Confirm *Technical Requirements, POC Scope*
  - Confirm *Technical Win/POC Success*
  - Confirm and collect new [MEDDPPICC](/handbook/sales/meddppicc/) information.

**4-Proposal**: Business and technical challenges and been uncovered and resolved. A proposal is drafted and delivered to the prospect.

- What to Complete in This Stage:
  - Confirm Bill to Information (who will receive the invoices), Sold to Information (who will receive the license key). You should also confirm whether or not the customer will issue a PO, and whether there is a vendor registration form required by the customer.
  - Deliver formal contract to the prospect with complete bill to and sold to information. Remember that quotes with incomplete or incorrect information will be rejected by Deal Desk.
  - An MSA may be delivered separately
  - Clear understanding of purchase/contract review process and a close plan (actions to be taken, named of people to complete actions and dates for each action) documented in the Purchasing Plan field.

**5-Negotiating**: The prospect or customer has received the proposal and is in contract negotiations.

- What to Complete in This Stage:
  - Agreement on business terms
  - All proposals should include the standard GitLab [Terms](https://about.gitlab.com/terms/#subscription/)
  - Determine if customer will be referenceable when the opportunity closes. If the answer is:
    - "Yes" update the `Referenceable Customer` section on the Account object with appropriate reference information
    - "No" the discussion of being a reference can be revisited at a later date
  - Modifications will not be accepted to the standard terms for any opportunity that is less than $25k, or for Starter edition.
  - If the above threshold is met, requests for modifications to the standard terms should be sent to Legal by creating a legal case in SalesForce, following the process found [here](/handbook/sales/field-operations/order-processing/#process-for-agreement-terms-negotiations-when-applicable-and-contacting-legal).
  - If the Account is seeking to use their own paper, requests will only be entertained if the opportunity is greater than $100k, and the request should be sent to Legal by creating a Legal case in SalesForce, following the process found [here](/handbook/sales/field-operations/order-processing/#request-for-gitlab-review-of-customer-edits-to-gitlab-template-or-review-of-customer-agreement-template).

**6-Awaiting Signature**: The prospect or customer has verbally agreed to the terms and conditions outlined in the proposal and has submitted for signature.

- What to Complete in This Stage:
  - Received signed order form, which signals agreement of all pricing and legal terms.
  - Obtain a purchase order, if applicable.
  - Work with GitLab AR to deliver any tax and/or complete any vendor registration processes.
  - Ensure all relevant documents, MSA, PO, and other forms uploaded to SFDC in the Notes and Attachments section of the opportunity record.
  - EULA (End User Licence Agreement) has been accepted by end-user organization (if applicable).
  - Identify relevant `Competitors` and enter them on the opportunity
  - Enter `Closed Won Reason` and `Closed Won Details` (a brief summary of why we won the opportunity that supports your Closed Won Reason selection).
  - Subscription created in Zuora.
  - Opportunity has been submitted for Finance approval.

**Closed Won**: Congratulations!! The terms have been agreed to by both parties and the quote has been approved by Finance.

- What to Complete in This Stage:
  - Introduce Customer Success/Account Management (if applicable)
  - Set a calendar reminder for 30 day follow up
  - If applicable, initiate Customer Onboarding or Premium Support onboarding

**8-Closed Lost**: An opportunity was lost and the prospect/customer has decided not to pursue the purchase of GitLab.

- What to Complete in This Stage:
  - Select the applicable Closed Lost Reason as [defined here](https://docs.google.com/presentation/d/1jHKfQn0qKEpfaMxohJctFWV_uNmXv51VJ3O8_UTTIuA/edit#slide=id.p)
    - If the loss is due to Competitive Loss, you are required to select the competitor(s) from the opportunity's `Competitor` field
    - If the loss is due to Product Maturity, you are required to select the product stage(s) from the opportunity's `Product Maturity: Product Line` field.
  - `Closed Lost/Unqualified Details` is required all opportunities with a Net ARR value of $25,000 or greater OR opportunities where Closed Lost Reason = Other. Enter as much detail as you can as to why we lost the deal. For example:
    - If they selected a competitor, why? Was it due to features or pricing?
    - If decided not to move forward with a project, what were the reasons? Did they not understand the value? Was there not a compelling event or reason?
    - Again, please be as thorough as you can as this information will prove valuable as we learn from these experiences.
  - Please note that for new business deals where the opportunity is with a Large/PubSec Account OR the Net ARR is equal or greater than $12,000, then a notification will be sent to the [#lost-deals](https://gitlab.slack.com/messages/C8RP2BBA7) Slack channel.
  - Uncover a time for follow up (incumbent solution contract expiration date)
  - Note that if an opportunity is dead/stalled, mark the Stage as 8-Closed Lost. Should the prospect/customer re-engage, you will need to create a new opportunity.
  - If the `Closed Lost/Unqualified Reason` is "Merged into another opportunity" please link this closed opportunity to the opportunity you are merging it into by using the `Merged Opportunity` lookup field. Otherwise, you will encounter a validation rule error.

**9-Unqualified**: An opportunity was never qualified.

- What to Complete in This Stage:
  - Update the `Closed Lost/Unqualified Reason` and corresponding `Closed Lost/Unqualified Details` with any pertinent notes as to why the opportunity was not qualified.
  - A notification will be sent to the Sales Development Team Lead and a feedback session should be scheduled between AE and Team Lead.

**10-Duplicate**: A duplicate opportunity exists in the system. This usually happens when a web direct opportunity is won when an existing opportunity already exists in Salesforce. Another reason could be multiple renewals created for the same opportunity. This stage **should not** be used when disqualifying an opportunity or if it is discovered at some point after acceptance that the opportunity is really part of a larger initiative. If the opportunity was accepted, it cannot be marked as a duplicate. Instead, you must mark the opportunity as `8-Closed Lost` and select the appropriate reason. Possible selections could include "Consolidating order - part of another subscription" or "Merged into another opportunity" as reasons why a duplicate opportunity may have been created.

- What to Complete in this stage:
- Move the Opportunity into this stage
- Fill out the lookup field `Duplicate Opportunity` with the opportunity that this opportunity is a duplicate of. If this field is not populated you will encounter a validation rule error.

### Opportunity Stage Movement Considerations

Note that once you qualify an opportunity via our standard qualification process, you cannot revert an opportunity back to the following stages: `0-Pending Acceptance`, or `9-Unqualified`.
If you need to revert an opportunity you've previously qualified to one of these stages, please contact Sales Operations and we can determine why the opportunity (once qualified) is no longer qualified.

### Reverting an Opportunity to a Previous Stage

Opportunity stages should align with GitLab's [Sales Stage Definitions](https://gitlab.highspot.com/items/623e24381f87632cd3327e93?lfrm=ssrp.0).  However, in the event that an opportunity has been progressed prematurely or circumstances of the sales process have significantly changed, a reversion of the opporunity stage can be requested.  Note that opportunity owners can only advance sales stages forward.  To make a stage reversion request, the opportunity owner must chatter sales-support with details and justification for the stage reversal along with their manager's approval.

### Early Stage Deals: Progression Requirements & Automation

To help keep our pipeline clean and ensure that early stage deals are moving through the pipe at the desired velocity, all **New Business** opportunities in stage `1-Discovery` and `2-Scoping` are governed under the below process

**Timelines:**  Inactivity Warning Day & Auto Closure Day by Segment

- Large/PubSec: Day 45 / Day 90
- Mid-Market: Day 21 / Day 45
- SMB: Day 7 / Day 15

**Definitions**: SFDC actions that constitute an **activity** include:

- Stage Progression,
- Command Plan Entries
- Next Steps updated

**Process for Stage 1-Discovery:**

1. At (Segment Specific) Warning day the Opportunity Owner and Opportunity Owner's Manager receive an email notification alerting both of inactivity
   - To avoid auto closure, the Opportunity Owner must progress the stage or add an activity to the opportunity
2. If there's no activity between the warning day and auto closure day:

   - The opportunity gets automatically closed (`8-Closed Lost`) with a `Closed Lost/Unqualified Reason` of "No Progression-Auto Close"
   - Email notification goes out to the Opportunity Owner, Opportunity Owner Manager and Marketing of this change
   - In scenarios where an opportunity is still vialbe but has been moved to Closed Lost through this automated process, the Opportunity Owner must create a new opportunity.

3. If there IS activity against the opportunity OR it progresses to Stage `2-Scoping`, the Warning and Auto Closure Day process starts over

**Process for Stage 2-Scoping:**

1. Same process for steps 1 & 2 above
2. Step 3: If the opportunity progresses to Stage `3-Technical Evaluation`, there are no longer any activity requirements due to aging

### Locking Opportunities as a result of their "At Risk" potential

In order to be in compliance with US Regulations there is a need to screen opportunities against known individuals and organizations with whom we are not allowed to do business.
In order to comply with these regulations, opportunities are screened when they are created through a third party application, Visual Compliance.
Visual Compliance is a dynamic screening tool that constantly compares our account information with those sanctioned parties listed on various Denied Party Lists.
Visual Compliance will screen new information and will monitor existing information to ensure the integrity and legality of the parties with whom we do business.
The more **accurate** information in the Account--the better! Partial information may trigger a false 'hit' and cause delays.
Please provide the full company name, company address, country and contact name(s).

If you receive an error referencing export when attempting to update an Account:
(i) Check if the Visual Compliance Section of the Account says "Pending"-- Wait 15-30 minutes for the system to run its initial check and update.
(ii) If the Visual Compliance Section of the Account says "Yellow" or"Red"-- The legal team is manually reviewing the Account to ensure compliance. Manual reviews of hits are conducted three (3) times a day.
Changes by Legal will automatically update the Account, although updates may take 15-30 minutes to sync.

- If the status has been updated to "Clear", the order will process and account functionality will resume.
- If the status is updated to "Escalate", there is a concern with either the company itself or there is an attempt to sell in an embargoed country. Escalated orders will not process.
(iii) If the Account requires immediate attention (i.e., to close a deal), open a Chatter message in the Account and message "@legal". Upon receipt of a request, the Legal team can review and update in Visual Compliance.
Please understand that if Legal finds a problem, the flag and the account will remain locked down.

## Types of Accounts

### Accounts Created in Salesforce utilizing CE Usage Ping Data

The [CE Usage ping](https://docs.gitlab.com/ee/administration/settings/usage_statistics.html) provides GitLab with some limited insight into how end users are utilizing the platform.
The raw information is cleaned, enriched and then pushed to SFDC as an Account by the Data Team.

If there is not an existing account match in Salesforce, a new account record will be created with the following information populated:

| SFDC Field | Default Value |
| ---------- | ------------- |
| Account Name |  |
| Account Source | `CE Download` |
| Number of Employees |  |
| Billing Street |  |
| Billing City |  |
| Billing Zip |  |
| Billing Country |  |
| Account Type | `Prospect - CE User` |
| Account Website |  |
| Industry | Populated by Clearbit (since been deprecated) |
| Active CE Users | Populated by Usage Ping |
| CE Instances | Populated by Usage Ping |
| Account Owner | Sales Admin by Default |
| Using CE | Checked True |

**Process**

1. Sales Team members can use this data to proactively identify `Prospect - CE User` accounts that fit their target segment(s). Accounts owned by `Sales Admin` can be adopted by a Sales Team member changing ownership in Salesforce.
The adoption of any `Sales Admin` owned records will trigger an email alert that is sent to the Account Research Specialist for transparency and awareness of what account records have been claimed.
2. The Account Research Specialist will be responsible for reviewing the `Prospect - CE User` accounts on a regular basis to determine additional account records that should be worked either by a Sales Team member or Outbound BDR.
3. When an account record has been identified for follow up, the Account Research Specialist will work with the appropriate Regional Director (RD) to determine Outbound BDR assignment based on work load and available capacity.
4. The assigned Outbound BDR will work the `Prospect - CE User` account the same as any other known `CE User` account leveraging the tools at their disposal (Zoominfo, LinkedIn Sales Navigator, etc) to add contacts to the account record and populate the firmographic profile of the account.
