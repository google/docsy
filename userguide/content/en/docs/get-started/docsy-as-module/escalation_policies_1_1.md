---
title: Escalation policies
description: Support Operations documentation page for Pagerduty escalation policies
canonical_path: "/handbook/support/readiness/operations/docs/pagerduty/escalation_policies"
---

## What are Pagerduty escalation policies

As per [Pagerduty](https://support.pagerduty.com/docs/escalation-policies):

> Escalation policies connect services to individual users and/or schedules and
> they ensure the right people are notified at the right time.

## Creating an escalation policy

The steps to create an escalation policy in Pagerduty are:

1. Login to [pagerduty](https://gitlab.pagerduty.com/)
1. Hover over `People` and click `Escalation Policies` to go to the
   [escalation policies page](https://gitlab.pagerduty.com/escalation_policies)
1. Click the blue `New Escalation Policy` button on the top-right of the page
1. Enter a name for your escalation policy
1. For the description, enter something sensible that makes it clear what it is
   for. Ensure you add the issue link that caused the creation.
1. Set `Send On-Call Handoff Notifications:` to `when in use by a service`
1. For the first escalation rule:
   1. Set the `Notify the following users or schedules` to use the schedule or
      persons for the first level of escalation (if the schedule does not exist
      yet, use `Support Ops Bot` as a placeholder).
   1. Set the
      `escalates after xx min. (must be at least 1 minute for a single target.)`
      value to what is appropriate for the request.
1. Click the blue plugs button (or the blue `Add a new Escalation Rule` to add
   a second escalation rule
   1. Set the `Notify the following users or schedules` to use the schedule or
      persons for the first level of escalation (if the schedule does not exist
      yet, use `Support Ops Bot` as a placeholder).
   1. Set the
      `escalates after xx min. (must be at least 1 minute for a single target.)`
      value to what is appropriate for the request.
1. Repeat step 8 to add more escalation rules is needed
1. Click the checkbox next to
   `If no one acknowledges, repeat this policy xx times` and set it to 5
1. Click the blue `Save` button on the bottom-right of the page
1. Update the [escalation listing](#current-escalation-policies-used-by-support)

## Editing an escalation policy

The steps to edit an escalation policy in Pagerduty are:

1. Login to [pagerduty](https://gitlab.pagerduty.com/)
1. Hover over `People` and click `Escalation Policies` to go to the
   [escalation policies page](https://gitlab.pagerduty.com/escalation_policies)
1. Use the search on the right-hand side of the page to search for the
   escalation policy you wish to edit
1. Click the blue text of the escalation policy once located
1. Click the `Edit Escalation Policy` button on the top-right of the page
1. Make the needed modifications
1. Click the blue `Save` button at the bottom-left of the page
1. Update the [escalation listing](#current-escalation-policies-used-by-support)

## Deleting an escalation policy

**Note** No schedule or user can be using the escalation policy for it to be
deleted. You might need to edit it first to remove rules and persons first.

1. Login to [pagerduty](https://gitlab.pagerduty.com/)
1. Hover over `People` and click `Escalation Policies` to go to the
   [escalation policies page](https://gitlab.pagerduty.com/escalation_policies)
1. Use the search on the right-hand side of the page to search for the
   escalation policy you wish to edit
1. Click the blue text of the escalation policy once located
1. Click the `Edit Escalation Policy` button on the top-right of the page
1. Click the red `Delete` button on the bottom-right of the page
1. Update the [escalation listing](#current-escalation-policies-used-by-support)

## Current escalation policies used by support

### Customer Emergency Rotation

- [Escalation policy link](https://gitlab.pagerduty.com/escalation_policies#PKV6GCH)
- Level 1
  - Notify the following users or schedules
    - Customer Emergencies - AMER Group 1
    - Customer Emergencies - AMER Group 2
    - Customer Emergencies - AMER Group 3
    - Customer Emergencies - EMEA
    - Customer Emergencies - APAC Group 1
    - Customer Emergencies - APAC Group 2
    - Shadow - Customer Emergenices
  - Escalates after 10 min
- Level 2
  - Notify the following users or schedules
    - Support Manager - AMER
    - Support Manager - APAC
    - Support Manager - EMEA
  - Escalates after 5 min
- Level 3:
  - Notify the following users or schedules
    - Support Director Oncall
  - Escalates after 5 min
- Level 4:
  - Notify the following users or schedules
    - Shaun McCann
    - Lee Matos
    - Lyle Kozloff
    - Val Parsons
  - Escalates after 5 min
- Level 5:
  - Notify the following users or schedules
    - Johnny Scarborough
  - Escalates after 5 min
- If no one acknowledges, repeat this policy `5` times

### Customer Support SSAT

- [Escalation policy link](https://gitlab.pagerduty.com/escalation_policies#P0DPFUO)
- Level 1
  - Notify the following users or schedules
    - SSAT Reviewing Manager

### Incident Management - CMOC Rotation

- [Escalation policy link](https://gitlab.pagerduty.com/escalation_policies#PNH1Z1L)
- Level 1
  - Notify the following users or schedules
    - Incident Management - CMOC (AMER)
    - Incident Management - CMOC (EMEA)
    - Incident Management - CMOC (APAC Group 1)
    - Incident Management - CMOC (APAC Group 2)
    - Shadow - Incident Management - CMOC
    - Support Managers - AMER
  - Escalates after 10 min
- Level 2
  - Notify the following users or schedules
    - Support Manager - AMER
    - Support Manager - APAC
    - Support Manager - EMEA
  - Escalates after 5 min
- Level 3:
  - Notify the following users or schedules
    - Shaun McCann
    - Lee Matos
    - Lyle Kozloff
    - Val Parsons

### Incident Management - GDCMOC Rotation

- [Escalation policy link](https://gitlab.pagerduty.com/escalation_policies#PN032FC)
- Level 1
  - Notify the following users or schedules
    - Incident Management - CMOC (AMER)
    - Incident Management - CMOC (EMEA)
    - Incident Management - CMOC (APAC Group 1)
    - Incident Management - CMOC (APAC Group 2)
    - Shadow - Incident Management - CMOC
  - Escalates after 10 min
- Level 2
  - Notify the following users or schedules
    - Support Manager - AMER
    - Support Manager - APAC
    - Support Manager - EMEA
  - Escalates after 5 min
- Level 3:
  - Notify the following users or schedules
    - Shaun McCann
    - Lee Matos
    - Lyle Kozloff
    - Val Parsons

### Support Managers

- [Escalation policy link](https://gitlab.pagerduty.com/escalation_policies#PGNLUZ1)
- Level 1
  - Notify the following users or schedules
    - Support Manager - AMER
    - Support Manager - APAC
    - Support Manager - EMEA

### US Federal Customer Emergency Rotation

- [Escalation policy link](https://gitlab.pagerduty.com/escalation_policies#PNPWBEW)
- Level 1
  - Notify the following users or schedules
    - US Federal On-Call
    - US Federal On-Call - Shadow
  - Escalates after 10 min
- Level 2
  - Notify the following users or schedules
    - Support Manager - AMER
    - Support Manager - APAC
    - Support Manager - EMEA
  - Escalates after 5 min
- Level 3
  - Notify the following users or schedules
    - Lyle Kozloff
    - Lee Matoes
    - James Lopes

## Change management

As the Pagerduty changes are unique in deployment, please see
[Pagerduty change management](/handbook/support/readiness/operations/docs/pagerduty/change_management)
for more information.

### Labels to use

For all issues and MRs involving Pagerduty fields, the label
`Support-Ops-Category::Pagerduty` should be used.

### Change criticality

Due to wildly varying nature and impact adding/editing/deleting things in
Pagerduty can impose, all issues/MRs related to Pagerduty need
to have the their criticality
[manually determined](/handbook/support/readiness/operations/docs/change_criticalities#determining-criticality)
