## Vartopia Overview

Vartopia is a partner lead sharing and deal registration system designed to maximize the value of [GitLab partner program](/handbook/resellers/) for channel partners. Vartopia offers multiple module including Prospects, Deal Registration, Account Mapping and Campaign. Partner lead sharing is part of the Prospects module, while deal registration is part of the New Registration and Registrations module. Watch [this video](https://vimeo.com/819610456) for step-by-step instructions on where partners can view, accept, reject, assign and convert leads to deal registration.

## Prospects Module

## Channel Partner Lead Flow Overview

Channel Partners can work with the Channel Marketing team to create campaigns that will be shared to the Vartopia Prospects module. The [campaign types](/handbook/marketing/channel-marketing/partner-campaigns/#types-of-partner-campaigns) include Partner sponsored, MDF funded, free trial and joint partner campaign.

The flow starts from Marketo > Salesforce > Traction > Vartopia.

The partner lead is:

1. Created in Marketo via list import or form submission
2. Synced SFDC via Salesforce Campaign Sync
3. Assigned to `Partner Queue` via Traction
4. Added to the Prospects Module in Vartopia.

## Vartopia Sync Requirements

In order for the Partner to be able to see and action the lead in Vartopia, the SFDC record must have the following fields updated. Vartopia calls SFDC every hour looking for updates to the SFDC record.

1. `Vartopia Partner Account` not equal to `NULL` (set by Marketo)
1. `Prospect Share Status` = `Sending to Partner` (set by Traction)
1. `Partner Prospect Status` = `Qualifying` (set by Traction)

Once synced sucessfully between systems, the `Vartopia Transaction Id` in SFDC will update from Vartopia. If this ID is missing, the lead did not sync correctly.

### Vartopia Access

The account in SFDC must be set to `Vartopia Partner Account: Vartopia Access = Yes` in order to be passed leads. If that field is marked false, a SFDC error will occur when `Vartopia Partner Account` tries to be set. If this error occurs, the lead will not sync from marketo to SFDC, or if they are already existing in SFDC, that field will not be populated.

### Troubleshooting Vartopia Sync

When the `Prospect Share Status` shows as `Sending to Partner` and the `Vartopia Transaction ID` isn't populated after a day, this typically means there is a sync error between Vartopia and Salesforce.

Here are the steps to resolve the sync fail.

1. `Vartopia Partner Account` must be referring to an account with a `Vartopia System ID`
2. `Vartopia Partner Account` associated with the partner requires a `Prospect Admin`
3. The partner lead requires a phone number and email address
4. `Prospect Partner Status` on the partner lead must equal `Qualifying`
5. `Vartopia Deal Registration System Access` on the account must be `Active`.

If all these are submitted correctly, then submit a Vartopia support ticket with a list of the failed sync and its `Vartopia Prospect Id`. The `Vartopia Prospect Id` (ex. L-555555) is a unique lead number identified populated by SFDC that shows in Vartopia and SFDC. We can use this as a non-PII identifier in both systems.

### Prospects to Deal Registration

We can link the Prospect to the DR so long as it’s in Prospect Share Status = `Accepted`, and there is either a matching domain and/or an exact match on the email address. Partners will be prompted with a pop-up to link the Prospect upon DR creation. When the DR is created, Partner Prospect Status will automatically be updated to `Converted to DR`.

[See](https://youtu.be/ktZikNBMOpk) how this works.

## Notifications

The `Partner Prospect Admin` will receive an email notification when leads are shared them via Vartopia. Vartopia does not offer the functionality to send alerts, thus the main workflows are built and sent from Marketo:

- [Free Trial](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC33938B2ZN19)
- [List Import](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC34955C3ZN19)

## Prospects Module for Carahsoft

We allow Carahsoft access to the Prospects module through the `Partner Placeholder Pubsec` partner account, which will allow them to receive leads from joint GitLab - Partner marketing campaigns.

To access the Prospect module, Carahsoft will log into the Partner Placeholder PubSec profile from Impartner, then SSO into Vartopia. The access to the Prospects module is limited to only Marketing users. Should the Sales users wish to create a Deal Registration, they will have to create the deal through their log in to the Distributor account.

In short, only Marketing will use the Prospects through the Partner Placeholder Pubsec, and Sales will continue to create deal registration through the Distributor profile for Carahsoft.

### Internal Process

1. Account - Add marketing email alias  to the Prospect Admin
2. Campaign/Marketo Setup Process will remain the same in Allocadia, Salesforce, and Marketo.
3. Attribution - add campaign to smartsheet so it's displayed in the Distributor Marketing Campaign dropdown.
4. List Import/UTM - when importing the list the CRM Partner ID needs to be assigned to Partner Placeholder PubSec (Account ID (18) = `0014M00001sDPJWQA4`)

### External Process for Carahsoft

1. Log into the Partner Portal using marketing email alias
2. Access Vartopia via Deal tabs
3. Click on Prospects to receive shared leads
4. Bulk accepts leads so they can be links from Prospect to DR, when DR is created.

## Partner Recall

The first phase of the recall process is live in the “Prospects” module in the [GitLab Partner Portal](https://partners.gitlab.com/). The recall process is built to be able to pull back leads that are not being actioned.

Only partner leads acquired from fully paid initiatives generated by GitLab Inc. through joint campaigns are subject to recall. **We will not recall leads from Partner sponsored, MDF funded and free trial campaigns.**

As part of the first of three phases, partner leads older than 30 days with a `Prospect Share Status` = `Pending` implying the Channel Partner has not accepted nor rejected the lead, will be recalled.

In the final phase, GitLab Inc. will allow Channel Partners a period of 5 days, starting from the day the lead is assigned in the Prospect module, to accept the lead by updating the `Prospect Share Status`. After accepting, Channel Partners will have a period of 10 days starting from the date the lead was accepted to revise the `Partner Prospect Status` before the lead is re-routed back to GitLab Inc for follow up.

### Recall Process Overview

- **[🟢 NOW LIVE]** Phase 1 - recall leads created over 30 days ago (not accepted nor qualified)
- Phase 2 - recall leads that have not been accepted after 15 days (not accepted nor qualified)
- Phase 3 - recall leads accepted after 5 days, and not actions (not qualified) after 10 days.

*Reminder: This only applies to leads acquired from joint campaigns.*

### Rules

- At any time, a recalled lead participates in another partner campaign, they will not be reassigned to a partner.
- At any time, a partner lead participates in multiple campaigns will be prioritized to the partner of the first campaign.
- At any time, a lead participates in an MDF campaign, they will not and can not be recalled.
- Actively working leads will not shared to partners which means their `CRM Partner ID` can not be updated or should be removed. The only exception to this rule are leads who participate in an MDF campaign.

### FAQ - Partner Recall

<details><summary>What is Vartopia and how does it fit in the Channel Partner Lead Flow? </summary>
Vartopia is a lead-sharing module that allows the marketing team to share leads with Channel Partners. This platform is being actively used throughout multiple initiatives including Partner sponsored, MDF funded, free trial and joint partner campaign. When a partner lead is passed to a Channel Partner, the leads will become visible in Vartopia where the partner can choose to accept and action the lead or reject.

**Note**, Channel Partners do not know what Vartopia is, they can access Vartopia, as Prospects in Impartner Partner Portal.
</details>

<details><summary>Why is this important to CAMs? Why do I need to work with the Channel Partner to see this through?</summary>

As a CAM, you should be aware of the joint-marketing campaigns that the Channel Partners are involved in to drive channel pipeline. These campaigns are ran and funded by the Field Marketing team, and leads acquired from are subject to recall. CAMs need to work with Channel Partner to ensure they update their leads' `Prospect Share Status` to `Accepted` otherwise the Channel Partner will lose their leads.
</details>

<details><summary>What’s the purpose of the recall process?</summary>

The recall process allows for GitLab Inc. to pull back leads from joint campaigns that aren’t actioned by Channel Partners. This will also encourage Channel Partners to work on the leads as they come in. Only partner leads acquired from fully paid initiatives generated by GitLab Inc. through joint campaigns are subject to recall. **We will not recall leads from Partner sponsored, MDF funded and free trial campaigns.**
</details>

<details><summary>Who does the partner recall process affect impact?</summary>

The partner recall process affect Channel Partners as their leads will be removed from Vartopia, more specifically resellers who participate in joint-marketing campaign with GitLab Inc. This should not be a surprise to Channel Partners as this process is mentioned in their SLAs. Remind your Channel Partner to review their leads and update their `Prospect Share Status` should they wish to keep the leads in their own possession.
</details>

<details><summary>How do you know when a lead has been recalled?</summary>

A partner lead is recalled when their `Prospect Share Status` = `Recall`. After the lead is removed from Vartopia, `Prospect Share Status` will equal to `NULL`, `[Vartopia] Recall Date` will be populated with a date/time, `Partner Recalled` = `True`.
</details>

<details><summary>What resources are available to track the leads that are recalled?</summary>

This google sheet contains the records recalled from partner, and recalled records in Actively Working Accounts:

- [Partner Recall Records](https://docs.google.com/spreadsheets/d/1A8Z_vKazprQJDkniX9kvfYuGXuzVBeG0JBXk51FAnHA/edit#gid=0)

</details>

<details><summary>What will happen when the leads get recalled?</summary>

The lead will be assigned to the `Recycle Queue`, enrolled in the nurture and their status will be changed to `Recycle`.
</details>

<details><summary>When will the other phases be launched?</summary>

There is presently no firm date on the other phases. We are open to feedback on changes to improve this recall process.
</details>

## SFDC Lead/Contact Page Layout

To retrieve information on a specific lead or contact, you can review the `Partner Lead Sharing Information` in Salesforce where the `Vartopia Partner Account`, `Prospect Share Status`, `Partner Prospect Status` and more can be found.

## Scheduled Reports

Creating scheduled reports that sends to channel partners' inbox at the start of the week is the best way to stay on top of leads.

Follow the steps to create a report that summarizes new leads that are assigned to `Partner Prospect Admin`.

1. Log into Partner Portal
1. Go to the "Sales" tab
1. Click the orange button "Register Opportunities"
1. Go "Prospects" view, find "Custom Reports" located on the top right and click "New".
1. Create New Customer Report
   1. Update Report Name
   1. Update Advanced Filtering
      1. Share Status Filter
      1. Status Filter
      1. Update Assigned User
      1. Update the Selected Columns
   1. Update Date Filter
      1. Update Created Within (Number of days)
   1. Update Scheduling and Distribution
      1. Frequency
      1. Day of Week
      1. Update the Distribution List
1. Click "Save Report"

## Campaign Module

The Campaign module is an independent module from Prospects. The purpose of this module is to be able to link campaigns to deal registration and track and measure the effectiveness of partner campaigns.

Upon deal registration creation, when Vartopia recognizes that a lead is matched to a campaign, a field called `GitLab Marketing Campaign` will be prompted and the partner must select the campaign that influenced that deal registration.

Campaign will be synced to Vartopia starting September 27, 2023 (module launch date) and they will be removed after 6 quarters.

## Process

1. Allocadia - select the `Channel Partner Name` in the campaign detail panel
2. Marketo - input the subcategory ID into the Marketo program description.
3. Marketo - sync the program to the SFDC campaign.
4. Salesforce - create SFDC campaign with `Sync to Vartopia` and `Partner Account` (automated). `Partner Account` will pull from `Channel Partner Name`, so Channel Partner Name needs to be an exact match to the Partner Account for the automation to work.
5. Vartopia - when a lead is ready to convert to DR, Vartopia will recognize there's a campaign linked to the account, and display a dropdown to select the campaign name.
6. Salesforce - see the deal registration that's created and update the metrics on the campaign.

## Vartopia Sync Requirements for Campaign Module

- The `Partner Account` must be selected with a Channel Partner to sync to Vartopia.
- `Sync to Vartopia` must be checked on the campaign.
- Campaign must be active to sync.
- Only one `Partner Account` can be selected per campaign. For campaigns with multiple partners, you are required to create a child campaign per partner.

## Create a new Salesforce Campaign to Sync to Vartopia

You can create a new campaigns to sync to Vartopia, to do so, you'll want to follow these steps.

1. Log into Salesforce
1. Go to Campaigns tab
   1. If you aren't seeing the Campaigns, select the `+` to see all tabs, and click on Campaigns
1. Click on the `New` button to create a new campaign
1. Add `Campaign Name` (required field), you'll want to follow a similar naming convention (YYYYMMDD_PartnerName_Region_CampaignType_ActivityName) to marketing campaigns. For some examples:
   1. 20221005_Trace3_Evolve_Las_Vegas_In-Person
   1. 20231101_Presidio_L&L_Virtual
   1. 20230306_MDF_159_Computacenter_CS_DC_West_Meeting
1. Check `Active`
1. Select `Type` and `Type Details`
1. Add any related issue(s) or epic(s) in `Event Epic`
1. Update the `Status` appropriately
1. Add `Start Date` and `End Date`
1. Update `Region` and `Sub-region`
1. Update `Budgeted Cost in Campaign` (required field)
1. Under Vartopia Partner Information, select `Partner Account` and check `Sync to Vartopia`
1. Save.

## Add GitLab Marketing Campaign on the DR Form

There are two path that partners can access the `GitLab Marketing Campaign` field, through the Prospects or New Registration tab. See [slides](https://docs.google.com/presentation/d/1A9huMA3uJZDvoe3tgdVHLMKjNMqClTI63YuqJ1G122Y/edit#slide=id.g1d24c3e4ddd_5_52) for more instructional details.

**Through the Prospects tab:**

1. Retrieve the lead from the Prospects tab
1. In the Prospect details, Partners will be able to see the campaign history on the `Web Form` field.
1. Update Prospect Share Status to `Accepted`
1. Change Partner Prospect Status to `Qualified` to unlock the `Convert to Deal Registration` button
1. Fill out the first step of Deal Registration form
1. In the second step of the form, select the GitLab marketing campaign that drove the deal reg.
   1. `GitLab Marketing Campaign` is a required field
   1. The best practice is to select the marketing campaign.
   1. But, If the deal reg was not influenced by a marketing campaign, select `Not Applicable`.

**Through the New Registration tab:**

1. Create a new deal registration if POP has not be sent to GitLab
1. Fill out the first step of Deal Registration form by adding a new company and contact.
1. In the second step of the form, select the GitLab marketing campaign that drove the deal reg.
1. `GitLab Marketing Campaign` is a required field
1. The best practice is to select the marketing campaign.
1. But, If the deal reg was not influenced by a marketing campaign, select `Not Applicable`.

## Deal Registration Change Request

In the scenario where the `GitLab Marketing Campaign` needs to be added, updated or removed, the marketing team will need to create a Marketing Ops issue using the [pntr_dr_campaign_request](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=ptnr_dr_campaign_request) template.

The following will be required in this change request:

1. Identify the DR(s) that need to be updated with proof of campaign member or touchpoint
2. Marketing Ops will verify DR(s)
3. Partner Marketing team Approval
4. Marketing Ops to add GitLab Marketing Campaign

Note, that only Campaign after September 27 (launch date) will be approved.

This is a [video recording](https://youtu.be/_t98rC1ug6A) should you need a visual capture of how to create the change request.

## Use Case for Distributors

Distributors are responsible for managing and overseeing campaigns, and assigning and sharing the acquired leads with Channel Partners. The Channel Partner will then be obligated for following up, actioning, and creating the deal registration. With the Campaign module, partners can finally link their deal registrations to the Distributor's MDF campaigns.

### EMEA and APAC Distributors - Process

In comparison to the main process, we are required to create a child campaign per partner and this is highlighted in step 5.

1. Allocadia - select the `Channel Partner Name` (distributor) in the campaign detail panel.
2. Marketo - input the subcategory ID into the Marketo program description.
3. Marketo - sync the program to the SFDC campaign.
4. Salesforce - create SFDC campaign (automated).
5. Salesforce - create a [child campaign](https://trailhead.salesforce.com/content/learn/modules/campaign-management-with-nonprofit-success-pack/create-campaigns-and-campaign-hierarchies) and set the SFDC campaign as your parent campaign.
6. Salesforce - update the `Partner Account` (partner) on the child campaign.
7. Marketo - import the leads from POP to the child campaign -  leads must already be assigned to partners on import.
8. Vartopia - when a partner converts the lead to DR, Vartopia will recognize there's a campaign linked to the account, and display a dropdown to select the campaign name.
9. Salesforce - see the deal registration that's created and update the metrics on the campaign.

### Carahsoft

#### Distributor Marketing Campaign

On the second page of the DR form, we will have a new campaign field called: `Distributor Marketing Campaign` dropdown when the Distributor Account is selected. The campaigns are collected via a smartsheet which Gabby will be responsible for keeping up to date. When a new entry is submitted to the smartsheet, Vartopia is responsible for adding that campaign to the Distributor Marketing Campaign dropdown.

Then, they will no longer need to use the GitLab Marketing Campaign on the deal registration form.

This will allow the Distributor to tie the DR to the campaign, HOWEVER, we’ll still need to use the Partner Placeholder Pubsec reseller account.

This process is still a work in progress, follow along in this [epic](https://gitlab.com/groups/gitlab-com/-/epics/2249) for the next iteration.

#### Campaigns Without Leads

The purpose of this use case is to allow Value-Add campaigns to be available in the Distirbutor Marketing Campaign dropdown to track ROI, which doesn't require a lead list.

1. Carahsoft - Add the Event/Activity Name and Campaign Code to the [Carahsoft Marketing Plan spreadsheet](https://docs.google.com/spreadsheets/d/12HTBd4wye-G-Ep6-WKFQ6dtYkambLN2U-OMihzF0NFE/edit)
1. Gabby - Assign Salina to the Campaign Code column
1. Salina - Create the SFDC campaign and add Campaign Name and Campaign Code to the [Smartsheet](https://app.smartsheet.com/sheets/Jrr5PhjRjRfH965FqrvCq7GC9p56whHXp22C98m1). This will allow the Campaign Name to be displayed on the Distributor Marketing Campaign.
1. Salina - Add SFDC Campaign ID, SFDC Campaign Link and confirm the campaign name has been added to the Smartsheet under the `Added to smartsheet` column.

#### Campaigns Worked by Sales Dev

This is not an MDF campaign, as referenced in the name, it's a value-added where the leads will be worked by the Sales Dev team. [Video recording](https://youtu.be/WwWYFCmPs7M) available

1. Setup Allocadia
    1. Create a subcategory and line item
    1. Update `Worked by Sales Dev` to `True` on the subcategory (required)
    1. Open GitLab epic and issues using the GitLab issue - Allocadia integration. The Gitlab epic and issues will include an issue template called, [Partner Sales Campaign - BDR Collaboration Template](https://gitlab.com/gitlab-com/marketing/sales-development/-/blob/main/.gitlab/issue_templates/Partner_Sales_BDR_Collaboration_Template.md?ref_type=heads). The purpose of this issue is to communicate how the Sales Dev team is expected to follow up with the campaign.
       1. Tag the Public Sector Business Development & AMER SDR on the Partner Sales Campaign BDR issue for visibility.
1. Follow the [instructions](/handbook/marketing/channel-marketing/partner-campaigns/#partner-campaigns) to setup Marketo Program and SFDC Campaign.
   1. Setup in Marketo
       1. Clone the appropriate FM program template
       1. Go to the Program > My Token - Fill out the Tokens
   1. Sync to Salesforce Campaign
   1. Update Salesforce Campaign
       1. Update `Is the Channel Partner Involved?` = Yes (Automated with Allocadia integration)
       1. Update `Channel Partner Name` with Partner Name (Automated with Allocadia integration)
       1. Mark campaign as `High Priority`
1. Spreadsheet - Assign Salina to the [Carahsoft Marketing Plan spreadsheet](https://docs.google.com/spreadsheets/d/12HTBd4wye-G-Ep6-WKFQ6dtYkambLN2U-OMihzF0NFE/edit) to  Add Salesforce Campaign to [Smartsheet](https://app.smartsheet.com/sheets/Jrr5PhjRjRfH965FqrvCq7GC9p56whHXp22C98m1) (Interim process until the next iteration)
1. Upload lead list via Google Drive
    1. Include `CRM Partner ID`
    1. Add `Partner Lead Worked by Sales Dev` = `True` column
    1. Once imported, if the lead is net new, the source will be changed to `Partner Qualified Lead` (Automated)

## Field Glossary

## Lead Object

### Partner Prospect Admin

The `Partner Prospect Admin` is a role that is responsible for managing and assigning the Prospects. Each `Vartopia Partner Account` can only have one person that will fill this role.

This SFDC field in the `Vartopia Partner Account` MUST be filled in or else the records will be passed to no one.

### Prospect Share Status

The `Prospect Share Status` governs the sharing of the lead and the receipt of the lead by the partner. The prospect share status has statuses that are set by both the manufacturer and the partner. Partners see this field as `Sharing Status`.

1. **Sending to Partner**: This is the initial status set when sharing a lead to a partner. This status is set by GitLab.
1. **Pending**: This is an automated status, set when the lead is synced to the partner facing system. As part of the sync flow, the system sets the status to pending in both the partner facing system and SFDC. It is visible to both the reseller and the MFG.
   a. Meaning in SFDC: Pending indicates to the MFG that the lead has been successfully shared.
   b. Meaning in partner facing system: Pending indicates to the reseller they have a new lead shared from the MFG that they now need to accept or reject.
1. **Accepted**: Indicates the reseller has accepted the lead and intends to work the opportunity. This status is automatically updated in SFDC.
1. **Rejected**: Indicates the reseller has refused the lead. This status is automatically updated in SFDC.
a. *Note: rejecting a prospect immediately removes the prospect from the resellers’ system. They no longer have any visibility to the prospect. The sync ID is cleared from the prospect record in SFDC, and the record is ready to be assigned to a new reseller. The prospect will be in Rejected and Qualifying Status. A new partner can be selected, and the Share Status set back to “Sending to Partner” to reshare the prospect.
1. **Recall**: Indicates the prospect is being recalled by the MFG. This is set by the MFG in SFDC. When the system syncs this will remove the prospect from the resellers view. It will also clear out the assignment fields and sync ID making the prospect ready to be shared with a different reseller.
a. *Note: There is no alert or notification to a reseller when a prospect is recalled.

### Partner Prospect Status

The `Partner Prospect Status` is updated by the partner and identifies the status of the lead as the partner works it though the sales process. Partners see this field as `Status`.

1. **Qualifying**: Indicates the reseller is working on the lead.  **Note**: This status is initially set by the MFG when sharing the prospect. It is visible to both the MFG and the reseller. The prospect remains in qualifying until updated by the reseller.
1. **Qualified**: Indicates the reseller has engaged the prospect and determined there is a valid opportunity. The status is automatically updated in SFDC.
1. **Disqualified**: Indicates the reseller has determined the prospect is not a valid opportunity. The status is automatically updated in SFDC.
1. **Converted to DR**: Indicates the reseller has converted the prospect to a deal.

### Vartopia Partner Account

`Vartopia Partner Account` is a lookup field based on the Account ID (18) in Salesforce. This field shows the partner account in which the lead is associated with via Vartopia.

### Vartopia Timestamps

1. [Vartopia] Created Date - this field is used to collect a time and date the partner lead is created in Vartopia. This is when `Prospect Share Status` = `Pending`.
2. [Vartopia] Accepted Date - this field is used to collect a time and date the partner lead is accepted in Vartopia. This is when `Prospect Share Status` = `Accepted`.
3. [Vartopia] Recall Date - this field is used to collect a time and date the partner lead is recalled in Vartopia. This is when `Prospect Share Status` = `Recall`.

**Note: The timestamps were introduced on December 15, 2022. Any status updated prior to December 15, 2022 will not have a timestamp.**

## Campaign Object

### GitLab Marketing Campaign

`GitLab Marketing Campaign` previously MDF campaign, is a lookup field to the campaign on the registration object. This field will be visible when an account is linked to a campaign upon deal registration creation.

### Partner Account

`Partner Account` is a lookup field to the account on the campaign object. You are require to select the partner name and the campaign will the sync to the partner.

### Sync to Vartopia

`Sync to Vartopia` is a checkbox field on the campaign object that is to be checked to sync the campaigns to Vartopia.

## Working with Vartopia

These are some guidelines to become familiar with when working on a module with Vartopia.

- We will not push change sets with page layout components through sandbox/staging. These changes will ALWAYS be done manually. This means Vartopia will create the changeset and the Sales Systems team will be responsible for adding the page layout components.
- Vartopia should not push change sets to production.
- Vartopia uses managed flows in their change sets. Thus, we should always ask how it functions or request a demo in Classic, and have a Salesforce App Builder be on the call to inspect the flow to ensure that capabilities won’t break any existing processes before they are deployed.
- Preempt any change set updates with a managed package upgrade to reduce the chances of any problems or errors.
- Vartopia uses flows/alerts as part of their managed package intended to notify the partners of every update related to partner leads for the Prospect module ie when the leads are shared, accepted, assigned, rejected, etc. Our partners do not see the value in needing to be updated for every lead and every status change. Ensure the following flows/alerts are turned off before every managed package upgrade:
  - Vartopia Prospect Lead Flow
  - Vartopia Prospect Contact Flow
  - Prospect Assigned to Sales Rep Workflow on Contact
  - Prospect Assigned to Sales Rep on Lead
  - The Salesperson when the Prospect admin has Assigned to the Contact
  - The Salesperson when the Prospect Admin has Assigned the Lead

## FAQ

<details><summary>What type of channel partners can use Vartopia?</summary>

The Prospect module is meant for resellers. We can't pass leads to distributors.
</details>

<details><summary>How do you know if a partner lead has been synced to Vartopia?</summary>

When a lead is synced to Vartopia, Vartopia will created for `Vartopia Transaction ID`.
</details>

<details><summary>How do Channel Partners access Vartopia?</summary>

Channel Partner can access Vartopia through Impartner, the partner portal. They must log into the Partner Portal, go to the "Sales" tab, and click the orange button, "Register Opportunities".
</details>

<details><summary>How many `Partner Prospect Admin` can be added to a Vartopia Partner Account? </summary>

There can only be one `Partner Prospect Admin` per account.
</details>

<details><summary>How often does Vartopia sync to Salesforce</summary>

The Prospects module sync once per hour, while the Deal Registration module sync once every two hours.
</details>

<details><summary>Can you bulk update a number of selected leads in Vartopia?</summary>

When you've selected a number of leads, a button will be unlocked called "Bulk Update" where you will be able to accept, reject or assign those leads.
</details>

<details><summary>Do I, as the CAM, have access to Vartopia?</summary>
Vartopia is not available to administrator nor manufacturer, that being said, only Channel Partners will have access, and CAMs can not get access to Vartopia. You will be able to find the leads share to Partners via these Tableau reports:

- [Partner Lead Status](https://10az.online.tableau.com/#/site/gitlab/views/DraftPartnerMarketingv2/PartnerLeadsContacts?:iid=2)

</details>

<details><summary>Can Distributors create deal registrations?</summary>

Yes, Distributors can only create deal registrations on behalf of partners.
</details>
