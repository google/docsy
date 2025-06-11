---
title: Zendesk L&R Ticket Form
category: General
description: This page is about Zendesk workflows for the L&R form.
---

This page outlines workflows relevant to folks using the `L&R` form in Zendesk.

## Working on tickets

### Selecting, Assigning and Responding to Tickets

Support Engineers that work on Licensing and Renewal (L&R) tickets should apply the same guidelines documented within the [Support - Working on Tickets workflow](/handbook/support/workflows/working-on-tickets):

1. [Selecting tickets](/handbook/support/workflows/working-on-tickets#selecting-tickets)
1. [Assigning tickets](/handbook/support/workflows/working-on-tickets#assigning-tickets)
1. Responding to next-to-breach tickets

### The workflow

1. Check the main L&R view and work on the top ticket in the view. The tickets are ordered by `Ticket Weight`, which takes into account several fields to determine priority order.
1. Take assignment of the ticket if it is currently unassigned
1. Write your public reply
1. **If the ticket is an Internal Request**, review whether the [Priority](/handbook/support/internal-support/#internal-request-slo) is appropriate. If it is not, set the `Priority` field to the appropriate value and notify the requester of the change and of your reasoning. (A macro for this may soon be available)
1. Complete the remaining form data
1. If you are not able to make a public reply, please ask for assistance from your colleagues to take assignment and drive the ticket forward
1. If you are waiting on internal stakeholders and processes to be completed before being able to set a ticket to Solved:
1. Advise the customer that we will reply in X days.
1. Set Status: `On-hold`
1. Set Type: `Task`
1. Click: `Submit as On-hold`
1. Use the Calendar on the sidebar to set a reminder for yourself to check in with the customer X days
1. Click: `Submit as On-hold`

## Zendesk form data overview

On the left sidebar in Zendesk in the ticket view, every form has data fields unique to that form. These data fields tell us more about the ticket, from the tags to the ticket type, the ARR and the information the customer filled out when submitting the ticket.

In L&R, the tickets that come into our queue are of interest to teams outside of Support. Therefore, it's important that we gather accurate data about the tickets that we interact with. The form data completed on each ticket is taken into account for existing metrics dashboards and for any future data queries we may want to make. For examples of metrics dashboards that rely on L&R ticket data see the [L&R Dashbaord](https://gitlab.zendesk.com/explore/dashboard/CE496B0DE0C45903F2C8FFEE0ABA251DE82217E689B59F3FC62A23D3E7C592AD) and the [Support Metrics Dashboard](https://gitlab.zendesk.com/explore/dashboard/36925DBD1F5E3C7BA541DB38D11AC51E0EAAFDD30DCB63FDE83CF1389E555D96/tab/10638812).

## Zendesk form data guideline

Completing ticket data can be a very subjective process - the ticket might arguably be about two different things and it's up to the engineer to decide how to best categorise the ticket. It's more important to complete the data than to be objectively correct about what type of ticket it is.

Two ways of thinking about ticket data selection:

1. What is the reason this ticket exists? i.e why did the customer create this ticket? Example reasons could be: system bug, needs assistance to complete provisioning, has inquiry about payment.
1. What would have prevented the ticket from existing? For example, if they knew how to reset their password or manage their account (ticket type: account management), or if they knew who their Sales rep was and was able to contact the rep (ticket type: Sales assistance required), the customer wouldn't have needed to submit a ticket.

Please also see the table below as a guideline on what `Transaction issue type` can be selected for scenarios:

| Transaction issue type | Sub-type | Scenario |
| ---- | ----- | ----- |
| Billing & Payment (refunds, cancellations, payment questions) |  | Requests for refunds or cancellations + questions about payment and billing |
| EDU/OSS/Startups | EDU account inquiries | Requests/inquiries for the Education team. Follow [workflow](/handbook/support/license-and-renewals/workflows/special-programs/) |
| EDU/OSS/Startups | OSS account inquiries | Requests/inquiries for the OSS team. Follow [workflow](/handbook/support/license-and-renewals/workflows/special-programs/) |
| Sales-assistance required | Alternate payment method (Wire Transfer) | Customer wants to pay via wire transfer |
| Sales-assistance required | Order form / PO | Customer wants to pay via Order form or purchase order |
| Sales-assistance required | Reseller | Request is from a reseller or reseller customer |
| Sales-assistance required | Discount request | Customer inquires about a discount |
| Sales-assistance required | New business | No prior purchases and needs a sales quote |
| Sales-assistance required | Trueups | Customer has to pay for trueups via sales |
| Sales-assistance required | Other | Request requires Sales assistance for another reason |
| Trial-related inquiries | Trial start | Ticket is about starting a trial |
| Trial-related inquiries | Trial extension | Ticket is about extending a trial |
| Trial-related inquiries | Trial cancellation | Ticket is about canceling a trial or downgrading to Free plan |
| Trial-related inquiries | Trial downgrade | Ticket is about downgrading a trial plan (from Ultimate to Premium) |
| Product or Process question | Free form | Please describe the ticket type in the text field. Any questions about how our products or processes work (except for questions about billable members and seat usage) |
| Legacy license troubleshooting (SM only) | Trueup | Self-managed license issue is caused by trueups |
| Legacy license troubleshooting (SM only) | Prior user count | Self-managed license issue is caused by previous user count |
| Legacy license troubleshooting (SM only) | Never generated | Self-managed license was never generated (and it should have been) |
| Legacy license troubleshooting (SM only) | Active users | Self-managed license issue is caused by active users count |
| Legacy license troubleshooting (SM only) | Multi-year license| Self-managed license is a multi-year license |
| Legacy license troubleshooting (SM only) | Not received | Self-managed license was not received by the requestor |
| Legacy license troubleshooting (SM only) | Other | Self-managed license issue is caused by another reason not listed |
| Legacy license troubleshooting (SM only) | Customer issue | User error |
| Legacy license troubleshooting (SM only) | Multiple unique subscriptions | Subscription is spread across multiple subscription IDs |
| Legacy license troubleshooting (SM only) | New license activation bug | Error while applying a newly purchase license |
| Legacy license troubleshooting (SM only) | Transition legacy to cloud | Any problems or errors encountered while changing from legacy license to cloud license |
| Associate namespace (GitLab.com only) | | Use when we have to help with [provisioning of gitlab.com subscription](/handbook/support/license-and-renewals/workflows/saas/associate_subscription_and_namespace) |
| Account management (reset password, update details) |  | Account-related requests or questions like how to get into an account or update the payment method |
| Contact management |  | Requests or questions about changing the contact for an account or namespace |
| End of Availability (EOA) | | Any questions or requests relating to the end of the Bronze/Starter tier and the offers for the [new subscription model](https://about.gitlab.com/pricing/faq-new-product-subscription-tiers/) |
| System bugs & incidents | CustomersDot | Bug or error is caused by an issue in our CustomersDot application |
| System bugs & incidents | GitLab.com | Bug or error is caused by an issue in our gitlab.com application |
| System bugs & incidents | License app | Bug or error is caused by an issue in our License application |
| System bugs & incidents | GitLab version | Bug or error is caused by an issue in the version of GitLab running on the SM instance |
| Plan Change (upgrade, downgrade, product transfer) | | Request to change a subscription by upgrade, downgrade or switching from self-managed to SaaS (or vice-versa) |
| Consumption (Compute, Storage) | Compute | Any questions or requests about compute minutes in gitlab.com |
| Consumption (Compute, Storage) | Storage | Any questions or requests about Storage in gitlab.com |
| Billable members and seats related question | | Questions specifically related to billable members and seat usage |
| Cloud licensing (SM only) | Trueup | Self-managed license issue is caused by trueups |
| Cloud licensing (SM only) | Prior user count | Self-managed license issue is caused by previous user count |
| Cloud licensing (SM only) | Never generated | Self-managed license was never generated (and it should have been) |
| Cloud licensing (SM only) | Not received | Self-managed license was not received by the requestor |
| Cloud licensing (SM only) | Multi-year license| Self-managed license is a multi-year license |
| Cloud licensing (SM only) | Active/billable users | Self-managed license issue is caused by active users count |
| Cloud licensing (SM only) | Other | Self-managed license issue is caused by another reason not listed |
| Cloud licensing (SM only) | Customer issue | User error |
| Cloud licensing (SM only) | Multiple unique subscriptions | Subscription is spread across multiple subscription IDs |
| Cloud licensing (SM only) | New license activation bug | Error while applying a newly purchase license |
| Cloud licensing (SM only) | Transition legacy to cloud | Any problems or errors encountered while changing from legacy license to cloud license |
| Usage ping (SM only) |  | Inquires or concerns about [Usage Ping on SM servers](/handbook/legal/privacy/customer-product-usage-information/#service-ping-formerly-known-as-usage-ping) |
| Quarterly Subscription Reconciliation |  | Any questions or disputes regarding [quarterly subscription reconciliation](/handbook/support/license-and-renewals/workflows/quarterly_subscription_reconciliations/) |
| Auto-renewal |  | Any questions or problems regarding a subscription's automatic renewal |
| Other | Free form | Please describe the ticket type in the text field |

### The `GitLab Issues` field

The `GitLab Issues` text field is available on all L&R tickets and should be completed whenever applicable. The purpose of this field is to capture links to existing issues. This field is specifically relevant to Fulfillment PMs who will be able to see an overview of any repeating or high volume issues, which they can then prioritise in upcoming milestones. Examples of when to use the field:

1. There is a feature issue that, if implemented, would have prevented this ticket from being created.
1. There is a bug issue that can be replicated on the ticket.

This is a great way to log and get metrics for bugs and features that might need more attention from the product team as we can see numbers climb for an issue in real time. **Please complete this field with a link to an issue whenever possible.**
