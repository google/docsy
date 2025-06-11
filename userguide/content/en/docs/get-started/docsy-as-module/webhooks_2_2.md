---
title: Webhooks
description: Support Operations documentation page for Zendesk webhooks
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/webhooks"
---

## What are Zendesk webhooks

As per
[Zendesk](https://support.zendesk.com/hc/en-us/articles/1260803996569-Creating-a-webhook):

> A webhook sends an HTTP request to a specified URL in response to an event ,
> such as a trigger or automation firing in Zendesk Support. Web developers
> typically use webhooks to invoke behavior in another system.

## Creating a webhook via Zendesk

To create a webhook in Zendesk, you first need to go to the Admin Center
([Zendesk Global](https://gitlab.zendesk.com/admin/) /
[Zendesk US Federal](https://gitlab-federal-support.zendesk.com/admin/)). From
there, you need to go to the Webhooks page (Apps and integrations > Webhooks >
Webhooks).

After doing so, you will then click the `Create webhook` button on the top-right
side of the page. This will then load up the new webhook page.

From here, you will need to select the way to connect for the webhook. We
traditionally only use `Trigger or automation` for these, so click that box.
After doing so, click the blue `Next` button at the bottom right of the page.

You will now enter:

- the name of the webhhok
- a description of the webhook
- the endpoint URL the webhook calls to
- the request type (depends on the endpoint URL being used)
- the request format (depends on the endpoint URL being used)
- the type of authentication being used
- any custom headers you need to set

After doing so, it is highly advisable you test the webhook using the
`Test webhook` button (see [Testing a webhook](#testing-a-webhook) for more
info).

When you are ready to move forward, click the blue `Create webhook` button at
the bottom-right of the page.

The next page will ask you to connect your webhook, however this should be done
via the activity calling to the webhook (trigger or automation), so click the
blue `Finish setup` button at the bottom-right of the page. A pop-up will appear
informing you that you are about to leave without connecting the webhook. This
is fine and you should click the blue `Leave without connecting` button to
complete the process.

## Editing a webhook via Zendesk

To edit a webhook in Zendesk, you first need to go to the Admin Center
([Zendesk Global](https://gitlab.zendesk.com/admin/) /
[Zendesk US Federal](https://gitlab-federal-support.zendesk.com/admin/)). From
there, you need to go to the Webhooks page (Apps and integrations > Webhooks >
Webhooks).

From here, locate the webhook in question, hover over it, and click the 3 dots
on the right-hand side of the row. Doing so will have a menu pop up with the
`Edit` option.

Doing so will bring up the webhook editor. You can now edit the webhook, test
the changes (see [Testing a webhook](#testing-a-webhook) for more info), and
then save your changes by clicking the blue `Update` button t the bottom-right
of the page.

## Deleting a webhook via Zendesk

To delete a webhook in Zendesk, you first need to go to the Admin Center
([Zendesk Global](https://gitlab.zendesk.com/admin/) /
[Zendesk US Federal](https://gitlab-federal-support.zendesk.com/admin/)). From
there, you need to go to the Webhooks page (Apps and integrations > Webhooks >
Webhooks).

From here, locate the webhook in question, hover over it, and click the 3 dots
on the right-hand side of the row. Doing so will have a menu pop up with the
`Delete` option.

Clicking this will cause a pop-up  to appear asking you to confirm the deletion.
Click the red `Delete webhook` button to do so.

## Testing a webhook

It is always important to fully test out your webhook before utilizing it in
production. You can do this whenc reating or editing a webhook by clicking the
`Test webhook` button, but you can also do it on an existing webhook by locating
hovering over it, clicking the 3 dots on the right-hand side of the row, and
then selecting the `Test webhook` option.

Either method brings up a side menu to test the webhook. The exact nature of
what is there depends on the type request format the webhook uses.

### Form encoded webhook testing

For form encoded webhooks, you will be given the option to fill in key:value
pairs (you can add as many as is needed by clicking `+ add parameters`). Once
you have all those filled out, click the `Send test` button to send run the
webhook with your given values. It will then return the response from the
webhook run for you to analyze.

### JSON webhook testing

For JSON webhooks, you will by given a drop-down with two options:

- Sample Support Ticket
- Custom test

`Sample Support Ticket` will give you a sample ticket payload to use in JSON
formatting. You can edit this JSON as needed in the `Request JSON Body` section.

`Custom test` will given you a very bare JSON object o manipulate from scratch.
You can edit this JSON as needed in the `Request JSON Body` section.

Once you have all those filled out, click the `Send test` button to send run the
webhook with your given values. It will then return the response from the
webhook run for you to analyze.

## Viewing a webhook's activity

To view a webhook's activity in Zendesk, you first need to go to the Admin
Center
([Zendesk Global](https://gitlab.zendesk.com/admin/) /
[Zendesk US Federal](https://gitlab-federal-support.zendesk.com/admin/)). From
there, you need to go to the Webhooks page (Apps and integrations > Webhooks >
Webhooks).

From here, locate the webhook in question, and click on its name. On this page,
click the `Activity` tab to see all the runs of the webhook. You can click on
the Invocation ID of the run to get more information on said run (on the side
menu that appears, click the timestamp for more details).

## Webhook standards

To ensure all webhooks we utilize are both consistent in nature and transparent
in their actions, we strive to meet some standards on all webhooks we work
with.

### Naming standards

As Zendesk webhooks are selected when used in triggers and the like, you should
aim to have the webhook's name reflect what it is doing. Whenever possible, be
as explicit as possible.

## Change management

As the webhook changes are unique in deployment, please see
[Zendesk webhook change management](/handbook/support/readiness/operations/docs/change_management#zendesk-webhook-change-management)
for more information.

### Labels to use

For all issues and MRs involving Zendesk webhooks, the label
`Support-Ops-Category::Zendesk Settings` should be used.

### Change criticality

As a webhook does nothing on its own, all issues/MRs related to Zendesk webhooks
will be classified as
[criticality 4](/handbook/support/readiness/operations/docs/change_criticalities#criticality-4)

They are likely to be involved in other issues that would have a high
criticality though.
