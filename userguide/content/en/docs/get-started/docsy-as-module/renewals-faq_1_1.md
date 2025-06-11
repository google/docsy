---

title: "Renewals FAQ"
description: "Customer Renewals - Frequently Asked Questions"
---

## Customer Renewals FAQ

Currently, many GitLab customers have questions regarding their upcoming subscription renewal.

Internally, GitLab employees often have similar questions regarding the upcoming renewal opportunities they manage.

Due to multiple purchase paths, deployment types, contract terms, & overage/ reconciliation processes, is it often unclear how to action a renewal that is upcoming.

This page aims to answer the most commonly asked questions regarding a customers renewal.

### Customer Focused Questions

Q: When is my GitLab subscription due for renewal?

A: Login to customers.gitlab.com to see the renewal/ expiry date.

![renewal.due](/handbook/sales/images/when.is.my.renewal.due.png)

Q: Where can I manage my GitLab subscription and upcoming renewal?

A: Once logged into to customer.gitlab.com, you will see various options regarding your upcoming renewal, including *Upgrade Plan* & *Add More Seats*.

![manage.renewal](/handbook/sales/images/where.can.i.manage.png)

Q: Will my GitLab subscription auto renew?

A: Once logged into to customer.gitlab.com, you will see one of the following under your subscription name;

```text
    Renews on XX/XX/XXXX
    Expires on XX/XX/XXX
```

*Renews* indicates Auto Renew is On, *Expire*s indicates Auto Renew is Off.  Should you wish to turn Auto Renew back on, you can select the *Resume Subscription* option.

![manage.renewal](/handbook/sales/images/am.i.on.auto.renew.png)

Q: When my GitLab subscription is due for renewal, am I able to add or remove licenses?

A: Yes!  Before you renewal is auto renewed, you can renew manually by selecting the *Renew* option, and from there you can adust the user quantity.

Be aware that if you don't renew manually, you will be auto renewed at the current billable user quantity.

More information on this can be found [here](https://docs.gitlab.com/ee/subscriptions/gitlab_com/#automatic-subscription-renewal).

Q: I see I was charged for a Quarterly Subscription Reconciliation. What is this for?

A: Quarterly reconciliation occurs when you exceed your license limit. You will be charged an overage based on the maximum number of seats you used during the quarter.

More information on this can be found [here](https://docs.gitlab.com/ee/subscriptions/quarterly_reconciliation.html).

If you want to contest these overages, you can open an [Support Ticket](https://support.gitlab.com/hc/en-us/requests/new?ticket_form_id=360000071293) and select the problem type *Quarterly Subscriptions Reconciliation (QSR) Related Problems*.

Q: In the GitLab Customers Portal, I see the option to cancel my subscription. What happens if I click cancel?

A: In customers.gitlab.com, if *Cancel subscription* is highlighted then this means auto-renew is turned on. Clicking *Cancel* turns off auto-renew. You will still have access to your paid features until the subscription expiration date.

![renewal.status](/handbook/sales/images/renewal.status.png)

Q: In the GitLab Customers Portal, I see the option to resume my subscription. What happens if I click resume?

A: In customers.gitlab.com,  if *Resume subscription* is highlighted then this means auto-renew is not enabled. Clicking *Resume* turns on auto-renew. When your subscription reaches its expiration date, it will be automatically renewed for another year and your credit card on file will be charged accordingly.

Q: My GitLab subscription is due for renewal, and I would like to renew. How do I do this?

A: Please see the below content on how to renew, based on your hosting model.

SaaS Subscription - [How to Renew](https://docs.gitlab.com/ee/subscriptions/gitlab_com/#renew-your-gitlab-saas-subscription)

Self Managed Subscription - [How to Renew](https://docs.gitlab.com/ee/subscriptions/self_managed/#renew-your-subscription)

Q: During my GitLab subscription term, am I able to remove unused licenses and receive a refund for these?

A: No, this is not possible at this time.

Q: I purchased a GitLab subscription through a sales person. How do I activate my purchase and apply my paid licenses to my namespace?

A: See this short [video](https://www.youtube.com/watch?v=qAq8pyFP-a0) to learn how to link your GitLab subscription to your namespace. Before taking the steps described in the video, be sure that your gitlab.com user is an owner of the namespace.

Q: If I add an Admin or Finance user to my group, will this take up a license even though they won't be using GitLab?

A: Yes, these users will count as a billable user, and will be charged for.

Q: I would like to give another user access to my subscription account in the GitLab Customers Portal. How do I do this?

A: It is possible you may be able to transfer ownership without GitLabs assistance. See this [workflow](/handbook/support/license-and-renewals/workflows/customersdot/associating_purchases/#self-service-option) for details. If the self-service options are unavailable to you, then please open a [Support Ticket](https://support.gitlab.com/hc/en-us/requests/new?ticket_form_id=360000071293). You will be required to provide ownership verification, after which Support will transfer the ownership.

Q: I am part way through my GitLab subscription term and I would like to buy extra licenses for some recent hires. Am I able to do this?

A:  Yes!  Please see the below content on how to add users, based on your hosting model.

SaaS Subscription - [How to Add User](https://docs.gitlab.com/ee/subscriptions/gitlab_com/#add-seats-to-your-subscription)

Self Managed Subscription - [How to Add User](https://docs.gitlab.com/ee/subscriptions/self_managed/#add-seats-to-a-subscription)

### GitLab Employee Focused Questions

Q: How can I check to see when my customers subscription is due for renewal?

A: You can find when a Customer is up for renewal by checking the *Next Renewal Date* field on the Account. If an Account has multiple Subscriptions you can navigate to the relevant *Renewal Opportunit*y and check the *Subscription Renewal Date.*

Q: How can I check to see if my customer has successfully linked their GitLab.com user account to their CDot user account?

A: First, navigate to https://customers.gitlab.com/admin/customer/.  From this page, you can use the *Zuora* and *Impersonate* tabs to validate that the information in these portals matches CustomerDot

Q: How can I check to see if my customer has successfully linked their GitLab subscription to the GitLab namespace?

A: You will need to ask the customer to navigate to;

*Settings* - *Billings* (or gitlab.com/groups/<lululemon>namespace>/-/billings) and check if the plan matches their invoice.

Q: When viewing my customers renewal opportunity, what is the difference between Close Date, Quote Start Date and Subscription Renewal Date?

A: For Open Opportunities the Close Date is the forecasted day we expect the deal to close. For Closed Opportunities the Close Date is the day the Opportunity was Closed. The Quote Start Date is the first day of the Subscription indicated by the Primary Quote on the Opportunity. Note that for Renewal Quotes the Quote Start Date will always be the same as the Subscription Renewal Date. The Subscription Renewal Date is the last day or expiry of the current active Subscription that is available to renew.

Q: How do I know if my customer is on Auto Renew?

A: Navigate to their active Subscription on their Account in Salesforce, and view the *Turn On AutoRenew* field. If it's set to Yes, then they are on auto renew.

Q: How do I know if my customer has turned off Auto Renew?

A: Navigate to their active Subscription on their Account in Salesforce, and view the *Turn On AutoRenew* field. If it's set to No, then they have cancelled/ turned off Auto Renew.

Q: I have heard it is possible that a customer on auto renew may not actually renew, due to unforseen consequences e.g the credit card on the account has expired.  How do I therefore know if my customer with actually auto renew?

A: Check the *Auto Renewal Status* on the Renewal Opportunity to confirm that the Subscription will auto-renew.  If it will not auto renew, you will see the reason why. e.g *CC Expired*

Q: My customer auto-renewed but now wants to make changes/cancel their subscription. How do I manage this?

A: We always strive to ensure our customers are aware that their subscription will auto-renew, and any changes should be made prior to renewal. Reach out to Deal Desk in chatter by @ mentioning @ sales-support for guidance on how to manage such customer requests.

Q: How do I determine how much revenue my customer has up for renewal?

A: On the Renewal Opportunity the *ARR Basis* is the revenue Available to Renew (ATR)

Q: I think some Renewal Opportunity data is incorrect, who can I reach out to for review?

A: Reach out to Deal Desk in chatter by @ mentioning @ sales-support.

Q: How do I know if my customer is signed up for QSRs?

A: Navigate to their active Subscription on their Account in Salesforce, and view the *Turn On Seat Reconciliation* field in SFDC. If it's set to Yes, then they have QSRs turned on.

Q: How do I check the status of a QSR? i.e Does my customer have an outstanding QSR?

A: You can search for the subscription in [CDot Admin Reconciliations](https://customers.gitlab.com/admin/reconciliation) section. It will show the status for all QSRs connected to that subscription.

Also, if the QSR opportunity is still open 15 days after it's creation, the QSR is considered outstanding.  In this scenario, you should reach out to the customer and manually transact the overage.

Q: When should I manually manage a renewal opportunity?

A: If a customer is not on auto-renewal (Turn on Auto Renew = No) or if we know the auto-renewal will fail (Auto Renewal Status ≠ On) we need to reach out to the customer to manage the renewal process directly. Large, strategic customer renewals should also be managed directly.

Q: When should I direct a customer to renew online, and how can I help them do that?

A: Advise them to log into the [Customers Portal](https://customers.gitlab.com/?_gl=1*2rhaas*_ga*MjAzMjU3NDY5NS4xNjY5NjU0NzM4*_ga_ENFH3X7M5Y*MTY3OTY3ODY4MS4xOTcuMS4xNjc5Njc4Nzk5LjAuMC4w) using their credentials. Once they have navigated to the *Manage Purchases* view, they should see an option to *Renew*. Once they have clicked on *Renew* and reviewed their order, they can proceed to checkout and select *Purchase*.

Q: How do I know if my customer has renewed via the online web store?

A: Once a customer follows the process outlined above, the renewal opportunity on the Account in Salesforce will be auto set to closed won.

Q: If my customer advised they want to purchase through the channel, what action should I take?

A: You can renew a Direct customer via the Channel within the existing Renewal Opportunity and following the Quoting process of [Channel/Alliance quotes](/handbook/sales/field-operations/channel-operations/#quoting-partner-deals).

Q: If my customer wants to move from Self-Managed to a SaaS instance or vice-versa, what steps do I need to take?

A: This will involve the customer swapping product offerings.  Therefore, if a customer wishes to change products at time of renewal, follow the standard [Renewal Quoting process](/handbook/sales/field-operations/sales-operations/deal-desk/#renew-subscription-quote). If a Customer wishes to switch products during the contract term follow the [Amendment Quoting process](/handbook/sales/field-operations/sales-operations/deal-desk/#b--upgrade-or-switch-products-during-the-subscription-term).

Q: My customer wants to consolidate multiple Subscriptions into one.  How do I action this?

A: Reach out to Deal Desk for guidance as early as possible. If all the relevant Subscriptions are co-termed (have the same end dates) and the consolidation is occurring at the time of Renewal then build the quote with all the consolidating products on the Renewal Opportunity that is associated to the namespace that will remain active. Once the Order Form is signed, [Submit the Opportunity for Booking](/handbook/sales/field-operations/order-processing/#submit-an-opportunity-for-booking). For the remaining Renewal Opportunities reach out to Deal Desk via chatter and request they be Closed Lost with Closed Lost Reason = Merged into another opportunity. In the instance where a customer is requesting to consolidate Subscriptions which requires one or more Subscriptions to be early-renewed then consolidate the Subscriptions via [Contract Reset](/handbook/sales/field-operations/sales-operations/deal-desk/#contract-reset).

Q: My customer has exceed over their licenses count for the first time.  What action should I take?

A: If the customer has exceed their license count (this info can be viewed under Draft *Utilization* on the Account), you can either sell them Add On licenses, or they can charged for licenses retroactively, and pro rated, via a QSR.

### Other helpful resources

[Auto Renewal FAQ](https://internal.gitlab.com/handbook/product/fulfillment/archive/auto-renewal-old/)

[How to subscribe to GitLab](https://docs.gitlab.com/ee/subscriptions/)

[Licensing FAQ](/handbook/support/license-and-renewals/)

[QSR Process](https://docs.gitlab.com/ee/subscriptions/quarterly_reconciliation.html)

[Cloud Licensing](https://gitlab.highspot.com/items/629a82af9092e7ac989947ca?lfrm=srp.0)
