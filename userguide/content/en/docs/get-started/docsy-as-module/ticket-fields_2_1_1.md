---
title: Ticket Fields
description: Support Operations documentation page for the Zendesk ticket fields
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/ticket-fields"
---

## What are ticket fields

Ticket fields are the individual components that make up a ticket form. They
can be customized to ask for specific information and help generate ticket
metadata. Typically, there are two types of ticket fields:

- System ticket fields - ones pre-built into Zendesk
- Custom ticket fields - ones built by us into Zendesk

### Change management

Keep in mind, all change management should be stemming from an issue, first and
foremost.

**NOTE** Ticket fields can be *very* difficult to manage. The smallest changes
to them can result in *very* complex changes being required in the backend. If
you are not fully comfortable with all the areas of Zendesk, you might want to
pair with a Fullstack Engineer.

#### Creating a new ticket field

**NOTE** Whenever possible, you should aim to create the ticket field *first* in
the sync repo and then make any edits to ticket forms as needed in a separate
merge request. This helps alleviate some of the complexity involved in managing
ticket forms and fields.

You will start by creating a placeholder ticket field within Zendesk itself (as
you will need the ID for the sync repo). To do this, open up the admin page of
your corresponding Zendesk instance ([Global](https://gitlab.zendesk.com/admin)
or [US Government](https://gitlab-federal-support.zendesk.com/admin)), click
`Objects and rules` on the left-hand side, and then click `Fields`. On this page
page, you will want to click `Add field`. This will bring up the new ticket
field page.

On this page, you will do the following:

- Select the type of field you are creating
- Set the title to "Placeholder for ISSUE_LINK" (replacing `ISSUE_LINK` with the
  link to the issue you are working out of).
- Enter a description of "ISSUE_LINK" (replacing `ISSUE_LINK` with the link to
  the issue you are working out of).
- Ensure "Permissions" is set to `Agents can edit`
- Set any other data to *match* what the desired end-result will be

After doing so, click the blue `Save` button. You will then locate the
placeholder ticket field you just created and get the ID value for it (if you
the Display name, you can see it in the URL).

From here, create the merge request in the sync repo project.

#### Updating an existing ticket field

Updating an existing ticket form is considerably easier than creating a new one.
Simply change the code in the source project and it will occur via the
sync repo.

The one caveat is when you are adding new `custom_field_options`, as you will
not have the ID of this. As such, you will *have* to make the change in Zendesk
*first* to obtain that value via the API. As such, if you are doing this, it
needs to be made clear the changes for it will happen *instantly* in production.

#### Deactivating a ticket field

**NOTE** In theory, this is a simple task. In practice, this is a *very*
wide-reaching change. Often this will require subsequent changes to other areas
in Zendesk, such as Automations, Triggers, Macros, Theme, etc. You should aim to
ensure you have removed all references to a ticket field from all other items
before deactivating it.

To deactivate a ticket field, you will simply change the ticket field file in
the source sync repo project via your merge request. Ensure you merge request
does the following:

- Moves the file from the `data/fields/active` folder to the
  `data/fields/inactive` folder
- Sets `active: true` to `active: false` in the file.

#### Deleting a deactivated ticket field

**NOTE** We avoid doing this unless a ticket field has been deactivated for a
full year. After that point it can be deleted completely.

To delete a ticket field, you need to purge it from multiple locations:

- Sync repo project
- Zendesk itself

The first can be done via merge requests, but the last one has to be done in the
the Zendesk instance itself. To do this, open up the admin page of your
corresponding Zendesk instance ([Global](https://gitlab.zendesk.com/admin) or
[US Government](https://gitlab-federal-support.zendesk.com/admin))
`Objects and rules` on the left-hand side, and then click `Fields`. On this page
you will want to click the `Filter` button. On the panel that appears on the
right-hand side, uncheck the box next to `Active` and check the box next to
`Inactive`. After doing so, click the blue `Apply filters` button.

You will then locate the ticket field you are deleting and click on the Display
name (to open the ticket field editor). You will then click the `Actions` button
at the top-right of the page and click `Delete`. This will cause a pop-up modal
to appear asking you to confirm the action. Click the red `Delete` button to do
so.

### Troubleshooting

#### Pipeline error "Blank ID"

This means the script detected a YAML file within `data/fields/active` or
`data/fields/inactive` that has an `id` value of blank (or nil). You will need to
locate the file mentioned in the error and correct that.

#### Pipeline error "Blank position"

This means the script detected a YAML file within `data/fields/active` or
`data/fields/inactive` that has an `position` value of blank (or nil). You will
need to locate the file mentioned in the error and correct that.

#### Pipeline error "Blank title"

This means the script detected a YAML file within `data/fields/active` or
`data/fields/inactive` that has an `title` value of blank (or nil). You will
need to locate the file mentioned in the error and correct that.

#### Pipeline error "Inactive field in active folder"

This means the script detected a YAML file within `data/fields/active` that has
an `active` value of `false`. You will need to locate the file mentioned in the
error and correct that.

#### Pipeline error "Active field in inactive folder"

This means the script detected a YAML file within `data/fields/inactive` that
has an `active` value of anything other than `false`. You will need to locate
the file mentioned in the error and correct that.

#### Pipeline error "GitLab errors"

This is a generic error message that will detail some error that occurred when
trying to either create or update the tag used on the source project. The exact
steps to fix this will vary based on the nature of the error itself. You will
need to review the error and determine the next steps from there.

If you are unsure how to proceed, it is best to seek assistance from the wider
team.

### Source Projects

#### Zendesk Global

- [Sync repo](https://gitlab.com/gitlab-support-readiness/zendesk-global/tickets/forms-and-fields)

#### Zendesk US Government

- [Sync repo](https://gitlab.com/gitlab-support-readiness/zendesk-us-government/tickets/forms-and-fields)

### Types of ticket fields

There are several types of ticket fields, however the only ones we use are as
follows:

| Field Type   | Usage                                                                 |
|--------------|-----------------------------------------------------------------------|
| Drop-down    | A select box containing a list of items (only one can be selected)    |
| Text         | A single line textbox                                                 |
| Checkbox     | A checkbox allowing for boolean style data                            |
| Number       | A textbox allowing for only whole numbers                             |
| Multi-line   | A textbox allowing for multiple lines                                 |
| Date         | A textbox allowing for date strings only                              |
| Multi-select | A select box containing a list of items (multiple can be selected)    |
| Decimal      | A textbox allowing for decimal type numbers                           |
| Regex        | A textbox allowing for strings only matching a specific regex formula |

### Ticket field options

While the exact options vary from type to type, the options you will generally
see are:

- Permissions
  - Agent only - seen only on the agent ticket page, not visible to end-users
  - Editable for end users - seen by both agents and end-users (read and write)
  - Read-only for end users - seen by both agents and end-users (read only)
- Title shown to agents - what name to show on the agent side (this is
  inheritied from the ticket field title)
- Required to solve a ticket - a conditional that specifies a ticket cannot be
  set to solved unless this field is populated (note conditions on ticket forms
  can override this)
- Title shown to end users - what name to show on the end user side
- Required to submit a request - a conditional that specifies a ticket cannot be
  created by an end user unless this field is populated (note conditions on
  ticket forms can override this)
- Description shown to end users - the text to show below the field on a ticket
  form
- Field values
  - Value - the name to display in the drop-down item
  - Tag - the tag to apply when this option is selected
- Tag - what tag to apply when the field is populated (applies only for the
  checkbox ticket field type)
- Field validation - the regex formula to use for the ticket field

### Ticket field standards

To ensure all ticket fields we utilize are both consistent in nature and
transparent in their actions, we strive to meet some standards on all
ticket fields we work with.

#### Naming standards

The title of the ticket field should be as clear and concise as possible. The
objective is for the agents working tickets and the Zendesk admins to be able to
understand what the ticket field is for and what information it contains.

#### Drop-down standards

With drop-downs, aim to make the information as clear and concise as possible.
Lengthy wordings here can render poorly at times in the ticket form.

There will be times when you cannot avoid it. In those cases, you'll want to
double check what it will look like to the end-user and the agent before
committing the option to production.

#### Tagging standards

Whenever possible, we want tags generated from ticket fields. The tags should be
very unique and align with the title of the ticket field.

As an example, if you are making a drop-down called "Billing Problem Type", you
would want the tags used to reflect that as well as the option they represent.

| Option                    | Tag                      |
|---------------------------|--------------------------|
| I want a discount         | billing_problem_discount |
| My credit card won't work | billing_problem_cc_issue |
| Other                     | billing_problem_other    |

We do this to ensure the tags do not collide with one another and so we can get
very specific information via data queries.
