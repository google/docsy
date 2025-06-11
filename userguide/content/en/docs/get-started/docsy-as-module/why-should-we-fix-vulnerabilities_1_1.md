---
title: "Why should we fix vulnerabilities?"
---

## Overview

Sometimes we encounter vulnerability findings in GitLab or GitLab systems, and through various mitigating factors or a lack of clear vectors for exploitation, it may not seem important to resolve those vulnerabilities, when viewed in isolation. The handbook page details potential reasons team members might not have considered for resolving vulnerability detections in a number of scenarios.

There are several important reasons for fixing vulnerabilities:

1. To remediate direct threat of vulnerabilities being exploited in GitLab or GitLab systems
1. To improve the security of our software and systems, to prevent negative impact to the availability and confidentiality of GitLab user data, using exploits or combinations of exploits we may not yet be aware are possible
1. To demonstrate our commitment to a mature and secure software delivery lifecycle (SDLC). This helps to demonstrate to GitLab users that they can trust our software and systems, by ensuring scans of our systems, images, and packages are as clean as possible as a measure of the health of our procedures

Mitigating factors or a lack of direct exploitation scenarios should not mean we don't need to fix a vulnerability detection. If you believe a finding to be mitigated or not exploitable, this can be used to justify an exception to regular SLAs, however this should still be addressed and a fix shipped per the above reasons. If you believe a detection is made in error, which is typically referred to as a false positive in a security scan, you can raise an SLA exemption documenting to error in detection. Ideally, we would then feed information about the detection back to development groups (for GitLab security scanning product features) and to third party vendors or projects for all other scanners, to get the false positive resolved at the source.
