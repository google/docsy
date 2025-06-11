---
title: Emails Processes
description: An overview of email processes at GitLab.
twitter_image: '/images/tweets/handbook-marketing.png'
twitter_site: "@gitlab"
twitter_creator: "@gitlab"
---

## Overview
<!-- DO NOT CHANGE THIS ANCHOR -->

This page focuses on emails processes, owned and managed by Lifecycle Marketing, Marketing Campaigns, and Marketing Operations.

**Related Handbook: [Email Management](/handbook/marketing/marketing-operations/email-management/)**

## GitLab Email Calendar
<!-- DO NOT CHANGE THIS ANCHOR -->
We have moved our email calendar to Asana! We will have email stakeholder syncs each Thursday to review emails for the upcoming two weeks. If you need the call added to your calendar, please ask Allie Klatzkin. To ensure this is done smoothly, please add your emails to the calendar as soon as you know that they are upcoming (regardless if you have all information).

**All emails must be added to the calendar before the Email Stakeholder call the week before send**. Emails added after the call will be pushed to the next week.

Due to limited seats, we will be providing 1-2 seats per team on the calendar. Please reach out to your team's DRI with any questions.

**Calendar goal**

* Prioritize our emails to ensure we are sending the right emails to the right audience at the right time.
* Provide visibility across teams on upcoming sends
* Streamline communication and processes around emails

**Process to add emails to the calendar:**

[Email issue templates](/handbook/marketing/lifecycle-marketing/#issue-templates), in Campaigns, Marketing Ops, Corporate Marketing, and Field Marketing projects, will have the ~email-calendar label on them which will automatically add emails to the calendar. If your issue does not have the ~email-calendar label, please add it to ensure visibility for the calendar.

Steps to add to the Asana calendar:

* Ensure the label for "email-calendar" is added to your issue.
* Add labels for the appropriate segmentation: "Global-email", "EMEA-email", "AMER-email", "APAC-email"
* Add labels for appropriate email type: "operational-email" "non-operational-email"
* Set email issue due date as the send date

### Email Request Issue Template
<!-- DO NOT CHANGE THIS ANCHOR -->

**PLEASE READ IMPORTANT NOTE IN SECTION ABOVE PRIOR TO SUBMITTING**

To request an email send, please [open an issue](https://gitlab.com/gitlab-com/marketing/lifecycle-marketing/-/issues/new?issuable_template=request-email) for consideration of your MVC email idea, and provide as much detail as possible (especially around the audience), and please respect if the determination is that "the juice isn't worth the squeeze" and that we may want to delay the launch until some foundational audience segmentations are established. Please review the `Email Review Protocol` section below for more detail.

**SLA:** There is a standard 5 Business Day SLA in place for new email requests. All details in the "Submitter Checklist" of the issue must be complete in order to be triaged to the appropriate Campaign Manager and/or Lifecycle Marketing Manager.

Please note: Invitation and follow-up emails will not be sent on Thursdays, due to our ongoing nurture programs.

**Assign issues to:** You must assign issues to the corresponding Lifecycle Marketing Manager for review before send.

* `@aklatzkin`: Global, EMEA, Public Sector, Localized emails, Corporate Events, Newsletters
* `@alee`: AMER, EMEA, Customer emails

**Add the issue to the Asana email calendar:** By default, issues will add the label for ~"email-calendar", you will need to add the label for your audience as well:

* ~"Global-emails"
* ~"AMER-emails"
* ~"APAC-emails"
* ~"EMEA-emails"

**Urgent security emails are exempt from this SLA.*

All links in email sends, going to about.gitlab.com will need to be appended with utm parameters, following the nomenclature outlined in this [document](https://docs.google.com/spreadsheets/d/12jm8q13e3-JNDbJ5-DBJbSAGprLamrilWIBka875gDI/edit#gid=0). This is the way we track and give attribution to emails.

### Need-to-know details for the email request
<!-- DO NOT CHANGE THIS ANCHOR -->

Below are the information from the issue template that will need to be filled out before the Campaign Manager will create the email in the appropriate system:

* **Sender Name**: Typically we use GitLab Team for most outgoing communications; for Security Alerts we use GitLab Security. Choosing a name that is consistent with the type and/or content of email being sent is important, if unsure make a note and we will make recommendation.
* **Sender Email Address**: What email address should be used? Default is info@gitlab.com
* **Approvers**: All approvers must be listed on the email request. At least one individual who will receive the replies to the email must be listed an as approver. For example, if the email is coming from security@, someone who will receive replies to the email should be listed as one of the approvers. See approval table below.
* **Subject Line**: 50 character max is preferred (30-40 characters for mobile devices)
* **Email Body Copy**: Can be a text snippet within issue, clearly identified comment on issue or attach a Google Doc with copy. The copy must be approved before requesting the email.
* **Target Date to Send Email**: at a minimum a few days notice is preferred because we need to balancing the number of emails being sent to our database so they are not perceived (or marked) as spam; however, a simple email can be turned in a few hours if absolutely necessary
  * Please note invitation and follow-up emails will not be sent on Thursdays due to our ongoing nurture programs
* **Recipient List**: Emails can be sent to one of the [existing segments](/handbook/marketing/marketing-operations/marketo#geographic-dma-list ) or a recipient list can be provided as a .csv file
  * Audience should be appropriately segmented and tokens selected for personalization (if applicable)
  * All subscribers are selected list are opted-in to receive your message
  * If supplying a .csv file, the file must include the following fields:  Email address, First Name (or Full Name)
  * If personalizing the email to reference a specific project or page, that field must be included in the .csv file and clearly marked using the same terminology used in the email copy. The email copy must clearly identify {{Project}}or {{Page}}where the applicable personalization should be inserted.

### Types of email requests
<!-- DO NOT CHANGE THIS ANCHOR -->

Go to [this page](/handbook/marketing/marketing-operations/email-management/#types-of-email) to read more about email management and the different types of emails.

### Approvals and notifications for email requests
<!-- DO NOT CHANGE THIS ANCHOR -->

Marketing related ad-hoc emails are sent at the discretion of the Campaigns team.

Terms of Service or Privacy Policy updates that impact all users must be announced on the company meeting, in the `#whats-happening-at-gitlab` and `#community-advocates` Slack channels, and approved according to the table below prior to submitting the Email Request.

Support and Security emails sent to a small subset of users should be announced in `#community-advocates` and `#support_escalations` Slack channels, and mentioned in `#whats-happening-at-gitlab` if relevant.

The approval table below applies to non-Marketing emails.

|  **Users to be contacted** | **Approval by** |
| --- | --- |
|  < 1,000 | reply-to owner |
|  1,001-4,999 | PR, reply-to owner, community advocate |
|  5,000-499,999 | PR, reply-to owner, community advocate, director+ in originating department |
|  500,000+ | PR, reply-to owner, community advocate, director+ in originating department, e-group member |

## Ad-hoc (one-time) emails
<!-- DO NOT CHANGE THIS ANCHOR -->

### Important note regarding audience segmentation efforts and efficiency
<!-- DO NOT CHANGE THIS ANCHOR -->

Until our foundational Marketo database segmentations (noted in the overview at the top of this handbook page) are rolled out, there are challenges in targeting audiences efficiencly. If you would like to propose an MVC email, please remember that the tactical execution may be beyond bandwidth constraints.

### Steps to set up and edit emails
<!-- DO NOT CHANGE THIS ANCHOR -->

For one-time emails (i.e. a blast to promote a program for which we do not receive leads):

1. DEPENDENCY: target list issue must be complete before email can be sent (15 business day SLA to create target list)
2. Clone [this Marketo email send template](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/EBP7320A1)
    * Clone to: `A campaign folder`
    * Folder: `Ad-hoc (one time) emails`
    * Name: follow format of `YYYYMMDD_NameOfEmail` where YYYYMMDD is date of send (i.e. 20210603_DORAsurvey)
    * Description: Link to GitLab email issue
3. Update email in the send program
4. Update utm_campaign in Marketo **My Tokens** for email send

**How-to videos:**

* [Video on how to create an email](https://www.youtube.com/watch?v=pfl71Hh5e2E)
* [Video on how to edit an email](https://www.youtube.com/watch?v=RUvykCohLqI)

### Target list creation
<!-- DO NOT CHANGE THIS ANCHOR -->
Target list issue templates are an interim solution while foundational work is being complete for overall [Marketo database audience stretegy for lifecycle marketing engine](https://gitlab.com/groups/gitlab-com/marketing/-/epics/2022).

* **Lifecycle Stage (Lead Status):** (Raw, Inquiry, MQL, Accepted, Qualifying, Qualified)
  * **Funnel Stage:** (see [options](/handbook/marketing/marketing-operations/marketo/#segmentations))
  * **Sales Segment:** (Large, MM, SMB, PUBSEC - if US PubSec, you can also specify territory (NSG, DoD, etc))
  * **Region:** (APAC, AMER, EMEA)
  * **Sub-Region (East/West/PubSec or Southern/Northern/UKI/DACH):**
* **Persona-Level:** (see [options](/handbook/marketing/marketing-operations/marketo/#segmentations))
  * **Buyer Personas-Function:** (see [options](/handbook/marketing/marketing-operations/marketo/#segmentations))
  * **Language Preference:** (see [options](/handbook/marketing/marketing-operations/marketo/#segmentations))
  * **Activity filters (if necessary):** ([see options](/handbook/marketing/lifecycle-marketing/emails-nurture/#Active-Lists))
  * **Inclusions:** (if including records on previous campaigns, MUST include the name as appears on SFDC campaign, and campaign membership statuses to exclude)
  * **Exclusions:** (if excluding records on previous campaigns, MUST include the name as appears on SFDC campaign, and campaign membership statuses to exclude)

### Active lists
<!-- DO NOT CHANGE THIS ANCHOR -->
To assist in building email target lists, MktgOps has developed a series of Marketo smart lists that can be used to determine how active a lead is based on specific time increments. Call on these smart lists to get the most up to date active user list for your email sends. The smart lists are located in the Database section of Marketo. They are:

* [01 Active List 30 days](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52980708A1)
* [02 Active List 60 days](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52980709A1)
* [03 Active List 90 days](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52980710A1)
* [04 Active List 6 months days](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52979300A1)
* [05 Active List 12 months](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52980711A1)
* [06 Active List 18 months](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52980712A1)

## QA process
<!-- DO NOT CHANGE THIS ANCHOR -->
**FY23-Q4**: Lifecycle Marketing will be running a Q4 trial of reviewing **all** emails prior to send to ensure compliance with email best practices. Team members are responsible fo reviewing and optimizing their own emails, following the latest [email best practices from lifecycle marketing](/handbook/marketing/lifecycle-marketing/email-best-practices). Lifecycle will be partnering will email stakeholders to improve email performance and drive the best results for our campaigns, as well as maintain brand consistency across all email touchpoints.

**FY24-Q1**: In Q1 of FY24, we will share out how we will continue to scale the email review process.

Email workflow:
First step in requesting an email from lifecycle begins by creating an issue using the appropriate [issue template](/handbook/marketing/lifecycle-marketing/#request-issue-templates) in GitLab.

### Team variations to QA process
<!-- DO NOT CHANGE THIS ANCHOR -->
* Campaigns: build the email yourself and have lifecycle QA.
* FMM: Request the email to be built by MOps and send to lifecycle for approval.
* Corp: using the process we outlined previously [here](https://docs.google.com/spreadsheets/d/1aTCrUlc87BDLAqqAju7ZEbL8Wu0VZNfWd1MhdAccRDA/edit#gid=0)

#### Campaigns Team QA process
<!-- DO NOT CHANGE THIS ANCHOR -->
*Submit final email for QA and scheduling*

* Step 1: Campaign manager: Submit an email issue for the appropriate email type and assign yourself and a lifecycle counterpart to your email. Be sure to include the proper labels for the email calendar. This needs to be done before the SLA date or at latest by Thursday at 9 am PT (with audience information) the week before send (i.e. if an email is going out the following Friday, it still needs to be in on Thursday the week before)
* Step 2: Highlight your desired send date and time. (Will be reviewed and potentially modified by the Lifecycle team).
* Step 3: Build the program and email in Marketo by referring to our [email marketing best practices](https://docs.google.com/presentation/d/1j6F-3ZOFtFM9Tjz1srzbqLjSA56sK7lR2LPdKSl57Vo/edit?usp=sharing) and segment the email accordingly.
* Step 4: Include a link to the Marketo program while submitting an [Email issue request](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/new?issuable_template=request-email).
* Step 5: Send a sample for lifecycle to QA
  * Global/EMEA/Localized/PubSec/Newsletters/Corporate/Intelligent Nurture = reviewed by [Allie](mailto:aklatzkin@gitlab.com)
  * Customers/AMER/APAC = reviewed by [Alison](mailto:alee@gitlab.com)
* Step 6: Lifecycle will make revisions and send the email back to the campaign manager.
* Step 7: Lifecycle will schedule the email to send at requested time slot

*SLAS:*

1. Larger events (GitLab 17 is typically Lifecycle owned, but events of similar scale): 7 business days
2. Tech demos: 5 business days
3. Email follow-ups: 2 business days

#### Field Marketing QA process
<!-- DO NOT CHANGE THIS ANCHOR -->
*Request for MOps to build the email*

1. FMC/Etc puts in the issue request (per usual)
2. Mops reviews and puts in Triage if all pieces are in place (per usual)
3. When in triage, Mops adds a new label for `Lifecycle Copy Review`
4. Lifecycle reviews the copy, makes suggestions and does the back/forth with submittor
5. Once approved, Lifecycle adds the `Lifecycle Copy Approved` Label
6. Marketing Ops will then start to build the email
7. Once build, Mops will mark needing review for layout/format
8. Lifecycle approves layout/format
9. Mops deploys

Notes:

* Lifecycle does not approve emails that we have a prebuilt template for (workshops, etc.)
* For follow-up emails, lifecycle will still do a quick review of the copy in the new pre-built templates

*Important note on 3rd party conferences/tradeshows*
We only send emails for 3rd party conferences/tradeshows if they meet the following criteria:

1. They have a GitLab specific CTA (can be our own landing page, book a meeting link, activation registration page)
2. When we have a blind list account list or previous attendee audience to send the email to.

For more information on why we do this, please visit [this issue](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/4047).

#### Corporate Marketing QA process
<!-- DO NOT CHANGE THIS ANCHOR -->
*Request for Lifecycle to determine promotional content*

Upon request, we will work with the Corporate Events team to promote and follow-up from our sponsored corporate conferences.

Promotion will only be done for Tier 1 events and events that have ancillary events added to them. We will promote to audiences who have previously attended the event, in addition to local audiences that match the persona. For full criteria and steps, please see [this spreadsheet](https://docs.google.com/spreadsheets/d/1aTCrUlc87BDLAqqAju7ZEbL8Wu0VZNfWd1MhdAccRDA/edit?usp=sharing).

The process must kick off a month before the event, to ensure we have all of the relevant information for promotion and follow-up.

#### Newsletter QA process
<!-- DO NOT CHANGE THIS ANCHOR -->
Full newsletter request information can be found [here](/handbook/marketing/lifecycle-marketing/email-processes-requests/#newsletter).

### Email QA Checklist - Technical
<!-- DO NOT CHANGE THIS ANCHOR -->
The following outlines the technical QA that any email builder including Lifecycle, MOps, and Campaigns should complete after building an email. This also applies to anyone providing a secondary QA prior to deployment.

As the email builder, you are responsible for making sure the email is formatted properly according to our templates, that the links are formatted properly for tracking and use, that any tokenized sections are showing properly, the appropriate unsubscribe language is included, and any special requests from the business owner are displaying properly in the email in accordance with our template guidelines. You are not responsible for QA on spelling, grammar, dates/times, or links provided to you by the business owner (for example, if they drive to a webpage and provided you with the wrong link - as long as you formatted it properly in the email). If you notice inaccuracies in spelling/grammar, please update them in the email, but the business owner is responsibile for those. You have joint ownership with the business owner to make sure the email looks good and is easy for the user to read.

* Confirm that all tokens used in the email are complete in the program. This can vary from email to email, so you will need to check the email in the editor to confirm which tokens are in use. Generally, be sure to check {{my.landingpageURL}}, {{my.utm}}, the tokens for the title of the event, date, time, and in some cases intro paragraph and bullets. If anything is not complete and you do not have the information, ask the business owner to complete them.
* Confirm that CTAs are in sentence case: ex: Register now (not Register Now)
* Check the {{my.landingpageURL}} token to confirm that if you are driving to a `page.gitlab.com` address, there is NO `/` at the end of the url. If you are driving to `about.gitlab.com`, there should be a `/` at the end of the url. For example, the token should look like this (with no https://): `about.gitlab.com/sixteen/` or `page.gitlab.com/sixteen`.
* In the email editor, confirm that each link is hard-coded with `https://`. This cannot be in a token because the Marketo tracking [will not work properly](https://web.archive.org/web/20231207132114/https://nation.marketo.com/t5/knowledgebase/how-to-track-tokenized-links-in-email-assets/ta-p/254486). Your links should look like this in the email editor: `https://{{my.LandingpageURL}}?{{my.utm}}`
* In the editor, click on the text version of the email. The content should have been copied from HTML, but you will need to reformat it. Be sure that after you bring over the copy initially, you uncheck the "Copy from HTML" box. Format the email to use proper spacing between paragraphs and that the date/time information is easy to read.
* In the text version, there should be no links in line with content. Move the links to the end of the paragraph or into separate bullets. You should have a "Register now" link at the top of the email and at the bottom. Confirm the links in the text version are formatted properly (as described above).
* On the text version, you do not need unsubscribe text because Marketo will automatically attach this if it is missing. If it is there, no need to remove it. The exception is if you are using the `Localized email footer` snippet. You do need to make sure this appears in the text version.
* If dynamic content or snippets are not intended for the email, make sure no dynamic content is in use. In the email editor, click on "Dynamic" under the content section. If this is blank, there is no dynamic content in use. If it is not blank, click on the segment in use and it will highlight it in the email. If this is not intentional, select "Make Static" or "Replace with Rich Text" (depending on the type of dynamic content in use).
* If you are using dynamic content or snippets, click on "Preview". Change the `View by` to "Segmentation". Select the segmentation, then be sure to preview the email for each segmentation option to make sure it displays as you expect. You can also send yourself a sample using each segmentation if you would like. You will need to provide screenshots or samples to the business owner to review the content in use for each segment.
* Custom Header Image: If you are using the standard template with no changes to the header image, you can skip this step. If you are using custom header images (for example on large owned events), you must confirm that the image used was a transparent image. You can do this by looking at the design issue and confirming the image requested and provided by the design team is transparent. If you are working on a large event email (sending to 100k plus), you must also QA the email in [Litmus](/handbook/marketing/marketing-operations/litmus/#steps-to-test-an-email).
* View the email in `Preview`. Confirm all of the tokenized sections fill in properly and the name of the event, date, and time are showing correctly.
* In `Preview`, hover over each link in the email and confirm the full URL is accurate with the correct UTM values. If any of this is incorrect, confirm that the https:// is hard-coded, check the {{my.landingpageURL}} token, and check the {{my.utm}} token. After you make any necessary changes, preview the email again.
* After viewing in `Preview`, if the text in the header appears to be too large, resize it to be smaller so the line breaks make sense and the text isn't overbearing.
* Send a sample to yourself. **Click all links** in the email and confirm they go where you expect them to. The links in your emails should have Marketo tracking codes, so when you get to the URL in your browser, confirm that the complete URL with utms is accurate. If the links drive to `about.gitlab.com` pages, it is recommended that you fill out the form and make sure the response is captured in Marketo.
* On the sample you sent to yourself, confirm all tokenized sections filled in properly. Check the formatting and images on the email.
* After your QA is complete, send a sample to the business owner for review.

### Email QA Checklist - Business owner

The following outlines the business owner QA that the requestor (not builder) should complete before approving the email.

As the requestor/business owner, you are responsible for QA on content, spelling, grammar, dates/times, and links. You have joint ownership with the email builder to make sure the email looks good and is easy for the user to read, in line with our email best practices.

* Check the pre-header information before you click on the email.
* On the HTML version:
  * Check the subject line, to and from details.
  * Check the date, time, and event name/header.
  * Read the subject line and email for spelling mistakes and grammar. Confirm the content is accurate.
  * Review locations, agendas, or any other details included in the email.
  * Click on **all links** in the email. You must click on the links because the links are coded for Marketo tracking and will not show the URL until after you click on them. Confirm that all links go where you expect. You should also confirm that the utms (particularly the utm campaign value) is accurate.
  * Confirm the layout and text size in the header is what you expect.
* You will also receive a text version of the email. This email is built separately from the HTML, so you must repeat your review on this.
  * Check the date, time, and event name/header.
  * Read the email for spelling mistakes and grammar. Confirm the content is accurate.
  * Review locations, agendas, or any other details included in the email.
  * Click on all links in the email. You must click on the links because the links are coded for Marketo tracking and will not show the URL until after you click on them. Confirm that all links go where you expect. You should also confirm that the utms (particularly the utm campaign value) is accurate.
* If you requested dynamic content or if your email is localized, you may receive multiple versions of the email. Repeat the checks above for each version, confirming that the dynamic content is showing up as you expect.
* For localized emails, confirm that the email footer is displaying in the requested language. This snippet displays based on the language preference of the user, with the default being English if they do not have a language on file.

#### Creating a nurture email program for the Intelligent Nurture
<!-- DO NOT CHANGE THIS ANCHOR -->
**The following process is the technical process for creating a new email send program that is then activated in the appropriate streams/channels of the Intelligent Nurture. The project management process is integrated into the epic/issue creation for our core tactics that would be dropped into the nurture (new content, webcasts, workshops, analyst reports).

1. In Marketo, [Clone this template](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG8466A1)
    * Clone into `A Campaign Folder`
    * Name the program with the following format: `Type-ShortContentName` (i.e. `ebook-scaledci` or `webcast-simlifycicd` or `wrkshp-security`)
    * Choose the folder: `Master Email Programs (Intelligent Nurture)`
1. Edit the email in the program
    * DO NOT UPDATE THE EMAIL CODE or you will break the email from the template.
    * Copy is indicated in the issue and should align to the email template.
    * If the email copy is missing an element (i.e. the CTA button is missing, or the subheader is not supplied), please comment in the issue to remind the copywriter of the template to follow.
1. Add the link to the new email in [this spreadsheet](https://docs.google.com/spreadsheets/d/1QRilUEUGSUlMwwsMa_G11HRmxSskHFgDeWV0STOtLh4/edit#gid=2096477155) in the column named: `Link to New Marketo Program`
    * If the content/webcast/offer is not listed, create a new row and fill out accordingly, making sure to note the UTM parameters (which are critical to proper reporting) and the Pathfactory URL.

## Email review protocol
<!-- DO NOT CHANGE THIS ANCHOR -->

All Campaign Managers and reviewers should adhere to the following protocol for every marketing email that is sent to ensure brand consistency and quality in our email program. While the owner of the email should review the email, they must also assign the emails to the corresponding Lifecycle Marketing Manager as listed on the email templates.

 Marketo is the primary system for all marketing emails and the regularly scheduled security updates. Iterable or Marketo should be used for emails to gitlab.com users as these users are not in our marketing systems (unless they have signed up for content).

To send an operational email, fill out an issue and follow protocol found [here](/handbook/marketing/marketing-operations/email-management/operational-email-sends/#customer-or-user-comms-email-including-breaking-changes).

## Sales nominated flows in Marketo

In some cases, when invitations need to be more specific for an event, the Sales Nominated flows are used to allow sales to nominate who will receive the invite.

Note: if someone is nominated, but is unmailable (due to unsubscribe, invalid email, or hard bounce), they will not receive the invitation.

### Activating the sales nominated flow in Marketo

Sales Nominated automation smart lists are applied to Marketo program templates where sales nominated flows are relevant.

**Review the Email**:

Send sample to the DRI for the program (i.e. workshop owner) who is responsible for testing and QAing the email. The email can be found under the `Assets` folder in the program. For some programs, the Marketo My Tokens are included in the Sales Nominated invite to make the email setup more efficient.

**Review the smartlist and schedule recurrence of email:**

* Smart List (filter):
  * Member of Program: (current program, registered status)
  * Not Was Sent Email: (one of previous emails for this event) in last 7 days
  * Subscription Filters (fitlers here are dependent on program type, and subject to change, so not adding all details)
* Flow
  * Send email: sales nominated email in the program
* Schedule
  * Choose `Schedule Recurrence`
  * Schedule: Daily
  * First Run: next relevant day to send (i.e. next business day available). Choose time of day relevant for timezone of event.
  * Repeat Every: Weekday (M-F)
  * End On: Day of the event

### Removing sales nominated scheduled deployment

You can remove specific recurrences of scheduled sales nominated deployments. The FMC is responsible for this change for field marketing activities, and campaign managers are responsible for this change for demand generation activities.

To cancel a send, follow [these directions](/handbook/marketing/marketing-operations/campaigns-and-programs/#canceling-an-email-send).

#### Adding a nurture email program to Intelligent Nurture programs/streams

After you have created the Email Program (see above: [Creating a nurture email program for the Intelligent Nurture](/handbook/marketing/lifecycle-marketing/email-processes-requests/#create-nurture-email)) and tested your email (including checking UTM parameters), your email is ready to be activated in the Intelligent Nurture.

Work with the Campaigns Team to indicate the appropriate streams for the offer to be included (this is based on segment/region/funnel stage).

1. Navigate to the appropiate nurture program (i.e. AMER Enterprise)
1. In the appropriate stream (i.e. MQL > SAO), click the plus icon at the top.
1. Inn the `Type` section, select `Program`
1. In the `Program Name` section, begin to type in the name of the corresponding email program (i.e. ebook-10stepsciso) and select the program you created for this offer
1. In the `Smart Campaign` section, select `01 Send Controller`
1. Now, click the gear icon for your program in the stream and either:
   * `Activate` if it is not an upcoming event
   * `Edit Availability` if it is an upcoming event and set the "End Date" for the date of the event. This will automatically stop the email from sending when the event has taken place.

#### Alignment of Offer Types (CTAs) in Intelligent Nurture Streams
<!-- DO NOT CHANGE THIS ANCHOR -->

The following is where different offer types should align in the email nurture streams. This is based on the essence of the offers, and the maturity of the person in terms of education about GitLab (i.e. advanced workshops are **not** a fit for RAW > INQ stream as these are leads who have taken no prior action with GitLab and should be receiving top funnel content).

[SEE THIS DIAGRAM FOR WHERE CONTENT IS FIT FOR THE INTELLIGENT NURTURE](https://docs.google.com/presentation/d/1j6F-3ZOFtFM9Tjz1srzbqLjSA56sK7lR2LPdKSl57Vo/edit#slide=id.g165f27d5f94_0_10)

#### Adding an A/B test to Intelligent Nurture

Because our intelligent nurture is setup calling to programs, we cannot use Marketo's Champion/Challenger to A/B test emails.

Instead, we should take the following steps:

1. Build a second email and create a description of what was changed in the name i.e "Subject line test version" (or even saying the test)
2. Add it as a random sample in the send controller as shown in the flow below (use 50% for 2 versions, or split between 100% for more versions):

    ![email-ab-test](/images/marketing/lifecycle-marketing/emails-nurture/image-4.png)

3. Monitor results on an email report
4. Document results on [A/B testing tracker](https://docs.google.com/spreadsheets/d/1BaGJbiYIG8187nnXXy2tvNtJyKXLV4CenCAZMYJbmeI/edit#gid=2079991889)

Please see the [A/B testing section](/handbook/marketing/lifecycle-marketing/email-best-practices/#best-practices-testing) below for best practices for conducting an A/B test.

#### Intelligent Nurture - Event promotion
<!-- DO NOT CHANGE THIS ANCHOR -->

In an effort to ensure audiences are not receiving duplicate emails and to streamline our own processes, we will be updating our current approach for promoting events via Intelligent Nurture and 2 email blasts. For now, all add to nurture issues that have duplicate email blasts will be cancelled. We will roll out a more comprehensive process in February.

For additional context, please see the [issue here](https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/-/issues/3111).

## Newsletter
<!-- DO NOT CHANGE THIS ANCHOR -->

### Process for monthly newsletter
<!-- DO NOT CHANGE THIS ANCHOR -->

Open an issue using the [Newsletter Request Template](https://gitlab.com/gitlab-com/marketing/lifecycle-marketing/-/issues/new?issuable_template=request-email-newsletter), including the newsletter send date
 in the issue title.

**[Epic of Past and Upcoming Newsletters](https://gitlab.com/groups/gitlab-com/marketing/-/epics/179)**

### Creating the newsletter in Marketo
<!-- DO NOT CHANGE THIS ANCHOR -->

A day or two before the issue due date, create the newsletter draft. It's easiest to clone the last newsletter in Marketo:

1. Go to Marketing Activities > Master Setup > Outreach > Newsletter & Security Release
1. Select the newsletter program template `[YYY.MM.DD] - New blog newsletter template`, right click and select `Clone`.
1. Clone to `A Campaign Folder`.
1. In the `Name` field enter the name following the newsletter template naming format `YYYYMMDD_Newsletter Name`.
1. In the `Folder` field select `Newsletter & Security Release`. You do not need to enter a description.
1. When it is finished cloning, you will need to drag and drop the new newsletter item into the appropriate subfolder (`Bi-weekly Newsletters`, `Monthly Newsletters` or `Quarterly Newsletters`).
1. Click the + symbol to the left of your new newsletter item and select `Newsletter`.
1. In the menu bar that appears along the top of your screen, select `Edit draft`.

### Editing the newsletter in Marketo
<!-- DO NOT CHANGE THIS ANCHOR -->

1. Make sure you update the subject line.
1. Add your newsletter items by editing the existing boxes (double click to go into them). It's best to select the `HTML` button on the menu bar and edit the HTML so you don't inadvertently lose formatting.
1. Don't forget to update the dates in the UTM parameters of your links (including the banner at the top and all default items such as the "We're hiring" button).

### Sending newsletter test/samples from Marketo
<!-- DO NOT CHANGE THIS ANCHOR -->

1. When you're ready, select `Email actions` from the menu at the top, then `Send sample` to preview.
1. Enter your email in the `Person` field, then in `Send to` you can add any other emails you'd like to send a preview too. We recommend sending a sample to the newsletter requestor (or rebecca@ from the content team for marketing newsletters) for final approval.
1. When you are satisfied with the newsletter, select `Approve and close` from the `Email actions` menu.

### Sending the newsletter
<!-- DO NOT CHANGE THIS ANCHOR -->

1. When the edit view has closed, click on the main newsletter item in the left-hand column.
1. If there are over 250,000 recipients due to be sent, you must request Marketing Operations to temporarily lift the [Campaign Limits](/handbook/marketing/marketing-operations/marketo/#campaign-limits), otherwise the email will not send.
1. In the `Schedule` box, enter the send date and select `Recipient time zone` if the option is available.
1. Make sure `Head start` is checked too.
1. In the `Approval` box, click on `Approve program`.
1. Return to the newsletter issue and leave a comment telling requestor  to double check all has been set up correctly. Close the issue when this is confirmed.

## Template and process for mass-uploading issues for promotional events
<!-- DO NOT CHANGE THIS ANCHOR -->

1. Duplicate [spreadsheet](https://docs.google.com/spreadsheets/d/1NW9KSx_lP-1mrx1Iidfgi42rXx1BMYFbNPVQKZmcxGE/edit?usp=sharing)
      Simple = 2 emails, follow-up for no show and attendee, audience sizing
      Complex = multiple emails and follow-ups, audience sizing (think Commit)
2. Update issue titles in the 1st column
3. Update due dates in the 3rd column
4. Update template to have the epic by searching ("Command/CTRL F") EPICNAME then the three dots on the side and replace with your epic name.

For the following, you can update 1 issue then drag it down (at least for email descriptions):
5. Add any additional assignees at the bottom of the issue, it'll automatically assign to you
6. Choose any labels that you want added and add them to the bottom using /label ~"labelname"
7. Make any adjustments to audience, email names
8. Upload issue to the campaigns project using the import button. https://gitlab.com/gitlab-com/marketing/demand-generation/campaigns/uploads/c644b04f8460d6f1007e731093ff16fc/Screen_Shot_2022-08-11_at_2.10.56_PM.png
9. Check to make sure your issues uploaded correctly and are in the right epic!

## Adding "add to calendar" links in our emails without using 3rd party tools
<!-- DO NOT CHANGE THIS ANCHOR -->
Example:

[Add to google calendar](https://gitlab.com/) | [Add to other calendar](https://gitlab.com/)

**Note:** gmail inboxes a majority of our sends, according to litmus analytics pixel data. Outlook makes up 3-15% of our recipients. This is exactly what Limus did:

It's virtually impossible to support all the calendar applications available. To help us understand what calendar tools to focus on, we took a look at our Email Analytics data. The most popular email clients our subscribers use are Apple Mail, Gmail, and Outlook. Using this data, we focused our efforts on creating a "add to calendar" button that would be compatible with iCalendar, Google's calendar, and Outlook's calendar.
[Learn More Here](https://www.litmus.com/blog/how-to-create-an-add-to-calendar-link-for-your-emails)

### Steps to manually creating "add to calendar" links in our emails
<!-- DO NOT CHANGE THIS ANCHOR -->
* Create google calendar link for your events
  * Use this tool to generate your event information: [https://kalinka.tardate.com/](https://kalinka.tardate.com/)
  * You would have to copy and paste the information for the event from marketo to the tool above, this takes about 2 minutes
    * Location should be formatted as follows to show up as an address in the google calendar invite:

      **747 Howard St, San Francisco, CA 94103, USA**
    * Make sure time zone is correct

  * Create link [Example Here](https://www.google.com/calendar/event?action=TEMPLATE&dates=20200406T150000Z%2F20200409T030000Z&text=Google%20Next%202020&location=747%20Howard%20St%2C%20San%20Francisco%2C%20CA%2094103%2C%20USA&details=https%3A%2F%2Fcloud.withgoogle.com%2Fnext%2Fsf%2F) and paste into correct template in Marketo as follows:

    ```html
    <a href="https://www.google.com/calendar/event?action=TEMPLATE&dates=20200206T035000Z%2F20200206T065000Z&text=Nouts%20test%20event&location=5107%20Oakbrook%20Drive%2C%20Durham%2C%20NC&details=nout's%20test%20event%20">Add to Google calendar</a>
    ```

* Create ICS file for all other calendars (mostly Outlook and Apple)
  * Marketo can create an ICS file
  * Add "Calendar File" Token to local tokens section
  * Paste all necessary information (same as above)
  * Add token to the email as follows:

      `<a href="link goes here">Add to other calendar</a>`

### Additional option for "add to calendar": APIs
<!-- DO NOT CHANGE THIS ANCHOR -->
* Use AddEvent API (available for $19/month billed annually for up to 50 events/month).

  [https://www.addevent.com/c/plans-and-pricing](https://www.addevent.com/c/plans-and-pricing)
* Use Eventable in Marketo (not sure about price)

  [https://www.eventable.com/info/add-to-calendar-marketo/](https://www.eventable.com/info/add-to-calendar-marketo/)

## Lifecycle Campaign Development Process
<!-- DO NOT CHANGE THIS ANCHOR -->

The Lifecycle Marketing Manger is responsible for coordinating execution of Free User campaigns. They will develop an initial strategy in collaboration with Growth Product, Marketing Ops, Data, and other teams. The steps to execute have certain issue templates, which are built into the process (see epic code below).

**Overall Steps:**

* Team defines segment / PQL audience to target
* Team collaborates/brainstorms approach
* Lifecycle Marketer opens epic
* Depending on approach decided, Lifecycle Marketer opens relevant issues (across teams)
* Lifecycle Marketer outlines timeline
* Lifecycle Marketer provides status updates to Free User Efficiency Project

### Workback Timeline
<!-- DO NOT CHANGE THIS ANCHOR -->

The workback timeline is to be created by the Lifecycle Marketer to organize the execution of a new campaign. The workback is a starting point, to be discussed and agreed with the teams involved.

[Workback Template](https://docs.google.com/spreadsheets/d/1Mrp0xNkpbfS_kvqDB-kFhhBqD-sNK86trx3qswOe6B0/edit?usp=sharing)

#### Epic Code
<!-- DO NOT CHANGE THIS ANCHOR -->

***The Lifecycle Marketer will create the epic with the following structure. Issues will be created an related to this overarching epic to organize execution action items.***

```markdown
<!-- NAME THIS EPIC: Free User Campaign: [Name of Campaign] (i.e. Free User Campaign: active First Order namespaces without recent outreach from GitLab) -->

### [Campaign Execution Timeline >>]() - to be created by Lifeycle Marketer <!-- Template: https://docs.google.com/spreadsheets/d/1Mrp0xNkpbfS_kvqDB-kFhhBqD-sNK86trx3qswOe6B0/edit?usp=sharing -->

### :star: Background and Scope
<!-- Provide a brief overview of the audience, campaign, and project. How did this idea arise? -->
<!-- Example: Target leads that have indicated that they are using GitLab for company use when signing up for free user license -->

### :dart: Goal
* Primary KPI:
* Secondary KPI:
* Measurement Plan (to be developed with Business Analytics)
   - For reference: [UTM Strategy Handbook](/handbook/marketing/utm-strategy)

## :busts_in_silhouette: Team
* Lifecycle Marketing: @Aklatzkin
* Growth Product:
* Marketing Operations:
* Data Team:

### :bar_chart: Supporting Data
<!-- Provide any links to raw data and analysis that drove the idea for this campaign. -->
<!-- Example: analysis of namespace <> sfdc account matchup that indicated we are missing opportunities to engage -->

### :question: Open Questions
<!-- As we kickoff this campaign, what are existing open questions that we have? What do we need to address first? -->
<!-- Example: Are the users we are planning to target email compliant? Do some of these users already exist in SFDC? -->

### :link: Links
<!-- Add links like target lists, Marketo programs, etc. -->
* [Add here]()
* [Add here]()

/label ~"dg-campaigns" ~"mktg-demandgen" ~"mktg-status::wip"
```

## Action Streams

Currently available Action Streams. Please use the values below to populate the Marketo `{{my.Action Stream}}` token. These must be exactly as written:

* Security
* Compliance

Instructions for routing to Action Streams is available on the [Campaigns & Programs](/handbook/marketing/marketing-operations/campaigns-and-programs/) page. [Video Instructions](https://drive.google.com/file/d/1hBuYcScoJGVo8VUhKbiwToSE1g4Kr8Tl/view?usp=sharing).
