---
title: "Work Items"
status: accepted
creation-date: "2022-09-28"
authors: [ "@ntepluhina" ]
coach: "@ayufan"
approvers: [ "@gweaver" ]
owning-stage: "~devops::plan"
participating-stages: []
toc_hide: true
---

{{< engineering/design-document-header >}}

This document is a work-in-progress. Some aspects are not documented, though we expect to add them in the future.

## Summary

Work Items is a new architecture created to support the various types of built and planned entities throughout the product, such as issues, requirements, and incidents. It will make these types easy to extend and customize while sharing the same core functionality.

## Terminology

We use the following terms to describe components and properties of the Work items architecture.

### Work Item

Base type for issue, requirement, test case, incident and task (this list is planned to extend in the future). Different work items have the same set of base properties but their [widgets](#work-item-widgets) list is different.

### Work Item types

A set of predefined types for different categories of work items. These are defined within the `work_item_types` table in the database.

#### Work item types in the GitLab product

While the default work item types from above exist in the production database, they may not be used in the UI of the GitLab product since we are in the process of migrating each type from using legacy APIs to work items APIs. In cases where legacy items exist, we also need to migrate data to the issues table, where all work items are stored and build new widgets to encompass all functionality.

| Work Item Type                                                   | Status in UI   | Availability in UI                    | Data migration to the issues table needed? | Documentation                                                                        |
| ---------------------------------------------------------------- | -------------- | ------------------------------------- | ------------------------------------------ | ------------------------------------------------------------------------------------ |
| [Task](https://gitlab.com/groups/gitlab-org/-/epics/7103)        | Implemented    | Fully available                       | No                                         | [Task](https://docs.gitlab.com/ee/user/tasks.html)                                   |
| [Objective](https://gitlab.com/groups/gitlab-org/-/epics/9003)   | Implemented    | Fully available behind a feature flag | No                                         | [Objective](https://docs.gitlab.com/ee/user/okrs.html)                               |
| [Key Result](https://gitlab.com/groups/gitlab-org/-/epics/9003)  | Implemented    | Fully available behind a feature flag | No                                         | [Key Result](https://docs.gitlab.com/ee/user/okrs.html)                              |
| [Incident](https://gitlab.com/groups/gitlab-org/-/epics/9585)    | Planned        | -                                     | No                                         | [Incident](https://docs.gitlab.com/ee/operations/incident_management/incidents.html) |
| [Test case](https://gitlab.com/groups/gitlab-org/-/epics/9923)   | Planned        | -                                     | No                                         | [Test case](https://docs.gitlab.com/ee/ci/test_cases/index.html)                     |
| [Requirement](https://gitlab.com/groups/gitlab-org/-/epics/9923) | Planned        | -                                     | No                                         | [Requirement](https://docs.gitlab.com/ee/user/project/requirements/index.html)       |
| [Issue](https://gitlab.com/groups/gitlab-org/-/epics/10842)      | In Development | -                                     | No                                         | [Issue](https://gitlab.com/groups/gitlab-org/-/epics/9584)                           |
| [Epic](https://gitlab.com/groups/gitlab-org/-/epics/9290)        | In Development | -                                     | Yes, in progress                           | [Epic](https://gitlab.com/groups/gitlab-org/-/epics/9290)                            |
| [Ticket](https://gitlab.com/gitlab-org/gitlab/-/issues/412055)   | Planned        | -                                     | No                                         | [Ticket](https://gitlab.com/groups/gitlab-org/-/epics/10419)                         |

#### Work Item properties

Every Work Item type has the following common properties:

**NOTE:**
You can also refer to fields of [Work Item](https://docs.gitlab.com/ee/api/graphql/reference/index.html#workitem) to learn more.

- `id` - a unique Work Item global identifier;
- `iid` - internal ID of the Work Item, relative to the parent workspace (currently workspace can only be a project)
- Work Item type;
- properties related to Work Item modification time: `createdAt`, `updatedAt`, `closedAt`;
- title string;
- Work Item confidentiality state;
- Work Item state (can be open or closed);
- lock version, incremented each time the work item is updated;
- permissions for the current user on the resource
- a list of [Work Item widgets](#work-item-widgets)

### Work Item widgets

All Work Item types share the same pool of predefined widgets and are customized
by which widgets are active on a specific type. The list of widgets for any
certain Work Item type is currently predefined and is not customizable. However,
in the future we plan to allow users to create new Work Item types and define a
set of widgets for them.

### Widget types (updating)

| Widget  | Description | Feature flag | Write permission | GraphQL Subscription Support |
|---|---|---|---|---|
| [WorkItemWidgetAssignees](https://docs.gitlab.com/ee/api/graphql/reference/index.html#workitemwidgetassignees) | List of work item assignees | For epics work item type `work_items_beta`, otherwise no FF |`Guest`|Yes|
| [WorkItemWidgetAwardEmoji](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetawardemoji) | Emoji reactions added to work item, including support for upvote/downvote counts | |Anyone who can view|No|
| [WorkItemWidgetColor](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetcolor) | Set color of a work item. **Note:** Color is available only for epics. | |`Reporter`|No|
| [WorkItemWidgetCurrentUserTodos](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetcurrentusertodos) | User todo state of work item | |Anyone who can view|No|
| [WorkItemWidgetDescription](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetdescription) | Description of work item, including support for edited state, timestamp, and author | |`Reporter`|No|
| [WorkItemWidgetDesigns](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetdesigns) | Design attachments for work items | |`Reporter`|No|
| [WorkItemWidgetDevelopment](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetdevelopment) | Show related branches and merge requests for work items | |`Reporter`|No|
| [WorkItemWidgetHealthStatus](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgethealthstatus) | Health status assignment support for work item | |`Reporter`|No|
| [WorkItemWidgetHierarchy](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgethierarchy) | Hierarchy of work items, including support for boolean representing presence of children. | |`Guest`|No|
| [WorkItemWidgetIteration](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetiteration) | Iteration assignment support for work item | |`Reporter`|No|
| [WorkItemWidgetLabels](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetlabels) | List of labels added to work items, including support for checking whether scoped labels are supported | |`Reporter`|Yes|
| [WorkItemWidgetLinkedItems](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetlinkeditems) | List of work items added as related to a given work item, with possible relationship types being `relates_to`, `blocks`, and `blocked_by`. Includes support for individual counts of blocked status, blocked by, blocking, and related to. | |`Guest`|No|
| [WorkItemWidgetMilestone](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetmilestone) | Milestone assignment support for work item | |`Reporter`|No|
| [WorkItemWidgetNotes](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetnotes) | List of discussions within a work item | |`Guest`|Yes|
| [WorkItemWidgetNotifications](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetnotifications) | Notifications subscription status of a work item for current user | |Anyone who can view|No|
| [WorkItemWidgetParticipants](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetparticipants) | Participants of a work item | |Anyone who can view|No|
| [WorkItemWidgetProgress](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetprogress) | Progress value of a work item. **Note:** Progress is currently available only for OKRs. | `okrs_mvc` |`Reporter`|No|
| [WorkItemWidgetRequirementLegacy](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetrequirementlegacy) | Legacy requirements | | |No|
| [WorkItemWidgetRolledupDates](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetrolledupdates) | Set the start date and due date for epic work items, and roll up the start date and due date from child work items | |`Reporter`|No|
| [WorkItemWidgetStartAndDueDate](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetstartandduedate) | Set start and due dates for a work item | |`Reporter`|No|
| [WorkItemWidgetStatus](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetstatus) | Status of a work item when type is Requirement, with possible status types being `unverified`, `satisfied`, or `failed` | | |No|
| [WorkItemWidgetTestReports](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgettestreports) | Test reports associated with a work item | | | |
| [WorkItemWidgetTimeTracking](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgettimetracking) | Track total time spent on a work item | |`Reporter`|No|
| [WorkItemWidgetWeight](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetweight) | Set weight of a work item | |`Reporter`|No|
| WorkItemWidgetLock | Lock/Unlock a work item | |`Reporter`|No|

#### Widget availability (updating)

| Widget | Epic | Issue | Task | Objective | Key Result |
|---|---|---|---|---|---|
| [WorkItemWidgetAssignees](https://docs.gitlab.com/ee/api/graphql/reference/index.html#workitemwidgetassignees) | ✅ | ✔️  | ✅ | ✅ | ✅ |
| [WorkItemWidgetAwardEmoji](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetawardemoji) | ✅ | ✔️ | ✅ | ✅ | ✅ |
| [WorkItemWidgetColor](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetcolor) | ✅ | ❌ | ❌ | ❌ | ❌ |
| [WorkItemWidgetCurrentUserTodos](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetcurrentusertodos) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WorkItemWidgetDescription](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetdescription) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WorkItemWidgetDesigns](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetdesigns) | ✔️ | ✅ | ❌ | ❌ | ❌ |
| [WorkItemWidgetDevelopment](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetdevelopment) | ❌ | ✅ | ❌ | ❌ | ❌ |
| [WorkItemWidgetHealthStatus](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgethealthstatus) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WorkItemWidgetHierarchy](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgethierarchy) | ✅ | ✅ | ❌ | ✅ | ❌ |
| [WorkItemWidgetIteration](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetiteration) | ❌ | ✅ | ✅ | ❌ | ❌ |
| [WorkItemWidgetLabels](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetlabels) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WorkItemWidgetLinkedItems](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetlinkeditems) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WorkItemWidgetMilestone](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetmilestone) | ❌ | ✅ | ✅ | ✅ | ❌ |
| [WorkItemWidgetNotes](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetnotes) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WorkItemWidgetNotifications](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetnotifications) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WorkItemWidgetParticipants](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetparticipants) | ✅ | ✅ | ✅ | ✅ | ✅ |
| [WorkItemWidgetProgress](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetprogress) | ❌ | ❌ | ❌ | ✅ | ✅ |
| [WorkItemWidgetRequirementLegacy](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetrequirementlegacy) | ❌ | ❌ | ❌ | ❌ | ❌ |
| [WorkItemWidgetRolledupDates](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetrolledupdates) | ✅ | ❌ | ❌ | ❌ | ❌ |
| [WorkItemWidgetStartAndDueDate](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetstartandduedate) | ❌ | ✅ | ✅ | ❌ | ✅ |
| [WorkItemWidgetStatus](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetstatus) | ❓ | ❓ | ❓ | ❓ | ❓ |
| [WorkItemWidgetTestReports](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgettestreports) | ❌ | ❌ | ❌ | ❌ | ❌ |
| [WorkItemWidgetTimeTracking](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgettimetracking) | ✅ | ✅ | ✅ | ❌ | ❌ |
| [WorkItemWidgetWeight](https://docs.gitlab.com/ee/api/graphql/reference/#workitemwidgetweight) | ❌ | ✅ | ✅ | ❌ | ❌ |

##### Legend

- ✅ - Widget available
- ✔️ - Widget planned to be available
- ❌ - Widget not available
- ❓ - Widget pending for consideration
- 🔍 - Alternative widget planned

### Work item relationships

Work items can be related to other work items in a number of different ways:

- Parent: A direct ancestor to the current work item, whose completion relies on completing this work item.
- Child: A direct descendant of the current work item, which contributes to this work item's completion.
- Blocked by: A work item preventing the completion of the current work item.
- Blocks: A work item whose completion is blocked by the current work item.
- Related: A work item that is relevant to the subject of the current work item, but does not directly contribute to or block the completion of this work item.

#### Hierarchy

Parent-child relationships form the basis of **hierarchy** in work items. Each work item type has a defined set of types that can be parents or children of that type.

As types expand, and parent items have their own parent items, the hierarchy capability can grow exponentially.

Currently, following are the allowed Parent-child relationships:

| Type       | Can be parent of | Can be child of  |
|------------|------------------|------------------|
| Epic       | Epic             | Epic             |
| Issue      | Task             | Epic             |
| Task       | None             | Issue            |
| Objective  | Objective        | Objective        |
| Key result | None             | Objective        |

### Work Item view

The new frontend view that renders Work Items of any type using global Work Item `id` as an identifier.

### Task

Task is a special Work Item type. Tasks can be added to issues as child items and can be displayed in the modal on the issue view.

### Feature flags

Since this is a large project with numerous moving parts, feature flags are being used to track promotions of available widgets. The table below shows the different feature flags that are being used, and the audience that they are available to.

| feature flag name | audience |
|---|---|
| `work_items` | defaulted to on |
| `work_items_beta` | `gitlab-org`, `gitlab-com` |
| `work_items_alpha` | `gitlab-org/plan-stage` |

#### Contextual view feature flags

| Feature flag name | Control area | Status |
|---|---|---|
| `work_items_alpha` | Child items in contextual view  | Enabled for `gitlab-org/plan-stage` |
| `epics_list_drawer` | Epics list, epics board  | Enabled for `gitlab-org/plan-stage` |
| `issues_list_drawer` | Issues list, issues board  | Disabled |

For epic work item specific feature flags, please see the [Epic Work Item Migration Epic](https://gitlab.com/groups/gitlab-org/-/epics/11777#feature-flags).

## Motivation

Work Items main goal is to enhance the planning toolset to become the most popular collaboration tool for knowledge workers in any industry.

- Puts all like-items (issues, incidents, epics, test cases etc.) on a standard platform to simplify maintenance and increase consistency in experience
- Enables first-class support of common planning concepts to lower complexity and allow users to plan without learning GitLab-specific nuances.

## Goals

### Scalability

Currently, different entities like issues, epics, merge requests etc share many
similar features but these features are implemented separately for every entity
type. This makes implementing new features or refactoring existing ones
problematic: for example, if we plan to add new feature to issues and incidents,
we would need to implement it separately on issue and incident types. With work
items, any new feature is implemented via widgets for all existing types which
makes the architecture more scalable.

### Flexibility

With existing implementation, we have a rigid structure for issuables,
merge requests, epics etc. This structure is defined on both backend and frontend,
so any change requires a coordinated effort. Also, it would be very hard to make
this structure customizable for the user without introducing a set of flags to
enable/disable any existing feature. Work Item architecture allows frontend to
display Work Item widgets in a flexible way: whatever is present in Work Item
widgets, will be rendered on the page. This allows us to make changes fast and
makes the structure way more flexible. For example, if we want to stop
displaying labels on the Incident page, we remove labels widget from Incident
Work Item type on the backend. Also, in the future this will allow users to
define the set of widgets they want to see on custom Work Item types.

### A consistent experience

As much as we try to have consistent behavior for similar features on different
entities, we still have differences in the implementation. For example, updating
labels on merge request via GraphQL API can be done with dedicated
`setMergeRequestLabels` mutation, while for the issue we call more
coarse-grained `updateIssue`. This provides inconsistent experience for both
frontend and external API users. As a result, epics, issues, requirements, and
others all have similar but just subtle enough differences in common
interactions that the user needs to hold a complicated mental model of how they
each behave.

Work Item architecture is designed with making all the features for all the types consistent, implemented as Work Item widgets.

## High-level architecture problems to solve

- how can we bypass groups and projects consolidation to migrate epics to Work Item type;
- dealing with parent-child relationships for certain Work Item types: epic > issue > task, and to the same Work Item types: issue > issue.
- [implementing custom Work Item types and custom widgets](https://gitlab.com/gitlab-org/gitlab/-/issues/335110)

### Links

- [Work items initiative epic](https://gitlab.com/groups/gitlab-org/-/epics/6033)
- [Tasks roadmap](https://gitlab.com/groups/gitlab-org/-/epics/7103?_gl=1*zqatx*_ga*NzUyOTc3NTc1LjE2NjEzNDcwMDQ.*_ga_ENFH3X7M5Y*MTY2MjU0MDQ0MC43LjEuMTY2MjU0MDc2MC4wLjAuMA..)
- [Work Item "Vision" Prototype](https://gitlab.com/gitlab-org/gitlab/-/issues/368607)
- [Work Item Discussions](https://gitlab.com/groups/gitlab-org/-/epics/7060)
