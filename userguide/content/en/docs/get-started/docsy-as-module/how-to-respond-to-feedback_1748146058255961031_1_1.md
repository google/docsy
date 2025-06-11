---
title: Satisfaction (CES) review and responding (for Managers)
category: Handling tickets
subcategory: Writing responses and handling feedback
description: Discusses the Support Team's Satisfaction (Customer Effort Score or CES) review process, and actions which Managers take to respond to customer feedback
---

To understand the factors contributing to [Support Satisfaction](/handbook/support/performance-indicators/#support-satisfaction-ssat),
we review feedback received for support tickets. Issues are automatically
created in the [Feedback issue tracker](https://gitlab.com/gitlab-com/support/feedback/-/issues)
(internal only) for all Support Satisfaction feedback received and assigned to the manager of the person who assigned to the ticket.

**NOTE:** The following categories of tickets do **not** receive surveys:

- Spam tickets (ones marked as spam and suspended)
- Free user tickets (ones containing the tag `free_customer`)
- Embargo tickets (ones containing the tag `com_embargo`)
- Tickets with the organization `GitLab` or `DigitalOcean Support`

## What the customer receives

When a ticket is solved the customer receives an email inviting them to complete a survey by answering one simple question:

- Thinking about your recent experience of creating and working on a ticket, how easy was it to work with GitLab Customer Support?

Choice of rating range from Extremely Easy to Extremely Difficult with 5 intermediate options. The resulting feedback issue will identify these as ratings 7 down to 1

An optional second question asks:

- What would make working on a ticket with GitLab Customer Support easier?

If the customer opts out of completing this section the resulting feedback issue will contain 'User did not leave a comment'

Examples of forms are located [here](/handbook/security/customer-support-operations/docs/zendesk/ces/#ces-survey-form)

## Subscribing to Customer Feedback Issues

### By territory

If you'd like to subscribe to CESs submitted by customers from a certain
territory, you can subscribe to the appropriate `OrganizationRegion` scoped
label through the [Feedback project labels page](https://gitlab.com/gitlab-com/support/feedback/-/labels).

These labels are applied based on organization information synced to Zendesk from SFDC.

| Label   | Description |
|---------|-------------|
| APAC    | Asia-Pacific |
| EMEA    | Europe, Middle East and Africa |
| LATAM   | Latin America (includes all of Central & South America) |
| NORAM   | North America |
| NCSA    | North, Central, South America (legacy region being phased out) |
| Unknown | Unknown |

The single source of truth for these definitions can be found in the [Go to Market Glossary](/handbook/sales/field-operations/gtm-resources/#glossary) handbook page.

## Who is responsible for reviewing Support Satisfaction feedback

Each Support Engineering Manager is responsible for reviewing and actioning feedback for their reports. Issues will be directly assigned to managers, and should be addressed within 7 days.

This CES data will be reviewed by Senior Leaders and presented in Monthly region reviews.

### CES

The manager of the person to whom a ticket is assigned is responsible for reviewing customer feedback on that ticket. Feedback issues
are assigned to the managers automatically. The manager receives email notification from GitLab and a To-Do item.

### Mid-ticket feedback

[Support Managers On-call](/handbook/support/workflows/support_manager-on-call) are responsible for initial triage of mid-ticket feedback received during their shift. Notifications are posted in the `#support_ticket-attention-requests` channel.

### Sources of feedback

Currently, the following methods create feedback issues for review:

1. Automatic email survey -- sent to customers when tickets are solved.
1. Mid-ticket feedback link -- each Public Comment from a GitLab Support Engineer or Manager has a link to a form where a customer can provide feedback or request contact from a manager while the ticket is open (introduced in issue [2913](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/2913)).
   1. This feedback form creates issues in the customer feedback project, with a subject format of **Positive/Negative/Neutral feedback for ticket nnnnnn**, and is automatically assigned to the **Support Manager On-call** and the manager of the Support Engineer assigned to the ticket.
   1. If the feedback is negative, there is an option to request manager contact (within 48hrs Mon-Fri). If this option is chosen, a Slack notification is sent to the #support_ticket-attention-requests channel. The [**On Call Manager**](/handbook/support/workflows/support_manager-on-call#expectations-for-support-manager-on-call) should promptly follow the guidance in [Handling mid ticket feedback requesting manager contact during business hours](/handbook/support/workflows/support_manager-on-call#handling-mid-ticket-feedback-requesting-manager-contact-during-business-hours).
1. GitLab team members (such as CSMs and Sales team) can open an [Indirect Feedback](https://gitlab.com/gitlab-com/support/feedback/-/issues/new?issuable_template=Indirect+Feedback) issue with details they received from the customer.
1. Any issue requiring contact can also be identified by applying the `SSAT::Contact` label. In the Description or in a Comment, specify that manager contact was requested.

### What does success look like?

Within 7 days, for each of your Support Engineers who receive feedback:

1. You should have performed the triage work described in the handling
["Good"](#handling-good-reviews---customer-effort-scores-56-or-7) and ["Bad"](#handling-bad-reviews---customer-effort-scores-123-or-4) sections
for each feedback issue assigned to you.
1. You should have initiated any customer or GitLab group contact.
1. You should have closed all feedback issues assigned to you that have
no outstanding dependencies on other groups or on the customer.

### How fast do I need to respond?

Currently there is no SLA for responding to Feedback Issues, but if you follow
the process defined on this page, you should send an initial response to each
issue within 7 days of its creation.

## Workflows for reviewing feedback

Our [Feedback and Complaints handbook page](/handbook/support/workflows/feedbacks_and_complaints) provides general guidance on assessing and responding to feedback.

## Handling "Good" Reviews - Customer Effort Scores 5,6 or 7

For each feedback issue labeled "satisfaction::good":

1. read through the feedback and check for anything **actionable** - sometimes customers provide really good actionable feedback in positive reviews
1. consider sharing the feedback in the Support Week in Review document (see below)
1. if no further action is needed, `/close` the Feedback Issue.

**Note:** Support Engineers can see the Feedback comments on their tickets, and get notified by Zendesk when a Feedback comment is added. You do not need to notify them or their managers.

**Note:** After 7 days of inactivity, the GitLab Support Bot closes "satisfaction::good" issues.

### Sharing positive feedback in Support Week in Review (SWIR)

To share positive feedback in the Support Week in Review, each week an issue will be created in the [Support Week In Review Tracker](https://gitlab.com/gitlab-com/support/readiness/support-week-in-review/-/issues) and tagged with `~"SWIR::SSAT"`.

Anything you add to the body of this issue will be included in the SWIR digest for the week. No further action is required other than having the body of the issue updated. Please do be aware of some considerations in [formatting feedback in the SWIR issue](#formatting-feedback-in-swir-issue).

You only need update the SWIR issue for feedback you want to be sure makes it in. SWIR hosts will select some positive feedback each week to share with the team.

**Due Date**: the cut off for content for the SWIR is close of business on your Thursday. Plan to add any ticket feedback before this time. Anything you want to add after this time needs to be added to the content for the following week, to ensure it is included in the audio recording.

#### Guidance for SWIR Hosts

Each week, take note of any positive feedback included by managers in the `~SWIR::SSAT` issue and be sure to include it.

When selecting additional feedback to share, you don't need to share every piece of positive feedback. Consider the following when choosing what to share:

1. Comments that stand out to you - the ones that you dwell on and smile as you read them
1. The customer has taken the time to name the individual(s) they appreciated
1. The customer has described why they were satisfied or how our support improved their day (we get some great stories!)
1. If there are general sentiments or themes, feel free to congratulate the whole team. For example, if we were praised for our overall approach to support, speed, clarity, etc.
1. Is the feedback **definitely** positive?  Sometimes comments in positive feedback can be neutral or even negative. For example "I would have liked a quicker response", or "I was satisfied" are valuable to us, but they don't really encourage the team when shared in the SWIR.

### Formatting feedback in SWIR issue

When adding the comment to the CES issue in the `support-week-in-review` tracker, feel free to use markdown formatting. If you wish to use headers (`#`) please

- use H4 (`####`) or lower
- be aware that headers will be included in the table of contents in the issue

Generally, include the ticket number with a link to the ticket, the comment from the customer, and where applicable @ mention the person (or people) who primarily worked the ticket.

### Automatically collecting positive feedback

The [`populate_ssat` job](https://gitlab.com/gitlab-com/support/readiness/support-week-in-review/#populate_ssat) in the `support-week-in-review` tracker will automatically collect open issues labeled with `~"satisfaction::good"` and append a nicely formatted version to the open CES issue.

To run this job:

1. [Run a manual pipeline] (https://docs.gitlab.com/ci/pipelines/#run-a-pipeline-manually) and run the `populate_ssat` job.

You can safely re-run this task as many times as you'd like as it will append to the issue.

## Handling "Bad" Reviews - Customer Effort Scores 1,2,3 or 4

For feedback issues labeled "satisfaction::bad", click through to the ticket, and review it to determine the following:

1. Why the feedback was given
1. If further [action needs to be taken](#if-there-is-action-to-be-taken)
1. If the customer should be contacted to discuss the feedback given
1. If the feedback should be discussed with a CSM

You should document your finding and any follow-up actions taken in the issue.
You may use the following template to add a comment to the feedback issue (NOT the
ticket!):

```text
* **Summary of ticket/feedback:**
* **Action to be taken:**
* **Contact customer to discuss feedback? (Y/N)**
* **Make the CSM aware of this feedback? (Y/N)**
```

The above text will be automatically added as a comment to "bad" reviews. You might also consider adding the above snippet to a [comment template](https://docs.gitlab.com/user/profile/comment_templates/) for quick use.

If no action needs to be taken, and the customer does not need to be contacted to discuss the ticket, `/close` the Feedback Issue.

### When you see "bad" feedback on an apparently successful ticket

Sometimes, when you review the ticket, you will see that the ticket seems to have been resolved successfully. The customer may have even said something like "thank you, you can close the ticket". We strongly encourage you to [contact the customer](#if-the-customer-should-be-contacted) when this happens. If the ticket is still in `Solved` (but not `Closed`) status, the customer can change their rating, if they did not mean to mark it "bad".

### Understanding the customer's reason

Many customers do not provide a reason for the "bad" review they submit. Even if a
reason is provided, it may not be clear why the customer was dissatisfied. The
reviewing manager should carefully review the ticket and seek to understand why
a bad review was given. If necessary, [contact the customer](#if-the-customer-should-be-contacted)
to learn more.

Once the reason behind the "bad" review is understood, apply the `feedback`
[scoped label](https://docs.gitlab.com/user/project/labels/#scoped-labels)
that best describes the situation:

| Label | Description |
| ----- | ----------- |
| `~feedback::customer-resolved` | The customer resolved the ticket |
| `~feedback::docs-new-issue` | Encountered Documentation problem; new Issue and/or MR filed |
| `~feedback::docs-not-helpful` | Documentation unhelpful to customer and/or Support Engineer |
| `~feedback::known-issue` | Known issue with Issue already created |
| `~feedback::new-product-issue` | Encountered Product problem; new Issue and/or MR filed |
| `~feedback::missing-info-from-customer` | Customer did not supply enough information for investigation |
| `~feedback::missing-info-by-engineer` | Support Engineer did not provide adequate information to customer |
| `~feedback::outside-support` | Problem internal to GitLab but not directly by Support |
| `~feedback::process-confusing-customer` | Customer found support process confusing or unclear |
| `~feedback::process-engineer-not-followed` | Support Engineer did not follow documented support process |
| `~feedback::process-does-not-exist` | Problem does not have an existing Support process |
| `~feedback::process-sfdc` | Problem caused by Zendesk-Salesforce integration (includes delays due to needs-org, incorrect contact info/matching in SFDC, unable to validate subscription) |
| `~feedback::soft-skills` | Support Engineer responses unhelpful or customer expectations mishandled |
| `~feedback::technical-skills-engineer` | Support Engineer lacks skills or permissions to troubleshoot or resolve problem |
| `~feedback::technical-skills-customer` | Customer lacks skills or permissions to troubleshoot or resolve problem |
| `~feedback::unable-to-fulfil-customer-expectations` | Support unable to fulfil the request according to the customer's expectations |
| `~ffeedback::extended-TTR-due-to-troubleshooting` | The ticket time to resolve was extended due to troubleshooting requirements of the issue |
| `~feedback::extended-TTR-caused by-technical-complexity` | The ticket time to resolve was extended due to the technical complexity of the issue |

**Note:** For the full list of feedback labels and their descriptions, visit the [labels page in the support-feedback project](https://gitlab.com/gitlab-com/support/feedback/-/labels?utf8=%E2%9C%93&subscribed=&search=feedback%3A%3A).

This is important to help Support understand and respond to Support Satisfaction
trends.

### If there is action to be taken

Determine the course of action and tag appropriate people. Note that [indirect feedback](/handbook/support/internal-support/#regarding-gitlab-support-plans-and-namespaces) received from a customer/prospect will typically have the next action chosen for us.

Examples of possible actions:

- Contact the customer (see [below](#if-the-customer-should-be-contacted))
- Create a new Issue to discuss the feedback in `support-team-meta` (cross-link the Feedback Issue as related)
- Tag the manager of the person or people who participated in the ticket to discuss in a 1:1
- Tag a product group for awareness (some negative feedback is product related)

If further discussion is warranted, leave the Feedback Issue open. Otherwise, `/close` it.

### If the customer should be contacted

When the customer requests contact via a mid ticket feedback request:

1. The [On call manager](/handbook/support/workflows/support_manager-on-call) is responsible for the follow up.

If you believe the customer should be contacted following completion of a closed ticket survey:

1. Determine the best way to reach out. Some options are:
   1. Sending the customer an email from your GitLab email address. This should
      be the appropriate option in the majority of cases.
   1. Responding directly on the Zendesk ticket. This is appropriate if you
      determine that the ticket was not adequately resolved and work should be
      continued.
      - If reopening a ticket, make sure that you assign and brief a support
        engineer (typically the existing assignee) on the next actions to be
        taken.
      - Note that reopening a closed or solved ticket affects
        measurements of reopen rate and time to resolution.
1. When reaching out to the customer, make sure you do the following:
   1. introduce yourself, describing who you are and your role at GitLab
   1. note the specifics of the situation, including ticket ID - you can include a link using the format `https://support.gitlab.com/hc/requests/<ticket number>`
   1. restate and validate the customer's comments
   1. offer any apologies or clarifications required, including links to relevant documentation
   1. offer your Calendly link to schedule a video call
1. Update the Feedback Issue as follows:
   1. Add the text of your email as a comment in the Feedback Issue.
   1. Apply the label `~ssat-manager-contacted-customer`.
   1. `/close` the Feedback Issue; followup continues via email.
   1. After closing the Issue, if there are any additional actions that arise from your interaction with the customer, go back and note them in the Feedback Issue.
