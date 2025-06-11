---
title: Triggers
description: Support Operations documentation page for Zendesk triggers
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/triggers"
---

## What are Zendesk triggers?

As per
[Zendesk](https://support.zendesk.com/hc/en-us/articles/203662246-About-triggers-and-how-they-work):

> Triggers are business rules you define that run immediately after tickets are
> created or updated. For example, a trigger can be used to notify the customer
> when a ticket has been opened. Another can be created to then notify the
> customer when the ticket is solved.

### Change management

Keep in mind, all change management should be stemming from an issue, first and
foremost.

#### Creating a new trigger with managed content

When your new trigger is going to be using managed content, you will first
need to get the managed content file in the Support managed content project.
Remember to use the correct filenames for all of this to prevent
[Pipeline error “No managed content file”](#pipeline-error-no-managed-content-file)
in the sync repo project later on.

Only after that has been done should you proceed to the next steps, which will
match the steps detailed in
[Creating a new trigger without managed content](#creating-a-new-trigger-without-managed-content)
exactly.

#### Creating a new trigger without managed content

This is a bit simpler than creating one with managed content. You will start by
creating a placeholder trigger within Zendesk itself (as you will need the ID
for the sync repo). To do this, open up the admin page of your corresponding
Zendesk instance ([Global](https://gitlab.zendesk.com/admin) or
[US Government](https://gitlab-federal-support.zendesk.com/admin)), click
`Objects and rules` on the left-hand side, and then click `Triggers`. On this
page, you will want to click `Add trigger`. This will bring up the new trigger
page.

On this page, you will do the following:

- Set the name to "Placeholder for ISSUE_LINK" (replacing `ISSUE_LINK` with the
  link to the issue you are working out of).
- Select the category you plan on the trigger being in
- Set an `all` conditons of:
  - `Brand` `is not` `GitLab`
- Set an action of:
  - `Brand` `GitLab`

After doing so, click the blue `Create` button. You will then locate the
placeholder trigger you just created and get the ID value from it (if you click
it, you can see it in the URL).

From here, create the merge request in the sync repo project. Keep in mind you
are likely to need to adjust **many** trigger files due to positioning.

#### Updating an existing trigger

Updating an existing trigger is considerably easier than creating a new one.
Simply change the code in the source project and it will occur via the
sync repo.

The one caveat you need to consider is when you are changing a trigger to allow
for managed content (or to disable it using managed content).

If you are adding managed content for the automation, see
[Creating a new trigger with managed content](creating-a-new-trigger-with-managed-content)
as that process will detail setting up the connection.

If you are removing managed content for the trigger, you will simply change the
the trigger file in the source sync repo project via your merge request. After
that has been merged, you will want to comment on the original issue asking the
requester to remove the file from the corresponding Support managed content
project.

#### Deactivating a trigger

To deactivate a trigger, you will simply change the trigger file in the source
sync repo project via your merge request. Ensure you merge request does the
following:

- Moves the file from the `data/active` folder to the `data/inactive` folder
- Sets `active: true` to `active: false` in the file.
- Set an `all` conditons of:
  - `Brand` `is not` `GitLab`
- Set an action of:
  - `Brand` `GitLab`

#### Deleting a deactivated trigger

**NOTE** We avoid doing this unless a trigger has been deactivated for a full
year. After that point it can be deleted completely. Do also note that this
will result in a complete change to `positions` and can cause the need for
subsequent merge requests to the sync repo project.

To delete a trigger, you need to purge it from multiple locations:

- Sync repo project
- Support managed content project
- Zendesk itself

The first two can be done via merge requests, but the last one has to be done in
the Zendesk instance itself. To do this, open up the admin page of your
corresponding Zendesk instance ([Global](https://gitlab.zendesk.com/admin) or
[US Government](https://gitlab-federal-support.zendesk.com/admin)), click
`Objects and rules` on the left-hand side, and then click `Triggers`. On this
page, you will want to click the `Status` dropdown and select `Inactive`. You
will then locate the trigger to delete, hover over it, click the three vertical
dots at the right-hand side, and then click `Delete` This will cause a pop-up
modal to appear asking you to confirm the action. Click red `Delete trigger`
button to do so.

### Troubleshooting

#### Pipeline error "No managed content file"

This happens when we have said a managed content file should exist, but the git
submodule does not contain one. This is commonly caused by:

- The file does not actually exist. If this is the case, you need to assist in
  getting it created in the Support managed content project
- Filename mismatches. This all works very specifically using naming
  conventions. If there is something even *slightly* off, your pipelines will
  encounter issues. The scripts are looking for a file that has the **exact**
  same name as the triggers's `title` and be within a corresponding folder using
  the same name as the trigger's category. So if your trigger has a title of
  `Do a Thing` and it is within the category `Assignee`, the corresponding
  Support managed content project should have a file with the same name in the
  corresponding category folder (`Assignee/Do a Thing.md`). You will need to
  assist in correcting that on the Support managed content project first, and
  then rebase your merge request after that is done.
- You created the merge request in the source project before the file was added
  to the Support managed content project. To rectify this, get the Support
  managed content project MR completed and merged first. Once that has been
  done, you can rebase your MR by making a comment of `/rebase`. After it
  performs the rebase, your MR's CI/CD pipeline should pass.

#### Pipeline error "Blank ID"

This means the script detected a YAML file within `data/active` or
`data/inactive` that has an `id` value of blank (or nil). You will need to
locate the file mentioned in the error and correct that.

#### Pipeline error "Blank position"

This means the script detected a YAML file within `data/active` or
`data/inactive` that has an `position` value of blank (or nil). You will need to
locate the file mentioned in the error and correct that.

#### Pipeline error "Blank title"

This means the script detected a YAML file within `data/active` or
`data/inactive` that has an `title` value of blank (or nil). You will need to
locate the file mentioned in the error and correct that.

#### Pipeline error "Inactive trigger in active folder"

This means the script detected a YAML file within `data/active` that has an
`active` value of `false`. You will need to locate the file mentioned in the
error and correct that.

#### Pipeline error "Active trigger in inactive folder"

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

- [Support managed content project](https://gitlab.com/gitlab-com/support/zendesk-global/triggers)
- [Sync repo project](https://gitlab.com/gitlab-support-readiness/zendesk-global/triggers)

#### Zendesk US Government

- [Support managed content project](https://gitlab.com/gitlab-com/support/zendesk-us-government/triggers)
- [Sync repo project](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/triggers)

## Positioning

Many components of Zendesk using positioning to determine the overall run order.
With triggers being event-based events, it is often *very* important to consider
positioning. A good thought to have is "what order would I want these running in
if they all ran at once?"

By default, new triggers gain a position of `N+1`, where `N` is the highest
position value of all triggers in that category currently in Zendesk (both
active and inactive). This is desired and we should *rarely* need to change
this.

To edit positions in the Zendesk UI, go to the triggers page. From there,
click the three horizontal dots at the top-right of the page (on the same line
as the search bar). That will bring up a sub-menu with the option
`Edit order.` Clicking that will then allow you to drag and drop the list of
triggers into the order you desire. After making the changes, click the blue
`Save` button at the top right of the page.

**Note**: Both active and inactive triggers have an integer positional value.
While this does not matter in the UI, it will matter in the repo sync we
utilize.

### Trigger standards

To ensure all triggers we utilize are both consistent in nature and transparent
in their actions, we strive to meet some standards on all triggers we work with.

#### Categories

As Zendesk triggers have built-in categorization, we utilize this to help
separate triggers into sensible groupings and keep positioning simpler to
determine.

If you are unsure where to place a trigger or believe a new category might be
needed, it is best to speak with the rest of the Support Ops team to discuss.

#### Naming standards

As Zendesk triggers support categorization, the naming standards for triggers
revolves around the name of the actual trigger being explicit in what it does.

#### Condition standards

Generally speaking, we aim to make trigger conditions as simple as possible.
When possible, you should use condition sets that are very specific and
succinct. As an example, if you wanted a trigger to only run when the form is
`Support Ops`, it is better to simply put a condition of "Form is Support Ops"
than adding exclusions for *every* other form. This can take time and practice
to learn, so when in doubt, pair with the rest of the Support Ops team!
