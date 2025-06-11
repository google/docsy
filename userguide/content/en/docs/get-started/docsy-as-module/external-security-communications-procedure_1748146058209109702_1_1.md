---
title: "External Security Communications Procedure"
description: "Procedures for handling communications regarding security"
---

## Purpose

This procedure is intended to identify the Security Organization's ownership and approval on categories/topics of external communication.

## Scope

This procedure applies to external communications associated with the Security organization.

## Roles & Responsibilities

Security Owns and Approves (external communications):

1. Customer communications on security events or identified vulnerabilities
1. Security releases, regular and critical
1. All bug bounty program updates and communication
1. Customer response communications

Security shared communications efforts: Corporate Marketing reviews and approves:

1. Blog posts published through GitLab blog (vs Unfiltered Blog): corporate blog team conducts final, editorial review on security-approved blogs
1. Incident response communications: breach, customer compromise, data loss: these are usually multi-pronged responses, requiring input, review and approval from multiple corporate functions: legal, product, marketing, support, etc.
1. External notifications associated with Security certifications and initiatives such as SOC 2 and FedRAMP

Security Consult - Corporate Marketing Owned

1. Interviews / media engagement
1. Contributed articles

## Procedure

There are typically three communications areas that might warrant a Security Division response:

- New Feature. Most likely the Security Division is already involved in the process, however if specific wording is needed, ensure the Security Division is involved. It should be noted this does NOT require a Security Communications issue.
- Incident. This involves a breach, accidental disclosure of sensitive information, and so on. It typically will not involve a security flaw but more of a failure of configuration, permissions, and other similar scenario.
- Vulnerability. A security issue, such as one reported internally or via our HackerOne program, involving GitLab code or configurations.

The normal process involves making information public after an incident is contained and/or a security flaw has been fixed.

NOTE: It is quite possible that an incident will not involve public notification, due to potential confidentiality surrounding the incident. If you are unsure, follow the [GitLab SAFE Framework](/handbook/legal/safe-framework/). However if the Security Division feels that the GitLab and security communities at large could benefit, there might be a release of information such as configuration recommendations or new techniques to help secure information. This type of disclosure does not necessarily mandate a specific timeframe or requirements, but still should be performed in a timely manner.

Regardless, any release of external communications, be it a specific issue or incident, will start with a [Security Communications issue](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/issues/new) (internal link). When creating this issue, select the most appropriate template, and if you have any questions bring them up in the GitLab internal Slack channel `#security`.

There are typically three communications areas that might warrant a Security Department response:

- New Feature. Most likely the Security Department is already involved in the process, however if specific wording is needed, ensure the Security Department is involved. It should be noted this does NOT require a Security Communications issue.
- Incident. This involves a breach, accidental disclosure of sensitive information, and so on. It typically will not involve a security flaw but more of a failure of configuration, permissions, and other similar scenario. If the incident requires a public response, fill out a [Security Communications issue](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/issues/new).
- Vulnerability. A security issue, such as one reported internally or via our HackerOne program, involving GitLab code or configurations. Public communication is handled by the [Security Release Process](https://gitlab.com/gitlab-com/gl-infra/readiness/-/tree/master/library/security-releases-development). During that process, the responsible AppSec engineer will need to open a [Security Communications issue](https://gitlab.com/gitlab-com/gl-security/security-communications/communications/-/issues/new) to send communications about the security release. This is the main area where most security-related communications are generated.

Remember that it is not unusual for security-related patches to be in the regular GitLab release [every month](/handbook/engineering/releases/) as the GitLab codebase is updated continuously, but vulnerabilities are addressed in the monthly security release happens roughly one week after the regular GitLab release.

## Exceptions

Exceptions to this procedure will be tracked as per the [Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions).

## References

[Security incident communications plan](/handbook/security/security-operations/sirt/security-incident-communication-plan/)
