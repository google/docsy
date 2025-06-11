---
title: Dev Pulse
description: Operations documentation page for Dev Pulse
canonical_path: "/handbook/security/customer-support-operations/docs/zendesk/dev-pulse"
---

<sup>*Introduced via [support-ops-project#970](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/970)*</sup>

{{% alert title="Note" color="primary" %}}

This is an informational page for Dev Pulse. It may not reflect the way we actually manage Dev Pulse.

If you are looking for information about maintaining Dev Pulse, please see [Dev Pulse workflow](../../workflows/zendesk/dev-pulse)

{{% /alert %}}

## What is Dev Pulse?

Dev Pulse is the name for a set of scripts and Zendesk setups we utilize to actively monitor various types of issues and merge requests in relation to bug resolution, feature request resolution, and requests for help (or RFH for short).

Through all the components, Dev Pulse allows a Zendesk ticket to stay in the `On-hold` while waiting on an issue or merge request to reach a specific state.

When the specific state is reached, the tickets within Zendesk using Dev Pulse are updated to indicate there has been a state change on the issue or merge request they were waiting on.

## Where is the source code for Dev Pulse?

The source code for Dev Pulse is located in specific projects depending on the Zendeks instance(s) it runs on:

- [Zendesk Global](https://gitlab.com/gitlab-support-readiness/zendesk-global/dev-pulse)
- [Zendesk US Government](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/dev-pulse)

## How does Dev Pulse work in Zendesk?

On the Zendesk side of things, Dev Pulse works via the following components:

- 3 macros
- 3 views
- 1 ticket field
- 1 trigger
- 1 webhook

There are really two parts to what it does on the Zendesk side, initiating it and using tickets with a type of `Problem`.

## Initiating it on a ticket

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

When the precense of one of the `waiting_for_xx` tags are added to a ticket (and the `process_waiting_on_issue_or_mr` tag is not present), the trigger activates.

The trigger then adds the `process_waiting_on_issue_or_mr` tag to the ticket and activates the webhook with the following form data:

| Key                    | Value in Production   | Value in Sandbox |
|------------------------|-----------------------|------------------|
| `variables[SANDBOX]`   | Not set in production | `true`           |
| `variables[TICKET_ID]` | `{{ticket.id}}`       | `{{ticket.id}}`  |
| `variables[TASK]`      | `Analyze Ticket`      | `Analyze Ticket` |

This will then trigger a webhook the corresponding gitlab.com project that will analyze and update the ticket.

## Problem ticket types

While not anything directly stemming from Dev Pulse, it does utilize [problem and incident tickets](https://support.zendesk.com/hc/en-us/articles/4408835103898-Working-with-problem-and-incident-tickets) as a whole. For bugs and feature requests, a "parent" problem ticket is created. Usigin this problem ticket, you can update all the attached incident tickets to do one bulk update and solve.

## How does Dev Pulse work on gitlab.com?

On the gitlab.com side, there are three real components to Dev Pulse:

- Analyzing a ticket
- Analzying problem tickets
- Analyzing RFH tickets

## Analyzing a ticket

This part is triggered via the Zendesk instance's webhook using a GitLab [pipeline trigger](https://docs.gitlab.com/ci/triggers/). When triggered, specific parts of the code within the project will be run to perform an analysis of the request. The result of said analysis determine what actions are taken:

- For tickets waiting on bug or feature request resolution
  - A check is done as to the validity of the issue or merge request link provided via the ticket.
    - If the issue or merge request link provided via the ticket is not valid (is already closed, is already merged, does not exist, etc.), the ticket that triggered the analysis will have the following actions performed on it:
      - The `Status` of the ticket is set to `Open`
      - The `Ticket Stage` value of the ticket is set to `NRT`
      - An internal comment is added to the ticket indicating the link provided was not valid
  - The ticket is then linked to an existing parent problem ticket. In cases where a parent problem ticket does not already exist, one is created first.
- For tickets waiting on RFH issues
  - As no action is needed for these at this stage, the code will exit with a status code of 0 for these

## Analzying problem tickets

This part is triggered via GitLab [scheduled pipelines](https://docs.gitlab.com/ci/pipelines/schedules/) running at a schedule specified by the GitLab Support team. During this part, specific parts of the code will do the following:

- Locate all active parent problem tickets from the Zendesk instance
- Loops through all found active parent problem tickets to do the following:
  - Utilize the GitLab API to check on the state of the item that the parent problem ticket relates to
    - For issues, it checks if the issue has a state of closed
    - For merge requests, it checks if the merge request has a state of closed or merged
  - If the needed state has been hit, the script will then do the following:
    - Update all attached incident tickets with the following:
      - The `Status` of the ticket is set to `Open`
      - The `Ticket Stage` value of the ticket is set to `NRT`
      - An internal comment is letting those involved on the ticket know the parent problem ticket has been updated and a bulk update should be done shortly
    - Make a Slack post in a channel specific by CI/CD variables indicating the parent problem ticket is ready to be updated and solved

## Analyzing RFH tickets

This part is triggered via GitLab [scheduled pipelines](https://docs.gitlab.com/ci/pipelines/schedules/) running at a schedule that runs hourly. During this part, specific parts of the code will do the following:

- Locate all RFH tickets from the Zendesk instance
- Loops through all found RFH tickets to do the following:
  - Utilize the GitLab API to check on the state of the issue that the RFH ticket is waiting on. This state can be one of the following:
    - The state of the issue is closed
    - The last *note* on the issue was made by someone not on the support team AND said comment's timestamp is greater than (or equal to) the latest update timestamp on the ticket
  - If the needed state has been hit, the script will then update the ticket in the following way:
    - The `Status` of the ticket is set to `Open`
    - The `Ticket Stage` value of the ticket is set to `NRT`
    - An internal comment is letting those involved on the ticket know the RFH issue has been updated
