---
title: Zendesk Global with contributions
description: Support Operations policies page for project setup for Zendesk Global with support contributions
canonical_path: "/handbook/support/readiness/operations/docs/policies/project_setup/zendesk_global_with"
---

Before proceeding, make sure you are comfortable with the
[requirements](#requirements) to perform this task. This is considerably more
complex than other project setups. Consider working with someone who has
experience doing these, such as a Fullstack Engineer, to ensure it is done
properly.

Zendesk related projects that enable support contributions work via a system of
GitLab CI/CD and git submodule.

## Requirements

- As this is going to require adding a git submodule to the source project, you
  are going to need to be very comfortable with adding files and creating merge
  requests via CLI.
- This requires more complex CI/CD setup and coding, so make sure you have a
  firm grasp on GitLab's CI/CD.
- This contains more complex git methodology, so make sure you are comfortable
  with "advanced" git techniques.

## Setup the support contributions project

For the support contributions project, you will be creating it via the
[gitlab-com/support/zendesk-global group](https://gitlab.com/gitlab-com/support/zendesk-global).
Navigate there and click the blue `New project` button at the top-right of the
page.

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

Here you will need to add the initial content. This is going to vary depending
on the nature of the project itself. Make sure to setup the
[.gitlab folder and its contents](./gitlab_folder_setup) for the project!

Before leaving the project, you will also want to copy the `Clone with SSH`
value for the target project. You can find this on the main page of the project
by clicking the blue `Code` button and copying the value from there. Make sure
to copy it somewhere you won't lose it for now (such as a notepad), as you will
need it in the next steps.

Once you have all that in place, you are good to move onto the next step.

## Setup the source project

Next, you need to create the source project. To do this, first navigate to
[gitlab-support-readiness/zendesk-global](https://gitlab.com/gitlab-support-readiness/zendesk-global)
and determine what area this falls into. As an example, if this is about tickets
(such as forms, fields, settings, etc.), it might make sense to make the project
in the Tickets subgroup. You will need to use your best discretion here to
decide on that. Once you are in the group you are creating the project within,
click the blue `New project` button at the top-right of the page.

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
    - `Project Description (optional)`: Something to describe the project's use
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
  - There should be no access tokens yet, but there will be one
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
desired code, but this must be done *via CLI*. This is because we need to add
the git submodule to the project.

Via CLI, you would want to ensure you are in the project's root folder, then
run the following command:

```bash
git submodule add CLONE_WITH_SSH_URL data/managed_content
```

You will replace `CLONE_WITH_SSH_URL` with the `Clone with SSH` value you copied
from the support contributions project.

Add the rest of your code and then add it to the project. Keep in mind you need
to:

- Make sure to setup the
  [.gitlab folder and its contents](./gitlab_folder_setup) for the project!
- Have CI/CD code for handling submodule updates (triggered via webhook)
- Have CI/CD code to report when something is out of date (triggers via commit
  to master)
- Have CI/CD code to perform a sync (triggered via pipeline schedule)
- Have the required variables for using git submodules via CI/CD, such as:

```yaml
variables:
  GIT_SUBMODULE_STRATEGY: normal
  GIT_SUBMODULE_DEPTH: 1
  GIT_SUBMODULE_FORCE_HTTPS: 'true'
```

Make sure to:

- copy the project's ID, as you are going to need it (the three vertical dots to
  the top-right of the page)
- copy the full path of the source project before proceeding, as you are going
  to need it (gitlab-support-readiness/zendesk-global/etc/etc).

## Permissions Setup

Before we can proceed further, we need to setup some special permissions on the
support contributions project to enable the source project's use of the git
submobule. Navigate to the support contributions project, hover over `Settings`,
and click on `CI/CD`. Locate the `Token Access` section and click on `Expand`.

Ensure `Limit access to this project` is checked, and then click `Add project`
to the right of
`Allow CI job tokens from the following projects to access this project`. Here
you will need to put the full path of the source project. After doing so, click
the blue `Add project` button.

## Webhook Setup

Next, we need to setup a webhook on the support contributions project to notify
the source project when a commit is made to the master branch.

And to start that off, we need a pipeline trigger token from the source project.
Navigate to the source project, hover over `Settings` on the project and click
`CI/CD`. You will then navigate to the `Pipeline trigger tokens` section and
click `Expand`. You will then click the `Add new token` button and enter a
description that details what it is for (use the support contributions project's
URL). Once you have done so, click the blue `Create pipeline trigger token`
button to generate the pipeline trigger token. Make sure to copy it somewhere
like a notepad for use in whatever mechanism is calling the pipeline trigger.
The info below the token contains various examples in how to use it.

Now navigate to the support contributions project, hover over `Settings`, and
click `Webhooks`. Click `Add new webhook` and then use the following to get that
filled out:

You then need to create a new webhook using the following information:

- URL:
  `https://gitlab.com/api/v4/projects/PROJECT_ID/ref/master/trigger/pipeline?token=TOKEN`
  - Replace `PROJECT_ID` with the ID of the source project
  - Replace `TOKEN` with the pipeline trigger token you generated earlier
- Click the bubble next to `Mask portions of URL`
  - Put the pipeline trigger token in the text field for `Sensitive portion of URL`
  - Put `TOKEN` in the text field for `How it looks in the UI`
  - Verify the URL preview value now looks like:
    - `https://gitlab.com/api/v4/projects/PROJECT_ID/ref/master/trigger/pipeline?token=TOKEN{TOKEN}`
- Check the box next to `Push events`
  - Select `Wildcard pattern` and enter `master` in the text field
- Check the box next to `Enable SSL verification`

Once all that is in place, click the blue `Add webhook` button.

## CI/CD Setup

Once that merge request has been successfully merged into the default branch,
you will then configure any needed CI/CD variables in the project's settings. To
do that, hover over `Settings` on the project and click `CI/CD`. You will then
navigate to the `Variables` section and click `Expand`. For each variable you
need (determined by your code and setup), you need to click the `Add variable`
button to bring up a sub-menu. When doing these, ensure you uncheck the
`Protect variable` box, uncheck the `Mask variable` box, and check the
`Expand variable reference` box. Once you have entered your `Key` and `Value`,
click the blue `Add variable` button.

The final step will be creating the pipeline schedule this will use.

To setup a pipeline schedule, hover over `Build` and click `Pipeline schedules`.
Click the blue `Create a new pipeline schedule` button (for the first schedule)
or the blue `New schedule` button (for subsequent ones). For the description,
enter a description that states what it is doing (syncing to Zendesk, posting in
Slack, etc.). For the Interval Pattern, enter a cron-style string that reflects
when it will run ([crontab.guru](https://crontab.guru/) can help with that). For
the Cron timezone, enter `[UTC 0] UTC`. For Select target branch or tag, use
`master` (this is our default). If you have any variables dependent on this
specific pipeline schedule, you can enter them here. Make sure the `Activate`
checkbox is checked, and then click the blue `Create pipeline schedule` button.

Once that is done, so is the project setup!

---

**NOTE** You probably need to update some form of our handbook for this new
project, so make sure that gets done!
