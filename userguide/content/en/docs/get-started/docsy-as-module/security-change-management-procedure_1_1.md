---
title: "Security Change Management Procedure"
description: "Change management procedure for the Security Division."
controlled_document: true
---

## Purpose

The purpose of this document is to outline the procedural change management steps as they relate to the Security Division.

## Scope

This document applies to systems and applications owned by Security and processes owned by Security Departments.

{{% note %}}
Changes related to user access and authorization should continue to be handled via the [access request](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/) process.
{{% /note %}}

Security has defined the following types of changes:

### Minor change

A minor change is a non-material change which occurs through the natural course of business, such as handbook updates. Minor changes may be implemented directly in Production, have no financial impact, are related to general maintenance, and can be easily reversed.

A minor change **does not** require a change management issue and can be handled internally within the relevant team. Security's least privilege access controls support the checks and balances required for managing minor changes.

### Standard change

A standard change is a change that is low risk, relatively common and follows a specified procedure or work instruction, such as a configuration change, security patches, or other types of normal application modifications.

Standard changes have to go through the change management process. They require a **peer review**, **Impacted Team(s) Management (or Code Owner) approval**, and **post-implementation review**.

{{% note %}}
Manager - prior to approving the change request, please ensure that the correct change request template is being used.
{{% /note %}}

### Comprehensive change

A comprehensive change is high risk, high impact, or has a more complex procedure, such as a system or application deprecation, a new system or application onboarding, or net-new Production architecture.

- Infrastructure changes are considered comprehensive changes. They require **peer review**, **Impacted Team(s) Management (or Code Owner) approval**, **Technical Owner Approval**, **Change Advisory Board (CAB) Review**, and **Post-Implementation Review**.
- See the [CAB Review]({{< ref "security-change-management-procedure#cab-review" >}}) section for details on this review process.

{{% note %}}
Manager - prior to approving the change request, please ensure that the correct change request template is being used.
{{% /note %}}

### Emergency change

An emergency change follows the same approval process as [comprehensive](#comprehensive-change) changes.

- It can be entered for approval after the change has been implemented in production.
- Emergency changes are intended to be used only where there is an **immediate critical** need to correct an operational or security issue that is preventing users from working or critical processes from operating.
- Emergency changes require review and **all approvals** after the change has been implemented.

## Roles & Responsibilities

| Role | Responsibility |
| ------ | ------ |
| **[Security Governance]({{< ref "./security-assurance/governance" >}})** | Maintain a security change management procedure to intake and respond to change management activities |
| | Maintain Metrics |
| **[Security Compliance]({{< ref "./security-assurance/security-compliance" >}})** | Provide oversight to ensure changes are being made in accordance with compliance obligations |
| **Requestor** | Complete the change management issue |
| | Work with the Technical Owner to document, test, and obtain approval(s) for the change |
| **Technical Owner** | As defined in the [tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml). Review and provide approval prior to the change being implemented |
| | Work with the Requestor to ensure the requested change is documented, tested, and approval(s) have been completed |
| | Ensure Peer Review is completed prior to providing Technical Owner Approval |
| | Document and report any risks or trends identified during change management activities |
| **Peer Review** | Review and ensure the requested change has been documented and there are no undocumented downstream impacts |
| **Post Implementation Review** | Review of the change in production after the change is made to ensure everything is working as expected |

### Approval Matrix

| **Approval Type** | **Description** | **[Minor](#minor-change)** | **[Standard](#standard-change)** | **[Comprehensive](#comprehensive-change)** | **[Emergency](#emergency-change)** |
| ----- | ----- | ----- | ----- | ----- | ----- |
| **Peer Review** |    Peer Reviews are performed by a peer of the change Requestor and are intended to identify any potential issues with the planned change or change process. **Note:** The peer review process was established to mitigate the risk of the lack of segregation of duties between Requestor and implementer. The review provides comfort that changes to the production environment are valid. | No | Yes | Yes | Yes |
| **Post-Implementation Review** | Performed by a peer of the change Requestor and is intended to ensure the change is working as expected after the change has been implemented in Production. | No | Yes | Yes | Yes |
| **Impacted Team(s) Management/Code Owner approval** | Approval by Management that is responsible for the particular system or application    | No |    Yes |    Yes |    Yes |
| **Technical Owner Approval** | Approval by the system or application's Technical Owner as defined in the [tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml). | No |    No | Yes | Yes |
| **CAB Review** | Approval by [Security Senior Leadership](https://gitlab.com/gitlab-com/gl-security/security-senior-leadership) on the CAB | No | No | Yes | Yes |

{{% note %}}
Technical Owner approval is dependent upon the system or application already existing in the tech stack. For new systems or applications that have not yet been assigned a Technical Owner in the tech stack, the CAB review will be sufficient.
{{% /note %}}

## Procedure

To submit a security change request, use one of the links below to create a change request issue:

[Standard Change Request](https://gitlab.com/gitlab-com/gl-security/security-change-management/-/issues/new?issuable_template=standard_change_template)

[Comprehensive Change Request](https://gitlab.com/gitlab-com/gl-security/security-change-management/-/issues/new?issuable_template=comprehensive_change_template)

[Emergency Change Request](https://gitlab.com/gitlab-com/gl-security/security-change-management/-/issues/new?issuable_template=emergency_change_template)

Follow the instructions in the appropriate issue template to:

- Add the appropriate level of detail to the request
- Assign the appropriate team member(s) to the request in accordance with the [roles and responsibilities]({{< ref "security-change-management-procedure#roles--responsibilities" >}}) and [approval matrix]({{< ref "security-change-management-procedure#approval-matrix" >}}) sections

[Security Change Management project](https://gitlab.com/gitlab-com/gl-security/security-change-management)

### Communication

If a security change request will impact **all GitLab team members**, please ensure that you communicate the change and its impact by posting in `#whats-happening-at-gitlab` or `#company-fyi-private` if the change is subject to SAFE or considered highly sensitive, before the work begins and after the change is completed.

**Be sure to communicate the change, its rationale, and its impact.**

If a security change request will impact **all Security Division team members**, please ensure that you communicate the change and its impact by posting in `#security-team-only` before the work begins and after the change is completed.

**Be sure to communicate the change, its rationale, and its impact.**

If a security change request will impact **a particular Security Department or individual team members**, please ensure that you communicate the change and its impact in a manner appropriate for those impacted team members.

### CAB Review

The CAB Review is designed to provide leadership oversight and approval of high risk changes, such as [comprehensive](#comprehensive-change) or [emergency](#emergency-change) changes.

- As part of the weekly CISO direct reports sync, Security Division leadership will conduct a CAB Review of any open comprehensive or emergency change requests. The CAB will document its meeting notes in the change management issue as a new comment.
- A member of the CAB will also add a comment to the open change request issue(s) noting the outcome of their review, along with one of the [CAB labels](https://gitlab.com/gitlab-com/gl-security/security-change-management/-/labels?subscribed=&search=CAB%3A%3A).

## Exceptions

Exceptions to this procedure will be tracked as per the [Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions).

## References

- [Change Management Policy]({{< ref "change-management-policy." >}})
- [Controlled Documents Procedure](/handbook/security/controlled-document-procedure/)
- [Controlled Documents Annual Review Program](/handbook/security/controlled-document-procedure/#review)
