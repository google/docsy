---

title: "Gainsight: Using Gainsight Statistics in SFDC"
description: "This page is intended for the broader GitLab team to know what Gainsight metrics, fields, entries, and other attributes are available to them in Salesforce. Example: With syncing customer health to Salesforce, it is important to know what those fields are and how to use them."
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Overview

This page is intended for the broader GitLab team to know what Gainsight metrics, fields, entries, and other attributes are available to them in Salesforce. Example: with syncing customer health to Salesforce, it is important to know what those fields are and how to use them.

For more information on general Product Usage Reporting, see [Using Product Usage Reporting in Gainsight](/handbook/customer-success/product-usage-data/using-product-usage-data-in-gainsight/).

## Account

### Customer Attributes

| Field Name | Description | Best Practices | Reference |
|:---|:---|:---|:---|
| [GS] Customer Conversion Source  | The purpose is understanding where the customer came from — this is about sourcing (e.g., marketing/SDR'ing as an analogy). | During customer onboarding, these fields should be filled out in Gainsight. | [Link](/handbook/customer-success/csm/gainsight/deployment-types/) |
| [GS] First Value Date | Time to First Value is calculated by taking the Original Contract Date and subtracting First Value Date, which is a manual input on the customer's Attributes section of the C360. | If Cloud License stats are in Gainsight, the First Value Date will be automatically populated by the system when Known License Utilization meets or exceeds 10%. If Cloud License stats are not available, it is the responsibility of the CSM to manually update the date field based on their best estimate.<br>Required CSM action: confirm Cloud License stats are in Gainsight, if not, then manually update the First Value Date | [Link](/handbook/customer-success/csm/onboarding/#time-to-first-value) |
| [GS] Geo? | Is your customer using Geo? Manually filled by the CSM |  | [Link](https://about.gitlab.com/solutions/geo/) |
| [GS] GitLab Issue Link | Account related GitLab Issue(s) |  |  |
| [GS] Google Doc Notes | Google Doc Notes URL Manually filled by the CSM |  |  |
| [GS] High Availability? | Does your customer require High Availability (HA) solutions and/or zero-downtime upgrade? Manually filled by the CSM |  | [Link](https://docs.gitlab.com/ee/administration/reference_architectures/) |
| [GS] Hosting | What is their (primary) hosting setup? Manually filled by the CSM |  | [Link](/handbook/customer-success/csm/gainsight/deployment-types/#hosting) |
| [GS] Last Activity Date | This field reflects the latest Call, Meeting, or Email activity entry logged for the customer. See handbook for details |  | [Link](/handbook/customer-success/csm/gainsight/timeline/#last-activity-date) |
| [GS] Last CSM Activity Date | Last activity as recorded in GS by CSMs to track synchronous conversations with their customer |  | [Link](/handbook/customer-success/csm/gainsight/timeline/#last-activity-date) |
| [GS] Lifecycle Stage | Each customer deployment goes through the following lifecycle stages: <br>Onboarding<br>Implementation<br>Adoption<br>Optimize & Grow |  | [Link](/handbook/customer-success/vision/#lifecycle-stages) |
| [GS] Provider | Logs what (cloud) provide the customer uses or if they’re on-premises. Manually filled by the CSM  |  | [Link](/handbook/customer-success/csm/gainsight/deployment-types/#provider) |
| [GS] Slack Channel Link | Customer slack channel URL |  |  |
| [GS] Summary | This is a general summary field for CSMs to add relevant and helpful information to manage the account.  |  | [Link](/handbook/sales/gainsight/account-planning/#the-account-snapshot) |
| [GS] CSM Prioritization | This field is used to prioritize accounts, usually for renewals or expansion opportunities. See handbook for details |  | [Link](/handbook/sales/field-operations/customer-success-operations/gainsight/#gainsight-to-salesforce-sync-data) |
| [GS] Total Number of Account Plans | Total number of account plans recorded in the record |  |  |
| [GS] Total Number of Success Plans | Total number of success plans recorded in the record |  |  |
| [GS] Triage Issue URL  | Deep link to triage issue. Remove link once triage period is complete. Manually filled by the CSM | Quick link to the GitLab triage issue if the customer is at-risk | [Link](/handbook/sales/field-operations/customer-success-operations/gainsight/#gainsight-to-salesforce-sync-data) |
| [GS] Support Issues Measure | This is the Product Risk Measure as it is pushed over from Gainsight to Salesforce |  |  |

### Customer Health

| Field Name | Description | Best Practices | Reference |
|:---|:---|:---|:---|
| [GS] Architecture Diagram Link | The URL for the customer’s architectural diagram, whether housed in GitLab or elsewhere. Manually filled by the CSM  |  |[Link](/handbook/sales/field-operations/customer-success-operations/gainsight/#gainsight-to-salesforce-sync-data)|
| [GS] Health: CD  | Automated scoring of the customer’s usage of the CD use case. See Handbook for details | Measures the customer’s overall adoption of CD. Useful for a high level view of the use case adoption, very helpful to compare with other use cases as well. |[Link](/handbook/customer-success/product-usage-data/use-case-adoption/#continuous-delivery-cd)|
| [GS] Health: CI  | Automated scoring of the customer’s usage of the CI use case. See Handbook for details | Helpful indicator to know if the customer is using CI across their team. Since CI is a sticky feature in GitLab, this is a good indicator of risk and strength for an existing customer |[Link](/handbook/customer-success/customer-health-scoring/#devops-score)|
| [GS] Health: DevSecOps  | Automated scoring of the customer’s usage of the DevSecOps use case (applicable only to Ultimate). See Handbook for details | Very important to know if the customer is using Ultimate-level features. Good indicator of downside risk |[Link](/handbook/customer-success/product-usage-data/use-case-adoption/#devsecops)|
| [GS] Health: License Utilization | Health of the customer’s consumption of licenses relative to the number purchased. See Handbook for details | Very helpful to know if the customer is appropriately deploying their purchased licenses. Good warning risk if the customer is red or yellow |[Link](/handbook/sales/field-operations/customer-success-operations/gainsight/#gainsight-to-salesforce-sync-data)|
| [GS] Health: Overall Product Usage | The summary health of the different product usage health components, such as License Utilization and use cases | Useful to know how the customer is at adopting the product by seeing an overall usage score of License Utilization and use cases |[Link](/handbook/sales/field-operations/customer-success-operations/gainsight/#gainsight-to-salesforce-sync-data)|
| [GS] Health: SCM | SCM Adoption is measured based on: # of users running merge requests in last 28 days / total licenses soldAutomated scoring of the customer’s usage of the SCM use case. See Handbook for details | Useful to understand the customer’s adoption and usage of SCM as a use case. For example, did the customer buy for SCM and they’re red, or do they not care at all? |[Link](/handbook/customer-success/product-usage-data/use-case-adoption/#source-code-management-scm)|
| [GS] Health Score Value | Account Health Score is an aggregation of key metrics for a multi-perspective view of the customer. Represented as a number between 0-100. |  |[Link](/handbook/customer-success/customer-health-scoring/#customer-health-score)|
| [GS] Overall Health Score  | This is the Overall Health Score Color for this customer as pushed over to SFDC from Gainsight | Good metric to understand how the customer is doing, broadly speaking |[Link](/handbook/customer-success/csm/health-score-triage/#health-assessment-guidelines)|
| [GS] CSM Sentiment | If CSM-owned, this is what the CSM thinks the health of this account should be. Gainsight is the SSOT for this field and its value can only be updated in Gainsight. | If CSM-led, this Signifies the CSM’s perceived view of the account. Useful for spotting any risks if yellow or red |[Link](/handbook/customer-success/csm/health-score-triage/#tam-sentiment)|
| [GS] Health: User Engagement | To measure the overall user-level engagement with GitLab, irrespective of use cases. | Useful to know how many users are logging in and active within GitLab |[Link](/handbook/customer-success/csm/health-score-triage/#gainsight-scorecard-attributes-and-calculations)|

## Opportunity

| Field Name | Description | Reference |
|:---|:---|:---|
| Opportunity Health | Opportunity Health is the Account's Health at the time of the Opportunity and is updated throughout the Opp until it is closed - entered through GS | [Link](/handbook/customer-success/csm/renewals/#account-health)  |
| Risk Reasons | Risk Reasons are inputted by CSMs which are relevant to that Renewal Opportunity - entered through GS | [Link](/handbook/customer-success/csm/renewals/#risk-reason)  |
| Risk Type | Risk Type is inputted by CSMs for the type of risk faced in the renewal (downtier, seat loss, full churn...) - entered through GS | [Link](/handbook/customer-success/csm/renewals/#risk-type)  |

## Contacts

| Field Name | Description | Reference |
|:---|:---|:---|
| Company Person Inactive Contact | Allows CSMs to identify inactive contacts | |
| Company SFDC Account Id | Id associated with a customer account in Salesforce | [Link](/handbook/sales/field-operations/customer-success-operations/gainsight/#salesforce-connector)  |
| Email | Company Person’s Email Id | [Link](/handbook/sales/field-operations/customer-success-operations/gainsight/#salesforce-connector)  |
| First Name | Company Person’s  First Name |  |
| GitLab Role | Determines the level of access assigned to any specific user in a business | [Link](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/#gitlab-admin-contacts)  |
| GS Email Opt Out | The Contact’s global opt out flag that syncs between Gainsight, Salesforce, and Marketo |  |
| Initial Source | Lead/Contact Source |  |
| Last Name | Contact Last Name |  |
| SFDC Contact ID | Contact Identifier  |  |
| Title | Contact’s Job Title |  |

## Activities

| Field Name | Description | Reference |
|:---|:---|:---|
| Program Emails | Some of the Program Emails can be found cataloged within the Account Page > Activity History section in SFDC. There you can see the log of the Email Subject Line & see the `Assigned to` field = “Gainsight Integration” |  |
| Survey Results | These surveys are used to measure customer loyalty, satisfaction, and enthusiasm with GitLab and can act as an early warning system about a customer’s adoption.  | [Link](/handbook/sales/field-operations/customer-success-operations/cs-ops-programs/nps-csat-scores/)|
| Timeline Activities  | The Timeline view in Gainsight gives us a chronological overview of our activities with the customer. It's a valuable tool to see our interactions and progression on success efforts over time. | [Link](/handbook/customer-success/csm/gainsight/timeline/#how-to-log-activities-in-timeline)  |

## Customer Subscriptions

| Field Name | Description | Reference |
|:---|:---|:---|
| [GS] Time to First 10 | The # of days to reach 10% license utilization | [Link](/handbook/customer-success/csm/health-score-triage/#license-usage-health-table) |
| [GS] Time to First 50 | The # of days to reach 50% license utilization | [Link](/handbook/customer-success/csm/health-score-triage/#license-usage-health-table) |
| [GS] Time to First 80 | The # of days to reach 80% license utilization | [Link](/handbook/customer-success/csm/health-score-triage/#license-usage-health-table) |
| [GS] Time to First CI | The # of days for a healthy % of users to deploy CI as defined in the handbook | [Link](/handbook/customer-success/product-usage-data/use-case-adoption/#continuous-integration-ci) |
| [GS] Time to First SCM | The # of days for a healthy % of users to deploy SCM as defined in the handbook | [Link](/handbook/customer-success/product-usage-data/use-case-adoption/#source-code-management-scm) |
| [GS] Time to First DSC | The # of days for a healthy % of users to deploy DevSecOps as defined in the handbook | [Link](/handbook/customer-success/product-usage-data/use-case-adoption/#devsecops) |
| [GS] Time to First CD | Coming Soon! |  |
