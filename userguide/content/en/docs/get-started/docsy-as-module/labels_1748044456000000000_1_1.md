---
title: "Vulnerability Management - Standard Issue Labels"
---

A standard set of vulnerability management labels are used across GitLab to assist team members in handling security vulnerabilities in GitLab-maintained projects.
These labels are applied automatically by automation managed by the Vulnerability Management team. Automated labeling happens on a daily cadence. Several data sources are used to enrich existing security tracking issues, and are labels are designed to increase the amount of information and context available to team members about vulnerabilities present in the projects they maintain. The primary goal is to reduce the amount of manual research and triage work required, and help to apply consistent and effective management of vulnerabilities across GitLab.

## Tracking Issue Labels

GitLab is used to track vulnerabilities as both vulnerabilities and issues, across GitLab's infrastructure and projects. As part of this process, various standard labels are applied to track the status of managing vulnerabilities through to mitigation and remediation.

### Remediation SLA Labels

The labels used to indicate the SLA which applies to vulnerability findings tracked as issues are documented on the [Vulnerability Management SLAs](sla.md) page.

### Vulnerability Information and Workflow Labels

The following labels are currently used, or are available for use, to annotate and enrich security tracking issues.

| Label | Further Reading | Purpose |
| ------ | ------ |--------|
| `security` | [Security Handbook](/handbook/security#other-frequently-used-gitlabcom-projects) | Security and Engineering groups use this label to indicate an issue relates to a security tracking issue |
| `bug::vulnerability` | [Composition Analysis Handbook](/handbook/engineering/development/sec/secure/composition-analysis/#creating-security-issues), [AppSec Vulnerability Management Process](/handbook/security/product-security/application-security/vulnerability-management) | Used to represent a security tracking issue with a vulnerable software component |
| `OS::<x> <y>` | | Indicates the detected OS vendor and release of a scanned artifact related to a vulnerable software component |
| `Vulnerability Management::Vendor Severity Deviation` | | Indicates the vendor security advisory severity was different to the severity of a detected vulnerability in the GitLab scan artifacts or vulnerability report entry |
| `Vulnerability Management::Vendor CVSS Deviation` | | Indicates the vendor designated CVSS score has either been calculated or reported differently to the score reported by the security scanner which generated the vulnerability report entry in GitLab |
| `Vulnerability Management::Process Deviation` | [Vulnerability Management standard](/handbook/security/product-security/vulnerability-management) | Indicates the GitLab [Vulnerability Management standard](/handbook/security/product-security/vulnerability-management) has not been followed for this issue (i.e., a tracking issue has been closed when a vulnerability is still detected) |
| `Vulnerability Management::Vulnerability Mismatch` | | Indicates the detected and linked vulnerability was found to not match the tracking issue based on OS, CVE or other vulnerability data |
| `Vulnerability::Vendor Package::Fix Available` | | An updated vendor package is available which fixes this vulnerability |
| `Vulnerability::Vendor Package::Fix Unavailable`| | There is no vendor fix for this vulnerability, but there may be in the future, when published by the vendor |
| `Vulnerability::Vendor Package::Will Not Be Fixed` | | There will not be a fix made available for the vulnerable software package (typically because the vulnerability is not applicable)  |
| `Vulnerability::Vendor Base Container::Fix Available` | | An updated vendor base container image is available which fixes this vulnerability |
| `Vulnerability::Vendor Base Container::Fix Unavailable` | | There is no updated base container image fixing this vulnerability, but there may be in the future, when published by the vendor  |
| `Vulnerability::Vendor Base Container::Will Not Be Fixed` | | There will not be a fixed container made available for the vulnerable container image (typically because the vulnerability is not applicable) |
| `Vulnerability Impact::Scan Severity::[High/Medium/Low]` | | The severity reported by the vulnerability as detected by the scanner which detected the vulnerability |
| `Vulnerability Impact::Scan CVSS::(x.x)` | | The CVSS (which defaults to CVSSv3, and falls back to CVSSv2 if v3 is not available) reported by the vulnerability scanner which detected the vulnerability |
| `Vulnerability Impact::Vendor Severity::[High/Medium/Low]` | | The severity reported by the most relevant software vendor (package or container), if the vendor was detected |
| `Vulnerability Impact::Vendor CVSS::(x.y)` | | The CVSS (which defaults to CVSSv3, and falls back to CVSSv2 if v3 is not available) reported by the most applicable software vendor (package or container), if the vendor was detected |
| `Vulnerability Management::Pending NVD Analysis` || Indicates if CVE is awaiting analysis by NVD |
| `Vulnerability Impact::Public Exploitation::Exploited` | [CISA Known Exploited Vulnerabilities List](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) | Indicates the vulnerability is known to have been publicly exploited. Currently CISA is the only data source, but other data sources can be added in the future. |
| `Vulnerability Impact::Public Exploitation::Unknown` | [CISA Known Exploited Vulnerabilities List](https://www.cisa.gov/known-exploited-vulnerabilities-catalog) | Indicates the vulnerability is not found on the CISA KEV list. This does not necessarily mean that the vulnerability is not or has not been under active exploitation, simply that CISA has not been provided with evidence of exploitation. |
