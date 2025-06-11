---
title: Project setup
description: Operations workflows page for setting up projects on gitlab.com
canonical_path: "/handbook/security/customer-support-operations/workflows/gitlab/project-setup"
---

{{% alert title="Note" color="danger" %}}

We all must follow this process to ensure our projects are setup properly in a secured and maintable way. If every you are questioning what to do, please reach out to your fellow team members.

{{% /alert %}}

For all projects we create, we follow a specific process.

## Step 1 - Use a project template

The starting place to setup a project for Customer Support Operations is going to be with one of our project templates. We currently have 5 to choose from:

- [Zendesk Global App](https://gitlab.com/gitlab-support-readiness/project-templates/zendesk-global-app)
- [Zendesk US Government App](https://gitlab.com/gitlab-support-readiness/project-templates/zendesk-us-government-app)
- [Zendesk Sync Repo](https://gitlab.com/gitlab-support-readiness/project-templates/zendesk-sync-repo)
- [Forms](https://gitlab.com/gitlab-support-readiness/project-templates/forms)
- [General](https://gitlab.com/gitlab-support-readiness/project-templates/general)

The exact one you will use depends on what the project's purpose is. If you are ever unsure which to use, reach out to the other Customer Support Operations team members to determine which one is thhe ideal one ot use.

Knowing which template you will be using will then let you move to creating the project. To do this:

1. Navigate to the correct group
   - The correct group will be somewhere under the [GitLab Support Readiness namespace](https://gitlab.com/groups/gitlab-support-readiness/).
   - If you are ever unsure which to use, reach out to the other Customer Support Operations team members to determine which one is the ideal one ot use
1. Click `New project` at the top-right of the page
   - If you do not see that button, please reach out to a Fullstack Engineer, Customer Support Operaitons for assistance.
1. Click `Create from template`
1. Click the `Groups` tab
1. Locate the project template you are to use and click `Use template` to the right of it
1. Enter a sensible project name
1. Ensure the `Visibility Level` is set to `Private`
1. Click `Create project`

This will then use the project template to create the project (this can take a few minutes to complete).

## Step 2 - Verify settings

With the project created, we need to manually verify all the settings. While the project template should cover most of these, you should _always_ check all settings to ensure they align. If anything differs from the below list, correct it.

- General
  - Visibility, project features, permissions
    - Project visibility: Private
    - Additonal options
      - [x] Require authentication to view media files
    - Issues: disabled
    - Repository: enabled
      - Merge requests: enabled
      - Forks: disabled
      - Git Large File Stroage (LFS): disabled
      - CI/CD: enabled
    - Container registry
    - Analytics: disabled
    - Requirements: disabled
    - Security and com: disabledpliance
    - Wiki: disabled
    - Snippets: enabled
    - Package registry: disabled
    - Package registry: disabled
    - Model experiments: disabled
    - Pages: disabled
      - NOTE: This will be _enabled_ if making a form type project
    - Monitor: disabled
    - Environments: disabled
    - Feature flags: disabled
    - Infrastructure: disabled
    - Releases: disabled
    - GitLab Duo: enabled
    - Email notifications
      - [x] Enable email notifications
        - [x] Include diff previews
      - [x] Show default emoji reactions
      - [x] Warn about Potentially Unwanted Characters
    - CI/CD Catalog project: disabled
  - Badges
    - None
  - Service Desk
    - Disabled
- Integrations
  - None
- Webhooks
  - None
    - NOTE: You might be adding some later if needed, but initally there should not be any
- Access tokens
  - None
    - NOTE: You might be adding some later if needed, but initally there should not be any
- Repository
  - Branch defaults
    - Default branch: master
    - [x] Auto-close references issues on default branch
  - Branch rules
    - All branches
      - Squash commits: Require
    - master
      - Requires CODEOWNERS approval
      - Allowed to merge: Maintainers
      - Allowed to push and merge: 1 user
  - Push rules
    - [ ] Reject unverified users
    - [ ] Reject inconsistent user name
    - [ ] Reject unsigned commits
    - [ ] Reject commits that aren't DCO certified
    - [ ] Do not allow users to remove Git tags with git push
    - [ ] Check whether the commit author is a GitLab user
    - [ ] Prevent pushing secret files
    - Require expression in commit messages: blank
    - Reject expression in commit messages: blank
    - Branch name: blank
    - Commit author's email: blank
    - Prohibited file names: blank
    - Maximum file size (MB): 0
  - Mirroring repositories
    - None
      - NOTE: You might be adding some later if needed, but initally there should not be any
  - Protected branches
    - master
      - Allowed to merge: Maintainers
      - Allowed to push and merge: GitLab Support Bot
      - Allowed to force push: disabled
      - Code owner approval: enabled
  - Protected tags
    - None
  - Deploy tokens
    - None
  - Deploy keys
    - None
- Merge Requests
  - Merge requests
    - M`erge method: Merge commit
    - Merge options
      - [ ] Enable merged results pipelines
        - NOTE: In rare situations this may be enabled, but never by default
      - [ ] Automatically resolve merge request diff threads when they become outdated
      - [x] Show link to create or view a merge request when pushing from the command line
      - [x] Enable "Delete source branch" option by default
    - Squah commits when merging: Require
    - Merge checks
      - [x] Pipelines must succeed
        - NOTE: This will vary based on project template type.
      - [x] All threads must be resolved 
      - [ ] Status checks must succeed
    - Status checks
      - None
    - Merge suggestions: blank
    - Merge commit message template

      ```plaintext
      Merge branch '%{source_branch}' into '%{target_branch}'

      %{title}

      %{issues}

      See merge request %{reference}
      ```

    - Squash commit message template

      ```plaintext
      %{title}
      ```

    - Default description template for merge requests: blank`
  - Merge request approvals
    - Coverage-Check: disabled
    - Minimum required approvals: 0
    - Approval settings
      - [x] Prevent approval by author
      - [x] Prevent approvals by users who add commits
      - [x] Prevent editing approval rules in merge requests
      - [ ] Require user re-authentication (password or SAML) to approve
    - When a commit is added: Removal all approvals
  - Merge request branch workflow
    - None
- CI/CD
  - General pipelines
    - [ ] Public pipelines
    - [x] Auto-cancel redundant pipelines
    - [x] Prevent outdated deployment jobs
      - [x] Allow job retries even if the deployment job is outdated. 
    - [x] Use separate caches for protected branches
    - Minimum role required to cancel a pipeline or job: Developer
    - CI/CD configuration file: blank
    - Git strategy: git fetch
    - Git shallow clone: 20
    - Timeout: 1h
    - Automatic pipeline cleanup: blank
  - Auto DevOps
    - [ ] Default to Auto DevOps pipeline
  - Protected environments
    - None
  - Pipeline trigger tokens
    - None
      - NOTE: You might be adding some later if needed, but initally there should not be any
  - Automatic deployment rollbacks
    - [ ] Enable automatic rollbacks
  - Deploy freezes
    - None
  - Job token permissions
    - Authorized groups and projects: Only this project and any groups and projects in the allowlist
    - CI/CD job token allowlist
      - Only the the project itself should be present in the list
    - Limit access from this project (Deprecated): disabled
    - Add an existing project to the scope
      - Only the the project itself should be present in the list
  - Secure files
    - None
  - Pipeline subscriptions
    - Subscriptions
      - None
    - Subscribed to this project
      - None
- Monitor
  - Error tracking
    - Enable error tracking
      [ ] Active
    - Error tracking backend: gitLab
  - Alerts
    - None
  - Incidents
    - Active: disabled
  - Status page
    - [ ] Active
    - Status page URL: blank
    - S3 Bucket name: blank
    - AWS region: blank
    - AWS access key ID: blank
    - AWS Secret access key: blank

## Step 3 - Add the correct memberships

After ensuring the settings are accurate, you need to add the correct memberships to the project.

- If this is a US Government only project, then add the group `gitlab-support-readiness/readiness-us-gov-only` as `Maintainers`
- For everything else, then add the group `gitlab-support-readiness/all-readiness` as `Maintainers`

## Step 4 - Setup CI/CD variables

With that done, you should get your CI/CD variables setup and in place. The parent namespace sets many of them for you, so the ones you would need to focus on are:

- API token values (Zendesk, GitLab, Calendly, etc.)
- Slack webhooks

Double check what variables are set by the group (listed on the page you would add variables to the project) to determine which variables you need to add.

## Step 5 - Add your code

Here you will add your code. You should also do this in a way that creates a MR. Said MR should always be peer reviewed before merging (the MR should enforce this).

## Step 6  - Anything else

Here you will do whatever else might be needed for the project. This could include setting up webhooks, [mirroring the code to a different project](./mirroring), etc.
