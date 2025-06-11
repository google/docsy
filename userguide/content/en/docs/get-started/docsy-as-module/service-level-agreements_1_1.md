---
title: SLA policies
description: Support Operations documentation page for Zendesk SLAs
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/service-level-agreements"
---

## Zendesk calls them service level agreements, we do not

What appears here is all titled service level agreements, or SLAs, but many of
these are internal service level objectives, or SLOs, instead. They are titled
as service level agreement, or SLA, because that is what Zendesk calls the
setting. Nothing detailed herein is an actual, legal service level agreement.

## What are Zendesk service level agreements?

As per
[Zendesk](https://support.zendesk.com/hc/en-us/articles/204770038-Defining-and-using-SLA-policies):

> A Service Level Agreement, or SLA, is an agreed upon measure of the response
> and resolution times that your support team delivers to your customers.
> Providing support based on service levels ensures that you're delivering
> measured and predictable service. It also provides greater visibility when
> problems arise.

### Change management

Keep in mind, all change management should be stemming from an issue, first and
foremost.

We manage role membership via Zendesk itself (on user profiles), but only with
corresponding access request issues.

**NOTE** Any changes to SLAs **require** Support Readiness Director approval.
Changes here can have severe legal implications and should only be worked by a
Fullstack Engineer.

#### Creating a new SLA

You will start by creating a placeholder role within Zendesk itself (as you will
need the ID for the sync repo). To do this, open up the admin page of your
corresponding Zendesk instance ([Global](https://gitlab.zendesk.com/admin)
or [US Government](https://gitlab-federal-support.zendesk.com/admin)), click
`Objects and rules` on the left-hand side, and then click
`Service level agreements`. On this page page, you will want to click
`Add policy`. This will bring add a new SLA policy box and bring your browser's
focus to it.

On this page, you will do the following:

- Set the Policy Name to "Placeholder for ISSUE_LINK" (replacing `ISSUE_LINK`
  with the link to the issue you are working out of).
- Enter a description of "ISSUE_LINK" (replacing `ISSUE_LINK` with the link to
  the issue you are working out of).
- Sets `all` conditions of:
  - `Requester` `is` `YOUR_NAME` (replacing `YOUR_NAME` with your name in
    Zendesk)
- Sets the Reply targets to your desired end result.

After doing so, click the black `Save` button. You will then need to get the SLA
ID from Zendesk using the API. You will do this using the
[List SLA Policies](https://developer.zendesk.com/api-reference/ticketing/business-rules/sla_policies/#list-sla-policies)
endpoint. You will need to query that, locate your new SLA policy, and make note
of the ID.

From here, create the merge request in the sync repo project.

#### Updating an existing SLA

Updating an existing SLA is considerably easier than creating a new one. Simply
change the code in the source project and it will occur via the sync
repo.

#### Deleting a SLA

**NOTE** This can be a **very** dangerous action to perform. Exercise extreme
caution in doing do.

To delete a role, you need to purge it from multiple locations:

- Sync repo project
- Zendesk itself

The first can be done via merge requests, but the last one has to be done in the
the Zendesk instance itself. Before doing so, 100% of the role's members should
be removed from the role.

After doing so, open up the admin page of your corresponding Zendesk instance
([Global](https://gitlab.zendesk.com/admin) or
[US Government](https://gitlab-federal-support.zendesk.com/admin))
`Objects and rules` on the left-hand side, and then click
`Service level agreements`. On this page, locate the SLA you want to delete,
click the gear icon to the right of it, and then click `Delete`.

This will cause a pop-up modal to appear asking you to confirm the action. Click
the blue `Delete policy` button to do so.

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

#### Pipeline error "GitLab errors"

This is a generic error message that will detail some error that occurred when
trying to either create or update the tag used on the source project. The exact
steps to fix this will vary based on the nature of the error itself. You will
need to review the error and determine the next steps from there.

If you are unsure how to proceed, it is best to seek assistance from the wider
team.

## Service level agreement standards

To ensure all SLA policies we utilize are both consistent in nature and
transparent in their actions, we strive to meet some standards on all SLA
policies we work with.

### Naming standards

The name used for the SLA policy should be simple, clear, and concise. You want
the name to convey what the SLA policy is used for.

### Condition standards

Generally speaking, we aim to make SLA policy conditions as simple as possible.
When possible, you should use condition sets that are very specific and
succinct. As an example, if you wanted a SLA policy to only run when the form is
`Support Ops`, it is better to simply put a condition of "Form is Support Ops"
than adding exclusions for *every* other form. This can take time and practice
to learn, so when in doubt, pair with the rest of the Support Ops team!
