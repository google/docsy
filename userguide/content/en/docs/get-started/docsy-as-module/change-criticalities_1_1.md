---
title: Change Criticalities
description: Operations documentation page for change criticalities
canonical_path: "/handbook/security/customer-support-operations/change-criticalities"
---

## Overview

Mirroring [infrastructure's change management criticalities](/handbook/engineering/infrastructure/change-management/#change-criticalities), Customer Support Operations defines changes on a C1 - C4 scale that helps determine appropriate planning horizons.

Criticalities are taken into effect when deciding on which deployment an issue/MR will make it into.

## Determining Criticality

When you first begin working an issue or MR, you should determine the change criticality of the task at hand. 

For guidance on determining the change criticality, see [below](#criticality-level-definitions).

Always use your best judgment on determining the criticality level. When in doubt, reach out to a Customer Support Operations Manager for assistance.

## Criticality level definitions

### Criticality 1

These are changes with high impact or high risk that may significantly modify Support Engineer or Customer experience. If a change is going to cause downtime to the environment, it is always categorized a C1.

Some examples of Criticality 1 requests are:

- Changing the functionality of a widely used Zendesk View
- Altering Zendesk in a way to support a significant process change
- Changes to any SLA policy in use

### Criticality 2

These are changes that aren't expected to significantly impact Support Engineer or Customer experiences, but which still carry some risk of impact if something unexpected happens.

Some examples of Criticality 2 requests are:

- Updating the theme on the Support Portal
- Adding a new ticket form
- Changing any triggers/automations relating to SSAT or Support KPIs

### Criticality 3

These are changes with either no or very-low risk of negative impact, but where there is still some inherent complexity, or it is not fully automated and hands-off.

Some examples of Criticality 3 requests are:

- Adding a new form field on a Support form
- Bulk removing expired Zendesk organizations
- Adding a new Zendesk app that will make things more convenient for Support Engineers
- Removing or deactivating active macros

### Criticality 4

These are changes that are exceedingly low risk and commonly executed, or which are fully automated. Often these will be changes that are mainly being recorded for visibility rather than as a substantial control measure.

Some examples of Criticality 4 requests are:

- Adding or removing users from a ZD organization
- Creating or updating macros
