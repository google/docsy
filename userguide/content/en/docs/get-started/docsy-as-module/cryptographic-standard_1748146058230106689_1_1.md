---
title: "GitLab Cryptography Standard"
description: "This is the GitLab Cryptography Standard. It outlined cryptographic choices, including algorithms as well as important settings that may be associated with the algorithms. It applies to GitLab code and well as infrastructure configuration."
aliases:
- /handbook/security/cryptographic-standard
note: Do not remove alias due to extensive external use where it cannot be updated.
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
- All product development shall include support for GitLab's FIPS releases, following the patterns specified in the [FIPS development documentation](https://docs.gitlab.com/ee/development/fips_compliance.html) on the roadmap. New features that are not leveraging underlying FIPS-validated cryptographic modules cannot be made available to customers who use our FIPS releases or Dedicated for Government offering. They should be disabled by default behind a feature flag or, if not possible, an option to disable the feature entirely.
- All cryptographic choices (algorithms, etc) will adhere to [FIPS 140-3](https://csrc.nist.gov/pubs/fips/140-3/final) minimum standards (which superseded FIPS 140-2 on 03/22/2019), and keep in mind [NIST SP 800-53](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) as well.
- When possible, choose quantum-resistant algorithms as an effort to help "future proof" cryptographic choices as quantum computing usage becomes more powerful and more mainstream. For more information read the section on quantum cryptography [here](#quantum-cryptography).

Meeting these standards will help meet objectives such as [FedRAMP compliance](https://about.gitlab.com/solutions/public-sector/fedramp/), but as standards such as FIPS and SP 800-53 are considered *de facto* global standards, it will help with compliance needs in multiple countries and industries.

### Cryptographic Modules

For regulatory requirements (such as FIPS), all cryptographic modules must be publicly available (open source) to ensure compliance with the [Bureau of Industry and Security's Export Administration Regulations regarding encryption](https://www.bis.gov/articles/encryption-and-export-administration-regulations-ear). As this compliance meets international standards per the [Wassenaar Arrangement](https://www.wassenaar.org/) this should meet any requirements that might be encountered globally, should the situation arise.

The choice of cryptographic modules is important. It is possible that GitLab features that have cryptographic elements could find themselves having to meet stringent module requirements (FedRAMP standards, running in FIPS mode, etc) so adherence to specific modules is highly recommended. This includes the following:

- OpenSSL Cryptographic Module
- Linux Kernel Crypto API Cryptographic Module
- Libgcrypt Cryptographic Module

For the [gitlab-fips package](https://packages.gitlab.com/gitlab/gitlab-fips), all FIPS-validated cryptographic modules are documented on the "FIPS Compliance" Docs page, currently located [here](https://docs.gitlab.com/ee/development/fips_compliance.html#fips-compliance). This documentation must be kept up to date to maintain GitLab's FedRAMP and FIPS 140-2 compliance posture.

Note to developers and contributors, regardless of FIPS/FedRAMP compliance or not, coding should use the cryptographic modules mentioned above. Development with a non-FIPS version of the same module (e.g. `openssl-x.y.x` vs `openssl-x.y.z-fips`) is fine. The important point is to not introduce new code that is dependent on cryptographic modules that do not have a FIPS version or have written their own cryptographic implementations of algorithms. A list of FIPS-certified cryptographic modules can be found [here](https://csrc.nist.gov/projects/cryptographic-module-validation-program/validated-modules/search/all).

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
  - [ML-KEM](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.203.pdf) is a NIST-approved quantum safe algorithm. Specifically ML-KEM-768 is recommended. Just note that ML-KEM can only be used in a FIPS environment if it is using a FIPS-certified cryptographic module. For more information see [this section](#quantum-cryptography).
- **Block Ciphers** - [AES](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard). Currently AES-128 is considered the minimal, but to ensure "future proofing" AES-256 is preferred (note there are potential performance impacts depending upon application usage, etc). [GCM](https://en.wikipedia.org/wiki/Galois/Counter_Mode) is the required mode (e.g. `aes-256-gcm`).
  - *It should be noted that AES-256 is considered [quantum resistant](#quantum-cryptography), which is also another consideration for future proofing.*
  - NOTE for Laptops: For full-disk encryption XTS-AES-128 (with 256 bit key) or XTS-AES-256 (with 512 bit key) is acceptable. For both GitLab-approved laptop scenarios for team members (Apple running MacOS or a Linux-based laptop running Ubuntu) one of these two algorithms is automatically pre-chosen and is acceptable when setting up full disk encryption on a laptop.
- **Digital Signatures** - [RSA](https://en.wikipedia.org/wiki/RSA_(cryptosystem)), [ECDSA](https://en.wikipedia.org/wiki/Elliptic_Curve_Digital_Signature_Algorithm), and [EdDSA](https://en.wikipedia.org/wiki/EdDSA#Ed25519). For RSA, the minimum key size is 2048. For ECDSA the minimum key size is 224. Ed25519 and Ed448 are now both approved algorithms if the underlying crypto module has included it in its certification, *however at this time our OpenSSL implementation does not certify it*.
  - [ML-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.204.pdf) is a NIST-approved quantum safe algorithm. Specifically ML-DSA-65 with a random seed of 256 bits is recommended. Just note that ML-DSA can only be used in a FIPS environment if it is using a FIPS-certified cryptographic module. For more information see [this section](#quantum-cryptography).
  - [SLH-DSA](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.205.pdf) is a NIST-approved quantum safe algorithm. SLH-DSA's strength lies in functioning as a replacement of digital signatures based only on known-strong hash function design. It replaces stateful hash-based signatures such as LMS and XMSS with a probabilistic construction and does not rely on math such as discrete log or lattices. Just note that SLH-DSA can only be used in a FIPS environment if it is using a FIPS-certified cryptographic module. For more information see [this section](#quantum-cryptography). Generally **ML-DSA is preferred** to SLH-DSA except for applications with a long time-horizon or tight hardware constraints (such as embedded contexts).
- **Hash Functions** - The SHA-2 family of hash algorithm, with SHA-256 as the minimum. Ideally SHA-384 or higher would be better, although there might be less support particularly in third party software.
  - *It should be noted that while SHA-1 is FIPS 140-2 compliant, per [NIST SP 800-53 Rev 5 Baselines](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final) it is not allowed.* This is per [SP-800-57](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-57pt1r5.pdf) section 5.6.1.2, [SP-800-131](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-131Ar2.pdf) section 9 table 8, and [SP-800-107](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-107r1.pdf) section 4.
  - *It should be noted that SHA-2-256+ and SHA-3-256+ are considered [quantum resistant](#quantum-cryptography).*
- **MAC** - MAC ([Message Authentication Code](https://en.wikipedia.org/wiki/Message_authentication_code)) is usually implemented to authenticate messages as unaltered after transmission. A MAC is to only be used in conjunction with an approved algorithm, and with the following parameters:
  - [HMAC](https://en.wikipedia.org/wiki/HMAC), KMAC. Only with a key length equal to or greater than 112 bits.
  - [CMAC](https://en.wikipedia.org/wiki/One-key_MAC), [GMAC](https://en.wikipedia.org/wiki/Galois/Counter_Mode). Only in conjunction with AES; **HMAC is generally preferred** to CMAC. GMAC should not be used for general purposes.
- **Random Number Generation** - True random number generation is not required, but a high level of randomization is still important. The preference is to use pseudo-random number generation using `/dev/random`. While `/dev/urandom` is not as secure, historically it performed quicker on much older systems. When the underlying operating system is running in FIPS mode, calls to `/dev/urandom` are directed to `/dev/random`, and starting with Linux kernel version 5.18 both `/dev/random` and `/dev/urandom` will function the same anyway. Therefore the standard is `/dev/random`.
- **Password Hashes** - Currently the GitLab product uses the popular Bcrypt algorithm for user account password hashing by default. Bcrypt is not an approved FIPS 140-2 algorithm, so development engineers have added support for PBKDF2+SHA512 starting with GitLab version 15.2 via feature flags, and starting with 15.6 it is available when FIPS-mode is enabled. More details are available [here](https://docs.gitlab.com/ee/security/password_storage.html#password-storage). [Key stretching](https://en.wikipedia.org/wiki/Key_stretching) is used for both algorithms, with Bcrypt's factor set to 10 (there are [plans](https://gitlab.com/gitlab-org/gitlab/-/issues/222481) to increase this) and PBKDF2+SHA512's factor set to 20,000. Passwords should be salted with a unique [salt](https://en.wikipedia.org/wiki/Salt_%28cryptography%29) using one of the approved cryptographic one-way hashes above before Bcrypt or PBKDF2+SHA512 are used, as this will further strengthen the password hash against brute force and dictionary style attacks.
- **Note on Older/Alternate Algorithms** - Notes on a few other popular algorithms:
  - DSA is **no longer** an approved algorithm per [FIPS 186-5](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf) and is largely regarded as a weak cipher.
  - SHA-1 - For hashing algorithms, SHA-1 is allowed for non-cryptographic functions (such as a checksum). It is not allowed for digital signature generation. For digital signature validation, SHA-1 *is* allowed. For non-digital-signature applications, SHA-1 is allowed if [collision resistance](https://en.wikipedia.org/wiki/Collision_resistance) is not required, such as an [initialization vector](https://en.wikipedia.org/wiki/Initialization_vector) of a block cipher that doesn't require randomization. For more details on SHA-1 usage, refer to [NIST SP 800-131A Rev 3](https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-131Ar3.ipd.pdf), especially section 9 on key derivation methods. As SHA-1 will eventually no longer be allowed in various standards in the future, use SHA-256 whenever possible.
  - MD5 - Previously, MD5 was allowed for non-cryptographic functions. However as a result of initial audit findings from May 2, 2022 MD5 is no longer allowed, whether the function is cryptographic or not. For FIPS compliance MD5 cannot be used at all.

### Quantum Cryptography

Quantum computing allows for advanced mathematical calculations, and as quantum-based computers evolve and become more powerful, there is a danger of certain algorithms being able to be broken or "cracked" - namely a number of algorithms that use a form of factoring large numbers as a part of the cracking effort. So there is concern that when this point is reached, many cryptographic algorithms will no long be considered secure. This scenario is often referred to as "Post Quantum Cryptography", or PQC for short. This differs from Quantum Cryptography: the former runs on present computing hardware while the latter requires specialized quantum-aware hardware (sometimes also referred to as quantum key distribution (QKD)). Use of Quantum Cryptography is not recommended as part of this document.

In preparation for adopting the new [NIST PQC Algorithms](https://csrc.nist.gov/projects/post-quantum-cryptography), GitLab will consider the following:

- Where possible, choose existing cryptographic algorithms that are already known to be resistant to cracking via quantum computing, commonly known as "quantum resistant".
- As new quantum resistant algorithms are finalized into NIST standards, the [standards](#algorithmic-standards) listed above will be updated.
- GitLab will begin testing these algorithms (ML-DSA, SLH-DSA, and ML-KEM) to ensure that we will be able to migrate to their implementation as more adoption occurs.
- As of August 13, 2024 NIST published the final versions of [FIPS 203](https://csrc.nist.gov/pubs/fips/203/final), [FIPS 204](https://csrc.nist.gov/pubs/fips/204/final), and [FIPS 205](https://csrc.nist.gov/pubs/fips/205/final). Currently the quantum safe algorithms referenced in these standards are approved for use. Ensure that any use of these algorithms in a FIPS environment are using FIPS certified cryptographic modules. Quantum safe cryptographic modules do exist (such as [liboqs](https://openquantumsafe.org/liboqs/) and [OpenSSL 3.5.0](https://openssl-library.org/post/2025-04-08-openssl-35-final-release/)), but as of April 2025 none of the existing quantum safe cryptographic modules are FIPS certified.

## Exceptions

Exceptions to this policy will be tracked as per the [Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions).

## References

- [Controlled Document Procedure](/handbook/security/controlled-document-procedure/)
