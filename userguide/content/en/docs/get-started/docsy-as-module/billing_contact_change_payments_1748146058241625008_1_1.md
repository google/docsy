---
title: Billing, invoice and payments requests
category: General
description: Some billing and invoicing requests require action from our Billing/Accounts Receivable team.
---

## Overview

Some billing and invoicing requests require action from our Billing/Accounts
Receivable team.

The following information is helpful to provide to the AR team when transfering
tickets, but not required.

1. **Subscription #**
1. **Subscription information** - copy & paste from `Manage Purchases` in [CustomersDot](https://customers.gitlab.com/customers/sign_in), use the `Impersonate` tab to view this information.
1. **Zuora ID** - This can be found on the customer's organization's `Billing account` page by looking under the `Show` tab in [CustomersDot](https://customers.gitlab.com/customers/sign_in).
1. **Salesforce account ID** - This can also be found on the customer's organization's `Billing account` page by looking under the `Show` tab in [CustomersDot](https://customers.gitlab.com/customers/sign_in).

## Billing

### Zuora contact change

In the past when making contact changes in Zuora this was done by billing.  Recent updates to [CustomersDot](https://customers.gitlab.com/customers/sign_in) have provided this capability to Support.

1. Verify that they are associated with the account / authorised to make the request, by checking the following:
   - If the requester has access to the current subscription information in [CustomersDot](https://customers.gitlab.com/customers/sign_in).
   - If the requester is presently listed as the `Sold To:` contact currently on file.
   - If they pass the [account ownership verification](/handbook/support/license-and-renewals/workflows/customersdot/associating_purchases#ownership-verification)
1. To update the Zuora contact information from within [CustomersDot](https://customers.gitlab.com/customers/sign_in) refer to the [Update Zuora Sold To contact using CustomersDot](/handbook/support/license-and-renewals/workflows/customersdot/associating_purchases/#update-zuora-sold-to-contact-using-customersdot) section of the `Associating purchases with additional accounts` page in the L&R workflow portion of the handbook.
1. If the change to Zuora is outside changing either the `Bill To:` or `Sold To:` on record or their address information, please use the `General::Forms::Incorrect form used` macro to request the ticket be transferred to the correct team (Accounts Receivable) by Support Readiness. Also add a private comment to inform Accounts Receivable of what needs to be changed along with why we need them to make this change themselves.

For self-managed customers, if the new contact would like their license updated it will update automatically if they have a cloud license.  This is done during a daily sync that happens between their instance and GitLab.  For customers using a legacy license or an offline cloud license they will receive a license with an updated contact on it at the time of a license change.  Such as a renewal, seat increase, tier change, or contract reset to list a few reasons when this would happen.

**A Couple of Items of Note:**

1. The `Sold to:` contact in Zuora usually receives the license, renewal reminders and comms about changes to the subscription (e.g renewal success/fail). The `Bill to:` contact in Zuora will receive invoices as well as renewal reminders.

1. Billing doesn't have a vetting process, so we need to vet the customer as far as possible before passing the request.

### Billing processes to know about

- Refer to their internal [wiki page here](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/Process-for-BTST-Information-Updates-and-Invoice-Request#update-request-for-st-email) for additional details.

#### Zuora entity change

Billing processes an [entity change](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/Process-for-change-of-entity) by creating a second Zuora account for the customer and entering the appropriate country abbreviation into its `Entity` field. The country will be the one in which the customer has their base of operations.

To identify entity changes, check the `Renewal subscription` field in a subscription from within Zuora.  The original (and now cancelled) subscription will point at a `Renewal subscription` that can be used to search for the new Zuora account.

##### Effect on Self-Managed subscriptions

When an entity change happens at renewal, it can impact how licenses are generated. If you are troubleshooting a license issue, check Zuora to see if there are 2 accounts with different entities to confirm if an entity change took place.

The most common issue that we will see is the renewal license being generated without a previous user count (PUC) or trueups. In the event of the license being impacted by the entity change, we can assist with a manual license.

##### Effect on SaaS subscriptions

When an entity change occurs the original account and subscription associated with that account in Zuora are cancelled and a new account and subscription are created.  This causes the group that is associated with the original subscription to drop to the Free tier of service until the new subscription is associated to the group.

These situations are handled by the account manager for the customer by opening an [Internal Request](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/). Use the **GitLab Support Internal Requests for Global customers** request option, and **Billing Entity change** for the internal request type.

### How to handle Billing Entity changes

The progress on Fulfillment's work can be followed in these reported issues:

- [Spike: Provision an SM License correctly after a Billing Entity Change](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/3044)
- [Billing Entity Change: SaaS Subscriptions should provision correctly](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/4376)
- [Investigate tooling solutions for billing entity change](https://gitlab.com/gitlab-org/gitlab/-/issues/385612)

This workflow will be removed once the above issues are fixed.

When a Billing Entity Change occurs, there will be two Zuora accounts and two subscriptions.  The old subscription can be found on the canceled Zuora account, while the new subscription can be found on the active Zuora account. To assist with differentiating the accounts, the old account will have a `US` entity while the new account will have the 2 digit entity code for the customer's country of operation.

Upon completion of a Billing Entity change the customer's account in [CustomersDot](https://customers.gitlab.com/customers/sign_in) should be updated with the new Zuora account which will house the new subscription information.  Sometimes due to the change in subscription Support will need to use the Mechanizer to do a force associate for the new subscription to the group the old subscription was associated with.  This can be done via the Mechanizer functionality present under the Apps category in Zendesk.

#### Finding Zuora accounts

Sometimes you need to locate both of the Zuora accounts in question for the workflow shown above. The entity change results in a new billing account being created, and the SaaS subscription(s) being recreated on that account.

- From CustomersDot: If you know the CustomersDot account, at least one of the Zuora accounts will be present in the `History` tab and you can work from there.
- From SFDC: You can usually find both Zuora account IDs by looking at the SFDC account -> Billing Accounts.  In the best case, there will be only 2 accounts listed there, the new and the old.  But often there are several billing accounts associated with a customer account. The billing account in SFDC will have an Account Number in the format of `A000XXXXX`. This can be searched directly in Zuora from the search page on Customer Accounts. Alternatively, the SFDC billing account shows a Zuora ID md5 hash, which you can supply to Zuora by editing this URL: `https://www.zuora.com/apps/CustomerAccount.do?method=view&id=ZUORA-ID-MD5-HASH-GOES-HERE`

If the above suggestions do not work, either use a different method for locating them, and/or see below on [Finding subscriptions](#finding-subscriptions).

When creating an order for the new subscription, the `create_order_from_zuora` function will query the Customer object, look at their Zuora subscriptions, and create the order based on that, so the CustomersDot account **must be pointing at the new Zuora account**.  If it is not, make sure you are looking at the right account, and if you are, then just update the `Zuora account` field to the correct ID. Billing team usually handles that, though.

#### Finding subscriptions

- Easily identify the old/cancelled subscription via console:

   ```ruby
   pp Order.find_by(subscription_name: "old-subscription-name")
   id: 123456,
   customer_id: 123456,
   product_rate_plan_id: "2c92a00d76f0d5060176f2fb0a5029ff",
   subscription_id: "MD5-HASH-HERE",
   subscription_name: "old-subscription-name",
   start_date: timestamp,
   end_date: timestamp,
   quantity: 216,
   gl_namespace_id: "1234567",
   gl_namespace_name: "group-name",
   amendment_type: "RemoveProduct",
   trial: false,
   last_extra_ci_minutes_sync_at: nil,
   zuora_account_id: "MD5-HASH-HERE",
   ```

   You can also try just locating all subscriptions ever linked to the group namespace:

   ```ruby
   pp Order.where(gl_namespace_id: xxxxxx)
   ...
   ...
   customer_id: 123456,
   product_rate_plan_id: "2c92a00d76f0d5060176f2fb0a5029ff",
   subscription_id: "MD5-HASH-HERE",
   subscription_name: "old-subscription-name",
   ...
   ...
   ```

   You may notice that the `end_date` is the **renewed** `end_date`, because it was renewed and then cancelled, so don't get tripped up by that. The important parts are the `subscription_name`, and if needed, the `customer_id`, `subscription_id`, and `zuora_account_id`.
- From SFDC both subscriptions will be listed in the SFDC account under Subscriptions and/or Subscription Product & Charges. You should notice they point at 2 different billing accounts, and one of the susbcriptions will be marked as `Cancelled`.  You can use both of these to locate the Zuora accounts if you haven't already. Generally, the subscription with the higher ID number will be the new one. Alternatively if you can locate the relevant quotes in SFDC that have their status as `Sent to Z-Billing`, the quotes will have the **Zuora Subscription ID MD5 hash**.
- If you have their CustomersDot account, the new subscription should also appear under their `Zuora Subscriptions` tab. If not, either there exists another CustomersDot account (try searching by just contact email domain), or possibly the CustomersDot account wasn't updated.

Once you locate a `subscription_id` you can directly access the subscription by editing this URL: `https://www.zuora.com/apps/Subscription.do?method=view&id=ZUORA-ID-GOES-HERE`.

In Zuora, the old / cancelled subscription may also have a field `Renewal subscription`, which lists the name of the newly created subscription.

## Cancellations, Downgrades, Contract Resets and Refunds

### Cancellations

When a customer wishes to cancel their subscription and they are not interested
in waiting until the subscription expires.

1. Make sure that there aren't any other types of queries that would need the
   Support team's attention
1. Use the `General::Forms::Incorrect form used` macro to request the ticket be transferred to the correct team (Accounts Receivable) by Support Readiness to process the cancelation. They will reply to the customer once done and issue a refund if applicable.

### Downgrades

There is currently [no ability to downgrade a subscription from a self-service perspective](https://gitlab.com/gitlab-org/customers-gitlab-com/issues/368).

Plan downgrades should only be done at renewal. However, if the customer purchased the wrong plan as a new subscription, use the `General::Forms::Incorrect form used` macro to request the ticket be transferred to the correct team (Accounts Receivable) by Support Readiness and ask that the incorrect purchase be canceled so that a new subscription can be purchased on the correct plan.

If a SaaS Ultimate customer would like to renew for a Premium plan, advise them to purchase a Premium subscription and link their group to the new subscription. Ensure that they have set their Ultimate subscription to expire/cancel on the end date.

If a Self-managed Ultimate customer would like to renew for a Premium plan, refer them to Sales for assistance.

### Contract Resets for GitLab.com

Previously, whenever a `contract reset` was performed on a GitLab.com subscription, the namespace would be downgraded to the free tier, requiring manual intervention from L&R Support to link the new subscription to the customer's existing namespace. Sales Operations has since implemented a new workflow process in SFDC to prevent this from occuring, ensuring that the namespace is automatically associated with the new subscription created during a contract reset. Detailed guidance on this workflow process can be found in the sales operations handbook under the section titled [contract reset](/handbook/sales/field-operations/sales-operations/deal-desk/#contract-reset).

### Refunds

GitLab provides subscriptions on an annual basis which are not eligible for termination / refund for a customer's convenience. When a refund request is made, our billing team uses [this internal guide](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/Refund-Approvals-Sales-Assisted-&-Web-Direct) (GitLab internal) to determine if a refund is appropriate.

1. Determine the reason that the customer is cancelling and requesting a refund.
1. Let the customer know that the billing team will advise whether a refund is possible and process the request if appropriate.
1. Make sure that there aren't any other types of queries that would need the
   Support team's attention
1. Use the `General::Forms::Incorrect form used` macro to request the ticket be transferred to the correct team (Accounts Receivable) by Support Readiness to advise and process if relevant. They will reply to the customer once done.

Note: we cannot do partial refunds, so when a refund is requested, the whole
subscription will have to be cancelled and refunded. See [Renewal reversal](/handbook/support/license-and-renewals/workflows/billing_contact_change_payments#renewal-reversal) for accidental renewal scenarios.

## Invoice

### Request copy of invoice

Check first if the invoice is available in [CustomersDot](https://customers.gitlab.com/customers/sign_in).

- If yes: walk the customer through locating the invoices under Payment History for future self-service ability.
- If no: Use the `General::Forms::Incorrect form used` macro to request the ticket be transferred to the correct team (Accounts Receivable) by Support Readiness to process the request. They will reply to the customer once done.

### Invoice modification

When a customer wishes to modify their invoice for tax or administration purposes.

1. Verify that the invoice exists in the system
1. Make sure that there aren't any other types of queries that would need the
   Support team's attention
1. Use the `General::Forms::Incorrect form used` macro to request the ticket be transferred to the correct team (AR) via Support Readiness to process the request. They will reply to the customer once done.

## Payments

## Paying invoices

Settling an invoice with a debit or credit card is [available in the Customers Portal](https://docs.gitlab.com/subscriptions/customers_portal/#pay-for-an-invoice). The customer can:

1. Sign in to the Customers Portal.
1. Navigate to the Invoices page from the sidebar (`/invoices`).
1. Click the `Pay for invoice` button on the invoice.
1. Complete and submit the payment form.

Unlike adding a credit card during the purchase flow, payment methods entered here are not stored for future purchases, as this is an [on-session](https://support.stripe.com/questions/what-is-the-difference-between-on-session-and-off-session-and-why-is-it-important)/[one-time](https://knowledgecenter.zuora.com/Zuora_Payments/Process_payments/Payment_Pages_2.0/J_Implement_Payment_Pages_2.0_to_support_one-time_payment_flows/Z_Implement_one-time_payment_flows_for_processing_payments_in_India) payment. However, this process accepts cards that [require 3DS authentication on all transactions](/handbook/support/license-and-renewals/workflows/customersdot/troubleshoot_errors_while_making_purchases/#3d-secure-authentication-3ds) and [cards issued in India](https://docs.gitlab.com/subscriptions/gitlab_com/gitlab_subscription_troubleshooting/#error-transaction_not_allowed).
Additionally, existing payment methods cannot be accessed in this flow.

Alternative payment methods aren't supported at this time, so requests to do so need to be [passed over to Accounts Receivable team](#requests-to-make-a-paymentpayment-failed)

### Requests to make a payment/payment failed

Use the `General::Forms::Incorrect form used` macro to request the ticket be transferred to the correct team (Accounts Receivable) by Support Readiness to process the request. They will reply to the customer once done.

### Credit card removal

When a customer wishes to remove their credit card from their CustomersDot
account.

1. Make sure that there aren't any other types of queries that would need the
   Support team's attention.
1. Use the `General::Forms::Incorrect form used` macro to request the ticket be transferred to the correct team (Accounts Receivable) by Support Readiness to process the request. They will reply to the customer once done.

### Process payment again after credit card update

When a customer has updated their credit card after a failed payment attempt and would like the payment processed with the new card:

1. Use the `General::Forms::Incorrect form used` macro to request the ticket be transferred to the correct team (Accounts Receivable) by Support Readiness to process the payment again.
1. Customers can also contact AR drectly ar@gitlab.com to request this.

### Renewal reversal

When a customer has accidentally renewed twice or mistakenly.

1. Determine the reason that the renewal has to be reversed
1. Use the `General::Forms::Incorrect form used` macro to request the ticket be transferred to the correct team (Accounts Receivable) by Support Readiness to process the request. They will reverse the renewal so that the subscription is in the same state as it was before the renewal, and refund the renewal if appropriate.

### Requests for split payments

When a customer has a payment limit on their card, preventing a single payment for the full amount of their purchase, Billing is able to charge the card in "batches".

1. Get information on the limit and the total cost of the purchase the customer wishes to make.
1. Use the `General::Forms::Incorrect form used` macro to request the ticket be transferred to the correct team (Accounts Receivable) by Support Readiness to process the request. They will reply to the customer once done.

Note that in some cases, the total amount is too large to charge in 2 batches and Billing might request that a sales-assisted order is done instead. If you're unsure whether this would be the case, you can tag [at]Billing-ops in Chatter on the Account or Opportunity in SFDC to double-check with them.
