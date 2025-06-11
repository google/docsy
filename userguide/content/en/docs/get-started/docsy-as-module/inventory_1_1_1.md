---
title: "GitLab Application Security Inventory"
description: "The AppSec Inventory is a private GitLab project to identify and track all projects, components, and dependencies that matter for AppSec"
---

## GitLab Application Security Inventory

Securing GitLab means building a security program at scale. The number of changes in the codebase is constantly increasing, along with the number of side projects.
Keeping track of all these moving parts can not rely only upon our current understanding and vision of the GitLab software architecture.
Automation is a key aspect of our work, and GitLab is no exception.

The AppSec Inventory is a private GitLab project to identify and track all projects, components, and dependencies important to us.
The project is available at [https://gitlab.com/gitlab-com/gl-security/product-security/inventory](https://gitlab.com/gitlab-com/gl-security/product-security/inventory)
to GitLab team members. The Inventory is built using this [CLI tool](https://gitlab.com/gitlab-com/gl-security/product-security/gib/).

Not all projects are important, and we certainly don't want to monitor projects that are POCs, demos, or tests.
That's why we need to categorize the projects created by GitLab team members, understand their nature, and make decisions at scale.

### Categories

To quickly identify the purpose and characteristics of a project, a strict categorization is necessary.
The following categories can be used to decorate the projects we want to monitor.

| Categories | Description |
| -------- | ----------- |
| `product` | Part of GitLab's software supply chain (i.e. used to build, package, release, deploy GitLab, or used as part of the product) |
| `library` | A library, package source, component (not necessarily a `product` one) |
| `deploy` | Used to deploy GitLab.com |
| `website` | Deployed to a website (URL will be required) |
| `api/service` | |
| `green/yellow/orange/red_data` | [Data classification standard](/handbook/security/data-classification-standard/) |
| `3rdparty` | Interaction with 3rd parties |
| `demo/test/poc` | |
| `temporary` | Temporary projects (should be removed at some point) |
| `internal` | Available for GitLab team members only |
| `external` | User facing |
| `use_pat` | Personal Access Token being used |
| `marked_for_deletion` | Project should be removed |
| `keep_private` | Should remain private indefinitely |
| `docs` | Used to generate documentation |
| `tooling` | Engineering tooling  |
| `container` | A Docker image is built |
| `fork` | Fork of another project (on gitlab.com or somewhere else) |
| `secrets_monitoring` | Monitor secrets in groups (see this [confidential issue](https://gitlab.com/gitlab-com/gl-security/product-security/gib/-/issues/64)) |
| `security_policy_project` | [GitLab security policy projects](https://docs.gitlab.com/user/application_security/policies/#security-policy-project) |

### Policies

We apply several policies depending on the categories defined above. These policies, which include security requirements, are available [here](https://gitlab.com/gitlab-com/gl-security/product-security/gib/-/tree/main/policies) and in our (internal only) [inventory](https://gitlab.com/gitlab-com/gl-security/product-security/inventory).

They are used are controls for our [GitLab Projects Baseline Requirements](/handbook/security/gitlab_projects_baseline_requirements/).

### How to categorize projects

The inventory relies on a folder tree structure, used as a database, in a `data/` folder.
Leaves are folders and can be groups or projects, and they're identified by specific files (`project.json` for projects, `group.json` for groups).
These files are created automatically when syncing the Inventory.

The tree structure reflects the organization of groups and projects in a GitLab instance, in our case: https://gitlab.com.
For example, the [GitLab project](https://gitlab.com/gitlab-org/gitlab/) will be located under [`data/gitlab-org/gitlab/`](https://gitlab.com/gitlab-com/gl-security/product-security/inventory/-/tree/main/data/gitlab-org/gitlab) in the Inventory.

Projects can be categorized by creating a `properties.yml` file in their folder. This file can contain a `categories` array, with the categories of the project.

For example, to add the `product` and `library` categories:

```yaml
categories:
  - product
  - library
```

Subgroups can be ignored (skipped during synchronization) by adding an `ignore` file into their folder.

Learn more with the [GitLab Inventory Builder Documentation](https://gitlab.com/gitlab-com/gl-security/product-security/gib/-/blob/main/README.md), and this [example inventory](https://gitlab.com/gitlab-com/gl-security/product-security/inventory-example).

#### How to add or update your GitLab Project

1. Note the namespace of your project.
1. Visit <https://gitlab.com/gitlab-com/gl-security/product-security/inventory/-/tree/main/data/>
1. Navigate the folder structure to find your project's existing `properties.yml` file.
    1. If your project does not exist, create a file at `data/your-namespace/your-project/properties.yml`.
    1. Projects created in GitLab's namespaces are added automatically on a weekly basis.
1. Open a Merge Request that adds or updates the categories. Remember to "say why, not just what".

### Websites

Along with the categorization of the projects, the Inventory is also used to link websites we deploy with their projects. The `properties.yml` file can contain a `urls` array to list all the URLs (starting with `https://`) of a project. These URLs are used to validate the SSL configuration of the servers, and insecure findings are reported.

For example, to add the GitLab website URL:

```yaml
urls:
  - https://gitlab.com
```

### Weekly triage process

A synchronization pipeline runs every week, on Monday mornings. If successful, it will [generate a Merge Request](https://gitlab.com/gitlab-com/gl-security/product-security/inventory/-/merge_requests) to review the changes.

The review aims to:

1. Categorize newly created projects: Add a `properties.yml` file in the project folder to specify its categories. Ask the project owner in doubt.
1. Ignore newly created groups we don't want to track: Add an `ignore` file if the group should be ignored. Delete its subgroups and projects in the review Merge Request.
1. Review projects and groups updates: Review `project.json` and `group.json` for changes, especially the visibility (public/private).

The Merge Request will report a test coverage, corresponding to the ratio of projects categorized. Ideally, these review Merge Requests keep the same coverage, which means the new projects are categorized before getting merged.
