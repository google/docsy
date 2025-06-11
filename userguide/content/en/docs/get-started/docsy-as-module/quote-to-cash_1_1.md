---
title: "Quote to Cash"
description: "GitLab's Quote to Cash systems and processes"
---

## Overview

The Quote-to-Cash (O2C) process encompasses `Customer Account Management`, `Order Fulfillment`, `Billing`, and `Accounts Receivable` functions. The coordination of this process is owned by the Enterprise Applications team.

This is a cross-functional page which is meant to be the source of truth for our Quote to Cash (Q2C) systems and underlying data systems and processes.

An efficient Quote-to-Cash system makes purchasing, activating, and managing GitLab subscriptions as easy as possible.

- Improves `customer satisfaction`, and also `streamlines our go-to-market (GTM) processes` and accelerates `revenue growth` for the company.
- Ensures `consistency` between the data for some of the most critical business objects/entities across all the Source Systems.
- `Master Data Objects` for all core business critical objects will have same definitions and data across all the systems.
- Proper `alignment/sync` exists between all the data source systems - Zuora, CustomerDot, SFDC and GitLab.com along with 1:1 mapping between Zuora Billing Object Model and CustomersDot.
- Improves `data quality` and ensures a `single lineage` for understanding the paid namespace conversion journey, the first paid subscription for a given namespace, free/trial to paid conversion analysis etc.

## Teams

Quote-to-Cash system projects and initiatives often require close collaboration across functions and teams. The teams most often involved include: [Enterprise Applications](/handbook/business-technology/enterprise-applications/), [Billing Ops](/handbook/finance/accounting/finance-ops/billing-ops/), [Fulfillment](https://about.gitlab.com/direction/fulfillment/), [Field Operations](/handbook/sales/field-operations/), [Support](/handbook/support/readiness/operations/), and [Data](/handbook/business-technology/data-team/).

## Systems

The Q2C systems consists of several systems including Salesforce, Zuora (CPQ, 360, Billing, Revenue), CustomersDot, and NetSuite.

### Salesforce

- Salesforce is used as our CRM tool for managing customer Leads, Contacts, Accounts, Opportunities and Quotes.
- Salesforce is owned by the [Enterprise Applications](/handbook/business-technology/enterprise-applications/) team at GitLab, and implements changes from the process owners.
- The [Quoting process](/handbook/sales/field-operations/order-processing/#quote-configuration) itself is owned by the [Deal Desk team](/handbook/sales/field-operations/sales-operations/deal-desk/).

### Zuora CPQ

- Zuora CPQ is our Configure, Price, Quote tool used for Sales Assisted deals
- Zuora CPQ is a managed package in Salesforce that has been extended for Quote Approvals by [Enterprise Applications](/handbook/business-technology/enterprise-applications/)
- The [Quote Approval process](/handbook/sales/field-operations/order-processing/#standard-quote-approval) itself is owned by the [Deal Desk team](/handbook/sales/field-operations/sales-operations/deal-desk/).

### Zuora 360

- Zuora 360 is a stock connector between Zuora and Salesforce, is transfers Zuora subscription information to Salesforce.
- Zuora 360 the job is owned by [Enterprise Applications](/handbook/business-technology/enterprise-applications/), the extension of Zuora Subscription data in Salesforce for Add-ons and Renewals deal is also owned by [Enterprise Applications](/handbook/business-technology/enterprise-applications/).
- The [Add-On](/handbook/sales/field-operations/sales-operations/deal-desk/#amend-subscription-quote) and [Renewal](/handbook/sales/field-operations/sales-operations/deal-desk/#renew-subscription-quote) processes are owned by the [Deal Desk team](/handbook/sales/field-operations/sales-operations/deal-desk/).

### Zuora Billing

- Zuora is used as our billing and revenue tool for managing customer subscriptions, payments and invoicing.
- Zuora is owned by the [Enterprise Applications](/handbook/business-technology/enterprise-applications/) team at GitLab.
- The Billing process itself is owned by the [Billing Operations](/handbook/finance/accounting/finance-ops/billing-ops/) team

### Zuora Revenue

- Zuora Revenue is our automated revenue recognition application that meets current and future U.S. GAAP, including the new ASC 606 and IFRS 15 revenue standards.

### CustomersDot (Customers Portal)

- CustomersDot is used when the customer logs in to manage their subscriptions
- GitLab engineers created CustomersDot and it is owned by the [Fulfillment team](/handbook/engineering/development/fulfillment/)
- CustomersDot integrates with Zuora to enable self-service purchasing and subscription management

### NetSuite

- NetSuite is the company Enterprise Resource Planning (ERP) system, which is primarily managed by the Finance team.
- The platform allows enhanced dimensional reporting as well as multi-currency and multi-entity reporting. This is where the General Ledger resides and all financial activity is ultimately recorded, which is critical to reporting the financial health of the company.

## Architecture

![ltc-landscape](/handbook/company/ltc-landscape.png)

## Data Objects

### Equivalent Data Objects

This table shows the equivalent data objects across systems:

| GitLab           | CustomersDot     | Zuora        | SFDC                |
|------------------|------------------|--------------|---------------------|
| Organization     | BillingAccount   | Account      | BillingAccount      |
| User             | User             | Contact      | Contact             |
| -                | Order            | Order        | Opportunity & primary quote |
| -                | Subscription     | Subscription | Subscription |
| License          | License          | -            | -                   |
| -                | Cloud Activation | -            | -                   |

Note: In SFDC, a [SFDC BillingAccount](https://help.salesforce.com/s/articleView?id=sf.blng_billing_accounts.htm&type=5) is not the same as a SFDC Account. A [SFDC Account can have many BillingAccounts](https://architect.salesforce.com/diagrams/framework/data-model-notation#Record_Type_Entity).

Note: The Order object in CustomersDot is not the same as the Order object in Zuora, they have different definitions. Orders in CustomerDot are more like subscriptions in Zuora than they are Orders in Zuora. More architecture and definition work needs to be done on the Order object in CustomersDot.

More information about the User and Contact objects shown in the table above, and how they interact together, can be found in [this workflow documentation](../flows/user_contact_flows.md).

### CustomerDot Object Model

The following is a focused view of the database ERD for the newly proposed data architecture.

```mermaid
erDiagram
  CustomersDotUser ||--o{ CustomersDotBillingAccountMembership : "has many"
  CustomersDotUser ||--o{ ZuoraContact : "has many"
  CustomersDotBillingAccount ||--o{ CustomersDotBillingAccountMembership : "has many"
  CustomersDotBillingAccount ||--o{ CustomersDotCloudActivation : "has many"
  CustomersDotBillingAccount ||--o{ CustomersDotLicense : "has many"
  CustomersDotBillingAccount ||--o{ CustomersDotOrder : "has many"
  CustomersDotBillingAccount ||--|| GitLabOrganization : "has one"
  CustomersDotCloudActivation ||--o{ GitLabCloudActivation : "has many"
  CustomersDotLicense ||--o{ GitLabLicense : "has many"
  CustomersDotUser ||--|| GitLabUser : "has one"
  CustomersDotOrder ||--o{ CustomersDotSubscription : "has many"
  CustomersDotSubscription ||--|| ZuoraSubscription : "has one"
  GitLabUser ||--o{ GitLabMember : "has many"
  GitLabOrganization ||--o{ GitLabMember : "has many"
  GitLabOrganization ||--o{ GitLabLicense : "has many"
  GitLabOrganization ||--o{ GitLabCloudActivation : "has many"
  ZuoraAccount ||--o{ ZuoraContact : "has many"
  ZuoraAccount ||--o{ ZuoraPaymentMethod : "has many"
  ZuoraAccount ||--o{ ZuoraOrder : "has many"
  ZuoraAccount ||--o{ ZuoraSubscription : "has many"
  ZuoraOrder ||--o{ ZuoraSubscription : "has many"
  ZuoraAccount ||--|| CustomersDotBillingAccount : "has one"
  SFDCAccount ||--o{ ZuoraAccount : "has many"
  SFDCAccount ||--o{ CustomersDotBillingAccount : "has many"

  CustomersDotBillingAccount {
    bigint id
    string zuora_account_id
    string zuora_account_name
    string zuora_account_number
    string zuora_account_entity
    string zuora_account_vat_id
    string salesforce_account_id
    timestamp created_at
    timestamp updated_at
  }
  CustomersDotBillingAccountMembership {
    bigint id
    bigint user_id
    bigint billing_account_id
    timestamp created_at
    timestamp updated_at
  }
  CustomersDotUser {
    int id
    string first_name
    string last_name
    datetime created_at
    datetime updated_at
    string email
    string encrypted_password
    string reset_password_token
    datetime reset_password_sent_at
    datetime remember_created_at
    integer sign_in_count
    datetime current_sign_in_at
    datetime last_sign_in_at
    inet current_sign_in_ip
    inet last_sign_in_ip
    string provider
    string uid
    string country
    string state
    string city
    string zip_code
    string vat_code
    string company
    boolean billable
    string access_token
    string confirmation_token
    datetime confirmed_at
    datetime confirmation_sent_at
    string unconfirmed_email
    string address_1
    string address_2
    string company_size
    string authentication_token
    string phone_number
    boolean login_activated
    string refresh_token
    datetime_with_timezone access_token_expires_at
    datetime_with_timezone token_refresh_last_attempted_at
  }
  CustomersDotCloudActivation {
    bigint id
    bigint billing_account_id
    string activation_code
    string subscription_name
    boolean super_sonics_aware
    datetime seat_utilization_reminder_sent_at
    timestamp created_at
    timestamp updated_at
  }
  CustomersDotLicense {
    bigint id
    bigint billing_account_id
    uuid license_file_md5
    bigint creator_id
    datetime_with_timezone created_at
    datetime_with_timezone updated_at
    datetime_with_timezone last_synced_at
    datetime_with_timezone next_sync_at
    integer users_count
    integer previous_users_count
    integer trueup_quantity
    date expires_at
    date starts_at
    date trueup_from
    date trueup_to
    boolean trial
    boolean cloud_licensing_enabled
    string plan_code
    string plan_name
    string zuora_subscription_id
    string email
    string name
    string company
    string zuora_subscription_name
    text notes
    text license_file
    datetime_with_timezone activated_at
    boolean auto_renew_enabled
    boolean seat_reconciliation_enabled
    boolean operational_metrics_enabled
    boolean reconciliation_completed
    boolean offline_cloud_licensing_enabled
  }
  CustomersDotOrder {
    int id
    bigint billing_account_id
    string zuora_product_rate_plan_id
    string zuora_subscription_id
    string zuora_subscription_name
    date start_date
    date end_date
    integer quantity
    datetime created_at
    datetime updated_at
    string gl_namespace_id
    string gl_namespace_name
    string amendment_type
    boolean trial
    datetime last_extra_ci_minutes_sync_at
    string zuora_account_id
    datetime increased_billing_rate_notified_at
    boolean reconciliation_accepted
    integer trial_extension_type
    string source
    datetime_with_timezone seat_overage_notified_at
    datetime_with_timezone auto_renew_error_notified_at
  }
  CustomersDotSubscription {
  }
  ZuoraAccount {
    string crm_id
  }
  ZuoraContact {
  }
  ZuoraSubscription {
  }
  ZuoraPaymentMethod {
  }
  SFDCAccount {
  }
  GitLabLicense {
  }
  GitLabCloudActivation {
  }
  GitLabOrganization {
  }
  GitLabMember {
  }
  GitLabUser {
  }
  ```

### Zuora Billing Object Model

Zuora provides a diagram of the relationships of [Zuora's Billing Object Model](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/A_Zuora_Billing_business_object_model)

![Zuora Billing Object Model](/handbook/company/zuora_billing_object_model.png)

To reduce the amount of data issues across our systems, our goal is to try to ensure we have a 1:1 mapping between Zuora Billing Object Model and CustomersDot.

### Zuora and Salesforce Integrated Object Model

[Zuora CPQ](https://knowledgecenter.zuora.com/CPQ/A_Zuora_CPQ/A2_Zuora4Salesforce_Object_Model) is used to connect Zuora with Salesforce.

![Zuora Salesforce ERD](/handbook/company/zuora_salesforce_erd.jpeg)

### Billing Account Master Data Object

`Billing Account` is a core business entity that holds a paying customer’s most critical account information such as their contact details, payment terms, and payment methods. And this information is used to track subscriptions, amendments, and transactions, such as invoices and payments. The data from this Master Data Object is actively being used in several GTM, Product Usage and Data science Propensity models to understand the billing information of paid customers better etc..

First, we focussed on improving the data architecture alignment between Zuora Billing Accounts and CDot Billing Accounts in order to proceed with developing a `Conformed Dimension` for `Billing Account Entity`.

The `Customer` model in CDot has known design flaws as it represents a combination of both a Contact (individual user) and an Account (organization).  Research for this epic can be found in [this Spike issue](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/1874).

## Projects

THe following are architecture projects undertaken by Quote to Cash teams to better align systems.

### Fulfillment data architecture plan

The Fulfillment Team is re-architecting our Quote 2 Cash Systems, in particular CustomersDot, in a way that promotes more reliability, sustainability, and flexibility. This handbook page serves as the SSOT for the Q2C systems with links back to functional department pages and artifacts.

1. Fulfillment SSOT Plan: [data_architecture](/handbook/company/quote-to-cash/#billing-account-master-data-object)
1. Central Data Team SSOT Plan: [data_architecture](/handbook/company/quote-to-cash/#data-architecture-plan)
1. Sales Systems SSOT Plan: To be added
1. Enterprise Apps SSOT Plan: [data_architecture](/handbook/company/quote-to-cash/#billing-account-master-data-object)

Zuora serves as the source of truth for `Zuora Account` and `Zuora Contact` data once a Subscription is purchased. Prior to a purchase, a user can register for CDot which creates a `CustomersDot User` record that isn't associated with an `CustomersDot BillingAccount` (because it doesn't exist yet).  Once purchased, the `CustomersDot BillingAccount` record is created along with the related `CustomersDot BillingAccountMembership`.

Given that `CustomersDot User`/`Zuora Contact` and `CustomersDot BillingAccount`/`Zuora Account` information can be edited by users directly in CDot or directly in Zuora (or indirectly via SFDC), we need to be mindful of syncing this data between CDot and Zuora.  In particular, if we can't use Zuora callouts to keep the `CustomersDot BillingAccount` and `CustomersDot User` records in sync, we will explore [Zuora Custom Events](https://knowledgecenter.zuora.com/Central_Platform/Events_and_Notifications/A_Z_Custom_Events).

A `CustomersDot User` record in CDot is tied to one email address.  This email address can be associated with multiple `Zuora Account`s, and therefore have multiple `Zuora Contact`s.  Each of these `Zuora Contact`s could be modified independently.  For instance, a billing admin may choose to change the address for Contact A for the billing entity in the US, but not choose to change the address for Contact B (associated with the same email address) for the billing entity in Europe.  For this reason, contact metadata could eventually be stored on the `CustomersDot BillingAccountMembership` model, but we are choosing to keep this lightweight to begin with to reduce scope. We will start by fetching this data from Zuora.

#### CustomersDot BillingAccount management

[Introduce CustomersDot BillingAccount](https://gitlab.com/groups/gitlab-org/-/epics/8331)

- [Improve Bill To / Sold To Contact Management in CustomersDot Admin](https://gitlab.com/groups/gitlab-org/-/epics/9831) - Completed
- [Iteration 1A: Align CustomersDot BillingAccounts and Users to Zuora objects](https://gitlab.com/groups/gitlab-org/-/epics/8950) - Completed
- [Iteration 1B: A single CustomersDot BillingAccount can have multiple CustomersDot Users](https://gitlab.com/groups/gitlab-org/-/epics/8951) - 90% Complete
- [Iteration 1C : A single CustomersDot User can have multiple BillingAccounts](https://gitlab.com/groups/gitlab-org/-/epics/8986) - Not Started
- [Iteration 1D: Clean up legacy data objects](https://gitlab.com/groups/gitlab-org/-/epics/8949) - Not Started

#### Background

In this epic, the focus is on improving the data architecture of CustomersDot to better align with Zuora Billing Accounts. The `Customer` model in CDot has known design flaws as it represents a combination of both a Zuora Contact (individual user) and a Zuora Account (organization).

#### Problem

Currently CustomersDot (CDot) has a data object for `Customer` (e.g. `customers` DB table) which serves a few different functions:

- A user (with a unique email address) that can login CustomersDot
- Contact information related to a physical person within a Company with metadata like first and last name, email, mailing address, etc.
- Company information that is associated with a Zuora Account with company name.

It is important to note that a Zuora Account maps to a company/customer account which can have many users or contacts. It should not map to one user in particular.  In the current architecture, a `zuora_account_id` can be shared with more than one Customer but this isn't ideal.  We need to have an architecture that accurately reflects the data structure from Zuora and our business model.  In CustomersDot, we need to have a data architecture that accurately reflects [Zuora's Billing Objects Model](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/A_Zuora_Billing_business_object_model).

#### Examples of issues this could benefit

1. [CDot Issue #3626](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/3626)
1. [GL Issue #332236](https://gitlab.com/gitlab-org/gitlab/-/issues/332236)
1. [Epic #2160](https://gitlab.com/groups/gitlab-org/-/epics/2160)
1. [CDot Issue #242](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/242)
1. [CDot Issue #695](https://gitlab.com/gitlab-org/customers-gitlab-com/-/issues/695)
1. [GL Issue #338546](https://gitlab.com/gitlab-org/gitlab/-/issues/338546)

#### Plan

We recommend adding a few new models to the CustomersDot data architecture to better reflect the Zuora data structure.

Most importantly, CDot lacks a model for the `CustomersDot BillingAccount` (aka. "Company" / "Billing Entity").  Adding this model will allow us to separate the data currently in the `CustomersDot Customer` model that belongs at a BillingAccount level (see below for an example). We will also be renaming `CustomersDot Customer` model to `CustomersDot User` as the current naming is a bit confusing due to Salesforce having a different definition for what a [Salesforce Customer](https://developer.salesforce.com/docs/atlas.en-us.240.0.object_reference.meta/object_reference/sforce_api_objects_customer.htm) is.

- `zuora_account_id`
- `company_name`
- `vat_code`
- `salesforce_account_id`

Additionally, we can add a join table (e.g. `billing_account_memberships` table) between the `CustomersDot BillingAccount` and `CustomersDot User` models which will allow a `CustomersDot BillingAccount` to have multiple `CustomersDot User`s.  Likewise, a `CustomersDot User` could be associated to many `CustomersDot BillingAccount`s.

With this data structure, CDot should consider the data structure of `CustomersDot BillingAccount` and `CustomersDot User` as a way of determining which users of CDot should have access to view / manage subscriptions for a `Zuora Account`.  CDot could rely on Zuora for providing the source of truth for who the contacts are for the `Zuora Account` and likely their metadata (e.g. name, address).

Currently, CDot creates a `CustomersDot User` record for the SoldTo contact associated with the Subscription Account.  In this epic, we could also create a `CustomersDot User` record for the BillTo contact as well for the same Subscription Account, but this isn't a requirement.  This will effectively allow both types of contacts to login to CDot and manage the Account's subscriptions.

#### Why do we need the ability to associate a CustomersDot User with many CustomersDot BillingAccounts?

We considered only allowing a `CustomersDot User` to be associated with a single `CustomersDot BillingAccount`, however, we determined that we should build a many-to-many mapping capability because:

1. Zuora currently allows for a single user to map to multiple billing accounts.
1. We see examples in production where this is already happening ([over 1800 user accounts in Zuora currently map to multiple Billing Accounts](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/financeops/finance-systems/-/issues/938#note_1136376435)).

Enabling this will bring parity between CustomersDot and Zuora.

Update: CDot has added `BillingAccount`, `BillingAccountMembership` and `BillingAccountContact` models to align with Zuora Billing models.

#### Source of Truth

Zuora serves as the source of truth for `Zuora Account` and `Zuora Contact` data once a Subscription is purchased. Prior to a purchase, a user can register for CDot which creates a `CustomersDot User` record that isn't associated with an `CustomersDot BillingAccount` (because it doesn't exist yet).  Once purchased, the `CustomersDot BillingAccount` record is created along with the related `CustomersDot BillingAccountMembership`.

Given that `CustomersDot User`/`Zuora Contact` and `CustomersDot BillingAccount`/`Zuora Account` information can be edited by users directly in CDot or directly in Zuora (or indirectly via SFDC), we need to be mindful of syncing this data between CDot and Zuora.  In particular, if we can't use Zuora callouts to keep the `CustomersDot BillingAccount` and `CustomersDot User` records in sync, we will explore [Zuora Custom Events](https://knowledgecenter.zuora.com/Central_Platform/Events_and_Notifications/A_Z_Custom_Events).

A `CustomersDot User` record in CDot is tied to one email address.  This email address can be associated with multiple `Zuora Account`s, and therefore have multiple `Zuora Contact`s.  Each of these `Zuora Contact`s could be modified independently.  For instance, a billing admin may choose to change the address for Contact A for the billing entity in the US, but not choose to change the address for Contact B (associated with the same email address) for the billing entity in Europe.  For this reason, contact metadata could eventually be stored on the `CustomersDot BillingAccountMembership` model, but we are choosing to keep this lightweight to begin with to reduce scope.  We will start by fetching this data from Zuora.

#### GitLab.com SSO as the only sign in option for CustomersDot

With GitLab.com SSO as the only sign in option for Customers Portal, we can eliminate the legacy sign up (email and password) and prepare CDot for future integration with a third party e-commerce provider.
Our goal is to streamline the experience between SaaS/self-managed and web direct/sales-assisted customers in how they access their subscription information.

Overall, this will lead to a more secure environment for our customers in CDot and allows us to establish a 1:1 relationship between a CDot customer and a GitLab.com account.

[GitLab.com SSO as the only sign up option for CustomersDot](https://gitlab.com/groups/gitlab-org/-/epics/8905)

- [CDot SSO: Remove email and password sign up](https://gitlab.com/groups/gitlab-org/-/epics/9120)
- [CDot SSO: Enhance experience for first time login to CDot](https://gitlab.com/groups/gitlab-org/-/epics/9156)
- [CDot SSO: Migrate more CDot customers to use the GitLab SSO for login](https://gitlab.com/groups/gitlab-org/-/epics/9155)

#### Align CustomersDot Orders with Zuora Orders

This work focuses on breaking apart the `CustomersDot Order` table and moving towards a data structure that is more representative of the `Zuora Subscriptions` table.

See the [Architecture Blueprint](https://docs.gitlab.com/ee/architecture/blueprints/cdot_orders/) for full details.

[Align CustomersDot Orders to Zuora objects](https://gitlab.com/groups/gitlab-org/-/epics/9748)

- [Phase 1: Implement Zuora Cache Models](https://gitlab.com/groups/gitlab-org/-/epics/11751)
- [Phase 2: Implement Zuora Cache Sync and Backfill](https://gitlab.com/groups/gitlab-org/-/epics/13630)
- [Phase 3: Utilize Zuora Cache Models](https://gitlab.com/groups/gitlab-org/-/epics/11752)
- [Phase 4: Replace CDot Order with Subscription](https://gitlab.com/groups/gitlab-org/-/epics/11753)

### Snowflake Data Warehouse and dbt (data build tool)

We extract data from the Quote to Cash systems towards Snowflake and use dbt to transform the data into data models for reporting and analysis.

#### Data Architecture Plan

The Fulfillment Team is re-architecting our Quote 2 Cash Systems, in particular CustomersDot, in a way that promotes more reliability, sustainability, and flexibility. A significant result of the new architecture will be to have the same customer definition in CustomerDot, Zuora, and Salesforce. This definition is based on the Billing Account in Zuora and the key for the customer is the billing_account_id. It is necessary to re-architect the data model in Snowflake and dbt in order to align the customer definition to CustomersDot data tables. The data models built that model the Zuora and Salesforce systems have the correct customer definition and no rearchitecting needs to happen for those models at this time.

**Important Callouts for the Customer Definition in the Unified Q2C data model:**

1. The unified customer key is the Billing_Account_Id which joins the systems together. The Billing_Account_Id appears on Q2C systems as follows:
    1. `Zuora.Account.Account_Id`
    1. `CustomersDot.Billing_Accounts.Billing_Account_Id`
    1. `Salesforce.Billing_Account.Billing_Account_Id`
    1. `DRAFT: GitLab_Dotcom.Organization.Billing_Account_Id` The Organization Entity Object has not been created yet in GitLab_Dotcom and is still in the validation process. The Billing Account Id Foreign key needs to be determined.
1. The source id data (where the data is originated and is considered the SSOT) for billing_account_id lives in Zuora.
1. The customer definition is only unified for billing accounts that are in Zuora and Salesforce which are generally limited to paying and formerly paying customers and edu/oss customers.
1. The target state for trials is to put them into Zuora. At that time, we would be able to have a unified definition for customers across CustomersDot, Salesforce, and Zuora for their trial to paid activity.
1. The target state for how to unify the customer definition for free customers across the Q2C systems needs to be determined. The quantity of free users presents challenges for putting them into Salesforce and Zuora. This area needs further exploration.
1. The Account object in Salesforce can have customers that will have a billing account or it can have prospect accounts that do not have a billing account.

The Q2C Re-Architecture will be implemented in various phases with a clear communication to the audience and other cross-functional teams on the Expected Outcomes and Deliverables from each phase.

### Conformed Dimensions

`Conformed dimensions` allow facts and measures to be categorized and described in the same way across multiple facts and/or data marts, ensuring consistent reporting across the enterprise.

`Conformed Dimensions` correspond to `Master data` and are critical building blocks of any Data Warehousing Environment.

The below `Master Data objects` for core business entities will be created that can be used in the different applications across the organization, along with their associated metadata, attributes, definitions, roles, connections, and taxonomies.

- Billing Account
- Customer/User
- Organization
- Order
- Lead
- License

The Master Data Objects development work in Snowflake/dbt is tracked in these two Epics: [Billing Account, Orders, Ramps](https://gitlab.com/groups/gitlab-data/-/epics/870) and [Customers, Contacts/Users, Leads](https://gitlab.com/groups/gitlab-data/-/epics/871).

Below is the Entity Relationship Diagram for the Re-architected data model in Snowflake. The Target State tab shows how the business entities we extract from the CustomersDot, Zuora, Salesforce, and GitLab.com source systems connect with each other.

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/c8f1520c-e59b-4551-a9db-bfce88bb84dc" id="0GkOGAjoD_O."></iframe></div>

#### Conformed Dimension Design for Core Business Objects

<details markdown=1>

<summary><b> Billing Account Master Data Object/Entity (Conformed Dimension Design) </b></summary>

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/ce1cb165-8cae-4e91-9d15-34fd59148f8c" id="f7t5DXE_uu7L"></iframe></div>

</details>

<details markdown=1>

<summary><b> Order Master Data Object/Entity (Conformed Dimension Design) </b></summary>

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/a7a3b55a-c33c-4806-b79b-0a0f28917735" id="75t5oZ6PBayn"></iframe></div>

</details>

<details markdown=1>

<summary><b> Customer/User Master Data Object/Entity (Conformed Dimension Design) </b></summary>

<div style="width: 640px; height: 480px; margin: 10px; position: relative;"><iframe allowfullscreen frameborder="0" style="width:640px; height:480px" src="https://lucid.app/documents/embedded/0e46bd1c-0d15-40d4-8755-d2b45bcc4346" id="L6t5L7s2wK5-"></iframe></div>

</details>
