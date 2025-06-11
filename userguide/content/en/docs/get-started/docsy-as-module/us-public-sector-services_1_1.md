---
title: US Public Sector Services team
---

## Mission

The GitLab US Public Sector Services team mission is to create a fully managed, single-tenant GitLab environment, served through a GitLab Dedicated platform that is purpose-built to help address specific regulatory and compliance requirements of US government agencies at the federal, state, and local level, as well as contractors, educational institutions, and other U.S. customers that run sensitive workloads. It is developed to remove any manual interactions with customer tenant installations, and to ensure that the customer tenants are fully focused on unlocking the power of The One DevOps Platform.

## Vision

The US Public Sector Services group is a customer facing team, with team members focused on a high level of infrastructure automation, and enabling customer interactions with the GitLab Dedicated for US Government platform.

Team mission is to:

- Build cloud infrastructure that meets or exceeds the requirements of the [Federal Risk and Authorization Management Program (FedRAMP)](https://www.fedramp.gov/)
- Develop a 100% automated system for provisioning a large number of single tenant GitLab sites
- Automate maintenance tasks without human interaction
- Create and manage central observability stack, as well as observability stack per customer tenant
- Create customer portal (Switchboard), exposing administrative operations to customer tenants

## Performance Indicators

Team performance indicators are not fully defined. We are going to consider a **Provisioning SLO** to start with, possibly followed by [DORA 4 metrics](https://cloud.google.com/blog/products/devops-sre/using-the-four-keys-to-measure-your-devops-performance).

## Team Members

{{< team-by-manager-slug "sdumesnil" >}}

## Working with us

To engage with the GitLab US Public Sector Services team:

- [Create an issue](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues/new) in the GitLab Dedicated team issue tracker (**Note** The issue tracker will be made public after [work in epic 33 "Considerations for making Dedicated projects public"](https://gitlab.com/groups/gitlab-com/gl-infra/gitlab-dedicated/-/epics/33) is completed). Label the issue with `team::US PubSec` label
- When creating an issue, it is not necessary to `@`mention anyone
- In case you want to get attention, use a specific team handle as defined in [group hierarchy below](#gitlab-group-hierarchy)
- Slack channels
  - For GitLab US Public Sector specific questions, you can find us in [#g_dedicated-us-pubsec](https://gitlab.slack.com/archives/C03R5837WCV)
    - The `@dedicated-uspubsec-team` Slack group can be used in any internal channel to tag the team.
  - Other teams in Dedicated group have their own work channels for team work discussions:
    - [#g_dedicated-team](https://gitlab.slack.com/archives/C025LECQY0M)
    - [#g_dedicated-switchboard-team](https://gitlab.slack.com/archives/C04DG7DR1LG)

## How we work

### Meetings and Scheduled Calls

Our preference is to work asynchronously, within our project issue tracker as described in [the project management section](#project-management).

The team does have a set of regular synchronous calls:

- `Team call` - During this call, we are sharing important information for team-members day-to-day, as well as project items requiring a sync discussion
- 1-1s between the Individual Contributors and Engineering Managers

Impromptu Zoom meetings for discussing GitLab Dedicated work between individuals are created as needed.
It is expected that these meetings are private streamed, or recorded(1*), and then uploaded to [GitLab Unfiltered playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KqC5FfUVPyndvLvTWifWbfB).
The outcome of the call is shared in a persistent location (Slack is not persistent). This is especially important as the team grows, because any decisions that are made in the early stage have will be questioned in the later stages when the team is larger.

`1*` Exceptions to the recording rule are: 1-1 calls, discussions around non-project work, and in cases where parties do not feel comfortable with recording or we cannot record due to the nature of content discussed. However, even with the exceptions, outcome of project related discussions need to be logged in a persistent location, such as the main issue tracker.

### GitLab Group Hierarchy

We use [GitLab Groups](https://docs.gitlab.com/ee/user/group/#groups) to logically organize team-members working on GitLab Dedicated projects.
The groups cover the following use-cases:

1. GitLab US Public Sector Services group membership: `@gitlab-dedicated/uspubsec`
    - All permanent team-members in any of the GitLab Dedicated teams should gain access to this GitLab group as part of onboarding
    - Group mention should only be used in circumstances where the information shared is pertinent for all team members of GitLab Dedicated group
2. Individual team GitLab groups have two additional subgroups `maintainers` and `reviewers`, e.g.: `@gitlab-dedicated/uspubsec/maintainers`
    - `reviewers` GitLab group access is granted to permanent team-members, external contractors, team-members on borrows and similar. This GitLab group type is used to distinguish users without merge rights. Initial reviewes should be requested from this group, using the quick action, e.g. `/assign_reviewer @gitlab-dedicated/uspubsec/reviewers`
    - `maintainers` GitLab group is granted to permantent team-members only. This group has merge rights, and the group is granted access through [CODEOWNERS approval rules](https://docs.gitlab.com/ee/user/project/codeowners/#code-owners)

Do note that the transition between `reviewers` and `maintainers` groups is still not fully defined, and this will be deifined as the team continues to grow. Currently, the founding team-members with a significant early contribution to the specific codebase and specific topic knowledge have been granted `maintainers` rights.

### Project Management

We use [epics](https://docs.gitlab.com/ee/user/group/epics/), [issues](https://docs.gitlab.com/ee/user/project/issues/), and [issue boards](https://docs.gitlab.com/ee/user/project/issue_board.html) to organize our work, as they complement each other.

The single source of truth for _all_ GitLab US Public Sector Services work across different functions is the top-level [GitLab US Public Sector Services epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/876). Please view that epic for more details on active and upcoming work. To view the specific issues the team is working on, see the overall [issue board](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/boards/4964764?label_name[]=team%3A%3AUS%20PubSec) for the team's work.

#### Epic Hierarchy

[Sub-epics](https://docs.gitlab.com/ee/user/group/planning_hierarchy/index.html#hierarchies-with-epics) are created under the top-level epic to logically segment work into an organized list of issues that are targeted towards a specific initiative or project milestone.

When applicable, additional sub-epics may be created within the existing epic hierarchy to further segment issues for project tracking pruposes.

1. Sub-epics group tasks required to deliver an item mentioned
2. Sub-epics represent an item from the roadmap and are delivered in a specific phase
3. Sub-epics can span multiple months, but their end date should match the 'anticipated completion date' of the roadmap phase they are added to.

In addition to epics, [milestones](https://docs.gitlab.com/ee/user/project/milestones/) can be used as a project tracking tool that allows issues across multiple epics to be associated with a target milestone date. Milestones can be filtered on an issue board for a single-pane view of current priority issues to be actioned by the team.

#### Epic Owners

Each epic has a single DRI who is responsible for delivering the project. DRIs for each epic are listed at the top of the description of each epic per Epic Structure.

#### Epic Owner Responsibilities

The DRI needs to:

1. Work with others to move issues through the boards
2. Ensure epic meets criteria outlined in [Epic Structure](/handbook/engineering/infrastructure/team/gitlab-dedicated/#epic-structure)
3. Provide updates on DRI's epic in epic description according to process outlined in [Status Update Process](/handbook/engineering/infrastructure/team/gitlab-dedicated/#Status-Update-Process) below.

#### Epic structure

Each epic and child sub-epics must include the following:

**Description**

1. **DRI** who is responsible for this epic.
2. **Background**, including a problem statement, to provide context for people looking to understand the epic.
3. **Exit criteria** for the specific goals of the epic.
4. **Status yyyy-mm-dd** should be the final heading in the description.
    1. This enables others who are interested in the epic to see the latest status without having to read through all comments or issues attached to the epic.
    2. This heading is used to auto-generate the status information on the top-level epic.

**Epic meta data**

1. **Start date** is set to the expected start date, and updated to be the actual start date when the project begins.
2. **Due date** is set to be the expected end date.

Labels are described in the [epic label section](#epic-structure).

#### Issue boards

[Issue boards](https://docs.gitlab.com/ee/user/project/issue_board.html) are used to track the overall status of epics and/or milestones.

##### Accessing US Public Sector Services Issue Boards

1. Navigate to the [Dedicated Issue Tracker](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team) project.
2. Using the navigation menu on the left, hover over the **Issues** section and select **Boards**
3. Using the drop-down menu located in the upper-left (next to the **Search Filter**) select the specific board associated with the epic or milestone that you want to view. If you know the name of the board you want to view, you can type it in the drop-down search box.
4. Once selected, the issue board will contain a kanban layout that contains a list of issues based on the filter provided (ex. milestone, epic, label, etc.), as well as various columns (also referred to as **Lists**) to reflect the desired organization of the issues. The US Public Sector Services team uses labels as the primary List filter. See the section below for how these issue boards are created and filtered.

> Note: Issue boards used for time-blocking project work should be deprecated once complete to maintain simplicity.

### Execution

The team operates in a kanban fashion. Issues are prioritized in the kanban board and self-assigned. We leverage scoped [worfklow labels](/handbook/engineering/infrastructure/team/gitlab-dedicated/#workflow-labels) to track different stage of work.

### Status Updates

The status for all work for the team is maintained in the description of the top-level [GitLab US Public Sector Services epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/876) so that it is visible at a glance.

#### Status Update Process

Both Engineering Cross-Functional DRIs should provide weekly updates for the DRI's epics according to following process:

1. **By 17:00 PST on Thursdays** DRIs of _active_ epics (or the person covering if DRI OOO) provide an update in the [status section of the description](/handbook/engineering/infrastructure/team/gitlab-dedicated/#epic-structure) of the epic regarding status of the epic including any relevant details of active sub-epics.
    - If the DRI for a sub-epic is different than the epic DRI, the epic DRI is responsible for getting updates from the sub-epic DRI.
    - Format for weekly update:
      - **Date of Update** (YYYY-MM-DD)
      - Brief update (~sentence or couple bullets) for each of these three bullets:
         - **Progress since last update** - Changes deployed to production, unblocked blockers, any other progress achieved.
         - **Risk and Confidence** - Any new blockers identified or existing blockers that persist? Any other challenges now or in the near future? How do these blockers and/or challenges affect our confidence of completing by scheduled due date from [Phase timeline](https://internal.gitlab.com/handbook/engineering/dedicated/)?
         - **Mitigations** -  What is required to overcome challenges or blockers identified?  Should this be escalated to other team members, teams, executives, or domain experts?
    - **Update Workflow and Health label** - After each status update, the Workflow label and Health label should be updated. See [Epic labels criteria](/handbook/engineering/infrastructure/team/gitlab-dedicated/#workflow-labels)

2. **Top-Level Epic Status Update** [automation synthesizes updates from status section](/handbook/engineering/infrastructure/team/gitlab-dedicated/#status-update-automation) from description of active epics to provide initiative status in the status section in the description of the top-level initiative Epic.

3. **Weekly engineering/product sync at 16:30 UTC / 11:30 AM ET on Mondays** Dedicated engineering/product meeting is used to discuss status updates and potential mitigations as necessary.

4. Status updates will be incorporated into initiative status updates and any initiative reporting in the following week.

5. **By 23:00 UTC / 5:00 PM ET on Wednesdays** Initiative DRI will share a summary of major items from the weekly initiative update in #ceo Slack Channel and link to the full update in the Initiative epic.

#### Status Update Automation

Status updates are auto-generated and added to description of [GitLab Dedicated top-level epic](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/479) using a bot running [the epic issues summary project](https://gitlab.com/gitlab-com/gl-infra/epic-issue-summaries).

If no update has been provided in an epic or issue for over a week, the issue will automatically receive workflow-infra::stalled label. Engineering managers are responsible for reviewing the status of the issue and helping it move along.

#### Reporting

We provide reports on status of GitLab Dedicated to meet [Top Cross-Functional Initiative requirements](/handbook/company/top-cross-functional-initiatives/#cross-functional-initiative-dris).
