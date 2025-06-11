---
title: Dataclassificationstandard
doc_type: doc
doc_id: doc-441
last_edited_date: '2025-05-25'
last_edited_by: Ryan Laird
version: '1.0'
---

# Data Classification Standard

[Unsupported block type: image]
### This is a Controlled Document
In line with GitLab’s regulatory obligations, changes to [ controlled documents](https://handbook.gitlab.com/handbook/security/controlled-document-procedure/) must be approved or merged by a code owner. All contributions are welcome and encouraged.
## Purpose
The Data Classification Standard defines data type and categories and provides the associated Data Classification of each for the purposes of determining the level of protection to be applied to GitLab and Customer data throughout its lifecycle.
## Scope
The Data Classification Standard applies to all GitLab team members, contractors, consultants, vendors and other service providers that handle, manage, store or transmit GitLab data.
## Roles & Responsibilities
[Unsupported block type: table]
### GitLab Responsibilities
- 
- 
- 
### Customer Responsibilities
- GitLab customers are responsible for managing their own data, to include identification and classification according to their own internal requirements. GitLab handles Customer Data internally according to our non-disclosure obligations written in our Mutual Non Disclosure Agreement and the classifications identified in this standard.
## Standard
### Data Classification Definitions
- 
- 
### Sharing of Customer-provided data within GitLab
Regardless of whether customer uploaded/created/generated data exists within private (e.g., projects, groups, sub-groups, and profiles), confidential (e.g., issues and epics), or internal (e.g., comments/notes) GitLab objects, it should not be shared with third parties unless they are an [approved sub-processor](https://about.gitlab.com/privacy/subprocessors/), they are sharing data for required legal compliance purposes, or a separate legal approval has been obtained.
### Data Classification Levels
Examples of each data type: [See Data Classification Index](https://internal.gitlab.com/handbook/security/data_classification/) (internal only)
### RED
Restricted and must remain confidential. This is GitLab’s most sensitive data and access to it should be considered privileged and must be explicitly approved. Exposure of this data to unauthorized parties could cause extreme loss to GitLab and/or its customers. In the gravest scenario, exposure of this data could trigger or cause a business extinction event.
Examples include:
- Customer Data (see definition above in the [Data Classification Definitions section](https://handbook.gitlab.com/handbook/security/data-classification-standard/#data-classification-definitions))
Red Data may not be transmitted from an approved Red data source to any other systems or solutions without first obtaining approval from the Privacy and Security teams. Any Vendors that process Red Data must first undergo a factual and legal analysis that justifies their processing in accordance with our Customer agreements, as well as global privacy and data security laws. For any questions or concerns related to the transmission of Red data between systems, please reach out to @Security-Risk within the #Sec-Assurance channel.
### ORANGE
Data subject to laws and regulation that should not be made generally available. Unauthorized access or disclosure could cause significant or financial material loss, risk of harm to GitLab if exposed to unauthorized parties, break contractual obligations, and/or adversely impact GitLab, its partners, employees, contractors, and customers.
Examples include:
- Personal Data 
- GitLab Intellectual property
- Customer metadata
- Audit logs
- Open security incidents, vulnerabilities and risks
### Personal Data Exception
While Personal Data is classified as Orange, there is an exception for GitLab Team Member names, their work email addresses, and their GitLab usernames, which are classified as Yellow. These two Personal Data elements are not considered high-risk or sensitive types of Personal Data. Given GitLab’s value of [transparency](https://handbook.gitlab.com/handbook/values/#transparency) and because GitLab is [public by default](https://handbook.gitlab.com/handbook/values/#public-by-default), most Team Member names are available [publicly](https://handbook.gitlab.com/handbook/company/team/#close-modal). As they are often processed in support of everyday corporate operations, the application of Orange-level controls for these lower risk data elements would disproportionately inhibit GitLab’s business functions.
### Personal Data and Team Member Safety
Please be aware of how combining data elements could lead to impacting a Team Member’s safety. For example, Team Member names are classified as [Yellow](https://handbook.gitlab.com/handbook/security/data-classification-standard/#yellow), per the classification description below. But if you combine a Team Member’s name along with their dates of travel and site for a work event, then you are possibly revealing that Team Member’s exact location, which is Orange level Personal Data. Any document or Issue containing a Team Member’s specific location should be set as “Confidential” in accordance with our [Orange Data](https://handbook.gitlab.com/handbook/security/data-classification-standard/#orange) and [Confidentiality Levels](https://handbook.gitlab.com/handbook/communication/confidentiality-levels/) guidelines.
### YELLOW
Data and information that should not be made publicly available that is created and used in the normal course of business. Unauthorized access or disclosure could cause minimal risk or harm and/or adversely impact GitLab, its partners, employees, contractors, and customers.
Examples include:
- Asset registers
- General internal company communications
- Vendor contracts
- GitLab runbooks/work instructions/manuals/policies/procedures containing data NOT appropriate for [public consumption](https://handbook.gitlab.com/handbook/communication/confidentiality-levels/#not-public)
- GitLab Team Member names
### GREEN
Data that is publicly shareable, and does not expose GitLab or its customers to any harm or material impact.
Examples include:
- [GitLab handbook](https://handbook.gitlab.com/) 
- Public announcements
- [Public product information](https://docs.gitlab.com/ee/)
### Data Classification Standards
### Credentials and access tokens are classified at the same level as the data they protect
Credentials such as passwords, personal access tokens, encryption keys, and session cookies derive their classification from the highest classification of the data they protect.
### Combinations of data types may result in a higher system classification level
If there is more than one data type residing in a system, the system should be classified at the highest data classification level of the data being stored, transmitted or processed on that system.
### Labeling
There is currently no internal requirement to label data according to this standard, however labels are encouraged. By labeling data according to classification level, individuals can quickly refer to this policy for proper handling.
## Exceptions
Exceptions to this policy will be tracked as per the [Information Security Policy Exception Management Process](https://handbook.gitlab.com/handbook/security/controlled-document-procedure/#exceptions).
## References
- [Controlled Document Procedure](https://handbook.gitlab.com/handbook/security/controlled-document-procedure/)
- [Data Classification Index](https://internal.gitlab.com/handbook/security/data_classification/) (internal only)
