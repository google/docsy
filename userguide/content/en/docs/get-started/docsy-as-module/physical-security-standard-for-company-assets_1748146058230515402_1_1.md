---
title: "Physical Security Standard for Company Assets"
aliases:
- /handbook/security/physical-security-standard-for-company-assets
note: Do not remove alias due to extensive external use where it cannot be updated.
controlled_document: true
---

## Purpose

This document defines asset management measures and requirements to support the protection of information assets in GitLab's all remote environment. The measures and requirements noted within the standard are designed to create a secure infrastructure, work environment, and protect sensitive information from physical threats.

## Scope

This standard applies to all GitLab team-members, contractors, advisors, and contracted parties interacting with GitLab computing resources and accessing company or customer data.

## Roles & Responsibilities

| Role | Responsibility |
|----|-------|
| Security Assurance | Responsible for implementing and executing this standard |
| Security Assurance Management (Code Owners) | Responsible for approving significant changes and exceptions to this standard |
| Team Members, Contractors, Advisors, Contracting Parties | Responsible for adhering to the 'Physical Devices and Location' requirements of this standard |

## Overview

As an all remote company, physical protection of information assets can be broken out into a defined "security zone". Security zones are defined as requirements for the handling of information assets in their physical location.

GitLab has two distinct security zones:

### Infrastructure (for SaaS products)

- Hosted and physically secured by third party service provider(s)
- [Shared responsibility model](/handbook/security/isms/#assets)
- Adherence to physical security requirements reviewed annually as part of the Third Party Risk Management (TPRM) review and Complementary User Entity Controls (CUEC) review. This includes confirmation that independent third parties attest to effective physical security procedures including but not limited to:

  - Visitor Management
  - Premises Protection
  - Environmental Securities
  - Access Management

### Physical Devices and Location

- Laptops are protected through [Endpoint Management Procedures](https://internal.gitlab.com/handbook/it/endpoint-tools/) and secured through system configurations defined in the [IT Security - System Configurations handbook page](https://internal.gitlab.com/handbook/it/it-security/system-configuration/) which include, but are not limited to:

  - Passwords
  - Screen timeout
  - Encryption
  - Endpoint detection and response

- GitLab implements a [Zero Trust architecture](/handbook/security/product-security/security-platforms-architecture/security-architecture/zero-trust.md) that complements physical security measures by requiring authentication and authorization for all resource access, regardless of device location.

- Implement [Clear Desk/Clear Screen](https://internal.gitlab.com/handbook/it/it-security/system-configuration/#clean-deskclear-screen) requirements.

- Ensure devices are not left unattended in public areas and are locked when not in use. [Activate a screensaver with password lock, lock the desktop, close the lid](https://internal.gitlab.com/handbook/it/it-security/system-configuration/#laptop-or-desktop-system-configuration).

- Personal mobile phone and tablet usage [must be passcode protected](/handbook/people-group/acceptable-use-policy/#personal-mobile-phone-and-tablet-usage).

- Sensitive data should not be stored on removable storage devices, such as USB drives or external hard drives. External storage devices on company assets [is not sanctioned](/handbook/people-group/acceptable-use-policy/#use-of-external-media-on-company-assets).

- Printing documents containing sensitive information as defined by the [Data Classification Standard](/handbook/security/standards/data-classification-standard/) is prohibited.

- [Secure your data during travel](/handbook/finance/travel/#secure-your-data-during-travels) ensuring that you are in a secure place and no-one can hear you when you are talking about restricted data, and locking your device when it is not in use.

- Do not bring company-owned devices to [embargoed countries](/handbook/sales/#export-control-classification-and-countries-we-do-not-do-business-in) without consulting the Legal Department.

## Exceptions

Exceptions to this procedure will be tracked as per the [Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions).

## References

- [Internal Acceptable Use Policy](/handbook/people-group/acceptable-use-policy/)
- [IT Security System Configuration](https://internal.gitlab.com/handbook/it/it-security/system-configuration/)
- [Information Security Management System](/handbook/security/isms/)
