---
title: "Customer Onboarding"
---

View the [CSM Handbook homepage](/handbook/customer-success/csm/) for additional CSM-related handbook pages.

---

Customer Onboarding is the [beginning phase of the customer lifecycle](/handbook/customer-success/customer-success-vision/#lifecycle-stages).

## Overview

The customer onboarding phase is critical to getting a customer started on a successful journey with GitLab. This is our opportunity to ensure the customer achieves value and success from the start of their GitLab usage.

## Onboarding steps

The onboarding process should begin when the [customer opportunity reaches stage "5-Negotiating" for Booked ARR](/handbook/sales/field-operations/gtm-resources/) in order to introduce the CSM while we have high-touch engagement to close the opportunity. Once an [opportunity that will newly qualify a customer for CSM alignment](/handbook/customer-success/csm/services/#csm-alignment) reaches stage 5, a [Gainsight CTA will be created](#cta-creation-criteria) for the CSM Manager to assign the customer to a CSM. The assigned CSM should then start the onboarding process with the rest of the [account team](/handbook/customer-success/account-team/).

⚠️ **NOTE:** Please review the [time to value metrics](#time-to-value-metrics) for target completion timeline.

### Internal transition

The first step is [completing the handoff from pre-sales to post-sales](/handbook/customer-success/pre-sales-post-sales-transition/). This will ensure the entire account team is clear on the customer's status, and the CSM can be properly introduced to the customer. This sync on the background of the account is **essential** and must happen before the CSM is on a call with the customer, so the CSM has the full background and the account team approaches the call as a united front, already understanding the customer goals and working towards achieving them.

If a customer will be on Dedicated, the CSM should familiarize themselves with the [best practices for CSMs of Dedicated Customers](https://internal.gitlab.com/handbook/customer-success/csm/gitlab-dedicated/).

### CSM intro email and onboarding

Digital programs will automate the Intro to GitLab CS program outlining what a CSM does, followed by the onboarding enablement emails for all CSM assigned customers, excluding PubSec. This will trigger for a customer when the onboarding playbook has been created. All emails come from a generic Customer Enablement GitLab email address, and each email is tokenized with the CSM name. Customers have the option to reply directly to the email which will email the CSM to schedule a call or ask questions. Each CSM will also be cc'd on all emails sent to their customers for visibility.

- Email 1: Introduction to GitLab CS Experience (what a CSM does)
- Email 2: Onboarding Email - Intro, first steps, how to get help
- Email 3: Onboarding Email - Security, backup and restore
- Email 4: Onboarding Email - Monitor GitLab, API and rate limits
- Email 5: Onboarding Email - Additional training and support

These emails will automatically be sent to any customer contacts who are labeled as a `GitLab Admin`, and at least one contact should have been labeled as part of the pre-sales process. It is recommended to label multiple contacts if possible as a `GitLab Admin` so they receive the emails as well, ensuring the enablement content is received.

Review email copy [here](https://docs.google.com/document/d/1rS1mV_8eKpM49Oh-35sCwmk_5hpV_CQl8S1g-Jc4Xxk/edit?usp=sharing) (internal only).

### Kickoff call

⏰ [**Target time:** within 14 days of customer start date](#time-to-engage)

The kickoff call is the first conversation between the CSM and the customer. This is when the CSM describes their role to the customer, and starts their own discovery process to fill in details they don't have from the [internal transition](#internal-transition) in order to start an effective engagement and create a [success plan](/handbook/customer-success/csm/success-plans/).

The goal of the kickoff call is to align on desired business outcomes, key upcoming milestones, and create clarity on our partnership as CSMs.

#### **Which Deck Should I use for the Kickoff call?**

CSMs select from the following templates for their kick off call, depending on the customer handover:

1. If a *strategy roadmap* was completed with the SAs, use this [kickoff slide deck](https://docs.google.com/presentation/d/1LShY62EHCZLNjS0Z6MBzTsYF_GllNwH7Rbw3_PJQUOo/edit#slide=id.g129f8c95ce4_0_569) (internal only). Please [click here](https://youtu.be/iYfs5Le053Y) for a video overview of how to best utilize the deck (private video on GitLab Unfiltered).
2. If not, use this [kickoff slide deck](https://docs.google.com/presentation/d/1fsIFLcecs6nQxR7g5MHDTT71tx3b1aW9b3d2RX6ZOLk/edit#slide=id.g129f8c95ce4_0_569) (internal only), and is available as part of the [onboarding CTA](#cta-content-and-process).

The CSM should review and revise this deck in advance of the kickoff call based on what they already know about the customer and what they are still looking to understand.

#### **What should I know coming out of the Kickoff call?**

Ideally, the following information has been collected in the presales process and we use the kickoff to confirm and build upon this knowledge.  In the times that these questions are not known, we always seek to leave the kickoff with an understanding of the following?

1. `Why did you buy GitLab?` Ideally you've already answered this question in your handoff from pre-sales, so if that's the case, reframe the question to validate that you understand they purchased GitLab for X reason and confirm your understanding of what challenges the customer is looking to solve.
1. `What other tools are you using?` Understanding what the tool landscape is for the customer is crucial in being able to help them adopt GitLab in relation to their desired use cases. Try to write down their tool for each of the following use cases: SCM, CI, CD, Package, Security, Monitoring, Agile
1. `What are your business goals?` After they achieve their immediate goal of whatever they want to use GitLab for, what's next for them?
1. `Are there other stakeholders to involve?` Is there anyone else who would benefit from having business discussions with GitLab? CSMs should always have at least 2 regular contacts they speak with, ideally in line with our [target personas](/handbook/customer-success/csm/engagement/#customer-personas).

In addition to the above questions, make sure to review the [tasklist for the first cadence call](/handbook/customer-success/csm/cadence-calls/#tasklist-for-the-first-cadence-call) to ensure you cover additional important items, such as support and training. It's also critical to ensure that customers (especially those that are self-managed) sign up for GitLab security alerts, which they can do by entering their email address in the "Sign up for security notices" section of [this page](https://about.gitlab.com/company/contact/). CSMs can monitor whether or not their customers are signed up for security alerts by looking at the relevant SFDC reports for [contacts](https://gitlab.my.salesforce.com/00O8X000008RTyM) (most customers will fall into this category) and [leads](https://gitlab.my.salesforce.com/00O8X000008RTyg). It is recommended to save versions of those SFDC reports with your preferred filters in your Personal Custom Reports folder in SFDC for efficiency and to avoid accidentally modifying the original reports. You can do this by opening the report,selecting "Save As", renaming the report, and saving it to "My Personal Custom Reports". From there, you can modify the report to include your desired filters. If a customer does not sign up for security alerts in between the kickoff call and the first cadence call, CSMs should revisit this topic in subsequent conversations and emphasize that opting in to these notifications will ensure the customer is aware of any action they may need to take to keep their instance(s) secure.

One of the most important action items coming out of the kickoff call is [establishing the cadence call](/handbook/customer-success/csm/cadence-calls/). The CSM should have the ongoing cadence call schedule determined with the customer by the end of the kickoff call, as well as a plan for the [first cadence call](#1st-cadence-call-future-growth-discussion--checklist).

#### CSM Journey Spreadsheet

CSMs are welcome to use a [Customer Journey Spreadsheet](https://docs.google.com/spreadsheets/d/1H6gGlsCAZoHKy27kPhJfZE8v4039_lI6pW9nif-um-A) (internal only) to identify the customer's entry point and better identify the enablement needed. The spreadsheet aims to cover the multiple onboarding steps we see as CSMs, from the infrastructure build review, to the required migration steps and expansion to DevSecOps. Scale and Growth CSMs are not recommended to create and maintain these spreadsheets.

### Success plan development (document key attributes)

Once the [kickoff call](#kickoff-call) is complete, the CSM should have sufficient information to [start developing the success plan](/handbook/customer-success/csm/success-plans/). This is a critical step in successful onboarding and long-term customer engagement.

⚠️ **NOTE:** While the CSM should be able to create an effective first iteration of the success plan at this point in onboarding, the [success plan is a living document](/handbook/customer-success/csm/success-plans/#success-plans-are-living-documents), so the CSM should continue iterating the success plan throughout the customer lifecycle.

Please review the [success plan handbook page](/handbook/customer-success/csm/success-plans/) for more details on how to do this.

### 1st Cadence Call: Future Growth Discussion & Checklist

⏰ **Target time:** Within 30 days of customer start date

The first [cadence call](/handbook/customer-success/csm/cadence-calls/) is typically the CSM's second conversation with the customer and when we start to deliver value through our efforts as a trusted advisor.

The completion of this second customer call marks the completion of customer onboarding, as we have collected all information needed and given the customer the tools they need to be successful going forward.

Once onboarding is complete, close the onboarding CTA and then move the customer into the `Adoption` phase of the customer lifecycle in Gainsight.

By accomplishing the following tasks, you'll know you have completed onboarding:

- [ ] Complete internal handoff, where CSM reviews the command plan, adoption goals, priorities, and stakeholders with the SAE/AE and SA
- [ ] Assign `GitLab Admin` and/or other persona roles to primary contacts
- [ ] Complete kickoff call, where the CSM:
  - [ ] Leads introductions (Less than 5 minutes)
  - [ ] Validates the customer's reason for purchase
  - [ ] Asks about any additional goals the customer has
  - [ ] Asks about the customer's DevSecOps toolstack
  - [ ] Asks about any additional customer stakeholders
  - [ ] Advises the customer on how to get [support](https://about.gitlab.com/support/) as well as how to sign up for security alerts
  - [ ] Raises the awareness at the customer that they bookmark our page for platform/service changes and announcements ([https://about.gitlab.com/blog/categories/bulletin-board/](https://about.gitlab.com/blog/categories/bulletin-board/)/)
- [ ] Complete initial draft of success plan, with the objective being their primary use case with the relevant [Stage Enablement playbook](/handbook/customer-success/playbooks/)
- [ ] Complete second call (first cadence), where the CSM:
  - [ ] Discusses how they will work with the customer towards their goals, collecting metrics for success, milestones/timelines, and establishing next steps
  - [ ] Discusses enablement opportunities (e.g. [workshops](/handbook/customer-success/csm/workshops/), Professional Services, GitLab documentation, etc.)
  - [ ] Shares available content for workshops and webinars and advocates for the customer to attend a session on Intro to GitLab and/or their primary use case
  - [ ] Discusses the monthly upgrade cadence for releases
  - [ ] (If self-managed) Discusses usage ping
- [ ] Complete filling out any relevant fields in the Gainsight Attributes tab of the customer 360

If you haven't been able to achieve all of this by the end of the second call, [document the reasons for the delay](#onboarding-delays) in your notes and aim to complete this by the next call. Please note the onboarding CTA currently asks you to log the First Value Date (#time-to-first-value) if the customer does not have service ping enabled; if you don't have this information yet, and everything else is complete, mark the onboarding as done regardless, and continue to work towards understanding the customer's progress towards first-value separately, logging it when known.

## Time to Value Metrics

The [Time to Value KPIs](/handbook/customer-success/customer-success-vision/#time-to-value-kpis) are developed to help us understand key facts about how we are serving our customers, and how we could improve. Below are the processes for how CSMs should update and track their Time to Value KPIs. For definitions, please see [Time to Value KPIs](/handbook/customer-success/customer-success-vision/#time-to-value-kpis). For data visualization, see [Customer Onboarding Dashboard](https://gitlab.gainsightcloud.com/v1/ui/home#58502af5-e7c2-4cbd-8645-d612b74424ff).

### Time to Engage

**Goal:** 14 days

**Required CSM action:** log the first Timeline entry (Call or Meeting)

**How is it calculated:**
Time to Engage is the number of days between the `Onboarding CTA Start Date` and the date of the first Timeline call or meeting entry. `Time to Engage` Calculation =  Timeline call or meeting entry Date -  Onboarding CTA Start Date. Example: If the Onboarding CTA Start Date is 2020-01-01 and the first call was 2020-01-12, then the `Time to Engage` would be 11 days.

**Note:** If the date of the first Timeline call or meeting is the same day as the Onboarding CTA Start Date, `Time to Engage` = 0. If the date of the first Timeline call or meeting is BEFORE the Onboarding CTA Start Date, that account will appear as a "0" for reporting.

**Why is this metric important?**
Helps determine the time it takes to first engagement with the customer. Engagement is defined as the first CSM meeting with the customer.

### Time to First Value

**Goal:** 30 days

**Required CSM action:** confirm Cloud License data is in Gainsight, if not, then manually update the `First Value Date`

**How is it calculated:**
Time to First Value is calculated by taking the `Original Contract Date` and subtracting `First Value Date`, which is a manual input on the customer's Attributes section of the C360.

If Cloud License data is in Gainsight, the `First Value Date` will be automatically populated by the system when `Known License Utilization` meets or exceeds 10%. If Cloud License data is not available, it is the responsibility of the CSM to manually update the date field based on their best estimate.

**Why is this metric important?**
Allows visibility into customer usage of GitLab. Customer is considered to have met first value when at least 10% of their Production licenses are activated.

**A few pointers to determine best estimate for self-managed customers**
Note: This is not a holistic list

- Is GitLab installed and ready to be used by the customers?
- Is user management configured correctly and are users able to use the product?
- In case of a migration: Is the migration finished or is the migration in progress and are migrated users already able to use the product?
- If the customer has upgraded from CE/Starter or if the customer has been assigned a CSM due to growth but was already a customer, then the Time to Value is the same as the date a CSM is assigned.

### Time to Onboard

**Goal:** 45 days

**Required CSM action:** Close the Onboarding CTA

**How is it calculated:**
Time to Onboard is the difference between `Onboarding CTA Start Date` and the date the Onboarding CTA is closed. For example, the `Onboarding CTA Start Date` is 2020-08-15 and the Onboarding CTA was closed on 2020-09-18, the Time to Onboard would be 34 days.

**Why is this metric important?**
Helps determine the length of time it took to complete all of the onboarding tasks associated with a customer.

### Instance/Namespace Time to Value Metrics

Each Time-to-Value metric is calculated by the difference between the `Subscription Start Date` and the date the product usage metric was achieved. All metrics are calculated at the subscription level. These metrics do not run back historically, and are only calculated for subscriptions that began from February 2022 onwards.

- Time to License Utilization (10%, 50%, 80%): The first date the instance reached 10%, 50%, and 80% license utilization.
- Time to DevSecOps Deployment: The first date the instance reached green health for DevSecOps deployment (>= 20%).
- Time to SCM Deployment: The first date the instance reached green health for SCM deployment (>= 40%).
- Time to CI Deployment: The first date the instance reached green health for CI deployment (>=25%).

**Note**: There are cases where the time-to-value metric may result in a negative value. This can occur if a company has begun using their instance and reached the time-to-value metric prior to their subscription start date (i.e., they achieved value during their trial or if they were on a free instance).

## Command Plan

A Command Plan is used as a living pre-sales document, and its objectives are converted into Gainsight Success Plan objectives at the time of account onboarding.

### Command Plan Attainment Reporting in Gainsight

To ensure the customer attains their original purchase intent, the field can now monitor the [Customer Health Dashboard](https://gitlab.gainsightcloud.com/v1/ui/dashboard#/6fe58b23-f27b-45a2-b2bc-1aca54a3495f) in Gainsight, which provides quick snapshot into the following fields and information related to an account's Command Plan:

- `Solution` (i.e. Platform, Security, Automate Software Delivery, etc.)
- `Primary Capability` (i.e. Agile, CI, DevSecOps, etc.)
- `Primary Value Driver` (i.e. Reduce Security & Compliance risk, Increase operational efficiencies, etc.)
- `Associated Score Color` (i.e. Red, Yellow, Green)
- `Metrics` - Filled in by Sales (*What is the business case? Have you quantified the challenge(s) they are having and the impact to the organization? What quantifiable metrics / measurements have been identified? How will you prove the business benefits of the solution?*)
- `Identify Pain` - Filled in by Sales (*The problems created by the customers current state. What are the biggest business and technical pains? Are those pains resulting in lost productivity, reduced revenues, increased costs, etc.? How severe is the pain? Does the customer perceive that the pain of change is less than the pain of doing nothing and sticking with the status quo? Is there a compelling event that adds to the pain?*)
- `Date CP Use Case Turned Green` - Stamped date to identify the exact date the customer attained their original purchase intent.

This report should help CSMs and Sales track progress toward their customer's goals as recorded in the Command Plan in Salesforce prior to purchase, while also being able to help the customer and Account Teams understand the customer's achievement of their primary use case.

## Onboarding delays

Given the importance of onboarding to the customer's journey and our ability to drive success, we want to move through it as quickly as possible. If onboarding is delayed, either because of something on the GitLab side or the customer side, we need to document the reasons and take appropriate action.

### Document the delay

The details around why onboarding is delayed should be documented in the following places:

- Onboarding CTA comments field
- Update timeline entry, with a [revised CSM Sentiment](/handbook/customer-success/csm/health-score-triage/#tracking-customer-health)

### Risk and triage

If the delay is caused by the customer (e.g. disinterest, lack of engagement/"going dark") then the [account has risk](/handbook/customer-success/csm/health-score-triage/#tracking-customer-health) and should be flagged.

- Add an [At-Risk timeline entry](/handbook/customer-success/csm/health-score-triage/#at-risk-timeline-entries)
- [Communicate the customer risk](/handbook/customer-success/csm/health-score-triage/#at-risk-communication-guidelines)
- Determine if an [account escalation](/handbook/customer-success/csm/health-score-triage/#when-to-open-an-account-escalation) is required.

## Gainsight for Onboarding

### CTA Creation Criteria

[CSM-assigned accounts](/handbook/customer-success/csm/services/): When a customer signs at or reaches the CSM-assigned threshold, a [Call To Action (CTA)](/handbook/customer-success/csm/gainsight/ctas/) is triggered within Gainsight.

If the CSM field is not populated, a CTA is created for the CSM Manager. Once populated, an onboarding CTA is kicked off for the CSM. While the opening of an onboarding CTA is an automated process, it can also be created manually by going to the Cockpit, clicking `+ CTA` and then choosing the onboarding playbook.

### CTA Content and Process

The CTA guides the CSM through the initial customer engagement, covering the topics discussed in this handbook page.

CSMs and CSM Managers can use Gainsight dashboards to manage customers currently in onboarding and to ensure progress is being made, as well as report on metrics achieved at the end of each quarter.
