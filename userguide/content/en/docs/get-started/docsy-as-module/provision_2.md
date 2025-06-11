---
title: Fulfillment Provision Team
description: "The Provision Team of the Fulfillment Sub-department at GitLab"
---

## Vision

For more details about the product vision for Fulfillment, see our [Fulfillment](https://about.gitlab.com/direction/fulfillment/) page.

The Provision group manages the [Provision category](/handbook/product/categories/#provision-group).

## Team members

{{% team-by-departments "Fulfillment:Provision Team" %}}

## Stable counterparts

{{< stable-counterparts manager-role="Fullstack Engineering Manager(.*)Fulfillment:Provision" role="Fulfillment:Provision" >}}

## Project management process

The Provision project management process inherits from the general Fulfillment [project management process](/handbook/engineering/development/fulfillment/#project-management-process) and adds a few additional elements specific to the work that the Provision team does.

### Planning

The milestone planning process is built around [planning issues](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/?sort=milestone_due_desc&state=opened&label_name%5B%5D=Planning%20Issue&label_name%5B%5D=group%3A%3Aprovision) for the milestone, these issue outlines what issues will be worked on in the upcoming milestone, how those issues are prioritized, commentary on how that fits with over arching goals, and how the proposed work fits in the capacity for the next month. The Provision team use [this template](https://gitlab.com/gitlab-org/fulfillment-meta/-/blob/master/.gitlab/issue_templates/provision_planning.md) for it's planning issues.

#### Planning Timeline

The team Engineering Manager and their Product Management counter part are responsible for implementing the milestone planning process. To complete all of the preparation work needed for each milestone the Provision team uses a schedule of:

- 1st of the month create new planning issue, ensure team member [monitoring availability calendar](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/882) is filled in for the upcoming month
- 9th of the month request engineer input and refinement of candidate issues
- 13th of the month finalized PTS and Sentry monitoring schedule
- 14th of the month final capacity planning for refined issues
- 18th of the month milestone starts

#### Refinement

The refinement process aims to ensure that all planned work can be completed within the scheduled milestone. During the refinement phase issues are distributed to engineers to answer three questions:

- Are there any open questions that prevent this issue from being marked as `workflow::ready for development`?
- Are there any design problems that could lead to predictable blockers coming up while implementing this issue?
- What weight estimate would you give for this issue?

Clearing foreseeable blockers helps to ensure that all scheduled work can complete without stalling. If there are issue that can not be completed due to design considerations those should pushed back to a future milestone to ensure capacity is directed to issues that can be delivered in the upcoming milestone. Having accurate estimates of the work needed for planned issues is important to ensure that all planned work can be completed accounting for team capacity.

### Capacity Planning

The Provision team is primarily a development team, however given the nature of the team's work there are additional operational concerns that routinely take team member's time away from purely development tasks. The main recurring tasks that take team member time are:

- [Monitoring the Provision Tracking System](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/provision_tracking_system/failure_monitoring.md)
- [Monitoring Sentry for integration related errors](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/process/salesforce_and_zuora_sentry_issue_monitor.md)
- Triaging licensing issues impacting customers

To account for the time consumed by the on going operational processes for each milestone a issue with a weight of `3` is created for Sentry monitoring and assigned to the engineer that is DRI for that process for milestone. For Provision tracking monitoring 4 issues with a weight of `1` each are created and assigned to engineers based on the Provision Tracking Monitoring schedule for the milestone.

The target weight for issues closed during a milestone is `0.5 * (Total number of working days accounting for time off)`. There is an [open issue](https://gitlab.com/gitlab-org/fulfillment-meta/-/issues/1469) discussing ways to move to planning capacity to a per engineer granularity.

### Change Management

In the spirit of [Iteration](/handbook/values/#iteration)and [Collaboration](/handbook/values/#collaboration) these processes are a work in process. Suggestions on improvements or new processes to try can be proposed under [this epic](https://gitlab.com/groups/gitlab-org/-/epics/8387).

### Historical capacity

Points of weight delivered by the team on the last milestones. This allows for more accurate estimation of what we can deliver
in future milestones. Full chart [to be migrated](https://gitlab.com/gitlab-data/tableau/-/issues/685).

## Performance Indicators

{{< engineering/child-dashboards filters="Provision" >}}

### OKRs

The Engineering Manager will report on the progress of [OKRs](/handbook/company/okrs/) every two weeks. Current OKRs: [FY22-Q1](https://gitlab.com/gitlab-com/www-gitlab-com/-/issues/10680)
