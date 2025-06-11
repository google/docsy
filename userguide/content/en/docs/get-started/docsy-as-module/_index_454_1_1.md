---
title: "Security Research"
aliases:
  - "/handbook/security/product-security/security-research/"
description: "The Security Research team contributes to the Security Vision and Mission through projects that focus on identifying, quantifying, and developing solutions for complex security risks facing GitLab and its users."
---

## Team Focus

The Security Research team contributes to the [Security Vision and Mission](/handbook/security/#i-classfas-fa-rocket-idbiz-tech-iconsi-security-vision-and-mission) through projects that focus on identifying, quantifying, and developing solutions for complex security risks facing GitLab and its users. This work aims to improve the security posture of the product and the company, but always with an eye for contributing new functionality as a differentiator. Additionally, we aim to share our results widely in order to educate and bring awareness to the GitLab Security program.

In order to realize this vision, team projects generally align with the following categories in accordance with the [role description](/job-families/security/security-research/):

- Provide security insight
- Development of new security capabilities
- Education

### Provide Security Insight

In order to secure GitLab the product and GitLab the company, security insight
projects aim to identify, quantify, and communicate technical security risks.

Examples include:

- [Security testing of FOSS applications and dependencies used within GitLab](#gitlab-ecosystem-security-testing)
- Introduction and practice of [threat modeling](/handbook/security/product-security/application-security/threat-modeling/)
- Publishing of internal technical risk reports

### Security Capability Development

Projects in the security capability development category aim to provide novel
tools to enable others to innovate securely.

Examples include:

- [Package Hunter](#package-hunter)
- [Untamper My Lockfile](https://gitlab.com/gitlab-org/frontend/untamper-my-lockfile)
- Token leak tooling

### Education

We want to ensure that our ideas are available for others to learn from and
build upon. To achieve that goal we share our results as widely as appropriate.
Additionally, dedicated education projects seek to develop engaging security
content to help raise awareness of security concepts.

Examples include:

- Blog posts
- [GitLab Security Tech Notes](https://gitlab-com.gitlab.io/gl-security/security-tech-notes/)
- Conference presentations
- Writing of security standards
- GitLab documentation updates
- Development of internal training

Even if the outcome of the research is not yielding the expected
outcomes the approaches and procedures conducted during the research
phase should be documented and published.

## Project Lifecycle

The Security Research project lifecycle is designed to quickly iterate through
the technical validation of research questions. The technical validation is
followed by a business validation in which stakeholders are formally identified
and concrete deliverables are defined. This workflow allows for the exploration
of new ideas, but ensures that projects are aligned with business objectives.
Details on how projects are prioritized are covered in
[Project Prioritization](#project-prioritization).

### Participants

#### Team Members

As experts, security research team members are given space to direct their own
projects. To do so, they use data from a number of different sources to decide
where their focus can be impactful to the business, and the larger security
community.

Some sources of data include:

- Their own security background
- Security questions/problems raised within GitLab
- Outreach with GitLab team members
- Security industry trends

#### Team Manager

The role of the team manager is to support and guide team members in their
project. This includes sharing information that they may collect and
facilitating communication with other team members. One example of where the
manager can be impactful is raising security questions/problems identified
within the company.

#### Stakeholders

In order to ensure that projects are well aligned with business objectives
we seek to identify stakeholders within the company to act as sponsors for
our projects. A stakeholder can be identified at any time, but we also seek
to identify stakeholders once a technical idea has been validated. A team
member can volunteer to be a stakeholder by reaching out to the team or
opening a [Lightbulb issue](#lightbulb-ideas).

### Lightbulb Ideas

Lightbulb ideas are the first step of a security research project. These
are inspired [research questions](https://en.wikipedia.org/wiki/Research_question)
that we believe are worth investigating and are boardly aligned with business
objectives. Lightbulb ideas are labeled with `~security-research::lightbulb`, and open
lightbulb ideas are discussed during the security research sync to help shape
our team roadmap. Lightbulb ideas can be opened by anyone interested in
partnering with the Security Research team.

Lightbulb ideas are labeled with `~security-research::lightbulb`. To help align
and communicate the goals of our projects, the `~Security Focus::` and
`~Project Goal::` scoped labels are used. One label from each group should be
applied to lightbulb issues upon creation. See [team labels](#team-labels) for
details.

### Project Prioritization

Projects are prioritized by a mix of factors, including business priorities,
project completion stage, and the judgement of the participating security
research team member. Project prioritization is a continuous discussion
within the team, but will be performed at least once prior to the beginning
of each quarter in order to participate in alignment with division OKRs.

The general prioritization order is (from highest to lowest priority):

- Projects in the [Product Integration](#product-integration) stage.
- Projects in the [GitLab-internal Adoption](#gitlab-internal-adoption)
stage.
- Projects aligned with top risk areas as identified by our internal risk
assessment.

Once a new project has been prioritized, it will follow the project completion
criteria as defined below.

### Project Completion Criteria

When a project is considered to be completed depends on the objectives of the project. The objectives for research projects are:

- Idea validation
- GitLab-internal adoption
- GitLab Product integration

All (self-guided) projects start with idea validation and might be expanded to GitLab-internal adoption and/or GitLab Product integration.

#### Idea Validation

Entry criteria:

- Lightbulb issue
- Alignment with focus area

Exit criteria:

- Research question answered
- Research findings documented and communicated to potential stakeholders

The idea validation phase begins with formulating one or more research questions which we seek to answer with a research project (see also [Lightbulb Ideas](#lightbulb-ideas)). The idea should be related to the focus areas of the Security Department to align the work with company objectives. Once the questions are answered, the idea validation phase is completed and the results should be published as a conference talk, blog post, or tech note. The results should also be shared in a focused effort internally with peers in the Security Department and with product managers to which the work might be relevant.

#### GitLab-internal Adoption

Entry criteria:

- Stakeholder from within the company exist.
- Stakeholder commitment (e.g. willingness to maintain code, operate a service, or triage findings).
- Project plan describing goals and implementation tasks.

Exit criteria:

- Project plan completed

Once an idea has been validated, the research project can be extended to achieve GitLab-internal adoption and/or integration into GitLab's products. If the project is extended, a new research proposal should be created and buy-in from stakeholders should be obtained. The expected deliverables should be documented. For example, internal adoption can be achieved by documenting research insights in the handbook or by implementing a software service.

Factors to consider when scoping a project for internal adoption or product integration are:

- The time and resources available to the researcher. If the researcher is working on a tight deadline or has limited resources, they may need to scale back the scope of the project or adjust their expectations for completion. In other words, a single person introducing a fundamentally new capability to the product is unrealistic.
- If ongoing maintenance is required, which team will own the maintenance?

#### Product Integration

Entry criteria:

- Stakeholder from Product exist.
- Stakeholder commitment (e.g. engineering resources for implementation, maintenance, budget).
- Project plan describing goals and implementation tasks.

Exit criteria:

- Project plan completed.

| Project Goal | Idea validation | Internal Adoption | Product Integration |
| ---      | ---      | ---      | ---    |
| Completion Criteria   | Research question answered   | <ul><li> Detection capabilities developed </li><li> Process improved  </li></ul>   | <ul><li> Risk mitigated </li><li> Vulnerability fixed </li></ul> |
| Deliverables   |  <ul><li>PoC</li><li>Talk, Blog Post, Tech Note</li></ul>  |  <ul><li>Code, Infra, Software Service</li><li>Handbook MR</li></ul>  | <ul><li>Code, Infra, Software Service</li><li>Docs MR</li></ul>  |
| Timeframe (Estimates)| 1-2 quarters | 2-3 quarters | 3-4 quarters |

#### Communicating Results

At the end of each project phase, the team member will share their
results. Our goal is to share our results as widely as possible, therefore
the most appropriate communication form will be chosen given sensitivity and
time constraints. In some cases, due to the sensitivity of the work, the
results will only be shared with the company, until which time they can be
shared more widely.

### Team Labels

#### Security Focus labels

[`~Security Focus::`](https://gitlab.com/groups/gitlab-com/gl-security/-/labels?subscribed=&search=Security+Focus)
labels are used to align an issue with the broad high-level focus areas of the
Security division, based on the risks and priorities of the business. The list
is meant to be stable, but not static.

- `Security Focus::Cloud and Infrastructure Security` - Related to the
secure configuration and use of company production and non-production
cloud and infrastructure environments.
- `Security Focus::Data Security Governance` - Related to the controls,
processes, and policies concerning the protection of the data trusted to the
company.
- `Security Focus::Identity and Access Management` - Related to authentication
and authorization to business services and data.
- `Security Focus::Supply-chain Security` - Related to the establishment of
trust in 3rd party code, data, and services necessary for the business.
- `Security Focus::Other` - Related to anything not fitting into the four main focus areas.

#### Project Goal labels

[`~Project Goal::`](https://gitlab.com/groups/gitlab-com/gl-security/security-research/-/labels?search=Project+Goal&subscribed=)
 labels are used to communicate the high-level goal of a project.

- `Project Goal::Risk Identification & Quantification` - The project aims to identify,
quantify, and communicate risk(s).
- `Project Goal::Risk Mitigation` - The project aims to reduce or eliminate
a particular risk.
- `Project Goal::Team Maturity::Processes` - The project aims to mature team
processes and improve understanding of how the team works.
- `Project Goal::Team Maturity::Technical Growth` - The project aims to grow
the team's understanding of a technical area. The focus is on learning which
can be applied in future projects.

### Current and Past Research Projects

#### Package Hunter

Modern dependency management systems like npm and bundler make reusing code easy and ubiquitous. This increases developer productivity and reduces the time to implement applications. However, dependency management systems also bring new challenges. Even for relatively small applications, the number of 3rd-party dependencies quickly grows to several hundred. Because these dependencies are critical to an application's security, they must be carefully vetted for vulnerabilities and malicious code. Performing this task manually is typically not feasible due to the amount of dependency code being vast and developer time is precious. Automated tools are essential in supporting the review of dependencies and preventing malicious dependencies from entering an application's supply-chain. To tackle this challenge, we have developed Package Hunter, a tool to identify malicious npm modules and Ruby Gems. Package Hunter monitors the system calls of application dependencies during their installation. If any suspicious system calls are observed, an alert is created and brought to the attention of the development team.

Package Hunter is open source. Head over to the [project](https://gitlab.com/gitlab-org/security-products/package-hunter) site to try Package Hunter out. There are [instructions](https://gitlab.com/gitlab-org/security-products/package-hunter#installation) for running your own Package Hunter instance and the [CI template](https://gitlab.com/gitlab-org/security-products/package-hunter-cli/-/blob/main/ci/template/Package-Hunter.gitlab-ci.yml) get's you started with analyzing your dependencies in your CI pipeline.

We also welcome contributions. If you are interested in participating in the development of Package Hunter, please see our [contribution guide](https://gitlab.com/gitlab-org/security-products/package-hunter/-/blob/main/CONTRIBUTING.md).

The Security Research Team is maintaining a package hunter instance that is used internally at GitLab. The instance is reachable at `https://api.package-hunter-live.sec.gitlab.net` and `https://api.package-hunter.xyz`.

### GitLab Ecosystem Security Testing

The Security Research team within GitLab conducts security assessments on Open Source Software on a regular basis.

This page describes the reasoning, approach and workflows related to those efforts.

#### Strengthening the OSS ecosystem for everyone

GitLab relies on a vast amount of Open Source Software, this is not limited to direct code dependencies but also other components in use within the company. To strengthen the overall security posture of GitLab and all other users of our OSS dependencies the Security Research team maintains [a list of to-be-assessed OSS projects](https://gitlab.com/gitlab-com/gl-security/security-research/ecosystem-security/-/blob/main/projects.yaml) (internal link). The list is filled from the following categories:

- **Cornerstone Project** (1)
  - This category is intended for widely used OSS projects with potentially large code bases.
- **Dependencies of the GitLab Application** (3)
  - Includes code dependencies and other open source projects that ship with GitLab.
- **Developer Tooling Projects** (3)
  - Projects which are used every day on developer machines.
- **Infrastructure/IT Components** (3)
  - Projects we rely on while running the company and the product.

In total there are ten projects in four different categories to pick from. The categories are to ensure our work has a broad impact. The projects are chosen and prioritized by the following factors:

- Data access [(red/orange/green)](../../../data-classification-standard.md#data-classification-levels)
- GitLab API scopes used (if any)
- Functionality provided, especially aiming for high-impact features like:
  - authentication and authorization
  - file access
  - up/download handling
  - handling of secrets
- Adoption within and beyond GitLab, how widely is the project used?

When a project from this list gets assessed the spot on the list will be filled with another project to always keep the funnel filled.

#### Documentation

Every project and relevant artifacts will be documented internally in the  [sec-research](https://gitlab.com/gitlab-com/gl-security/security-research/sec-research/) repository while the project is ongoing. This repository should be the SSOT for any results and will contain the raw artifacts, write-ups and any PoCs if applicable.

Once the project is concluded and any security issues identified are closed, public facing documentation will be published in the [Threat Management tech notes](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-public/red-team-tech-notes) repository. Where applicable, blog posts containing in-depth technical background on the research will be created in collaboration with the External Security Communications team.

#### Metrics

We're capturing the following metrics for the Ecosystem Security Testing to
gain insight into overall progress and impact of the program:

1. Review issues closed per quarter
1. Issues identified per review
1. GitLab improvement issues opened per review

To measure `Review issues closed per quarter` and `Issues identified per review`, the following labels were created in the [Ecosystem Security issue tracker](https://gitlab.com/gitlab-com/gl-security/security-research/ecosystem-security/-/labels) (internal link):

- `~EcosystemSecurity::Project`
- `~EcosystemSecurity::Finding`

In order to measure `GitLab improvement issues opened per review` the following label
can be used in the [`gitlab-com`](https://gitlab.com/gitlab-com) and [`gitlab-org`](https://gitlab.com/gitlab-org) groups:

- `~SecResearch Followup::Ecosystem`

### Code Review Sessions

Upon [request from team members](https://gitlab.com/gitlab-com/gl-security/security-research/sec-research/-/issues/new?issuable_template=Code%20review%20session)(internal link) the Security Research team will host "Code Review Sessions"
in which we'll pair on security reviews for a given piece of code. Those sessions will be
recorded.

The reviews will all be around vulnerability identification.

The intention for these sessions is learning on both sides, challenge us with some
interesting new technologies or software concepts, and in return we'll do our best to
share our approaches in vulnerability identification to the given codebase.

### Vulnerability Disclosure Guidelines

Vulnerability disclosure can be a delicate process and there is no one-size-fits-all approach for reporting parties. Within the Security Research Team we'll try to report each vulnerability the most effective way, focusing on timely remediation within our GitLab's infrastructure and fix on the vendor's side while respecting embargoes which might be in place.

For third party software listed in our [tech stack](/handbook/business-technology/tech-stack-applications/) any vulnerability disclosures should be coordinated with the respective owner of the tech stack item. They might have additional contacts on the vendor side, or more context how to implement a temporary mitigation for an identified vulnerability.

Depending on the actual risk and exposure it might be needed to further limit the information around the disclosure. In such cases it is recommended to involve the [SIRT](../../application-security/runbooks/working-with-sirt.md).

In all cases the team will follow [GitLab's Disclosure Guidelines for Vulnerabilities in 3rd Party Software](https://about.gitlab.com/security/disclosure/#disclosure-guidelines-for-vulnerabilities-in-3rd-party-software).

## Bug bounties and speaker fees

As a result of Security Research it might occur that a team member gets offered
a bug bounty for some reported vulnerability which has been identified during
their working hours at GitLab. In such a case the payment of the bounty should
be instead donated to a charity by the vendor.

The same should be done for potential speaker fees which might be offered for
conference presentations which are held on behalf of GitLab.

Any kind of bug bounties/fees being offered based on privately conducted
research and speaking engagements are of course not required to be donated to
charity.
