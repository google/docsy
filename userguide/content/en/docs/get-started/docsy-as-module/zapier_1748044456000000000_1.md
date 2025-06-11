---
title: "zapier"
---

## What is Zapier?

**Most of Marketing Operation's Zaps are being migrated to Workato, please follow along [epic](https://gitlab.com/groups/gitlab-com/business-technology/enterprise-apps/-/epics/532) for more information**
Zapier is an automation tool that allows us to move data from one application to another, that otherwise would not have had an integration. Zapier helps us be more efficient and allow for real-time passage of data between two disperate systems.

**Common Zaps**:

* Google Sheets to Marketo

## What Data is Required?

These fields must be required and captured in order to allow for proper routing of leads:

* First Name
* Last Name
* Email
* Company
* Country (must be a [picklist containing all or some of these values](https://docs.google.com/spreadsheets/d/1cV_hI2wAzLxYYDI-NQYF5-FDDPXPXH0VV5qRBUJAQQk/edit?usp=sharing))
* Email Consent (Whether or not we received consent to send email, can be `TRUE` of `FALSE`) [Reference the legal handbook](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-privacy/#marketing-rules-and-consent-language/) for the language that should be used.

## When to Request

This rubric will help you determine if Zapier is a viable solution for your campaign.  It will be at Mops discretion whether or not Zapier is the right solution for your campaign. Mops does not own Zapier, but we have access to use the tool to help with programs and campaigns. We are not responsible for setting up zaps for other reasons.

Mops evaluates and triages incoming requests every Monday and that is when your request will be accepted/rejected. Please allow 2-3 weeks for Mops to build the Zap. The Zap should be set up *before* the program is set to go live.

There are two main reasons and advantages of using Zapier:

1. When there is a time savings for setting up the Zap vs importing multiple lists
1. Having data pass between systems in real-time

|Type|Example|Zap?|
|----|----|-----|
|Recurring list loads that happen over course of weeks/months|Ongoing survey campaign |Usually|
|Registration over the course of weeks/months outside of Marketo|Commit|Sometimes|
|Form Automation when connector to Marketo not available|EventBrite, Social Forms|Usually|
|One time list loads |Sponsored Webcast                        |No|

## How to Request

Please submit an issue with Marketing Operations using this [issue template](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/blob/master/.gitlab/issue_templates/zapier_connection_request.md)

If you are using a google form, you must give mops access to the google sheet containing the responses from the form.

## Mops Directions for Setup Google Sheets

Google Sheets is the most common zap we currently use, but other connectors (like EventBrite) are set up in a very similar way. If you can set one up, you can set them all up! Not covered is different filters, paths and delays you can add in addition to the steps above.

The Marketo program needs to be set up prior to connecting to Zapier. Ensure there is a list in Marketo that Zapier can push the leads to. Setup instructions are found [here](/handbook/marketing/marketing-operations/). Make sure that form responses are properly configured to match picklists found in [list uploads](/handbook/marketing/marketing-operations/list-import/), otherwise you will run into errors when syncing the lead to SFDC from Marketo.

### Step 1:  Access to proper accounts

* Make sure you have edit access to the google sheet, and that your account has been set up in Zapier.
* Ensure there are already columns set up with the proper information you want to captured.
* Include one row of data in that worksheet (can be dummy data), it is useful for testing and mapping.

### Step 2: Navigate to `Zaps`

* Go into the `Marketo` Folder
* You can clone an existing Zap, or `Create Zap`
* Name your Zap

### Step 3: Choose the correct App or Event

* In this case, Google Sheets
* Select Trigger EventBrite
* Select `New Spreadsheet Row`
* Click Continue
* Select your account, choose the proper spreadsheet and worksheet
* Click Continue
* Test the trigger, this will look for a lead on the spreadsheet
* If you cannot find the right spreadsheet, you can click `Refresh Fields`. If it is still not there, make sure you have the correct access to that spreadsheet.

### Step 4: Connect Marketo

* Click `+` and find `Marketo`
* Select `Create or Update Lead`
* Select `Marketo Zapier API` as the account
* Click Continue

### Step 5: Field mapping

* With your google sheet handy, map all of the fields you want to capture from that google sheet, and add them to the corresponding Marketo field.
* You MUST include `email` otherwise it will fail.
* Note: You can add multiple fields to a single Marketo field. So, If you want to capture notes in column X, Y and Z into the Marketo `Comment Capture` field, you can. Add them once after the other in the mapping. You can also type free-text in those fields as well.
* Click continue when complete.
* When you click `test`, that person will be created in Marketo.

Note: There is a lag between clicking into a field and having the information populate, so be patient and only click once!

### Step 6: Add to list

* Click the `+` and find `Marketo`
* Select `Add Lead to List`
* Select `Marketo Zapier API` as the account
* Click Continue
* Find the correct list that you created as a part of the Marketo program set up (before step 1). Double check in Marketo that there is a campaign that triggers off of being added to a list, or else your lead will not be added to your program.
* In the `Lead` field, select the `Lead ID` from your example test above.
* Click Contine and Test

### Step 7: Test

Test this by making sure that example lead is added to the Marketo Program. As stated above, there should be a smart campaign that triggers off of a lead being added to a list. Ensure that the proper information is filled out, and formatting is correct. Improper values in State/County, Employees, etc can all make the lead creation fail (just like a regular [list upload](/handbook/marketing/marketing-operations/list-import/)).

### Step 8: Turn On

If all looks good, toggle the `on` button `on` in the top right of your screen.

* This Zap will stay on until you turn it off. To ensure not too many are on, it is good practice to set a calendar reminder when they should end, so you remember to go back in and turn it off.
