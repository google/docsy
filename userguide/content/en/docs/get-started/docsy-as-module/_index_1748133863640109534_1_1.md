---
title: "Email Management"
description: "Email database management is a core responsibility for MktgOps. Ensuring GitLab is following email best practices, in compliance with Global spam laws and overall health of active database are all priorities."
---

## Overview

Email database management is a core responsibility for MktgOps. Ensuring GitLab is following email best practices, in compliance with Global spam laws and overall health of active database are all priorities.

Email creation and email nurture programs are managed by the Campaigns Team. To learn more about GitLab email communication or request an email, please see the [Emails/Nurture Handbook](/handbook/marketing/lifecycle-marketing/emails-nurture/) in the demand generation section of the handbook.

All emails sent should be updated in the [FY23 All-Marketing SSOT Calendar](/handbook/marketing/#marketing-calendar-inputs)

### Types of Email

**Emergency / Security Incidents**
These are transactional emails, almost always to our user base, that provide very selective needed information. This is an `operational` email that overrides the unsubscribe and would not need to comply with marketing email opt-out.

It is very important to have Engineering and/or Product team (whoever is requesting this type of email) help us narrow these announcements to the people that actually should be warned or notified, so we are communicating to a very specific focused list. The email platform the send will come from will be determined by a few different factors, but mainly list size. If you need to request an email like this, use this the `incident_communications` [template](https://gitlab.com/gitlab-com/marketing/marketing-operations/-/issues/new?issuable_template=incident_communications) and reference [this section](/handbook/marketing/marketing-operations/).

**Non-Demand Generation**
Emails that are not cosidered `operational` but also do not fit the categories below. Usage example: GitLab Hosted billing change, Release update 9.0.0 changes, GitLab Page change and Old CI Runner clients. If you need a non-dg email, please use [follow directions below](/handbook/marketing/marketing-operations/email-management/#request-non-demand-generation-emails)

**Newsletter**
The newsletter is a collaboration between the Content Team and the Campaigns Team. [Learn more here!](/handbook/marketing/lifecycle-marketing/email-processes-requests/#newsletter) Users can [subscribe to the newsletter](https://about.gitlab.com/company/contact/) on the website.

**Security Releases**
Sent on an as needed basis containing important information about any security patches, identified vulnerabilities, etc. related to the GitLab platform. These emails are purely text based and again are transactional in nature.  Users can [subscribe to security notices](https://about.gitlab.com/company/contact/#security-notices) on the GitLab Contact us page.

**Webcasts**
Invitation and/or notification emails sent about future webcasts.

**Live Events**
Invitation emails to attend a live event, meet-up, or in-person training. These emails are sent to a geo-locational subset of the overall segment. This type of email is also used when we are attending a conference and want to make people aware of any booth or event we may be holding and/or sponsoring.

### Email Communication Policy

Please [visit the legal page](https://internal.gitlab.com/handbook/legal-and-corporate-affairs/legal-privacy/#marketing-rules-and-consent-language/) to view all of the Marketing Rules and Consent Language.

This [FigJam](https://www.figma.com/file/fUbK9fPM0DOVf1ob6IIDbx/Opt-in-Workflow_2023-08-22_10-58-58?type=whiteboard&t=S4UoLJlyfrDlhTmw-1) shows the opt-in and opt-out/unsubscribe workflows for all forms, list imports and individual subscriptions. (must be workspace member to view)

At GitLab, we strive to communicate with people in a way that is beneficial to them. We always include the unsubscribe link in our communications, and we respect the unsubscribe list. In addition to the unsubscribe button at the bottom of all of our emails, we have available our [Email Subscription Center](https://about.gitlab.com/company/preference-center/), where people can control their email communication preferences.

Each form will have the appropriate opt-in language specifid. However, to check you may [visit here](https://docs.google.com/document/d/1UEfWo26DP7nRPrWRWo7O7oSrNp_rRuVqyN_vC7SwXME/edit?usp=sharing).

### Email filters

All email sends must use the relevant `Emailable` Smart List. This is in addition to filters to address the relevant audience.

- [SSOT - WEBCASTS EMAILABLE](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52991024A1)
- [SSOT - LIVE EVENTS EMAILABLE](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52991025A1)
- [SSOT - NEWSLETTER EMAILABLE](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52991026A1)
- [SSOT - EDUCATION NEWSLETTER EMAILABLE](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52991027A1)
- [SSOT - ALL EMAILABLE](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52996261A1)
- [NURTURE EMAILABLE](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL52969344A1)

To apply these filters in your Smart List in Marketo, select `Member of Smart List` and use the filter:  `Member of Smart List in [select the appropriate emailable list from above]`.

You do not need to use the compliance segmentation in Marketo in your email sends, only the Smart Lists above as the segments are incorporated into the Smart Lists.

### Localized email footer snippet

We have a [Localized email footer snippet](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SN15Z1B2ZN16) that can be used on localized email. This footer will include our standard unsubscribe and preference center in the language preferred by the person being emailed, based on their language preference segment. To add this footer to a nurture email (instructions are the same for most emails on the modular template):

- Delete the existing footer section by clicking the Settings button on the section
- Drag the `Body text` module into the email from the sidebar where the footer was
- Clear Content the first content section in the `Body text` module
- On the second section, select the Settings button, then click `Replace with snippet`
- Select `Localized email footer`, then save.

### Send Frequency

We have a Marketo enforced limit on how many emails a single address can receive per day and week. The limits are 1/day and 3/week. Once a person has hit that limit, they are supressed from email groups until they fall back under the threshold, **unless** the email is marked as `operational`. Operational emails do not count against daily/weekly communication limits.

The email limits are not set in campaign templates, however, if your email is set to send to more than 20,000 people, you must include a filter for `Not Sent Email in last 2 Days`.

Please reference and use the [All-Marketing SSOT Calendar](https://internal.gitlab.com/handbook/marketing/#fy25-ssot-marketing-calendar) to see other sends happening around the same time.

## Request non-Demand Generation Emails

Non-DG emails are sometimes required for product updates, security alerts, survey emails and more. If this is an emergency, follow the directions [here](/handbook/marketing/emergency-response/#marketing-emergency-response) Otherwise, please [visit this page for more information](/handbook/marketing/marketing-operations/email-management/operational-email-sends/)

### Operational / Bypass Unsubscribe

Certain emails can bypass unsubscribe and invalid emails by being marked as `operational`. Examples include critical system alerts, account updates (policy updates, etc.), event reminders with necessary link to attend event, and auto-responders for post event recording and slides emails. Please follow this [decision tree](https://www.figma.com/file/NmnCPyzTwg0szmFEYhIAnh/Decision-Tree-for-Operational_2023-08-23_20-50-07?type=whiteboard&node-id=0%3A1&t=BpnsLh0xK6S9yxOf-1) for auto-responder emails to help determine whether or not your email fits the operational standards. If they do not, you must include the proper email compliance filters in order to send the email, and also uncheck the operational check box on the email.

Emails that contain mostly marketing or promotional content like newsletters, event invites and sales emails are not considered `operational`. Only MktgOps and certain MCMs have access to this feature in Marketo. If you have any questions on whether or not your email is operational, contact MktgOps, who will bring in Legal for a final review. **When in doubt, ask!**

## How to Unsubscribe

If a person asks a team member to remove them from email marketing from GitLab, the team member can take a few different steps stated below. If a person unsubscribes, they may still receive [operational emails](/handbook/marketing/marketing-operations/email-management/#operational--bypass-unsubscribe) related to their account.

1. Send the person to the [Email Subscription Center](https://about.gitlab.com/company/preference-center/) to update their preferences
1. Send the person to the unsubscribe page (https://page.gitlab.com/UnsubscribePage.html) to unsubscribe from ALL communication
1. On the person's SFDC record, check the `email opt out` box, which will then update the unsubscribe checkbox in Marketo and Outreach.
1. If they are not in SFDC or refuse to go to unsubscribe page, the Marketing Operations team can manually unsubscribe them in Marketo. Create a confidential issue and alert the team in #mktgops.

### Partners and Email Communication

While a partner is in contact with a lead or contact, GitLab should stop emailing the prospect so that the partner can follow up. Once the partner rejects or if GitLab recalls the lead, the lead can then be emailed again by GitLab (assuming we have consent). As of 2021-12-28 we have not yet set up a process for a lead to be returned to GitLab and become emailable.

The workflows in Marketo are set up and are [reflected here](https://www.figma.com/file/XPEIfQ3ZBoIuK01U6XCAyH/Partner-Opt-in--Email-Compliance-Flow_2023-08-30_16-10-19?type=whiteboard&node-id=0%3A1&t=LTAXXtADs19U4fHf-1). If a lead or contact has a `Prospect Share Status` of `Sending to Partner`, `Accepted`, or `Pending`, Marketo will suppress them from all GitLab marketing sends (operational emails will still send).

If a lead comes in via Partners from MDF or Trial campaigns, they are marked as `Marketing Suspended` in Marketo with a reason of `Partner Lead`, and will be un-emailable until that suspension flag is lifted.

If a person opts-out of GitLab email, it does not opt them our from Partner communication, and vice versa. It is the responsibility of the partner to manage their email lists.

### Requesting, Creating, and Approving New Email Templates

This section is currently under construction while we develop the process.

### Monitoring Email Bounce Frequency

As a way to cut down on bounced emails and protect our IP, the Marketo program [Directory of Leads Bouncing Emails](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/PG13085A1) has been created. Using a series of triggers, the program records soft and hard bounce email history and appends that data to leads. The leads are then collected within the program and its static list, but will automatically be removed from the [Active Bounce List](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/ST25117A1LA1) static list if an email is eventually delivered to that lead. The `Bounce Details` list collects all relevant bounce data on the lead while `Successful Records` tracks leads that have been removed from the `Active` static list. A few things to note about this program:

- Due to Marketo limitations, the [Bounce Spike Alert](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SC33241A1ZN19) set to email the Awareness & Conideration wing of the MktgOps team will occassionally need to be updated as we grow the team or lose members. There is not a way to have this alert send to all Marketo admins, so instead the alert is set to email individual emails.
- Also due to Marketo limitaions, to utilize the [Bounce Details](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL53109072A1LA1) and [Successful Resends](https://engage-ab.marketo.com/?munchkinId=194-VVC-221#/classic/SL53109462A1LA1) smart lists each Marketo user will need to create the intended smart list view since an individual's list views cannot be shared between other Marketo users. The view consists of these columns: `Email`, `Email Invalid`, `Email Bounce Category`, `Email Bounce Subject Lane`, `Email Bounce Details`, `Email Bounce Date_mkto`, `Email Bounces`, `Delivers After Bounces` and `Email Delivered After Bounce`.
