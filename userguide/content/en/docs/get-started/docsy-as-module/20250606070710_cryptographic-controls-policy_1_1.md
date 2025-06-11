---
title: Cryptographic Controls Policy
doc_type: doc
doc_id: doc-442
last_edited_date: '2025-05-25'
last_edited_by: Ryan Laird
version: '1.0'
---

<!-- Unsupported block type: table_of_contents -->

## 1. Purpose and Scope

This policy establishes requirements for cryptographic controls to protect the confidentiality, integrity, and authenticity of Green Orbit Digital's information assets. It applies to all employees, contractors, and systems that utilize cryptographic technologies.

## 2. Approved Cryptographic Standards

### 2.1 Encryption Algorithms

- Symmetric Encryption: AES-256 or higher

- Asymmetric Encryption: RSA (minimum 2048 bits), ECC (minimum 256 bits)

- Hash Functions: SHA-256 or higher

### 2.2 Transport Layer Security

- TLS 1.2 or higher required for all secure communications

- Weak cipher suites and protocols (SSL, TLS 1.0, TLS 1.1) are prohibited

## 3. Key Management

### 3.1 Key Generation

- Cryptographic keys must be generated using approved random number generators

- Keys must meet minimum length requirements as specified in section 2.1

- Key generation must occur in secure environments

### 3.2 Key Storage

- Keys must be stored in secure, encrypted formats

- Access to cryptographic keys must be restricted based on the principle of least privilege

- Master keys must be stored in hardware security modules (HSMs) where available

### 3.3 Key Rotation

- Encryption keys must be rotated at least annually

- Keys must be immediately rotated if compromise is suspected

- Deprecated keys must be securely archived or destroyed

## 4. Data Protection Requirements

### 4.1 Data at Rest

The following data must be encrypted at rest:

- All confidential and restricted information as defined in the Data Classification Policy

- Personal data subject to GDPR and UK DPA 2018

- Authentication credentials and security tokens

- Encryption keys and certificates

### 4.2 Data in Transit

The following must be encrypted during transmission:

- All data transmitted over public networks

- Remote access connections (VPN)

- Email containing sensitive information

- File transfers containing confidential or restricted data

## 5. Implementation Requirements

- All cryptographic implementations must be performed using validated cryptographic modules

- Custom cryptographic implementations are prohibited without security review and approval

- Third-party cryptographic services must be evaluated and approved before use

- Regular testing of cryptographic implementations must be conducted

## 6. Roles and Responsibilities

Information Security Officer:

- Maintains and updates cryptographic standards

- Approves cryptographic implementations

- Oversees key management processes

IT Team:

- Implements approved cryptographic controls

- Manages key rotation and storage

- Monitors cryptographic systems

## 7. Compliance and Monitoring

- Regular audits of cryptographic implementations

- Annual review of cryptographic standards and algorithms

- Monitoring of encryption key usage and rotation

- Documentation of all cryptographic assets and processes

## 8. Version History

<!-- Unsupported block type: table -->
