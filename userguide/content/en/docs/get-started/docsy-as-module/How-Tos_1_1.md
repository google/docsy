---

title: Sales Development How-Tos
description: Use this page to quickly learn the basics of inbound lead management, outbound account management, as well as all other main Sales Development processes that we use like enrolling to a sequence, and creating opportunities.

---

While the contents below are meant to get you up to speed quickly, we also have a wealth of resources for team members that are looking to perfect their craft [here](/handbook/marketing/sales-development/sales-development-vault/).

## Where to find your leads and accounts

Inbound leads get automatically imported to SFDC by the Sales Operations team, you can find links to their handbook pages on our [main page](/handbook/marketing/sales-development).

To find and access your leads, please:

1. Navigate to SFDC's homepage
1. Click on the `Leads` tab.

You will find the lead views below. These views are split per use-case for your convenience. The KPIs for managing these leads are thoroughly outlined in our [SLAs page](/handbook/marketing/sales-development/roe-kpis-faq/).

### SDR Lead Views

| View   | Description                                                                                                        |
|--------|--------------------------------------------------------------------------------------------------------------------|
| S1 - High Priority View | These are leads that are marked as High Priority because of some high Propensity To Purchase indication. |
| S1 View | These are your net new leads that have scored high enough to reach MQL status.                                            |
| S2 View | This is a view of your existing leads that also have an associated phone call so you can easily reference your callable pipeline. |
| S3 View | Qualifying leads. These are leads that you are actively qualifying in a back and forth conversation either by email or through phone calls. Each lead needs to either be active in a follow-up sequence, have an active task, or have a future meeting scheduled which can be seen in a future “last activity” date. |

### BDR Lead Views

| View                           | Description                                                                                                                                                                                                                                                                                                                                                                                                                   |
|-----------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| FY25 B1 - My Leads, Action Needed       | Includes any leads that we have committed to follow up on ASAP. These are our highest converting leads and are a mix between High Priority and MQL’s PTP is now part of our scoring so there may be leads in there that have MQLd due to PTP so you'll have to click into the lead to see more. High Priority leads belong to a High Priority campaign - you can find which one at the bottom of the page in the campaigns section.                                                                  |
| FY25 B2 - AWA leads w/ LIM             | Includes leads in your name and that match to your Actively Working Accounts. It's best to sort these by Last Interesting Moment Date and consider the Lead Classification Score when deciding which to sequence. We do not surface leads that were sequenced in the last 14 days.                                                                                                                        |
| FY25 B3 - Change Owner AWA's (Clone)   | These leads are now in your name automatically (not leads you've necessarily chosen and moved into your name, the old B3 view had to be cloned which is no longer needed). This view however allows you to see leads that may not have been moved into your name because at the time, they did not meet criteria. These could be bc: the leads were in lead statuses of: Accepted, MQL, or Qualifying when you moved the account into Actively Working since leads with those statuses should stay with the owner. Leads that were in disqualified or ineligible are also not moved into your name. This view will allow you to get eyes on any leads that are not in your name. You then can review any LIM dates and decide to put leads into your name if no one is reaching out. Keep sorted by LIM Date. |
| FY25 B4 - My HT Leads W/ Phone         | This view should be used when either you do not have enough daily call tasks in Outreach to hit your daily KPI or when your team wants to do a call blitz etc. It allows you to easily pull into Outreach and create additional call tasks for your leads currently in high touch sequences.                                                                                                                             |
| FY25 B5 - My Qualifying Leads          | These are leads in qualifying status which means some sort of two-way engagement happened between you two. Please review this section of our handbook for best converting follow-up practices.                                                                                                                                                                                                                          |
| FY25 B6 - 6QA imported leads           | You can find any leads in your ownership related to accounts that have just hit 6QA status in this view. 6QA means the account has been shown to have high intent signals and has similar signs to other accounts that have purchased from us. We have brought in appropriate titles from ZoomInfo so that when you move the 6QA account into Actively Working, you have some leads all ready for sequencing.                                                                  |
| FY25 B7 - BDR Prospecting Last 7 Days  | This view will surface leads that you created or refreshed from ZoomInfo or Cognism. (Please note that there is also a contacts view you will need to check should the person already be a contact in our system)                                                                                                                                                                                                                 |

### Contact Views

| View    | Description                                                                                                                                                                                                       |
|---------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| B1 View | Includes MQL’s, Hot contacts that require quick follow up                                                                                                                                                        |
| B2 View | Contacts related to Actively working accounts that you can choose to sequence - *give 48 hrs                                                                                                                      |
| B3 View | Active HT sequenced leads that have a phone number - to help with call downs                                                                                                                                      |
| B4 View | Qualifying leads. Contacts that you are actively qualifying in a back and forth conversation either on email or through phone calls. Each contact in this status needs to either be active in a follow up sequence, have an active task or have a future meeting scheduled which can be seen in a future “last activity” date. |

### Account Views

| View                                         | Description                                                                                                                                       |
|----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| B1 - My BDR Assigned accounts (clone)        | Customize to show accounts where you are the BDR assigned. Use to mass update 'BDR Strategy' and 'BDR Prospecting Status'.                          |
| B2 - My Actively Working accounts (clone)    | Customize to show "Actively Working" accounts where you are the BDR assigned.                                                                     |
| B3 - My Actively Working accounts (clone)    | Customize to show "Actively Working" accounts where you are the BDR assigned.                                                                     |
| B4 - BDR Recycle Date Past due (Clone)       | Show AWA accounts where the Recycle Date is in the past two weeks.                                                                                |
| B5 - Mvd to "WorkedinFY" this week (Clone)  | Show Worked in FY accounts with a recent Recycle Date. |

## How to do Lead Database Management

As part of your SDR responsibilities, you are expected to perform due diligence on each lead you receive. This includes checking the database for duplicate records, as well as referencing against our [RoE](/handbook/marketing/sales-development/roe-kpis-faq/).

1. Open the lead you want to investigate and press the `Find Duplicates` on the top of the lead's record.
1. Check through all the records that show up, from leads to Acccounts. Make sure to search for `Domain` and `Last Name` if the data you have seems incomplete.
1. Check the `Matched Account Info` section on the lead record.
   1. For SMB leads, if there's a matched account where the type is `Customer`, please press the `Convert` button at the top of the lead page and match this lead to the existing account.
   1. If there's not a customer record but you find an existing open opportunity, update the `Lead Status` to `Recycle` and `Recycle Reasons` to `Evaluating.`
   1. For Universities/Education leads (non-US Pub Sec), work as regular lead if technical contact.
   1. If there's a matched account, check if the field `BDR Prospecting Status` is `Actively Working` and, if so, reroute the lead to the team mentioned on the `BDR Assigned` field.
   1. If the existing account is not marked as `Actively Working`, check for duplicate leads or contacts and merge if necessary while keeping the oldest `Initial Source`.
   1. If the `Company Address` fields on the lead record do not match your research online of the company, please update the `Admin Company Override fields` that are found in the `Lead/Contact Review Admin` section. As a further fail-safe step, you'll be asked to verify that this due diligence is done prior to converting this person to a new account.
1. If there's no matched account, but there's another lead at same company that has the `MQL` status, assign both leads to the owner with the earliest `MQL Date`.
   1. If there's no matched account, but there's another lead that has the `Accepted` or `Qualifying` status, assign the new MQL to the owner of the accepted/qualifying leads.
1. BDRs receiving leads not associated with `Actively Working` accounts must assign back to SDR team or chatter mktgops support.
1. Qualified leads associated with “Actively Working” accounts are routed to BDR assigned to the Actively Working Account.

### Telco and Finserv Routing

For leads that connect to companies that operate in the Financial Services (AMER only) and Telecommunications (EMEA only) industries. We have a seperate routing process that supercedes all of our current [Rules of Engagement](/handbook/marketing/sales-development/roe-kpis-faq/#rules-of-engagement-roe).

Only named TELCO/FinServe accounts are rolling up to the TELCO/FinServe territories. If a new account is a subsidiary of an existing carved company, it will need to be assigned to the AE owning the ultimate account. If it is a totally separate entity then it can be allocated to the regional AE. If a lead comes in that is related to a TELCO/FinServe account, it must be assigned to the BDR assigned on the account.

### Company Address Based Routing Information

In **[this video](https://www.youtube.com/watch?v=QT-oOceFU6k&ab_channel=GitLabUnfiltered)**, a member of the Marketing Ops team goes over the Company address fields and how they are used for Accounting Routing and Opp assignment.

If you need to do edits to the database by merging leads together for any of the above steps, please reference the videos below for an explanation.

### SDR Territory Map

![SDRTerritoryMap](/handbook/marketing/sales-development/SDRTerritoryMap.png)

### Merging Leads

|                                   |
|-------------------------------------------------|
| [How to Merge Leads Together](https://www.youtube.com/watch?v=Q_EyDQdaLZw&ab_channel=GitLabUnfiltered)                     |
| [How to Merge a Lead and a Contact Together](https://www.youtube.com/watch?v=qHrCyKiNwDQ&ab_channel=GitLabUnfiltered)      |

### Chatter Guide for Troubleshooting

If you'd like the assistance of another person or team, you can use SFDC chatter on the lead record. Please reference the guide below:

| Problem                                                | Who to Chatter                                                                   |
|--------------------------------------------------------|----------------------------------------------------------------------------------|
| A SMB/MM Contact Request and the account is a customer | Chatter the Account Owner and inform them of the context of the message.          |
| A BDR receives an MQL Lead that is not from an Actively Working Account | Chatter @mktops                                                        |
| If you feel a lead has been misrouted                 | Chatter @mktops                                                                  |
| There is a Duplicate Account                           | Chatter Sales Support and ask them to merge the accounts.                         |
| An Opp has moved into Stage 1 but has Incorrect Data  | Chatter your manager who will then reach out to someone in Sales Dev Operations.   |
| Unclear Territory Assignment                           | Chatter an AE from each of the potential territories.                              |
| Requesting SAO Credit on an Opp                        | Chatter Sales Dev Ops or the Director of Commercial Sales Development.            |
| Account is in Restricted Status                        | Chatter the SAE and ask permission to reach out.                                   |

### Cleaning Poor Leads

Lastly, Every so often you may be assigned a lead that has no value to GitLab and is not worth keeping within our database. Qualities that define these types of leads include:

| Step                                                    | Description                                                                                                                                                           |
|---------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Identify leads with no value to GitLab                  | Look for leads with characteristics such as incoherent or obviously forged information, or email addresses from temporary domains that self-terminate.            |
| Verify lead removal necessity                           | Ensure that the leads meet the criteria for removal and are unlikely to provide any value to GitLab.                                                                  |
| Add leads to the SPAM DELETION Salesforce campaign      | Add the identified leads to the SPAM DELETION campaign in Salesforce. Make sure to be 100% certain about the removal, as this process is irreversible.               |
| Note campaign membership, not status                    | Remember that only campaign membership matters for this process, so the campaign member status used when adding to the campaign does not affect the removal process. |
| Understand the permanence of lead removal               | Realize that leads removed through this process cannot be recovered by MktgOps, making the removal permanent. Exercise caution when initiating lead removals.         |
| Be aware of the removal schedule and exceptions         | Note that the removal process occurs daily at 12:05 am PDT via Marketo. For unscheduled removals, request assistance in the mktgops Slack channel but minimize requests. |
| Request email domain blocking if necessary              | If you observe multiple leads with the same domain, create an issue with Marketing Ops to add the domain to a block list, preventing future occurrences.           |

## How to action your leads

**1. Determining High-touch or Low-touch sequence usage:**

1. Determine if the lead qualifies for a high touch or low touch sequence.
   - High touch sequences are for higher-quality leads and require more personalization and touch points, including phone calls and LinkedIn Connect requests. This should be the majority of your pipeline.
   - Low touch sequences are typically automated and run for a shorter period of time. You can use Low-touch for leads where a phone number cannot be found online or in our databases, or where their contact information is incomplete and cannot be enriched by our tools, or through manual research. Low touch should only be reserved as the last resort.
1. Research the appropriate outreach collections for relevant collateral to be used. Most typically our [High-Touch](https://web.outreach.io/sequences?queryFilters=%5B%7B%22attribute%22%3A%22collection%22%2C%22operator%22%3A%22is%22%2C%22value%22%3A%5B%2269%22%5D%7D%5D&sortBy=recent&sortDirection=desc) or [Low-Touch](https://web.outreach.io/sequences?queryFilters=%5B%7B%22attribute%22%3A%22collection%22%2C%22operator%22%3A%22is%22%2C%22value%22%3A%5B%2271%22%5D%7D%5D&sortBy=recent&sortDirection=desc) collections.

### Cold-Calling and Email Checkbox

Before calling any Lead or Contact, BDRs must ensure that the `Do Not Call` box is unchecked.  If you speak to any anyone, including prospects and existing contacts, who ask you not to call them again, you must check this box. However, please do not delete the number as we need to know which number requested not to be called again. For any individuals who are opted-in to email, you may ask them if they wish to be called. If they express a desire to be called, you are then permitted to uncheck the `Do Not Call` box if it was previously checked.  Also, if an individual expresses independently via email a wish to be called, you may uncheck the `Do Not Call` box.  This email must be present in SFDC as proof of your authority to uncheck this box.  You cannot send email requests to individuals not opted-in to email asking whether they would like to be called.

Our cold-calling best practices typically consist of 4 elements. A pattern interrupt, an elevator pitch and, if required, objection/trap-setting questions and Up-Front Contracts.

To be effective, these need to be customized to the individuals we call as per the logic below:

- Different Geographical Business Cultures
- Personality Type as per the DISC model
- Individual's Role and Responsibilities
- Business’ Needs and Objectives

An unsubscribe link must be included on every email sent by a BDR, including responses to a prospect or contact. Please reach out to the Privacy Team via #privacy-team-help for the recommended language that should appear at the bottom of each outbound email.

### Do Not Call and Do Not Email Automations

Leads with certain criteria will be automatically labeled as **Do Not Call** and or **Do Not Email** shortly after loading into our database. It's understandable this can be frustrating for certain territories. Please keep in mind, the criteria behind this automation has been set in order to follow local law. Please see the [Internal GitLab handbook](https://internal.gitlab.com/handbook/marketing/marketing-ops-and-analytics/marketing-operations/do-not-contact/?search=do+not+call) for more information on the triggers.

### How to enroll to outreach

[Outreach.io](https://www.outreach.io/) is a tool used to automate emails in the form of sequences. Users can track open rates, click-through rates, response rates for various templates, and update sequences based on these metrics. Outreach.io also helps to track sales activities such as calls. All emails/calls/tasks that are made through Outreach.io are automatically logged in Salesforce with a corresponding disposition. See below for a list of current call dispositions, what they mean, and scenarios on when to use each of them.

1. Go to your SDR views on SFDC and select the lead you want to sequence.
1. Press `Import to Outreach`.
1. Work from the Outreach extension on Chrome to then select the sequence you want to enroll the lead in.
1. If manual steps are required for the sequence that you chose, select `Edit Steps`. Go through each step you want to edit, paying especial attention to manual variables.
1. Once the first step of an Outreach sequence is complete, the lead status will automatically change from `MQL, Inquiry, or Raw` to `Accepted` status, marking that you are actively working on this lead.
1. When a lead responds to you via email, their status will again automatically change from `Accepted` to `Qualifying`. Manage these leads from your S3 and B5 lead views.
1. If you are not working on qualifying this lead further, manually change the status to `Recycle` so that this lead is back in Marketing recycle and isn’t stuck in your `My Qualifying` view. If you have spoken to the lead by phone and are qualifying them, manually change the status from `Accepted` to `Qualifying`.
1. When looking at your qualifying view, sequence leads that have no recent last activity + no active tasks + are not actively being sequenced into one of our follow up sequences that have the `Follow up Ruleset Sequences`.
1. Tasks and your pipeline can be then managed via the Outreach [360 view.](https://support.outreach.io/hc/en-us/articles/214806328-Navigating-the-360-View-Dashboard)
1. In the 360 View, review the list of inbound leads assigned to you by navigating to the bottom left of the screen and pressing Start tasks.
1. If a lead finishes an Outreach sequence without responding, the lead status will automatically change to `Unresponsive` or `Recycle` in seven days if there is still no response.
1. If a lead responds, schedule a call/meeting using Outreach’s meetings feature.
1. Manually change lead status if you don’t use an Outreach sequence to reach out to someone or if you need to unqualify a lead for bad data etc.
1. If you check the Inactive lead or Inactive contact checkbox, signifying that this person no longer works at the company, any running sequence will automatically be marked as finished.
1. If you notice your leads are being reassigned to Inquiry Queue, that’s due to a scheduled clean up job in Traction that updated `Status = Inquiry` to Inquiry Queue. To resolve this, add your leads to an Outreach sequence. Note: The scheduled clean up runs daily at 10:30 PM EST/EDT.

### Outreach Collections

Ways to organize similar sequences and snippets

- **Common Collections**
  - [FY24 Global Inbound High Touch Collection](https://app1a.outreach.io/sequences?queryFilters=%5B%7B%22attribute%22%3A%22collection%22%2C%22operator%22%3A%22is%22%2C%22value%22%3A%5B%2269%22%5D%7D%5D&sortBy=recent&sortDirection=desc)
  - [FY24 Global Inbound Low Touch Collection](https://app1a.outreach.io/sequences?queryFilters=%5B%7B%22attribute%22%3A%22collection%22%2C%22operator%22%3A%22is%22%2C%22value%22%3A%5B%2271%22%5D%7D%5D&sortBy=recent&sortDirection=desc)
  - [FY24 Inbound Languages Collection](https://app1a.outreach.io/sequences?queryFilters=%5B%7B%22attribute%22%3A%22collection%22%2C%22operator%22%3A%22is%22%2C%22value%22%3A%5B%2270%22%5D%7D%5D&sortBy=recent&sortDirection=desc)
  - [Events Collection](https://app1a.outreach.io/sequences?queryFilters=%5B%7B%22attribute%22%3A%22collection%22%2C%22operator%22%3A%22is%22%2C%22value%22%3A%5B%2266%22%5D%7D%5D&sortBy=recent&sortDirection=desc)
  - [Good Outbound Collection](https://web.outreach.io/sequences?queryFilters=%5B%7B%22attribute%22%3A%22collection%22%2C%22operator%22%3A%22is%22%2C%22value%22%3A%5B%2276%22%5D%7D%5D&sortBy=recent&sortDirection=desc)
  - [Testing Outbound Collection](https://web.outreach.io/sequences?queryFilters=%5B%7B%22attribute%22%3A%22collection%22%2C%22operator%22%3A%22is%22%2C%22value%22%3A%5B%2275%22%5D%7D%5D&sortBy=recent&sortDirection=desc)

### Outreach Tags

A method of distinguishing sequences and snippets from others. Use tags to help narrow down which sequences you should be using in a particular situation

#### Common Tag Examples

- **Primary-** a sequence created by SDR leadership that should be used by all reps to follow up with inbound leads
- **High Touch/Low Touch-** Distinguish if the sequence is high or low touch
- **Region-** Can be used to show which region the sequence
- **GTM-** The message trying to be delivered. Ex. Security, CI/CD ect.
- **Inbound/Outbound-** Whether the sequence is meant for inbound or outbound prospecting
- **Language-** What language the sequence is written in

### Outreach Snippets

Content created for BDRS and SDRs to use to create hyper-personalized sequences, one-off emails, or to use for reaching out to prospects via LinkedIn.

- **Common Snippet Examples**

  - [Objection Snippets](https://app1a.outreach.io/snippets?direction=asc&order=owner&tags%5B%5D=objection)
  - [Support Snippets](https://app1a.outreach.io/snippets?direction=asc&order=owner&tags%5B%5D=Support)

### New Outreach Sequence/Workflow creation

In an effort to better iterate, and refresh, our outreach content and workflows, we have a structured process for BDRs to create/measure new Outreach sequences.

Please log an issue [here](https://gitlab.com/gitlab-com/marketing/sales-development/-/issues/new) by selecting the template `BDR_Sequence_Creation_Request.`

The issue description will walk you through all the next steps.

This process aims to:

**Implement Measurement Clarity and Decision Velocity**

By dogfooding GitLab we have a structured and simplified cadence of quantifying sequence creation in terms of value and results without limiting agency.

**Maintain Equal Contributions in a Shared Reality**
By maintaing a Single Source of Truth (SSoT) we give the best possible forum for cross-functional collaboration with specific guidelines

**Ramping BDRs**
Ramping BDRs should only be using OB sequences from the Good and Testing collections. A ramping BDR can only create a Sequence Creation Request if there is no sequences that fit their needs or strategy in our current library.

### Follow Up Outreach Sequences

- For SDRS and BDRS that want to sequence leads in their qualifying views we created [this video](https://www.youtube.com/watch?v=IKE24LRJbcc) to help you create a workflow around this follow up [sequence.](https://app1a.outreach.io/sequences/9383)

- The same video also showcases the [Auto Follow Up](https://app1a.outreach.io/sequences/9543) to Book a Meeting Sequence SDRs and BDRs can use when a prospect responds to one of their sequences.

- For [guiding prospects](https://gitlab.com/gitlab-com/marketing/sales-development/-/issues/817) to web-direct, we also have [a sequence that you should use](https://web.outreach.io/sequences/14652/overview) to ensure that you streamline their buyer's journey.

### White Glove Event Follow Up Sequence (SAEs Included)

For more personal events, such as Executive Roundtables, there many be more detailed Last Event Notes that have an ask to include the people who interacted with the prospect at the event. For these situations we have a [specialized white glove sequence.](https://app1a.outreach.io/sequences/12883)

 The goal of this sequence is to reach out to the prospect quickly and to include our SAEs/AEs in the conversation.

- The first step is to put the prospect in the Sequence. From there customize the first email step to include the people mentioned in the Last Event Notes. You can also delay the time that the first email goes out so you have more time to get feedback from the SAE/AE if needed.
- Next send a screenshot of the first email step to the SAE/AE’s that will be CC’d. Explain to them that this strategy creates space for them to engage with more specific messaging if the prospect is unresponsive. NOTE: There is a generic task on Day 12 to reach out to the SAE/SA if there has not been any engagement. The goal is to keep them in the loop and for you to work together to engage the prospect.

### Other Outreach Training Resources

- [Intro Slide Deck](https://docs.google.com/presentation/d/1IpTVE4-Nkblfuiu6f1OUnFbi8IpjRPK7UDSx4eSfQCg/edit#slide=id.g5a343b482a_2_10) and [Training Video](https://gitlab.edcast.com/journey/weeks/cards/7257647)
  - password should be in onboarding issue or ask your manager
- GitLab Edcast: [Advanced Outreach Training](https://gitlab.edcast.com/journey/weeks)
- Best Practices: [Our Outreach Handbook Page](/handbook/marketing/marketing-operations/outreach/)

### How to Change your Email Signature

You must change your email signature [in Terminus](/handbook/marketing/marketing-operations/terminus-email-experiences/) in order for your signature to save. If you only change your signature in Outreach or Gmail your signature will revert back within 24 hours.

**Steps to change your signature**

1. [Log into Terminus](https://email2.terminusplatform.com/users/sign_in/) using your GitLab Google Account
1. After logging in click on the Terminus logo in the top left corner
1. Next click the menu item for "Email Experiences"
1. From there you can edit your signature and see a preview of it on the right side of your screen.

## How to follow our FO Outbound Process

BDR outbound lead generation is done by prospecting to companies and individuals who could be a great fit for our product. Prospecting is the process of finding and developing new business through searching for potential customers with the end goal of moving these people through the sales funnel until they eventually convert into customers.

BDRs will work closely with their dedicated SAE or AE to choose which accounts move into “Actively Working”. Together they will build a strategy for those companies. It is crucial that outreach is very intentional and strategic. When reaching out, we want BDRs to offer value and become a trusted advisor, ensuring a positive impression is left whether there is current demand or not.

The FO Outbound process is split in four phases, which should be followed on a weekly basis to ensure a steady outbound pipeline in alignment with our internal KPIs.

### Planning Phase (4-5 hours/week)

**1A. Create a set of achievable objectives**

These goals should be based on what you know you can achieve when focusing on First Order accounts. It is particularly important to know your equation so you can map your activities to specific outcomes and goals in a predictable way.

The main objective you should be focusing at is to measure and plan what activity is required to achieve or increase the amount of First Order meetings.

**1B. Map your objectives to your data** <br>

Research your territory to identify the true First Order (FO) accounts, ensuring no other subsidiaries have licenses, verifying there hasn’t been a lost renewal in the past 180 days, and confirming there are no open opportunities. The goal here is to vet your TAM (Total Addresable Market) so that you can start matching cohorts of accounts with the objectives that you’ve outlined in the previous step. Indicatively, you can export these accounts to a Google Sheet, or other SSoT of your preference, for tracking since these accounts will be marked as Actively Working at a future step further down the process.

Utilizing these accounts, create an outreach strategy and plan for the upcoming month and quarter. This strategy should include considerations such as the number of accounts to include in sequences per week and per month, the quantity of prospects from these accounts to add into sequences weekly, whether you intend to target specific personas, if you plan to employ targeted messaging, whether sequences will be used for high-priority targets, and the messaging approach you will implement. As previously mentioned, knowing your equation is important for your planning here. Please refer to the sheet linked above to determine your exact metrics.

### Account Research Phase (4-5 hours/week)

During your research phase for accounts to include in your sequences, thoroughly investigate and document pertinent information, which may include:

- Identifying new strategic hires.
- Discovering recent job openings in DevOps.
- Monitoring for security breaches or threats.
- Scanning for relevant news articles.
- Gathering intelligence on competitors.
- Examining future plans, such as digital transformation initiatives.
- Noting recent company acquisitions.
- Investigating LinkedIn connections.
- Identifying instances of GitLab usage by employees or as a past customer.
- Exploring 2nd and 3rd-degree connections.
- Seeking mentions of DevOps.
- Reviewing relevant 10K reports or financial disclosures.

This comprehensive research will provide valuable insights for crafting effective outreach strategies further down the funnel. Regarding account research, in addition to our B2B database toolstack, we also use 6Sense to pre-qualify the accounts that should be considered for our pipelines since 6Sense scores accounts based on their market and profile fit.

There are two ways utilize 6Sense:

- Through the SFDC iframe integrated dashboard (mandatory for FY24Q3)
- Through the 6Sense Platform (optional for this Quarter)

### 2A. Using 6Sense through the SFDC dashboard

1. Navigate to SFDC
1. On the main tab with options (leads, accounts, etc), click on the “+” sign
1. Select 6Sense dashboards, you can also click “customize my tabs” to add the 6sense dashboard
   to your homepage permanently
1. On the 6Sense dashboard, click the cog icon on the top right
1. On “Search by User” select “BDR Assigned” and add your name
1. On “Other filters” select “Salesforce Account fields” and type “BDR Prospecting Status”
1. On the “BDR Prospecting Status” field, select “Actively Working”

The dashboard will now display the top actively working accounts in your name. Do note that these are only accounts that we currently have on our database, while you can find greenfield accounts by visiting the SaaS platform (instructions in section 2B). Section 3 below explains how you can review and utilize this data.

### 2B. Using 6Sense through the SaaS platform

Navigate to 6Sense through Okta
On the left-hand bar, click on the Segments tab
You will find all of the relevant resources for BDRs and SDRs on the first 5 folders. These folders can be used as per the table below.
(In each folder you will find a saved template that can be cloned and edited for your individual territories.)

| Folder                       | Usage                                                                                                                                                                       |
|-----------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| 1. AWA’d Accounts          | These segments will display the top accounts in your current actively working list according to 6Sense intent data. By manually investigating each of those accounts you will be able to uncover further prospect engagement data, and adjust your strategy in converting this account. This report has the same functionality as the SFDC dashboard outlined in step 2A. |
| 2. Non-AWA Greenfield Accounts | These segments will display the top accounts in your territory that we do not have on our SFDC database. These accounts should be manually investigated and considered for adding to your outbound pipeline. Note that we have approx. 15% of our TAM on our SFDC database, while these reports are an automated way to identify great accounts from the other 85% of the TAM in your territory. Please note that the Sales Dev Ops team is here to work with you to generate these reports, as the particularities of our Sales Territories require some editing with the filters. Please don’t hesitate to reach out to us so we help you work through these. |
| 3. Non-AWA SFDC Accounts   | These segments display the accounts that currently hold on our database that display high 6sense intent scores, but are not part of your actively working list.                      |

After choosing the type of report you’d like to work, please follow the steps below:

1. Select the template in each of the BDR folders that starts with the prefix “-[TEMPLATE]”.
1. On the title, add your name or territory as suggested by the naming convention. Please make sure to delete the Prefix “-[TEMPLATE]”.
1. Click on “Edit Segment”.
1. For folders 1 and 3, you’ll see a prompt on one of the filters to add your name to the “BDR Assigned” Field.
1. For folder 2, you’ll see a prompt to add your region to the “Address: Region” field. Do note that based on your territory there are other datapoints like “Address: City” or “Address: Country” that can be used.
1. After having done the edits on steps 4 and 5, press “Save Changes”. Make sure that you’ve updated the naming convention accordingly and click “Save As New Segment”.

### 3. Manual Research on Accounts

No matter how efficiently we’re trying to use our toolchain, these tools are still prone to error, and manual research is required to best shortlist the prospecting lists that cross-referencing will provide.Manual research will also provide additional context that can be used to hyper-personalize your outreach to your prospects.

For each account that you want to investigate, start with SFDC to make sure that there are no duplicate accounts. The report templates in 6Sense should exclude existing customers or accounts actively prospected, but we cannot automatically exclude accounts that have a different naming or domain on salesforce (ie. GitLab and GTLB)

The importance of diligent manual research will lead to the below efficiencies:

→ Better use of time in the long-run by making sure accounts are indeed within your segment and territory, or are not duplicates. <br>
→ Avoiding unecessary RoE conflicts by making sure there are no hidden parent accounts that would cause SAO ownership to be re-assigned to other segments in the future.

**1. To double-check the account on Salesforce:**

1. Search for the account name on SFDC.
1. Search for the account email domain on SFDC.
1. Search for the account website domain on SFDC.
1. Search for the Account’s HQ address, along with any regional business unit address.

**2. To hyper-personalize your messaging:**

Please follow the steps below to understand how to research the data provided on 6Sense, and to cross-reference this data with our internal knowledge base so that you create your account strategy accordingly.

1. Understand and utilize 6Sense data: Each segment has an accounts tab that displays all the accounts that correspond to this segment. This view can be shortlisted further by using the three analytics tabs as all datapoints in these tabs is clickable.
   - **Predictive Analytics** filters accounts by their propensity to buy. This data can be used to split prospecting efforts between high-priority outbound campaigns and low-priority awareness campaigns
   - **Behavioural Analytics** filters accounts by the intent/value-driver that they mostly focused on. This data can be used to split accounts into specific value-driver focused campaigns.
   - **Profile Analytics** filter accounts by the demographic of each company in terms of location or size. This data can be used to run location-specific campaigns.
1. Search for past opportunities on SFDC
   1. Check the qualification notes
   1. Check the unqualified reasons by the AE team
   1. Check past email communication on the activity records
1. Search for the account record on SFDC
   1. Check Account Rank notes by the AE team
   1. Check the PathFactory, ZoomInfo, Marketo integration tabs
   1. Check their product usage information (if applicable)
   1. Check their LAM Dev Count
1. Search for relevant leads on SFDC:
   1. Check for past communication
   1. Check for Last Interesting Moment and how it connects to their title and lead source to determine their compelling events
   1. Check for Web Activity on Marketo and PathFactory to gauge past interest
1. Cross-reference with External sources
   1. Search LinkedIn Insights for company growth, financials and recent news
   1. Search company webpage for recent news, career openings or specific technologies used
   1. Search online sources like newsletter or crunchbase
1. Cross-reference the above with HighSpot
   1. Check for relevant playbooks based on company size
   1. Check for relevant messaging based on persona
   1. Check for relevant pain-points based on value driver

### Execution Phase (5-10 hours/week)

**Exporting Accounts and Leads to SFDC, and adding to your Outbound Pipeline.**

After having manually shortlisted the accounts that are applicable to your campaign, the next step is to determine the relevant prospects per account and export them to SFDC. It is important to add accounts to your outbound pipeline so that AEs and other SDRs/BDRs know this is an account that is already being touched, and to avoid confusion or multiple people approaching the same prospects. Before moving an account into “Actively Working Status”, make sure there have been no MQLs or opportunities created from that account within the past 30 days, and there are no leads from that account in Qualifying status with activity in the last 30 days or with a future task date set. If you are not sure, double-check with the related AE, SDR or BDR.

To determine which prospects to enroll per account, please follow the steps below:

- Identify the idea value drivers to be used for the account’s pain-points through your manual research, as outlined above.
- Determine which personas would most benefit from the specific value drivers by using our CoM documentation on HighSpot.
- Run queries for the specific titles on ZoomInfo, and export to CRM.

You should explore the specific personas you intend to target, such as: VPs, Directors, Developers, Security, Architecture, DevOps, DevSecOps, Procurement Officers, and IT Buyers.

Determine the number of prospects you plan to add to sequences, with a minimum of 25 per day. Utilize LinkedIn Sales Navigator, ZoomInfo or Cognism to identify these personas within your target companies.

In Step 7, compile the selected prospects and create LinkedIn Sales Navigator lists for each persona. Save these lists for future use.

**To export to CRM, please follow the guidelines below:**

- Click the Export to CRM button on ZoomInfo
- That’s it
- No, really.

**To fill in the BDR fields, please follow the guidelines below:**

Use the format found on this template
Copy-Paste the Structure to the BDR Account Research field and populate accordingly.
Populate the BDR Next Step Date to be at the end of the account’s sequence length (typically one month out)

### 6. Maintaining a clean pipeline, and using BDR fields for cross-functional collaboration

To review your current pipeline, along with any leads with next steps, please refer to your segments dashboards by going to SFDC > Dashboards and searching for Watch and Help.

Team specific variants of these dashboard components will also be found on your team’s dashboard. These dashboards will give you a bird’s eye view of what actions are required from to maintain a clean pipeline, in terms of: i. Accounts with BDR fields past due ii. Prospects with sequence steps past due iii. Prospects that have been moved to Qualifying status but have not had any outreach since.

## How to Get SAO Credit and Create Opportunities

Qualification criteria is a minimum set of characteristics that a lead must have in order to be passed to sales and become a Sales Accepted Opportunity (SAO), these are split into [Inbound and Outbound Criteria.](/handbook/sales/field-operations/gtm-resources/#opportunities)

As an SDR or BDR, you will work to connect with inbound/outbound leads that you get a response from to obtain the applicable information required. This information is tracked on the qualification criteria on the `LEAD, CONTACT, and OPPORTUNITY` objects in Salesforce. In order to obtain an SAO, you will need to have the `required information` filled out on the opportunity including documented 2-way communication on the Contacts in the Opportunity. Professional Services opportunities are not credited to sales development, these need to be passed straight to the account AEs for them to qualify.

**When do I create an Opportunity?**

1. **You have scheduled time with AE/SAE to speak with the prospect:**
If you are scheduling time with an AE/SAE to speak to the prospect based on a qualifying conversation you have had with the prospect, an opportunity needs to be created and placed in stage 0. On the opportunity, all “required qualification” fields need to be filled in.

1. **You have obtained a commitment/willigness from a prospect to discuss further.**
If you have a meaningful two-way communication with a prospect, but have not had the required qualification criteria to move to the Sales team, you can create an opportunity under your name so that you better track your warm conversations. These opportunities may also be used for better collaboration with your team, as they can be reviewed and brain-stormed upon during team meetings.

**Who owns the opportunity at this point?**

1. **You have scheduled time with AE/SAE to speak with the prospect.**
When you have entered the qualification criteria onto the opportunity, and have received calendar confirmation from all parties for the intro call with sales, you will change ownership to the AE/SAE. After you have saved opp owner, you will add yourself to the BDR/SDR field. The opportunity will remain in stage 0.

1. **You have obtained a commitment/willigness from a prospect to discuss further.**
At this point, the opportunity will be in your ownership but you can not have yourself listed in the Business Development Representative or Sales Development Representative field. There is a validation rule that will not allow the opp owner and the SDR/BDR representative field to be the same member.

**When will it be credited as an SAO?**

After the AE/SAL meets with the prospect to verify and supplement qualification criteria, they will move the opportunity into Stage 1 Discovery. The AE/SAL is expected to move the opportunity into the correct stage within 48 hours of the meeting reflected in the “Next Step” date field.

If an opportunity has incorrect data after it has moved into Stage 1 - Discovery, please Chatter your manager about the required changes, they will then Chatter someone from Sales Dev Operations (Ramona, Panos, Ed) once final changes are agreed upon. No one else from Sales Dev can edit opportunities once they are in Stage 1, so please try and ensure you have all the information on the opportunity before you ask the AE/SAL to accept it.

If the opportunity is for a new group of users in a Large account where sales is working on a large “central” opportunity, then your opportunity should be merged to that opportunity for you to get credit for the users you have brought to the deal. See under [Stage 8](/handbook/sales/field-operations/gtm-resources/#opportunity-stages) in the Sales Go To Market Handbook.

### Opportunity Creation Workflow

![Opp-Creation-Workflow](/handbook/marketing/sales-development/FY24OpportunityCreationWorkflow.png)

### Scheduling IQMs

**Creating Opportunities:**

1. **Identify and Relate Communications**: Identify relevant two-way communications with the prospect, such as email exchanges, call records, or LI messages. Ensure that these are properly logged in SFDC associated with the `person, company, and opportunity records` as needed. To do this:
   1. Select the specific activity records highlighting your involvement and press `related to`.
   1. Select the corresponding Opportunity and press Save.
   1. Select specific activity records highlighting your involvement and press `related to`
   1. Select the corresponding Opportunity and press `Select specific activity records highlighting your involvement` and press `related to`
   1. Select the corresponding Opportunity and press save.
1. **Verify Sales Organization RoE**: On ZoomInfo, or other established sources if needed, verify the parent/child segmentation and the HQ of the company or ultimate user.
   - If discrepancies exist, communicate with the appropriate personnel for resolution.
1. Overriding Incorrect Account Assignments**
   1. Navigate to the `Lead/Contact Review Admin` section in Salesforce to input correct information.
   1. After making sure that the information is properly reflected on the `Company Address` fields (ie: **Company Address: Street**), please tick the `Company Address Checked` checkbox on the lead level. If this step is not completed, then you will receive a message to remind you on Salesforce when you try to convert the lead.

   If unsuccessful, communicate with the Sales Dev Director for assistance in updating account records.
1. **Schedule IQM**: For booking meetings, use [Outreach Meetings](https://www.outreach.io/resources/blog/meetings-pr) to expedite the experience for prospects.
   1. Make sure to give a 24 hour notice to the AEs.
   1. Having sent a meeting invitation, ask the prospect to accept while on the phone/meeting with them.
1. **AE Review**: Expect AEs to verify that they reviewed the opportunity beforehand.
   - If needed, review the specifics of the call, responsibilities, and send meeting reminders.
1. **Attending the IQM**: Please make sure that both AE and SDR show up on time or up to 5 minutes beforehand with Cameras on.
   - Please ensure that the location is quiet and indoors for AE and SDR.
1. **Debrief**: Have a goal for the AE and SDR to debrief within 24 hours regarding the opportunity being flipped or being disqualified.
   - Ensure that feedback is shared in writing via Slack/email and added to Salesforce by the AE.
1. **IQM Notes**: SDR adds IQM notes to the Initiative section in the opportunity Title.
   - Include Attendees, Raw Notes, Questions, Summary, and Next Steps.
1. **Rebooking no-shows**: The SDR’s responsibility lies only in rebooking no-shows using the [Outreach rebook sequences](https://web.outreach.io/sequences?search=no%20show&sortBy=recent&sortDirection=desc).
   - Conduct outreach for 2 weeks. If IQM cannot be rescheduled, AE will unqualify the opportunity.

### Trial Extensions and Ultimate to Premium Downgrades

To submit a trial extension ticket for a prospect you will navigate [to this internal request form](https://support-super-form-gitlab-com-support-support-op-651f22e90ce6d7.gitlab.io/) and fill it out the form using the **"GitLab L&R internal request for global customers"** option and then select extend a gitlab.com trial. Keep in mind it only works for SaaS and not self-managed.

You are also able to downgrade a Trial from Ultimate to Premium through the internal request form. You just have to choose "Change existing GitLab.com Trial plan"

## Monthly Audit Process

In an effort to increase transparency as well as consistency in terms of credit attribution for opportunities sourced by the Sales Development organization, we will conduct on a monthly basis a full audit of all opportunities giving credit to either a Sales Development or a Business Development Representative. Please do note that SDRs/BDRs that are on their ramping quarter are exempt from being auditors.

Participating and completing the audit on time is mandatory.

Guiding principles:

1. All activities must be logged and documented in Salesforce. <br>
1. Timestamps for such activities will be audited and cannot be modified after the fact
Sourcing cases must be clearly documented. <br>
1. All opportunities associated with a Sales Development team member must have meaningful engagement for Web Directs and full qualifications criteria for Direct Deals.

**Mandatory SLA:** Audit and XDR response must be completed by the first day of the following month. Rulings will be completed by the management team by the end of the second day.  Invitations and pairing will be sent to the entire Sales Dev team the first week of the month. It is the responsibility of the team member to find a backfill to do their audit if they are unable to complete the audit within set timelines.

### XDR'S RESPONSIBILITY

1. All activities must be logged in Salesforce.
Pro-actively flag opportunities with questions or created outside the standard process in the monthly [Audit Doc.](https://docs.google.com/spreadsheets/d/1IBSfKuK6QcvsAIPvW7uYYCjeMtqPmpeDv2swsPAZShc/edit#gid=0). Please note that there's a separate audit worksheet specific to the PubSec team that is shared separately for compliance reasons.

Examples: web directs. AE-created. Partner generated (for now), Opp w/no value, duplicate opp

### AUDITOR'S RESPONSIBILITY

1. Auditor needs to review all notes and time stamps related to the opportunity
1. Auditor needs to log an activity #Audited on the activity record of the opportunity as mentioned below, this way we can track completion of monthly audit.
1. Ensure that relevant activity & products are attached.
1. Ensure that Products match up to Qualification info in Call Connect and/or Meeting
1. For BDRs, ensure account was in AWA status
ensuring that the [RoE](/handbook/marketing/sales-development/#rules-of-engagement-quick-guide) was followed
1. Flag in the monthly [Audit Doc](https://docs.google.com/spreadsheets/d/1IBSfKuK6QcvsAIPvW7uYYCjeMtqPmpeDv2swsPAZShc/edit#gid=0), any questions related to the audited opportunities.

### AUDIT PROCESS

Each month you will be assigned one of your peers to Audit. We will share a report with all the S1 opportunities created that month. SDRs will audit SDRs and BDRs will audit BDRs. We will do our best to pair people from the same segment however it is possible that you end up auditing someone from another segment.

Once you’ve audited an opp, you will create a task by logging a call, choose “other” as type, and write “#Audited” in the subject line. If an opp needs more research, write “#Audited - Pending Review” and add this opp into the Audit Review spreadsheet.

[**Audit Process Video Walkthrough**](https://www.youtube.com/watch?v=ef8gFx0lR48)

### AUDIT REVIEW (what to look for)

| Action | Rationale | Coaching Opportunity |
| ------ | ------ | ------ |
| Opp creator    |    Our standard is to get to credited for creating opportunities that meet the qualification criteria.    |   When you set up a conversation with an AE, you should create the opportunity. If we see that an opp was created by an AE but has the SQS = Sales Dev Generated, there will need to be evidence of meaningful engagement by the Sales Dev rep prior to the opp being created.   |
| For Web Direct opportunities, check timestamp and for two way meaningful engagement prior to the purchase       | Web Direct opportunities are people that bought directly from the store themselves without necessarily having being influenced by us.       |  Explain that our role in this company is to directly influence purchasing decisions through positive and purposeful interactions with prospects. Requesting credit when we have not added specific value to a prospect's journey diminishes the credibility of our team. |
| Check to see whether opportunity qualification fields are populated. | Marketing and Sales are expected to collaborate to move prospects down the funnel based on specific qualifiers. When it comes to Stage-0 opportunities these are the opportunity qualification fields. | It's common that individuals do not fill these fields in the name of agility. This however does not create accountability in progressing these prospects down the funnel in a predictable manner. |
| Check the date of opportunity creation. | Creation of the opportunity should occur when you're engaged with the prospect and have begun the qualification process. There will sometimes be a child or related opp that needs to  be created based on needs discovered during the IQM with AE. Should that be the case, the created child/related opp should have the IQM activity as a related task on it. | Explain that creating opps as soon as engagement occurs will lead to better management of a BDRs/SDRs pipeline. |
| Check to see if there is a contact associated to the opp and that there's meaningful engagement prior to the opp being created. | Our standard process requires that we work specific leads and that we convert the main contact person to a contact/opportunity upon qualification. | Explain that this best practice will help with measuring and moving an opportunity further down the pipeline because of accurately being able to communicate the decision-making team from the prospect's side. |
| If activity shows up on the record, and the activity is a connected call with notes, verify that the activity matches in Outreach. | Activities on SFDC can be edited freely and therefore questioned by our audit team. | Explain that Outreach is a SSoT that can be used as irrefutable proof of outreach. Even if other systems fail, Outreach is always used as the last back-up. |
| If activity matches, check that activity happened in accordance with our Actively Working Rules Of Engagement (RoE). | Team members from both Sales and Marketing are expected to contribute pipeline only within their assigned territory. | Explain that making sure that being aligned to the RoE will not create any contigencies when measuring pipeline. |

#### Typical Red Flags

1. Opportunity Source: Sales Qualified Source should be SDR generated if not validate that there is a sourcing case documented.
2. Created by: The XDR should create the opportunity, if not, there should be a written explanation
3. Did the XDR set and complete a meeting on the same day without previous activity?
4. Are there duplicate opportunities?
5. Is NetARR missing?

_Directors, Ops and JB will select random opps each month to audit and ensure audit process is being followed_

#### Best practices to ensure credit for SAO

1. Sequence all leads if you’re reaching out
2. Make sure your activity is logged that shows how you drove the meaningful engagement that led to the opportunity.
3. Populate all qualification fields
4. If activity was a phone call or a zoom call, log notes at the time of call
5. If a meeting was set, make sure you create a stage 0 opportunity prior to the meeting, populate fields during/afterwards. If person will likely web direct, keep opp in your name and update next steps, ensure that prospect is guided to web-direct using the sequence [here](https://web.outreach.io/sequences/14652/overview), as per the conversation [here](https://gitlab.com/gitlab-com/marketing/sales-development/-/issues/817).
6. If engagement is in LinkedIn or Whatsapp, take a picture and attach to chatter/opp
7. If activity happened at an event, make sure that immediately following the event, you create a stage 0 opportunity and  send follow up email that recaps the conversation that took place

### Reports

1. [SAO Report for SDRs](https://gitlab.my.salesforce.com/00O8X000008QeFh?sdtd=1)
1. [SAO Report BDRs](https://gitlab.my.salesforce.com/00O8X000008QdwB)
