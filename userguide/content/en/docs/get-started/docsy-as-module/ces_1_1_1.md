---
title: CES Surveys
description: Operations documentation page for CES surveys
canonical_path: "/handbook/security/customer-support-operations/docs/zendesk/ces"
---

<sup>*Introduced via [support-team-meta#6631](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6631)*</sup>

{{% alert title="Note" color="primary" %}}

This is an informational page for the CES Surveys. It may not reflect the way we actually manage CES Surveys.

If you are looking for information about maintaining automations (creating, editing, etc.), please see [CES Survey workflow](../../workflows/zendesk/ces)

{{% /alert %}}

## What are CES Surveys

CES (Customer Effort Score) surveys are forms we send out to customers to receive feedback from them on the level of effort required to work with support. A lower score indicates more effort was required while a higher score indicates less effort was required.

We use them as a replacement for SSAT/CSAT (support satisfaction/customer satisfaction).

### Who receives them

We send out the CES survey to those who meet specific criteria. The exact criteria varies by Zendesk instance.

For Zendesk Global

- Must meet all of the following criteria:
  - The organization is not `GitLab`
  - Ticket form is not `GitLab Incidents`
  - Ticket form is not `Billing`
- Must meet at least one of the following criteria:
  - The ticket contains one of the following tags:
    - `sub_dotcom_ultimate sub_dotcom_premium sub_sm_ultimate sub_sm_premium sub_sm_starter sub_gitlab_dedicated sub_consumption_ai sub_consumption_cicd_minutes sub_consumption_eap sub_consumption_duo_enterprise sub_consumption_duo_amazon_q sub_consumption_duo_premium sub_consumption_storage`
  - The ticket form is `L&R`
  - The ticket form is `Support Ops`
  - The ticket form is `Emergencies`
  - The ticket form is `Support Internal Request`

For Zendesk US Government:

- Must meet all of the following criteria:
  - The organization is not `GitLab`
  - The ticket contains none of the following tags:
    - `spam_ticket free_customer com_embargo csat-survey-sent needs-org-triggered`

### When are they sent out

We currently send out CES surveys on tickets that have been in the solved state for 24 (consecutive) hours.

## Components

### CES Processor

This takes information sent by Zapier and processes it. It then checks the information against the ticket itself to determine if the request is valid. It currently checks:

- The ticket ID is present
- The ticket itself exists
- The ticket is not closed
- We have actually sent out a CES survey to them
- The submitter is the same person as the ticket requester

If any of the above fails, it will output a reason for failure and silently exit.

If no validation checks have failed, it will then do the following:

- Add a satisfaction rating (and comment if present) to the ticket
- Add the CES score to the ticket
- Add an entry to a google spreadsheet (as a backup)

The location of the project is [here](https://gitlab.com/gitlab-support-readiness/processors/ces-processor)

### CES Survey Form

This is the actual survey form sent to customers. The exact link received depends on the Zendesk instance the link was sent form:

- [Zendesk Global](https://support.gitlab.io/ces-survey/global-en.html)
- [Zendesk Global sandbox](https://support.gitlab.io/ces-survey/global-sb-en.html)
- [Zendesk US Government](https://support.gitlab.io/ces-survey/us-government.html)
- [Zendesk US Government sandbox](https://support.gitlab.io/ces-survey/us-government-sb.html)

Submissions from the form are sent to Zapier.

The location of the source project is [here](https://gitlab.com/gitlab-support-readiness/forms/ces-survey). This is mirrored to [here](https://gitlab.com/support/ces-survey).

### Zendesk Automations

These are used to send out the actual CES survey.

### Zendesk Ticket Fields

These are used to store the CES survey numerical score.

### Zendesk Triggers

These are used to create feedback issues for Support.

### Zapier

This is used to receive submissions from the CES Survey and send them to the CES Processor.
