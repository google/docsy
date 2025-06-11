---
title: "Milestone Planning"
description: "Learn how the GitLab Application Security team does Milestone Planning"
---

## Milestone Planning

The Application Security team plans its work on a cadence based around GitLab Product Milestones. This enables us to be intentional about the work we do, while also providing insights into our capacity, velocity, and current projects.

This handbook page describes the planning process that we use to determine what work will be completed for each Milestone.

## Milestone Planning Issue

For each Milestone, a [Milestone Planning issue](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/?label_name%5B%5D=Milestone%20Planning) is created in the Application Security team repository. The purpose of this issue is to:

- Identify potential work to perform: rotations, KR work, critical project work, and other efforts
- Identify refinement gaps and address them
- Determine what work we're committing to for the upcoming Milestone
- Set and communicate priority for the work we've decided to take on

This issue is the single source of truth for all planning related discussions and decisions related to the upcoming Milestone.

## Milestone Planning Process

1. On the first of the month, an Application Security manager will create an issue from [the Milestone Planning issue template](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/appsec-team/-/issues/new?issuable_template=milestone_planning)
1. An Application Security manager will be responsible for completing the checklist items in the Planning Checklist section of the Milestone Planning issue
1. Application Security team members will add any work being carried over from the previous Milestone into the Milestone Work table
1. The Application Security team will add potential work items to the Parking Lot section, with a brief explanation of why it would be good to include in the Milestone
    1. Team members can add discussion threads to discuss potential work to pull into the Milestone
    1. Both individual team members and Application Security managers can add items to this list
1. The Application Security team will work together to add new items to the Milestone Work table
    1. Each item being added must be refined before it can be formally committed to
    1. The team member likely to take on the work should review and agree with the Weight, if it wasn't them who refined the issue
    1. Once we have refined and committed to the work, the relevant issue needs to be updated with the Milestone and Assignee(s)
1. The Milestone Planning issue should be finalized at least 3 business days before the Milestone Start Date
    1. The Application Security Manager will use threads in the Milestone Planning issue to work with each Application Security team member to finalize their workload
    1. Once finalized, the Milestone Planning issue should be closed

## Milestone Planning responsibilities

Application Security team members are responsible for:

- Evaluating and communicating their capacity for the Milestone (based on PTO, rotation assignments, and other factors)
- Adding work that is being carried over into the Milestone Work table
- Adding potential work items to the Parking Lot and being involved in discussions around what work we should pull into the Milestone
- Verifying upcoming rotations they are assigned to have an issue in the Milestone
- Collaborating with Application Security managers to finalize the set of work being committed to for the Milestone

Application Security managers are responsible for:

- Creating, updating, and maintaining the Milestone Planning issue
- Creating and properly labeling the upcoming Rotation issues
- Collaborating with Application Security team members to discuss potential work, identify refinement gaps, and assemble the Milestone Work table
- Coordinating the finalization of the Milestone Planning issue

## Issues and Labels

Application Security team members are responsible for keeping issues and labels up-to-date over the course of the Milestone.

Any issue being worked on by an Application Security team member must include:

- The `team::Application Security` label
- The appropriate `AppSecWorkflow::` label
- The appropriate Milestone

### Workflow Labels

| Label | Purpose |
| --- | --- |
| `AppSecWorkflow::planned` | Indicates that work has been triaged, scoped, and is ready to be worked on in the assigned milestone |
| `AppSecWorkflow::in-progress` | Indicates the issue is actively being worked on, or the rotation is in progress |
| `AppSecWorkflow::complete` | Indicates the work is done, or the rotation has finished |

### Rotations

Issues must be created for each rotation during the Milestone and assigned to the relevant team member.

#### Issue Process

1. Rotation issues are created ahead of time for the entire duration of the Milestone, initially with the `workflow::ready for development` label
1. At the beginning of a rotation time period, the team member on rotation will update the workflow label to `workflow::in dev`
1. At the end of the rotation time period, the team member on rotation will update the workflow label to `workflow::complete` and close the issue

#### Rotation Issue Labels

These issues must be labeled with the appropriate AppSecRotation label:

| Rotation | Label |
| --- | --- |
| HackerOne | `AppSecWorkType::HackerOneRotation` |
| Triage | `AppSecWorkType::TriageRotation` |
| Security Release | `AppSecWorkType::ReleaseRotation` |
| Federal AppSec VAT | `AppSecWorkType::VATRotation` |

## Milestone Planning Refinement Guidelines

- Is the problem clearly defined or is more followup/data needed?
- Is the scope too large to be completed within the milestone? Does the issue need to be broken down into smaller ones or promoted to an epic instead?
- For projects and net-new intiatives, is the scope and Definition of Done clear and measurable? Is it clear what's expected?
- Does it have at least one DRI assigned and are they aware?
- Are there dependencies? If so, document them.
- Are there other stakeholders and are they looped in and aware?
- Is the correct `AppSecWorkType::` label set?
- Is the `AppSecWeight::` label set?
- Does it have the `team::Application Security` label?
- Across the whole milestone, is the total operational + project weight achievable?

When issue is fully refined, please set the `AppSecWorkflow:planned` label, indicating it's ready to be worked on in the assigned milestone.

### Unplanned work

Sometimes high-priority and/or urgent work comes up after a milestone starts. When an unplanned issue is added after the milestone began:

- Document why the work needs to be prioritized in the issue
- Apply the `Unplanned` label
- If the unplanned work is large enough to displace other planned issues, inform the applicable stakeholders so they are aware that their issue is being delayed

### Missed milestones

Work planned for a milestone may not be fully finished due to time constraints or planned work being too ambitious. When this happens, attach the `missed::X.Y` label.
