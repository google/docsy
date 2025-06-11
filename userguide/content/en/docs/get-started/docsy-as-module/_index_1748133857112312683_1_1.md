---
title: CorpSec Systems and Tech Stack
description: The Corporate Security department provides configuration management engineering and tech support helpdesk services for team members and temporary service providers (aka contractors, vendors, etc.) for the company-wide systems that we manage. The systems directory provides a list of all of our systems with quick reference links to administration runbooks, end user documentation, issue templates, mentionable groups, and tags that are used in GitLab epics, issues, and merge requests.
---

## Cross-Department System Owners

As GitLab has grown organically, several departments and functional groups have their own System Administrators ("System Owners") that handle day-to-day management of the tech stack applications that are specific to that department or functional group, within the framework of organization-wide compliance, infrastructure, and security best practices. Each [tech stack application](/handbook/business-technology/tech-stack-applications/) at GitLab has a System Owner that is the DRI for handling the implementation and day-to-day operational support for the team members that utilize that application (in their department or functional group). This has an added benefit of preventing the traditional IT department from being a bottleneck and allows each department to self-service as part of GitLab's [efficiency for the right group](/handbook/values/#efficiency-for-the-right-group) subvalue.

- [Customer Success Operations](/handbook/sales/field-operations/customer-success-operations/)
- [(Business Intelligence) Data Team](/handbook/enterprise-data/)
- [Engineering Infrastructure (Reliability SREs)](/handbook/engineering/infrastructure/)
- [Engineering Productivity](/handbook/engineering/infrastructure/engineering-productivity/)
- [Enterprise Applications](/handbook/business-technology/enterprise-applications/)
- [Marketing Operations](/handbook/marketing/marketing-operations/)
- [People Connect](/handbook/people-group/people-connect/)
- [People Group Engineering](/handbook/people-group/engineering/)
- [Sales Systems](/handbook/sales/field-operations/sales-systems/)

## CorpSec Systems Directory

The Corporate Security department provides configuration management engineering and tech support [helpdesk services](/handbook/security/corporate/services/helpdesk) for team members and temporary service providers (aka contractors, vendors, etc.) for the company-wide systems that we manage.

<table>
<thead>
<tr>
<th>System (Handbook Page)</th>
<th>User Guides and Issues</th>
<th>System Owners</th>
</tr>
</thead>
<tbody>
<!-- 1Password -->
<tr>
<td><a href="/handbook/security/corporate/systems/1password">1Password</a></td>
<td>
<i class="fas fa-key mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=1password_default">Create Vault</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=1password_default">Add User to Vault</a><br>
<i class="fas fa-user-minus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=1password_default">Remove User from Vault</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=1password_default">Engineering Issue</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/1password/group">Groups</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/1password/passkey">Passkey Guide</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/1password/setup">Setup Guide</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/1password/vault">Vaults</a><br>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-1password">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-1password">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-1password">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/1password/">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-1password</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/1password">@gitlab-com/corpsys/1password</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-1password</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #eab308; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER PASS</span>
<span style="background-color: #d97706; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN PASS</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Access Control -->
<tr>
<td><a href="/handbook/security/corporate/systems/accessctl">Access Control (accessctl)</a><br><code>access.gitlab.systems</code><br><small>Available in FY25-Q3</small></td>
<td>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=accessctl_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-accessctl">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-accessctl">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-accessctl">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/accessctl">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-accessctl</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/accessctl">@gitlab-com/corpsys/accessctl</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-accessctl</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- AWS (billing) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/aws/billing">Amazon Web Services (billing)</a><br>
<small>Cost Explorer and invoices across all orgs</small>
</td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=aws_billing_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_billing_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-aws-billing">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-aws-billing">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-aws-billing">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/aws/billing">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-aws-billing</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/aws-billing">@gitlab-com/corpsys/aws-billing</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-aws-billing</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-corpsec-infra</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Amazon Web Services Organization (services) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/aws/services">Amazon Web Services (services)</a><br>
<code>x6953</code> Organization
<small>
<ul>
<li><code>x0347 legacy-top</code></li>
<li><code>x4183 legacy-prod</code></li>
<li><code>x8738 sirt</code></li>
<li>See handbook page for all accounts</li>
</ul>
</small>
</td>
<td>
<i class="fas fa-cloud-arrow-up mr-2"></i><a href="/handbook/security/corporate/systems/aws/services/accounts">Create Account for Service/Workload</a><br>
<i class="fas fa-users mr-2"></i><a href="/handbook/security/corporate/systems/aws/services/users">User and Role Management</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=aws_services_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_services_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-aws-services">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-aws-services">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-aws-services">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/aws/services">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-aws-services</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/aws-services">@gitlab-com/corpsys/aws-services</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-aws-services</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-corpsec-infra</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- AWS (sandbox) -->
<tr>
<td><a href="/handbook/security/corporate/systems/aws/sandbox">Amazon Web Services (sandbox)</a><br><code>x3027</code> Organization</td>
<td>
<i class="fas fa-cloud-arrow-up mr-2"></i><a href="/handbook/security/corporate/systems/aws/sandbox/accounts">Create My AWS Account</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_sandbox_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-aws-sandbox">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-aws-sandbox">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-aws-sandbox">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/aws/sandbox">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-aws-sandbox</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/aws-sandbox">@gitlab-com/corpsys/aws-sandbox</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-aws-sandbox</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#sandbox-cloud-questions</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #eab308; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER 1PASS</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- AWS (systems) -->
<tr>
<td><a href="/handbook/security/corporate/systems/aws/systems">Amazon Web Services (systems)</a><br><code>x6658</code> Organization<br><small>Secure Accounts for CorpSec, InfraSec, SIRT</small></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=aws_systems_sysadmin">Sysadmin Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_systems_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-aws-systems">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-aws-systems">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-aws-systems">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/aws/systems">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-aws-systems</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/aws-systems">@gitlab-com/corpsys/aws-systems</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-aws-systems</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-corpsec-infra</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- AWS (dedicated-dev) -->
<tr>
<td><a href="/handbook/security/corporate/systems/aws/dedicated-dev">Amazon Web Services (dedicated-dev)</a><br><code>x3675</code> Organization</td>
<td>
<i class="fas fa-cloud-arrow-up mr-2"></i><a href="/handbook/security/corporate/systems/aws/dedicated-dev/accounts">Create My AWS Account</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=aws_dedicated_dev_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_dedicated_dev_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-aws-dedicated-dev">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-aws-dedicated-dev">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-aws-dedicated-dev">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/aws/dedicated-dev">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-aws-dedicated-dev</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/aws/gcp-dedicated-dev">@gitlab-com/gl-security/corp/aws-dedicated-dev</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-aws-dedicated-dev</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#g_dedicated-team</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #eab308; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER 1PASS</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- AWS (dedicated-prd) -->
<tr>
<td><a href="/handbook/security/corporate/systems/aws/dedicated-prd">Amazon Web Services (dedicated-prd)</a><br><code>x0475</code> Organization</td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=aws_dedicated_prd_default">Sysadmin Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_dedicated_prd_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-aws-dedicated-prd">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-aws-dedicated-prd">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-aws-dedicated-prd">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/aws/dedicated-prd">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-aws-dedicated-prd</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/aws-dedicated-prd">@gitlab-com/corpsys/aws-dedicated-prd</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-aws-dedicated-prd</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#g_dedicated-team</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- AWS (dedicated-pubsec) -->
<tr>
<td><a href="/handbook/security/corporate/systems/aws/dedicated-pubsec">Amazon Web Services (dedicated-pubsec)</a><br><code>x9885</code> Organization</td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=aws_dedicated_pubsec_default">Sysadmin Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=aws_dedicated_pubsec_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-aws-dedicated-pubsec">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-aws-dedicated-pubsec">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-aws-dedicated-pubsec">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/aws/dedicated-pubsec">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-aws-dedicated-pubsec</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/aws-dedicated-pubsec">@gitlab-com/corpsys/aws-dedicated-pubsec</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-aws-dedicated-pubsec</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#g_dedicated-us-pubsec</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">PUBSEC ADMIN SSO</span>
</td>
</tr>
<!-- Azure -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/azure">Azure (Sandbox)</a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=azure_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=azure_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-azure">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-azure">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-azure">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/azure">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-azure</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/azure">@gitlab-com/corpsys/azure</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-azure</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #eab308; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER 1PASS</span>
<span style="background-color: #d97706; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN 1PASS</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Domain Names -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/domains">Domain Names</a></td>
<td>
<i class="fas fa-cart-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=domains_purchase">Purchase Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=domains_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-domains">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-domains">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-domains">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/domains">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-domains</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/domains">@gitlab-com/corpsys/domains</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-domains</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-corpsec-infra</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- DNS Records -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/dns">DNS Records</a></td>
<td>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=dns_update">Update Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=dns_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-dns">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-dns">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-dns">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/dns">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-dns</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/dns">@gitlab-com/corpsys/dns</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-dns</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-corpsec-infra</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #6d28d9; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER MR</span>
<span style="background-color: #6d28d9; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN MR</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
</td>
</tr>
<!-- Drive Strike -->
<tr>
<td>
<a href="https://internal.gitlab.com/handbook/it/it-self-service/it-guides/drivestrike/">DriveStrike</a></td>
<td><i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=drivestrike_default">Engineering Issue</a></td>
<td>
<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-drivestrike">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-drivestrike">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/drivestrike">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-drivestrike</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/drivestrike">@gitlab-com/corpsys/drivestrike</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-drivestrike</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
</td>
</tr>
<!-- GitLab (com) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/gitlab/com">GitLab (com)<br><code>gitlab.com</code></a></td>
<td>
<i class="fas fa-folder-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_group_create">Create Group</a><br>
<i class="fas fa-folder-open mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_group_update">Update Group</a><br>
<i class="fas fa-folder-minus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_group_deprecate">Deprecate Group</a><br>
<i class="fas fa-code-branch mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_project_create">Create Project</a><br>
<i class="fas fa-code-compare mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_project_update">Update Project</a><br>
<i class="fas fa-code-merge mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_project_deprecate">Deprecate Project</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_user_grant">Add User to Group/Project</a><br>
<i class="fas fa-users-slash mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_user_revoke">Remove User from Group/Project</a><br>
<i class="fas fa-user-secret mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_svc">Service Account Request</a><br>
<i class="fas fa-ticket mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_license_work">License for My Work Account</a><br>
<i class="fas fa-ticket mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_license_personal">License for My Personal Account</a><br>
<i class="fas fa-ticket mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_com_license_group">License for Demo/Internal Group</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gitlab_com_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gitlab-com">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gitlab-com">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gitlab-com">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/gitlab/com">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gitlab-com</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gitlab-com">@gitlab-com/corpsys/gitlab-com</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gitlab-com</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#s_production_engineering</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #eab308; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER 1PASS/SSO</span>
<span style="background-color: #d97706; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN 1PASS/SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GitLab (ops) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/gitlab/ops">GitLab (ops)<br><code>ops.gitlab.net</code></a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_ops_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gitlab_ops_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gitlab-ops">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gitlab-ops">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gitlab-ops">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/gitlab/ops">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gitlab-ops</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gitlab-ops">@gitlab-com/corpsys/gitlab-ops</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gitlab-ops</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#infrastructure_lounge</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#s_production_engineering</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #eab308; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER 1PASS/SSO</span>
<span style="background-color: #d97706; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN 1PASS/SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GitLab (dev) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/gitlab/dev">GitLab (dev)<br><code>dev.gitlab.org</code></a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_dev_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gitlab_dev_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gitlab-dev">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gitlab-dev">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gitlab-dev">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/gitlab/dev">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gitlab-dev</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gitlab-dev">@gitlab-com/corpsys/gitlab-dev</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gitlab-dev</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#s_production_engineering</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #eab308; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER 1PASS/SSO</span>
<span style="background-color: #d97706; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN 1PASS/SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GitLab (stg) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/gitlab/stg">GitLab (stg)<br><code>staging.gitlab.com</code></a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_stg_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gitlab_stg_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gitlab-stg">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gitlab-stg">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gitlab-stg">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/gitlab/stg">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gitlab-stg</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gitlab-stg">@gitlab-com/corpsys/gitlab-stg</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gitlab-stg</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#s_production_engineering</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #eab308; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER 1PASS/SSO</span>
<span style="background-color: #d97706; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN 1PASS/SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GitLab (cfg) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/gitlab/cfg">GitLab (cfg)<br><code>cfg.gitlab.systems</code></a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gitlab_cfg_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gitlab_cfg_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gitlab-cfg">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gitlab-cfg">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gitlab-cfg">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/gitlab/cfg">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gitlab-cfg</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gitlab-cfg">@gitlab-com/corpsys/gitlab-cfg</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gitlab-cfg</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-corpsec-infra</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GCP (billing) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/cloud/billing">Google Cloud Platform (Billing)</td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gcp_billing_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_billing_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gcp-billing">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gcp-billing">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gcp-billing">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/cloud/billing">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gcp-billing</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gcp-billing">@gitlab-com/corpsys/gcp-billing</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gcp-billing</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#cloud-finops</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-corpsec-infra</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GCP (com) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/cloud/com">Google Cloud Platform (com)<br><code>gitlab.com</code></a></td>
<td>
<i class="fas fa-cloud-arrow-up mr-2"></i><a href="/handbook/security/corporate/systems/google/cloud/com/projects">Create Project for Service/Workload</a><br>
<i class="fas fa-users mr-2"></i><a href="/handbook/security/corporate/systems/google/cloud/com/users">User and Role Management</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gcp_com_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_com_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gcp-com">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gcp-com">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gcp-com">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/cloud/com">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gcp-com</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gcp-com">@gitlab-com/corpsys/gcp-com</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gcp-com</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#infrastructure_lounge</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#s_production_engineering</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-corpsec-infra</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GCP (sandbox) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/cloud/sandbox">Google Cloud Platform (sandbox)<br><code>gitlabsandbox.cloud</code></a></td>
<td>
<i class="fas fa-cloud-arrow-up mr-2"></i><a href="/handbook/security/corporate/systems/google/cloud/sandbox/projects">Create My GCP Project</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_sandbox_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gcp-sandbox">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gcp-sandbox">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gcp-sandbox">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/cloud/sandbox">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gcp-sandbox</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gcp-sandbox">@gitlab-com/corpsys/gcp-sandbox</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gcp-sandbox</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#sandbox-cloud-questions</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GCP (systems) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/cloud/systems">Google Cloud Platform (systems)<br><code>gitlab.systems</code></a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gcp_systems_sysadmin">Sysadmin Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_systems_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gcp-systems">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gcp-systems">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gcp-systems">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/cloud/systems">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gcp-systems</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gcp-systems">@gitlab-com/corpsys/gcp-systems</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gcp-systems</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-corpsec-infra</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GCP (cells-dev) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/cloud/cells-dev">Google Cloud Platform (cells-dev)<br><code>gitlab-cells.dev</code></a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gcp_cells_dev_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_cells_dev_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gcp-cells-dev">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gcp-cells-dev">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gcp-cells-dev">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/cloud/cells-dev">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gcp-cells-dev</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gcp-cells-dev">@gitlab-com/corpsys/gcp-cells-dev</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gcp-cells-dev</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#s_production_engineering</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GCP (cells-prd) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/cloud/cells-prd">Google Cloud Platform (cells-prd)<br><code>gitlab-cells.com</code></a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gcp_cells_prd_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_cells_prd_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gcp-cells-prd">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gcp-cells-prd">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gcp-cells-prd">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/cloud/cells-prd">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gcp-cells-prd</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gcp-cells-prd">@gitlab-com/corpsys/gcp-cells-prd</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gcp-cells-prd</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#s_production_engineering</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GCP (dedicated-dev) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/cloud/dedicated-dev">Google Cloud Platform (dedicated-dev)<br><code>gitlab-private.org</code></a></td>
<td>
<i class="fas fa-cloud-arrow-up mr-2"></i><a href="/handbook/security/corporate/systems/google/cloud/dedicated-dev/projects">Create My GCP Project</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gcp_dedicated_dev_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_dedicated_dev_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gcp-dedicated-dev">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gcp-dedicated-dev">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gcp-dedicated-dev">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/cloud/dedicated-dev">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gcp-dedicated-dev</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gcp-dedicated-dev">@gitlab-com/corpsys/gcp-dedicated-dev</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gcp-dedicated-dev</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#g_dedicated-team</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- GCP (dedicated-prd) -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/cloud/dedicated-prd">Google Cloud Platform (dedicated-prd)<br><code>gitlab-dedicated.com</code></a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=gcp_dedicated_prd_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=gcp_dedicated_prd_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-gcp-dedicated-prd">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-gcp-dedicated-prd">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-gcp-dedicated-prd">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/cloud/dedicated-prd">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-gcp-dedicated-prd</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/gcp-dedicated-prd">@gitlab-com/corpsys/gcp-dedicated-prd</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-gcp-dedicated-prd</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#g_dedicated-team</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ROLE</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Google Workspace Apps -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/apps">Google Apps (Workspace)</a></td>
<td>
<i class="fas fa-window-restore mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=google_app_create">Authorize/Create App</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=google_app_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-google-app">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-google-app">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-google-app">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/apps">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-google-app</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/google-app">@gitlab-com/corpsys/google-app</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-google-app</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO ROLE</span>
</td>
</tr>
<!-- Google Workspace Calendar -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/calendar">Google Calendar</a></td>
<td>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=google_calendar_default">Engineering Issue</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/google/calendar/delegation">Delegation Guide</a><br>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-google-cal">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-google-cal">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-google-cal">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/calendar">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-google-cal</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/google-cal">@gitlab-com/corpsys/google-cal</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-google-cal</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Google Workspace Drive -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/drive">Google Drive (Docs, Sheets, Slides)</a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=google_drive_manage">Create or Update Drive</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=google_drive_users">Add or Remove Users</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=google_drive_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-google-drive">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-google-drive">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-google-drive">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/drive">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-google-drive</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/google-drive">@gitlab-com/corpsys/google-drive</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-google-drive</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP GROUP</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Google Workspace Groups -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/groups">Google Workspace Groups (Mailing Lists)</a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=google_group_manage">Create or Update Group</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=google_group_users">Add or Remove Users</a><br>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-google-group">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-google-group">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-google-group">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/groups">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-google-group</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/google-group">@gitlab-com/corpsys/google-group</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-google-group</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP GROUP</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Google Workspace Org -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/google/org">Google Workspace Org Config</a></td>
<td>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=google_org_change">Change Management Issue</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=google_org_default">Engineering Issue</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=google_org_svc">Service Account Request</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=google_org_sysadmin">Sysadmin Access Request</a><br>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-google-org">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-google-org">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-google-org">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/google/workspace">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-google-org</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/google-org">@gitlab-com/corpsys/google-org</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-google-org</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Jamf -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/jamf">Jamf MDM</a><br><code>gitlab.jamfcloud.com</code>
</td>
<td>
<i class="fas fa-laptop-medical mr-2"></i><a href="/handbook/security/corporate/systems/jamf/setup">Laptop Setup Instructions</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=jamf_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-jamf">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-jamf">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-jamf">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/jamf">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-jamf</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/jamf">@gitlab-com/corpsys/jamf</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-jamf</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Linux -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/linux">Linux (OS)</a>
</td>
<td>
<i class="fas fa-laptop-medical mr-2"></i><a href="/handbook/security/corporate/systems/linux/setup">Laptop Setup Instructions</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=linux_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-linux">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-linux">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-linux">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/linux">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-linux</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/linux">@gitlab-com/corpsys/linux</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-linux</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
</td>
</tr>
<!-- Linux -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/macos">macOS (OS)</a>
</td>
<td>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=macos_default">Engineering Issue</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/onboarding">Onboarding Hardware Ordering Guide</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/refresh">Refresh/Replace Guide</a><br>
<i class="fas fa-book mr-2"></i><a href="handbook/security/corporate/services/laptops">Repair Guide</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/wipe">Wipe (Factory Reset) Guide</a><br>
<br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/macos/setup">Apple macOS Setup Guide</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/support/onboarding">Onboarding Software Setup Guide</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/security">Security Configuration Standards</a><br>
<ul>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/security/appleid">Apple ID for Work</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/security/backups">Backups</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/security/encryption">Disk Encryption</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/security/firewall">Firewall</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/security/names">Hostnames and Usernames</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/security/icloud">iCloud Drive</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/security/unattended">Locking When Unattended</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/security/passwords">Password Management</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/security/personal">Personal Use</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/security/management">Remote Management (MDM and EDR)</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/security/updates">Software Updates</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/security/touchid">Touch ID (Biometric Passwords and 2FA)</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/security/browsers)">Web Browsers</a></li>
<li><i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/services/laptops/security/networks)">Wireless Networks and VPN</a><br>
</ul>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-macos">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-macos">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/macos">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-macos</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/macos">@gitlab-com/corpsys/macos</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-macos</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
</td>
</tr>
<!-- Nira -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/nira">Nira (Google Drive)</a></td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=nira_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=nira_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-nira">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-nira">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-nira">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/nira">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-nira</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/nira">@gitlab-com/corpsys/nira</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-nira</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- NordLayer -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/vpn">NordLayer VPN</a>
</td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=vpn_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=vpn_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-vpn">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-vpn">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-vpn">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/vpn">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-vpn</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/vpn">@gitlab-com/corpsys/vpn</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-vpn</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
</td>
</tr>
<!-- Okta Apps -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/okta/app">Okta Applications</a><br>
<code>gitlab.okta.com</code><br>
</td>
<td>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/app/setup">New Application (Vendor) Setup</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/ar">Access Request Guide</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=okta_app">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_app_default">Engineering Issue</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_app_create">New Application Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_app_update">Update Application Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_app_deprecate">Deprecate Application Request</a><br>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-okta-app">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-okta-app">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-okta-app">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/okta/app">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-okta-app</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/svc/ar">@gitlab-com/gl-security/corp/svc/ar</a><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/okta-apps">@gitlab-com/corpsys/okta-apps</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-okta-apps</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-corpsec-identity</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO GROUP</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Okta Groups -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/okta/group">Okta Groups (for App Assignment)</a><br>
<code>gitlab.okta.com</code><br>
</td>
<td>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/ar">Access Request Guide</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=okta_group">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_group_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-okta-group">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-okta-group">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-okta-group">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/okta/group">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-okta-group</code><br>
<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/svc/ar">@gitlab-com/gl-security/corp/svc/ar</a><br>
<a href="https://gitlab.com/groups/gitlab-com/corpsys/okta-groups">@gitlab-com/corpsys/okta-groups</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-okta-groups</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO GROUP</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Okta Org -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/okta/org">Okta Org Configuration and Policies</a><br>
<code>gitlab.okta.com</code><br>
</td>
<td>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_org_change">Change Management Issue</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_org_default">Engineering Issue</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=okta_org_svc">Service Account Request</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=okta_org_sysadmin">Sysadmin Access Request</a><br>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-okta-org">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-okta-org">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-okta-org">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/okta/org">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-okta-org</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/okta-org">@gitlab-com/corpsys/okta-org</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-okta-org</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-corpsec-identity</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #16a34a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO GROUP</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Okta Users -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/okta/user">Okta SSO and Users</a><br>
<code>gitlab.okta.com</code><br>
</td>
<td>
<i class="fas fa-user-lock mr-2"></i><a style="color: red;" href="/handbook/security/corporate/systems/okta/user/lockout">2FA and Password Lockout Guide</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/ar">Access Request Guide</a><br>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=okta_user_default">Open an Access Request</a><br>
<br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/android">Android Setup Guide</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/ios">iOS (iPhone/iPad) Setup Guide</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/linux">Linux Setup Guide</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/macos">macOS Setup Guide</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/passkey">Passkey 2FA Setup Guide</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/touchid">Touch ID 2FA Setup Guide</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/yubikey">YubiKey 2FA Setup Guide</a><br>
<br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/provisioning">Provisioning Architecture</a><br>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/okta/user/faq">Frequently Asked Questions (FAQ)</a><br>
<br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_user_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-okta-user">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-okta-user">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-okta-user">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/okta/user">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-okta-user</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/okta-users">@gitlab-com/corpsys/okta-users</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-okta-users</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Okta Workflows -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/okta/workflows">Okta Workflows</a><br>
<code>gitlab.okta.com</code><br>
</td>
<td>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=okta_workflow_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-okta-flow">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-okta-flow">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-okta-flow">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/okta/workflows">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-okta-flow</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/okta-flows">@gitlab-com/corpsys/okta-flows</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-okta-flows</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-corpsec-identity</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Sandbox Cloud -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/hackystack">Sandbox Cloud (HackyStack)</a><br>
<code>gitlabsandbox.cloud</code><br>
</td>
<td>
<i class="fas fa-book mr-2"></i><a href="/handbook/security/corporate/systems/sandbox-cloud/guides">Self Service Guide</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=sandbox_cloud_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-sandbox-cloud">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-sandbox-cloud">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/hackystack">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-sandbox-cloud</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/sandbox-cloud">@gitlab-com/corpsys/sandbox-cloud</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-sandbox-cloud</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#sandbox-cloud-questions</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #6d28d9; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSH</span>
</td>
</tr>
<!-- SentinelOne EDR -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/sentinelone">SentinelOne</a><br>
</td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=sentinelone_sysadmin">Sysadmin Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=sentinelone_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-sentinelone">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-sentinelone">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-sentinelone">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/sentinelone">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-sentinelone</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/sentinelone">@gitlab-com/corpsys/sentinelone</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-sentinelone</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN APP ROLE</span>
</td>
</tr>
<!-- Slack -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/slack">Slack</a><br>
<code>gitlab.enterprise.slack.com</code><br>
</td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=slack_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=slack_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-slack">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-slack">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-slack">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/slack">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-slack</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/slack">@gitlab-com/corpsys/slack</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-slack</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ADMIN ROLE</span>
</td>
</tr>
<!-- Teleport -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/teleport">Teleport</a><br>
</td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?issuable_template=teleport-troubleshooting#">Troubleshooting Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-teleport">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-teleport">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-teleport">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/teleport_admin.md">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-teleport</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/teleport">@gitlab-com/corpsys/teleport</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-teleport</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#security-corpsec</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #b91c1c; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">ADMIN SSO</span>
</td>
</tr>
<!-- YubiKey -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/yubikey">YubiKey</a><br>
</td>
<td>
<i class="fas fa-cart-plus mr-2"></i>Order a Key (Slack <code>/yubikey</code>)</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=yubikey_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-yubikey">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-yubikey">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/yubikey">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-yubikey</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/yubikey">@gitlab-com/corpsys/yubikey</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-yubikey</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
</td>
</tr>
<!-- Zoom -->
<tr>
<td>
<a href="/handbook/security/corporate/systems/zoom">Zoom</a><br>
<code>gitlab.zoom.us</code><br>
</td>
<td>
<i class="fas fa-user-plus mr-2"></i><a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=zoom_default">Open an Access Request</a><br>
<i class="fas fa-gear mr-2"></i><a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=zoom_default">Engineering Issue</a>
</td>
<td>
<a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?label_name%5B%5D=corpsys-zoom">ARs</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/?label_name%5B%5D=corpsys-zoom">Issues</a>
&nbsp;/&nbsp;<a href="https://gitlab.com/groups/gitlab-com/gl-security/corp/-/epics?label_name[]=corpsys-zoom">Epics</a>
<br>
<i class="fas fa-book mr-2"></i><a href="https://handbook.gitlab.systems/zoom">Administration Runbooks</a><br>
<i class="fas fa-tag mr-2"></i><code>corpsys-zoom</code><br>
<i class="fa-brands fa-gitlab mr-2"></i><a href="https://gitlab.com/groups/gitlab-com/corpsys/zoom">@gitlab-com/corpsys/zoom</a><br>
<i class="fa-brands fa-slack mr-2"></i><code>@corpsysadmins-zoom</code><br>
<i class="fa-brands fa-slack mr-2"></i><code>#it_help</code><br>
<i class="fas fa-shield-halved mr-2"></i>
<span style="background-color: #0284c7; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER SSO</span>
<span style="background-color: #71717a; color: #ffffff; font-weight: normal; padding: 2px 4px; border-radius: 0.25rem; letter-spacing: 0.05em; font-size: 10px;">USER APP ADMIN ROLE</span>
</td>
</tr>
</tbody>
</table>
