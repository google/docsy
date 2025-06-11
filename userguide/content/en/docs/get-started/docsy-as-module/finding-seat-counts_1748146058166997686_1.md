---
title: Growth Resources
---

## Finding Customer Seat Counts

Seat expansion is at the heart of our revenue growth. This has a strong impact on IACV and both Net and Gross Retention. There are various ways to determine the seat counts for a subscription:

### GitLab.com

The best way to view Seat Counts for a GitLab.com customer is to access the Customers Portal admin section.

1. Go to [https://customers.gitlab.com/admins/sign_in](https://customers.gitlab.com/admins/sign_in)
1. Sign in with Okta
    1. If you don't have access, open an Access Request
1. Once logged in, go to the [Customers](https://customers.gitlab.com/admin/customer) option in the left-hand menu
1. In the `Filter` text field, enter in the company name or email address associated with the subscription
1. Once the results are loaded, select the "i" icon from the right-hand section
1. On the `Details` page that loads, go to `GitLab Groups`
1. Here is where you should see the Namespace and corresponding subscription with seat counts
    1. Seats in Subscription is what was paid for
    1. Seats Currently in Use is what is active

It's important to note that ultimately the Customer Portal admin will have the most accurate and up-to-date view of this information.

### Self-managed

#### License Usage App

The best way to understand seat utilization for self-managed customers is by using the [License Usage Salesforce App](/handbook/sales/field-operations/sales-systems/license-usage-app/)

#### Version App

An alternative to License Usage Salesfore App is the [Version App](https://version.gitlab.com). You will need developer access to this application to log in. Once logged in navigate to the Hosts tab. There you will be able to filter by license tier and see active user counts, historical max user counts, and other important information including last usage ping and version.

## Communicating Number of Seats Owed / Helping Customers Find Information - GitLab.com

Sometimes customers can get confused as to what they owe because they have both a personal subscription and a group subscription. To make it easy for them to find the correct group billing information, you can send them a link with a URL in this format:

`https://gitlab.com/groups/[group-path-name]/-/billings`

To find the `group-path-name`, go to the `GitLab Groups` page in the Customers Portal admin (see instructions above) and copy the value under the `Path` column.
