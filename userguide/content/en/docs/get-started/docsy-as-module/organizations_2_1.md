---
title: Organizations
description: Support Operations documentation page for Zendesk organizations
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/organizations"
---

## What are Zendesk organizations?

Organizations are simply a collection of users in Zendesk (much like groups). We
use them to also store metadata (synced from Salesforce), which is used to
determine such things as SLA, ARR, etc.

## How are organizations created and maintained?

Organizations in Zendesk are created automatically through our sync script.

> Please do not manually create organizations except in approved situation. This
> can break the ZD<>SFDC integration and cause users to receive incorrect SLAs.
> If you notice an organization needs to be created, please notify support-ops
> to rectify this.

For more information on this, please see
[Zendesk-Salesforce Sync](/handbook/support/readiness/operations/docs/zendesk/zendesk_salesforce_sync)

## Editing Organizations

As a lot relies on organizations being setup properly, this feature requires
admin level abilities currently. If an organization needs to be edited, an issue
should be filed using the
[support ops issue tracker](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/new)

## Deleting Organizations

For more information on organization deletion, please see the
[Organization Deletion](/handbook/support/readiness/operations/docs/policies/org_deletion)
policy page.

## Organization Notes for Zendesk Global

There are two forms of organization notes we utilize:

- Support Operations organization notes
- Support Team organization notes

Support Operations organizations notes are managed via Zendesk in the `Notes`
and `Details` fields on the organization itself.

Support Team organization notes are managed via the
[organizations project](https://gitlab.com/gitlab-com/support/zendesk-global/organizations).

Aside from Support Operations, all support managers have `Maintainer` access to
the organization project, enabling them the ability to approve and merge MRs in
this repo.

When an organization has a ticket created, a trigger calls to a webhook to
run a pipeline using the
[ticket processor](https://gitlab.com/gitlab-support-readiness/zendesk-global/tickets/processor)
(on ops.gitlab.net). This then combines the Support Operations and Support Team
organization notes into internal comments on the ticket itself.

## Organization Notes for Zendesk US Federal

We manage all internal notes on Zendesk itself due to data privacy concerns. As
such, we separate them as such:

- `Notes` are for Support Team organization notes
- `Details` are for Support Operations organization notes

When an organization has a ticket created, a trigger runs to parse both of these
into internal comments on the ticket itself.

## Organizations with outdated information

If you notice an organization in Zendesk contains outdated information or the
information doesn't match what Salesforce is displaying, this would indicate the
sync integration has hit an issue. Luckily, we have the GitLab built sync script
that runs every hour to rectify such issues.

In your due diligence, you would want to create an issue via the
[Zendesk Organization Repo](https://gitlab.com/gitlab-com/support/zendesk-global/organizations/-/issues/new)
so support-ops can double check to ensure there is nothing blocking the sync.

### Organization Permissions

By default, organizations are setup so that the users within it can only see and
comment on their own tickets. This security measure often doesn't work for some
organizations though.

Because of that, we have the ability to setup Shared Organizations, a term
meaning the users in an organization have heightened permissions and can do see
and/or comment on tickets that are not theirs.

#### Shared Organization management

A shared organization is one in which the end-users in said organization have
heightened permissions in regards to tickets created in the organization. The
options available to this are:

- All users can view all tickets but not add comments
- All users can view all tickets and add comments to all tickets
- Specific users can view all tickets but not add comments

To enable this for an organization, a **new** ticket must be filed to Support
Operations using the correct form fields that specific the desire to have a
shared organization setup. This is required as there is a security risk involved
in using a shared organization and the organization itself must accept this
security risk before we can proceed.

Once the ticket comes in, review the fields used on the ticket to determine the
exact setup desired.

##### All users can view all tickets but not add comments

To set this up, go to the organization's page in Zendesk. From there, locate the
`Users` field towards the top-left of the page. Click the drop-down next to it
and select `Can view all org tickets`. Click off the box to save the changes.

Ensure the new drop-down that appears says `...but not add comments` before
concluding the work.

##### All users can view all tickets and add comments to all tickets

To set this up, go to the organization's page in Zendesk. From there, locate the
`Users` field towards the top-left of the page. Click the drop-down next to it
and select `Can view all org tickets`. Click off the box to save the changes.

You will then click the new drop-down that appears and select the option
`...and add comments`. Click off the box to save the changes.

##### Removing a shared organization setup

To remove a shared organization setup, follow the above guides, but instead
ensure the drop-downs use the default options:

- Organizatin: `Can view own tickets only`
- User: `Can view and edit own tickets only`

### User association

There are specific processes and policies around this, so please see
[User Association](/handbook/support/readiness/operations/docs/zendesk/user_association)

#### User Association via Domain Matching

While Zendesk does have the functionality to do domain matching, we have
determined that the security risks inherent in this feature outweigh the
benefits that would be received from its use.

Because of this decsion, as of August 2020, Support Ops will not longer apply
a domain on a Zendesk organization. Any organization that had this applied
prior to this date will have it as a legacy feature.

Because this decision was based on security risks, exceptions will not be made.

## Special situations

Please see our
[Gratis Support requests documentation](/handbook/support/readiness/operations/docs/policies/gratis_support)
for more info.
