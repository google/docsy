---
title: Associating a subscription with a namespace & troubleshooting errors
description: "How to provision GitLab.com subscriptions"
category: GitLab.com subscriptions & purchases
---

## Provisioning subscriptions for reseller customers

Customers who purchase from GitLab Partners, resellers, AWS, and/or GCP have **read-only** access to their subscriptions in [Customers Portal](https://customers.gitlab.com/customers/sign_in).

All SaaS customers should provision their subscriptions from CustomersDot as described under [Customer self-serve: associating the subscription and namespace](/handbook/support/license-and-renewals/workflows/saas/associate_subscription_and_namespace#customer-self-serve-associating-the-subscription-and-namespace).

## Troubleshooting 502 errors while provisioning the subscription

While handling the subscription provisioning requests, we might encounter a 502 error while impersonating the user on the customer portal, this occurs when an admin accidentally links their GitLab.com admin account with the customer portal account, due to which the customer portal tries to fetch all the groups that are accessible to the admin user on GitLab.com and eventually returns a 502 error.

- We can verify that by [retrieving the token information](https://docs.gitlab.com/api/oauth2/#retrieving-the-token-information)(grab the `access_token` from the customer portal and call the API endpoint to retrieve the `resource_owner_id` attribute, which should be the same as the  GitLab.com `userID`).

To fix this, we should **completely unlink the GitLab.com account with the customer portal** account using the [unlink_customer console function](/handbook/support/license-and-renewals/workflows/customersdot/customer_console#unlink_customer) or `Unlink GitLab.com account` in the [CustomersDot Support Admin Tools](/handbook/support/license-and-renewals/workflows/customersdot/support_tools/#unlink-gitlabcom-account) .

## Force Associate SaaS Subscription

> <i class="fas fa-exclamation-triangle color-orange"></i> **NOTE**: Soon to be [deprecated](/handbook/support/license-and-renewals/workflows/customersdot/mechanizer#mechanizer-notice)

While handing the subscription provisioning requests, we'll face some cases where it's not possible to associate the subscription by following the normal procedure(the workflow mentioned above) using the customer portal admin

- If the namespace has more active users than the number of seats in the subscription, the system redirects to the payment page to purchase additional seats to match the GitLab.com Group's active user count, in this scenario if the customer is not interested in purchasing additional seats upfront then we can force associate the subscription and the additional seats will be reflected as true-ups on the group's billing page.

- Another scenario: Provisioning requests for EDU/OSS customers. In this case, the ```Change Linked Namespace``` button on the subscription does not exist, so you must use the [Force Associate Zendesk App](/handbook/support/license-and-renewals/workflows/customersdot/support_tools/#force-associate) to associate the subscription.

- If it's successful then the response would be {:success=>true} -> You can also verify the namespace and close the issue.
- If it's not successful then add the `~Console Escalation - customers` label and this will be investigated by the engineers with console access.

Please note: when using the force associate tool, ensure that a gitlab.com user (with owner role in the relevant namespace) has been linked to the customersdot account that the subscription is associated with. If an association is made, but no gitlab.com user is linked, then any subsequent changes to the subscription will either not reflect on the namespace in gitlab.com or it will downgrade the namespace to Free.

When you Force Associate a subscription, Compute Minute usage is not reset.  Force association only changes the quota.  You can reset the usage from the namespace Admin menu.  However, an Admin reset will clear usage for both the quota and the Additional units.    In some case it may be preferrable instead of resetting the usage, to provide additional minutes to the namespace so the customer receives the full subscription quota of Compute Minutes.

## Clear Subscription

While associating the subscription with a namespace if there are any errors(example: errors like: `unable to associate the subscription as the destination namespace is already associated with a subscription`), we can unlink the subscription associated with that namespace.

[Clear subscription in the CustomersDot Support Amdin Tools](/handbook/support/license-and-renewals/workflows/customersdot/support_tools#clear-subscription) is used to clear the subscription associated with that namespace. 

## Customer self-serve: associating the subscription and namespace

### If the user sees the subscription in CustomersDot

If the user has access to and sees a subscription in CustomersDot but doesn't see the paid plan details showing on their billing page on GitLab.com, have the user associate the group with the subscription via CustomersDot.

Associating a group with a subscription in CustomersDot:

1. Sign in to the [GitLab Customers Portal](https://customers.gitlab.com/customers/sign_in).
1. Go to **Manage Purchases**.
1. Do one of the following:
   - If the subscription is not linked to a namespace, select **Link subscription to a group**.
   - If the subscription is already linked to a namespace, select **Subscription actions** (&nbsp;<i class="me-1 fa-solid fa-ellipsis-vertical"></i>) > **Change linked group**.
1. On the **Change subscription namespace** page, from the **namespace** dropdown list, select the group you want.
1. Check your billing information and select **Confirm purchase**.

**Note:** if the relevant namespace is grayed out or not on the namespace drop-down list, they cannot proceed -- they need assistance from Support to complete the association. Use the following information to determine the correct next step:

1. Until [multiple active orders on a namespace](https://gitlab.com/groups/gitlab-org/-/epics/9486) are supported, a namespace is grayed out because it already has a subscription associated to it. This could be a recently expired subscription, or a consumption subscription.
1. Verify that the **new** subscription is for **a plan with seats**. If it is for compute minutes, STOP and review the purchases to ensure we don't overwrite and lose their existing compute minutes (this can be done by an L&R expert).
1. If the the **new** subscription is for **a plan with seats**, check the seat count as shown in the current Group and compare it to the new Subscription. **The seat count should be the same.** If the Subscription is substantially different to the Group's seats-in-use, STOP and review to ensure we don't create an unexpected QSR calculation (example: force a 10 seat license when they have 40 users). Confirm the way forward with the customer before proceeding.
1. After verifying the seat count is the same, you can use the [Force Associate option in the CustomersDot Support Admin Tools](/handbook/support/license-and-renewals/workflows/customersdot/support_tools#force-associate) to apply the new subscription to the namespace.
1. At this point, additional root-cause analysis may be performed by the L&R experts (for example, they may need to contact the Billing Ops team, if the underlying problem is due to Zuora or SFDC accounts).

### If the user does not see the subscription in CustomersDot

If the user doesn't see a subscription in CustomersDot,
follow the [associating purchases workflow](/handbook/support/license-and-renewals/workflows/customersdot/associating_purchases)
to give the user access to the subscription.
