---
title: Tickets
description: Operations documentation page for Zendesk tickets
canonical_path: "/handbook/security/customer-support-operations/docs/zendesk/tickets"
---

{{% alert title="Note" color="primary" %}}

This is an informational page for the Zendesk tickets. It may not reflect the way we actually manage Zendesk tickets.

- If you are looking for information about maintaining tickets (settings, statuses, etc.), please see [Tickets workflow](../../workflows/zendesk/tickets)
- If you are looking for information about working tickets, please see [Working Tickets workflow](../../workflows/zendesk/working-tickets)

{{% /alert %}}

## Ticket settings

{{% alert title="Note" color="danger" %}}

This should be the single source of truth for the settings used. Never make changes outside of approved workflows.

Always be cautious of changes. Many of these can have significant downstream impacts.

{{% /alert %}}

### Zendesk Global

- Comments
  - [x] Turn on emoji text replacement
  - [x] Turn on color text
  - [x] Set composed to public channel by default
  - [x] Agent comments via email are public by default
  - [ ] Allow first comment on tickets to be private
  - Render URIs are hyperlinks: `["[]"]`
  - [ ] Make email comments from CCed end users public (not recommended)
- Attachments
  - [x] Customers can attach files
  - [x] Enable secure downloads
- Tags
  - [x] Enable tags on tickets
    - [ ] Enable automatic ticket tagging
- CCs
  - [x] Enable CCs on tickets
    - [ ] Only agents can add CCs
    - [x] Enable CCs for end users on Help Center
    - CC blacklist: `noreply@google.com`
    - CC email subject: `[{{ticket.account}}] Update: {{ticket.title}}`
    - CC email text:

      ```plaintext
      You are registered as a CC on this support request ({{ticket.link}}). Reply to this email to add a comment to the request.

      {{ticket.comments_formatted}}


      ```

- Assignment
  - [x] Auto-assign tickets upon solve
  - [x] Allow re-assignment back to the general group
- Follow-Ups
  - [ ] Copy original assignee and group to follow-up ticket
- Suspended Ticket Notifications
  - `Never` How often you want to receive email about new suspended tickets.
  - Email list:
- Ticket IDs
  - Set the ticket ID counter
    - This value is going to change based on ticket volume. Do not touch it
- Modify closed ticket
  - [ ] Turn on
- Email Archiving
  - Archhive email address:
- Transcript visibility
  - How conversation transcript is incrementally appended to the ticket: `As public reply`
- Continuous conversations
  - [ ] Switch messaging conversations to email
- Translations
  - [x] Agents can translate conversations
- Solved Ticket Reassignment
  - [ ]  Turn on solved ticket reassignment
    - [ ] Show solved ticket reassignment
    - Set an account level default for solved ticket reassignment option for newly created groups: `To an admin or longest active team member`
    - [ ] Force all theh groups to assume the account level default now
- Agent collaboration for messaging
  - [x]  Multiple agents can collaborate in messaging conversations

### Zendesk US Government

- Comments
  - [x] Turn on emoji text replacement
  - [x] Turn on color text
  - [x] Set composed to public channel by default
  - [x] Agent comments via email are public by default
  - [ ] Allow first comment on tickets to be private
  - Render URIs are hyperlinks: `["[]"]`
  - [ ] Make email comments from CCed end users public (not recommended)
- Attachments
  - [x] Customers can attach files
  - [x] Enable secure downloads
- Tags
  - [x] Enable tags on tickets
    - [ ] Enable automatic ticket tagging
- CCs
  - [x] Enable followers
    - Follower email subject: `{{ticket.title}}`
    - Follower email template:

      ```plaintext
      You are a follower on this request ({{ticket.link}}). {{ticket.follower_reply_type_message}}

      {{ticket.comments_formatted}}
      ```

  - [ ] Enable CCs
  - [ ] Automatically make an agent CC a follower
- Requester
  - [ ] Agents can change requester
- Assignment
  - [x] Auto-assign tickets upon solve
  - [x] Allow re-assignment back to the general group
- Follow-Ups
  - [ ] Copy original assignee and group to follow-up ticket
- Suspended Ticket Notifications
  - `Never` How often you want to receive email about new suspended tickets.
  - Email list:
- Ticket IDs
  - Set the ticket ID counter
    - This value is going to change based on ticket volume. Do not touch it
- Modify closed ticket
  - [ ] Turn on
- Email Archiving
  - Archhive email address:
- Transcript visibility
  - How conversation transcript is incrementally appended to the ticket: `As public reply`
- Continuous conversations
  - [ ] Switch messaging conversations to email
- Translations
  - [x] Agents can translate conversations
- Solved Ticket Reassignment
  - [ ]  Turn on solved ticket reassignment
    - [ ] Show solved ticket reassignment
    - Set an account level default for solved ticket reassignment option for newly created groups: `To an admin or longest active team member`
    - [ ] Force all theh groups to assume the account level default now
- Agent collaboration for messaging
  - [x]  Multiple agents can collaborate in messaging conversations

## Ticket sharing

{{% alert title="Note" color="danger" %}}

This should be the single source of truth for the sharing used. Never make changes outside of approved workflows.

Always be cautious of changes. Many of these can have significant downstream impacts.

{{% /alert %}}

### Zendesk Global

- Sending aggreements: 0
- Receiving agreements
  - `Pivotal @ Zendesk` `Public comments allowed. Sync status and share tags` `Accepted`
- Opt out of sharing
  - [ ] Decline all sharing agreement invites

### Zendesk US Government

- Sending aggreements: 0
- Receiving agreements: 0
- Opt out of sharing
  - [ ] Decline all sharing agreement invites

## Statuses

As per [Zendesk](https://support.zendesk.com/hc/en-us/articles/4408832151834-Updating-and-solving-tickets#topic_i3y_np1_vt) the various status are defined as:

- New
  - This indicates that no action has been taken on the ticket. Once a New ticket's status has been changed, it can never be set back to New.
- Open
  - This indicates that the ticket is waiting for action by the agent.
- Pending
  - This indicates that the agent is waiting for more information from the requester. When the requester responds and a new comment is added, the ticket status is automatically reset to Open.
- On-hold
  - This indicates that the agent is waiting for information or action from someone other than the requester. It is similar to the Pending status in that you as an agent can't proceed with resolving the ticket until you receive more information from someone else. However, the On-hold is an internal status that the ticket requester never sees. While a ticket is set to On-hold, the requester sees the status as Open.
- Solved
  - This indicates that the agent has submitted a solution or the end-user has marked it as such. A solved ticket can still be edited or re-opened.
- Closed
  - This indicates that the ticket is in a state where it can no longer receive updates. Replying to a closed ticket opens a follow-up ticket, which contains all previous tags and links to the previous ticket.

At GitLab, we define them a bit differently:

- New
  - This is a new ticket. This means it has not yet been worked by GitLab.
- Open
  - This means the ticket is awaiting our reply.
- Pending
  - This means we are waiting on the end-user to reply. We should only use this specifically when the user will reply back to the ticket (or it will auto-solve). If you need to keep a ticket in a "pending" like state for lengthy periods of time, use `On-hold`.
- On-hold
  - This means the end-user is waiting on us, but we are waiting on something that is blocking us from replying. We should only be using this in situations where we are waiting on something such as a different department, time to pass (namesquatting requests as an example), or some other criteria that fits along the same concept.
- Solved
  - This means the ticket has been resolved, but the end-user might come back to us.
- Closed
  - We use them exactly as Zendesk defines them.
