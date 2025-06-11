---
title: "HackerOne Tooling"
---

## HackerOne Tooling Runbook

This runbook is for information related to the suite of tools created to help support the Application Security team's HackerOne processes.

## Repository List

Information in this runbook may help with debugging, maintaining, or supporting the tools and services found in the following repositories:

- [h1bot](https://gitlab.com/gitlab-com/gl-security/engineering-and-research/automation-team/h1bot), which provides import related functionality
  - See also: [h1bot configuration and deployment](https://gitlab.com/gitlab-private/gl-security/engineering-and-research/automation-team/kubernetes/secauto/h1bot)
- [h1-gitlab](https://gitlab.com/gitlab-com/security-tools/h1-gitlab), which performs a number of GitLab issue lifecycle management tasks
- [h1-attachments](https://gitlab.com/gitlab-com/gl-security/engineering-and-research/automation-team/h1-attachments), which serves imported HackerOne attachments
  - See also: [h1-attachments configuration and deployment](https://gitlab.com/gitlab-private/gl-security/engineering-and-research/automation-team/kubernetes/secauto/h1-attachments)

## Re-deploying

h1bot and h1-attachments are deployed using GitLab continuous delivery features. In some cases, re-deploying the environment may fix problems with the tooling, such as request timeouts to the attachments server.

To re-deploy these:

1. Visit the appropriate configuration and deployment project
1. Under the `Operate` menu option on the left side of the Project view, click on [Environments](https://docs.gitlab.com/ee/ci/environments/)
1. For the `live` environment, [follow the steps to re-deploy to environment](https://docs.gitlab.com/ee/ci/environments/#retry-or-roll-back-a-deployment)
