---
title: "Compliance Frameworks Scalability Review"
toc_hide: true
---

## Context

In https://gitlab.com/groups/gitlab-org/-/epics/13295 we are delivering a new experience where customer can configure their own compliance requirements through compliance frameworks and then report and enforce those requirements through the adherence report and security policies.

To accommodate large-scale implementation of compliance frameworks (1000+ projects), we must prioritize scalability and ensure the feature remains performant even under heavy workloads.

Due to the configurability and importance of these features it is critical to ensure a smooth experience and adaptability of the features.

## Proposal

- [x] Review and test the current DB ERD and [review how the DB queries will scale for large groups](#query-plan-validation) (1000+ projects)
- [x] Review the current ADRs and technical review.
- [x] [Review the effort it would take to add new controls](#implementation-of-new-controls)

## Feature Overview

- A **Compliance Framework** belongs to a **Namespace**
  - A **Framework** belongs to many **Projects** within a **Namespace**
  - A **Framework** has many **Requirements**
    - A **Requirement** is composed of a **Type** (internal or external) and **Control Expression**
      - A **Control Expression** defines the relevant setting or configuration to be checked

See [Design Details](./_index.md#design-details) for detailed ERD

## Compliance evaluation flow

_Given a namespace with two frameworks, from a high-level evaluation of a framework is performed using the following steps:_

1. A namespace setting is modified (worst case cascading and applicable to all Ultimate projects within said namespace)
1. Given _FrameworkA_, we must evaluate all projects associated to FrameworkA within the namespace
1. IDs of all associated projects are fetched and enqueued as batched background jobs to check each project's compliance status against FrameworkA's controls
1. Given _ProjectA_, within the background Sidekiq worker we fetch the project and associate data by ID.
    1. We iterate over FrameworkA's requirements to evaluate controls
    1. Entries within `project_compliance_configuration_status` are upserted with the results of the control evaluation
1. Given _FrameworkB_, we must evaluate all projects associated to FrameworkB within the namespace
1. IDs of all associated projects are fetched and enqueued as batched background jobs to check each project's compliance status against FrameworkB's controls
1. Given _ProjectA_, within the background Sidekiq worker we fetch the project and associate data by ID.
    1. We iterate over FrameworkB's requirements to evaluate controls
    1. Entries within `project_compliance_configuration_status` are upserted with the results of the control evaluation
1. Given _ProjectB_, within the background Sidekiq worker we fetch the project and associate data by ID.
    1. We iterate over FrameworkB's requirements to evaluate controls
    1. Entries within `project_compliance_configuration_status` are upserted with the results of the control evaluation

### Query plan validation

On modification of a project setting, using [feature branch](https://gitlab.com/gitlab-org/gitlab/-/compare/master...huzaifaiftikhar1_scalability_review_custom_controls).

#### 1. Retrieval of frameworks that have compliance requirements

```rb
frameworks = ComplianceManagementFramework.joins(:compliance_requirements).distinct.order(:id)
```

<details><summary>click to expand query plan</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32134/commands/99394

```sql
SELECT DISTINCT
    "compliance_management_frameworks".*
FROM
    "compliance_management_frameworks"
    INNER JOIN "compliance_requirements" ON "compliance_requirements"."framework_id" = "compliance_management_frameworks"."id"
ORDER BY
    "compliance_management_frameworks"."id" ASC
```

</details>

#### 2. Retrieval of project ID batches by associated framework

```rb
frameworks.each do |framework|
  framework.projects.each_batch(of: 100) do |project|
    ProjectComplianceEvaluatorWorker.perform_async(framework.id, project.pluck_primary_key)
  end
end
```

<details><summary>click to expand query plan</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32139/commands/99421

```sql
select
    "projects"."id"
from
    projects
    join project_compliance_framework_settings on project_compliance_framework_settings.project_id = projects.id
where
    project_compliance_framework_settings.framework_id = 1019907 OFFSET 100
LIMIT 1;
```

</details>

#### 3. Retrieval of projects and associated tables via background worker

Within a batch background worker we must fetch a batch of projects for a given framework.
We also preload all relevant associations to perform evaluations against the framework's controls.

This requires a larger initial set of queries that may include attributes we are not utilizing but prevents fan-out of redundant queries within evaluation of each Requirement's Controls.

```rb
Project.includes(
    :ci_cd_settings,
    :project_feature,
    :project_setting,
    :protected_branches,
    :security_setting
).where(id: project_ids)
```

<details><summary>Fetching projects by ID</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32139/commands/99422

```sql
SELECT
    "projects"."id",
    "projects"."name",
    "projects"."path",
    "projects"."description",
    "projects"."created_at",
    "projects"."updated_at",
    "projects"."creator_id",
    "projects"."namespace_id",
    "projects"."last_activity_at",
    "projects"."import_url",
    "projects"."visibility_level",
    "projects"."archived",
    "projects"."avatar",
    "projects"."merge_requests_template",
    "projects"."star_count",
    "projects"."merge_requests_rebase_enabled",
    "projects"."import_type",
    "projects"."import_source",
    "projects"."approvals_before_merge",
    "projects"."reset_approvals_on_push",
    "projects"."merge_requests_ff_only_enabled",
    "projects"."issues_template",
    "projects"."mirror",
    "projects"."mirror_last_update_at",
    "projects"."mirror_last_successful_update_at",
    "projects"."mirror_user_id",
    "projects"."shared_runners_enabled",
    "projects"."runners_token",
    "projects"."build_allow_git_fetch",
    "projects"."build_timeout",
    "projects"."mirror_trigger_builds",
    "projects"."pending_delete",
    "projects"."public_builds",
    "projects"."last_repository_check_failed",
    "projects"."last_repository_check_at",
    "projects"."only_allow_merge_if_pipeline_succeeds",
    "projects"."has_external_issue_tracker",
    "projects"."repository_storage",
    "projects"."repository_read_only",
    "projects"."request_access_enabled",
    "projects"."has_external_wiki",
    "projects"."ci_config_path",
    "projects"."lfs_enabled",
    "projects"."description_html",
    "projects"."only_allow_merge_if_all_discussions_are_resolved",
    "projects"."repository_size_limit",
    "projects"."printing_merge_request_link_enabled",
    "projects"."auto_cancel_pending_pipelines",
    "projects"."service_desk_enabled",
    "projects"."cached_markdown_version",
    "projects"."delete_error",
    "projects"."last_repository_updated_at",
    "projects"."disable_overriding_approvers_per_merge_request",
    "projects"."storage_version",
    "projects"."resolve_outdated_diff_discussions",
    "projects"."remote_mirror_available_overridden",
    "projects"."only_mirror_protected_branches",
    "projects"."pull_mirror_available_overridden",
    "projects"."jobs_cache_index",
    "projects"."external_authorization_classification_label",
    "projects"."mirror_overwrites_diverged_branches",
    "projects"."pages_https_only",
    "projects"."external_webhook_token",
    "projects"."packages_enabled",
    "projects"."merge_requests_author_approval",
    "projects"."pool_repository_id",
    "projects"."runners_token_encrypted",
    "projects"."bfg_object_map",
    "projects"."detected_repository_languages",
    "projects"."merge_requests_disable_committers_approval",
    "projects"."require_password_to_approve",
    "projects"."max_pages_size",
    "projects"."max_artifacts_size",
    "projects"."pull_mirror_branch_prefix",
    "projects"."remove_source_branch_after_merge",
    "projects"."marked_for_deletion_at",
    "projects"."marked_for_deletion_by_user_id",
    "projects"."autoclose_referenced_issues",
    "projects"."suggestion_commit_message",
    "projects"."project_namespace_id",
    "projects"."hidden",
    "projects"."organization_id"
FROM
    "projects"
WHERE
    "projects"."id" IN (13083, 13764, 14022, 14288, 14289, 16648, 19776, 20085, 20086, 20699, 23081, 27470, 27726, 29286, 36743, 72724, 74823, 83282, 98024, 116212, 140724, 143237, 145205, 150440, 227582, 250324, 250833, 278964, 280425, 375711, 387896, 413007, 430285, 443787, 444821, 455030, 480929, 554859, 593728, 629054, 629060, 684698, 730448, 734943, 747741, 766015, 818896, 876090, 887372, 928825, 931715, 998792, 1075790, 1120019, 1209837, 1265999, 1329047, 1379171, 1441932, 1470839, 1533158, 1777822, 1794617, 1911766, 1990920, 2009901, 2127625, 2317465, 2337675, 2347063, 2383700, 2651596, 2670515, 2694799, 2725567, 2890326, 2953390, 3010986, 3010998, 3094319, 3101096, 3305972, 3466815, 3588247, 3605985, 3631141, 3651684, 3662568, 3662668, 3674569, 3698388, 3871132, 3871556, 3885956, 3885980, 3933206, 3933372, 3991945, 4108541, 4121724)
```

</details>

<details><summary>Fetching project_ci_cd_settings by project ID</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32139/commands/99423

```sql
SELECT "project_ci_cd_settings".* FROM "project_ci_cd_settings" WHERE "project_ci_cd_settings"."project_id" IN (13083, 13764, 14022, 14288, 14289, 16648, 19776, 20085, 20086, 20699, 23081, 27470, 27726, 29286, 36743, 72724, 74823, 83282, 98024, 116212, 140724, 143237, 145205, 150440, 227582, 250324, 250833, 278964, 280425, 375711, 387896, 413007, 430285, 443787, 444821, 455030, 480929, 554859, 593728, 629054, 629060, 684698, 730448, 734943, 747741, 766015, 818896, 876090, 887372, 928825, 931715, 998792, 1075790, 1120019, 1209837, 1265999, 1329047, 1379171, 1441932, 1470839, 1533158, 1777822, 1794617, 1911766, 1990920, 2009901, 2127625, 2317465, 2337675, 2347063, 2383700, 2651596, 2670515, 2694799, 2725567, 2890326, 2953390, 3010986, 3010998, 3094319, 3101096, 3305972, 3466815, 3588247, 3605985, 3631141, 3651684, 3662568, 3662668, 3674569, 3698388, 3871132, 3871556, 3885956, 3885980, 3933206, 3933372, 3991945, 4108541, 4121724)
```

</details>

<details><summary>Fetching project_features by project ID</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32139/commands/99424

```sql
SELECT "project_features".* FROM "project_features" WHERE "project_features"."project_id" IN (13083, 13764, 14022, 14288, 14289, 16648, 19776, 20085, 20086, 20699, 23081, 27470, 27726, 29286, 36743, 72724, 74823, 83282, 98024, 116212, 140724, 143237, 145205, 150440, 227582, 250324, 250833, 278964, 280425, 375711, 387896, 413007, 430285, 443787, 444821, 455030, 480929, 554859, 593728, 629054, 629060, 684698, 730448, 734943, 747741, 766015, 818896, 876090, 887372, 928825, 931715, 998792, 1075790, 1120019, 1209837, 1265999, 1329047, 1379171, 1441932, 1470839, 1533158, 1777822, 1794617, 1911766, 1990920, 2009901, 2127625, 2317465, 2337675, 2347063, 2383700, 2651596, 2670515, 2694799, 2725567, 2890326, 2953390, 3010986, 3010998, 3094319, 3101096, 3305972, 3466815, 3588247, 3605985, 3631141, 3651684, 3662568, 3662668, 3674569, 3698388, 3871132, 3871556, 3885956, 3885980, 3933206, 3933372, 3991945, 4108541, 4121724)
```

</details>

<details><summary>Fetching project_security_settings by project ID</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32139/commands/99425

```sql
SELECT "project_security_settings".* FROM "project_security_settings" WHERE "project_security_settings"."project_id" IN (13083, 13764, 14022, 14288, 14289, 16648, 19776, 20085, 20086, 20699, 23081, 27470, 27726, 29286, 36743, 72724, 74823, 83282, 98024, 116212, 140724, 143237, 145205, 150440, 227582, 250324, 250833, 278964, 280425, 375711, 387896, 413007, 430285, 443787, 444821, 455030, 480929, 554859, 593728, 629054, 629060, 684698, 730448, 734943, 747741, 766015, 818896, 876090, 887372, 928825, 931715, 998792, 1075790, 1120019, 1209837, 1265999, 1329047, 1379171, 1441932, 1470839, 1533158, 1777822, 1794617, 1911766, 1990920, 2009901, 2127625, 2317465, 2337675, 2347063, 2383700, 2651596, 2670515, 2694799, 2725567, 2890326, 2953390, 3010986, 3010998, 3094319, 3101096, 3305972, 3466815, 3588247, 3605985, 3631141, 3651684, 3662568, 3662668, 3674569, 3698388, 3871132, 3871556, 3885956, 3885980, 3933206, 3933372, 3991945, 4108541, 4121724)
```

</details>

<details><summary>Fetching project_settings by project ID</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32139/commands/99426

```sql
EXPLAIN SELECT "project_settings"."project_id", "project_settings"."created_at", "project_settings"."updated_at", "project_settings"."push_rule_id", "project_settings"."show_default_award_emojis", "project_settings"."allow_merge_on_skipped_pipeline", "project_settings"."squash_option", "project_settings"."has_confluence", "project_settings"."has_vulnerabilities", "project_settings"."prevent_merge_without_jira_issue", "project_settings"."cve_id_request_enabled", "project_settings"."mr_default_target_self", "project_settings"."previous_default_branch", "project_settings"."warn_about_potentially_unwanted_characters", "project_settings"."merge_commit_template", "project_settings"."has_shimo", "project_settings"."squash_commit_template", "project_settings"."legacy_open_source_license_available", "project_settings"."target_platforms", "project_settings"."enforce_auth_checks_on_uploads", "project_settings"."selective_code_owner_removals", "project_settings"."show_diff_preview_in_email", "project_settings"."suggested_reviewers_enabled", "project_settings"."only_allow_merge_if_all_status_checks_passed", "project_settings"."issue_branch_template", "project_settings"."mirror_branch_regex", "project_settings"."allow_pipeline_trigger_approve_deployment", "project_settings"."emails_enabled", "project_settings"."pages_unique_domain_enabled", "project_settings"."pages_unique_domain", "project_settings"."runner_registration_enabled", "project_settings"."product_analytics_instrumentation_key", "project_settings"."product_analytics_data_collector_host", "project_settings"."cube_api_base_url", "project_settings"."encrypted_cube_api_key", "project_settings"."encrypted_cube_api_key_iv", "project_settings"."encrypted_product_analytics_configurator_connection_string", "project_settings"."encrypted_product_analytics_configurator_connection_string_iv", "project_settings"."pages_multiple_versions_enabled", "project_settings"."allow_merge_without_pipeline", "project_settings"."duo_features_enabled", "project_settings"."require_reauthentication_to_approve", "project_settings"."observability_alerts_enabled", "project_settings"."spp_repository_pipeline_access" FROM "project_settings" WHERE "project_settings"."project_id" IN (13083, 13764, 14022, 14288, 14289, 16648, 19776, 20085, 20086, 20699, 23081, 27470, 27726, 29286, 36743, 72724, 74823, 83282, 98024, 116212, 140724, 143237, 145205, 150440, 227582, 250324, 250833, 278964, 280425, 375711, 387896, 413007, 430285, 443787, 444821, 455030, 480929, 554859, 593728, 629054, 629060, 684698, 730448, 734943, 747741, 766015, 818896, 876090, 887372, 928825, 931715, 998792, 1075790, 1120019, 1209837, 1265999, 1329047, 1379171, 1441932, 1470839, 1533158, 1777822, 1794617, 1911766, 1990920, 2009901, 2127625, 2317465, 2337675, 2347063, 2383700, 2651596, 2670515, 2694799, 2725567, 2890326, 2953390, 3010986, 3010998, 3094319, 3101096, 3305972, 3466815, 3588247, 3605985, 3631141, 3651684, 3662568, 3662668, 3674569, 3698388, 3871132, 3871556, 3885956, 3885980, 3933206, 3933372, 3991945, 4108541, 4121724)
```

</details>

<details><summary>Fetching approval_rules by project_id</summary>

For `at_least_two_approvals` or any other control related to approval rule

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32134/commands/99302

```sql
SELECT
    SUM(approvals_required)
FROM
    "approval_project_rules"
WHERE
    "approval_project_rules"."project_id" = 1
LIMIT 1
```

</details>

<details><summary>Fetching protected_branches by project_id</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32134/commands/99303

```sql
SELECT
    "protected_branches".*
FROM (
    SELECT
        "protected_branches".*
    FROM
        "protected_branches"
    WHERE
        "protected_branches"."project_id" = 1) protected_branches
```

</details>

<details><summary>Fetching namespace by namespace_id</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32134/commands/99304

```sql
SELECT
    "namespaces"."id",
    "namespaces"."name",
    "namespaces"."path",
    "namespaces"."owner_id",
    "namespaces"."created_at",
    "namespaces"."updated_at",
    "namespaces"."type",
    "namespaces"."description",
    "namespaces"."avatar",
    "namespaces"."membership_lock",
    "namespaces"."share_with_group_lock",
    "namespaces"."visibility_level",
    "namespaces"."request_access_enabled",
    "namespaces"."ldap_sync_status",
    "namespaces"."ldap_sync_error",
    "namespaces"."ldap_sync_last_update_at",
    "namespaces"."ldap_sync_last_successful_update_at",
    "namespaces"."ldap_sync_last_sync_at",
    "namespaces"."description_html",
    "namespaces"."lfs_enabled",
    "namespaces"."parent_id",
    "namespaces"."shared_runners_minutes_limit",
    "namespaces"."repository_size_limit",
    "namespaces"."require_two_factor_authentication",
    "namespaces"."two_factor_grace_period",
    "namespaces"."cached_markdown_version",
    "namespaces"."project_creation_level",
    "namespaces"."runners_token",
    "namespaces"."file_template_project_id",
    "namespaces"."saml_discovery_token",
    "namespaces"."runners_token_encrypted",
    "namespaces"."custom_project_templates_group_id",
    "namespaces"."auto_devops_enabled",
    "namespaces"."extra_shared_runners_minutes_limit",
    "namespaces"."last_ci_minutes_notification_at",
    "namespaces"."last_ci_minutes_usage_notification_level",
    "namespaces"."subgroup_creation_level",
    "namespaces"."max_pages_size",
    "namespaces"."max_artifacts_size",
    "namespaces"."mentions_disabled",
    "namespaces"."default_branch_protection",
    "namespaces"."max_personal_access_token_lifetime",
    "namespaces"."push_rule_id",
    "namespaces"."shared_runners_enabled",
    "namespaces"."allow_descendants_override_disabled_shared_runners",
    "namespaces"."traversal_ids",
    "namespaces"."organization_id"
FROM
    "namespaces"
WHERE
    "namespaces"."type" = 'Group'
    AND "namespaces"."id" = 22
LIMIT 1
```

</details>

#### 4. Retrieval of Compliance Requirements for given framework

<details><summary>click to expand query plan</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32139/commands/99427

```sql
SELECT
    "compliance_requirements".*
FROM
    "compliance_requirements"
WHERE
    "compliance_requirements"."framework_id" = 1020460
```

</details>

#### 5. For each requirement, evaluate control_expressions against project

Given all required associations are preloaded initially, all control expression evaluation happens in-memory requiring no lookups

```rb
projects.each do |project|
  framework.compliance_requirements.each do |req|
    ComplianceManagement::ComplianceRequirement::QueryEvaluator.new(Gitlab::Json.parse(req.control_expression), project).evaluate
  end
end
```

**Query plan: none**

#### 6. Persistence of project compliance status

After evaluating the control_expression to true/false we can insert the result in `project_compliance_configuration_status` which produces the following SQL

<details><summary>click to expand query plan</summary>

https://console.postgres.ai/gitlab/gitlab-production-main/sessions/32134/commands/99315

```sql
INSERT INTO "project_compliance_configuration_status" ("created_at", "updated_at", "project_id", "namespace_id", "compliance_requirement_id", "status")
    VALUES ('2024-09-27 20:28:14.097687', '2024-09-27 20:28:14.097687', 20, 31, 15, 1)
RETURNING
    "id"
```

</details>

#### 7. Rendering of Project Compliance Configuration Status dashboard

We need to fetch the rows from project_compliance_configuration_status table to display on the dashboard, these queries would be very similar to the existing query for fetching records from project_compliance_standards_adherence.

<details><summary>click to expand query plan</summary>

</details>

## Trigger conditions

There are two paths by which a framework evaluation could be enqueued: via setting modification or via time.

When a namespace setting is modified, for example, jobs may be enqueued to re-evaluate the namespace's frameworks against their applicable projects. Similarly, when a project setting is modified, a job is enqueued to re-evaluate the project against its applicable frameworks.

The main disadvantage with an event-based trigger is that we have to maintain an extensive map of possible trigger points. This can be difficult to scale, requires special code for [any newly-added controls](#implementation-of-new-controls), and prone to breakage or inadvertent removal.

Additionally, some controls may be impossible to tie to event-based reconciliation. In such cases, a control expression must be evaluated on a recurring cadence; i.e. checking to ensure vulnerabilities are triaged within an anticipated SLO. In these cases the framework must trigger a re-evaluation frequently.

For this reason, the decision was made to use a cron-based approach to perform recurring project compliance evaluations while triggering one-time executions when frameworks are first applied to projects.

See [ADR 004](./decisions/004_time_based_triggers.md) for more on this decision.

## Implementation of new controls

[Custom controls](decisions/003_custom_controls.md) are composed of two components which must both be implemented to add new controls:

1. Condition Name for use within control expressions
1. Condition Evaluator

To implement new controls we must define a condition name that generally maps to a GitLab-native entity (i.e. a specific project setting). This control must be defined within the `compliance_requirement_expression` JSON schema as a valid expression enumeration.

To implement a condition evaluator, code must be added to the query evaluator for determining whether a project is compliant with the condition. This requires a custom implementation per control category to perform a boolean evaluation of a specific compliance requirement.

### Control category

New control additions must consider the required data to perform an evaluation. There is number of prerequisite tables that are automatically loaded for evalution (see example in [Retrieval of projects and associated tables via background worker](#3-retrieval-of-projects-and-associated-tables-via-background-worker)) that generally correspond to base requirements for each group of query evaluators. When requiring a new control against `security_settings`, for example, such a base class as `ComplianceManagement::SecuritySettingConditionEvaluator` can be extended to ensure all data is loaded and evaluated uniformally.

### Example

Example addition of an additional `project settings` field with a new condition schema and evaluator

```patch
diff --git a/ee/app/validators/json_schemas/compliance_requirement_expression.json b/ee/app/validators/json_schemas/compliance_requirement_expression.json
index 2716c9e702b2..f8f454368a76 100644
--- a/ee/app/validators/json_schemas/compliance_requirement_expression.json
+++ b/ee/app/validators/json_schemas/compliance_requirement_expression.json
@@ -56,6 +56,7 @@
             "project_name",
             "project_visibility",
             "remove_approvals_when_new_commits_are_added",
+            "project_disable_overriding_approvers_per_merge_request",
             "minimum_approvals_required"
           ]
         },
@@ -120,6 +121,7 @@
                 "enum": [
                   "default_branch_protected",
                   "remove_approvals_when_new_commits_are_added",
+                  "project_disable_overriding_approvers_per_merge_request",
                   "at_least_two_approvals",
                   "prevent_approval_by_merge_request_committers",
                   "prevent_approval_by_merge_request_author"
diff --git a/ee/lib/compliance_management/compliance_requirement/query_evaluator.rb b/ee/lib/compliance_management/compliance_requirement/query_evaluator.rb
index 669565880e93..393563dead8a 100644
--- a/ee/lib/compliance_management/compliance_requirement/query_evaluator.rb
+++ b/ee/lib/compliance_management/compliance_requirement/query_evaluator.rb
@@ -85,6 +85,8 @@ def get_field_value(field)
           @project.visibility
         when 'remove_approvals_when_new_commits_are_added'
           @project.reset_approvals_on_push
+        when 'project_disable_overriding_approvers_per_merge_request'
+          @project.disable_overriding_approvers_per_merge_request
         when 'minimum_approvals_required'
           @project.approval_rules.pick("SUM(approvals_required)") || 0
         else
```

## Constraints

| Consideration | Constraint |
| ------ | ------ |
| Project applicability | Ultimate projects with associated Framework |
| Limit on frameworks per project | 20 |
| Limit on total requirements per framework | 50 |
| Limit on total controls per requirement | 5 |
| Limit on total fields per control expression | 5 |
| Allowed fields belonging to control expressions | Bounded allowlist tied to applicable schema |
| Control expressions query complexity| Files is non-user modifiable outside of configuration UI and subject to schema validation |
| Compliance validation frequency | 12hrs |

## References

- https://gitlab.com/gitlab-org/software-supply-chain-security/compliance/general/-/issues/233
- https://handbook.gitlab.com/handbook/engineering/architecture/design-documents/compliance-adherence-reporting/
