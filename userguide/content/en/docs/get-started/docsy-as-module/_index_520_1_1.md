---
title: Change Management
description: Support Operations documentation page for change management
canonical_path: "/handbook/support/readiness/operations/docs/change_management"
---

The exact process for change management can vary from project to project and
item to item, so when in doubt, it is best to refer to the specific
documentation for the item in question.

## Standard Deployments

For key items, we use a deployment cycle that implements changes on the first of
every month. This is done automatically via GitLab Pipeline Schedules. So
anything merged into the various projects will not deploy until the scheduled
deployment date.

## Exception Deployments

In rare situations, items that would normally use a Standard Deployment need to
be deployed on a different day or time.

When these situations occur, the process for them should go as follows:

- A Support Manager requests an exception deployment in the support-team-meta
  issue concerning the topic. This is done by pinging both `@dtragjasi` and
  `@jcolyer`.
- `@dtragjasi` and/or `@jcolyer` will make a comment detailing what the impacts
  of the exception deployment will be. This is done by reviewing what has been
  merged and is "queued for deployment" in the various areas the topic entails.
  They should also ping `@lyle` in their comment.
- `@lyle` will review the request and impacts to make a decision on the
  feasibility and acceptance of the request on the Support Readiness side. If
  `@lyle` approves, he will bring this to the Support Directors to have them
  discuss it.
- One of the Support Directors, acting as a DRI for the other Support Directors,
  will voice their approval (or disapproval) of the request.

Should all parties approve the request, Support Readiness will then perform an
exception deployment. This is done by navigating to the Pipeline Schedules page
of the various repos being deployed by exception and clicking the
`Run pipeline schedule` button.

## Ad hoc Deployments

Some of what we manage carries less risk of causing problems and is instead
deployed ad hoc, meaning that when the merge request is merged, it will deploy
to its version of production.

## Special Deployments

This is a categorization for areas that require very specific deployment methods
that fall outside of Standard, Exception, and Ad hoc deployments. For more
information on these, see the documentation page of the item itself.

## What uses which type of deployment?

| Item                                 | Deployment Type |
|--------------------------------------|-----------------|
| Account Deletion Form                | Ad hoc |
| Account Deletion Processor           | Ad hoc |
| ADWR                                 | Ad hoc |
| Audit Events Analyzer                | Ad hoc |
| Calendly Events to gCal Events       | Ad hoc |
| CMP Scripts                          | Ad hoc |
| Customer Feedback Processor          | Ad hoc |
| Dev Pulse                            | Ad hoc |
| DEWR                                 | Ad hoc |
| Enable US Gov Support scripts        | Ad hoc |
| GDPR Request Processor               | Ad hoc |
| Light agent provisioning (Global)    | Ad hoc |
| Pagerduty                            | [Special](../pagerduty/change_management/) |
| Salesforce Cases scripts             | Ad hoc |
| Support Super Form                   | Ad hoc |
| Support Super Form Processor         | Ad hoc |
| SWIR Form Processor                  | Ad hoc |
| System Audits scripts                | Ad hoc |
| Ticket Processor                     | Ad hoc |
| Ticket Round Robin                   | Ad hoc |
| US Government Customer Feedback Form | Ad hoc |
| Very Breached Ticket Slackbot        | Ad hoc |
| Zendesk Agent Sync                   | Ad hoc |
| Zendesk Apps                         | Standard |
| Zendesk Articles                     | Ad hoc |
| Zendesk Automations                  | Standard |
| Zendesk Dynamic Content              | Standard |
| Zendesk Groups                       | Standard |
| Zendesk Macros                       | Ad hoc |
| Zendesk Organization Fields          | Standard |
| Zendesk Roles                        | Standard |
| Zendesk Salesforce Sync              | Ad hoc |
| Zendesk SLA Policies                 | Standard |
| Zendesk Theme                        | Standard |
| Zendesk Ticket Forms                 | Standard |
| Zendesk Ticket Fields                | Standard |
| Zendesk Triggers                     | Standard |
| Zendesk User Fields                  | Standard |
| Zendesk Views                        | Standard |

## What runs where?

You can find a comprehensive list of where various things Support Readiness
maintains runs its CI/CD processes via
[this gSheet](https://docs.google.com/spreadsheets/d/1nilaJ4Ey7Rf-6rC9jROcOMqYExb29zjAbEeN3LMl_qk/edit?usp=sharing).
