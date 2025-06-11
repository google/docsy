---
title: User Association
description: Operations workflow page for Zendesk user association
canonical_path: "/handbook/security/customer-support-operations/workflows/zendesk/user-association"
---

{{% alert title="Note" color="primary" %}}

This only applies to Zendesk Global. This should never be used for Zendesk US Government.

{{% /alert %}}

User association is a very specific and particular process. This is for both security and accuracy.

## Proving support entitlement

When the request comes in, the we need to first obtain proof of entitlement. This can come in one of three methods:

- The requester is already associated to an organization, in which you can proceed to [Adding additonal contacts](#adding-additional-contacts).
- This is relating to a gitlab.com subscription and the requester is an owner on the top-level namespace, in which you can proceed to [Attempt auto-association](#attempt-auto-association).
- The requester provides licensing information, in which case you can proceed to [Verifying license information](#verifying-license-information).

If none of the above are true, we need to either reject the request or ask for additonal information.

If this is pertaining to a gitlab.com subscription, we need to reject the request. You would do so using the macro `Support::Support-Ops::GitLab.com user is not an Owner`.

If this is pertaining to a Self-Managed or GitLab Dedicated subscription, we need to request additional information. You would do so using the macro `Support::Support-Ops::Proof of support entitlement`. If the requester can not provide the needed information, you would need to reject the request.

## Pre-checks

Even with support entitlement proven, we need to ensure we can actually associate the user. Before proceeding, make sure all of the followings checks have passed:

- The organization is not using a contact management project
- The addition of the support contacts would not cause the organization to surpass the 30 support contact limit
- There are not organization notes/details indicating you should not proceed with the request

## Attempt auto-association

{{% alert title="Note" color="primary" %}}

Before proceeding, please ensure all [Pre-checks](#pre-checks) have been done.

{{% /alert %}}

This is done via the Support Ops Super App. Confirm all metadata on the ticket is correct, refresh your apps, then run the `Attempt Association` plugin on the app. This will handle associating the user to the correct organization, if possible.

If they wanted additional contacts added, please see [Adding additonal contacts](#adding-additional-contacts).

### Handling app failures

If the app failes to auto-associate, it will detail the reason it could not. If it was due to failing one of the [Pre-checks](#pre-checks), please re-review those and handle the issue as detailed there.

If it is due to complications determining the Salesforce account ID, you will need to manually [locate the Salesforce account ID](#locating-the-sfdc-account-id) and then proceed to [Manual association](#manual-association).

## Manual association

{{% alert title="Note" color="primary" %}}

Before proceeding, please ensure all [Pre-checks](#pre-checks) have been done.

{{% /alert %}}

The steps for manual association are as follows:

1. [Locate the organization](#locating-the-organization)
1. Copy the name of the organization
1. Go to the user in question
1. Paste the organization name into the `Org` field (top-left)
1. Click the organization that appears in the drop-down

After doing so, if they wanted additional contacts added, please see [Adding additonal contacts](#adding-additional-contacts).

## Adding additional contacts

{{% alert title="Note" color="primary" %}}

Before proceeding, please ensure all [Pre-checks](#pre-checks) have been done.

{{% /alert %}}

To add additional contacts, you should use the `Associate User` plugin in the Support Ops Super App.

If the app failes to associate, you will need to utilize [Manual association](#manual-association).

## Verifying license information

When a Self-Managed or GitLab Dedicated customer provides us thier proof of entitlement, we should have two key pieces of information:

- The subscription owner's email (i.e. the sold-to)
- The license information

The path forward will depend on exactly what the license information is, but your first step is to [locate the license of cloud activation page](#locating-the-license-or-cloud-activation-page).

### Locating the license or cloud activation page

- If given a license ID:
  1. Navigate to the customers.gitlab.com [admin panel](https://customers.gitlab.com/admin)
  1. Go to the [Licenses page](https://customers.gitlab.com/admin/license)
  1. Add `/xxxx` to the end of your URL (replacing `xxxx` with the license ID)
- If given a raw license file:
  1. Navigate to the customers.gitlab.com [admin panel](https://customers.gitlab.com/admin)
  1. Go to the [Licenses page](https://customers.gitlab.com/admin/license)
  1. Go to the [Validate License page](https://customers.gitlab.com/admin/license/validate_license)
  1. Paste the contents of the license file in the box
  1. Click `Validate`
  1. Copy the `id` value (at the bottom of the page)
  1. Go to the [Licenses page](https://customers.gitlab.com/admin/license)
  1. Add `/xxxx` to the end of your URL (replacing `xxxx` with the license ID)
- If given a license usage export:
  1. Open the file
  1. Copy the raw `License Key` value
  1. Navigate to the customers.gitlab.com [admin panel](https://customers.gitlab.com/admin)
  1. Go to the [Licenses page](https://customers.gitlab.com/admin/license)
  1. Go to the [Validate License page](https://customers.gitlab.com/admin/license/validate_license)
  1. Paste the contents of the license file in the box
  1. Click `Validate`
  1. Copy the `id` value (at the bottom of the page)
  1. Go to the [Licenses page](https://customers.gitlab.com/admin/license)
  1. Add `/xxxx` to the end of your URL (replacing `xxxx` with the license ID)
- If given a cloud activation code:
  1. Navigate to the customers.gitlab.com [admin panel](https://customers.gitlab.com/admin) (to ensure you are logged in)
  1. Navigate to `https://customers.gitlab.com/admin/cloud_activation?query=XXXX` (replacing `XXXX` with the cloud activation code)
  1. Open the found cloud activation

Once you have the license or cloud activation itself pulled up, make an internal note on the ticket with the link (to save others time in future lookups).

You will then verify the following:

- The license is not a trial license
- The license is still active (i.e. has not expired yet)

If either of those fail, it is not a valid license to use for proving support entitlement (and you should reply to the ticket stating we need an active non-trial license).

If there are not issues, you next need to [locate the order](#locating-the-order).

### Locating the order

To do this:

1. Copy the `Zuora subscription name` value from the license page
   - If on a cloud activation page, the value to copy is actually `Subscription name`
1. Go to the [Orders page](https://customers.gitlab.com/admin/order)
1. Click `Add filter` as the top-right of the page
1. Click `Subscription name` (this cases a filter bar to appear at the top-left of the orders list)
1. Click the drop-down and select `Contains`
1. Put the value of the `Zuora subscription name` in the input box (to the right of the drop-down)
   - Make sure you didn't accidently copy extra spaces!
1. Click thhe `Refresh` button (or hit Enter on your keyboard)

This should pull up order in the list of results. Navigate to it and make an internal note on the ticket with the link (to save others time in future lookups).

From here, you need to [locate the billing account](#locating-the-billing-account)

### Locating the billing account

Being on the order page, this should be simply, as it should be a clickable link on the order page. Navigate to it and make an internal note on the ticket with the link (to save others time in future lookups).

On this final page, we have the last two pieces of information we need:

- The Salesforce account
- The Sold to

Verify the sold-to matches what the requester provided us. If it does not, we cannot proceed.

If all checks out, you can proceed to [Locating the organization](#locating-the-organization).

## Locating the organization

Once everything has been verified, you are ready to find the organization. To do this, perform a Zendesk search:

1. Click the hourglass icon within Zendesk (top-rightish of the page)
1. Type `salesforce_id:XXXX*` (replacing `XXXX` with the Salesforce account value you located)
1. Click the Organizations tab
1. Open the found organization

In the rare event the organziation seems to not exist, make an internal note indicating as much and assign the ticket to the Fullstack Engineer to review.

## Locating the SFDC account ID

In cases where the Attempt Association app failed to locate the correct Salesforce account ID, you will need to locate it manually.

To do this, take the top level paid namespace in question and use it via the `Namespace Lookup` plugin on the Support Ops Super App. Review the results it provides to determine the correct Salesforce account ID to use.

## Sending out the final reply

Once you have completed all association, make sure to send out a reply and mark the ticket as `Solved`. The macro `Support::Support-Ops::Users added to organization` can be used as a reference for the reply.
