---
title: Sales and Customer Success Escalations
description: "How to escalate from Support to GitLab Sales or Customer Success"
category: Handling tickets
---

## Purpose

There will be instances when Support will need to escalate a ticket to Sales/Customer Success, or bring it to their attention. This page list some of these common scenarios and workflows.

> Note: If you are from Sales/CS and looking to escalate a ticket to Support Management, please use the [`I want to escalate a ticket`](/handbook/support/internal-support/#i-want-to-escalate-a-ticket) workflow instead.

## Escalation Scenarios Mapping

### **Role: Account Owner (AO)**

An Account Owner is usually the customer's main point of contact for any renewal and expansion discussions.

Use the [finding the customer's account owner](/handbook/support/workflows/looking_up_customer_account_details#finding-the-customers-account-owner) workflow to locate the account owner. If there is no one listed, check to see if you can find the latest opportunity owner instead. If neither are available, reach out in the relevant channel without tagging anybody.

|Escalation Scenario|Channel|Relevancy|
|--|--|--|
|Add a customer to an organization |Slack: `#account-management`|Needs Org Workflow|
|[Pass a lead to Sales](/handbook/support/license-and-renewals/workflows/working_with_sales#specific-workflows-to-pass-to-sales)|Zendesk: cc @AM, Slack: `#sales` for new business, `#account-management` for renewals|Ticket Workflow: License and Renewals queue|
| [Professional Services engagement request](https://about.gitlab.com/services/)|Slack: `#account-management` @mention AO | Ticket Workflow: All queues|

### **Role: Customer Success Manager (CSM)**

A Customer Success Manager (formerly known as a Technical Account Manager or TAM) typically manages the customer's relationship with GitLab. A comprehensive list of services provided by them is listed [here](/handbook/customer-success/csm/services/#responsibilities-and-services).

Since CSMs are assigned based on [certain criteria](/handbook/customer-success/csm/services/#csm-alignment), you might not find a CSM listed for every customer. For those that do have a CSM assigned, follow the same process as above on SFDC, but look at the `Customer Success Manager` field instead.

|Escalation Scenario|Channel|Relevancy|
|--|--|--|
|Make CSM aware of Emergency and/or High Priority tickets|Zendesk: cc @CSM, Slack: @mention CSM|Ticket Workflow: All queues|
|Involve CSM if a customer requested an escalation on the ticket|Zendesk: cc @CSM, Slack: @mention CSM|Ticket Workflow: All queues|
|Involve CSM if a customer files a ticket requesting [upgrade assistance](/handbook/support/workflows/upgrade-assistance#the-process) but there is no corresponding internal issue|Zendesk: cc @CSM, Slack: @mention CSM|Ticket Workflow: Self Managed|
|Involve CSM if we identify a need for training a user from customer's end, or, if customer requests for it directly|Zendesk: cc @CSM, Slack: @mention CSM|Ticket Workflow: All queues|
|Make CSM aware of tickets which require managing customer relationship due to expectations mismatch|Zendesk: cc @CSM Slack: @mention CSM|Ticket Workflow: All queues|
|Add a customer to an organization |Slack: #account-management|Needs Org Workflow|

## Scale Customer Success Engineer (CSE) engagement

Some organizations do not have a dedicated CSM/CSE but could benefit from Customer Success engagement. In the Zendesk notes, you'll see `Customer Success Manager: CSM Scale`. In cases where it is appropriate, you can reach out to the Account Owner to discuss opening a [CSE Engagement Request](/handbook/customer-success/csm/segment/cse/cse-operating-rhythm/#cse-engagement-request-process).

Some examples on when this might be appropriate:

- Architectural best practices
- Discussing how other organizations like theirs use GitLab
- Migrations or the differences between GitLab.com and Self-Managed instances
- Addressing growth or blockers to feature adoption

## Resources

- [CSM Responsibilities and Services](/handbook/customer-success/csm/services/#csm-alignment)
- [Customer Success Escalations Process](/handbook/customer-success/csm/escalations/)
