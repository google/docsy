---
title: "Epics project management guidelines"
---

{{< include "includes/wip-notice.md" >}}

## Background

[Epics](https://docs.gitlab.com/ee/user/group/epics) provide a way to organize and manage a set of issues and sub-epics that share a strategic theme. In addition to logical grouping, epics enable project managers to perform higher level planning and build a roadmap with visual status tracking.

### Key things to know

1. Epics are defined at the group level.
1. Epics can be made confidential.
1. Epics can contain both issues and epics as children.
1. Epics can be used as a filter in issue lists and issue boards.
1. Epics provide visibility on child epics, issue statuses, and the roadmap timeline (Gantt chart).
1. An epic is visible on a roadmap view if it contains a start or due date - [all marketing roadmap here](https://gitlab.com/groups/gitlab-com/marketing/-/roadmap?scope=all&utf8=%E2%9C%93&state=opened).
1. Child epics are also visible on a roadmap view, nested under their parent, when they have a start or due date.
1. The roadmap view provides a timeline of epics and their completion status based on aggregate issue weight completion for issues linked to the epics.
1. The roadmap view is available on the individual epic and the group page under `Epics > Roadmap`. The group page view provides additional filtering, sort order, and timeline units for display.
1. An issue can only be the child of a single epic.
1. Epics can have multiple child epics up to a depth of seven levels in total.

### Known Limitations

1. Epics cannot be created from templates ([issue](https://gitlab.com/gitlab-org/gitlab/-/issues/37079))
however, there are three workarounds.
    1. First - Epics **Can** be created from an issue that is promoted to an Epic (in this case, an issue template could be a substitute for an epic template).
    1. Second - The mixture of issues related to an epic can be templatized in a spreadsheet and uploaded to populate the issues related to a given epic.  See this [epic template overview](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/getting-started/104/) - note for collaborative epics that span multiple GitLab projects/teams: with this process, for the total number of projects/teams the issues span, you will need to complete that number of uploads of the spreadsheet, broken out by project/team.
    1. Third - Include code for the epic in the relevant handbook page to be copy/pasted, with issuable template hyperlinks. See [this handbook page](/handbook/marketing/lifecycle-marketing/#epic-code) for an example.
1. Epics do not have an assignee.
1. Epics cannot be created in projects ([issue](https://gitlab.com/gitlab-org/gitlab/-/issues/31840)).
1. Epics cannot be cloned ([issue](https://gitlab.com/gitlab-org/gitlab/-/issues/29115)).
1. Epics cannot contain issues from above their parent group ([epic](https://gitlab.com/groups/gitlab-org/-/epics/8294)).
1. Feature request: calendar view ([issue](https://gitlab.com/gitlab-org/gitlab/-/issues/25879)).

## Guidelines

### Use the roadmap view for high-level overview

The roadmap view can serve as the single source of truth and as a high-level overview to effectively understand the strategic themes, OKRs, marketing projects, and campaigns the team is working on.

A single link to the parent epic or to a group's roadmap page with (optional) filtering can be used for leadership visibility.

Milestones and issue boards can then be used to drill down into the details for more granularity on individual task status.

### Associate all related epics in an ancestor relationship

All epics that are related to an OKR epic or a strategic theme epic should indicate just **one** of them as the ultimate ancestor in order to align them properly on the roadmap.

### Set the start and end date for epics

In order for the roadmap view to be displayed and to provide meaningful visual timeline information, explicitly add the start and due dates to epics during the planning process.

### Use executive theme labels

All epics that are part of a strategic theme or an OKR should carry the associated [executive label](/handbook/marketing/project-management-guidelines/labels/#guideline-create-labels-at-the-lowest-possible-level), so that they can be filtered on the roadmap view. Optionally they can also carry one or more of the approved group-level labels.

### Define weight for child issues

As an additional piece of information to track completion status, the roadmap offers a completion percentage based on the weight of the children issues that have been completed over the total issue weight of all direct descendant issues combined.

It's recommended to [set the relative issue weight](/handbook/marketing/project-management-guidelines/issues/#set-issue-weight) for all child issues to be able to track and report epic completion on the roadmap view.

### Set health status for child issues

It can be good practice to highlight issues that need attention or might be at risk before a status review. This information can then be displayed on the roadmap view. For this to work, a [health status](https://docs.gitlab.com/ee/user/project/issues/managing_issues.html#health-status) can be assigned to individual issues.

You can set health status in the UI or with the `/health_status` and `/clear_health_status` [quick actions](https://docs.gitlab.com/ee/user/project/quick_actions.html).
