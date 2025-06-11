---

title: Working with reseller related requests
category: General
description: This is a guide on how to handle requests involving Reseller.
---




## Overview

Reseller is another word for [Channel Partner](/handbook/resellers/).
Note that an [Alliance Partner](/handbook/support/partnerships/alliance)
is different from a Channel Partner, and is **not** a reseller. See the
[GitLab Alliances Handbook Page](/handbook/alliances/) and the
[Internal Alliances Handbook Page](https://internal.gitlab.com/handbook/alliances/)
for more on alliances.

When a customer purchases through a reseller we follow different workflows than
we do for WebDirect or Sales Assisted purchases. Note the following for a customer purchase through a reseller:

1. The customer will have *NO* access to Customers Portal. The customer's account is held under the name of the reseller, so there is no unique account for them to login to.
1. Additions or modifications to the existing subscription made through a reseller must go through the reseller, unless specifically allowed by the reseller.

### Identifying whether a customer purchased through reseller

Zuora is the single source of truth for whether a purchase was made via a reseller, however this information can be viewed via either Zuora or SalesForce. Authorised resellers are listed on the [GitLab Partner directory](https://partners.gitlab.com/English/directory/).

#### Via Zuora

Check if a subscription was purchased through a reseller by locating the `Invoice Owner` in the customer account on Zuora.

1. First login to [CustomerDot](https://customers.gitlab.com/)
1. Select the tab `Customers` and enter the customers contact details into the search text field box
1. Once you have identified the customer, click on the `Show` button (represented by an i) which will provide details on the customer
1. Click on the `Zuora Subscriptions` tab and then the subscription name (i.e. A-S000860000)
1. This will launch the associated subscription page in `Zuora`
1. Look under `Basic Information` and the reseller should be listed in the `Invoice Owner` field in the subscription page
1. You can also search the `Zuora Subscription` page for the text `SSPChannel` which will have the text value `Reseller`

Note:  Sometimes you can also see Partners section in the end-user's SFDC account.

#### Via Salesforce

1. Open a quote that has its `Status` set as `Sent to Z-Billing` for an opportunity
1. Wait for the Zuora iframe to load
1. If the subscription was purchased via a reseller, the GitLab partner details will be listed in the iframe table under the **Customer Account Details** section as the **Resale Partner**.
   - The **Resale Partner** may also be listed in the **Required Approvals From VP of Channel** notes.

### Requests to update end-user contact information

**Important:** Do not send a license file to the reseller partner.

If a reseller partner needs to have the end-user contact details updated (who should receive the license), you have the following options:

- Have the current Sold-To contact file a support ticket with us, following the workflow [Add subscription management contact workflow](/handbook/support/license-and-renewals/workflows/customersdot/associating_purchases#add-subscription-management-contact-workflow)
- The reseller partner **must** attach a copy of the subscription invoice to verify any contact change requested on an end-user's behalf

### Handling reseller customers' requests for direct renewal

To assist a customer who requests to renew their subscription directly with GitLab instead of through their reseller, follow the [working with sales workflow](/handbook/support/license-and-renewals/workflows/working_with_sales) and ensure you mention that the customer first had a Reseller purchase.

If a customer with a reseller purchase decides to make a new purchase on a different account, their subscription would be a new purchase instead of a renewal. The license generated would therefore not include the previous subscription counts. Follow the [troubleshooting license upload errors](/handbook/support/license-and-renewals/workflows/self-managed/troubleshoot_license_upload_issues) workflow to move the ticket forward.

### More Reseller Workflows

- [Associating purchases - ownership verification](/handbook/support/license-and-renewals/workflows/customersdot/associating_purchases#ownership-verification)
- [Pass to Sales - reseller exemption request](/handbook/support/license-and-renewals/workflows/self-managed/cloud-licensing#2-are-reseller-purchases-considered-the-same-as-sales-assisted-if-a-customer-purchased-after-2022-07-07-and-needs-a-legacy-license-should-we-send-them-to-their-account-manager-to-go-through-the-exemption-process-or-do-we-treat-them-the-same-as-web-direct-and-give-them-a-legacy-license-file-no-questions-asked)
- [Pass to Sales - reseller subscription change or question](/handbook/support/license-and-renewals/workflows/working_with_sales#a-reseller-or-reseller-customer-wants-to-change-their-subscription-or-ask-a-question)
- [Not-for-Resale (NFR) program and policy](/handbook/resellers/channel-working-with-GitLab/#not-for-resale-nfr-program-and-policy)
