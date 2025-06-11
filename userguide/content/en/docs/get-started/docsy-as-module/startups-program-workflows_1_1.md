---

title: "GitLab for Startups Program Workflows"
description: "Details on program-specific workflows related to the GitLab for Startups Program"
---

## Overview

This page contains details regarding workflows specific to the [GitLab for Startups](https://about.gitlab.com/solutions/startups/join/) program.
Please see the [Community Programs Workflows page](/handbook/marketing/developer-relations/community-programs/community-programs-workflows/) for complete details on the program's application process.

Currently, only VC- or accelerator-backed startups are eligibile for the program.
Startups are not eligible for the program if they have been paying GitLab customers within one calendar year.

We categorize their approval offering by two different funding qualifications:

- Seed Stage: Less than $5 million USD in funding
- Early Stage: Greater than $5 million but less than $20 million USD

Startups must submit proof of association with a VC or accelerator fund, along with current funding status.
The easiest way to obtain this information is a Crunchbase, PitchBook, or Y Combinator profile link, which should be submitted upon application.

## Forms

Our application is a Marketo form with the following fields:

- First Name
- Last Name
- Email Address
- Country (drop down)
- Company Name
- Billing Address
- City
- Postal Code
- Country (drop down)
- Please provide a crunchbase, pitchbook, or y-combinator profile. Alternatively, upon contact, we will ask you to provide financial statements or any other reasonable substantiation to display your current funding status.
- Choose your GitLab product
- How many seats are you requesting
- Do you want to purchase support (checkbox)
- Marketing email opt-in (checkbox)

For reasons relating to trade controls, we are unable to accept applicants from Cuba, Iran, Syria, North Korea, Russia, Belarus, or Ukraine.

## Legal agreement

GitLab for Startups Program members are subject to the same terms and conditions as regular GitLab customers, since this program only grants them 12 months of GitLab Ultimate for free.
When the promotion period ends, startups will have the option of becoming regular paid customers.

## Verification flow

Here are some common workflows associated with managing the program, including qualifying a startup:

### Review application within Zendesk "Startups" view

Scenario: User did not submit complete application  

In **Zendesk**:

1. Apply the "Funding Info" macro.

Then, in **Salesforce**:

1. Open lead / contact in the ticket
2. Ctrl F "Startups Program Status"
3. Change the status to Funding Docs Requested

### User-submitted application with link to Crunchbase or funding Status (Complete Application)

**Seed Stage Flow**

If funding amount is less than $5 million USD, startup is deemed **Seed Stage**.
Follow this flow.

In **Zendesk**:

1. Apply the `Seed stage` macro to send welcome email to customer
2. Insert a coupon code from the coupon code sheet within the macro
3. Review `Name` and other fields to ensure correctly completed

Then, in **Salesforce**:

1. Open lead / contact in the Zendesk ticket
2. Ctrl F "Startups Program Status"
3. Change to "Qualified" Seed Y1

**Early Stage Flow**

If funding amount is less than $20 Million USD and greater than $5 million USD, startup is deemed **Early Stage**.
Follow this flow.

In **Zendesk**:

1. Apply the `Early Stage` macro
2. Set ticket status to `Open`

Then, in **Salesforce**:

1. Open lead / contact in the Zendesk ticket
2. Ctrl+F to find "Startups Program Status"
3. Change to "Qualified" Early Y1
4. Convert the Lead to an Opp
5. Rename the Opportunity as `Customer Name, Seats, License Type, Startups - Early - Y(1)`
6. Chatter Mktgops to assign the correct account executive
7. Once the account executive has been confirmed, handoff the customer via the Zendesk Ticket

For more clarification regarding Startups sales process, please refer to this [highspot page](https://gitlab.highspot.com/items/6410e355fb9e0fe9d2823fcc?lfrm=irel.1#3)

If they do not qualify, send them the [Startups:: Rejection macro](/handbook/marketing/developer-relations/community-programs/community-program-applications/email-and-zendesk-macros/#startups-startups-rejection) and offer to connect them to sales via the [Sales handoff process](/handbook/marketing/developer-relations/community-programs/community-program-applications/#handoff-process-to-sales).
