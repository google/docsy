---
title: "Vulnerability Management Team"
---

This handbook page describes how the Vulnerability Management team works on a day to day, quarter to quarter basis.
We recognize this process is iterative and requires regular introspection to ensure we are always improving and not stagnating in our approach.

## Planning

Vulnerability Management follows GitLab [product milestones](/handbook/product/product-processes/milestones/)

Prior to a new milestone beginning, planning is performed to define the expected outcome of the next milestone, and the work required to accomplish it. We review our ability to deliver this work within the milestone and commit/adjust to issues to fit. Additionally, any work which is not scoped or not sized is qualified and labelled.

### How do we breakdown quarterly items into appropriately sized work items (issues)?

Ideally, sizing and planning labels are added as new issues are created. We aim to define work as small actionable issues to assist with fitting work into milestones and being able to parallelize work. Where work has not been sized and scoped, we do this sizing and scoping work during milestone planning for items we want to schedule for that milestone.

### Refinement & Sizing

Work is sized based on the estimated percentage of a milestone required to complete the task as it is defined. Work is defined as clearly as possible to try and minimize the impact of misunderstood requirements leading to scope creep. Issue sizing is performed on a defined scale of issue weights and sizing labels.

These steps are used as guidelines:

1. Check the issue for sufficiently detailed requirements needed to accomplish the desired outcome.
2. If the requirements or outputs are not clear enough to confidently assess whether the issue is actionable and how much of the milestone it would consume, it needs to be refined.
3. Add appropriate weighting & labels to the issue based on the estimated time to investigate, research and deliver the documented outputs.
4. Request help/assistance from other parties when the issue requires cross team collaboration during planning if possible.

### Issue Weighting

This is the scale used to size issues for scheduling. Note, the estimated durations are referring to overall effort, not scheduling duration. For example, if a large task can have several small tasks created and parallelized, it may be completed in less than 4+ weeks of scheduled time, but still be appropriately sized as a large work item.

Issues should be labelled with a [development label](../development-labels/) to describe the expected level of effort required.

### Additional Labels Used

In addition to the sizing labels detailed in the previous section, the following labels are used in prioritization and planning.

| Label | Purpose | Scoped |
|---|---|---|
| ~"vuln-mgmt-BAU" | This issue represents work which is part of regular or BAU ("business as usual") activities, which do not require explicit planning | No |
| ~"vulnerability-management-tooling::*" | Scoped label indicates which tool or automation this issue relates to. To be used for tooling owned by Vulnerability Management | Yes |
