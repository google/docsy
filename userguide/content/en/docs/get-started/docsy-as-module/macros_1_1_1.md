---
title: Macros
description: Operations documentation page for Zendesk macros
canonical_path: "/handbook/security/customer-support-operations/docs/zendesk/macros"
---

{{% alert title="Note" color="primary" %}}

This is an informational page for the Zendesk macros. It may not reflect the way we actually manage Zendesk macros.

If you are looking for information about maintaining macros (creating, editing, etc.), please see [Macros workflow](../../workflows/zendesk/macros)

{{% /alert %}}

## What are macros

As per [Zendesk](https://support.zendesk.com/hc/en-us/articles/4408844187034-Creating-macros-for-repetitive-ticket-responses-and-actions):

> A macro is a prepared response or action that an agent can manually apply when they are creating or updating tickets. Macros contain actions that can update ticket properties.
>
> Unlike triggers and automations, macros only contain actions, not conditions. Conditions aren't used because nothing is automatically evaluating tickets to determine if a macro should be applied. Agents evaluate tickets and apply macros manually as needed.

## Macro categorization

Macros are a bit unique in Zendesk. They have categorization, but it is not obvious in the UI. Instead, the categorization is determined based on the name of the macro itself. Essentially, every group of words becomes a "folder" of sorts in the macros dropdown selector. The separator currently used by Zendesk is two colons (`::`).

This can get a bit confusing and hard to learn the ins and outs of, so when in doubt, reach out to your fellow Customer Support Operations team members.

## Seeing macro usage information

To see the usage information on macros:

1. Navigate to the admin panel for the Zendesk instance
1. Go to `Workspaces > Agent tools > Macros`
1. Click the icon to the far right of the list of macros (looks like three vertical rectangles)
1. Click the usage columns you wish to see

## Creating a macro in Zendesk

For information on creating a macro in Zendesk, please see the [Zendesk documentation](https://support.zendesk.com/hc/en-us/articles/4408844187034-Creating-macros-for-repetitive-ticket-responses-and-actions#topic_zh2_4nw_4y)

## Cloning a macro in Zendesk

To clone a macro in Zendesk:

1. Navigate to the admin panel for the Zendesk instance
1. Go to `Workspaces > Agent tools > Macros`
1. Locate the macro you wish to clone and click on the name
1. Click the `Actions` button
1. Click `Clone`
1. This opens the macro editor page, so you can proceed using the information in the [Zendesk documentation](https://support.zendesk.com/hc/en-us/articles/4408844187034-Creating-macros-for-repetitive-ticket-responses-and-actions#topic_zh2_4nw_4y)

## Editing a macro in Zendesk

To edit a macro in Zendesk:

1. Navigate to the admin panel for the Zendesk instance
1. Go to `Workspaces > Agent tools > Macros`
1. Locate the macro you wish to clone and click on the name
1. This opens the macro editor page, so you can proceed using the information in the [Zendesk documentation](https://support.zendesk.com/hc/en-us/articles/4408844187034-Creating-macros-for-repetitive-ticket-responses-and-actions#topic_zh2_4nw_4y)

## Deactivating a macro in Zendesk

To deactivate a macro in Zendesk:

1. Navigate to the admin panel for the Zendesk instance
1. Go to `Workspaces > Agent tools > Macros`
1. Locate the macro you wish to clone and click on the name
1. Click the `Actions` button
1. Click `Deactivate`

## Deleting a macro in Zendesk

{{% alert title="Note" color="warning" %}}

You can only delete a macro if it is deactivated.

{{% /alert %}}

1. Navigate to the admin panel for the Zendesk instance
1. Go to `Workspaces > Agent tools > Macros`
1. Locate the macro you wish to clone and click on the name
1. Click the `Actions` button
1. Click `Delete`
1. Click `Delete macro` in the confirmation box

## Using a macro in Zendesk

There are two ways to apply a macro to a ticket:

- Via slash commands
- Via the macro selection drop-down

For more information, please see [Zendesk documentation](https://support.zendesk.com/hc/en-us/articles/4408887656602-Using-macros-to-update-tickets)
