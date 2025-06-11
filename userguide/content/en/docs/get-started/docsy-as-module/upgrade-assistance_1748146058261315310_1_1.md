---
title: Upgrade Assistance workflow
description: "Support team Workflow for providing Upgrade Assistance to customers"
category: Self-managed
subcategory: Upgrade Assistance
---

### Overview

As a part of our [Priority Support](https://about.gitlab.com/support/#priority-support),
GitLab Support offers [Upgrade Assistance](https://about.gitlab.com/support/scheduling-upgrade-assistance/).
That is, we'll review upgrade and rollback plans, providing feedback and
suggestions to the customer to help ensure a smooth upgrade. Customers may also
request a 30-minute call with a support engineer to answer any final questions
and run a final review of their overall plan.

In addition to the upgrade assistance, it is important for GitLab Support to ensure
the customer's plan for the upgrade is accurate and fully supported by GitLab in
advance of the production upgrade.

If the customer has not provided a plan, or it lacks the detail we need to support them in their upgrade, feel free to ask for a plan. We have [guidance to assist customers in planning their upgrade](https://docs.gitlab.com/update/plan_your_upgrade/).

#### Initiating The Process

1. The end user initiating the request will open a new Support Request using the Support for Self managed Instance form with the problem type set to "Upgrade Assistance Request" or for eligible users, the [US Government Upgrade Planning Assistance Request](https://federal-support.gitlab.com/hc/en-ushc/en-us/requests/new?ticket_form_id=360001434131) form in the respective Support Portal. This will generate a high priority ticket in the instance.
1. The triaging engineer should assign the ticket to themselves.
1. The ticket assignee should review if the organization has a CSM, if so then the CSM should be added as a CC or follower to the ticket.
1. The user provided information must include all of the [required information](https://about.gitlab.com/support/scheduling-upgrade-assistance/#what-information-do-i-need-to-schedule-upgrade-assistance).
    - If there is missing, incomplete, or erroneous information the ticket assignee should highlight the deficiencies and provide any insight that may be helpful to correcting them to the user.
    - The ticket assignee may opt to use the `Upgrade Request Missing Info` macro in Zendesk to request for missing information.
1. (Optional) When the required information has been collected, the assignee can reach out to any of the folks with an `Upgrade` or `Upgrade Assistance` focus on the [Skills by Subject](https://gitlab-support-readiness.gitlab.io/support-team/skills-by-subject.html) page to pair or offer insight asynchronously.
1. If the customer requests to have the optional 30-minute call for a final review, send a personal one time use Calendly link for a 30 minute meeting at least 2-3 days in advance of when the customer plans to upgrade their GitLab instance.
    - If the reviewing engineer needs to hand off the ticket, they **must** sync up with the engineer who will be performing the final review to ensure proper handoff.
1. Once the user has scheduled the upgrade, the ticket assignee should put the ticket in an `on-hold` state until the customer has confirmed that the upgrade has been successfully completed.

#### Can we recommend that a planned upgrade be postponed?

It is possible for this to occur, especially in situations where the upgrade
is poorly planned or likely to cause production downtime. We should encourage
the user to reschedule the window so we can allow for more time to test out
changes and ensure a smooth upgrade.
