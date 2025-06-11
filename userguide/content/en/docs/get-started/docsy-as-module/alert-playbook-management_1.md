---
title: "Alert Playbook Management"
---

## Purpose

During an incident, playbooks are vital to the engineer on call (EOC) in resolving an alert. Having all of the salient information laid out in one place saves the EOC time in diagnosing and resolving the incident. It empowers the EOC with a set of standard steps for responding to incidents. Additionally, it can greatly reduce the stress of dealing with an alert when working on an unfamiliar service.

Our current runbooks tend to be more architectural documents or contain many links to unrelated information without much troubleshooting guidance. Moreover, they are primarily service-based runbooks. This means the runbooks are not necessarily useful in determining what an alert means or how to handle it. Our transition to alert-based playbooks will improve initial response times as the information relevant to the alert as well as other contextual information will be immediately available.

## Expectations

A playboook should use the [playbook template](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/template-alert-playbook.md) and follow the guidence within. The playbook should include the following sections:

1. An overview section including what the alert means and what action the EOC is expected to take.
2. Information on the service and who owns the service.
3. Information on the metrics that cause the alert to fire and an explanation on why these metrics were chosen.
4. A description of the alert behavior such as expected frequency and guidelines on silencing the alert.
5. Guidance on the likely severity of the incident and tips on how to determine severity.
6. Verification information to ensure the alert is accurate such as links to dashboards and log queries relevant to the alert.
7. Links to recent changes that may have caused this alert. This could be links to change management issues with the proper tags, recent MRs in the `chef-repo` or `gitlab-helmfiles` repo. If relevant, also include information on rolling back said changes.
8. Information on the troubleshooting steps to identify the issue. This is one of the most important sections and should include as much details as possible. This could include relevant servers to log in to, commands to run, dashboards to check, useful scripts, or any other advice in troubleshooting.
9. Possible resolutions to the alert, often links to previous resolved incident issues involving this alert.
10. Any external or internal dependencies that could cause this alert. For example a database problem might cause a sidekiq alert.
11. Escalation steps and procedures such as when and where to escalate.
12. Definitions including linking to the source of the alert and any guidance on when and how to tune the alert.

## Guidelines on Playbook Management and Creation

- Create playbooks in the relevent service directory under `/alerts/` such as `docs/<service name>/alerts/` in the [Runbooks Repo](https://gitlab.com/gitlab-com/runbooks) using the playbook template.
- Condense alerts into a single playbook when the difference between alert names is only a suffix with a header line indicating that the playbook covers multiple alerts.
  - For example, `WALGBaseBackupDelayed` and `WALGBaseBackupFailed` are combined into one playbook named [`WALGBaseBackup`](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/patroni/alerts/walgBaseBackup.md). The majority of the details will be the same, but the difference between "Delayed" and "Failed" need to be discussed.
- Update the links that are attached to the alerts. Alerts are defined in either the [mimir-rules-jsonnet](https://gitlab.com/gitlab-com/runbooks/-/tree/master/mimir-rules-jsonnet) or [mimir-rules](https://gitlab.com/gitlab-com/runbooks/-/tree/master/mimir-rules) directories in the Runbooks repo.
- When adding a new alert, the service owners adding the alert should create a playbook ***before*** the alert is added.
- After modifying an alert or playbook, you'll need to run `make generate` in the runbooks repo. Instructions on how to prepare the runbooks repo can be found in the [contributor onboarding in the README](https://gitlab.com/gitlab-com/runbooks/-/tree/master#contributor-onboarding).
- When creating the merge request, use the template [`alert-playbook-template`](https://gitlab.com/gitlab-com/runbooks/-/blob/master/.gitlab/merge_request_templates/alert-playbook-template.md) for the text of the merge request.
- Reach out to the Production Engineering - Ops team in #g_infra_ops Slack channel if you need assistance.

## Important Links

- [Playbook Template](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/template-alert-playbook.md)
- [MR template for new playbooks](https://gitlab.com/gitlab-com/runbooks/-/blob/master/.gitlab/merge_request_templates/alert-playbook-template.md)
