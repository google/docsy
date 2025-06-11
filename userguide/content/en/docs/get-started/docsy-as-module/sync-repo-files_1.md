---
title: Sync repo files
description: Operations documentation page for working with sync repo files
canonical_path: "/handbook/security/customer-support-operations/docs/sync-repo-files"
---

To manage the many components of Zendesk we work with, we utilize sync repos. These enable use to have version controlled projects containing all the data and information that makes out our Zendesk configuration.

With this, we end up with a YAML file per item (one per trigger, one per macro, etc.).

These files contain all the relevant information for that item (minus the ID value). We also strive to keep them as human-readable as possible (so it is easy to read and code).

## Auto-conversion

Through the use of the [gitlab_support_readiness gem](https://rubygems.org/gems/gitlab_support_readiness), we have several auto-conversions that occur when parsing the YAML files of our sync repos. This is to help keep things as "human-readable" as possible (and make it so we don't have to hard code IDs into our repos).

### Conditions

Applicable to:

- Automations
- SLA Policies (called `filters`, but same thing)
- Triggers
- Views

| Normal Field value | Key to edit | Text to use |
|--------------------|-------------|-------------|
| `assignee_id` | value | The user's email address |
| `brand_id` | value | The name of the brand |
| `custom_fields_######` | field | `Field: xxx`, where `xxx` is the field's `title` attribute |
| `group_id` | value | The name of the group |
| `organization_id` | value | The organization's `salesforce_id` value |
| `requester_role` | value | `Agent`, `Light Agent`, `End User`, `Admin` |
| `role` | value | `Agent` `End User`, or the user's email address |
| `satisfaction_reason_code` | value | The name of the satisfaction reason |
| `schedule_id` | value | `Schedule: xxx`, where `xxx` is the schedule's `name` attribute (or `''` if using a blank) |
| `ticket_form_id` | value | `Form: xxx`, where `xxx` is the form's `name` attribute |
| `via_id` | value | The name of the via method (see [here](https://gitlab.com/gitlab-support-readiness/gitlab_support_readiness_gem/-/blob/master/lib/support_readiness/zendesk/via_types.rb)) |

### Actions

Applicable to:

- Automations
- Macros
- Triggers

| Normal Field value | Key to edit | Text to use |
|--------------------|-------------|-------------|
| `assignee_id` | value | The user's email address |
| `brand_id` | value | The name of the brand |
| `custom_fields_######` | field | `Field: xxx`, where `xxx` is the field's `title` attribute |
| `group_id` | value | The name of the group |
| `notification_target` | value | The target's `title` attribute |
| `notification_webhook` | value | The webhook's `name` attribute |
| `organization_id` | value | The organization's `salesforce_id` value |
| `role` | value | `Agent` `End User`, or the user's email address |
| `set_schedule` | value | `Schedule: xxx`, where `xxx` is the schedule's `name` attribute (or `''` if using a blank) |
| `ticket_form_id` | value | `Form: xxx`, where `xxx` is the form's `name` attribute |

### View specific

The only view specific one is the `restrictions` attribute. You would use use the group's name or the user's email address (instead of an ID value).

### Form specific

- For the `ticket_field_ids` attribute, use the field's `title` attribute
- For the `end_user_conditions` and `agent_conditions` attributes:
  - Use the field's `title` attribute for the `parent_field_id` value
  - Use the field's `title` attribute for the `id` value under the `child_fields` attribute
