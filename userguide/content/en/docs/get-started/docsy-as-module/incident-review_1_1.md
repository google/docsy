---
title: "Incident Review"
---

> The primary goals of writing an Incident Review are to ensure that the incident is documented, that all contributing root cause(s) are well understood, and, especially, that effective preventive actions are put in place to reduce the likelihood and/or impact of recurrence.[^1]

## Incident Review Issue Creation and Ownership

Incident reviews are conducted as close to the incident date as possible.
Every Incident Review Issue must be assigned a DRI. The DRI will usually be the assignee of the associated incident but it may be someone else like the service owner.
Creating [corrective actions](/handbook/engineering/infrastructure/incident-management/#corrective-actions) and [infradev](/handbook/engineering/workflow/#infradev) issues is one of the goals of the review process. The DRI is responsible for ensuring that associated issues are created for them and linked to the original incident.

## Incident Review Process

_Both async and synchronous reviews can be requested by anyone by following the steps below. If you are uncertain about how to proceed, request help from the assignees of the incident issue._

Reviews are async by default.
Synchronous reviews can also be valuable as a way to discuss improvements and brainstorm ideas in real-time.
Before holding a synchronous review, the async review should be completed first. Instructions for initiating a synchronous review can be found on the [incident review issue template](https://gitlab.com/gitlab-com/gl-infra/production/-/blob/master/.gitlab/issue_templates/incident_review.md?ref_type=heads).

We follow the incident review process for any of the following events:

1. A user-facing high severity incident (sev1 or sev2).
1. Any incident where a `~"review-requested"` label has been added to the incident issue.

For all reviews, it is _not_ necessary to complete all sections in the review template.
For the sake of expediency, you can complete areas of the review which highlight what you, as the review author, want to bring to the attention of the larger organization and which drive the generation of corrective actions related to the incident.

**It is expected that an incident review will be completed in 2 weeks from opening.**

### Process for Asynchronous Reviews

1. In the incident issue, open a new Incident Review by clicking on the link in the section for "References and helpful link" in the incident summary.
2. Assign the issue to the DRI. It is expected that the review will be completed **within 10 working-days of the incident**.

### Process for Synchronous Reviews

Follow the instructions in the [incident review issue template](https://gitlab.com/gitlab-com/gl-infra/production/-/blob/master/.gitlab/issue_templates/incident_review.md?ref_type=heads) to schedule a synchronous review in addition to completing the async review.

## Customer Engagement

Incident reviews may require customer engagement through a point of contact such as a Technical Account Manager (TAM).
In case of a customer requiring a sync to discuss a finding that comes out of review, the TAM can engage with the Infrastructure management to organize the discussion with important stakeholders.

[^1]: Google SRE Chapter 15 - Postmortem Culture: Learning from Failure
