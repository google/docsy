---
title: Associating purchases with additional accounts
category: CustomersDot
description: Associating subscription with other CustomersDot users and changing subscription owner.
---

---
Sometimes a subscription owner (`Sold To:` contact) may want to associate the billing account (and related subscriptions) with more CustomersDot users, or transfer the billing account / subscription ownership.

This process would also apply for requests to send a license to a different email other than the `Sold To:` contact.

Occasionally, Billing Team may forward requests / tickets to our team to vet and then assist with changing `Sold To:` details.  The processes below would apply for those tickets as well.

#### CustomersDot changes can update Zuora Sold To contact

**Important note:** Any time a CustomersDot user is edited via the Admin, the Zuora account contact associated with the customer is updated. In case there is no Zuora contact with the same email, the Zuora account `Sold To:` address is replaced.

If the workflow requires editing a CustomersDot user (Customer record) via the Admin, click `Save` on the user with the same email as the original `Sold To:` contact **LAST**, to ensure they remain the `Sold To:` on their Zuora account. Refer to the workflow [Update Zuora Sold To contact using CustomersDot](#update-zuora-sold-to-contact-using-customersdot).

Creating a new Billing Account Membership for a user will not update the Zuora `Sold To:` contact.

## Add subscription management contact

Provide subscription access to additional CustomersDot user by creating billing account membership.

1. Verify the requestor's identity as outlined under [ownership verification](#ownership-verification).
1. Ensure the requestor has a Customer record in [CustomersDot](https://customers.gitlab.com).
1. Locate the CustomersDot billing account for the provided Zuora account.
1. Navigate to the `Billing account memberships` section.
1. Select the `+ Add new` action.
1. Select the correct `CustomersDot` user and `CustomersDot billing account` for the new subscription management request. The CustomersDot user can be uniquely located by its `Email` and the billing_account by its `zuora_account_id`.
1. Click `Save`.
1. Ensure the `Login activated` checkbox for the CustomersDot user is **checked**. If it is not, then [confirm the CustomersDot account login status](#confirm-the-customersdot-account-login-status).

**Note:** If a CustomersDot user already has a billing account membership, it is not currently possible to create a second billing account membership for them. Confirm with the existing CustomersDot user if they want to stop managing the existing subscriptions before [removing the existing billing account membership](#remove-a-billing-account-membership).

## Change subscription management contact workflow

Use this workflow for requests to change subscription owner, transfer ownership, or regaining access to a subscription that was set up by another person not in the organization anymore.

### Self-service option

Consider using the [Support::L&R::Change Customers Portal Contact](https://gitlab.com/gitlab-com/support/support-ops/zendesk-global/macros/-/blob/master/macros/active/Support/Self-Managed/Change%20Customers%20Portal%20Contact.yaml) macro so the requestor can self-service. **Important**: Do not add the existing `Sold To:` contact as a CC. The requester would see the email address, which would be considered a leak of Personal Data.

If the requester is an existing subscription contact and has access to the Customer Portal account or email address of the previous owner, guide them to:

1. Trigger a [one time sign-in link](https://customers.gitlab.com/customers/sign_in?legacy=true) to the existing owner's email.
1. [Claim the account](https://docs.gitlab.com/ee/subscriptions/customers_portal.html#change-profile-owner-information) by changing over the profile owner details.
1. [Link their GitLab account](https://docs.gitlab.com/ee/subscriptions/customers_portal.html#link-a-gitlabcom-account) to the Customers Portal account or [change the linked account](https://docs.gitlab.com/ee/subscriptions/customers_portal.html#change-the-linked-account) for authentication.
1. Once the requestor has updated the account on the Customers Portal, verify that the `Sold To:` contact in the Zuora account matches the Customers Portal account. Follow the [Update Zuora Sold To contact using CustomersDot workflow](#update-zuora-sold-to-contact-using-customersdot) if they do not match.

#### Error "Email has already been taken" reported

If the requestor follow the [self-service option](#self-service-option) and get the error "Email has already been taken", this means the new account owner is an existing CustomersDot user. Assist them by following the [Support-assisted option for existing CustomersDot user](#process-for-existing-customersdot-user).

### Support-assisted option

This process should be a last resort for **all customers** (including reseller customers). Only after ruling out the [self-service option](#self-service-option) above will we consider making the requested ownership change.

First, verify the customer's identity as outlined under [ownership verification](#ownership-verification).

#### Process for existing CustomersDot user

**Warning**: A new `Customer` record will be created if updating a billing account contact to an email address for which a `Customer` record doesn't yet exist. So please be sure to follow the steps in the presented order to avoid this side-effect, or follow the [Process for non-existing CustomersDot user](#process-for-non-existing-customersdot-user), if the requestor is not an existing CustomersDot user.

If the requestor is an existing CustomersDot user when doing an email search:

1. Follow [Add subscription management contact workflow](#add-subscription-management-contact).
1. Follow [Remove a billing account membership workflow](#remove-a-billing-account-membership) to remove association to the subscription of the previous `Sold To:` contact.
1. Follow [Update Zuora Sold To contact using CustomersDot workflow](#update-zuora-sold-to-contact-using-customersdot).

#### Process for non-existing CustomersDot user

If the requestor is not an existing CustomersDot user when doing an email search:

1. Edit the `Name` and `Email` of the current `Sold To:` contact's CustomersDot customer account to the new contact, check the box `Skip email confirmation` and click `Save`.
1. Check if the CustomersDot account is linked to a GitLab.com account:
      - On the CustomersDot account, navigate to the `Show` tab and confirm there is a value under `Uid`. The `Uid` is the ID of a GitLab account which can be checked via the Users API `https://gitlab.com/api/v4/users/<Uid>`
      - [Unlink GitLab.com Account mechanizer function]({{< ref "mechanizer#unlink-gitlabcom-account" >}}).
1. Trigger a [one time sign-in link](https://customers.gitlab.com/customers/sign_in?legacy=true) to the new email. Request the customer to [Link their GitLab account](https://docs.gitlab.com/ee/subscriptions/customers_portal.html#link-a-gitlabcom-account) to the CustomersDot account.
1. Confirm that the `Sold To:` contact in the Billing account is also updated, otherwise follow [Update Zuora Sold To contact using CustomersDot workflow](#update-zuora-sold-to-contact-using-customersdot).

## Other notable workflows involving CustomersDot

### Ownership verification

**Note 1:**  For any of the options below, do not add the existing `Sold To:` contact as a CC. The requester would see that email address, which would be considered a leak of Personal Data.

**Note 2:** We do not accept vouches from GitLab Team Members (including Account Owners listed in SFDC) as proof of a customer's association to a subscription.

**Note 3:** If you need to escalate any ownership verification requests to the Legal and Compliance team please open a [Subscription-Ownership-Change-Escalation](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues/new?issuable_template=Subscription-Ownership-Change-Escalation) issue.

**Note 4:** This process is slightly more stringent than that of the steps for [proving entitlement to Manage Support Contacts](https://support.gitlab.com/hc/en-us/articles/11626528150172).  Notably, we cannot accept screenshots for proving entitlement to subscription management access.

We need **one** of the following in order to verify eligibility for the subscription ownership change:

1. Approval from the existing contact
   - If the billing account has different `Sold To:` and `Bill To:` contacts, we can only accept approval from the existing `Sold To:` contact.
   - The `Bill To:` contact must provide a recent GitLab invoice.
1. Prior subscription contract
1. Recent GitLab invoice (last 12 months)
   - This option is not available for customers who purchased through a reseller. If the license key is unactivated at the time of the request, see Option 5. below, if the license has already been activated, the reseller can either open a ticket with this request or the customer can CC the reseller and also confirm that they would like to authorize the reseller to participate in the ticket. The reseller can then provide the invoice as proof of identity.
1. Copy of last loaded license (Self-Managed only) in text format only.
   - Screenshots are not valid
   - To obtain the license code:
     - GitLab version 14.2 and newer: Use [license usage export](https://docs.gitlab.com/ee/subscriptions/self_managed/index.html#export-your-license-usage).
     - GitLab version 14.1, run the command `sudo gitlab-rails runner 'print License.current.data'` on the GitLab instance. N.B. this command can take a few minutes to complete.
     - GitLab versions older than 14.1, use `Download license` from the `Admin area > License` page.
   - License file can be decoded in customersDot from `Licenses` -> `Validate License` (`/admin/license/validate_license`)
   - **Copies of license activation code emails** are not permissible articles of proof.
      - Please use the Redaction Zendesk app to censor the activation code if such a cloud activation code email is provided.
1. For a SaaS customer you can verify that the ticket requestor is an owner in the namespace attached to the subscription by:
   1. Asking them to:
      1. Login to their gitlab.com namespace as a group owner.
      1. Open an API call to their namespace URL: "https://gitlab.com/api/v4/namespaces/<customer_namespace>/gitlab_subscription".
      1. Copy/paste the returned data to the support ticket.
   1. Using a gitlab.com admin account to verify the accuracy of the provided
      subscription data and then approving or denying the request accordingly.
1. Option for unactivated licenses purchased through a reseller only: A reseller can vouch for an account ownership change through a ticket request. The reseller can open a ticket, or alternatively, the customer can CC the reseller to authorize their request.
   1. [Confirm that the subscription was purchased through a reseller](/handbook/support/license-and-renewals/workflows/working_with_reseller_related_requests#identifying-whether-a-customer-purchased-through-reseller)
   1. Verify that the email address domain used by the ticket requester matches the `Sold To` email domain of the `Invoice Owner` account in Zuora as detailed in the related [legal compliance issue](https://gitlab.com/gitlab-com/legal-and-compliance/-/issues/1564#note_1451657920). In cases where a customer has made a purchase through a series of resellers, the reseller matching the email domain identified in Zuora as the `Invoice owner` of the subscription should be used for verification confirmation.

### Fixing typos

Support may receive an [Internal Request](/handbook/support/license-and-renewals/workflows/working_internal_requests/) to correct a typo in a customer's email address and resend the license or activation code to a valid address. Use the following workflow to validate such requests before making any changes:

1. (Cloud license only, proceed to step 2 for Offline/Legacy) In CustomersDot, find the subscription name on the [Cloud Activation](https://customers.gitlab.com/admin/cloud_activation) page. Ensure the activation code has not been used; if it has not been activated yet, there will be no "Self Managed Instance Activations" tab for this cloud activation.
1. [Check the Mailgun logs](/handbook/support/license-and-renewals/workflows/customersdot/troubleshoot_errors_while_making_purchases/#troubleshooting-email-delivery-from-customerdot) to verify that the license email was sent but failed to reach the intended customer. If the email with the typo does not exist, the Mailgun log entry will display a failed mail delivery attempt (commonly shown as a **550 error code**).
1. Log the error by taking a screenshot of the error message and attach it to the ticket.
1. Validate the correct email address with the Account Manager who submitted the request in writing before correcting the typo.
1. Update the Sold to contact email address on the Billing Account and the related Customers Portal account.
1. Resend the license or activation code to the corrected email address.
1. Advise the Account Manager to update the email for the Contact in SFDC for their records.

### Update Zuora Sold To contact using CustomersDot

1. Navigate to the `Billing account contacts` section of the `CustomersDot Admin` page.
1. From there you can search for the account to be updated in Zuora by searching for the existing email address for either the `Bill To:` or the `Sold To:` on record.
1. Once the account has been located it may be edited by selecting the small pencil icon located at the right side of the page.
1. On the edit page you will see a highlighted warning banner near the top of the page indicating whether you will be editing the `sold to contact`, the `bill to contact`, or the `sold to and bill to contact`.
1. Once you have confirmed the correct account in the `Billing account contacts` section of the `CustomerDot Admin` page, you may update the relevant fields.  Normally this is the `First name`, `Last name`, and `Email address`.  The physical address may be updated here as well, if desired.
1. Upon completion of the changes, click the `Save` button near the bottom of the page.
1. To confirm the changes propogated properly this can be done by verifying in Zuora that the `Sold To:` and/or the `Bill To:` contacts have been updated.

If the Zuora information is not updated properly, or the `Bill To:` and the `Sold To:` records have the same account and the customer needs them to be separate people, you may hand the ticket to the Billing team using the [Zuora contact change workflow]({{< ref "billing_contact_change_payments#zuora-contact-change" >}}) to update the relevant information.

### Remove a billing account membership

You can remove an existing billing account membership:

1. Navigate to the `Billing account memberships` section.
1. Locate the correct billing account membership by searching for the CustomersDot user's email.
1. Open the billing account membership and select `x Delete` action.
1. Confirm the correct billing account membership is selected.
1. Select `Yes, I'm sure`.
1. See the `Billing account membership successfully deleted`  success notification.
1. Refer to [Add subscription management contact](#add-subscription-management-contact) if you want to add a new billing account membership to the CustomersDot user.

**Note:** If the deleted billing account membership was the only one associated with the billing account, please ensure that this is the desired state.

### Confirm the CustomersDot account login status

If the `Login activated` checkbox for a CustomersDot account is **not checked**, then:

1. Click the `History` tab and search for `login_activated = false`. If you find an entry dated any time **after** the `create` entry, that indicates that we may have intentionally disabled login for this customer. Do not proceed with enabling login unless you are sure. For help, ask for guidance in the `#support_licensing_subscription channel`.
1. To enable the customer's login:
   1. Click the `Edit` tab
   1. Check the `Login activated` checkbox
   1. Click `Save`
   1. Locate the original `Sold To:` contact in CustomersDot and click `Save` on the `Edit` page to ensure this contact remains the `Sold To:`
