---
title: Processor (US only)
description: Support Operations policies page for project setup for processors managed by only US citizens
canonical_path: "/handbook/support/readiness/operations/docs/policies/project_setup/processor_us_only"
---

For processors that deal with US Government Zendesk (or require US citizens
only), we need to do a bit of special setup.

The process for setting all this up comes in five steps:

1. [Create the source project](#create-the-source-project)
1. [Create the target project](#create-the-target-project)
1. [Mirror the source to the target](#mirror-the-source-to-the-target)
1. [Checking the target project settings](#checking-the-target-project-settings)
1. [Setup the pipeline trigger](#setup-the-pipeline-trigger)

## Create the source project

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
  - `Project Description (optional)`: Something to describe the processor's
    use
    - `Project visibility`: Private
    - `Issues`: Checked
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
you are good to move onto the next step.

## Create the target project

As this requires US citizens only, we need this to run from ops.gitlab.net out
of the
[gitlab-com/support/processors-us-citizen-only group](https://ops.gitlab.net/gitlab-com/support/processors-us-citizen-only).

To do this, first navigate to
[gitlab-com/support/processors-us-citizen-only](https://ops.gitlab.net/gitlab-com/support/processors-us-citizen-only).
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

## Mirror the source to the target

Next, we need to mirror the code from the source project to the target project.
To do this, we first need to create an access token in the target project to
allow the source project to act as a push mirror. The steps to do this are as
follows:

1. Navigate to the target project
1. Hover over Settings at the bottom-right of the page
1. Click Access Tokens
1. Click `Add new token`
1. Set `Token name` to `Mirror from URL` (replacing `URL` with the full project
   URL of the source project)
1. Set `Expiration date` to be a year from now, as that is the maximum allowed
   (you can also just click the `X` on the field to have GitLab default to that)
1. Set `Select a role` to `Maintainer`
1. Click the following boxes under `Select scopes`
   - api
   - write_repository

After doing so, click the blue `Create project access token`. This will then
update the page to show your new token entry under
`Active project access tokens`, as well as have an area above that containing
the project access token. Copy this somewhere you won't lose it for now (such as
a notepad), as you will need it in the next steps.

Before leaving the project, you will also want to copy the `Clone with HTTPS`
value for the target project. You can find this on the main page of the project
by clicking the blue `Code` button and copying the value from there. Make sure
to copy it somewhere you won't lose it for now (such as a notepad), as you will
need it in the next steps.

With both of these in hand, navgiate to the source project, hover over
`Settings`, and click `Repository`. You will then locate the section
`Mirroring repositories` and click `Expand` next to it. Click `Add new` to
proceed in setting up the mirroring.

For the options present, you need to fill out the following:

- `Git repository URL`: The `Clone with HTTPS` value from the target project
- `Mirror direction`: Push
- `Authentication method`: Username and Password
- `Username`: jcolyer
- `Password`: The access token you generated earlier
- `Keep divergent refs`: Leave it unchecked
- `Mirror branches`: Mirror only protected branches

With those in place, click the blue `Mirror repository` button. This should
refresh the page, showing your new mirror setup is created under the
`Mirroring repositories` section. To finish this off, click the `Update now`
button (the swirly arrow next to the red trash can) for the newly setup mirror
to force it to update. Wait a bit and refresh the page you are on to see the
results. Once it shows it has updated (under the `Last successful update` area),
navigate to the target project to confirm the files are present.

With all that solid, proceed to the next step.

## Checking the target project settings

You will want to double check all the settings being used are accurate before
proceeding. That said, many of these will not populate until the mirror setup
has been completed. Thus the lateness of this stage.

<details>
<summary>Settings for source project</summary>

- General
  - Naming, topics, avatar
    - `Project Description (optional)`: Something to describe the processor's
      use
  - Visibility, project features, permissions
    - `Project visibility`: Private
    - `Issues`: Unchecked
    - `Respository`: Checked
    - `Merge requests`: Unchecked
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
    - `Pages`: Unchecked
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
  - There should be the one access token we created earlier
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
    - There should be no mirrors
  - Protected branches
    - There should be on entry:
      - `Branch`: master
      - `Allowed to merge`: Maintainers
      - `Allowed to push and merge`: Maintainers
      - `Allowed to force push`: Checked
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
  - Leave as is
- Packages and registries
  - Leave as is
- Monitor
  - Leave as is
- Analytics
  - Leave as is
- Usage Quotas
  - Leave as is

</details>

With that done, you are good to move the final step.

## Setup the pipeline trigger

You will now configure any needed CI/CD variables in the project's settings. To
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
