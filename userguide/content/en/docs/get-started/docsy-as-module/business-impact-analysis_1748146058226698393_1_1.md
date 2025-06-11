---
title: "Business Impact Analysis"
description: "Information about the Business Impact Analysis performed by the Security Risk Team"
controlled_document: true
---

## Purpose

The Business Impact Analysis (BIA) helps determine the systems critical to serving GitLab's Customers.   The output of the BIA is the designation of a [Critical System Tier](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/) (CST) for a new system. The CST aids Security Compliance in Scoping and is also available to help business owners determine the prioritization of system restoration efforts in the event of a disruption.

**Note:** In adjacent to the BIA, questions may be asked to satisfy global privacy regulation requirements pertaining to a system's [Personal Data](/handbook/security/standards/data-classification-standard/#data-classification-definitions) processing.

## Scope

The BIA procedure covers all new systems to be added to GitLab's [Tech Stack](/handbook/business-technology/tech-stack-applications/).

## Roles and Responsibilities

|Role|Responsibility|
|----------|------------------------------|
|[Security Risk Team](/handbook/security/security-assurance/security-risk/)|Responsible for executing and maintaining this procedure.|
|[Business/Technical Owner](/handbook/business-technology/tech-stack-applications/#tech-stack-definitions) of a System|Responsible for answering BIA questions during procurement and validating CST designation proposed by Security Risk.|
|Security Assurance Management (Code Owners)|Responsible for approving significant changes and exceptions to the BIA.|

## BIA Procedures

### New Systems

All requisitions in [Zip](/handbook/finance/procurement/#how-to-start-the-procurement-process) that involve the use of a new system to collect, store, or transmit GitLab data require a BIA.

When creating this type of requisition, the Business/Technical Owner is prompted to answer two BIA questions at minimum:

1. What is the impact of System disruption (System is unavailable)?
2. Please describe the potential impact of System disruption. Specify any GitLab team(s) affected.

The answers to these questions help the Security Risk Team designate a Critical System Tier for the new system during the [TPRM Assessment](/handbook/security/security-assurance/security-risk/third-party-risk-management/#tprm-assessment-requirements) process. Additional questions may be asked by Security Risk to validate the assignment of an appropriate CST.

### Quality Reviews

The output of the BIA (designation of a Critical System Tier for a new system) is peer-reviewed by a member of Security Risk at the conclusion of the TPRM Assessment.

## Reporting

The output of the BIA is reported when [adding a new system](/handbook/business-technology/tech-stack-applications/#add-new-system-to-the-tech-stack) to GitLab's Tech Stack.  The data field for reporting is: `critical_system_tier`.

## Exceptions

System Proof of Concepts (POC), Proof of Values (POV), and Pilots are exempt from BIA procedures.

## References

- [Critical System Tiering Methodology](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/)
- [Data Classification Standard](/handbook/security/standards/data-classification-standard/)
