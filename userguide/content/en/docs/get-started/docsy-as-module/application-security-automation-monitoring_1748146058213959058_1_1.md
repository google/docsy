---
title: "Application Security - Automation and Monitoring"
---

## Monitoring

The Application Security team uses a number of automation initiatives to help secure GitLab. These are not all authored by the AppSec team but they're all useful to us. The points are listed in no specific order.

- [Gem Checker](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/gem-checker) monitors suspicious activity on RubyGems.org for gems that we use at GitLab
- [sec-appsec-mr-alerts](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/sec-appsec-mr-alerts) identifies MRs that modify dependencies used in our projects
- [Public MR Confidential Issue Detector](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/public-mr-confidential-issue-detector/) monitors for public merge requests that should have been opened in our security mirror
- Custom SAST rules detecting known-vulnerable code patterns that alert the AppSec team in the MR (related [MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/109872))
- [untamper-my-lockfile](https://gitlab.com/gitlab-org/frontend/untamper-my-lockfile/) included in CI to prevent lockfile tampering
- [Package Hunter](https://gitlab.com/gitlab-org/security-products/package-hunter) detects suspicious activity in dependencies at runtime ([related runbook](/handbook/security/product-security/application-security/runbooks/investigating-package-hunter-findings/))
- [GitLab Inventory](https://gitlab.com/gitlab-com/gl-security/product-security/inventory) monitors our projects and violations of security best practices and standards
- GitLab's own [application security features](https://docs.gitlab.com/ee/user/application_security/) are running in CI
- [Tokinator](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tokinator) monitors for leaked credentials
- [AppSec Escalator](https://gitlab.com/gitlab-private/gl-security/engineering-and-research/automation-team/escalator/appsec-escalator/) which is a tool that...
  - monitors that security issues are labeled properly
  - sets appropriate due dates on security issues
  - escalates overdue issues
  - detects potentially sensitive files posted in public issues
- [depSASTer](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/depsaster) runs SAST on the dependencies used by GitLab
- [Maintainer Watcher](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/maintainer-watcher) monitors potentially compromisable dependency maintainer accounts
- [depscore](https://gitlab.com/gitlab-com/gl-security/product-security/appsec/tooling/depscore) runs dependency review checks on new/updated depndencies in `gitlab-org/gitlab` project.
