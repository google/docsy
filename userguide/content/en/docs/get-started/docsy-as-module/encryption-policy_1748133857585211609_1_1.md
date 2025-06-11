---
title: "Encryption Policy"
---

## Purpose

This policy is intended to outline the encryption controls and requirements at GitLab.

## Scope

This policy is applicable to the [production environment](/handbook/engineering/infrastructure/production/architecture/) and any end user devices that store such data. This also includes the [GitLab Dedicated](https://docs.gitlab.com/ee/subscriptions/gitlab_dedicated/#gitlab-dedicated) single-tenant SaaS offering.

## Roles & Responsibilities

| Role | Responsibility |
| ------ | ------ |
| GitLab Team Members | Responsible for following the requirements in this policy |
| Business or System Owners | Alignment to this policy and any related standards |
| Product Security Team | Maintain this Encryption Policy and associated standards |
| Security Management (Code Owners) | Responsible for approving significant changes and exceptions to this policy |

## Policy

### Encryption

Customer data is encrypted at rest. (SC-28)

Corporate owned endpoints are encrypted at rest. (SC-28)

Customer data is encrypted in transit. (SC-8)

### Standard

Encryption at GitLab is performed in accordance with GitLab's [Encryption Standard](https://internal.gitlab.com/handbook/security/encryption-standard) and [Cryptographic Standard](/handbook/security/standards/cryptographic-standard/)

## Exceptions

Exceptions to this procedure will be tracked as per the [Security and Technology Policy Exception Management Process](/handbook/security/security-and-technology-policy-exception/).
