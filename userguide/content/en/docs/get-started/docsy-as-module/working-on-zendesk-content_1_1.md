---

title: Working on Zendesk automations, triggers, macros and views
description: "How to collaborate on Zendesk automations, triggers, macros and views"
category: Zendesk
---

## General process

To make it easier for Support Engineers to contribute to things that are managed by Support Operations, data and code have been separated for some items. A more detailed, technical explanation is available [in the Readiness handbook](/handbook/support/readiness/operations/docs/change_management/sync_repos/#v2). This approach removes the need for Support Operations to review every change proposed for Zendesk views, macros, triggers and automations.

For any **changes** to the content of Zendesk views, macros, triggers and automations consider their impact first. If your changes go beyond something like fixing a typo or updating a link and have broader repercussions for the team, consider the [Change Management in GitLab Support](/handbook/support/managers/change-management/) handbook page. Otherwise you can suggest your changes directly via a merge request in the relevant managed content project.

**For creating new content or renaming existing content** (e.g. a new macro, or renaming a view), an STM issue is required as Support Operations has to handle these actions. The managed content projects only allow *managing content* of existing items.

### Managed content projects

The [tables in the Readiness handbook](/handbook/support/readiness/operations/docs/change_management/sync_repos/#zendesk-global) are the SSOT, see the `Support Project` column to find the corresponding project where we can easily change contents.

Refer to the corresponding projects and create a merge request with your changes:

- [gitlab-com/support/zendesk-global/automations](https://gitlab.com/gitlab-com/support/zendesk-global/automations)
- [gitlab-com/support/zendesk-global/macros](https://gitlab.com/gitlab-com/support/zendesk-global/macros)
- [gitlab-com/support/zendesk-global/triggers](https://gitlab.com/gitlab-com/support/zendesk-global/triggers)
- [gitlab-com/support/zendesk-global/views](https://gitlab.com/gitlab-com/support/zendesk-global/views)

Whether you're proposing minor changes directly or something bigger following an RFC discussion, tag a Support Manager for review and ask them to merge the changes. Once changes have been merged in one of these projects, you'll notice that the `Sync Stage` badge says `Awaiting Deployment` on the project overview page. This indicates that there's changes in the project that will be rolled out during the next [regular deployment](/handbook/support/readiness/operations/docs/change_management/#standard-change-management).

#### Macros

Macros are [deployed immediately](/handbook/support/readiness/operations/docs/change_management/#zendesk-macros-change-management). For information on macros, please see [Zendesk Global Macros](/handbook/support/readiness/operations/docs/zendesk/macros/).

- If you want to edit the wording of a macro, make an MR to the repo (Zendesk Global or Zendesk US Government).
- If you want to make non-wording changes (renaming it, add/removing options, etc.), use the [Support Super Form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) 'Edit a Zendesk macro' option.
- If you want to create a new macro, use the [Support Super Form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) 'Create a Zendesk macro' option.
- To discuss a macro (but not actually action on anything), use a support-team-meta issue.

## Previewing variable replacement

When using [variables](/handbook/support/readiness/operations/docs/zendesk/liquid/#common-variables) it can be useful to verify that they will be working as you expect them to. A simple way to do this is to create a test ticket, pasting the content of your automation, trigger, or macro in there and observing the outcome.
