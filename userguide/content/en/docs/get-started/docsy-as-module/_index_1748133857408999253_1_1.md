---
title: "Identity Counterparts"
description: "Identity and Access Management (IAM) and Role-Based Access Control (RBAC) is a shared responsibility across several teams at GitLab. This page has a directory of all of our stable counterparts."
---

## Identity v3 Program DRI

Please tag `@jeffersonmartin` for any architecture, decisions, discussions, guidance, or other questions.

<!-- TODO Mermaid Diagram -->

## Identity Counterparts and Stakeholders Directory

<!-- START_IDENTITY_COUNTERPARTS_DIRECTORY -->
```yaml
- it_analyst:
  team_name: 'IT End User Services (aka Analysts / Helpdesk)'
  responsibilities:
    - TODO
  manager: mbeltran
  counterparts:
    - jwong
  gitlab_saas_tag: '@gitlab-com/it/end-user-services'
  slack_channel: '#it_help'
  handbook_page: 'https://handbook.gitlab.com/handbook/business-technology/end-user-services/'
  issue_tracker: null
- it_compliance:
  team_name: 'IT Compliance'
  responsibilities:
    - TODO
  manager: disla
  counterparts:
    - disla
  gitlab_saas_tag: '@gitlab-com/it/compliance'
  slack_channel: '#it_help'
  handbook_page: 'https://handbook.gitlab.com/handbook/business-technology/enterprise-applications/it-compliance/'
  issue_tracker: 'https://gitlab.com/gitlab-com/business-technology/change-management/-/issues'
- it_ops_leader:
  team_name: 'IT Ops Leadership'
  responsibilities:
    - TODO
  manager: rrea
  counterparts:
    - rrea
  gitlab_saas_tag: '@rrea1'
  slack_channel: '#it_help'
  handbook_page: null
  issue_tracker: null
- it_seceng:
  team_name: 'IT Security and Engineering'
  responsibilities:
    - TODO
  manager: erubin
  counterparts:
    - erubin
    - mwhitaker
    - malkobaisy
  gitlab_saas_tag: '@gitlab-com/it/security @gitlab-com/it/engops'
  slack_channel: '#it_security_help'
  handbook_page: 'https://handbook.gitlab.com/handbook/security/corporate/'
  issue_tracker: 'https://gitlab.com/gitlab-com/it/security/issue-tracker/-/issues'
- infra_platforms_leader:
  team_name: 'Infrastructure SaaS Platforms Leadership'
  responsibilities:
    - TODO
  manager: marin
  counterparts:
    - marin
  gitlab_saas_group_tag: '@marin'
  slack_channel: '#s_platforms'
  handbook_page: 'https://handbook.gitlab.com/handbook/engineering/infrastructure/platforms/'
  issue_tracker: 'https://gitlab.com/gitlab-com/gl-infra/mstaff/-/issues'
- infra_foundations:
  team_name: 'Production Engineering Foundations'
  responsibilities:
    - TODO
  manager: sabrams
  counterparts:
    - sabrams
  gitlab_saas_tag: '@sabrams'
  slack_channel: '#g_foundations'
  handbook_page: 'https://handbook.gitlab.com/handbook/engineering/infrastructure-platforms/production-engineering/foundations/'
  issue_tracker: 'https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues'
- infra_ops:
  team_name: 'Production Engineering Ops'
  responsibilities:
    - TODO
  manager: glopezfernandez
  counterparts:
    - glopezfernandez
  gitlab_saas_tag: '@glopezfernandez'
  slack_channel: 'g_infra_general'
  handbook_page: 'https://handbook.gitlab.com/handbook/engineering/infrastructure/team/reliability/general.html'
  issue_tracker: 'https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues'
- infra_scalability_leader:
  team_name: 'Scalability Leadership'
  responsibilities:
    - TODO
  manager: rnienaber
  counterparts:
    - rnienaber
  gitlab_saas_tag: '@rnienaber'
  slack_channel: '#g_scalability'
  handbook_page: 'https://handbook.gitlab.com/handbook/engineering/infrastructure/team/scalability/'
  issue_tracker: 'https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues'
- infra_observability:
  team_name: 'Scalability Observability'
  responsibilities:
    - TODO
  manager: 'lmcandrew'
  counterpart: 'lmcandrew'
  gitlab_saas_tag: '@lmcandrew'
  slack_channel: '#g_scalability'
  handbook_page: 'https://handbook.gitlab.com/handbook/engineering/infrastructure/team/scalability/'
  issue_tracker: 'https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues'
- infra_practices:
  team_name: 'Scalability Practices'
  responsibilities:
    - TODO
  manager: kwanyangu
  counterparts:
    - kwanyangu
  gitlab_saas_tag: '@kwanyangu'
  slack_channel: '#g_scalability'
  handbook_page: 'https://handbook.gitlab.com/handbook/engineering/infrastructure/team/scalability/'
  issue_tracker: 'https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues'
- infra_deployment:
  team_name: 'Delivery Deployment System'
  responsibilities:
    - TODO
  manager: dsmith
  counterparts:
    - dsmith
  gitlab_saas_tag: '@dawsmith'
  slack_channel: '#g_delivery'
  handbook_page: 'https://handbook.gitlab.com/handbook/engineering/infrastructure/team/delivery/'
  issue_tracker: 'https://gitlab.com/gitlab-com/gl-infra/delivery/-/issues'
- infra_orchestration:
  team_name: 'Delivery Release Orchestration'
  responsibilities:
    - TODO
  manager: mbursi
  counterpart:
    - mbursi
  gitlab_saas_tag: '@mbursi'
  slack_channel: '#g_delivery'
  handbook_page: 'https://handbook.gitlab.com/handbook/engineering/infrastructure/team/delivery/'
  issue_tracker: 'https://gitlab.com/gitlab-com/gl-infra/delivery/-/issues'
- infra_dedicated_general:
  team_name: 'Dedicated Leadership'
  responsibilities:
    - TODO
  manager: aphillips
  counterpart:
    - aphillips
  gitlab_saas_tag: '@aphillips'
  slack_channel: '#g_dedicated-team'
  handbook_page: 'https://handbook.gitlab.com/handbook/engineering/infrastructure/team/gitlab-dedicated/'
  issue_tracker: 'https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues'
- infra_dedicated_env_automation:
  team_name: 'Dedicated Environment Automation'
  responsibilities:
    - TODO
  manager: olluch
  counterparts:
    - olluch
  gitlab_saas_tag: '@o-lluch @gitlab-dedicated/environment-automation'
  slack_channel: '#g_dedicated-team'
  handbook_page: 'https://handbook.gitlab.com/handbook/engineering/infrastructure/team/gitlab-dedicated/'
  issue_tracker: 'https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues'
- infra_dedicated_switchboard:
  team_name: 'Dedicated Switchboard'
  responsibilities:
    - TODO
  manager: ashiel
  counterpart:
    - ashiel
  gitlab_saas_tag: '@ashiel'
  slack_channel: '#g_dedicated-switchboard-team'
  handbook_page: 'https://handbook.gitlab.com/handbook/engineering/infrastructure/team/gitlab-dedicated/switchboard/'
  issue_tracker: 'https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues'
- infra_dedicated_switchboard:
  team_name: 'Dedicated US Public Sector Services'
  responsibilities:
    - TODO
  manager: sdumesnil
  counterpart: sdumesnil
  gitlab_saas_tag: '@sdumesnil'
  slack_channel: '#g_dedicated-us-pubsec'
  handbook_page: 'https://handbook.gitlab.com/handbook/engineering/infrastructure/team/gitlab-dedicated/us-public-sector-services/'
  issue_tracker: 'https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/issues'
- people_ops_technology:
  team_name: 'People Ops Technology and Tools'
  responsibilities:
    - TODO
  manager: achan
  counterpart: aromaniello
  gitlab_saas_tag: '@ajrom'
  slack_channel: '#people-connect|#peopleops-eng'
  handbook_page: 'https://handbook.gitlab.com/handbook/people-group/engineering/'
  issue_tracker: 'https://gitlab.com/gitlab-com/people-group/peopleops-eng/people-group-engineering/-/issues'
- sec_compliance_commercial:
  team_name: 'Security Compliance (Commercial)'
  responsibilities:
    - Access Management Policy
    - Quarterly and Annual Audits
    - User Access Reviews
  managers:
    - jburrows
    - lcoleman
  counterparts:
    - afrank
    - deckhardt
    - bboots
    - mlake
  gitlab_saas_tag: '@gitlab-com/gl-security/security-assurance/team-commercial-compliance'
  slack_channel: '#sec-assurance'
  handbook_page: 'https://handbook.gitlab.com/handbook/security/security-assurance/security-compliance/'
  issue_tracker: 'https://gitlab.com/gitlab-com/gl-security/security-assurance/team-commercial-compliance/compliance'
- sec_identity_eng:
  team_name: 'Identity Engineering (Architecture and Platform)'
  responsibilities:
    - Architect next-generation IAM and access management standards
    - Build automation and integration between systems that provides data consistency, reliability, strong security, and audibility.
    - Consolidate and refactor legacy data, processes, and tech debt.
    - Design and document processes with automation mindset to improve back office operations.
    - Efficiency optimization is our North Star.
    - Factor in cost, security, compatibility, maintainability and user experience when making decisions.
  manager: smanzuik
  counterparts:
    - jmartin
  gitlab_saas_tag: '@gitlab-com/gl-security/identity/eng'
  slack_channel: '#security-identity-eng'
  handbook_page: 'https://handbook.gitlab.com/handbook/security/threat-management/identity/eng/'
  issue_tracker: 'https://gitlab.com/gitlab-com/gl-security/identity/eng/issue-tracker/-/issues'
- sec_identity_infra:
  team_name: 'Identity Infrastructure'
  responsibilities:
    - Administrative control plane architecture
    - AWS and GCP infrastructure organization-level management
    Cloud infrastructure organizational management and least privilege security
    - Infrastructure service accounts
    - Infrastructure user access requests
  manager: smanzuik
  counterparts:
    - vstoianovici
  gitlab_saas_tag: '@gitlab-com/gl-security/identity/infra'
  slack_channel: '#security-identity-ops'
  handbook_page: 'https://handbook.gitlab.com/handbook/security/threat-management/identity/infra/'
  issue_tracker: 'https://gitlab.com/gitlab-com/gl-security/identity/infra/issue-tracker/-/issues'
- sec_identity_ops:
  team_name: 'Identity Operations'
  responsibilities:
    - Administrative access (BLACK accounts) and control plane change management
    - Company-wide RBAC group and role management
    - Escalation requests from counterpart teams
    - Provisioning user access requests for administrative systems
    - Role-based access control with just-in-time elevated access
  manager: smanzuik
  counterparts:
    - jmartin
    - vstoianovici
  gitlab_saas_tag: '@gitlab-com/gl-security/identity/ops'
  slack_channel: '#security-identity-ops'
  handbook_page: 'https://handbook.gitlab.com/handbook/security/threat-management/identity/ops/'
  issue_tracker: 'https://gitlab.com/gitlab-com/gl-security/identity/ops/issue-tracker/-/issues'
- sec_infra:
  team_name: 'Infrastructure Security (aka InfraSec)'
  responsibilities:
    - AWS and GCP infrastructure organization-level policy enforcement
    - Infrastructure vulnerability management
    - Infrastructure configuration and best practices policies
    - Production readiness reviews
  manager: juliedavila
  counterparts:
    - djain
    - mmorrison
    - pmartins
    - ugovindia
  gitlab_saas_tag: '@gitlab-com/gl-security/security-operations/infrastructure-security'
  slack_channel: '#security-infrasec'
  handbook_page: 'https://handbook.gitlab.com/handbook/security/product-security/infrastructure-security/'
  issue_tracker: 'https://gitlab.com/gitlab-com/gl-security/security-operations/infrastructure-security/bau/-/issues'
- sec_sirt:
  team_name: 'Security Incident Response Team (SIRT)'
  responsibilities:
    - TODO
  managers:
    - mcoons
    - schoudhary
    - vmairet
  counterparts:
    - ballam
    - dperic
    - hsharma
    - mjozenazemian
    - sgillespie
  gitlab_saas_tag: '@gitlab-com/gl-security/security-operations/sirt'
  slack_channel: '#security-division'
  handbook_page: 'https://handbook.gitlab.com/handbook/security/security-operations/sirt/'
  issue_tracker: '/security'
```
<!-- END_COUNTERPARTS_DIRECTORY -->
