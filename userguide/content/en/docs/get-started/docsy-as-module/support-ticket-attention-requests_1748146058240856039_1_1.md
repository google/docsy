---
title: GitLab Support - Support Ticket Attention Requests (STAR)
description: Process documentation for getting additional attention on a ticket from Support leadership.
---

## Overview

This document outlines the process for managing support tickets that, due to the situation that is critical for the customer's business, require our attention or an initial response more quickly than what is defined in our [standard response time.](https://about.gitlab.com/support/#priority-support).

## What is a Support Ticket Attention Request (STAR)?

Support Ticket Attention Requests (STAR) are the mechanism by which GitLab Team Members can request additional attention be placed on tickets. Feel free to pronounce the acronym STAR, and use it as a verb (*I starred this ticket because of a request from the customer*) or a noun (*I put a star on this ticket to make sure an engineer with the right expertise is assigned*).

The following two types of tickets can have additional attention requested using this process:

1. Zendesk Support tickets from a customer with a license or subscription.
1. [Internal Requests in Zendesk](/handbook/support/internal-support/#internal-requests) created by a GitLab team member for a customer with a license or subscription.

>**Please use the STAR process instead of posting in Slack channels.** Requesting eyes on, asking for an immediate opinion on, or requesting additional attention for a ticket, in any Support-related Slack channel, creates unnecessary stress on Support Engineers who may be working on other priority tickets.

Once submitted, an issue is created in the [Support Ticket Attention Request](https://gitlab.com/gitlab-com/support/ticket-attention-requests/-/issues) issue tracker. The issue is automatically assigned to the [Support Manager on-call](/handbook/support/workflows/support_manager-on-call).

When you STAR a ticket, a thread is created in the [#support_ticket-attention-requests](https://gitlab.slack.com/archives/CBVAE1L48) Slack channel.

### When should you STAR a ticket?

1. When management oversight is required to bring structure and focus to a ticket, and ensure the necessary resources are allocated to it. For example, if:
    - The first-response [SLA](https://about.gitlab.com/support/#service-level-agreements) of the ticket has been breached by one hour or more (see [Before you STAR a ticket](#before-you-star-a-ticket)).
    - The ticket requires immediate intervention to address a high level of customer dissatisfaction.
    - The ticket requires increased attention from the support team due to business reasons, even if it hasn't breached the SLA yet.
    - The ticket's priority is objectively lower when assessed in relation to the [Support Impact](https://about.gitlab.com/support/#priority-support) guidelines.
1. When the progress of a ticket has stalled, and the ticket needs to be elevated to a different engineer (based on their skill set) so that GitLab can resolve the ticket more quickly.

### When is a STAR not appropriate?

1. It is a **business-critical** situation for GitLab where existing or future business is at risk so attention from CSM is needed -> [raise an account escalation](/handbook/customer-success/csm/escalations/#initiating-managing-and-closing-an-escalation)
1. It is an **emergency** -> Advise the customer to [raise an emergency](https://internal.gitlab.com/handbook/support/workflows/raising-an-emergency) (internal Handbook link, GitLab team members only; only Premium/Ultimate customers are eligible to trigger emergencies)
1. It is a **SaaS incident** -> [check the GitLab Status Page](https://status.gitlab.com/) or [report an incident](/handbook/engineering/infrastructure/incident-management/#reporting-an-incident)
1. You want to pass additional information to the engineer working on the ticket --> Leave an internal note in the ticket in Zendesk or reach out to the Support Engineer working the ticket in a Slack channel like `#support_gitlab-com` or `#support_self-managed`.

### Before you STAR a ticket

>**IMPORTANT:** Please be available in Slack after submitting a STAR request, in case the Support Manager has questions for you.

Check that the ticket meets basic eligibility for STAR treatment:

1. A relevant Support Engineer (who replied previously, left a substantial note, etc.) was contacted via Slack but did not reply.
1. **Is the ticket about L&R (subscription, plan, renewal, licensing, trials)?** Please see our [Workflow for handling Plan/License Ticket Attention Requests](/handbook/support/license-and-renewals/workflows/managers_working_with_extensions/) and its decision flowchart. Requests for customer convenience (that is, when a loss of functionality is not imminent) may not be prioritized.
   - L&R STAR requests must include all relevant information, like group name, subscription name, license holder.
1. **Are we waiting for information from the customer, or from you?** Ensure the latest response is *from the customer* (or from a GitLab team member, in the case of Internal Requests). If the latest response is from GitLab Support, we are waiting for necessary information.
1. **Is the ticket within SLA?** Review the SLA associated with the ticket, and the amount of time left until breach, by logging into [Zendesk](https://gitlab.zendesk.com) using Okta.
   - If a ticket was opened in the last 0-30 minutes, and has the correct [Severity](https://about.gitlab.com/support/definitions/#definitions-of-support-impact), a STAR request is not necessary.
   - It is not typically necessary to STAR an issue that has multiple hours remaining on the SLA timer.
   - Our [SLAs](https://about.gitlab.com/support/#service-level-agreements) apply to first-responses to tickets. GitLab Support targets a 95% SLA achievement KPI. This means that some breaching is expected.
   - If the ticket has already had the first reply, then you are looking at a possible "internal (next reply) breach", for which there are no contractual SLAs.
   - If you make a STAR request when a ticket is still within SLA, the Support Manager will discuss with you the best approach.
1. **Is the ticket missing information?**
   - If a ticket doesn't have all the necessary information it won't qualify for STAR, for example:
      - A log was requested but not provided by the customer.
      - 2FA requests without all the necessary challenges completed.
      - Unanswered questions asked by Support Engineer in the ticket.
      - [Proof of support entitlement](https://about.gitlab.com/support/managing-support-contacts/#proving-your-support-entitlement)

**Note:** You cannot use the Internal Request Form without a Zendesk account. If you do not have Zendesk access, please [request a Light Agent account](/handbook/support/internal-support/#requesting-a-zendesk-light-agent-account) to obtain it.

### Out of Scope / Ineligible for STAR treatment

1. Topics that fall into our general out-of-scope [definition](https://about.gitlab.com/support/statement-of-support/#out-of-scope).
1. Tickets for which there is *no acceptable business-case provided* that justifies additional attention.
1. Tickets missing the customer Organization information ("Needs Org"). Instead: Review requirements in our Needs Org workflow, and ping in the `#support_operations` Slack channel.
1. Tickets that do not appear to have the correct SLA assigned to them. Instead: Review requirements in our [SLA workflow](/handbook/support/workflows/sla_and_views), and ping in the `#support_operations` Slack channel.

## Submitting a Support Ticket Attention Request (STAR) / Starring a ticket

### **Important**

The Zendesk STAR App is available only during our [Global Support Hours](https://about.gitlab.com/support/#hours-of-operation); outside of these hours it will be disabled.

### Via the Zendesk `STAR` app

To access, click on the Apps button located in the top right of the page (underneath your profile icon). When you click on it, it will expand to show the STAR form within Zendesk.

![Zendesk App Button](/images/support/internal-support/Zendesk_App_Button.png)

When you use this method, the app automatically acquires most of the required information directly from the ticket. That's a lot less work for you, and you can be assured that the data will already be validated before it is sent to the Support Managers for evaluation.

You will only need to provide:

- Urgency
- Plan
- GitLab.com group URL or name
- Reason this ticket needs additional attention
- Desired result

Here is how the form will appear in the Zendesk App:

![Zendesk STAR App Form](/images/support/internal-support/Zendesk_STAR_App_Form.png)

#### Validation

The Zendesk `STAR` App will automatically validate the following before submitting the request:

- The submission time is within [Support hours](https://about.gitlab.com/support/#hours-of-operation)
- A valid namespace is entered (SaaS and SaaS Account forms only)
- The ticket was created more than 30 minutes ago
- The ticket is using a valid support form (SaaS, SaaS Account, Self-Managed, L&R, Open Partner, Select Partner, Alliance Partner)

### Definition of STAR Urgency Levels

**NOTE:** These definitions determine how the STAR request is handled; they do not refer to the Impact / Urgency / Severity of the underlying problem described in the ticket itself.

| Urgency Level | Definition |
|---------------|------------|
| Not Urgent    | We need increased visibility on the ticket/issue and a response from Support within the next 2 hours. This request for attention is not urgent, and the overall impact is `low`.|
| Timely        | We need to address potential or existing customer dissatisfaction on the ticket/issue with a response from Support within the next 1 hour. This escalation has a certain level of urgency, and the overall impact is `medium`.|
| Urgent        | The ticket/issue may become an [emergency](https://about.gitlab.com/support/definitions/#definitions-of-support-impact) if no follow-up is provided within the next 30 minutes and may lead to customer dissatisfaction. This escalation is urgent, and the overall impact is `high`.|

### STAR Issue Tracker

Once submitted, an issue is created in the [Support Ticket Attention Request](https://gitlab.com/gitlab-com/support/ticket-attention-requests/-/issues) issue tracker. The issue is automatically assigned to the Support Manager on-call and logs the ticket attention request.

## Unstarring a ticket (Support use only)

Depending on the request, the [Support Manager on-call](/handbook/support/workflows/support_manager-on-call) may decide that a STAR is without merit. Please be aware that we take into consideration the current state of the entirety of the ticket queue, and already existing STARs, when determining the appropriate prioritization for your STAR request.

When unstarring a ticket, the manager must set expectations with the requester by documenting the following in the STAR Issue:

1. Reasons why the ticket does not qualify for STAR treatment.
1. Agreement with requester on an acceptable alternative path.

Every STAR that is `unstarred` must include the `unstarred` label on the corresponding Issue.

## Redirecting Ticket Attention Requests (Support Use Only)

If a STAR request is posted in the wrong Slack channel, add the `:support-ticket-attention-request:` emoji as a reaction to the post. The user will be advised of the proper way to request a Support Ticket Attention Request via a [Slack Workflow](https://gitlab.com/gitlab-com/support/toolbox/slack-workflows).
