---
title: Okta User SSO Guide (Touch ID 2FA Setup)
---

<!-- FIXME -->

## Overview

## Configuration Steps

1. While logged in to Okta from the device you wish to add, access the [Settings](https://gitlab.okta.com/enduser/settings) page.

1. In the 'Security Methods' section of the page, choose `Set up` or `Set up another` next to `Security Key or Biometric`.

1. You will then presented with a password verification and passkey verification prompt.

1. After pressing `Set up` twice, a prompt from your web browser will appear, or a [1Password prompt](/handbook/security/corporate/systems/1password/passkey) may appear. Click the thumb drive icon to bypass if it appears and you wish to save it in iCloud Keychain (recommended) or the local Chrome browser.

    <img src="/images/business-technology/okta/1password-passkey.png" alt="1Password USB Key" width="300">

1. For iCloud Keychain or a YubiKey, click "Use a different passkey". For the local Chrome browser choose "Continue".

    <img src="/images/business-technology/okta/Okta-Chrome-Passkey-Popup.png" alt="Okta Add Passkey #1" width="300"/>

<!-- FIXME -->

1. If you choose to save it in your Chrome profile, another prompt will appear asking you to authenticate using Touch ID or Face ID.

    <img src="/images/business-technology/okta/Okta-Add-Biometric-2.png" alt="Okta Add Biometric #2" width="300"/>

1. If you chose to use the iCloud Keychain or Security Key, choose the correct option to finish enrollment.

    <img src="/images/business-technology/okta/Okta-Chrome-Passkey-2.png" alt="Okta Add Passkey #2" width="300"/>

1. For Security Key, relevant prompts will appear.

    <img src="/images/business-technology/okta/Okta-Add-SecurityKey-1.png" alt="Okta Security Key #1" width="300"/>

1. You may be prompted for a PIN, and then finally click `Allow`.

    <img src="/images/business-technology/okta/Okta-Add-SecurityKey-2.png" alt="Okta Security Key #2" width="300"/>

1. We recommend enrolling both Chrome and Safari for redundancy on your computer, as well as a mobile device. Each browser needs to be enrolled separately, unless you use iCloud Keychain. Note that separate Chrome browser profiles also need to be enrolled separately. You should enroll one computer browser (for example, Chrome), then add the mobile device, then if required add the other computer browser (for example, Safari).

1. If clearing your browser cache, please be careful as you can delete your passkey.

    1. In Chrome, if using "Clear Browsing Data" function please ensure that you do not check "Passwords and other sign-in data" (under "Advanced" tab). By default, this is unchecked.

    2. In Safari, the credential is stored under "Settings->Password". This is separate from the "Settings->Privacy" and "Manage Website Data" where you would click "Remove all" to remove the cache.

We have also prepared Introductory Videos on [Configuring Applications](https://youtu.be/xS2CarGUPLc) and [Dashboard Tips](https://youtu.be/xQQwa_pbe2U).

<!-- END FIXME -->
