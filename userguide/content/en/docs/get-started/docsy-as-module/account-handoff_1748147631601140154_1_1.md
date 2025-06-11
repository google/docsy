---
title: "Account Handoff CSM-to-CSM Checklist"
---

View the [CSM Handbook homepage](/handbook/customer-success/csm/) for additional CSM-related handbook pages.

---

CSMs will need to occasionally transfer accounts they have been working with to another CSM (e.g. a CSM changes territories, a realignment occurs in Sales, a need to equalize books of business, etc.), and they should use this handbook page to help guide them through important questions and topics during the handoff.

Below are checkpoints during the account handoff process that CSMs can use to keep track of information they will need in order to successfully transition accounts. For the sake of this page, most of this guidance is directed towards the new CSM but is helpful information for everyone involved.

## Account Handoff CTA

The first step once you are aware of a handoff is for the new CSM to open an [CTA in Gainsight](/handbook/customer-success/csm/gainsight/#ctas). This is where you will track completion of tasks necessary to a successful handoff. Be sure to select the "Account Handoff" playbook and assign the relevant tasks to the previous and new CSM.

### Account Handoff CTA Tasks

- Old CSM: Review account handoff handbook page
- Old CSM: Ensure the success plan and any CTAs are updated, and that the Attributes tab in Gainsight contains links to the collaboration project, meeting notes doc, and triage issue (if applicable)
- New CSM: Review account handoff handbook page
- New CSM: Try to answer the handover questions listed below and discuss them together with the old CSM in the scheduled handover meeting
- Old CSM: Schedule an internal meeting between the current CSM & new CSM to review account details (collaboration project, success/command plans, meeting notes, EBRs, account history, etc.)
- Old CSM: Add new CSM to any Slack channels
- New CSM: Turn on watch notifications for the collaboration project
- Old CSM: Introduce new team on next cadence call (schedule one if there is not one upcoming)
- Old CSM: Send follow up email to the customer with the new CSM's contact information
- New CSM Manager: Assign the account (and relevant child accounts) to the new CSM in Gainsight
- Old CSM: Assign any open CTAs and the success plan (and its objectives/tasks) to the new CSM
- Old CSM: Delete the cadence call calendar events (if created internally); or, if the events were created by the customer, reach out to ask that the customer invites the new CSM to the events directly
- New CSM: Create and send out a new invite for cadence calls, to ensure there is no disruption, as some customers' internal systems do not cooperate with Google Calendar
- New CSM: Review open/pending support tickets and subscribe to all tickets, which the old CSM was watching
- Old CSM: Remove yourself from all support tickets and its CC field
- New CSM: Schedule additional sync with old CSM if needed; otherwise close this CTA

As you follow the tasks in the CTA and collaborate amongst each other, be aware of the following suggestions to ensure a seamless handoff experience.

## Account Handoff: Compensation Specific Systems Process

Many of our internal processes rely on accurate assignments in our CRMs. This includes the way CSM/E variable compensation is tracked and attributed.
<br>

### Key Fields & Their Use

| Field Name | Source of Truth (SOT) Location | Other Locations Updated by SOT | Description |
| -------- | -------- | -------- | -------- |
| Customer Success Manager | Gainsight C360 | SFDC Account Page | Represents who is assigned to the customer |
| CSM Compensation Pool | Gainsight C360| SFDC Account Page | Assigns the account to a compensation pool. This is the "live" version of the pool |
| Compensation Pool Team | SFDC Opportunity | N/A | This field is updated by the CSM Compensation Pool team field on the SFDC Account and is stamped at opportunity closure. It then represents the Compensation Pool who will receive credit for the opportunity. |
| Compensation Pool Team Override | SFDC Opportunity | N/A | When the Compensation Pool Team field is stamped with the incorrect pool the process outlined below uses this field to override the stamped value. |

<br>

### Types of Coverage Transfers and How to Handle Them

**Handoff between two named resources (CSM/A to CSM/A)**

DRI: New CSM/A being assigned

1. On the day of the transfer, change the name listed as the Customer Success Manager in Gainsight to the new named resource
1. If the new CSM/A is associated with a different CSM Compensation Pool, update the CSM Compensation Pool in Gainsight to the new CSM/A's pool.

**CSM/A to CSE Organization**

DRI: CSM/A that the customer is transferring away from

1. On the day of transfer change the name listed as the Customer Success Manager in Gainsight to TAM Scale. This is the name that represents the CSE organization as a whole in our CRMs.
1. Any open Success Plan with this customer should be closed and an update in Gainsight should be added which incidates the handover to CSE.
1. Close all open / pending CTA's within Gainsight for the customer which is about to he handed over.
1. Take a look at the Collaboration-Project and close old issues assigned to you. If there is nobody (ie an SA) going to continue using the project, consider archiving it.
1. The CSM Compensation Pool will need to be changed. Change it to the CSE pool that represents the Geo of the customer:
    1. CSE_AMER_1
    1. CSE_EMEA_1
    1. CSE_APAC_1
    1. CSE_PUBSEC_1

Generally speaking there is no direct assigment to a specific CSE like an account was assigned to a CSM. The CSE team will be best involved by letting the AE or SA opening a [CSE help request](/handbook/customer-success/csm/segment/cse/cse-operating-rhythm/#cse-engagement-request-process), in which the CSE can introduce their role to the customer and how CSE team works. Going forward, CSE help requests should be used again and again by the AE / SA / RM, when a situation at the customer arises, which needs help by a CSE team member.

**CSE Organization to CSM/A**

DRI: CSM/A the customer is transferring to

1. On the day of the transfer, change the name listed as the Customer Success Manager in Gainsight to the new named resource
1. Update the CSM Compensation Pool in Gainsight to the new CSM/A's pool.

**How to handle overrides**

At GitLab, we value [Collaboration](/handbook/values/#collaboration). The stance we take as far as making sure Salesforce Opportunities are attributed to the right compensation pools is that we lean in on that value and work together to ensure the right pool is being compensated for the opportunities that close shortly after a transfer is made. The managers associated with the compensation pools involved are responsible for agreeing which opportunities may need an override of the compensation pool that was stamped at the time of close. In the case of a disagreement, the Geo's senior leader should make the final decision. **If an agreement results in a need for an override, the CSM/E Manager should chatter @sales-comp on the opportunity that needs the override.**

## Topics to Cover

### Valuable Questions for the Handover

To ensure a smooth handover and provide clear guidelines for the handover meeting between the new and old CSM, we have developed a set of handover questions. Initially, these questions should be posed by the new CSM. Subsequently, the old CSM should address and answer the outstanding questions during the handover meeting. When answering these questions, it might be helpful to look at the Google Drive folder for the customer, Gainsight, Salesforce, Zendesk and the corresponding collaboration project.

#### Communication / Collaboration

- Company information (Vertical, Size, Internal Team structure)
- Customer contacts (Names, Roles, Team, How involved are they?)
- Who should I contact with my welcome email?
- Do they have any other calls with GitLab apart from Cadence Calls?
- How and how often are you in contact with the customer? (Collaboration Project, E-Mail)
- How do you use the collaboration project? (Issue for every cadence call? Issue for every ongoing objective/ initiative? Is it up to date? Can we close any issues?)
- How often does the customer usually communicate with you outside of calls?
- Who are the most important contacts from the customer and who do you interact with regularly?
- Who are the most important contacts within GitLab? Who should I talk to?
- Do you have any Slack Channels for the Customer?

#### Documentation

- Where are all meetings notes of the customer?
- Which documents are shared with the customer?

#### Usage

- What are their primary use cases for GitLab?
- How do they use GitLab?
- Which features do they use?
- Do you have an architecture diagram?
- Which other tools do they use (JIRA, Jenkins, GitHub, etc.)?

#### Other

- Do you have any training scheduled or planned with them?
- What are the ongoing initiatives? What is the current status?
- What are you currently working on with the customer/ what are your current efforts?
- Are there any open CTAs in Gainsight?
- Are there any open/ pending support tickets?

### License

Discuss the state of the customer's license, such as:

- Active users count
- True-up assessment
- Upcoming renewal

### Communication

One of the most important parts of a handoff is excellent transparent and timely communication. It's important for the new CSM to have a thorough understanding of the communication channels used to interact with the customer.

- What is the customer's preferred method of communicating?
- How often does the customer usually communicate with us outside of calls?
- Who are the most important contacts and who do we interact with regularly?
- What is the frequency for [cadence calls](/handbook/customer-success/csm/cadence-calls/)?

### Collaboration Project

Does a collaboration project exist? If not, discuss with the previous CSM to understand why not and evaluate if it would be helpful going forward or not. If yes, review all open issues and ask the previous CSM to update/close any that may be out of date. It may be worthwhile to skim closed issues to understand what types of initiatives or questions they've had in the past.

Pay special attention to the customer's product sentiment and their feature requests, and check if the list of feature requests is up to date, are they prioritized, how many have been shipped, etc. If there are any gaps, ask the previous CSM for any additional context they may have.

### Gainsight

While all information in Gainsight is important, the below sections have been found to be the most useful to review when getting up to speed on an account.

#### Attributes

Review the "Attributes" tab in the Gainsight account to get a high-level overview of account-related details.

#### Health Score

Review their [health score](/handbook/customer-success/csm/health-score-triage/) and any [timeline](/handbook/customer-success/csm/gainsight/timeline/#timeline-view) entries associated with it, and discuss the history of the relationship, as well as what the previous CSM anticipates from the customer going forward.

#### Success Plan

Review their success plan to understand the strategic objectives the customer cares about. If it's out of date or empty, sync with the previous CSM to get their feedback and determine a strategy to build the success plan out.

#### Adoption

Understand what [stages](/handbook/customer-success/csm/stage-adoption/) the customer is using on GitLab or on other tools; if any stages are unknown, ask the customer once you've started cadence calls with them.

#### Opportunities

Review the open opportunities for the account; is there an upcoming renewal, or is there an upgrade potential? Additionally, by clicking into a closed-won opportunity, you can access the command plan that SAEs/AEs complete during the sales process.

#### Salesforce Activities

If you're interested in past email exchanges, these can be found in the "Salesforce Activities" tab on the account, which if you click on the eyeball will direct you to Salesforce to view the contents. If there are several entries with the same title, choose the most recent one, as it will also show the history of the messages in the email thread.

### Meetings

#### Cadence Calls

Review the cadence call schedule, and the usual list of attendees. Also review agendas for recent cadence calls to familiarize on the topics that are currently being discussed.

Depending on the situation, it may be beneficial for both the new CSM and the customer to have a slower transition (1-2 months). In this case, for cadence calls, it's helpful for the old CSM to lead the cadence calls at first, while the new CSM shadows, and both CSMs pair on any questions or follow up, until the new CSM is ready to take over leading and be solo.

#### Meeting Notes

Meeting notes docs should be in the standard location in [Google Drive](https://drive.google.com/drive/u/1/folders/0B-ytP5bMib9Ta25aSi13Q25GY1U); if there isn't a folder for the customer there, create one. If there isn't a notes doc in the folder, ask the previous CSM for a link to their notes and ask them to move the notes to the folder. Also do a search within Google Drive of the customer name to identify any other relevant documents or materials and move any to the folder if not already there.

Read through past meeting notes to get full clarity of the history of our engagement, and take special note of any meeting notes from past [EBRs](/handbook/customer-success/csm/ebr/).

#### Meeting History

It can be helpful to look at the history of the types of calls the previous account team has had with the customer. This information most likely can already be found in the meeting notes and/or Gainsight timeline, but if you want to get a list for a high-level understanding of the face-to-face meetings the customer has been involved in, you can pull up the calendars of the SAE/AE, SA, and CSM and search for the customer name in Google Calendar to get a list of all meetings they've had with them in chronological order.

#### Chorus Recordings

While not all customer calls are recorded, many are, and they can be a wealth of information. To avoid becoming overwhelmed, ask the previous account team if there are any impactful or informative calls to watch, and review any with a subject line that may be particularly interesting (ex. EBRs, product feedback, etc.) or that could help fill in some gaps from meeting notes.

### Support Tickets

Thoroughly understand the main technical issues the customer cares about and has had problems with. Take note of critical open tickets and collaborate with support as needed, and review any key technical issues the customer experienced in the past; for example, migrations, integrations, major upgrades, etc.

As the new CSM is finally responsible for knowing about important support tickets and its status, its recommended to subscribe yourself (in "CC") to all support tickets, the old CSM was watching. This will ensure, that the new CSM gets notified (as the old CSM will remove herself from the CC list).

### Installation

Assess the environment where the customer's GitLab instance is hosted.

- Self-Managed Assessment:
  - Health Checks
  - Architecture diagrams
  - Machine specifications
  - GitLab configuration files
- GitLab.com (SaaS) Assessment:
  - Runners Evaluation
    - Private On-Prem Runners
  - Compute minutes utilization
    - CI usage trends (i.e daily, weekly, monthly etc.)
