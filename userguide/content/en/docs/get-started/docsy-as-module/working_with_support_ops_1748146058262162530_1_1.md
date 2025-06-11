---
title: Working with Customer Support Operations
category: References
subcategory: General
description: Documenting the various types of Customer Support Operations related tickets and the escalation process to notify Support Operations.
---

## Overview

Customer Support Operations sits under Security, alongside teams like Corporate Identity and IT End User Support. As a corporate provider, Customer Support Operations is specifically tasked with providing support *for Customer Support*.  

This page exists primarily as a quick-reference, linking to sources of truth and making sure Customer Support has the information needed to get things done!

## Workflows

### Ticket where customer is asking for support portal changes

Occasionally, a customer might mis-file a ticket and send a request for support portal changes using a Support form. In these cases, please change the form to `Support Ops` in Zendesk and Customer Support Operations will handle it from there. Please do not send a public reply (as that removes our SLA clock from the ticket).

### Asking general questions

For general questions and assistance, reach out via the [support_operations Slack channel](https://gitlab.slack.com/archives/C018ZGZAMPD). From there, a member of the Customer Support Operations team will respond and work with you to help address the question. 

### Basic Issue Flows

The flow can be summed up simply as: "Create an issue!"

If what you want to get done is:

* On the roadmap? *Create an issue!*
* Not on the roadmap, but seems easy! *Create an issue!*
* Maybe easy, but maybe hard? I definitely know what I want though. *Create an issue!*
* reporting a bug. *Create an issue!*
* ... well, actually, I don't totally know yet. *Create an RFC issue in `support-team-meta`* (or work otherwise within the [Change Management in GitLab Support](/handbook/support/managers/change-management/) framework)

If you're creating an issue, the Customer Support Operations team expects that:

* **You're empowered to make decisions**. That is, you're a DRI at the appropriate level to steward your change or you've been delegated that responsibility by an appropriate DRI.
* **You're responsive.** You're prioritizing working on the thing you want so that it can be shipped on time, and to spec.
* **You'll be ready to validate and sign off.** When Support Operations deploys something to staging, you need to be ready to test (or delegate / organize testing) and sign off on acceptability before it can go live in production.

More about [Working with Customer Support Operations](/handbook/security/customer-support-operations/#working-with-us).

More about [stages that Customer Support Operations uses to represent progress](/handbook/security/customer-support-operations/workflows/gitlab/working-issues/).

#### Bugs

Bugs should get created directly in the [Customer Support Operations Issue Tracker](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues) using the [Bug Report Template](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?issuable_template=Bug)

Bugs are generally of a high priority to fix, and will get scheduled in the current iteration. Depending on workload, severity, fix complexity and [system criticality](https://drive.google.com/drive/u/0/search?q=Customer%20Support%20Operations%20System%20Criticality%20type:sheets) may get scheduled in the future.

More about the [Bug Report issue flow](/handbook/security/customer-support-operations/#bug-reports).

#### Feature Requests

The focus for feature requests is on aligning them with our existing [Support Roadmap](https://roadmap-e17445.gitlab.io/). For larger requests, you may need to work with the leadership team to escalate issues to re-plan any conflicts and protect strategic items. For smaller requests, they can often be added in as we go, as long as they don't get in the way of delivering current roadmap items.

Feature requests should get created directly in the [Customer Support Operations Issue Tracker](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues) using the [Feature Requests Template](https://gitlab.com/gitlab-com/gl-security/corp/cust-support-ops/issue-tracker/-/issues/new?issuable_template=Feature)

More about the [Feature Requests issue flow](/handbook/security/customer-support-operations/#feature-requests).

## Incidents

Things do break! Customer Support Operations is there to help.

Review [Customer Support Operations System Criticality Sheet](https://drive.google.com/drive/u/0/search?q=Customer%20Support%20Operations%20System%20Criticality%20type:sheets)

1. Start by posting in `#support-operations` (during [Global Support Hours](https://about.gitlab.com/support/#hours-of-operation))
1. Wait for a response. Continue down this list if you get no response for:
   * 24 hours for issues with Administrative systems. 
   * 8 hours for issues Business Operational systems.
   * 30 minutes for issues with Business Critical Systems.
   * 10 minutes for issues with Mission Critical Systems.
1. [Create a new incident](https://gitlab.pagerduty.com/incidents/create) with "Customer Support Operations" as the Impacted Service. (See: [Support Operations On-Call Workflow](/handbook/security/customer-support-operations/workflows/support_operations-on-call))
1. Be available to work with the on-call to develop a plan to resolve the problem.

More about [how Customer Support Operations handles incidents](/handbook/security/customer-support-operations/workflows/incidents/).

## General tips

1. **Start early** - if you are the DRI for a key strategic item on the Support Roadmap, start working with Ops early. Create a tracking issue so a plan can be formed and blockers discovered early.
1. **Don't "save up" work** - if items are important to the business, they should be tracked. If they're not tracked, they won't get prioritized. 
1. **Have strong opinions on outcomes** - avoid strong opinions on technical implementation.
1. **Don't be quiet** - as a DRI, if a technical implementation isn't looking like it's going to meet the criteria, speak up whether it's in the Validation stage or not. It's better to ship the right thing a bit late than the wrong thing quickly.

## Deployments and Delivery

Unless otherwise communicated, changes ship on the 1st of the month. This is to align any changes to metrics with month boundaries.

Once you've signed off on work, make sure you're following the steps in [Change Management in Support - Rolling out a Change](/handbook/support/managers/change-management/#rolling-out-a-change) to make sure everyone on the team is aware.
