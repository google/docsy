---
title: "Security Content Automation Protocol (SCAP) Scanning"
description: "A primer on SCAP and how to get started with OpenSCAP and Podman to scan container images."
---

## Security Content Automation Protocol (SCAP) Scanning

Configuration Compliance of IT systems is an important part of system hardening and is part of most security attestations and third party audits. Security Content Automation Protocol (SCAP) is a common method of automating these configuration compliance checks and identifying remediation.

## Background

[Security Content Automation Protocol](https://en.wikipedia.org/wiki/Security_Content_Automation_Protocol) is a US standard maintained by NIST, and is a method for using specific standards to enable automated vulnerability management, measurement, and policy compliance of information systems. it is most often used for compliance scanning, that is to measure IT systems against specific compliance standards like CIS or PCI-DSS.

[OpenSCAP](https://www.open-scap.org/getting-started/) is a very popular [open-source](https://github.com/OpenSCAP) ecosystem for SCAP scanning and is maintained by Red Hat. It is the most common way to conduct SCAP scanning and assessment.

## SCAP modules

Each SCAP (Security Content Automation Protocol) module has a specific function to help automate security checks, assessments, and vulnerability management. Here is a breakdown of the key SCAP modules and what each one does:

### 1. XCCDF (Extensible Configuration Checklist Description Format)

- **Purpose**: XCCDF is used to create security checklists, benchmarks, and configuration guidance.
- **Function**: It defines security policies as XML documents that include rules, checks, and remediation guidance. XCCDF files are structured to represent security profiles, with each profile containing rules for configuration and compliance.
- **Example Use**: A benchmark to verify that SSH settings align with best practices would be defined in an XCCDF file.

### 2. OVAL (Open Vulnerability and Assessment Language)

- **Purpose**: OVAL provides a standard way to represent system configuration information, state, and vulnerability data.
- **Function**: OVAL definitions describe security checks for specific configurations, patches, or vulnerabilities. It allows scanners to evaluate system compliance and find vulnerabilities by checking if specific conditions are met.
- **Example Use**: An OVAL check might confirm that a particular version of a package is installed, or that a configuration file contains certain values.

### 3. CPE (Common Platform Enumeration)

- **Purpose**: CPE is a standardized naming scheme to identify information technology systems, platforms, and applications.
- **Function**: CPE names uniquely identify specific platforms, operating systems, or applications, enabling SCAP tools to apply relevant checks based on the target system.
- **Example Use**: A CPE identifier might specify a system as "cpe:/o:redhat:enterprise_linux:8" to apply checks specific to Red Hat Enterprise Linux 8.

### 4. CVE (Common Vulnerabilities and Exposures)

- **Purpose**: CVE provides a unique identifier for publicly known vulnerabilities.
- **Function**: Each CVE ID refers to a specific vulnerability, describing the affected software and the nature of the issue. CVE identifiers help track vulnerabilities across databases and security tools.
- **Example Use**: CVE-2021-34527 (PrintNightmare) is an identifier that refers to a specific Windows vulnerability, allowing security tools to recognize and reference it in scans and reports.

### How These Modules Work Together

- **XCCDF** defines what should be checked and provides remediation guidance.
- **OVAL** performs the actual checks by evaluating system state and configurations.
- **CPE** identifies the target systems to apply the correct XCCDF and OVAL rules.
- **CVE** provides a way to reference specific vulnerabilities in security content and scan results.

These modules collectively enable SCAP tools to perform consistent and automated security assessments across diverse systems and platforms.

## How this applies to GitLab systems

At GitLab we primarily deploy our production application through containers. OpenSCAP can be ran against a wide variety of deployment options, but mainly it is ran against operating systems and container images. We run OpenSCAP against our infrastructure operating systems and container images to validate their compliance.

OpenSCAP cannot evaluate container images on it's own and requires a container engine like [Podman](https://podman.io/) to do so.

## Getting Started with OpenSCAP Compliance Scanning

1. Choose your module based on your intent (XCCDF, OVAL, CPE, CVE)
2. [Source your SCAP content](https://static.open-scap.org/openscap-1.3/oscap_user_manual.html#2.1.%20Getting%20SCAP%20content) (for example, XCCDF files are part of the `ssg` family of packages)
3. Decide on your standard (PCI-DSS, CIS, CUI, etc)
4. Check your SCAP content for the relevant OS standard file.
   1. RedHat 9 Example: `/usr/share/xml/scap/ssg/content/ssg-rhel9-ds-1.2.xml`
5. For compliance scanning, get the profile name of the standard you want to use.
   1. You can find the list within the SCAP content file using `oscap info [filename]`
      1. e.g. `oscap info /usr/share/xml/scap/ssg/content/ssg-rhel9-ds-1.2.xml`
6. put together your command and run it against your system or container image.
7. **IMPORTANT**: `oscap-podman` can only run as root (`sudo oscap-podman` or `sudo su -` then `oscap-podman`), and podman is designed to isolate container images and configurations between users. You need to pull the containers _as the root user_ or using `sudo` so that `oscap-podman` can see the container image.

**Container image example**: CIS L2 benchmark for RedHat 9 against a UBI9-minimal image using `oscap-podman`.

```bash
# COMMAND CONTAINER_IMAGE MODULE MODE --report DESIRED_REPORT_LOCATION --profile STANDARD_FROM_5 LOCATION_OF_SCAP_CONTENT_FILE

oscap-podman c8d01adc0698 xccdf eval --report /tmp/ubi9-min-scap-cis-2.html --profile xccdf_org.ssgproject.content_profile_cis /usr/share/xml/scap/ssg/content/ssg-rhel9-ds-1.2.xml

# This evaluates the container image c8d01adc0698 against the CIS benchmark that exists in ssg-rhel9-ds-1.2.xml and outputs the file to /tmp/
```

## Practical Steps

We will:

1. Setup OpenSCAP on an Ubuntu 24.04 system
2. evaluate the RedHat 9 UBI image against the CIS benchmark

### Prep the system

On an Ubuntu 24.04 system:

1. Install Podman (included in the default `apt` repositories in 24.04)
2. install `openscap-scanner openscap-utils openscap-common openscap-doc`
3. Install `ssg-base ssg-nondebian`
4. check `/usr/share/xml/scap/ssg/content` for SCAP profiles
   1. These are installed by `ssg-base` and `ssg-nondebian`
5. There is a bootstrap script [here](https://gitlab.com/dwilmoth/scap-bootstrapping/-/blob/main/scap-boostrap.sh) for ease of setup.

### SCAP Evaluation Commands

```bash
# Become root so the command works (alternatively use sudo for each command)
sudo su -
# Pull the latest container image
podman pull registry.access.redhat.com/ubi9/ubi
# check for the container image ID
podman image ls
# grab the container image ID and run your command
oscap-podman a674bd5e68d9 xccdf eval --report /tmp/ubi9-min-scap-cis-2.html --profile xccdf_org.ssgproject.content_profile_cis /usr/share/xml/scap/ssg/content/ssg-rhel9-ds-1.2.xml
# Open the final HTML file in your brower
```

## Other Points

- OpenSCAP can be used for a variety of standards and formats. For example, US Department of Defense [Security Technical Implementation Guides (STIGs)](https://public.cyber.mil/stigs/) are some of the strictest configuration standards that are publicly available. STIGs can be used with OpenSCAP.
- OpenSCAP can generate [different kinds of reports and scripts](https://static.open-scap.org/openscap-1.3/oscap_user_manual.html#_generating_reports_guides_and_scripts), not just HTML. Depending on the specific system it can generate the exact commands necessary to remediate failures.
- If JSON output is needed, [this OSCAP-JSON tool](https://github.com/manywho/oscap-json) will intake the standard output of openscap and convert it into JSON. If using an ARM architecture you will need to build it from source using `make`.
  - [This is a working example script](https://gitlab.com/dwilmoth/scap-bootstrapping/-/blob/main/bulk-benchmark-json.sh) that uses the oscap-json tool to generate JSON SCAP reports from a list of containers.

## References

- [this video](https://www.youtube.com/watch?v=nQmIcK1vvYc) from RedHat
- [Red Hat article on OpenSCAP](https://www.redhat.com/en/blog/container-vulnerabilities-openscap)
- OpenSCAP website: https://www.open-scap.org/
- The source of the `ssg` family of packages and other SCAP content: https://github.com/ComplianceAsCode/content
