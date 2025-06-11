---
title: Sec Support Pod
description: A technical interest Support Pod focused on GitLab Sec Section features.
---

Sec Pod is a technical interest [Support Pod](https://gitlab.com/groups/gitlab-com/support/-/epics/191)
focused on GitLab [Sec section](/handbook/product/categories/#sec-section) features.

## Secure Pod members

- Lead: {{< member-by-name "Katrin Leinweber" >}} (`@katrinleinweber-gtlb`)
- Lead: {{< member-by-name "Brie Carranza" >}} (`@bcarranza`)
- Lead: {{< member-by-name "Duncan Harris" >}} (`@duncan_harris`)
- Lead: {{< member-by-name "Kate Grechishkina" >}} (`@kategrechishkina`)
- Lead: {{< member-by-name "Christopher Chewa Mutua" >}} (`@cmutua`)
- {{< member-by-name "Mario Mora" >}} (`@mmora`)
- {{< member-by-name "Caleb Williamson" >}} (`@calebw`)
- {{< member-by-name "Ronnie Alfaro" >}} (`@ralfaro`)
- {{< member-by-name "Cleveland Bledsoe Jr" >}} (`@cleveland`)

## Purpose, key results and exit criteria (if any)

Sec Pod is a way for Support Engineers interested in Sec section features to work on relevant tickets and projects together.

The goals of Sec pod are to:

- identify underlying patterns and trends across Sec tickets
- file targeted issues and detailed bug reports to improve our Sec features
- submit MRs to GitLab documentation for self-service support and ticket deflection
- assist customers and team members with problems and questions involving Sec section features

## FAQ

How can I get involved in Sec Pod?

1. Talk with your manager.
1. Submit a merge request to add `'Support Focus: Secure'` to your ZenDesk Groups in the [Support Team data](https://gitlab.com/gitlab-support-readiness/support-team/-/tree/master/data/agents?ref_type=heads).
1. Let your teammates and groupmates know about your new focus area.
1. Join `#spt_pod_sec` Slack channel.
1. Attend Sec Pod pairing sessions. (Check GitLab Support calendar for meeting times)

## How the Sec Pod works

- In the `#spt_pod_sec` [Slack channel](https://gitlab.slack.com/archives/C03FV8G5LV7), we [pin](https://slack.com/help/articles/205239997-Pin-messages-and-bookmark-links) Slack messages about 🎫 tickets that we are keeping an eye on for colleagues, typically when they are [out of the office](/handbook/support/workflows/ooo-ticket-management/).
  - During 🍐 pairing sessions, check the pinned messages to see if the tickets there require attention.
  - If you pin a ticket, please remove it when it no longer requires attention from the pod.
- We apply the scoped `pod::secure` label to the [pairing issues](https://gitlab.com/gitlab-com/support/support-pairing/-/issues/) that we create.

## Support Pod Resources

- Weekly session: "Sec Pod Pairing" on the GitLab Support Team Calendar, currently scheduled Thursdays at 3:00 PM UTC.
- Slack channel: [#spt_pod_sec](https://gitlab.slack.com/archives/C03FV8G5LV7)
 GitLab.com label: ~"devops::secure"

## Sec Pod Troubleshooting Resources

### Secure Stage

- Slack: `#s_secure`
- GitLab.com label: ~"devops::secure"
- Features by group: https://handbook.gitlab.com/handbook/product/categories/features/#secure
- Submitting a request for help: https://gitlab.com/gitlab-com/sec-sub-department/section-sec-request-for-help#how-to-submit-a-request-for-help--to-the-sec-section-development-team
- Analyzer code: https://gitlab.com/gitlab-org/security-products/analyzers/
- Container registries for analyzer images: https://gitlab.com/security-products/
- Scanner Report Schemas: https://gitlab.com/gitlab-org/security-products/security-report-schemas/
- 15.0 Readiness - Secure: https://gitlab.com/groups/gitlab-com/support/-/epics/202
- Secure & Protect terminology: https://docs.gitlab.com/user/application_security/terminology/
- Vulnerability Severity Levels: https://docs.gitlab.com/user/application_security/vulnerabilities/severities/
- Security Reports Examples: https://gitlab.com/gitlab-examples/security/security-reports/

### SAST (**S**tatic **A**pplication **S**ecurity **T**esting)

- Slack: `#g_secure-static-analysis`
- GitLab.com label: ~"group::static analysis"
- Docs: https://docs.gitlab.com/user/application_security/sast
- Template: https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/SAST.gitlab-ci.yml
- Test/demo project: https://gitlab.com/gitlab-com/support/test-projects/ci-examples/sast
- Collection of separate demo project: https://gitlab.com/gitlab-com/support/test-projects/ci-examples/secure/static-analysis

### Secret Detection

- Slack: `#g_secure-secret-detection`
- GitLab.com label: ~"group::secret detection", ~"Category:Secret Detection"
- Docs: https://docs.gitlab.com/user/application_security/secret_detection/
- CI/CD template: https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/Secret-Detection.gitlab-ci.yml
- Secret scanner codebase: https://gitlab.com/gitlab-org/security-products/analyzers/secrets/
- Secret detection rules: https://gitlab.com/gitlab-org/security-products/analyzers/secrets/-/blob/master/gitleaks.toml
- Upstream project: https://github.com/gitleaks/gitleaks
- Test/demo projects: https://gitlab.com/gitlab-com/support/test-projects/ci-examples/secret-detection/

### Dependency Scanning

- Slack: `#g_secure-composition-analysis`
- GitLab.com label: ~"group::composition analysis"
- Docs: https://docs.gitlab.com/user/application_security/dependency_scanning/
- Template: https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/Dependency-Scanning.gitlab-ci.yml
- Test/demo project: https://gitlab.com/gitlab-com/support/test-projects/ci-examples/dependency-scanning/
- Dependency List docs: https://docs.gitlab.com/user/application_security/dependency_list/

### DAST (**D**ynamic **A**pplication **S**ecurity **T**esting)

- Slack: `#g_secure-dynamic-analysis`
- GitLab.com label: ~"group::dynamic analysis"
- DAST Docs: https://docs.gitlab.com/user/application_security/dast/
- DAST CI/CD template: https://gitlab.com/gitlab-org/gitlab/blob/master/lib/gitlab/ci/templates/Security/DAST.gitlab-ci.yml
- DAST API scanning: https://docs.gitlab.com/user/application_security/dast_api/
- DAST API scanning CI/CD template: https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Security/DAST-API.gitlab-ci.yml
- DAST API test/demo projects: https://docs.gitlab.com/user/application_security/api_security_testing/#example-dast-api-scanning-configurations
- DAST test/demo projects: https://gitlab.com/gitlab-org/security-products/demos/dast/

### IaC (Infrastructure as Code) Scanning

- Slack: `#g_secure-static-analysis`
- GitLab.com label: ~"group::static analysis"
- Docs: https://docs.gitlab.com/user/application_security/iac_scanning/
- CI/CD template: https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/SAST-IaC.latest.gitlab-ci.yml
- IaC Scanner Codebase: https://gitlab.com/gitlab-org/security-products/analyzers/kics

### Security Dashboard / Vulnerability Report

- Slack: `#g_secure_threat_insights`
- GitLab.com label: ~"group::threat insights"
- Security Dashboard Docs: https://docs.gitlab.com/user/application_security/security_dashboard/
- Vulnerability Report docs: https://docs.gitlab.com/user/application_security/vulnerability_report/
- Vulnerability pages docs: https://docs.gitlab.com/user/application_security/vulnerabilities/

### Security Scan Policies

- Slack: `#g_protect_container_security`
- GitLab.com label: ~"devops::protect", ~"Category:Container Scanning", ~"group::container security",
- Scan policies overview: https://docs.gitlab.com/user/application_security/policies/
- Scan Results Policies Docs: https://docs.gitlab.com/user/application_security/policies/merge_request_approval_policies/
- Scan execution policy docs: https://docs.gitlab.com/user/application_security/policies/scan_execution_policies/

### Code Quality

Technically owned by Secret Detection, but _not_ related to security vulnerabilities.

- Slack: `#g_secure-secret-detection`
- GitLab.com label: ~"Category:Code Quality"
- Docs: https://docs.gitlab.com/ci/testing/code_quality/
- CI/CD Template: https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/Code-Quality.gitlab-ci.yml
- GitLab Code Quality Analyzer Codebase: https://gitlab.com/gitlab-org/ci-cd/codequality

### Container Scanning

- Slack: `#g_protect_container_security`
- GitLab.com label: ~"devops::protect", ~"Category:Container Scanning", ~"group::container security"
- Docs: https://docs.gitlab.com/user/application_security/container_scanning/
- CI/CD template: https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Security/Container-Scanning.gitlab-ci.yml

### License Scanning

- Slack: `#g_secure-composition-analysis`
- GitLab.com label: ~"group::composition analysis"
- Docs: https://docs.gitlab.com/user/compliance/license_approval_policies/
- CI/CD template: https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/License-Scanning.gitlab-ci.yml

### Fuzz testing

- Slack: `#g_secure-dynamic-analysis`
- GitLab.com label: ~""
- API Fuzzing Docs: https://docs.gitlab.com/user/application_security/api_fuzzing/
- Coverage Fuzzing docs: https://docs.gitlab.com/user/application_security/coverage_fuzzing/
- API Fuzz test/demo projects: https://gitlab.com/gitlab-org/security-products/demos/api-fuzzing/
- Coverage Fuzzing test/demo projects: https://gitlab.com/gitlab-org/security-products/demos/coverage-fuzzing/

### Learning Resources

- [GitLab Certified Security Specialist](https://gitlab.edcast.com/pathways/gitlab-certified-security-specialist-pathway)
- [GitLab Security Essentials](https://university.gitlab.com/pages/security-training/)
- [Security Essentials Hands-on](/handbook/customer-success/professional-services-engineering/education-services/secessentialshandson/)
- [Support DAST Deep Dive](https://youtu.be/-WeA12bl-Iw)
