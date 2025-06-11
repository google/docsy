---
title: "Closing Vulnerability Tracking Issues"
---

At GitLab, we use GitLab to track the detection and remediation of vulnerability findings. In the case of remediation work, a vulnerability tracking issue (which is a regular GitLab issue) is used to track work required to remediate a specific vulnerability finding, typically against one or more assets where the vulnerability was detected.

In order to close a vulnerability tracking issue, one of the following criteria must be met:

1. The finding has been remediated and validated as remediated, and made available to intended users
1. The finding was a false positive detection, and required work has been performed to prevent re-detection
1. A finding was in a third-party dependency from a vendor, and the vendor has indicated they will not fix the vulnerability due to lack of impact, and an [SLA exception or Deviation Request](sla-exceptions.md) has been raised

In other situations, there is typically more work which is required before the issue can be closed, to ensure the detection is not erroneously closed and the finding forgotten about, and issue closure is not appropriate as a result.

Further guidance on mitigating and resolving vulnerabilities is available in the following runbooks:

- [So you have a vulnerability finding?](runbooks/so-you-have-a-vulnerability-finding.md)
- [Fixing vulnerabilities](runbooks/fixing-vulnerabilities.md)

If you require further guidance, for vulnerabilities in GitLab code, you can reach out to your [AppSec stable counterpart](../application-security/stable-counterparts.md), or to [Vulnerability Management](../_index.md).
