---
title: "Billing Operations"
---

Welcome to the Billing Ops Handbook
{.h2}

## Charter

The Billing Operations Team is part of the Revenue Operations organization. Our Billing Team is responsible for the billing functions of our global account portfolio.

**The GitLab Billing Team comprises three regional teams:**

- Americas - West Region
- Americas - East Region
- EMEA/APAC Region

Please see the internal [Wiki](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/Billing%20Operations%20&%20Accounts%20Receivable%20Wiki) Page for additional information & resources!

## Meet the Team

- [Tim Cheeney](/handbook/company/team/#tcheeney) - Director, Billing & Collections (Global)
- [Josephine Hararah](/handbook/company/team/#josephinehararah) - Senior Manager, Billing Operations (Global)
- [Kinga Polgardi](/handbook/company/team/#kingapolgardi) - Manager, Billing Operations (EMEA and APAC)
- [Cristine Sotomango Marquardt](/handbook/company/team/#csotomango) - Manager, Billing Operations (AMER)
- [Karen McKinney](/handbook/company/team/#k.mckinney) - Senior Billing Operations Analyst (AMER)
- [Ausha Saptouw](/handbook/company/team/#aushas) - Senior Billing Operations Analyst (EMEA)
- [Laura Robins](/handbook/company/team/#laurarobins) - Senior Billing Operations Analyst (EMEA)
- [Nicole Ann Garcia](/handbook/company/team/#nicoleannprecilla) - Billing Operations Associate (EMEA/APAC)
- [Christian Willis](/handbook/company/team/#christianwillis) - Senior Billing Operations Analyst (AMER)
- [Diana Quitevis](/handbook/company/team/#dquitevis) - Billing Operations Specialist (AMER)

*The Billing Team works closely with Sales, Deal Desk, Accounts Receivable, and Revenue Operations.*

### Helpful Links

- [How to create an opportunity/build a quote?](/handbook/sales/field-operations/sales-operations/deal-desk/)
- [Order requirements](/handbook/sales/field-operations/order-processing/)
- [Contacting the Legal team](/handbook/sales/field-operations/order-processing/#process-for-agreement-terms-negotiations-when-applicable-and-contacting-legal)
- [Questions about licenses and plans](/handbook/support/internal-support#common-internal-requests---sales-team--customer-success-managers--accounts-receivable)
- [Zuora Billing Tech Stack Guide](https://internal.gitlab.com/handbook/finance/accounting/finance-ops/billing-ops/zuora-billing/)

## Communicating with Billing

Avoid contacting any Billing team members [directly via Slack](/handbook/communication/#avoid-direct-messages). Please tag `@billing-ops` in the #Finance channel.

- Email: `billing@gitlab.com`
- Salesforce: Please follow the Requesting Internal Support workflow outlined [here,](/handbook/sales/field-operations/requesting-internal-support/#salesforce-workflow) this will ensure that your inquiry will be routed to the Billing Operations team.

Please do not tag individual team members on opportunities to avoid potential delays.

**Questions on a Quote?** Please contact the Deal Desk team by following the steps oulined [here.](/handbook/sales/field-operations/requesting-internal-support/#salesforce-workflow)

## Standard Operating Process

The Billing Team performs a billing reconciliation and Bill Run in Zuora daily.The daily bill run will encompass all closed won opportunities from the prior day.

The expected Deal Desk/Order Management to Stage `Close Won` cycle is 12-15 hours depending on the complexity of the opportunity
The expected `Close Won` to invoice cycle is 24-48 hours depending on the complexity of the related opportunity.

> - Any manual updates to invoices concerning invoice templates should go through Legal.
> - SLAs will not be applicable to any opportunity that is rejected due to any related booking error.

## Functional Responsibilities

- **Review Billing Information**
  - Daily review of opportunities pending approval and invoicing
  - Validate related billing information for accuracy
  - Confirm pricing/packaging on customer accounts
  - Reconcile system information to ensure timely and accurate invoice delivery
- **Manage data/information Sync between CRM and ERP**
  - Perform daily reconciliation between systems for accuracy
  - Confirm customer, entity, quote, contract and bill-to/sold-to information is verified prior to invoice submission
- **Prepare, Validate and Send Invoices**
- **Commission Data Reporting and Invoice Validation**
- **Month-End Activities**
  - Booking to billing reconciliation
  - VAT reporting and validation
  - Professional services billing reconciliation
  - Reconciliation of related Balance Sheet G/L Accounts

See also: [Internal Billing Checklist](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/Billing%20Checklist%202020)

## Billing Operations Systems

### Salesforce

Salesforce is used for sourcing customers, creating quotes, and housing all customer information and supporting documentation. The Billing Team utilizes SFDC to view all related customer documentation and account information.

See also: [Business Operations - Salesforce Reference](/handbook/sales/field-operations/sfdc/)

### Zuora

[Zuora](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/staging/doc/architecture#zuora), a leader in the subscription management technology space, provides a platform which allows automation of subscription operations for businesses. We use Zuora's platform at GitLab to integrate with other platforms for billing and CRM, automate subscriptions flows and assist with reporting. The platform is considered the source of truth for many important business objects, like the product catalog, subscriptions, invoices, and more. See the **[Zuora Billing Tech Stack Guide](https://internal.gitlab.com/handbook/finance/accounting/finance-ops/billing-ops/zuora-billing/)** for details regarding Zuora Billing implementation, including the [Zuora Object Model](https://knowledgecenter.zuora.com/Get_Started/Zuora_business_object_model) and integrations with systems like CustomersDot.

- **Zuora is used for the following:**
  - Billing of all customer accounts
  - Invoice Submission via `ar@gitlab.com`
  - All cash applications (cash receipts)
  - Integrated to SFDC for quoting (Zuora CPQ)
  - Integrated to Avalara Tax Reporting Software
  - Integrated with Zuora Revenue

> See the **[Zuora Billing Tech Stack Guide](https://internal.gitlab.com/handbook/finance/accounting/finance-ops/billing-ops/zuora-billing/)** for technical implementation details.

### Zendesk

Zendesk is our support queue for customer inquiries. Each case is then converted into a Zendesk ticket and filtered into a `View`, ordered by category. As part of their daily workflow, the Billing Operations Team monitor these views and process tickets through completion.

See also: [Zendesk](/handbook/marketing/developer-relations/workflows-tools/zendesk/)

## How to get Help

<details>
<summary markdown='span'>
  I need help accessing my license
</summary>

1. Log into your account at https://customers.gitlab.com/customers/sign_in
1. Login is email address here Note you will need to provide them the email address
1. Click "Manage Purchases"
1. Click "Download License"

> If you still can't access your license, please create a support issue [here](/handbook/support/internal-support#regarding-licensing-and-subscriptions).

</details>

<details>
<summary markdown='span'>
 How can I make a payment?
</summary>

- Current payment methods available include:
  - ACH
  - Wire
  - Check (US Only)
  - Credit Card

> Additional payment instructions are also available on your invoice under `bank information`.

- To make payment via credit card, please log into your account https://customers.gitlab.com
  - select `Payment Methods`
  - select `Add New Payment Method`

</details>

<details>
<summary markdown='span'>
Connect with GitLab via 3rd Party Billing Portal
</summary>

GitLab currently supports various 3rd Party Billing Portals.

Customer billing portals are used for PO receipt and submission of invoices billed by GitLab to our customers.

When a customer advises you that they will need to be connected with GitLab via a 3rd party billing portal, please submit a request to `AR@GitLab.com`. This will allow the Billing Operations Team to confirm if a portal registration already exists.

- **Some of our 3rd Party Portals Include:**
  - SAP Ariba - Please send a Trade Relationship Request (TRR) to GitLab ANID: AN01024039298 at `AR@gitlab.com`
  - Coupa Supplier Portal - Please send a connection request to `AR@gitlab.com`
  - Taulia - Please send a connection request to `AR@gitlab.com`

Internal Team Members, please see [Customer Billing Portal Instructions](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/Customer%20Billing%20Portal%20Instructions) for additional information and resources!

</details>

## Billing FAQ

<details>

<summary markdown='span'>
Can we bill an invoice in a currency other than USD?
</summary>

GitLab bills in USD only, without exception.

</details>

<details>
<summary markdown='span'>
What if my customer wants to short pay by foreign withholding tax?
</summary>

All applicable fees are due and payable as per our terms of service.

Section 6. PAYMENT OF FEES, article 6.7 in our standard terms of service.

> 6.7 Any unpaid Fees are subject to a finance charge of one percent (1.0%) per month, or the maximum permitted by law, whichever is lower, plus all expenses of collection, including reasonable attorneys' fees. Fees under this Agreement are exclusive of any and all taxes or duties, now or hereafter imposed by any governmental authority, including, but not limited to any national, state or provincial tax, sales tax, value-added tax, property and similar taxes, if any. Fees under this Agreement shall be paid without any withholding or deduction. **In the case of any deduction or withholding requirements, Customer will pay any required withholding itself and will not reduce the amount to be paid to GitLab on account thereof.**

You can view our GitLab Subscription Agreement [here](/handbook/legal/subscription-agreement/)

</details>

<details>
<summary markdown='span'>
  What entity are web-direct orders billed in?
</summary>

Currently all web-direct (portal) purchases are billed from our GitLab, Inc. (US) entity.

</details>

<details>
<summary markdown='span'>
Can we update invoices manually?
</summary>

Manual (pro-forma) invoice modifications are only done in exceptional circumstances and have to be approved through the Billing Leadership Team. Please ensure that you have proper approvals prior to requesting invoice modifications.

</details>

<details>
<summary markdown='span'>
How can the sales team know if an invoice has been paid?
</summary>

Please review the `billing account` section of the customer account in Salesforce.

The billing account will provide all invoice and payment information available for the customer.

Internal Resource: [How Can Sales View Invoices & Payment Info in SFDC](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/How%20Can%20Sales%20View%20Invoices%20&%20Payment%20Info%20in%20SFDC)

</details>

<details>
<summary markdown='span'>
Where does GitLab currently charge tax on sales?
</summary>

**Locations Include the following:**

- US > US (depending on nexus)
- DE > DE
- NL > NL
- UK > UK
- AU > AU
- US > Canada (only Quebec and British Columbia)
- US > South Africa
- US > Russian Federation

Internal Resource: [VAT & Sales Tax Information & Resources](https://gitlab.com/gitlab-com/Finance-Division/finance/-/wikis/VAT%20&%20Sales%20Tax%20Information%20&%20Resources)

See also: [The GitLab Tax Team](/handbook/finance/tax/)

</details>

<details>

<summary markdown='span'>
Can a customer view invoices from the GitLab Customers Portal?
</summary>

Yes, Customers can view invoices in the GitLab Customers Portal! The customer account admin can access invoices by selecting the `View Invoices` option from the upper right hand option in the portal, then select the `Download as PDF` option to view any invoices that have been issued.

</details>

## GitLab Billing Entities

As a global company, GitLab has locations around the world.

- GitLab Inc in the US
- GitLab BV in the Netherlands
- GitLab Ltd in the UK
- GitLab GmbH in Germany
- GitLab PTY LTD in Australia

[Quote Entity Information](/handbook/sales/field-operations/sales-operations/deal-desk/#quote-entity-information)

**Note:** all initial web direct subscriptions ordered through the portal are placed on the US entity.

> Clarification: If the initial order was invoiced by the DE entity -through a sales assisted order- and customer orders an add-on via the portal, the add-on will be invoiced by DE as well.

**Important:** In case of add-ons, the add-on quote/order form must reflect the same invoice entity that was on the initial/base deal.
