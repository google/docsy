---
title: "Cognism"
description: "Cognism is sales intelligence software that provides contact or account data helping sales and marketing teams drive predictable pipeline"
---

## About Cognism

Cognism is sales intelligence software that provides contact or account data helping sales and marketing teams drive predictable pipeline

## Set Up

Once you receive your login and enter the Cognism platform you will need to download the Cognism Chrome extension. You can also find the link for the Cognism Chrome Extension by following this [link](https://help.cognism.com/hc/en-gb/articles/4403402216722-How-to-install-the-Cognism-Chrome-Extension).

## Connect your tools

Once you are logged in into your Cognism Web-App, start by connecting your tools (Salesforce & Outreach). This will allow you to export leads to both tools.

Even though this process is very straight forward, feel free to reference the [How to Integrate Cognism to Salesforce](https://help.cognism.com/hc/en-gb/articles/4407455139602-How-to-Integrate-Cognism-to-Salesforce-) and [How to Integrate Cognism to Outreach](https://help.cognism.com/hc/en-gb/articles/12127689794834-How-to-integrate-Cognism-to-Outreach) documentations if need be.

## Ways to access Cognism

Your direct login allows you to login in either the [Cognism Web App](https://app.cognism.com/auth/sign-in) or in the Cognism Chrome Extension. Both can be used to access the Cognism data. Additionally, Cognism data is populated directly into our SFDC instance, on the Cognism fields for the leads that meet the criteria to be automatically enriched or, on the leads that have been exported manually from the Chrome Extension or from Cognism Web App.

## Who can use Cognism at GitLab?

For the moment, the Cognism Web App and the Cognism Chrome Extension are only used by the Sales Development Organization and specifically by the BDR role. We do allow for temporary licenses outside of the BDR role if we have them available, however, the temporary license will get revoked as soon as a BDR needs it.

The Cognism data that was enriched on specific lead records, however, can be viewed by anyone by just checking the Cognism fields on the lead & contact objects.

Note, we redistribute inactive seats to new Cognism users. Any users who have not logged in to Cognism in the last 2 months are at risk of losing their seats. If you wish to keep your Cognism seats, please be sure you are regularly logging in and using the platform.

## Training

Both the Cognism Web App and the Cognism Chrome Extension are self explanatory and very user friendly, however, Cognism does provide additional videos that can be viewed to get familiar with the tool.

| Title | Duration | Summary |
| ------ | ------ | ------ |
| [Cognism Chrome Extension Intro](https://www.youtube.com/watch?v=D0kv7aF7Iho&ab_channel=Cognism)| 2:04 | A general overview of the Cognism Chrome Extension|
| [Cognism Chrome Extension Workflow](https://www.youtube.com/watch?v=GduWMj4nzx8&ab_channel=Cognism)| 1:13 | Cognism Chrome Extension Workflow Examples|
| [How to Use Cognism for Sales - Product Tour](https://www.youtube.com/watch?v=4YG5NhxbN-w) | 10:40 | Cognism Platform Product Tool|
| [How to Use Cognism for Marketing](https://www.youtube.com/watch?v=4YG5NhxbN-w) | 04:19 | How to use the Cognism platform to power-up your marketing engine |

## SFDC Field Mappings

With Cognism, we're only enriching Cognism custom fields so the mapping reflects this. You'll find these fields by looking for `[Cognism]` in their field label name. On the lead & contact layouts, you'll find the Cognism Section, right below the Zoominfo Section.

If you have concerns about field mapping or you notice that some of the fields do not get enriched as expected, do reach out to Marketing Operations.

## Do Not Call and Do Not Email Automation

If the proper criteria is set, Cognism can cause a lead/contact in SFDC to be labeled as `Do not email` and `Do not call`. Read more about the rules on the [sales development handbook page](/handbook/marketing/sales-development/#do-not-call-and-do-not-email-automations).

## Outreach Integration

The Cognism Outreach integration is live and you may export contacts directly to Outreach. Any contacts you do export, will also be exported in SFDC.

There are some limitations in place:

- We do not allow for new accounts/account updates from Cognism into Outreach.
- Please do not upload any contact without an email address into Outreach- if you do, the prospect will not sync into SFDC and any activities you do on the prospect will not be recorded in SFDC.
- Any prospects created without email address will be found and deleted in the Outreach database management we will run monthly. To avoid uploading contacts with no email addresses, please use the Cognism filtering available.

## Use of Cognism Enhance feature to enrich lead list uploads without email

There are situations where list uploads, obtained from various events, do not have an email and, therfor, cannot be uploaded into our SFDC instance. To bypass this challenge, we use the [Cognism Enhance](https://help.cognism.com/hc/en-gb/articles/4404423963026-Using-Cognism-Enhance) feature.  It only needs certain data points (`First Name`, `Last Name`, `Company Name`) to be able to fill in the rest (`Email`).

If your lead list does not have is missing the email data point, feel free to open a Mops project with this issue template, fill in the needed details, and the missing data will be added for those leads that match to Cognism's database.

**NOTE:** All leads that have been enriched with email information, are, by default, opted out of email communication. These are not opted in and we can only reach out if we get the proper `express consent`.

## Cognism <> Openprise Automated Enrichment

Using Openprise and the Cognism API Key, we're able to leverage our Cognism Credits and automatically enrich salesforce records on a daily basis. Once the record meets the below criteria, it is added to the enrichment queue and automatically enriched if it matches Cognism's database.

The current enrichment criteria is the following:

1. `Owner Profile` contains `SDR, Sales Development` *AND* `Initial Source` equals `AE Generated, Cognism, DiscoverOrg, Email Request, etc.`, `Lead Status` equals `Accepted`, *AND* `Created By` not equal to `Marketo Integration, Outreach Integration`;
2. `Last Interesting Moment Date` equals `Last 30 Days` *AND* `[PQL] Product Qualified Lead` equals `True` *AND* `[PTPT] Score Group` equals `4,5`;
3. `Initial Source` equals `Zoominfo` *AND* (`Phone` equals `blank` *OR* `Email` equals `blank`) *AND* `Demographic Score` greater than `59`;
4. `Initial Source` equals `Request - Contact` *AND* (`Phone` equals `blank` *OR* `Email` equals `blank`) *AND* `Lead Owner` does not contain `disq,inel,jihu`.
5. `Lead Status` equals `MQL, Accepted, Qualifying` *AND* `Vartopia Partner Account` equals `blank` *AND* Campaign Field - `Member First Responded Date` equals `Current FY` *AND* Campaign Field - `Campaign Type` equals `Trial` *AND* `[Cognism] Automatically Enriched` equals `False` *AND* `Account Demographics: Region` equals `EMEA`.

## Cognism Licensing Policy & Procedures

### Administration

Cognism management is exclusively done by the Marketing Operations team. We currently have 70 seats for Cognism, seats which are all dedicated to the Sales Development Org and specifically to BDRs. Outside of the BDR roles, we only allow for temporary licenses, for other roles, when such a license is not needed on the BDR side.

### Access & Help

BDRs receive acces to Cognism as part of the onboarding process. If the team member did not receive access or if access has been removed and you would like it back, you will need to open an [individual access request](/handbook/it/end-user-services/onboarding-access-requests/access-requests/).

If you are experiencing issues with Cognism, feel free to chime in #mktgops slack channel and ask for help. You can also reach out to Cognism directly at help@cognism.com

### Monthly License Review

Due to the limited seats available, licenses will be reviewed on a monthly basis to ensure alignment with our policy. Our current policy states that for an active, non-admin license will be flagged for review it needs to meet the criteria below:

1. It must be integrated with both SFDC & Outreach;
2. A minimum number of more than 10 profiles have been viewed in the last 3 months;

Before a license is deactivated, Mops will reach out to the user and confirm if they still need access to the platform. If they do not need access, then the user is removed from Zoominfo. Please not that even if the user access is removed, they are still able to see the Cognism field data in SFDC.

### Detailed Process

1. Log into Cognism, Dashboard, User Activity Section;
2. Check users for the criteria above;
3. Reach out to users on Slack;
4. Deactivate users who no longer need access; (A lack of response will be considered as if the license is not needed)
5. Create an issue in Mktgops Project, keeping track of the users who have been deactivated. The label Mktg Tool Audit will be used.

If a temporary license is assigned to a non-BDR role it can be revoked at any time if it's needed for a BDR Role.

### Pending Invites

Pending Cognim Invites have to be accepted in the time-span of a week because they block licenses from being assigned. If, after a week, the invite is still not accepted, it will be cancelled. Another invite can be sent out if requested through an [individual access request](/handbook/it/end-user-services/onboarding-access-requests/access-requests/)
