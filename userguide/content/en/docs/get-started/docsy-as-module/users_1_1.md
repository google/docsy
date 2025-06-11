---
title: Users
description: Support Operations documentation page for Pagerduty users
canonical_path: "/handbook/support/readiness/operations/docs/pagerduty/users"
---

## Creating a user in Pagerduty

**Note** This should only ever be done as part of role based entitlements.

The steps to create an user in Pagerduty are:

1. Login to [pagerduty](https://gitlab.pagerduty.com/)
1. Hover over `People` and click `Users` to go to the
   [users page](https://gitlab.pagerduty.com/users-new)
1. Click the blue `+ Add Users` button at the top-right of the page
1. Input the first and last name of the user in the first box
1. Input the email address of the user in the second box
1. Select the appropriate role
   - `Limited User` for Support Engineers, Support Managers, and Support Directors
   - `Admin` for Support Readiness
1. Click the blue `Add` button on the right-hand side

## Editing a user in Pagerduty

**Note** The user in question should be doing this for everything they are able.
We should only do this for things requiring admin capabilities, such as `Role`.

The steps to edit an user in Pagerduty are:

1. Login to [pagerduty](https://gitlab.pagerduty.com/)
1. Hover over `People` and click `Users` to go to the
   [users page](https://gitlab.pagerduty.com/users-new)
1. Search for the user (email works best). Once you locate them, click on their
   name.
1. Go the appropriate tab for the changes you need to make
   - `Contact Information` for editing name, title, timezone, phone number,
     email address
   - `Notification rules` for various notification rules
   - `User settings` for login email, password, role, and schedule color
1. Click the edit box on the right-hand side of the item being modified
1. Make the changes and click the blue `Save` button

## Removing a user in Pagerduty

**Note**: User must not be present in *any* schedule or escalation policy to be
deleted.

The steps to remove an user from Pagerduty are:

1. Login to [pagerduty](https://gitlab.pagerduty.com/)
1. Hover over `People` and click `Users` to go to the
   [users page](https://gitlab.pagerduty.com/users-new)
1. Search for the user (email works best). Once you locate them, click on their
   name.
1. Click the red `Delete User` button on the right-hand side
