---
title: "Encryption Policy"
controlled_document: true
---

Encryption is a process in which data is encoded so that it remains hidden from or inaccessible to unauthorized users. It helps securely protect data that you don't want anyone to have access to. By encrypting our data at rest and in transit, we can better protect private, proprietary and sensitive data and can enhance the security of communication between client applications and servers.

## Scope

This control is applicable to the [production environment](/handbook/engineering/infrastructure/production/architecture/) and any end user devices that store such data. The production environment includes all endpoints and cloud assets used in hosting GitLab.com and its subdomains. This also includes the [GitLab Dedicated](https://docs.gitlab.com/ee/subscriptions/gitlab_dedicated/#gitlab-dedicated) single-tenant SaaS offering. This may also include third-party systems that support the business of GitLab.com.

### Note on Scope

This control does not define security access controls, standards that may apply differently to data depending on what type of data it is, or recommendations on cryptographic settings for encryption. Those are managed in other documents. Refer to the [GitLab Security Compliance Controls]({{< ref "sec-controls" >}}), the [Data Classification Standard]({{< ref "data-classification-standard" >}}), and the [GitLab Cryptography Standard]({{< ref "cryptographic-standard" >}}) respectively.

## Roles & Responsibilities

| Role | Responsibility |
| ------ | ------ |
| GitLab Team Members | Responsible for following the requirements in this policy |
| Business or System Owners | Alignment to this policy and any related standards |
| Product Security Team | Maintain this Encryption Policy and associated standards |
| Security Management (Code Owners) | Responsible for approving significant changes and exceptions to this policy |

## Procedure

### Encryption at Rest

Data at rest is defined as data that is physically stored and not actively moving from one location to another (i.e.: device to device or network to network). This includes data stored on laptops, flash drives and hard drives.

**Encryption Method**

GitLab encrypts data at rest using a variety of tools including:

- Utilizing [Google Cloud’s Technology](https://cloud.google.com/security/encryption-at-rest) which encrypts data at rest by default. Encryption keys are centrally managed by Google using Google's [Cloud Key Management](https://cloud.google.com/security-key-management#section-2) feature. GitLab is responsible for basic key configuration including assigning key ring location and key rotation cadence.
- Utilizing AWS encryption at rest features for [EBS volumes](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSEncryption.html), [RDS instances](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Overview.Encryption.html), and [S3 buckets](https://docs.aws.amazon.com/AmazonS3/latest/userguide/bucket-encryption.html). [AWS KMS](https://aws.amazon.com/kms/) is used to create and manage cryptographic keys specific to AWS services/resources and are secured using hardware security modules (HSMs) that have been validated under FIPS 140-2.
- Company laptops are encrypted per the [laptop or desktop system configuration](/handbook/business-technology/end-user-services/onboarding-access-requests/#full-disk-encryption)
- Conducting [Third Party Risk Management activities]({{< ref "third-party-risk-management" >}}) which includes a review of encryption methods utilized by our third party vendors where applicable.

### Encryption in Transit

Data in transit is defined as data that is actively moving from one location to another (i.e: device to device or network to network). This includes data transferred over public networks such as the internet.

**Encryption Method**

GitLab encrypts data in transit using a variety of tools including:

- TLS Strict (SSL-Only Origin Pull), Always Use HTTPS, Universal SSL enabled through [Cloudflare](https://about.gitlab.com/blog/2020/01/16/gitlab-changes-to-cloudflare/)
- Utilizing [Google Cloud’s Technology](https://cloud.google.com/security/encryption-in-transit) which encrypts data in transit by default. Encryption keys are centrally managed by Google using Google's [Cloud Key Management](https://cloud.google.com/security-key-management#section-2) feature. GitLab is responsible for basic key configuration including assigning key ring location and key rotation cadence.
- Utilizing AWS default capabilities which encrypts all network traffic between AWS data centers at the physical layer and all traffic at the network layer within a VPC and between peered VPCs where applicable and when using supported Amazon EC2 instance types.
- Conducting [Third Party Risk Management activities]({{< ref "third-party-risk-management" >}}) which includes a review of encryption methods utilized by our third party vendors where applicable.

### Rolling your own Crypto

Please don’t roll your own crypto. If you really think you have a situation where it makes sense to do this, please don’t. If you really think this is a good idea, it is still not and please don't. If you’re absolutely sure you have an edge case where this makes sense, please engage with the GitLab Security Team first so they can work with you on finding an alternative.

## Exceptions

Exceptions to this procedure will be tracked as per the [Information Security Policy Exception Management Process](https://gitlab.com/gitlab-com/gl-security/security-assurance/security-compliance-commercial-and-dedicated/exceptions/-/issues/new?issuable_template=exception_request).

## References

- Parent Policy: [Information Security Policy](/handbook/security/controlled-document-procedure)
- [GitLab Security Compliance Controls]({{< ref "sec-controls" >}})
- [Data Classification Standard]({{< ref "data-classification-standard" >}})
- [GitLab Cryptography Standard]({{< ref "cryptographic-standard" >}})
