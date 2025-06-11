---
title: Hands-on Workshop
description: Hands-on Workshop
---

## Hands-on Workshop

Hands-on GitLab workshops are interactive events which enable GitLab prospects and customers to learn more about GitLab, then apply that knowledge hands-on within a provided GitLab environment. GitLab Solution Architects often conduct the workshops with topics such as DevOps Automation, Portfolio and Project Management, Security and Advanced CI/CD. Workshops are ideally limited to 200 or fewer attendees in order to provide stable working environments as well as to be able to field Q&A from attendees in a timely manner.

In order to carry out a hands-on workshop, a GitLab instance must be stood up for the attendees to carry out the exercises during the workshop. Additional preparation is required to setup the class project and issue tracking workflow.

## Creating a Workshop Instance

To create an instance of a workshop navigate to the [Workshop Classes](https://gitlab.com/gitlab-com/customer-success/workshops/classes) Group in GitLab.

1. Click the 'New Project' button
1. Select 'Create from template'
1. Select 'Group' then select the required workshop template
1. Enter a project name that follows the following naming convention:
[Date of workshop]-[Workshop Name]-[Client Name(if applicable)]
i.e. "20210112-Advanced CI CD-GitLab"
1. Click the 'Create project' button

## How to Use the Workshop Template

The template consists of several main parts:

### The Project Repository

The project Repo contains all the materials required to run a workshop.

### The Readme File

The Readme file within the project repository describes the workshop requirements and delivery information.

### Tracking Issues

There are 7 issues created to help set up, track and deliver the workshop

Task 1 is the core issue. It is recommended that to use this to consolidate and coordinate with the team. Point team members to this issue to get the information on the particular instance of the workshop. Set timelines and set the dates for all the issues as it relates to the targeted delivery date.

### Tracking Milestone

Milestones are used to see progress on workshop set up. They can also be used as part of the group roll up to see across multiple workshop executions.

### Tracking Boards

The following boards have been created to help manage the workshop. Feel free to create new boards as needed:

- Tracking - This board uses the flow of scoped labels - Waiting to Start, In Progress, Under Review
- Assistance Needed: This board follows blocking issues affecting workshop setup and delivery

### Labels

The following labels are available at the project level - feel free to add new labels as needed, but please do not remove these labels:

- Assistance Needed: a label to flag when help is needed from the team and/or management to resolve an issue
- Content Creation - a label to indicate content is being created or updated
- Waiting to Start - a label indicating no work completion to date
- In Progress
- Under Review
