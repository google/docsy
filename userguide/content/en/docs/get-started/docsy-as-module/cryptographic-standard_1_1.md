---
title: "GitLab Cryptography Standard"
description: "This is the GitLab Cryptography Standard. It outlined cryptographic choices, including algorithms as well as important settings that may be associated with the algorithms. It applies to GitLab code and well as infrastructure configuration."
controlled_document: true
---

## Purpose

The Cryptography Standard defines approved cryptographic algorithms, settings, and cryptographic modules for the purposes of encrypting data at rest or in transit within the various systems and subsystems used by the GitLab product.

The Cryptography Standard allows for a more consistent approach to cryptographic usage within GitLab, easier adaptation to industry standards and compliance frameworks (such as [FedRAMP](https://about.gitlab.com/solutions/public-sector/fedramp/)), and an overall more secure product and working environment. In addition, most of the standards are based off of recommendations from [NIST](https://www.nist.gov/) (National Institute of Standards and Technology) as many of the compliance frameworks are based off of NIST standards, and NIST consistently makes solid recommendations that are adopted by many organizations globally.

## Scope

The Cryptography Standard applies to all GitLab team members, contractors, consultants, vendors and other service providers that handle, manage, store or transmit GitLab data.

This is required for coding best practices as well as client and server configurations involving cryptography for the GitLab product itself. Currently, there are numerous efforts internally by numerous Engineering teams ensuring these standards are met and maintained. The scope includes third party modules and software settings where cryptographic settings are required. Basically if it touches GitLab or GitLab customer data, the standard applies.

## Roles & Responsibilities

| Role  | Responsibility |
|-----------|-----------|
| GitLab Team Members | Responsible for adhering to the requirements outlined in this standard |
| Security Management and Cryptographic Officer (Code Owners) | Responsible for approving significant changes and exceptions to this standard |

### GitLab Responsibilities

- GitLab team members, contractors, consultants, vendors and other service providers are required to review and understand this cryptographic standard, and how to handle encryption needs for data at rest and in transit as defined below unless otherwise noted.

### Customer Responsibilities

- GitLab customers are responsible for managing their own data, should consider these standards as highly recommended, and adopt them according to their own internal requirements. GitLab handles Customer Data internally according to our non-disclosure obligations written in our Mutual Non Disclosure Agreement, and we use the controls identified in this standard.

## Standard

### Compliance and Certification Standards

While we consider these standards to be a security baseline to improve the overall security of the GitLab product, for compliance and certification efforts we will be using the following general guidelines.

- No non-public cryptographic modules. All cryptographic modules should be open source and well maintained. This is to ensure compliance with the [Bureau of Industry (BIS) and Security's Export Administration Regulations regarding encryption](https://www.bis.doc.gov/index.php/policy-guidance/encryption).
- All cryptographic elements should work using cryptographic modules that are [FIPS 140-2](https://csrc.nist.gov/publications/detail/fips/140/2/final) certified. In other words, if the underlying cryptographic module is FIPS 140-2 certified, the code using it should function properly.
- All cryptographic choices (algorithms, etc) will adhere to [FIPS 140-3](https://csrc.nist.gov/publications/detail/fips/140/3/final) minimum standards (which superseded FIPS 140-2 on 03/22/2019), and keep in mind [NIST SP 800-53](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final) as well.
- When possible, choose quantum-resistant algorithms as an effort to help "future proof" cryptographic choices as quantum computing usage becomes more powerful and more mainstream. For more information read the section on quantum cryptography [here](#quantum-cryptography).

Meeting these standards will help meet objectives such as [FedRAMP compliance](https://about.gitlab.com/solutions/public-sector/fedramp/), but as standards such as FIPS and SP 800-53 are considered *de facto* global standards, it will help with compliance needs in multiple countries and industries.

### Cryptographic Modules

For regulatory requirements (such as FIPS), all cryptographic modules must be publicly available (open source) to ensure compliance with the [Bureau of Industry and Security's Export Administration Regulations regarding encryption](https://www.bis.doc.gov/index.php/policy-guidance/encryption). As this compliance meets international standards per the [Wassenaar Arrangement](https://www.wassenaar.org/) this should meet any requirements that might be encountered globally, should the situation arise.

The choice of cryptographic modules is important. It is possible that GitLab features that have cryptographic elements could find themselves having to meet stringent module requirements (FedRAMP standards, running in FIPS mode, etc) so adherence to specific modules is highly recommended. This includes the following:

- OpenSSL Cryptographic Module
- Linux Kernel Crypto API Cryptographic Module
- Libgcrypt Cryptographic Module

For the [gitlab-fips package](https://packages.gitlab.com/gitlab/gitlab-fips), all FIPS-validated cryptographic modules are documented on the "FIPS Compliance" Docs page, currently located [here](https://docs.gitlab.com/ee/development/fips_compliance.html#fips-compliance). This documentation must be kept up to date to maintain GitLab's FedRAMP and FIPS 140-2 compliance posture.

Note to developers and contributors, regardless of FIPS/FedRAMP compliance or not, coding should use the cryptographic modules mentioned above. Development with a non-FIPS version of the same module (e.g. `openssl-x.y.x` vs `openssl-x.y.z-fips`) is fine. The important point is to not introduce new code that is dependent on cryptographic modules that do not have a FIPS version or have written their own cryptographic implementations of algorithms.

### Algorithmic Standards

- **TLS** - [TLS](https://en.wikipedia.org/wiki/Transport_Layer_Security) versions 1.2 or 1.3 are required. TLS 1.0 and 1.1 are not allowed, despite being FIPS 140-2 compliant. FIPS 140-3 and SP 800-53 standards disallow TLS 1.0 and 1.1 explicitly, as does FedRAMP which follows those same guidelines.
  - Here are the allowed algorithms in order of preference:
    - ECDHE-ECDSA-AES256-GCM-SHA384
    - ECDHE-RSA-AES256-GCM-SHA384
    - ECDHE-ECDSA-AES128-GCM-SHA256
    - ECDHE-RSA-AES128-GCM-SHA256
    - TLS_AES_256_GCM_SHA384
    - TLS_AES_128_GCM_SHA256
  - In regards to coding practices, refer to the [secure coding guidelines](https://docs.gitlab.com/ee/development/secure_coding_guidelines.html#general-recommendations), in particular for language-specific guidelines as well as limitations.
- **Block Ciphers** - [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard). Currently AES-128 is considered the minimal, but to ensure "future proofing" AES-256 is preferred (note there are potential performance impacts depending upon application usage, etc). [GCM](https://en.wikipedia.org/wiki/Galois/Counter_Mode) is the required mode (e.g. `aes-256-gcm`).
  - *It should be noted that AES-256 is considered [quantum resistant](#quantum-cryptography), which is also another consideration for future proofing.*
  - NOTE for Laptops: For full-disk encryption XTS-AES-128 (with 256 bit key) or XTS-AES-256 (with 512 bit key) is acceptable. For both GitLab-approved laptop scenarios for team members (Apple running MacOS or a Linux-based laptop running Ubuntu) one of these two algorithms is automatically pre-chosen and is acceptable when setting up full disk encryption on a laptop.
- **Digital Signatures** - [DSA](https://en.wikipedia.org/wiki/Digital_Signature_Algorithm), [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)), and [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm). For DSA and RSA, minimum key size is 2048. For ECDSA the minimum key size is 224. It is highly recommended that we move away from DSA, as per a [draft proposal](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5-draft.pdf) it is slated to be removed as a FIPS-approved standard (see notes below re ED25519 as a possible exception to this rule).
- **Hash Functions** - The SHA-2 family of hash algorithm, with SHA-256 as the minimum. Ideally SHA-384 or higher would be better, although there might be less support particularly in third party software.
  - *It should be noted that while SHA-1 is FIPS 140-2 compliant, per [NIST SP 800-53 Rev 5 Baselines](https://csrc.nist.gov/publications/detail/sp/800-53/rev-5/final) it is not allowed.* This is per [SP-800-57](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-57pt1r5.pdf) section 5.6.1.2, [SP-800-131](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-131Ar2.pdf) section 9 table 8, and [SP-800-107](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-107r1.pdf) section 4.
  - *It should be noted that SHA-256 is considered [quantum resistant](#quantum-cryptography).*
- **MAC** - MAC ([Message Authentication Code](https://en.wikipedia.org/wiki/Message_authentication_code)) is usually implemented to authenticate messages as unaltered after transmission. A MAC is to only be used in conjunction with an approved algorithm, and with the following parameters:
  - [HMAC](https://en.wikipedia.org/wiki/HMAC), KMAC. Only with a key length equal to or greater than 112 bits.
  - [CMAC](https://en.wikipedia.org/wiki/One-key_MAC), [GMAC](https://en.wikipedia.org/wiki/Galois/Counter_Mode). Only in conjunction with AES.
- **Random Number Generation** - True random number generation is not required, but a high level of randomization is still important. The preference is to use pseudo-random number generation using `/dev/random`. While `/dev/urandom` is not as secure, historically it performed quicker on much older systems. When the underlying operating system is running in FIPS mode, calls to `/dev/urandom` are directed to `/dev/random`, and starting with Linux kernel version 5.18 both `/dev/random` and `/dev/urandom` will function the same anyway. Therefore the standard is `/dev/random`.
- **Note on Older/Alternate Algorithms** - Notes on a few other popular algorithms:
  - ED25519 - There is a draft of NIST SP 800-186 which recommends "tweaks" to some of the curve parameters used in ECDSA, and ED25519 matches those tweaks. So at some point ECDSA will be out but ED25519 will be in. For now, GitLab allows ED25519 (popular with SSH keys), this might not function at all with FIPS mode cryptographic algorithms.
  - SHA-1 - For hashing algorithms, SHA-1 is allowed for non-cryptographic functions (such as a checksum). It is not allowed for digital signature generation. For digital signature validation, SHA-1 *is* allowed. For non-digital-signature applications, SHA-1 is allowed if [collision resistance](https://en.wikipedia.org/wiki/Collision_resistance) is not required, such as an [initialization vector](https://en.wikipedia.org/wiki/Initialization_vector) of a block cipher that doesn't require randomization. For more details on SHA-1 usage, refer to [NIST SP 800-131A Rev 2](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-131Ar2.pdf), especially section 9 on hash algorithms. As SHA-1 will eventually no longer be allowed in various standards in the future, use SHA-256 whenever possible.
  - MD5 - Previously, MD5 was allowed for non-cryptographic functions. However as a result of initial audit findings from May 2, 2022 MD5 is no longer allowed, whether the function is cryptographic or not. For FIPS compliance MD5 cannot be used at all.
  - BCrypt - Currently the GitLab product uses the popular BCrypt algorithm for user account password hashing. BCrypt is not an approved FIPS 140-2 algorithm, so development engineers are looking to develop a solution using an approved algorithm. The intended target of this approved algorithm is for FIPS-mode systems such as FedRAMP. As an alternative, using SSO with MFA for authentication into GitLab will suffice, and covers a FedRAMP environment, but a more permanent solution is still being explored. **There are no plans to migrate GitLab.com users off of BCrypt**, in fact cryptographers largely agree that BCrypt is extremely secure and has a higher resistance to attack.

### Quantum Cryptography

Quantum computing allows for advanced mathematical calculations, and as quantum-based computers evolve and become more powerful, there is a danger of certain algorithms being able to be broken or "cracked" - namely a number of algorithms that use a form of factoring large numbers as a part of the cracking effort. So there is concern that when this point is reached, many cryptographic algorithms will no long be considered secure. This scenario is often referred to as "Post Quantum Cryptography", or PQC for short. Currently NIST is running a program for evaluating and testing new algorithms that will replace specific algorithms that will become insecure in a PQC world (details [here](https://csrc.nist.gov/projects/post-quantum-cryptography/)).

In preparation for this, GitLab will consider the following:

- Where possible, choose existing cryptographic algorithms that are already known to be resistant to cracking via quantum computing, commonly known as "quantum resistant".
- As new quantum resistant algorithms are announced, the [standards](#algorithmic-standards) listed above will be updated.
- As NIST updates and approves the list of algorithms that are known to be quantum resistant, GitLab will test these algorithms to ensure that we will be able to migrate to their implementation as they become standards.
- Currently, there are no *new* quantum resistant algorithms approved that are included in the FIPS 140-3 standard, although it is expected eventually there will be a new FIPS standard that will outline their use.

## Exceptions

Exceptions to this policy will be tracked as per the [Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions).

## References

- [Controlled Document Procedure]({{< ref "controlled-document-procedure" >}})
