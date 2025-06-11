---
title: "Fixing vulnerabilities"
description: "Provides actionable guidance on how to resolve specific vulnerability types from specific sources for team members"
---

## Overview

The purpose of this runbook is to define common sources and types of vulnerability, and typically the work required to remediate the vulnerability finding.
This runbook is divided into sections based on the source of a vulnerability findings, and further broken down into types of sources. For example, it is common for vulnerability findings to originate from automated scans in CI pipelines. There are multiple subtypes of automated security scans, such as container scanning, dependency scanning, secrets scanning which all have their own sub-sections detailing a typical resolution workflow.

## Source: Security Scanners

Automated security scanners are the source of the majority of vulnerability findings at GitLab. These can range from infrastructure security scanning, or scans run against GitLab assets we ship out to users, such as container images and software packages we publish.

### Source: Container Scanners

Container scanners will scan built container images for software components, binaries, and OS package metadata (such as RPM or .deb package databases) embedded in the image for known-vulnerable components. Some scanners will also detect language libraries such as Ruby gems, Go libraries and Python modules which carry known vulnerabilities and have been deployed inside an image. In general, for container scan findings, if a fix has been released, updating the detected component to the version indicated as fixed alongside the detection will address the finding, and no further work will be required. Complications can arise if upgrading a specific component causes incompatibility with other components and deployed code inside the container, such as incompatible Ruby gem versions not yet being tested against GitLab in a GitLab-published `gitlab-ee` or `gitlab-ce` image. In these cases, further work may be required to validate the upgrade will not cause any problems if upgraded.

#### Type: 3rd Party OS Dependency

In the case of a vulnerability finding naming OS packages present inside a container image as vulnerable to a given vulnerability (i.e. a CVE), one of these two remediation options will often apply:

- Updating any base images sources from vendors, or base images which in turn are based on vendor images, to the latest vendor-released base.
- Using the package manager (i.e. `apt`, `yum` or `microdnf`) to upgrade to the fixed package version as part of either a base image build or the build of the impact image

 Normally, using the package manager to upgrade packages, if available for the type of base image, during build time, is considered good practice, as it will often prevent findings like this from being detected at all if the image is built frequently enough and the vendor is pushing fixed packages quickly enough. Typically updated packages will be made available before updated base images from most vendors. If they are not made available in a timely manner, an [SLA exception](../sla-exceptions.md) may be appropriate. In case there is no package management, as is often the case in distroless images, the only remediation may to be update the base image from the distroless image vendor, or build a fixed version ourselves as part of the image build process. This last option should only be pursued, given the time investment, if a fix is needed and the vendor has indicated they will not be making a fix available.

#### Type: Language libraries/dependencies

Some container scanning tools have the ability to detect vulnerabilities in language libraries (such as Python modules, Ruby gems) or even to extract package information out of compiled Go binaries. These scanners will raise vulnerability findings for vulnerable components if they are detected embedded into a container image, as is often the case when built software such as GitLab is deployed as a ready-built container image for distribution to users.

Similar to 3rd party OS dependencies, the remediation here is typically to update the impacted library or module, and ship an updated container image to users. If there are delays in a vulnerability being addressed in a component we depend on, it may be necessary to open an [SLA exception](../sla-exceptions.md) or assess alternate libraries which are not vulnerable, but provide similar functionality. Balancing the effort to move to different library should be done against the likelihood the vulnerability will be addressed upstream in the existing library, and how long that is likely to take.

### Source: Dependency Scanners

Dependency scanners, unlike Container Scanners typically operate directly on project source code, prior to container images or packages being built. Dependency scanners will detect vulnerabilities in language dependencies (such as Python modules, Ruby gems, etc.) and typically, but not always, recommend steps to remediate the vulnerability. In most cases, this will involve using the language package manager to upgrade to a newer version of the dependency including the fix, and this is all that is required to resolve the vulnerability finding. In cases where dependency upgrades break builds for projects or introduce stability or functionality problems, additional work may be required to upgrade to the newer dependency. In these cases, it may be appropriate to see if alternate libraries can be used, or opening an [SLA exception](../sla-exceptions.md) explaining the interoperability issue with the upgraded dependency. In some cases, these findings may refer to dependencies which are no longer required or can be removed with small changes to the project, in this case, the most appropriate action may be to remove the dependency entirely, which will also resolve the vulnerability finding.

### Source: SAST

SAST findings typically represent known and suspected code patterns which may introduce a vulnerability into a codebase. Typically, these findings will have remediation advice associated with them based on the specific finding, however impacts to the functionality of the code where the vulnerability is detected should be assessed by the appropriate development group to ensure the advice given by the scanner will not cause any other issues if applied. Often, there are multiple ways to address SAST findings, each with different complexity, benefits, and negatives which should be considered.

Additionally to this, if development groups have novel ways in which a SAST vulnerability finding can be effectively mitigated, it may be necessary to add specific code comments instructing the scanner to ignore a specific code pattern in the future, even once a solution is applied. Many SAST scanners look for simple patterns in code or the usage of specific language libraries, and even code which is secure can sometimes generate findings.

Further to this, if the vulnerability finding is not actually exploitable to begin with, and the code highlighted in the finding is not vulnerable, adding the code comments/annotations to the detected code to instruct the scanner to ignore this code for this finding in the future may be necessary. If the finding is not exploitable (a false positive) and the code comment/annotation results in the finding not being detected upon rescan, that is also an acceptable solution.

### Source: Secret Detection

Secret scanners detect data in projects which potentially represent sensitive information such as credentials, certificates or other sensitive information which should not be stored directly in a project's repository. In most cases, the appropriate action is to remove the secret, rotate any certificates or credentials which had been detected, and use proper [secret storage](https://docs.gitlab.com/ee/ci/secrets/index.html) to store this information. When removing secrets from a project, it is also important to ensure the project's version control history is also scrubbed to remove any trace of the secret. Tools such as the [BFG Repo Cleaner](https://rtyley.github.io/bfg-repo-cleaner/) can be incredibly useful in automating this process.

### Source: IaC Scanning

[IaC](https://en.wikipedia.org/wiki/Infrastructure_as_code) tools such as Terraform allow the definition and deployment of infrastructure by representing the infrastructure as code. IaC security scanners detect common infrastructure misconfigurations in the code prior to it being deployed to real infrastructure. Typically these findings will also carry suggestions on how to adjust the code to remove the infrastructure vulnerability which would be introduced if the IaC was applied/deployed. Typically these recommendations must be reviewed in the context of the infrastructure being described, and simply applying the recommendations should be reviewed to ensure there will be no impact to infrastructure by the suggested changes. There may be other ways detected infrastructure vulnerabilities can be addressed based on the impact described in the finding. It's also possible for false-positives to be detected, as sometimes these findings do not consider the broader context of a configuration and the potential impact of the configuration is mitigated by some other part of the configured infrastructure, in this case, an [SLA exception](../sla-exceptions.md) may be appropriate.

### Source: Infrastructure & Network Vulnerability Scanners

Infrastructure and network vulnerability scanners scan already deployed infrastructure, from either an internal or external attack surface perspective, and report any potential vulnerabilities detected in systems or hosted application code. Some of these scanners will have access to deployed hosts either via SSH keys, or via disk snapshots, so can provide a level of inspection much higher than typical external scanning tools. Many different types of findings can be detected by these scanners, depending on their scope and configuration. This section has been split into finding type to better explain the different use cases and how to fix these type of findings.

#### Type: 3rd Party OS Dependency

Similar to the advice for Container Scanners, many network and infrastructure scanners can directly inspect files on the filesystems of deployed workloads (servers, serverless, containers), container images and VM images. In this case, they will either fingerprint OS packages by accessing OS package metadata in the filesystem, or fingerprinting binaries directly. The way to remediate these types of findings typically involves one of two things:

- Updating (patching) the OS of running workloads to ensure the latest OS packages are installed, and images updated (VM or container)
- Removing unneeded packages from the workload or images

 Normally, using the package manager to upgrade packages, if available for the type of base image, during build time, is considered good practice, as it will often prevent findings like this from being detected at all if the image is built frequently enough and the vendor is pushing fixed packages quickly enough. Typically updated packages will be made available before updated base images from most vendors. If they are not made available in a timely manner, an [SLA exception](../sla-exceptions.md) may be appropriate. In case there is no package management, as is often the case in distroless images, the only remediation may to be update the base image from the distroless image vendor, or build a fixed version ourselves as part of the image build process. This last option should only be pursued, given the time investment, if a fix is needed and the vendor has indicated they will not be making a fix available.

#### Type: Language libraries/dependencies

Network & infrastructure scanning tools which have filesystem access for workloads typically are also able to find and fingerprint language-specific library dependencies and any vulnerabilities impacting them. These out of date & vulnerable libraries can come from multiple sources:

- Libraries installed to support deployed applications on the server. Typically to resolve these findings, the application itself needs to have the finding addressed, and then the updated version deployed to the workload.
- Libraries installed as part of tools used to administer the workload. This can include configuration management tools, backup tooling, or diagnostic tools. In this case, the tools should either be removed or upgraded to a non-vulnerable version.
- Backups of applications or tooling made during routine maintenance. These are easy to forget about once a change or incident is over, but can be picked up by vulnerability scanners and should be cleaned up if no longer needed.

#### Type: Secret detection

Network & infrastructure scanning tools are often able to detected two types of secrets:

- Secrets stored on the filesystem of deployed workloads. These may be necessary for the function of applications, or they may not be. In the case of necessary secrets being detected or genuine false positive detections, an [SLA exception](../sla-exceptions.md) may be appropriate. Otherwise, the secrets should be removed and stored in a [supported secret storage and management tool](https://docs.gitlab.com/ee/ci/secrets/index.html).
- Secrets exposed by deployed applications. Typically, if an application endpoint is exposing a secret this is unintended, and the application will need to be fixed and then redeployed so that the secret is no longer exposed. If the application is a 3rd party tool or the issue can not be addressed quickly, limiting network access to the endpoint may also be an appropriate workaround or mitigation.
