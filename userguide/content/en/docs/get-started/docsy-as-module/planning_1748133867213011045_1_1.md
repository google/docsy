---
title: Application Security Testing - Planning
---

## Overview

Our stage follows the [product development flow](/handbook/product-development/product-development-flow/) process, including the `workflow` labels. This page documents tweaks and additions to the general GitLab Process. If there's a conflict, the stage documentation should take precedence.

Some groups prefer to split the [Plan](/handbook/product-development/product-development-flow/#build-phase-1-plan) phase into two adjacent steps: [Planning breakdown](#planning-breakdown) and [Refinement](#refinement). Either way, once planning is complete, issues and epics are ready for [scheduling](#scheduling).

### Planning breakdown

Epics and issues are selected according to your team's prioritization process, and must have the `~workflow::planning breakdown` label applied.

The main questions to be answered are:

1. Are requirements clear enough to understand intent of request?
1. Do we know the boundaries of work to be accomplished? (e.g. code maintained by another team)

If either answer is “No”, discussion continues with the PM to improve the DRI’s understanding of the request.

If both answers are “Yes”, the DRI estimates whether or not the issue can be delivered in a single milestone. For an epic, it's assumed that it can't be delivered in a single milestone.

When it’s determined that an issue cannot be delivered within a single milestone, the DRI works to break it down into multiple issues, each of which can be delivered in a milestone. As much as possible, the issues are independent “slices” of value (results for customers) so, for example, no mocked UIs or backend work that is inaccessible.

Engineering output:

- Identify and resolve outstanding questions or discussions.
- Notify other teams if the issue is relevant to them in some way.
- Explain any dependencies on other teams in the description, and engage your EM/PM to facilitate early collaboration.
- For epics: create implementation issues within the epic(s).
- Apply the `~workflow::refinement` label to all issues.

### Refinement

Engineers assigned to refine issues are encouraged to ask questions and push back if issues lack the information required for successful refinement and execution.

Engineering output:

- Ensure issue is ready to be worked on; apply the `~workflow::ready for dev` label.
- Confirm that the issue has the correct [labels](https://docs.gitlab.com/development/labels/), especially the [work type classification label](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification).
- Remove assignee(s) from issue.

### Scheduling

The EM is responsible for scheduling work, according to feature, maintenance, and bug prioritization for their team.

Engineering output:

- Apply the correct milestone.
- Apply the `~Deliverable` label to issues that the team has committed to delivering in the milestone.

## Refinement guidelines

1. Assign yourself the issue. Note the differences for [bugs](#bug-diagnosis) and [spikes](#refinement-for-spikes).
1. Consider using the [`Implementation`](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Implementation.md?ref_type=heads) issue template as it has the structure used in these guidelines.
1. Ensure the appropriate `~backend` or `~frontend` label is applied or removed.
1. Check the issue for completeness:
    - It has the necessary designs.
    - The functionality clearly articulated, and there is a decision on how it should function.
    - The technical details are outlined, and discussions are resolved.
    - Dependencies have been called-out.
    - Determine if a [feature flag is needed](/handbook/product-development/product-development-flow/feature-flag-lifecycle/#when-to-use-feature-flags).
1. If the issue is not complete:
    - Tag the relevant people that can help complete the issue and outline what is needed. Tag the EM and PM, so they are aware of the blocker.
1. Ensure the issue is fully understood.
    - Update the issue description with the final description of what will be implemented.
    - Update the issue description with an [implementation plan](#implementation-plan).
    - Optionally, as per your team's customs, add [verification steps](#verification-steps).
    - Ensure the issue title is accurate for the work being done.
    - Open up new issues for 'follow-up' work, or work that was forced out of scope.
    - Assign a [work type classification label](/handbook/product/groups/product-analysis/engineering/metrics/#work-type-classification); e.g. `/label ~"feature::enhancement"`.
1. If your team uses weights, assign one accordingly (except for [bugs](#bug-diagnosis) and [spikes](#refinement-for-spikes)).
1. For complex issues, request a review from anoter engineer. Teams may have set a weight threshold to require reviews.
1. Add the `~workflow::ready for dev` label and unassign yourself.

When you are done refining, anyone should be able to read the issue description and should know what the issue is solving, how it is solving the problem, and the technical plan for implementing the issue.

In order for someone to understand the issue and its implementation, they should not have to read through all the comments. The necessary information must be in the description, as the single source of truth.

### Implementation Plan

A list of the steps and the parts of the code that will need to get updated to implement this feature. The implementation plan should also call-out any responsibilities for other team members or teams.

The goal of the implementation plan is to spur critical analysis of the issue and have the DRI think through what parts of the application will get touched. The implementation plan will also permit other engineers to review the issue and call out any areas of the application that might have dependencies or been overlooked.

The implementation plan might be limited to a single step but it should not be skipped, even when the implementation is simple.

This improves consistency across issues, and communicates that issues have been properly refined.

### Verification Steps

Explain how your changes can be verified by another person. This expedites the merge request review process, since reviewers won't need to ask for the information.

It also improves the (`~workflow::verification`) step by enabling someone else to do the verification, which should reduce the chance of the issue being reopened.

### Bug Diagnosis

Note the following differences when refining bugs:

1. As a guideline, spend no more than 1 hour per issue. Bugs that take too long to refine are indicative of a more complex issue.
1. Do not add weight. Our velocity represents the capacity to deliver new, bug-free features.
1. When you hit the time limit for refinement, it's ok to have uncertainty in the [Implementation Plan](#implementation-plan). It's sufficient just to direct where you expect the code change to be or further steps for diagnosis.

### Refinement for Spikes

1. Do not add weights[^1].
1. Time-box how much time to spend on the issue, and note it in the description; e.g. `Time-box: 2d`.
1. The deliverable is typically an answer or solution to be used in upcoming issues, along with follow-up issues.

[^1]: a spike doesn't directly add value to users so it shouldn't contribute to our velocity. The information delivered by a spike is what will be useful to deliver direct value to users.

### Refinement for Security Issues

The [Security Developer process](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/engineer.md) can be daunting for first-timers. As part of refinement, ask for a volunteer to act as a "Security Issue Release Buddy".
