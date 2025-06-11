---
title: Ticket Processor
description: Support Operations documentation page for our Zendesk Global ticket processor
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/ticket_processor"
---

## How is it triggered

The methodlogy we use is to have a Zendesk trigger fire based on the needed
criteria, with one of the actions being to notify an active webhook. Said active
webhook is set to trigger the CI/CD pipeline of the project (either for
[Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/tickets/processor)
or
[Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/tickets/processor)
depending on the instance the trigger first from)  to run the script based on
the variables passed to it from the Zendesk trigger.

## What it does on Zendesk Global

Currently, the ticket processor actions on the following:

- [Autowork account blocked requests](#autowork-account-blocked-requests)
- [Autowork account locked requests](#autowork-account-locked-requests)
- [Autowork email suppression requests](#autowork-email-suppression-requests)
- [Autowork Namesquatting requests](#autowork-namesquatting-requests)
- [Add tags on Zendesk tickets based on comment content](#add-tags-on-zendesk-tickets-based-on-comment-content)
- [Add internal comments on Zendesk tickets based on the organization](#add-internal-comments-on-zendesk-tickets-based-on-the-organization)
- [Add tags on Zendesk tickets when a STAR is made on them](#add-tags-on-zendesk-tickets-when-a-star-is-made-on-them)
- [Add ticket weighting values to Zendesk tickets](#add-ticket-weighting-values-to-zendesk-tickets)
- [Automatically redact attachments on closed tickets](#automatically-redact-attachments-on-closed-tickets)

### Autowork account blocked requests

This checks the account status of a gitlab.com user. Depending on the status,
different actions can occur:

- If the user does not exist...
  - A public reply is sent to the user stating the account does not exist
  - The `Ticket Stage` value is set to `FRT`
  - The ticket's status is set to `Pending`
- If the user is not blocked...
  - A public reply is sent to the user stating the account is not actually
    blocked
  - The `Ticket Stage` value is set to `FRT`
  - The ticket's status is set to `Pending`
- If the user is blocked due to embargo policies...
  - A public reply is sent to the user stating they were blocked due to embargo
    policies. It also tells them the next steps to resolve that.
  - The `Ticket Stage` value is set to `FRT`
  - The ticket's status is set to `Solved`
- If the user is blocked (but not due to embargo policies)...
  - An issue is made within the
    [T&S account reinstatement project](https://gitlab.com/gitlab-com/gl-security/security-operations/trust-and-safety/TS_Operations/account-reinstatements)
  - An internal reply made on the ticket pointing the SE to the next steps to
    follow

### Autowork account locked requests

This sends a public reply to the user on the ticket stating what they should do,
sets the ticket's status is set to `Pending`, and the `Ticket Stage` value is
set to `FRT`.

### Autowork email suppression requests

This checks if an email suppression exists within Mailgun. Depending on the
results of the check, different actions can occur:

- If a suppression exists...
  - The located suppressions in Mailgun are deleted
  - An internal reply made on the ticket stating that a suppression was found
    and removed, including the code, error, and timestamp of said suppression
  - A public reply is sent to the user stating a suppression was found, removed,
    and what next steps the user should take.
  - The ticket's status is set to `Solved`
- If a suppression does not exist...
  - A public reply is sent to the user stating we did not locate any
    suppressions and what next steps they can take.
    policies. It also tells them the next steps to resolve that.
  - The `Ticket Stage` value is set to `FRT`
  - The ticket's status is set to `Pending`

### Autowork Namesquatting requests

This checks if a given namespace is eligible for release based on our various
criteria. The result of the check will determine what acctions occur:

- If the requester is a free user...
  - A public reply is sent to the user stating these requests are only eligible
    for paying customers.
  - The `Ticket Stage` value is set to `FRT`
- If the namespace is invalid...
  - A public reply is sent to the user stating we could not locate the namespace
    in question.
  - The `Ticket Stage` value is set to `FRT`
- If the namespace is not eligible...
  - A public reply is sent to the user stating the namespace is not eligible for
    release at this time.
  - The `Ticket Stage` value is set to `FRT`
- If the namespace *may* be eligible...
  - An internal reply made on the ticket stating that the namespace can only be
    released after contacting the namespace's current owners. It lists the found
    email addresses of the owners.
  - The `Ticket Stage` value is set to `FRT`
- If the namespace **is** eligible...
  - An internal reply made on the ticket stating that the namespace is eligible
    for immediate release.
  - The `Ticket Stage` value is set to `FRT`

### Add tags on Zendesk tickets based on comment content

This checks the passed comment (public and made be an agent) for the various
types of items we would want to tag on the ticket. The current kinds of items
(and the tag added based on them) are as follows:

- Contains a gitlab.com issue link
  - `gitlab_issue_link` tag is added
  - `CUSTOM_PATH_issues_IID` tag is added
    - This refers to a long tag that contains the entire project path
    - Example: a link to issue 5 on project jcolyer/most_amazing_project_ever
      would be: `jcolyer_most_amazing_project_ever_issues_5`
- Contains a gitlab.com merge request link
  - `gitlab_merge_request_link` tag is added
  - `CUSTOM_PATH_merge_requests_IID` tag is added
    - This refers to a long tag that contains the entire project path
    - Example: a link to merge request 27 on project
      jcolyer/most_amazing_project_ever would be:
      `jcolyer_most_amazing_project_ever_merge_requests_27`
- Contains a docs.gitlab.com link
  - `docs_link` tag is added
- Contains a handbook.gitlab.com link
  - `hb_link` tag is added
- Contains text that indicates the agent offered a call
  - `agent_offered_call` tag is added
  - Search terms used:
    - `calendly.com`
    - `gitlab.zoom.us`
    - `gitlabmtgs.webex.com`
    - `teams.microsoft.com`

### Add internal comments on Zendesk tickets based on the organization

This adds internal notes on a ticket based off information derived from the
organization the requester of the ticket is a member of. This has the potential
to make 3 different internal notes:

- One derived from organization notes that can contain...
  - A message about the organization being in an escalated state
  - Partner troubleshooting information
  - General organization information
  - Any recent emergency tickets filed under the organization
  - If the organization has a collaboration project
  - If the organization is using a contact management project
  - Support Operations notes (derived from the Notes/Details fields on the
    organization itself in Zendesk)
  - Support notes (derived from the
    [Zendesk Global Organizations project](https://gitlab.com/gitlab-com/support/zendesk-global/organizations))
- One detailing the organization's support entitlement and grace period
  information
  - Only if the organization is expired or a priority prospect
- One about the organization being GitLab Dedicated

If a Support notes file does not exist, this will also create one for the
organization.

### Add tags on Zendesk tickets when a STAR is made on them

This adds the ticket tag `star_submitted` onto the ticket.

### Add ticket weighting values to Zendesk tickets

This determines the ticket's "weight" based on specific criteria. The criteria
currently used can be seen within the
[ticket processor's code](https://gitlab.com/gitlab-support-readiness/zendesk-global/tickets/processor)

### Automatically redact attachments on closed tickets

This sends the ticket's ID to the processor, where it then scrapes all comments
on the ticket. While scraping them, it looks for the following:

- Attachment files on the comment
- Inline file usage on the comment

It then fully redacts all that it has found, replacing it with an empty
`redacted.txt` file.

## What it does on Zendesk US Government

Currently, the ticket processor actions on the following:

- [Automatically redact attachments on closed tickets](#automatically-redact-attachments-on-closed-tickets-1)

### Automatically redact attachments on closed tickets

This sends the ticket's ID to the processor, where it then scrapes all comments
on the ticket. While scraping them, it looks for the following:

- Attachment files on the comment
- Inline file usage on the comment

It then fully redacts all that it has found, replacing it with an empty
`redacted.txt` file.

## Change management

Keep in mind, all change management should be stemming from an issue, first and
foremost.

All the triggers using this will rely on the `master` branch, meaning any merge
requests to this will instantly take effect. Keep that in mind when using this.

<!--

#### Creating new processes

TBD

#### Editing existing processes

TBD

#### Deleting existing processes

TBD

-->

## Pipeline error '1: Unknown request type'

This error occurs when the `REQUEST_TYPE` and/or the `REQUEST_SUBTYPE`
environment variables passed to the CI/CD trigger do not match anything the
scripts are coded to handle.

When this occurs, you need to review what is triggering the pipeline and the
variables being passed to it. If those are correct, it would then mean the
script itself should be coded to account for those variables.

Either case, you will need to correct the area that is not correct.

## Pipeline error '2: Unable to proceed on ticket'

This means Zendesk was unable to perform the needed actions on the ticket. The
error message will include error itself and the description reported back from
the Zendesk API.

You will need to review the reason it was not able to process the request and
correct it. The resolution can vary, but in *most* cases it will be one of the
following:

- Something in our Zendesk configuration is blocking the request. We will need
  to determine what that is and correct it.
- Something in the code of the script is making a bad Zendesk API request. We
  will need to determine what that is and correct it.
