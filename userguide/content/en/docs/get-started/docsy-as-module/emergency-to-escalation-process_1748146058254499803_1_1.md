---
title: Converting a Support Emergency into an Account Escalation
description: Guidance to Support Engineers and Managers on when and how to convert an emergency to an Account Escalation
category: On-call
---

## Overview

In the course of our work as Support Engineers and Managers, there are instances where an Emergency may end up being larger than we expect, or unsolvable in one call. If so, this document acts as a guide on how to convert from an Emergency to an Account Escalation with the Customer Success team.

## It starts with mindset

In our day-to-day work, Support Engineers are naturally reactive: ticket is created, then we work on that ticket. This changes when the customer is in an Escalated state; we need to switch to be more proactive by acting as a guide through the entirety of the escalation.

## When to start an Account Escalation

Follow the guidelines in the [Customer Success Escalations Process](/handbook/customer-success/csm/escalations/). You should consult with the [Support Manager On-call](/handbook/support/workflows/support_manager-on-call/) to make the decision together.

Here are some questions to guide the decision:

- Is the emergency occurring after an upgrade, and there are multiple simulataneous problems/tickets resulting from the upgrade?
- Is the emergency running for more than 3 hours, with no clear resolution in sight?
- Are there outside factors (Renewals/Migrations/Other initiatives) that are being blocked by the emergency?
- Has GitLab Professional Services been working with the customer recently? Are the engineers from that engagement still available to assist?

## How to start an Account Escalation

1. Decide which Escalation Level to use by consulting the [CSM handbook for escalation levels](/handbook/customer-success/csm/escalations/#definitions-of-severity-levels).
1. Reach out to the CSM of the account for assistance as they will be the [Escalation DRI](/handbook/customer-success/csm/escalations/#escalation-dri). If there is no CSM for the customer, reach out to the assigned AE, CSE or their regional manager.
1. If you receive no response, please follow the steps to [open the escalation](/handbook/customer-success/csm/escalations/#opening-the-escalation) with the Manager On-call (Please keep in mind only people with SalesForce access can initiate an escalation for now). 

## Expectations during an Account Escalation

The role of Support Engineer / Manager focuses on **defining the problem** in addition to solving the problem. You should balance your time between communicating in the Slack channel, updating the ticket, and participating in calls with the customer.

Here are a few things to keep in mind:

- As the on-call Support Engineer, assign the emergency ticket to yourself. Once assigned, link to the Slack channel in an **Internal Comment**, so that GitLab team members know where to get updates.
- At the end of your shift, update the next on-call Support Engineer & Manager of the escalation so they can take over.
- Post updates in the Slack channel as you get them.
- If calls are running past 3 hour mark, consider a break, re-defining the problem, and re-starting the meeting at an agreed-upon time.
- During the part of the escalation that we are leading -- we need to communicate clearly to the customer when the next touch-point will happen. The customer shouldn't have to create another emergency ticket to get back in touch with us.
- Once we are in an Escalated state, we have full access to development via [Dev Escalations](/handbook/engineering/development/processes/infra-dev-escalation/process/).

## Closing an Account Escalation

Follow the steps to [close the escalation](/handbook/customer-success/csm/escalations/#closing-the-escalation) once the Escalation DRI has agreed to the closing.
