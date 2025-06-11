---
title: Cells Infrastructure Team
description: "Information about the Cells Infrastructure Team"
---

## Vision

The Cells Infrastructure team is responsible for developing key services and components of the Cells architecture. The team also collaborates closely with other infrastructure and development teams on their contributions to Cells.

## Team Members

{{< team-by-manager-slug manager="nick-nguyen" team="Cells Infrastructure" >}}

## How We Work

### Project Management

#### Issue Tracking

The Cells Infrastructure team works across multiple GitLab projects such as `gitlab-org/gitlab`, `gitlab-org/cells/http-router`, `gitlab-org/cells/topology-service`, and `gitlab-com/gl-infra/gitlab-dedicated/instrumentor`. By default, you should open issues that will be owned by the team under the [Cells Infrastructure Team Issue Tracker](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues) and apply the `group::cells infrastructure` label. Move issues for the Cells Infrastructure team from other projects to the team issue tracker when appropriate.

For issues tracked in the team's issue tracker or other `gitlab-com/gl-infra` projects, we use the `workflow-infra::*` labels to track an issue's workflow status. Ensure that all issues that are in progress, ready, or need triage have the relevant `workflow-infra::*` label applied. We use a [workflow issue board](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/9026689) to track the workflow status of active issues.

Sometimes we'll need to track issues contained in the `gitlab-org` top-level group, which does not contain `workflow-infra::*` labels. For these issues, please use the `workflow::*` labels. We track these issues using a [workflow issue board for gitlab-org](https://gitlab.com/groups/gitlab-org/-/boards/7739216).

Having two issue boards is not ideal and is a result of our recent reorganization into the Infrastructure Platforms department. Our long-term goal is to minimize the amount of issues that we need to track in the `gitlab-org` group and to primarily use the team's issue tracker in `gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team`. 

##### Workflow Label Mappings

The following are the `workflow::*` and `workflow-infra::*` labels that we use and how they map to each other.

| `gitlab-org` issues | `gitlab-com/gl-infra` issues | 
| ---------- | ------------------  |
| ~"workflow::refinement" | ~"workflow-infra::Triage" |
| ~"workflow::ready for development" | ~"workflow-infra::Ready" |
| ~"workflow::in dev" | ~"workflow-infra::In Progress" |
| ~"workflow::in review" | ~"workflow-infra::Under Review" |
| ~"workflow::blocked" | ~"workflow-infra::Blocked" |
| ~"workflow::verification" | ~"workflow-infra::Verify" |
| ~"workflow::complete" | ~"workflow-infra::Done" |

#### Blocked Issues

We use the following guidelines for denoting when an issue is blocked:

- If an issue depends on the completion of another issue, we use the `blocked by` feature to denote the dependency. 
- If an issue was started but requires further input, completion of another issue, etc before progressing, we use `workflow::blocked`.

#### Weekly Review

Each week the EM will schedule time to review the issue boards and team members can optionally attend. The intent of the review is to:

- Ensure that issues have the appropriate workflow labels.
- Check on the status of in progress, blocked, and in review issues.
- Ensure that there are refined issues ready to be worked on. Refined issues are weighted, have sufficient context in the description, and a workflow label indicating that it is ready to be worked on.
- Check that issues are aligned to our roadmap and status updates on relevant epics.

## Resources

- Slack (internal): [#g_cells_infrastructure](https://gitlab.enterprise.slack.com/archives/C07URAK4J59), [#g_cells_infrastructure_standup](https://gitlab.enterprise.slack.com/archives/C07UWPM2Y0P)
- [Cells Infrastructure Team Issue Tracker](https://gitlab.com/gitlab-com/gl-infra/tenant-scale/cells-infrastructure/team/-/issues)
- [Team Member Assigned Issues Board](https://gitlab.com/groups/gitlab-com/-/boards/8981056)
- [Issue Board gl-infra](https://gitlab.com/groups/gitlab-com/gl-infra/-/boards/9026689)
- [Issue Board gitlab-org](https://gitlab.com/groups/gitlab-org/-/boards/7739216)
