---
title: Labels and issue boards
description: Support Readiness policies page for labels and issue boards
canonical_path: "/handbook/support/readiness/operations/docs/policies/labels_and_issue_boards"
---

## How we use GitLab Labels

The Support Readiness team uses labels to help us categorize and manage our
work.

We use labels to triage and categorize every issue we are involved in.

During issue creation, we use a specific issue template for each area we handle
so that we can automatically add group labels and assignees based on our
[division of responsibilities](/handbook/support/readiness/operations/division_of_responsibilities/).

## Labels usage and description

### Progress Labels

| Label | Meaning |
|-------|---------|
| ![Readiness::Triage](https://img.shields.io/badge/Readiness-Triage-9400d3) | Used to track issues that are to be triaged and need to be qualified as requiring Support Readiness input |
| ![Readiness::Consulting](https://img.shields.io/badge/Readiness-Consulting-8fbc8f) | Used to track issues that require input and discussion from the Support Readiness team to determine feasibility of potential changes |
| ![Readiness::Planning](https://img.shields.io/badge/Readiness-Planning-6699cc) | Used to track issues that the Support Readiness team are to undertake. During this stage, required resources will be identified and a schedule will be determined |
| ![Readiness::Development](https://img.shields.io/badge/Readiness-Development-cc338b) | Used to track issues that involve changes by Support Readiness that undergoing active development |
| ![Readiness::Deployment](https://img.shields.io/badge/Readiness-Deployment-36454f) | Used to track issues that involve changes by Support Readiness that have been developed and have either been deployed or are awaiting the next deployment cycle |
| ![Readiness::Validation](https://img.shields.io/badge/Readiness-Validation-e6e6fa) | Used to track issues that involve changes by Support Readiness that have been deployed and are now awaiting review/confirmation that the solution is as expected |
| ![Readiness::Completed](https://img.shields.io/badge/Readiness-Completed-808080) | Used to track issues that involve changes by Support Readiness. The solution has been successfully developed and validated by the requester and is now complete |
| ![Readiness::Blocked](https://img.shields.io/badge/Readiness-Blocked-ff0000) | The issues/MRs that are blocked and Support Readiness is not able to actively work on them |
| ![Readiness::Backlogged](https://img.shields.io/badge/Readiness-Backlogged-34495e) | For issues backlogged by Support Readiness |

### Planning Labels

| Label | Meaning |
|-------|---------|
| ![Readiness Priority::Triage](https://img.shields.io/badge/Readiness_Priority-Triage-330066) | Priority has not yet been set |
| ![Readiness Priority::Next Deployment](https://img.shields.io/badge/Readiness_Priority-Next_Deployment-330066) | It is slated for the next deployment |
| ![Readiness Priority::Current Quarter](https://img.shields.io/badge/Readiness_Priority-Current_Quarter-330066) | It is slated for a deployment in the current quarter |
| ![Readiness Priority::Next Quarter](https://img.shields.io/badge/Readiness_Priority-Next_Quarter-330066) | It is slated for a deployment in the next quarter |
| ![Readiness Priority::This Fiscal Year](https://img.shields.io/badge/Readiness_Priority-This_Fiscal_Year-330066) | It is slated for a deplyoment in the current fiscal year |
| ![Readiness Priority::Backlogged](https://img.shields.io/badge/Readiness_Priority-Backlogged-330066) | It is slated for the deplyoment in the future beyond the current fiscal year |

### Category Labels

| Label | Category | Used in | Description |
|:-----:|----------|---------|-------------|
| ~"Support-Ops-Category::Account Deletions" | Category | Issue Tracker Project | The issue/MR is about Account Deletions |
| ~"Support-Ops-Category::Agent Signatures" | Category | Issue Tracker Project | The issue/MR is about agent signatures |
| ~"Support-Ops-Category::Apps" | Category | Issue Tracker Project | The issue/MR is about Zendesk Apps |
| ~"Support-Ops-Category::Audit" | Category | Issue Tracker Project | The issue/MR is about Audits |
| ~"Support-Ops-Category::Automations" | Category | Issue Tracker Project | The issue/MR is about Automations |
| ~"Support-Ops-Category::Calendly" | Category | Issue Tracker Project | The issue/MR is about Calendly |
| ~"Support-Ops-Category::Documentation" | Category | Issue Tracker Project | The issue/MR is about Documentation |
| ~"Support-Ops-Category::Forms" | Category | Issue Tracker Project | The issue/MR is about Forms and Ticket Fields|
| ~"Support-Ops-Category::GitLab Projects" | Category | Issue Tracker Project | The issue/MR is about GitLab Projects that support ops maintains |
| ~"Support-Ops-Category::GitLab Settings" | Category | Issue Tracker Project | The issue/MR is about GitLab Settings that support-ops maintains |
| ~"Support-Ops-Category::Macros" | Category | Issue Tracker Project | The issue/MR is about macros |
| ~"Support-Ops-Category::Missing" | Category | Issue Tracker Project | It is missing a category label |
| ~"Support-Ops-Category::Orgs and Users" | Category | Issue Tracker Project | The issue/MR is about organizations and users |
| ~"Support-Ops-Category::Other" | Category | Issue Tracker Project | A catchall |
| ~"Support-Ops-Category::Pagerduty" | Category | Issue Tracker Project | The issue/MR is about Pagerduty |
| ~"Support-Ops-Category::Provisioning and Deprovisioning" | Category | Issue Tracker Project | The issue/MR is about provisioning/deprovisioning |
| ~"Support-Ops-Category::Shadowing" | Category | Issue Tracker Project | The issue/MR is about shadowing |
| ~"Support-Ops-Category::Sync" | Category | Issue Tracker Project | The issue/MR is about the ZD<>SFDC sync |
| ~"Support-Ops-Category::Theme" | Category |  Issue Tracker Project | The issue/MR is about Zendesk theme |
| ~"Support-Ops-Category::Triggers" | Category | Issue Tracker Project | The issue/MR is about Triggers |
| ~"Support-Ops-Category::Views" | Category | Issue Tracker Project | The issue/MR is about Views |
| ~"Support-Ops-Category::Zendesk Settings" | Category | Issue Tracker Project | The issue/MR is about Zendesk settings (SLAs, schedules, etc.) |
| ~"Zendesk::Global" | Zendesk Instance | Issue Tracker Project | This relates to the Zendesk Global instance |
| ~"Zendesk::US-Federal" | Zendesk Instance | Issue Tracker Project | This relates to the Zendesk US Federal instance |

## Issue Boards

You can find our issue boards via:

- [Support Readiness - Progress](https://gitlab.com/groups/gitlab-com/support/-/boards/7568554)
- [Support Readiness - Planning](https://gitlab.com/groups/gitlab-com/support/-/boards/7568559)
