---
title: "Create:Code Creation Group Milestone Planning"
---

At GitLab and on the Code Creation team, we believe in a structured yet flexible approach to milestone planning to ensure that our engineering and product teams are aligned, focused, and able to deliver high-quality work efficiently. This page outlines our process for planning and preparing for milestones.

## Monthly Planning Issue Creation

- **Frequency and Purpose**: On the first of every month, a planning issue is automatically created to serve as the cornerstone for that month's milestone planning.
Responsibility: The creation of the planning issue is overseen by the engineering manager (EM).
- **Location**: Planning issues can be found in the [Create stage project](https://gitlab.com/gitlab-org/create-stage/-/issues/?sort=closed_at_desc&state=opened&label_name%5B%5D=Planning%20Issue&label_name%5B%5D=group%3A%3Acode%20creation&first_page_size=20).

## Role of Engineering and Product Managers

- **Collaboration**: The engineering manager (EM) and product manager (PM) work closely to prioritize upcoming issues for the next milestone.
- **Input from Engineers**: Engineers are encouraged to provide insights and recommendations on which issues should be considered for the upcoming milestone.

## Planning and Triage Process

- **Objective**: This process is not for issue resolution but for preparation and estimation for the upcoming milestone.
- **Issue Assignment**: During the current milestone, each engineer is assigned 1-2 upcoming issues that are likely to be included in the next milestone.
- **Due Date**: The triage process should be complete at least one week before the end of the current milestone.
- **Time Management**: Engineers are to dedicate no more than one hour per issue for review and preparation.
  - **Review Criteria**: Engineers review the title and description of assigned issues to ensure the scope of work is clearly defined.
  - **Estimation and Comments**: If the issue is well-defined, engineers add an estimate. If additional details are needed, they should leave a comment accordingly.
  - **Issue Readiness**: Issues that are ready for development receive the "ready for development" label. Issues deemed no longer valid should be closed.

## Issues Estimation

Here are the weights we use for issue estimation:

{{% include "includes/engineering/create/weight_table.md" %}}

A weight of 5 generally indicates the problem is not clear or a solution should be instead converted to an Epic with sub-issues. In these cases we may want to create a spike issue, which is an issue that is used to investigate and clarify the scope of the original issue. That spike issue can be used to help break down the original issue.

## Capacity Planning for the Next Milestone

- **Capacity Review**: When planning the next milestone, the engineering manager evaluates the team's available capacity, taking into account [PTO](/handbook/people-group/paid-time-off/) schedules and other commitments.
- **Issue Selection**: The EM selects top-priority issues until the capacity target is met, using the ["Deliverable" label](/handbook/product-development-flow/#required-labels) to mark committed issues.

## Prioritization and Execution of Work

### What to Work on First: Deliverables

- **Priority**: Deliverables are considered the highest priority and should be completed before the end of the milestone, aligning with our iteration cycle and monthly release schedule.
- **Self-Assignment**: Engineers can pick any issue marked with the ["Deliverable" label](/handbook/product-development-flow/#required-labels) and assign it to themselves, making these issues the top priority for the milestone. Issues for the current milestone can be found on the [Code Creation workflow board](https://gitlab.com/groups/gitlab-org/-/boards/5998095).
- **Importance**: It's crucial for engineers to make a concerted effort to complete these deliverables within the cycle, and to promptly communicate any obstacles to their engineering manager.
- **Communication and Flexibility**: Unexpected challenges can arise, potentially impacting the completion of a deliverable. Early communication of these challenges allows for possible solutions, such as scope reduction or reassignment. If a deliverable cannot be completed within the cycle, it is moved to the next cycle for completion. This scenario is an opportunity for both the engineer and the engineering manager to reflect and learn from the experience.

### What to Work on Next

- **Stretch Issues**: After fulfilling deliverable responsibilities and other activities, engineers can use any remaining time to work on Stretch issues. These are lower priority and not expected to be completed within the current iteration cycle but are potential deliverables for the next cycle. Early progress on these issues is considered a bonus.
- **Other Ideas**: Engineers are encouraged to use spare time to contribute to any work they believe will significantly benefit the product or company. As the [general guidelines state](/handbook/values/#dont-wait), “we recognize that inspiration is perishable, so if you’re enthusiastic about something that generates great results in relatively little time feel free to work on that.” While pursuing such initiatives, engineers should ensure proper issue assignment and consider sharing their work in relevant channels for visibility and collaboration.
- **Responsibility over Rigidity**: We expect people to be [managers of one](/handbook/values/#efficiency) and prefer [responsibility over rigidity](/handbook/values/#efficiency), so there’s no need to ask for permission if you decide to work on something that’s not on the issue board, but please keep your other responsibilities in mind, and make sure that there is an issue, you are assigned to it, and you share it with the team.

## Workflow and Label Management

- **Label Updates**: It's crucial for engineers to update the ["workflow" labels](/handbook/product-development-flow/#build-track) accurately as issues progress from "ready for development" to "in dev" to "in review."
- **Responsibility**: Engineers are responsible for keeping the workflow labels up to date on all issues they are working on during the milestone.

This milestone planning process is designed to maximize our team's effectiveness by ensuring that everyone is aligned on priorities and responsibilities. It fosters a collaborative environment where every team member contributes to the planning process, leading to a more organized and productive development cycle.
