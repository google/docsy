---
title: "Access Requests (AR)"
---

Access Requests are owned by the IT team, while onboarding, offboarding and internal transition requests are owned by the People Connect Team.

If you have any access requests related questions, please reach out to #it_help or the tool provisioner in Slack.

## Access requests related pages

- [Frequently asked questions](/handbook/it/end-user-services/onboarding-access-requests/access-requests/frequently-asked-questions/)
- [Baseline Entitlements](https://internal.gitlab.com/handbook/it/end-user-services/access-request/baseline-entitlements/)
- [Temporary service providers access requests and onboarding](https://internal.gitlab.com/handbook/it/end-user-services/access-request/temporary-service-providers/)

## Need help?

- Please @ mention `@gitlab-com/gl-security/corp/helpdesk` in the issue, with no particular SLA.
- If your request is urgent, @ mention `it-help`in the #it_help channel in slack with a note on why it is urgent.

## How do I choose which template to use?

### Individual or Bulk Access Request

*You can use [this template](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) to request access for individuals or multiple people, as long as all the people are requesting access to the same systems. Create multiple issues using this same template if multiple people require access to different systems. When access is being requested for multiple people who report to different managers but are part of the same department or division, approval can be obtained by the manager at the highest level; that is, the Director, Vice President, or Executive of the department or division.*

{{% panel header="**Instructions**" header-bg="success" %}}
Title the issue `Full Name, System(s), Role` using the details of the person requesting access information. If bulk access is being requested then `Bulk Access, System(s), Role`

**Step 1. Personal Information**

1. *Personal Information:* Please provide a list of people who are requesting access. Include the relevant information.
1. *SSH Keys:* Add the public ssh key only if needed for the type of access being requested.

**Step 2. Access Request**

1. Remove or add lines for the systems you need access to. **Make sure to follow the format from the template (also included below)**. Be as specific as possible with the access you are requesting by adding the role, vault, group, channel or project you are requesting access to.
1. If administrative access is being granted, add the label admin-access. Request the least amount of access you need as per the [least privilege review](https://internal.gitlab.com/handbook/security/access-management-standard/#least-privilege-reviews-for-access-requests) and explain why you need access in the rationale section.
1. If the request involves access to systems owned by the Infrastructure team (according to the [tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml), mention `@gitlab-com/gl-infra/managers` and ask them to approve by adding the ~InfrastructureApproved label.

   ```text
   - [ ] System name: Which vault, which group, which channel, which project, which role?
   - Justification for this access: Please explain why this access is needed.
   ```

**Step 3: Assign to Manager for approval**

1. If you are a manager requesting access for one of your reports, please skip to step 4.
1. Add the label `AR-Approval::Needs Manager Approval` to the issue.
1. Assign the issue to your manager. When access is being requested for multiple people who report to different managers but are part of the same department or division, approval can be obtained by the manager at the highest level; that is, the Director, Vice President, or Executive of the department or division.

**Step 4: Managers to do**

1. If you are the manager of this person, add the labels `AR-Approval::Manager Approved` and `ReadyForProvisioning` to the issue; if you are the one asking for access, then you have to assign to *your* manager for approval and they must add the labels `AR-Approval::Manager Approved` and `ready for provisioning`.
1. After approval, then YOU MUST **assign the issue to the system provisioner** [listed in the tech stack.](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)

**Step 5: Provisioners to do**

1. Before provisioning, consider that team members should only be granted the minimum necessary access to perform their function. Determine whether the access level is necessary or if a lower access level would be sufficient.
1. If the access level is adequate proceed with provisioning the account after verifying the AR-Approval::Manager Approved label is present.
1. Under step 2, please check off the system you provisioned.
1. If administrative access is being granted, add the label admin-access to this request so Security Operations knows who has admin access.
   - If admin access is being granted to GitLab.com ensure the user is added to the GitLab Instance Administrators group
   - Inform the user 2fa is required and they will be locked out if it is not immediately setup
{{% /panel %}}

---

### Shared Account Access Request

{{% panel header="**Instructions**" header-bg="success" %}}
**Prior to submitting this Issue Request**

1. Please review our [Access Control Policy and Procedures](/handbook/security/#access-control-policy-and-procedures) to ensure that your request is in line with GitLab's policies and procedures. If after review you feel that a shared account is still needed, complete submit the issue using the template. **Note that systems with PCI data is not allowed shared accounts.**
1. Please note that shared account request(s) will need to be reviewed and approved by IT Ops and the listed Tech Stack Owner.
**An [Exception Request](https://gitlab.com/gitlab-com/gl-security/security-assurance/sec-compliance/compliance/issues/new?issuable_template=Exception%20Request) will need to be logged for each user you are requesting to be added.** Note that with an Exception Request the maximum exception length is 90 days (365 days for device exceptions only).
After the Exception Length, you will be required to submit another Exception Request for review and approval.**If the exception request is not logged, reviewed, and approved for an extension, note that the Shared Account will be disabled.** Please refer to our [Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions) handbook page for more information.

**Instructions on how to submit this issue request**

1. Title issue "Shared Account Request, Role, System(s)" using your information.
1. Fill out the `User Details` section and **remove or add lines** as needed.
1. **Add lines** for the system(s) you need access to so only the ones you want are left in the issue. **Do not check them off.**
   - *Request the least amount of access you need as per the [least privilege review](https://internal.gitlab.com/handbook/security/access-management-standard/#least-privilege-reviews-for-access-requests) and explain why you need access in the rationale section and name the role you are requesting. Be specific.*
1. If you are the manager of this person, add the labels `AR-Approval::Manager Approved` and `ready for provisioning` to the issue; if you are the one asking for access, then you have to assign to *your* manager for approval and they must add the labels `AR-Approval::Manager Approved` and `ready for provisioning`.
1. After approval, then YOU MUST **assign the issue to the system provisioner** [listed in the tech stack.](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)
1. Close the issue when it's complete.
{{% /panel %}}

#### Instructions and Guidance for IT for Shared Accounts

1. Review the Shared Account Access Request and ensure that there is an [Exception Request](https://gitlab.com/gitlab-com/gl-security/security-assurance/sec-compliance/compliance/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=Exception%20Request) for each user that is being added to the shared account. Review the Exception Request and document in the Access Request issue the Exception Length. Ensure that the Exception Request has been reviewed and approved by Security prior to adding your approval or setting up the shared account.
1. All shared accounts must be managed via Okta. If 1password must be used (okta not technically possible), this needs to be outlined in the Access Request.
1. If the shared account will be managed in Okta - Set a review/reminder date in Okta to review shared account access dependent on exception timeline and close issue.
   1. When notification is received from Okta regarding timeline length nearing expiration, log a new Shared Account Access Request and assign to the Shared Account Owner to complete.
1. If the shared account will be managed in 1Password - Add a Due date dependent on exception timeline and leave issue open.
   1. When notification is received from `GitLab.com` regarding timeline length nearing expiration, close existing issue and log a new Shared Account Access Request and assign to the Shared Account Owner to complete.

---

### Access Change Request

Access Change Requests are logged when a team member no longer requires access to a currently provisioned system or no longer requires the same level of access (downgraded access from admin to user etc).
Refer to [`For Total Rewards Analysts: Processing Promotions & Compensation Changes`](/handbook/people-group/promotions-transfers/) section of the GitLab handbook for additional information.

It is important to note that while Okta has provisioning/deprovisioning automation in place, this is not a complete/accurate reflection of access provisioning and deprovisioning.
Okta has been configured to assign integrated/implemented applications based on a user's role/group.
This makes applications accessible via Okta but users may still have the ability to access the systems directly.
Refer to [Okta Application Stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) for a list of applications set up in Okta.

What this means is:

1. A GitLab Team member gets transferred to a different role.
1. The team member's profile in Workday is changed.
1. This profile change automatically triggers a change in the team member's Okta profile accordingly.
1. This, in turn, results in the team member getting assigned to new applications based on their new department and role.
1. Simultaneously all old applications that are not relevant to their new role get revoked/unassigned.
1. Additionally, the Okta administrator gets an Email from Okta, that there has been a change to a User profile - (Email Subject line: 1 existing user updated). Okta automation already happens in the background, this email is informational only.

While this application automation will take place in Okta, "true" system provisioning and deprovisioning will still need to be manually completed within the impacted systems via an Access Change Request.

---

### Google Groups, 1Password Vaults or Groups Access Requests

*You can use [this template](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=googlegroup_1Passwordgroupvault) to request access for individuals or multiple people, as long as all the people are requesting access to the same systems. Create multiple issues using this same template if multiple people require access to different systems. When access is being requested for multiple people who report to different managers but are part of the same department or division, approval can be obtained by the manager at the highest level; that is, the Director, Vice President, or Executive of the department or division.*

{{% panel header="**Instructions**" header-bg="success" %}}

1. **Title** issue "Full Name - System - Role" (ex: Laura Croft Google Group: adventurer)
1. **Remove or add rows** for the access you need.
1. Assign to your manager to get approval by label **if** this request is for (they must apply labels `AR-Approval::Manager Approved` and `ReadyForProvisioning`:
   - access to a 1Password vault or group
   - admin access
   - access to a slack group for a non-internal person, including shared Slack channels
   - Please note if a non-internal person has been removed from a slack channel and is requesting access again they will need a new access request and manager approval
1. **Close** the issue when it's complete.
{{% /panel %}}

---

### Name Change Request

*You can use [this template](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/blob/master/.gitlab/issue_templates/Name_change_request.md) when your name changes.*

{{% panel header="**Instructions**" header-bg="success" %}}

1. Title the issue `Full Previous Name to Full New Name - Name Change Request`.
1. Please complete all applicable sections as described in the issue template.
{{% /panel %}}

---

## Working on Access Requests

### Department Access Request Boards

- If you need additional labels or have suggestions for improving the process until we can fully automate, please [open an issue](https://gitlab.com/gitlab-com/it/end-user-services/issues/it-help-issue-tracker/-/issues/new).
- ARs are auto-assigned and auto-labeled when possible by department. In some cases, there are multiple provisioners per tool. If a template cannot be auto-assigned, Business Technology will provide a board where the provisioners can review their department's issues by label (ie `dept::to do`. It is up to the department to manage the workflow on who works the issues to completion.
- **Moving an issue from one column to another will remove the first label (per the column header) and add the second label. Please use caution when moving issues between columns.**
- Departments can check their outstanding access request issues by viewing their board below.

{{% panel header="**AR boards: to-do:**" header-bg="success" %}}

1. [Data](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319045)
1. [Finance](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319048)
1. [Infra](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1262513)
1. [IT](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1262521)
1. [Legal](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319051)
1. [PeopleOPs](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1318841)
1. [Prod+Eng](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319057)
1. [Marketing](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1284066)
1. [Sales](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1262518)
1. [Security](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319052)
1. [Support](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/boards/1319053)
{{% /panel %}}

## Adding Access Request Process for a new item in the Tech Stack

If you need to initiate an Access Request process for a new item in the tech stack:

1. Confirm the tool is added to the [tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)
1. Confirm a team member is included as the `provisioner` `deprovisioner`
1. Document the requirement to submit an Access Request in any relevant handbook pages
