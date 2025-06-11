---
title: AI Workflow
category: AI
description: "Workflow for ticket related to our AI Features"
---

## Overview

This workflow covers all tickets related to AI features released to our customer base.

## Workflow

During this phase of the process, the scope of Support will be to gather all relevant feedback regarding bugs and feature enhancements.
After gathering the necessary information, such as errors, outcomes and expected outcomes, support should add this information to the feedback issue specific to the AI feature.

## AI Features table

This table links to the epic name or production documentation, along with the relevant feedback issue to use.

| AI Feature | Feedback issue |
| ------ | ------ |
| [AI for Developer Teams: Suggested Reviewers](https://docs.gitlab.com/user/project/merge_requests/reviews/#suggested-reviewers) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/375624)    |
| [AI for Developer Teams: Code suggestions](https://docs.gitlab.com/user/project/repository/code_suggestions/) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/405152)       |
| [AI for Developer Teams: Summarize my MR review](https://gitlab.com/groups/gitlab-org/-/epics/10347) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/408991) |
| [AI for Developer Teams: Summarize proposed MR Changes](https://gitlab.com/groups/gitlab-org/-/epics/10223) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/408726) |
| [AI for Security and Operations: Explain this vulnerability](https://gitlab.com/groups/gitlab-org/-/epics/10284) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/407295) |
|  [AI for Security and Operations: Explain this block of code in repository UI](https://gitlab.com/groups/gitlab-org/-/epics/10218) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/407285#demo) |
| [AI for Security and Operations: Generate tests in MR](https://gitlab.com/groups/gitlab-org/-/epics/10366) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/408995) |
| [AI for Everyone: Summarize Issue Comments](https://gitlab.com/groups/gitlab-org/-/epics/10344) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/407779) |
| [AI for Everyone: GitLab Chat](https://gitlab.com/groups/gitlab-org/-/epics/10220) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/408527)|
| [AI for Everyone: Fill in merge request descriptions with AI](https://gitlab.com/groups/gitlab-org/-/epics/10591) | [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/416537)|

## How to check if a customer has valid GitLab Duo Pro seats

Purchased duo pro seats are added as **add-ons** in a customer's main subscription that has either Premium or Ultimate seats.

For both Self-Managed and GitLab.com, impersonating the customer's account is the most straightforward method for checking if a subscription has Duo Pro seats:

1. Locate the customer's CustomersDot account by searching using the customer's email domain in https://customers.gitlab.com/admin/customer.
1. Impersonate the CustomersDot account that has a `Subscription` label and check the details for **Duo Pro seats**

   - NOTE: Always check the **start and end date** of the Duo Pro add-on seats

Other optional methods are below:

- For Self-Managed, follow the below steps until [Duo Pro seat count is displayed in Licenses page](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/9411) is implemented:
  1. Locate the customer's CustomersDot account by searching using the customer's email domain in https://customers.gitlab.com/admin/license.
  1. Click on the `i` icon to navigate to the license details page.
  1. Scroll down and copy the `License Key`.
  1. Navigate to the [Validate License page](https://customers.gitlab.com/admin/license/validate_license).
  1. Paste the license key in the `License File` box and click on `Validate`.
  1. Find the `code_suggestions_seat_count` value that is under the `restrictions` key. A non-zero value means that the customer should have Duo Pro seats available.
  1. Alternatively, you can request the customer to verify by [checking GitLab Duo Pro page](https://docs.gitlab.com/subscriptions/subscription-add-ons/#for-self-managed) in their instance.
- For GitLab.com, follow the below steps until [Duo Pro seat count is displayed in Orders page](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/9411)
and [Display if a user has Duo Pro seat assigned in Admin page](https://gitlab.com/gitlab-org/gitlab/-/issues/457675) are implemented:
  - If you have GitLab.com Admin access, verify the GitLab group has Duo Pro by [checking the Usage Quotas page](https://docs.gitlab.com/subscriptions/subscription-add-ons/#for-gitlabcom)

## How to check if a customer has a valid GitLab Duo Pro trial

When a customer follows [these steps to start a GitLab Duo Pro trial](https://docs.gitlab.com/subscriptions/subscription-add-ons/#start-gitlab-duo-pro-trial), they get a 60 day trial for a maximum of 50 seats by default.

### Self-Managed Duo Pro trials

1. Navigate to the [Self-Managed Duo Pro trials page in CustomersDot](https://customers.gitlab.com/admin/trial).
1. Search using the customer's email domain, company name or subscription.
1. Alternatively, you can request the customer to verify by [checking GitLab Duo Pro page](https://docs.gitlab.com/subscriptions/subscription-add-ons/#for-self-managed) in their instance.
    - **NOTE**: Always check the **start and end date** of the Duo Pro trial

### GitLab.com Duo Pro trials

All GitLab.com Duo Pro trials can be located using this query: https://customers.gitlab.com/admin/order?query=saas-gitlab-duo-pro-trial-plan-id

1. Navigate to the [Orders page is CustomersDot](https://customers.gitlab.com/admin/order).
1. Search using the customer's [Namespace ID](https://docs.gitlab.com/user/group/#get-the-group-id).
1. Locate an order that has plan `saas-gitlab-duo-pro-trial-plan-id`.
1. If you have GitLab.com Admin access, verify the GitLab group has Duo Pro by [checking the Usage Quotas page](https://docs.gitlab.com/subscriptions/subscription-add-ons/#for-gitlabcom).
   - **NOTE**: Always check the **start and end date** of the Duo Pro.

### Troubleshooting AI

While we have customer facing [troubleshooting documentation](https://docs.gitlab.com/user/project/repository/code_suggestions/troubleshooting/), you can also look for more information in Kibana `pubsub-mlops-inf-gprd-*` index. Use one of the following keywords to search:

- `json.jsonPayload.gitlab_host_name`, the value for GitLab.com is `gitlab.com`.
- `json.jsonPayload.url`, `https://codesuggestions.gitlab.com/` for GitLab Code Suggestion and `https://cloud.gitlab.com/v1/chat/agent` for GitLab Duo chat.

When troubleshooting make sure to get debug logs for [the relevant extension](https://gitlab.com/gitlab-org/editor-extensions).

Feel free to open issues for how AI team can collaborate with support team in the editor extensions Team issue tracker https://gitlab.com/gitlab-org/editor-extensions/meta/-/issues.
