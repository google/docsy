---
title: Onboarding an ASE Account
description: Workflow to onboard an account that is new to the ASE service
---

## Overview

As soon as a customer account signs a new contract that includes the Assigned
Support Engineer (ASE) service, the Support Team begins the customer onboarding
process. Through this process we intend to create and deliver a smooth and
professional experience to the customer as we begin our partnership with them.
This involves coordinating with the customer and the account team, as well as
informing the rest of Support about the account's new status.

## Customer Communication

[Introduce yourself as the customer's ASE](introductory-meeting.html).

Agree with the customer on either a weekly or every-other-week schedule for a
cadence call. The goals of the call should include completing a review of the
work done since the previous call, and agreeing on what work you'll do for them
before the next call and with what relative priorities.

## Internal Communication

### Auto-assign the customer's tickets

There might be times when the account contacts will make it your top
priority to take all of their non-emergency tickets. During those times,
configure automatic assignment of the account's tickets in
Zendesk. Auto-assignment of customer tickets has two prerequisites:

1. There must be a named ASE for the organization in Zendesk
1. There must be an ASE-related `Product Charge` in the subscription in
   Salesforce

For both of these, please contact your manager and request that:

1. They file a request using the
   [Support Super Form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/)
   and select the following options: 
   1. The `What is this request concerning?` option should be
      `Modifications to a Zendesk Global Organization`
   1. The `What kind of modification are you looking to make?` should be
      `Set an Assigned Support Engineer for an organization`

   The request is automated and will create a tracking issue reflecting its status.

1. They verify in Zendesk that the `Subscription: Support Services - ASE` box
   is checked for the account 
   product charge listed. If it does not, they should contact Sales Ops
   for assistance.

As you work with the account each week to agree on the prioritization of your
work for them, that might not always include taking all of their tickets. Each
time that changes, just remember to:

1. Ask your manager to make the change in Zendesk
1. Update the Zendesk [org note](#org-note-mentioning-the-ase-and-how-to-treat-the-ticket)
   for the account

### Org Note mentioning the ASE and how to treat the ticket

A customer having an ASE can be a confusing prospect for others in and out of
GitLab Support. How would they know that a specific customer has an ASE?
How should they handle this customer's tickets when the ASE is not
working, or busy? What if the customer creates an emergency ticket?

This is why an organization note in the ticket will prove useful. It will
answer the above questions and guide all interested parties (Support Engineers,
Customer Success Managers, Account Executives, etc.) to the correct workflows for
what to do.

A good organization note will answer the following questions:

- Who is the Assigned Support Engineer (ASE) for this customer?
- Which region is the ASE located in?
- How to handle tickets that come in outside of the ASE's working hours?
- What should a Support Engineer do with this customer's tickets when the ASE is not available?
- What to do with tickets that predate the introduction of this ASE?
- What to do in case the customer submits an emergency ticket?

This information will come from the contract and from the discussion with the
customer in the [introductory meeting](./introductory-meeting.html).

Create a merge request for the org note
[in the Organizations project](https://gitlab.com/gitlab-com/support/zendesk-global/organizations)
and assign it to your manager for review.

Here's an example:

```yaml
notes: |
  This organization has an Assigned Support Engineer (ASE). Please [review the workflow to use](/handbook/support/workflows/assigned-support-engineer/working-on-ase-tickets/).

  Jill is the AMER ASE for Company-A so at this time, all new non-emergency tickets will be assigned to her. Pre-existing tickets will keep their existing assignee and Jill will shadow.

  If Jill is unavailable, please respond while leaving Jill as the assignee and cc yourself.

  The on-call engineer will continue to handle emergency tickets, which will not get assigned to Jill. However, inform her when an emergency comes in so she can assist if available.
```
