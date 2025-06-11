---
title: GitLab CI for GitHub SCM
status: proposed
creation-date: "2024-11-26"
authors: [ "@mfanGitLab" ]
coaches: [ "@allison.browne" ]
dris: [ "@rutshah", "@carolinesimpson" ]
owning-stage: "~devops::verify"
participating-stages: []
toc_hide: true
---

{{< engineering/design-document-header >}}

## Summary

Some customers using GitHub Source Code Management want to integrate with GitLab's CI solutions to run pipelines and leverage our security features. They do not want to mirror the source code on GitLab and want instantaneous pipelines for their pushes.

## Motivation

Our current approach with GitHub <-> GitLab integration is with mirroring at a minimum 5 minute interval. This is too slow for feedback, uses long lived personal access tokens, and requires a copy of GitHub's source code on GitLab. Additionally, as the entire project and all pipelines are run under the user that initiates the integration; this could lead to a permission mismatch.

With an effective solution, we can sell GitLab CI/CD and other Ops features to businesses that use GitHub as a source control management tool.

CI tools in the market currently use GitHub source to run CI/CD externally. [Buildkite, CircleCi, TeamCity, Jenkins](https://GitLab.com/GitLab-org/GitLab/-/issues/460503#note_2115425859) are examples where the runner pulls directly from GitHub. In such examples, the pipeline config file can live either on GitHub or in the services.

### Goals

As an initial MVC we want to support

1. A GitHub App (on/off GitHub's marketplace - this doesn't need to be in MVP, users can install with a direct link)
1. Near instant pipeline creation upon GitHub pushes
1. We will only be communicating with GitHub via short lived tokens
1. Correct user management system, through direct user mapping
    1. Each user on GitHub's side should have a billable seat on GitLab
    1. GitLab users should have the least privilege needed to run pipelines
1. Runners are the only place to interact (fetch/pull) with the source code
    1. Customer source code is stored in a GitHub Repo and is never stored in a GitLab repo

### Non-Goals

Items that are out of scope (For MVP) include in order of importance

1. GitLab Self-Managed
    1. Why: This should be quite do-able. Assuming we have docs for SM users to set-up. We _should_ get this from the MVP
1. GitHub Enterprise
    1. Why: This will require extra set-up, licensing, testing, and manual configurations as GitHubApp and Actions are different on the Enterprise level
1. GitLab Security Scans, Pipeline execution policies, Merge Request widgets from artifacts (Junit/Cobertura)
    1. Why: Because the source code is in GitHub and our scans only work natively there'll be extra work to fetch and analyze the code
    1. Similary for the MR widget, since the Merge Request is on GitHub side we can't modify it
1. Different actions on GitHub side that might want/require CI such as
    1. Forks
    2. Tags
    3. Branch name changes, [etc](https://GitLab.com/GitLab-org/GitLab/-/issues/493378#future-iterations)
    4. Why: These are bit more complex as they rely on different webhooks as well as sha configurations

These are do-able, but just to reduce scope and complexity we can iterate on additional features.

## Proposal

![Architecture](/images/handbook/engineering/architecture/design-documents/ci_pipelines_for_github/GithubGitlabWorkflow.png)

GitHub will communicate with GitLab via our GitHubApp via webhooks.
GitLab will generate a user access token via the GitHub App for the user that triggered the webhook, and create a pipeline for that user.
When runners poll GitLab's api, GitLab will provide the GitHub repo location and access token for the runner to fetch the code from.
GitLab will then use GitHub's API to update the commit with the pipeline status.

## Design and implementation details

### Prerequisites

The process begins with a [GitHub organization owner](https://docs.github.com/en/enterprise-cloud@latest/apps/oauth-apps/building-oauth-apps/differences-between-github-apps-and-oauth-apps#who-can-install-github-apps-and-authorize-oauth-apps) creating the projects in GitLab that would be used as CI/CD.

We would reuse [CI/CD For External Repositories](https://GitLab.com/projects/new#cicd_for_external_repo), and have a "checkbox" to not mirror the repository (UI pending). During the import we'll save the GitHub repository id. [Issue for discussion](https://gitlab.com/gitlab-org/gitlab/-/issues/509200)

After import, we would automatically enable a new GitLab integration called GitHub SCM for these projects.

Then the customer will use a direct link to install our GitHub App, and choose which repos on GitHub to install it on. Upon GitHub app installation, and for OAuth, each user will need to accept the terms and conditions listed in ![GitHubApp Installation](/images/handbook/engineering/architecture/design-documents/ci_pipelines_for_github/GitHubAppInstallation.png). The App's permissions will be set-up by GitLab and hosted on GitHub. This will be set up with the basic permission of (`read_repository`, and `write_commit_status`). We can modify these permissions and add new ones anytime via [Modifying GitHub App](https://docs.github.com/en/apps/maintaining-github-apps/modifying-a-github-app-registration#changing-the-permissions-of-a-github-app), although this will require users to re-accept the conditions and re-authenticate.

Each user that would want to trigger pipeline would need to OAuth with GitHub. Either via OAuth login or connecting their GitLab account with GitHub

### Once everything is set-up properly

The steps here will be in accordance with the diagram above

1. User on GitHub initiates a push to a branch
1. GitHub will automatically trigger a webhook via our GitHubApp. This'll send a `push` payload to GitLab
    1. [GitLab Webhook Push Payload](https://docs.GitHub.com/en/webhooks/webhook-events-and-payloads#push)
1. GitLab will use the signed payload's `sender_id` and map that to a GitLab user.
    1. If the GitLab user does not have permissions to run pipelines. A pipeline will be created but will fail immediately. Anyone with correct permissions can re-try this pipeline.
1. If the GitLab user does have permissions to create pipelines.
    1. GitLab will use the `refresh_token` of the user to generate a new `access_token`, so we can [act on behalf of the user](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-with-a-github-app-on-behalf-of-a-user#identifying-and-authorizing-users-for-github-apps)
    1. This `access_token` is repository specific, and will only have
        1. Read access to repos
        1. Write access to commit_status (to update the commit with pipeline details)
    1. There's no way to revoke the `access_token` without also revoking the `refresh_token`. But if want to be safe, we can just re-generate a new `access_token` after the pipeline has finished.
    1. The pipeline will be generated by pulling a `.gitlab-ci.yml` file present on GitHub side.
        1. To make this easier in the future to work with `includes`; we'll require this `.yml` file to be in a `gitlab` folder
1. GitLab calls `CreatePipelineService` sidekiq job and sets up the pipeline.
1. Rails will pass the necessary params including the `access_token` to the runner. It will also update the pipeline on GitHub side to "running" via GitHub API.
1. The runner will directly call GitHub with the `access_token` to fetch and pull the repository for that branch
1. When the pipeline finishes, runner will update GitLab as normal
1. GitLab will use the `installation access token` to post a commit on GitHub with the pipeline's sha. Notifying them the commit has a finished pipeline.
    1. [GitHub commit status API](https://docs.GitHub.com/en/rest/commits/statuses?apiVersion=2022-11-28#create-a-commit-status)
    1. This will be limited to the 5k/15k rate limits per hour. But this should be sufficient for our customers.

**Step 3 expanded:**

There are many ways this authorization could play out. More details in [Corresponding Implementation Issue](https://GitLab.com/GitLab-org/GitLab/-/issues/505056).

We will enforce a 1:1 user mapping on GitHub <-> GitLab. Currently this is product's preferred approach. This allows us to make sure the product is properly licensed with the correct number of seats.

Each user will need to manually link their GitHub accounts to their GitLab profiles. Which can only be done once GitHub is used as an [authentication provider](https://docs.gitlab.com/ee/integration/github.html).

The downside is that users or bot accounts that do not have a GitLab account mapping will not be able to run pipelines. The workaround is to create a failed pipeline that maintainers can manually run.

**Step 4.4** - As the `gitlab-ci.yml` file is hosted externally on GitHub.com. Only this file will then be pulled in when a webhook is triggered. This'll keep the source code and config file in sync.

There are certain yaml definitions which would not work with this approach. The `includes:` yaml definition would not work, similarly cross-pipeline configs, security scans, pipeline test reports, execution policies would need additional patching to work.

## Alternative Solutions

For Step 3.

Another idea is to use [service accounts](https://docs.GitLab.com/ee/user/profile/service_accounts.html). Have the customer create a service account they want to use and assign it to a project with the permission set or [custom role](https://docs.GitLab.com/ee/user/custom_roles.html). Then we'll have a UI allowing them to select which service account they want to use for these GitHub webhook actions.

This'll need composite identities, as cross-project pipelines can exist. Additionally, there'll be extra considerations for billing as GitHub users can share GitLab seats

For Step 4.

Another option is for the GitHub App to use Installation Access Tokens.

This would be a great option if not for the rate limits. As IAT have a limit of 5k/hour calls for GitHub.com and 15k/hour for GitHub Enterprise, this is not enough for large customers without a caching mechanism in place. This limit is on the organization level and shared between all their repositories.

[Authentication as a GitHub App installation](https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation)

## Questions for Reviewers

1. Compliance Question: Do we need additional terms and conditions depending on how we run & keep GitHub code?
    1. As the job logs will be kept on GitLab side
    1. Answer: (Rutshah) should be okay to keep job logs
2. Compliance Question/PM: Some customers don't want anything else aside from runner interacting with the source code. This requirement is unclear; does referencing, have snipplets of file/artifact names in the job logs invalidate this requirement?
    1. Partial Answer: (Rutshah) These passby references should be okay
