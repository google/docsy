---
title: "Access Management Policy"
controlled_document: true
---

## Purpose

Centralized access management is key to ensuring that authorized GitLab team-members have access to the correct data and systems at the correct level. GitLab access controls are guided by the principle of least privilege and need-to-know.

## Scope

These controls apply to information and information processing systems at the application and operating system layers, including networks and network services.

The [access request project](https://gitlab.com/gitlab-com/team-member-epics/access-requests) is used to request and track the following access-related activities:

1. [New Access Requests](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request)
1. [Access Removal Requests](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Remove_Access_Request)
1. [Access Reviews](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Access_Review)
1. [New Service Account Requests](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=New_Service_Account_Request)

The [Temporary Service Providers>Lifecycle Management project](https://gitlab.com/gitlab-com/temporary-service-providers/lifecycle) is used for requesting and tracking all short-term non GitLab team member (consultant, vendor, contractor, etc.) access:

1. [Vendor Access Request](https://gitlab.com/gitlab-com/temporary-service-providers/lifecycle/-/issues/new?issue%5Bassignee_id%5D=&issue%5Bmilestone_id%5D=)

Usage guidelines for each of the access templates is outlined on the [Team Member enablement's handbook page](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/).

These templates should be used during the [onboarding process](/handbook/people-group/general-onboarding/) and throughout the employment tenure of a GitLab Team Member. Access required as part of the team member's onboarding should be requested using the [New Access Requests](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) or if applicable, one of the available [Role-based entitlements templates](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/tree/master/.gitlab/issue_templates/role_baseline_access_request_tasks).

## Roles & Responsibilities

| Role | Responsibility |
| --- | --- |
| Security Assurance | Responsible for implementing and executing this policy |
| Business or System Owners |Alignment to this policy and any related standards |
| Security Assurance Management (Code Owners) | Responsible for approving significant changes and exceptions to this policy |
| Team Members | Responsible for adhering to the requirements of this policy |

## Access Control

- All new access or permissioning change requests that are not part of a team member's [baseline role-based entitlements](https://internal.gitlab.com/handbook/it/end-user-services/access-request/baseline-entitlements/) will require a [New Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request).

- Shared accounts may not be used for customers.gitlab.com, dev.gitlab.org, Shopify, Stripe, and Zuora in order to comply with PCI-DSS requirements. Currently, GitLab's financial controls prohibit the use of shared accounts within the following applications: NetSuite.

- Shared and group credentials are restricted. Any systems that require shared accounts or credentials and are not yet implemented or configured in Okta must have an Access Request approved and an exception to this policy for each user. Bulk access requests are not allowed for shared or group credentials.

- All access requests must be approved by the team member's manager with the exception of:

  - ARs for Google Workspace email distribution lists for internal GitLab team members
  - ARs for Slack groups for internal GitLab team members
  - ARs using a role based template
  - ARs for access removal
  - ARs resulting from a [User Access Review](/handbook/security/security-assurance/security-compliance/access-reviews) in which users are marked for an access change by the technical/business owner performing the review

  Please note that ARs for access to internal systems for "external to GitLab individuals" require managerial approval. This includes access to Google Workspace security groups.

- Access requests are required when requesting a role above developer (i.e. maintainer, owner) on the following GitLab repositories and groups:

  - Repos:
    - www-gitlab-com (Public Handbook Repo) (See note below)
    - [GitLab CE and GitLab EE](https://gitlab.com/gitlab-org/gitlab) (aka single Rails repository)
  - Groups:
    - [GitLab.com](https://gitlab.com/gitlab-com) and [GitLab.org](https://gitlab.com/gitlab-org) - top level group permissions
    -NOTE: When provisioning access to a top level group, access is inherited to all sub-groups and projects below the group. For this reason, Owner and Maintainer access should **almost always** be provisioned at the project or sub-group levels rather than at the top parent group level, else we may not adhere to our [principle of least-privilege](/handbook/security/access-management-policy.html#principle-of-least-privilege).

- For all projects, access requests should be submitted when requesting explicit access to private groups, sub-groups, and repositories, as well as public facing repositories that are limited in access to GitLab team members in order to facilitate deprovisioning. This also allows for greater oversight of permissions being granted across GitLab projects.

- Requests for access to Infrastructure assets (servers and databases) require a second layer of approval from Infrastructure Management.

- All access requests must be provisioned as approved. An AR that is approved without a role specified should not be provisioned until the role being requested is identified and re-approved.

- Administrative permissions should be considered operational in nature. This means they are granted for the sole purpose of system management, configuration, and support. They should be recognized as privileged accounts and as such, activities must be logged and the logs protected and regularly reviewed.

- Time-based access may be provided if administrative action is required for a set period of time. This should be documented as part of the Access Request SLAs.

- All requests for new service accounts require a New Service Account Request:

  - [GitLab.com Service Account Request](/handbook/security/access-management-policy.html#requesting-gitlabcom-service-account-for-automation)
  - [GCP Service Account Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=GCP_Google_Service_Account_Request)
  - [Other System Service Account Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=New_Service_Account_Request)

- All requests for new service accounts must be approved by a member of Infrastructure Management.

- In regard to support during or prior to provisioning, please do not tag the Security Operations team in the AR issue; to ask Security for help with AR assignments, please use the #it_help channel.

- If admin-level access is being requested, the request must be approved by the team member's manager and Infrastructure Management, if applicable.

### Role Based Access Control (RBAC) Requirements

GitLab has an established RBAC via the formalization and maintainence of [Baseline Role-Based Entitlements](https://internal.gitlab.com/handbook/it/end-user-services/access-request/baseline-entitlements/). RBAC is subject to continuous control monitoring by the Security Compliance team to ensure that GitLab meets its regulatory and compliance obligations related to user access to information. Additionally, as noted per the requirements in the role baseline template, changes to permissions on these documents are required to be reviewed and approved by the Director, Senior Leader or Manager of the team that the role belongs to. If an update is proposed by a Manager or above, it should be reviewed by another, more senior manager of the team that the role belongs to.

The structure of the baseline role-based entitlements ensures that team members receive the appropriate access privileges when they join GitLab. These templates are based off one of the following:

- A team member's title (excluding levels, such as Junior, Senior, etc.), as listed in their Workday employment profile
- A combination of a team member's title (excluding levels, such as Junior, Senior, etc.) listed in their Workday employment profile **AND** their specific **job specialty**
  - **Example**: Team members within the Security Assurance sub-department all utilize the Security Assurance Engineer title, but there are job specialities in Compliance, Risk, Governance and Field Security, which have different role based access requirements. As such, the baseline role-based entitlements are named like so:
    - [role_security_assurance_engineer_security_risk](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/blob/master/.gitlab/issue_templates/role_baseline_access_request_tasks/department_security/role_security_assurance_engineer_security_risk.md)
    - [role_security_assurance_engineer_compliance](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/blob/master/.gitlab/issue_templates/role_baseline_access_request_tasks/department_security/role_security_assurance_engineer_compliance.md)

Specific instructions for the creation, review, and maintenance of these templates can be found [here](https://internal.gitlab.com/handbook/it/end-user-services/access-request/baseline-entitlements/). These instructions also include details on any nuances that should be considered as part of the creation of the template.

### Access Control Process Exceptions

- An access request is not required for Google Drive folders or files.

- Managerial approval is not required when requesting access to:

  - ARs for Google Workspace email distribution lists for internal GitLab team members
  - ARs for Slack groups for internal GitLab team members
  - ARs using role based templates

### Bulk Access Requests

- Bulk access requests are those that are for multiple GitLab team-members. Bulk requests can be submitted for the following three types of requests:

  - Email aliases/forwarding in Google Workspace.
  - The adding of team members to Slack groups.
  - All GitLab team-members listed on the Access Request have the same manager and the same level of access is being requested.

  Please note that the above use cases do not apply to **Admin**-level access, which needs to be submitted using the  **one** issue per GitLab team-member rule.

### Access Requests and Onboarding

During the onboarding process, the manager should determine which email and slack groups the new team member should be added to. The manager should also determine if the new team member will need access to the `dev` server, which is used by engineers to prepare fixes for security issues and also allows for access to version.gitlab.com and license.gitlab.com. If so, request the creation of a [new dev.GitLab.org account](https://dev.gitlab.org/admin/users/new) *with the same username the team member has on gitlab.com* and an invitation to the [gitlab group](https://dev.gitlab.org/groups/gitlab/group_members) as a Developer. Fill out one [access request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) for both the groups and Dev account if needed.

### Principle of Least Privilege

GitLab operates its access management under the [principle of least privilege](https://csrc.nist.gov/glossary/term/least_privilege). Under least privilege, a team member should only be granted the minimum necessary access to perform their function. Access is considered necessary only when a GitLab team member cannot perform a function without that access. If an action can be performed without the requested access, it's not considered necessary. Least privilege is important because it protects GitLab and its customers from unauthorized access, unauthorized configuration changes, and account compromise by limiting access.

### Least Privilege Reviews for Access Requests

- A least privilege review should be performed by a system's administrator and the manager of the team member for whom access is being requested. System administrators should be provided security training that includes specific training on least privilege and its application.

- To perform a least privilege review, compare the rationale provided for the service(s) to which access is being requested with the level of access being requested.

  - Consider whether the access requested provides the team member access beyond what is required per the information provided in the `rationale` section of the access request.

- If the access requested provides the team member only the access they require to perform what's in the `rationale` section of the access request, the access request should be approved. In this case, simply proceed with approving the access request. An access request approval is considered confirmation the request has been reviewed for least privilege. Once your approval has been submitted, there's no more action for you to take for the least privilege review.

- If the access requested provides the team member **access beyond what is required** in the information provided in the `rationale` section of the access request, the request doesn't align with the principle of least privilege and the request should be temporarily rejected until the appropriate access can be defined. To reject an access request on the basis of least privilege, respond to the issue with the following information:

  - Which service(s) are being requested with excessive permissions.
  - A specific example of why the requested access is excessive. For example, a team member is requesting Super Admin access on Google Workspace to provision user accounts, but the Super Admin role provides access far beyond user account provisioning.
  - An alternative level of access and a brief explanation of how the new level of access allows the team member to fulfill their role. For example, a User Admin role on Google Workspace allows the team member to provision user accounts without providing the additional access a Super Admin would receive. If no alternative can be given, the access request should be approved in the interest of the team member's productivity.

- Should there be disagreement on an access request rejection on the basis of least privilege, an [exception request](/handbook/security/controlled-document-procedure/#exceptions) should be submitted. An exception request is important because it provides a clearly defined escalation process, promotes transparency, and allows us to appropriately track any policy deviations.

### Deprovisioning

- In the case of a separation from the company, all access will be deprovisioned within 5 business days from the date on which the offboarding request is submitted unless otherwise specified.

- All attempts will be made for individual access removal requests to be processed within the SLA requested. If no SLA is noted, access will be deprovisioned within 5 business days of the submission of the issue.

- If access removal needs to occur immediately, please follow the [panic email procedures]({{< ref "#reporting-an-incident" >}}), which will alert the on-call Security team member(s).

### Job Transfers

- An access review should be documented and performed as part of a formal job transfer. The review should be performed by the new manager of the team member who is transferring to a new role.

- Upon notification of a reassignment or transfer, management reviews the GitLab Team Member's access for appropriateness. Access that is no longer required is revoked and documented.

### Access Reviews

- [Access reviews]({{< ref "access-reviews" >}}) will be formally documented using the [Access Reviews](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Access_Review) template.

  - The Security Operations team will periodically perform an access review of **GitLab infrastructure** accounts, to include a [least privilege review]({{< ref "_index.md#least-privilege-reviews-for-access-requests" >}}).
  - The Internal Audit team will periodically perform an access review of **financial application** accounts, to include a [least privilege review]({{< ref "_index.md#least-privilege-reviews-for-access-requests" >}}), as part of routine audits. A comprehensive access audit may be performed based on an annual risk assessment.
  - Quarterly access reviews and access recertifications are performed for all applications that are determined by Internal Audit to be [SOX-in-scope](/handbook/internal-audit/sarbanes-oxley/).
  - For source code security, access reviews for `gitlab.org` owners and maintainers will be performed quarterly by the Security Compliance team and verified by Infrastructure for appropriate permissions.

- As part of an access review, existing access may be modified or revoked. New access (not modification of existing access) requires the submission of a [New Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request).

- An [access review]({{< ref "access-reviews" >}}) includes two parts:
  - review current access and access level appropriateness (e.g. Does the team member need access and are the system entitlements that they have appropriate?)
  - recertification of appropriateness of access and entitlements (e.g Approve continued access to the system at the same level.)

- Please note that access reviews should include a [least privilege review]({{< ref "_index.md#least-privilege-reviews-for-access-requests" >}}). This is considered as part of the review of appropriateness of system entitlements (access level).

- Review and recertification is generally performed by team member's manager or someone above them in their reporting hierarchy. For example, review can be performed by a Director and include their direct reports' direct reports.

- If reviewer is not the manager of a team member, the reviewer should be the system owner, the data owner, or an individual with sufficient understanding of the system(s), the system entitlements, and the ability to assess the appropriateness of the access granted.

- Reviewers must never recertify their own access; this must be reviewed and recertified by a different system administrator, system owner, or the primary reviewer's manager (or someone above them in their reporting hierarchy).

- An access review should be documented and performed as part of a formal job transfer. This should be initiated by the team member transferring and their new manager.

Please refer to the [Access reviews]({{< ref "access-reviews" >}}) page for additional information.

### Access Control Activities

GitLab's access controls include the following control activities:

1. user registration and de-registration
1. user access provisioning
1. removal of adjustment of user access rights
1. management of privileged access rights
1. management and use of secret authentication information
1. review and recertification of user access rights
1. secure log-on procedures
1. management of passwords and tokens
1. access to privileged utility programs
1. access to program source code

### Requesting GitLab.com service account for automation

The generic `@gitlab-bot` account should not be used for new automations. For
different tasks, a new service account should be created. The rationales behind this are:

- Enable better isolation of scope:
  - Different tasks will have different [API requests quota](https://docs.gitlab.com/ee/administration/settings/user_and_ip_rate_limits.html).
  - Easier to track misbehaviors and notify the responsible group for a particular automation.
  - More secure by sharing less and enable possibility for [least access]({{< ref "access-management-policy#least-privilege-reviews-for-access-requests" >}}).
  - More robust by not having a single point of failure (account).
- Enable better process for provisioning and revocation:
  - Better understanding of what should be granted and what should be revoked.

A [New Service Account Requests](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=GitLabCom_Service_Account_Request)
should be completed to request a new service account.

Access tokens for each service account should be requested accordingly.

### Account Naming Conventions

- GitLab.com Administrator Account Naming Convention:
  - Use user's GitLab Google Workspace email `+admin@gitlab.com` as the email address: **username+ADMIN@gitlab.com**
  - GitLab.com admin account name should be the user's normal account with `-admin` appended: **username-admin**
  - The admin account "Full name" should include text to indicate it is an admin account: **First Last (Admin)**
- GitLab.com Bot Account Naming Convention:
  - Use email for the group who owns the bot `+[TASK NAME]-bot@gitlab.com` as the email address: **GROUP+TASK-BOT@gitlab.com**
  - GitLab.com bot account name should start with `gitlab` and append the task name and `-bot`: **gitlab-task-bot**
  - The bot account "Full name" should include text to indicate it is a bot account: **First Last (Bot)**
- Temporary Contractor Account Naming Convention: **username-CTR@gitlab.com**

### Automated Group Membership Reports for Managers

If you would like to check whether or not a team-member is a member of a Slack or a Google Workspace group, you can view the following automated group membership reports:

[Google Workspace Group Membership Reports](https://gitlab.com/gitlab-com/security-tools/report-gsuite-group-members)

[Slack Group Membership Reports](https://gitlab.com/gitlab-com/security-tools/report-slack-group-members)

### Unique Account Identifiers

Every service and application must use unique identifiers for user accounts and prevent the re-use of those identifiers.

For example, if a user account is identified with a username, there can only be one account with that username. Accounts may eventually be deleted and that username (or other unique identifier) intentionally released for re-use, but that new account may not have the same permissions or access as the first account that was deleted. This doesn't preclude the use of shared accounts (except where it is strictly forbidden, like in-scope PCI systems) and applies to both individual and shared accounts. If a shared account is used, that account must have a unique identifier in the same way an individual, non-shared account does.

This is required to allow the actions of any given account to be associated back with that particular account. If two accounts share an identifier, if a malicious action were taken, we'd have no way of identifying which of the two accounts performed that malicious action. It's also important to preserve the confidentiality of information; if access or permission are given to an account, they should only be given to the specific account for which they were intended.

### Reclaiming GitLab Accounts during Offboarding

For anyone hired **after** 2020-03-23: GitLab will block and reclaim team-members gitlab accounts during the offboarding process. The reasoning behind this is due to the case of visibility into confidential issues; if the `closed-assigned` or `participant` issues are in public projects, the former team-member will continue to have access to the closed issues and will continue to be updated and can access the confidential issues where they are a `participant`. For this reason, we advise team members to not utilize your work GitLab account for personal projects.

For anyone hired **before** 2020-03-23: Upon offboarding - IT Operations will update your email address on your GitLab account to be your personal email that is on file in Workday, and you will be allowed to take your account with you. Please note: should you ever be rehired at GitLab, you will be required to make a new GitLab account. Access to all GitLab related projects and groups will be removed.

### Access to all systems

Access to all systems including GitLab accounts should be removed through the offboarding process to mitigate the risk of off-boarded employees retaining access to our systems and confidentail information. In line with our SOX requirements, please refer to our [SOX ITGC Compliance HB page](https://internal.gitlab.com/handbook/it/it-compliance/) control LA.2 for additional information related to our ITGC controls.

### Segregation of Duties

Incompatible duties/access levels that should not be held by a single team member are a part of segregation of duties (SOD) reviews and monitoring performed as a part of business control [ELC.16 Segregation of Duties Analysis](https://gitlab.auditboardapp.com/workspace/2/controls/control/240). The review involves a semi-annual analysis of the existing segregation of duties ruleset that is performed by the VP, IT and the Corporate Controller. The review is focused around [SOX relevant applications/controls](https://gitlab.com/groups/gitlab-com/internal-audit/-/wikis/IT-General-Controls#2-gitlab-sox-in-scope-applications) and key financial risks are taken in to consideration when identifying sets of access that would cause a violation. The ruleset itself is reviewed and then access in SOX relevant applications are reviewed to ensure no violations identified in the SOD ruleset are present. If conflicting access is identified as a part of the review, existing business controls are mapped to mitigate the risk and/or access is downgraded if required.

Further, SOD as it relates to separation of access rights for developers to develop and push code to production is tested annually for financially relevant SOX systems in [ITGC PC.1](https://gitlab.auditboardapp.com/sh/cycles/2/list) Access to Migrate and for non-SOX relevant systems in GCF Control [CM-5 Access Restrictions for Change](https://hyperproof.app/org/d7c741c0-4cdc-11ee-b76d-562ad257a689/controls/e164e350-b623-11ee-948e-8edee0eeb41d). Both controls test that there are logical access restrictions to ensure that changes to production can only be made by appropriately qualified and authorized individuals.

Additionally, all GitLab Team Member access is reviewed as a part of the [Access Review Procedure](/handbook/security/security-assurance/security-compliance/access-reviews/) and any unneeded/inappropriate access that could result in additional SOD violations is removed during the reviews.

## Exceptions

Exceptions to this procedure will be tracked as per the [Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions).

## References

- Parent Policy: [Information Security Policy](/handbook/security/)
