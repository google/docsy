---
title: Working tickets
description: Operations workflow page for working tickets
canonical_path: "/handbook/security/customer-support-operations/workflows/zendesk/working-tickets"
---

{{% alert title="Note" color="primary" %}}

This pertains solely to Operations working tickets. It does not reflect how any other team might work them.

{{% /alert %}}

## Requests to be associated

### Global

Please see [User Association](user-association) for more details on associating users to organizations.

### US Government

All support contact association is done via a sync with the Salesforce account. As such, we cannot assist here. You will need to instruct the requester to contact their account manager via a new emial. Make sure to provide the email of the account manager.

Once you have done so, mark the ticket as `Solved`.

## Shared organization requests

Please see [Shared Organization management](shared-organizations) for more details on shared organizations.

## Contact management project

Please see [Contact Management Projects](../cmps) for more details on contact management projects.

## Support portal issues

These are reports of issues within the support portal. While each issue can present unique challenges, the common troubleshooting guide for the users would be:

1. Ensure your browser is allowing third party cookies. These are often vital for the system to work. A general list to allow would be:
   - `[*.]zendesk.com`
   - `[*.]zdassets.com`
   - `[*.]gitlab.com`
1. Disable all plugins/extensions/addons on the browser.
1. Disable any themes on the browser.
1. Clear all cookies and cache on the browser.
1. Try logging in again to the Support Portal.
1. If you are still having issues, obtain the following:
   - the browser's version
   - the browser's type
   - your operating system (and distro)
   - any other identifying information
   - the complete contents of your Javascript console for your browser
1. Send all of that to support

At the point you get the ticket, the user may or may not have done all of that. If they have not, point them to trying all that out first.

If they have, you will need to analyze the details of what is sent to determine next steps.

### Adding Secondary Email

Sometimes a customer will raise issue stating they want to add a secondary email to their support portal account. Secondary emails are used to tie submitted tickets to a specific account, although only the primary email address will be used as the submitter (and thus receive notifications).

To add a secondary email to a support portal account, we need following information:

- For GitLab.com Users:
  - The GitLab.com account associated to the requester's email address should have listed the secondary email as verified. You can check this via the User Lookup app. To add secondary email to GitLab.com account, they can follow this [documentation](https://docs.gitlab.com/user/profile/#add-emails-to-your-user-profile)
- For Self Managed and GitLab Dedicated Users:
  - The ticket needs to be submitted from the email address they wish to have added to their existing profile
  - The customer will need to provide proof of support entitlement again via this secondary email address
  - The customer will need to CC the primary email address of the support portal account and have that email reply on the ticket confirming the request to add the secondary email address to their support portal account.
- For Partners:
  - Use the same steps you would for Self Managed and GitLab Dedicated Users

## Incorrect form tickets

When a ticket is using the incorrect form, agents will use the `General::Forms::Incorrect form used` macro. This will change the form to `Support Ops`, tag the ticket, and leave an internal note. From there, we are expected to review the ticket and determine the next steps.

Your goal here is to move it to the correct form. Make sure you fill out _all_ ticket metadata possible.

If the ticket stage is set to NRT, but it makes more sense to treat the ticket as a FRT ticket, change the ticket stage to that of FRY.

## Handling malicious users

When a ticket arises containing potential malicious actions (hacking, phishing, abuse, etc.), we need to always treat it seriously.

If, after a thorough investigation, it is determined to be malicious, take the following actions:

- Suspend the user
- Add a user note stating the ticket and reason
- Add a rejection for the user's email [End-user settings](/handbook/security/customer-support-operations/docs/zendesk/end-users/#end-user-settings) Blocklist (e.g. `reject:alice@example.com`)
- Close the ticket (via the API)
- Delete any user sessions for the user in question (via the API)

When in doubt, escalate the matter to your manager, a Customer Support Operations Fullstack Engineer, and/or the GitLab Secuirty team.
