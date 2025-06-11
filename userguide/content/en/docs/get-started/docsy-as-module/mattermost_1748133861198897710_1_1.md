---
title: Mattermost
description: "Workflow for escalating Mattermost support issues."
category: Self-managed
---

## This workflow is currently under review and can not be used in its current form. See https://gitlab.com/gitlab-org/omnibus-gitlab/-/issues/8594

### Escalating to the Mattermost team

Mattermost has created a `mattermost-support` account in GitLab for support issues, and has subscribed to the `mattermost` label in the following projects:

- omnibus-gitlab
- gitlab-ce
- gitlab-ee

When a GitLab EE customer hits a Mattermost issue and you cannot reasonably resolve the issue using existing documentation:

- Do your best effort to make sure there is enough information to reproduce the issue
- Submit the issue in one of the mentioned projects and apply `mattermost` label. When the label is applied, an email notification is sent
to the technical support team who answers the question within two business days using the `mattermost-support` account.
- For Priority support (Premium/Ultimate customers, additionally assign the issue to the `mattermost-support` account. This assignment sends an email notification,
which is automatically escalated to the critical level technical support who answers the question within 4 hours using the `mattermost-support` account.

This information is taken from [Service-Level Agreement (SLA)](https://mattermost.com/support-terms/#slas)
page of Mattermost docs.

NOTE: **Note:**
The Mattermost team sometimes uses their personal accounts to respond to issues.
`jasonblais` is one such account.

### Other resources

- [Mattermost forum](https://forum.mattermost.com/c/trouble-shoot/gitlab/12) - has over a thousand people registered on the forum and every new question and answer makes thing easier to troubleshoot.
