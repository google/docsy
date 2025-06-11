---
title: Zendesk maintenance
description: Support Operations policies page for Zendesk maintenance
canonical_path: "/handbook/support/readiness/operations/docs/policies/zendesk_maintenance"
---

## SGG issues

**Note** This applies to Zendesk Global only.

From time to time, human interference can cause routing issues with our support
global groups (SGG) routing. You need to be aware of these issues and rectify
them manually whenever possible. We recommend making two personal views to
easily catch the two types of issues.

### Tickets in SGG void

These are tickets using a support form that has a SGG value of "Not Applicable".
This causes them to sit in a void where they will not normally get seen. When
you come across these, you need to set the SGG to a blank value so they will get
round robined.

To help with this, we recommend setting up a view with the following conditions:

- Tickets must meet all of these conditions to appear in the view
  - Status less than closed
  - SGG is not applicable
  - Assignee is null
- Tickets can meet any of these conditions to appear in the view
  - Form is SaaS
  - Form is SaaS Account
  - Form is Self-Managed
  - Form is GitLab Dedicated
  - Form is Open Partner
  - Form is Select Partner
  - Form is Alliance Partners

### Incorrect SGG

These are tickets in a support form assigned to an agent but the SGG value is
"Not Applicable". This causes them to sit in a void where only the assignee
would see them. When you come across these, you need to set the SGG to a
assignee's SGG value (you can locate that via the
[Support Global Groups page](https://gitlab-com.gitlab.io/support/team/sgg)
of the Support team page).

To help with this, we recommend setting up a view with the following conditions:

- Tickets must meet all of these conditions to appear in the view
  - Status less than closed
  - SGG is not applicable
  - Assignee is not null
- Tickets can meet any of these conditions to appear in the view
  - Form is SaaS
  - Form is SaaS Account
  - Form is Self-Managed
  - Form is GitLab Dedicated
  - Form is Open Partner
  - Form is Select Partner
  - Form is Alliance Partners

## Suspended and deleted tickets

Once a shift, Support Ops should go through the Suspended and Deleted tickets in Zendesk. The objective is to clear these views out. For references, the views are:

- [Suspended tickets for ZD Global](https://gitlab.zendesk.com/agent/filters/suspended)
- [Deleted tickets for ZD Global](https://gitlab.zendesk.com/agent/filters/deleted)
- [Suspended tickets for ZD US Federal](https://gitlab-federal-support.zendesk.com/agent/filters/suspended)
- [Deleted tickets for ZD US Federal](https://gitlab-federal-support.zendesk.com/agent/filters/deleted)

### Suspended tickets

For the suspended tickets, you will need to review the contents of said ticket
(done by clicking the subject) to determine if the ticket is legitimate or not.
As this can sometimes be tricky, Support Ops should feel free to request the
assistance of a Support Manager in determining those that are not clear.

If the ticket is legitimate, you should click the Recover Automatically button.
Once it has been recovered, you should let the Support Team know, as the ticket
has likely faced a delay and might be close to (if not) breaching SLA.

If the ticket is not legitimate, you should click the arrow on the right hand
side of the button and select Delete.

### Deleted tickets

For deleted tickets, you should look over the tickets present and make sure
they should be deleted. This will require looking at the reason and the
subject. If you are unsure, feel free to request the assistance of a Support
Manager in determining those that are not clear.

For tickets to delete, you should simply select all of them (via the
checkboxes), click the arrow next to the black button at the top right, and
select Delete x ticket forever.

**Note** As mentioned in the details of
[Zendesk Global organizations sync](/handbook/support/readiness/operations/docs/zendesk/zendesk_salesforce_sync/#zendesk-global-organizations-sync)
accounts that have expired 3 or more years ago are checked and then all tickets
and users associated with the organization in Zendesk are deleted. After doing
so, the organization itself is then deleted. This means that you may encounter
tickets that have been deleted by the *GitLab SupportOps Bot* user that appear
to be legitimate, but have in fact been deleted intentionally. If you are unsure
if a ticket has been deleted intentionally or not, please review the deleted
ticket with a fellow Support Ops team member.
