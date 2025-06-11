---
title: GitLab Password Standards
controlled_document: true
---

## Purpose

This document outlines information security password standards intended to protect GitLab information systems and other resources containing confidential (Red and Orange) GitLab data from unauthorized use, where technically feasible.

## Scope

Applies to all GitLab team members, contractors, advisors, and contracted parties interacting with GitLab computing resources and accessing confidential data.

## Roles & Responsibilities

| Role  | Responsibility |
|-----------|-----------|
| GitLab Team Members | Responsible for adhering to the requirements outlined in this standard |
| Security | Responsible for defining and monitoring implementation of these standards for critical applications |
| Security Management (Code Owners) | Responsible for approving significant changes and exceptions to these standards |

## Standard

Constructing secure passwords and ensuring proper password management is essential. GitLab's password standards are based, in part, on the recommendations by [NIST 800-63B](https://pages.nist.gov/800-63-3/sp800-63b.html). To learn what makes a password truly secure, read this [article](https://medium.com/peerio/how-to-build-a-billion-dollar-password-3d92568d9277) or watch this [conference presentation](https://www.youtube.com/watch?v=vudZnjp5Uq0&t=19183) on password strength.

### Password Requirements

- Minimum Length = 12 characters
- Special Characters = No
- Password Reuse = No
- Password expiration = No
- Multi-factor authentication (MFA) = Yes, whenever possible

To make a secure password you can remember, consider using a [combination of 5 or more random words](https://medium.com/peerio/how-to-build-a-billion-dollar-password-3d92568d9277#67c2). Security questions like "What is your favorite color? What is your mother's maiden name?", etc should be answered with a random non-obvious word or set of words. You can [generate answers in 1Password](/handbook/security/#1password-guidelines) and store them as a note. This helps ensure the answer isn't easily guessable and will be unique across different sites.

### Password Management

- Passwords are to be kept private and secured.
- Individual account passwords are not to be shared.
- Passwords are not to be stored in clear text or be written down.
- Password "hints" are not to be used. If a password is forgotten, a mechanism must be in place to replace a password/passphrase with sufficient controls to verify the identity of the requester of the password reset.
- Passwords must be stored in a way that is resistant to offline attacks and must be salted and hashed using a suitable one-way key derivation function.
- If a password is required to be stored, it must be stored within an approved password manager application and may be pasted from this using a master password function (e.g. 1Password).
- If an account or password is suspected to have been compromised, immediately report the incident to Security and promptly follow instructions.

### System Password Configuration Requirements

- For systems where a password can be configured the minimum password length needs to be set to 12 characters.
- If a particular system will not support 12 character passwords, then the maximum number of characters allowed by that system shall be used.
- The use of special characters is not required or even recommended.
- If a particular system requires a password history, configuration should be set for 25 remembered passwords.
- Passwords are not acceptable if they match the subsequent patterns, and must be checked against commonly used or expected patterns, including: known breached password lists, dictionary words, repetitive or sequential characters, or context specific words such as the name of the service, username, or derivatives thereof.
- System administrators of applications and/or devices must change default passwords.
- System administrators need to enable password strength on third party applications and/or tools, where applicable.
- For applications where a password is the only source of authentication, a password must be expired within a maximum of 90 calendar days.
- Systems should monitor and log failed login attempts.
- Information related to authentication failed login attempts need to be recorded within the application logs if technically feasible; such as: name, date, number of failed attempts, unique log identifier.
- Repeated failed login attempts need to trigger a temporary account lockout after 10 failed attempts. If the particular system will not support lockout after 10 attempts or less, the lockout needs to be configured to the minimum value allowed by the system. The lockout may end after a designated period of time, or require a manual unlock, depending on the profile of the application.
- Enforce [Two Factor Authentication](https://en.wikipedia.org/wiki/Multi-factor_authentication) (2FA) whenever possible.

#### Two Factor Authentication (MFA or 2FA)

All GitLab team members are required to use [Two Factor Authentication](https://www.cisa.gov/resources-tools/resources/multifactor-authentication-mfa#) (2FA) whenever possible. Usage of 2FA by GitLab team members is **required** for access to the production environment. It should be noted that references to MFA (Multi-Factor Authentication) are often included in language associated with third party products and certain compliance references, but the general concept is still covered by the term "2FA". There are different 2FA methods that can be used by GitLab team members. These are ranked by security strength:

- [Biometric Authentication](https://aws.amazon.com/what-is/mfa/#:~:text=be%20digitally%20accessed.-,Inherence%20factor,-Inherence%20methods%20use). Biometric-based authentication uses "something you are" to authenticate you. Examples include touch-id (fingerprint) or face-id (facial recognition). This is the most secure authentication method.
- [WebAuthn](https://en.wikipedia.org/wiki/WebAuthn). FIDO2/WebAuthn uses a hardware token to authenticate you. It is one of the most secure methods, assuming the hardware token itself is physically secured.
- [Push Authentication](https://en.wikipedia.org/wiki/Authenticator#Mobile_Push). For Push Authentication to work, the authentication service and a complementary mobile app typically use RSA keys and OOB (out-of-band) communications to perform the secondary authentication. From a pure cryptographic perspective, this is *slightly* less secure than WebAuthn as WebAuthn uses secure hardware storage.
- [TOTP](https://en.wikipedia.org/wiki/Time-based_One-time_Password_algorithm). TOTP (Time-based One Time Password) is a popular method for a second factor. While not as secure as WebAuthn, Push as TOTP could be [phished](https://en.wikipedia.org/wiki/Phishing) (although the attack window would be extremely short). It is still a very secure method of authentication. As 1Password is used by GitLab team members, this could be used for TOTP after proper configuration ([1Password guidelines]({{< ref "password-guidelines#1password-guidelines" >}})).
- [SMS](https://en.wikipedia.org/wiki/SMS). SMS (Short Message Service) is a method of using text messaging to provide out-of-band (OOB) authentication. As the messages can be spoofed or intercepted more easily than other methods, SMS is highly discouraged for 2FA. As of this writing, the Security Department is unaware of GitLab assets or third party applications that team members are using that *only* support SMS 2FA. If you need to use something that only offers SMS as a second factor for GitLab, contact the [Security Department](/handbook/security/controlled-document-procedure/#exceptions).

For a better understanding of how 2FA fits into GitLab, refer to the [Accounts and Passwords]({{< ref "password-guidelines" >}}) section, which includes pointers to setting up passwords, acquiring FIDO2 tokens, and links to further resources. Refer to the Tools and Tips page for more detailed information regarding [FIDO2/WebAuthn](/handbook/tools-and-tips/#fido2--webauthn) and [other 2FA methods](/handbook/tools-and-tips/#other-2fa-methods).

#### Application Authentication Requirements

- Effective FY23 Q3, all third party applications that house GitLab confidential data are required to [authenticate via Okta inline with GitLab's approach to centralized authentication and authorization](/handbook/business-technology/okta/#what-is-okta). [Security Notices](/handbook/security/security-assurance/security-risk/third-party-risk-management/#tprm-security-notice-process) will be required in all cases where Okta is not supported.
- Authentication to an application should contain multi-factor authentication (Token, OTP Generator, SSO, YubiKey).
- SAML Assertion after logging into an authentication portal is required where technically feasible (e.g. Okta).
- Authentication to an application should support individual users, not groups.

## Exceptions

Exceptions to this standard will be tracked as per the [Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions).

## References

- Parent Policy: [Information Security Policy]({{< ref "_index.md" >}})
- [Token Management Standard]({{< ref "token-management-standard" >}})
