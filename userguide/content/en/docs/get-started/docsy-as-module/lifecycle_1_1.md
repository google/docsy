---
title: "Vulnerability Lifecycle"
---

## Tracking Issue Lifecycle

The typical lifecycle of a vulnerability detection at GitLab, at a high level, follows the following steps:

1. Vulnerability detected by scanner or otherwise reported
1. A GitLab issue is created to track the vulnerability
1. The vulnerability is remediated within SLA
1. The issue is closed

Depending on the environment and what is being scanned, the tracking issue will be handled by different GitLab team members.
Issues may also be enriched by different automated tools, such as ([VulnMapper](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/tree/main), which assist with streamlining the detection and remediation process.
When an issue cannot be remediated within SLA, additional procedures exist for adjusting or exempting vulnerabilities from SLA. See the section in this page on Risk Acceptance & SLA Exception for detail.

### Closing tracking issues

To reduce the number of non-actionable issues being tracked by development groups, we've looked at the various situations where issues can be safely closed, without compromising our ability to react to changes in fix availability or mitigating factors.

Vulnerability tracking issues can be closed when:

- A vulnerable dependency or package has been updated, and an updated software artifact (container image, package) has been shipped
- A vendor dependency in non-FedRAMP container images will not be fixed by the software vendor (i.e. Debian) as it is not impactful
- A vendor dependency in a FedRAMP container image will not be fixed by the software vendor (i.e. Red Hat) as it is not impactful, and a DR has been opened and linked to the tracking issue
- There is a false positive detection in a non-FedRAMP container image or project and an exception issue has been created or updated and linked to the tracking issue
- There is a false positive detection in a FedRAMP container image and a DR has been opened or updated and linked to the tracking issue

### Example vulnerability lifecycles

#### An impactful vulnerable package is detected by Wiz.io on a GitLab-managed infrastructure system

1. A vulnerability and tracking issue pair is created by [VulnMapper](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper)
1. The issue is remediated as part of GitLab's production patching cycle
1. The issue is closed

#### An impactful vulnerable package is detected in a non-FedRAMP GitLab container image

1. A container scan finding is created in GitLab
1. An issue is created to track remediation of the finding
1. The vulnerable package is updated
1. An updated image is shipped
1. The issue is closed

#### An vulnerable package is detected in a non-FedRAMP GitLab image, no fix available

1. A container scan finding is created in GitLab
1. An issue is created to track remediation of the finding
1. No fix will be made available by the vendor, as indicated by the automated issue labels or manual research
1. The linked vulnerability finding from the container scan report is dismissed
1. The issue is closed

#### An impactful vulnerability is detected in a non-FedRAMP GitLab image, fix is available

1. A container scan finding is created in GitLab
1. An issue is created to track remediation of the finding
1. No fix will be made available by the vendor, as indicated by the automated issue labels or manual research
1. The linked vulnerability finding from the container scan report is dismissed
1. The issue is closed

#### An impactful vulnerability in found in a dependency used by a GitLab software project

1. A dependency scan finding is created in GitLab
1. An issue is created to track remediation of the finding
1. The dependency is updated
1. An updated version of the software is shipped
1. The issue is closed

#### An impactful, unfixed vulnerability is found in a dependency used by a GitLab project

1. A dependency scan finding is created in GitLab
1. An issue is created to track remediation of the finding
1. The responsible development group works with the library maintainer or GitLab owner of the dependency to understand fix availability
1. The maintainer(s) indicates a fix will not be available with SLA
1. Mitigating controls are explored to either validate or mitigate the impact of the vulnerability
1. Mitigating controls or switching to an alternate library can not be implemented within SLA
1. An exception issue is opened detailing the options explored to extend the SLA as needed
1. An updated version of the software is shipped with either a fix or mitigation in place
1. The issue is closed

#### A vulnerability which won't be fixed is found in a dependency used by a GitLab project

1. A scan finding is created in GitLab
1. An issue is created to track remediation of the finding
1. The responsible development group works with the library maintainer or GitLab owner of the dependency to understand fix availability
1. Either there is no response, or the project is not maintained, or the vulnerability has been rejected and won't be fixed for any reason
1. Mitigating controls are explored to either validate or mitigate the impact of the vulnerability
1. Mitigating controls or switching to an alternate library can not be implemented within SLA
1. An exception issue is opened detailing the options explored to extend the SLA as needed
1. An updated version of the software is shipped with either a fix or mitigation in place
1. The issue is closed

#### An impactful vulnerable package is detected

in a GitLab FedRAMP container image

1. A container scan finding is created in GitLab
1. An issue is created to track remediation of the finding
1. The issue is automatically labelled by [VulnMapper](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/tree/main) with the appropriate [Vulnerability Management Labels](/handbook/security/product-security/vulnerability-management/labels/) based on fix availability data published by Red Hat
1. A fix is available as indicated by the labels, and the responsible development group updates the image with the fixed package
1. The issue is closed once the updated image is shipped to FedRAMP environments

#### A vulnerable package which the vendor has decided will not be fixed is detected

in a GitLab FedRAMP container image

1. A container scan finding is created in GitLab
1. An issue is created to track remediation of the finding
1. The issue is automatically labelled by [VulnMapper](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/tree/main) with the appropriate [Vulnerability Management Labels](labels.md) based on fix availability data published by Red Hat
1. If a fix will not be made available by the vendor as indicated by labels or manual research, the Deviation Request documentation should be reviewed to see if a [Deviation Request](/handbook/security/security-assurance/security-compliance/poam-deviation-request-procedure) should is appropriate to adjust the [SLA](sla.md) for remediation.
1. A DR is created, either via automation in [VulnMapper](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/tree/main), or by the responsible development group
1. Once the issue is linked to the DR issue, the vulnerability tracking issue may be closed

#### A vulnerable package which has not been fixed yet by the vendor is detected

in a GitLab FedRAMP container image

1. A container scan finding is created in GitLab
1. An issue is created to track remediation of the finding
1. The issue is automatically labelled by [VulnMapper](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/tree/main) with the appropriate [Vulnerability Management Labels](labels.md) based on fix availability data published by Red Hat
1. If the fix will likely not be made available by the vendor before SLA is due (labels indicate it is unfixed), the [Deviation Request](/handbook/security/security-assurance/security-compliance/poam-deviation-request-procedure) documentation should be reviewed to see if a [Deviation Request](/handbook/security/security-assurance/security-compliance/poam-deviation-request-procedure) should is appropriate to adjust the [SLA](sla.md) for remediation.
1. A DR is created, either via automation in [VulnMapper](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/tree/main), or by the group responsible for remediation
1. The issue remains open, and once a fix is available, labels are updated by [VulnMapper](https://gitlab.com/gitlab-com/gl-security/product-security/vulnerability-management/vulnerability-management-internal/vulnmapper/-/tree/main) or a team member
1. The vulnerable package is updated to the fixed version and a new image is shipped
1. When the issue is remediated & deployed, the tracking issue can be closed
