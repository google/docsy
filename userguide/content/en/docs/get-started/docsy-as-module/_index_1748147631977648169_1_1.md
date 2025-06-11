---
title: "Sales Operations Go To Market"
noindex: true
---

## Welcome to The Sales Operations GTM Page

The purpose of this page is to centralize and document all key Go To Market policies & links for ease of use.

## Account Ownership Rules of Engagement

- [Account Ownership Rules of Engagement Handbook](/handbook/sales/field-operations/gtm-resources/)

## Territory Tables

- [Account Ownership Territory Tables Handbook](/handbook/sales/territories/)

## Territory Success Planning (TSP)

TSP is an automated process workflow intended to properly segment & route Salesforce accounts to the correct Sales territory & respective owner. This clarifies who should own which accounts & reduces current Ops overhead to manage manually. TSP fields are designed to be real time reflections of the best data we have, not necessarily the current Go To Market approach. [Requests to override](https://gitlab.com/gitlab-com/www-gitlab-com/-/edit/tsp-process-overview-updates/source/handbook/sales/field-operations/sales-operations/go-to-market/index.html.md?from_merge_request_iid=49546#process-for-requesting-tsp-changes) the TSP information can also be submitted in the **Account Review** section of the account.

### Primary TSP Workflow Components

1. **Account Routing** (*Next Owner recommendation process*):
    - Sales Segment (i.e. max employee count of the account hierarchy)
    - Primary Account HQ Address (of top Parent Account in the hierarchy)
        - Inputs for both are formulated via our standardized account enrichment tools (in order):
        - Manual Override  >  DataFox  >  DiscoverOrg  >   Ship-To  >   Bill-To
    - LeadData then compares these TSP Input Values against our [SSoT Territory Mapping File](https://docs.google.com/spreadsheets/d/1iTDCaHN-i_xrfiv_Tkg27lYbZ3LHsERySkvv4cPsSNo/edit#gid=720021722) & automatically outputs an Approved Next Owner and Territory.

1. **Account Assignment** (*Account Transfer Process*):
    - (Re)Assignment of an account to the correct owner
    - Updating of Account Territory, Sales Segment, Employees fields

### Firmographic TSP Fields

- `[TSP] Sales Segment`: Segment of the account based on the MAX employee count in that account's hierarchy (regardless if MAX is parent or child).
- `[TSP] Account Employees`: Number of employees **for this specific account**
- `[TSP] MAX Family Employees`:  MAX employee count (number) in hierarchy
- `[TSP] Address (Street, City, State, Post Code, Country)`: Location of Ultimate Parent Account based on the TSP data hierarchy
- `[TSP] Geo Story`: Source of address data from TSP Data Hierarchy

### Ownership TSP Fields

- `[TSP] Next Approved Owner`: Owner of territory as determined by [SSoT Territory Mapping File](https://docs.google.com/spreadsheets/d/1iTDCaHN-i_xrfiv_Tkg27lYbZ3LHsERySkvv4cPsSNo/edit#gid=720021722)
- `[TSP] Transfer Date`: Date when account ownership will change to `TSP Next Approved Owner`

### Territory TSP Fields

- `[TSP] Territory`: Territory account falls under, as per the [SSoT Territory Mapping File](https://docs.google.com/spreadsheets/d/1iTDCaHN-i_xrfiv_Tkg27lYbZ3LHsERySkvv4cPsSNo/edit#gid=720021722)
- `[TSP] Region`: Sales territory region the account falls under
- `[TSP] Subregion`: Sales territory sub-region the account falls under
- `[TSP] Area`: Sales territory area the account falls under

### Account Exclusions

The current TSP design supports our Geo sales accounts & territories.

- It does not currently support Named Accounts, PubSec Accounts, or Channel Accounts - as these require manual assignment.
- These accounts are intentionally filtered out of the TSP automation process, and will not be impacted by automated reassignment assuming.

## Process for Requesting TSP Changes

In the event our data enrichment tools are outdated or incorrect (primary address or employee count), you can submit a request to override this information.

1. **Request:**
    - Enter desired TSP information into the following fields (this can be either Account, Employee Count, or both).
    - Be sure to include source of correct data (ROE must still be followed)
          - `[User Input] Employee Count`
          - `[User Input] Employee Source`
          - `[User Input] Address Street`
          - `[User Input] Address City`
          - `[User Input] Address State`
          - `[User Input] Address Post Code`
          - `[User Input] Address Country`
          - `[User Input] Address Source`

1. **Operations Review:**
Ops will review these requests on a periodic basis, and provide a response in the `[TSP] Override Status` field:
    - **Approved** - Account changes accepted, & `[TSP] Effective Date` populated by Ops.
    - **Rejected** - Reason added to `[TSP] Decision Rationale` field.
    - **Needs Approval/More Info** - Info needed added to `[TSP] Decision Rationale` field.<p/>
1. **Execution:**
    - Turnaround time for Approved TSP changes to re-populate typically takes 24-48 hours.
    - Accounts with a `[TSP] Effective Date` populated will be re-routed each night to the `[TSP] Next Approved Owner`.
    - `Account Territory`, `Sales Segment` & `Employees` fields will also be updated upon TSP transfer, to continually align accounts.

## **Primary Quote System**

The Primary Quote system is a 1:1 relationship in SFDC that connects the total transaction amount on a quote with the amount on its related opportunity. This is to ensure we are forecasting the same amount that we will book and enables further automation as the quote is sent to Zuora billing. To support sales situations that require multiple quotes (for instance: a small deal option and a big deal option), sales reps can identify which one of their quote is "Primary".

[Primary Quote technical documentation here:](/handbook/sales/field-operations/sales-systems/gtm-technical-documentation/#primary-quote-system)
