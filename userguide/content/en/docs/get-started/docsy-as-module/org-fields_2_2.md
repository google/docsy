---
title: Organization Fields
description: Support Operations documentation page for Zendesk organization fields
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/org-fields"
---

## What are organization fields

Organization fields are custom items on organizations that we control.

### Change management

Keep in mind, all change management should be stemming from an issue, first and
foremost.

**NOTE** Organization fields can be *very* difficult to manage. The smallest
changes to them can result in *very* complex changes being required in the
backend. If you are not fully comfortable with all the areas of Zendesk, you
might want to pair with a Fullstack Engineer.

#### Creating a new organization field

**NOTE** Whenever possible, you should aim to create the organization field
*first* in the sync repo and then make any edits to other items that will be
utilizing them. This helps alleviate some of the complexity involved in managing
organization fields.

You will start by creating a placeholder organizations field within Zendesk
itself (as you will need the ID for the sync repo). To do this, open up the
admin page of your corresponding Zendesk instance
([Global](https://gitlab.zendesk.com/admin)
or [US Government](https://gitlab-federal-support.zendesk.com/admin)), click
`People` on the left-hand side, and then click `Organization fields`. On this
page page, you will want to click `Add field`. This will bring up the new
organization field page.

On this page, you will do the following:

- Select the type of field you are creating
- Set the Display name to "Placeholder for ISSUE_LINK" (replacing `ISSUE_LINK`
  with the link to the issue you are working out of).
- Enter the **exact** field key you plan to use. Note this can **not** be
  changed after the fact, so it is important to get this right the first time.
- Set any other data to *match* what the desired end-result will be

After doing so, click the blue `Save` button. You will then locate the
placeholder organization field you just created and get the ID value for it (if
you the Display name, you can see it in the URL).

From here, create the merge request in the sync repo project. Keep in mind you
are likely to need to adjust **many** organization field files due to
positioning.

#### Updating an existing organization field

Updating an existing organization field is considerably easier than creating a
new one. Simply change the code in the source project and it will occur
via the sync repo.

The one caveat is when you are adding new `custom_field_options`, as you will
not have the ID of this. As such, you will *have* to make the change in Zendesk
*first* to obtain that value via the API. As such, if you are doing this, it
needs to be made clear the changes for it will happen *instantly* in production.

#### Deactivating an organization field

**NOTE** In theory, this is a simple task. In practice, this is a *very*
wide-reaching change. Often this will require subsequent changes to other areas
in Zendesk, such as Automations, Triggers, Macros, Theme, etc. You should aim to
ensure you have removed all references to an organization field from all other
items before deactivating it.

To deactivate an organization field, you will simply change the organization
field file in the source sync repo project via your merge request. Ensure you
merge request does the following:

- Moves the file from the `data/active` folder to the `data/inactive` folder
- Sets `active: true` to `active: false` in the file.

#### Deleting a deactivated organization field

**NOTE** We avoid doing this unless an organization field has been deactivated
for a full year. After that point it can be deleted completely.

To delete a organization field, you need to purge it from multiple locations:

- Sync repo project
- Zendesk itself

The first can be done via merge requests, but the last one has to be done in the
the Zendesk instance itself. To do this, open up the admin page of your
corresponding Zendesk instance ([Global](https://gitlab.zendesk.com/admin) or
[US Government](https://gitlab-federal-support.zendesk.com/admin))
`People` on the left-hand side, and then click `Organization fields`. On this
page you will want to click the `Filter` button. On the panel that appears on
the right-hand side, uncheck the box next to `Active` and check the box next to
`Inactive`. After doing so, click the blue `Apply filters` button.

You will then locate the organization field you are deleting and click on the
Display name (to open the organization field editor). You will then click the
`Actions` button at the top-right of the page and click `Delete`. This will
cause a pop-up modal to appear asking you to confirm the action. Click the red
`Delete` button to do so.

### Troubleshooting

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

#### Pipeline error "Inactive organization field in active folder"

This means the script detected a YAML file within `data/active` that has an
`active` value of `false`. You will need to locate the file mentioned in the
error and correct that.

#### Pipeline error "Active organization field in inactive folder"

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

- [Support managed content project](https://gitlab.com/gitlab-com/support/zendesk-global/organizations/fields)

#### Zendesk US Government

- [Support managed content project](https://gitlab.com/gitlab-com/support/zendesk-us-government/organizations/fields)

## Types of organization fields

There are several types of organization fields, however the only ones we use are
as follows:

| Field Type   | Usage                                                                 |
|--------------|-----------------------------------------------------------------------|
| Drop-down    | A select box containing a list of items (only one can be selected)    |
| Text         | A single line textbox                                                 |
| Checkbox     | A checkbox allowing for boolean style data                            |
| Number       | A textbox allowing for only whole numbers                             |
| Multi-line   | A textbox allowing for multiple lines                                 |
| Date         | A textbox allowing for date strings only                              |
| Decimal      | A textbox allowing for decimal type numbers                           |
| Regex        | A textbox allowing for strings only matching a specific regex formula |

## Organization field options

While the exact options vary from type to type, the options you will generally
see are:

- Field values
  - Value - the name to display in the drop-down item
  - Tag - the tag to apply when this option is selected
- Tag - what tag to apply when the field is populated (applies only for the
  checkbox organization field type)
- Field validation - the regex formula to use for the organization field

### Organization field standards

To ensure all organization fields we utilize are both consistent in nature and
transparent in their actions, we strive to meet some standards on all
organization fields we work with.

#### Naming standards

The title of the organization field should be as clear and concise as possible.
The objective is for the agents working tickets and the Zendesk admins to be
able to understand what the organization field is for and what information it
contains.

#### Drop-down standards

With drop-downs, aim to make the information as clear and concise as possible.
Lengthy wordings here can render poorly at times in the organization.

There will be times when you cannot avoid it. In those cases, you'll want to
double check what it will look like to the end-user and the agent before
committing the option to production.

#### Tagging standards

Whenever possible, we want tags generated from organization fields. The tags
should be very unique and align with the title of the organization field.

As an example, if you are making a drop-down called "Billing Problem Type", you
would want the tags used to reflect that as well as the option they represent.

| Option                    | Tag                      |
|---------------------------|--------------------------|
| I want a discount         | billing_problem_discount |
| My credit card won't work | billing_problem_cc_issue |
| Other                     | billing_problem_other    |

We do this to ensure the tags do not collide with one another and so we can get
very specific information via data queries.
