---
title: "Secret push protection troubleshooting"
---

### When to use this runbook?

Use this runbook for troubleshooting Production issues related to the
[secret push protection](https://docs.gitlab.com/ee/user/application_security/secret_detection/pre_receive/index.html) feature.

### Relevant settings

| Setting | Type | Level | Visibility |
|---------|------|-------|------------|
| `pre_receive_secret_detection_beta_release` | Feature Flag | Instance | Not visible, has to be toggled via `ChatOps`. |
| `pre_receive_secret_detection_enabled` | Database Setting | Instance | Only in a **Dedicated instance**, or with **`pre_receive_secret_detection_beta_release` enabled** and only when the feature is **licensed (in Ultimate)**. |
| `pre_receive_secret_detection_push_check` | Feature Flag | Project | Not visible, has to be toggled via `ChatOps`. |
| `pre_receive_secret_detection_enabled` | Database Setting | Project | Only in a **Dedicated instance**, or with **`pre_receive_secret_detection_enabled` enabled** and only when the feature is **licensed (in Ultimate)**. |

## Monitoring

[Secret push protection monitoring](secret-push-protection-monitoring) is the preferred dashboard for monitoring the feature to help identify and mitigate any reliability issues or performance regressions that may occur when it is enabled on Gitlab.com.

[Gitaly Latency Dashboard for the PreReceiveHook method](https://dashboards.gitlab.net/d/PqeIQ9Iik/gitaly-feature-latency-detail?from=now-1h&orgId=1&refresh=5m&to=now&var-job=gitaly&var-method=PreReceiveHook) may be used as a supplement.

## Enabling/Disabling

## Enabling/Disabling for Gitlab.com

To **disable the feature across all of Gitlab.com**, there are two options.

The first option, and most likely quickest, is to disable the feature via ChatOps. Use the following command: `/chatops run feature set pre_receive_secret_detection_push_check false`

The second option is to disable pre-receive
secret detection, [as described in the docs](https://docs.gitlab.com/ee/user/application_security/secret_detection/secret_push_protection/index.html#enable-secret-push-protection). This will require a change access request ([production example](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/17907)), as it requires administrator access.

Either of these options will disable the feature for all Gitlab.com users and should be
used in cases where the feature is causing significant performance degradation.

## Other properties that can be enabled/disabled

### Enabling/Disabling for a project

This can only be changed by a Maintainer, or above, for the project and is the preferred method for disabling a project.

With the `pre_receive_secret_detection_push_check` feature flag on for a
given project, secret push protection can be toggled for the
project through the security configuration page for the project.
Instructions can be found in this [in-progress documentation MR](https://gitlab.com/gitlab-org/gitlab/-/blob/05d3748d29a047946b173af51141137fafb049a8/doc/user/application_security/secret_detection/pre_receive/index.md#enable-pre-receive-secret-detection-for-a-specific-project),
but will eventually be added to the docs.

When both the feature flag and the setting are on, git pushes to the
project should be stopped when they contain a secret. As a test,
`glpat-12345678901234567890` should be prevented when pushing
(from the terminal, the Web IDE, etc.)

### The `pre_receive_secret_detection_push_check` feature flag

The `pre_receive_secret_detection_push_check` feature flag will be used
to enable/disable secret push protection for a given project.

It will also be used in conjunction with the secret push
protection setting in a project's Security Configuration. Both the
feature flag and the setting will need to be on for  secret push
protection to work for a given project.

Check status:

`/chatops run feature get pre_receive_secret_detection_push_check`

Enable for a project:

`/chatops run feature set --project=the-namespace/of-the-project
pre_receive_secret_detection_push_check true`

Disable for a project:

`/chatops run feature set --project=the-namespace/of-the-project
pre_receive_secret_detection_push_check false`

### The `pre_receive_secret_detection_beta_release` flag

The `pre_receive_secret_detection_beta_release` flag will be used to
enable the [Secret Detection section in the Security and Compliance Admin section](https://gitlab.com/admin/application_settings/security_and_compliance) (<https://gitlab.com/admin> -> Settings -> Security and Compliance)
, but _**turning the flag on does not turn on pre-receive secret
detection**_. Conversely, turning the flag off does not turn
the feature off.

Check the status of the `pre_receive_secret_detection_beta_release`
feature flag:

`/chatops run feature get pre_receive_secret_detection_beta_release`

Enable the feature flag:

`/chatops run feature set pre_receive_secret_detection_beta_release true`

Disable the feature flag:

`/chatops run feature set pre_receive_secret_detection_beta_release
false`

## Resolving and skipping blocked pushes

[Resolving a blocked push](https://gitlab.com/gitlab-org/gitlab/-/blob/05d3748d29a047946b173af51141137fafb049a8/doc/user/application_security/secret_detection/pre_receive/index.md#resolve-a-blocked-push) and [Skipping secret detection](https://gitlab.com/gitlab-org/gitlab/-/blob/05d3748d29a047946b173af51141137fafb049a8/doc/user/application_security/secret_detection/pre_receive/index.md#skip-secret-detection)
are both documented in the in-progress documentation MR.

## Viewing logs

Secret Detection audit log events are documented [here](https://docs.gitlab.com/ee/user/compliance/audit_event_types.html#secret-detection).

For GitLab.com, all logged events can be viewed [here](https://log.gprd.gitlab.net/app/discover#/view/31afcbb2-28e9-466f-a6c3-486e869e1ee3?_g=()&_a=h@bd3f1e1), and logs of just blocked push events due to detected secrets can be viewed [here](https://log.gprd.gitlab.net/app/discover#/view/db7ba29d-d406-46df-8b43-e6d9c47fbed7).
