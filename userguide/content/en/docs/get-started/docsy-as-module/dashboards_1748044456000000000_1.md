---
title: Gainsight Dashboards
description: >-
  An overview of the logic going into the reports found within the Gainsight
  Dashboards.
---

## Specific detail on various Gainsight dashboards

Below are select dashboards, with descriptions of what each widget on the dashboards means, in order to help Gainsight users understand what the information is telling them and what action, if any, is required.

### CSM Burn-Down Dashboard

#### Onboarding

1. **1st Engage >14**
    1. Count of customers who have not had a Timeline entry logged more than 14 days since their onboarding CTA start date
1. **1st Value >30 Days**
    1. Count of customers who have not achieved `Known License Utilization` of =>10%, or the CSM has manually logged a First Value Date if usage data is unavailable, by more than 30 days since their original contract date
1. **Total Onboard > 45 Days**
    1. Count of customers who have open onboarding CTAs that have been open for more than 45 days

#### Engagement

1. **PR1 Cadence >30 Days**
    1. Count of P1 customers who have not had a logged Timeline activity within the past 30 days
1. **PR2 Cadence >60 Days**
    1. Count of P2 customers who have not had a logged Timeline activity within the past 60 days
1. **CSM Sentiment >90 Days**
    1. Count of customers who have not had the CSM Sentiment healthscore updated within the past 90 days
1. **Non-Green Success Plans (PR1/PR2)**
    1. Count of customers who do not have a green success plan, categorized into P1 and P2 buckets
1. **PR1 Success Plans: No Activity >60 days**
    1. Count of P1 customers who have not had activity/updates in their success plans within the past 60 days
1. **PR1 - No EBR in 12 Months**
    1. Count of P1 customers who have not had an EBR logged in Timeline within the past 12 months
1. **Green PR1 Success Plans: 0 Objectives**
    1. Count of P1 success plans that are otherwise green but do not have any open objectives
1. **PR1 SP Percentage by CSM Team
    1. Percentage breakdown of Success Plans by Account Health, Green, Yellow, and Red

#### Enablement & Expansion

1. **Stage Adoption: No Activity >60 Days**
    1. Count of customers who have open stage adoption CTAs that have not had activity/updates within the past 60 days
1. **Stage Adoption >175 Days Total Age**
    1. Count of customers who have open stage adoption CTAs that are over 175 days old
1. **Pr1 No GitLab Admin Assigned**
    1. Count of P1 customers who do not have a [GitLab Admin](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/#gitlab-admin-contacts) persona assigned in the contact list
1. **Pr2 No GitLab Admin Assigned**
    1. Count of P2 customers who do not have a [GitLab Admin](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/#gitlab-admin-contacts) persona assigned in the contact list

#### Risk

1. **N/A Risk Impact**
    1. Customers who are at risk but do not have the `Risk Impact` field defined in the CTA details
1. **N/A Risk Reason**
    1. Customers who are at risk but do not have the `Risk Reason` field defined in the CTA details
1. **No Risk Update >35 Days**
    1. Customers who are at risk but do have not had a Risk update on the Timeline within the past 35 days

#### Product Usage Data

1. **Unknown Instances - CSM Owned**
    1. Count of self-managed customers who have instances populated but are not [labeled](/handbook/customer-success/product-usage-data/using-product-usage-data-in-gainsight/#updating-self-managed-instance-type)

### CSM Proactive Dashboard

#### Upcoming this Month

1. **Cadence Calls Due:**
    1. Count of P1 customers that haven't had a Timeline Entry with Meeting type: Cadence Call in the past 30 days and P2 Customers in the past 60 days
1. **Upcoming CTAs:**
    1. Count of all New/Work in Progress CTAs that are due in the next 30 days
1. **Upcoming Success Plan Tasks:**
    1. Count of open success plan tasks due in the next 30 days. Does not include any overdue CTAs
1. **Upcoming EBRs for Scheduling:**
    1. Count of active EBRs that are due in the next 30 days. Does not look at overdue CTAs

#### Upcoming This Quarter

1. **Upcoming Success Plan Objectives:**
    1. Open/WIP Objectives due this fiscal year, not including any that are past their due date.
1. **Upcoming Stage Expansion:**
    1. Count of open/WIP expansion stage adoption objectives due over the current quarter
1. **Upcoming Stage Enablement:**
    1. Count of open/WIP enablement stage adoption objectives due over the current quarter
1. **Upcoming Renewals**
    1. Count of renewal opportunities with ARR > 50000 that aren't closed or unqualified with a close date in the current quarter
1. **Upcoming Upsell Due to Close**
    1. Count of "add-on business" opportunities that aren't closed but have a close date in the current quarter

#### Health and Utilization

1. **High License Utilization**
    1. Count of customers whose License Utilization exceeds 90%
1. **License Utilization Health**
    1. Bar chart comparing License Utilization Health across selected filters, which varies depending on how long they've been a customer.
    1. Details on how License Utilization is measured here: [Customer Health Assessment and Management - License Usage Health Table](/handbook/customer-success/csm/health-score-triage/#license-usage-health-table)
1. **CI Adoption Health**
    1. Bar chart comparing CI Adoption Health across selected filters.
    1. Details on how CI Adoption is measured here: [Customer Use Case Adoption](/handbook/customer-success/product-usage-data/use-case-adoption/)
1. **Customers Using Secure**
    1. This report shows a customer's usage of Free/Premium scanning features such as `SAST`, `Container Scanning`, and `Secret Detection`. This should allow CSMs to gauge the customer's interest in DevSecOps and prompt conversations around up-tiering to Ultimate.

### CSM Key Metrics Dashboard

This dashboard is a means for the CSMs to easily answer: 'how I am doing towards our team/individual metric goals?' This dashboard also gives insight on performance against metrics for FY22 president's club.  For FY22 the president club metrics for CSMs are:

1. Percentage of accounts with green success plans
1. Percentage of accounts with EBRs completed
1. Percentage of accounts with stage adoption initiatives completed (enable & expand)
1. Contribution to ARR growth (not shown in this dashboard)

---

#### 1st Section Reports

1. **Account Breakdown by CSM and Priority**
    1. Count of P1, P2 and P3 customers per CSM
2. **Percentage Green SPs by All Accounts**
    1. For all accounts by CSM, the percentage of green success plans
3. **Percentage EBRs by all Accounts**
    1. For all accounts by CSM, the percentage of successful EBRs
4. **Percentage Closed Stage Enablement CTAs**
    1. For all accounts by CSM, the percentage of closed stage enablement CTAs
5. **Percentage Open Stage Enablement CTAs**
    1. For all accounts by CSM, the percentage of open stage enablement CTAs
6. **Percentage Closed Expansion CTAs**
    1. For all accounts by CSM, the percentage of closed stage expansion CTAs
7. **Percentage Open Expansion CTAs**
    1. For all accounts by CSM, the percentage of open stage expansion CTAs

#### P1 Accounts - 2nd Section

1. **Percentage of Accounts with Green SPs PR1**
    1. For all P1 accounts by CSM, the percentage of green success plans
2. **Percentage EBRs by CSM PR1**
    1. For all P1 accounts by CSM, the percentage of successful EBRs
3. **Percentage Closed Stage Enablement CTAs PR1**
    1. For all P1 accounts by CSM, the percentage of closed stage enablement CTAs
4. **Percentage Open Stage Enablement CTAs PR1**
    1. For all P1 accounts by CSM, the percentage of open stage enablement CTAs
5. **Percentage Closed Expansion CTAs PR1**
    1. For all P1 accounts by CSM, the percentage of closed stage expansion CTAs
6. **Percentage Open Stage Expansion CTAs PR1**
    1. For all P1 accounts by CSM, the percentage of closed stage expansion CTAs
