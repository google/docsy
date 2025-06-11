---
title: Techstackguidereference
doc_type: doc
doc_id: doc-375
last_edited_date: '2025-05-25'
last_edited_by: Ryan Laird
version: '1.0'
---

# Tech Stack Guide Reference

Reference for how to create and maintain Tech Stack Guides.
## What Is A Tech Stack Guide?
> 
Every application should have a dedicated `Tech Stack Guide` handbook page to help everyone understand how the app is used, administered, and integrated with other systems. The audience of the Tech Stack Guide is anyone who needs to use the app, extend it, work with it, or understand how it fits into the rest of the GitLab Tech Stack ecosystem. Creation and maintenance of each Guide is a team effort and requires collaboration between the business system owner, technical owner, and others involved in implementation and operations. Each Tech Stack Guide lives within the Business Owner’s Functional section of the handbook, along with other Function-based handbook content.
## Approach
The goal of this page is to describe how to document an application’s `Tech Stack Guide`. **An apps Tech Stack Guide should live with the Functional Business Owner of the technology**. Our SSOT for all apps will be the [Tech Stack YAML](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) and the YAML will populate key portions of the page. However, other sections of the page can be populated that are not included in the YAML file as needed to ensure that the documentation is complete such as Data Model, Integrations, Key Reports/Dashboards.
Here’s how to think about the relationship between the Tech Stack YAML nd the Tech Stack Guide:
- The Tech Stack YAML is a registry of all apps GitLab owns or operates (the What)
- A Tech Stack Guide covers the business and technical workflows (the Why and How) of each Tech Stack app
- The `handbook_link` key/property in the YAML links to the corresponding Tech Stack Guide(s)
We also plan to have a second YAML file for our security applications called the Security Stack YAML that lives in the internal handbook. We will use the same template approach for these applications.
Tech Stack Guide Template
## Tech Stack Application Name
The Tech Stack single source of truth is the [Tech Stack YAML](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) and contains more detail about this app.
[Unsupported block type: code]
### Implementation
Information about how the app was implemented, including links to GitLab epics and issues to help people understand where we started and how we arrived at this solution.
### System Diagram
Include some form of a diagram to illustrate how the system is deployed and what other apps it may be connected to. A [Mermaid Diagram(s)](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/#/edit/) is ideal, but any diagram is better than none.
### Data Model
Include some form of an ER Diagram to illustrate the key data objects and their relationships with each other. You can create one with (ideally) [Mermaid ER diagram](https://mermaid-js.github.io/docs/mermaid-live-editor-beta/), LucidChart, or any other diagramming tool.
### Integrations
List the integrations between this app and other tech stack apps or systems. Include links to additional material if available, including the development project, code, diagrams, and issues.
### Key Reports / Dashboards
List the important reports and dashboards used to operate the application, including links where available.
## Tech Stack Guide Example #1: Thought Industries LMS Tech Stack Guide
[Thought Industries LMS Tech Stack Guide](https://handbook.gitlab.com/handbook/customer-success/professional-services-engineering/education-services/lms/)
Important Notes:
1. This Tech Stack Guide lives in the [GitLab Professional Education Services](https://handbook.gitlab.com/handbook/customer-success/professional-services-engineering/education-services/) handbook because Professional Services are the business owners of the app
1. The `handbook_link` key in the [Tech Stack YAML](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) for Thought Industries Learning Management System references the Tech Stack Guide
## Tech Stack Guide Example #2: Zuora Billing
### Code
[Unsupported block type: code]
### Result
The Tech Stack single source of truth is the [Tech Stack YAML](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) and contains more detail about this app.
### Implementation
Zuora consists of several app modules built on the [Zuora Central Platform](https://www.zuora.com/products/zuora-platform/). [Zuora Billing](https://www.zuora.com/products/billing-software/) is one of these modules.
### System Diagrams
[Zuora Billing](https://www.zuora.com/products/billing-software/) is one of several modules within the larger [Zuora Central Platform](https://www.zuora.com/products/zuora-platform/).
### Quote to Cash workflow
Zuora Billing is a central module within the [**Quote to Cash workflow**](https://handbook.gitlab.com/handbook/business-technology/enterprise-applications/entapps-crm/quote-to-cash/#quote-to-cash-introduction) and interfaces with many other apps.
[Unsupported block type: code]
### Lead to Cash workflow
Zuora Billing is a key module within the [**Lead to Cash workflow**](https://handbook.gitlab.com/handbook/business-technology/enterprise-applications/entapps-crm/quote-to-cash/#lead-to-cash-flow).
[Unsupported block type: image]
Lead to Cash Workflow
### Key Reports / Dashboards
For Zuora Billing, the team uses [Zuora Standard Reports](https://knowledgecenter.zuora.com/Zuora_Platform/Data/Reporting/AB_Reporting_Quick_Reference/C_Standard_Reports) and the most important reports are:
- ELP Changes
- Accounts with subscriptions to be canceled in the next 30 days
- Credit memos over time
We also have a collection of Tableau dashboards that include Zuora Data. These dashboards include data from other data sources such as Salesforce.
### Data Model
The [Zuora Billing business object model](https://knowledgecenter.zuora.com/Get_Started/Zuora_business_object_model) presents how Zuora is organized internally.
[Unsupported block type: image]
Zuora Billing Data Model
### Key Data Objects
Zuora is the SSOT for these objects and the data can be viewed there. In addition, key objects can be viewed in Snowflake:
- **Raw Data:** [`zuora.*`](https://gitlab-data.gitlab.io/analytics/#!/source_list/zuora). Key objects include: 
- **Modeled Data:** [Bus Matrix](https://docs.google.com/spreadsheets/d/1j3lHKR29AT1dH_jWeqEwjeO81RAXUfXauIfbZbX_2ME/edit#gid=430467333). Key objects include: 
### Product catalog
The Zuora Enterprise App Guide contains a [Product Catalog to manage all of GitLab’s SKUs](https://handbook.gitlab.com/handbook/business-technology/enterprise-applications/guides/zuora/#product-catalog).
### Integrations
[Unsupported block type: code]
### Zuora to Salesforce
Zuora Data to Salesforce via Zuora CPQ
### Customers Dot to Zuora Billing
CustomersDot data to Zuora via [IronBank GEM](https://gitlab.com/gitlab-org/customers-gitlab-com/-/tree/main/#ironbank) using the [Zuora Subscribe API](https://developer.zuora.com/v1-api-reference/introduction/#tag/Subscriptions) and [Zuora Amend API](https://developer.zuora.com/v1-api-reference/introduction/#tag/Amendments) * [Orders Harmonization plans to transition](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/intake/-/issues/616) to the [Zuora Orders API](https://developer.zuora.com/v1-api-reference/introduction/#tag/Orders)
### Zuora to Snowflake
Zuora Data to [Snowflake Enterprise Data Warehouse](https://handbook.gitlab.com/handbook/enterprise-data/platform/#our-data-stack) with the [Stitch Zuora Integration](https://www.stitchdata.com/integrations/zuora)
### Zuora to NetSuite
Zuora Revenue data is synced to NetSuite using the [Zuora Revenue to NetSuite Integration](https://gitlab.com/gitlab-com/business-technology/enterprise-apps/integrations/platypus/-/wikis/Integrations/Zuora-Revenue-to-Netsuite).
