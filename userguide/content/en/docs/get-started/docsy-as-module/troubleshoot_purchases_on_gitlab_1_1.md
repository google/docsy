---
title: Troubleshoot Errors While Making Purchases on GitLab.com
category: GitLab.com subscriptions & purchases
description: Troubleshooting guide for purchase errors on GitLab.com
---

## Overview

This guide helps you troubleshoot purchasing errors on [GitLab.com](https://gitlab.com/sign_in).

Many subscription and consumption purchases can be made through GitLab.com. At the Payment step, a customer may encounter a generic error like the following:
> An error occurred in the purchase step. If the problem persists please contact <support@gitlab.com>.

## Known Issues

Our most reported known issues are:

1. [Blank lastname/surname field](https://gitlab.com/groups/gitlab-org/-/epics/5785)
1. [3D Secure](https://en.wikipedia.org/wiki/3-D_Secure) credit-card authentication protocol [is supported](https://gitlab.com/groups/gitlab-org/-/epics/7714). There are, however, a few exceptions where the payment might fail. See [3D Secure Authentication 3DS](#3d-secure-authentication-3ds) for more information.
1. [Email already taken](https://gitlab.com/gitlab-org/gitlab/-/issues/330608)

We use an Issue to [document any issues](https://gitlab.com/gitlab-com/support/toolbox/console-training-wheels/-/issues/19) that might be a result of the workarounds described in this workflow.

## Workflow

### Get the error from Sentry

Attempt to [locate the specific Sentry error event](#finding-an-error-message-in-sentry) logged for the user **making the purchase**.
Please note that sometimes the ticket submitter might not be the user making the purchase.

### Get the error from GitLab.com Kibana logs

Attempt to [locate the logs in Kibana](/handbook/support/workflows/kibana#gitlab.com-purchase-errors) for the user **making the purchase**.
Please note that sometimes the ticket submitter might not be the user making the purchase.

**NOTE:** If you are unable to locate any error messages, check that the known issues do not apply to the user before requesting them to re-attempt the purchase.

### Check whether the user's account has only one name (no surname)
>
> "last_name":["can't be blank"]

Request the user to add a second name in their GitLab account profile as a temporary workaround. Here are the steps:

1. Navigate to your account profile settings <https://gitlab.com/-/profile>
1. Under Main Settings, Update the Full Name field to have **2 names with a space between the names**
1. Scroll to the bottom and click on `Update profile settings` (Don't forget this)
1. Retry the purchase

### 3D Secure Authentication 3DS

>
> Transaction declined.generic_decline - Your card was declined

Our existing integration with Zuora does not support the authorization of payment methods that mandate [require 3DS authentication on all transactions](https://docs.stripe.com/testing#authentication-and-setup). The issue is actively being worked on and will [soon also cover the Customers Portal](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/9069).

At this moment, an alternative is to ask the user to use a different card. Additionally, you can [reach out to Sales](/handbook/support/license-and-renewals/workflows/working_with_sales#specific-workflows-to-pass-to-sales) to offer the user an alternative payment method.

>
> card_error/authentication_required/authentication_required

Our existing integration with Zuora does not support the authorization of payment methods that mandate [require 3DS authentication on all transactions](https://docs.stripe.com/testing#authentication-and-setup). Such transactions will fail after the card is added.

At this moment, an alternative is to ask the user to use a different card. Additionally, you can [reach out to Sales](/handbook/support/license-and-renewals/workflows/working_with_sales#specific-workflows-to-pass-to-sales) to offer the user an alternative payment method.

>
> invalid_request_error/setup_intent_authentication_failure

The 3DS authentication failed.

The first option is to request the user to try again, or with a different another card.
You can also [reach out to Sales](/handbook/support/license-and-renewals/workflows/working_with_sales#specific-workflows-to-pass-to-sales) to offer the user an alternative payment method.

### Check whether the linked accounts have matching emails

>
> "email"=>["has already been taken"]

This happens when:

1. The customer has an existing account on CustomersDot but does not link it with a GitLab account during purchase.
1. The email in the CustomersDot account does not match the email in the linked GitLab account.

The error is reported because CustomersDot does not find a Customers Portal account that is linked to the GitLab account making the purchase.
CustomersDot then tries to create an account using the email of the GitLab account making the purchase.
This fails when a CustomersDot account with the email already exists.

See the example scenarios for a more detailed explanation.

#### Example Scenarios

##### Unlinked CustomersDot account for GitLab purchases

Let's say a Customer X has an existing Customers Portal account with their email <customerX@example.com> either because:

- They created an account manually on [Customers Portal](https://customers.gitlab.com/customers/sign_in)
- Or they previously purchased some units if compute

Customer X will get this error if they log in or create an account in GitLab with their email <customerX@example.com> and attempt to purchase or renew a paid plan or additional storage, or try to purchase more compute minutes from GitLab.
The error is reported because *they did not link their Customers Portal account to a GitLab account before making the purchase.*

🔧 To fix the problem, Customer X needs to log in to their [Customers Portal](https://customers.gitlab.com/customers/sign_in) account and [link their GitLab account](https://docs.gitlab.com/ee/subscriptions/customers_portal.html#change-the-linked-account).

##### Unlinked CustomersDot account for purchases via Sales

Let's say a Customer Y purchases a subscription through Sales. Their signed Order Form has the **Sold To** contact's email as <customerY@example.com>.
Once the Quote is processed, Zuora's [callout service](https://gitlab.com/gitlab-org/customers-gitlab-com/-/blob/main/doc/zuora/zuora_callouts.md#purpose)
triggers an account creation on Customers Portal. This service uses the `Sold To` contact's details to create the account.

For various reasons, the created Customers Portal account is not linked to a GitLab account.
For example:

- The subscription has not yet been applied to a group.
- Support used [Mechanizer's force associate workaround](/handbook/support/license-and-renewals/workflows/customersdot/mechanizer#force-associate) to bypass the need to have a linked GitLab account to apply a subscription and the customer never linked their GitLab account.

Customer Y will get this error if they try to log in or create an account in GitLab with their email <customerY@example.com> then attempt to purchase or renew a paid plan or additional storage, or try to purchase more compute minutes from GitLab.
The error is reported because *they did not link their Customers Portal account to a GitLab account before making the purchase.*

🔧 To fix the problem, Customer Y needs to log in to their [Customers Portal](https://customers.gitlab.com/customers/sign_in) account and [link their GitLab account](https://docs.gitlab.com/ee/subscriptions/customers_portal.html#change-the-linked-account).

##### Linked accounts have different emails

Let's say a Customer Z has an existing Customers Portal account (<customerZ@example.com>) either from an existing purchase or by creating a new account.
And this Customers Portal account has been linked to a GitLab account (check the `GitLab Groups` tab) whose email is <gitlabZ@example.com>.
*This could be someone else's GitLab account or Customer Z might have multiple GitLab accounts.*

Customer Z will get this error if they try to log in or create an account in GitLab with their email <customerZ@example.com> then attempt to purchase or renew a paid plan or additional storage, or try to purchase more compute minutes from GitLab.
The error is reported because CustomersDot does not find a Customers Portal account that is linked to the GitLab account making the purchase yet there is a CustomersDot account whose email is the same as the email in the GitLab account making the purchase.
In this case, CustomersDot does not find an account linked to the GitLab account whose email is <customerZ@example.com>.
CustomersDot then tries to create an account using the email <customerZ@example.com> but this fails because a CustomersDot account with this email already exists.

🔧 To fix the problem, Customer Z needs to log in to their [Customers Portal](https://customers.gitlab.com/customers/sign_in) account and either:

- [Change the linked GitLab account](https://docs.gitlab.com/ee/subscriptions/customers_portal.html#change-the-linked-account) to the GitLab account with email <customerZ@example.com>
- Or update the email in their Customers Portal account to match the email in the linked GitLab account, which is <gitlabZ@example.com>.
Customer Z should not create another account with the email <customerZ@example.com> because an account will be created for them automatically when the transaction succeeds.

**TODO:** We need to verify that Customer Z can purchase using the GitLab account with the email <gitlabZ@example.com> because the system will locate the linked Customers Portal account.

### Insufficient funds
>
> Your card has insufficient funds

Make sure that this is the last event associated with the user. Sometimes customers retry after adding funds, so we must check all their events before we are sure that is the cause.

Send a reply asking the customer to check the credit card:

> After checking our system we found the following error message associated with your user (`USERNAME_HERE`):
>
> Your card has insufficient funds.
>
> Can you please make sure that you have enough funds in your credit card?

### Expired subscription on the namespace
>
> The Contract effective date should not be later than the term end date of the basic subscription

This error indicates that a purchase is attempting to update an expired subscription that is
currently linked to the namespace. The problem has [been fixed](https://gitlab.com/groups/gitlab-org/-/epics/7966),
please report if you encounter it again.

> :warning: Please exercise caution and understand the risks of unlinking a subscription **before** continuing with the following steps.

1. Locate the accounts linked to the user's namespace in Customers Portal
1. Check that ALL subscriptions in ALL customer accounts are expired
1. Confirm that the namespace is on a `Free` plan
1. If the namespace is on `Free` and has no active subscriptions, you can proceed to [unlink the expired subscription](/handbook/support/license-and-renewals/workflows/customersdot/mechanizer#clear-subscription) from the namespace:
   1. Locate the customer's account in CustomersDot by searching using the domain part of their email address.
      - If the results of the search are many, you can search using the full email address.
   1. Locate the proper accounts in CustomersDot and navigate to the `Zuora Subscriptions` page
   1. Note the `Name` of the subscription with an `End Date` that has passed. *Most subscription names have the format A-S000xxxx*
   1. Confirm that the subscription you have located is linked to the namespace:
      - Click on the `Impersonate` tab. You will see the landing page of the Customers Portal with the heading `Manage Purchases`
      - Check the listed products whose `Start Date` is 1 year ago. These products will have expired.
      - Check the Title of the product that is usually located above the subscription name (A-S000xxxx). If this title is the same as the `Product Name` listed in the table, then it is **NOT** linked. Otherwise, this title displays the **Name of the group** (not the [namespace](https://docs.gitlab.com/ee/user/group/#namespaces)) that it is linked to.
      - Confirm the subscription name of the product whose title shows the customer's namespace. You will use the **Subscription Name** in the next step
   1. Open the [Clear Subscription form](https://gitlab-com.gitlab.io/support/toolbox/forms_processor/LR/clear_subscription) to unlink the expired subscription:
      - Enter your GitLab username
      - Enter the **Subscription Name**
      - Click `Send`
      - Wait for an issue in the [internal requests issue tracker](https://gitlab.com/gitlab-com/support/internal-requests/-/issues?sort=created_date&state=all&label_name[]=Mechanizer::Clear+Subscription) that will be assigned to you automatically by Mechanizer
      - Check that the issue reports a successful `Subscription Unlinked` message. If this fails, add the label `Console Escalation::Customers` and comment with the ZD ticket link and/or ask for assistance in #support_licensing-subscription.
1. If the namespace is on a paid plan, request the user to:
   1. Create a new [Customers Portal](https://customers.gitlab.com/customers/sign_in) account
   1. [Link their GitLab account](https://docs.gitlab.com/ee/subscriptions/customers_portal.html#change-the-linked-account)
   1. Retry the purchase from the new portal account

### Replying with next troubleshooting steps

If you could not find the user's specific error in Sentry, then consider asking for a browser console output. Some purchasing error details are visible in this output.

Please use your best judgement to **try to limit the number of purchase retries you ask the user to attempt**
so that their card does not get locked or blocked.

### Handling failed credit card verifications

If a customer contacts Support informing that their attempt to use their credit card for verification in order to use compute minutes on shared runners (please note that when a customer verifies using their credit card, it will not be charged but instead will be verified with a one-dollar authorisation transaction). Then you should do the following:

1. Respond to the ticket by using the Zendesk Macro `Support::L&R::Credit Card Authorisation Failed'
1. If the customer comes back after 24 hours and confirms they are still unable to proceed, but they have verified their credit card works outside of GitLab.com, then refer them to Trust and Safety for further guidance. The Trust and Safety Team contact details can be found in the handbook: [Working with the GitLab Trust and Safety Team](/handbook/security/security-operations/trustandsafety/#working-with-gitlab-trust-and-safety-team).

## Finding an error message in Sentry

<i class="fas fa-exclamation-triangle color-orange"></i> The Error message displayed in the top section of an issue is not always
the same error displayed for a specific user. Always check the **event details** related to the user.

To find the error specifically related to a user on Sentry, try to check for a logged error in at least one of these Sentry projects:

1. [`gitlabcom`](https://sentry.gitlab.net/gitlab/gitlabcom/issues/)
1. [`gitlabcom-clientside`](https://sentry.gitlab.net/gitlab/gitlabcom-clientside/issues/)
1. [`customersgitlabcom`](https://sentry.gitlab.net/gitlab/customersgitlabcom/issues/)

To locate a Sentry event, first get the `ID` or `Username` of the **user making the purchase from GitLab** using any of the following:

- Chatops: Run `/chatops run user find <username or email>`
- Admin account: Navigate to the admin link in the [GitLab User Lookup](/handbook/support/readiness/operations/docs/zendesk/apps/#gitlab-reminders-app) Zendesk app
- [Users API](https://docs.gitlab.com/ee/api/users.html#for-normal-users): Search for user using their email or username

### Searching with the username in `gitlabcom` Sentry project

If you have the `username` of the user, find the error message for the user in Sentry's `gitlabcom` project:

- Go to [gitlabcom Sentry project](https://sentry.gitlab.net/gitlab/gitlabcom/issues/)
- Use `user:"username:example"` (replace `example` with the actual username from GitLab)
- Look for an error regarding `SubscriptionsController`
- Open sentry issue → Click on `EVENTS`. The list of events are automatically filtered with your search term
- Click on any to see details of the error message

### Searching with the user's ID in `gitlabcom-clientside` Sentry project

If you have the `ID` of the user, find the error message for the user in Sentry's `gitlabcom-clientside` project:

- Go to [gitlabcom-clientside Sentry project](https://sentry.gitlab.net/gitlab/gitlabcom-clientside/issues/)
- Use `user:"id:userID"` (replace `userID` with the actual ID from GitLab)
- Look for an error with `buy_minutes` or `buy_storage` that looks like `Error?(/assets/webpack/commons-pages.subscriptions.buy_minutes-pages.subscriptions.buy_storage.49207fe4.chunk.js)`
- Open sentry issue → Click on `EVENTS`. The list of events are automatically filtered with your search term
- Click on any to see details of the error message

### Searching `customersgitlabcom` Sentry project

If the purchase was also attempted from [CustomersDot portal](https://customers.gitlab.com/customers/sign_in), use
the [workflow](/handbook/support/license-and-renewals/workflows/customersdot/troubleshoot_errors_while_making_purchases#getting-error-message-from-sentry)
to find the error message in [Customers Portal Sentry project](https://sentry.gitlab.net/gitlab/customersgitlabcom/issues/).

## Finding an error message in Stripe

As we use [Stripe](/handbook/business-technology/tech-stack/#stripe) as a payment processor, some error codes that are visible to the customers are not handled by GitLab, and are reported by Stripe directly. For example, the `do_not_honor` error is an error message that comes from Stripe. As such, we can rely on the [**Stripe's Decline Codes documentation**](https://stripe.com/docs/declines/codes) to find more information regarding the root cause of an error.
