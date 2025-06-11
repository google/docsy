---
title: Dev Pulse
description: Support Operations documentation page for Dev Pulse
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/dev_pulse"
---

<sup>*Introduced via [support-ops-project#970](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/970)*</sup>

## What is Dev Pulse?

Dev Pulse is the name for a set of scripts and Zendesk setups we utilize to
actively monitor various types of issues and merge requests in relation to bug
resolution, feature request resolution, and requests for help (or RFH for
short).

Through all the components, Dev Pulse allows a Zendesk ticket to stay in the
`On-hold` while waiting on an issue or merge request to reach a specific state.

When the specific state is reached, the tickets within Zendesk using Dev Pulse
are updated to indicate there has been a state change on the issue or merge
request they were waiting on.

## Where is the source code for Dev Pulse?

The source code for Dev Pulse is located in specific projects depending on the
Zendeks instance(s) it runs on:

- [Zendesk Global and Zendesk Global Sandbox](https://gitlab.com/gitlab-support-readiness/zendesk-global/dev-pulse)

## What Zendesk instances does Dev Pulse work on?

Dev Pulse currently works on the following Zendesk isntances:

- [Zendesk Global](https://gitlab.zendesk.com/)
- [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/)

## How does Dev Pulse work in Zendesk?

On the Zendesk side of things, Dev Pulse works via the following components:

- 3 macros
- 3 views
- 1 ticket field
- 1 trigger
- 1 webhook

There are really two parts to what it does on the Zendesk side, initiating it
and using tickets with a type of `Problem`.

### Initiating it on a ticket

When a Zendesk agent applies one of the 3 macros, the following actions occur:

- A tag specific to that macro is added
  - `waiting_on_bug` for bug issues or merge requests
  - `waiting_on_feature_request` for feature request issues or merge requests
  - `waiting_on_rfh` for RFH issues
- Tags related to other types and the processor are removed
  - `waiting_on_feature_request waiting_on_rfh process_waiting_on_issue_or_mr` for bug issues or merge requests
  - `waiting_on_bug waiting_on_rfh process_waiting_on_issue_or_mr` for feature request issues or merge requests
  - `waiting_on_bug waiting_on_feature_request process_waiting_on_issue_or_mr` for RFH issues
- The `Assignee` for the ticket is set to the current user
- The `Status` for the ticket is set to `On-hold`
- The `Ticket Stage` value for the ticket is set to `Other`
- The `Type` value for the ticket is set to `Incident`

When the precense of one of the `waiting_for_xx` tags are added to a ticket (and
the `process_waiting_on_issue_or_mr` tag is not present), the trigger activates.

The trigger then adds the `process_waiting_on_issue_or_mr` tag to the ticket and
activates the webhook with the following form data:

| Key                    | Value in Production   | Value in Sandbox |
|------------------------|-----------------------|------------------|
| `variables[SANDBOX]`   | Not set in production | `true`           |
| `variables[TICKET_ID]` | `{{ticket.id}}`       | `{{ticket.id}}`  |
| `variables[TASK]`      | `Analyze Ticket`      | `Analyze Ticket` |

This will then trigger a webhook the corresponding gitlab.com project that will
analyze and update the ticket.

### Problem ticket types

While not anything directly stemming from Dev Pulse, it does utilize
[problem and incident tickets](https://support.zendesk.com/hc/en-us/articles/4408835103898-Working-with-problem-and-incident-tickets)
as a whole. For bugs and feature requests, a "parent" problem ticket is
created. Usigin this problem ticket, you can update all the attached incident
tickets to do one bulk update and solve.

## How does Dev Pulse work on gitlab.com?

On the gitlab.com side, there are three real components to Dev Pulse:

- Analyzing a ticket
- Analzying problem tickets
- Analyzing RFH tickets

### Analyzing a ticket

This part is triggered via the Zendesk instance's webhook using a GitLab
[pipeline trigger](https://docs.gitlab.com/ci/triggers/). When triggered,
specific parts of the code within the project will be run to perform an analysis
of the request. The result of said analysis determine what actions are taken:

- For tickets waiting on bug or feature request resolution
  - A check is done as to the validity of the issue or merge request link
    provided via the ticket.
    - If the issue or merge request link provided via the ticket is not valid
      (is already closed, is already merged, does not exist, etc.), the ticket
      that triggered the analysis will have the following actions performed on
      it:
      - The `Status` of the ticket is set to `Open`
      - The `Ticket Stage` value of the ticket is set to `NRT`
      - An internal comment is added to the ticket indicating the link provided
        was not valid
  - The ticket is then linked to an existing parent problem ticket. In cases
    where a parent problem ticket does not already exist, one is created first.
- For tickets waiting on RFH issues
  - As no action is needed for these at this stage, the code will exit with a
    status code of 0 for these

### Analzying problem tickets

This part is triggered via GitLab
[scheduled pipelines](https://docs.gitlab.com/ci/pipelines/schedules/)
running at a schedule specified by the GitLab Support team. During this part,
specific parts of the code will do the following:

- Locate all active parent problem tickets from the Zendesk instance
- Loops through all found active parent problem tickets to do the following:
  - Utilize the GitLab API to check on the state of the item that the parent
    problem ticket relates to
    - For issues, it checks if the issue has a state of closed
    - For merge requests, it checks if the merge request has a state of closed
      or merged
  - If the needed state has been hit, the script will then do the following:
    - Update all attached incident tickets with the following:
      - The `Status` of the ticket is set to `Open`
      - The `Ticket Stage` value of the ticket is set to `NRT`
      - An internal comment is letting those involved on the ticket know the
        parent problem ticket has been updated and a bulk update should be done
        shortly
    - Make a Slack post in a channel specific by CI/CD variables indicating the
      parent problem ticket is ready to be updated and solved

### Analyzing RFH tickets

This part is triggered via GitLab
[scheduled pipelines](https://docs.gitlab.com/ci/pipelines/schedules/)
running at a schedule that runs hourly. During this part, specific parts of the
code will do the following:

- Locate all RFH tickets from the Zendesk instance
- Loops through all found RFH tickets to do the following:
  - Utilize the GitLab API to check on the state of the issue that the RFH
    ticket is waiting on. This state can be one of the following:
    - The state of the issue is closed
    - The last *note* on the issue was made by someone not on the support team
      AND said comment's timestamp is greater than (or equal to) the latest
      update timestamp on the ticket
  - If the needed state has been hit, the script will then update the ticket in
    the following way:
    - The `Status` of the ticket is set to `Open`
    - The `Ticket Stage` value of the ticket is set to `NRT`
    - An internal comment is letting those involved on the ticket know the RFH
      issue has been updated

## Common Readiness tasks for Dev Pulse

### Help re-triggering the process

The process can be re-triggered simply be re-running the macro. Ask the
requester to try re-running the macro to restart the process.

### Changing the link used on a parent problem ticket

In cases where the original issue or merge request used was put into the correct
state for reasons that would not indicate a resolution (such as being marked as
a duplicate or being moved), it is likely Support will come to Readiness for
assistance in detemrining the next best steps.

While this might iniatially seem like a "re-trigger it" scenario, on a parent
problem ticket with *many* attached incidents, this is quite tedious. As such,
we should assist in making it run smoother by doing the following:

- Update the `Subject` and `Waiting on issue or merge request` values on the
  parent problem ticket to the new link to use
- Bulk update all the attached incident tickets in the following way:
  - Set the `Status` to `On-hold`
  - Set `Ticket Stage` to `Other`
  - Set `Type` to `Incident`
  - Set the `Waiting on issue or merge request` to the value of the new link to
    use

This will effectively "re-trigger" the process without requring the webhook or
API calls that would normally be involved in a proper re-triggering.

### Deactivating the process

In some cases, you might be asked to deactivate the process on a ticket (or
multiple tickets). To do this, do the following:

1. Update the ticket(s) in question like so:
   - The `Status` of the ticket is set to `Open`
   - The `Ticket Stage` value of the ticket is set to `NRT`
   - Add an internal comment stating the Dev Pulse process was deactivated as
     per the request of the requester (use their name and/or email)
1. Check any corresponding parent problem tickets. If they no longer have any
   attached incident tickets, delete the parent problem ticket in question

## Troubleshooting

### Error code 1: No such ticket #ticket_id

At first glance, this would likely mean the ticket that created the process does
not exist. This would be a strange set if circumstances given how the code works
and how the Zendesk instance side of things is set up, so it is more often an
indicator of a greater problem (like an API token no longer working).

When you encounter this error code in a failed pipeline, check for the
following:

- Is the target Zendesk instance up and running? IF not, that would be the cause
  and that should be fixed immediately.
- Is the value of the variable `TICKET_ID` in the pipeline a valid ticket ID
  within the target Zendesk instance? If not, that would point to either:
  - The value in the Zendesk instance's trigger is not correct
  - The ticket was deleted after the Zendesk instance's trigger was activated
- Can you use the same API credentials as the script to load the ticket ID in
  question? If not, then you need to get those corrected in the project's CI/CD
  variables

Beyond that, it would point to a significant bug in the code itself. File an
issue with the
[Support Readiness issue tracker](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project)
to have this looked into further.

### Error code 2: Could not determine link type of 'link'

This would indicate the link provided by a ticket is not valid for Dev Pulse to
use. The Regex within the ticket field on the Zendesk instance should prevent
the use of non-issue or non-merge request links in most situations, but the best
course of action when you encounter this issue is to locate the ticket, correct
the bad link, and re-trigger the process. This would be a strange set if
circumstances given how the code works and how the Zendesk instance side of
things is set up, so it is more often an indicator of a greater problem (like an
API token no longer working).

When you encounter this error code in a failed pipeline, check for the
following:

- Is the target Zendesk instance up and running? IF not, that would be the cause
  and that should be fixed immediately.
- Can you use the same API credentials as the script to load the ticket ID in
  question? If not, then you need to get those corrected in the project's CI/CD
  variables

### Error code 3: Unable to create problem ticket for #ticket_id

This would indicate the script was unable to create a problem ticket for the
ticket that triggered the process.

When you encounter this error code in a failed pipeline, check for the
following:

- Is the target Zendesk instance up and running? IF not, that would be the cause
  and that should be fixed immediately.
- Is the value of the variable `TICKET_ID` in the pipeline a valid ticket ID
  within the target Zendesk instance? If not, that would point to either:
  - The value in the Zendesk instance's trigger is not correct
  - The ticket was deleted after the Zendesk instance's trigger was activated
- Can you use the same API credentials as the script to load the ticket ID in
  question? If not, then you need to get those corrected in the project's CI/CD
  variables

Beyond that, it would point to a significant bug in the code itself. File an
issue with the
[Support Readiness issue tracker](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project)
to have this looked into further. In the interim, manually create the problem
ticket and link the corresponding ticket to it (so as to not block the Support
team). Make sure to note you did so in the issue you file regarding this
problem.

### Error code 4: Unable to attach #ticket_id to the problem ticket

This would indicate the script was unable to attach the target ticket to a
corresponding parent problem ticket.

When you encounter this error code in a failed pipeline, check for the
following:

- Is the target Zendesk instance up and running? IF not, that would be the cause
  and that should be fixed immediately.
- Is the value of the variable `TICKET_ID` in the pipeline a valid ticket ID
  within the target Zendesk instance? If not, that would point to either:
  - The value in the Zendesk instance's trigger is not correct
  - The ticket was deleted after the Zendesk instance's trigger was activated
- Can you use the same API credentials as the script to load the ticket ID in
  question? If not, then you need to get those corrected in the project's CI/CD
  variables

Beyond that, it would point to a significant bug in the code itself. File an
issue with the
[Support Readiness issue tracker](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project)
to have this looked into further. In the interim, manually attach the target
ticket to the corresponding the problem ticket (so as to not block the Support
team). Make sure to note you did so in the issue you file regarding this
problem.

### Error code 5: Unable to update RFH ticket #ticket_id

This would indicate the RFH ticket could not be updated.

When you encounter this error code in a failed pipeline, check for the
following:

- Is the target Zendesk instance up and running? IF not, that would be the cause
  and that should be fixed immediately.
- Does the ticket specified in the error exist? If it does not, then you should
  investigate what happened to the ticket (as the ticket had to have existed
  prior to the error occurring)
- Can you use the same API credentials as the script to load the ticket ID in
  question? If not, then you need to get those corrected in the project's CI/CD
  variables

Beyond that, it would point to a significant bug in the code itself. File an
issue with the
[Support Readiness issue tracker](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project)
to have this looked into further. In the interim, manually update the ticket in
question (if it exists) in the way specified above (so as to not block the
Support team). Make sure to note you did so in the issue you file regarding this
problem.
