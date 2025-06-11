---
title: "SOX CUEC Mapping Procedure"
---

## Purpose

In accordance with ITGC SR.1 - SOC Report Review, GitLab executes annual CUEC mappings of our internal controls to each SOC report associated with a SOX in scope application to ensure controls are adequately designed to address the CUEC requirements outlined in the SOC report. This activity is executed in Q1 of each fiscal year in order to gain the greatest coverage for the prior fiscal year.

## Scope

Formal CUEC mappings are limited to SOX in scope third party SaaS applications as defined by management.

### Coverage

All third party SOX system's SOC1 reports and bridge letters providing coverage over the prior fiscal year (2/1/20xx-1/31/20xx) will be obtained. If SOC1 reports are unavailable, SOC2 reports will obtained.

## Roles & Responsibilities

| Role | Responsibility |
| ------ | ------ |
| Security Risk - TPRM | Executes collateral collection and vendor interface - Creates CUEC Mapping templates and populates with CUECs & CSOCs |
| Internal Audit | Defines [scope of SOX systems](https://docs.google.com/spreadsheets/d/1ckVMp73RIMTVJYkVNf4OHc-QEXwS5Hxb3wGiXNlKouI/edit#gid=61580762) and facilitates mapping activities |
| Business Owners | Participates in mapping activities and provides final approval |

## Procedure

### Collateral Collection (Security Risk)

As Security Risk is responsible for executing third party security risk management activities the team will support CUEC activities through the gathering of necessary collateral, specifically SOC reports and bridge letters. Security Risk follows this process:

1. Validates the systematic scope by leveraging IAs SOX listing
1. Creates a GitLab Epic for activity tracking and transparency/visibility. This epic can be modeled after prior year.
1. Initiates requests and obtains the applicable third party reports and bridge letters
1. Reviews SOC reports for CSOCs and initiates requests to obtain all CSOC reports. Note that Security Risk does not determine whether or not GitLab business processes rely on CSOCs. As such, we request all CSOC SOC reports.
1. Validates that reports provide coverage over the prior fiscal year (2/1/20xx-1/31/20xx). If coverage is lacking additional requests are sent.

Throughout this process, Security Risk manages the status of requested reports and CUEC mapping template creation prior to handoff to IA.

### Google Sheet CUEC Template Creation (Security Risk)

To help formally hand-off the CUEC mapping activity, Security Risk creates CUEC mapping templates and adds CUECs/CSOCs from in-scope SOC reports. Security Risk follows this process:

1. Creates CUEC mapping templates in Google Sheets for each in-scope report (including CSOCs)
1. Lists all CUECs within the template
1. Shares the CUEC mapping templates and applicable reports with Internal Audit

### ITGC and Business Process Control Mappings (Business Owners/Internal Audit)

Once updated SOC report are obtained, Internal Audit will:

- Work with the Business Owner to map internal controls to the CUECs
- Coordinate with business owners to review SOC report findings and evaluate impact on business and ITGC controls
- Coordinate with business owners to review user control considerations to ensure appropriate GitLab controls are in place to address user control considerations
- Manage the status of business owner approvals

### Approvals (Business Owners)

At conclusion of the mapping activities the Business Owners must provide final approval of the mapping. This activity is managed by Internal Audit.

## Exceptions

N/A

## References

- [GitLab SOX ITGC Compliance](https://internal.gitlab.com/handbook/it/it-compliance/)
- [Third Party Risk Management](/handbook/security/security-assurance/security-risk/third-party-risk-management/)
