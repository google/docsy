---
title: Automations
description: Support Operations documentation page for Zendesk automations
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/automations"
---

## What are Zendesk automations?

As per
[Zendesk](https://support.zendesk.com/hc/en-us/articles/203662236-About-automations-and-how-they-work):

> Automations are similar to triggers because both define conditions and actions
> that modify ticket properties and optionally send email notifications to
> customers and agents. Where they differ is that automations execute when a
time event occurs after a ticket property was set or updated, rather than
immediately after a ticket is created or updated.

The simpler way to think of it is automations are triggers that do not run
instantly. They are time based than event based.

### Change management

Keep in mind, all change management should be stemming from an issue, first and
foremost.

#### Creating a new automation with managed content

When your new automation is going to be using managed content, you will first
need to get the managed content file in the Support managed content project.
Remember to use the correct filenames for all of this to prevent
[Pipeline error “No managed content file”](#pipeline-error-no-managed-content-file)
in the sync repo project later on.

Only after that has been done should you proceed to the next steps, which will
match the steps detailed in
[Creating a new automation without managed content](#creating-a-new-automation-without-managed-content)
exactly.

#### Creating a new automation without managed content

This is a bit simpler than creating one with managed content. You will start by
creating a placeholder automation within Zendesk itself (as you will need the ID
for the sync repo). To do this, open up the admin page of your corresponding
Zendesk instance ([Global](https://gitlab.zendesk.com/admin) or
[US Government](https://gitlab-federal-support.zendesk.com/admin)), click
`Objects and rules` on the left-hand side, and then click `Automations`. On this
page, you will want to click `Add automation`. This will bring up the new
automation page.

On this page, you will do the following:

- Set the title to "Placeholder for ISSUE_LINK" (replacing `ISSUE_LINK` with the
  link to the issue you are working out of).
- Set `all` conditions of:
  - `Ticket: Type` `is not` `Incident`
  - `Ticket: Status category` `less than` `Solved`
- Set an action of:
  - `Ticket: Type` `Incident`

After doing so, click the black `Create automation` button. You will then locate
the placeholder automation you just created and get the ID value from it (if you
click it, you can see it in the URL).

From here, create the merge request in the sync repo project.

#### Updating an existing automation

Updating an existing automation is considerably easier than creating a new one.
Simply change the code in the source project and it will occur via the
sync repo.

The one caveat you need to consider is when you are changing an automation to
allow for managed content (or to disable it using managed content).

If you are adding managed content for the automation, see
[Creating a new automation with managed content](creating-a-new-automation-with-managed-content)
as that process will detail setting up the connection.

If you are removing managed content for the automation, you will simply change
the automation file in the source sync repo project via your merge request.
After that has been merged, you will want to comment on the original issue
asking the requester to remove the file from the corresponding Support managed
content project.

#### Deactivating an automation

To deactivate an automation, you will simply change the automation file in the
source sync repo project via your merge request. Ensure you merge request does
the following:

- Moves the file from the `data/active` folder to the `data/inactive` folder
- Sets `active: true` to `active: false` in the file.
- Sets `all` conditions of:
  - `Ticket: Type` `is not` `Incident`
  - `Ticket: Status category` `less than` `Solved`
- Set an action of:
  - `Ticket: Type` `Incident`
  - `Ticket: Add tags` `XXXX` (replacing `XXXX` with the automation's ID)

#### Deleting a deactivated automation

**NOTE** We avoid doing this unless an automation has been deactivated for a
full year. After that point it can be deleted completely. Do also note that this
will result in a complete change to `positions` and can cause the need for
subsequent merge requests to the sync repo project.

To delete an automation, you need to purge it from multiple locations:

- Sync repo project
- Support managed content project
- Zendesk itself

The first two can be done via merge requests, but the last one has to be done in
the Zendesk instance itself. To do this, open up the admin page of your
corresponding Zendesk instance ([Global](https://gitlab.zendesk.com/admin) or
[US Government](https://gitlab-federal-support.zendesk.com/admin)), click
`Objects and rules` on the left-hand side, and then click `Automations`. On this
page, you will want to click `Inactive`, hover over the automation you are
deleting, click the three vertical dots at right-hand side of automation, and
click `Delete`. This will cause a pop-up modal to appear asking you to confirm
the action. Click blue `Delete automation` button to do so.

### Troubleshooting

#### Pipeline error "No managed content file"

This happens when we have said a managed content file should exist, but the git
submodule does not contain one. This is commonly caused by:

- The file does not actually exist. If this is the case, you need to assist in
  getting it created in the Support managed content project
- Filename mismatches. This all works very specifically using naming
  conventions. If there is something even *slightly* off, your pipelines will
  encounter issues. The scripts are looking for a file that has the **exact**
  same name as the automation's `title`. So if your automation has a title of
  `Jason::Do a Thing`, the corresponding Support managed content project should
  have a file with the same name (`Jason::Do a Thing.md` for managed content,
  `Jason::Do a Thing.webhook` for webhooks, or `Jason::Do a Thing.email` for
  emails). You will need to assist in correcting that on the Support managed
  content project first, and then rebase your merge request after that is done.
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

#### Pipeline error "Inactive automation in active folder"

This means the script detected a YAML file within `data/active` that has an
`active` value of `false`. You will need to locate the file mentioned in the
error and correct that.

#### Pipeline error "Active automation in inactive folder"

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

- [Support managed content project](https://gitlab.com/gitlab-com/support/zendesk-global/automations)
- [Sync repo project](https://gitlab.com/gitlab-support-readiness/zendesk-global/automations)

#### Zendesk US Government

- [Support managed content project](https://gitlab.com/gitlab-com/support/zendesk-us-government/automations)
- [Sync repo project](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/automations)

## Positioning

Many components of Zendesk using positioning to determine the overall run order.
With automations being time-based events, it is not often as important to worry
about positioning as with something like triggers or views. We should still
strive to be very deliberate in the positioning we use. A good thought to have
is "what order would I want these running in if they all ran at once?"

By default, new automations gain a position of `N+1`, where `N` is the highest
position value of all automations currently in Zendesk (both active and
inactive). This is desired and we should *rarely* need to change this.

To edit positions in the Zendesk UI, go to the automations page. From there,
click the three horizontal dots at the top-right of the page (on the same line
as the search bar). That will bring up a sub-menu with the option
`Reorder page.` Clicking that will then allow you to drag and drop the list of
automations into the order you desire. After making the changes, click the blue
`Save` button at the top right of the page.

**Note**: Both active and inactive automations have a integer positional value.
While this does not matter in the UI, it will matter in the repo sync we
utilize.

### Automation standards

To ensure all automations we utilize are both consistent in nature and
transparent in their actions, we strive to meet some standards on all
automations we work with.

### Naming standards

As Zendesk automations do not support categorization at this time, we have
implemented a naming standard to help categorize the automations we have. This
standard is as follows:

`What it impacts::What it does/Who it impacts::Name of automation`

#### Example 1

If you were making an automation to send a notification to Jason once a ticket
has been in an open state for more than 24 hours, you would use the automation
name of:

`Notifications::Jason::Notify ticket has been open for more than 24 hours`

This is because:

- the `What it impacts` is "Notifications", since it sends a notification.
- the `What it does/Who it impacts` is "Jason", since it sends a
  notification to Jason.
- the `Name of automation` can be whatever the creator wants for this, but it
  should be relatively short and describe the automation in a way that anyone
  who knows our naming standards can look at it and know what it does.

#### Example 2

If you were making an automation that sets a ticket to `Closed` after it has
been in the state of Solved for 24 hours, you would use the automation name of:

`Status::Close::Autoclose after 24 hours solved`

This is because:

- the `What it impacts` is "Status", since it impacts a ticket's status.
- the `What it does/Who it impacts` is "Close", since it closes a ticket.
- the `Name of automation` can be whatever the creator wants for this, but it
  should be relatively short and describe the automation in a way that anyone
  who knows our naming standards can look at it and know what it does.

## Condition standards

Generally speaking, we aim to make automation conditions as simple as
possible. When possible, you should use condition sets that are very specific
and succinct. As an example, if you wanted an automation to only run when the
form is `Support Ops`, it is better to simply put a condition of "Form is
Support Ops" than adding exclusions for *every* other form. This can take time
and practice to learn, so when in doubt, pair with the rest of the Support Ops
team!
