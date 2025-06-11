---
title: Looking up customer account details
description: "How to look up customer account details within Zendesk and customers.gitlab.com"
category: Handling tickets
subcategory: Customer Info
---

## Looking up customer account details

While working on tickets, you may need to look up customer information. Common
use cases include associating tickets with the appropriate organization,
checking a customer's subscription plan and looking up the customer's technical
account manager.

In general, you should look for customer details in this order:

1. [GitLab User Lookup app in Zendesk](#gitlab-user-lookup-app-in-zendesk)
1. Within [customers.gitlab.com](#within-customersgitlabcom)
1. Within [licenses in CustomersDot](#within-licenses-in-customersgitlabcom)
   - See note on [legacy License App](#legacy-license-app)
1. Within [Salesforce](#within-salesforce) (if you have access)

For an overview and runthrough of manual searching of SFDC, customers.gitlab.com, and license.gitlab.com (legacy), watch Amanda Rueda's
[How to use Salesforce from a support perspective](https://drive.google.com/drive/u/0/search?q=Amanda%27s%20Salesforce%20Class%20parent:1JDdcj2ESdCc_ReG0-n7RyAIxbIFkcQ1K)
video.

## GitLab User Lookup app in Zendesk

From the Zendesk [GitLab User Lookup application](/handbook/support/readiness/operations/docs/zendesk/apps#gitlab-user-lookup) you have access to the requester details in SFDC and GitLab.com.

## Within customers.gitlab.com

1. Log in to [customers.gitlab.com](https://customers.gitlab.com/admin) admin area
   (sign in with Okta).

1. In the **Customers** section, search for a domain or full email address.

   ![Search box in customers.gitlab.com customers section](/handbook/support/workflows/assets/customers-gitlab-com-search.png)

1. In the search results, click on the `i` icon to view the customer's details.

   ![Search results in customers.gitlab.com customers section](/handbook/support/workflows/assets/customers-gitlab-com-search-results.png)

1. You can *impersonate* an account to find out if they have a current
   subscription through the customer's detail page or by clicking on the `home`
   icon in the search results.

**Note:** be extra careful when searching using the customer's domain: there can be generic domains
that you are not aware of, and there can be large customers with multiple organizations using the same
domain. Therefore, search by e-mail is more reliable.

## Within licenses in customers.gitlab.com

All self-managed licenses including trial ones should be available in [CustomerDot Licenses](https://customers.gitlab.com/admin/license).
Access is provisioned via Okta.

## When the license ID is provided

If a customer provides you with their license ID, you may need to check for it
in [CustomersDot](https://customers.gitlab.com/admin).

You can do so by appending the ID to the following URLs:

- <https://customers.gitlab.com/admin/license/>

  *e.g.* `https://customers.gitlab.com/admin/license/<LICENSE_ID>`

## When the full license file is provided

Sometimes a customer may include the full license file to prove their support
entitlement. There are two methods to decode a license. One method is to use a
script and the other is to use the Rails console on a self-managed instance.

### License Decoder

The easiest method is to use the [License Decoder](https://gitlab.com/gitlab-com/support/toolbox/license-decoder) ruby script.
It outputs nice clean information including links to subscription information
and a direct link to the CustomersDot License page.

Follow the [instructions](https://gitlab.com/gitlab-com/support/toolbox/license-decoder#gitlab-license-decoder) in the project
for installation and usage instructions.

### From the Rails console

You can determine the license ID (and thus organization) by
extracting the ID.

First, trim the carriage returns and/or new lines:

```text
tr -d '\r\n' < file_name.gitlab-license
```

Then, from the Rails console on your own self-managed instance:

```text
license = ::License.new(data: "<paste entire license key without the carriage returns>")
"https://customers.gitlab.com/admin/license/".concat(license.license_id.to_s)
```

This will return nice URL that will take you the relevant license in CustomersDot.

```text
=> "https://customers.gitlab.com/admin/license/<license_id>"
```

## Within Salesforce

If you have access, you have the ability to look up the ticket requester's organization directly in Salesforce.

### Finding the customer's organization

1. Search for the customer's domain (e.g. `customer.com`) or full email address
   (e.g. `flastname@customer.com`) in the search bar at the top of the
   Salesforce UI.

   ![Search bar, in repose](/images/handbook/support/zendesk_needs_org-sfdc-search.png)

1. Look for results in the **Accounts** section. You should also be able to see
   if they have a support level if they have one.

   ![Account Name and Support Level in Salesforce search results](/handbook/support/workflows/assets/salesforce-search-results-accounts.png)

1. Click the **Account Name** to view the customer's organization page.

**Note:** in some cases you will need to search by e-mail and by domain. For example,
if the e-mail has previously been associated with a trial account it will still be visible
in SFDC but this might not be the same account that is used by the organization.

### Finding the customer's GitLab subscription information

In the customer's organization page, look for the **GitLab Subscription Information**
section. The most relevant pieces of information to support in this section are:

- **Support Level**: Whether they are on starter or premium tier support
- **GitLab Plan (TEST)**: Which subscription plan they are on
- **Number of Licenses**: The number of license seats which the customer is paying for
- **CARR**: The total annual recurring revenue this customer brings

You can also confirm if the organization is a paying customer by look for the
`Type` field under the **Account Detail** section. It should say `Customer`.

### Finding the customer's account owner

In the customer's organization page, look for the **Account Detail** section.
There should be an `Account Owner` field. This is the person responsible for
the customer account.

Alternatively, look for the list of links just above the **Account Detail**
section. Note: You may have to wait awhile as the list only loads after the
rest of the page is loaded.

![List of links above account details](/handbook/support/workflows/assets/salesforce-account-detail-links.png)

Hover over the "Account Team" link to see a list of people who have handled the
customer account.

![List of account team members](/handbook/support/workflows/assets/salesforce-account-team-list.png)

### Finding the customer's renewal opportunity owner

In the customer's organization page, look for the **Opportunities** table. Look
for a row with a `Close Date` in the future and a stage that is not `Closed Won`
or `10-Duplicate`. This should generally be the first row.

![List of account opportunities](/handbook/support/workflows/assets/salesforce-account-team-list.png)

The person responsible for the customer's license renewal is listed under
`Owner Full Name`.

## Legacy license app

Historically, [license.gitlab.com](https://license.gitlab.com) was used for creating and managing licenses.  This portal was deprecated mid 2021, and made read-only on October 5, 2021.
All new and existing licenses are managed in [CustomersDot](https://customers.gitlab.com/admin/license), and this is only noted for posterity.
