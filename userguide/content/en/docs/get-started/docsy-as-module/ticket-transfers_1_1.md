---
title: Ticket transfers
category: Handling tickets
description: How to handover and rehome tickets
---

## Introduction

This page helps guide Support Engineers (SEs) when they need to transfer a ticket to a different assignee.

## Ticket transfers

GitLab Support has two different types of ticket transfers - rehomes and handovers.  The following sections describe these, and the supporting concepts of satellite tickets and hot rehomes.

1. **Handover** 🤝: When a ticket is transferred from one engineer to another due to factors such as paid time off, expertise, or workload management. Handovers are usually in-region, but can also happen cross-region.

2. **Rehome** 🏠: A `rehome` is a transfer of a ticket from the region of the SE who delivered the first response to the customer's specified preferred region. At the end of the assigned SE's shift, they will forward the ticket to the appropriate (home) region for completion. These are quick, easy, and should be low effort.

   - **Satellite** 🛰️: A rehomed ticket that remains unassigned during the upcoming shift in the designated "home region" and subsequently circulates globally at least once. These are unintended and we should be working to minimize satellites.

   - **Hot Rehome** 🔥:  A ticket currently being addressed in a different region than the customer’s preferred one.  The ticket then requires a rehome because the customer’s temperature is increasing, which raises the urgency. The sending region makes commitments to the customer with the best intentions, but there is no time for alignment and agreement for the receiving region.

Examples of these tickets include:

- Tickets for which a call or special follow-up has been promised within the next few hours without confirming availability with the receiving region present a challenge for the Support Engineer to address without adequate preparation. (Direct to Call - DTC)

- Tickets not in their region that will trigger the Hot Rehome process due to unmet customer expectations with a STAR request (Falling Star).
- Not rehomed tickets that require additional attention.
(The ticket was held outside of the preferred region for longer than 1 shift, which is raising the risk)

### Hot Rehome prevention

Before placing any ticket in a region other than the customer's preferred one, please ensure the following steps are completed:

**Agreement:** The customer must acknowledge that their initial request for a specific region will not be fulfilled and must provide their consent. Additionally, they should understand the added value associated with keeping the ticket in the current region.

**Understanding:** The customer should be made aware that there may be delays in responses. If it becomes necessary to transfer the ticket to the originally requested region, a transition period will be implemented to ensure the receiving engineer is adequately prepared.

As you work on the ticket, refrain from making promises on behalf of others. Instead, leave a detailed note in the ticket that outlines the customer's situation and emphasizes the intention to achieve a favorable outcome for them. If necessary, contact a manager in the receiving region for assistance. Furthermore, be considerate of the time of the receiving support engineer.

## Ticket rehome (transfer to the preferred region)

GitLab Support uses a single view for all unassigned
tickets, regardless of region. The tickets in the view are sorted by
`Ticket Weight` to highlight the highest-priority issues first. Support
engineers are expected to work from the top of the view down. Given this
process, support engineers will frequently be taking tickets on which the
customer has specified a `Preferred region` different from their own.

Since we aim in GitLab Support to align tickets to an accountable region, we use
the following simple process to handle tickets from different regions:

### First response

When providing the first response to a ticket from a different region, follow
these guidelines:

1. Introduce yourself and acknowledge the customer's preferred region. (`Support::Out of Region::Cross-region_Preferred region clarify assignment` macro is a good starting point)
1. Explain that you're providing initial assistance to ensure a timely response.
1. Proceed with all appropriate initial steps to begin addressing the customer's
   issue.
1. Inform the customer that before the end of your workday you will transfer
   their ticket to their preferred region for continued support **unless they
   request that you keep it**.
1. If it's the end of your work day and the customer hasn't confirmed the region, move it to the region that they chose when they created the ticket. To do that run the `Support::Rehome::Initiate Rehome` macro.

### Initiating a ticket rehome

To initiate a ticket rehome, simply use the `Support::Rehome::Initiate Rehome`
macro. This macro will:

1. Remove ticket assignment
1. Apply the `rehome_initiated` tag

If the ticket is waiting on a customer reply put the ticket into "Pending", if the ticket is waiting on a reply from a support engineer put the ticket into "Open".

### Receiving a ticket rehome

When you take an unassigned ticket from the global view and you see an internal
comment that states `Rehome initiated from [assignee's region] to [target
region]`, you should follow these steps to receive that rehome:

1. **Verify Regional Alignment:** If the target region specified is your region,
   continue. Otherwise, leave the ticket unassigned in the view so that an SE
   from the target region can take it.
1. Use the `Support::Rehome::Complete Rehome` macro, which:
   1. Assigns the ticket to you
   1. Applies the `rehome_received` tag
   1. Creates a public response with some initial text for your use
1. Edit the initial text to use your name where the placeholder is
1. Proceed with all appropriate initial steps to begin addressing the customer's
   issue, and replace the `Next Steps Here` placeholder with your full update to
   the customer

### Keeping an out-of-region ticket

If a customer responds to your initial update on the ticket with an explicit
request that you keep the ticket rather than transferring it to their preferred
region, you should follow these steps:

1. Use the `Support::Rehome::Do Not Rehome` macro, which creates a public
   comment with some initial text for you to use.
1. Proceed as you would with any other ticket

## Ticket handover (assignee change not related to preferred region)

When an engineer is required to hand over a ticket, either to another region or within the same region (e.g., due to the assignee going on PTO), the following workflows should be followed.

<details>
  <summary markdown="span">Preparing a ticket for handover</summary>

1. Set the proper expectations with the customer.
   1. It is important to be transparent and communicate that certain requirements, such as phone calls and immediate responses, will necessitate coordination with the receiving person or region.
   1. Please ensure that the receiving team is properly informed and aligned on any tasks and timelines before finalizing them with the customer.
1. Use the [Zendesk `Handover Ticket Summary` macro](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/Out%20of%20Region/Handover%20Ticket%20Summary.md)
   to ensure all necessary information is included and the ticket is unassigned.
1. Set the Zendesk Form Field `Handover Status` to `Need Handover`.
1. CC yourself on the ticket and save the ticket to the `Open` State.

</details>

<details>
  <summary markdown="span">Working tickets handed over from the same region due to PTO</summary>

1. Update the `Handover Status` to `Handover Completed` to ensure accurate metric tracking.
1. Review the `Handover Ticket Summary` and the Next Response Time (NRT) SLA.
1. If ready to proceed:
   - Introduce yourself to the customer, confirm the handover, and provide the
     next technical response.
1. If additional research is needed:
   - Introduce yourself, inform the customer that further research is required,
     and set expectations for the next steps.

</details>

<details>
  <summary markdown="span">Working tickets handed over from another region</summary>

1. Update the `Handover Status` text field to reflect the receiving region. For
   example, if you are in the EMEA region, set it to `Handed over to EMEA` to
   ensure accurate metric tracking.
1. Review the `Handover Ticket Summary` and the Next Response Time (NRT) SLA.
1. If ready to proceed:
   - Introduce yourself to the customer, confirm the handover, and provide the
     next technical response.
1. If additional research is needed:
   - Introduce yourself, inform the customer that further research is required,
     and set expectations for the next steps.

</details>
