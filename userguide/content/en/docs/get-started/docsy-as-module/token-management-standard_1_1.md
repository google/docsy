---
title: "GitLab Token Management Standard"
description: "This is the GitLab Token Management Standard. It defines approved GitLab token usage, and distribution for the purposes of providing authentication and authorization within various systems and subsystems used by GitLab."
controlled_document: true
---

## Purpose

The Token Management Standard defines approved GitLab token usage, settings, and distribution for the purposes of providing authentication and authorization within the various systems and subsystems used by the GitLab product.

For some elements of this standard, there will be technology, techniques, settings, and variations thereof being referenced that are currently not implemented. In those cases, this standard is meant to provide specific guidance for future development and implementation.

The Token Management Standard allows for a more consistent approach to token usage within GitLab, easier adaptation to industry standards and compliance frameworks (such as FedRAMP), and an overall more secure product and working environment. In addition, most of the standards are based off recommendations from NIST (National Institute of Standards and Technology) as many of the compliance frameworks are based on NIST standards, and NIST consistently makes solid recommendations that are adopted by many organizations globally.

## Scope

The Token Management Standard applies to all GitLab team members, contractors, consultants, vendors, and other service providers that handle, manage, store or transmit GitLab data.

This is required for coding best practices as well as account and authenticator management involving tokens for the GitLab product itself. Basically, if it touches GitLab or GitLab customer data, the standard applies.

## Roles & Responsibilities

| Role | Responsibility |
| ---- | -------------- |
| GitLab Team Members | Responsible for adhering to the requirements outlined in this standard |
| Security Management and Cryptographic Officer | Responsible for approving changes and exceptions to this standard |
| DRI for Token(s) | Reviews and approval authority for all Owner, and Maintainer role assignments |
| Management | Review and approval authority for all Group and Project memberships |
| Group Owners, Group Maintainers, Project Owners, Project Maintainers | Group and Project account management, and token management duties including but not limited to creating, revoking, and monitoring the use and distribution of Group, Project, Deploy, and Runner Token objects |

### GitLab Responsibilities

GitLab team members, contractors, consultants, vendors and other service providers are required to regularly review and understand this Token Management Standard, and how to request, approve, distribute, use and protect GitLab tokens to maintain security. This document is subject to be updated at any time, the aforementioned people are responsible for tracking changes.

### Customer Responsibilities

GitLab customers are responsible for managing their own accounts and tokens, should consider these standards as highly recommended, and adopt them according to their own internal requirements. GitLab handles Customer Data internally according to our non-disclosure obligations written in our Mutual Non-Disclosure Agreement, and we use the controls identified in this standard.

## Standard

### Compliance and Certification Standards

#### General Assumptions

- The standard is currently not fully implemented within the GitLab product, but will help guide future development to achieve the standard.
- The standard meets all relevant compliance needs (e.g. FedRAMP requirements).
- Personal Access Tokens (PATs) will be highly discouraged within the GitLab production environment, and disallowed/disabled wherever possible. Existing tokens shall remain, but additional issuance will not be permissible/possible.
- Many of the tokens can be disabled, and within certain environments (e.g. FedRAMP) they will have to be unless they can meet creation, usage, storage and access standards as defined below.
- The main facilitator of the data being created and used within the GitLab environment will be referred to as the Site Administrator `**`.

### Token and Account Management

1. Due to the nature of the GitLab application, and the ability of a malicious actor that has access to a GitLab instance to cause damage to information contained in the instance, account type definitions are necessary. A GitLab instance has both privileged and non-privileged accounts within the application. This privilege level is independent of the general system wide account privilege level. GitLab application accounts are of the “Development” account type. To further differentiate within the “Development” account type there are privileged and non-privileged accounts. ((AC-2(a), AC-2(7) `*`).  Roles associated with tokens:
| Role | Privilege state |
| ---- | --------------- |
| Site Administrator [`**`](#references) | Privileged |
| Developers [`***`](#references) | Both privileged and non-privileged, depending on specific roles |
| Group Owner | Privileged |
| Group Maintainer | Privileged |
| Project Owner | Privileged |
| Project Maintainer | Privileged |
| Group Developer | Non-privileged |
| Group Reporter | Non-privileged |
| Group Guest | Non-privileged |
| Project Developer | Non-privileged |
| Project Reporter | Non-privileged |
| Project Guest | Non-privileged |
1. All assignments of the Group Owner, Group Maintainer, Project Owner, Project Maintainer roles must be limited, documented, and approved by the Site Administrator ([AC-2(i), AC-5, IA-4 `*`](#references)).
1. All Impersonation tokens must be approved by the Site Administrator ([AC-5 `*`](#references)).
1. All Group and Project membership must be approved by the respective Group and Project Owners ([AC-5 `*`](#references)). All existing Group and Project memberships will be reviewed semiannually, and membership that is no longer appropriate will be removed ([AC-2(j), AC-2(7) `*`](#references)).
1. All registered Runners will be reviewed semiannually, and any unnecessary instances will be removed.
1. Group and Project Maintainer and Owner roles assume and share the responsibilities of "Account Managers" for their respective Groups or Projects including but not limited to token approval, creation, revocation, usage monitoring ([AC-2(b)(e)(f)(g) `*`](#references)). These roles are identified here as they can create tokens at the Group and Project level. This is essentially account creation as the creation of a token is also the creation of the associated bot account.
1. All Group, Project, Runner Registration, and Deploy tokens must be approved by an Account Manager. ([AC-2(c)(d)(e) `*`](#references))
1. To allow for the possibility of small teams and personnel having two roles, but still maintain a level of process integrity, account managers should enlist other account managers for token creation and reporting. An Account Manager may not approve their own token ([AC-5 `*`](#references)).
1. A log or inventory of active tokens will be maintained by Account Managers for each group. (This will be a heavy administrative lift for large teams that issue many tokens.)
1. Account Managers will review token usage and revoke any unnecessary or unused tokens at least monthly ([AC-2(j), AC-2(3) `*`](#references)).
1. Account Managers will revoke any token reported as compromised by the token holder ([AC-2(12) `*`](#references)).
1. GitLab supervisors/GitLab customers will notify all Group owners of employment status changes that may require adjustment in rights and permissions ([AC-2(h) `*`](#references)).
1. Group and project tokens will be revoked when a member leaves the group or project for termination or reassignment ([AC-2(h) `*`](#references)).
1. Storage of tokens outside the GitLab environment must have suitable protection at a level equal to or greater than the Group or Project the token provides access to ([IA-5(6) `*`](#references)).

### Token Creation and Distribution

1. Sharing and distribution of tokens will be limited, and must include documentation, and identity verification of who the token is being distributed to ([IA-5(a) `*`](#references)).
1. GitLab team members will not distribute tokens to non-team members ([AC-21, AC-22 `*`](#references)).
1. Token names will include the Group/Project name, and the creation date (YYYYMMDD) ([IA-2, IA-5(b) `*`](#references)).
1. Tokens will be created with the minimum role and scope necessary to perform the desired task(s) ([AC-6 `*`](#references)).
1. Tokens will never be created with the Maintainer or Owner role ([AC-6 `*`](#references)).
1. Tokens will be created with the shortest reasonable expiration time to accomplish the desired task, but in all cases shall have expiration date not to exceed: ([AC-2(3) `*`](#references))
    - Personal Access Tokens - 30 days
    - Group Tokens – 1 year
    - Project Tokens – 1 year
    - Deploy tokens – 72 hours
    - Deploy keys – 72 hours
    - Impersonation Tokens – 24 hours
    - Runner Tokens – 1 year
    - Runner Registration Keys – 72 hours
1. The "random" part of a token (excluding prefixes and other additions) will be generated using a [FIPS-certified and cryptographically-approved algorithm]({{< ref "cryptographic-standard" >}}).

### Token Storage

1. Storage of a token must be secure. It needs to be encrypted. Recommended methods include usage of a security vault or a key management system. For cloud or self-managed environments this can include Hashicorp Vaults Pro, Amazon KMS or Google Secret Manager. For local (e.g. laptop) storage, encryption is still required, using a password manager is recommended (e.g. 1Password). Copies or backups of tokens must NOT be stored in configuration files, text files, and other plaintext storage methods.

### Token Compromises

1. Compromised tokens must be mitigated immediately. As compromised tokens can lead to various dangers such as disclosure of sensitive data, unauthorized access, and even privilege escalation in some cases, any compromise must be taken seriously. At GitLab the standard is for immediate revocation of the token followed by an investigation to assess potential impact. It is understood that immediate revocation of a compromised token may break existing access and automation. This impact is typically much smaller than the risk associated with a valid token being used by a malicious actor. As it is possible to automate some of the detection methods to assist in detecting a compromised token, these automated detection methods should also include the capability to automate the revocation as well.
1. All methods, procedures, notifications, and automations for mitigating a compromised token need to be fully documented. At GitLab any changes to any processes need to be approved by the Security Department, specifically [SIRT]({{< ref "sirt" >}}). Major changes (e.g. potential impact to production) need to be communicated in advance to all relevant parties.

### Token Logging and Auditing

1. The lifecycle of a token (creation, attributes, usage, and deletion) must be logged for auditing purposes.
1. The logging of token activities can be stored "locally" in limited quantities, but backup/offsite storage is recommended.
1. With logging, the token value itself must remain hidden or masked to prevent token compromise.

### Token Use

1. Any code developed to use tokens must include documentation which contains the following:
    - A methodology for the periodic replacement of the token.
    - The required scope (permissions) for a replacement token.
    - Identify what task the token is intended to perform (application, process, function call name).
1. Token use must be logged by the code triggering the token authentication ([AC-6(9) `*`](#references)). Log events will include at a minimum:
    - Successful or unsuccessful token authentication.
    - What object, process or function the token accessed.
    - Any changes performed by the token.
    - Data access, changes or deletions performed by the token.
    - Date and time.
    - The object, function or process that utilized the token.
    - What account activated the token usage.
1. GitLab team members given possession of tokens will maintain control and protection of those tokens and notify Account Managers if it is believed that a token is corrupted or has been compromised in some way.
1. Production and development environments require the use of different tokens. Tokens will not be shared between environments.

## Exceptions

Exceptions to this policy will be tracked as per the [Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions) and currently, potential exceptions need the permission of Security Assurance.

## References

- [Controlled Document Procedure]({{< ref "controlled-document-procedure" >}})

`*` The references (e.g. "AC-2(a)") are detailed in [NIST SP 800-53 Rev. 5](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final).

`**` The role of "administrator" or "site administrator" implies the main responsible overseer of the GitLab instance. Within GitLab SaaS this is known as the Owner. In a self-managed instance and Dedicated this is the Admin.

`***` Developer implies coding, but any "developers" of projects that require tokens for various automation purposes are considered "developers" in this context.
