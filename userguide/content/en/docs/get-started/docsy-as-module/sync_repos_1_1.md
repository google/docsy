---
title: Sync Repos
description: Information about Support Readiness sync repos
canonical_path: "/handbook/support/readiness/operations/docs/sync_repos"
---

## v1

This method has all code pertaining to the area in one repository. This includes
both the "frontend" and "backend" code. Changes made to the repository are
synced directly to the Zendesk instance it is for. Due to the sensitive and
potentially destructive nature of the "backend" code, this requires Support
Readiness review for any and all changes.

### How v1 works

**NOTE** This details how it works at the root level. Please see
[Change Management](../) for more information on how this is actually deployed.

- The repository is scanned for YAML files, containing all needed aspects of the
  item
- The source (often Zendesk) is scanned for all items relating to the area
- These are compared to determine the creations and updates required for the
  source to align with the repository
- All creations and updates are made to the source

## v2

Our newest method of managing sync repos, this focuses on enabling contributions
from other teams in a safe, secure, and efficient way. Where applicable, these
syncs utilize
[git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules) and CI/CD
to separate the "backend" code managed by Support Readiness from the "frontend"
code that others often want to contribute to.

In this manner, there exists a "Support Project" which contains the "frontend"
code and a "Sync Project" that contains the "backend" code. This enables the
sensitive and potentially destructive nature of the "backend" code to be
maintained separately from the much safer "frontend" code. When using this
method, Support Readiness review is not required for any changes to the
"frontend" code.

### How v2 works

**NOTE** This details how it works at the root level. Please see
[Change Management](../) for more information on how this is actually deployed.

- The repository is scanned for YAML files, containing all needed aspects of the
  item
  - This uses metadata within the items to determine if the file contains
    content managed by another team
  - In cases where this occurs, it checks the git submodule to locate the file
    which contains the managed content, putting it into place.
- The source (often Zendesk) is scanned for all items relating to the area
- These are compared to determine the creations and updates required for the
  source to align with the repository
- All creations and updates are made to the source

A more detailed explanation will be recorded and this section updated to point
to it in the near future.

#### Adding an item to a v2 sync repo

Whenever an item needs to be *added* to a v2 sync repo, the following process
should be used:

1. Create a placeholder of the item in the system
   - As an example, if you needed a new Zendesk Global trigger, go into Zendesk,
     [create the trigger](../../zendesk/triggers/#creating-a-trigger-via-zendesk)
     (using conditions that apply to no ticket and actions that will not make
     any real changes), set the item as inactive (deactivated), and copy the ID
     value.
1. Determine if the item will contain managed content (text, webhook, email,
   etc.).
   1. If so, navigate to the corresponding Support Project and create a merge
      request that will make the new file using the formatting and information
      from the project itself.
   1. Assign this merge request to the support managers group.
   1. Add a comment on the merge request linking back to the corresponding
      [support-team-meta](https://gitlab.com/gitlab-com/support/support-team-meta)
      issue for the changes and explaining when the merge request needs to be
      merged by
1. Create a merge request to add the new file in the Sync Project that aligns
   with the needed values for the item
   - If it is using managed content, remember to have the needed metadata values
     set to true

#### Deactivating an item in a v2 sync repo

To deactivate an item in a v2 sync repo, the following process should be used:

1. Create a merge request in the Sync Project that moves the file for the item
   in question to the inactive folder (in the corresponding file structure) and
   sets the `active` value to `false`.
1. Add a comment linking the merge request to the back to the corresponding
   [support-team-meta](https://gitlab.com/gitlab-com/support/support-team-meta)
   issue.

**NOTE** If a corresponding file exists in the Support Project for the item, it
should *not* be deleted or removed from said Support Project.

#### Completely removing an item in a v2 sync repo

**NOTE** This should not be required at any time other than routine maintenance
of the repositories to remove items that have been inactive for more than 6
months,

To completely remove an item in a v2 sync repo (i.e. delete it), the following
process should be used:

1. Navigate to of the item in the system and delete it (see
   [Zendesk Documentation](../../zendesk/) for more information)
1. Create a merge request in the Sync Project that deletes the file.
1. Once that merge request is merged, determine if the file had contained
   managed content. If it did, make sure to create a merge request in the
   corresponding Support Project to delete the file. Make sure to assign this to
   the support managers group and add a comment linking to the merge request in
   step 2.

Make sure to follow these steps exactly, as going out of order can result in
broken pipelines, deployments, etc.

## Zendesk Global

| Category                | Type | Support Project | Sync Project |
|-------------------------|:----:|-----------------|--------------|
| Account Settings        | v2   | N/A | [zendesk-global/account-settings](https://gitlab.com/gitlab-support-readiness/zendesk-global/account-settings) |
| Agents                  | v2   | N/A | [zendesk-global/users/agents](https://gitlab.com/gitlab-support-readiness/zendesk-global/users/agents) |
| Apps                    | v2   | N/A | [zendesk-global/apps](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps) |
| Articles                | v2   | N/A | [zendesk-global/articles](https://gitlab.com/gitlab-support-readiness/zendesk-global/articles) |
| Automations             | v2   | [zendesk-global/automations](https://gitlab.com/gitlab-com/support/zendesk-global/automations) | [zendesk-global/automations](https://gitlab.com/gitlab-support-readiness/zendesk-global/automations) |
| Groups                  | v2   | N/A | [zendesk-global/groups](https://gitlab.com/gitlab-support-readiness/zendesk-global/groups) |
| Macros                  | v2   | [zendesk-global/macros](https://gitlab.com/gitlab-com/support/zendesk-global/macros) | [zendesk-global/macros](https://gitlab.com/gitlab-support-readiness/zendesk-global/macros) |
| Organization Fields     | v2   | N/A | [zendesk-global/organizations/fields](https://gitlab.com/gitlab-support-readiness/zendesk-global/organizations/fields) |
| SLA Policies            | v2   | N/A | [zendesk-global/sla-policies](https://gitlab.com/gitlab-support-readiness/zendesk-global/sla-policies) |
| Ticket Forms and Fields | v2   | N/A | [zendesk-global/tickets/forms-and-fields](https://gitlab.com/gitlab-support-readiness/zendesk-global/tickets/forms-and-fields) |
| Triggers                | v2   | [zendesk-global/triggers](https://gitlab.com/gitlab-com/support/zendesk-global/triggers) | [zendesk-global/triggers](https://gitlab.com/gitlab-support-readiness/zendesk-global/triggers) |
| User Fields             | v2   | N/A | [zendesk-global/users/fields](https://gitlab.com/gitlab-support-readiness/zendesk-global/users/fields) |
| User Roles              | v2   | N/A | [zendesk-global/users/roles](https://gitlab.com/gitlab-support-readiness/zendesk-global/users/roles) |
| Views                   | v2   | [zendesk-global/views](https://gitlab.com/gitlab-com/support/zendesk-global/views) | [zendesk-global/views](https://gitlab.com/gitlab-support-readiness/zendesk-global/views) |
| ZD <> SFDC Sync         | v2   | N/A | [zendesk-global/zendesk-salesforce-sync](https://gitlab.com/gitlab-support-readiness/zendesk-global/zendesk-salesforce-sync) |

## Zendesk US Federal

| Category                | Type | Support Project | Sync Project |
|-------------------------|:----:|-----------------|--------------|
| Account Settings        | v2   | N/A | [zendesk-us-government/account-settings](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/account-settings) |
| Agents                  | v2   | N/A | [zendesk-us-government/users/agents](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/users/agents) |
| Apps                    | v2   | N/A | [zendesk-us-government/apps](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/apps) |
| Articles                | v2   | N/A | [zendesk-us-government/articles](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/articles) |
| Automations             | v2   | [zendesk-us-government/automations](https://gitlab.com/gitlab-com/support/zendesk-us-government/automations) | [zendesk-us-government/automations](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/automations) |
| Groups                  | v2   | N/A | [zendesk-us-government/groups](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/groups) |
| Macros                  | v2   | [zendesk-us-government/macros](https://gitlab.com/gitlab-com/support/zendesk-us-government/macros) | [zendesk-us-government/macros](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/macros) |
| Organization Fields     | v2   | N/A | [zendesk-us-government/organizations/fields](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/organizations/fields) |
| SLA Policies            | v2   | N/A | [zendesk-us-government/sla-policies](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/sla-policies) |
| Ticket Forms and Fields | v2   | N/A | [zendesk-us-government/tickets/forms-and-fields](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/tickets/forms-and-fields) |
| Triggers                | v2   | [zendesk-us-government/triggers](https://gitlab.com/gitlab-com/support/zendesk-us-government/triggers) | [zendesk-us-government/triggers](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/triggers) |
| User Fields             | v2   | N/A | [zendesk-us-government/users/fields](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/users/fields) |
| User Roles              | v2   | N/A | [zendesk-us-government/users/roles](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/users/roles) |
| Views                   | v2   | [zendesk-us-government/views](https://gitlab.com/gitlab-com/support/zendesk-us-government/views) | [zendesk-us-government/views](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/views) |
| ZD <> SFDC Sync         | v2   | N/A | [zendesk-us-government/zendesk-salesforce-sync](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/zendesk-salesforce-sync) |
