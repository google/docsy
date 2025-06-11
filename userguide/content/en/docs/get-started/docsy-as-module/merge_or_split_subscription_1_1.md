---

title: Merging or splitting license/subscription requests
category: General
description: This is a guide on how to handle requests to merge or split licenses or subscription(s).
---




## Overview

This is a guide on how to handle requests to merge or split subscription(s).

**Short answer: No, support do not merge or split subscription(s). We cannot even if we want to.**

## Merging subscriptions

Generally, we do not support mixed license or multiple subscriptions for a single GitLab instance or GitLab.com group. Only one license can be used on a GitLab instance at a time; similarly, only one subscription can be associated to a GitLab.com group namespace at a time. If customers have multiple subscriptions and they wish to use the subscription on a GitLab instance/GitLab.com group, the latest subscription needs to be submitted as add-on to the existing subscription.

It's not possible to merge the subscriptions if the opportunity in SFDC were both submitted as `New Business`.

![Screenshot of Salesforce, highlighting the Opportunity Details "type" field.](/images/support/opportunity_type.png)

If there are two opportunities for two separate subscriptions and the customer requires one license for both of the opportunities, the latest opportunity will need to be credited via a credit opportunity and a new opp will need to be submitted as an add-on to the already existing opportunity for the already existing subscription. For any further questions around the opportunities please reach out to the Sales Support team.

Example case: [ZD ticket: #162478](https://gitlab.zendesk.com/agent/tickets/162478) (internal)

**Exception**: When a customer has an existing subscription they purchased direct, and wants to buy additional seats via a reseller, a new subscription should be generated because of different terms. Similarly, if a customer has a subscription with reseller A, and wants to purchase additional seats via reseller B, a new subscription is required for the add-on purchase.

This is being actively discussed in [Route to Market Mid-Term Change Alignment](https://gitlab.com/gitlab-com/Finance-Division/finance/-/issues/3334). For now, we should generate a new license that will include seats from both existing and new subscription for customer.

Interesting to note: Reseller subscriptions and direct-purchased subscriptions should not be on the same customer account. Which means that in some cases you will be generating a license for the sum of 2 subscriptions across 2 customer accounts.

## Splitting subscription

This is quite similar but reverse to merging the subscriptions. If customer purchase multiples seats and wish to use those seats in a subscription to multiple GitLab instances or multiple GitLab.com groups, they would need two different subscriptions.

Example case: [ZD ticket: #126634](https://gitlab.zendesk.com/agent/tickets/126634) (internal)
More context: [Internal Request #450](https://gitlab.com/gitlab-com/support/internal-requests/-/issues/450#note_192403894)

## How to move the ticket forward

To move the ticket forward, please check whether the new subscription was purchased through a different resellers. This can be done by:

1. [Searching for the subscriptions in Zuora](https://drive.google.com/file/d/1c7ChL7iCp9nYByBttX_RvWTrOxkVcDAn/view?t=2m09s)
1. The reseller should be listed in the `Invoice Owner` field

If the `Invoice Owner` is different for both subscriptions, we can generate a new license that would include `Users in license` from both subscriptions.

If the `Invoice Owner` is the same for both subscriptions:

1. Search for the relevant Opportunity Owner in SFDC or Sales rep in Zuora
1. Let the customer know that we are handling the issue internally while copying the account owner (Opportunity Owner) on the ticket
1. Ping the Opportunity Owner in [#support_sales_escalation](https://gitlab.slack.com/archives/C011JT165J5) and let them know that the new subscription opps should be credited and a new opps should be submitted as an add-on to the existing one as mentioned in the [example case: ZD ticket #162478](https://gitlab.zendesk.com/agent/tickets/162478)
