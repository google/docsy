---
title: How to Perform GitLab Dedicated CMOC Duties
category: On-call
description: "Describes the role and responsibilities for the GitLab Dedicated CMOC rotation in Support Engineering"
---

## Introduction

The GitLab Dedicated Communications Manager on Call (GDCMOC) is an async role with the purpose of contact outreach from GitLab to a GitLab Dedicated customer. There is no expectation on the GDCMOC to be performing troubleshooting responsibilities. It involves communicating with team members in slack or GitLab issues, and then relaying the information to the customer in a Zendesk ticket to keep them up to date. GDCMOCs do not need to dedicate all their focus to monitoring the relevant threads/issues, but they should regularly check communication threads for updates that need to be communicated to customers.

The GDCMOC rotation currently uses the GitLab.com CMOC rotation to determine who is oncall. This means that when you go oncall as a GitLab.com CMOC, you will also be the GDCMOC. This may change at a later date if it's determined we need to split this out to its own rotation.

## Engaging the GDCMOC

See [this MR](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/merge_requests/647) for now. This section will be updated to point to the runbook directly once it has been merged into the Dedicated teams' runbooks.

## Acknowledging a GitLab Dedicated Contact Request

If an urgent contact request is needed, you will be paged via PagerDuty. Start by marking the PagerDuty alert as **acknowledged**. This can be done through the mobile app, web interface or PagerDuty App in the #spt_pod_dedicated Slack channel.

The description in the Pagerduty alert should contain details about an issue, or a slack thread you need to follow. Follow any communication threads, and let the Dedicated Incident team know you are available to assist. You should be provided with the details of the request. If you're unsure, check [the GitLab Dedicated incidents issue tracker](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/incident-management/-/issues/?label_name%5B%5D=Incident%3A%3AActive) or ask in the `#g_dedicated-team` slack channel.

Once an outreach ticket has been sent to the customer, mark the PagerDuty alert as **resolved**.

## Creating a new outreach ticket

Follow these steps to create a new ticket to start communications with a customer.

1. Find the `Switchboard (production)` tile in Okta and login to Switchboard.
    1. If you get a `403 Forbidden` message while using a VPN, turn it off temporarily. The WAF rules may be blocking VPN endpoints.
1. You should see the `Tenants` page when logged in. Find the relevant tenant and click `Manage`.
1. Expand the `Cloud Account Config` section, and look for the `Primary Region`. This should tell us which region the customer is based in. See the [AWS docs](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html#concepts-available-regions) if you're unsure of the AWS region code. Make a note of the region.
1. Search for the `Customer Communications` section, and expand it. You should see values for `Operational email addresses` and `Customer TAM`. You will need these values when creating the ticket.
1. Follow the instructions [here](/handbook/support/workflows/sending_notices/#manually-create-a-zendesk-ticket) to create a new Zendesk ticket.
    1. For the **subject** of the ticket, use the following template: `GitLab Dedicated Notice: <description>`.
    1. For the ticket **requestor**, use the first operational email address listed.
    1. **CC** the other operational email addresses and the Customer TAM.
    1. Set the **Preferred Region for Support** to the region similar to where the tenants' `Primary Region` is located.
    1. Add a `dedicated_contacted_request` **tag** to the ticket.
1. Assign the ticket to yourself.
1. Once the ticket has been created, change the Zendesk Form over to `GitLab Dedicated`.

## Keep the customer informed

- Follow any issues or slack threads for any updates to the incident. If there's anything worth sharing with the customer (such as "we found a possible lead" or "We are currently digging into the sidekiq logs"), do so in the ticket. If you're unsure of anything, ask the GitLab Dedicated Engineer OnCall or Incident Manager for clarification.
- Work with the customer to set expectations about the frequency of updates, especially if you are the GDCMOC within the same region as the customer. They will likely expect more updates during their regional business hours.
  - If we proceed with lower frequency updates, the important thing is that we communicate our expected update frequency to them. For example, we can let the customer know that during their regional business hours, we will provide an update every 1-2 hours, and during their non-regional hours we will update them if there is anything substantial to share.
- Keep in mind the [information that we **should not** share with the customer](/handbook/support/workflows/dedicated/#sharing-internal-logs-data--graphs)
- If you'd like a second pair of eyes to review messages before sending them out to customers,
  refer to the table below to find an appropriate DRI.
  - Approval of message content is required for security-related communications.
  - Approval is optional for all other communication.

| Communication type                       | Who reviews content?   | Who approves content? |
|------------------------------------------|------------------------|-----------------------|
| Non-security out-of-band maintenance     | SRE                    | Optional              |
| Security-related out-of-band maintenance | SIRT                   | SIRT                  |
| Incident communication                   | SRE / Incident manager | Optional              |
| Other urgent communication               | It depends             | Optional              |

## Guidelines

- You do not need to focus all of your attention on looking for updates. As a guideline, check the issues, slack threads, and customer ticket for any updates every 30 minutes if you are the GDCMOC in the same region as the customer.
- Consider sending the customer a summary so far if it's been multiple hours since the last substantial update. For example: "To summarise so far, we initially looked into A and B, now we're investigating C", or "We found something in the logs to indicate the problem may be with X. I will share further details if the team finds anything substantial."

## Concurrent incidents

Support Engineers are not expected to manage multiple incidents. If a concurrent GitLab.com incident or GitLab Dedicated contact request comes in, engage with the [Support Manager oncall](/handbook/support/workflows/support_manager-on-call/) to help find cover for the new incident.

You can ping the Support Manager oncall in slack with `@support-manager-oncall`.

## Handover

Follow the [End of Shift Handover Procedure](/handbook/support/workflows/cmoc_workflows/#end-of-shift-handover-procedure) from the CMOC workflows. Make the ingress GDCMOC aware of any issues, slack threads or tickets they should CC themselves on. Assign the Zendesk ticket used for communication to the next CMOC.

## Emergency maintenance

A security vulnerability fix might result in emergency maintenance for GitLab Dedicated
environments.

NOTE:
"Emergency maintenance" refers exclusively to security-related maintenance. Maintenance that
happens outside of the weekly scheduled maintenance window should be referred to as "out-of-band
maintenance"

In such cases, the GitLab Dedicated CMOC will be called upon to send initial notification to
customers using the `TO_BE_CREATED` macro. The following information should be provided:

- The list of customers to contact.
- The date and approximate time (in UTC) that emergency maintenance was carried out.
- Whether the customer's GitLab Dedicated environment was impacted and details if any.
