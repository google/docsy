---
title: "End User Services"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## <i class="far fa-paper-plane" id="biz-tech-icons"></i> How to reach out to us?

<div class="flex-row" style="display: flex; flex-wrap: wrap; height: auto; justify-content: space-between;">
  <a href="https://gitlab.com/gitlab-com/it/end-user-services/issues/it-help-issue-tracker/-/issues/new?issuable_template=General_HelpDesk_Request" class="btn btn-purple-inv" style="flex: 1 1 150px; margin: 5px; height: auto; display: flex; align-items: center; justify-content: center; box-sizing: border-box;">Open an issue</a>
  <a href="https://gitlab.slack.com/archives/CK4EQH50E" class="btn btn-purple-inv" style="flex: 1 1 150px; margin: 5px; height: auto; display: flex; align-items: center; justify-content: center; box-sizing: border-box;">#it-help in slack</a>
  <a href="https://www.worldtimebuddy.com/?pl=1&lid=4143861,4726206,2964574,2158177&h=4143861" class="btn btn-purple-inv" style="flex: 1 1 150px; margin: 5px; height: auto; display: flex; align-items: center; justify-content: center; box-sizing: border-box;">What timezone are we located in?</a>
</div>

## <i class="fas fa-info-circle" id="biz-tech-icons"></i> Frequently visited pages

### Access Requests

- For information about the access request policies and security guidelines, please refer to the Security Team's [access request handbook page section](/handbook/security/#access-management-process).

- For links to role based access request templates, system access templates, and other general instructions and FAQs, please refer to the [Access Requests page](/handbook/it/end-user-services/onboarding-access-requests/access-requests/).

#### Baseline & Role-Based Entitlements

- For information about baseline entitlements and role-based access, please refer to the [baseline entitlements handbook page](https://internal.gitlab.com/handbook/it/end-user-services/access-request/baseline-entitlements/).

- For information on how to create a Role-Based Entitlement, please refer to the [instructions on how to create role-based entitlements](https://internal.gitlab.com/handbook/it/end-user-services/access-request/baseline-entitlements/#how-do-i-create-a-role-based-entitlement-template).

#### Automated Group Membership Reports for Managers

If you would like to check whether or not a team-member is a member of a Slack or a Google Workspace group, you can view the following automated group membership reports:

- [Google Workspace Group Membership Reports](https://gitlab.com/gitlab-com/security-tools/report-gsuite-group-members)

- [Slack Group Membership Reports](https://gitlab.com/gitlab-com/security-tools/report-slack-group-members)

#### Okta

To read more about Okta, please visit the [**Okta**](/handbook/it/okta/) page of the handbook.

#### Jamf (Endpoint Management)

To read more about our Jamf deployment please visit the [**Endpoint Management**](https://internal.gitlab.com/handbook/it/endpoint-tools/) page of the handbook

#### Laptop Delivery Metrics

To view laptop delivery metrics and statistic please visit the [Laptop Metrics Handbook Page](https://internal.gitlab.com/handbook/it/end-user-services/gitlab-laptop-metrics/)

#### GitLab Onboarding and machine management

Please visit the GitLab Onboarding and machine management [handbook page](/handbook/it/end-user-services/onboarding-access-requests/)

#### GitLab Laptop Offboarding

Please visit the GitLab Laptop Offboarding page for information pertaining to this process at GitLab [handbook page](https://internal.gitlab.com/handbook/it/end-user-services/gitlab-laptop-offboarding/)

#### Self-help and troubleshooting

Experiencing some issues with your machine, access to systems, 2FA or other IT related issues? Please visit our [self-help and troubleshooting handbook page](https://internal.gitlab.com/handbook/it/end-user-services/self-help-troubleshooting/)

#### GitLab IT 101

New to GitLab and looking for some IT tips and tricks? This is the spot for you, we have created a comprehensive guide for using the IT systems, apps and hardware [in this handbook page](/handbook/it/end-user-services/onboarding101/)

#### Offboarding

- Are you or a direct report leaving the company? Please reference the [Offboarding](https://internal.gitlab.com/handbook/it/end-user-services/offboarding/) handbook page to see the action items that you can take to create a smooth transition for you and your team.

## <i class="fas fa-tasks" id="biz-tech-icons"></i> Automations

## IT-Help Slack Issue Creator

This automation converts Slack threads from the #it_help channel to issues in GitLab. With most IT support requests being handled in the #it_help Slack channel today, this automation will create one basic intake point with bilateral synchronization to GitLab helpdesk issues.

### How to use it

Reach out to the #it_help Slack channel as usual when assistance is needed. The automation will then create, update, and manage an issue created for the Slack thread. You will be able to communicate with the IT Analyst either via the Slack thread or in the issue created by the automation, and responses will sync in both places.

### How it works

The script scans the IT help Slack channel and performs the following actions:

- Creates a new GitLab issue if a user adds an 👀 reaction to a message and the issue has not been created yet.
- Closes the GitLab issue if a user adds a check mark (✔) reaction and the issue has been created but not closed.
- Reopens the GitLab issue if it has been closed, but the check mark reaction is removed.
- Adds system labels to the GitLab issue based on specific emoji reactions in the Slack channel.
- Parses the Slack thread and adds comments to the related GitLab issue.
- Adds comments from GitLab issue into Slack thread.

{{% alert color="info" %}}
To learn more on how this automation works, check the [IT-Help Slack Issue Creator wiki](https://gitlab.com/groups/gitlab-com/it/end-user-services/-/wikis/IT-Help-Slack-Issue-Creator/How-To-Use).
{{% /alert %}}

## <i class="fas fa-rocket" id="biz-tech-icons"></i> Mission Statement

### IT Help

- IT Help will triage all IT related questions as they arise.

- Build a knowledge base of IT practices and pragmatic problem solving in the handbook.

- Account management for password resets and lockout.

- On call support for immediate software and hardware issues during local business hours.

- Diagnose computer errors and provide technical support.

- Troubleshoot software and hardware.

- Support Weekly IT Onboarding Sessions for new Team Members.

- Train end-users how to setup and use new technologies. Provide technical support over the phone or Web.

- Use specialized help desk support software to take control of end-users' computers to troubleshoot, diagnose, and resolve complex issues.

#### IT Holiday Schedule

The IT Helpdesk team (End User Services) will observe two holidays:

| Date                     | Holiday                |
|--------------------------|------------------------|
| Wednesday, December 25, 2024 | Christmas Day         |
| Wednesday, January 01, 2025  | New Year's Day        |

**If you have an urgent request, please reach out to us via slack in the #it_help channel.**

#### IT Ops

- IT Ops will work with Security, the People Group, and Business Technology to develop automated on-boarding and off-boarding processes.

- We will develop secure integrations between Enterprise Business Systems and with our Data Warehouse.

- We will develop tooling and process to facilitate end-user asset management, provisioning and tracking.

- We will work to build API Integrations from the HRIS to third party systems and GitLab.com.

- We triage IT related questions as they arise.

- We build and maintain cross-functional relationships with internal teams to champion initiatives.

- We will spearhead on-boarding and off-boarding automation efforts with a variety of custom API integrations, including GitLab.com and third-party resources, not limited to our tech-stack, with scalability in mind.

#### GitLab IT Team

- Sr. Director. CorpSec Engineering, Identity, IT End User Support [Steve Manzuik](/handbook/company/team/#smanzuik), smanzuik@gitlab.com @smanzuik

- Senior Manager, IT - [Michael Beltran](/handbook/company/team/#mbeee), mbeltran@gitlab.com, @mbeee

- IT Analyst Americas - Alex Krusiec, akrusiec@gitlab.com, @akrusiec

- IT Analyst Americas - [Jeff Ford](/handbook/company/team/#jeffford_), jford@gitlab.com, @jeffford_

- Senior IT Analyst Americas - [Jenny Wong](/handbook/company/team/#jwong6), jwong@gitlab.com, @jwong6

- Senior IT Analyst Americas - Madison Spry, mspry@gitlab.com, @mspry_gl

- IT Analyst APAC -  [Max Hirata](/handbook/company/team/#mhirata-gl), mraetz@gitlab.com, @mhirata-gl

- IT Analyst APAC - Bryan Mathews, bmathews@gitlab.com, @bryannoel

- IT Analyst EMEA - Bruno Ferreira, bferreira@gitlab.com, @bruno.n.ferreira

- Senior IT Analyst EMEA - Eoghan Dunne, edunne@gitlab.com, @edunne-gl

- IT Analyst EMEA - Laurie McClafferty, lmcclafferty@gitlab.com, @laurie.mcc

- IT Global Logistics - Mic Rohr, mrohr@gitlab.com, @mic_rohr

#### Laptop Wipe Schedules for IT Analysts

- Mic Rohr - [appointment schedule](https://calendar.app.google/QrBCkxhvAxkhA36M8) - AMER

- Jeff Ford - [appointment schedule](https://calendar.app.google/Qc1wwN94q6RqEyGL9) - AMER

- Alex Kruseic - [appointment schedule](https://calendar.app.google/xsTHAQWxHmT3tpr86) - AMER

- Jenny Wong - [appointment schedule](https://calendar.app.google/HJoCYkbf4XnApqSU6) - AMER

- Madison Spry - [appointment schedule](https://calendar.app.google/jZFyqNk5S6dFXq1r9) - AMER

- Max Hirata - [appointment schedule](https://calendar.app.google/CMK6dKUN2otv1wsWA) - APAC

- Bryan Mathews [appointment schedule](https://calendar.app.google/8Jg3QkeCUdmg4sqK8) - APAC

- Bruno Ferreira - [appointment schedule](https://calendar.app.google/zKj8AH9c8VmAcYX48) - EMEA

- Eoghan Dunne - [appointment schedule](https://calendar.app.google/BXECy3uLpUKdNbHe6) - EMEA

- Laurie McClafferty - [appointment schedule](https://calendar.app.google/EjUYz5g67Ud8dVCz9) - EMEA
