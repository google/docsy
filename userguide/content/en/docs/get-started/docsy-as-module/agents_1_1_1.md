---
title: Agents
description: Support Operations documentation page for Zendesk agents
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/agents"
---

## User fields

For information about user fields, please refer to
[User Fields](user-fields.md).

### Agent Provisioning

#### For Zendesk US Federal

As these require the
[tech stack provisioner](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)
to manually provision these, an
[Access Request issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new)
is required.

Once one has been received, the process will go as follows:

1. Submit a HelpLab request by selecting `Background Checks` under the People Team dropdown. On the next page, select `Identity Verification` or `Other` from the dropdown `What type of support do you need?` and use the prompt below to fill out your request:
     > Greetings all!
     >
     > Can you verify if NAME is a US Citizen? They are requesting access to the
     > Federal Zendesk instance via ISSUE which does require it.
     >
     > Thanks!

   - Replace NAME with the requester's name
   - Replace ISSUE with the link to the Access Request issue
   - [This should be a quick link to that form](https://helplab.gitlab.systems/esc?id=sc_cat_item&sys_id=3641564f47977550dff2c5a4f16d4326)
1. Note the Access Request issue that you have contacted the People team to
   verify US citizenship.
1. If the People team verifies the citizenship:
   - Create the Light Agent manually in the Zendesk US Federal instance.
   - Go into Okta and assign the app to the requester
   - Update the issue letting them know it has been provisioned.
1. If the People team cannot verify the citizenship:
   - Comment on the Access Request issue noting citizenship could not be
     confirmed and that the issue will be closed, as no further action can be
     taken without verification from the People team.
1. You may then provision the user in Zendesk US Federal. Do this by:
   1. Create the user in Zendesk (the role to be used should be included in the
      role based entitlement access request issue). Ensure their groups and other
      such settings are accurate (see the access request issue).
   1. Associate Zendesk Global app in Okta (see
      [Assigning an app via Okta](#assigning-an-app-via-okta) for more info) if
      required.

#### As part of role entitlement on Zendesk Global

2 days after someone starts working at GitLab, an access-request issue is
generated based off their role based entitlements. We would manually provision
users based off the request itself.

to do this, you will need to:

1. Create the user in Zendesk (the role to be used should be included in the
   role based entitlement access request issue). Ensure their groups and other
   such settings are accurate (see the access request issue).
1. Associate Zendesk Global app in Okta (see
   [Assigning an app via Okta](#assigning-an-app-via-okta) for more info) if
   required.

#### For light agents on Zendesk Global

Requests for light agent provisioning on Zendesk Global is mostly automated
currently. The person wanting the access starts by sending an email to the
`contact-project+gitlab-com-support-support-ops-zendesk-global-light-agent-provi-46606987-issue-@incoming.gitlab.com`
email address. This is the service desk email address for the
[Light Agent Provisioning](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/light-agent-provisioning)
project, so sending an email there results in an issue being created within that
project's issue tracker.

Upon issue creation, a project webhook triggers a CI/CD pipeline to run the
scripts within that project (on ops.gitlab.net). Using the payload that is sent
with the trigger, it performs the following checks:

- Is the `service_desk_reply_to` value linked to a valid gitlab.com account?
- Does the email end with '@gitlab.com'?
- If there is a user in Zendesk for that email, are they already an agent?

If any of the checks fail, the issue is updated with a rejection message
(stating the reason). If they all pass, the user in Zendesk is then created (if
it doesn't exist) or updated (if it does exist).

After doing so, the issue is updated with a success message, pinging the DRI
within Support Readiness to notify them of the next steps.

The DRI will then add the email address that requested the change to the
[okta-zendeskglobal-users](https://groups.google.com/a/gitlab.com/g/okta-zendeskglobal-users/members)
Google group. After doing so, the DRI will update the issue confirming the
requester has been added to the Google group (and they will close the issue).

Adding the requester as a member of the Google group should trigger Okta to
assign the application to the requester's profile.

#### By special request

Any special request issues to provision on either Zendesk instance not related
to role based entitlements need to be assigned to the provisioning DRI.

### Special setups

#### Support team

The Support team (including Support Readiness) utilizes sync mechanisms to
manage various aspects of our agents:

- [Zendesk Global](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/agents)
- [Zendesk Us Federal](https://gitlab.com/gitlab-com/support/support-ops/zendesk-us-federal/agents)

These run daily pipelines that sync various aspects of an agent to Zendesk, such
as:

- GitLab.com user ID
- GitLab.com username
- Groups
- Manager tag
- Name
- Out of Office status
- Signature
- Some user tags
- User region (Zendesk Global only)

Any modifications to a Support agent in Zendesk will be overridden by this.

#### Partner Support team

This is a specialized group of light agents who are allowed to file some types
of Internal Requests. These agents will need the tag `partner_support_agent`
added on their Zendesk account.

#### Order Management team

This is a specialized group of light agents who are allowed to file some types
of Internal Requests. These agents will need the tag `order_management_team`
added on their Zendesk account.

#### OEM  Management team

This is a specialized group of light agents who are allowed to file some types
of Internal Requests. These agents will need the tag `oem_management_team`
added on their Zendesk account.

## Deprovisioning

You will, from time to time, get a request to deprovision an agent (these will
mostly stem from Offboarding tasks). To deprovision an agent, go to that
agents's page in Zendesk and do the following:

- Unassign any active tickets (less than Closed) from that agent (assign them to
  their manager)
- Remove any of the agent's tags from Tags section
- Clear out any user fields on the profile
- Demote the agent's role to that of end-user
- Suspend the end-user
- After doing so, do the following on the issue requesting the deprovisioning
  - Check the corresponding boxes on the request issue
  - Unsubscribe from the issue (optional)

## Assigning an app via Okta

As of current, we manage assigning the application via google groups.

- [Zendesk Global](https://groups.google.com/a/gitlab.com/g/okta-zendeskglobal-users/members)
- [Zendesk US Government](https://groups.google.com/a/gitlab.com/g/okta-zendeskfederal-users/members)
