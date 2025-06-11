---
title: "Compliance Frameworks ADR 001: Triggering Checks"
toc_hide: true
---

## Context

We need to offer compliance tools to enable our customers to know if they adhere to certain rules, standards,
regulations, and guidelines. For this we need to create checks within GitLab that can be related to the software
development standards, frameworks, regulations or laws in the industry.

## Approach

We thought of the following approaches for creating the concept of checks within GitLab:

1. [Use Audit Events as Checks](#use-audit-events-as-checks)
1. [Use Audit Events as trigger points for creating Checks](#use-audit-events-as-trigger-points-for-creating-checks)
1. [Use Sidekiq workers for creating and updating Checks](#use-sidekiq-workers-for-creating-and-updating-checks) (selected approach)

### Example

Let us assume that we have a compliance check called "Prevent approval by merge request authors". To comply with this
check, we must prevent users from approving their own merge requests.

All the three approaches discussed below ensures that the status of the check is updated whenever the setting to
prevent users from approving their own merge request is modified.

### Use Audit Events as Checks

In this approach we planned to directly use the existing Audit Events that are stored in the database as checks.

As an example, consider that Merge Request Approval Settings to prevent approval by merge request author is enabled.
This means that we have ensured that a merge request author cannot approve their own merge request.

On the compliance standards adherence dashboard, we planned to directly fetch the last audit event related to that
compliance check and would display the compliance status accordingly.

To further understand this, consider the [example](#example) above, we would query the audit events table to get the
latest audit event that updated the merge request approval settings to prevent approval by merge request author.

#### Advantages

1. No need for creating new database tables for storing checks.
1. Audit events serving as the single source of truth for adherence to compliance standards.

#### Disadvantages

1. Currently, querying audit events table is already quite slow because of the large size of the database.
1. Not all the audit events are stored consistently, hence we would need to parse the JSON column `details` of the
`audit_events` table to get the details of the event.
1. Due to the above reasons, this approach would result in poor performance in terms of loading the compliance
standards dashboard.

### Use Audit Events as trigger points for creating Checks

In this approach we planned to create a separate database table for storing the results of checks.

The status of these checks would be derived from the audit events via database triggers or Active Record callbacks.

To further understand this, consider the [example](#example) above, whenever a new audit event is created, we would
check if that audit event is related to merge request approval settings being modified. We would create or update the
status of the check in the database accordingly.

#### Advantages

1. No need to query the audit events database table as the approach is event based.
1. Audit events serving as the single source of truth for adherence to compliance standards.
1. Increase code readability as the logic for creating checks would be at a single place.

#### Disadvantages

1. We would have to write separate logic for handling streaming only audit events as these audit events are not
stored in the database and therefore the hooks won't get triggered for such audit events.
1. In case of any changes in the existing business logic to audit events will also require changes to the checks.
1. We also plan to [move audit events to ClickHouse](https://gitlab.com/groups/gitlab-org/-/epics/10241) which might
require re-work on this feature as we don't know how callbacks or database triggers would work after the migration
to ClickHouse.

### Use Sidekiq workers for creating and updating Checks

In this approach we completely decoupled audit events with the checks. The checks would get created via Sidekiq
workers in the background.

These workers would get enqueued whenever a related setting is toggled.

Consider the above [example](#example), we would enqueue the Sidekiq worker responsible for creating checks whenever
the setting related to merge request approvals is updated. The sidekiq worker would fetch the updated value of merge
request approval setting in the background and would create or update the result of this check for the given project
in the database.

#### Advantages

1. This is a modular approach thus allowing us to modify the business logic independently.
1. Changes to the implementation of audit events will not impact these checks.

#### Disadvantages

1. Maintenance of additional background worker. In case of Redis failures we could miss events, however, we do have the
option of [refreshing](https://docs.gitlab.com/ee/api/graphql/reference/#mutationrefreshstandardsadherencechecks) check
status for all the projects in a group.
1. Audit events cannot be used as the single source of truth for these checks, however, a user can correlate the status
of the check with the audit events.

## Decision

The decision was made to use sidekiq workers for creating results of checks for a project.

The database table for storing the results is `project_compliance_standards_adherence` and has the following
schema:

 ```mermaid
    classDiagram
        class project_compliance_standards_adherence
        project_compliance_standards_adherence : id bigint
        project_compliance_standards_adherence : created_at timestamp
        project_compliance_standards_adherence : updated_at timestamp
        project_compliance_standards_adherence : project_id bigint
        project_compliance_standards_adherence : namespace_id bigint
        project_compliance_standards_adherence : check_name smallint
        project_compliance_standards_adherence : status smallint
```

`check_name` is Enum and contains values like "prevent_approval_by_merge_request_author",
"prevent_approval_by_merge_request_committers", "at_least_two_approvals", etc.

`status` can have values "success" or "fail" denoting the status of that compliance adherence check for a project.

This table is used to display the status of checks for projects on the compliance adherence dashboard.
