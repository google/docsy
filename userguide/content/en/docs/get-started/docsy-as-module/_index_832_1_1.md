---
title: "Production Engineering Ops Team"
---

## Mission

The Ops team is an infrastructure team under SaaS Platforms that focuses on improving processes that are vital to the succesfull operations of GitLab.

## Vision

The Ops teams vision is to enable service onwers to operate their own services using standardized processes, frameworks, architectures and tools. Some of those processes and tools will be built by the Ops team, but many will be from other [Infrastructure teams](/handbook/engineering/infrastructure/team).

## Ownership and Responsibilities

There are two areas that are the Ops team primary focus:

1. Incident Management - Ops is responsible for improving the processes GitLab uses for incident management
2. Disaster Recovery - Ops is responsible for managing our disaster recovery processes with a particular focus on reducing our RTO
3. Patching Processes - Ops is responsible for defining and maintaining the GitLab.com patching process

## Getting Assistance

Should you require assistance from the Ops team, please open an issue in the [Production engineering tracker](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new) and add make sure to add the label ~"team::Ops"

- We also have team handles that ping the full team
  - GitLab: `@gitlab-org/production-engineering/ops`

## How We Work - Prioritization

### Project Management

The Ops team top level Epic can be found [here](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1176).
We follow the Infrastructure SaaS Platforms Project Management practices as outlined in the [Handbook](/handbook/engineering/infrastructure/platforms/project-management/).

#### OKRs

For Objectives and Key Results, we align with [Platforms guidance](/handbook/engineering/infrastructure/platforms/#okr) for creation and structure.

#### Epics

In addition to the format described in the [platforms project management page](/handbook/engineering/infrastructure/platforms/project-management/#epics), these sections may be helpful

```markdown

## Administrative

<!-- A copy paste section for creating child epics/issues, ensuring that they relate to the current epic and have the correct labels -->

\`\`\`
/epic [current epic]
/labels ~"group::Production Engineering" ~"Sub-Department::SaaS Platforms" ~"team::Ops" ~"workflow-infra::Triage" ~"Production Engineering::P2"
\`\`\`

## References

<!-- Links to related OKRs, Epics or issues, external resources etc -->

## Demos

| Demo Date | Demo Link | Highlights |
|-----------|-----------|------------|

## Decision log
<!-- A collapsible section to aggregate any decisions made along the way. Be sure to include "why" in addition to "what". -->

{{% details summary="Log" %}}
{{% details summary="date" %}}
[decision taken and why]
{{% /details %}}
{{% /details %}}

```

- Apply any applicable service labels.
- Make sure to give good context for the status and progress of the project in the weekly status update. If the epic is not on-track, please provide a plan for getting back on-track when possible.

#### Epic Status Updates

Project status is maintained in the description of the top-level epic so that it is visible at a glance. This is auto-generated using the [epic issues summary project](https://gitlab.com/gitlab-com/gl-infra/epic-issue-summaries). You can watch a [short demo of this process](https://youtu.be/6Wb1f-c1_og) to see how to use status labels on the epics to make use of this automation.

#### Issues

Open planned work for our team is located in the [Production Engineering](https://gitlab.com/gitlab-com/gl-infra/production-engineering/) project. Issues should be updated whenever significant work occurs. New issues are expected to:

- Link to a related Epic.
- Include the following Labels (update the priority as needed):

   ```text
   /labels ~"group::Production Engineering" ~"Sub-Department::SaaS Platforms" ~"team::Ops" ~"workflow-infra::Triage" ~"Production Engineering::P4"
   ```

- If there is a service label that is applicable, also apply that.

### Processes

#### Monthly Availability Updates

The Ops team is responsible for ensuring the published Monthly Availability Updates are maintained.  This is currently a manual process.   Items to update include:

1. [Historical Service Level Availability](/handbook/engineering/monitoring/#historical-service-level-availability) including [maintenance windows](https://status.gitlab.com/pages/history/5b36dc6502d06804c08349f7) from the month in the comments

Each of these items should be updated to reflect the most recent month.  ([Sample MR](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/4115)).

Latest results are on the [GitLab.com General SLA Dashboard](https://dashboards.gitlab.net/d/general-slas/general-slas?orgId=1&from=now-1M%2FM&to=now-1M%2FM) (internal only)

{{% alert title="Note" color="primary" %}}
Updates must be merged by the 7th day of each month.  This is currently a scheduled event on the Reliability Ops Team's Calendar.  Contact any member of the team for more details on this process.
{{% /alert %}}

#### Monthly Review of Incident and Pager Trends

The Ops team coordinates the monthly process to identify incident and pager trends across the engineering organization.  This is an async process with the following objectives:

- Identify actions to address issues identified in the Reliability Team Monthly Availability Reports.
- Generate action items based on the review of key metrics for incidents and pages.
- Generate and delegate action items to the relevant teams based on the review process.  This includes:
  - [Corrective Actions](/handbook/engineering/infrastructure/incident-management/#corrective-actions)
  - [Infradev Issues](/handbook/engineering/workflow/#infradev)
  - [Reliability Improvement Issues](https://gitlab.com/gitlab-com/gl-infra/reliability/-/issues/new)

These efforts are coordinated asynchronously via the [GitLab Incident and Pager Trends Monthly Review Agenda](https://docs.google.com/document/d/1SBoyuKK_g3RbYMcwJZs6dFqCGH9NCqu-M3QsHIwiKMw/edit#)

The process is scheduled on the Ops Team Calendar to kick off on the first Tuesday of each month.

The DRI kicking off the process and ensuring its progress is rotated among members of the Ops Team.

All our welcome to participate in the process of identifying trends.  EOCs, especially, are encouraged to participate.

##### Monthly Review of Incident and Pager Trends: How to guide for DRIs

1. Add a new section to the [agenda](https://docs.google.com/document/d/1SBoyuKK_g3RbYMcwJZs6dFqCGH9NCqu-M3QsHIwiKMw/edit#) for the current month.
1. Announce that the process is kicking off in #infrastructure-lounge and #reliability-lounge on Slack and solicit feedback.
1. Week 1: Review the agenda and respond to any questions or comments
1. Week 2: Reply to the announcement thread and solicit additional feedback.
1. Week 2: Review the agenda and respond to any questions or comments
1. Week 3: Review the `Identified Trends` section of the agenda and coordinate the creation of any required Corrective Actions, Infradev Issues, or Infrastructure Improvement Issues.
1. Week 4: Reply to the announcement thread that the process is coming to a close
1. Week 4: Add an item to the [Reliability Leadership Sync Agenda](https://docs.google.com/document/d/1K-od3_I1TsMcyLag-KyUw-iuCAaaqjR0GIbrmBwVU4M/edit#) and include a summary of action items created.  Please include severity for each item.
1. Week 4: Send a final reply to the announcement thread indicating that the process is closed for the month.

#### System patching notifications

The Ops team maintains a project [patching-notifier](https://gitlab.com/gitlab-com/gl-infra/ops-team/toolkit/patching-notifier) that automates the creation of GitLab issues when security problems are detected on our VM based infrastructure.

Details relating to the operation of this notification system can be found in
our [runbooks](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/security-patching/linux-os/notifications.md?ref_type=heads).

## Continuous Disaster Recovery Testing and Practice

The Ops team creates, manages, and coordinates regular DR Practices (or "Gamedays") to test and measure our Disaster Recovery processes.

[Our Disaster Recovery Gameday process can be found here.](dr-practice.md)

## Team Members

{{< team-by-manager-slug manager="kkyrala" >}}

## Roadmaps

The Production Engineering Ops team maintains roadmaps for our key focus areas:

- [View All Roadmaps](roadmaps/)

## Team Impact Overviews

- [2025 Team Impact](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/26146)

## Common Links

- Ops Epic List: https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/1176
- Issue Board: [All issue by priority](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/boards/3993753?label_name[]=team%3A%3AOps)
- Slack Channel: #g_infra_ops
