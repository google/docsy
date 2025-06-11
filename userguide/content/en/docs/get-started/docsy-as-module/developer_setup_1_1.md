---
title: Developer Vulnerability Management Setup Guide
description: "The Security Insights group at GitLab is charged with developing solutions to enable customers to manage their security risks effectively and efficiently."
layout: single
---

## Requirements

### Set up GDK

To fully run Vulnerability Management on your local machine, you must have set up the [GDK](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/index.md).

### Set up runner

To display the Vulnerability Reports, you need to set up the runner. Follow these steps:

1. Navigate to `http://gdk.test:3000/gitlab-org/security-reports` .
1. On the left sidebar, click on the `Search or go to...` button and select `Admin Area`.
1. In the Admin Area, on the left sidebar, select `CI/CD` > `Runners`.
1. Select `New instance runner` > `Run untagged jobs` > `Create Runner`.
1. Choose your Operating system and follow the instructions of `Step 1`.
1. Ensure that Docker is running on your machine.
1. Open your terminal, run `gdk start`. Once `gdk` is running, run the command `gitlab-runner run`.
1. Return to your browser, and click on `View runners`. Your runner should be shown in the list of runners, and show as `Online`.
1. Navigate back to the `Security Reports` project at `http://gdk.test:3000/gitlab-org/security-reports`.
1. On the left sidebar click on `Build` > `Pipelines`. The pipeline should now be active.

For additional details or troubleshooting, consult the official [runner setup guide](https://gitlab.com/gitlab-org/gitlab-development-kit/blob/main/doc/howto/runner.md#set-up-a-runner).

### Ensure EE license

To display Vulnerability Reports and the Vulnerability Management tool in GitLab, you need an Enterprise Edition [(EE) license](https://gitlab.com/gitlab-org/gitlab-development-kit/blob/main/doc/index.md#use-gitlab-enterprise-features). This license enables features exclusive to the EE tier. To generate an EE development license, follow these steps:

1. Request an EE developer license. Follow the steps in [the handbook](../../../../../engineering/developer-onboarding.md#working-on-gitlab-ee-developer-licenses).
1. Add the EE license to your local environment. Follow the steps in [the handbook](https://docs.gitlab.com/ee/administration/license_file.html#add-license-in-the-admin-area) under **Add license in the Admin area**.

## Resources and examples

### Repositories

To easily populate vulnerabilities, we recommend the [**Security Reports** project](https://gitlab.com/gitlab-examples/security/security-reports.git). To add it to your local GDK environment:

1. Go to `http://gdk.test:3000/` in your browser.
1. Click on `New Project` > `Import Project` > `Repository by URL`.
1. In the `Git repository URL` field, enter `https://gitlab.com/gitlab-examples/security/security-reports.git`.
1. Under `Project URL`, add a namespace, (for example, `gitlab-org`).
1. For `Project slug` enter `security-reports`.
1. Click `Create project`.
