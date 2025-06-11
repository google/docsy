---
title: "Information Technology (IT) Department"
description: "The IT department focuses on managing the framework of how GitLab procures, implements, integrates, secures, exports analytics, and supports our tech stack applications while providing strategic enablement and integration support for all departments and team members that allows us to scale efficiently, safely, and securely."
---

> The IT Department is part of the [Business Technology](/handbook/business-technology) organization in the [Finance](/handbook/finance) division.

## Mission

The IT Department provides or supports the following functions:

- Access requests and role-based access control (RBAC)
- Account password reset and lockout support
- Audit and compliance
- Change management
- Collaborate with Business Technology, People, and Security to implement and support organization-wide best practices for IT and Security related needs.
- Laptop endpoint management and security
- Laptop hardware procurement and repair support
- Laptop software support
- Identity and access management (IAM) and Single-Sign On (SSO)
- Infrastructure management and provisioning
- Onboarding provisioning and new hire support
- Offboarding deprovisioning and data migration
- Software development for internal IT automation
- Security support for Legal, People, and Engineering Security
- Tech stack compliance and oversight
- Team member support for organization-wide technologies with 24x5 timezone coverage

We also provide support for our [cross-department system owners](/handbook/business-technology/#cross-department-system-owners) for our tech stack applications.

## How Can We Help?

This handbook page focuses on how our department operates internally and the initiatives that we are working on.

**Are you looking for help with your access requests, infrastructure, laptop, tech stack applications, etc?** Please visit our IT Self Service Knowledge Base at [/handbook/it](/handbook/it).

**Not finding what you're looking for?** Please ask in the <a href="https://gitlab.slack.com/archives/CK4EQH50E">#it_help</a> Slack channel.

## Department Structure

### IT Compliance

<details>
<summary markdown="span">IT Compliance</summary>

<a href="/handbook/business-technology/enterprise-applications/it-compliance/">Handbook Page</a><br />
<br />
The IT Compliance team works collaboratively with multiple functional teams throughout the GitLab organization. We partner with our Security and Legal teams to identify and manage privacy, data protection risks, and compliance requirements to help meet stakeholder expectations. We also partner with Management, Business Teams, and our Data Team to implement solutions.

</details>

### IT Security Operations

<details>
<summary markdown="span">IT Security Operations</summary>

<a href="/handbook/security/security-operations/">Handbook Page</a><br />
<br />
The IT Security Operations team focuses on reducing the threat landscape and improving our security posture across our tech stack applications while ensuring privacy, data protection, and compliance framework requirements are met. We collaborate closely with the <a href="/handbook/security/#departmental-structure">Security</a> department that focuses on the broader scope of the GitLab product and our GitLab.com SaaS offering.<br />
<br />
The best practices and policies for team members can be found on the <a href="/handbook/security">security practices</a> handbook page.

</details>

### IT Engineering

<a href="/handbook/security/corporate/">Handbook Page</a>

The IT Engineering sub-department is focused on designing, developing, and implementing automation efficiencies using software and systems to improve GitLab's business processes, software systems, and cloud infrastructure. Our team members have one or more specialties that they focus on.

<details>
<summary markdown="span">Access Management and Single-Sign On (SSO)</summary>

<a href="/handbook/security/identity/">Handbook Page</a><br />
<br />
The IT Engineering team implements Okta SSO for our tech stack applications. You can learn more on the <a href="/handbook/it/okta/">Okta handbook page</a>.<br />
<br />
The IT Support team handles <a href="/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/">access requests</a> for the tech stack applications that IT manages. All access requests are created in the same <a href="https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request">issue tracker</a> project, regardless of which System Owner is responsible for provisioning your user account.<br />
<br />
The IT Development team also focuses on Identity and Access Management (IAM) and Role-Based Access Control (RBAC) automation. We are developing <a href="/handbook/it/access-manager">GitLab Access Manager (GLAM)</a>, a custom application that will replace access request issues and manual provisioning with a streamlined custom web UI and API integration with most of our tech stack applications for user and role provisioning.<br />

</details>

<details>
<summary markdown="span">IT Development</summary>

<a href="/handbook/security/corporate/">Handbook Page</a><br />
<br />
The IT Engineering Development team develops custom software applications, automation, APIs and integrations that support internal IT automation for business efficiency and processes managed by the IT department. <br />
<br />
Many of our projects focus on providing self service access request provisioning to our tech stack applications and supporting IT Infrastructure services including the Demo Systems and Sandbox Cloud.<br />
<br />
We are in the process of creating <a href="/handbook/security/identity/">GitLab Access Manager (GLAM)</a> to provide the next-generation of access request automation across most of our tech stack applications.<br />

</details>

<details>
<summary markdown="span">IT Infrastructure</summary>

<a href="/handbook/security/corporate/">Handbook Page</a><br />
<a href="https://gitlab.com/gitlab-com/business-technology/engineering/infrastructure/issue-tracker/-/issues">Issue Tracker</a><br />
<br />
The IT Infrastructure team manages AWS and GCP infrastructure that is not related to GitLab.com SaaS production infrastructure and provide managed infrastructure services for other departments, including most ephemeral sandbox infrastructure needs across the company. We also handle access requests for cloud infrastructure and DNS/domain name requests.<br />
<br />
We collaborate with the <a href="/handbook/engineering/infrastructure/">Reliability Engineering (SRE)</a> and <a href="/handbook/security/product-security/infrastructure-security/">Infrastructure Security</a> teams to provide Infrastructure Shared Services for all AWS, Azure, and GCP related requests and support across the organization.<br />
<br />
We also provide escalation engineering and triage support for the <a href="/handbook/security/security-operations/sirt">Security Incident Response Team ("SIRT")</a> and <a href="/handbook/security/security-operations/red-team/">Security Red Team</a> when security anomalies, events, or incidents require AWS/GCP subject matter expertise.<br />
<br />
Our focus is on organizational policy management, access request provisioning, and services that are outside of the <a href="/handbook/engineering/infrastructure">Reliability Engineering</a> scope of hosting the GitLab.com SaaS service, such as the provisioning of demo/sandbox/test infrastructure for team members.<br />
<br />
The <a href="/handbook/customer-success/demo-systems">Demo Systems</a> provide an always-on shared sandbox environment for demo and experimental use cases that aren't intended for or supported on GitLab.com and don't need dedicated infrastructure to be provisioned for your use case.<br />
<br />
The <a href="/handbook/company/infrastructure-standards/realms/sandbox/">GitLab Sandbox Cloud</a>, powered by <a href="https://gitlab.com/gitlab-com/business-technology/engineering/tools/hackystack">HackyStack</a>, automates the provisioning of AWS accounts, AWS IAM users, GCP projects, and GCP users. This has allowed us to automate a large portion of our AWS and GCP access requests.<br />

</details>

<details>
<summary markdown="span">Tech Stack Application Implementation and Support</summary>

<a href="/handbook/business-technology/tech-stack-guide/">Handbook Page</a><br />
<br />
We provide implementation engineering and support for 3rd party tech stack applications that are managed by Business Technology and other non-engineering departments. We usually classify this work as "Engineering Operations" (EngOps).<br />

</details>

### IT Support

> This is also referred to as IT Helpdesk, Team Member Enablement, or Analyst team.

<a href="/handbook/it">IT Self Service Knowledge Base</a><br />
<a href="/handbook/it/end-user-services/">Handbook Page</a><br />
<br />
The IT Support team focuses on providing helpdesk support for all of our team members globally with the technologies that are used across the entire organization. These include our collaboration tools (GitLab.com, Google Workspace, Slack, Zoom, etc.), security and compliance tools (1Password, Okta, Jamf, SentinelOne, etc.), laptops and hardware (MacBook Pros, Linux machines, etc.), and most software applications that run on MacOS.<br />
<br />
**Are you looking for help with your access requests, infrastructure, laptop, tech stack applications, etc?** Please visit our IT Self Service Knowledge Base at [/handbook/it](/handbook/it).<br />

<details>
<summary markdown="span">Access Requests</summary>

<a href="/handbook/it/#access-requests-overview">IT Self Service Handbook Page</a><br />

</details>

<details>
<summary markdown="span">Ask for Help in Slack</summary>

You can ask questions or get assistance in the <a href="https://gitlab.slack.com/archives/CK4EQH50E">#it_help</a> Slack channel.

</details>

<details>
<summary markdown="span">Onboarding</summary>

<a href="/handbook/it/#onboarding-overview">IT Self Service Handbook Page</a><br />

</details>

<details>
<summary markdown="span">Offboarding</summary>

<a href="/handbook/it/#offboarding-overview">IT Self Service Handbook Page</a><br />

</details>

<details>
<summary markdown="span">FAQ and How-to Guides</summary>

<a href="/handbook/it/#how-to-overview">IT Self Service Handbook Page</a><br />

</details>

<details>
<summary markdown="span">Laptop Hardware</summary>

<a href="/handbook/it/#laptop-hardware-overview">IT Self Service Handbook Page</a><br />

</details>

<details>
<summary markdown="span">Laptop Linux OS</summary>

<a href="/handbook/it/#laptop-linux-os-overview">IT Self Service Handbook Page</a><br />

</details>

<details>
<summary markdown="span">Laptop Mac OS</summary>

<a href="/handbook/it/#laptop-mac-os-overview">IT Self Service Handbook Page</a><br />

</details>

<details>
<summary markdown="span">Laptop Apps</summary>

<a href="/handbook/it/#laptop-apps-overview">IT Self Service Handbook Page</a><br />

</details>

<details>
<summary markdown="span">Laptop Data</summary>

<a href="/handbook/it/#laptop-data">IT Self Service Handbook Page</a><br />

</details>

## Initiatives {#initiatives}

### OKRs {#okrs}

You can see our OKRs in the [Business Technology OKR issue tracker](https://gitlab.com/gitlab-com/business-technology/okrs).

### Initiative Codenames {#initiative-codenames}

Our department manages technical projects with a lot of depth and/or breadth that may have a very long descriptive title. This is similar to a [confidential project name](/handbook/communication/confidentiality-levels/#project-names), however usually has minimal usage outside the IT department and is only for internal initiatives (in collaboration with security teams) to quickly refer to a project as part of our team's morale since we get excited and rally around codenames.

All issues related to these projects exist in internal only projects by default due to security risks. Any public information is linked in the handbook.

We use animated movie and theme park references. We are careful to avoid trademarks and verify wider adoption in the industry.

| Initiative Codename  | Description |
|-------------------|-------------|
| FastPass          | Implementation of next-gen access request automation with GitLab Access Manager (GLAM) and migration of existing access request processes, baseline entitlements, and job role entitlements |
| Scare Floor       | Offboarding Scripts and monitoring alerts                                              |
| Teacups           | RBAC architecture for Job Family and Department Group with Google Drive permissions    |
| Hercules          | SSO/SCIM migration for tech stack applications                                         |
| Wristband         | Separate IAM user accounts color-based classifications for contractors, team members, service accounts, elevated admin accounts, etc. |

## Who We Are {#who-we-are}

### Leadership Team {#who-leadership}

| Name                                                                  | Role                                     | Business Engagement Focus Areas                                     |
|-----------------------------------------------------------------------|------------------------------------------|---------------------------------------------------------------------|
| [Rob Rea](/handbook/company/team/#rrea1)               | Senior Director, IT Operations                  | Assets, Security, Tech Stack Vendors, Compliance, Helpdesk, etc.    |
| [Peter Kaldis](/handbook/company/team/#pkaldis)        | Senior Manager, IT Systems Engineering          | Access Manager, Okta, Google, IT Engineering, Infrastructure        |
| [Michael Beltran](/handbook/company/team/#mbeee)       | Senior Manager, IT End User Services            | End User Services IT Manager                                        |
| [Eric Rubin](/handbook/company/team/#ericrubin)        | Senior Manager, IT Security Operations          | Endpoint Security, Okta, Nira                                       |
| [Derek Isla](/handbook/company/team/#disla)            | Manager, IT Compliance                          | IT Compliance |

### IT Support Team {#who-support}

| Name                                                                        | Role                            | Timezone Coverage |
|-----------------------------------------------------------------------------|---------------------------------|-------------------|
| [Steve Ladgrove](/handbook/company/team/#sladgrove)          | Senior IT Helpdesk Analyst      | APAC              |
| [Jenny Wong](/handbook/company/team/#jwong6)                 | IT Helpdesk Analyst             | AMER              |
| Jeff Ford                                           | IT Helpdesk Analyst             | AMER              |
| Alex Krusiec                                        | IT Helpdesk Analyst             | AMER              |
| Mic Rohr                                            | IT Helpdesk Analyst             | AMER              |
| [Max Hirata](/handbook/company/team/#mraetz)                 | IT Helpdesk Analyst             | APAC              |

### Engineering Team {#who-engineering}

| Name                                                | Role                              | Focus Areas (Specialties)                                    |
|-----------------------------------------------------|-----------------------------------|--------------------------------------------------------------|
| [Jeff Martin](/handbook/company/team/#jeffersonmartin)       | Staff IT Systems Engineer        | Development, Engineering Mgmt, Infrastructure, Demo Systems, Security, Support  |
| [Marcus Whitaker](/handbook/company/team/#mwhitaker)         | Senior IT Systems Engineer        | Access Management, Okta, Operations                                |
| [Dillon Wheeler](/handbook/company/team/#dillonwheeler)      | IT Systems Engineer               | Development, Google, Security                   |
| [Mohammed Al Kobaisy](/handbook/company/team/#malkobaisy)    | IT Systems Administrator          | Infrastructure, Operations, Support                                |
| [Vlad Stoianovici](/handbook/company/team/#vlad)             | Senior IT Site Reliability Engineer | Infrastructure, Operations, Support                        |

### IT Compliance Team {#who-it-compliance}

| Name                                                                        | Role                              |
|-----------------------------------------------------------------------------|-----------------------------------|
| [Sarah Pang](/handbook/company/team/#arahpang)                                       | Senior IT Compliance Engineer     |

### Cross-Department System Owners

As GitLab has grown organically, several departments and functional groups have their own System Administrators ("System Owners") to handle day-to-day management of the tech stack applications that are specific to that department or functional group.

See the [Business Technology](/handbook/business-technology#cross-department-system-owners) handbook page to learn more about system owners.
