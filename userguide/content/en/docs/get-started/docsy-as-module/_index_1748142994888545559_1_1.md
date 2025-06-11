---
title: Laptop Web Browsers
---

## Overview

We use Google Chrome as our primary web browser since many of our collaboration and security tools are natively integrated with Google.

We do not recommend or support using other browsers such as Firefox, Safari, etc. While we recognize that there are scenarios where alternate browsers are needed eventually all access to GitLab resources will require Google Chrome.

## Configuration Steps

- [Vendor Docs - Install Chrome](https://support.google.com/chrome/answer/95346?hl=en&co=GENIE.Platform%3DDesktop&oco=0#zippy=%2Cmac)
- [Vendor Docs - Chrome Profiles](https://support.google.com/chrome/answer/185277?hl=en&ref_topic=7439538&sjid=3263200837792153330-NC)

## Enterprise Browser Management

[Chrome Enterprise Browser Management](https://chromeenterprise.google/browser/management/) is a service that allows Corporate Security system administrators to achieve the following benefits:

- Effective management and security reports
- Improve the user experience and implement standardized configurations
- Implement quick and effective patching for outdated or vulnerable Chrome versions
- Management of Chrome extensions and versions, including allowlist and blocklist
- Implementation of [Chrome policies](https://chromeenterprise.google/policies/)

Changes are managed using standard [Change Management](https://gitlab.com/gitlab-com/business-technology/change-management) processes, including testing with designated alpha and beta testing users for feedback prior to organization rollouts. All significant changes are announced in company-wide channels.

## Password Management

Do not allow the Chrome, Safari, or Firefox web browser to save your passwords. Do not use a personal password manager (Bitwarden, LastPass, etc.) or personal 1Password account to store your work credentials. This presents an unnecessary risk.

We use [1Password Business](https://1password.com/business-security) and the [1Password Chrome Extension](https://chromewebstore.google.com/detail/1password-%E2%80%93-password-mana/aeblfdkhhhdcdjpifhhbdiojplfjncoa?hl=en&pli=1) for storing and autofilling all passwords, passkeys, and 2FA One Time Password (OTP) codes.

- [1Password Setup Guide](/handbook/security/corporate/systems/1password/setup)

## Personal Use

- [Personal Use Policy](/handbook/security/corporate/services/laptops/security/personal)

- Configurations are in place to prevent using personal Google Chrome profiles to login to GitLab.com Google resources. These controls only impact GitLab-issued laptops.
