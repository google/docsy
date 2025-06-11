---
title: Engineering GitLab Product
description: "Learn more about how Digital Experience engineers work with the GitLab Product."
---

## Overview

From time to time, our team has objectives that require us to collaborate on the [GitLab product](https://gitlab.com/gitlab-org/gitlab). The group we have most collaborated in the past has been the [Growth team](/handbook/engineering/development/growth/), though engineers should validate what [stage they should contact](/handbook/product/categories/). They should be [informed and consulted](/handbook/people-group/directly-responsible-individuals/#dri-consulted-informed-dci) with any changes that affect the GitLab product, ideally doing so before we begin any work. This ensures that we are aligned with their goals and can leverage [their expertise in the GitLab product](/handbook/values/#reach-across-company-departments). Remember that the Digital Experience team's work on the GitLab product should align with our [team's OKRs](/handbook/company/okrs/) and the [overall company strategy](/handbook/company/strategy/).

When working on the GitLab product, it's important to follow the established [contribution guidelines](https://docs.gitlab.com/ee/development/contributing/) and [code review process](https://docs.gitlab.com/ee/development/code_review.html). This includes:

1. [Writing clear commit messages](https://docs.gitlab.com/ee/development/contributing/merge_request_workflow.html#commit-messages-guidelines)
2. Opening a merge request with a detailed description
3. Addressing any feedback from [reviewers](https://docs.gitlab.com/ee/development/code_review.html#reviewer-roulette)

Additionally, make sure to:

- [Write and update tests](https://docs.gitlab.com/ee/development/code_review.html#quality) as necessary
- Follow GitLab's [coding standards](https://docs.gitlab.com/ee/development/contributing/style_guides/)
- Update documentation if your changes affect user-facing features

## Collaboration Process

When collaborating on the GitLab product, follow these steps to ensure smooth communication and efficient work:

1. **Identify the need**: Determine if your objective requires changes to the GitLab product.

2. **Consult with the right team**: Before starting any work, reach out to the appropriate team to discuss your plans. This can be done through:
   - Scheduling a meeting
   - Posting in the appropriate Slack channel
   - Creating an issue in the relevant team's project board(if necessary)

3. **Create a proposal**: Draft a proposal that includes:
   - Define the scope outlining the changes you intend to make
   - The problem you're solving
   - The proposed solution
   - Any potential impacts on other parts of the product
   - Timeline and resource requirements
   - Who is committing to what work, and if any engineering assistance is necessary

4. **Get approval**: Obtain formal approval from the team and any other relevant stakeholders before proceeding with development.

5. **Regular updates**: Keep the right team informed of your progress through:
   - Prompt status updates
   - Sharing merge request links for review
   - Flagging any roadblocks or changes in scope

6. **Final review**: Before merging your changes, ensure the appropriate team has given their final approval.

### Onboarding

There is an existing onboarding process for GitLab engineering. Digital Experience engineers need to complete a specific subset of that onboarding:

1. [Git Workflow](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/onboarding.md#day-5-git)
   - Make sure you still feel comfortable with day 5 of the general onboarding steps for git workflow
2. [Engineering Department specific tasks](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/onboarding_tasks/department_development.md)
   - Complete the Engineering Division/For Development Department specific tasks
3. Snowplow
   - Complete the Snowplow onboarding tasks
4. GDK
   1. You can get started with the GitLab Rails using the GDK [here](https://gitlab.com/gitlab-org/gitlab-development-kit)
   2. Set it with [one line installation](https://gitlab.com/gitlab-org/gitlab-development-kit#supported-methods) which:
      - Clones the GDK project into a new `gitlab-development-kit` directory in the current working directory.
      - Installs `asdf` and necessary `asdf` plugins.
      - Runs `gdk install`.
      - Runs `gdk start`.

      **Note**:  First follow dependency installation instructions if necessary.

      `curl "https://gitlab.com/gitlab-org/gitlab-development-kit/-/raw/main/support/install" | bash`
   3. To browse your [development server](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/browse.md):

      - Execute: `cd gitlab-development-kit`

      - Execute: `gdk start`

   4. [Use the login credentials found here and learn more GDK commands](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/gdk_commands.md)
   5. [Read how to use GDK documentation](https://gitlab.com/gitlab-org/gitlab-development-kit/-/blob/main/doc/howto/index.md)

### Slack Channels

Here are some slack channels to ask for help:

- [#gdk](https://gitlab.slack.com/archives/C2Z9A056E)
- [#backend](https://gitlab.slack.com/archives/C8HG8D9MY)
- [#development](https://gitlab.slack.com/archives/C02PF508L)
- [#frontend](https://gitlab.slack.com/archives/C0GQHHPGW)
