---
title: "Global Channel Marketing - MDF Operations Process"
description: "The page details the operational process for the MDF program."
---

## Planning

### Step 1: Planning with Partners

1. In CMMs’ regular cadence with Partners, they discuss the date of event, event/campaign details, and requested amount.
     1. They review the information that will be entered into the Funds Request forms by the partners in Impartner on a PowerPoint
     1. The campaign details will be tracking on their individual spreadsheet

### Step 2: Create Allocadia Items

1. Create subcategory with name convention: Partner Activity Name Location. ie: `GitLab Demo Partner DevSecOps World Tour Paris`
     1. Add Start Date
     1. Add End Date
     1. Is a Channel Partner Involved?
     1. Channel Partner Name
     1. Is Alliance Partner Involved?
     1. Alliance Partner Name
     1. Will there be MDF Funding
     1. Partner MDF Region Budget
     1. Customer Speaker?
     1. Geo
     1. Country
     1. User Handle
     1. Campaign Owner
     1. Campaign Type
     1. MDF Campaign - Type Details
     1. Operational Program Owner
1. Create line-item with name convention: MDF 000 Partner Activity Name Location. ie: `MDF 000 GitLab Demo Partner DevSecOps World Tour Paris`
1. Add the forecast amount in that month's plan column
1. Select the `Create/Update MDF Issue` at the bottom of the details panel

### Step 3: Update the Issue

1. Update the campaign details including location, event website, DR goals, budgeted costs, total cost of campaign, and sales territory
1. Add labels:
     1. Add FY25-Q4 (Label for the FY-Q)
     1. Add Region-XXXX
     1. Add `Pending MDF Approval` - to seek issue approval from Manager (automated)
         1. Once approved, update: `MDF-Approved`
1. Tagging stakeholders for visibility: ESM, marketing, field sales for visibility
1. Once the campaign details have been populated and all the necessary approvals have been attained, sync the GitLab issue to Asana by adding the label: `Asana-Sync-Project`

Please ensure your issue is in its final state before applying this label, as any subsequent changes will need to be manually updated in both GitLab and Asana separately.

When you activate the sync, an Asana project with corresponding tasks will be automatically created. The GitLab issue description will populate the Asana overview, and tasks will be automatically assigned. Note that only one assignee can be designated per task. Additional team members can be added as collaborators to maintain visibility without changing the primary assignee.

### Step 4: Update the Tracking Sheet

1. Region, MDF Amount, Issue Link, Line Item ID, End Date, Status

### Step 5: Partner Submits Funds Request

1. At this point, Partner will submit the Funds Request in Impartner

## Pre-Activity

### Marketo

#### Step 1: Create the Marketo Program

1. Go to Marketing Activities
1. Go to “Active Marketing Program” > “Partner Programs” > “MDF Campaigns” > “Templates - MDF Campaigns Folder”
1. Right click "YYYYMMDD__MDF_000_PartnerName_EventName_Region" and hit "Clone"
     1. Clone to - select Campaign folder
     1. Name - paste the Campaign Name from Allocadia
     1. Folder - insert the `FY#- Q# - MDF Campaigns`
         1. Example, if the campaign was during FY25 Q4, the folder you’ll want to select is `FY25 - Q4 - MDF Campaigns`
     1. Description: **Allocadia Line Item ID** and issue link
         1. Example: 2271710 https://gitlab.com/groups/gitlab-com/marketing/-/epics/4420

#### Step 2: Update Marketo Tokens

1. Go to the Marketo Program
1. Go on the `My Tokens` tab and update the Partner Name (listed in the issue)

#### Step 3: Sync Marketo Program to SFDC

1. Go to the tab showcasing the Marketo Program Name
1. In the Summary, under Settings session, Salesforce Campaign Sync, click `not set`
1. Under Campaign, click on the dropdown and select `Create New`
1. In Description, paste the **Allocadia Line Item ID** and save

#### Step 4: Update Tracking Sheet and Issue

1. Add Marketo program to issue and tracking spreadsheet.

### Zip

#### Step 1: Save MDF request in Impartner as a PDF

1. Go to the MDF Funds Request
1. Ensure all sections are not collapsed
1. On the Google Chrome Browser, select the three dots on the most right
1. Click on `Print`
1. Change the Destination to “Save as PDF” then save.

#### Step 2:  Create a new Zip Request

1. Go to Zip > Create a “New Request”
1. Select a “Request a Purchase” and upload the MDF PDF at the end of the Zip submission

<table>
    <tr>
        <td>Questions</td>
        <td>Answer</td>
    </tr>
    <tr>
        <td>Provide a Short Description of the purchase</td>
        <td>Insert the epic name</td>
    </tr>
    <tr>
        <td>What are you looking to purchase</td>
        <td>Marketing Programs</td>
    </tr>
    <tr>
        <td>Which detailed category best describes your purchase?</td>
        <td>Channel Partner Rebates</td>
    </tr>
    <tr>
        <td>Is this an MDF Request?</td>
        <td>Yes</td>
    </tr>
    <tr>
        <td>Is the request related to the funds covered under the Master Partner Agreement?</td>
        <td>
        <ul>
  <li>Yes - if it’s a 50/50 split.</li>
  <li>No
    <ul>
      <li>If there is a contract or not a 50/50 hit No </li>
      <li>If there is not a contract, but it’s not a 50/50 split you’ll write a note once the Zip is created that says “Not a 50/50 split and need legal to confirm if GitLab contract is needed”</li>
      <li>Also if no contract but not 50/50 upload MDF req here so that it lets you move on</li>
      <li>If there is a contract upload here</li>
    </ul>
  </li>
</ul>
        </td>
    </tr>
    <tr>
        <td>What type of purchase is this?</td>
        <td>New</td>
    </tr>
    <tr>
        <td>Will a Virtual Card be used to pay this vendor?</td>
        <td>No</td>
    </tr>
    <tr>
        <td>What’s the Name of the vendor?</td>
        <td>Type in the Partner’s name - if this is a new Partner they will need to be onboarded in Coupa - the partner name may be unique (i.e. TD SYNNEX Indonesia) and more complex to find</td>
    </tr>
    <tr>
        <td>What subsidiary is this purchase for?</td>
        <td>GitLab inc.</td>
    </tr>
    <tr>
        <td>How much budget will you need for this purchase?</td>
        <td>Insert the requested amount</td>
    </tr>
    <tr>
        <td>What is the desired start/end date?</td>
        <td>Insert date(s) of the activity</td>
    </tr>
</table>

| Please enter the line item breakdown:                                                     |                                          |
| ----------------------------------------------------------------------------------------- | ---------------------------------------- |
| Line Type                                                                                 | Amount                                   |
| Commodity                                                                                 | Channel Partner Rebates                  |
| Allocadia ID                                                                              | Insert the Allocadia Line Item ID Number |
| Is this prepaid?                                                                          | No                                       |
| Amortization Schedule                                                                     | Blank                                    |
| Department                                                                                | Regional Marketing                       |
| Coupa Class - GitLab Inc                                                                  | Blank                                    |
| Do you have any supporting documentation                                                  | None                                     |
| Will the vendor have access to any of the following data or information?                  | None of the above |
| Does this request involve the use of a system to collect, store, or transmit GitLab data? | No                                       |

#### Step 4: Add Zip link to Tracking Sheet

#### Step 5: Add Issue Link to the comment section of Zip

1. If legal has any questions tag CMM to answers
1. If there is a contract involved, go ahead and approve it when it gets to your queue.
1. When the Coupa req is created, tag Renz Santos and tell him to hold the PO until you’ve approved POP / ROI. He’ll still send contract out but this way they won’t be at risk to be paid before mdf is complete

### Salesforce

#### Step 1: Search for Campaign in SFDC by typing in MDF number

#### Step 2: Check for the Allocadia Sync

1. It can take up to 5 minutes for Allocadia to sync with Salesforce. Don’t edit the SFDC campaign until the sync. If you make changes in the SFDC campaign before the sync, it will break the sync.
     1. When the sync has taken place the following will happen:
         1. Campaign Owner will be updated to the CMM
         1. Type Details, Start/End Date, Is a Channel Partner Involved?, Will there be MDF Funding?, Channel Partner Name, Region, Sub-Region will be updated.
         1. Last Modified By will show Allocadia Integration

#### Step 3: Add MDF Request on the Salesforce Campaign

1. Edit the Salesforce Campaign to add the MDF Request. This is the foundational step that ensures MDF request data flow between Salesforce, Allocadia and GitLab system during the nightly sync.
     1. Field Sync to Allocadia - the system automatically transfers four key metrics from Salesforce to Allocadia details panel each night:
         1. MDF Request Number
         1. Target Number of Contacts
         1. Expected Number of Deal Registration
         1. Estimated Pipeline Created (USD)
     1. Automated Line Item Name Updates
         1. When Partner Marketing uses "MDF 000" as a placeholder
         1. System automatically replaces it with the actual MDF number
         1. Updates MDF number in the GitLab issue name
     1. GitLab Integration Features - the system automatically populates GitLab issues with:
         1. Salesforce campaign name
         1. Salesforce campaign link
         1. Target Number of Contacts
         1. Expected Number of DR
         1. Estimated Pipeline Created (USD)

#### Step 4: Update Tracking Sheet and Issue

1. Add Fund Request to issue and tracking spreadsheet.

## Canceled

At any time an MDF campaign has been canceled, we want to ensure all programs created get marked as cancelled or deleted.

### Allocadia

1. In the Sub Category details panel, update “Campaign Cancelled” to `Yes`
1. Add the Sub Category, Line Item, and Campaign Name with “Cancelled” to the beginning of the name

### Salesforce

1. Add `[CANCELLED]` to the beginning of the campaign name
1. Update the Status to `Aborted`
1. Remove the "Partner Account" and uncheck the "Sync to Vartopia" checkbox

### PRM MDF Request

1. Update the Status to `Cancelled` under the MDF Request Details - By doing so the Partner will receive an automated email informing the Funds Request initially submitted has been canceled or denied.

### Marketo

1. Ask #mktgops to delete the Marketo Program

### Zip

1. If applicable delete the Zip req and comment that the MDF has been canceled.

### Coupa

1. If applicable, CMM to ping procurement and finance in the Coupa req to notify them that the MDF has been canceled.

### GitLab Issue

1. Inform all stakeholders that the MDF campaign has been cancelled, add `Cancelled` label to issue and close the issue.

## Post Activity

This is not applicable to distributors with the exception of Carahsoft.

### Step 1: Partner submits MDF Claim

#### PRM MDF Claim

1. Partner will attach the POP and Lead List in the MDF Claim
1. Verify the POP, then update the Approval Status to `Approved`

### Step 2: List Import

#### Google Sheet/Drive

1. Clone the [List Import Template](https://docs.google.com/spreadsheets/d/143REaMQLyIy7to-CFktL45TTTLZxBQRJUDIOMCA3CVo/edit#gid=257616838)
1. Paste the information to the spreadsheet - don't forget Marketo Program Name, First Name, Last Name, Email, Company Country, Province (only USA/Canada), Member Status, CRM Partner ID are mandatory.
     1. For Distributor: In the CRM ID, add each individual partner CRM ID that each leads corresponds to.
1. Download the .csv file: File > Download > .csv
1. Drop the .csv file to [Google Drive Folder](https://drive.google.com/drive/folders/1SvDR2KW8_vtPZjJ7WWihA1iOgSJn0_fv?usp=share_link)

#### Slack

1. You will receive a notification from `#event_list_upload` reporting the status of your list import
1. Review the report link if there are any failed record
Check the Status column for details on why the import may have failed.

#### Salesforce Campaign

1. Check the campaign members to ensure all has synced to Salesforce with the Status = Responded
1. If the Status remains in Member, complete the following steps:
     1. Go Marketo Program
     1. Select the Processing smart campaign
         1. In Smart List, add Program Status = `Partner - MDF > Member`
         1. In Schedule, run now.

#### GitLab Issue

1. In the Post - Event, check list import task

#### Tracking Sheet

1. Check "POP and Leads Uploaded" on the tracking sheet

### Step 3: Create Coupa Req and PO with the Support for the Procurement team

| When                                   | Action                                                                                                                                                                                                            | Tracking Sheet Updates                                  |
|----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------|
| POP is received and approved           | Approve the MDF Review step in Zip for Coupa Req to be created<br>If there was a contract involved this step has already happened so you’ll open the coupa req and tag Renz Santos and ask him to process the PO  | Check "Zip Approved"                                    |
| Coupa req is created                   | Check on the status until the PO has been created                                                                                                                                                                 | Update Coupa Req #                                      |
| PO is created                          | Email Partner the steps to have them upload their invoice                                                                                                                                                         | Check `PO Created` and `Informed Partner about invoice` |
| 24 hours after the invoice is uploaded | Approve the invoice. You’ll do this by going to your Coupa inbox and clicking on the line time. It will take you to a new screen and double check the amount is correct and click Approve button (it’s in green)  | Check "Invoice Approved Coupa"                          |
