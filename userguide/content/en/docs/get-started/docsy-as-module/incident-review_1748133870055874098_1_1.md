---
title: "Incident Review"
---

> The primary goals of writing an Incident Review are to ensure that the incident is documented, that all contributing root cause(s) are well understood, and, especially, that effective preventive actions are put in place to reduce the likelihood and/or impact of recurrence.[^1]

## Introduction

An Incident Review is a **crucial opportunity for fostering deeper understanding** within a blameless culture. Its purpose extends beyond collecting action items to prevent recurrence; it is a process for learning about both the **systems** and the **engineering culture** that contribute to incidents. By discussing and analyzing how these components operate and interact, we gain valuable insights into the technical environments we support and the broader organizational context in which they function.

At GitLab we are committed to the practice of blameless incident reviews. This means we intentionally focus on understanding the "why" and "how" of incidents, rather than assigning blame or seeking to identify individuals at fault. Incident Reviews may contain references to individuals or team names to help provide a first hand account and valuable context, but these references are never intended to cast blame. Instead, they serve as a means to better understand the sequence of events, the decision-making processes involved, and the challenges faced during the incident.

We adhere to this blameless model to encourage open communication, trust, and close collaboration. It allows everyone to share their perspectives and observations without fear of retribution.

While continuous learning is the primary and paramount focus of these blameless reviews, they also serve a practical purpose. They lead to the identification and implementation of actionable improvements that enhance the resilience and reliability of our systems, ultimately strengthening our engineering culture and improving our ability to serve our users.

## Template

- The incident lead will open an incident review issue in the [Production Tracker using the incident_review template](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/new) via the Post-incident task assigned in the incident slack channel or incident issue dashboard.
- Incident review template can be edited here: https://app.incident.io/gitlab/settings/post-mortem

## Responsibilities

### Incident Lead or Review Requestor

The Incident Lead or review requestor is responsible for opening the review issue using the appropriate template and adding the initial metadata.  This includes:

- Setting the appropriate issue title
- Setting the correct `Severity::*` label
- Linking the review to the incident
- Finding the appropriate DRI to own the review and assigning them the issue
- Announcing the incident review in Slack

### The Service Owner

The service owner is responsible for writing the narrative for what caused the incident and what actions were taken. Since the service owner is likely to have more context around the service than the first responders, this validates that the right people understand what happened and why. If the root cause is unknown, the service owner should provide as much detail as possible from the investigation.

The service owner shall:

- Fill in the remaining "Key Information" fields, using the incident issue and conversations with the EOC as reference
- Create a short executive summary of the incident
- Write a narrative describing what happened and how we addressed it
- Engage people that were involved in the incident (EOC, IMOC, CMOC, other engineers and stakeholders) in discussion
- Ask probing questions to gain further insight leading to corrective actions
- Do the corrective actions ensure a similar issue will not reoccur? If not, keep probing and consider expanding who is involved in the review.
- Link and potentially create [corrective actions](/handbook/engineering/infrastructure/incident-management/#corrective-actions), [infradev](/handbook/engineering/workflow/#infradev) issues, or any other actions or outcomes from the incident
- Add appropriate labels and remaining metadata to the issue
- Summarize any conversations that happen in the review comments or in Slack
- Include a summary of the incident in the [SaaS Availability](https://docs.google.com/document/d/1PYcIrIVlraWUwIETqNzIg8aLziMYpeJVBxGGuXplXUI/edit?usp=sharing) and join sync or async to update on impact and corrective actions.
- Close the review before the due date

## Incident Review Process

_Both async and synchronous reviews can be requested by anyone by following the steps below. If you are uncertain about how to proceed, request help from the assignees of the incident issue._

Reviews are async by default.
Synchronous reviews can also be valuable as a way to discuss improvements and brainstorm ideas in real-time.
Before holding a synchronous review, the async review should be completed first. Please post on the incident review issue to request a synchronous review.

## The criteria which triggers a review

1. All user facing high severity (Severity::1 and Severity::2) incidents require a review
1. Any incident where a `Review-Requested` label has been added to the incident issue
1. Any incident where more information is required outside of the scope of the incident itself

For all reviews, it is _not_ necessary to complete all sections in the review template.
For the sake of expediency, you can complete areas of the review which highlight what you, as the review author, want to bring to the attention of the larger organization and which drive the generation of corrective actions related to the incident.

## Customer Engagement

Incident reviews may require customer engagement through a point of contact such as a Technical Account Manager (TAM).
In case of a customer requiring a sync to discuss a finding that comes out of review, the TAM can engage with the Infrastructure management to organize the discussion with important stakeholders.

[^1]: Google SRE Chapter 15 - Postmortem Culture: Learning from Failure

## Unowned Services

There may be some services which do not have a team which owns it.  We are currently not doing incident reviews for unowned services.  If an incident review is required for an unowned service, we are recommending that the service first be assigned to a team, and for the service catalog to be updated to reflect that.

## Timeline that we expect for reviews to be completed

 It is expected that the incidnet review will be complieted **within 5 working days of the incident**.  A reminder will be sent out after 5 days if the incident review issue is still open.
