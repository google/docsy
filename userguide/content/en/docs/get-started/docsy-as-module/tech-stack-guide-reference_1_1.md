Reference for how to create and maintain Tech Stack Guides.

## What Is A Tech Stack Guide?

<!-- Unsupported block type: quote -->

Every application should have a dedicated Tech Stack Guide handbook page to help everyone understand how the app is used, administered, and integrated with other systems. The audience of the Tech Stack Guide is anyone who needs to use the app, extend it, work with it, or understand how it fits into the rest of the GitLab Tech Stack ecosystem. Creation and maintenance of each Guide is a team effort and requires collaboration between the business system owner, technical owner, and others involved in implementation and operations. Each Tech Stack Guide lives within the Business Owner’s Functional section of the handbook, along with other Function-based handbook content.

## Approach

The goal of this page is to describe how to document an application’s Tech Stack Guide. An apps Tech Stack Guide should live with the Functional Business Owner of the technology. Our SSOT for all apps will be the Tech Stack YAML and the YAML will populate key portions of the page. However, other sections of the page can be populated that are not included in the YAML file as needed to ensure that the documentation is complete such as Data Model, Integrations, Key Reports/Dashboards.

Here’s how to think about the relationship between the Tech Stack YAML nd the Tech Stack Guide:

- The Tech Stack YAML is a registry of all apps GitLab owns or operates (the What)

- A Tech Stack Guide covers the business and technical workflows (the Why and How) of each Tech Stack app

- The handbook_link key/property in the YAML links to the corresponding Tech Stack Guide(s)

We also plan to have a second YAML file for our security applications called the Security Stack YAML that lives in the internal handbook. We will use the same template approach for these applications.

Tech Stack Guide Template

## Tech Stack Application Name

The Tech Stack single source of truth is the Tech Stack YAML and contains more detail about this app.

<!-- Unsupported block type: code -->

### Implementation

Information about how the app was implemented, including links to GitLab epics and issues to help people understand where we started and how we arrived at this solution.

### System Diagram

Include some form of a diagram to illustrate how the system is deployed and what other apps it may be connected to. A Mermaid Diagram(s) is ideal, but any diagram is better than none.

### Data Model

Include some form of an ER Diagram to illustrate the key data objects and their relationships with each other. You can create one with (ideally) Mermaid ER diagram, LucidChart, or any other diagramming tool.

### Integrations

List the integrations between this app and other tech stack apps or systems. Include links to additional material if available, including the development project, code, diagrams, and issues.

### Key Reports / Dashboards

List the important reports and dashboards used to operate the application, including links where available.

## Tech Stack Guide Example #1: Thought Industries LMS Tech Stack Guide

Thought Industries LMS Tech Stack Guide

Important Notes:

1. This Tech Stack Guide lives in the GitLab Professional Education Services handbook because Professional Services are the business owners of the app

1. The handbook_link key in the Tech Stack YAML for Thought Industries Learning Management System references the Tech Stack Guide

## Tech Stack Guide Example #2: Zuora Billing

### Code

<!-- Unsupported block type: code -->

### Result

The Tech Stack single source of truth is the Tech Stack YAML and contains more detail about this app.

### Implementation

Zuora consists of several app modules built on the Zuora Central Platform. Zuora Billing is one of these modules.

### System Diagrams

Zuora Billing is one of several modules within the larger Zuora Central Platform.

### Quote to Cash workflow

Zuora Billing is a central module within the Quote to Cash workflow and interfaces with many other apps.

<!-- Unsupported block type: code -->

### Lead to Cash workflow

Zuora Billing is a key module within the Lead to Cash workflow.

<!-- Unsupported block type: image -->

Lead to Cash Workflow

### Key Reports / Dashboards

For Zuora Billing, the team uses Zuora Standard Reports and the most important reports are:

- ELP Changes

- Accounts with subscriptions to be canceled in the next 30 days

- Credit memos over time

We also have a collection of Tableau dashboards that include Zuora Data. These dashboards include data from other data sources such as Salesforce.

### Data Model

The Zuora Billing business object model presents how Zuora is organized internally.

<!-- Unsupported block type: image -->

Zuora Billing Data Model

### Key Data Objects

Zuora is the SSOT for these objects and the data can be viewed there. In addition, key objects can be viewed in Snowflake:

- Raw Data: zuora.*. Key objects include: 

- Modeled Data: Bus Matrix. Key objects include: 

### Product catalog

The Zuora Enterprise App Guide contains a Product Catalog to manage all of GitLab’s SKUs.

### Integrations

<!-- Unsupported block type: code -->

### Zuora to Salesforce

Zuora Data to Salesforce via Zuora CPQ

### Customers Dot to Zuora Billing

CustomersDot data to Zuora via IronBank GEM using the Zuora Subscribe API and Zuora Amend API * Orders Harmonization plans to transition to the Zuora Orders API

### Zuora to Snowflake

Zuora Data to Snowflake Enterprise Data Warehouse with the Stitch Zuora Integration

### Zuora to NetSuite

Zuora Revenue data is synced to NetSuite using the Zuora Revenue to NetSuite Integration.