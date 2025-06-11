---
title: Engineering GitLab Product
description: "Learn more about how Digital Experience engineers work with the GitLab Product."
---

## Overview

From time to time, our team has objectives that require us to collaborate on the [GitLab product](https://gitlab.com/gitlab-org/gitlab).

### Onboarding

There is an existing onboarding process for GitLab engineering. Digital Experience engineers need to complete a specific subset of that onboarding:

#### 1.  [Git Workflow](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/onboarding.md#day-5-git)

Make sure you still feel comfortable with day 5 of the general onboarding steps for git workflow

#### 2. [Engineering Department specific tasks](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/onboarding_tasks/department_development.md)

Complete the Engineering Division/For Development Department specific tasks

#### 3.[Snowplow](/handbook/engineering/development/analytics/analytics-instrumentation/#snowplow-onboarding-template)

Complete the Snowplow onboarding tasks

#### 4. GDK

  1. You can get started with the GitLab Rails using the GDK [here](https://gitlab.com/gitlab-org/gitlab-development-kit)
  2. Set it with [one line installation](https://gitlab.com/gitlab-org/gitlab-development-kit#supported-methods) which:

      - Clones the GDK project into a new `gitlab-development-kit` directory in the current working directory.
      - Installs `asdf` and necessary `asdf` plugins.
      - Runs `gdk install`.
      - Runs `gdk start`.

      **Note**:  First follow dependency installation instructions if necessary.

      `curl "https://gitlab.com/gitlab-org/gitlab-development-kit/-/raw/main/support/install" | bash`
  3. To browse your [developmenet server](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/browse.md):

      - Excute: `cd gitlab-development-kit`

      - Execute: `gdk start`

  4. [Use the login credentials found here and learn more GDK commands](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/gdk_commands.md)
  5. [Read how to use GDK documentation](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/index.md)

### Slack Channels

Here are some slack channels to ask for help:

- [#gdk](https://gitlab.slack.com/archives/C2Z9A056E)
- [#backend](https://gitlab.slack.com/archives/C8HG8D9MY)
- [#development](https://gitlab.slack.com/archives/C02PF508L)
- [#frontend](https://gitlab.slack.com/archives/C0GQHHPGW)
