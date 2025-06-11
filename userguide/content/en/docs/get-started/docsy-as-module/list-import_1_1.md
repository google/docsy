---

title: "List Imports"
description: "The MktgOps team is responsible for importing records into Marketo for both field events and prospecting."
---







### FYI - Future State

MktgOps is in the process of moving list imports to a [self-service and automated model](/handbook/marketing/marketing-operations/automated-list-import). We are still manually importing, but the future state will remove Mops uploading lists. For `event` related imports, please default to the `self-service` procedure as noted in the handbook and [event-clean-upload-list](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/blob/master/.gitlab/issue_templates/event-clean-upload-list.md) issue template but ask for assistance from MktgOps, if needed. For `general` list imports, please continue using the issue template found in the Marketing Operations project titled [general-list-import-request](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/blob/master/.gitlab/issue_templates/general-list-import-request.md).

Currently, the MktgOps team is responsible for importing records into Marketo for both field events and prospecting. List imports are processed in **Marketo** which has native matching by `Email Address` functionality.

#### [Video Explanation of list upload process](https://drive.google.com/file/d/1Q9KtQbitoBHszV46zslxcKVStA-V5avG/view?usp=sharing)

**Field event list uploads are to be done *before* any kind of follow up or outreach is done so we can ensure proper order of operations & attribution is given correctly.**

There are three primary ways to import records into the database:

| Import Method | SLA | Submission Instructions | Operations Instructions |
| :------------ | :-- | :---------- | :-------- |
| Zoominfo w/in SFDC | self-managed | [Instruction video how to do this can be found in the handbook](/handbook/marketing/marketing-operations/zoominfo/) | Not applicable |
| csv file | **Accepted by OPS** - 24 business hours<br><br>**Upload to SFDC** - up to 5 business days | Use [MktgOPS **general** list import request template](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=general-list-import-request), format as a Google Sheet (Gsheet) & place **link to Gsheet in issue**<br><br>Written Instructions how to use template | Ad Hoc Upload |
| List from Field Event, Sposorship or Advertising | **Accepted & uploaded by OPS** - 24 business hours | Use [MktgOPS **event** clean and upload issue template](https://gitlab.com/gitlab-com/marketing/marketing-operations/issues/new?issuable_template=event-clean-upload-list), format and clean csv per instruction & place **link to Gsheet in issue**<br><br>Written Instructions how to use template | Field Event Upload<br><br>Alliance Event Upload |
|[Zapier](/handbook/marketing/marketing-operations/zapier/) Connection|2-3 weeks prior to start date| Use [Zapier Request issue template](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/blob/master/.gitlab/issue_templates/zapier_connection_request.md)|N/A|

#### Import Methods and their SLA

The SLA for each import method has been decided based on the perceived optimal response time. The turnaround time for an `Event, Sponsorship and or Advertising` list upload is deemed a high priority due to the nature of necessary `SDR` outreach on "warm" prospects. If a list of prospects cannot be considered "warm", please expect a turnaround time of the listed 5 day SLA and use the appropriate template.

#### If a last minute request, please open issue any way and ASK for a faster turnaround or ping OPS in `#mktgops` slack channel to discuss options

#### Import Cleaning Template - Info for Pre-MktgOps Hand-off

- Please utilize the Google Sheet included in the [event list upload](https://docs.google.com/spreadsheets/d/143REaMQLyIy7to-CFktL45TTTLZxBQRJUDIOMCA3CVo/edit#gid=257616838) and [general list upload](https://docs.google.com/spreadsheets/d/1dzFqwjoBat8sna0uZu9RSVTsPvAZnJ4Xx4GkZllAUD0/edit#gid=1770876869) issue templates. This spreadsheet template allows for quick edits and faster data checks, such as:
  - Capitalizing `First name` and `Last name`
  - Highlighting `last names` that appear more than once in green for faster duplicate detection
  - Highlighting duplicate emails and GitLab emails in red
  - Labeling possibly erroneous emails as `FALSE`. Be advised, this does not work for all email domains
  - Highlighting when `self` or `GitLab` are listed as `Company Name` in red
  - Converting `State` abbreviations from `Canada` and the `US` into full names
  - Highlighting when `Country` names match with each other in green for faster typo detection
- Be aware that any changes to the spreadsheet layout may affect the built-in formulas. Consults MktgOps before making changes
- Columns highlighted in teal are considered `Required Data` and not including this data is grounds for refusal

**DO NOT MAKE CHANGES TO THE ORIGINAL SPREADSHEET OR INPUT DATA INTO IT. MAKE A COMPLETE COPY AS INDICATED IN THE LIST UPLOAD ISSUE TEMPLATE**

The following data cleanup is required for any list prior to sending it to the Marketing Operations team. **If your spreadsheet/data does not meet these guidelines it will be returned to you to fix prior to being uploaded.**

- It is the responsibility of the person submitting the list to clean the list utilizing the import cleaning template
- All fields are separated into their own column
  - Person name separated into two columns - `First Name` `Last Name`
  - Duplicates must be reviewed and reduced
  - Address separated into individual fields (`Street`, `City`, `State/Province`, `Zip/Postal Code`, `Country`)
  - `Country` that **are not** `United States`, `Australia` or `Canada` *must* have `State` field deleted or cleared as it will create conflicts and will not sync to SFDC
- Please use the correct member statuses based on the definitions and type [here](/handbook/marketing/marketing-operations/campaigns-and-programs/#campaign-type--progression-status). They must be exact matches, no abbreviations.
- Preferred format for Marketo upload is .csv, but will accept an .xls, or .xlsx. Provide as Google Sheet in the upload issue. **DO NOT** upload the file directly on the issue. Uploading files to the issue exposes ALL collected personal data to the internet and opens GitLab up to litigation
- Record ownership will be assigned using established lead routing, which is [controlled by Traction Complete](/handbook/marketing/marketing-operations/traction-lead-complete)
- In order to mark leads as `Opt-in = TRUE`, a record of the terms and conditions the leads agreed to upon having their data collected must be recorded. Check the `terms of service` wording has been recorded in the upload issue **before** opting in leads to receive marketing communications. No ToS, no `Opt-in`. Period. To find the appropriate language, refer to [Marketing Rules and Consent Language](/handbook/legal/marketing-collaboration/#marketing-rules-and-consent-language)
- If there are any records who have opted out of contact for any reason, define that on the spreadsheet by selecting `Opt-in = FALSE`
- Leave `Opt-In` empty if no other option is available

**Steps (also documented in *How it Works* tab of the spreadsheet):**

1. Use the "Lead Data for upload" tab to drop your relevant data into the matching blue columns in the left-most rows (i.e. copy the column in your file for "First Name" and paste it in the column "First Name"). This tab will remain locked and untouched by MktgOps as they will `Duplicate` into a new tab for additional cleaning
1. Do not alter any rows or columns with the green column headers. These contain formulas that will reference your inputs under the blue column headers and provide you with proper capitalization (see clarifications below for more detail), as well as data entry that is acceptable for Marketo/Salesforce, and check the syntax of the email provided by your event organizer.
1. Check for any ""warnings"" highlighted in red in the blue columns and erroneous emails marked as `FALSE` in the green columns - if there are none, you are good to go! (If there are highlighted cells, follow the instructions in the *Warning Handling* steps below. Correct the errors and then proceed.)
1. Copy the data found under the green header and PASTE > VALUES into the blue header section of the spreadsheet. Erase the green header section after the formatted data has been copied over
1. Rename the spreadsheet to match the campaign tag name
1. Give `edit access` of the spreadsheet to the relevant MktgOps member
1. Post a link to the spreadsheet in the list upload issue
1. Apply the ~"List Upload: Ready" label to the issue

**Error Handling:**

- **Email Syntax:** If the syntax of the email is not met (meaning it includes @ and a relevant ending such as .com or .co.uk or .io) it will be listed as FALSE under the green column headers and the email can be updated to make it ready for upload. Note that Google Sheets does not understand all email domains, such as `.mil` or `.us`, and those can be ignored
- **GitLab emails:** If the person has @gitlab in their email address, they will be highlighted in red under the blue column header and should be removed
- **Duplicate Records:** If the person is a duplicate based on email address, they will appear red under the blue column header, and should be removed from the list.

Video of how this works tbd.

#### Best Practices

1. Remove inaccurate entries
     - `Job Title` **remove** "self", "me", "n/a", etc
     - `Phone` **remove** obvious junk numbers 0000000000, 1234567890, etc
     - `State` should be empty unless `country` equals `United States` or `Canada`
1. **Blank fields** are better than junk data. We have enrichment tools that are designed to write to blank fields. Also we can run reports on the blank fields to find where our data gaps are.
1. If you do not have a CONTACT `Phone` **do not** substitute the ACCOUNT `Phone` and vice versa. Leave it blank.
1. Sort spreadsheet by `Email Address` and remove duplicates.
1. Only lead records from authorized sources -- meaning sources have legally obtained lead record data-- will be flagged as `Opted-in`. **No exceptions**
     - Pulling list of names out of LinkedIn and importing the records into SFDC **does not** qualify as compliant. In EMEA these lists *will not* be uploaded
     - Field events that have not gained consent from the attendees that their name will be shared **are not** compliant.
     - Agreements to be contacted must explicitly state the individual has `opted-in` to receive communication and cannot leave room for nuance
     - Getting someone's name and/or business card from a meetup **does not** qualify as compliant.
1. Remove all [embargoed country](/handbook/legal/trade-compliance/) records.
1. `Washington DC` is a `State` value and is not to be split up between `City` `State`.
1. `Zip Codes` contain five (5) numbers, States in US East may start with a `0`, make sure the `Zip/Postal Code` field is **plain text** and the leading `0` appears.
1. Member Statuses must match exactly to the program type and member status [listed](/handbook/marketing/marketing-operations/campaigns-and-programs/#campaign-type--progression-status).
1. If list contains non-Latin characters (ex. Asian languages), it must be uploaded to Marketo using UTF-8 and UTF-16. [Marketo instructions here](https://docs.marketo.com/display/public/DOCS/Import+a+Non-Latin+Characters+List). Salesforce Data Loader requires UTF-8 encoding, [instructions here](https://help.salesforce.com/articleView?id=faq_import_dataloader_specialchars.htm&type=5).
1. If there are notes added to the `Last Event Notes` column, add the `SFDC campaign name` to the column titled `Last Event SFDC Campaign Name` for each lead that has notes. If there are no notes for that lead, do not add anything to either column. This column is used to automatically move notes to the `Qualification Notes` field found on lead and contact pages in Salesforce. That field is not overridden like the `Last Event Notes` field and it's where we can keep the notes for much longer.
1. MktgOps reserves the right to remove irrelevant notes from the spreadsheet. Only upload important notes and please make sure they are cohesive.

##### Notes at the record level

We strive to gather as many notes as possible about each person who stops by the GitLab booth and talks with us. In an effort to speed up our list upload process, when notes are present, the campaign member status should ALWAYS be `Follow Up Requested`. The FMM no longer needs to read through the notes and make a judgement call on the status. If there are notes, campaign member status should ALWAYS be `Follow Up Requested`.

With a record marked as `Follow Up Requested`, this will score the record with 100pts, as [noted here](/handbook/marketing/marketing-operations/marketo/#behavior-scoring), which will then in turn show up in the [Sales Dev's team P1 (Priority 1) view](/handbook/marketing/sales-development/#bdr-event-promotion-and-sales-dev-org-follow-up). The Sales Dev team is happy to have potential unrelevant records routed to them in an effort to speed up the records getting to them.

Its also super important that if there are notes, the notes are clear to someone who both was onsite and those who were not. Think to yourself, if someone was not there onsite, will they know what action to take as a result of these notes?

#### Required Data and Recommended Data

- For all uploads, there is mandatory data required for a successful upload. At a minimum, the following data must appear on the spreadsheet and **without this data an upload can be refused by MktgOps**:
  - First Name
  - Last Name
  - Company Name
  - Email Address
  - Country
  - State (United States and Canada only)
  - [Campaign Member Status](/handbook/marketing/marketing-operations/campaigns-and-programs/#campaign-type--progression-status)
  - Opt-In status: `True`, `False`, or `leave blank` (determines if leads are **legally** signed up for GitLab's marketing emails)
- Additionally, there is data required for leads to be successfully routed to SDRs. While this information is not mandatory, it is strongly preferred.. GitLab employs tools that enrich leads and `Accounts`, but those tools are not guaranteed to work, so if the data can be found at the source it is preferred. Lastly, while it is less likely to have an upload refused due to missing this data, **missing this data is still considered grounds for refusal by the MktgOps team**. The recommended information is as follows:
  - Employee Bucket or Number of Employees
    - GitLab's segmentation standard for `Employees Bucket` includes the following groups: `1-99`, `100-499`, `500-1,999`, `2,000-9,999` and `10,000+`.
    - You can also enter an integer in for `Num Employees` and this will automatically update the `Employees Bucket` field if blank.

#### Partner Lead Imports

If this import is part of a Channel or Alliance marketing campaign, you must include the `CRM Partner ID` as a column in your list upload. You can find a list of these IDs [here](/handbook/marketing/channel-marketing/partner-campaigns/#crm-partner-id)

If the lead is not associated to a partner, leave that field blank.

### Campaign Templates - Info for Post-MktgOps Hand-off

At time of upload, a campaign should already exist in `Marketo` . Campaigns are to be created by the campaign owner. For a running list of campaign templates, go [here](/handbook/marketing/marketing-operations/campaigns-and-programs/#how-to-clone-the-marketo-program).

### Upload Process

In order to assure proper attribution of `MQL Scoring` and `Last Interesting Moments`, perform the following checks before any uploads occur:

- If a campaign does not exist, tag the `Campaign Owner` on the `campaign epic` or `upload issue` to ask for campaign creation
- Check that the campaign's `tokens` are filled in, which are found under the `My Tokens` tab in the main campaign
  - `Tokens` are used via `Smart Campaigns` to apply `Last Interesting Moments` to all leads whom appear in the campaign. The minimum `tokens` that should be used relate to the campaign's `Event Name`, `Event Date` and `Landing Page URL`. Without these filled out, `Last Interesting Moments` will fill in permanently `blank`
- Review the components of the campaign. The needed components include:
  - `Static List(s)` in which to load lead list(s). The `static list(s)` should be renamed to resemble the program name. Depending on the campaign template, there may be more than one `static list` available. Some templates have been automated in a way that will fully launch relevant `Smart Campaigns` to append all relevant data, including `Campaign Member Statuses` and other important fields
  - `Smart List` for finding loading errors, or leads Marketo perceives as `duplicates`. If the `Smart List` list is not present, create a `Smart List` with the following filters: `Member of Program = current program name` and `SFDC Created Date = is empty`
  - `Smart Campaign` that triggers a `flow` when leads are added to the campiagn's static list(s). This flow should set to append data to all of the following fields **if the fields are empty ONLY**: `Acquisition Program` and `Person Source` (same as `Initial Source` in SFDC). This `Smart Campaign` should end with a `Wait 5 Minutes` followed by `Change Program Status: Registered -> No Show`
  - `Smart Campaign` to add an `Interesting Moment`. Check there are enough `triggers` and `flows` to activate for each `Campaign Member Status` that appears on the list. Usually these include, but are not limited to: `Attended`, `Attended On-Demand`, `Visited Booth` and `No Show`. A general rule is to not include `Registered`, `Sales Nominated` or `Marketing Nominated`. The previously mentioned `tokens` will be used to apply the full event data of the `Interesting Moments` to the leads. Depending on the template, sometimes this `Smart Sampaign` and the previously mentioned campaign are one and the same

#### Best Practices and Procedure

1. Remove all unecessary data from `Job Title`, `Company`, `Names` and `Locations` columns, such as punctuation, `self`, etc, from the Google sheet before uploading. Check for any remaining duplicates and missing `Required Data`, pinging the `campaign owner` to fix, as needed
1. Only allow `Opt-in=TRUE` if the agreement to be contacted has been recorded in the list upload issue. Leave blank otherwise
1. Sort list by `Campaign Member Status` and then divide the whole list into separate tabs for the different statuses, eg. `Attended`, `Registered/No Show`, etc
1. Download the .csv file of the tabs to desktop
1. Load the corresponding .csv file to the corresponding `static list` and match up the fields on upload. These fields should mostly match automatically
     - If there is only `one static list` for the program, change the `Campaign Member Statuses` for each uploaded list before uploading the next. If all leads were uploaded at once and this is not possible, create a `Smart List` and filter by `Email Address` as a way to distinguish and change to the correct statuses
1. Always load `No Show` leads as `Registered` before setting them to `No Show`. Otherwise, they will not receive MQL scores. Check if a `Smart Campaign` changes the status to `No Show` before finalizing and if not, switch status from `Registered` to `No Show`
1. Depending on how the template has been set up, the remaining steps of appending data could be automated. If it is not, be sure to append the data listed above to the proper fields
1. After all steps of the needed `Smart Campaigns` have ran, including the often automated `Program Status: Registered -> No Show`, turn off the activated `Smart Campaigns` by "unscheduling" them
1. Check the `Loading Errors` smart list for any potential lead loading errors.
     - Check the `Person Details` on any leads that show up on the smart list and correct the error. If Marketo indicates a `duplicate`, change the name on the lead by adding random but easily identifiable characters to the last name and manually force the lead to sync with SFDC. Find the lead in SFDC and merge it with the pre-existing duplicate. If there is a differing `email address` between the records, add the new `email address` as a secondary email. Add to SFDC campaign with the appropriate `Campaign Member Status`, if necessary
1. Once the Marketo --> Salesforce sync has completed, use the [Upload checking template - do not erase](https://gitlab.my.salesforce.com/00Q?fcf=00B4M000004tTvd) lead view to check data has been applied correctly, scoring has occurred and leads have routed.  Plug the `campaign tag`, or Marketo program name, into the lead view's `campaign name` field to view leads as a list
1. Ensure the number of leads present in the Salesforce campaign matches the total number of leads from the original spreadsheet
1. Announce the upload in either the `event_list_upload` or `pub-sector-isr` Slack channels, depending on the campaign's intended `Sub-Region`. Include `Region` labels for private sector posts
1. After verified completion of all tasks, remove ~"List Upload: Ready" label and notify in the issue of upload completion. Adjust the "MktgOps" label and apply a milestone
1. Close list upload issue

#### Operational uploads

In the event that a manual upload needs to occur for operational needs:

- Use a current or create a new program or smart list within the [Non-Event List Loads](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/MF4394A1) folder
  - If creating a new program or smart list, start by making a new, appropriately named sub-folder under the `Non-Event List Loads` folder
- Create a new program or smart list within the appropriate folder by right clicking the correct folder
  - If creating a new program, select the correct `Channel` for the task. For most non-event uploads, `Operational` should work
- Some notable `Operational` programs already in place are listed below with links. This section will be updated on a needed basis:
  - [Opt-Outs](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/MF6347A1)

### Trusted vs Non-Trusted Imports

In Marketo there is a an option to choose trusted or non-trusted sources. Non-trusted sources are for list uploads that we are not confident in the data points given to us. For example, if we are loading a list with inferred country data from IP, we do not want it to overwrite our current location data that is more accurate. Blocking updates allows for a field to be updated if blank, but will not overwrite a field that already has a value.

Here is the list of fields that are blocked during a non-trusted import. If you would like to add more fields, please file an issue with the mops team.

- First Name
- Last Name
- Company
- Country
- City
- State
- Postal Code
