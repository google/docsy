---
title: Provisioning
description: Operations workflow page for Zendesk provisioning
canonical_path: "/handbook/security/customer-support-operations/workflows/zendesk/provisioning"
---

The method uses largely depends on the type of provisioning being done.

## Role based entitlement

2 days after someone starts working at GitLab, an access-request issue is generated based off their role based entitlements. We would manually provision users based off the request itself.

To do this, you will need to:

1. Create the user in Zendesk (the role to be used should be included in the role based entitlement access request issue). Ensure their groups and other such settings are accurate (see the access request issue). See [Manually creating an agent](../../docs/zendesk/agents#manually-creating-an-agent) for more info on creating the user.
1. Associate the correct app in Okta (see [Assigning an app via Okta](#assigning-an-app-via-okta) for more info) if required.

After you have done so, mark off the items in the access request issue.

## Special request

Any special request issues to provision on either Zendesk instance not related to role based entitlements must be done via an access request issue. Do note this will require approval from the system owners (Lyle and Jason) to proceed.

See [Role based entitlements](#role-based-entitlement) for information on what to do when it comes time to provision it.

## Zendesk Global light agents

This is mostly handled automatically via the Support Super Form and the Support Super Form processor.

It will handle all the Zendesk side changes. As such, in the issue created, you will just need to [assign the app in Okta](#assigning-an-app-via-okta)

## Zendesk US Government light agents

As these require the [tech stack provisioner](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) to manually provision these, an [Access Request issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) is required.

Once one has been received and approved , the process will go as follows:

1. Submit a HelpLab request by selecting `Background Checks` under the People Team dropdown. On the next page, select `Identity Verification` or `Other` from the dropdown `What type of support do you need?` and use the prompt below to fill out your request:
   > Greetings all!
   >
   > Can you verify if NAME is a US Citizen? They are requesting access to the Federal Zendesk instance via ISSUE which does require it.
   >
   > Thanks!
   - Replace NAME with the requester's name
   - Replace ISSUE with the link to the Access Request issue
   - [This should be a quick link to that form](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=3641564f47977550dff2c5a4f16d4326)
1. Note the Access Request issue that you have contacted the People team to verify US citizenship.
1. If the People team verifies the citizenship:
   - Create the Light Agent manually in the Zendesk US Federal instance.
   - Go into Okta and assign the app to the requester
   - Update the issue letting them know it has been provisioned.
1. If the People team cannot verify the citizenship:
   - Comment on the Access Request issue noting citizenship could not be confirmed and that the issue will be closed, as no further action can be taken without verification from the People team.
1. You may then provision the user in Zendesk US Federal. Do this by:
   1. Create the user in Zendesk (the role to be used should be included in the role based entitlement access request issue). Ensure their groups and other such settings are accurate (see the access request issue).
   1. Associate Zendesk Global app in Okta (see [Assigning an app via Okta](#assigning-an-app-via-okta) for more info) if required.

## Zendesk Global Partner Support team

{{% alert title="Note" color="primary" %}}

Requesters must first have a fully created light agent account. IF they do not have one, direct them to have one created first.

{{% /alert %}}

This is a specialized group of light agents who are allowed to file some types of Internal Requests. These agents will need the tag `partner_support_agent` added on their Zendesk account.

You should only ever be asked to either add or remove that tag (and it must be via an access request issue).

## Zendesk Global Order Management team

{{% alert title="Note" color="primary" %}}

Requesters must first have a fully created light agent account. IF they do not have one, direct them to have one created first.

{{% /alert %}}

This is a specialized group of light agents who are allowed to file some types of Internal Requests. These agents will need the tag `order_management_team` added on their Zendesk account.

You should only ever be asked to either add or remove that tag (and it must be via an access request issue).

## Zendesk Global OEM Management team

{{% alert title="Note" color="primary" %}}

Requesters must first have a fully created light agent account. IF they do not have one, direct them to have one created first.

{{% /alert %}}

This is a specialized group of light agents who are allowed to file some types of Internal Requests. These agents will need the tag `oem_management_team` added on their Zendesk account.

You should only ever be asked to either add or remove that tag (and it must be via an access request issue).

## Deprovisioning

You will, from time to time, get a request to deprovision an agent (these will mostly stem from Offboarding tasks). To deprovision an agent, go to that agents's page in Zendesk and do the following:

- Unassign any active tickets (less than Closed) from that agent (assign them to their manager)
- Remove any of the agent's tags from Tags section
- Clear out any user fields on the profile
- Demote the agent's role to that of end-user
- Suspend the end-user
- Delete any [Support Team](https://gitlab.com/gitlab-support-readiness/support-team) files attached to the user (if applicable)
- After doing so, do the following on the issue requesting the deprovisioning
  - Check the corresponding boxes on the request issue

## Assigning an app via Okta

To associate an app via Okta, you will add the person's email to the corresponding google group as a `Member`:

- [Zendesk Global](https://groups.google.com/a/gitlab.com/g/okta-zendeskglobal-users/members)
- [Zendesk US Government](https://groups.google.com/a/gitlab.com/g/okta-zendeskfederal-users/members)
