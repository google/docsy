---
title: Views
description: Support Operations documentation page for Zendesk views
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/views"
---

## What are Zendesk views?

As per
[Zendesk](https://support.zendesk.com/hc/en-us/articles/203690806-Creating-views-to-manage-ticket-workflow):

> Views are a way to organize your tickets by grouping them into lists based on
> certain criteria. For example, you can create a view for unsolved tickets
> that are assigned to you, a view for new tickets that need to be triaged, or a
> view for pending tickets that are awaiting response. Using views can help you
> determine what tickets need attention from you or your team and plan
> accordingly.

Currently, Zendesk has 3 view types:

- Default: Pre-defined views created by Zendesk
- Shared: Views created by the Zendesk Administrator(s) (ie. Support Ops)
- Personal: Views created by you and usable only by you

Currently, Zendesk views have some limitations:

- Only 30 (previously 12) visible views (Default and Shared) will be displayed.
- Views cannot use criteria that is not "defined", meaning it must be selectable
  data (text fields will not work, as an example).
- You can only display up to 10 personal views and Support Ops cannot manage or
  view them.
- Views will not include
  [archived tickets](https://support.zendesk.com/hc/en-us/articles/203657756-About-ticket-archiving)
  (i.e. Closed tickets after 120 days.)

## Change management

Keep in mind, all change management should be stemming from an issue, first and
foremost.

### Creating a new view with managed content

When your new view is going to be using managed content, you will first need to
get the managed content file in the Support managed content project. Remember to
use the correct filenames for all of this to prevent
[Pipeline error “No managed content file”](#pipeline-error-no-managed-content-file)
in the sync repo project later on.

Only after that has been done should you proceed to the next steps, which will
match the steps detailed in
[Creating a new view without managed content](#creating-a-new-view-without-managed-content)
exactly.

### Creating a new view without managed content

This is a bit simpler than creating one with managed content. You will start by
creating a placeholder view within Zendesk itself (as you will need the ID for
the sync repo). To do this, open up the admin page of your corresponding Zendesk
instance ([Global](https://gitlab.zendesk.com/admin) or
[US Government](https://gitlab-federal-support.zendesk.com/admin)), click
`Workspaces` on the left-hand side, and then click `Views`. On this page, you
will want to click `Add view`. This will bring up the new view page.

On this page, you will do the following:

- Set the name to "Placeholder for ISSUE_LINK" (replacing `ISSUE_LINK` with the
  link to the issue you are working out of).
- Set grouping to group by the ticket form in ascending order
- Set sorting to sort by the ticket ID in ascending order
- Remove all columns except for ticket ID
- Ensure the restrictions allow anyone to access it

After doing so, click the blue `Save` button. You will then locate the
placeholder view you just created and get the ID value from it (if you click it,
you can see it in the URL).

From here, create the merge request in the sync repo project. Keep in mind you
are likely to need to adjust **many** view files due to positioning.

### Updating an existing view

Updating an existing view is considerably easier than creating a new one. Simply
change the code in the source project and it will occur via the sync
repo.

The one caveat you need to consider is when you are changing a view to allow for
managed content (or to disable it using managed content).

If you are adding managed content for the view, see
[Creating a new view with managed content](#creating-a-new-view-with-managed-content)
as that process will detail setting up the connection.

If you are removing managed content for the view, you will simply change the
view file in the source sync repo project via your merge request. After that has
been merged, you will want to comment on the original issue asking the requester
to remove the file from the corresponding Support managed content project.

### Deactivating a view

To deactivate a view, you will simply change the view file in the source sync
repo project via your merge request. Ensure you merge request does the
following:

- Moves the file from the `data/active` folder to the `data/inactive` folder
- Sets `active: true` to `active: false` in the file.
- Set grouping to group by the ticket form in ascending order
- Set sorting to sort by the ticket ID in ascending order
- Remove all columns except for ticket ID
- Ensure the restrictions allow anyone to access it

### Deleting a deactivated view

**NOTE** We avoid doing this unless a view has been deactivated for a full year.
After that point it can be deleted completely. Do also note that this will
result in a complete change to `positions` and can cause the need for subsequent
merge requests to the sync repo project.

To delete a view, you need to purge it from multiple locations:

- Sync repo project
- Support managed content project
- Zendesk itself

The first two can be done via merge requests, but the last one has to be done in
the Zendesk instance itself. To do this, open up the admin page of your
corresponding Zendesk instance ([Global](https://gitlab.zendesk.com/admin) or
[US Government](https://gitlab-federal-support.zendesk.com/admin)), click
`Workspaces` on the left-hand side, and then click `Views`. On this page, you
will want to `Inactive` tab. You will then locate the view to delete, hover over
it, click the three vertical dots at the right-hand side, and then click
`Delete view` This will cause a pop-up modal to appear asking you to confirm the
action. Click blue `Delete view` button to do so.

## Troubleshooting

### Pipeline error "No managed content file"

This happens when we have said a managed content file should exist, but the git
submodule does not contain one. This is commonly caused by:

- The file does not actually exist. If this is the case, you need to assist in
  getting it created in the Support managed content project
- Filename mismatches. This all works very specifically using naming
  conventions. If there is something even *slightly* off, your pipelines will
  encounter issues. The scripts are looking for a file that has the **exact**
  same name as the views's `title`. So if your VIEW has a title of `Do a Thing`,
  the corresponding Support managed content project should have a file with the
  same name (`active/Do a Thing.yaml`). You will need to assist in correcting
  that on the Support managed content project first, and then rebase your merge
  request after that is done.
- You created the merge request in the source project before the file was added
  to the Support managed content project. To rectify this, get the Support
  managed content project MR completed and merged first. Once that has been
  done, you can rebase your MR by making a comment of `/rebase`. After it
  performs the rebase, your MR's CI/CD pipeline should pass.

### Pipeline error "Blank ID"

This means the script detected a YAML file within `data/active` or
`data/inactive` that has an `id` value of blank (or nil). You will need to
locate the file mentioned in the error and correct that.

### Pipeline error "Blank position"

This means the script detected a YAML file within `data/active` or
`data/inactive` that has an `position` value of blank (or nil). You will need to
locate the file mentioned in the error and correct that.

### Pipeline error "Blank title"

This means the script detected a YAML file within `data/active` or
`data/inactive` that has an `title` value of blank (or nil). You will need to
locate the file mentioned in the error and correct that.

### Pipeline error "Inactive trigger in active folder"

This means the script detected a YAML file within `data/active` that has an
`active` value of `false`. You will need to locate the file mentioned in the
error and correct that.

### Pipeline error "Active trigger in inactive folder"

This means the script detected a YAML file within `data/inactive` that has an
`active` value of anything other than `false`. You will need to locate the file
mentioned in the error and correct that.

### Pipeline error "GitLab errors"

This is a generic error message that will detail some error that occurred when
trying to either create or update the tag used on the source project. The exact
steps to fix this will vary based on the nature of the error itself. You will
need to review the error and determine the next steps from there.

If you are unsure how to proceed, it is best to seek assistance from the wider
team.

## Source Projects

### Zendesk Global

- [Support managed content project](https://gitlab.com/gitlab-com/support/zendesk-global/views)
- [Sync repo project](https://gitlab.com/gitlab-support-readiness/zendesk-global/views)

### Zendesk US Government

- [Support managed content project](https://gitlab.com/gitlab-com/support/zendesk-us-government/views)
- [Sync repo project](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/views)

## Positioning

Many components of Zendesk using positioning to determine the overall run order.
With views being how agents locate tickets, it is often *very* important to
consider positioning.

By default, new views gain a position of `N+1`, where `N` is the highest
position value of all views currently in Zendesk (both active and inactive).
This is desired and we should *rarely* need to change this.

## View standards

To ensure all views we utilize are both consistent in nature and transparent in
their actions, we strive to meet some standards on all views we work with.

### Naming standards

The name used for the view should be simple, clear, and concise. You want the
name to convey what the view is used for.

### Condition standards

Generally speaking, we aim to make view conditions as simple as possible. When
possible, you should use condition sets that are very specific and succinct. As
an example, if you wanted a view to only run when the form is `Support Ops`, it
is better to simply put a condition of "Form is Support Ops" than adding
exclusions for *every* other form. This can take time and practice to learn, so
when in doubt, pair with the rest of the Support Ops team!
