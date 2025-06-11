---
title: GitLab Repositories
---

GitLab consists of many subprojects. A curated list of GitLab projects can be found at the [GitLab Engineering projects](/handbook/engineering/projects/) page.

## Creating a new project

When creating a new project, please follow these steps:

1. Read and familiarize yourself with our stance on [Dogfooding](/handbook/engineering/development/principles/#dogfooding). Be aware that as part of a product development organization that builds a tool for people like us, that our default is to add features and tooling to the GitLab project. This is still true when the effort to do so is 2-5x. Despite this, if you still feel you need to create a project outside of GitLab, you must follow this process to [document the decision](/handbook/product/product-processes/#dogfooding-process)
1. Ensure the project is under a subgroup of:
   * [`gitlab-org`](https://gitlab.com/gitlab-org) for anything related to the application.
   * [`gitlab-com`](https://gitlab.com/gitlab-com) for anything strictly company related.

   To avoid complications with context and permissions inheritance, creating projects directly under these root namespaces (e.g. `gitlab-org/NEW_PROJECT`) is discouraged. Only Maintainers can create projects there when necessary, but should also avoid doing so for the reason mentioned before.
   If you don't have the permissions to create a project there, you can create an [Access Request issue](/handbook/it/end-user-services/onboarding-access-requests/access-requests/#individual-or-bulk-access-request) and ping one of the Maintainers ([gitlab-org](https://gitlab.com/groups/gitlab-org/-/group_members?sort=access_level_desc), and [gitlab-com](https://gitlab.com/groups/gitlab-com/-/group_members?sort=access_level_desc)) for approval.
1. Configure the project repository to use `main` as the name of the default branch.
1. [Add the project to the list of GitLab projects in `projects.yml`](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/doc/projects.md).
1. Add a license to the repository. Contact #legal as to which license to add. A sample license is here: [`gitlab-org/gitlab` MIT License](https://gitlab.com/gitlab-org/gitlab/blob/master/LICENSE), but contact legal before using it.
1. Add a section titled "Developer Certificate of Origin and License" to `CONTRIBUTING.md` in the repository. It is easiest to simply copy-paste the [`gitlab-org/gitaly` DCO + License section](https://gitlab.com/gitlab-org/gitaly/-/blob/master/CONTRIBUTING.md#developer-certificate-of-origin-license) verbatim.
1. Add any further relevant details to the Contribution Guide. See [Contribution Example](https://gitlab.com/gitlab-org/gitlab/blob/master/CONTRIBUTING.md).
1. Add a link to `CONTRIBUTING.md` from the project's `README.md`.
1. Add a [CODEOWNERS](https://docs.gitlab.com/ee/user/project/codeowners/) file, to make it easy for contributors to figure out which teams are best suited to review their changes.
    * Use teams rather than individuals as owners, to make it self updating over time and resilient to people taking time off
    * You can scope ownership to subdirectories or individual files, but it should contain at the very least a top-level catch all for any new or non explicitly mentionned file.
1. When possible, projects should have the following [Merge request settings enabled](https://docs.gitlab.com/ee/user/project/settings/#delete-the-source-branch-on-merge-by-default):
    * [Merge Trains](https://docs.gitlab.com/ee/ci/pipelines/merge_trains.html).
    * [Delete source branch after merge](https://docs.gitlab.com/ee/user/project/settings/).
    * [Merge only if pipeline succeeds](https://docs.gitlab.com/ee/user/project/merge_requests/auto_merge.html).
    * [Merge only when all threads are resolved](https://docs.gitlab.com/ee/user/discussions/index.html#only-allow-merge-requests-to-be-merged-if-all-threads-are-resolved).
1. When possible, projects should have the following [Pipeline settings enabled](https://docs.gitlab.com/ee/ci/pipelines/settings.html):
    * [Auto-cancel pending pipelines](https://docs.gitlab.com/ee/ci/pipelines/settings.html#auto-cancel-pending-pipelines).
1. Projects should have the minimum [Baseline Configurations setup for MR Approval Rules and Protected Branch Settings](/handbook/security/standards/gitlab_projects_baseline_requirements/)
1. Projects should have [`Users can request access` setting disabled](https://docs.gitlab.com/ee/user/project/members/index.html#prevent-users-from-requesting-access-to-a-project) to discourage granting accidental external access.
1. If needed, make sure to [set up a default CI/CD configuration](#cicd-configuration).
1. If the project is part of work that is shipped to customers, add it to [projects_part_of_product.csv](https://gitlab.com/gitlab-data/analytics/blob/master/transform%2Fsnowflake-dbt%2Fdata%2Fprojects_part_of_product.csv) by opening an MR to that file or following the [process outlined by Engineering Productivity](/handbook/product/groups/product-analysis/engineering/dashboards).
1. Help [AppSec](/handbook/security/product-security/application-security/) [categorize your new project](/handbook/security/product-security/application-security/inventory.md#how-to-categorize-projects).
1. Enable the appropriate [security scanners](https://docs.gitlab.com/ee/user/application_security/).
1. Onboard the project to Renovate (https://gitlab.com/gitlab-org/frontend/renovate-gitlab-bot), and set up a process to regularly triage findings and update dependencies
1. If the repository is public, set up a [security mirror](https://gitlab.com/gitlab-org/release/docs/blob/master/general/security/mirrors.md).
   This is necessary to address security vulnerabilities without disclosing them before they are fixed.

When changing the settings in an existing repository, it's important to keep [communication](/handbook/engineering/engineering-comms/#communication) in mind. In addition to discussing the change in an issue and announcing it in relevant chat channels (e.g., `#development`), consider announcing the change in the [Engineering Week-in-Review document](/handbook/engineering/engineering-comms/#communication). This is particularly important for changes to the [GitLab](https://gitlab.com/gitlab-org/gitlab) repository.

### CI/CD configuration

Following is the default `.gitlab-ci.yml` config that all projects under the `gitlab-org` and `gitlab-com` groups should use:

``` yaml
include:
  - template: 'Workflows/MergeRequest-Pipelines.gitlab-ci.yml'

default:
  tags:
    - gitlab-org
```

Or if the project needs to support stable/security branches, use the following instead:

```yaml
workflow:
  rules:
    # For merge requests, create a pipeline.
    - if: '$CI_MERGE_REQUEST_IID'
    # For `master` branch, create a pipeline (this includes on schedules, pushes, merges, etc.).
    - if: '$CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH'
    # For tags, create a pipeline.
    - if: '$CI_COMMIT_TAG'
    # For stable, and security branches, create a pipeline.
    - if: '$CI_COMMIT_BRANCH =~ /^[\d-]+-stable(-ee)?$/'
    - if: '$CI_COMMIT_BRANCH =~ /^security\//'

default:
  tags:
    - gitlab-org
```

This:

1. Includes a [`workflow`](https://docs.gitlab.com/ee/ci/yaml/#workflowrules-templates) to create pipelines for MR, `master`, and tags only.
1. Defines the `gitlab-org` tag to be used by default which corresponds to cost-optimized runners, with no Docker support. Jobs that need Docker support would use the `gitlab-org-docker` tag.

If a job requires the usage of Docker, it needs to be defined only in the context of the specific job with the `gitlab-org-docker` tag:

``` yaml
sast:
  tags:
    - gitlab-org-docker
```

If a job requires the usage of Windows, SaaS runners on Windows should be used. For the exact configuration please check the [SaaS runner on Windows documentation](https://docs.gitlab.com/ee/ci/runners/hosted_runners/windows.html#machine-types-available-for-windows).

### Publishing a Project

To publish a project to a package repository, please follow [these directions](/handbook/engineering/developer-onboarding/#ruby-gems).

### Further Security Recommendations

1. Strongly consider [creating a threat model](/handbook/security/product-security/application-security/threat-modeling/howto/) for the project.
1. Consider requesting an [AppSec review](/handbook/security/product-security/application-security/appsec-reviews/) when the project is more established.
1. Reach out to the AppSec team (`@gitlab-com/gl-security/appsec` and `#sec-appsec`) for any further questions.
