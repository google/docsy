---
title: "Using Timeline"
description: "The Timeline view in Gainsight gives us a chronological overview of our activities with the customer. It's a valuable tool to see our interactions and progression on success efforts over time."
---

The Timeline view in Gainsight gives us a chronological overview of our activities with the customer. It's a valuable tool to see our interactions and progression on success efforts over time.

## Timeline Views

- **Global Timeline**: When going to the timeline from the lefthand sidebar (not for a specific customer), you will see the global timeline, which is all timeline events for all CSMs. From there, you can filter by clicking the three horizontal lines to customize what events are shown (see picture below). For example, you can search for yourself as the author to find all timeline events you created, or you can search for a company to find all timeline events for a specific customer.

![Gainsight Timeline Filter](/images/handbook/customer-success/gainsight-timeline-filter.png "Gainsight Timeline Filter")

- **Customer 360 Page**: You can access a specific customer's timeline by navigating to their customer 360 page, then clicking on the Timeline tab at the top. From here you can sort and filter by type, date, etc.

- **CTA View**: When you click on the details of a specific CTA or success plan Objective, there is a Timeline tab. You can add entries from here that will be linked to the CTA. These timeline entries will also appear on the company and global timelines.

## Activity types

The following activities can be logged in Gainsight and automatically sync-ed to Salesforce:

- **Customer Call**: Conversation with the customer using Zoom or other synchronous channel.
- **Update**: General update on the customer, could be from an internal conversation.
- **In-Person Meeting**: On-site or otherwise in-person meeting with the customer.
- **Email**: Message sent to the customer, or message thread between the CSM and the customer.
- **Health Update**: An update on the customer, could be from an internal conversation and used exclusively with red customers for providing updates specific to a risk. See [At-Risk CTA](/handbook/customer-success/csm/health-score-triage/#at-risk-cta) for details.
- **Workshop**: A customer workshop, which can include GitLab Days, Workshops, Lunch and & Learns, and more.
- **CSE Engagement**: Conversation with a CSE/Scale customer using Zoom or other synchronous channel.
- **CSA Engagement**: Used to track CSA engagements aligned with a Success Services engagement.
- **Verified Outcomes**: An activity type used to provide an update regarding work aligned with a customer verified outcome.
- **At-Risk/Escalation**: An update on the customer, could be from an internal conversation. This timeline entry type is part of a process to push update notifications to the Escalations Slack channel for visibility and collaboration.

### Gong Recordings

When Gong is used to record a call, a record is created in Gainsight Timeline. CSMs can edit these activities and add additional information such as External Attendees, CSM Sentiment, etc.

Note: these activities will only count towards the Last Activity Date and the Engagement score if they are created by the CSM (or in other words, if the CSM was the owner of the Gong call).

### Last Activity Date

The "Last Activity Date" field in the customer's record reflects the latest "Call" or "Meeting" activity entry to be logged for the customer. These are the only entry types that affect Last Activity Date since we want to track when we are having synchronous conversations with the customer.

Please note it may take up to 2 hours after logging a timeline event before the "Last Activity Date" is updated.

Related, there is the "Last Timeline Activity" which looks to any and all activities on the timeline (update, email, call...).

## How to Log Activities in Timeline

You can log activities to Timeline in multiple places across Gainsight.

Tip: When searching for external attendees, you can use "%%%" as your search pattern to list all contacts of an account. This is useful, if you do not remember all participants by name from your activity like cadence call or similar.

### Global Timeline

1. Navigate to the global timeline by clicking on the left navigation bar icon
2. Click on "Add Activity" and choose the appropriate activity type
3. Search for and confirm the account name in the "Company/Relationship" box

*Follow the rest of the steps below*

### Customer 360 Timeline

1. Navigate to the customer 360 page
1. Click the Timeline tab at the top
1. Click on "Add Activity" and choose the appropriate activity type

*Follow the rest of the steps below*

### CTA/Objective Timeline

1. Navigate to the specific CTA or success plan objective
1. Click on the subject to get the details sidebar
1. Click on the Timeline tab
1. Click on the + icon and choose the appropriate activity type

*Follow the rest of the steps below*

1. Input a subject
1. Confirm the date (it will default to when you clicked "+ Activity") and time (this does not need to be the exact time of the activity as long as the date is correct) if applicable
1. Add internal and external attendees (more details on that immediately below) if applicable
1. Choose the meeting type if applicable
1. Check off if an executive sponsor attended if applicable
1. Optionally update the CSM and Product sentiments to reflect [health score](/handbook/customer-success/csm/health-score-triage/)
1. Add "Milestone Type" if applicable
1. Add notes (e.g. a link to the Google doc of your [cadence call](/handbook/customer-success/csm/cadence-calls/), a summary of health score change, etc.)
1. Add any action items as "tasks"

The other options to log activities are (1) on the Scorecard while recording CSM Sentiment or Product Risk or (2) on the Success Plan to log a Timeline activity specific to the plan.

Attendees will only appear if they are a) a Salesforce user for internal attendees, or b) a contact in the Salesforce account record. If your internal attendee does not have a SFDC account (e.g. Support Engineers or Product Designers), you do not need to log them and can just mention in the notes they were there. If your external attendee is not populating, make sure that they are added to the correct account (child accounts have different contact lists than their parent accounts), and if not feel free to add them by clicking the "Add Contact" button in Salesforce and inputting the required details. New SFDC contacts most likely won't populate in Gainsight until the following day, so this is a great opportunity to create a CTA for yourself!

If you would like to see the activity logging process in action, please watch the [enablement video that covers logging](https://youtu.be/PL9shBdCMmo).

## Syncing Salesforce Activities

Gainsight Timeline also displays the following Salesforce activities. While these are synced, they do **not** impact CSM health scorecards, `Last Activity Date`, or `Last Timeline Activity` since Salesforce activities are typically sales-related.

- Source:
  - Opportunities
  - Accounts
- Type:
  - Included: `Call`, `Demo`, `Workshop`
  - Purposefully **excluded**: `Email` and `Other`
    - There are certain email activities classified as `Other` thus why they're excluded (noise to signal)

### Limitations

- Any Salesforce activity that does **not** have any content in the description
  - Example: a call with a subject and no body will [fail to sync](https://support.gainsight.com/gainsight_nxt/Timeline/02Admin_Guides/Integrate_Salesforce_Activities_in_Gainsight_Timeline#Limitations)

## BCCing Emails

While we recommend BCCing emails to Salesforce instead of to Gainsight, you can do the same with Gainsight. To get your personalize email address, navigate to your settings:

1. Click the person icon in the upper right
1. Click "My Settings"
1. Navigate to "Inbound Emails" and copy the email address (Tip: save it as an email contact for easy reference)

BCCing emails to Gainsight is *not* a required step. However, if you want an email to appear in both Gainsight and Salesforce, you will need to BCC Gainsight.

1. Emails logged in Salesforce stay in Salesforce
1. Emails logged in Gainsight appear in Gainsight and then are synced to Salesforce during the nightly sync

For more information on using emails with Gainsight, see the [Gainsight workflow handbook page](/handbook/customer-success/csm/gainsight/#emails).
