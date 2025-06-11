---
title: "Work Items Custom Status"
status: ongoing
creation-date: "2025-02-25"
authors: [ "@msaleiko" ]
coaches: ["@ntepluhina"]
dris: [ "@donaldcook", "@gweaver" ]
owning-stage: "~devops::plan"
participating-stages: []
toc_hide: true
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

<!-- This renders the design document header on the detail page, so don't remove it-->
{{< design-document-header >}}

## Summary

This document outlines our approach to implementing a
[flexible status system for work items](https://gitlab.com/groups/gitlab-org/-/epics/5099) in GitLab.
We're evolving beyond the binary open/closed states and label-based status tracking by introducing proper status
fields with customization capabilities.

The solution introduces system-defined statuses as the foundation for Premium and Ultimate users, with users able to
add statuses, change status name or color, and alter the order of statuses.
We'll initially target Tasks before expanding to Issues, Epics and other work item types, while Free users will
continue using the binary open/closed state system.

This initiative lays the groundwork for users to more effectively manage work
item lifecycles and addresses problems caused by requiring labels for status
management.

## Timeline & status updates

1. Custom Status is the Plan Stage's highest priority in FY26Q2, and we've planned to deliver the first two iterations to General Availability by the 18.2 milestone
1. Status updates can be derived from the [custom statuses epic](https://gitlab.com/groups/gitlab-org/-/epics/5099)
   and the iteration child epics.

## Glossary

### Existing concepts and terms

1. **Work Item Type:** A classification that determines a work item's available features and behaviors
   through its associated widgets.
1. **Widget:** A functional component that provides specific capabilities to a work item type
   (for example "assignees" and "labels").
1. **State:** The fundamental binary classification of a work item as either 'open' or 'closed'.

### New concepts and terms

1. **Status:** A specific step in a work item's workflow ("In progress", "Done", "Won't do")
   that belongs to a category and maps to a binary state (open/closed).
1. **Status category:** A logical grouping for statuses (triage, to_do, in_progress) that determines
   their effect on a work item's state (and icon).
1. **System-defined status:** A system-provided status that cannot be modified and that is available
   to get started with work item statuses.
1. **Custom Status:** A namespace-defined status that replaces system-defined statuses for all groups
   and projects within that namespace.
1. **Lifecycle:** A collection of statuses that can be applied to a work item type. It allows statuses
   to be grouped into meaningful workflows that can be reused consistently across types and namespaces.
1. **Status Widget:** The component that displays status and allows users to modify the status of a
   work item on list, board, and detail views.

## Motivation

GitLab currently relies on a combination of labels and two formal states (open/closed) to represent work item status.
This approach has significant limitations for teams managing complex workflows.
The binary open/closed system doesn't provide enough context about where items stand in a process, and overusing
labels for status tracking creates inconsistency and management overhead.

### Goals

1. Expand work item status beyond the binary open/closed system to represent more workflow stages
1. Improve context on the status of work items
1. Enable better reporting on the reasons for closing issues (completed vs. duplicated/moved/won't do)
1. Enhance lead/cycle time calculations by distinguishing active time from waiting time
1. Build on top of our work item system to leverage status for all work item types
1. Reduce reliance on labels for tracking status

### Non-Goals

1. Make status usable beyond the work items framework (for example for other entities outside the framework).
1. Force every status-like functionality into work item status (for example incident paging status and requirements verification status)

## Proposal

We propose implementing a flexible status system for work items in GitLab, built around these core concepts:

1. Status is available for Premium and Ultimate customers.
1. Free customers continue to use state (open/closed) and labels.
1. Customizable workflows through lifecycles that can be applied to work item types and that hold statuses.
1. System-defined statuses as a starting point.
1. Allow users to create and modify status and lifecycles as custom statuses and custom lifecycles.
1. Sync state and status along the workflow to ensure consistency and compatibility.
1. Use the work item framework and widget concepts and the GraphQL API.
1. Migration tools to assist users in transitioning from workflow labels to the new status system.

## Design and implementation details

This section outlines the core concepts, implementation architecture, and rollout plan
for the new work item status system in GitLab.
We'll explore the key components and detail how they interact to create a flexible,
scalable status management solution.

### Core Concepts

#### Lifecycles

Lifecycles function as a holder for statuses and can be applied to work item types.
They define which statuses are available for items of a given work item type.

**For example:** In a customers root group, issues should use the "Engineering" lifecycle,
tasks "Kanban", and epics, objectives, and key results the "Strategy" lifecycle.
All lifecycles reuse the "Done" and "Won't do" statuses, but overall the number of statuses and
their position is different.

We start with providing one default lifecycle for work item types like tasks, issues, epics,
objectives and key results.

Service Desk tickets may use a different lifecycle with different statuses like `waiting for first response`,
`waiting for customer` and `waiting for next response`. But that is to be defined.
[See this discussion](https://gitlab.com/gitlab-org/gitlab/-/issues/498393#note_2314175535) to learn more.

#### Statuses

A status can be used in multiple lifecycles and can be attached to a work item based on the available lifecycle of
the work item type and namespace. The default lifecycle contains these statuses:

- `To do`
- `In progress`
- `Done`
- `Won't do`
- `Duplicate`

#### Status Categories

Statuses are organized into categories that are not user-configurable that determine their behavior:

```ruby
CATEGORIES = {
  triage: 1, # Exists but without system-defined status
  to_do: 2,
  in_progress: 3,
  done: 4,
  canceled: 5
}.freeze
```

The category is only visible in the management area of statuses and not in list, detail and board views.
The category defines the icon of the status.

#### Status-State Relationship and Transitions

Status builds on top of the existing state system (open and closed).
We need to transition work items automatically when either state or status change according to the following rules:

- Statuses in `done` and `canceled` categories automatically set work items to `closed` state
- All other categories maintain work items in `open` state
- The lifecycle defines default transition statuses (this is true for both system-defined and custom lifecycles):
  - Default Open Status: Applied when creating and reopening items
  - Default Closed Status: Applied when closing items
  - Default Duplicated Status: Applied when marking items as duplicates (or moved, promoted TBD)

### Implementation Architecture

#### Distinction between system-defined and custom entities

We've decided against prepopulating statuses for each root namespace, as this approach would make modifying or extending
statuses more challenging and significantly increase the database table size. Instead, we're introducing system-defined
statuses and lifecycles as defaults, which can then be customized into custom statuses and lifecycles.

The [Cells initiative](../cells/_index.md) aims to make our platform horizontally scalable and resilient.
To achieve this, we need a sharding key in every database table.
Sharding keys cannot be `null`, and we're discouraged from using a custom sequence (such as using `-1` for
system-defined statuses or lifecycles, or reserving the first `1,000` IDs for system-defined entities).

Because system-defined data doesn't belong to a namespace and can be considered global, we need to handle it separately.
For all other tables, we'll use `namespace_id` as the sharding key.

We considered three options for managing system-defined entities:

1. Define system-defined entities in code (chosen approach)
2. Store system-defined data in a separate table
3. Use a single table and reserve first `1_000` IDs with a custom `CHECK` constraint

We've chosen to implement the first option: defining system-defined entities in code. This approach offers the
best balance of simplicity, scalability, and maintainability for our system.

#### Fixed items models and associations

Since system-defined data is static per definition we can hard-code it and benefit from not hitting the database.
The challenge is that we cannot make joins and use ActiveRecord methods.

We introduce the concept of fixed items models that include a module that adds ActiveRecord-like methods and defines
the static data in an array of hashes called `ITEMS`.

- [MR that introduces the abstraction modules](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/179547)
- [MR that introduces the concrete models and associations](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/181962)

For example:

```ruby
class StaticModel
  include ActiveModel::Model
  include ActiveModel::Attributes
  include ActiveRecord::FixedItemsModel::Model

  ITEMS = [
    {
      id: 1,
      name: 'To do'
    }
  ]

  attribute :id, :integer
  attribute :name, :string
end
```

ActiveRecord-like methods can be used like:

```ruby
StaticModel.find(1)
StaticModel.where(name: 'To do')
StaticModel.find_by(name: 'To do')
StaticModel.all
```

To make associations possible we introduce a custom association `belongs_to_fixed_items` which resolves associations
to fixed items models like this (`*_id` column needs to be present):

```ruby
class MyModel < ApplicationRecord
  include ActiveRecord::FixedItemsModel::HasOne

  belongs_to_fixed_items :static_model, fixed_items_class: StaticModel
end
```

The association can then be used as:

```ruby
m = MyModel.last
m.static_model # Returns fixed items model instance
m.static_model = StaticModel.find(1)
m.static_model_id = 1 # still possible
m.static_model? # Bool
m.save! # Saves association
```

#### Overview of classes

```plantuml
@startuml
class WorkItem
class WorkItems::Statuses::CurrentStatus {
  namespace_id: Sharding key
  work_item_id
  system_defined_status_id
  custom_status_id
}
class WorkItems::Statuses::Custom::Status {
  namespace_id: Sharding key
  name
  color
}
class WorkItems::Statuses::Custom::Lifecycle {
  namespace_id: Sharding key
  default_open_status_id
  default_closed_status_id
  default_duplicate_status_id
}
class WorkItems::Statuses::Custom::LifecycleStatus {
  namespace_id: Sharding key
  position
}
class WorkItems::Statuses::SystemDefined::Status {
  name
  color
}
class WorkItems::Statuses::SystemDefined::Lifecycle {
  work_item_base_types: Array
  status_ids: Array
  default_open_status_id
  default_closed_status_id
  default_duplicate_status_id
}
class WorkItems::Type
class WorkItems::TypeCustomLifecycle {
  namespace_id: Sharding key
}
class Namespace {
  custom_status_enabled: Bool
}

WorkItem -- WorkItems::Statuses::CurrentStatus

WorkItems::Statuses::CurrentStatus -- WorkItems::Statuses::Custom::Status
WorkItems::Statuses::CurrentStatus -- WorkItems::Statuses::SystemDefined::Status

WorkItems::Statuses::Custom::Status -- WorkItems::Statuses::Custom::LifecycleStatus
WorkItems::Statuses::Custom::LifecycleStatus -- WorkItems::Statuses::Custom::Lifecycle
WorkItems::Statuses::Custom::Lifecycle -- WorkItems::TypeCustomLifecycle
WorkItems::TypeCustomLifecycle -- WorkItems::Type
WorkItems::Statuses::Custom::Lifecycle -- Namespace

WorkItems::Statuses::SystemDefined::Status -- WorkItems::Statuses::SystemDefined::Lifecycle
WorkItems::Statuses::SystemDefined::Lifecycle -- WorkItems::Type

@enduml
```

To encapsulate everything status related we use the `WorkItems::Statuses` namespace.

Starting from the `WorkItem` we'll create a join model called `WorkItems::Statuses::CurrentStatus` that holds the
status associations of a work item. We have separate columns `system_defined_status_id` and `custom_status_id` which map
to the different concepts of how we store system-defined and custom data.
The model itself abstracts that away and we just set and get a status (using `#status` and `#status=`).

We can determine on the root namespace level whether all descendants of the root namespace use
system-defined statuses or custom statuses.

For lists that collect work items from various root namespaces we won't check which status to use but instead check
for the availability of data on the join model.
If `custom_status_id` is set, use the custom status. If not use the system-defined status.
To efficiently fetch this data for work item lists, we use a
[bulk status resolver](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/app/graphql/resolvers/work_items/statuses/bulk_status_resolver.rb)
which only adds two additional queries. One to load the join model and another to load custom statuses.

We use the fields `default_open_status_id`, `default_closed_status_id`, and `default_duplicate_status_id` to make
automatic state/status transitions possible.

#### Namespace Configuration

Each root namespace exclusively uses either system-defined statuses or custom statuses.
When editing statuses for the first time, the system creates copies of all system-defined statuses as custom statuses.
All work items of this namespace and its descendants will need to be migrated from the old to the new statuses
(which will happen in the background).

Lifecycles and statuses can only be configured on the root namespace level in the first iterations.
It's to be defined how the mechanic to configure on a lower level will work and which restrictions will apply.

In dashboards and lists that render items from different root namespaces:
Statuses with the same name across different namespaces will be grouped in frontend filters (for example in dashboards).
The API call will include a filter with the grouped statuses in a `OR` condition.

For example: we filter for status `Done` which is available in two root namespaces (`A` and `B`).
The frontend filter only shows `Done`, but the API call will filter for `A::Done OR B::Done`.

#### API design

We use the existing work items GraphQL API and build on top of the work items widgets concept.

The API returns status related data of a work item in the `STATUS` widget.
We can get a list of available statuses for a given work item type in a namespace
by querying the widget definitions for the work item type.

We'll add concrete queries once the widget API is finalized.

##### Permissions

We've decided not to introduce new permissions for work item statuses. Instead, authorization is handled
by existing work item permissions like `read_work_item` or `update_work_item`.

This approach avoids redundant permission checks by leveraging GraphQL's higher-level query execution
for authorization, improving query performance by reducing the number of Permission checks.

Additionally, work item status-specific resolvers like `BulkStatusResolver` and `AllowedStatusesResolver`
ensure that the licensed feature is available and the feature flag is enabled before proceeding.

#### Status widget

We use the `STATUS` widget.

We already introduced the mock API using the widget name `CUSTOM_STATUS` because `STATUS` was already taken.
This legacy widget represents the verification status of requirements and should be renamed to `VERIFICATION_STATUS`.
We marked both widgets and fields as experiment in `17.9`, so we can rename them like this:

1. `STATUS` --> `VERIFICATION_STATUS` ([see MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/182520))
1. `CUSTOM_STATUS` --> `STATUS` ([see MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/183026))

#### Status migration and migration wizard

We need to migrate statuses of work items in the following cases:

1. A namespace transitions from system-defined statuses to custom statuses
1. A user applies a different lifecycle to a work item type
1. [A user creates statuses from labels or scoped labels](https://gitlab.com/gitlab-org/gitlab/-/issues/463083)
1. A status will be deleted and its assigned work items need to be migrated to a new status

We'll persist a mapping from one status to another in the database and run a job in the background
that updates the status association.

Optionally we'll also consider the mapping in list queries and include the old and new status during the migration.

We acknowledge that there might be a short time where status data is inconsistent in list views during migration.
This is especially true for namespaces with a large number of work items.

Details about the database structure and service architecture are to be defined.

### Namespaces downgrade to free tier

[We discussed implications of downtiering](https://gitlab.com/gitlab-org/gitlab/-/issues/498393#note_2294814031)
from using custom statuses to system-defined statuses.
The main takeaway is that it would introduce a decent amount of complexity to handle mapping existing
custom statuses to previously existing system-defined statuses.

Because of that [we decided that status will only be available in Premium and Ultimate tier](https://gitlab.com/gitlab-org/gitlab/-/issues/498393#note_2312781591).
When a customer transitions to the free tier, they won't see status anymore.
But we keep all status relevant data and associations and continue to do status/state transitions.
If they decide to uptier again, they'll see their custom statuses again and all work items will be in a correct status.

### Other status-like functionality

In GitLab we have entities with functionality that is comparable to work item status but represent something different
or are highly custom integrations for a specific purpose. While we have ideas on how to include these into work item
statuses, we refrain from doing so in the forseable future. Specifically we've evaluated this for:

1. **Incident paging status.** We plan to relabel this in the UI from "Status" to something else and when we migrate
   incidents to work items, we'll introduce this in a separate widget for now.
   [See this discussion for details](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/181962#note_2365911203)
1. **Requirements verification status.** We're renaming the existing `STATUS` widget to `VERIFICATION_STATUS`
   and keep the functionality separate.

### Challenges

1. Because the incidents detail view won't be migrated to the work item detail view short-term,
   status won't be available for this work item type.
   It's to be defined whether we'll work on an intermittent solution or postpone adding status
   to incidents until the migration is completed.
   [See this discussion for details](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/181962#note_2356993383)

### Feature flags and licensed feature

We'll use the feature flag `work_item_status_feature_flag` throughout the development of this feature.
The actor needs to be the root group.

For testing purposes, the feature flag is currently enabled in production for the Plan Stage testing
group called [gl-demo-ultimate-plan-stage](https://gitlab.com/gl-demo-ultimate-plan-stage).

We're using [this feature flag rollout issue](https://gitlab.com/gitlab-org/gitlab/-/issues/521286).

Since the feature will only be available in Premium and Ultimate tier, we consider it a licensed feature.
The feature name is `work_item_status`.
The name differs from the feature flag because we cannot use the same name.

### Implementation Plan

We've identified these iterations for this initiative:

#### Iteration 1

- [Iteration 1 epic](https://gitlab.com/groups/gitlab-org/-/epics/14793)
- Implement system-defined status and join model
- Make the status widget visible on Tasks only
- Implement status setting and viewing functionality
- Implement state/status transitions
- Add `/status` quick action

#### Iteration 2

- [Iteration 2 epic](https://gitlab.com/groups/gitlab-org/-/epics/14794)
- Implement custom statuses
- Board integration
- Status management (create, update, reorder, delete)
- Migration from labels to statuses
- Expand support to Issues and Epics

We'll likely release the feature after iteration 2 is completed.

#### Iteration 3

- [Iteration 3 epic](https://gitlab.com/groups/gitlab-org/-/epics/14795)
- Customizable status for all work item types
- Status available on dashboards (more complex because they can be fed by different root namespaces)
- Calculations for milestone and iteration burndown

#### Future iterations

- [Future iterations epic](https://gitlab.com/groups/gitlab-org/-/epics/16448)
- Customize lifecycles / statuses at any hierarchy level (group, subgroup project)

## Internationalization

[System-defined statuses will only use english names](https://gitlab.com/groups/gitlab-org/-/epics/14793#note_2359390868).
Customers can customize statuses to match their preferred language.

## Alternative Solutions

### Do nothing and continue to use state and labels

**Pros:**

- No change to existing workflows
- No development cost

**Cons:**

- Doesn't address customer feedback about label overuse
- Doesn't provide a first-class status integration into the product
- Limits reporting capabilities

## Resources

1. [Top level epic for this initiative](https://gitlab.com/groups/gitlab-org/-/epics/5099)
1. Designs for [list/detail/board](https://gitlab.com/gitlab-org/gitlab/-/issues/383125)
1. Designs for [status management](https://gitlab.com/gitlab-org/gitlab/-/issues/431600)
1. Designs for [status migration wizard](https://gitlab.com/gitlab-org/gitlab/-/issues/463083)
1. [Initial spike work for first iteration](https://gitlab.com/gitlab-org/gitlab/-/issues/477863)
1. [Proof of concept (POC) for system-defined and custom statuses](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/178180)

## Team

Please mention the current team in all MRs related to this document to keep everyone updated.
We don't expect everyone to approve changes.

```text
@gweaver @nickleonard @donaldcook @ntepluhina @msaleiko @aslota @deepika.guliani
```
