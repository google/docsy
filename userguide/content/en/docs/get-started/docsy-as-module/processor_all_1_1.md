---
title: Processor (everyone)
description: Support Operations policies page for project setup for processors managed by everyone
canonical_path: "/handbook/support/readiness/operations/docs/policies/project_setup/processor_all"
---

As processors managed by all of Support Readiness do not have any special
citizenship requires, we can build them in our root namespace and have the CI/CD
running from there.

To begin, you need to create the source project. To do this, first navigate to
[gitlab-support-readiness/processors](https://gitlab.com/gitlab-support-readiness/processors)
and click the blue `New project` button at the top-right of the page.

This will bring you to the new project page, showing various options to assist
in the project's creation. The option you want is `Create blank project`. After
clicking that, you will need to fill out some information. It should be as
follows:

- Project name: A name that specifies what the form is form
- Project URL: You are fine to allow gitlab.com to populate this for you
- Project deployment target (optional): Leave this as is and do not modify it
- Visibility Level: Private
- Project Configuration: Uncheck all boxes

After ensuring all that is solid, click the blue `Create project` button. This
will result in an empty project being created.

You will want to double check all the settings being used are accurate before
proceeding.

<details>
<summary>Settings for source project</summary>

- General
  - Naming, topics, avatar
    - `Project Description (optional)`: Something to describe the form's use
  - Visibility, project features, permissions
    - `Project visibility`: Private
    - `Issues`: Unchecked
    - `Respository`: Checked
    - `Merge requests`: Checked
    - `Forks`: Unchecked
    - `CI/CD`: Checked
    - `Container registry`: Unchecked
    - `Analytics`: Unchecked
    - `Requirements`: Unchecked
    - `Security and Compliance`: Unchecked
    - `Wiki`: Unchecked
    - `Snippets`: Unchecked
    - `Package registry`: Unchecked
    - `Model experiments`: Unchecked
    - `Model registry`: Unchecked
    - `Pages`: Checked
    - `Monitor`: Unchecked
    - `Environments`: Unchecked
    - `Feature flags`: Unchecked
    - `Infrastructure`: Unchecked
    - `Releases`: Unchecked
    - `CI/CD Catalog resource`: Unchecked
    - `Enable email notifications`: Checked
    - `Show default emoji reactions`: Checked
    - `Warn about Potentially Unwanted Characters`: Checked
  - Badges
    - There should be no badges
  - Compliance framework
    - There should be no compliance framework
  - Service Desk
    - It should not be activated
- Integrations
  - There should be no activated integrations
- Webhooks
  - There should be no webhooks
- Access Tokens
  - There should be no access tokens
- Repository
  - Branch defaults
    - `Default branch`: master
    - `Auto-close referenced issues on default branch`: Checked
    - `Branch name template`: Leave it empty
  - Branch rules
    - No need to edit this, let it self-populate
  - Push rules
    - `Reject unverified users`: Unchecked
    - `Reject inconsistent user name`: Unchecked
    - `Reject unsigned commits`: Unchecked
    - `Reject commits that aren't DCO certified`: Unchecked
    - `Do not allow users to remove Git tags with git push`: Unchecked
    - `Check whether the commit author is a GitLab user`: Unchecked
    - `Prevent pushing secret files`: Unchecked
    - `Require expression in commit messages`: Leave it empty
    - `Reject expression in commit messages`: Leave it empty
    - `Branch name`: Leave it empty
    - `Commit author's email`: Leave it empty
    - `Prohibited file names`: Leave it empty
    - `Maximum file size (MB)`: 0
  - Mirroring repositories
    - There should be no mirrors setup as of yet (one will be made later)
  - Protected branches
    - There should be on entry:
      - `Branch`: master
      - `Allowed to merge`: Maintainers
      - `Allowed to push and merge`: `gl-support-bot`
      - `Allowed to force push`: Unchecked
      - `Code owner approval`: Checked
  - Protected tags
    - There should be no protected tags
  - Deploy tokens
    - There should be no deploy tokens
  - Deploy keys
    - There should be no deploy keys
- Merge Requests
  - `Merge method`: Merge commit
  - `Merge options`:
    - Enable merged results pipelines: Unchecked
    - Automatically resolve merge request diff threads when they become
      outdated: Unchecked
    - Show link to create or view a merge request when pushing from the command
      line: Checked
    - Enable "Delete source branch" option by default: Checked
  - `Squash commits when merging`: Require
  - `Merge checks`
    - Pipelines must succeed: Unchecked
    - All threads must be resolved: Checked
    - Status checks must succeed: Unchecked
  - `Merge suggestions`: Leave it empty
  - `Merge commit message template`:
    > Merge branch '%{source_branch}' into '%{target_branch}'
    >
    > %{title}
    >
    > %{issues}
    >
    > See merge request %{reference}

  - `Squash commit message template`:
    > %{title}

  - `Default description template for merge requests`: blank
  - `Merge request approvals`
    - Approval rules: Leave as is
    - Security Approvals: There should be none
    - Approval settings
      - Prevent approval by author: Checked
      - Prevent approvals by users who add commits: Checked
      - Prevent editing approval rules in merge requests: Checked
      - Require user re-authentication (password or SAML) to approve: Unchecked
      - When a commit is added: Remove all approvals
  - Suggested reviewers: Do not enable
  - Merge request branch workflow: There should be none
- CI/CD
  - Ensure `Public pipelines` under `General pipelines` is unchecked
  - Leave the rest as it
- Packages and registries
  - Leave as is
- Monitor
  - Leave as is
- Analytics
  - Leave as is
- Usage Quotas
  - Leave as is

</details>

After confirming the settings, you will want to create a merge request with the
desired code. Make sure to setup the
[.gitlab folder and its contents](./gitlab_folder_setup) for the project!

Once that merge request has been successfully merged into the default branch,
you will then configure any needed CI/CD variables in the project's settings. To
do that, hover over `Settings` on the project and click `CI/CD`. You will then
navigate to the `Variables` section and click `Expand`. For each variable you
need (determined by your code and setup), you need to click the `Add variable`
button to bring up a sub-menu. When doing these, ensure you uncheck the
`Protect variable` box, uncheck the `Mask variable` box, and check the
`Expand variable reference` box. Once you have entered your `Key` and `Value`,
click the blue `Add variable` button.

The final step will be creating the pipeline trigger token that will be used to
call upon the processor. To do that, hover over `Settings` on the project and
click `CI/CD`. You will then navigate to the `Pipeline trigger tokens` section
and click `Expand`. You will then click the `Add new token` button and enter a
description that details what it is for (if using as a webhook, for example,
perhaps state the name of the webhook or the trigger that call it). Once you
have done so, click the blue `Create pipeline trigger token` button to generate
the pipeline trigger token. Make sure to copy it somewhere like a notepad for
use in whatever mechanism is calling the pipeline trigger. The info below the
token contains various examples in how to use it.

Once that is done, so is the project setup!

---

**NOTE** You probably need to update some form of our handbook for this new
project, so make sure that gets done!
