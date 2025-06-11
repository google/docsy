---
title: "Accounting and Reporting"
---

This page contains GitLab's accounting and reporting policies, which can be made public. Please find our internal processes in the [Accounting and Reporting](https://internal.gitlab.com/handbook/finance/accounting/) internal handbook section.

## Quote to cash

### Invoicing to customers

**Calculated Billings**

Calculated billings is defined as revenue plus the sequential change in total deferred revenue as presented on the balance sheet.

We do not believe that calculated billings provides a meaningful indicator of financial performance as billings can be impacted by timing volatility of renewals, co-terming upgrades and multi year prepayment of subscriptions.

For order approval and invoicing process please view the [Billing Ops page.](finance-ops/billing-ops/)

**Invoicing: One Time Events**

1. Send the below information via email to ar@gitlab.com
    - Company name
    - Company AP email
    - Address
    - Billing contact name
    - Billing contact email
    - Charge amount
    - Event name and subject

**Amendments to Subscriptions** <a name="Amendments"></a>

To amend a customer's account, choose one of the options below from the subscription page in Zuora.

1. Terms and Conditions - used to change the end date of a product
1. New Product - choose when adding a product
1. Update a product - choose when making a change to a current product
1. Remove a product - used when removing a product
1. Renewal

**Zuora Subscription Data Management**
{#zuora-sub-data-management}

**Basic Assumptions**

- Subscriptions should only be cancelled with 45 days of the start. Exceptions can be made (see [Support Workflows](/handbook/support/workflows))
- Subscriptions can be linked across multiple Zuora and SalesForce (SFDC) Accounts, but not SFDC Ultimate Parent Accounts.
- All Zuora Accounts must be linked to a valid SFDC Account.
- MRR can change historically due to customer behavior (renewals, cancellations, etc.)

**New Accounts vs New Subscriptions**

There are instances where a new account in Zuora is required rather than just a new subscription in an existing account. This is determined by the sold-to contact person.

Within the customer account portal, customers can only see a single Zuora account at a time. If a customer wants to add a subscription and the contact information is the same, then the subscription can be added to the existing account.

If a customer wants an additional subscription for a different sold to contact, then a new Zuora account will be created so that every sold to contact can log into the portal and manage their subscriptions.

**Linking Renewal Subscriptions**

When a customer renews their subscription, a new subscription is typically created. This can create challenges for calculating metrics like dollar retention for a subscription because once subscription has ended and another has started. To address this, a linkage is made between the original subscription and its renewal(s).

The field `Renewal subscription` is used to create the mapping. These are the following constraints on this field:

- This field defines a unidirectional relationship that points to a separate subscription name.
- A renewal subscription can start on the same or future day as the original subscription start date to which it is linked to, but never in the past.
- Any number of subscriptions can point to the same renewal subscription as long as the time constraint is met.
- A subscription may have any number of renewal subscriptions that it points to as long as the time constraint is met. This is a one-to-many relationship. Each renewal subscription to which the original subscription is linked is input in the field and are separated by two pipes.
  - For example, subscription [A-S00009093](https://www.zuora.com/apps/Subscription.do?method=view&id=2c92a0ff635c92e601635fdb126b3967) is linked to `A-S00009096 || A-S00009095`
- Renewal subscriptions can point to subscriptions under separate Zuora Accounts
- Renewal subscriptions can start 12 months or less after the original subscription. Practically, this is because a linkage of greater than 12 months has no effect on any relevant metrics (Retention or Yearly counts).

The process to make the linkage is as follows:

1. Cancel the old subscription in Zuora.
1. Copy and paste the new subscription in "Renewal Subscription" field with no trailing spaces.

### Zuora subscription status 'active'

The active subscription status in Zuora needs to be reviewed in connection to the end date.
If the end date is in the future it means that the subscription is still within the term and the customer is able to use the product.
An 'active' subscription with an end date in the past means that the subscription was not renewed and the customer doesn't have access to the product since the end date.
We currently don't actively cancel these subscriptions as this is a manual process and the cancellation or lack of it does not have any impact on other processes.
Additionally, where subscriptions remain in an active status they can be renewed by the customers on the CustomersDot

### Invoice cancellations and refunds

For step by step processes please view [Billing Ops page.](finance-ops/billing-ops/)

**How to process a partial refund in Stripe**

1. Log in to Stripe.
1. Type in the cardholder's name in the search field at the top of the screen.
1. Click on the original charge that will be refunded.
1. Click on the refund button.
1. Enter in the amount to refund.
1. Enter in the reason code.
1. In the description field, enter the reason for the refund and include the invoice that was created in Zuora for the refunded amount.
1. Click on refund.
1. Go back to Zuora.
1. Put the customer account in silent mode under "Communication Profile."
1. Post the invoice draft.
1. Transfer to credit balance.
   - Accounting Code: Stripe - Inc
1. Put the customer account back into Default/B2B under "Communication Profile."
1. Verify that the balance due is $0.00 on the refund invoice that was created.
1. Manually e-mail the customer, do not use Zuora to create the email as you cannot update the contents. Include a screenshot of the partial refund from Stripe and attach a copy of the refund invoice.

### Accounting for income from sale of merchandise

**Posting Swag Shop transactions in NetSuite**

Transactions from the Swag Shop are remitted to the Comerica checking account daily and should be booked in NetSuite at the end of each month.

1. In Shopify, download the transaction report in CSV format (found under Orders, then Export).

- This report contains swag shop revenue and tax data to be recorded in NetSuite.

1. In portal used for swag download the orders report which should include cost for swag sold.
1. Record the revenue, tax, cost and cash received.  At times cost maybe estimated using a historical average.
1. Record the tax collected in the Ava Tax Portal.
1. Create a journal entry in NetSuite under the GitLab Inc subsidiary, using the last day of the month as the entry date.

### Accounts receivable

**Accounting for customer collections**

**Cash Receipt**
<a name="cash-receipt"></a>

**Credit card customer**

Follow this procedure if the customer paid by credit card.
You may recall from the invoicing process that there was still a balance due when saving the invoice.  The following steps will record the payment and remove the balance due.

1. Login to Stripe dashboard and click on Payments under Transactions (left hand side). You will see a listing of the latest Stripe transactions listed by amount, Recurly transaction, name, date, and time. There is also an option to filter the report by clicking on XXX at the top left. Click on XXX to export to excel. This will give you a workbook area and also a breakdown of the fees which we will work on later.
1. In NetSuite, click on the "Transactions" tab on the left.
    - Click on the orange "OPEN INVOICES " tab. This will bring up all open invoices listed by date, invoice #, customer, etc.
1. Match invoice #s  between the Stripe dashboard and NetSuite. If you click on a transaction in the Stripe dashboard, it will take you to a screen that shows more detail, including the invoice # being paid. You can work your way from the bottom up.
1. In NetSuite, click "Receive Payment" on the matched payment and invoice.
1. Receiving the payment
    - Enter the payment date, which is the payment date from Stripe dashboard.
    - Payment method = Credit Card.
    - Reference no. = "Recurly Transaction ID:" found under Metadata in Stripe dashboard.
    - Deposit to = Stripe.
    - NetSuite will auto-fill the payment amount with the entire balance due. No need to change this unless the payment amount from Stripe is different.
    - Click on "Save and Close".
    - Repeat the above for all the remaining invoices that were paid by credit card.

1. Post a journal entry to record Stripe Fees.
    - In NetSuite, click on the "+" sign. Under "Other", select "Journal Entry".
    - It is okay to leave the journal date as long as it is within the month the fees were incurred. If not, change it to the last day of the month.
    - NetSuite will auto fill the journal number. Do not change.
    - Account #1 Entry
      - Fill the "Account #1" entry with "Credit Card Transaction fees".
      - Fill the "Debits" entry with the value from the Stripe report that was exported. The value will be the sum of "Column I" in the Stripe report, which is the fee amount. Be sure to only sum the rows which you just posted payments for.
      - Leave the "Credits" entry empty.
      - Fill the "Description" entry with "To record credit card transaction fees for period (enter the date range for the transactions posted)".
      - Leave the "Name" entry empty.
      - Fill the "Class" entry with "Sales".
    - Account #2 Entry
      - Fill the "Account #2" entry with "Stripe".
      - Leave the "Debits" entry empty.
      - The "Credits" entry will autofill. This should be the same amount as the "Debits" entry for Account #1.
      - The "Description" entry will autofill. This should be the same as the "Description" entry for Account #1.
      - Leave the "Name" entry blank.
      - Leave the "Class" entry blank.
      - Click "Save".

This transaction transfers the payment obligation from the customer to Stripe.  The payment obligation from Stripe is removed when Stripe transfers  the funds to GitLab's bank account.

**Posting a payment from Stripe when a transfer is received from Stripe**

Post a journal entry:

1. Fill the "Journal Date" with the date that payment was received in the bank.
1. Fill the "Credit Account" with Stripe.
1. Fill the "Debit Account" with "Comerica Checking - GitLab Inc."
1. Leave "Name" blank.
1. Leave "Class" blank.
1. Fill the "Description" with "To record Stripe transfer (date of transfer)".
1. Click "Save".

**Posting a payment from a "bank customer"**

In Netsuite:

1. Click on the "+" sign.
1. Click on "Receive Payment" under Customers.
1. Fill the "Payment Date" with the date payment was received.
1. Fill the "Payment Method" choose from the dropdown menu.
1. Fill the "Reference No." with the check # or bank reference # from incoming wire.
1. Fill the "Deposit to" with "Comerica Checking".
1. Fill the "Amount Received" with the amount received from the incoming wire.

For step by step cash collections process please view [Billing Ops page.](finance-ops/billing-ops/)

**Account receivable provisions, bad debts and other period close adjustments**

### Accounts Receivable Performance Indicators

**Time for Invoices to be generated when a deal is closed won in Salesforce < 24 hours**

The time from when a deal is closed won in Salesforce to when the invoice is generated. Professional services are excluded from this performance indicator. This is tracked over a calendar month. The target is < 24 hours.

### Accounts Receivable Process for Non-Payment of Invoices

1. Billing & Revenue team review AR Aging as on a monthly basis. Fifty (50) percent of the balances that are Ninety (90) days or more after the due date and One Hundred (100) percent of the balances that are One Hundred and Twenty (120) days or more after the due date are reserved as allowance for doubtful debt. Bad debt expense is recorded based on revenue recognised, future revenue recognition is stopped and deferred revenue is reversed all at the Netsuite level.
1. Future amortisation of commissions expenses related to reserved invoices should also be stopped to ensure alignment with pattern of revenue recognition.
1. Allowance for doubtful debt will be shared with Sales Operations on a monthly basis to ensure they have visibility of what may be written off in the future.
1. On a quarterly basis, Senior Billing Manager and Revenue Director will determine the aged invoices that are uncollectible. They will create an issue ten (10) days before the end of the quarter to seek approval according to the [signature auhorization matrix](../authorization-matrix/) to write off invoices and to also notify the Sr. Director of Sales Operations. Sales Operations will then create decommission opportunities in SFDC for approved write offs before the end of the quarter and these will be synced to Zuora to reverse original invoicing and revenue. Sales Operations will claw back commissions accordingly.
1. Revenue team will review write-offs processed in Zuora to ensure correct revenue reversal and will book MJEs in Netsuite to reclass impact to Bad Debt Reserve.
1. Customers that have had their invoices written off, consider no discounts or credit given for future deals.
1. Where payment is received for an invoice after it has been written off, the write off will be reversed and the related commission will be reinstated.

## Procure to Pay

Procure to pay is the process of requisitioning, purchasing, receiving, paying for and accounting for goods and services. It includes the following sub processes of both the [Procurement](../procurement/) and [Accounts Payable](../accounts-payable/) departments:

### Vendor Master Management

- If the vendor is not already set up in NetSuite it is considered a new vendor.
- According to the new vendor's Legal Entity, they will be onboarded into Coupa.

#### New Vendor Onboarding - Coupa

Coupa is a procure-to-pay system that streamlines the purchase request process, initiate workflow with approvals, and enable Purchase Orders. We will be rolling out in a phased approach, with the US and Netherlands entities (GitLab Inc, Federal, IT BV and BV) in Phase I (2021-06-01). The remaining entities will be part of Phase II (2021-12-13).

> You can learn more about Coupa on our [FAQ Page](../procurement/coupa-faq/)

**How vendors are added into Coupa:**

1. Any Coupa user can request a new supplier using the New Supplier Request form.
   - Check [How to Request a New Supplier in Coupa](/handbook/business-technology/enterprise-applications/guides/coupa-guide/#how-to-request-a-new-supplier) for a detailed guide.
1. Once the New Supplier Request is approved, an External Supplier Form will be automatically sent to the Supplier to gather additional information.
   - Supplier must complete the form and submit it back.
1. After supplier submission, the external form will be routed to Accounts Payable Approval Group for review and approval.
1. After approval, the Supplier details will be integrated to NetSuite. Once the supplier is successfully created in NetSuite, it will flow back to Coupa to complete the New Supplier creation. By then, the Supplier should be available when creating Purchase Requests and Invoices.

{{% alert title="Note" color="primary" %}}
If you are a GitLab recurring vendor and did not receive an onboarding email from Coupa, please reach out to *ap@gitlab.com*.
{{% /alert %}}

### Invoice Accounting

**Entering a Bill (invoice) in NetSuite**

Please note the below steps reference how to manually enter bills into NetSuite.  Effective 2019-11-01 all AP invoices were processed through Tipalti. Effective 2021-06-01 (Coupa Phase I) and 2021-12-13 (Coupa Phase II), AP invoices will be processed in Coupa. These systems will automatically record the transaction into NetSuite after the invoice has been approved by the corresponding business partner in the respective system.

1. On the NetSuite home page, click the "+" icon near the global search bar at the top of the screen and select "Bill."
1. Select the appropriate vendor record. If adding a new vendor, follow the bullets below before proceeding, otherwise skip to step 3.
    - Enter the company name, email address, applicable subsidiary, physical address, payment terms, primary currency, and Tax ID. (Note that the address field is located under the "Address" tab, while the Tax ID, primary currency, and payment terms fields are located under the "Financial" tab)
    - Enter the banking information in the "Comments" field then click "Save."
    - Go to the "+" icon at the top of the vendor record and select "Bill" from the dropdown box.
1. Enter Bill date. The due date should auto-fill based on payment terms entered during vendor setup. If not, select the correct due date and update the vendor record after the bill has been entered and saved.
1. Enter Bill number.
1. Go to the "Expense and Items" tab below to enter the expense details.
1. Select appropriate GL-account under the "Account" dropdown box. (Be sure to check whether the invoice represents a prepaid expense, fixed asset, etc.)
1. Enter Bill amount.
1. Select tax code, if applicable.
1. Enter department. (This must be entered if the account you selected in step 6 is an expense account)
1. Add attachments: Go to the "Communication" tab and find the "Files" subtab.
1. Click "New File." A new window will appear, allowing you to select the file you wish to attach.
1. In the new window, select the "Attachments Received" folder in the dropdown box, then click "Choose File" to attach both a copy of the vendor bill and email approval. (The supporting email approval must be attached along with a copy of the invoice)
1. Click "Save."
1. In Google Drive, file invoice in the "Unpaid" folder.

#### Invoicing in Coupa

Coupa is a Procurement and Invoicing Tool. Similarly to purchase requests for goods/services that must be initiated in Coupa, invoices are also created and approved in Coupa.

{{% alert color="warning" %}}
For all issues created before Coupa Go-Live (Phase I; 2021-06-01 and Phase II; 2021-12-13), the business will not be setting up Purchase Orders for those and the Accounts Payable team will manually enter the related invoices as Non PO-backed.
{{% /alert %}}

Invoices in Coupa can be created via 4 different channels:

- **Coupa Supplier Portal (CSP)**
  - Free, Web-based portal specifically for suppliers.
  - Suppliers receive POs within CSP Coupa inbox and perform PO Flips to Invoices and is able to see a complete history of all their POs/invoices.
  - Once CSP invoices are submitted by the supplier, Coupa triggers the approval workflows.
- **Supplier Actionable Notification (SAN)**
  - Suppliers act directly (flip PO to invoice) from Coupa PO SAN email.
  - No need to register for/sign into Coupa/CSP, free service available any suppliers (with email).
- **cXML**
  - For "high-touch" suppliers (e.g. Amazon, CDW) with cXML invoicing capability to receive POs and transmit invoices directly.
  - Works well in conjunction with punchouts.
- **Manual Entry in Coupa UI**
  - "Flip PO" option copies data from Coupa PO to pre-populate invoice fields for faster entry.
  - Non PO backed invoice manual entry.

#### Coupa Integration - troubleshooting for Invoices

A NetSuite error log identifying invoice integration issues will be emailed to the Accounts Payable Team every Tuesday and Friday. The email is sent from **Finance Systems Admins** and the Subject is **Coupa2NS Invoices - Integration Log**. Download the attached file and filter by Type = **Error** and **Audit**. Review the **Details** field to find the invoice number/document number that needs to be reviewed/corrected. For information regarding common errors and how to correct them, please review this [file](https://docs.google.com/spreadsheets/d/1KL6ft-kNkeKhvf-iORfar_3vzK6mySHB/edit#gid=1779396759); under the column labeled **Script** search for **Coupa Invoice Integration**. If any troubleshooting assistance is needed, please ask in the **#coupa_help** Slack channel.

There is also a View in Coupa that will list invoices not exported to NetSuite. Under Invoices, select View = **Not Exported**
![coupa-image-1](/images/finance/accounting/finance-ops/coupainvoiceview.png)

However, there will be no details regarding the integration issue. You will need to review the NetSuite error log (referenced above) for the details.

<br>

{{% alert color="warning" %}}
For vendors who invoice GitLab for multiple entities, all invoices are separated by subsidiary (due to audit standards). If the vendor onboards for the Coupa Supplier Portal (CSP), the vendor will only see the POs related to those entities, and will need to email the others. If you are a GitLab vendor who invoices for multiple entitites and you have any questions, please reach out to *ap@gitlab.com*.
{{% /alert %}}

#### Approving an Invoice in Coupa

Invoices requiring PO receipts or approval will appear in user's To Do list within Coupa. Users will also receive email notifications from Coupa (depending on user's notification setting in Coupa).

PO receipts notifications will enable users to "Create Receipt" by clicking on the button and entering the quantity received and receipt date. Please watch the [End Users training video](https://drive.google.com/file/d/1ZS5uh7ccPjyD6VYzzlyGX9Elvcs7TJEa/view?usp=sharing) (starting at the 30:15 mark) for more information.

Approval notifications will enable users to reject or approve invoices by clicking on the appropriate button.

{{% panel header="**Top information to verify before approving an invoice**" header-bg="green" %}}

- Verify invoice copy is attached
- Verify correct PO is matched
- Verify coding (Billing) is correct
- Verify service date is entered and correct
- Verify tag/class is entered (if applicable)
- Verify invoice total is correct

If there are issues with any of the above items, please tag `@Accounts Payable Approval Group` in the Comments section with details.
{{% /panel %}}

#### Disputing an Invoice in Coupa

The invoice dispute process in Coupa enables the Accounts Payable team to request corrections on invoices from suppliers.

Invoices in "AP Hold", "Pending Action", "Pending Receipt", "On Hold", "Pending Approval" or "Rejected" statuses can be disputed to the supplier for corrections. Disputing an invoice requires a dispute reason and sends an email notification to the supplier contact on record and any additional listed recipients.

Once disputed, an invoice can be Withdrawn from Dispute by Accounts Payable or Voided; or Resolved by the supplier.

#### Rejecting an Invoice in Coupa

The invoice rejection process in Coupa allows the Accounts Payable team to make adjustments on invoices before restarting approvals, continuing approvals or disputing the invoice back to the supplier. This is an internal status that suppliers cannot see indicating that an approver or approval group rejected the invoice. Comments are required when rejecting an invoice - please provide as much detail/information as possible.

#### Manually Entering a Bill (invoice) in NetSuite

Please note the below steps reference how to manually enter bills into NetSuite.  Effective 2019-11-01 all AP invoices should be getting processed through Tipalti and Effective 2021-06-01 we will begin to process in Coupa as well. These 2 systems will automatically record the transaction into NetSuite after the invoice has been approved by the corresponding business partner in the respective system.

1. On the NetSuite home page, click the "+" icon near the global search bar at the top of the screen and select "Bill."
1. Select the appropriate vendor record.
    >**If adding a new vendor, follow the bullets below before proceeding, otherwise skip to step 3**
    >
    > - Enter the company name, email address, applicable subsidiary, physical address, payment terms, primary currency, and Tax ID. (Note that the address field is located under the "Address" tab, while the Tax ID, primary currency, and payment terms fields are located under the "Financial" tab)
    > - Enter the banking information in the "Comments" field then click "Save."
    > - Go to the "+" icon at the top of the vendor record and select "Bill" from the dropdown box.
1. Enter Bill date. The due date should auto-fill based on payment terms entered during vendor setup. If not, select the correct due date and update the vendor record after the bill has been entered and saved.
1. Enter Bill number.
1. Go to the "Expense and Items" tab below to enter the expense details.
1. Select appropriate GL-account under the "Account" dropdown box. (Be sure to check whether the invoice represents a prepaid expense, fixed asset, etc.)
1. Enter Bill amount.
1. Select tax code, if applicable.
1. Enter department. (This must be entered if the account you selected in step 6 is an expense account)
1. Add attachments: Go to the "Communication" tab and find the "Files" subtab.
1. Click "New File." A new window will appear, allowing you to select the file you wish to attach.
1. In the new window, select the "Attachments Received" folder in the dropdown box, then click "Choose File" to attach both a copy of the vendor bill and email approval. (The supporting email approval must be attached along with a copy of the invoice)
1. Click "Save."
1. In Google Drive, file invoice in the "Entered" folder for that entity.

### Payment Process

**Billable Expenses**

If you have an expense report that can be billed back to a customer please make sure to check the "billable" flag in Navan along with tagging the customer name under the "customer" field in Navan.

#### Processing payment for invoices in Coupa

Supplier Payment Accounts (SPAs) are required in order to pay suppliers from Coupa Pay.

There are four different ways that suppliers will be able to provide their payment information:

- **Smart Onboarding Form**: Native Coupa capability within the Coupa Supplier Portal that will allow supplier to capture their banking information.
- **SIM (Supplier Information Management) Form**: Whenever GitLab onboards a new supplier, as part of the External Form, there is a section to capture the vendor's remit to information, along with their bank account information. *(This is where the majority of GitLab suppliers will be providing their banking information)*.
- **Coupa Supplier Portal (CSP) Legal Entity Section**: Mostly used if a supplier is changing their bank account information or needs to make any updates. The vendor is able to manage that directly within their Coupa Supplier Portal profile and either add a new legal entity (which will be associated with a new bank account) or adjust an existing one.
- **Invoicing Section**: If for some reason, a supplier is submitting their first invoice and they have not provided their banking information before they are creating their first invoice, that will create a new supplier payment account in Coupa.

{{% alert color="warning" %}}
If you are a GitLab vendor and you want to know more about how to update your CSP profile, check Coupa's [Create or Update Your Profiles](https://compass.coupa.com/en-us/products/product-documentation/supplier-resources/for-suppliers/Get_Started_with_the_CSP/Create_or_Update_Your_Profiles) documentation.
{{% /alert %}}

After the supplier submits their supplier payment account information, it will transfer into Coupa automatically and create a supplier payment account record.

{{% alert color="primary" %}}
If the supplier is going through the SIM process, the approval for that supplier payment account will occur directly on the SIM External Form, and AP won't have to go into the supplier payment accounts to provide approval.
{{% /alert %}}

For more information regarding how to set up SPAs or Coupa Pay, please check out the lower section of our [Coupa FAQ page](../procurement/coupa-faq/).

#### Creating a Batch in Coupa

- Only Invoices in the "Ready to Pay" status can be utilized to create a batch.
- Invoices can be removed from payment by Coupa Pay using the slider button under "Actions" *(in case a supplier is selected for Coupa pay but need to be paid out of NetSuite, switch their payment method to ERP)*.
- The "Pay from Account" (Company Payment Account or CPA) will be automatically defaulted based on the Chart Of Accounts. The CPA can be adjusted manually by selecting the dropdown.
  - The "Pay to Account" (Supplier Payment Account or SPA) will be defaulted based on the Remit-To entered on the invoice.

#### Approving a Batch in Coupa

- Approval chains are generated before a payment batch can be released.

{{% alert color="primary" %}}
**Segregation of Duties:** The creator of the Batch cannot be the releasor of the same batch regardless of the permissions they have.
{{% /alert %}}

#### Coupa Integration - troubleshooting for Payments

A NetSuite error log identifying payment integration issues will be emailed to the Accounts Payable Team every Tuesday and Friday. The email is sent from **Finance Systems Admins** and the Subject is **Coupa2NS Pay Payments Integration Log**. Download the attached file and filter by Type = **Error** and **Audit**. Review the **Details** field to find the payment number that needs to be reviewed/corrected. For information regarding common errors and how to correct them, please see this [file](https://docs.google.com/spreadsheets/d/1KL6ft-kNkeKhvf-iORfar_3vzK6mySHB/edit#gid=1779396759); under the column labeled **Script** search for **Coupa Invoice Payment Integration**. If any troubleshooting assistance is needed, please ask in the **#coupa_help** Slack channel.

There is also a View in Coupa that will list payments not exported to NetSuite. Under Payments, select View = **Not Exported**
![coupa-image-1](/images/finance/accounting/finance-ops/coupapymtview.png)

However, there will be no details regarding the integration issue. You will need to review the NetSuite error log (referenced above) for the details.

### How to access Coupa

Coupa is available via Okta. To access the platform:

1. Login to your [Okta home page](https://gitlab.okta.com/app/UserHome#).
1. Click on the Coupa (Prod) button.
   - A new tab should open with your user logged in.

{{% alert color="primary" %}}
Please note that every month all Coupa access will be reviewed and users who haven't been active in a period of 90 days will have their access removed. *(Note that this number may vary depending on the license count for the current month)*
If you need to request access again, please reopen your initial Access Request issue and tag the Finance Systems Admins team using `@gitlab-com/business-technology/enterprise-apps/financeops` in a comment.
{{% /alert %}}

If your job function requires you to submit purchase requests in Coupa, follow the below steps:

1. Open an [Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) for Coupa using the `Individual_Bulk_Access_Request` template.
1. In Step 2, in the *Justification for this access* question, please describe:
   - What you need to buy.
   - What is the total cost of the purchase.
   - How often you will need to purchase it.
   - When does it need to be submitted in Coupa.
1. Add the labels ~"FinSys - Coupa" and ~"FinSys::Service Desk".

{{< panel header="**Best Practices**" header-bg="green" >}}
Due to the limited number of licenses available for Coupa, it is recommended that each department identify power users responsible for creating purchase requests on the team's behalf.
{{< /panel >}}

## Expenses

Please refer to GitLab's [Expense Policy](../expenses/) for further details.

### Team Member Reimbursements - Navan

#### Processing Navan Reports

1. Navan will auto sync and record expense reports into NetSuite once the report is "final approved".  "Final approved" means it has been approved by the team member's manager and completed an audit review by an Accounts Payable analyst or our external contractor, Montgomery Pacific (Montpac).
1. Accounts payable will do a daily check to ensure all reports which are "final approved" are successfully synced.  If any errors arise, AP will work out the errors until the report syncs into NetSuite.

#### Billable Expenses

- If you have an expense report that can be billed back to a customer please make sure to check the "billable" flag in Navan along with tagging the customer name under the "customer" field in Navan.

#### Paying Navan Reports

1. Team members in a US expense policy will be automatically reimbursed through Navan after their report is "final approved" within 1-4 business days.
    - The team member must set up their bank account in Navan.
    - Once an team member is reimbursed, Navan will auto sync the payment to the expense record to mark the report as reimbursed.
    - This will feed into NetSuite to show the bill as fully paid as well.
1. Team memebers in a country paid through PEO will also receive expense reimbursement through their same payroll PEO payments each month.
    - **Please Note:**  The timing of reimbursement can vary if you are being reimbursed directly from payroll, CXC, SafeGuard, Global PEO, Remote and/or iiPay.
    - More information on the timing of payouts can be found [here](/handbook/finance/expenses/#44-reimbursement-payout-timelines)
1. All non-US GitLab entities will be reimbursed through their respective payroll provider or paid directly through GitLab's Accounts Payable (AP) department with the normal weekly payment run.
    - Expense report must have been "final approved" no later than EOD Tuesday of that same week.
    - Any report "final approved" on Wednesday to Friday of that week will be reimbursed the following week.
    - Once an employee is reimbursed, AP will create the payment in NetSuite against the record to close the report as paid.
    - AP will manually mark the expense reports as "Reimbursed" in Navan once they are confirmed to the payroll provider or batched to Tipalti.

##### Paying Navan Reports in Tipalti

**Entites included: GmbH, BV, PTY LTD, Ireland, IT BV and GK.**

1. AP will send the team member an auto generated email from Tipalti with instructions on how to onboard.
    - Only after a team member onboards themselves in Tipalti will payments be issued. Payee profile will show as "Payable".
    - Any team memebers hired after 2019-11-01 will be sent onboarding requests upon hire and/or upon first submission of an expense report.

**Further details on the Expense reimbursement process can be found [here](/handbook/finance/expenses/#4-procedures)**

#### Accounts Payable Analyst Performance Indicators - Expenses

1. Average days to action <= 3 business days

    Number of days from when an team member's manager approves report to when AP analyst does final approval for payment or responds to team member in Navan if there is a concern. (Approval for payment is not the reimbursement date.) This is calculated on a calendar month basis. The target for this is currently three business days.

1. Time to get a new team member set up in Navan < 3 business days

    Have new team member set up in Navan within 3 business days from team member start date.

### Travel and Expense Guidelines

#### Spend reduction

When reducing spend, we will not take the easy route of (temporarily) reducing discretionary spending.
Discretionary spending includes expenses like travel, conferences, gifts, bonuses, merit pay increases and summits.
By reducing in these areas we put ourselves at risk of [increasing voluntary turnover among the people we need most](https://steveblank.com/2009/12/21/the-elves-leave-middle-earth-%e2%80%93-soda%e2%80%99s-are-no-longer-free/).

Discretionary spending is always subject to questioning, we are frugal and all spending needs to contribute to our goals.
But, we should not make cuts in reaction to the need to reduce spend; that would create a mediocre company with mediocre team members.
Instead, we should do the hard work of identifying positions and costs that are not contributing to our goals.
Even if this causes a bit more disruption in the short term, it will help us ensure we stay a great place to work for the people who are here.

### Non-Reimbursable Expenses

In order to purchase goods and services on behalf of the company, you should first [consult the Signature Authorization Matrix](../authorization-matrix/) to determine the approval requirements. Note that this **does not** include travel expenses and other incidentals. These expenses should be self-funded then submitted for reimbursement within Navan, or in the case of independent contractors, included in invoices to the company (per the guidelines above).

If further approval is not required, then proceed to the Procurement ["What are you buying" page](/handbook/finance/procurement/#the-procurement-process) for further instructions on the purchasing process at GitLab. Once those procedures are complete, have your vendor send their invoice to Accounts Payable: *ap@gitlab.com*.  Most importantly, the team member making the purchase request is ultimately responsible for final review and approval of the invoices. Final review and approval are critical process controls that help ensure we do not make erroneous payments to vendors. All original invoices and payment receipts must be sent to Accounts Payable.

### Creation of Expense Tags

If you would like to track spend for a particular campaign, project and/or event you can do that through expense tag, also known as classes in NetSuite.  If you would like to request an expense tag/class to be set up please open [this tracker](https://docs.google.com/spreadsheets/d/1wBqvCvmou4afnb0p8lBXVvFmsl-j0IehS7GdfJybGzg/edit?usp=sharing) and enter the information required for the General Ledger (GL) team to create the tag.

- The GL team will create the tags at the end of each day.
- The tag is created in Netsuite and syncs with Navan and Coupa.
- Requisitions can be saved for later, while you complete the tag creation process.

**Create Classes In NetSuite:**

1. In NetSuite go to Setup-Company-Classes-New
1. Add the name of the expense tag under Name
1. Under subsidiaries highlight GitLab Inc and check the box that states "Include in Children"
1. Save

Navan will auto-sync any new "expense tags" on a daily basis, but if the Navan admin wants to manually sync they can do so by following these steps:

**Import new Classes/Tags In Navan:**

1. Go to the Admin page and click on the *Policies* tab.
1. Select a policy and find the *Connections* subtab. The NetSuite connector is located on this page.
1. Click the *Sync Now* button for the NetSuite connector. The page will run a prompt showing sync status.
1. Once the syncing process is complete, go to the *Tags* subtab.
1. Search for the tag by name under classifications (i.e. the NetSuite profiles created in prior steps)

### Corporate Credit Cards

<a name="corporate-cc"></a>

Please review this [page](../accounts-payable/corp-credit-cards/) for the current policy/procedures.

### Contribute Costs and other key expenses

#### Marketing Campaign Expenses

Please see the [campaign expense guidelines in the Marketing handbook](/handbook/marketing/marketing-operations/).

#### GitLab Contribute Cost Tracking

(Previously GitLab Summit)

Tracking expenses for company Contributes enables us to analyze our spend and find opportunities to iterate, and in turn, improve subsequent Contributes. To enable tracking we create an expense tag that will allow GitLab team-members to tag Contribute related expenses in Navan. This should be done prior to the announcement of each Contribute.

- To categorize an expense under an expense tag to track a specific marketing campaign, contribute expense and/or any special project you will do this under the "classifications" tag in Navan.

## Property, Plant and Equipment

Property, plant and equipment is the long-term asset or noncurrent asset section of the balance sheet. Following are the sub-processes:

### Acquisition and Capitalization

#### Capital Assets Policy

**Purpose**

This policy establishes the minimum cost (capitalization amount) used to determine the capital assets recorded in GitLab's financial statements.

**Capital Assets Defined**

A "Capital Asset" is a unit of property that has an economic useful life extending beyond 12 months **and** was acquired (or in some cases, produced) for a cost of [$5,000 (USD)](/handbook/total-rewards/compensation/#exchange-rates) or more. Capital Assets must be capitalized and depreciated for financial reporting purposes.

**Capitalization Thresholds**

GitLab establishes [$5,000 (USD)](/handbook/total-rewards/compensation/#exchange-rates) as the minimum amount required for capitalization. Any item with a cost below this amount is expensed on the date of purchase. Exceptions are Key Component Assets (i.e. computer laptops).

Bulk purchases ("like" items acquired with a single purchase order, which are received within a reasonable period of time of one another (less than 60 days) and that individually have an Acquisition Cost less than the Individual Purchases Capitalization Threshold) have a Capitalization Threshold of $50,000 (USD)

### Depreciation/Amortization

**Methodology**

All capital assets are recorded at historical cost as of the acquisition date. These assets are depreciated on a straight-line basis, with the number of depreciation periods being determined by asset class.

- **Computer and I/T Equipment:** For our purposes, Computer and I/T Equipment generally consists of computers (laptops) and are assigned a standard useful life of two (2) years. This depreciation schedule applies to all entities.
- **Office Equipment and Furniture & Fixtures:** The standard useful life for Office Equipment and Furniture & Fixtures is five (5) years. This depreciation schedule applies to all entities.

Invoices and purchase receipts for capital assets are retained for a minimum of five (5) years.

### Fixed Asset Register and Asset Tracking

Items paid for by the company are property of the company. Assets with purchasing value in excess of [$5000 USD](/handbook/total-rewards/compensation/#exchange-rates) or Key Component Assets are recorded and tracked through NetSuite Fixed Asset Management (FAM) module, which includes details of individual asset purchased. The Asset Register report provided by NetSuite FAM provides each individual asset purchased with the following information:

1. Period and Date of purchase
1. Asset Cost
1. Asset Category
1. Asset Description
1. Useful life
1. Serial number, if available
1. GL Coding

Once the information is captured in NetSuite FAM a depreciation schedule will populate and NetSuite FAM will post a journal entry each month to record the depreciation of the asset until it is fully depreciated. The asset will remain on GitLab's balance sheet until the asset is no longer being used and is identified to be disposed.

### Disposition of an Asset

Assets will be disposed of if purchased by an employee upon termination (if approved by IT Ops) or if the item is no longer useful before the useful life.

1. If a team member would like to purchase an asset from the company (i.e. a laptop), they would request through an issue to IT Ops and Accounting to obtain the amount to be paid. This is derived from original cost less accumulated depreciation.  If an asset is purchased, Accounting will collect the funds and will book the appropriate accounting treatment to dispose of the asset.
1. If an asset is no longer usable before the useful life has been reached the employee needs to submit an issue to IT Ops and Accounting to inform them.  IT Ops will evaluate and if they deem the item is no longer useful, Accounting will book the appropriate accounting treatment to dispose of the asset.

IT Ops will need to identify the asset and inform Accounting to properly dispose of the asset from NetSuite FAM.

## Accounting Policies

Record to report process is governed by the following accounting policies:

### GITLAB INC. RELATED PARTY TRANSACTIONS POLICY

Refer to Legal page for [Related Party Transactions policy](/handbook/legal/#gitlab-inc-related-party-transactions-policy)

### Accounting Team PTO Guidelines

Our ability to accomplish our Finance and Accounting mission of providing timely, fact-based information to drive business results as a public company depends on the participation of team members during certain critical times of year. Our accounting function provides critical, time based deliverables that directly impact our ability to support business growth and meet our public company obligations. These activities require the entire team's support.

Team Members should prioritize taking time off to refresh and recharge outside of these critical windows. While these exact windows vary by team, generally we need all team members to support the last week of the quarter and first two weeks of the next quarter. Check with your manager if you are unsure what is applicable to your role. When these windows overlap a weekend (particularly the last day of the quarter) or public holiday/ Family and Friends day, we recommend team members work with their manager to reschedule the day off to a day outside of this critical end of quarter time period. If a team member is unavailable to work during this time period, they should provide their manager with at least one months' notice whenever possible to allow for coverage to be arranged. When appropriate, we will create rotational coverage plans over holidays/weekends, while remaining in line with applicable jurisdictional requirements.

### Investment Policy

**Purpose**

The purpose of this policy is to establish the responsibility, authority and guidelines for the investment of operating surplus cash.  Surplus cash is defined as those funds exceeding the operating requirements of the Company and not immediately required for working capital or near term financial obligations.

**Scope**

This policy shall apply to the Company and all subsidiaries.  This investment policy will be reviewed periodically to ensure that it remains consistent with the overall objectives of the Company and with current financial trends.

**Approved Brokerage Institutions**

The Company may use the following brokerage institutions:

1. Morgan Stanley Smith Barney LLC
1. Comerica Securities, Inc.

**Investment Objectives**

The basic objectives of the Company's investment program are, in order of priority:

- Safety and preservation of principal by investing in a high quality, diversified portfolio of securities, mutual funds, and bank deposits.
- Liquidity of investments that is sufficient to meet the Company's projected cash flow requirements and strategic needs.
- Maximize after-tax market rates of return on invested funds that are consistent with the stated objectives herein, conservative risk tolerance and the Company's current tax position.
- Maturity Limits
- Individual security maturities should not exceed 24 months.  The weighted average maturity of the portfolio shall not exceed 12 months.  A maturity or effective maturity by definition shall include puts, announced calls or other structural features which will allow the Company to redeem the investments at a quantifiable price consistent with liquidity, safety and preservation of capital.

**Eligible Investments**

United States Government Securities:

- Marketable debt securities which are direct obligations of the U.S.A., issued by or guaranteed as to principal and interest by the U.S. Government and supported by the full faith and credit of the United States.
- United States Government Agency Securities:
  - Debt securities issued by the Government Sponsored Enterprises, Federal Agencies and certain international institutions which are not direct obligations of the United States, but involve Government sponsorship and are fully guaranteed by government agencies or enterprises, including but not limited to:
    - Federal Farm Credit Bank (FFCB)
    - Federal Home Loan Bank (FHLB)
    - Federal Home Loan Mortgage Corporation (FHLMC)
    - Federal National Mortgage Association (FNMA)

**Money Market funds**

Money Market Funds must be rated AAA or equivalent by at least one NRSROs.

At time of purchase investment restrictions:

Investment Products (Rating, Sector Concentration, Issuer Concentration)

1. US Government (AA+, No Sector Concentration, No Issue Concentration)
1. Agency (AA+, 50% Sector Concentration, 10% Issuer Concentration)
1. Money Market Funds - US Government/Treasury (AAA, No Sector Concentration, 50% Issuer Concentration)

### Prepaid Expense Policy

**Purpose**

This policy describes the methodology used to monitor and account for GitLab's prepaid expenses.

{{% alert color="warning" %}}
**Effective 2022-04-01 a new Accounting Prepaid Automation Process has been implemented. Please click [here](https://internal.gitlab.com/handbook/finance/accounting/prepaid/) to learn more about the process, which utilizes Coupa.**
{{% /alert %}}

**Prepaid Expenses Defined**

A [*Prepaid Expense*](https://www.investopedia.com/terms/p/prepaidexpense.asp?ad=dirN&qo=investopediaSiteSearch&qsrc=0&o=40186) arises when a cash disbursement is made for goods and services prior to realizing the associated benefits of the underlying goods and services. These transactions are recorded as assets until the goods and services are realized, at which point an expense is recorded. Our minimum threshold for recording prepaid expenses is [$5,000 USD](/handbook/total-rewards/compensation/#exchange-rates)

**Identification and Recording of Prepaid Expenses**

Once a purchase request makes it through the [company approval workflow](../procurement/), Accounting will take the following steps to ensure prepaid expenses are recorded accurately:

1. The amount involved is **equal to or exceeds $5,000**. Prepaid expenses below $5,000 must be recorded as period expense immediately as incurred.
1. The prepayment is for a time period **greater than 12 months**; (period of time is excluded for the Deposit of an event)
1. **if an amount is equal or greater than $50,000 on a single item in one invoice, it can be capitalized if the prepayment time period spans across fiscal quarters**.
1. Any **deposits** made for events in Marketing, Corporate or other departments of less than $5,000 USD will be recognized as an expense immediately on the day the invoice is received regardless of whether the event has taken place or not.

    The $5,000 clip level normally applies per invoice or per item. However, situations may exist that would require exercising business judgement on a case by case basis (i.e. any clip level by total amount of purchase per vendor). Also, there are situations when each individual prepaid may not meet the clip level but as a whole, these prepayments are similar in nature and are purchased in a bulk and therefore, the total amount of all the prepaid should be combined and used to decide if the prepayment should be recorded. Any exceptions should be pre-approved by the Corporate Controller or PAO.

    Amortization is recorded straight line based on a mid-month amortization method as follows:
    If the first month of service begins on the 1st to the 15th of the month, a full month amortization will be recorded in the current month.  If the first month of service begins on the 16th to the last day of the month, amortization will begin on the 1st day of the subsequent month.

    Mid-Month Amortization Method does not apply to prepaid expenses with a monthly amortization equal to or greater than 50,000 USD or if the amortization if spread only over 1 period.  If monthly amortization is equal to or more than 50,000 USD, the first month amortization will be calculated based on actual number of days where services were rendered.

    Prepaid Not Paid:  For any prepaid expenses not processed for payment, an adjustment for "prepaid not paid" is posted to the respective prepaid expense account and AP manual adjustment account (GL Account 2001).  A prepaid expense is not treated as an asset if a liability remains in the AP sub-ledger.  Prepaid not paid adjustments are performed on a quarterly basis at minimum.
    Any deposits paid which will be held for more than 12 months such as security deposits or deposits to retain consultants will be booked to Security & Other Deposits (GL Account 1620)

    Prepaid Bonuses with a Clawback will be recorded to Prepaid Bonus w/Clawback (GL Account 1152) and will be amortized in accordance with the bonus agreement terms, using the mid-month convention.

1. Finally, the balance is reviewed one last time when the Senior Accounting Manager performs a review of the financials prior to closing the period.

**Contribute related expenses**

Team member travel expenses are expensed in the period incurred. Costs related to third party vendors such as hotels, facilities, excursions are recorded to prepaid expenses and recognized as expense at the time of the event.

### Accrued Liabilities Policy

**Purpose**

To provide clear guidance concerning the identification and recording of items included in GitLab's accrued and other liability accounts. The purpose of monthly accrual processes is to allocate expenses to the proper accounting period and match expenses with related revenues. At the close of each month, accrual processes ensure that all expenses related to that month are correctly included in the company's financial statements. Additionally, this policy establishes standards and guidelines for ensuring that GitLab accounts for monthly accruals in a manner that is compliant with management's objectives and generally accepted accounting principles (GAAP). This policy applies to GitLab and all subsidiaries.

**Identification**

We require that all expenses be recorded where expense exceeds $5K USD or above, in the period the expense was incurred. The accrual process should be completed on a monthly/quarterly basis to ensure liabilities are recorded accurately in their respective periods and/or quarters. In order to meet industry standards for Month-End close deadlines the Finance and Operations teams are responsible to provide on Working Day -1 (ex. Friday July 30th = WD -1, Monday August 2nd = WD 1) the calculations, information, details and backup needed to support the accruals.

The following items should be accrued monthly as necessary (note: this list is not all-inclusive):

1. Accounts Payable:

   - Contracts: Amounts due under contracts, including retainer fees. These items should be recorded as they become billable.
   - Professional Fees: This liability includes legal, tax, and audit consulting and other professional fees.
   - Legal Contingencies: Pending or threatened litigation, and actual or probable settlement. Legal contingencies should be determined with the help of GitLab's VP of Legal - Commercial, IP & Compliance.

1. Wages and Compensation:

   - Team Wages: This includes employee wages and independent contractor fees.
   - Commissions: Liabilities arising from commission obligations to team members who are eligible for commission compensation.
   - Bonuses: Liabilities related to bonus payments for GitLab team-members.
   - Taxes: All employment taxes required for statutory compliance that relate to the GitLab team.

1. Any other material obligation not mentioned above that is a liability of GitLab

**Timing**

Obligations that accrue over time are recorded throughout the accounting period in a methodical and rational manner. Obligations that accrue when an event occurs should be recorded at the time of the event.

Factors that are considered in determining the time of recording accrued liabilities include:

1. Risks of ownership passed to GitLab through receipt of goods or services.
1. The expense must have been incurred during the month being closed; that is, the product or service must have been received on or before the last day of the month in order to qualify as an expense.
1. Even though an expense may have been initially budgeted in the month, it is not eligible for accrual unless the company received the product or service.
1. Accruals are reversed in the next month and re-accrued the following month, as needed.
1. If payment is due prior to receiving goods or services, the amount should be accrued to prepaid expenses.

**Procedural**

The Finance team is responsible for having procedures in place to reconcile accounts monthly and for keeping documentation to support accrued liabilities. Payables and accrued liabilities are recorded at face value, plus or minus any applicable adjustments. In most cases, the payable amount can be determined from the vendor bill. If not, then the amount should be verified against any relevant documents before recording the liability. When actual values are not available, the recorded value should be based on best available estimates. Estimates should be based on current market price and experience/history.

1. Legal Professional Fees:  Monthly templates are e-mailed by the 1st to all legal firms requesting them to complete with all outstanding bills and unbilled services as of that month end (ex. e-mails are sent by April 1st requesting services as of March 31st).  The responses from all legal firms are complied and reviewed with the VP of Legal - Commercial, IP & Compliance by the 5th, and accruals are made based on the responses and review.  In addition, any potential legal contingencies are discussed during the monthly meeting with the VP of Legal and an accrual is recorded if the loss is deemed probable and the amount can be reasonably estimated.
1. Tax and Audit Professional Fees:  Similarly e-mails with the template are sent to the tax and audit firms and the tax responses are compiled and reviewed with the Director of Tax and the audit firm responses are reviewed with the Accounting and External Reporting Manager by the 5th and appropriate accruals are made based on the review.

The Sr. Accounting Manager is responsible for performing an overall review of accrued liabilities, one to three business days after accounts payable closes each month, to help ensure that all expenses are captured accurately.

**Please see [Procure-to-Pay](#procure-to-pay)**

### Foreign Currency Translation Policy

**Overview**

Foreign currency translation describes the method used in converting a foreign entity's functional currency (as determined and documented in GitLab.com>Finance>Issues>#630) to the reporting entity's financial statement currency. Prior to translating the foreign entity's financial statements into the reporting entity's currency, the foreign entity's financials must be prepared in accordance with generally accepted accounting principles (GAAP), specifically under [Financial Accounting Standards Board (FASB) Statement No.52](https://www.fasb.org/page/PageContent?pageId=/reference-library/superseded-standards/summary-of-statement-no-52.html). GitLab's financial statement reporting currency is USD. The functional currency of our non-U.S. subsidiaries is the local currency. Changes in foreign currency translation are recorded in other comprehensive income (loss), which is reported in the consolidated statement of equity and ultimately carried over to the consolidated balance sheet, under equity.

**Exchange Rates**

Exchange rates used in the currency translation process vary across the three primary financial statement components:

- **Assets and Liabilities:**  Exchange rate between functional currency and reporting currency at period-end.
- **Income Statement:**  The average exchange rates during the period presented.
- **Equity:** The historical exchange rate at the date when entry is made to shareholder's equity. Changes in retained earnings are based on historical exchange rates of each period's income statement.

**Transaction Risk vs Translation Risk**

**Currency Transaction Risk**

Currency transaction risk is due to company transactions denominated in foreign currencies. These transactions must be restated into the entity functional currency equivalents before they can be recorded. Gains(losses) are recognized when a payment is made or interim balance sheet dates.

**Currency Translation Risk**

Currency translation risk occurs due to the company owning assets and liabilities denominated in a foreign currency.

**Cumulative Translation Adjustment**

A cumulative translation adjustment (CTA) is an entry to the comprehensive income section of a translated balance sheet that summarizes the gains(losses) resulting from exchange rate differences over time. Currency values shift constantly, affecting how a currency is valued against others. The CTA is a line item in the consolidated balance sheet that captures gains(losses) associated with international business activity and exposure to foreign markets. The changes in CTA are recorded in other comprehensive income (loss). CTA's are required under GAAP since they help distinguish between actual operating gains(losses) and those that arise from the currency translation process. Additional information on our reporting standards surrounding CTA's can be found in [FASB Topic 830, "Foreign Currency Matters."](https://fasb.org/Page/ShowPdf?path=ASU2013-05.pdf)

Recording CTA - Exchange rate gains and losses for individual transactions are captured automatically by our ERP system, NetSuite. However, a CTA entry must be made in order to properly distinguish currency translation gains(losses) from other general gains(losses) in the consolidated financial statements. This entry includes reconciliation of any inter-company activity that generates foreign exchange gains(losses). The CTA is made on a monthly basis as part of our financial statement reporting cycle.

## Chart of Accounts Policy

**Scope**

This policy establishes GitLab's guidelines regarding the structure, responsibilities and requirements underlying the [chart of accounts (COA).](https://www.investopedia.com/terms/c/chart-accounts.asp)

**Purpose**

This policy establishes formal responsibilities and accountabilities for how GitLab handles requests for new, modified or closed data elements on the COA. The Controller is responsible for all aspects of financial accounting and reporting, and governs the COA.  All requests for new or modified (including closure/deactivation) COA segments, hierarchies, and configuration attributes are subject to approval by the Finance team.

**Changes to the COA**

All requests for new or modified accounts must be submitted to the Accounting Manager for review and approval through a request using the Finance issue tracker.

There are other stakeholders associated with the COA that may influence certain business decisions or financial system configurations. The Controller and Accounting Manager will include selected stakeholders in the related procedures and processes when and if appropriate. Potential stakeholders include, but may not be limited to:

- Financial Planning and Analysis
- Data & Analytics
- Other departments who have shared functionalities within the financial system

The general ledger attributes subject to this policy will be defined by the Controller based upon factors including but not limited to:

- Creating and maintaining consistency for the structure of accounts
- Standard accounting policies and practices
- Regulatory compliance requirements and reporting needs
- Financial and operational reporting needs and requirements
- External accounting and financial reporting requirements

Once an amendment to the COA has been approved, the Accounting Manager will ensure the necessary changes are implemented by updating and then closing the issue.

**Administration**

The COA is maintained in NetSuite. Changes to the COA can only be made by the Controller and/or Accounting Manager.

## Account Reconciliation Policy

**Scope**

This policy applies to GitLab Inc. ("GitLab" or the "Company") and all of its subsidiaries.

**Purpose**

To establish guidelines for assessing, preparing and reviewing balance sheet account reconciliations on a consistent basis in accordance with corporate policies and US Generally Accepted Accounting Principles ("GAAP").

**Policy**

Account reconciliations are prepared and reviewed monthly or quarterly for each active balance sheet account at the natural account level based upon the risk rating assessed (see risk rating assessment below).  Account reconciliations will be prepared consolidated in USD or by entity in the respective functional currency.

Each month end close the Accounting Manager assigns each balance sheet account or groups of accounts to its respective preparer and reviewer using FloQast (Account Reconciliation Tool).  The assignments are set once and will roll over into the next accounting period.  The Accounting Manager will make changes to assignments as needed.  The preparer and reviewers can not be the same person to ensure segregation of duties.

The balances from NetSuite will be auto synced into FloQast each period end so the preparers can prepare their recons based on the NetSuite ending balance for their respective assigned accounts.

The preparer(s) will ensure the following:

- Review all activities ensure activity is recorded properly.
- Identify any reconciling items.
- Upload any supporting documentation and/or add schedules as needed.
- Sign-off the recon in FloQast.

The reviewer(s) will ensure the following:

- Ensures account reconciliations are prepared in compliance with this policy.
- Ensures the account reconciliations are complete, accurate and appropriate.
- Sign-off the account reconciliation in FloQast which will update the status of the recon to the reviewed/approved status.

FloQast will auto sign-off the recon on our behalf if the following is met:

- Balance is zero

If the balance changes after review, approval or auto sign-off the recon will be automatically unreconciled by FloQast and the preparer and reviewers will need to follow the above steps again.

**Risk Rating Assessment**

Once a year in the beginning of Q4, the Controller and/or CFO will review each active balance sheet account and rate it from High, Medium and Low.  The risk level of each account is evaluated based both on the quantitative value (to determine materiality) and the qualitative factors listed below:

- Level of judgement required:  risk increases as level of judgement required increases
- routine/non-routine transactions: risk increases as amount of non-routine/non-standard processes required to record the activity increases
- History of issues: risk increases as the number of audit-related adjustments, questions, restatements increases.
- Complexity: risk increases due to business/system changes, new pronouncements, and new complex calculations that impact the balance sheet.

High Risk Accounts will be reconciled by the preparer monthly (for the exception of tax and equity related accounts which will be reconciled quarterly) and will require 1st level review by an accounting manager or above and 2nd level review by the CFO or PAO.

Medium Risk Accounts will be reconciled by the preparer monthly and will require 1st level review by an accounting manager or above.

Low Risk Accounts will be reconciled by the preparer monthly or quarterly and will require 1st level review by an accounting manager or above.

If there is no activity and/or the account balance is zero the reconciliation will be auto certified by BlackLine.

Once each reconciliation is reviewed/approved the account reconciliation is locked in BlackLine and no further changes can be made for that period.

**Completeness Check**

Once the period is officially closed the Senior Accounting Manager will ensure all recons are in approved, reviewed or in a auto-certified status before moving into the next period.
