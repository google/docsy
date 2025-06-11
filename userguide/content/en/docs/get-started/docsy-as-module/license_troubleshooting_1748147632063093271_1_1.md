---
title: Subscription and billing issues
category: Legacy pages
description: Refer to this page when a user has questions/issues related to transactions, licensing or billing for self-managed or GitLab.com.
---

## Overview

Refer to this page when a user has questions/issues related to transactions, licensing or billing for self-managed or GitLab.com. Note the information on this page applies to both Self-Managed and GitLab.com users/products unless specifically indicated as an exception.

## License Vs Subscription Explained

For self managed, a license is an artefact that customers need to upload to their instance to have access to the paid features in their subscription. This doesn't exist and is not needed for GitLab.com subscriptions.

For GitLab.com, there is no artefact to be uploaded but the subscription (seen in the CustomersDot) has to be linked to their namespace (on GitLab.com). If the portal and GitLab.com don't have the link, then, GitLab.com won't know that a subscription exists.

Also, subscription is an umbrella term for the base product purchased: for instance, if `subscription` is a fruit, then `Premium` or `Ultimate`(self-managed / GitLab.com) would be types of fruits that can be purchased.

## Transactions

Transactions at GitLab are defined as anything related to purchasing; issues or questions. For example: credit card problems, bugs, trying to make a purchase, and running into confusion/problems, etc.

1. **User reports an inability to upgrade from one paid plan to another.**

    - GitLab.com users can upgrade their paid plan to a higher tier in the [CustomersDot](https://customers.gitlab.com/customers/sign_in) by selecting the `Upgrade` button beneath the subscription widget.
    - Self-managed GitLab users need to be put in contact with a sales rep in order to upgrade their plan to a higher tier. Utilize the [`General::Upgrade Plan Request`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360089766413) macro in Zendesk. This will request necessary information from the user and reassign the ticket to the License, Renewals and Upgrades queue.

1. **User doesn't know the steps to purchase a GitLab.com subscription.**

   - Create an account in [GitLab.com](https://gitlab.com/users/sign_in)
   - [Create a group](https://docs.gitlab.com/user/group/#create-a-new-group) if desired in GitLab.com and [add group members](https://docs.gitlab.com/user/group/#add-users-to-a-group)
   - Create an account in the [CustomersDot](https://customers.gitlab.com/customers/sign_up)
   - Associate GitLab.com account with CustomersDot account. First log into GitLab.com, then in another tab in the same browser open the CustomersDot and navigate to `My Account` and select `Change Linked Account`
   - Purchase desired subscription from <https://about.gitlab.com/pricing/#compare-options>, selecting the desired group during the purchase process.

1. **User doesn't see their group during purchase process.** If the customer can't see their Group when purchasing a subscription, one of the below options are likely happening:
   - They need to create a Group on GitLab.com first
   - They need to associate their GitLab.com account with their CustomersDot account

1. **User wants to know if they should add more users midterm or during the renewal process.** - Using the "Add more seats" button (for self-managed) in the CustomersDot at any time during their subscription will charge a pro-rated amount for the additional users. If they wait to purchase the additional users at the renewal via the [true-up users](https://about.gitlab.com/pricing/licensing-faq/#what-does-users-over-license-mean) process, the users will be charged for 12 months of use.

1. **User reports they cannot log into the [CustomersDot](https://customers.gitlab.com/customers/sign_in).** - The user is likely logging into the wrong system (usually GitLab.com). Provide the user with the proper url as demonstrated in this example ticket[#144710](https://gitlab.zendesk.com/agent/tickets/144710).

## Licensing

Licensing requests refers to problems or questions related to license keys for the Self-Managed product.

1. **User wants to know when they will receive the license key or who the license will be sent to.** The license key will be emailed, [to the email address associated with the subscription in the CustomersDot](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/1044#note_318221832), once subscription payment is approved internally by the billing team.  If there is an unusually long delay, assign the ticket to the "License, Renewals and Upgrades" queue or [open an issue](https://gitlab.com/gitlab-com/support/internal-requests/issues/new?issuable_template=license%20issue) using the "license issue" template.

## Access to CustomersDot Staging

If you want access to [CustomersDot staging](https://customers.staging.gitlab.com/customers/sign_in) as a user (and not an admin) you can browse to the link and register a new account. You need to use your @gitlab.com email address in order to get the verification. As an example, you can use <yourname+test@gitlab.com> so that you receive emails to your usual <yourname@gitlab.com> email address.

Once you create a user account, you can use the [stripe test cards](https://docs.stripe.com/testing#cards) for testing.

Note: access to CustomersDot staging as an admin will require an Access Request.
