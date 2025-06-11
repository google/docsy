---
title: "Information System Contingency Plan (ISCP)"
description: "Provides procedures and capabilities for recovering an information system."
---

## Purpose

An ISCP provides established procedures for the assessment and recovery of a system following a system disruption. The ISCP provides key information needed for system recovery, including roles and responsibilities, inventory information, assessment procedures, detailed recovery procedures, and testing of a system. An ISCP will be created for GitLab.com and [Tier 1 systems]({{< ref "critical-systems" >}}), working in conjunction with the [Business Continuity Plan (BCP)](/handbook/business-technology/gitlab-business-continuity-plan/) and [Disaster Recovery Plan (DRP)](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/library/disaster-recovery/index.md).

## Difference between ISCP and DRP

The ISCP differs from a DRP primarily in that the information system contingency plan procedures are developed for recovery of the system regardless of site or location. An ISCP can be activated at the system’s current location or at an alternate site. In contrast, a DRP is primarily a site-specific plan developed with procedures to move operations of one or more information systems from a damaged or uninhabitable location to a temporary alternate location. Once the DRP has successfully transferred an information system site to an alternate site, each affected system would then use its respective ISCP to restore, recover, and test systems, and put them into operation. (ref: NIST 800-34)

## Information System Contingency Policy Statement

GitLab will develop contingency plans for GitLab.com and [Tier 1 systems]({{< ref "critical-systems" >}}) to meet the needs of critical system operations in the event of a disruption. The procedures for execution of such a capability shall be documented in a formal contingency plan by the Information Systems Contingency Plan (ISCP) Coordinator and must be reviewed annually and updated as necessary by the ISCP Coordinator. The plan must account for the FIPS 199 security categorization (low, moderate, high) and comply with the appropriate security controls. The plan must assign specific responsibilities to designated staff or positions to facilitate the recovery and/or continuity of essential system functions. Resources necessary to ensure viability of the procedures must be acquired and maintained. Personnel responsible for target systems must be trained to execute contingency procedures. The plan recovery capabilities and personnel shall be tested annually to identify weaknesses of the capability.

## Roles & Responsibilities

| Role  | Responsibility |
|-----------|-----------|
| Security Compliance | The Security Compliance team will be the Information Systems Contingency Plan (ISCP) Coordinator; At least annually review the ISCP; Provide assistance in the coordination and facilitation of ISCP tests; Acts as point of contact for any external audits. |
| Application Security| Manage application vulnerability program; maintain application security tools; identify security risks.|
| Infrastructure| Responsible for infrastructure management and support.|
| Infrastructure Security| Manage infrastructure vulnerability program; maintain infrastructure security tools; identify security risks. |

## Exceptions

There are no exceptions to the ISCP.

## References

- [NIST 800-34](https://csrc.nist.gov/glossary/term/information_system_contingency_plan)
- [BCP]( https://about.gitlab.com/handbook/business-technology/gitlab-business-continuity-plan/)
- [Disaster Recovery Plan (DRP)](https://gitlab.com/gitlab-com/gl-infra/readiness/-/blob/master/library/disaster-recovery/index.md)
- [Database DR](/handbook/engineering/infrastructure/database/disaster-recovery/)
