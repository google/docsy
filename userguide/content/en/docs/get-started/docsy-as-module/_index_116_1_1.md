---
title: "Marketing Project Management Guidelines"
---

{{< include "includes/wip-notice.md" >}}

### Sub Pages

1. Organization - [Groups and Projects](/handbook/marketing/project-management-guidelines/groups/)
2. [Labels](/handbook/marketing/project-management-guidelines/labels/)
3. [Epics](/handbook/marketing/project-management-guidelines/epics/)
4. [Milestones](/handbook/marketing/project-management-guidelines/milestones/)
5. [Managing Commitment](/handbook/marketing/project-management-guidelines/commitment/)
6. [Issues](/handbook/marketing/project-management-guidelines/issues/)
7. [Boards](/handbook/marketing/project-management-guidelines/boards/)

## <i class="fas fa-toolbox fa-fw color-orange font-awesome"></i> Marketing Project Management Guidelines

Marketing uses GitLab for agile project management including [groups](https://docs.gitlab.com/ee/user/group/), [projects](https://docs.gitlab.com/ee/user/project/), [epics](https://docs.gitlab.com/ee/user/group/epics/), [roadmaps](https://docs.gitlab.com/ee/user/group/roadmap/), [issues](https://docs.gitlab.com/ee/user/project/issues/), [labels](https://docs.gitlab.com/ee/user/project/labels.html), and [boards](https://docs.gitlab.com/ee/user/project/issue_board.html). Read through the documentation on each of these GitLab features if you are unfamiliar.

## Integrated Campaigns

Marketing Departments collaborate to produce Integrated Campaigns. An Integrated Campaign is a communication effort that includes several campaign tactics such as blog posts, emails, events, advertisements, content on about.gitlab.com, videos, case studies, whitepapers, surveys, social outreach, and webcasts. An Integrated Campaign will have a campaign theme that summarizes the message we are communicating to our market.

### Active integrated campaigns

[Active integrated campaigns](/handbook/marketing/campaigns/#active-marketing-campaigns)

**Have a new campaign idea?** [Make a suggestion](/handbook/marketing/campaigns#new-ideas-for-marketing-campaigns-or-events)

## Project Management Processes

We cultivate a deep understanding of our own product by using GitLab to manage our planning, collaboration, and execution of Marketing activities.

[The latest Project Management recommendations can be found here](/handbook/marketing/project-management-guidelines) from FY21-Q2 Agility Project

### Milestones

[The latest recommendations for Milestones](/handbook/marketing/project-management-guidelines/milestones/) from FY21-Q2 Agility Project

#### Weekly Sprints

Within the www-gitlab-com repo (parent repo to Marketing) there are weekly milestones, which some teams use plan a weekly sprint cadence. Each of these sprints begins with "Fri:**" for the Friday upon which that sprint ends, making them [searchable in a list here](https://gitlab.com/groups/gitlab-com/-/milestones?utf8=%E2%9C%93&search_title=fri%3A&state=&sort=).

Each week on Monday, any open MRs and issues still assigned to the previous week's milestone are bulk moved forward to the next week, and the previous milestone is closed out. **This is a manual process currently performed by Danielle.**

### Groups and projects

[The latest recommendations for Groups and Projects](/handbook/marketing/project-management-guidelines/groups/) from FY21-Q2 Agility Project

1. The Marketing Group houses all marketing projects.
1. Labels should be created at the **group** level so they can be used in all projects within Marketing group.
    - Labels **should not** be duplicated in individual projects. It creates board/tracking conflicts.
1. The following are the approved marketing projects, [CMO approval](/handbook/marketing/cmo/) is needed to begin a new project.
    - [Product Marketing](https://gitlab.com/gitlab-com/marketing/strategic-marketing) (includes PMM, TMM, and Market Insights)
    - [Developer Relations](https://gitlab.com/gitlab-com/marketing/community-relations)
    - [Digital Marketing Programs](https://gitlab.com/gitlab-com/marketing/demand-generation/digital-marketing)
    - [Demand Generation](https://gitlab.com/gitlab-com/marketing/demand-generation)
    - [Corporate Marketing](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing) (includes content, website, corp events, brand, etc. - old location in deprecated group, to be updated)
    - [Marketing Operations](https://gitlab.com/gitlab-com/marketing/marketing-operations)
    - [Field Marketing](https://gitlab.com/gitlab-com/marketing/field-marketing)
    - [Account Based Strategy](https://gitlab.com/gitlab-com/marketing/account-based-strategy)
    - [Sales Development Organization](https://gitlab.com/gitlab-com/marketing/sdr)
    - [Digital Advertising](https://gitlab.com/gitlab-com/marketing/digital-advertising) - used for external advertising agency
    - [Onboarding](https://gitlab.com/gitlab-com/marketing/onboarding)
    - [Contribute](https://gitlab.com/gitlab-com/marketing/contribute) - this is a sub-group that contains all projects for each Contribute event
    - [Growth Marketing](https://gitlab.com/gitlab-com/marketing/growth-marketing)
    - [Partner Marketing](https://gitlab.com/gitlab-com/marketing/partner-marketing) (includes both tech partner and channel marketing)
1. Issues should be logged in the team project ultimately responsible for completing requested work. (i.e. If SDR needs list uploaded -> issue created in Marketing Operations project).

### Issues, Milestones, and Epics

[The latest recommendations for Epics](/handbook/marketing/project-management-guidelines/epics/) and [the latest for Issues](/handbook/marketing/project-management-guidelines/issues/) from FY21-Q2 Agility Project

1. Each issue represents a discrete unit of work with a deliverable. For example [1](https://gitlab.com/gitlab-com/marketing/product-marketing/issues/10) [2](https://gitlab.com/gitlab-com/marketing/digital-marketing-programs/-/issues/36) [3](https://gitlab.com/gitlab-com/marketing/general/-/issues/2574)
1. Every MR should have an issue so that it can be tracked on issue boards.
1. Milestones represent units of work to be completed within a specific time frame, sometimes referred to as sprints. They are comprised of multiple issues that share a common due date, and help break large projects into more manageable parts.
1. Epics represent projects that comprise multiple issues. (Don't use "meta" issues for this purpose. If you have an existing meta issue you can promote them to epics using the `/promote` quick command.)
    - Epics live at the group level (e.g. issue from multiple marketing projects can be added to an epic.)
    - Epics are labeled with a group label of the team that owns the epic.
1. The top 3-5 strategic initiatives are tracked in epics using the `CMO` label. (Don't apply the CMO label to other epics.)
1. Roadmaps are used for time-based display of epics with a start and end date. (for example, events and time-based campaigns.)

### Boards and Labels

[The latest recommendations for Labels](/handbook/marketing/project-management-guidelines/labels/) and [the latest for boards](/handbook/marketing/project-management-guidelines/boards/) from FY21-Q2 Agility Project

1. Each team has one or more boards to track ongoing workstreams.
1. Generally, create a board for each function. (For example PMM has boards for Sales Enablement, Analyst Relations, Customer Relations, etc.)
1. Each board uses a standard set of columns/labels so that folks can easily understand what is happening on another teams board.
1. The board labels use group _scoped_ labels with `mktg-status::` and one of four statuses. Status labels should be used on all issues within the Marketing group:
    - `mktg-status::plan` - work that is proposed, in an exploratory state.
        - To exit the plan stage the work must be assigned to a DRI.
        - DRI accepts responsibility for the task by changing the label from `mktg-status::plan` to `mktg-status::wip` and creating an merge request (MR), if appropriate. The plan status is optional, as issues that don't require formal planning can be opened and labeled `mktg-status::wip`.
    - `mktg-status::wip` - work in progress that has been accepted and assigned to a DRI.
        - Work in this stage should not be merged.
        - Merge requests (MRs) should be prepended with `WIP:`. At GitLab we allow reviewers to start reviewing right away before work is complete.
        - Use [MVCs](/handbook/values/#iteration): At any time, if the work is complete enough that merging would be better than what current exist the issue should be labeled with `mktg-status::review` and `WIP:` should be removed from the title.
    - **Optional***: `mktg-status::review` - work has been completed enough that it is ready for formal review and approval.
        - Work that is approved can be either merged or scheduled.
        - The review status is optional.
        - Work that doesn't require review can simply be merged/closed.
    - **Optional**: `mktg-status::scheduled` - work that is complete but should be scheduled for a future date.
        - Scheduled status is optional as not all work will need to be scheduled.
    - `closed` - when work is delivered the issue should be closed.
1. **Don't duplicate status labels at the project level.** Use group labels (at the Marketing Group level) as much as possible.

### Department Labels

Each Department within Marketing can have "additive" labels - meaning they are used to enhance the tracking and workflows for that respective team. These "additive" labels are used in conjunction with the broader [Marketing labels](#boards-and-labels). The Department label usage is documented on each of the respective handbook pages:

- [Marketing Programs](/handbook/marketing/integrated-marketing/digital-strategy/)
- [Operations](/handbook/marketing/marketing-operations/)
- [Sales Development Organization](/handbook/marketing/sales-development/)
- [Field Marketing](/handbook/marketing/field-marketing/#field-marketing-labels-in-gitlab)
- [Account Based Marketing](/handbook/marketing/account-based-marketing/)

### Default Issue Text

All of the projects within the [Marketing subgroup](https://gitlab.com/gitlab-com/marketing) include **default issue text** to ensure the Department labels are applied consistently and broader adoption of the [global Marketing labels](#boards-and-labels).

#### Using Default Issue Text

When a new issue is opened in _any_ project, the issue description will contain a small snippet of text applying that teams' label & Marketing scoped `mktg-status::plan` label.

![''](/images/handbook/marketing/example_default_issue_text.png)

- If a template is chosen, a message will appear confirming you want to change the text w/in the issue description, click `Apply Template` and continue as normal

![''](/images/handbook/marketing/template_change_message.png)

#### Updating Default Issue Text

The default text is minimal and generic. Any team can make the collective decision to update the text. Access to modify the text may be limited based on group/project permission level, if you do not have access to the `General` settings section, please reach out to `@mktg-ops` via slack.
_Please note_ this is not an issue bot there is no dynamic functionality. The default issue text applies to all issues opened within that project and the text should be broad enough to encompass a roles within that team.

1. Navigate to project to be updated
1. Left side menu, hover over the wheel widget (last icon) -> Select `General`
1. Scroll down & select `Expand` next to **Default Issue Template**
1. In the text box you can add any markdown formatting & modify the text. The text that has been added included several lines above it, so it may _appear_ to be a blank box. Scroll down &/or expand that text box to see complete text.
    - **Please do not** delete the labels section.
    - Label section can be updated to include more labels &/or switch the Department label
    - Important to _leave_ the `mktg-status::plan` label in that section
1. Once edits have been made, click `Save changes`. The changes be applied immediately to **any new issue opened**.
    - Does not affect already opened issues.

If you have any issues &/or questions, please reach out to the MktgOps team (`@mktg-ops`) via slack.

### How it all fits together

Figuring out how where and how to create a board, epic, label can be confusing. The following diagram is a very high level example of how it all fits together. If there are questions please ask in the [#mktgops slack channel](https://gitlab.slack.com/messages/CGL35F20G) (*must be GitLab team member for active link).

<img src="https://docs.google.com/drawings/d/e/2PACX-1vRNvAJ7LoK-6nvbOGEX-T5-tRD7PK3dU4OVbfBWwr6orNwnEo4LJBSCDCenfDfFcQwSTeOWFDS8FE15/pub?w=1056&amp;h=1344" alt="">
