---

title: Handling Requests for More Premium Trial compute minutes
description: "How to handle requests for more minutes when customer is running Trial Subscription"
category: License and subscription
---



##### Overview

**NOTE:** This workflow is DEPRECATED.

Use this temporary workflow when a user reports that they need more than the 400 minutes currently being allocated for Trial subscriptions. In most cases, 10000 minutes should be the target. This is only temporary until [issue #322043](https://gitlab.com/gitlab-org/gitlab/-/issues/322043) has been applied.

---

##### Workflow

1. Confirm the namespace that is under a Trial subscription account.
   Note: compute minutes should reflect 400 minutes.
1. Confirm the user requesting additional minutes is a member of that namespace.
1. Update the minutes to reflect 10000, instead of 400.
    1. You can update the minutes as a .com admin, or
    1. Use /chatops to [set additional minutes quota for a namespace](/handbook/support/workflows/chatops#setting-additional-minutes-quota-for-a-namespace).

For more details on adding more minutes to an account, see [Adding additional compute minutes](/handbook/support/license-and-renewals/workflows/saas/ci_minutes).
