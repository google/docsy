---
title: "Vulnerability Management Definition: What Does Fixed Mean?"
---

## Overview

At GitLab, when a vulnerability finding is detected, it is detected against one or more assets (such as servers, container images or packages).
When remediating or "fixing" a vulnerability detection, it is important that a full remediation of the detected finding is made and validated as no longer being detected or exploitable prior to considering a vulnerability finding fixed.

This handbook page contains several scenarios for different types of detections, and sets out the "definition of done" and what constitutes a fixed vulnerability.

## Vulnerability detections in code

When vulnerable code is detected or reported in GitLab's code, to consider the vulnerability finding fixed, we need to have addressed the vulnerability, validated it is no longer present, and made a version of the code available in packaged form to GitLab users and those self-hosting GitLab. This includes making fixes available to GitLab team members who are responsible for deploying GitLab to hosted or managed installations of GitLab. A vulnerability is not considered fixed until a version containing the fix is shipped and accessible to users. A vulnerability in code is also considered fixed before it has been deployed so long as the updated packages or images have been made available to the intended consumers of those packages. In the case of managed or hosted environments which GitLab is responsible, deployment of remediated code, via packages or images, to hosted or managed environments must be performed before we can consider the vulnerability fixed in those environments. For further clarification of how this works for SLAs, please see the [SLA](sla.md) handbook page.

## Vulnerability detections in GitLab packages or container images

Similar to vulnerability detections in code, where 3rd party dependencies we ship inside of our images or packages have vulnerabilities, they are not considered fixed until a fixed version of the package or image is available for installation by the intended consumers. A vulnerability in a package or image is still considered fixed prior to it being deployed or installed by users. In the case of managed or hosted environments which GitLab is responsible, deployment of remediated packages and images to hosted or managed environments must be performed before we can consider the vulnerability fixed in those environments. For further clarification of how this works for SLAs, please see the [SLA](sla.md) handbook page.

## Vulnerability detections in GitLab-managed infrastructure

For detections in hosted infrastructure, such as managed environments built around Kubernetes or cloud servers, vulnerability findings are considered remediated for a given environment when there are no further detections of a vulnerability on any of the hosted Kubernetes workloads or cloud servers which make up the environment, for a specific advisory. At an individual workload level, such as a container or server, a vulnerability is considered fixed when the vulnerability is no longer detected as a finding when that container or server is re-scanned and revalidated. For detections of findings in GitLab code which is deployed to GitLab-managed environments, we treat the detection of the vulnerability in code, packages or images as distinct to the detection of the vulnerability on hosted workloads running that code, package or image from an SLA perspective. For further clarification into how this weeks, please see the [SLA](sla.md) handbook page.
