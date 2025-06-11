---
title: "SLA exceptions"
---

SLA exception take on two different forms at GitLab, with two slightly different processes. This difference in procedure only takes effect if the asset (image, server, package) where a vulnerability finding has been detected is shipped into and used within the FedRAMP boundary or environment. Typically, at a high level, findings in FIPS compliant images will be in-scope for FedRAMP, and should be treated as such for requesting SLA exceptions.

In FedRAMP nomenclature, SLA exceptions are referred to as Deviation Requests.

SLA exceptions in general, FedRAMP or not, are vulnerability management artifacts which describe and document review of reasons a vulnerability could not be fixed within the appropriate timeframe or SLA. These timeframes are referred to as SLAs (Service Level Agreements) at GitLab and are documented in the [Vulnerability Remediation SLAs handbook page](sla.md). We work to adhere to these SLAs on all findings in GitLab systems and shipped assets, such as container images and packages. As part of requesting an SLA exception for a vulnerability, details about a vulnerability, it's impact, likelihood of exploitation, and any barriers to remediation will be considered and a new SLA may be assigned. All SLA exception requests must include details about the vulnerability which needs review.

If these SLAs can't be met, an SLA exception may be appropriate based on the circumstances.

### Risk Acceptance & SLA Exceptions

When remediating vulnerabilities in code, container images or on running containers or servers, it is not always technologically feasible to use the latest dependency, package or container base image. Due the need to ensure the stability and performance of GitLab as a product and a service, or due to factors outside of GitLab's control like fixes not actually being available, sometimes resolving a vulnerability will not be possible until the SLA has already been missed.

In situations such as these, raising an SLA exception request allows extending the window or "stopping the clock" on the SLA timer for a vulnerability. This allows more time to resolve the vulnerability in consideration of additional context and circumstances.

### FedRAMP vs non-FedRAMP findings

This handbook page makes reference to "FedRAMP" vs "non-FedRAMP" findings. A FedRAMP finding is a finding related to an environment deployed within the FedRAMP boundary, or software components and artifacts deployed and used within the FedRAMP boundary.

For all FedRAMP findings, SLA exceptions are recorded using the [Deviation Request](/handbook/security/security-assurance/security-compliance/poam-deviation-request-procedure) procedure. Where deviation requests are mentioned or SLA exceptions for FedRAMP-related findings, this documentation should be reviewed for specific guidance and current reporting requirements for FedRAMP.

#### When is it not appropriate to request an SLA exception?

SLA exceptions should not be requested when an SLA could not be met due to reasons which were within GitLab's control. This includes vulnerabilities requiring inter-group or inter-team collaboration, team members being unavailable due to planned or unplanned absence, or other work having a higher priority (such as feature or other bug-fix work).

When SLAs can not be met in circumstances such as these, the SLA/SLO being missed and the related issues should be reviewed as part of regular group development retrospectives, similar to how bugs or features planned for a specific milestone being missed should be reviewed.

Some common scenarios or suggestions for how to prevent these kind of situations include:

- Reviewing vulnerability SLAs and time remaining as part of regular bug triage rotations to ensure SLAs are not near miss or already missed
- Vulnerability issues should be assigned and have an owner, and the owner should also  ensure vulnerabilities are handed over during times of absence, planned or unplanned
- Vulnerability issues should be handled as part of regular retrospectives and milestone planning work

#### When is an SLA exception request appropriate?

There are a number of situations where it is appropriate to extend the SLA window or "stop the clock" on the SLA for a vulnerability.

##### Mitigating circumstances or controls

Sometimes vulnerabilities will be detected on an infrastructure system, software project or container image for a component which is used in such a way that the vulnerability is either not present or not exploitable. Mitigating controls in these instances either mean the impact is lower than the original severity used to calculate the SLA, or the vulnerability is not impactful at all.
Whilst it is still important we resolve this by removing any vulnerable code from code, images and packages shipped by GitLab, with mitigating circumstances we can prioritize other work over vulnerabilities in this scenario, as is appropriate for the actual impact of the vulnerability.

An example: A vulnerability in the XML-import functionality of a software library used as a dependency has an XXE vulnerability, however the project disables or does not use the XML import functionality of the library.

###### For non-FedRAMP findings

If updating the component can be safely delayed to make way for higher priority engineering work, then an exception issue is appropriate. Analysis explaining the mitigating circumstances or controls will be required and reviewed to make certain remediation can be safely delayed. The updated SLA should represent an updated severity rating, as this is used to calculate the new SLA. For FedRAMP findings the SLA associated with individual severities are fixed and can only be adjusted by a single severity (i.e. critical cannot be adjusted to low, only high). There is more flexibility for non-FedRAMP findings.

###### For FedRAMP findings

An SLA exception is not appropriate under FedRAMP guidelines for findings with mitigating circumstances or controls in place.

##### False positive detections

Sometimes vulnerabilities will be found in software by vulnerability scanners which are not actually present. This can be based on inaccurate detection methods, or limited context around the detection due to limited scanner functionality. False positives refer to any situation where a vulnerability should not have been detected at all, not situations where a vulnerability is present but not exploitable due to other mitigating factors.
In these cases, there is no vulnerability to remediate, and the vulnerability can be treated as a false-positive detection.

###### For non-FedRAMP findings

An exception can be created to temporarily extend the SLA until the false-positive detection can be addressed in the scan configuration or scanner itself. If this is not feasible, then a permanent exception may also be appropriate.

###### For FedRAMP findings

A [False Positive Deviation Request](https://gitlab.com/gitlab-com/gl-security/security-assurance/team-security-dedicated-compliance/poam-deviation-requests/-/issues/new?issuable_template=false_positive_template) can be opened to address not meeting SLA for this finding.

##### Risk & severity adjustments

Software which has been repackaged by a vendor (such as operating system packages) often have a different severity rating for vulnerabilities in a package based on how the software has been packaged and the default configuration.
Mitigating controls and circumstances can also exist which impact the actual severity of a vulnerability.

In these cases, an exception to typical SLAs can be appropriate.

###### For non-FedRAMP findings

An exception can be created to extend the SLA and adjust the severity of the vulnerability.

###### For FedRAMP findings

In FedRAMP environments, there are much more specific rules for adjusting the risk of a finding, which are detailed on the [Risk Adjustment section of the Deviation Request Procedure](/handbook/security/security-assurance/security-compliance/poam-deviation-request-procedure/). If this handbook page indicates that it is appropriate, a [Risk Adjustment DR](https://gitlab.com/gitlab-com/gl-security/security-assurance/team-security-dedicated-compliance/poam-deviation-requests/-/issues/new?issuable_template=risk_adjustment_template) can be created.

##### Vendor dependencies & fix availability

Vendor dependencies, depending on the software vendor, have their own lifecycle of reporting, analysis, and scoring which is represented in vendor advisories. For example, Red Hat releases RHSA (Red Hat Security Advisories) detailing the outcomes and fixed versions of software packaged and distributed by Red Hat. The outcome of this process can often mean that a fix will not be made available, as the vendor has found their packaged version of the software to not carry the vulnerable code, not be exploitable under default configuration, or that exploitation requires features to be enabled which are disabled in their packages.

In the situation where releasing a fix is delayed, labels or manual research of advisory information will indicate that a fix is not yet available or "unavailable". An exception to extend the SLA is appropriate in this case.

In the situation where a fix will not be released at all, as indicated by manual research or advisory information or automatically applied "will not be fixed" labels, an exception to be exempt from SLA is appropriate in this case.

###### For non-FedRAMP findings

An exception issue should be created for either a temporary or permanent SLA exemption, based on findings being either "fix unavailable", or "will not be fixed" respectively.

###### For FedRAMP findings

In FedRAMP environments, a Deviation Request should be opened. There are specific rules around how this should be handled, detailed in the [Operational Requirement DR Procedure](/handbook/security/security-assurance/security-compliance/poam-deviation-request-procedure/#dr-types). In many cases these can be created [automatically](automation.md). If automated DR creation does not apply, an [Operational Requirement](https://gitlab.com/gitlab-com/gl-security/security-assurance/team-security-dedicated-compliance/poam-deviation-requests/-/issues/new?issuable_template=operational_requirement_template) DR can be opened manually to adjust the SLA.

##### Operational and technical requirements

When operational or technical requirements mean that resolving a vulnerability within SLA is either not technically feasible, or represents risk to the stability or availability of GitLab software or systems, an exception SLA may be appropriate if other mitigations can be put in place.

###### For non-FedRAMP findings

In non-FedRAMP environments, an exception issue should be created so Security and the responsible development group can collaborate on potential mitigations and if appropriate extend the SLA for remediating the finding.

###### For FedRAMP findings

In FedRAMP guidance, this is not considered a valid reason to extend or exempt the SLA of a finding. Security should work with development groups in this case to find alternative approaches which meet SLA.

#### SLA Exception Procedures

##### FedRAMP Deviation Request Procedure

For FedRAMP related vulnerabilities, all exception requests must follow the [FedRAMP Vulnerability Deviation Request Procedure](/handbook/security/security-assurance/security-compliance/poam-deviation-request-procedure/). For vulnerabilities in 3rd party (non-GitLab) dependencies, the SLA remediation timeframe re-starts once a patch/fix is released/published.

##### Non-FedRAMP Risk Acceptance & SLA Exception Procedure

If you've identified a vulnerability that is a candidate for an exception, in a non-FedRAMP image, project, or infrastructure system, please open a [vulnerability exception issue](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnerability-management-tracker/-/issues/new) using the `exception` template.

Please fill all out the pertinent information requested in the template. For reference, the information required is as follows:

- Vulnerability description, including CVE or other identifiers
- Priority/Severity of Vulnerability
- Original remediation due date per above SLAs
- Length of requested exception
- List of applicable assets or projects (hosts, container images, GitLab repositories, etc)

You will need to provide a high level justification of the exception and why it is appropriate. It is also helpful (and welcome!) if you can provide any technical detail you think helps explain any mitigations, compensating controls, or any other analysis which adds context around lessened impact of the vulnerability.

All of this helps us make quick decisions around how appropriate an exception is, and if there is any other way we can help to mitigate the vulnerability within SLA.

Vulnerability exceptions can be grouped into the following categories:

| Exception type | Exception length | Description |
| ---- | ---- | ---- |
| ~"risk treatment::remediate |N/A | The vulnerability will be remediated and an exception request is not required |
| ~"risk treatment::mitigate severity::remediate" | N/A | The severity level should be downgraded due to compensating controls in place. |
| ~"risk treatment::mitigate severity::accept" | Permanent | The severity level should be downgraded due to compensating controls in place AND the risk should be accepted (i.e. will not be fixed). |
| ~"risk treatment::false positive" | Permanent | The vulnerability was incorrectly reported and is not actually present or exploitable in any way. |
| ~"risk treatment::operational requirement" | Temporary | The vulnerability cannot be fixed without causing operational instability, often due to a third party dependency without a patch release or dependency on a package version that would require breaking changes to upgrade. |
| ~"risk treatment::accept" | Permanent | The vulnerability should be accepted (often due to very low risk) and it will not be fixed. |

The listed labels are useful for reporting on our SLA compliance and the associated risks to GitLab, and if you are not sure which one should be applied, please ask when opening the exception request and the Vulnerability Management team will apply the correct one.

##### Exception length restrictions

We currently allow exception lengths based on priority/severity as follows:

| P/S  | 30-days | 60-days | 90-days | 365-days |
|------|---------|---------|---------|----------|
| ~"priority::1" or ~"severity::1" | `Yes` | `No` | `No` | `No` |
| ~"priority::2" or ~"severity::2" | `Yes` | `Yes` | `Yes` | `No` |
| ~"priority::3"  or ~"severity::3" | `Yes` | `Yes` | `Yes` | `Yes` |
| ~"priority::4" ~"severity::4" | `Yes` | `Yes` | `Yes` | `Yes` |

For exceptions which are not time based (i.e. for false positive detections) we have permanent exceptions. If you think a permanent exception might be appropriate, let us know when opening the issue and we'll review to see if a permanent exception might be appropriate. Generally speaking, time based exceptions are preferred as they give us an opportunity to explore options with you to address a finding, even if it is a false positive.

##### Exception approvers

After the issue is open, the requestor should assign the due date to match the appropriate SLA, based on when the linked vulnerability was first detected.
The request will be reviewed by a member of the Vulnerability Management team, and approved if appropriate. If not approved, guidance will be given on how to mitigate the risk of the vulnerability or remediate it within SLA.
Please feel free to reach out in the `#g_security_vulnmgmt` channel on Slack if you have any questions or need to bring any more immediate concerns to our attention.
