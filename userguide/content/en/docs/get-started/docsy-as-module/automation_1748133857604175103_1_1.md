---
title: "Vulnerability Management Automation"
---

Vulnerability management maintains automation tooling which intends to automate as much of this standard and the related procedures as possible. We're always iterating on ways we can save time for all stakeholders whilst keeping GitLab and our users safe.

## VulnMapper

VulnMapper is the main automation tool used by Vulnerability Management. It is a closed-source tool with a goal of automating security processes and building functionality into GitLab as part of Product Security's dogfooding goals.

### VulnMapper Features

The key features of [VulnMapper](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/tree/main) are:

- Ingestion of vulnerabilities from infrastructure, code and configuration security finding sources
- Ingestion of vulnerability metadata from advisory sources, including [GLAD](https://advisories.gitlab.com)
- Normalization and correlation of vulnerability advisories and findings
- Creation of tracking issues in GitLab focused on resolving vulnerabilities
- Automated handling of common SLA exception scenarios

### Known limitations

Current issues & limitations are tracked on the [private VulnMapper issue tracker](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/issues). Some of the key limitations currently are:

- Container fix information is not as reliable as package-based finding information, and as a result package-based fix availability labels are considered more trustworthy
- No advisory and fix availability information is available for OSes other than RHEL/UBI or for dependency/language package findings

### Supported OSes

Whilst vulnmapper aims to support all findings, determining the availability of fixes for packages associated with vulnerabilities relies on us having good quality data sources for advisories and related fix availability.

The current list of base OSes and therefore base images we support for fix availability tracking in vulnmapper are:

- Red Hat Enterprise Linux 7, 8, 9
- Red Hat Universal Base Image (UBI) 7, 8, 9

Only findings for these supported OSes will have package fix determined, and therefore labelled on related GitLab vulnerability tracking issues.

We are working on adding Debian and Alpine fix availability currently, and welcome team members filing issues for other base OS package types they would like to see supported.

For any feedback or ideas for improvement of the vulnerability automation used at GitLab, team members can [file an issue](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/issues/new). Additionally, if GitLab team members want to onboard their images and environments or talk about vulnerability automation, please reach out via Slack (in `#g_security_vulnmgmt`) or create an issue in our (private) tracker [here](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnerability-management-tracker/-/issues).

#### Providers

VulnMapper uses a provider model to integrate with external systems, including GitLab. Providers are responsible for populating or acting on the VulnMapper database, including tasks like ingesting advisory information (from sources like NVD, Red Hat, Ubuntu), vulnerability detections (from sources like GitLab scans, Wiz, AWS Inspector), and automatically creating or updating tracking issues in tracking providers (currently using GitLab issues).

#### Issue Creation

Currently at GitLab, certain groups have opted in to have VulnMapper automatically handle triage & creation of tracking issues for vulnerability findings in assets they ship. Currently this includes:

- Distribution (including CNG images)
- Runner

For these groups, VulnMapper will automatically execute scans of relevant container images using GitLab, and after normalization and correlation of relevant advisory information, created tracking issues in GitLab correctly labelled for remediation. Team members performing triage and remediation work on created issues should refer to the [standard vulnerability management labels page](labels.md) as between the applied labels and the description of the issue, whether or not the issue is actionable should be clear. Typically, these issues will require updating of a package or base image in order to resolve the findings, if an updated package or image is available. If it is not, the issue should be labelled as such and can have the priority lowered.

#### Issue Closure

Under the following circumstances VulnMapper will also automatically close tracking issues to improve team efficiency.

- When a fix will not be made available by the vendor of a dependency, and a deviation request has been opened automatically
- When the linked vulnerability finding in GitLab or another supported VulnMapper provider is resolved or dismissed, when issue closure is enabled for the project

Issue closure is currently enabled for the following groups:

- Distribution (including CNG images)
- Production Infrastructure findings (as detected by Wiz)
- Dedicated Infrastructure findings (as detected by AWS Inspector)

#### Deviation Request Automation

As part of GitLab's FedRAMP compliance, and the SLA exception process, operational requirement and risk adjustment Deviation Requests are created automatically by VulnMapper when datasources used by VulnMapper indicate there is a difference between the baseline (NVD) vulnerability impact and the impact (severity) as assessed by the vendor of the component (risk adjustment) or when assessment by a vendor indicates that a fix will not be made available (operational requirement). In these cases a Deviation Request issue will be populated and created automatically, and in the case of fixes not being available, the vulnerability tracking issue will be labelled and linked to this deviation request and then closed, as the tracking issue is not actionable by team members. No team member interaction is required for this automated process to take place.
