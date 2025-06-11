---
title: "Coupa Virtual Card Guide"
description: "Coupa Virtual Card Guide"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## What is Virtual Card?

GitLab's preferred method of payment for suppliers is electronic funds transfer with supplier invoice provided as supporting documentation. In the instances where this option is not available with the supplier, Virtual Card, which is a temporary credit card, can be used as an alternative payment method.

## How to request a Virtual Card

Virtual Card can be selected as a payment option by the Requester when completing a **New request** in `Zip`.

On the **General information** Navigation page in `Zip`:

1. Click **Yes** on the question "Will a virtual card be used to pay this vendor?"
1. Select **American Express- Virtual Card** in the field "What's the name of the vendor?"
1. Complete the remaining fields on the page.

 > Check the [`Zip Handbook page`](/handbook/business-technology/enterprise-applications/guides/zip-guide/) to learn more about completing a new request.

<br>

![vcard-image-20](/images/business-technology/enterprise-applications/guides/coupa-virtual-cards/vcard20.png)

<br>

Once the Requisition is fully approved, a Coupa Purchase Order will be generated. You will receive an emailed notification that the Virtual Card is available for use on that Purchase Order. Click on the PO link to view the Virtual Card details.<br>
**NOTE - only you, as the Requester, will have the ability to view the Virtual Card details.**

<br>

![vcard-image-6](/images/business-technology/enterprise-applications/guides/coupa-virtual-cards/vcard6.png)

<br>

{{% panel header="**IMPORTANT NOTE**" header-bg="danger" %}}
**Prerequisite: You must set up your 2FA in Coupa to view your Virtual Cards.** Review the [How to Enable Two-Factor Authentication (2FA)](/handbook/business-technology/enterprise-applications/guides/coupa-guide/#how-to-enable-two-factor-authentication) for more details.
{{% /panel %}}

<br>

The Virtual Card information is provided on the Purchase Order under the **Payment** section. Click on the link to view the card details. You will be prompted to enter Two-Factor Authentication (2FA) verification code.

![vcard-image-7](/images/business-technology/enterprise-applications/guides/coupa-virtual-cards/vcard7.png)

<br>

The card number, expiration date, and CVV code will be available to the requester. At this point the requester can use the card details to complete the purchase. Please use **GitLab Inc; 268 Bush Street #350; San Francisco, CA 94104** for the Billing Address when using the Virtual Card.

<br>

![vcard-image-8](/images/business-technology/enterprise-applications/guides/coupa-virtual-cards/vcard8.png)

<br>

{{% panel header="**IMPORTANT NOTE**" header-bg="danger" %}}
**The Virtual Card Supporting Documentation must match the amount of the Requisition.** If the amount charged to the Virtual Card differs from the PO amount, updated documentation must be provided.
{{% /panel %}}

<br>

## Virtual Cards FAQ

- **How long is the Virtual Card valid?**
  - By default, the Virtual Card is valid for 365 days. After that, the card will expire for security reasons. If you are unable to make payment within those 365 days and the Virtual Card has expired, tag **@Accounts Payable Approval Group** in the **Comments** section of the Purchase Order. You must include the business justification for reissuing a card in your comments.

- **How do I request an amount to increase the Virtual Card?**
  - Follow the same process as [How to do a Purchase Order Change Request](/handbook/business-technology/enterprise-applications/guides/coupa-guide/#how-to-do-a-purchase-order-change-request). Once the change request has been approved, the Virtual Card amount will be increased.

- **How do I attach a receipt or invoice after Purchase Order is issued?**
  - Receipts are **NOT REQUIRED** for Virtual Card charges.
  - If you receive a notification to attach a receipt, click your name at the top right > Settings > Notifications > and remove the following 2 notifications
         - "Charge Created"
         - "Charge missing receipt reminder"

 ![vcard-image-16](/images/business-technology/enterprise-applications/guides/coupa-virtual-cards/chargenotification_jun2023.png)

<br>

- **What if I have an Urgent Request?**
  - Urgent requests that need approval in less than 5 business days, need to be escalated in the #procurement channel for expediting per the below steps:
    - Your Slack message **MUST** include:
      - Link to your `Zip` Request.
        - Contracts should not be posted directly in slack.
      - Date needed.
      - Specific and quantifiable impact to the business if date is missed.
        - "Supplier wants it signed today" does not qualify as a reason for escalation and these requests will be denied.
        - "Price will increase $45K if not signed by Friday" or "Material negative brand impact if not signed by Friday due to missed PR deadlines" are specific, tangible, business impacts, that will be reviewed.
  - Urgent requests will be evaluated. Please note these are disruptive to our workflow and our ability to meet SLA's for requests opened on time.
  - We may or may not be able to accommodate your urgent request based on the risk and bandwidth available.
  - If you have a critical request, **enter the request into `Zip` 1-2 weeks prior to needing approval** to avoid needing escalation.

<br>

- **What if I have questions or issues?**
  - Reach out in the `#zip-faq` Slack Channel for assistance with requesting a Virtual Card.
  - Reach out in the `#coupa_help` Slack Channel for assistance with an issued Virtual Card.
