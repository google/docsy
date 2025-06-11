---
title: "Production Readiness Review"
---

## Overview

The Production Readiness Review is a process that helps identify the reliability needs of a service, feature, or significant change to infrastructure for GitLab.com.
It loosely follows the [production readiness review](https://sre.google/sre-book/evolving-sre-engagement-model/) from the SRE book.

The goal of the readiness review is to make sure we have enough documentation, observability, and reliability for the feature, change, or service to run at GitLab.com production scale.
The readiness review process should be started as early as possible as features progress through our [product maturity levels](https://docs.gitlab.com/ee/policy/development_stages_support.html).

**Completing a readiness review doesn't necessarily mean that the Infrastructure teams will take over on-call responsibilities or ownership from the service team. If required, this should be discussed in the merge request.**

This review is meant to facilitate collaboration between Service Owners, Security and Infrastructure teams to help bridge any gaps identified for a new service.
The review document will serve as a snapshot of what is being deployed and the discussions that surround it.
It is not intended to be constantly updated.

The **readiness review MR** will go through a single review for every [maturity level](https://docs.gitlab.com/ee/policy/development_stages_support.html).
We require an MR because it allows for inline comments, threaded discussions and explicit approval.
Once an MR has been approved by the stakeholders and merged it is considered approved for corresponding level.

The **readiness review issue** is used to coordinate among stakeholders who will be assigned as reviewers and to track progress using the issue boards below:

| **Planning** | **Status**|
|--------------|-------------|
| [Readiness Planning Board](https://gitlab.com/gitlab-com/gl-infra/readiness/-/boards/7418781) | [Readiness Status Board](https://gitlab.com/gitlab-com/gl-infra/readiness/-/boards/5177836) |
| Readiness currently being prepared. | Readiness actively in review. |
| ![Triage](/images/engineering/infrastructure/team/scalability/project-management/label-triage.png)    <br/>![Proposal](/images/engineering/infrastructure/team/scalability/project-management/label-proposal.png) <br/>![Ready](/images/engineering/infrastructure/team/scalability/project-management/label-ready.png) | ![Ready](/images/engineering/infrastructure/team/scalability/project-management/label-ready.png) <br/>![In Progress](/images/engineering/infrastructure/team/scalability/project-management/label-in_progress.png) <br/>![Stalled](/images/engineering/infrastructure/team/scalability/project-management/label-stalled.png) <br/>![Blocked](/images/engineering/infrastructure/team/scalability/project-management/label-blocked.png) <br/>![Cancelled](/images/engineering/infrastructure/team/scalability/project-management/label-cancelled.png) <br/>![Done](/images/engineering/infrastructure/team/scalability/project-management/label-done.png)|

## Criteria for starting a Production Readiness Review

Production Readiness should start as early as possible and is required for all [product maturity levels](https://docs.gitlab.com/ee/policy/development_stages_support.html) that meet any of the following criteria:

- New infrastructure components, or significant changes to existing components that have dependencies on the GitLab application.
- Changes to our application architecture that change how the infrastructure scales, or how data is processed or stored.
- New services or changes to existing services that will factor into the availability of the GitLab application.

If none of the above criteria is met, it will be unlikely that a Production Readiness review is necessary.

## Process

The Production Readiness process is authored by the DRI of the work that is being delivered.

1. [Create an issue](https://gitlab.com/gitlab-com/gl-infra/readiness/-/issues/new?issuable_template=production_readiness) using the issue template in the [readiness project](https://gitlab.com/gitlab-com/gl-infra/readiness). The title of the issue should be a descriptive name of change.
2. Follow the Readiness Checklist in the template.

[The issue template](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/.gitlab/issue_templates/production_readiness.md?ref_type=heads) will guide you though preparing your merge request and how to use the approriate labels to keep your review moving through the process.

The template also contains information about what is expected for Experimental, Beta, and Generally Available features and services.

## Guidelines for the author

- If this is a review for the next maturity level for an existing feature, create an MR that modifies the existing review document.
- Do not remove any items from the template even if they are not applicable to the feature.
- The content of the readiness review should primarily consist of links to other docs and/or short explanations about why or why not we are meeting requirements.
  It is not meant to contain detailed architecture, diagrams, or explanations on design. By linking to these documents we retain a single source of truth for this information rather than have it duplicated in the Readiness Review MR.
  Design and architecture proposals should use the [Architecture Design Workflow](/handbook/engineering/architecture/workflow/) process.
- Be as descriptive as possible when writing this review. Avoid terminology that makes it appear as if something is already well known.
  What may be known by one may not be well understood by another.
- Make no assumptions. If an answer cannot be provided, it is better to explain why we lack the ability to provide details.
  This assists in fostering discussion and enables us to spawn new issues if we identify areas of improvement.
  This is also an excellent avenue for asking for help as needed.
- It is acceptable to have issues created for line items which may not be complete or not yet well known.
  Link to those issues as necessary. One issue must _NOT_ be created as a catchall;
  instead for each item, a dedicated issue should be created. As details emerge from those issues, that information should then be fed back into the readiness review.
- It is also acceptable to have issues created as a basis for visiting after the service has been introduced into production.
  For these items, an issue must already be created and a statement indicating why it is safe to proceed without it being a blocker.
- For any question or section which simply may not have an answer, or if it isn't relevant, leave it in the MR and state why it is not applicable.
  Doing so ensures that we've performed a review of all possible subject areas.

## Guidelines for the reviewer

- As a reviewer of the Production Readiness proposal,
  your task is to collaborate with the author and decide whether information provided in the proposal is sufficient for production readiness.
  Ultimately the author is the DRI and responsible for putting the service in production.
  This review helps the DRI work with you to ensure that what is being proposed meet our reliability needs.
- Consider how sections listed in the [issue template](https://gitlab.com/gitlab-com/gl-infra/readiness/blob/master/.gitlab/issue_templates/production_readiness.md) are addressed.
  It is important that you highlight any shortcomings that you observe.
  Ensure that non-applicable sections are properly noted and that issues are created if there are gaps that need to be addressed following the change.
- Leave questions as you would with regular code review.

## Completing the readiness review

Once all discussions have been addressed all mandatory items have satisfactory answers, the author will request approvals from the reviewers.
The reviewers should note their approval by approving the merge request.
Following this, the issue will be closed and the change can be applied in production.
