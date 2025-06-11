---
title: Troubleshooting and categorising license activation errors
description: "How to troubleshoot and categorise GitLab license activation errors"
category: GitLab Self-Managed licenses
---

Customers may report encountering the following error message when uploading a license to their GitLab Self-Managed instance:

> During the year before this license started, this GitLab installation had 286
> active users, exceeding this license's limit of 250 by 36 users. Please
> upload a license for at least 286 users or contact sales at [redacted]@gitlab.com.

This error is shown if **any** of the following 3 values are incorrect:

| Key Field | Definition & source of truth |
|------|-------|
| Users count |   **GitLab 13.6 and later** We can identify the minimum amount via the billable.users command: `sudo gitlab-rails runner 'p User.billable.count'` <br/><br/>**GitLab 13.5 and before** We identify the minimum amount via the active.users command: `sudo gitlab-rails runner 'p User.active.count'`  |
| Previous users count |   We can try to assume based on internal numbers such as CustomerDot or usage.  But this cannot be certain since multiple licenses may be generated for one period. Instead, the best identifier is the system itself. For this we request a screenshot of the user statistics panel from `Admin Area -> Overview -> Dashboard`. The Previous users count = `Users in License` in the widget on the top left. |
| True-up count |   The best identifier for this value is to take Max Users - Previous users count. We recommend using the historical.max command: `sudo gitlab-rails runner 'p ::HistoricalData.max_historical_user_count'` for the Max count. <br/><br/> **Important:** [As of GitLab 13.9](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/54221) the `max_historical_user_count` method requires two arguments, a range of dates specified by `from:` and `to:`: `sudo gitlab-rails runner 'p ::HistoricalData.max_historical_user_count(from: "2020-01-01", to: "2021-01-01")'`. |

**Note:** For Ultimate licenses, guest users are not counted in the licensed user count. Therefore, in GitLab 13.5 and before, the `User.active.count` will be a greater number than the `Active Users` count displayed in the Admin UI dashboard. In GitLab 13.6+ `User.billable.count` will accurately exclude guests from the count. This can be confusing in a situation where the customer is downgrading from Ultimate or if they have an Ultimate trial, because they need a license for `User.active.count` instead of what is displayed for `Active Users`.

You can use the Zendesk [`Subscriptions::Active Users`](https://gitlab.com/search?utf8=%E2%9C%93&group_id=2573624&project_id=17008590&scope=&search_code=true&snippets=false&repository_ref=master&nav_source=navbar&search=id%3A+360062275600) macro to ask the customer for this information.

## Examples

**EXAMPLE 1**

- Subscription for 10 users
- During the subscription term incurs a max of 15 users
- Before renewal, blocks 3 users
- At renewal, the license must be generated as: `Users count: 12` (or more), `Previous users count: 10`, `Trueup count: 5`

**EXAMPLE 2**

- Subscription for 20 users starts in December with only 12 active users in the system
- In March, 5 users are blocked leaving 7 active users (12 max users)
- In April, 5 new users are added making the active user count 12 (12 max users)
- In July, 10 more new users are added making the active user count 22 (22 max users)
- In August, 5 users are blocked making the active user count 17 (22 max users)
- At renewal, the license must be generated as: `Users count: 17` (or more), `Previous users count: 20`, `Trueup count: 2`

**EXAMPLE 3**

- Ultimate subscription for 10 users
- During the subscription term, has 12 active users, including 2 guest users
- At renewal, customer downgrades to Premium license
- License must be generated as: `Users count: 12` (or more), `Previous users count: 10`, `Trueup count: 0`

## Workflow for setting the correct Zendesk Form Fields to track license activation failures

As detailed in the issue [Create a process which provides the means of identifying the number of customers who are not able to activate their instance due to overage enforcement](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/4959) the Zendesk L&R Form fields have been modified to allow support engineers to categorize tickets where a customer has been unable to activate their license using either a license file or an activation code.

In such scenarios the L&R Support Engineers should follow the workflow below to categorize the ticket appropriately.

### 1. Field: L&R - Category

- Set to `Self-managed license related matters`

### 2. Field: L&R - SM Subcategory

- Set to `I am getting errors applying my license or activation code`

### 3. Field: Transactions Issue Type

- If the customer used a license file, then set to `License troubleshooting (SM only)`
- If the customer used an activation code, then set to `Cloud Licensing (SM only)`

### 4. Field: `L&R: License troubleshooting`

*This field is kept hidden until step 3 is complete.*

Select the most appropriate option to describe the problem the customer encountered:

- `Customer issue`
- `Multiple unique subscriptions`
- `Multi-year license conflict (formerly named "Multi-year license")`
- `New license activation bug`
- `Transition legacy to cloud`
