---
title: DEPRECATED - Ensuring correct SLA and Zendesk views
description: "A walk through of verifying and if needed, correcting the SLA on tickets, and visibility in the correct Zendesk view."
category: Handling tickets
subcategory: Triaging
---

> ⚠️ **Warning**
> This page is outdated and should only be referenced for historical purposes. Please do not use any of the processes on this page.

## Purpose of this page

> ⚠️ **Warning**
> This page is outdated and should only be referenced for historical purposes. Please do not use any of the processes on this page.

Assuming a ticket has:

- been [triaged](/handbook/support/workflows/ticket_triage/), and
- has the correct org associated,

then we need to ensure the ticket:

- has the correct SLA, and
- shows in the correct Zendesk (ZD) view.

## Appropriate SLA by plan

> ⚠️ **Warning**
> This page is outdated and should only be referenced for historical purposes. Please do not use any of the processes on this page.

Tickets should have the appropriate SLA according to the [support service levels](https://about.gitlab.com/support/#gitlab-support-service-levels).

Some values for `GitLab Plan` for ZD organizations (called `Support Level` in SFDC)
do not receive a SLA if they are linked to a service level. These are not expected to have SLA:

- `Community`. [EDU](https://about.gitlab.com/solutions/education/) and [OSS program](https://about.gitlab.com/solutions/open-source/) do not include Support, but are in SFDC and synced.
- `Expired`. Former customer with expired subscription. If you believe this is incorrect, see [Handling customers with incorrect expired support](#handling-customers-with-incorrect-expired-support).
- `Hold`. This is rarely used and indicates delayed payment or another issue with the sales process.
Consider contacting the Account Owner (Manager) to clarify the customer's status.

![Checking the value of GitLab Plan](/images/support/zendesk_check_org_fields.gif)

### Handling customers with incorrect expired support

> ⚠️ **Warning**
> This page is outdated and should only be referenced for historical purposes. Please do not use any of the processes on this page.

If you believe a customer marked as `Expired` support and `Former Customer` is in fact a current paying customer,
follow this process to verify and fix the issue.

1. Open [Salesforce](/handbook/support/workflows/looking_up_customer_account_details#within-salesforce) and find the customer in question.
1. Click `Show feed` button at the upper part of the page.

  ![SFDC show feed](/images/support/sfdc_show_feed.png)

1. Send a message there asking to clarify the customer's status and mention
  `@Sales-Support` username in SFDC, they should be able to help with such cases.
  Make sure that `@Sales-Support` is converted into clickable username, otherwise
  Sales Support team will not get your message (see the GIF below):

  ![Pinging Sales-Support in SFDC](/images/support/sfdc_sales_support.gif)

  Example of the message:

  ```plaintext
  John Doe (Support Engineer): @Sales-Support, this organization has
  Support Level set to Expired, and they opened a new ticket. Can you clarify if
  the support is really expired and if we should decline support for this customer, or
  this is some kind of error and Support Level should be updated? Customer also
  provided screenshot of their license and it seems valid.
  ```

  Prepending your message with your name and role (e.g. `John Doe (Support Engineer):`
  helps as everyone in Support is using a shared account so it is not possible to
  deduce who sent which message.

1. Once you follow the above procedure, mention that in the internal note of the
ticket (with SFDC link) so that others can pick up from where you
left off.

**Note:** the same workflow applies if you notice that customer-related
information is not up-to-date on SFDC side and you are not able to update it
using our generic `Support Admin` account.

#### Fixing tags for tickets with `Expired` organization

This part should be done in combination with the above section to fix future tickets.

If data in SFDC or
[CustomersDot](/handbook/support/workflows/looking_up_customer_account_details/#within-customersgitlabcom) show
that the customer has a valid subscription you should update the ticket in Zendesk side.

For the specific ticket:

1. Find `Tags` field where all the tags are listed.
1. Click `x` next to `former_customer` and `expired` tags to remove them.
1. Start typing the appropriate tag name and select the appropriate tag.

- For example, if it is a customer with Bronze subscription, type `bronze` in `Tags` field.

1. After making sure that tags are updated correctly, submit the ticket to apply the changes.

![Updating tags in a ticket](/images/support/zendesk_updating_tags.gif)

**Note**: When you assign a tag, there is a chance that the ticket will breach immediately.
It is not strictly necessary but, if possible, send a public reply before
you assign tags to prevent breach. Or, write your public reply and apply the tags,
to submit the ticket with both changes at the same time.

#### Verifying that the ticket now has the proper SLA applied

Now that you've added the appropriate domain, head back to your original ticket
and verify that it is associated with the appropriate organization and SLA.

![Verifying SLA](/images/support/zendesk_needs_org-verifying-sla.png)

#### Example: full sequence of actions that should be done to fix incorrectly expired organization

- A ticket comes to Zendesk and you spot that `GitLab Plan` is shown as `Expired`.
- First, search for [any info about this organization](looking_up_customer_account_details.md) in SFDC and CustomersDot.
- If you found that they have a valid license or subscription i.e. it is not expired, you are likely facing [this issue](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/634).
- Fix SFDC side first by following [the steps above](#handling-customers-with-incorrect-expired-support).
  Sales Support will usually reply to your message in SFDC, and you will be able to see it in the feed at the organization's page there.
  `GitLab Plan` value on Zendesk side will change from `Expired` to the valid one after the sync is done.
  After that new tickets from this organization will be shown correctly.
- Fix the tags in the ticket you are working using [these steps](#fixing-tags-for-tickets-with-expired-organization). Note that
  you do not need to wait for fix on SFDC side, you may fix the tags right away. SLA will appear in the ticket after doing it.
- Update the ticket with the internal comment describing what was done.

## No SLA

> ⚠️ **Warning**
> This page is outdated and should only be referenced for historical purposes. Please do not use any of the processes on this page.

Check the [SLA by plan](#appropriate-sla-by-plan) for a list of types that do not receive SLA.
Otherwise, the lack of SLA may be one of the following cases.

### Last public reply by agent

Tickets do not have a SLA if the latest public reply is from a Zendesk Agent (Support member).
The ticket should be assigned to someone, and there should be nothing to fix.

### Customer reply from email address not associated with ticket

When a customer responds to a ticket from an email address that is not included in CC or is not the original requester, the customer's response is recorded as internal.
There is a [trigger](https://gitlab.zendesk.com/agent/admin/triggers/360019008340/revisions/3)
which sends an internal note to remind people to add the user to CC and reply, see [this issue](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/1581) for more details.

If the email is obviously the original requester, you can [merge the users](https://support.zendesk.com/hc/en-us/articles/4408887695898-Merging-a-user-s-duplicate-account).

Alternatively, add the email of the customer to CC.

Please reply (or let the assignee know), including a note to let the customer that a CC has been added to the ticket. For example:

> We got a note from John with email address <john@domain.org>. From the context it looks like they should be included in the ticket, so for convenience I added them to the CC list. If they shouldn't be included, please let us know so we can remove them.`

After that, the cc'ed user's next replies will not be marked as internal anymore.

## Ticket views

> ⚠️ **Warning**
> This page is outdated and should only be referenced for historical purposes. Please do not use any of the processes on this page.

Tickets should show in the appropriate view(s).

### Wrong queue

In cases where a ticket is showing in the wrong queue, use the reach out to Customer Support Operations.

## Get help

If there's anything that doesn't fit in the relevant workflows, you can investigate and try to fix it.

> **Important**: Always leave internal comments when doing something on the SFDC side or modifying some tags in Zendesk.
It will help the next engineer to understand what was done in the ticket.

If you have any questions, please ask in the #support_operations Slack channel.
