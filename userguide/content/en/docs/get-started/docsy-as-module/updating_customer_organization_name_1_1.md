---

title: Updating customer organization name
category: General
description: This page is about steps to updating customer's organization name.
---



## General workflow

Updating company name would involve updating information on:

1. [CustomersDot](https://customers.gitlab.com/customers/sign_in)
1. SFDC
1. Zuora

Before processing the request, please ask the customer for **legal proof of organization name change** *and* **previous invoice**.

We can provide the following instruction to update the [CustomersDot](https://customers.gitlab.com/customers/sign_in) information:

1. Sign into [customers portal](https://customers.gitlab.com/customers/sign_in)
1. Navigate to `My Account` → `Account details`
1. Change the Company name in `Company details`

This will update future auto-generated invoices. To change the name in `Zuora`, use the ZenDesk macro `Support::L&R::Zuora Contact Change` and submit the ticket as **Open**.

To change the name in `SFDC`, find the account in Salesforce and chatter the Sales support team ([at]sales-support) as well as the account manager, letting them know about the change. Include the ticket link as reference.
