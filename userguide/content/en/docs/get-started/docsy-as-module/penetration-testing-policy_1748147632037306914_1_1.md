---
title: "Penetration Testing Policy"
---

A penetration test is a process to identify security vulnerabilities in an application or infrastructure in order to evaluate the security of the system.

## Purpose

This policy is intended to outline the penetration testing controls implemented by GitLab.

## Scope

These controls apply to the applications and systems that fall within the scope of each specific penetration test.

## Roles & Responsibilities

| Role | Responsibility |
|----|-------|
| GitLab Team Members | Responsible for following the requirements in this policy |
| Security Team | Responsible for implementing and executing this policy |
| Security Management (Code Owners) | Responsible for approving significant changes and exceptions to this policy |

## Policy

### Planning

A third-party penetration test is conducted at least annually. (CA-8, SC-7(10))

GitLab utilizes a reputable third-party penetration testing firm to conduct the penetration test. (CA-8(1))

A scope and testing methodology is determined for each penetration test. (CA-8)

Objectives and goals are established prior to the start of each test. (CA-8)

### Execution

Penetration tests are performed in accordance with the scope and methodology established during the planning phase. (CA-8)

### Reporting

Penetrationn test results are documented and distributed to appropriate team members.

### Remediation

Findings from penetration tests are assessed and addressed in accordance with GitLab's [Vulnerability Management Standard](vulnerability-management) (SI-2, RA-5)

### Retests

Retests may be performed to validate changes made during the remediation phase. (CA-8)

## Standard

For further details, please review GitLab's [Penetration Testing Standard](https://internal.gitlab.com/handbook/security/penetration-testing-standard).

## Exceptions

Exceptions to this policy will be tracked as per the [Security and Technology Policy Exception Management Process](/handbook/security/security-and-technology-policy-exception/).
