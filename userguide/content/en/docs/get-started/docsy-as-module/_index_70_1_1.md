---
title: "Coupa End Users Guide"
description: "Coupa End Users Guide"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Business Need

The Business had identified the need to optimize the Procure to Pay process with tools that would allow the creation of Purchase Requests, Purchase Orders, 3-way invoice matching, vendor payments, and accounting protocols for SOX Compliance.

## Business Solution

The Business decided to move forward with the implementation of `Coupa` for the procurement to payment platform and `Zip` for the purchase request platform. Together they provide the needed functionalities and is integrated to decrease procurement approval turn-times and reduce manual workflow delays.

{{% alert color="info" %}}
To learn more about `Zip`, check the [`Zip Handbook page`](/handbook/business-technology/enterprise-applications/guides/zip-guide).
{{% /alert %}}

## What is Coupa

Coupa is a cloud-based purchasing and payment platform that will be used by GitLab as of 2021-06-01 for the US and Netherlands entities and as of 2021-12-13 for remaining entities. It has an easy-to-use interface that will improve the way suppliers connect with GitLab. All new purchase orders, invoices and communications will be managed through the Coupa Supplier Portal.

### How to access Coupa

Coupa is available via Okta. To access the platform:

1. Login to your [Okta home page](https://gitlab.okta.com/app/UserHome#).
1. Click on the Coupa (Prod) button.
   - A new tab should open with your user logged in.

{{% alert color="warning" %}}
Please note that every month all Coupa access will be reviewed and users who haven't been active in a period of 90 days will have their access removed. *(Note that this number may vary depending on the license count for the current month)*
If you need to request access again, please reopen your initial Access Request issue and tag the Finance Systems Admins team using `@gitlab-com/business-technology/enterprise-apps/financeops` in a comment.
{{% /alert %}}

If your job function requires you to manage budget and management approvals, purchase orders and invoice approvals in Coupa, follow the below steps:

1. Open an [Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) for Coupa using the `Individual_Bulk_Access_Request` template.
1. In Step 2, in the *Justification for this access* question, please describe what budget, management approvals, purchase orders and invoices approvals you will manage.
1. **After the AR is approved, you must review the [tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) and follow the instructions for provisioning (either assign to the provisioner, add the correct labels or both if not clearly stated) to avoid any provisioning delays.**
1. If you require immediate Coupa access, please ping in the `#coupa_help` Slack channel.

{{% panel header="**Best Practices**" header-bg="success" %}}
Due to the limited number of licenses available for Coupa, it is recommended that each department identify power users responsible for managing requisition budget and management approvals, purchase orders and invoice approvals on the team's behalf.
{{% /panel %}}

## How to Use Coupa for Purchasing

### Home Page Overview

![coupa-image-40](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa40.png)

1. **Home Icon** - This icon will bring you back to the homepage.
1. **Account Name** - Contains a number of personal settings related to managing your account in Coupa.
1. **Cart** - Links to your shopping cart, which contains any items selected but not yet submitted for approval.
1. **Search Bar** - Used to search or browse catalog items and create free text requests.
1. **Recent Activity** - Displays your 5 most recent transactions. Selecting `View All` will bring you to Activity to display all of your previous requisitions and other transactions.
1. **To Do's** - Displays a list of action items within Coupa that are assigned to you. Selecting `View All` will bring you to your Coupa Inbox to display all of your To Do's.
1. **Additional Stores ("Punchouts")** - Offers the possibility to search, select and submit purchases directly from the Supplier's portal.
1. **GitLab - Important Links and Resources** - Displays important information about Coupa, along with links to training material and other important documents.
1. **Coupa Community** - Connect or join to engage with other Coupa customers, partners, product managers, and the Coupa success team.

### User Account

![coupa-image-2](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa2.png)

Account Name contains a number of options related to managing your account in Coupa:

- **Activity**: Displays all of your previous requisitions, related orders, receipts, and invoices. In each transactional tab, you can perform the following:

![coupa-image-3](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa3.png)

1. **View**: allows you to quickly apply sets of filters to display reports such as all requisitions, requisitions requiring receipt, draft requisitions, and a number of other pre built reports, along with option of creating custom reports.
1. **Report Scheduling**: allows to set up recurring reports that are emailed to recipients on a regular basis (can be daily, weekly, or monthly).
1. **Advanced**: allows to apply a filter or set of filters to the list of requisitions.
1. **Search**: allows to quickly search all fields on a requisition for a match.
1. **Export**: allows downloading a report in CSV or Excel format based on the current filters applied to the list of requisitions.
1. **Actions**: the icons next to each requisition allow you to edit, copy, cancel, withdraw, and resend requisitions.

- **Groups**: Access to Groups setup and allows user to add members in the group he/she belongs to.
- **Settings**: Contains consolidated personal settings.
  - **General**: The General tab is where you can load a profile photo and check user forms.
  - **Address Book**: Allows you to view your default shipping address and change it as needed (you can also change the shipping address of a particular requisition on the requisition page).
  - **Delegates**: Users can delegate their receiving and approvals to another user by using the Delegates functionality (it is possible to add multiple, overlapping delegates, and enable notifications). *Check the [How to add a Delegate in Coupa](/handbook/business-technology/enterprise-applications/guides/coupa-guide/#how-to-add-a-delegate-in-coupa) section for more details*.
  - **Reports**: Users can schedule a report by going to a particular report view and specifying the scheduling details (only certain users will have access to reports and report views are dependent on role).
  - **Notifications**: Coupa notifications can be managed under the User's Settings.

    ![coupa-image-26](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa26.png)

    For each type of notification, the User can choose whether to receive notifications via email, Slack, or within Coupa (Online) and can select multiple platforms.
  - **Two-Factor Authentication (2FA)**: Should be enabled on user profiles to ensure that financial accounts and instruments are protected for control and use by the individual to whom they are intended. This extra authentication layer on the user profile is required before that user can be granted privileged permissions for working with payment features like creating batches for expense and invoice payments, creating accounts, and many other secured payment functions. *Check the [How to enable Two-Factor Authentication (2FA)](/handbook/business-technology/enterprise-applications/guides/coupa-guide/#how-to-enable-two-factor-authentication) section for more details*.
- **Inbox** - Displays all current and previous notifications.
- **Sign Out** - to exit the application.

### How to add a Delegate in Coupa

![coupa-image-19](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa19.png)

1. Go to your "Account Name" > "Settings".
1. Click on the "Delegate" subtab.
1. Click "Create" and select a delegate type approval (Receiving, Delegate) for a specified timeframe and give a reason.
1. Click "Save".

{{% alert color="info" %}}
Assigned delegates must be of an equivalent or greater management level.<br>
For approvals as part of an approval group, the individual must be a member of that group.
{{% /alert %}}

### How to Enable Two-Factor Authentication

1. Go to your "Account Name" > "Settings".
1. Click on the "Two-Factor Authentication" subtab.
1. Click the "Enable" button.
1. Use your Google Authentication app to scan the QR Code.
1. Enter the 6-digits displayed in the authentication app in the Verification Code field.
1. Click "Submit".

> Anytime you are challenged for a 2FA verification code, just launch your authenticator and enter the latest code.

### How to Create a Requisition

{{% alert color="info" %}}
Effective 2023-02-01, all purchase requisitions will be created in `Zip`. To learn more about `Zip`, check the [`Zip Handbook page`](/handbook/business-technology/enterprise-applications/guides/zip-guide).
{{% /alert %}}

<br>

### How to Review a Requisition in Coupa

**REQUISITION HEADER LEVEL**

![coupa-image-42](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa42.png)

- a) On Behalf Of *(synced from `Zip`)*<br>
  - This is used to create a request on behalf of another user. The approval chain will update following the person selected as "on behalf of". This user will then have to approve the invoice once received.
- b) Description of Purchase *(synced from `Zip`)*<br>
- c) Hide Price *(optional)*<br>
  - Used by Procurement to hide Purchase Order price from the Vendor.
- d) Attachments *(synced from `Zip`)*<br>

{{% alert color="warning" %}}
If an invoice is attached, it will also need to be emailed to **ap@gitlab.com** for processing.
{{% /alert %}}

- e) Vendor's Contact Email *(optional)*<br>
- f) Vendor has access to red/orange data? *(optional)*<br>
- g) List data and systems involved *(optional)*<br>
- h) Vendor's Security Contact Email *(optional)*<br>
  - Click on the magnifying glass icon to select or create a different address.
- i) Virtual Card Supporting Documentation *(optional)*<br>
- j) Address *(defaults from the User record)*<br>
- k) Attn *(defaults from the User record)*<br>

<br>

**REQUISITION LINE LEVEL**

![coupa-image-43](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa43.png)

- The above information is synced from `Zip` or updated by FP&A Team if falls under [Coupa Prepaid Automation Process](/handbook/business-technology/enterprise-applications/guides/coupa-prepaid/).

<br>

### Punchout Requisition

![coupa-image-48](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa48.png)

1. On the Homepage Screen, click on any Punchout supplier located under `Additional Stores` section.
1. Clicking on the Punchout link will take you to an approved supplier website where you start ordering your items, just like any online shopping experience.
1. Start searching and add items to your cart.
1. When done adding items in your cart, click "Checkout".
1. To go back to Coupa "Review Cart" screen, click "Transfer Shopping Cart".
1. Once in Coupa "Review Cart screen", **populate the required information such as the Commodity and Billing Account**.
1. Review completeness of the requisition and click Submit for Approval.

{{% panel header="**NOTES**" header-bg="info" %}}

- Cart Checkout and returning to Coupa "Review Cart" screen depends on the Punchout site.
- It is recommended that users purchase via punchouts as often as possible.
- Don't add multiple punchout suppliers to one requisition.
{{% /panel %}}

<br>

### Approvals

Once the requisition integrates from `Zip` into `Coupa`, the applicable approvers are displayed beneath the cart line.

> The greater the amount of the requisition, the more approvers will be needed.

![coupa-image-44](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa44.png)

### How to Add an Approver

- Click on the "Add" button.
- Type in a few letters of the approver name and the system displays all possible entries.
  - New approver must be an existing user in Coupa.
- Select if the person is to be added after the current approver, end of the chain, or only as a watcher.
  - A watcher cannot approve or reject the cart but will receive notifications about the requisition.

![coupa-image-45](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa45.png)
![coupa-image-46](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa46.png)
![coupa-image-47](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa47.png)

<br>
<br>

### Methods to Approve Transactions

There are several ways to approve transactions in Coupa:

- **To Do's** notification on the homepage screen
  - To view the requisition/invoice/PO change request details, click on the subject line.
  - The approver may add comments on the "Approval Comments" section before clicking on the Reject or Approve buttons.
  - All approvers are displayed in the "Approvers" section.
  - When rejected, a requisition goes back to "Draft" status, the requestor needs to make changes and re-submit. (Please, remember leave a comment about the rejection for the requester).
    - When an invoice is rejected, it goes under "Rejected" status and the Accounts Payable needs to edit and resubmit the invoice (or void if necessary).
- **Inbox**
  - Users can access all their notifications through the "Inbox" section under "Account Name".
  - The User can change the report View to "To Do" to filter all notifications requiring action.
- Via **Activity > "Transactional Tabs" > Requiring My Approval** view
  - In each Activity transactional subtabs, users can change the report view to Requiring My Approval.
- **Email**
  - The approver receives a system-generated email notifying about the requisition or invoice as soon as a user submits the transaction.
  - All the basic information is displayed on the email.
  - The approver selects an appropriate action (View Req / Approve / Reject).
    - The "View Req" option is a link to Coupa to see the transaction in the system.
  - Once a choice is selected, an automatic email is created. The approver needs to send the e-mail for the approval to be made in Coupa.
  - Once the e-mail is sent, the transaction will move to the next approver based on the approval chain in Coupa.
    - If rejecting the Purchase Request, the approver should include a comment explaining the rationale for rejecting it.
- **Coupa Mobile App**
  - A mobile application of Coupa can be downloaded either at the Apple or Android stores. Once you download the app you need to sign-in as you normally would to the instance.
  - The app allows you to do approvals for both Requisitions and Invoices:
    - To Approve: Open the requisition or invoice notification, review the information, and approve.
    - To Reject: Open the requisition or invoice notification, review the information, and reject.
- **Coupa Slack integration**
  - Coupa has built-in integration with Slack, which provides users with another method for Coupa notifications. To activate Slack notifications please follow below steps or view the Coupa Slack [quick demo](https://www.loom.com/share/188a2df7f1cd4b35a3df9e96db7c05e7):
    - Click "Settings" under your name on the top right;
    - Click "Notifications";
    - Click button "Add to Slack". New window will pop up. Click "Allow"

   Once Slack notifications are activated you can choose what type of notifications you want to receive via slack.
   To specify notifications that should be received in slack please go to Settings - Notifications - mark "IM" boxes.

   Below is an example of the approval notification in Slack:

 ![coupa-image-27](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa27.png)

{{% panel header="**NOTE**" header-bg="info" %}}

- If your requisition status is "Pending Buyer Action", it is in Procurement's To Do List and is being reviewed by the procurement team who will respond as soon as possible, no longer than 1-2 business days. If there are any issues, Procurement will add comments to the requisition and you will receive notification via email, Slack or in your To Do List (depending on your notification setup in Coupa).
- If you see "Onboarding" next to the Supplier's name on the line items of your requisition (see below screenshot), the Supplier has not completed the onboarding process. Suppliers have to complete their onboarding in Coupa before the requisition can be finalized.

![coupa-image-25](/images/business-technology/enterprise-applications/guides/coupa-guide/Coupa25.png)
{{% /panel %}}

<br>

### How to Withdraw a Requisition

Provided that a Purchase Requisition has not been fully approved and flipped into an Order, only Procurement can withdraw the Purchase Request and make any changes before submitting again. Please reach out to the `#procurement` Slack Channel (including link to the Coupa requisition) for any requests or questions.

![coupa-image-15](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa15.png)

1. Go to "Recent Activity" or "Activity" section.
1. Find the Purchase Request on "Pending Approval" status and click on the "withdraw requisition" icon (Red Arrow).

{{% panel header="**NOTES**" header-bg="warning" %}}

- On "Activity", select the "Pending Approval" view.
- If a Requisition has already been flipped into an Order, it cannot be withdrawn. A [Purchase Order Change Request](/handbook/business-technology/enterprise-applications/guides/coupa-guide/#how-to-do-a-purchase-order-change-request) will have to created.
{{% /panel %}}

<div class="panel panel-warning">

### How to Receive an Order

{{% alert color="info" %}}
Receiving is only required for an item-based (quantity) requisition.
{{% /alert %}}

1. The requestor can locate all requisitions pending receipt via the "Activity" option under 'My Account'. *This will display all the requisitions created by the Requestor.*
   - It is only possible to select requisitions that are **pending receipt** from the view **Pending Receipt**.
1. Click on the receipt icon under the column "Actions". *This will open up the desktop receipt view.*
1. On the receipt details screen, enter the Quantity (since receiving is only required for item-based requisitions).
1. Save the receipt by clicking on the "Submit" icon.
   - A message indicating successful receipt is displayed.

{{% panel header="**NOTES**" header-bg="warning" %}}

- The requestor can receive partially OR the entire quantity.
- Receiving of goods (quantity) related purchases is required for the vendor to be paid due to 3-Way match rules.
- Adding receipt date and attachments is also possible.
{{% /panel %}}

### How to Void a Receipt

There may be scenarios where a receipt needs to be voided (e.g. an incorrect receipt was made).

{{% panel header="**IMPORTANT NOTES**" header-bg="danger" %}}

- Only an ADMIN and Central Receiver will have the ability to void receipts.
- A receipt cannot be voided if the PO is already soft-closed or hard-closed (this will occur once a PO is fully received and invoiced).
{{% /panel %}}

As **Central Receiver**, follow the below steps:

1. Go to Inventory tab then "View Receipts".
1. Search for the line to be voided *(may use Advanced Search)*.
1. From the search results, identify the line to be voided then click the void icon under "Actions" column.
1. Below the void page, select the "Reason for Voiding" and add notes if needed.
1. Click the "Void Receipt" button.
   - Confirmation prompt appears and status should be Voided.

### How to do a Purchase Order Change Request

Effective 2023-02-01, all purchase order change requests will be submitted in `Zip`. To learn more about `Zip`, check the [`Zip Handbook page`](/handbook/business-technology/enterprise-applications/guides/zip-guide).

<br>

{{% panel header="**IMPORTANT NOTE**" header-bg="danger" %}}
**With the implementation of `Zip` effective 2023-02-01, all New Supplier Requests and Updates to Suppliers Requests will be created by the Procurement Team in Coupa.**
{{% /panel %}}

### How to Request a New Supplier

A supplier must exist in `Zip` prior to submitting a requisition for that supplier. To learn more about requesting a new supplier, check the [`Zip Handbook page`](/handbook/business-technology/enterprise-applications/guides/zip-guide).

To complete a New Supplier Request form:

- Click on the `Forms` dropdown on the Home page
- Select `PROC: New Supplier`

![coupa-image-41](/images/business-technology/enterprise-applications/guides/coupa-guide/coupa41.png)

- Complete the form details and click the "Review" button (located at the bottom of the page/screen).
  - Review the information and if any changes need to be made, click the "Edit" button (located at the bottom of the page/screen) to make necessary changes.
  - If the information is correct, click the "Submit" button (located at the bottom of the page/screen).
- An External Supplier Form will be automatically sent to the Supplier to gather additional information.
  - The Supplier must complete the form and submit it back.
- After supplier submission, the external form will be routed to the Accounts Payable Approval Group for review and approval.
- After approval, the Supplier details will be integrated to NetSuite and it will flow back to Coupa to complete the New Supplier creation. By then, the Supplier should be available in `Zip` when creating Purchase Requests.

### How to Request Updates to a Supplier

To learn how to request updates to a supplier, check the [training video](https://www.loom.com/share/21201b257967414793aec40656959bc5).

## How to Use Coupa for Invoicing and Payments

For further instructions on the invoicing and payment modules in Coupa, please visit the following links:

- [Invoicing in Coupa](/handbook/finance/accounting/#invoicing-in-coupa)
- [Payments in Coupa](/handbook/finance/accounting/#processing-payment-for-invoices-in-coupa)

## How to Request a Coupa Virtual Card

To learn more about requesting a Virtual Card, check the
[Coupa Virtual Card Guide](/handbook/business-technology/enterprise-applications/guides/coupa-virtual-cards/).

## Coupa Support

For any Coupa requests that are technical related, [open an issue](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/intake/-/issues/new?issue%5Bmilestone_id%5D=#) using the `Coupa Request` template.

{{% alert color="info" %}}
If your request involves a change to the current business process, either the Procurement and/or Accounts Payable Team will have to approve it depending on the type of request.
{{% /alert %}}

If you have an urgent issue, send a message to the `#coupa_help` Slack Channel explaining your issue.
