---
title: "Infrastructure Security"
description: "GitLab's Infrastructure Security provides security oversight of the SaaS."
---

## Team Identity

GitLab's Infrastructure Security team is responsible for the planning, execution, and support of initiatives specific to the security of GitLab's Infrastructure.

As stable counterparts from the Security department, the team members support specific [Product Categories](https://gitlab.com/search?group_id=6543&project_id=7764&scope=blobs&search=infrasec+file%3Astages%5C.yml%24&regex=false) heavily reliant on Cloud and Infrastructure solutions. They collaborate with Development, Infrastructure, and Security teams across various product categories.

Infrastructure Security's engagements take place in the form of infrastructure change reviews, SaaS infrastructure access & permissions models, cloud security best practices, operating system security, security monitoring at the host and container level, vulnerability management, and patching policies.

Some high-priority initiatives for the team are:

- Deployment of tools to improve our data collection capabilities (e.g., Wiz, OSQuery)
- Counterpart work (e.g., Dedicated, FedRAMP, Cells, AI)
- Security reviews (e.g., Readiness reviews, Design reviews)
- Identify and remediate Misconfiguration across our Cloud Environments
- Creation and deployment of preventive controls (e.g., AWS/GCP Organization hardening, Terraform hardening)

Further details can be found in the [job family description](/job-families/security/infrastructure-security).

## Team Members

<table>
<thead>
<tr>
<th>Person</th>
<th>Role</th>
</tr>
</thead>
<tbody>
<tr>
<td>Julie Davila</td>
<td><a href="/job-families/security/security-leadership#vice-president-vp-security">VP, Product Security</a></td>
</tr>
<tr>
<td>Jacob Jernigan</td>
<td><a href="/job-families/security/security-leadership#senior-manager-infrastructure-security">Senior Manager, Infrastructure Security</a></td>
</tr>
<tr>
<td>Paulo Pontes Martins</td>
<td><a href="/job-families/security/infrastructure-security#senior-infrastructure-security-engineer">Staff Security Engineer, Infrastructure Security</a></td>
</tr>
<tr>
<td>Dhruv Jain</td>
<td><a href="/job-families/security/infrastructure-security#senior-infrastructure-security-engineer">Senior Security Engineer, Infrastructure Security</a></td>
</tr>
<tr>
<td>Matt Morrison</td>
<td><a href="/job-families/security/infrastructure-security#senior-infrastructure-security-engineer">Senior Security Engineer, Infrastructure Security</a></td>
</tr>
<tr>
<td>Uday Govindia</td>
<td><a href="/job-families/security/infrastructure-security#senior-infrastructure-security-engineer">Senior Security Engineer, Infrastructure Security</a></td>
</tr>
<tr>
<td>Lizzie Moratti</td>
<td><a href="job-families/security/infrastructure-security/#infrastructure-security-engineer-intermediate">Intermediate Security Engineer, Infrastructure Security</a></td>
</tr>
</tbody>
</table>

## Working With Us

1. To request an **infrastructure security review**, please create an issue using [the security review template](https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/bau/-/issues/new?issue[title]=Security%20Review%20Request%3A%20{%2B%20Service%2FFeature%20Name%20%2B}&issuable_template=production_readiness)
1. For everything else:
    1. [Create an issue](https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/bau/-/issues) in our issue tracker dedicated to Business as Usual (BAU) activities and general inquiries.
        - It is not necessary to `@mention` anyone. In case you want to mention the whole team, use the `@gitlab-com/gl-security/product-security/infrastructure-security` handle on GitLab.com.
        - You can also chat with us on Slack in the dedicated `#security-infrasec` channel or by tagging us `@infrasec-team`.
    2. The team will triage (and prioritise accordingly) all incoming request during the fortnightly team sync (typically Tuesday).

## How We Work

### Meetings and Scheduled Calls

Our preference is to work asynchronously, within our project issue tracker as described in [the project management section](#project-management) below.

The team does have set of regular synchronous calls:

- A fortnightly team sync to discuss progress, blockers, and anything related to the InfraSec team.
  - Everyone in the company is welcome to join.
  - The [agenda is public within GitLab](https://docs.google.com/document/d/1mvmPrG66JpTkj3dbDpnhNybADrUVQwP96DM1trQT89Y) as well.
- A quarterly team retrospective to reflect on what went well in the previous quarter, and discuss what can be improved going forward.
- 1-1s between Individual Contributors and the Engineering Manager.

### Team Pages

- This [Handbook Page](/handbook/security/product-security/infrastructure-security/), which contains general information about the team
- The [Internal Handbook](https://internal.gitlab.com/handbook/security/product_security/infrastructure_security/), which is the operational source of truth for the team. Everyone is **encouraged** to check it out for team's information
- The [Infrastructure Security GitLab Sub-Group](https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security), which contains EPICs and repositories
- The [Infrastructure Security **Public** Sub-Group](https://gitlab.com/gitlab-com/gl-security/security-operations/infrastructure-security-public), which contains publicly facing resources (e.g., Docker images, etc.)

### Project Management

We use Epics, Issues, and Issue Boards to organize our work, as they complement each other:

- The single source of truth for engineering work is the [InfraSec Sub-Group in GitLab](https://gitlab.com/groups/gitlab-com/gl-security/product-security/infrastructure-security/-/epics). **All Epics will be collected at this level**
- Having all projects at this level allows us to use a single list for prioritization and enables us to prioritize work for different services alongside each other
- Projects are prioritized in line with the [InfraSec Goals](https://gitlab.com/groups/gitlab-com/gl-security/product-security/infrastructure-security/-/wikis/InfraSec-Goals)

#### Team Planning

- For the **long term strategy** of the InfraSec Team, you can refer to:
  - 🎯 [InfraSec Goals](https://gitlab.com/groups/gitlab-com/gl-security/product-security/infrastructure-security/-/wikis/InfraSec-Goals)
- From a **tactical point of view**, you can refer to:
  - 🎛 [InfraSec Planning Board](https://gitlab.com/groups/gitlab-com/-/boards/7549315?label_name%5B%5D=Department%3A%3AInfraSec) (for the tasks we are currently working on)

#### Project Ownership

Each project has an owner who is responsible for delivering the project.

The owner needs to:

1. Regularly update the status in the Epic description and milestones.
1. Work with others to move project issues through the boards.

#### Labels

Please use the following labels for **project work only**:

| Label                       | Use Case                                                        |
| --------------------------- | --------------------------------------------------------------- |
| `~"Department::InfraSec"`   | Team Label (to be included in every project-related issue)      |
| `~"InfraSec::triage"`       | For new issues which need to be triaged                         |
| `~"InfraSec::this-quarter"` | For EPICs committed to the current quarter                      |

### Design Documents

Before starting a new project, the team is **encouraged**
to define software designs through design docs.
These design doc documents the high level implementation strategy and key design decisions with emphasis on the trade-offs that were considered during those decisions.

To start discussing a new design:

1. Create a new MR in the [InfraSec Team Charter repo](https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/team-charter/-/tree/main/designs) with the Design proposal. You can use [this template](https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/team-charter/-/blob/main/.gitlab/issue_templates/design_doc.md) as a reference for the structure of the Design doc.
2. Fill the data as requested
3. Mark other members of the team as reviewers

## Additional Resources

### Onboarding

- Infrastructure Security Team [Onboarding Template](https://gitlab.com/gitlab-com/gl-security/product-security/infrastructure-security/team-charter/-/blob/master/onboarding/onboarding_template.md)
- [InfraSec Entitlements template](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/blob/master/.gitlab/issue_templates/role_baseline_access_request_tasks/department_security/role_security_engineer_infrastructure_security.md)
