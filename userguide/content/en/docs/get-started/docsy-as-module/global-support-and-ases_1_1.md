---
title: Global Support working with ASEs
description: Information for the rest of Support about how best to collaborate with Assigned Support Engineers (ASEs)
---

## Global Support working with ASEs

ASEs rely on other SEs to help with their accounts and tickets in a number of
different situations. To be sure that you are able to contribute well when you
encounter one of these situations, please familiarize yourself with the
information presented on this page.

## Contributing to ASE tickets

### New non-emergency tickets

For **many** ASE accounts, all new, non-emergency tickets
[are automatically assigned to their ASE](../ase-workflows-and-standards/customer-onboarding.html#auto-assign-the-customers-tickets).
Check the org note that is automatically inserted into each ticket to determine
whether tickets for that account are automatically assigned, and how you can
contribute.

See [what to do when the ASE is unavailable](#when-the-ase-is-unavailable) and
[what to do if they came in requesting a different region](#tickets-in-a-different-region).

### New emergency tickets

Regardless of when an emergency request is submitted by an ASE's account,
the [DRI](/handbook/people-group/directly-responsible-individuals.html)
for the emergency is the
[on-call support engineer](../../../workflows/customer_emergencies_workflows/).
The only process change is that the on-call support engineer
should **notify the ASE**. The best way to do this is simply to ping
the ASE's Slack handle in the emergency's Slack thread. After that, the on-call
engineer should work the emergency in the normal way.

Guidance for ASEs regarding emergencies from their accounts can be found on the
[ASE emergencies page](../emergencies.html)

### Pre-ASE tickets

Tickets that predate the introduction of an ASE for an account are treated a
little differently because of their individual histories. Let the customer
decide who they'd like to work on this problem with - the existing assignee or
the ASE. If they'd like the ASE to own it, then the current assignee and the ASE
should communicate with each other so the ASE knows the history of the problem
handled in the ticket, the customer's expectations, and anything else the current
assignee would find useful to share.

### When the ASE is unavailable

An ASE can be unavailable for a variety of reasons such as being off or having
a different Support priority at the moment. When that happens and you notice a
ticket of theirs that will breach or was missed, feel free to respond to that
ticket yourself, but be sure to leave the ASE as the assignee and `cc`
yourself until they return. Upon their return, they'll take the ticket.

### Tickets in a different region

Tickets in a different region will still get assigned to the ASE. If they'll
breach before the ASE gets online then that means
[the ASE is unavailable so follow this process](#when-the-ase-is-unavailable).

## Covering for an ASE when they are absent

When an ASE is planning time off, they will first find one or more
other support engineers to take care of their accounts during their absence.
The ASEs use their [PTO planning workflow](../ase-workflows-and-standards/planning-pto-as-ASE.html)
for arranging coverage. Here's what covering for an ASE means for you:

- Balance your workload to make room for the potential work with
  the ASE accounts. Specifically, decrease your non-ASE ticket work
  by 25% for each account you cover.
- You would be responsible only for working tickets for the accounts, and not
  for performing any proactive work, attenting any regularly-scheduled meetings,
  or doing other non-ticket work.
- Configure Zendesk to notify you when new tickets are opened for
  each account (the ASE will help you to do this).
- Expect to be pinged by the on-call team when any emergencies come
  in for the accounts. You don't have to take the emergency, but be
  prepared to offer any information you have to help the on-call engineer.
  in for the accounts.
- If you will cover two or more accounts, please work with your manager to find another engineer to take over your on-call.
- Review each account with the ASE before their absence:
  - For each active ticket, be sure you understand the history and
    the next steps. Additionally, add yourself to the Cc list.
  - Ask the ASE to tell you who the important internal and external contacts are, and how best to work
    with them
  - Ask the ASE to summarize the account's GitLab environment and to share
    any available document, issues, or other resources that are relevant for working
    on tickets.
- When the ASE returns, meet with them to review the work you did on
  their behalf, and to transfer to them any tickets that were opened during their
  absence as needed.
