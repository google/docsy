---
title: "Access Requests (AR) Services"
---

Access Requests are owned by the Corporate Security Helpdesk team. All onboarding, offboarding and role change (career mobility) requests are owned by the People Connect Team.

If you have any access requests related questions, please reach out to `#it_help` in Slack or the tool provisioner in Slack.

- [FAQs](/handbook/security/corporate/services/ar/faq)
- [Baseline Entitlements](https://internal.gitlab.com/handbook/it/end-user-services/access-request/baseline-entitlements/)
- [Temporary service providers access requests and onboarding](https://internal.gitlab.com/handbook/it/end-user-services/access-request/temporary-service-providers/)

## Issue Trackers

- **Team Members (use this by default):** [Access Request Issue Tracker](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues)
- **Temporary Service Providers:** [Lifecycle Issue Tracker](https://gitlab.com/gitlab-com/temporary-service-providers/lifecycle/-/issues)
- **Employment Onboarding:** [Employment Issue Tracker](https://gitlab.com/gitlab-com/team-member-epics/employment/-/issues/?sort=created_date&state=opened&label_name%5B%5D=onboarding&first_page_size=20)
- **Employment Career Mobility:** [Employment Issue Tracker](https://gitlab.com/gitlab-com/team-member-epics/employment/-/issues/?sort=created_date&state=opened&label_name%5B%5D=career-mobility&first_page_size=20)
- **Employment Offboarding:** [Employment Issue Tracker](https://gitlab.com/gitlab-com/team-member-epics/employment/-/issues/?sort=created_date&state=opened&label_name%5B%5D=offboarding&first_page_size=20)

### Team Member Issue Templates

- Specific Application Requests (use [Individual or Bulk Person Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) if not listed)
  - [Slack, Google Group, 1Password Groups or Vaults](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=slack_googlegroup_1Passwordgroupvault)
  - [PagerDuty](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=PagerDuty_Access_Request)
  - [Tableau](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=Tableau_Request)
  - [ZenDesk Federal Customer Creation](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=Federal_Customer_Creation)
- Standard Access Requests
  - **(Use this by default)** [Individual or Bulk Person Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request): One or multiple people requesting access to systems
    - Create one issue for **one or multiple people** to get access to the **same** system
    - Create one issue for **one person** to get access to **multiple systems** (checklist)
    - Create **multiple issues** (one per system) to grant **multiple people** to the **each (same)** system
    - When access is being requested for multiple people who report to different managers but are part of the same department or division, approval can be obtained by the manager at the highest level (ex. Director, Vice President, Division E-Group Leader). Comment approval by cross-functional managers is sufficient since only one manager can apply the approved label.
  - [Access Change Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=Access_Change_Request): Remove or change the level of access to an application/system/distro (non-urgent change).
  - [Access Reviews](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=Access_Review)
- Infrastructure
  - [New AWS Account (Individual)](/handbook/company/infrastructure-standards/realms/sandbox/#individual-aws-account-or-gcp-project) - self service using Sandbox Cloud (powered by HackyStack)
  - [New AWS Account (Group/Team/Service)](https://gitlab.com/gitlab-com/business-technology/engineering/infrastructure/issue-tracker/-/issues/new?issuable_template=aws_group_account_create_request)
  - [Add IAM Users to AWS Account](https://gitlab.com/gitlab-com/business-technology/engineering/infrastructure/issue-tracker/-/issues/new?issuable_template=aws_group_account_iam_update_request)
  - [New GCP Project (Individual)](/handbook/company/infrastructure-standards/realms/sandbox/#individual-aws-account-or-gcp-project) - self service using Sandbox Cloud (powered by HackyStack)
  - [New GCP Project (Group/Team/Service)](https://gitlab.com/gitlab-com/business-technology/engineering/infrastructure/issue-tracker/-/issues/new?issuable_template=gcp_group_account_create_request)
  - [Add IAM Users to GCP Project](https://gitlab.com/gitlab-com/business-technology/engineering/infrastructure/issue-tracker/-/issues/new?issuable_template=gcp_group_account_iam_update_request)
- Sysadmin (BLACK) Account Requests
  - [Admin BLACK Account Creation](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Admin_Black_Account_Creation)
  - [Admin BLACK Account Role - 1Password](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Admin_Black_Account_Role_1Password)
  - [Admin BLACK Account Role - AWS](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Admin_Black_Account_Role_AWS)
  - [Admin BLACK Account Role - Google Workspace](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Admin_Black_Account_Role_GoogleWorkspace)
  - [Admin BLACK Account Role - Okta](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Admin_Black_Account_Role_Okta)
- Special Use Case Access Requests
  - [Name Change Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=Name_change_request)
  - [Shared Account Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=Shared_account_access_request)
  - [External access to Greenhouse through Okta](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=Okta_Access_Greenhouse_External)
- Demo Accounts and Licenses
  - [Shared Omnibus Instance](/handbook/customer-success/demo-systems/#access-shared-omnibus-instances) - powered by Demo Systems
  - [GitLab SaaS Ultimate License for User Account](https://docs.google.com/forms/d/e/1FAIpQLSddexI8VZTCiyxme1_7QtbQZ6WoIJRlHdaI2Gi6PD8Eti-DLQ/viewform)
  - [GitLab SaaS Ultimate License for (Demo/Test) Group](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=GitlabCom_Licensed_Demo_Group_Request)
  - [GitLab Self Managed License](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=GitLab_Team_Member_License_request)
- Service Accounts
  - [GitLab.com SaaS Service Account Requests](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=GitLabCom_Service_Account_Request) - Admin only, not needed for group/project tokens
  - [GCP or Google Workspace API/Service Account Requests](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=GCP_Google_Service_Account_Request)
  - [Okta Admin Service Account Requests](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=Okta_Admin_Service_Account) for apps, groups, and users
  - [Other Service Account (App to App)](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=New_Service_Account_Request)
  - [Other API Token Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=API_Token_Request)
- Tech Stack
  - [Okta new application setup](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?description_template=okta_app_change)
  - [Add application to tech stack](/handbook/business-technology/tech-stack-applications/#add-new-system-to-the-tech-stack)
  - [Update tech stack metadata](/handbook/business-technology/tech-stack-applications/#update-tech-stack-information)
  - [Update tech stack provisioner](https://gitlab.com/gitlab-com/team-member-epics/access-requests/issues/new?issuable_template=Update_Tech_Stack_Provisioner)
  - [Remove application from tech stack](https://gitlab.com/gitlab-com/business-technology/business-technology/-/issues/new?issuable_template=offboarding_tech_stack)

## Role Based Entitlements

- Role based entitlements are a pre-approved set of permissions that are granted to all people in a role. Make sure that whatever set of permissions you are adding to these templates should be granted to anyone with that role.

- Role based entitlements need to be approved only once, when the template is created, and they don't need to be approved again on a case-by-case basis.

- These templates cannot be edited to remove or add extra permissions once created, unless those changes are approved by a manager (or higher) of the team the role belongs to. Note that an approval is still required even if a change comes from a manager or higher on a baseline entitlement template to mitigate the risk of a permission change being pushed through by a single team member.

- We have decided to remove all SOX applications from the Role-Based Entitlements templates.  Therefore, any access that is requested for our SOX-in-scope systems should follow the standard A/R process outlined here in our [handbook](/handbook/it/end-user-services/onboarding-access-requests/access-requests/#how-do-i-choose-which-template-to-use).  The impact to you is for any access going forward that was granted automatically via a role based entitlement will now need to be requested via a standard A/R so we can ensure approvals are properly captured.

- Please note when editing an existing template or creating a new one do not include access of any kind to a rolebased access template.  Full listing of SOX applications can be found [here](https://gitlab.com/groups/gitlab-com/internal-audit/-/wikis/IT-General-Controls)

## Need help?

- Please mention `@gitlab-com/business-technology/end-user-services` in the issue, with no particular SLA.
- If your request is urgent, post a link to your access request in the `#it_help` channel in Slack with a note on why it is urgent.

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

## Tech Stack Changes

If you need to initiate an Access Request process for a new item in the tech stack:

1. Confirm the tool is added to the [tech stack](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml)
1. Confirm a team member is included as the `provisioner` `deprovisioner`
1. Document the requirement to submit an Access Request in any relevant handbook pages
