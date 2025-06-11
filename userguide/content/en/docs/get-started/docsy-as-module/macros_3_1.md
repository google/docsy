---
title: Macros
description: Support Operations documentation page for Zendesk macros
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/macros"
---

## What are macros

As per
[Zendesk](https://support.zendesk.com/hc/en-us/articles/115001236988-Creating-macros-for-tickets):

> A macro is a prepared response or action that an agent can manually apply
> when they are creating or updating tickets. Macros contain actions that can
> update ticket properties.
>
> Unlike triggers and automations, macros only contain actions, not conditions.
> Conditions aren't used because nothing is automatically evaluating tickets to
> determine if a macro should be applied. Agents evaluate tickets and apply
> macros manually as needed.

### Change management

Keep in mind, all change management should be stemming from an issue, first and
foremost.

#### Creating a new macro with managed content

When your new macro is going to be using managed content, you will first
need to get the managed content file in the Support managed content project.
Remember to use the correct filenames for all of this to prevent
[Pipeline error “No managed content file”](#pipeline-error-no-managed-content-file)
in the sync repo project later on.

Only after that has been done should you proceed to the next steps, which will
match the steps detailed in
[Creating a new macro without managed content](#creating-a-new-macro-without-managed-content)
exactly.

#### Creating a new macro without managed content

This is a bit simpler than creating one with managed content. You will start by
creating a placeholder macro within Zendesk itself (as you will need the ID for
the sync repo). To do this, open up the admin page of your corresponding Zendesk
instance ([Global](https://gitlab.zendesk.com/admin) or
[US Government](https://gitlab-federal-support.zendesk.com/admin)), click
`Workspaces` on the left-hand side, and then click `Macros`. On this page, you
will want to click `Add macro`. This will bring up the new macro page.

On this page, you will do the following:

- Set the name to "Placeholder for ISSUE_LINK" (replacing `ISSUE_LINK` with the
  link to the issue you are working out of).
- Set an action of:
  - `Brand` `GitLab`

After doing so, click the blue `Create` button. You will then locate the
placeholder macro you just created and get the ID value from it (if you click
it, you can see it in the URL).

From here, create the merge request in the sync repo project.

#### Updating an existing macro

Updating an existing macro is considerably easier than creating a new one.
Simply change the code in the source project and it will occur via the
sync repo.

The one caveat you need to consider is when you are changing a macro to allow
for managed content (or to disable it using managed content).

If you are adding managed content for the automation, see
[Creating a new macro with managed content](creating-a-new-macro-with-managed-content)
as that process will detail setting up the connection.

If you are removing managed content for the macro, you will simply change the
the macro file in the source sync repo project via your merge request. After
that has been merged, you will want to comment on the original issue asking the
requester to remove the file from the corresponding Support managed content
project.

#### Deactivating a macro

To deactivate a macro, you will simply change the macro file in the source sync
repo project via your merge request. Ensure you merge request does the
following:

- Moves the file from the `data/active` folder to the `data/inactive` folder
- Sets `active: true` to `active: false` in the file.
- Set an action of:
  - `Brand` `GitLab`

#### Deleting a deactivated macro

**NOTE** We avoid doing this unless a macro has been deactivated for a full
year. After that point it can be deleted completely.

To delete a macro, you need to purge it from multiple locations:

- Sync repo project
- Support managed content project
- Zendesk itself

The first two can be done via merge requests, but the last one has to be done in
the Zendesk instance itself. To do this, open up the admin page of your
corresponding Zendesk instance ([Global](https://gitlab.zendesk.com/admin) or
[US Government](https://gitlab-federal-support.zendesk.com/admin)), click
`Workspaces` on the left-hand side, and then click `Macros`. On this page, you
will want to click `Inactive`, hover over the macro you are deleting, click the
three vertical dots at right-hand side of the macro, and click `Delete`. This
will cause a pop-up modal to appear asking you to confirm the action. Click blue
`Delete macro` button to do so.

### Troubleshotting

#### Pipeline error "No managed content file"

This happens when we have said a managed content file should exist, but the git
submodule does not contain one. This is commonly caused by:

- The file does not actually exist. If this is the case, you need to assist in
  getting it created in the Support managed content project
- Filename mismatches. This all works very specifically using naming
  conventions. If there is something even *slightly* off, your pipelines will
  encounter issues. The scripts are looking for a file that has the **exact**
  same name as the macros's `title`, replacing all instances of `:` with `/`. So
  if your macro has a title of `Jason::Do a Thing`, the corresponding Support
  managed content project should have a file with the same name
  (`Jason/Do a Thing.md`). You will need to assist in correcting that on the
  Support managed content project first, and then rebase your merge request
  after that is done.
- You created the merge request in the source project before the file was added
  to the Support managed content project. To rectify this, get the Support
  managed content project MR completed and merged first. Once that has been
  done, you can rebase your MR by making a comment of `/rebase`. After it
  performs the rebase, your MR's CI/CD pipeline should pass.

#### Pipeline error "Blank ID"

This means the script detected a YAML file within `data/active` or
`data/inactive` that has an `id` value of blank (or nil). You will need to
locate the file mentioned in the error and correct that.

#### Pipeline error "Blank title"

This means the script detected a YAML file within `data/active` or
`data/inactive` that has an `title` value of blank (or nil). You will need to
locate the file mentioned in the error and correct that.

#### Pipeline error "Inactive macro in active folder"

This means the script detected a YAML file within `data/active` that has an
`active` value of `false`. You will need to locate the file mentioned in the
error and correct that.

#### Pipeline error "Active macro in inactive folder"

This means the script detected a YAML file within `data/inactive` that has an
`active` value of anything other than `false`. You will need to locate the file
mentioned in the error and correct that.

#### Pipeline error "GitLab errors"

This is a generic error message that will detail some error that occurred when
trying to either create or update the tag used on the source project. The exact
steps to fix this will vary based on the nature of the error itself. You will
need to review the error and determine the next steps from there.

If you are unsure how to proceed, it is best to seek assistance from the wider
team.

### Source Projects

#### Zendesk Global

- [Support managed content project](https://gitlab.com/gitlab-com/support/zendesk-global/macros)
- [Sync repo project](https://gitlab.com/gitlab-support-readiness/zendesk-global/macros)

#### Zendesk US Government

- [Support managed content project](https://gitlab.com/gitlab-com/support/zendesk-us-government/macros)
- [Sync repo project](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/macros)

## Naming standards

Macros are a bit unique in Zendesk. They have categorization, but it is not
obvious in the UI. Instead, the categorization is determined based on the name
of the macro itself. Essentially, every group of words becomes a "folder" of
sorts in the macros dropdown selector. The separator currently used by Zendesk
is two colons (`::`).

This can get a bit confusing and hard to learn the ins and outs of, so when in
doubt, reach out to your fellow Support Ops team members.
