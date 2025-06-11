---
title: Ticket Forms
description: Support Operations documentation page for Zendesk ticket forms
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/forms"
---

## What are ticket form

Ticket forms are the forms utilized by the user to create tickets (when using the web UI). These then translate the responses on the form into ticket metadata.

These fall into one of two types:

- Public - meaning both agents and end-users can see these
- Internal - meaning only agents can see these

### Change management

Keep in mind, all change management should be stemming from an issue, first and
foremost.

**NOTE** Ticket forms are *very* difficult to manage. The smallest changes to
them can result in *very* complex changes being required in the backend. If you
are not fully comfortable with all the areas of Zendesk, you might want to pair
with a Fullstack Engineer.

#### Creating a new ticket form

You will start by creating a placeholder ticket form within Zendesk itself (as
you will need the ID for the sync repo). To do this, open up the admin page of
your corresponding Zendesk instance ([Global](https://gitlab.zendesk.com/admin)
or [US Government](https://gitlab-federal-support.zendesk.com/admin)), click
`Objects and rules` on the left-hand side, and then click `Forms`. On this page
page, you will want to click `Add form`. This will bring up the new ticket form
page.

On this page, you will do the following:

- Set the title to "Placeholder for ISSUE_LINK" (replacing `ISSUE_LINK` with the
  link to the issue you are working out of).
- Ensure "Editable for end users" **is not** checked
- Ensure the only ticket fields present are
  - `Subject`
  - `Description`

After doing so, click the blue `Save` button. You will then locate the
placeholder ticket form you just created (should be at the bottom), hover over
it, click the three vertical dots at the right-hand side of the ticket form,
and click `Deactivate`. After doing so, you will need to get the ID value for it
(if you click it, you can see it in the URL).

From here, create the merge request in the sync repo project. Keep in mind you
are likely to need to adjust **many** ticket form files due to positioning.

#### Updating an existing ticket form

Updating an existing ticket form is considerably easier than creating a new one.
Simply change the code in the source project and it will occur via the
sync repo.

#### Deactivating a ticket form

**NOTE** In theory, this is a simple task. In practice, this is a *very*
wide-reaching change. Often this will require subsequent changes to other areas
in Zendesk, such as Automations, Triggers, Macros, Theme, etc.

To deactivate a ticket form, you will simply change the ticket form file in the
source sync repo project via your merge request. Ensure you merge request does
the following:

- Moves the file from the `data/forms/active` folder to the
  `data/forms/inactive` folder
- Sets `active: true` to `active: false` in the file.
- Removes all conditions (of both types) from the ticket form
- All fields have been removed except for
  - `Subject`
  - `Description`

#### Deleting a deactivated form

**NOTE** We avoid doing this unless a ticket form has been deactivated for a
full year. After that point it can be deleted completely. Do also note that this
will result in a complete change to `positions` and can cause the need for
subsequent merge requests to the sync repo project.

To delete a ticket form, you need to purge it from multiple locations:

- Sync repo project
- Zendesk itself

The first can be done via merge requests, but the last one has to be done in the
the Zendesk instance itself. To do this, open up the admin page of your
corresponding Zendesk instance ([Global](https://gitlab.zendesk.com/admin) or
[US Government](https://gitlab-federal-support.zendesk.com/admin))
`Objects and rules` on the left-hand side, and then click `Forms`. On this page
you will want to click `Inactive`, locate the ticket form in question, and then
click on it. After doing so, click the three vertical dots at top-right of the
page and click `Delete`. This will cause a pop-up modal to appear asking you to
confirm the action. Click red `Delete` button to do so.

### Troubleshooting

#### Pipeline error "Blank ID"

This means the script detected a YAML file within `data/forms/active` or
`data/forms/inactive` that has an `id` value of blank (or nil). You will need to
locate the file mentioned in the error and correct that.

#### Pipeline error "Blank position"

This means the script detected a YAML file within `data/forms/active` or
`data/forms/inactive` that has an `position` value of blank (or nil). You will
need to locate the file mentioned in the error and correct that.

#### Pipeline error "Blank name"

This means the script detected a YAML file within `data/forms/active` or
`data/forms/inactive` that has an `name` value of blank (or nil). You will need
to locate the file mentioned in the error and correct that.

#### Pipeline error "Inactive form in active folder"

This means the script detected a YAML file within `data/forms/active` that has an
`active` value of `false`. You will need to locate the file mentioned in the
error and correct that.

#### Pipeline error "Active form in inactive folder"

This means the script detected a YAML file within `data/forms/inactive` that has
an `active` value of anything other than `false`. You will need to locate the
file mentioned in the error and correct that.

#### Pipeline error "GitLab errors"

This is a generic error message that will detail some error that occurred when
trying to either create or update the tag used on the source project. The exact
steps to fix this will vary based on the nature of the error itself. You will
need to review the error and determine the next steps from there.

If you are unsure how to proceed, it is best to seek assistance from the wider
team.

### Source Projects

#### Zendesk Global

- [Support managed content project](https://gitlab.com/gitlab-com/support/zendesk-global/tickets/forms-and-fields)

#### Zendesk US Government

- [Support managed content project](https://gitlab.com/gitlab-com/support/zendesk-us-government/tickets/forms-and-fields)

### Current Zendesk Global forms

| Name                     | ID             | Visibility | Category    |
|--------------------------|:--------------:|------------|-------------|
| SaaS                     | 334447         | Public     | Support     |
| SaaS Account             | 360000803379   | Public     | Support     |
| Self-Managed             | 426148         | Public     | Support     |
| GitLab Dedicated         | 4414917877650  | Public     | Support     |
| L&R                      | 360000071293   | Public     | Support     |
| Billing                  | 360000258393   | Public     | Billing     |
| Alliance Partners        | 360001172559   | Public     | Support     |
| Support Ops              | 360001801419   | Public     | Support Ops |
| Emergencies              | 360001264259   | Public     | Support     |
| GitLab Incidents         | 360001629679   | Internal   | Support     |
| Support Internal Request | 12829030177948 | Internal   | Support     |

### Current Zendesk US Federal forms

| Name               | ID             | Visibility | Category |
|--------------------|----------------|------------|----------|
| Support            | 360000446511   | Public     | Support  |
| GitLab Dedicated   | 26347526042004 | Public     | Support  |
| Upgrade Assistance | 360001434131   | Public     | Support  |
| Support Ops        | 360001421052   | Public     | Support  |
| L&R                | 360001421072   | Public     | Support  |
| Emergency          | 360001421112   | Public     | Support  |
| License Issue      | 360001803151   | Internal   | Support  |

### Positioning

By default, new forms gain a position of `N+1`, where `N` is the highest
position value of all forms currently in Zendesk (both active and inactive).
This is desired and we should *rarely* need to change this.

To edit positions in the Zendesk UI, go to the forms page. From there, click the
three horizontal dots at the top-right of the page (on the same line as the
search bar). That will bring up a sub-menu with the option `Edit order.`
Clicking that will then allow you to drag and drop the list of forms into the
order you desire. After making the changes, click the blue `Save` button at the
top right of the page.

### Ticket form standards

To ensure all ticket forms we utilize are both consistent in nature and
transparent in their actions, we strive to meet some standards on all
ticket forms we work with.

#### Naming standards

The name used for the form should be simple, clear, and concise. You want the
name to convey what the form is used for.

#### Title shown to end users

For this, you want the title to indicate what the form is for in a way any
GitLab user would understand. As such, you should use methods such as "Support
for xxx" or "Contact the xxx team".

#### Appearance

Many of the decisions made on how you generate/edit a ticket form is based on
how it will appear for end-users. As such, you should strive to ensure all
changes create a pleasing and simple process for end-users to submit tickets.
