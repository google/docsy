---
title: Roles
description: Support Operations documentation page for Zendesk roles
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/roles"
---

## What are Zendesk roles?

Zendesk uses Roles as a way to maintain permission sets for agents.

### Change management

Keep in mind, all change management should be stemming from an issue, first and
foremost.

We manage role membership via Zendesk itself (on user profiles), but only with
corresponding access request issues.

**NOTE** Roles are very important to both the use and security of Zendesk. You
should be **very** careful with these at all times. When in doubt, seek
assistance from a Fullstack Engineer.

#### Creating a new role

You will start by creating a placeholder role within Zendesk itself (as you will
need the ID for the sync repo). To do this, open up the admin page of your
corresponding Zendesk instance ([Global](https://gitlab.zendesk.com/admin)
or [US Government](https://gitlab-federal-support.zendesk.com/admin)), click
`People` on the left-hand side, and then click `Roles`. On this page page, you
will want to click `Create role`. This will bring up the new role page.

On this page, you will do the following:

- Set the name to "Placeholder for ISSUE_LINK" (replacing `ISSUE_LINK` with the
  link to the issue you are working out of).
- Enter a description of "ISSUE_LINK" (replacing `ISSUE_LINK` with the link to
  the issue you are working out of).

After doing so, click the blue `Create role` button. You will then locate the
placeholder ticket field you just created and get the ID value for it

From here, create the merge request in the sync repo project.

Once it is live, access request issues will need to be created to add people to
new role.

#### Updating an existing role

Updating an existing role is considerably easier than creating a new one. Simply
change the code in the source project and it will occur via the sync
repo.

#### Deleting a role

**NOTE** This can be a **very** dangerous action to perform. Exercise extreme
caution in doing do.

To delete a role, you need to purge it from multiple locations:

- Sync repo project
- Zendesk itself

The first can be done via merge requests, but the last one has to be done in the
the Zendesk instance itself. Before doing so, 100% of the role's members should
be removed from the role.

After doing so, open up the admin page of your corresponding Zendesk instance
([Global](https://gitlab.zendesk.com/admin) or
[US Government](https://gitlab-federal-support.zendesk.com/admin))
`People` on the left-hand side, and then click `Roles`. On this page page, will
locate the role you are aiming to delete and click the three vertical dots on
the right-hand side and then click `Delete`.

This will cause a pop-up modal to appear asking you to confirm the action. Click
the red `Delete role` button to do so.

### Troubleshooting

#### Pipeline error "Blank ID"

This means the script detected a YAML file within `data/` that has an `id` value
of blank (or nil). You will need to locate the file mentioned in the error and
correct that.

#### Pipeline error "Blank name"

This means the script detected a YAML file within `data/` that has an `name`
value of blank (or nil). You will need to locate the file mentioned in the error
and correct that.

#### Pipeline error "GitLab errors"

This is a generic error message that will detail some error that occurred when
trying to either create or update the tag used on the source project. The exact
steps to fix this will vary based on the nature of the error itself. You will
need to review the error and determine the next steps from there.

If you are unsure how to proceed, it is best to seek assistance from the wider
team.

### Source Projects

#### Zendesk Global

- [Sync repo project](https://gitlab.com/gitlab-support-readiness/zendesk-global/users/roles)

#### Zendesk US Government

- [Sync repo project](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/users/roles)
