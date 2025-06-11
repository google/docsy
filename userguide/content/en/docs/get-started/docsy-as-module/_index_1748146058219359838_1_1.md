---
title: "Vulnerability Management"
controlled_document: true
---

Vulnerability Management is the continual process of identifying, prioritizing, mitigating and remediating vulnerabilities. At GitLab we identify vulnerabilities in a number of different ways depending on the component being analyzed. This process and associated tooling is owned by the [Vulnerability Management team](vulnerability-management-team/).

This page primarily outlines our vulnerability management policies and procedures at GitLab. The policies and procedures used to manage vulnerabilities at GitLab are collectively referred to as the Vulnerability Management Standard.

## Quick reference

- [Runbook: I have a vulnerability finding, what should I do?](runbooks/so-you-have-a-vulnerability-finding.md)
- [Runbook: How are vulnerabilities commonly fixed in development?](runbooks/fixing-vulnerabilities.md)
- [I have a vulnerability detection which I can't fix within SLA (or at all), what should I do?](sla-exceptions.md)
- [What is a vulnerability?](what-is-a-vulnerability.md)
- [Why should we fix vulnerabilities?](why-should-we-fix-vulnerabilities.md)
- [When is a vulnerability considered "fixed"?](what-does-fixed-mean.md)
- [When can I close a vulnerability tracking issue?](closing-issues.md)
- [Who is Vulnerability Management at GitLab, and what do they do?](vulnerability-management-team/_index.md)
- [Which automation tools run GitLab's vulnerability management workflow?](automation.md)

## What does Vulnerability Management cover at GitLab?

Vulnerability Management covers all systems which store, process or transmit GitLab production and/or GitLab customer data, as well as GitLab-managed software and software dependencies, based on the [GitLab critical system tiering methodology](/handbook/security/security-assurance/security-risk/storm-program/critical-systems/). Specifically:

- GitLab-managed infrastructure
- GitLab software, packages, images & dependencies
- Detected Later (HackerOne reports, Community or Team Member reported bugs, PenTest findings)

## Approach & Strategy

Vulnerability Management at GitLab focuses primarily on gathering data about vulnerabilities, vulnerability detection and attack surface. We do this by building tooling to gather, normalize and correlate various sources of data into actionable automated workflows which either directly address or mitigate findings. If this cannot be done automatically, we aim to make the output of this process easily available and understandable to the GitLab DRIs responsible for mitigating or fixing a finding. Our goal is to feed this tooling back into GitLab itself, and where it makes sense, to build and use GitLab features to support our own and our customer's workflows wherever possible.

## Vulnerability Management Standard

- Where possible, GitLab should be used as the source of truth for vulnerability detection and management. GitLab issues are currently used to track vulnerability management activities in addition to engineering work required to remediate vulnerabilities.
- Application (WebApp and container) vulnerability scanning must occur on a minimum of a monthly basis, and use scanners and scanner configuration tuned for the code being scanned. This includes enabling appropriate dependency scanning, container scanning, secrets scanning, and SAST scan jobs. See the [Secure your application](https://docs.gitlab.com/ee/user/application_security/secure_your_application.html) documentation for all available scanners. Where possible, standard supported GitLab scanners should be used in CI based on supported [templates](https://gitlab.com/gitlab-org/gitlab/-/blob/master/lib/gitlab/ci/templates/Jobs/) or [components](https://docs.gitlab.com/ee/ci/components/).
- Container images shipped by GitLab should be scanned at a minimum with GitLab container scanning before being shipped.
- Infrastructure (operating systems and databases) vulnerability scanning must occur on a minimum of a monthly basis.
- Authenticated/credentialed scans from a privileged network domain, in addition to external scanning of infrastructure, should be performed wherever possible.
- Vulnerability scanners must be up to date (the latest operable version), and hardened to resist unauthorized use or modification.
- Third party penetration testing must be performed annually.
- Even if mitigated or not exploitable, vulnerable code (including dependencies) must be removed or updated to non-vulnerable versions to resolve vulnerability findings, so we are not shipping vulnerable code. For more information on why we do this, please see [Why should we fix vulnerabilities?](why-should-we-fix-vulnerabilities.md)
- Vulnerabilities must be fixed within SLA timeframes, unless an exception exists. Where vulnerabilities are not fixed within SLA, the responsible group should work to understand which factors contributed to missing remediation SLA timeframes as part of regular group development retrospectives.

## Service Level Agreements (SLAs) / Service Level Objectives (SLOs)

For information on vulnerability management SLAs / SLOs, see the [Vulnerability Management SLAs](sla.md) handbook page.

## Roles & Responsibilities

| Role | Responsibility | Notes |
| -----| -------------| -------------|
| Vulnerability Management | Responsible for implementing and maintaining Vulnerability Management standards. Develop and maintain ([VulnMapper](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/tree/main)). Evaluate severity and priority, analyze the actual impacts, and make risk adjustment for the vulnerabilities which [VulnMapper](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/tree/main) is unable to process automatically. Iterate on data gathering, normalization and correlation automation and work to provide actionable insights on mitigation and remediation to GitLab team members. | |
| Security Compliance Team | Responsible for oversight of supporting procedures as part of ongoing continuous control monitoring for adherence with compliance baselines. Responsible for approving Deviation Requests (or getting approval from Agency) and closing DR issues once all linked vulnerability issues have been closed. | |
| Application Security Team | Collaborate with Development & Engineering in the triage of vulnerabilities and provide stable counterparts **TODO**. | |
| Development & Engineering | Responsible for mitigating and remediating vulnerabilities in GitLab-managed software within SLA | |
| Reliability | Responsible for mitigating and remediating vulnerabilities in GitLab-managed infrastructure within SLA | |
| Product Security Engineering Team | Develop and maintain the GitLab Security Bot, a.k.a. [appsec-escalator](https://gitlab.com/gitlab-private/gl-security/engineering-and-research/automation-team/escalator/appsec-escalator), which drives SLA and remediation reminders | AppSec collaborates with Product Security Engineering and Vulnerability Management in maintaining this bot. |
| Infrastructure Security | Responsible for maintaining cloud configuration and resolving vulnerabilities or misconfiguration in cloud policy and other security configuration | |
| Security Leadership (Code Owners)| Responsible for approving changes to this standard | |

### Additional Notes for Vulnerability Triage

1. [VulnMapper](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/tree/main) creates vulnerability tracking issues and if not available already, adds appropriate severity, priority and other necessary labels. Vulnmapper is currently opt-in for issue creation, if issues are not created for your group, please let Vulnerability Management know.
1. For the vulnerabilities which [VulnMapper](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/tree/main) can process automatically, Vulnerability Management updates vulnerability tracking issues with the necessary information such as CVSS score, severity and priority, package name and version etc. Current capabilities are documented on the [automation](automation.md) handbook page.
1. For supported OS bases, [VulnMapper](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/tree/main) also adds labels indicating fix availability to further reduce triage time, based on vendor advisory and package information. Supported OSes for this functionality is limited, and is detailed in the [automation](automation.md) handbook page.
1. Where fixes are not available or differences between NVD and vendor severity exists, [VulnMapper](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/tree/main) reports Deviation Request issues for vendor dependencies and vendor risk adjustments automatically.
1. Vulnerability Management assigns `vulnerability issues` to a development group based on available information. VulnMapper also is configured with a map of ownership information for GitLab development groups, and will appropriately label issues for different groups with the appropriate triage group labels, when updating or creating issues.
   1. Where possible, Vulnerability Management, via our automation, where available, will make recommendations on how to address vulnerability detections, either via an MR or the description in vulnerability tracking issues.
   1. Vulnerability triage is a shared responsibility although Vulnerability Management is the DRI. AppSec, InfraSec and respective feature domain development groups are responsible for providing evidence and/or analysis of GitLab-specific impact during vulnerability triage upon Vulnerability Management's request. Vulnerability tracking issues should be assigned to the appropriate AppSec stable counterpart or development group for further analysis and after this, for remediation, the responsible development or infrastructure group becomes the owner and DRI, as they will have the context and responsibility over impacted vulnerable assets.
1. Vulnerability is now ready for remediation by the responsible group

## Contact

If you have any questions or concerns related to vulnerability management please contact Vulnerability Management and Engineering in the `#g_security_vulnmgmt` or the `#security` channels on Slack, you can also [open an issue](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnerability-management-tracker/-/issues/new) in the [Vulnerability Management issue tracker](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnerability-management-tracker/-/issues). All work being done to improve this process is also tracked in the issue tracker, and we'd love your feedback.

## Exceptions

If a you are mitigating or addressing a vulnerability, and you do not believe the GitLab Vulnerability Management standards can be met, please raise an exception request. For details on exception requests, handling, including raising a request for an SLA exception, see the [SLA Exception handbook page](sla-exceptions.md).

## References

- [Application Vulnerability Management Procedure](/handbook/security/product-security/application-security/vulnerability-management)
- [Bug Bounties](/handbook/security/engaging-with-security/#vulnerability-reports-and-hackerone)
