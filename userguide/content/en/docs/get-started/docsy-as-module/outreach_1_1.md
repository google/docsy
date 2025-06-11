---

title: "Outreach"
description: "Outreach is a sales engagement platform helps efficiently and effectively engage prospects to drive more pipeline and close more deals."
---







### About Outreach

Outreach is a sales engagement platform helps efficiently and effectively engage prospects to drive more pipeline and close more deals. If you have any questions about Outreach that is not addressed below, please post your question in the mktgops slack channel.

### Support

Please contact the appropriate channel based on your role:

- Marketing or Sales Development requests, please contact [#mktgops](https://gitlab.slack.com/archives/CGL35F20G) on Slack.
- Sales requests, please contact [#sales-tools-support](https://gitlab.slack.com/archives/C05T3JQ1P40) on Slack.

### Set-Up

#### Non-admin users

Users will be able to access Outreach through OKTA within 24 hours of gaining access. Please set up the following once you have access:

- Connect your inboxes and calendar to Outreach. Please be aware when you connect your email, Outreach is set up to create prospects from your gmail if they don't already exist in Outreach. Outreach admins and managers can see your email activity to anyone you may email. If you wish to email anyone personal or there is an email which includes your private information then please make sure to turn off the Outreach activity recording.
  - To do this, when composing an email in gmail, look to the Outreach Settings Icon. There will be an option to toggle off "Outreach Enabled". If you do this, your personal email will not be recorded in Outreach.
- Update your email signature. If you are a BDR/SDR, then your signature is managed through Terminus.Log into Terminus and update your details and within 24 hours it will update in Outreach.
- Download and install the [Outreach Everywhere](https://support.outreach.io/hc/en-us/articles/115004084328-Installing-the-Outreach-Everywhere-Chrome-Extension) chrome extension.

#### Admin users

When provisioning new users or altering current users' credentials for role changes, there are a few things to keep in mind:

- A user's SFDC profile  cannot be loaded into Outreach for up to 24 hours after creation in Salesforce. However, the profile will automatically create in Outreach and will just need to be unlocked. The new user will also need to be added to the [Google Okta Group](https://groups.google.com/a/gitlab.com/g/okta-outreach-users) for access
- When adding a new user into Outreach, immediately place them in their appropriate Teams via the admin menu. When a user changes roles, remember to move them to the appropriate  team
- After adding them to a team, make sure to select the correct governance role based on their role:
  - PubSec team members should be added to the role: PubSec
  - Pubsec Managers should be added to the role : PubSec Managers
  - All other managers- incl XDR/Sales/CSMs managers should be added to : Sales Org Management
  - Anyone not in a management or pub sec should be added to : Sales Org- XDR, AE, SAEs, CSM
- When a current user changes roles, sales-ops will create a new SFDC profile for their new role. These means _every_ role change will require remapping between Outreach profiles and SFDC profiles. Remap a user by:
  - Proceed to `Plugins` under Outreach settings
  - Click into the `Salesforce` plugin, then select `User`, followed by `Mappings`
  - Locate the user that needs to be altered. The search box does not work as of April 2021 so it will be a manual search. Sorry for the difficulty, friend!
  - Select the dropdown and click `Remove` to completely remove the mapping between Outreach and Salesforce
  - Select `Add`, type in the Salesforce and Outreach names to complete the new mapping. Be sure to double check you selected the correct `SFDC ID` before hitting save

### Learning Pathways

Outreach provides educational courses via their [Outreach University Pathways](https://university.outreach.io/) programs that are updated frequently with new content. While GitLab does not require the XDR team to pursue completion of Outreach University Pathways, it's recommended for longterm users to pursue mastery of any marketing tools we use.

### Sequences

Sequences are one of the main features of Outreach. Users can create a series of touchpoints in order to communicate and automate their workflows.

Naming convention for primary sequences include the following:

- Inbound/ Outbound (OB/IB)
- Region (EMEA/AMER/APAC)
- Team
- Type
- Campaign with Year
- If event: Segment (No show/attendees)
- Optional: Touch
- Optional: Language

Example: | **OB EMEA SDRCOMM Trial FollowUp HT DE** OR **OB EMEA FMM EVT ContributeFY22 Registered**

Please see here a [spreadsheet](https://docs.google.com/spreadsheets/d/12YXwIE126g0rmmNi7QYy2s0SewIV-2JWCr9YUPcqfaQ/edit?usp=sharing) that will help with your naming conventions.

### Sequence Settings

You may choose the best delivery schedule and ruleset applicable to your goals.
You may choose whether or not others can see and use your sequence or if you would like to keep it private.
All sequence must have Throttle's enabled. This helps to stagger the volume of prospects moving through a sequence at one time.
It is necessary to help prevent users from hitting the email provider's mailing limits.
If you have too much volume this may result in you being kicked out of your email inbox by our provider.
**Max adds per user every 24 hours are to be set up to 75.**
If you need to request special sequence settings please reach out to Marketing Operations with your use case.

### Collections

Collections are an easy way to group sequences, snippets, and templates that get assigned to user groups for easier access.
Examples associated to our XDR groups include our `FY23 Inbound High Touch Collection` and `FY23 Tanuki Assist` collections.
You may request new collections by opening an issue in the Marketing Operations Project.

### Rulesets

- **Default** - Does not make tasks on your behalf. Prospects can be added to these sequences more than once, if not already active. prospects are not able to be added to other exclusive sequences, but can be added to a non-exclusive sequence. Updates prospoects to appropriate stages. Resumes out of office prospects after 5 days.
- **Campaign** - Follows the same rules as the default settings except out of office are resumed 1 day after.
- **Create Call Task** - Follows same rules as the default except it will create call tasks on opened emails. Minimum email opens needed: 2
- **Event** - Prospects can only be added to this sequence once. They are not exclusive to this sequence. Out of office are resumed 1 day after.
- **Follow Up Sequences** - This ruleset is specifically designed for prospects who are already in qualifying stage as once you add them, their lead status will stay in qualifying rather than going back to accepted.
- **Support Inquiries** - This ruleset should only be applied to Support Sequences as the ruleset is designed to add the prospect to status: Ineligible, in order to keep it out of XDR's views.

### Tips and Tricks

- `Snippets` are an easy way to save time when constructing emails. If there are frequent statements or phrases being sent to prospects, check if any team members have created a `snippet` related to that topic. If creating new, universally helpful `snippets`, remember to set permissions to `Others can see and use` and apply a `Collection`, where applicable.
- Many of the `Master` sequences have been set to work in specific timezones. Those in `AMER` should not be using sequences set to `APAC` timezones.
- `Variables` allow Outreach to auto-populate prospect data and sender data, increasing productivity via automation. Pay close attention to what `variables` are available when composing emails and what information the `variables` will populate. If a prospect in Salesforce says "No Company" in the `Company` field, the Outreach `variable` for `company` will populate "No Company" in the sent email.
- If the name within the `company` field of Salesforce and Outreach does not flow naturally in conversation, check to see if a `Company Natural Name` can be added. For example, "Mr Bob's Company Incorporated" sounds less natural in conversation than "Mr Bob's". When using a natural name, use the `variable` {{company_natural}} in the email template instead of {{company}}.
- `Variables` can also be used for setting `manual tasks` within an email template. However, these `manual tasks` function differently than a normal `variable`. After the brackets at the beginning of the `variable`, a "!" needs to be added or Outreach will attempt to populate the phrase inside the brackets. For example, a `manual task` should read {{! Edit this email before sending}}. If the "!" is not added, the sequence will fail with a "Template Syntax Error" message.
- The `Accounts` tab is a useful way of browsing Outreach `prospects` + `accounts` where the BDR's name appears in the SFDC Account field `BDR Assigned`. This won't filter for **every** prospect under your ownership (limitations with leads or unassigned accounts may apply), but it will show many relevant prospects. This view won't be available at your first login to Outreach, so you'll need to create it. To create the view,
  - Select the `Accounts` section of Outreach
  - Next to the search box there is a purple label that reads `Owner is you`. Remove this filter for now
  - Select `Add filter` and type `BDR Assigned`. Type in your name and hit enter. Change the `Sorted by` option, if you wish
  - From there, select `Save view`. From this window, you can edit the view name and privacy settings
  - It's best to set this view as your `default view`. Without this filter in place, the `Accounts` section's usefulness is primarily steered away from `SDRs` and moreso to Sales team members.

### Outreach Meetings

The current meeting templates will sync to an SFDC event. Please be aware that Outreach will only create SFDC events for meetings `Booked from Outreach`. Per Outreach's [support documentation](https://support.outreach.io/hc/en-us/articles/360001407934-How-To-Configure-a-Meeting-Booked-Trigger-in-Outreach-), `Booked from Outreach` is defined as "The meeting was booked using the Outreach Public Calendar Link, insert availability, or by sending an invite through Outreach." This is important for xDRs to keep in mind to ensure any [Initial Qualified Meetings (IQMs)](/handbook/marketing/sales-development/) are tracked appropriately.

|Meeting Type|Use Case|Notes|
|----|----|----|
|IQM (30)|For qualified prospects being sent from the XDR team to Sales to determine next steps with GitLab.| If no template is selected in the drop down this is the default meeting type used.|
|IQM (15)| For qualified prospects being sent from the XDR team to Sales to determine next steps with GitLab but a shorter call duration.||
|Discovery Call (30)|To be used as an intro call for potential clients and qualify their needs.| |
|Evaluation Orchestration Call (25)|A deeper dive into a potential clients needs.| 25 minute evaluation.|
|Evaluation Orchestration Call (45)|A deeper dive into a potential clients needs.|This is a longer duration at 45 minutes rather than 25.|
|Pricing Call (25)|This is for potential clients who want to know about GitLab pricing. May also be used for renewal discussion with current clients.| |

Outreach is able to sync some custom information about these meetings into events including:

|Event Field|Notes|
|----|----|
|`Subject`|If using a template the subject line is provided as the `Title` of the meeting. |
|`Description`|If using a template the `Description` is already filled in for you. If not it will be whatever you are writing to who you are inviting to the meeting. |
|`Location`|The zoom link associated to the meeting. |
|`Start Date`|Date and time the meeting is booked for. |
|`End Date`|Date and time the meeting ends. |
|`Name of Prospect`|This is the person who is attending the meeting. |
|`Owner of the Meeting`|Who the meeting is assigned to. |
|`Related Opportunities`|When booking meetings you can associate the event to an open opportunity. |
|`Outreach Meeting Type`|This displays the name of the meeting template used for the meeting. |
|`Booked By`|If you book a meeting on someone else's behalf this displays the name of the person who booked it. |
|`Attributed Sequence Name`|The last known sequence name will be brought over into this field.|
|`Meeting Source`|The Source field will display one of two values (App or Sync) so that you can distinguish whether a meeting was booked through Outreach or if it was booked prior to connecting with Outreach and retroactively synced back to SFDC.|
|`Meeting Cancelled`|Outreach can not delete events in SFDC. If a meeting is deleted within Outreach it will check the `Meeting Cancelled` checkbox.|

#### Outreach Call Disposition

XDRs need to choose a call disposition after calling a prospect to note the outcome of the call. This outcome will be synced over to SFDC. "CC" is an abreviation for Correct Contact. Make sure to always add information gathered into the `Call Notes` box as this will also sync over to SFDC.

| Outreach.io Call Disposition | Notes|
|---|---|
| `CC:Answered: Info Gathered: Potential Opp` | Some qualification questions were answered but more follow up is needed before an IQM is set |
| `CC: Answered: Info Gathered: Not Opp yet` | Some qualification questions were answered but no current use case or not the right time |
|`CC: Answered: Not Interested` | Have stated on the call they are not interested |
|`CC: Answered: Personal Use` | They are using GitLab for personal reasons |
|`CC: Answered: Asked for Call Back` | Caught them at a bad moment and they asked for a call back OR they are still evaluating tool, call back in a few weeks |
|`CC: Answered: Using Competition` | They are using competition |
|`Correct Contact: Left Message`| You were able to reach the voicemail for the correct contact and you left a message on their machine or with their Personal Assistant |
|`Correct Contact: Not Answered/Other`| You were able to reach the correct contact through a company directory but it kept ringing. You reached the contacts voicemail but their voicemail was not set up so you could not leave a message |
|`Correct Contact: IQM Set`| You were able to schedule an IQM while on the phone call. Note that a trigger exists in Outreach to automatically change lead status to `Qualifying` when this option is selected |
|`Busy`|Get a busy tone when calling|
|`Bad Number`|The phone number is not valid|
|`Incorrect Contact: Answered`| The wrong person answered the phone number that you had for this contact and it is the wrong persons phone number (They were not a personal assistant). They didn’t take a message for the correct person or give helpful information|
|`Incorrect Contact: Left Message`|The wrong person answered the phone and it is the wrong persons phone number (They were not a personal assistant). They took a message for the correct person/gave you the correct number for the contact|
|`Incorrect Contact: Not Answered/Other`| You got through to the voicemail but the voicemail was for someone other than the person who you were trying to contact. Or the person was not listed in the company directory and you were calling the companies main number|
|`Incorrect Contact: Answered: Gave Referral` | It was the wrong person but they gave a referral to speak to. Please record in notes who the referral is. |
|`Incorrect Contact: No Authority`| The person who answered the phone number has no authority nor decision to move forward with a purchase. |

#### Outreach Call Troubleshooting

If you are having issues with your Outreach calls, please use the following guides to troubleshoot the issue with your calls :

- [Call Connection](https://support.outreach.io/hc/en-us/articles/360056028093-Troubleshooting-Call-Connection-Issues) issues (Call dropping, not connecting)
- [Call Audio](https://support.outreach.io/hc/en-us/articles/360056030433-Troubleshooting-Call-Audio-Issues) issues (1-way, no, or robotic/choppy audio)

If the issue persists after , please contact [Outreach Support](https://support.outreach.io/hc/en-us/).

#### Outreach Meetings for XDR Team

XDR teams will use the functionality for scheduling to save time and effort, providing the best customer experience.

If a meeting to be scheduled, the XDR will respond with [times-lots by following the instructions here.](https://support.outreach.io/hc/en-us/articles/115003359774-Insert-Availability-in-Gmail#:~:text=Open%20a%20new%20compose%20window,will%20appear%2C%20revealing%20your%20calendar.)

#### Outreach Phone Numbers for XDR Team

In EMEA, we have purchased a number of phone numbers for the XDRs to use while outbound calling. These numbers allow the prospect to call back and it will go directly to the XDR who owns that phone number. These phone numbers belong to the team and not the XDR, so if the XDR moves team, then we will be taking that number and saving it for the XDR team replacement.

If you need a phone number, please open an issue and we can purchase one if approved. Keep in mind that we can mostly only buy phone numbers in countries where we have an entity.

### Outreach Engagement Panel & Sequence Attribution

Custom fields from Outreach that sync into SFDC for understanding engagement status in Outreach.

|Field Name|Description|SFDC Object|
|----|----| ----|
| Actively Being Sequenced| Checkbox for if a prospect is active in a sequence | Lead & Contact |
| Name of Active Sequence | Name of the most recent active sequence. If they are in multiple sequences it will note the sequence they have been in the longest.|  Lead & Contact |
| Sequence Status | The state of the sequence: Active, Pending, Failed.| Lead & Contact |
| Number of Active Sequences | How many sequences a lead is active in. | Lead & Contact |
| Sequence User | Is the User ID of who sequenced the lead. | Lead & Contact |
| Sequence Task Due Date | identifies the date the upcoming task is due. | Lead & Contact |
| Sequence Step Number | Identifies the step of the sequence a lead is in.| Lead & Contact |
| Sequence Step Type | Identifies if the step is Phone Call or Automated E-mail, ect. | Lead & Contact |
| Date Added to Sequence | Date of when prospect was added to current sequence. | Lead & Contact |
| Finished Sequences | Lists all sequences the prospect has finished. | Lead & Contact |
| Initial Sequence Name | Name of the first sequence prospect entered | Lead & Contact |
| Initial Sequence ID | ID of the first sequence prospect entered | Lead & Contact |
| Initial Sequence Date | Date of the first sequence prospect entered | Lead & Contact |
| Attributed Finished Sequences | Lists all sequences prospects finished before the opportunity was opened | Opportunity |
| Last Touch Contact | Last user to contact the prospect before opportunity was opened | Opportunity |
| Last Touch Sequence | Last sequence prospect was in before opportunity was opened | Opportunity |

### Sending Email Using Outreach

Outreach is **not** meant for mass communications nor bulk email sends it is intended for very targeted account and prospect communications. The Outreach platform is directly integrated to the GitLab Gmail account and each users email is linked through OAuth therefore all activity in Outreach has the potential to impact the IP reputation of the GitLab domain with all major email services providers.

As such there are [sending limits built into the Outreach platform](https://support.outreach.io/hc/en-us/articles/205022518-Individual-Email-Limits-Safeguards) as well as [limits put in place by Gmail itself](https://support.google.com/a/answer/166852?hl=en).

#### Sending Limits

We have email sending limits in place to protect our sender reputation score, to ensure our emails are delivered to prospects & customers. We can not increase these limits and if you hit the limit, you will need to wait until you are under the limit again to send emails. If you need to send a campiagn that is larger than the limits, please reach out to Marketing as we have more sending options for larger campaigns.

- Individual users can send up to 2,000 emails _combined_ between Outreach and Gmail inbox in a rolling 24-hour period.
  - This is the maximum across both systems, if you max out in Outreach, you **will be** maxed out in Gmail.
- Users have a limit of 1,000 emails sent from within our organisation.
- Users have a limit of 25 emails that can be sent to the same email domain per day.

If you'd like to read more about Outreach email limits please see [here](https://support.outreach.io/hc/en-us/articles/205252418-Outreach-User-Admin-Settings-Org-Email-Overview).

### Importing SFDC Reports

Only Management and Operations have the ability to import SFDC records as they bypass our filters that keep our data in Outreach clean.

Step 1:
Create your SFDC report and save it into the `Unfiled Public Reports` folder.

- Report can only be a lead or contact report
- Limit to 2000 records per import
- Minimum Required fields:
  - Lead ID
  - Email
  - First Name
  - Last Name
- Note: you may only map fields that already exist within Outreach, but the import is set up to load additional data points during the upload. You do not need to create your report with a bunch of fields to get them into Outreach.

Step 2:
Navigate to the &#9889;Quick Actions button and choose `Bulk Create`.

- Select your `Import Type` as `Prospects Salesforce Report`
- You will need to enter the report ID or choose the name of your report from the dropdown
- Choose the frequency as `Once`

Step 3:
Next you will review the mapping of the above 4 fields in the Outreach plugin. These usually auto-populate if Outreach can determine the correct field.

- If a field is not mapped please select it from the drop down
  - If you need additional guidance while mapping please contact Marketing Operations
- Please do not try to map fields that do not exist already in Outreach it is ok to the leave these fields as `Not mapped`
- Outreach will prompt you that there are unmapped fields and you can hit continue

Step 4:
On the next screen you will be prompted with more fields. To prevent from overriding important data please select the following:

- Owner - `Use owner from data`
- Stage - `Use stage from data`
- Timezone - Leave blank
- Source - Leave blank
- Additional Tags: You may assign tags as you need them
- Load additional data from Salesforce - Prechecked check box
- What to do with duplicates? - `Skip`

Step 5:
Select the `Start Import` button on the next screen.

### Outreach Stages

Outreach stages are a 1:1 match with SFDC Status. The rulesets help push prospects along into the correct stage/status based on their actions. This eliminates the need for triggers to match status to stage.

### Outreach Automation

Outreach will make updates based on these scenarios. Triggers fire in order of operation. See the [overview of all the triggers](https://docs.google.com/spreadsheets/d/1qITfwkj5Z0km6gS7KwwhN7qF0Bg9MIpaW3iY_VxfiOE/edit?usp=sharing).

| Trigger Name | Prospect Conditions | Account Conditions | Trigger Actions |
|---|---|---|---|---|
|00 - Inactive Contact and Lead|Inactive Contact or Lead Checkbox is True||Stop All Sequences
|01 - Community Queue|Owner is Community Queue||Stop All Sequences
|02 - Set Nurture Status Reason|Stage is `Nurture`| |Set `Nurture` Status Reason to `No response`
|03 - Set Unqualified Status Reason|Stage is `Unqualified`||Set `Unqualified` Status Reason to `Unsubscribe`
|04 - Set Bad Data Status Reason|Stage is `Bad Data`||Set `Bad Data` Reason to `Bounced email`

### Outreach Merge and Delete

Outreach will automatically merge and delete lead, contact, and account information based on those actions taking place in SFDC. Outreach checks for these data changes in SFDC once a day.

If a lead or contact is currently in an active sequence Outreach will let that lead or contact finish the sequence. This allows the SDR to complete their outreach if working on a duplicate prospect. Once a prospect has been marked as finished. The next time Outreach looks for changes in SFDC it will merge or delete the prospect accordingly.

Prospects that get deleted in Outreach live in the recycle bin until permanently deleted. Both Sales Enablement and Marketing Operations have the ability to remove leads from this recycle bin and bring them back into Outreach if there is ever a scenario that requires this action.

### Keeping Outreach Tidy

Marketing Ops will be responsible for pausing and locking sequences owned by former team members and for deleting tasks owned by former team members. The MktgOps team will also be responsible for monitoring and cleaning the SAE's and AE's unused sequences and overdue tasks, as necessary. Procedure for the former team members clean up process is as follows:

- During the deprovisioning process, any former team member with an Outreach profile will be added to the `Former Team Member` Outreach team. This instruction has been added to the deprovisioning template.
- Use the `Sort & Filter` function of Outreach to track tasks and sequences owned by members of the `Former Team Members` team. Tasks can be outright deleted, sequences deactivated and locked. Instructions for locking sequences below.
- If there are sequences owned by members of the `Former Team Members` team that are being used by current GitLab team members, change ownership of the sequence to a current team member. MktgOps users are preferred, but change to a team member using the sequence where appropriate.

SDRs are asked by SDR Leadership to periodically remove their older, unsued and inactive sequences from view and use. To qualify for clean up, a sequence needs to meet these criteria:

- There are no active prospects in the sequence
- If there are active prospects in the sequence, check the date when the prospects were added. If prospects have been stuck on a step or paused for a prolonged period of time, consider those prospects inactive
- The sequence has not been used in 13 months or longer
- The sequences must be marked by corresponding and correct tags and collections for ease of team cooperation, according to their data (market, account size, etc..). If there is a need, new collections and tags are to be created after consulting managers.

Outreach sequences are a useful source of a/b testing data for customer responses, so the best course of action is not to outright delete sequences. Instead, follow these steps:

- Deactivate/pause the sequence. If there are prospects still in the sequence, there will be a warning regarding the outcome of those prospects' path through the sequence. Assuming the prospects have been deemed inactive, proceed in deactivating the sequence
- From the `Sort & Filter` view, select the checkbox on all applicable sequences
- Proceed to the top of the page and click the padlock icon, which shows the Lock and Restore feature. Select [Lock to lock the unneeded sequences](https://support.outreach.io/hc/en-us/articles/115005151633-Locking-vs-Deleting-Sequences)

Congrats! You've just helped keep Outreach as a tidy tool for yourself and your teammates. Reward yourself with a tasty treat, if desired.

### Outreach Database Management

Bi-quarterly, we will be deleting prospects out of Outreach with an aim of keeping Outreach clean. Below are the filters we will be using to delete out old prospects:

|Filters |
| ------ |
| Opted Outed Prospects |
| Bounced- Invalid Email |
| No email and no mobile number |
| No email and created by ZoomInfo |
| Bad Data- Invalid Email |
| Bad Data- Spam |
| Unqualified- Competitor |
| Unqualified- No longer at company |
| No SFDC ID |
| Opted Out - No SFDC ID* |

We are using triggers in Outreach to tag those that we included in the next round of deletion. If you see your prospect with a delete tag on it and feel it should not be, just remove the tag and it won't be included. For more details please see [here](https://docs.google.com/document/d/1n4TCW3yWMQTRDY1uV19WYOUUCzmmWjuZPX_w6zbS-Wg/edit?usp=sharing).

## Outreach Reports for Managers

Firstly, we recommend all managers complete this [Outreach University training for reports.](https://university.outreach.io/outreach-reports). Please set up a regular schedule for viewing reports, use this reporting to structure your 1:1s, keep your reps using the recommended naming structure and governance of activities to have accurate report data.

### Team Performance Reports

On these reports please look for the following information to ensure your teams are performing well. You cann filter by your team to deep dive. If you would like a full breakdown on what all the metrics mean- please see [here](https://support.outreach.io/hc/en-us/articles/1260801927169-Outreach-Insights-Metrics-Definitions).

**Booked meetings vs end of month forecast** - this forcecast is based on your team members activity. Make note of the conversion rates, please find the average for you team and note those who are above average. Also make note of the breakdown of job titles your rep is meeting with- to do this , click on their number of "Prospects Contacted".
**Response time** - While we have a culture of work when best suits you at GitLab, there is an expectation to keep response times fast as this can directly influence conversion rates- therefore anything over 8 hours will need to coached. Please note that you can break down response time by job titles but clicking into the hours listed by individual rep.
**Email Sentiment** - This is a good tool for coaching reps, you can drill down into the objections to coach through responses. You can also highlight postive replies to the wider team.

### Activity

This is a great report to monitor your team's KPIs- currently XDRs need 45 touchpoints a day (this report will only show emails, calls, tasks, it will not give a full picture of the [different touchpoints](/handbook/marketing/sales-development/#activity--results-metrics) that count towards this KPI. ) You want to see a steady trickle of prospects added weekly. Overdue tasks are a sign that they are not completely their tasks and are possibly overwhelmed if there are over 100. You can filter all the following tabs by individual users or team. Below are the questions that you can answer using these reports:

Email Tab Questions:

- How effective are my teams emails/templates?
- What is the best time of day to email for reponses?

Calls tab questions:

- Are my team logging calls correctly?
- What are the outcome of my teams calls?
- What is the best time to call?
- How long are my teams calls?

Tasks tab questions:

- Are my team working efficiently- comparing prospects added to sequences vs manual tasks?

### Sequence Performance

This will show how sequences are being adopted by your teams and overall performance. If you evaluating a new sequence and are unsure if you have enough responses to evaluate, you can check the statisical significance of your sequence against a **similar** sequence. There are calculaters online to use - [example](https://neilpatel.com/ab-testing-calculator/).

**How do I know if a sequence is performing well?**

Firstly take note of the averages for your team and understand the objective of the sequence you are measuring. Different objectives will result need different measurement.  Then order Prospects sequenced by descending and compare the amount added to the meetings booked & reply rate. It may be easier to export a CSV as you will be able to see sentiment percentages in the same sheet.

**How many steps is too many steps in a sequence?**

In your sequence report, open the step view by clicking on the sequence name. Check the email sentiments of the reply rates for each step and note when the steps start to result in mostly objections/unsubscribes in their replies. To drill down into the objections, go to the email sentiment page and understand if they are objections due to persona/content/timing of the emails. With this knowledge, you can coach your reps on the right persona to add or adjust the content of the sequence. Make sure to look into the uncategorised sentiment to read the objections to get a full picture. You can A/B test in sequences , please see [here](https://support.outreach.io/hc/en-us/articles/360008548474-A-B-Testing-Overview) for more infomation on how to.

### More Reports

You can filter by reps to prepare for 1:1s - prospect overview shows how their prospecting is going. Leaderboad will show most used sequences. Make sure to monitor unsubscribes- keep it under 2%. You can drill down into the threads that are leading to unsubscribes and coach your rep if it is too high.
