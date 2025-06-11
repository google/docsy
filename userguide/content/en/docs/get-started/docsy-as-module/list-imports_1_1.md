Processes for importing records into Marketo

### Video Explanation of list upload process

Video Explanation of list upload process (internal)

Field event list uploads are to be done before any kind of follow up or outreach is done so we can ensure proper order of operations & attribution is given correctly.

There are a few ways to import records into the database:

<!-- Unsupported block type: table -->

### Import Methods and their SLA

The SLA for each import method has been decided based on the perceived optimal response time. The turnaround time for an Event, Sponsorship and or Advertising list upload is deemed a high priority due to the nature of necessary SDR outreach on “warm” prospects. If a list of prospects cannot be considered “warm”, please expect a turnaround time of the listed 5 day SLA and use the appropriate template.

If a last minute request, please open issue any way and ASK for a faster turnaround or ping OPS in #mktgops slack channel to discuss options

### Import Cleaning Template - Info for Pre-MktgOps Hand-off

- Please utilize the Google Sheet included in the event list upload and general list upload issue templates. This spreadsheet template allows for quick edits and faster data checks, such as: 

- Be aware that any changes to the spreadsheet layout may affect the built-in formulas. Consults MktgOps before making changes

- Columns highlighted in teal are considered Required Data and not including this data is grounds for refusal

DO NOT MAKE CHANGES TO THE ORIGINAL SPREADSHEET OR INPUT DATA INTO IT. MAKE A COMPLETE COPY AS INDICATED IN THE LIST UPLOAD ISSUE TEMPLATE

The following data cleanup is required for any list prior to sending it to the Marketing Operations team. If your spreadsheet/data does not meet these guidelines it will be returned to you to fix prior to being uploaded.

- It is the responsibility of the person submitting the list to clean the list utilizing the import cleaning template

- All fields are separated into their own column 

- Please use the correct member statuses based on the definitions and type here. They must be exact matches, no abbreviations.

- Preferred format for Marketo upload is .csv, but will accept an .xls, or .xlsx. Provide as Google Sheet in the upload issue. DO NOT upload the file directly on the issue. Uploading files to the issue exposes ALL collected personal data to the internet and opens GitLab up to litigation

- Record ownership will be assigned using established lead routing, which is controlled by Traction Complete

- In order to mark leads as Opt-in = TRUE, a record of the terms and conditions the leads agreed to upon having their data collected must be recorded. Check the terms of service wording has been recorded in the upload issue before opting in leads to receive marketing communications. No ToS, no Opt-in. Period. To find the appropriate language, refer to Marketing Rules and Consent Language

- If there are any records who have opted out of contact for any reason, define that on the spreadsheet by selecting Opt-in = FALSE

- Leave Opt-In empty if no other option is available

Steps (also documented in How it Works tab of the spreadsheet):

1. Use the “Lead Data for upload” tab to drop your relevant data into the matching blue columns in the left-most rows (i.e. copy the column in your file for “First Name” and paste it in the column “First Name”). This tab will remain locked and untouched by MktgOps as they will Duplicate into a new tab for additional cleaning

1. Do not alter any rows or columns with the green column headers. These contain formulas that will reference your inputs under the blue column headers and provide you with proper capitalization (see clarifications below for more detail), as well as data entry that is acceptable for Marketo/Salesforce, and check the syntax of the email provided by your event organizer.

1. Check for any ““warnings”” highlighted in red in the blue columns and erroneous emails marked as FALSE in the green columns - if there are none, you are good to go! (If there are highlighted cells, follow the instructions in the Warning Handling steps below. Correct the errors and then proceed.)

1. Copy the data found under the green header and PASTE > VALUES into the blue header section of the spreadsheet. Erase the green header section after the formatted data has been copied over

1. Rename the spreadsheet to match the campaign tag name

1. Give edit access of the spreadsheet to the relevant MktgOps member

1. Post a link to the spreadsheet in the list upload issue

1. Apply the ~“List Upload: Ready” label to the issue

Error Handling:

- Email Syntax: If the syntax of the email is not met (meaning it includes @ and a relevant ending such as .com or .co.uk or .io) it will be listed as FALSE under the green column headers and the email can be updated to make it ready for upload. Note that Google Sheets does not understand all email domains, such as .mil or .us, and those can be ignored

- GitLab emails: If the person has @gitlab in their email address, they will be highlighted in red under the blue column header and should be removed

- Duplicate Records: If the person is a duplicate based on email address, they will appear red under the blue column header, and should be removed from the list.

### Best Practices

1. Remove inaccurate entries 

1. Blank fields are better than junk data. We have enrichment tools that are designed to write to blank fields. Also we can run reports on the blank fields to find where our data gaps are.

1. If you do not have a CONTACT Phone do not substitute the ACCOUNT Phone and vice versa. Leave it blank.

1. Sort spreadsheet by Email Address and remove duplicates.

1. Only lead records from authorized sources – meaning sources have legally obtained lead record data– will be flagged as Opted-in. No exceptions 

1. Remove all embargoed country records.

1. Washington DC is a State value and is not to be split up between City State.

1. Zip Codes contain five (5) numbers, States in US East may start with a 0, make sure the Zip/Postal Code field is plain text and the leading 0 appears.

1. Member Statuses must match exactly to the program type and member status listed.

1. If list contains non-Latin characters (ex. Asian languages), it must be uploaded to Marketo using UTF-8 and UTF-16. Marketo instructions here. Salesforce Data Loader requires UTF-8 encoding, instructions here.

1. If there are notes added to the Last Event Notes column, add the SFDC campaign name to the column titled Last Event SFDC Campaign Name for each lead that has notes. If there are no notes for that lead, do not add anything to either column. This column is used to automatically move notes to the Qualification Notes field found on lead and contact pages in Salesforce. That field is not overridden like the Last Event Notes field and it’s where we can keep the notes for much longer.

1. MktgOps reserves the right to remove irrelevant notes from the spreadsheet. Only upload important notes and please make sure they are cohesive.

### Notes at the record level

We strive to gather as many notes as possible about each person who stops by the GitLab booth and talks with us. In an effort to speed up our list upload process, when notes are present, the campaign member status should ALWAYS be Follow Up Requested. The FMM no longer needs to read through the notes and make a judgement call on the status. If there are notes, campaign member status should ALWAYS be Follow Up Requested.

With a record marked as Follow Up Requested, this will score the record with 100pts, as noted here, which will then in turn show up in the Sales Dev’s team P1 (Priority 1) view. The Sales Dev team is happy to have potential unrelevant records routed to them in an effort to speed up the records getting to them.

Its also super important that if there are notes, the notes are clear to someone who both was onsite and those who were not. Think to yourself, if someone was not there onsite, will they know what action to take as a result of these notes?

### Required Data and Recommended Data

- For all uploads, there is mandatory data required for a successful upload. At a minimum, the following data must appear on the spreadsheet and without this data an upload can be refused by MktgOps: 

- Additionally, there is data required for leads to be successfully routed to SDRs. While this information is not mandatory, it is strongly preferred.. GitLab employs tools that enrich leads and Accounts, but those tools are not guaranteed to work, so if the data can be found at the source it is preferred. Lastly, while it is less likely to have an upload refused due to missing this data, missing this data is still considered grounds for refusal by the MktgOps team. The recommended information is as follows: 

### Partner Lead Imports

If this import is part of a Channel or Alliance marketing campaign, you must include the CRM Partner ID as a column in your list upload. You can find a list of these IDs here

If the lead is not associated to a partner, leave that field blank.

### Campaign Templates - Info for Post-MktgOps Hand-off

At time of upload, a campaign should already exist in Marketo . Campaigns are to be created by the campaign owner. For a running list of campaign templates, go here.

### Upload Process

In order to assure proper attribution of MQL Scoring and Last Interesting Moments, perform the following checks before any uploads occur:

- If a campaign does not exist, tag the Campaign Owner on the campaign epic or upload issue to ask for campaign creation

- Check that the campaign’s tokens are filled in, which are found under the My Tokens tab in the main campaign 

- Review the components of the campaign. The needed components include: 

### Best Practices and Procedure

1. Remove all unecessary data from Job Title, Company, Names and Locations columns, such as punctuation, self, etc, from the Google sheet before uploading. Check for any remaining duplicates and missing Required Data, pinging the campaign owner to fix, as needed

1. Only allow Opt-in=TRUE if the agreement to be contacted has been recorded in the list upload issue. Leave blank otherwise

1. Sort list by Campaign Member Status and then divide the whole list into separate tabs for the different statuses, eg. Attended, Registered/No Show, etc

1. Download the .csv file of the tabs to desktop

1. Load the corresponding .csv file to the corresponding static list and match up the fields on upload. These fields should mostly match automatically 

1. Always load No Show leads as Registered before setting them to No Show. Otherwise, they will not receive MQL scores. Check if a Smart Campaign changes the status to No Show before finalizing and if not, switch status from Registered to No Show

1. Depending on how the template has been set up, the remaining steps of appending data could be automated. If it is not, be sure to append the data listed above to the proper fields

1. After all steps of the needed Smart Campaigns have ran, including the often automated Program Status: Registered -> No Show, turn off the activated Smart Campaigns by “unscheduling” them

1. Check the Loading Errors smart list for any potential lead loading errors. 

1. Once the Marketo –> Salesforce sync has completed, use the Upload checking template - do not erase lead view to check data has been applied correctly, scoring has occurred and leads have routed. Plug the campaign tag, or Marketo program name, into the lead view’s campaign name field to view leads as a list

1. Ensure the number of leads present in the Salesforce campaign matches the total number of leads from the original spreadsheet

1. Announce the upload in either the event_list_upload or pub-sector-isr Slack channels, depending on the campaign’s intended Sub-Region. Include Region labels for private sector posts

1. After verified completion of all tasks, remove ~“List Upload: Ready” label and notify in the issue of upload completion. Adjust the “MktgOps” label and apply a milestone

1. Close list upload issue

### Operational uploads

In the event that a manual upload needs to occur for operational needs:

- Use a current or create a new program or smart list within the Non-Event List Loads folder 

- Create a new program or smart list within the appropriate folder by right clicking the correct folder 

- Some notable Operational programs already in place are listed below with links. This section will be updated on a needed basis: 

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