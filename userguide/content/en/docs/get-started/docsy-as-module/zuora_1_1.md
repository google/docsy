---

title: "Zuora - Enterprise Application Guides"
description: “Zuora is an order-to-revenue SaaS platform that supports GitLab's quoting, billing, collections, revenue recognition, and subscription metrics.”
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Zuora

Zuora is an order-to-revenue SaaS platform that supports GitLab's quoting, billing, collections, revenue recognition, and subscription metrics reporting processes and the back-office teams that support those processes. It is the central platform that integrates with other order-to-cash systems like CustomerDot, Salesforce, Stripe, Avalara, Snowflake, and NetSuite.

The following sections summarize the key components of the Zuora platform and their relationship to the order-to-cash process.

### Product Catalog

The Zuora Product Catalog represents the total list of revenue-making products and services that are sellable or have been sold by GitLab.  Both self-serve and enterprise products/services are represented in the Zuora Product Catalog.  It is the SSOT for the following product/service parameters:

- list price
- default quantities
- charge model
- billing timing
- recurring v one-time
- at what date a product/service can be added to a subscription
- at what date a product/service can no longer be added to a subscription
- revenue recognition parameters/logic
- tax parameters
- renewal price behavior
- currency
- display in the quoting process

### Subscription Management

Zuora CPQ is installed in Salesforce and is the configure, price, quote tool that facilitates the deal-booking process.  The Zuora 360 integration syncs the Zuora Product Catalog to Salesforce so that the Zuora Product Catalog can be used alongside the Zuora CPQ tool in the quoting process.  Once deals go through the appropriate approvals and reviews in the deal-booking process, their related Quotes are synced to Zuora.  The result is properly a configured Subscription that has the appropriate IDs and product parameters from the Zuroa Product Catalog and the Salesforce (Zuora installed package) Quote.  A version of the described process above also exists for the self-serve portal.  Zuora Product Catalog parameters are stored on the product-side (CustomerDot).  Very defined transacting options in self-serve replace the CPQ process in SFDC.  The result is the same:  a properly configured Subscription in Zuora).
Subscriptions should be the SSOT for the committed deal parameters of a Customer's Subscription with GitLab:

- term start
- term length
- term end
- auto-renewal
- subscription name and IDs
- status
- products/services
  - billing cadence
  - known prices agreed upon
  - quantities entitled to
  - charge model
  - recurring v one-time
  - mrr (and effective dates)
  - revenue/tax parameters
  - renewal price behavior

### Account Parameters related to Billing, Collections, and Financial Reporting

All Zuora Subscriptions must be related to a Zuora Account.  Zuora Accounts are made or updated when syncing Zuora Quotes from SFDC or via the API for self-checkout Customers.
Zuora Accounts are the SSOT for:

- billing email
- billing address
- sales tax address
- tax exemption
- currency
- associated GitLab reporting entity
- Zuora Account name and IDs
- billing hierarchy
- EoA path:  sales v self-serve
- credit cards to be used on future transactions (masked)
- payment terms

### Billing and Payments

Zuora Invoices where Status = Posted represent the dollar value of the product/service that are owed to GitLab from Customers.  They include the dollar value of the product/service sold as well as the taxes due on the transaction.  Zuora is the only approved means of invoicing for GitLab tiers and professional services.
Zuora Invoices are the SSOT for:

- line item dollars owed by the customer
- line item quantities associated with the dollars owed
- line item taxes collected to be remitted to taxing authorities
- date that the due date is calculated from (invoice date)
- date the total balance is due by the Customer

Zuora-provided hosted web pages allow credit card information to be passed from Customer keyboard directly to Zuora in a PCI compliant manner.  Zuora is integrated with Stripe, the gateway service that charges credit cards.  All credit card transactions related to a Subscription change in Zuora should be performed via the Billing and Payment Collection processes in Zuora rather than transacting directly with Stripe.  This ensures the appropriate recordkeeping activities take place with the highest visibility to the cross-functional teams working with Zuora data.
Zuora Payments are the SSOT for:

- gateway responses
- accounting parameters related to the collection of cash
- date payment was considered received
- refund status
- amount considered to be received

### Revenue

Zuora Revenue is the rebrand of the RevPro product Zuora purchased to solve for new revenue recognition requirements.  It is directly integrated with the main Zuora platform and currently inherits all it's information from the Zuora platform.
Zuora Revenue is the SSOT for:

- the logic for how subscription changes are grouped and considered as a single deal
- the logic for how price is allocated between products on the subscription or products that are inferred to be on the subscription
- the GL parameters for ultimate recording of revenue in NetSuite
