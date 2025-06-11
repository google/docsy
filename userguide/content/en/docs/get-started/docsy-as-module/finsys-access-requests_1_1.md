---

title: Finance Systems Access Requests
description: Finance Systems Access Requests
---






## <i class="fas fa-book" id="biz-tech-icons"></i> Access Requests

Many finance systems that are provisioned are also considered a SOX system and are subject to the [SOX Program.](/handbook/internal-audit/sarbanes-oxley/)

The finance systems admin team goes through additional procedures when handling [Access Requests.](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/#access-requests-ars)

This applies to the following systems:

- Adaptive Insights
- Avalara
- Coupa
- Navan
- NetSuite
- Stripe
- Zuora Billing
- Zuora Revenue

### Additional Procedures

On top of the [GitLab Access Request](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/#individual-or-bulk-access-request) process, the team will perform the following:

- Ensure/Clarify access being requested is specific to the system being requested.
  - Example: Instead of `Needs read only access to Netsuite`, the team will clarify with the requester that they are asking for the `Custom Auditor (read only)` role in Netsuite.
  - See matrix [here](/handbook/business-technology/enterprise-applications/finsys-access-requests/#-system-specific-access-request-requirements) for System specific requirements.
- Seek Business Owner’s approval of the exact role and/or permission being requested, according to who is listed in the [Tech Stack.](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) This includes [baseline entitlement(s).](https://internal.gitlab.com/handbook/it/end-user-services/access-request/baseline-entitlements/)
- Once approved, the team will provision the user in the system and add to the corresponding Okta Google group (if necessary).
- Once provisioned, the team will take a screenshot of the user record in the system with a timestamp and attach it to the issue and then close.

**Note:** Unless the [AR](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request) specifically mentions an environment besides Production, the team will always assume the requester is only requesting access for the Production environment.

### Definition of Done

- An AR is only considered `Done` from the FinSys perspective when it has the following:
  - Clear system specific roles and permissions being requested
  - Manager AND Business Owner Approver
  - Screenshot with timestamp of provisioned user record

## System Specific Access Request Requirements

| System            | AR Requirements                        | Notes             |
|-------------------|----------------------------------------|-------------------|
| Adaptive Insights | AR should explicitly list:              |James Shen (Sr. Director of FP&A) should approve every single AI AR.                    |
|                   | **Permissions Set (one):**             |AI is set up with various ‘Levels’ which essentially corresponds to our Departments, so most users should not/will not have access to all the levels, since AI houses a lot of confidential data.|
|                   | - Administrative                       |                   |
|                   | - Analysis                             |                   |
|                   | - Editable Sheet Access Only           |                   |
|                   | - IT Administrator                     |                   |
|                   | - Report Only                          |                   |
|                   | - Standard                             |                   |
|                   | **Levels:**                            |                   |
|                   | - Listed out.                          |                   |
|                   | - Be extremely cautious with levels. If Master Corporate or Corporate checkbox is selected, the requester will inherently have access to everything, which is unlikely what was intended.                       | |
| Avalara | AR should explicitly state the **Exact** role they are requesting access to.| Roles are not customizable. |
| | **Roles:** | |
|                   | - Account administrator                       |                   |
|                   | - Company administrator | |
|                   | - Read-only account access                     |                   |
|                   | - Read-only company access                     |                   |
|                   | - No access                    |                   |
| Coupa | | Note: Requestors/buyers will always only get ***Custom User*** role. Elevated access requires Procurement approval.|
| Navan | AR should explicitly state the **Exact** role they are requesting access to **AND** which policies. | There are a lot of policies within Navan. Typically the only ARs the team will get are for Navan Admins. Team members are automatically provisioned.|
|           | |Since most of the ARs are for finance system admins, they will usually need access to all the policies in which case the team does not have to list out all the policies in the AR.|
| NetSuite |AR should explicitly state the **Exact** NetSuite role that they are requesting before the Business Owner approves the AR. ||
|Stripe | AR should explicitly state the **Exact** role they are requesting access to **AND** which Stripe Accounts:| Roles are not customizable.|
|                   | - about.gitlab                      |                   |
|                   | - Bizzabo                             |                   |
|                   | - GitHost           |                   |
|                   | - Zoom                     |                   |
|                   | **Roles:**| |
|                   | - Administrator                       |                   |
|                   | - Analyst                             |                   |
|                   | - Developer           |                   |
|                   | - Support Specialist                     |                   |
|                   | - View Only                          | |
| Zuora Billing | AR should explicitly list the role they are requesting access to for **EACH** module:| |
| | - Platform| |
| | - Billing| |
| | - Payments| |
| | - Finance| |
| | - Commerce| |
| | - Reporting| |
| Zuora Revenue | AR should explicitly state the **Exact** ZREV role(s) they are requesting before the Business Owner approves the AR. | |
