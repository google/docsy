---

title: "CS Rep Account and Oppty Assignment Processes"
description: "This document describes how CSMs and SAs are assigned to accounts and Opportunities"
---
<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Purpose

Document how, why, when, and where CSMs and SAs are populated in Gainsight and Salesforce for the end result of tracking ownership and tracking for compensation and President’s Club.

[GitLab issue](https://gitlab.com/gitlab-com/sales-team/field-operations/customer-success-operations/-/issues/2974) for tracking.

### CSMs

CSM Managers add their CSMs to the appropriate account in Gainsight. From there, a real-time (immediate) rule pushes this data to Salesforce to the `Customer Success Manager` field (API field is `Technical_Account_Manager_LU__c`). Salesforce then takes the CSM on the account and stamps it on the opportunity’s Customer Success Manager field (API field is `Technical_Account_Manager__c`).

#### Impact

This results in ability to track account ownership, CSM workload for load balancing, compensation payout, and President’s Club tracking.

#### Automations

1. CSM on the Gainsight account is synced to Salesforce account
   1. This is a real-time rule (“Push CSM change to SFDC”)  in Gainsight so Gainsight will attempt to sync the new value to Salesforce immediately
   1. We also have a daily catch rule (“Load to SFDC: Catch for non-synced CSM”) that compares the CSM value in SFDC and GS and should update any values in SFDC that do not match GS
1. CSM on the Salesforce Account is stamped on the opportunity at from open to close, during every stage using a Salesforce Flow. When the CSM is updated in the account, it pushes out to all open opportunities using that Flow. Each update is instantaneous and not a part of a batch. See [issue](https://gitlab.com/gitlab-com/sales-team/field-operations/systems/-/issues/3852) for details.
   1. Override: The CSM can be overridden in Open Opps directly be certain profiles (sales comp, finance, SOPS, integration user, and sys admin). Each
   1. The CSM gets locked on the opp on opp close

### SAs

SAs add themselves as the `Solutions Architect` on the Account object in Salesforce. For compensation and President’s Club, the SA must be listed as the `Primary Solution Architect` on the Opportunity to be paid. This is a manual process and is done by individual SAs in Salesforce. SAs have edit access for both fields (on the account and Oppty). An SA can only edit the Oppty field while it is open; once it is closed, only certain profiles can edit it (sales comp, finance, SOPS, integration user, and sys admin).

#### Impact

The end result is knowing average SA workload, compensation payout, and President’s Club tracking.

#### Automations

1. When a new Oppty is created, the SA on the account gets copied onto the new opportunity. Impact: it is the interest of the SA to add their name to the account!

#### Limitations/Challenges

Note: all limitations below have to do with the SA as the Primary SA and the activities logged (Salesforce tasks).

1. Primary versus supporting SAs: When there are multiple SAs involved on a single opportunity this can be a problem. For example, you will have SA #1 listed as the Primary SA, SA #1 will have activities logged to this opp, but then you will also have SA #2 logging activities to the same opp. This is especially common for SAs on Brian Wald's team (SFO Team)
1. When SA Activities are logged to an opportunity that is either merged to another opportunity and/or marked as a duplicate opportunity. Making sure that all the tasks logged to these previous opportunities (merged/duplicate) get mapped to the newer "primary" opportunity is complex and handled by custom SQL for the SA dashboards.
1. When SA Activities are logged to an account rather than an opportunity. Some of these Salesforce tasks are valid since the SA may be working with a prospect/customer before there is an opportunity created but other times it is mostly due to troops UI making it difficult to select the correct opportunity. We currently have some custom SQL logic that ties these SA Activities to opportunities based on the SFDC Account ID and a specific timeframe of when the activity occurred with respect to the opportunity close date but it is certainly not 100% accurate.
