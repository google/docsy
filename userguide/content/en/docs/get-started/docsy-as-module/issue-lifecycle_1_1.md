---
title: InfraSec Issue Lifecycle
description: This page outlines the structured process for managing InfraSec issues from creation to closure. It includes clear stages such as issue triage, prioritization, backlog checks, and closure, ensuring efficient tracking, timely resolution, and accountability through systematic labeling and workflows
---

Managing issues—from creation to closure—is a fundamental process that ensures they are addressed systematically. The issue lifecycle typically begins when a team member or stakeholder creates an issue, detailing the problem, enhancement, or task to be completed. The issue progresses through various stages, including triage and in-progress, before being resolved or closed. This workflow allows for transparent tracking of work, accountability among team members, and a structured approach to delivering solutions. Each stage is crucial to ensuring that issues are handled efficiently, fostering collaboration and addressing all concerns on time.

## Issue Stages

### Stage 1: Issue Creation

The first step is to ensure it is properly categorized for review by the InfraSec team.

- Initially, standard labels like `Department::InfraSec` are applied if they are not already present to indicate that the issue pertains to the Infrastructure Security team.
- After the above step, the label `InfraSec::triage` is applied to the issue. This label signals to the InfraSec team that the issue requires their attention and triage.
- During the triage process, the InfraSec team assesses the issue's priority, scope, and impact on the infrastructure.
- Based on this assessment, the issue is either moved to the `InfraSec::backlog` for future consideration or marked as "InfraSec::prioritised" if it requires immediate action.
- This structured approach ensures that issues are addressed according to their urgency and business impact.

### Stage 2: Working on Issues

- Once an issue has been marked as `InfraSec::prioritised` during triage, it moves into the second stage, where the InfraSec team begins actively working on it.
- At this point, the issue is updated with the label `InfraSec::WIP`, signaling that the team has started addressing the problem or task.
- The team also estimates the effort required to resolve the issue. This is done by applying an effort estimation label, such as `InfraSecWork::Large`, to indicate the size and complexity of the work involved. For more information, refer to [Infrastructure Security - Capacity Indicators and Workflows](../metrics/capacity/#effort-classification).
- This estimation helps with setting realistic timelines and aligning expectations.

### Stage 3: Backlog Checks

- In this stage, the InfraSec team regularly reviews issues in the `InfraSec::backlog` to ensure they remain relevant and necessary.
- If an issue has been in the backlog for more than 6 months without any progress or it is no longer relevant, it is reviewed for potential closure. The issue is tagged as `InfraSec::stale`, and the triage bot will close it if it is not closed.
- If an issue has already been marked as `InfraSec::prioritised` or moved to the `InfraSec::WIP` stage in Stage 2, this stage is automatically skipped, as the issue is actively being worked on.
- This step helps maintain a clean backlog and focus on issues that are still pertinent to the team's objectives.

### Stage 4: Issue Closure

- In the final stage, after the InfraSec team has completed work on an issue and met the defined success criteria, the issue is prepared for closure.
- The team first removes the `InfraSec::WIP` label, indicating the work has been completed.
- After verifying that all success criteria and objectives have been achieved, the issue is then officially closed.
- This stage ensures that the work has been successfully completed and documented, marking the conclusion of the issue's lifecycle.

## Handling issues using TriageBot

This might look like a very complex workflow, but we have a friendly bot that helps you set the right labels. The InfraSec team utilizes the [GitLab Triage Bot](/handbook/support/readiness/operations/docs/gitlab/triage_bot/) to automate the initial handling of security-related issues. By leveraging this bot, issues are automatically categorized, labeled, and assigned according to predefined criteria, ensuring efficient prioritization and management throughout the issue lifecycle.

Configuration of the bot for InfraSec use-cases is available [here](https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/automation/infrasec-triage-bot/-/tree/main).

### When an issue is created

```mermaid
flowchart TD
    A[TriageBot] --> B{Does the issue has 'InfraSec::triage' label?}
    B -->|No| C(Apply the 'InfraSec::triage' label)
    A --> D{Does the issue has standard labels such as 'Department::InfraSec'?}
    D --> |No| E(Apply the standard labels)
    D --> |Yes| F{Is the issue assigned to anyone?}
    F --> |No| G(Tag Infrasec team and ask them to review the issue)
```

### Issue closure check

```mermaid
flowchart TD
    A[TriageBot] --> B{Does the issue has 'InfraSec::backlog' label?}
    B --> C{Is the issue older than 3 months?}
    C --> |Yes| D{Tag assignee and comment if the isue is still relevant}
    B --> E{Is the issue older than 6 months?}
    E --> |Yes| F(Add the label 'InfraSec::stale' to the issue)
    F --> |Yes| G(Tag assignee and inform of the 'InfraSec::stale' label)

    A --> H{Does the issue has 'InfraSec::stale' label?}
    H --> |Yes| I(Close the issue)

    A --> J{Does the issue has 'InfraSec::WIP' label?}
    J --> |Yes| K{Is the issue closed?}
    K --> |No| L(Continue to the next chart)
    K --> |Yes| M(Remove the 'InfraSec::WIP' label)
```

### WIP Issue checks

```mermaid
flowchart TD
    I[TriageBot] --> A{Is the issue open and has 'InfraSec::WIP' label?}
    A --> |No| B{Does the issue has a due date?}
    B --> |No| C(Tag assignee and comment that issue is missing the due date)

    A --> |No| D{Does the issue has weightage assigned?}
    D --> |No| E(Tag assignee and comment that the issue is missing the Efforts scoping label)

    A --> |No| F{Does the issue has a description?}
    F --> |No| G(Tag assignee and comment that issue is missing the description)
```
