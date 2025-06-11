---
title: "Vulnerability Resolution SLAs"
---

## Vulnerability Management SLAs and Labels

The following timelines or service level agreements (SLAs) are based on many factors - such as regulatory compliance, customer SLOs & SLAs, vulnerability impact, scope, prevalence in GitLab environments, impact if exploited, and defining reasonable turn-around times for mitigation and remediation to protect GitLab and our customers. All of these factors will be considered when mapping the priority to [GitLab’s priority labels](https://docs.gitlab.com/ee/development/labels/index.html#priority-labels). All components in scope of Vulnerability Management are subject to the same SLAs. The SLAs are as follows:

| CVSSv3 Score\*      | Severity       | Priority       | Time to mitigate | Time to remediate (TTR) |
|---------------------|----------------|----------------|------------------|-------------------------|
| 9.0-10.0 (Critical) | `~severity::1` | `~priority::1` | Within 24 hours  | 30 day SLA              |
| 7.0-8.9 (High)      | `~severity::2` | `~priority::2` | N/A              | 30 day SLA              |
| 4.0-6.9 (Medium)    | `~severity::3` | `~priority::3` | N/A              | 90 day SLA              |
| 0.1-3.9 (Low)       | `~severity::4` | `~priority::4` | N/A              | 180 day SLA             |

\* A vulnerability's severity is assigned using the first available value from this list:

1. CVSSv3 base score.
1. CVSSv2 base score.
1. Base risk score reported by a vulnerability scanner.

A vulnerability is considered remediated when a fix has been made available to affected deployment methods. Typically this would include the fix being published to all of our SaaS environments, as well as a new self-managed release which contains the fix.

## Definitions

### What is an SLA (Service Level Agreement) or SLO (Service Level Objective)?

SLA and SLO are both overloaded terms, typically referring to the timeframe within which a specific outcome is guaranteed (SLA) or aimed for (SLO). These terms are used in several contexts - incident management, customer contracts, compliance frameworks, security, and GitLab's vulnerability management SLAs are also often inputs into other SLAs as a result (such as FedRAMP vulnerability remediation SLAs).

Within the context of vulnerability management at GitLab, the term SLA and SLO (Service Level Objective) can be used interchangeably. We refer to the timeframe within which vulnerabilities are targeted for remediation as Service Level Agreements (SLAs). Within the context of vulnerability management at GitLab, these SLAs are between GitLab team members and groups and track the time from detection to remediation and fix availability for vulnerability findings.

### What are vulnerability remediation SLAs?

At GitLab we commit to resolving vulnerabilities in our software and our systems within specific time limits. Typically these limits are referred to as Vulnerability Remediation SLAs (Service Level Agreements) or SLOs (Service Level Objectives) depending on whether or not the time limit is contractually agreed with a third party or not, respectively. In most cases our remediation goals are objectives, however the term SLA is used to keep things simple and consistent.

### Why are vulnerability remediation SLAs important?

Remediation SLAs set reasonable expectations, based on the criticality of a vulnerability and expected impact, for how quickly GitLab users and customers can expect a security vulnerability to be mitigated. Vulnerabilities and the work required to address them require work to mitigate, and like all work, this must be prioritized. Severity and impact-based SLAs are the simplest way to prioritize this work whilst delivering the most positive impact to the security of our products, systems and in turn the security of our customers and users.

### Responsible Disclosure vs SLAs

When we release and make public a fix for a security issue in GitLab, we naturally disclose the nature of the security vulnerability in GitLab. This information is useful to those who would seek to exploit these vulnerabilities. Because of this, we ensure that certain vulnerabilities are fixed on GitLab.com prior to public disclosure of GitLab vulnerabilities. In this situation, the SLA includes the time required to make the release and deploy it to GitLab.com.

More detail on the deadlines, criteria and procedure used to deploy fixes to GitLab.com is available in the security section of the [release process documentation project](https://gitlab.com/gitlab-org/release/docs/-/tree/master/general/security).

For other environments, best effort should be made to adhere to this guidance by ensuring that where feasible, vulnerabilities in GitLab are patched and released prior to public disclosure of the vulnerability and the fix.

Exceptions to this policy may occur where other customer commitments and contractual obligations override the need to deploy a fix, such as agreed customer maintenance windows. For critical vulnerabilities, emergency maintenance should be pursued to ensure these vulnerabilities are applied prior to public disclosure. For other vulnerabilities, a best effort should be made to deploy fixes prior to public disclosure.

### What does an SLA measure?

An SLA in the context of a security vulnerability measures the time it takes to resolve or mitigate a vulnerability. The definition of resolution and mitigation varies based on the vulnerability, where it was detected, and if it can be feasibly addressed without impacting the availability or stability of impacted GitLab assets. The requirements and definition of fixed are naturally different for vulnerabilities in code, vulnerabilities in installed software on servers, or bundled code in containers, for example. All of these types of assets & the vulnerabilities which impact them must have the following in common, if an SLA is to apply to them:

1. All vulnerabilities must be able to be fixed
1. All vulnerabilities must be able to be detected
1. GitLab must be responsible for the asset impacted by a vulnerability

For example, we cannot apply an SLA to a component or asset we are not responsible for - as we are not able to make commitments or make plans to address a vulnerability within a specific timeframe.

In the case of dependencies we bundle (in our code or images) or install (on systems we are responsible for) we are however responsible for deploying updates which address vulnerabilities, so an SLA is relevant here once an update is actually available. For vulnerabilities directly present due to configuration of systems or vulnerabilities in code which GitLab is responsible for, we are directly responsible and the SLA is applicable regardless of when a mitigation or remediation is available - as we are also responsible for defining the mitigation or remediation for the vulnerability as part of overall remediation of the vulnerability.

Where vulnerabilities are present in code or images GitLab is directly responsible for (i.e. not in dependencies) then the SLA will measure the time from initial detection of the vulnerability through to when a remediation is generally available to GitLab users and customers.

Where vulnerabilities are present in code dependencies, image components or packages on systems GitLab is responsible for, including installations of GitLab-provided images and packages on GitLab managed systems, the SLA measures the time from an updated package or image becoming available, through to when the updated image or package has been deployed to impacted systems. In the context of managed systems, the SLA measures specifically the time from initial detection through to resolution on a per-system basis, so this needs to be tracked on a per-system per-vulnerability basis to measure SLAs.

In circumstances where a vulnerability exists in code or images GitLab is responsible for (such as supported images and packages used for deploying GitLab), which are deployed to systems managed by GitLab on behalf of customers (such as [GitLab Dedicated](https://about.gitlab.com/dedicated/)), the SLA for initial vulnerability mitigation and resolution in GitLab code, packages and images which are deployed to managed environments does not include the time taken to deploy fixed packages to managed environments. This is considered a distinct SLA which begins when a patch is made available to the teams managing those environments. This does not replace our obligations to responsibly disclose vulnerabilities in GitLab, so please ensure the [security release process documentation](https://gitlab.com/gitlab-org/release/docs/-/tree/master/general/security) is followed. There is more detail on this in the [Responsible Disclosure vs SLAs](#responsible-disclosure-vs-slas) section.

## SLA Definitions

There are separate SLAs with distinct timelines:

- The SLA to release fixed packages and images addressing a vulnerability in GitLab code or images
- The SLA for taking the newly released packages
- The SLA for deploying fixed packages and images to environments managed by GitLab on the behalf of customers.

The SLA to mitigate and remediate a finding in GitLab code or images starts upon detection or report of a vulnerability in GitLab code or images, and ends when the updated packages or images are made available to the GitLab team members responsible for environments managed by GitLab on behalf of customers. The SLA for remediating the vulnerabilities in those managed environments begins upon availability of fixed packages and images, and ends when the packages or images have been deployed to the managed environment. This distinction is made to ensure GitLab can maintain our commitments to availability and stability of managed environments.

Given the typical different impact of different vulnerabilities across GitLab's code, images and systems, impact and therefore SLA may be different for the same vulnerability across different packages and components impacted by a distinct known vulnerability. SLAs need to be tracked at the component/package level in addition to per image or per system level to ensure impact can be accurately tracked and SLA accurately measured.
