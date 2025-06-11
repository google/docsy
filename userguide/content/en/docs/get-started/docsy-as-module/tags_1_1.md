---
title: Tags
description: Support Operations documentation page for Zendesk tags
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/tags"
---

## What are Zendesk tags?

As per
[Zendesk](https://support.zendesk.com/hc/en-us/articles/203662096-About-tags):

> Tags are words, or combinations of words, you can use to add more context to
> tickets and topics. You can apply tags to tickets, users, and organizations.

At its core, Zendesk relies on tags pretty heavily. As such, it is best to fully
understand the tags used and how they correlate to what Zendesk does to the
ticket.

As there are many, many tags, and new ones get added frequently, we will not
list them all out here. Instead, here are the ones likely to be the most
important to those working within Zendesk:

## Zendesk Global common tags

<details>
<summary>SLA Related Tags</summary>

| Tag                 | What it means |
|---------------------|---------------|
| `starter`           | Signifies the ticket is using a Starter plan, granting Standard SLA on Support tickets |
| `premium`           | Signifies the ticket is using a Premium plan, granting Priority SLA on Support tickets |
| `ultimate`          | Signifies the ticket is using a Ultimate plan, granting Priority SLA on Support tickets |
| `bronze`            | Signifies the ticket is using a Bronze plan, granting Standard SLA on Support tickets |
| `silver`            | Signifies the ticket is using a Silver plan, granting Priority SLA on Support tickets |
| `gold`              | Signifies the ticket is using a Gold plan, granting Priority SLA on Support tickets |
| `priority_prospect` | Signifies the ticket is from a prospect who has been temporarily granted Standard SLA on Support tickets |
| `free_customer`     | Signifies the ticket is from a non-paying end-user. This means they receive no SLA on Support Tickets |
| `missing_sla_tag`   | This means the ticket is missing any form of SLA tagging. As this is a problem, this tag applies a Standard SLA |
| `low`               | Signifies the ticket as a Low priority, thus granting it bare-level support SLAs for Support tickets with Priority SLA |
| `medium`            | Signifies the ticket as a Normal priority, thus granting it mid-level support SLAs for Support tickets with Priority SLA |
| `high`              | Signifies the ticket as a High priority, thus granting it high level support SLAs for Support tickets with Priority SLA |
| `urgent`            | Signifies the ticket is an emergency request |
| `prospect`          | Signifies the ticket is from a prospect. This means they receive no SLA on Support Tickets |
| `trial`             | Signifies the ticket is from a non-paying end-user using the trial system. This means they receive no SLA on Support Tickets |
| `consumption_only`  | Signifies the ticket is a consumption ticket |

</details>
<details>
<summary>Account Related Tags</summary>

| Tag                   | What it means |
|-----------------------|---------------|
| `customer`            | Signifies the ticket is from an account labeled as Customer |
| `former_customer`     | Signifies the ticket is from an account labeled as Former Customer |
| `authorized_reseller` | Signifies the ticket is from an account labeled as Authorized Reseller |
| `integrator`          | Signifies the ticket is from an account labeled as Integrator |
| `partner`             | Signifies the ticket is from an account labeled as Partner |
| `unofficial_reseller` | Signifies the ticket is from an account labeled as Unofficial Reseller |
| `open_partner`        | Signifies the ticket is from an account labeled as Open Partner |
| `select_partner`      | Signifies the ticket is from an account labeled as Select Partner |
| `alliance_partner`    | Signifies the ticket is from an account labeled as Alliance Partner |

</details>
<details>
<summary>Organization Tags</summary>

| Tag                            | What it means |
|--------------------------------|---------------|
| `greatly_expired`              | The organization is slated to be removed due to data rentention policies |
| `not_in_sfdc`                  | The organization is not being controlled by the ZD-SFDC sync |
| `partner_customer`             | The organization has purchased from an OEM partner |
| `restricted_account`           | The SFDC account is classified as restricted and cannot receive support |
| `sub_community_other`          | The organization has a community subscription which had an undetectable type |
| `sub_consumption_ai`           | The organization has an AI subscription |
| `sub_consumption_cicd_minutes` | The organization has a CI/CD minutes purchase |
| `sub_consumption_eap`          | The organization has an Agile Planning addon |
| `sub_consumption_storage`      | The organization has a storage purchase |
| `sub_dotcom_bronze`            | The organization has a gitlab.com Bronze subscription |
| `sub_dotcom_premium`           | The organization has a gitlab.com Premium subscription |
| `sub_dotcom_ultimate`          | The organization has a gitlab.com Ultimate subscription |
| `sub_edu`                      | The organization has an EDU community subscription |
| `sub_gitlab_dedicated`         | The organization has a GitLab Dedicated subscription |
| `sub_oss`                      | The organization has an OSS subscription |
| `sub_other`                    | The organization has a subscription but the type could not be determined |
| `sub_proserv`                  | The organization has a Proserv subscription |
| `sub_sm_premium`               | The organization has a Self-Managed Premium subscription |
| `sub_sm_starter`               | The organization has a Self-Managed Starter subscription |
| `sub_sm_ultimate`              | The organization has a Self-Managed Ultimate subscription |
| `sub_ss_ase`                   | The organization has an Assigned Support Engineer addon |
| `sub_usgov_12x5`               | The organization has a US Government 12x5 subscription |
| `sub_usgov_24x7`               | The organization has a US Government 24x7 subscription |

</details>
<details>
<summary>Categorization tags</summary>

| Tag                                                        | What it means                                                                             |
|------------------------------------------------------------|-------------------------------------------------------------------------------------------|
| `lnr_category_cdot`                                        | The L&R ticket involves customers.gitlab.com                                              |
| `lnr_category_other`                                       | The L&R ticket's category is unknown                                                      |
| `lnr_category_purchasing_issues`                           | The L&R ticket involves purchasing issues                                                 |
| `lnr_category_qsr`                                         | The L&R ticket involves QSR                                                               |
| `lnr_category_saas`                                        | The L&R ticket involves saas issues                                                       |
| `lnr_category_sm`                                          | The L&R ticket involves self-managed issues                                               |
| `lnr_category_special_program`                             | The L&R ticket involves GitLab special programs (EDU, OSS, etc.)                          |
| `lnr_category_trial`                                       | The L&R ticket involves GitLab trials                                                     |
| `lnr_cdot_contacts`                                        | The L&R ticket involves customers.gitlab.com account contacts                             |
| `lnr_cdot_login`                                           | The L&R ticket involves customers.gitlab.com login issues                                 |
| `lnr_cdot_other`                                           | The L&R ticket involves customers.gitlab.com in some way                                  |
| `lnr_cdot_transfer`                                        | The L&R ticket involves customers.gitlab.com account transfers                            |
| `lnr_purchasing_issues_cc_issues`                          | The L&R ticket involves CC issues when purchasing                                         |
| `lnr_purchasing_issues_non_cc_issues`                      | The L&R ticket involves non-CC issues when purchasing                                     |
| `lnr_purchasing_issues_other`                              | The L&R ticket involves some other purchasing issue                                       |
| `lnr_qsr_dispute`                                          | The L&R ticket involves a QSR dispute                                                     |
| `lnr_qsr_other`                                            | The L&R ticket involves something else about QSR                                          |
| `lnr_qsr_questions`                                        | The L&R ticket involves QSR questions                                                     |
| `lnr_saas_link_sub`                                        | The L&R ticket involves linking a subscription to a namespace                             |
| `lnr_saas_other`                                           | The L&R ticket involves something else about saas subscriptions                           |
| `lnr_saas_seat_usage`                                      | The L&R ticket involves namespace seat usage                                              |
| `lnr_saas_sub_issues`                                      | The L&R ticket involves an issue with a saas subscription                                 |
| `lnr_sm_cloud_opt_out`                                     | The L&R ticket involves opting out of SCL                                                 |
| `lnr_sm_did_not_receive`                                   | The L&R ticket involves not receiving a SM license                                        |
| `lnr_sm_license_errors`                                    | The L&R ticket involves errors applying a SM license                                      |
| `lnr_sm_other`                                             | The L&R ticket involves something else about SM licenses                                  |
| `lnr_sm_resend_to_new_contact`                             | The L&R ticket involves sending a license to a new contact                                |
| `lnr_sm_seat_usage`                                        | The L&R ticket involves seat usage on a SM instance                                       |
| `lnr_special_programs_other`                               | The L&R ticket involves something else about special programs                             |
| `lnr_special_programs_questions`                           | The L&R ticket involves general questions about special programs                          |
| `lnr_special_programs_renew`                               | The L&R ticket involves renewing a special program offerring                              |
| `lnr_special_programs_sheerid`                             | The L&R ticket involves issues appying a SheerID                                          |
| `lnr_trial_cannot_apply`                                   | The L&R ticket involves not being able to apply a trial                                   |
| `lnr_trial_cannot_start`                                   | The L&R ticket involves not being able to start a trial                                   |
| `lnr_trial_other`                                          | The L&R ticket involves something else about trials                                       |
| `lnr_trial_questions`                                      | The L&R ticket involves general trial questions                                           |
| `resold_status_no`                                         | The customer has stated they did not buy via a reseller                                   |
| `resold_status_reseller`                                   | The customer has stated they are a reseller                                               |
| `resold_status_resold`                                     | The customer has stated they did buy via a reseller                                       |
| `resold_status_unsure`                                     | The customer is unsure if they bought via a reseller or not                               |
| `saas_account_2fa_issues_questions`                        | The gitlab.com Account ticket involves 2FA questions                                      |
| `saas_account_2fa_issues_removal`                          | The gitlab.com Account ticket involves 2FA removal                                        |
| `saas_account_2fa_issues_setup`                            | The gitlab.com Account ticket involves 2FA setup                                          |
| `saas_account_access_issues_blocked`                       | The gitlab.com Account ticket involves getting account blocked errors                     |
| `saas_account_access_issues_cannot_login`                  | The gitlab.com Account ticket involves not being able to login to gitlab.com              |
| `saas_account_access_issues_change_account`                | The gitlab.com Account ticket involves changing something on a gitlab.com account         |
| `saas_account_access_issues_cloudflare`                    | The gitlab.com Account ticket involves CloudFlare issues                                  |
| `saas_account_access_issues_ip_blocked`                    | The gitlab.com Account ticket involves the customer's IP being blocked                    |
| `saas_account_access_issues_locked`                        | The gitlab.com Account ticket involves getting account locked errors                      |
| `saas_account_access_issues_other`                         | The gitlab.com Account ticket involves something else about accessing gitlab.com          |
| `saas_account_category_2fa_issues`                         | The gitlab.com Account ticket involves 2FA                                                |
| `saas_account_category_access_issues`                      | The gitlab.com Account ticket involves accessing gitlab.com                               |
| `saas_account_category_account_deletion`                   | The gitlab.com Account ticket involves account deletion                                   |
| `saas_account_category_email_issues`                       | The gitlab.com Account ticket involves email issues                                       |
| `saas_account_category_namesquatting`                      | The gitlab.com Account ticket involves namesquatting                                      |
| `saas_account_category_other`                              | The gitlab.com Account ticket something else                                              |
| `saas_account_category_registration_issues`                | The gitlab.com Account ticket involves registering a gitlab.com account                   |
| `saas_account_email_issues_confirmation`                   | The gitlab.com Account ticket involves confirmation emails                                |
| `saas_account_email_issues_notifications`                  | The gitlab.com Account ticket involves notification emails                                |
| `saas_account_email_issues_reset`                          | The gitlab.com Account ticket involves password reset emails                              |
| `support_administering_gitlab_admin_area`                  | The Support ticket involves the GitLab admin area                                         |
| `support_administering_gitlab_admin_area_instance`         | The Support ticket                                                                        |
| `support_administering_gitlab_admin_area_limits`           | The Support ticket account limits and settings in the GitLab admin area                   |
| `support_administering_gitlab_admin_area_other`            | The Support ticket something else about the GitLab admin area                             |
| `support_administering_gitlab_admin_area_questions`        | The Support ticket involves GitLab admin area questions                                   |
| `support_administering_gitlab_admin_area_user_group`       | The Support ticket involves user/group management in the GitLab admin area                |
| `support_administering_gitlab_backups`                     | The Support ticket involves backups                                                       |
| `support_administering_gitlab_backups_create`              | The Support ticket involves creating backups                                              |
| `support_administering_gitlab_backups_manage`              | The Support ticket involves managing backups                                              |
| `support_administering_gitlab_backups_other`               | The Support ticket involves something else about backups                                  |
| `support_administering_gitlab_backups_restore`             | The Support ticket involves restores                                                      |
| `support_administering_gitlab_other`                       | The Support ticket something else about administering a GitLab instance                   |
| `support_administering_gitlab_securing`                    | The Support ticket involves securing the GitLab instance                                  |
| `support_administering_gitlab_securing_2fa`                | The Support ticket involves enforcing 2FA on a SM instance                                |
| `support_administering_gitlab_securing_compliance`         | The Support ticket involves compliance features                                           |
| `support_administering_gitlab_securing_email_confirmation` | The Support ticket involves user email confirmation                                       |
| `support_administering_gitlab_securing_exclusivity`        | The Support ticket involves infromation exclusivity                                       |
| `support_administering_gitlab_securing_incidents`          | The Support ticket involves responding to security incidents                              |
| `support_administering_gitlab_securing_jobs`               | The Support ticket involves the security of running jobs                                  |
| `support_administering_gitlab_securing_other`              | The Support ticket involves something else about securing the GitLab instance             |
| `support_administering_gitlab_securing_proxying`           | The Support ticket involves proxy assets                                                  |
| `support_administering_gitlab_securing_rate_limits`        | The Support ticket involves rate limits                                                   |
| `support_administering_gitlab_securing_ssh_keys`           | The Support ticket involves limtis on SSH keys                                            |
| `support_administering_gitlab_securing_token`              | The Support ticket involves token overview                                                |
| `support_administering_gitlab_securing_webhooks`           | The Support ticket involves webhook administration                                        |
| `support_administering_gitlab_upgrades_component`          | The Support ticket involves upgrading SM components                                       |
| `support_administering_gitlab_upgrades_database`           | The Support ticket involves upgrading SM databases                                        |
| `support_administering_gitlab_upgrades_major`              | The Support ticket involves performing major version upgrades                             |
| `support_administering_gitlab_upgrades_minor`              | The Support ticket involves performing minor version upgrades                             |
| `support_administering_gitlab_upgrades_other`              | The Support ticket involves something else about upgrading GitLab                         |
| `support_administering_gitlab_upgrading`                   | The Support ticket involves upgrading GitLab                                              |
| `support_analyze_usage_audits`                             | The Support ticket involves Audit Events                                                  |
| `support_analyze_usage_cicd`                               | The Support ticket involves CI/CD analytics                                               |
| `support_analyze_usage_code_review`                        | The Support ticket involves Code Review Analytics                                         |
| `support_analyze_usage_contribution`                       | The Support ticket involves Contribution Analytics                                        |
| `support_analyze_usage_errors`                             | The Support ticket involves errors with analytic tools                                    |
| `support_analyze_usage_group_devops`                       | The Support ticket involves Group DevOps Adoption                                         |
| `support_analyze_usage_insights`                           | The Support ticket involves Insights                                                      |
| `support_analyze_usage_issues`                             | The Support ticket involves Issue analytics                                               |
| `support_analyze_usage_mrs`                                | The Support ticket involves Merge request analytics                                       |
| `support_analyze_usage_other`                              | The Support ticket involves something else about analyzing GitLab usage                   |
| `support_analyze_usage_other_topic`                        | The Support ticket involves something else about analytic tools                           |
| `support_analyze_usage_productivity`                       | The Support ticket involves Productivity Analytics                                        |
| `support_analyze_usage_questions`                          | The Support ticket involves questions about analytic tools                                |
| `support_analyze_usage_respository`                        | The Support ticket involves Repository Analytics                                          |
| `support_analyze_usage_setup`                              | The Support ticket involves setup of analytic tools                                       |
| `support_analyze_usage_value_stream`                       | The Support ticket involves Value stream analytics                                        |
| `support_auth_alicloud`                                    | The Support ticket involves AliCloud                                                      |
| `support_auth_atlassian_crowd`                             | The Support ticket involves Atlassian Crowd                                               |
| `support_auth_atlassian_omniauth`                          | The Support ticket involves Atlassian Omniauth                                            |
| `support_auth_auth0`                                       | The Support ticket involves Auth0 OmniAuth                                                |
| `support_auth_authentiq`                                   | The Support ticket involves Authentiq OmniAuth                                            |
| `support_auth_aws_cognito`                                 | The Support ticket involves Amazon Web Services Cognito                                   |
| `support_auth_azure`                                       | The Support ticket involves Azure OAuth OmniAuth                                          |
| `support_auth_bitbucket`                                   | The Support ticket involves Bitbucket cloud OmniAuth                                      |
| `support_auth_cas`                                         | The Support ticket involves CAS OmniAuth                                                  |
| `support_auth_facebook`                                    | The Support ticket involves Facebook OAuth 2.0                                            |
| `support_auth_generic`                                     | The Support ticket involves Generic OAuth2 Provider                                       |
| `support_auth_github`                                      | The Support ticket involves GitHub OmniAuth                                               |
| `support_auth_gitlab`                                      | The Support ticket involves GitLab.com OmniAuth                                           |
| `support_auth_google`                                      | The Support ticket involves Google OAuth 2.0 OmniAuth                                     |
| `support_auth_issues_errors`                               | The Support ticket involves errors using an authentication method                         |
| `support_auth_jwt`                                         | The Support ticket involves JWT OmniAuth                                                  |
| `support_auth_kerberos`                                    | The Support ticket involves Kerberos Auth integration                                     |
| `support_auth_ldap`                                        | The Support ticket involves LDAP                                                          |
| `support_auth_oauth_service_provider`                      | The Support ticket involves OAuth service provider                                        |
| `support_auth_openid_connect`                              | The Support ticket involves OpenID Connect OmniAuth                                       |
| `support_auth_other`                                       | The Support ticket involves some other authentication method                              |
| `support_auth_questions`                                   | The Support ticket involves questions about an authentication method                      |
| `support_auth_salesforce`                                  | The Support ticket involves Salesforce OmniAuth                                           |
| `support_auth_saml`                                        | The Support ticket involves SAML                                                          |
| `support_auth_scim`                                        | The Support ticket involves SCIM                                                          |
| `support_auth_setup_configuration`                         | The Support ticket involves setting up an authentication method                           |
| `support_auth_smartcard`                                   | The Support ticket involves Smartcard authentication                                      |
| `support_auth_sync_issues`                                 | The Support ticket involves sync issues using an authentication method                    |
| `support_auth_topic_other`                                 | The Support ticket involves something else with an authentication method                  |
| `support_auth_twitter`                                     | The Support ticket involves Twitter OAuth                                                 |
| `support_auth_vault`                                       | The Support ticket involves Vault Authentication with OpenID                              |
| `support_category_administering_gitlab`                    | The Support ticket involves Administering GitLab                                          |
| `support_category_analyze_usage`                           | The Support ticket involves Analyzing GitLab usage                                        |
| `support_category_auth`                                    | The Support ticket involves Authentication and Authorization                              |
| `support_category_cicd`                                    | The Support ticket involves CI/CD                                                         |
| `support_category_deployments`                             | The Support ticket involves Deployments                                                   |
| `support_category_gitlab_duo`                              | The Support ticket involves GitLab Duo                                                    |
| `support_category_instance_management`                     | The Support ticket involves Instance Management                                           |
| `support_category_integrations`                            | The Support ticket involves Integrations                                                  |
| `support_category_manage_infra`                            | The Support ticket involves Managing infrastructure via GitLab                            |
| `support_category_monitoring`                              | The Support ticket involves Monitoring                                                    |
| `support_category_other`                                   | The Support ticket involves something else                                                |
| `support_category_packages`                                | The Support ticket involves Packages and Registries                                       |
| `support_category_performance`                             | The Support ticket involves Performance                                                   |
| `support_category_project_group_management`                | The Support ticket involves Project/Group management                                      |
| `support_category_runners`                                 | The Support ticket involves Runners                                                       |
| `support_category_secure`                                  | The Support ticket involves Secure                                                        |
| `support_category_upgrade_assistance`                      | The Support ticket involves upgrading assistance                                          |
| `support_category_usage_quotas`                            | The Support ticket involves Usage quotes                                                  |
| `support_cicd_artifacts`                                   | The Support ticket involves CI/CD artifacts                                               |
| `support_cicd_artifacts_creation_topic`                    | The Support ticket involves CI/CD artifact creation                                       |
| `support_cicd_artifacts_errors_topic`                      | The Support ticket involves CI/CD artifact errors                                         |
| `support_cicd_artifacts_management_topic`                  | The Support ticket involves CI/CD artifact management                                     |
| `support_cicd_artifacts_other_topic`                       | The Support ticket involves something else about CI/CD artifacts                          |
| `support_cicd_artifacts_questions_topic`                   | The Support ticket involves CI/CD artifact questions                                      |
| `support_cicd_autodevops`                                  | The Support ticket involves CI/CD AutoDevOps                                              |
| `support_cicd_autodevops_errors`                           | The Support ticket involves CI/CD AutoDevOps errors                                       |
| `support_cicd_autodevops_other`                            | The Support ticket involves something else about CI/CD AutoDevOps                         |
| `support_cicd_autodevops_questions`                        | The Support ticket involves CI/CD AutoDevOps questions                                    |
| `support_cicd_autodevops_setup`                            | The Support ticket involves CI/CD AutoDevOps setup                                        |
| `support_cicd_cache`                                       | The Support ticket involves CI/CD cache                                                   |
| `support_cicd_cache_creation`                              | The Support ticket involves CI/CD cache creation                                          |
| `support_cicd_cache_errors`                                | The Support ticket involves CI/CD cache errors                                            |
| `support_cicd_cache_management`                            | The Support ticket involves CI/CD cache management                                        |
| `support_cicd_cache_other`                                 | The Support ticket involves something else concerning CI/CD cache                         |
| `support_cicd_cache_questions`                             | The Support ticket involves CI/CD cache questions                                         |
| `support_cicd_ci_file`                                     | The Support ticket involves the CI/CD file                                                |
| `support_cicd_ci_file_errors`                              | The Support ticket involves CI/CD file errors                                             |
| `support_cicd_ci_file_other`                               | The Support ticket involves something else concernign the CI/CD file                      |
| `support_cicd_ci_file_questions`                           | The Support ticket involves CI/CD file questions                                          |
| `support_cicd_ci_file_setup`                               | The Support ticket involves CI/CD file setup                                              |
| `support_cicd_deployments`                                 | The Support ticket involves CI/CD deployments                                             |
| `support_cicd_deployments_environments`                    | The Support ticket involves CI/CD deployment environments                                 |
| `support_cicd_deployments_feature_flags`                   | The Support ticket involves CI/CD deployment feature flags                                |
| `support_cicd_deployments_releases`                        | The Support ticket involves CI/CD deployment releases                                     |
| `support_cicd_deployments_review_apps`                     | The Support ticket involves CI/CD deployment review apps                                  |
| `support_cicd_jobs`                                        | The Support ticket involves CI/CD jobs                                                    |
| `support_cicd_jobs_errors`                                 | The Support ticket involves CI/CD job errors                                              |
| `support_cicd_jobs_other`                                  | The Support ticket involves something else concerning CI/CD jobs                          |
| `support_cicd_jobs_questions`                              | The Support ticket involves CI/CD job questions                                           |
| `support_cicd_jobs_setup`                                  | The Support ticket involves CI/CD job setup                                               |
| `support_cicd_other`                                       | The Support ticket involves something else with CI/CD                                     |
| `support_cicd_pipelines`                                   | The Support ticket involves CI/CD pipelines                                               |
| `support_cicd_pipelines_errors`                            | The Support ticket involves CI/CD pipeline errors                                         |
| `support_cicd_pipelines_merge_trains`                      | The Support ticket involves CI/CD merge trains                                            |
| `support_cicd_pipelines_multiproject`                      | The Support ticket involves CI/CD multiproject pipelines                                  |
| `support_cicd_pipelines_other`                             | The Support ticket involves something else concerning CI/CD pipelines                     |
| `support_cicd_pipelines_questions`                         | The Support ticket involves CI/CD pipeline questions                                      |
| `support_cicd_pipelines_schedules`                         | The Support ticket involves CI/CD pipeline schedules                                      |
| `support_cicd_pipelines_setup`                             | The Support ticket involves CI/CD pipeline setup                                          |
| `support_cicd_pipelines_triggers`                          | The Support ticket involves CI/CD pipeline triggers                                       |
| `support_cicd_variables`                                   | The Support ticket involves CI/CD variables                                               |
| `support_cicd_variables_ci_file`                           | The Support ticket involves CI/CD file variables                                          |
| `support_cicd_variables_group`                             | The Support ticket involves CI/CD group variables                                         |
| `support_cicd_variables_project`                           | The Support ticket involves CI/CD project variables                                       |
| `support_cicd_variables_schedules`                         | The Support ticket involves CI/CD schedule variables                                      |
| `support_deployments_deployments`                          | The Support ticket involves deployments                                                   |
| `support_deployments_envs`                                 | The Support ticket involves deployment environments                                       |
| `support_deployments_errors`                               | The Support ticket involves deployment errors                                             |
| `support_deployments_feature_flags`                        | The Support ticket involves deployment feature flags                                      |
| `support_deployments_other`                                | The Support ticket involves something else concerning deployments                         |
| `support_deployments_other_topic`                          | The Support ticket involves something else concerning deployments                         |
| `support_deployments_protected_envs`                       | The Support ticket involves deployment protected environments                             |
| `support_deployments_questions`                            | The Support ticket involves deployment questions                                          |
| `support_deployments_releases`                             | The Support ticket involves deployment releases                                           |
| `support_deployments_review_apps`                          | The Support ticket involves deployment review apps                                        |
| `support_deployments_rollouts`                             | The Support ticket involves deployment rollouts                                           |
| `support_deployments_setup`                                | The Support ticket involves deployment setup                                              |
| `support_gitlab_duo_chat`                                  | The Support ticket involves GitLab Duo chat                                               |
| `support_gitlab_duo_code_suggestions`                      | The Support ticket involves GitLab Duo code suggestions                                   |
| `support_gitlab_duo_errors_topic`                          | The Support ticket involves GitLab Duo errors                                             |
| `support_gitlab_duo_generated_response_topic`              | The Support ticket involves GitLab Duo responses                                          |
| `support_gitlab_duo_integrations_topic`                    | The Support ticket involves GitLab Duo integrations                                       |
| `support_gitlab_duo_licensing_topic`                       | The Support ticket involves GitLab Duo licening                                           |
| `support_gitlab_duo_mr_summary`                            | The Support ticket involves GitLab Duo merge request summaries                            |
| `support_gitlab_duo_other`                                 | The Support ticket involves GitLab Duo                                                    |
| `support_gitlab_duo_other_topic`                           | The Support ticket involves GitLab Duo                                                    |
| `support_gitlab_duo_questions_topic`                       | The Support ticket involves GitLab Duo questions                                          |
| `support_gitlab_duo_reviewers`                             | The Support ticket involves GitLab Duo reviewers                                          |
| `support_gitlab_duo_suggestion_accuracy`                   | The Support ticket involves GitLab Duo suggestion accuracy                                |
| `support_gitlab_duo_tests`                                 | The Support ticket involves GitLab Duo tests                                              |
| `support_gitlab_duo_vulnerabilities`                       | The Support ticket involves GitLab Duo vulnerabilities                                    |
| `support_gitlab_setup_topic`                               | The Support ticket involves GitLab Duo setup                                              |
| `support_instance_management_configuration_backups`        | The Support ticket involves configuring backups                                           |
| `support_instance_management_configuration_database`       | The Support ticket involves configuring databases                                         |
| `support_instance_management_configuration_grafana`        | The Support ticket involves configuring grafana                                           |
| `support_instance_management_configuration_lfs`            | The Support ticket involves configuring LFS                                               |
| `support_instance_management_configuration_logs`           | The Support ticket involves configuring logs                                              |
| `support_instance_management_configuration_mattermost`     | The Support ticket involves configuring mattermost                                        |
| `support_instance_management_configuration_nginx`          | The Support ticket involves configuring nginx                                             |
| `support_instance_management_configuration_object_storage` | The Support ticket involves configuring object storage                                    |
| `support_instance_management_configuration_other`          | The Support ticket involves something else about configuration                            |
| `support_instance_management_configuration_packages`       | The Support ticket involves configuring packages                                          |
| `support_instance_management_configuration_prometheus`     | The Support ticket involves configuring prometheus                                        |
| `support_instance_management_configuration_puma`           | The Support ticket involves configuring puma                                              |
| `support_instance_management_configuration_redis`          | The Support ticket involves configuring puma                                              |
| `support_instance_management_configuration_smtp`           | The Support ticket involves configuring smtp                                              |
| `support_instance_management_configuration_ssl`            | The Support ticket involves configuring SSLs                                              |
| `support_instance_management_configure`                    | The Support ticket involves configuration                                                 |
| `support_instance_management_geo`                          | The Support ticket involves Geo                                                           |
| `support_instance_management_geo_other`                    | The Support ticket involves something else about Geo                                      |
| `support_instance_management_geo_primary`                  | The Support ticket involves Geo primary nodes                                             |
| `support_instance_management_geo_replication`              | The Support ticket involves Geo replication                                               |
| `support_instance_management_geo_secondary`                | The Support ticket involves Geo secondary nodes                                           |
| `support_instance_management_helm`                         | The Support ticket Helm                                                                   |
| `support_instance_management_helm_exporter`                | The Support ticket Helm exporter                                                          |
| `support_instance_management_helm_gitaly`                  | The Support ticket Helm gitaly                                                            |
| `support_instance_management_helm_global`                  | The Support ticket Helm global                                                            |
| `support_instance_management_helm_grafana`                 | The Support ticket Helm grafana                                                           |
| `support_instance_management_helm_mailroom`                | The Support ticket Helm mailroom                                                          |
| `support_instance_management_helm_nginx`                   | The Support ticket Helm nginx                                                             |
| `support_instance_management_helm_object_storage`          | The Support ticket Helm oject storage                                                     |
| `support_instance_management_helm_other`                   | The Support ticket something else about Helm                                              |
| `support_instance_management_helm_pages`                   | The Support ticket using Pages with Helm                                                  |
| `support_instance_management_helm_postgresql`              | The Support ticket Helm postgresql                                                        |
| `support_instance_management_helm_praefect`                | The Support ticket Helm praefect                                                          |
| `support_instance_management_helm_rails`                   | The Support ticket Helm rails                                                             |
| `support_instance_management_helm_registry`                | The Support ticket Helm registry                                                          |
| `support_instance_management_helm_secrets`                 | The Support ticket Helm secrets                                                           |
| `support_instance_management_helm_shell`                   | The Support ticket Helm shell                                                             |
| `support_instance_management_helm_sidekiq`                 | The Support ticket Helm sidekiq                                                           |
| `support_instance_management_helm_spamcheck`               | The Support ticket Helm spamcheck                                                         |
| `support_instance_management_helm_toolbox`                 | The Support ticket Helm toolbox                                                           |
| `support_instance_management_helm_webservice`              | The Support ticket Helm webservice                                                        |
| `support_instance_management_install`                      | The Support ticket involves installing GitLab                                             |
| `support_instance_management_install_cloud`                | The Support ticket involves installing GitLab via Cloud                                   |
| `support_instance_management_install_docker`               | The Support ticket involves installing GitLab via Docker                                  |
| `support_instance_management_install_omnibus`              | The Support ticket involves installing GitLab via Omnibus                                 |
| `support_instance_management_install_source`               | The Support ticket involves installing GitLab via source code                             |
| `support_instance_management_migrate`                      | The Support ticket involves migrating GitLab                                              |
| `support_instance_management_migrate_other`                | The Support ticket involves migrating GitLab in some way                                  |
| `support_instance_management_migrate_to_ce`                | The Support ticket involves migrating GitLab to CE                                        |
| `support_instance_management_migrate_to_ee`                | The Support ticket involves migrating GitLab to EE                                        |
| `support_instance_management_migrate_to_helm`              | The Support ticket involves migrating GitLab to Helm                                      |
| `support_instance_management_migrate_to_omnibus`           | The Support ticket involves migrating GitLab to Omnibus                                   |
| `support_instance_management_other`                        | The Support ticket involves something else about instance management                      |
| `support_integrations_akismet`                             | The Support ticket involves integratiig Akismet                                           |
| `support_integrations_datadog`                             | The Support ticket involves integratiig datadog                                           |
| `support_integrations_elasticsearch`                       | The Support ticket involves integratiig elasticsearch                                     |
| `support_integrations_external_trackers`                   | The Support ticket involves integratiig external issue trackers                           |
| `support_integrations_external_trackers_bugzilla`          | The Support ticket involves integratiig bugzilla                                          |
| `support_integrations_external_trackers_ibm`               | The Support ticket involves integratiig IBM issue tracker                                 |
| `support_integrations_external_trackers_other`             | The Support ticket involves integratiig some other issue tracker                          |
| `support_integrations_external_trackers_redmine`           | The Support ticket involves integratiig redmine                                           |
| `support_integrations_external_trackers_youtrack`          | The Support ticket involves integratiig youtrack                                          |
| `support_integrations_external_trackers_zentao`            | The Support ticket involves integratiig zentao                                            |
| `support_integrations_general_errors`                      | The Support ticket errors integrating something into GitLab                               |
| `support_integrations_general_other`                       | The Support ticket something else about integrating something into GitLab                 |
| `support_integrations_general_questions`                   | The Support ticket questions integrating something into GitLab                            |
| `support_integrations_general_setup`                       | The Support ticket setting up an integration into GitLab                                  |
| `support_integrations_gitpod`                              | The Support ticket involves integratiig gitpod                                            |
| `support_integrations_gmail`                               | The Support ticket involves integratiig gmail buttons                                     |
| `support_integrations_jira`                                | The Support ticket involves integratiig Jira                                              |
| `support_integrations_jira_app`                            | The Support ticket involves integratiig the Jira app                                      |
| `support_integrations_jira_dev_panel`                      | The Support ticket involves integratiig the Jira dev panel                                |
| `support_integrations_jira_dvcs`                           | The Support ticket involves integratiig Jira DVCS                                         |
| `support_integrations_jira_other`                          | The Support ticket involves integratiig Jira in some way                                  |
| `support_integrations_kroki`                               | The Support ticket involves integratiig kroki                                             |
| `support_integrations_mailgun`                             | The Support ticket involves integratiig mailgun                                           |
| `support_integrations_other`                               | The Support ticket involves integratiig something                                         |
| `support_integrations_pim`                                 | The Support ticket involves integratiig Pproject Integration Management                   |
| `support_integrations_plantuml`                            | The Support ticket involves integratiig plantuml                                          |
| `support_integrations_project_`                            | The Support ticket involves integratiig something into a project                          |
| `support_integrations_project_asana`                       | The Support ticket involves integratiig asana                                             |
| `support_integrations_project_bamboo`                      | The Support ticket involves integratiig bamboo                                            |
| `support_integrations_project_discord`                     | The Support ticket involves integratiig discord                                           |
| `support_integrations_project_emails_on_push`              | The Support ticket involves integratiig emails on push                                    |
| `support_integrations_project_github`                      | The Support ticket involves integratiig github                                            |
| `support_integrations_project_google_chat`                 | The Support ticket involves integratiig google chat                                       |
| `support_integrations_project_irker`                       | The Support ticket involves integratiig irker                                             |
| `support_integrations_project_jenkins`                     | The Support ticket involves integratiig jenkins                                           |
| `support_integrations_project_mattermost`                  | The Support ticket involves integratiig mattermost                                        |
| `support_integrations_project_ms_teams`                    | The Support ticket involves integratiig MS teams                                          |
| `support_integrations_project_other`                       | The Support ticket involves integratiig something else                                    |
| `support_integrations_project_pivotal`                     | The Support ticket involves integratiig pivotal                                           |
| `support_integrations_project_prometheus`                  | The Support ticket involves integratiig prometheus                                        |
| `support_integrations_project_slack`                       | The Support ticket involves integratiig slack                                             |
| `support_integrations_project_status_emails`               | The Support ticket involves integratiig status emails                                     |
| `support_integrations_project_unify_circuit`               | The Support ticket involves integratiig unify circuit                                     |
| `support_integrations_project_webex`                       | The Support ticket involves integratiig webex                                             |
| `support_integrations_project_webhooks`                    | The Support ticket involves integratiig webhooks                                          |
| `support_integrations_recaptcha`                           | The Support ticket involves integratiig recaptcha                                         |
| `support_integrations_sourcegraph`                         | The Support ticket involves integratiig sourcegraph                                       |
| `support_integrations_trllo`                               | The Support ticket involves integratiig trello                                            |
| `support_integrations_visual_studio`                       | The Support ticket involves integratiig visual studio                                     |
| `support_manage_infra_clusters`                            | The Support ticket involves managing infrastructure via GitLab using clusters             |
| `support_manage_infra_clusters_agent`                      | The Support ticket involves the k8s agent                                                 |
| `support_manage_infra_clusters_connect`                    | The Support ticket invovles connecting to clusters                                        |
| `support_manage_infra_clusters_create`                     | The Support ticket involves creating clusters                                             |
| `support_manage_infra_clusters_errors`                     | The Support ticket involves errors with clusters                                          |
| `support_manage_infra_clusters_gitops`                     | The Support ticket involves gitops and clusters                                           |
| `support_manage_infra_clusters_migrate`                    | The Support ticket involves migrating clusters                                            |
| `support_manage_infra_clusters_other`                      | The Support ticket involves something else about clusters                                 |
| `support_manage_infra_clusters_vulnerability_scanning`     | The Support ticket involves cluster vulnerability scanning                                |
| `support_manage_infra_code`                                | The Support ticket involves managing infrastructure via code                              |
| `support_manage_infra_code_errors`                         | The Support ticket involves errors when managing infrastructure via code                  |
| `support_manage_infra_code_other`                          | The Support ticket involves something else about managing infrastructure via code         |
| `support_manage_infra_code_questions`                      | The Support ticket involves questions about managing infrastructure via code              |
| `support_manage_infra_code_setup`                          | The Support ticket involves setting up managing infrastructure via code                   |
| `support_manage_infra_code_tf_integration`                 | The Support ticket involves terraform integrations when managing infrastructure via code  |
| `support_manage_infra_code_tf_state`                       | The Support ticket involves terraform state issues when managing infrastructure via code  |
| `support_manage_infra_other`                               | The Support ticket involves something else about manageing infrastructure                 |
| `support_manage_infra_runbooks`                            | The Support ticket involves runbooks                                                      |
| `support_manage_infra_runbooks_errors`                     | The Support ticket involves runbooks errors                                               |
| `support_manage_infra_runbooks_other`                      | The Support ticket involves something else about runbooks                                 |
| `support_manage_infra_runbooks_questions`                  | The Support ticket involves runbooks questions                                            |
| `support_manage_infra_runbooks_setup`                      | The Support ticket involves runbooks setup                                                |
| `support_monitoring_error_tracking`                        | The Support ticket involves Error Tracking                                                |
| `support_monitoring_general_errors`                        | The Support ticket involves monitoring errors                                             |
| `support_monitoring_general_other`                         | The Support ticket involves something else about monitoring                               |
| `support_monitoring_general_questions`                     | The Support ticket involves monitoring questions                                          |
| `support_monitoring_general_setup`                         | The Support ticket involves monitoring setup                                              |
| `support_monitoring_incidents`                             | The Support ticket involves incidents                                                     |
| `support_monitoring_incidents_alerts`                      | The Support ticket involves incident alerts                                               |
| `support_monitoring_incidents_escalations`                 | The Support ticket involves incident  escalations                                         |
| `support_monitoring_incidents_incidents`                   | The Support ticket involves incident  management                                          |
| `support_monitoring_incidents_oncall`                      | The Support ticket involves incident oncall                                               |
| `support_monitoring_incidents_other`                       | The Support ticket involves something else about incidents                                |
| `support_monitoring_incidents_paging`                      | The Support ticket involves incident paging                                               |
| `support_monitoring_incidents_status_page`                 | The Support ticket involves incident status pages                                         |
| `support_monitoring_other`                                 | The Support ticket involves something else about monitoring                               |
| `support_monitoring_product_analytics`                     | The Support ticket involves product analysis                                              |
| `support_packages_composer`                                | The Support ticket involves compose packages                                              |
| `support_packages_container`                               | The Support ticket involves container registry                                            |
| `support_packages_dependency_proxy`                        | The Support ticket involves dependency proxy                                              |
| `support_packages_dependency_proxy_errors`                 | The Support ticket involves dependency proxy errors                                       |
| `support_packages_dependency_proxy_other`                  | The Support ticket involves something else about dependency proxy                         |
| `support_packages_dependency_proxy_questions`              | The Support ticket involves dependency proxy questions                                    |
| `support_packages_generic`                                 | The Support ticket involves generic packages                                              |
| `support_packages_infra`                                   | The Support ticket involves infra registries                                              |
| `support_packages_maven`                                   | The Support ticket involves maven packages                                                |
| `support_packages_npm`                                     | The Support ticket involves npm packages                                                  |
| `support_packages_nuget`                                   | The Support ticket involves nuget packages                                                |
| `support_packages_other`                                   | The Support ticket involves something else about packages                                 |
| `support_packages_packages_building`                       | The Support ticket involves building packages                                             |
| `support_packages_packages_installing`                     | The Support ticket involves installing packages                                           |
| `support_packages_packages_other`                          | The Support ticket involves something else about packages                                 |
| `support_packages_packages_questions`                      | The Support ticket involves package questions                                             |
| `support_packages_pypi`                                    | The Support ticket involves pypi packages                                                 |
| `support_packages_registries_building`                     | The Support ticket involves building registries                                           |
| `support_packages_registries_deleting`                     | The Support ticket involves deleting registries                                           |
| `support_packages_registries_errors`                       | The Support ticket involves registry errors                                               |
| `support_packages_registries_other`                        | The Support ticket involves something else about registries                               |
| `support_packages_registries_questions`                    | The Support ticket involves registry questions                                            |
| `support_performance_agent`                                | The Support ticket involves performance of the agent                                      |
| `support_performance_alertmanager`                         | The Support ticket involves performance of the alertmanager                               |
| `support_performance_certifcates`                          | The Support ticket involves performance of the certificates                               |
| `support_performance_consul`                               | The Support ticket involves performance of the consul                                     |
| `support_performance_database`                             | The Support ticket involves performance of the database                                   |
| `support_performance_emails`                               | The Support ticket involves performance of the emails                                     |
| `support_performance_exporter`                             | The Support ticket involves performance of the exporter                                   |
| `support_performance_geo`                                  | The Support ticket involves performance of the geo                                        |
| `support_performance_gitaly`                               | The Support ticket involves performance of the gitaly                                     |
| `support_performance_grafana`                              | The Support ticket involves performance of the grafana                                    |
| `support_performance_lfs`                                  | The Support ticket involves performance of the LFS                                        |
| `support_performance_logrotate`                            | The Support ticket involves performance of the logrotate                                  |
| `support_performance_mattermost`                           | The Support ticket involves performance of the mattermost                                 |
| `support_performance_nginx`                                | The Support ticket involves performance of the nginx                                      |
| `support_performance_node_exporter`                        | The Support ticket involves performance of the node exporter                              |
| `support_performance_object_storage`                       | The Support ticket involves performance of the object storage                             |
| `support_performance_other`                                | The Support ticket involves performance of the something else                             |
| `support_performance_patroni`                              | The Support ticket involves performance of the patroni                                    |
| `support_performance_pgbouncer`                            | The Support ticket involves performance of the pgbouncer                                  |
| `support_performance_praefect`                             | The Support ticket involves performance of the praefect                                   |
| `support_performance_prometheus`                           | The Support ticket involves performance of the prmetheus                                  |
| `support_performance_puma`                                 | The Support ticket involves performance of the puma                                       |
| `support_performance_redis`                                | The Support ticket involves performance of the redis                                      |
| `support_performance_registry`                             | The Support ticket involves performance of the registry                                   |
| `support_performance_sentry`                               | The Support ticket involves performance of the sentry                                     |
| `support_performance_sidekiq`                              | The Support ticket involves performance of the sidekiq                                    |
| `support_performance_ssl`                                  | The Support ticket involves performance of the SSLs                                       |
| `support_performance_workhorse`                            | The Support ticket involves performance of the workhorse                                  |
| `support_pg_management_group`                              | The Support ticket involves groups                                                        |
| `support_pg_management_group_creation`                     | The Support ticket involves group creation                                                |
| `support_pg_management_group_errors`                       | The Support ticket involves group errors                                                  |
| `support_pg_management_group_memberships`                  | The Support ticket involves group memberships                                             |
| `support_pg_management_group_other`                        | The Support ticket involves something else about groups                                   |
| `support_pg_management_group_questions`                    | The Support ticket involves group questions                                               |
| `support_pg_management_group_settings`                     | The Support ticket involves group settings                                                |
| `support_pg_management_issues`                             | The Support ticket involves issues                                                        |
| `support_pg_management_issues_boards`                      | The Support ticket involves issue boards                                                  |
| `support_pg_management_issues_creation`                    | The Support ticket involves issue creation                                                |
| `support_pg_management_issues_designs`                     | The Support ticket involves issue designs                                                 |
| `support_pg_management_issues_errors`                      | The Support ticket involves issue errors                                                  |
| `support_pg_management_issues_other`                       | The Support ticket involves something else about issues                                   |
| `support_pg_management_issues_questions`                   | The Support ticket involves issue questions                                               |
| `support_pg_management_issues_settings`                    | The Support ticket involves issue settings                                                |
| `support_pg_management_iterations`                         | The Support ticket involves iterations or milestones                                      |
| `support_pg_management_iterations_iterations`              | The Support ticket involves iterations                                                    |
| `support_pg_management_iterations_milestones`              | The Support ticket involves milestones                                                    |
| `support_pg_management_labels`                             | The Support ticket involves labels                                                        |
| `support_pg_management_labels_group`                       | The Support ticket involves group labels                                                  |
| `support_pg_management_labels_project`                     | The Support ticket involves project labels                                                |
| `support_pg_management_mrs`                                | The Support ticket involves MRs                                                           |
| `support_pg_management_mrs_approvals`                      | The Support ticket involves MR approvals                                                  |
| `support_pg_management_mrs_changes`                        | The Support ticket involves MR changes                                                    |
| `support_pg_management_mrs_conflicts`                      | The Support ticket involves MR conflicts                                                  |
| `support_pg_management_mrs_creation`                       | The Support ticket involves MR creation                                                   |
| `support_pg_management_mrs_dependencies`                   | The Support ticket involves MR dependencies                                               |
| `support_pg_management_mrs_management`                     | The Support ticket involves MR management                                                 |
| `support_pg_management_mrs_other`                          | The Support ticket involves something else about MRs                                      |
| `support_pg_management_other`                              | The Support ticket involves something else about project/group management                 |
| `support_pg_management_project`                            | The Support ticket involves projects                                                      |
| `support_pg_management_project_creation`                   | The Support ticket involves project creation                                              |
| `support_pg_management_project_errors`                     | The Support ticket involves project errors                                                |
| `support_pg_management_project_import_export`              | The Support ticket involves import/export                                                 |
| `support_pg_management_project_other`                      | The Support ticket involves something else about projects                                 |
| `support_pg_management_project_pages`                      | The Support ticket involves GitLab Pages                                                  |
| `support_pg_management_project_questions`                  | The Support ticket involves project questions                                             |
| `support_pg_management_project_service_desk`               | The Support ticket involves service desk                                                  |
| `support_pg_management_project_settings`                   | The Support ticket involves project settings                                              |
| `support_pg_management_repository`                         | The Support ticket involves repositories                                                  |
| `support_pg_management_repository_branches`                | The Support ticket involves branches                                                      |
| `support_pg_management_repository_code_owners`             | The Support ticket involves code owners                                                   |
| `support_pg_management_repository_creation`                | The Support ticket involves repository creation                                           |
| `support_pg_management_repository_forking`                 | The Support ticket involves forking                                                       |
| `support_pg_management_repository_lfs`                     | The Support ticket involves LFS                                                           |
| `support_pg_management_repository_mirroring`               | The Support ticket involves mirroring                                                     |
| `support_pg_management_repository_other`                   | The Support ticket involves something else about repositories                             |
| `support_pg_management_repository_settings`                | The Support ticket involves repository settings                                           |
| `support_pg_management_repository_snippets`                | The Support ticket involves snippets                                                      |
| `support_pg_management_requirements`                       | The Support ticket involves requirements                                                  |
| `support_pg_management_requirements_creation`              | The Support ticket involves requirement creation                                          |
| `support_pg_management_requirements_errors`                | The Support ticket involves requirement errors                                            |
| `support_pg_management_requirements_other`                 | The Support ticket involves something else about requirements                             |
| `support_pg_management_requirements_questions`             | The Support ticket involves requirement questions                                         |
| `support_pg_management_requirements_settings`              | The Support ticket involves requirement settings                                          |
| `support_pg_management_roadmaps`                           | The Support ticket involves roadmaps                                                      |
| `support_pg_management_user`                               | The Support ticket involves users                                                         |
| `support_pg_management_user_creation`                      | The Support ticket involves user creation                                                 |
| `support_pg_management_user_errors`                        | The Support ticket involves user errors                                                   |
| `support_pg_management_user_other`                         | The Support ticket involves something else about users                                    |
| `support_pg_management_user_questions`                     | The Support ticket involves user questions                                                |
| `support_pg_management_user_settings`                      | The Support ticket involves user settings                                                 |
| `support_pg_management_user_todo_lists`                    | The Support ticket involves user TODO lists                                               |
| `support_pg_management_wiki`                               | The Support ticket involves wikis                                                         |
| `support_pg_management_wiki_group`                         | The Support ticket involves group wikis                                                   |
| `support_pg_management_wiki_project`                       | The Support ticket involves project wikis                                                 |
| `support_runners_agent`                                    | The Support ticket involves k8s agent runners                                             |
| `support_runners_configuration`                            | The Support ticket involves runner configuration                                          |
| `support_runners_docker`                                   | The Support ticket involves docker runners                                                |
| `support_runners_errors`                                   | The Support ticket involves runner errors                                                 |
| `support_runners_freebsd`                                  | The Support ticket involves freebsd runners                                               |
| `support_runners_helm`                                     | The Support ticket involves helm runners                                                  |
| `support_runners_installation`                             | The Support ticket involves runner installation                                           |
| `support_runners_linux`                                    | The Support ticket involves linux runners                                                 |
| `support_runners_macos`                                    | The Support ticket involves macos runners                                                 |
| `support_runners_operator`                                 | The Support ticket involves operator runners                                              |
| `support_runners_other`                                    | The Support ticket involves some other kind of runner                                     |
| `support_runners_other_topic`                              | The Support ticket involves something else about runners                                  |
| `support_runners_questions`                                | The Support ticket involves runner questions                                              |
| `support_runners_shared`                                   | The Support ticket involves shared runners                                                |
| `support_runners_windows`                                  | The Support ticket involves Windows runners                                               |
| `support_secure_api_fuzzing`                               | The Support ticket involves API fuzzing                                                   |
| `support_secure_cve_id`                                    | The Support ticket involves CVE IDs                                                       |
| `support_secure_dast`                                      | The Support ticket involves DSAT                                                          |
| `support_secure_dependency_scanning`                       | The Support ticket involves dependency scanning                                           |
| `support_secure_errors`                                    | The Support ticket involves secure errors                                                 |
| `support_secure_fuzz_testing`                              | The Support ticket involves fuzz testing                                                  |
| `support_secure_iac_scanning`                              | The Support ticket involves IAC scanning                                                  |
| `support_secure_offline_envs`                              | The Support ticket involves offline environments                                          |
| `support_secure_other`                                     | The Support ticket involves something else about secure                                   |
| `support_secure_other_topic`                               | The Support ticket involves something else about secure                                   |
| `support_secure_policies`                                  | The Support ticket involves policies                                                      |
| `support_secure_questions`                                 | The Support ticket involves secure questions                                              |
| `support_secure_revocation`                                | The Support ticket involves revocations                                                   |
| `support_secure_sast`                                      | The Support ticket involves SAST                                                          |
| `support_secure_scanner_integration`                       | The Support ticket involves scanner integrations                                          |
| `support_secure_secret_detection`                          | The Support ticket involves secret detection                                              |
| `support_secure_security_config`                           | The Support ticket involves security configuration                                        |
| `support_secure_security_dashboard`                        | The Support ticket involves security dhasboards                                           |
| `support_secure_setup`                                     | The Support ticket involves secure setup                                                  |
| `support_secure_vulnerability_levels`                      | The Support ticket involves vulnerability levels                                          |
| `support_secure_vulnerability_page`                        | The Support ticket involves vulnerability pages                                           |
| `support_secure_vulnerability_report`                      | The Support ticket involves vulnerability reports                                         |
| `support_usage_quotas_calc`                                | The Support ticket involves usage quota calculations                                      |
| `support_usage_quotas_minutes`                             | The Support ticket involves usage quota minutes                                           |
| `support_usage_quotas_other`                               | The Support ticket involves something else about usage quota                              |
| `support_usage_quotas_questions`                           | The Support ticket involves usage quota questions                                         |
| `support_usage_quotas_seats`                               | The Support ticket involves usage quota seats                                             |
| `support_usage_quotas_storage`                             | The Support ticket involves usage quota storage                                           |

</details>
<details>
<summary>Support Internal Request Tags</summary>

| Tag                                 | What it means |
|-------------------------------------|---------------|
| `support_internal_request`          | Indicates the ticket is a Support internal request |
| `support_valid_request`             | Indicates the Support internal request was valid for submission |
| `support_ir_sa_request_for_support` | Indicates the Support internal request is about a SA requesting assistance from Support |

</details>
<details>
<summary>License and Renewals Internal Request Tags</summary>

| Tag                                | What it means |
|------------------------------------|---------------|
| `lnr_internal_request`             | Indicates the ticket is a L&R internal request |
| `lnr_valid_request`                | Indicates the L&R internal request was valid for submission |
| `lnr_saas_subscription`            | Indicates the L&R internal request is about a gitlab.com subscription |
| `lnr_saas_sub_extension`           | Indicates the problem type is "Extend an (almost) expired subscription" |
| `lnr_saas_sub_issue`               | Indicates the problem type is "Investigate incorrect subscription info" |
| `lnr_saas_nfr`                     | Indicates the problem type is "gitlab.com NFR license request" |
| `lnr_billing_entity_change`        | Indicates the problem type is "Billing Entity change" |
| `lnr_saas_trial`                   | Indicates the L&R internal request is about a gitlab.com trial |
| `lnr_saas_trial_extension`         | Indicates the problem type is "Extend a gitlab.com trial" |
| `lnr_saas_trial_edit`              | Indicates the problem type is "Change existing gitlab.com trial plan" |
| `lnr_saas_trial_over_plan`         | Indicates the problem type is "Request an Ultimate trial for a customer using a Premium subscription" |
| `lnr_sm_license`                   | Indicates the L&R internal request is about a self-managed license |
| `lnr_sm_license_extension`         | Indicates the problem type is "Extend an (almost) expired subscription" |
| `lnr_sm_license_receive_error`     | Indicates the problem type is "Customer did not receive the license" |
| `lnr_sm_license_new_contact`       | Indicates the problem type is "Customer needs the license resent to a new person" |
| `lnr_multiyear_license`            | Indicates the problem type is "Multi-year license needs to be generated" |
| `lnr_sm_nfr`                       | Indicates the problem type is "Self-managed NFR license request" |
| `lnr_sm_trial`                     | Indicates the L&R internal request is about a self-managed trial |
| `lnr_sm_trial_new`                 | Indicates the problem type is "Problems starting a new Self-managed trial" |
| `lnr_sm_trial_edit`                | Indicates the problem type is "Modify an existing Self-managed trial" |
| `lnr_sm_trial_extension`           | Indicates the problem type is "Extend an existing Self-managed trial" |
| `lnr_order_management`             | Indicates the problem type is "Order Management" |
| `lnr_hackerone`                    | Indicates the problem type is "Hacker One Reporter License" |
| `lnr_community_license`            | Indicates the problem type is "Wider Community License" |
| `lnr_request_other`                | Indicates the problem type is "Other (nothing else fits the request)" |
| `lnr_reason_more_time_needed`      | To indicate the extension reason is "More time needed for POC" |
| `lnr_reason_negotiations_underway` | To indicate the extension reason is "Contract negotiations still underway" |
| `lnr_reason_payment_delays`        | To indicate the extension reason is "Delay in customer's payment process" |
| `lnr_reason_true_up_problems`      | To indicate the extension reason is "True-up problem" |

</details>
<details>
<summary>Automation Skipping Related Tags</summary>

| Tag                             | What it means |
|---------------------------------|---------------|
| `pending_followup_notification` | This is applied by an automation to followup on pending tickets. Adding this tag skips that automation. |
| `skip_2fa_automation`           | Tell Zendesk to not run any 2FA automations/autoresponders |
| `skip_autoassign`               | Tell Zendesk to not auto-assign the ticket |
| `skip_autoclose`                | Tell Zendesk to not auto-close the ticket |
| `skip_autoreopen`               | Tell Zendesk to not auto-reopen the ticket |
| `skip_autosolve`                | Tell Zendesk to not auto-solve the ticket |
| `skip_autosolve_message`        | Tell Zendesk not to send a message about the ticket being autosolved |
| `skip_community_automation`     | Tells Zendesk to not send the community autoresponder message |
| `skip_gdpr_automation`          | Tell Zendesk to not run any Account Deletion automations/autoresponders |

</details>
<details>
<summary>Resolution Code Tags</summary>

| Tag                             | What it means |
|---------------------------------|---------------|
| `support_rc_bug`                 | The Support form resolution code for the ticket is "Product bug" |
| `support_rc_incident`            | The Support form resolution code for the ticket is "Incident" |
| `support_rc_bad_docs`            | The Support form resolution code for the ticket is "Insufficient Documentation" |
| `support_rc_performance`         | The Support form resolution code for the ticket is "Capacity / Performance" |
| `support_rc_feature_request`     | The Support form resolution code for the ticket is "Feature request" |
| `support_rc_edu_or_config`       | The Support form resolution code for the ticket is "User education / Configuration change" |
| `support_rc_oos`                 | The Support form resolution code for the ticket is "Unsupported / 3rd party" |
| `support_rc_dupe`                | The Support form resolution code for the ticket is "Duplicate" |
| `support_rc_no_response`         | The Support form resolution code for the ticket is "No response" |
| `support_rc_none`                | The Support form resolution code for the ticket is "No resolution code entered" |
| `support_rc_other`               | The Support form resolution code for the ticket is "Other" |
| `saas_account_rc_bug`            | The SaaS Account form resolution code for the ticket is "Product bug" |
| `saas_account_rc_2fa`            | The SaaS Account form resolution code for the ticket is "2FA" |
| `saas_account_rc_account_access` | The SaaS Account form resolution code for the ticket is "Account Access" |
| `saas_account_rc_namesquatting`  | The SaaS Account form resolution code for the ticket is "Namesquatting" |
| `saas_account_rc_edu_or_config`  | The SaaS Account form resolution code for the ticket is "User education / Configuration change" |
| `saas_account_rc_dupe`           | The SaaS Account form resolution code for the ticket is "Duplicate" |
| `saas_account_rc_no_response`    | The SaaS Account form resolution code for the ticket is "No response" |
| `saas_account_rc_none`           | The SaaS Account form resolution code for the ticket is "No resolution code entered" |
| `saas_account_rc_other`          | The SaaS Account form resolution code for the ticket is "Other" |
| `lnr_rc_bug`                     | The L&R form resolution code for the ticket is "Product bug" |
| `lnr_rc_license_resent`          | The L&R form resolution code for the ticket is "License resent" |
| `lnr_rc_portal_Access`           | The L&R form resolution code for the ticket is "Portal access" |
| `lnr_rc_edu_or_config`           | The L&R form resolution code for the ticket is "User education / Configuration change" |
| `lnr_rc_dupe`                    | The L&R form resolution code for the ticket is "Duplicate" |
| `lnr_rc_no_response`             | The L&R form resolution code for the ticket is "No response" |
| `lnr_rc_none`                    | The L&R form resolution code for the ticket is "No resolution code entered" |
| `lnr_rc_other`                   | The L&R form resolution code for the ticket is "Other" |

</details>
<details>
<summary>Other Notable Tags</summary>

| Tag                              | What it means |
|----------------------------------|---------------|
| `agent_offered_call`             | SE has sent a call link in a public comment |
| `docs_link`                      | SE has sent a link to docs.gitlab.com in a public comment |
| `gitlab_issue_link`              | SE has sent a link to a gitlab.com issue in a public comment |
| `gitlab_merge_request_link`      | SE has sent a link to a gitlab.com merge request in a public comment |
| `hb_link`                        | SE has sent a link to handbook.gitlab.com in a public comment |
| `partner_customer`               | Indicates the account is a customer of an Alliance partner and not eligible for support |
| `star_submitted`                 | Indicates a STAR has been submitted on the ticket |
| `within_grace_period`            | Indicates a ticket was submitted while the account is within the subscription's grace period |
| `CUSTOM_PATH_issues_IID`         | See below for more information |
| `CUSTOM_PATH_merge_requests_IID` | See below for more information |

For `CUSTOM_PATH_issues_IID` and `CUSTOM_PATH_merge_requests_IID`, this refers
to a long tag that contains the entire project path.

So an example:

- a link to issue 5 on project jcolyer/most_amazing_project_ever would be:
  `jcolyer_most_amazing_project_ever_issues_5`
- a link to merge request 27 on project jcolyer/most_amazing_project_ever would
  be: `jcolyer_most_amazing_project_ever_merge_requests_27`

</details>

## Zendesk US Federal common tags

<details>
<summary>SLA Related Tags</summary>

| Tag               | What it means |
|-------------------|---------------|
| `starter`         | Signifies the ticket is using a Starter plan, granting Standard SLA on Support tickets |
| `premium`         | Signifies the ticket is using a Premium plan, granting Priority SLA on Support tickets |
| `ultimate`        | Signifies the ticket is using a Ultimate plan, granting Priority SLA on Support tickets |
| `prospect`        | Signifies the ticket is from a prospect who has been temporarily granted Standard SLA on Support tickets |
| `missing_sla_tag` | This means the ticket is missing any form of SLA tagging. |
| `low`             | Signifies the ticket as a Low priority, thus granting it bare-level support SLAs for Support tickets with Priority SLA |
| `medium`          | Signifies the ticket as a Normal priority, thus granting it mid-level support SLAs for Support tickets with Priority SLA |
| `high`            | Signifies the ticket as a High priority, thus granting it high level support SLAs for Support tickets with Priority SLA |
| `urgent`          | Signifies the ticket is an emergency request |

</details>
<details>
<summary>Account Related Tags</summary>

| Tag                   | What it means |
|-----------------------|---------------|
| `customer`            | Signifies the ticket is from an account labeled as Customer |
| `former_customer`     | Signifies the ticket is from an account labeled as Former Customer |
| `reseller`            | Signifies the ticket is from an account labeled as Reseller |
| `authorized_reseller` | Signifies the ticket is from an account labeled as Authorized Reseller |
| `integrator`          | Signifies the ticket is from an account labeled as Integrator |
| `partner`             | Signifies the ticket is from an account labeled as Partner |
| `unofficial_reseller` | Signifies the ticket is from an account labeled as Unofficial Reseller |
| `open_partner`        | Signifies the ticket is from an account labeled as Open Partner |
| `select_partner`      | Signifies the ticket is from an account labeled as Select Partner |
| `alliance_partner`    | Signifies the ticket is from an account labeled as Alliance Partner |

</details>
<details>
<summary>Organization Tags</summary>

| Tag                            | What it means |
|--------------------------------|---------------|
| `greatly_expired`              | The organization is slated to be removed due to data rentention policies |
| `not_in_sfdc`                  | The organization is not being controlled by the ZD-SFDC sync |
| `restricted_account`           | The SFDC account is classified as restricted and cannot receive support |
| `sub_community_other`          | The organization has a community subscription which had an undetectable type |
| `sub_consumption_ai`           | The organization has an AI subscription |
| `sub_consumption_cicd_minutes` | The organization has a CI/CD minutes purchase |
| `sub_consumption_eap`          | The organization has an Agile Planning addon |
| `sub_consumption_storage`      | The organization has a storage purchase |
| `sub_dotcom_bronze`            | The organization has a gitlab.com Bronze subscription |
| `sub_dotcom_premium`           | The organization has a gitlab.com Premium subscription |
| `sub_dotcom_ultimate`          | The organization has a gitlab.com Ultimate subscription |
| `sub_edu`                      | The organization has an EDU community subscription |
| `sub_gitlab_dedicated`         | The organization has a GitLab Dedicated subscription |
| `sub_oss`                      | The organization has an OSS subscription |
| `sub_other`                    | The organization has a subscription but the type could not be determined |
| `sub_proserv`                  | The organization has a Proserv subscription |
| `sub_sm_premium`               | The organization has a Self-Managed Premium subscription |
| `sub_sm_starter`               | The organization has a Self-Managed Starter subscription |
| `sub_sm_ultimate`              | The organization has a Self-Managed Ultimate subscription |
| `sub_ss_ase`                   | The organization has an Assigned Support Engineer addon |
| `sub_usgov_12x5`               | The organization has a US Government 12x5 subscription |
| `sub_usgov_24x7`               | The organization has a US Government 24x7 subscription |

</details>
<details>
<summary>Automation Skipping Related Tags</summary>

| Tag                      | What it means |
|--------------------------|---------------|
| `skip_autosolve`         | Tell Zendesk to not auto-solve the ticket |
| `skip_autoclose`         | Tell Zendesk to not auto-close the ticket |
| `skip_autoreopen`        | Tell Zendesk to not auto-reopen the ticket |
| `skip_gdpr_automation`   | Tell Zendesk to not run any Account Deletion automations/autoresponders  |
| `skip_autosolve_message` | Tell Zendesk not to send a message about the ticket being autosolved. |
| `skip_autoassign`        | Tell Zendesk to not auto-assign the ticket |

</details>

<details>
<summary>Other Notable Tags</summary>

| Tag                          | What it means                                                                           |
|------------------------------|-----------------------------------------------------------------------------------------|
| `partner_customer`           | Indicates the account is a customer of an Alliance partner and not eligible for support |
| `star_submitted`             | Indicates a STAR has been submitted on the ticket                                       |
| `submitted_via_gitlab_email` | Signifies the ticket is submitted by a GitLab Team Member to Support Team               |

</details>
