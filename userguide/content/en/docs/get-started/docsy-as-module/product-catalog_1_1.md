---

title: "Product Catalog Guide"
description: "How to request the creation or modification of a SKU."
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Change Management and SDLC Process

For SOX/audit purposes, all changes to the Zuora Billing product catalog must be properly tested, adhering to [Business Technology Change Management](/handbook/business-technology/change-management/) policies and the [Software Development Lifecycle Process for Finance Systems](https://gitlab.com/groups/gitlab-com/business-technology/enterprise-apps/financeops/-/wikis/SDLC-for-Finance-Systems).

## How to request the creation or modification of a SKU

**Before submitting a SKU request issue**, please read and complete all steps of the [Product Launch Process](/handbook/product/product-processes/product-launch/). This will help ensure that the product launch is done efficiently and effectively. A business sponsor or program manager should be assigned and have the business requirements clearly defined before creating an issue for SKU creation or modification.

There are 3 issue templates in [this directory](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/new#) that the Business Sponsor can choose from to help log their SKU request.

{{% panel header="**Common Use Cases**" header-bg="success" %}}

1. To **create** or **update** a **Professional Services SKU**:
    - Open an issue in [this directory](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/new#) using the `CM: Add_New_PS_SKU` template
    - Follow the steps from the [How to Create New or Update a SKU](#how-to-create-new-or-update-a-sku) section of this handbook page
2. To **create** or **update** a **Non-Professional Services SKU**:
    - Open an issue in [this directory](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/new#) using the `CM: Add_New_SKU` template
    - Follow the steps from the [How to Create New or Update a SKU](#how-to-create-new-or-update-a-sku) section of this handbook page.
3. To **retire** an **existing SKU**:
    - Open an issue in [this directory](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/new#) using the `CM: Retire_SKU` template
    - Follow the steps from the [How to Retire a SKU](#how-to-retire-a-sku) section of this handbook page
{{% /panel %}}

## How to Create New or Update a SKU

It is the Business Sponsor's responsibility to provide information and obtain required approvals for the SKU changes being requested. Steps 1-4 of the SKU issue template must be completed and have required approvals obtained before the SKU can be configured. **Please assign the SKU Request issue to yourself by clicking on the `Edit` button on the right-hand panel of the issue.**

To reduce the overall time required to get a new SKU reviewed and approved, consider making an accompanying slack channel similar to [this one](https://gitlab.slack.com/archives/C03KMK6LASY).
{: .alert .alert-warning}

### Step 1. Product Information

This section business and technical requirements for product offerings. Most of these questions will have been answered if all steps of the [Product Launch Process](/handbook/product/product-processes/product-launch/) were completed. Please answer these to the best of your ability in the SKU issue.

**General Overview/Business Requirements**

1. `Overview of Product/Service`
    - Provide a general overview of the SKU and the value provided to the Customer.
2. `Desired Go-Live Date`
    - Provide a specific date of when the new SKU is expected to be used.
    - Please note the date helps with intake and prioritization of the request and does not necessarily mean the SKU will be ready for sale by this date
3. `Product/Service Type for Quoting`
    - Identify whether the SKU is a base product (i.e. Premium, Ultimate, Dedicated, etc.) or an add-on product (i.e. Storage, Professional Services, etc.)
4. `How will the SKU be sold to Customers?`
    - Identify whether customers can purchase the SKU without assistance from the sales team or will customers purchase with assistance from a sales rep
    - Cross-functional Approval from Fulfillment required for Self-servce
    - If required, the SKU can be sold both Self-serve and Sales-assisted
5. `What GitLab product features should this SKU enable?`
   - Identify which GitLab product feature(s) need to be enabled for this SKU
   - Cross-functional Approval from Fulfillment required for any product features
6. `What type of GitLab instance will this SKU support? Please check any applicable boxes below:`
   - Identify which GitLab instance(s) can purchase this SKU.
   - If required, multiple options can be selected
7. `Will we have restrictions on the type of subscriptions (i.e. SaaS, Self-Managed, Premium, Ultimate, etc.) this product offering can be added to?`
   - Identify whether only specific types of customers can purchase this SKU
   - Cross-functional Approval from SalesOps required for any restrictions
   - Please note this will increase time for a SKU to be available for quoting as additional development work outside of configuring the SKU will be required
8. `Are there restrictions to the minimum or maximum quantity of this SKU?`
   - Identify whether customers can only purchase this SKU if they meet a minimum or maximum requirement (i.e. number of seats, storage, licenses, etc.)
   - Cross-functional Approval from SalesOps required for any restrictions
   - Please note this will increase time for a SKU to be available for quoting as additional development work outside of configuring the SKU will be required
9. `Will renewals be handled via the webstore (self-service) or only by a sales rep (sales-assisted)?`
    - **This only applies to recurring products** as subscriptions renew with recurring SKUs if it is not removed prior to renewal
    - Identify whether customers can renew their subscription without assistance from the sales team or if the customer must go through a sales rep
    - If required, both options can be selected
10. `Should we allow customers to automatically renew with this SKU?`
    - **This only applies to recurring products** as subscriptions renew with recurring SKUs if it is not removed prior to renewal
    - Identify whether customers should be allowed to automatically renew their subscription with this SKU
11. `Will this SKU replace any of GitLab's current product offerings?`
    - Identify whether this SKU will be replacing a current SKU being sold to customers
    - If this new SKU replaces a current SKU, please follow open an issue in [this directory](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/new#) to retire the current SKU using the `CM: Retire_SKU` template (see **[How to Retire a SKU](#how-to-retire-a-sku)**

**SKU Configuration Requirements**

In the issue template, three asterisks are considered a "non-standard" configuration request and **will require additional Cross-functional approvals from Fulfillment and Sales Operations.**
{: .alert .alert-warning}

1. `Rate Plan Name`
    - This is the customer facing name of the SKU. The `Rate Plan Name` should be in the format of `Deployment type - Name`. Some examples:
   1. `Self Managed - Ultimate`
   1. `SaaS - Ultimate`
   1. `Dedicated - Ultimate`
1. `Rate Plan Charge Description`
    - For webstore checkout, this is a short description displayed to customers
    - For sales-assisted, this is a short description of the product displayed when quoting
    - A URL to the service description is typically included here for professional services SKUs
1. `Charge Type:`
    - There are 3 charge types. Select the correct one for your use case based on the explanation below:
    - Recurring Charges: a charge that is billed on a regular basis until removed from a Subscription.
    - One-Time Charges: a charge that is only billed once.
    - Usage Charges: a charge that is billed in arrears based on consumption.
    - Please note that if `Usage` is selected, fill out the `Any Included Units?` section to identify if there will be any units included in the charge, for example: *phone plan with 1000 included minutes with overage fees after*.
1. `Charge Model:`
   - There are 4 charge models. Select the correct one for your use case based on the explanation below:
   - With `Per Unit Pricing` the product/service is priced per unit of measure (UOM).
   - With `Flat Fee` the product/service is a single fixed price per purchase.
   - With `Tiered` the product/service is progressively priced as volume changes.
   - With `Volume` the product/service is priced based on the volume purchased.
1. `Unit of Measure (UOM):`
    - Select an existing UOM to be used for this SKU; the most common unit of measure is `Seat`
    - Select `Other` if your need is related to a different UOM and name it
    - If your product will be a `Flat Fee` Charge Model, this section is not applicable
1. `Charge Timing:` How is the Customer expected to pay?
   - Select how the Customer is expected to pay for this SKU
1. `List Price:`
   - Add the dollar amount price of the SKU. If a unit of measure is associated to this SKU, explain the dollar amount per UOM (Example: *$250/seat/quarter*)

**Revenue Recognition Requirements**

- Assign Makesh Subramanian `@msubramanian` for input on the Invoicing, Revenue, and Custom Fields sections
- This is required to configure the SKU and properly recognize revenue

**Taxation Requirements**

- Assign Sally Tian `@stian13` for input on the Taxation section and include a service description to help them identify the correct tax code to use
- This is required to configure the SKU and properly collect sales tax

**Data Requirements**

- Assign Sushma N `@snalamaru` and Israel Weeks `@iweeks` for input on the Product Tier, Delivery, and Deployment fields for this offering based on the definitions in the [GitLab Handbook](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/tiers/)
- This is required to configure the SKU and ensure data integrity

### Step 2. Cross-functional Approval For Pricing and Non-Standard Requests

**Pricing approval is always required.** Additional approvals from Fulfillment and Sales Operations may be required based on the requirements requested in the prior step.
{: .alert .alert-warning}

**Pricing approval ALWAYS required**:

- Provide a link to the Cost of Goods Sold (COGS) spreadsheet (Make a copy of [this template](https://docs.google.com/spreadsheets/d/1em_4RiKOzvA3W9N4FxjmDxH6Rtr4my_o6ZifSXEWz0o/edit#gid=1853638008))
- Provide a justification if project margins are below 55% for internally delivered services
- Obtain approval from the `Senior Director of Product Monetization`

**Fulfillment approval required if**:

- Proposed SKU (meant to be) sold to Customers: `Self-serve`
- Subscription with the proposed SKU (meant to) have specific behavior for self-service subscription modifications (for example, no self-service renewal)
- Any non-standard (***) Charge Type, Charge Model, Charge Timing requests
- Proposed SKU (meant to) provision specific product features to the customer (SaaS or SM)
- Obtain approval from the `Fulfillment Product Managers`

**Sales Operations approval required if**:

- If SKU has limited quoting availability (only available to sell by certain groups)
- Any non-standard (***) Charge Type, Charge Model, Charge Timing requests
- Obtain approval from the `Senior Manager of Deal Desk`

### Step 3. Finance

Finance Approval is required for any **non-standard revenue recognition approach**. The Business Sponsor should communicate with the directly responsible individual (DRI) for input in Step 3.

### Step 4. Management Approvals

Assign the Issue to the management approvers in Step 4. It is the Business Sponsor's responsibility to ensure all prior requirements and approvals are obtained before progressing to Step 5.

The required approvals will differ depending on whether it is a Professional Services SKU or a Non-Professional Services SKU request and how to reach each approver can be found in the applicable SKU issue template.
{: .alert .alert-warning}

{{% panel header="**Next Steps**" header-bg="success" %}}

- After all above steps are complete and required approval have been obtained, remove the ~"SKU - Gathering Requirements" label and tag `@gitlab-com/business-technology/enterprise-apps/financeops` for intake and prioritization of the SKU request so that it can be configured in the Zuora Billing product catalog and made quotable in Salesforce. Please note that all changes must follow the [Business Technology Change Management](/handbook/business-technology/change-management/) for SOX/Audit purposes.
- If the SKU will be sold through the channel, assign the issue to the `Sales Operations Analyst` listed in Step 6 to add the SKU to the quarterly update issue, the upcoming Pricebook and any other necessary information
- If the SKU requires a service description, it is the Business Sponsor's responsibility to complete step 7
{{% /panel %}}

## Post Go Live SKU Modifications

This section outlines what information can or cannot be modified after the SKU has been configured in Zuora Billing.

### Modifiable Information

1. Price
2. Name (Product, Product Rate Plan, Product Rate Plan Charge)
3. Revenue recognition rules: can be modified in conjunction with the Revenue Team
4. Zuora Revenue fields
5. Unit Of Measure
6. Tax Code

### Information that Cannot Be Modified

1. Zuora IDs (used by Fulfillment and Data)
2. Charge Type (One-Time, Recurring, Usage)
3. Charge Model (Flat Fee, Per Unit)

### Information Advised Not to Change

1. **The number of charges per Rate Plan.**
    - For example, if we have 2 charges per rate plan (license and service), we would not advise adding an additional charge (for storage, for example) to this Rate Plan
    - Existing customers would not receive the additional "charge", although all customers on a go-forward basis would

## How to Retire a SKU

It is the Business Sponsor's responsibility to provide information and obtain required approvals are obtained for each Step prior to progressing forward in the SKU retirement process. Any missing or incomplete fields will result in a delay to the review and/or approval of your SKU retirement request. **Please assign the SKU Request issue to yourself by clicking on the `Edit` button on the right-hand panel of the issue.**
{: .alert .alert-warning}

### Step 1. Product Information

**Identify Rate Plans to be retired**

- In this section, list all the rate plan IDs that need to be retired.

**When is the SKU expected to be retired**

- Provide a specific date of when the new SKU is expected to be retired.
- Please note that helps with intake and prioritization of the request and does not necessarily mean the SKU will be ready for sale by this date

### Step 2. Stakeholder Approval for SKU Retiring

The required approvals will differ depending on whether it is a Professional Services SKU or a Non-Professional Services SKU request and how to reach each approver can be found in the applicable SKU issue template.
{: .alert .alert-warning}

**Approval Required Based on Request Type**

- If retiring Professional Services SKUs, tag the `Senior Director of Education Services` or `Director of Professional Services`
- If retiring Non-Professional Services SKUs, tag the Fulfillment Product Managers `@gitlab-org/fulfillment/product-managers`

**Approval Required for ALL SKU Retirement Requests**

- For Sales, tag the `Senior Director of Sales Operations`
- For Sales Operations, tag the `Senior Manager of Deal Desk`
- For Finance, tag the `Senior Director of Revenue Accounting`

### Step 3. Business Technology to Retire SKU in Zuora & Salesforce

Once all of the above steps are complete and required approval are obtained, please remove the ~"SKU - Gathering Requirements" label and tag `@gitlab-com/business-technology/enterprise-apps/financeops` for intake and prioritization of the SKU retirement request so that it can be deprecated in the Zuora Billing product catalog and no longer quotable in Salesforce.

Please note that all changes must follow the [Business Technology Change Management](/handbook/business-technology/change-management/) for SOX/Audit purposes.
{: .alert .alert-warning}

## FAQ

1. **How long does it take to create a SKU?**
    - Several factors influence the length of time for a SKU to be created and made quotable
    - Unclear business requirements will significantly increase the length of time and why all steps of the [Product Launch Process](/handbook/product/product-processes/product-launch/) needs to be completed prior to requesting a new or updated SKU issue.
    - The complexity of the SKU (the charge type, how it is sold, guided selling rules/restrictions, etc.), the Business Sponsor's ability to obtain approvals from stakeholders, and any other development work required to support the SKU are additional influences on the delivery time.
2. **What are Non-Standard Requests?**
    - They are SKU configurations that GitLab typically does not support/has not supported in the past and are marked by three asterisks (***) in Step 1 Product Information of the SKU process.
3. **Who is responsible for obtaining approvals for my new SKU request?**
    - It is the Business Sponsor's responsibility to ensure all required information and appropriate approvals are obtained for each Step prior in the SKU process.
4. **Where can I find the issue templates described in this handbook page?**
    - There are 3 issue templates in this [directory](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/new#) that the user can choose from to help log their request.
5. **What information can be changed after the SKU goes live?**
    - Please refer to [Post Go Live SKU Modifications](#post-go-live-sku-modifications) section of this handbook page
6. **Can we just configure the SKU in production and skip the sandbox?**
    - Unfortunately, no. For SOX/audit purposes, all changes to the Zuora Billing product catalog must be properly tested, adhering to [Business Technology Change Management](/handbook/business-technology/change-management/) policies and the [Software Development Lifecycle Process for Finance Systems](https://gitlab.com/groups/gitlab-com/business-technology/enterprise-apps/financeops/-/wikis/SDLC-for-Finance-Systems).
7. **I only want to update the name/description of an existing SKU, do I need to go through this entire process?**
    - If you are not changing the charge type, unit of measure, charge model, charge timing or list price then you can simply submit an issue in [this directory](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/new#) using the template `CM: Configuration Change [Generic]` and fill out the `Requestor` section.
