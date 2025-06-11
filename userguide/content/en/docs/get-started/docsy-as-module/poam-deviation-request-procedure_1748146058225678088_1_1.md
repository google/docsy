---
title: "FedRAMP Vulnerability Deviation Request Procedure"
---

## Submit a Request

<div class="d-grid gap-2 my-4">
<a href="https://gitlab.com/gitlab-com/gl-security/security-assurance/team-security-dedicated-compliance/poam-deviation-requests/-/issues/new" class="btn bg-primary text-white btn-lg">Click here to submit a Deviation Request!</a>
</div>

Team members working with security vulnerabilities should read this procedure in its entirety and reach out to `@sec-compliance-team` in the `#sec-assurance` Slack channel if you have any questions.

## Purpose

In accordance with expectations set by the FedRAMP Authorization Act and FedRAMP Program Management Office (PMO), GitLab must follow a formal process to track and request approval (risk acceptance) from our sponsoring Agency Authorizing Official (AO) for any vulnerabilities that cannot be [remediated within SLAs](/handbook/security/product-security/vulnerability-management/sla/) due to scenarios described in the Scope section below. These are called vulnerability Deviation Requests (DRs) and are formally reported to our AO every month using [GitLab's Plan of Action & Milestones (POA&M) (internal only)](https://docs.google.com/spreadsheets/d/1Tj3_vqNp34CSIHZsiSI0eM2zdfG574CD/edit?usp=sharing&ouid=107738356047141217629&rtpof=true&sd=true). Deviation requests for risk adjustments (severity downgrades), false positives, and operational requirements require Authorizing Official (AO) approval.

## Scope

All vulnerabilities (CVEs) impactful to the [FedRAMP production environment](https://internal.gitlab.com/handbook/engineering/fedramp-compliance/#system-architecture) (authorization boundary), including 3rd party vulnerabilities (vendor dependencies), in the following categories:

- **False positives** (vulnerability scanner limitation - vulnerability is not actually present)
- **Risk adjustments** (CVSS score/severity is lower than reported due to mitigating factors)
- **Operational requirements** (the vulnerability cannot be remediated without impact to functionality/availability)

For further detail on each type, see the definitions in the [DR types](#dr-types) section below.

### Assets in scope

Only the assets and scan types listed [here (internal)](https://internal.gitlab.com/handbook/engineering/infrastructure/platforms/gitlab-dedicated/us-public-sector-services/architecture/#vulnerability-scanning-scope-and-targeted-assets) are in-scope. Do not submit a DR for a scan type (e.g. SAST) or asset not included within the FedRAMP production authorization boundary.

Vulnerabilities in-scope for FedRAMP get the `FedRAMP::Vulnerability` label applied. See the [standard vulnerability labels (internal)](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnerability-management-tracker/-/issues/34199373) for more details.

## Roles & Responsibilities

| Role | Responsibility |
| ------- | ------- |
| GitLab Team Members | Submit the completed DR using the appropriate GitLab issue template, provide evidence |
| Security (Vulnerability Management) | Completes the technical review and approval of a DR |
| ISSO (Dedicated Compliance) | Completes the compliance review of a DR and upgrades to POA&M if approved |
| Authorizing official (AO) | Approves or denies the DR (as the ultimate decision maker) |

## Procedure

Any GitLab team member can submit a deviation request (DR) by [creating a new issue](https://gitlab.com/gitlab-com/gl-security/security-assurance/team-security-dedicated-compliance/poam-deviation-requests/-/issues/new) in the `Plan of Action and Milestones (POA&M) - Vulnerability Deviation Requests` private project. DRs should be submitted as early as possible, and mustn't be submitted once the SLA for a vulnerability is already at risk of being breached. This allows time for approval and alternate mitigations to be explored without risking breaching the SLA if the DR is not appropriate for approval. All DRs are reviewed and approved by security, compliance, and our AO and they must meet the definitions and critieria defined within the DR issue templates to be eligable for review and potential approval.

To open a DR the applicable issue template must be selected and all information must be completed prior to submitting the issue for internal review. Each DR will undergo three rounds of review:

1. First a security technical review will be completed to ensure the DR is justified and there are no alternative mitigation options.
1. Second a compliance review will be completed to determine the level of impact the DR will have on security controls, compensating control opportunities and, if approved, upgrade to the GitLab POA&M.
1. Finally an [authorizing official (AO)](https://csrc.nist.gov/glossary/term/authorizing_official) from our sponsoring Agency will review the request and is the ultimate decision maker. Note: Risk acceptance by GitLab (the business) is not allowed (i.e. we cannot ignore a legitimate vulnerability) as this responsibility lays with the AO.

If denied, a remediation plan must be developed and this item will remain on the POA&M.

If approved, the ISSO will notify all involved parties via the GitLab issue with any additional instructions (like updating security scanners and automation tooling).

### SLAs

- 2 business days for the internal security technical review
- 2 business days for the internal compliance review
- Between 1-30 days for the AO review (timeline depending on AO)

### DR types

The following definitions were adopted from the FedRAMP PMO and all 3 have issue templates for submitting DR requests:

[Risk adjustments](https://www.fedramp.gov/assets/resources/templates/FedRAMP-Vulnerability-Deviation-Request-Form.xlsx)
{.h4}

A reduction in risk compared to the scanner-detected risk level of a finding. The risk level is typically represented by the severity of a finding, which in turn is informed by the CVSS score of the vulnerability. This adjustment must be justified by existing or new compensating controls which reduce likelihood and/or impact of exploitation on systems or in codebases detected as vulnerable. The difference calculated CVSSv3 score based on vendor advisories or existing mitigations must lower the CVSSv3 score enough to justify a lower risk rating. Risk Adjustment DRs are required for all S1/S2 vulnerabilities in 3rd party/vendor dependencies. Risk Adjustment DRs are not required for S3/S4 vulnerabilities in 3rd party/vendor dependencies.
For S3/S4 vulnerabilities in 3rd party/vendor dependencies, if they breach SLA while the label `Vulnerability::Vendor Package::Fix Unavailable` presents, from a compliance/reporting perspective that is okay as long as we are monitoring for when a fix does eventually become available. Once a fix is made available as indicated by the label `Vulnerability::Vendor Package::Fix Available`, the remediation SLAs restart from the date the fix is released by the vendor.

- **TEMPORARY GUIDANCE ON VENDOR DEPENDENCY RISK ADJUSTMENT DRs**: Due to significant resource strain involved in processing risk adjustments for vendor dependencies based on vendor advisory information, there are no reporting obligations for GitLab at this time. This process is pending automation to address this constraint, so please do not submit Risk Adjustment DRs for Red Hat vendor dependencies, including UBI images. Please continue to apply the `Vulnerability::Vendor Base Container::Fix Unavailable` label and `Vulnerability::Vendor Package::Fix Unavailable` label as appropriate on the vulnerability issues until the creation of this DR type is automated.

[False positives](https://csrc.nist.gov/glossary/term/false_positive)
{.h4}

A finding which incorrectly indicates that a vulnerability is present, where the detected vulnerability is not present in the codebase or system where detected.
Justification must be provided through documentation and evidence showing supporting technical information proving the vulnerability is not present.

[Operational requirements](https://www.fedramp.gov/assets/resources/templates/FedRAMP-Vulnerability-Deviation-Request-Form.xlsx)
{.h4}

A finding which cannot be remediated within SLA, or at all, because the system will not function as intended, availability will be adversely impacted, or because a vendor explicitly indicates it will not offer a security update for the impacted package(s). FedRAMP will not approve an OR for a High vulnerability; however, a vendor can risk-adjust the vulnerability via the aforementioned risk adjustment process prior to submitting the operational requirement for review, and the adjusted severity will be considered during review of the OR.

For Vendor Dependency vulnerabilities, in which GitLab is dependent on a 3rd party vendor or open source project to remediate a vulnerability, can technically fall into multiple categories above. These vulnerability issues must always be identifed using the `Vulnerability::Vendor Base Container::Fix Unavailable` label (or `Vulnerability::Vendor Package::Fix Unavailable` if the vulnerable package is not introduced via a vendor-published base container image such as Red Hat's UBI). Special handling is required for Critical and High severity findings in vendor dependencies, so that risk can be mitigated to an acceptable level prior to proceeding with a DR.

### Workflow Labels

| Step | Description | Label applied to the Vulnerability Issue | Label applied to the Deviation Request Issue |
| ------ | ------ | ------ | ------ |
| 1 | Discover a deviation request is required for a FedRAMP-applicable vulnerability issue |  `FedRAMP::DR Status::Open` | n/a |
| 2 | Submit a Deviation Request using the appropriate issue template for review by security engineer | *label remains unchanged* | `FedRAMP::DR Status::Ready for review` (*applied automatically using the issue templates*) |
| 3 | Security (Vulnerability Management team) performs a technical review of the vulnerability and classification/justification provided in the Deviation Request | If approved, *label remains unchanged* or if denied, `FedRAMP::DR Status::Denied` | If approved `FedRAMP::DR Status::Compliance review` or if denied `FedRAMP::DR Status::Denied` |
| 4 | Security Compliance reviews and if approved, tracks vulnerability deviation on POA&M and discusses with Authorizing Official during next monthly meeting | If approved *label remains unchanged* or if denied `FedRAMP::DR Status::Denied` | If approved `FedRAMP::DR Status::AO review`; If denied `FedRAMP::DR Status::Denied` |
| 5 | Security Compliance seeks Authorizing Official approval during next monthly meeting | If approved `FedRAMP::DR Status::Approved`; If denied `FedRAMP::DR Status::Denied` | If approved `FedRAMP::DR Status::Approved`; If denied `FedRAMP::DR Status::Denied` |
| 6 | The DR may no longer be needed once a patch is made available and applied. | If remediated, close the issue and apply `FedRAMP::DR Status::Vuln Remediated` | If remediated, close the issue and apply `FedRAMP::DR Status::Vuln Remediated` |

**Vulnerability Issues should remain open unless the vulnerability has been remediated.** This allows Security Compliance to keep track of DRs that still impact the FedRAMP environment.

#### Grouping Multiple Vulnerabilities in a Deviation Request

Multiple related vulnerability tracking issues can be grouped in a single DR if **all** of the following criteria are met:

- The DR is specific to single unique vulnerability (CVE) (even if it is impacting multiple images)
- All vulnerabilities have the same DR type and justification (e.g. all are false positives in the Red Hat ubi8-minimal base image, used by multiple GitLab container images)
- All detected vulnerabilities covered by the DR have their issues linked to the DR as related issues

### Closing Vulnerability Issues and DR Issues

#### Typical issue closure timeline

Deviation requests are often not permanent, as patches are eventually made available by vendors or deployed according to risk adjusted SLAs. Patches can also be released in the middle of the DR approval process. If a patch has been released and deployed, please provide evidence in the deviation request issue comments indicating that the vulnerability is fixed in production. Once provided, the issue tracking the security finding can be closed. Acceptable evidence can include:

- Updated vulnerability scans showing the vulnerability is no longer present on systems
- Updated container scan results showing a vulnerability is not longer present in a container image, and evidence that update container has been deployed to production
- A Merge Request (merged) showing that the patch has been applied to the codebase where it was detected, and evidence that the updated versions has been released to production

**Please note that the patch / fix must be deployed to production in order to close a DR issue, not just scheduled for release.**

Once the vulnerability is remediated, apply the label `FedRAMP::DR Status::Vuln Remediated` to both the vulnerability issue and the DR issue.

#### Situations where issues can be closed without remediation

Some types of DR naturally mean that a fix will not be made available (due to vendor analysis of impact) or due to a false positive detection.
In specific situations, to reduce the burden on development groups of handling issues where no further action will be needed from them, the issue may be closed. These situations are:

- Software vendor has assessed the vulnerability impact, and will not be releasing a security update. These issues have the label `Vulnerability::Vendor Package::Will Not Be Fixed`, and may be closed.
- False positive detections. Once the DR has been opened providing evidence showing a detection is a false positive and does not impact the project, the issue can be closed.

## Exceptions

There are no exceptions allowed to this procedure.

## References

- [Vulnerability Management Procedure: Scanners](/handbook/security/product-security/vulnerability-management/)

### Other helpful definitions

- [**FedRAMP PMO**](https://www.gsa.gov/technology/government-it-initiatives/fedramp): A team within GSA and supports agencies and cloud service providers through the FedRAMP authorization process and maintains a secure repository of FedRAMP authorizations to enable reuse of security packages.
- [**Plan of Action & Milestones (POA&M)**](https://www.fedramp.gov/assets/resources/documents/CSP_POAM_Template_Completion_Guide.pdf): A FedRAMP-required .xlsx template used to track and share security findings and remediation plans with GitLab's Authorizing Official.
- [**Authorizing Official (AO)**](https://www.fedramp.gov/agency-authorization/): A senior (federal) official (usually CISO/CIO or their delegated team) with the authority to formally assume responsibility for operating an information system at an acceptable level of risk to organizational operations (including mission, functions, image, or reputation), organizational assets, individuals, other organizations, and the nation.
- [**Authorization Boundary**](https://csrc.nist.gov/glossary/term/security_authorization_boundary): All components of an information system to be authorized for operation by an authorizing official and excludes separately authorized systems, to which the information system is connected.
- [**Information System Security Officer (ISSO)**](https://csrc.nist.gov/glossary/term/information_system_security_officer): GitLab individual with assigned responsibility for maintaining the appropriate operational security posture for an information system or program.
