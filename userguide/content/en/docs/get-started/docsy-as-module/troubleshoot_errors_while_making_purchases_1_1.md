---

title: Troubleshoot Errors While Making Purchases on CustomersDot
category: CustomersDot
description: Troubleshooting guide on errors on CustomersDot
---



### Overview

This guide is for troubleshooting errors on [CustomersDot](https://customers.gitlab.com/customers/sign_in).

### Error about an address or credit card

When purchasing a subscription via the CustomersDot if a user receives an error
about an address or credit card, check the address listed in the `My Account`
section of the CustomersDot. This is typically due to a bad address
(city/state/zip code). If the address is correct and the error persists, check
Sentry for a relevant error and file an issue in the
[CustomersDot tracker](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/) as necessary.

### Getting error message from Sentry

To find the error specifically related to a customer on sentry, try the following:

1. Get customer ID from [CustomersDot](https://customers.gitlab.com/customers/sign_in):
   - Log into <https://customers.gitlab.com/admin>
   - Go to `Customers` search page by clicking on `Customers` on the left panel
   - Search for customer using one of the following: email, domain, or First/Last name (in case customer registered with a different email)
   - Click on one of the info, pencil, or person icon in the result
   - Take the customer ID from the URL <https://customers.gitlab.com/admin/customer/customerID/pagepath>
1. Finding the error message for the customer in Sentry:
   - Go to <https://sentry.gitlab.net/gitlab/customersgitlabcom/issues/>
   - Use `user:customerID` (replace `customerID` with the actual customerID from CustomersDot)
   - Open sentry issue → Click on `EVENTS`
   - Use customer email to search for the relevant event

### Getting error messages from CustomersDot Kibana logs

You can access the CustomersDot production logs or staging logs in [Kibana](https://log.gprd.gitlab.net/) by filtering using `prdsub*` or `stgsub*` respectively.

To have an idea on how to use and search Kibana, review the [Support Workflow's Kibana](/handbook/support/workflows/kibana) page.

For purchase attempts made on CustomersDot, refer to the tips under [CustomersDot purchase errors in Kibana](/handbook/support/workflows/kibana#customersdot-purchase-errors).

### Getting error messages from GCP Logs Explorer

Official Google Documentation for Logs Explorer is found at <https://cloud.google.com/logging/docs/view/logs-explorer-interface>.  It's helpful to review these docs to gain an understanding of building search queries for more advanced searching.

Login to [GCP Logs Explorer dashboard](https://console.cloud.google.com/logs/query?project=gitlab-subscriptions-prod) (make sure you are viewing `gitlab-subscriptions-prod`).

1. Under Resource Type, select `VM Instance`
   - If needed, you can scope queries to specific log files by choosing one under `LOG NAME`
   - Take care to note that by default, the logs are limited to 1 hour.  You can widen the time frame by clicking the Duration shown to the left of the search box, similar to Kibana searching.
1. You can often find what you need simply by searching a customer ID or subscription name without needing to build a specific query.

#### Advanced searching tips

The logging query language allows you to search by very granular attributes built dynamically from the logs themselves.  For example, most of the important information you'll be looking for is scoped to the `jsonPayload` object of any given log entry. It may help to have an understanding of how the objects are represented in CustomersDot code, so you can predict the type of queries to build.  But most of the information you may want to find is fairly easy to locate even without building queries.

1. On the right-hand side of the search box is a toggle switch "Show Query".  Toggle this on.
1. The Query Builder will show searchable attributes as suggestions.  For example, if you type `jsonPayload`, a popup will appear showing suggestions for valid attributes that you can search by.
1. Any time you update your query terms, click `Run Query` on the right-hand side.
1. For example, building a query to find events for a specific customer:
   - Get the customer ID, and then in the Query field enter
   - `jsonPayload.customer_id="customerID"`
1. The same works for subscriptions, but these may be scoped to `order_params` attributes for errors:
   - `jsonPayload.order_params.subscription_name="A-S00000000"`
   - `jsonPayload.subscription_name="A-S00000000"` for non-errors.
1. Locating an error for a given namespace
   - `jsonPayload.order_params.gl_namespace_id="xxxxxxxx"`

In the Log Fields panel, you can also choose specific log files, as well as severity labels such as `Info`, `Error`, etc.  You can also include these in the query builder:

1. `severity=ERROR` will return only errors.
1. `severity=INFO` will return only non-errors.

### Troubleshooting Email Delivery From CustomerDot

Sometimes a customer reports that they did not receive an email from the portal, such as a password reset request or new account confirmation.  GitLab uses Mailgun as a service to send outgoing mail. We can login to Mailgun to view the message logs, and when appropriate, remove suppressions.

The general workflow that Support uses for this process is documented in the [Support handbook page on confirmation emails](/handbook/support/workflows/confirmation_emails#check-mailgun), and that page has a full description on navigating the Mailgun dashboard and searching through the logs.

The process here is much the same, but since we are investigating mail from CustomerDot, in Step 4 of the general workflow ensure that `customers.gitlab.com` is selected as the domain to search under.

To confirm whether the customer has access to customers.gitlab.com, navigate to the `Edit` page for the customer record (pen icon on the right side of the customer record) and look at the `Login activated` checkbox. If the checkbox is ticked, the customer has access; if the checkbox is not ticked, the customer will not have access and they will not receive password reset emails.

Note that reseller customers should make their purchases via their reseller or our Sales team.

### Example of previous tickets

1. Customer cannot purchase new subscription because of an expired subscription:
   - [ZenDesk 162279](https://gitlab.zendesk.com/agent/tickets/162279)
   - [Internal request issue 2566](https://gitlab.com/gitlab-com/support/internal-requests/-/issues/2566)
   - [Sentry Event log](https://sentry.gitlab.net/gitlab/customersgitlabcom/issues/1181887/events/31651984/)
1. Customer cannot purchase because the `Address`, `City`, and `Postal code` have invalid information:
   - [ZenDesk 167403](https://gitlab.zendesk.com/agent/tickets/167403)
   - [Sentry Event log](https://sentry.gitlab.net/gitlab/customersgitlabcom/issues/1211792/events/32521404/)
1. Customer cannot purchase compute minutes because `State` was not provided in CustomersDot:
   - [Zendesk 318385](https://gitlab.zendesk.com/agent/tickets/318385)
