---
title: "Using Gainsight at GitLab"
description: "The key aspects of using Gainsight at GitLab to drive success for your customer"
---

## What is Gainsight?

Gainsight is a tool for Customer Success Managers, Renewal Managers, Account Executives, and Solutions Architects to manage the ongoing customer lifecycle.

### Key Benefits of Gainsight

Gainsight will help across several different areas of the customer's lifecyle. Some highlights include:

- Efficiency: consolidated account views (Book of Business, account), product analytics, Zendesk integration, notes, collab projects, and to-dos
- Consistency: Establish customer lifecycle process, manage and track engagement
- Visibility: health scores, risk, adoption, and data visuals
- Automation: process, adoption, enablement for digital journey
- Metrics and Analytics: Stage Adoption, customer health, time-to-value, product usage data
- Grow Net Retention: Success plan-driven engagement, expand plays

## Getting Started

There are two ways to access Gainsight: [through Salesforce](#access-through-salesforce) (strongly recommended), and by [logging in directly](#logging-in-directly).

### Access through Salesforce

*Salesforce is the recommended way of accessing Gainsight, since you will have access to the full set of account information, including opportunities, subscription information, and activity.*

Log in to Salesforce, and click on the "Gainsight NXT" tab at the top of the screen. If you don't see "Gainsight NXT" as a choice, you can add it by clicking the "+" sign, choosing "Customize My Tabs" and choosing Gainsight NXT from the applications list.

To hide the Salesforce header to maximize Gainsight screen space, click the "double arrow" icon in the top right corner of the Gainsight header, next to your profile icon.

If you are logging in through Salesforce, you can also quickly open the Salesforce link for the Gainsight account you're on by clicking the three vertical dots at the top right of the Gainsight account page (below your user image) then clicking "View Account".

### Logging in Directly

**Note: you may log in directly via Okta but you will not have subscription data, opportunity, or Salesforce activity.**

To access Gainsight directly, go to [gitlab.gainsightcloud.com](https://gitlab.gainsightcloud.com/) and when prompted for your username and password, enter *only* your GitLab email address. As soon as it is entered, the screen should change to indicate that you are using single sign-on, and when you click "log in" it will redirect you to Okta.

**Not able to log in? Here is how you can get help:**

- If you need to request access to Gainsight, fill out an [Access Request](/handbook/it/end-user-services/onboarding-access-requests/access-requests/#individual-or-bulk-access-request) and have your manager add the manager approved label.
- For any Gainsight-related access questions, ping the Gainsight Admin team on the [#gainsight-users](https://gitlab.enterprise.slack.com/archives/C011ACG9MJB) Slack channel.

### Confirm your timezone

Your timezone is dependent on your timezone in Salesforce, so even if you change it in Gainsight, if it's incorrect in Salesforce it will be overwritten the next day. To update your timezone in Salesforce (which is automatically PST), click your name at the top right, click "My Settings", click "Personal" on the left sidebar, click "Language & Time Zone", choose your correct timezone, and save. You will see the correct timezone in Gainsight the following day. Salesforce's timezone will automatically be PST, so you'll want to update this to your timezone to make it easier for logging events (when logging an event, it will input the current time in your selected timezone).

### Configure your notifications

To adjust your individual notifications, click on your name in the upper right corner, select "My Settings", then "Notifications" at the top middle. The below pictures show the default, and you will have the following options to select based on your preferences. View Gainsight's [documentation](https://support.gainsight.com/gainsight_nxt/Notifications/User_Guides/Setup_User_Notifications) for more information.

![Gainsight Channel Subscriptions](/images/handbook/customer-success/gainsight-channel-subscriptions.png "Gainsight Channel Subscriptions")

![Gainsight Event Subscriptions](/images/handbook/customer-success/gainsight-event-subscriptions.png "Gainsight Event Subscriptions")

## Feedback about Gainsight

### Feature Requests

New feature requests can be submitted by creating an issue and selecting the [Gainsight Request template](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/issues/new) in the Customer Success Operations project. Make sure the `gainsight` label, and optionally the `gainsight::feature_request`, `gainsight::enhancement_request`,or `gainsight::bug` labels, are successfully applied when opening the issue. The status of all Gainsight-related issues can be viewed on the [Gainsight issue board](https://gitlab.com/groups/gitlab-com/-/boards/1609037?label_name[]=gainsight).

To request new email templates be added to Gainsight, open an issue in the [Customer Success Operations project](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/new) and apply the program request or new program template if relevant. If you have connected with one of the team members prior to opening the issue, please go ahead and @ mention them on the request. Otherwise, we will review all asks periodically and, if accepted, assign to one of the upcoming milestones depending on workload.

To view recent updates to Gainsight, view [the running changelog](https://docs.google.com/spreadsheets/d/1QknfSfX50JFOhkHZoz2VjovREWK2fJkYBxr5HEjkT9Q/edit#gid=0).

### Support tickets

To submit a support ticket about Gainsight, you have two options.

1. Email support@gainsight.com and cc the GitLab Gainsight Admin team. Optionally, you can cc the Gainsight CSM.
1. Go to the [Gainsight support website](https://support.gainsight.com/), choose Gainsight NXT, and fill out the required fields.

### Common errors & troubleshooting

#### Query API invalid response

If you receive the error message "Query API invalid response", try clearing your browser cache and cookies. We recommend also checking in a private browser (Incognito Mode, etc.) to verify it's a browser configuration issue.

#### Success plan objectives updated failed

If your receive the error message "SUCCESS_PLAN_OBJECTIVES_UPDATED_FAILED" when changing the status of a Success Plan or an Account Plan from Draft to Active, it could be because there is one or more CTAs with a due date earlier than one of its tasks' due date. To correct this, re-apply the due date on tasks which will update the CTA's due date, and then try to change the Success Plan to Active again.

#### Account says "TO BE DELETED NO LONGER IN SFDC"

This is because two SFDC accounts were merged into one. What happens is this:

1. Salesforce has 2 records of the same account
1. SAE/or someone asks SalesOps/Deal Desk to merge
1. The two Salesforce accounts are merged
1. Gainsight does not "merge" because they were already merged in Salesforce
1. Gainsight recognizes one was deleted and marks it with the "TO BE DELETED" title for CS Ops to review and/or delete it
1. The remaining (merged) one in Salesforce remains synced to Gainsight

#### Error "Timeline: Invalid authentication credentials. Authentication failed" (Chrome users only)

Usually, this type of error occurs if the Chrome extension version is out of date. Try [updating the Chrome extension](https://communities.gainsight.com/customer-success-cs-15/update-your-chrome-plugin-10392) to the latest version. It should automatically refresh and begin working, but try logging out and back in if it doesn't resolve right away.

If this doesn't solve the issue, reach out to [Gainsight support](#support-tickets) and let them know you've already tried updating the extension and logging out and back in.

### Role Specific Gainsight Usage

- You can find more information about how Sales uses Gainsight on the [Using Gainsight within Sales](/handbook/sales/gainsight/account-planning/) page.
- You can find more information about how Customer Success Managers use Gainsight on the [Using Gainsight for CSMs](/handbook/customer-success/csm/gainsight/) page.
