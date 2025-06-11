---
title: Workflows
description: Support Operations documentation page for Slack workflows
canonical_path: "/handbook/support/readiness/operations/docs/slack/workflows"
---

## Building a Slack workflow

To build a brand new workflow, you will first click the 3 horizontal dots on the
left-hand side of your Slack window (the `More` option) and select
`Automations`.

From this page, you will want to click `Workflow builder` button on the
left-hand side of the page, which should make a new window pop-up.

![Accessing Slack workflow builder](/images/support/readiness/operations/slack_workflows1.gif)

Within the new window, click the green `Create Workflow` button to start the
process.

From here, you will select the various steps you want to occur. Using the
pre-made templates is often the best place to start, but feel free to start from
scratch if you feel comfortable doing so.

Once you are done building all the steps you want in the workflow, you will
click the green `Finish Up` button at the top-right of the window. Doing so will
normally prompt you to add the Name, Description, Image, and Workflow managers.

The exact options you pick depend on the nature of your workflow, but in terms
of workflows managed by Support Readiness, we use the following options (you
might need to click `Show more permissions` to see all the options):

- Workflow managers:
  - Jason Colyer
  - Nabeel Hasan
  - Alyssa Villa - Dionela
  - Dylan Tragjasi
  - Sarah Cole
  - Rene Verschoor
  - Lyle Kozloff
- Can find this workflow
  - Everyone in GitLab
- Can copy this workflow
  - Workflow managers only

With all that in place, click the green `Publish` button to activate your
workflow.

Remember to test it all out and update this page to reflect the new workflow (if
it is Support Readiness managed)!

## Modifying a Slack workflow

To edit an existing workflow, you will first click the 3 horizontal dots on the
left-hand side of your Slack window (the `More` option) and select
`Automations`.

From this page, you will want to click `Managed by you` button on the left-hand
side of the page and then select the workflow you are wanting to modify (and
then click the `Edit` button), which should make a new window pop-up.

From here, you are in the workflow builder. Make the changes you want to make to
the workflow and then click the green `Publish` button at the top-right of the
window.

Remember to test it all out and update this page to reflect the new workflow (if
it is Support Readiness managed)!

## Unpublishing and deleting a Slack workflow

To unpublish or delete a workflow, you will follow the same directions as the
[Modifying a Slack workflow](#modifying-a-slack-workflow) section. Instead of
modifying steps and the like though, you are going to click the 3 horizontal
dots at the top-right of the page, then select the option you are looking for
(either Unpublish or Delete).

Remember to test it all out and update this page to reflect the new workflow (if
it is Support Readiness managed)!

### Currently used Slack workflows

This section serves as a form of "backup" for the Slack workflows we manage, as
the current implementation of Slack workflows does not allow an export/import
option.

#### Licensing  Internal Requests

Locate at
[Licensing Internal Requests](https://app.slack.com/workflow-builder/E03N1RJJX7C/workflow/Wf06TP0FUJ07)

1. Choose how to start the workflow
   - When an emoji reaction is used
   - Emoji reaction:
     - :internal-request:
     - :ir-form:
   - Channels:
     - #support_gitlab-com
     - #support_licensing-subscription
     - #support_self-managed
1. Reply to a message in thread
   - Select a message to reply to: Reference to the message that was reacted to
   - Add a reply:
     > Hey VARIABLE
     >
     > Thanks for seeking to help your customer.
     >
     > Because
     > [Support cannot accept new work or customer-specific requests via Slack](/handbook/support/internal-support/#support-does-not-action-out-of-slack),
     > we cannot assist you here.
     >
     > Please submit an Internal Request on their behalf (Zendesk Light Agent account required), or they can open a Support ticket. Details here:
     >
     > - [Requesting Support for Customers](/handbook/support/internal-support/#support-tickets--customer-information)
     > - [Submit an Internal Request](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/)
     > - [Open a Support ticket](https://support.gitlab.com/hc/en-us/requests/new?ticket_form_id=360000071293)

     - Variables
       - User who sent the message that was reacted to (@display name)

Permissions:

- Managers:
  - Jason Colyer
  - Nabeel Hasan
  - Alyssa Villa - Dionela
  - Dylan Tragjasi
  - Sarah Cole
  - Rene Verschoor
  - Lyle Kozloff
- Can find this workflow
  - Everyone in GitLab
- Can copy this workflow
  - Workflow managers only

#### Remind APAC DRIs about Pagerduty

Located at
[Remind APAC DRIs about Pagerduty](https://app.slack.com/workflow-builder/E03N1RJJX7C/workflow/Wf06U06SPZFE)

Steps:

1. Choose how to start the workflow
   - On a Schedule
   - Starts on: 2024-06-03 at 21:30
   - Timezone: (UTC) Monrovia, Reykjavik
   - Frequency: Custom
   - Repeat every: 3 Months First Monday of the month
   - Ends: Never
1. Send a message to a channel
   - Select a channel: #support_leadership
   - Add a message:
     > Greetings @support-managers-apac!
     >
     > This is your quarterly reminder that Support Readiness will be
     > implementing next quarter's Pagerduty oncall schedules in about a month.
     > As such, please remember to fill out the
     > [Pagerduty spreadsheet](https://docs.google.com/spreadsheets/d/1FdUzVXCZleopfteC2QxW7LJwyylGWGl9hwXHMPkRHbQ/edit?usp=sharing)
     > before the first of next month!
     >
     > The schedules you need to ensure are updated are
     > [CEOC 1](https://gitlab.pagerduty.com/schedules#PQB9Q6K),
     > [CEOC 2](https://gitlab.pagerduty.com/schedules#PKPXM8K),
     > [CMOC 1](https://gitlab.pagerduty.com/schedules#PGUP5OB),
     > [CMOC 2](https://gitlab.pagerduty.com/schedules#PMPKHZN),
     > [Managers](https://gitlab.pagerduty.com/schedules#PWBXTYX), and
     > [SSAT](https://gitlab.pagerduty.com/schedules#P9UIIDY)
     >
     > Please remember any BLANK values at the time of implementation will be
     > assigned to the Support Director for your region.

Permissions:

- Managers:
  - Jason Colyer
  - Nabeel Hasan
  - Alyssa Villa - Dionela
  - Dylan Tragjasi
  - Sarah Cole
  - Rene Verschoor
  - Lyle Kozloff
- Can find this workflow
  - Everyone in GitLab
- Can copy this workflow
  - Workflow managers only

#### Remind AMER DRIs about Pagerduty

Located at
[Remind AMER DRIs about Pagerduty](https://app.slack.com/workflow-builder/E03N1RJJX7C/workflow/Wf06ULFJRL3S)

1. Choose how to start the workflow
   - On a Schedule
   - Starts on: 2024-06-03 at 14:00
   - Timezone: (UTC) Monrovia, Reykjavik
   - Frequency: Custom
   - Repeat every: 3 Months First Monday of the month
   - Ends: Never
1. Send a message to a channel
   - Select a channel: #support_leadership
   - Add a message:
     > Greetings @support-managers-apac!
     >
     > This is your quarterly reminder that Support Readiness will be
     > implementing next quarter's Pagerduty oncall schedules in about a month.
     > As such, please remember to fill out the
     > [Pagerduty spreadsheet](https://docs.google.com/spreadsheets/d/1FdUzVXCZleopfteC2QxW7LJwyylGWGl9hwXHMPkRHbQ/edit?usp=sharing)
     > before the first of next month!
     >
     > The schedules you need to ensure are updated are
     > [Global CEOC 1](https://gitlab.pagerduty.com/schedules#PBLAHV7),
     > [Global CEOC 2](https://gitlab.pagerduty.com/schedules#P9FKYZC),
     > [Global CEOC 3](https://gitlab.pagerduty.com/schedules#PP28N7L),
     > [US Gov CEOC 1](https://gitlab.pagerduty.com/schedules#P89ZYHZ),
     > [US Gov CEOC 2](https://gitlab.pagerduty.com/schedules#P89ZYHZ),
     > [US Gov CEOC 3](https://gitlab.pagerduty.com/schedules#P89ZYHZ),
     > [CMOC](https://gitlab.pagerduty.com/schedules#PG0SHU2),
     > [Managers](https://gitlab.pagerduty.com/schedules#PTI56V1), and
     > [SSAT](https://gitlab.pagerduty.com/schedules#P9UIIDY)
     >
     > Please remember any BLANK values at the time of implementation will be
     > assigned to the Support Director for your region.

Permissions:

- Managers:
  - Jason Colyer
  - Nabeel Hasan
  - Alyssa Villa - Dionela
  - Dylan Tragjasi
  - Sarah Cole
  - Rene Verschoor
  - Lyle Kozloff
- Can find this workflow
  - Everyone in GitLab
- Can copy this workflow
  - Workflow managers only

#### Remind EMEA DRIs about Pagerduty

Located at
[Remind EMEA DRIs about Pagerduty](https://app.slack.com/workflow-builder/E03N1RJJX7C/workflow/Wf06TXGNMTQB)

1. Choose how to start the workflow
   - On a Schedule
   - Starts on: 2024-06-03 at 08:00
   - Timezone: (UTC) Monrovia, Reykjavik
   - Frequency: Custom
   - Repeat every: 3 Months First Monday of the month
   - Ends: Never
1. Send a message to a channel
   - Select a channel: #support_leadership
   - Add a message:
     > Greetings @support-managers-apac!
     >
     > This is your quarterly reminder that Support Readiness will be
     > implementing next quarter's Pagerduty oncall schedules in about a month.
     > As such, please remember to fill out the
     > [Pagerduty spreadsheet](https://docs.google.com/spreadsheets/d/1FdUzVXCZleopfteC2QxW7LJwyylGWGl9hwXHMPkRHbQ/edit?usp=sharing)
     > before the first of next month!
     >
     > The schedules you need to ensure are updated are
     > [CEOC](https://gitlab.pagerduty.com/schedules#P9SV029),
     > [CMOC](https://gitlab.pagerduty.com/schedules#P59382D),
     > [Managers](https://gitlab.pagerduty.com/schedules#PXQ2ZAZ), and
     > [SSAT](https://gitlab.pagerduty.com/schedules#P9UIIDY)
     >
     > Please remember any BLANK values at the time of implementation will be
     > assigned to the Support Director for your region.

Permissions:

- Managers:
  - Jason Colyer
  - Nabeel Hasan
  - Alyssa Villa - Dionela
  - Dylan Tragjasi
  - Sarah Cole
  - Rene Verschoor
  - Lyle Kozloff
- Can find this workflow
  - Everyone in GitLab
- Can copy this workflow
  - Workflow managers only

#### Support Ticket Attention Request

Locate at
[Support Ticket Attention Request](https://app.slack.com/workflow-builder/E03N1RJJX7C/workflow/Wf06U0N0CV0D)

1. Choose how to start the workflow
   - When an emoji reaction is used
   - Emoji reaction:
     - :escalate:
     - :support-ticket-attention-request:
   - Channels:
     - #support_gitlab-com
     - #support_leadership
     - #support_licensing-subscription
     - #support_operations
     - #support_self-managed
     - #support_team-chat
     - #support_ticket-attention_requests
     - #support_to_sales_escalation
     - #spt_us-government
1. Reply to a message in thread
   - Select a message to reply to: Reference to the message that was reacted to
   - Add a reply:
     > Hey VARIABLE! :waves:
     >
     > Thanks for seeking to help your customer.
     >
     > Because
     > [Support cannot accept new work or customer-specific requests via Slack](/handbook/support/internal-support/#support-does-not-action-out-of-slack),
     > we cannot assist you here.
     >
     > To request attention on a ticket or issue, you'll want to submit a
     > Support Ticket Attention Request (STAR). Please follow the steps in the
     > link below to do so.
     >
     > `https://handbook.gitlab.com/handbook/support/internal-support/support-ticket-attention-requests#submitting-a-support-ticket-attention-request-star--starring-a-ticket`

     - Variables
       - User who sent the message that was reacted to (@display name)

Permissions:

- Managers:
  - Jason Colyer
  - Nabeel Hasan
  - Alyssa Villa - Dionela
  - Dylan Tragjasi
  - Sarah Cole
  - Rene Verschoor
  - Lyle Kozloff
- Can find this workflow
  - Everyone in GitLab
- Can copy this workflow
  - Workflow managers only

#### Support Contact Management

Locate at
[Support Contact Management](https://app.slack.com/workflow-builder/E03N1RJJX7C/workflow/Wf06U665AK5J)

1. Choose how to start the workflow
   - When an emoji reaction is used
   - Emoji reaction:
     - :admission_tickets:
   - Channels:
     - #support_gitlab-com
     - #support_leadership
     - #support_licensing-subscription
     - #support_operations
     - #support_self-managed
     - #support_ticket-attention-requests
1. Reply to a message in thread
   - Select a message to reply to: Reference to the message that was reacted to
   - Add a reply:
     > Hello VARIABLE!
     >
     > The management of support contacts for a Zendesk Global organization can
     > only be done by the users of the organization, and will be done via a
     > Support Operations ticket. The information for this can be found at
     > `https://about.gitlab.com/support/managing-support-contacts/`. This page
     ? also contains the exact links to use to contact the Support Ops team in
     > regards to contact management. The specific form linked on this page will
     > not automatically close out a case.
     >
     > Note that nothing that is auto-generated on the page, such as the
     > `Choose the reason why you are reaching out to us today`, should be
     > changed to ensure proper ticket routing.
     >
     > Please direct your customer to that page and encourage them to fully read
     > the information therein. From there, they should make a decision on the
     > next course of action in regards to their support contacts that best
     > suits their company.

     - Variables
       - User who sent the message that was reacted to (@display name)

Permissions:

- Managers:
  - Jason Colyer
  - Nabeel Hasan
  - Alyssa Villa - Dionela
  - Dylan Tragjasi
  - Sarah Cole
  - Rene Verschoor
  - Lyle Kozloff
- Can find this workflow
  - Everyone in GitLab
- Can copy this workflow
  - Workflow managers only

#### US Government Support Customer Info Reminder

Located at
[US Government Support Customer Info Reminder](https://app.slack.com/workflow-builder/E03N1RJJX7C/workflow/Wf06CYEUHR50)

1. Choose how to start the workflow
   - When an emoji reaction is used
   - Emoji reaction:
     - :loose_lips_sink_ships:
   - Channels:
     - #spt_us-gov-evening-overnight
     - #spt_us-government
1. Reply to a message in thread
   - Select a message to reply to: Reference to the message that was reacted to
   - Add a reply:
     > Hello VARIABLE, please redact the customer information in your comment.
     > This channel may be accessed by non-US Citizens and customer information
     > is not permitted to be shared openly here.
     >
     > Refer to the
     > [US Government Support Communication Guidelines](/handbook/support/workflows/usgovernment_tickets/#how-to-reference-customer-information-securely-in-chat)
     > to see how you may reference customer information in a secure manner.

     - Variables
       - User who sent the message that was reacted to (@display name)

Permissions:

- Managers:
  - James Lopes
  - Jason Colyer
  - Sarah Cole
- Can find this workflow
  - Everyone in GitLab
- Can copy this workflow
  - Workflow managers only
