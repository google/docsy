---
owning-stage: "~devops::tenant scale"
title: "Cells ADR 014: Clusterwide syncing for Cells 1.0"
toc_hide: true
---

## Context

In order for some features to work, the data for some
[clusterwide](https://docs.gitlab.com/ee/development/cells/#choose-either-the-gitlab_main_cell-or-gitlab_main_clusterwide-schema)
tables needs to be synchronized in some way to all cells.
For example, the `plans`, `subscription_add_ons`, and `work_item_types` tables do need to be the same across all cells.

## Decision

1. Static data tables, like `plans` do not need synchronization, but rather
   converted to be always consistent by being hard-coded in application code.
   A good example is
   [VisibilityLevel](https://gitlab.com/gitlab-org/gitlab/-/blob/5ae43dface737373c50798ccd909174bcdd9b664/lib/gitlab/visibility_level.rb#L25-27).
1. Cluster Setting tables, like `application_settings` can be synchronized independently.
   An external source of truth like
   [Terraform](https://gitlab.com/gitlab-org/gitlab/-/issues/505685) will
   propogate the desired values for each [ring](../infrastructure/_index.md#rings) of cells.
1. To support this synchronization, an internal API is required for each Cluster Setting
   table.

## Pros

1. We can avoid work to prevent writes on follower cells, and setup syncing service, and creating APIs to update each Static data type table.
1. We reduce consistency risks. If for any reason, the syncing fails, the application might
   start producing corrupt data. For example creating `gitlab_subscriptions` with bad
   `plan_id` values. If we replace `plan_id` column to use a globally unique
   reference instead, we will not have any consistency risk.
1. No need to create a leader/follower topology between cells/databases and no need to keep clusters in quorum.
1. Each cell is still fully isolated and doesn't depend on one another.

## Cons

1. For Cluster settings, we will need to tolerate a small amount of time where
   there may be configuration drift.
1. For Static data tables, there may be downstream services that depend on these
   data. So we will need to wait for an application change to fully propogate
   through all rings first, before updating any downstream service to use the
   new data.

## Analysis of clusterwide tables

An analysis of clusterwide tables was performed on 2025-01-13.
The result is that we can categorized into 4 different types:

1. Static data table. Tables which are constant / exactly the same for all cells.
1. Cluster Setting table. Tables which host settings which needs to affect all
   cells.
1. Organization / Cell table. Tables which may be better categorized as
   `gitlab_main_cell`.
1. User table. Tables related to users, and can be synchronized later in Cells 1.5+
   (not Cells 1.0).

This [section](#tables) lists the full list of tables to the different types.

### Cluster Setting tables

#### application_settings

See related issue: [issue 505685](https://gitlab.com/gitlab-org/gitlab/-/issues/505685).

In short, we will use an external source of truth
to synchronize each cell's Application Settings.

As a migration step, we will need to first obtain the current values from
the Legacy Cell, to copy to our external source of truth.
The external source of truth will then propgate the value to each ring.

When creating a setting, developers need to ensure that the default for the
setting will work correctly for any Cell.
This applies especially when the new setting has not had a chance to be
synchronized yet with the external source of truth.

#### broadcast_messages

Similar to `application_settings`, broadcast messages will be synchronized by
an external source of truth.

The `broadcast_messages.id` column is referred to by the
`user_broadcast_message_dismissals` table - it is used to record if a user has
dismissed a broadcast message. To improve consistency, the synchronization may
set the value of the `broadcast_messages.id` directly.

### Static data tables

Convert reference tables to be in application code instead.

#### plans

The plans table is a simple table with `id`, `name`, and `title` columns.
It also has a unique index on the `name` column.
There are two referencing tables, `plan_limits` and `gitlab_subscriptions`.

The problem is that each Cell could create in-consistent data where
the `name` does not match `id` in all cells.

The solution is simple.
We need a globally unique reference for each plan.
We can have the following enum:

```ruby
  enum :name_uid,
    default: 1,
    free: 2,
    bronze: 3,
    silver: 4,
    premium: 5,
    gold: 6,
    ultimate: 7,
    ultimate_trial: 8,
    ultimate_trial_paid_customer: 9,
    premium_trial: 10,
    opensource: 11
```

And drop the `id` column.
We will then use the new `name_uid` column in all
referencing tables.

Another alternative is to drop the `plans` table entirely, and use a hard-coded
list of plans.

#### subscription_add_ons

The `subscription_add_ons` table is also a simple table with `id`, `name`, and
`description` columns.
Again, it has a unique index on the `name` column.

Similar to the `plans`, we can either use a `name_uid` column strategy, or drop
the table entirely.

#### work_item_types

The `work_item_types` table was re-organized to have a
[constant set of IDs](https://gitlab.com/groups/gitlab-org/-/epics/15272).

Unless there are reasons not to, we should convert further to use a hard-coded
list of work item types.

#### abuse_report_labels

This table `abuse_report_labels` has several columns:

- `id`
- `cached_markdown_version`
- `title`
- `color`
- `description`
- `description_html`

There is a unique index for the `title` column.

There is no conceptual need to synchronize this table between each Cell.
Abuse reports are independent records.
`abuse_report_labels` are labels which are attached to abuse reports.

The only problem arises when `abuse_report_labels` are moved between Cells,
leading to uniqueness violations for the `title` column.
The simplest measure is to drop the uniqueness constraint, and allow duplicates.

Alternatively, we can append `(Cell 2)` to the title to de-duplicate.

#### programming_languages

The `programming_languages` table is a table with `id`, `name`, and `color`
columns.
The table has a unique index on the `name` column.

Similar to the `plans`, we can adopt the `name_uid` column strategy, and drop the
`id` column.
As the data comes from Gitaly (linguist), we will need to map the
`name` to an integer in a way that is stable.
This mapping can be stored on either the GitLab Ruby monolith, or in Gitaly.

<https://gitlab.com/gitlab-org/gitlab/-/blob/816e3ce6770ad96e3d5b0d7dae4925d63efa02fc/vendor/languages.yml>
has the full list of languages.
We can possibly use the `language_id` field.

All referencing tables will be switched to refer to the `name_uid`
column instead.

#### security_training_providers

The `security_training_providers` table has a few columns:

- `id`
- `name`
- `description`
- `url`
- `logo_url`

There is a unique index on `name`.

Similar to the `plans`, we can adopt the `name_uid` column strategy, and drop the
`id` column.
All referencing tables will be switched to refer to the `name_uid`
column instead.

However, as there are only three rows, we can drop the table entirely instead,
and use in-application code instead.

```ruby
SECUREFLAG_DATA = {
  name_uid: 1,
  name: 'SecureFlag',
  description: "Get remediation advice with example code and recommended hands-on labs in a fully
                interactive virtualised environment.",
  url: "https://knowledge-base-api.secureflag.com/gitlab"
}.freeze
```

### Organization / Cell tables

These tables are likely mis-categorized as `gitlab_main_clusterwide`, and need
to be classificed as `gitlab_main_cell` instead.

### User tables

These tables are related to the `users` table.

As Users can only exist on one cell in Cells 1.0, there is no need to
synchronize any user related data until Cells 1.5+

## Tables

This lists all clusterwide tables and its type.

| Table                                                     | Static data table | Cluster Setting table | Organization/cell table | User table | Rows Present in new GDK |
|-----------------------------------------------------------|-----------------|------------------------|-------------------------|------------|-------------------------|
| ai_feature_settings                                       |                 | Y                      | Maybe ?                 |            | N                       |
| ai_settings                                               |                 | Y                      |                         |            | N                       |
| appearances                                               |                 | Y                      |                         |            | N                       |
| application_settings                                      |                 | Y                      |                         |            | Y                       |
| cloud_connector_access                                    |                 | Y                      |                         |            | N                       |
| plan_limits                                               |                 | Y                      |                         |            | N                       |
| service_access_tokens                                     |                 | Y                      |                         |            | N                       |
| ai_self_hosted_models                                     |                 | Y                      | Maybe ?                 |            | N                       |
| application_setting_terms                                 |                 | Y                      |                         |            | N                       |
| broadcast_messages                                        |                 | Y                      | Maybe ?                 |            | N                       |
| licenses                                                  |                 | Y                      |                         |            | N                       |
| plans                                                     | Y               |                        |                         |            | Y                       |
| subscription_add_ons                                      | Y               |                        |                         |            | Y                       |
| work_item_hierarchy_restrictions                          | Y               |                        |                         |            | Y                       |
| work_item_related_link_restrictions                       | Y               |                        |                         |            | Y                       |
| work_item_types                                           | Y               |                        |                         |            | Y                       |
| work_item_widget_definitions                              | Y               |                        |                         |            | Y                       |
| abuse_events                                              |                 |                        |                         | Y          | N                       |
| abuse_report_assignees                                    |                 |                        |                         | Y          | N                       |
| abuse_report_events                                       |                 |                        |                         | Y          | N                       |
| abuse_report_label_links                                  |                 |                        |                         | Y          | Y                       |
| abuse_report_labels                                       |                 |                        |                         | Y          | Y                       |
| abuse_report_notes                                        |                 |                        |                         | Y          | N                       |
| abuse_report_user_mentions                                |                 |                        |                         | Y          | N                       |
| abuse_reports                                             |                 |                        |                         | Y          | Y                       |
| abuse_trust_scores                                        |                 |                        |                         | Y          | N                       |
| ai_testing_terms_acceptances                              |                 |                        | Maybe                   |            | N                       |
| atlassian_identities                                      |                 |                        |                         | Y          | N                       |
| audit_events_instance_amazon_s3_configurations            |                 |                        | Maybe                   |            | N                       |
| audit_events_instance_external_audit_event_destinations   |                 |                        | Maybe                   |            | N                       |
| audit_events_instance_external_streaming_destinations     |                 |                        | Maybe                   |            | N                       |
| audit_events_instance_google_cloud_logging_configurations |                 |                        | Maybe                   |            | N                       |
| audit_events_instance_streaming_event_type_filters        |                 |                        | Maybe                   |            | N                       |
| audit_events_streaming_instance_event_type_filters        |                 |                        | Maybe                   |            | N                       |
| authentication_events                                     |                 |                        |                         | Y          | Y                       |
| aws_roles                                                 |                 |                        |                         | Y          | N                       |
| banned_users                                              |                 |                        |                         | Y          | N                       |
| deploy_tokens                                             |                 |                        |                         | Y          | N                       |
| early_access_program_tracking_events                      |                 |                        |                         | Y          | N                       |
| emails                                                    |                 |                        |                         | Y          | Y                       |
| ghost_user_migrations                                     |                 |                        |                         | Y          | N                       |
| gpg_key_subkeys                                           |                 |                        |                         | Y          | N                       |
| gpg_keys                                                  |                 |                        |                         | Y          | N                       |
| identities                                                |                 |                        |                         | Y          | N                       |
| instance_audit_events                                     |                 |                        | Maybe                   |            | N                       |
| instance_audit_events_streaming_headers                   |                 |                        | Maybe                   |            | N                       |
| instance_integrations                                     |                 |                        | Maybe                   |            | N                       |
| keys                                                      |                 |                        |                         | Y          | Y                       |
| oauth_applications                                        |                 |                        | Maybe                   |            | N                       |
| programming_languages                                     | Y               |                        | Maybe                   |            | Y                       |
| redirect_routes                                           |                 |                        | Y                       |            | N                       |
| routes                                                    |                 |                        | Y                       |            | Y                       |
| saved_replies                                             |                 |                        |                         | Y          | N                       |
| security_training_providers                               | Y               |                        | Maybe                   |            | Y                       |
| smartcard_identities                                      |                 |                        |                         | Y          | N                       |
| spam_logs                                                 |                 |                        |                         | Y          | Y                       |
| term_agreements                                           |                 |                        |                         | Y          | N                       |
| user_agent_details                                        |                 |                        |                         | Y          | N                       |
| user_audit_events                                         |                 |                        |                         | Y          | Y                       |
| user_broadcast_message_dismissals                         |                 |                        |                         | Y          | N                       |
| user_callouts                                             |                 |                        |                         | Y          | N                       |
| user_credit_card_validations                              |                 |                        |                         | Y          | N                       |
| user_custom_attributes                                    |                 |                        |                         | Y          | N                       |
| user_details                                              |                 |                        |                         | Y          | Y                       |
| user_follow_users                                         |                 |                        |                         | Y          | N                       |
| user_highest_roles                                        |                 |                        |                         | Y          | N                       |
| user_member_roles                                         |                 |                        |                         | Y          | N                       |
| user_permission_export_uploads                            |                 |                        |                         | Y          | N                       |
| user_phone_number_validations                             |                 |                        |                         | Y          | N                       |
| user_preferences                                          |                 |                        |                         | Y          | Y                       |
| user_statuses                                             |                 |                        |                         | Y          | N                       |
| user_synced_attributes_metadata                           |                 |                        |                         | Y          | N                       |
| users                                                     |                 |                        |                         | Y          | Y                       |
| users_statistics                                          |                 |                        |                         | Y          | N                       |
| vs_code_settings                                          |                 |                        |                         | Y          | N                       |
| webauthn_registrations                                    |                 |                        |                         | Y          | N                       |
