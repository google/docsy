---
title: Okta SSO User Setup Guide
---

All GitLab team members have an Okta account created as part of the onboarding process.

**New Team Member?** You should already have an activation email in your personal email inbox.

## Authentication

You can access the Okta dashboard by opening your web browser and visiting [https://gitlab.okta.com](https://gitlab.okta.com). You should bookmark this page. 😄

If you visit a vendor's website and choose to sign in with SSO, it will redirect you to Okta to sign in. If prompted for a company ID or similar, try `gitlab`.

### Username

Your GitLab email address is your username. This is usually `{firstInitial}{lastName}@gitlab.com` (ex. Dade Murphy would be `dmurphy@gitlab.com`).

Keep in mind that your GitLab.com (the product) username will probably be different and will not including `@gitlab.com`. Whenever we refer to your *GitLab username*, it refers to your product username that can be mentioned in issues and merge requests. Whenever we refer to your *email handle*, it refers to the first part of your email address before the `@`.

### Password

When you first create your Okta account, you will not have access to 1Password yet to generate a secure password. Please use a memorable long phrase password temporarily.

After your 1Password account has been created during onboarding, you should [generate a 64-character random password in 1Password](https://support.1password.com/strong-account-password/) and [change your Okta password](https://help.okta.com/eu/en-us/content/topics/end-user/manage-account-settings.htm#Reset) so that it autofills from 1Password and is not a shorter, memorable password. The only password you should be able to remember is your 1Password Master Password.

**After your onboarding tasks are completed, you should not be able to type or memorize your Okta password and it should be autofilled from 1Password.**

- [1Password Vendor Docs - Generate Strong Passwords](https://support.1password.com/strong-account-password/)
- [Okta Vendor Docs - Change Your Okta Password](https://help.okta.com/eu/en-us/content/topics/end-user/manage-account-settings.htm#Reset)
- [GitLab’s Password Policy](/handbook/security/#gitlab-password-policy-guidelines)

### 2FA

GitLab requires all team members to use either Apple Touch ID/Face ID biometrics or YubiKey that uses the [WebAuthn](https://www.okta.com/sites/default/files/pdf/How_WebAuthn_Works_0.pdf) protocol.

For your first few days, don't worry about setting up mobile devices.

For most users, this is simply adding your TouchID fingerprint to Okta for 2FA.

- **macOS**
  - 👀 [macOS Touch ID Guide](/handbook/security/corporate/systems/okta/user/touchid)
  - [Okta Verify Device Trust for macOS](/handbook/security/corporate/systems/okta/verify/macos)
  - [YubiKey Guide](/handbook/security/corporate/systems/okta/user/yubikey)
- **Linux**
  - Exception Group <!-- TODO -->
  - [YubiKey Guide](/handbook/security/corporate/systems/okta/user/yubikey)
- **Android 2FA**
  - [Android 2FA Guide](/handbook/security/corporate/systems/okta/user/android)
  - [Okta Verify Device Trust for Android](/handbook/security/corporate/systems/okta/verify/android)
- **Apple iOS**
  - [iOS Face ID 2FA Guide](/handbook/security/corporate/systems/okta/user/ios)
  - [Okta Verify Device Trust for iOS](/handbook/security/corporate/systems/okta/verify/ios)

## Access Applications

You can access the Okta dashboard by opening your web browser and visiting [https://gitlab.okta.com](https://gitlab.okta.com).

The Okta End-User Dashboard allows you to easily access your enterprise applications securely using Single Sign On (SSO) technology.

[Vendor Docs - Dashboard Overview](https://help.okta.com/eu/en-us/content/topics/end-user/dashboard-overview.htm)
[Vendor Docs - Working with Apps](https://help.okta.com/eu/en-us/content/topics/end-user/work-with-apps.htm)

You can click on any of the application tiles that you see on your dashboard to access those applications. For most applications, you will not need to enter a password. Okta automatically passes on access through a token based on a pre-established trust relationship and user provisioning automation.

[Onboarding Guide - Collaboration Apps](/handbook/security/corporate/support/onboarding#collaboration-apps)
[Onboarding Guide - Employment Apps](/handbook/security/corporate/support/onboarding#employment-apps)

For security reasons, Corporate Security has limited the number of applications that are available to access from your Android or iOS mobile device.

[Phone Services](/handbook/security/corporate/services/phones)

## Access Requests

You will be granted to additional applications throughout the onboarding process.

[Okta Access Requests](/handbook/security/corporate/systems/okta/ar)
