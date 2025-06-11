---
title: Handling multi-year subscriptions
description: "How to handle GitLab multi-year subscriptions"
category: GitLab Self-Managed licenses
---

From time to time, you will run into cases where customer has a multi-year subscription. This is only possible if a subscription is purchased through Sales, since there's no option to make a multi-year subscription from [CustomersDot](https://customers.gitlab.com).

### Problems with multi-year subscriptions

1. Multi-year subscriptions on a legacy license are automatically generated for the **first year only**. Multi-year subscriptions on [cloud licensing](https://about.gitlab.com/pricing/licensing-faq/cloud-licensing/) and offline cloud licensing are [generated for the full subscription term](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/4816). Read more at [Licensing FAQ](https://about.gitlab.com/pricing/licensing-faq/#i-purchased-a-multi-year-subscription-why-is-my-license-only-for-1-year).

---

## Workflows

### Confirm customer subscription

To check whether the customer has a multi-year subscription:

1. Navigate to Saleforce and locate the relevant opportunity which generally has a `Close date` in the recent past
1. Click on the opportunity → search for `quotes` → click on the most recent quote
1. Search for `Renewal Term`, which shows the subscription term for the quote in months

### Handling the request

After confirmation and before [generating a new license](/handbook/support/license-and-renewals/workflows/self-managed/creating_licenses/) with a proper `Start date` and `End date` for the customer, please ask the customer for their system information using the ZenDesk `Subscriptions::Active Users` macro.

1. If there are *not* any `Users over license`, proceed to generate the new license.
   - **Please note: licenses for multi-year subscriptions [are issued in 12 month blocks](https://about.gitlab.com/pricing/licensing-faq/#i-purchased-a-multi-year-subscription-why-is-my-license-only-for-1-year)**
   - Amend the dates to match the relevant time interval - for example, the second annual license for a multi year subscription would have the original start and expiry dates, with an additional year added to both.
   - For example, `Start date: 2021-05-01` and `End date: 2022-05-01` would become `2022-05-01` and `2023-05-01`, respectively.
   - Do not tick the trial checkbox, as this is not a trial!
   - Use the previous year license `Users count` as the new license `Previous Users Count`
1. If there *are* `Users over license`, confirm that they are accounted for in the quote. Otherwise, follow the [Working with sales workflow](/handbook/support/license-and-renewals/workflows/working_with_sales/). We can generate a new license once the `Users over license` has been paid for.
