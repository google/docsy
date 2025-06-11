---
title: "Okta"
---

## What is Okta?

From the Okta website

> Okta is the foundation for secure connections between people and technology.
> It's a service that gives employees, customers, and partners secure access to the tools they need to do their most important work.

In practice - Okta is an Identity and Single Sign On solution for applications and Cloud entities.
It allows GitLab to consolidate authentication and authorisation to applications we use daily through a single dashboard and ensure a consistent, secure and auditable login experience for all our GitLab team members.

### How is GitLab using Okta?

GitLab is using Okta for a few key goals:

- We can use Okta to enable Zero-Trust based authentication controls upon our assets, so that we can allow authorised connections to key assets with a greater degree of certainty.
- We can better manage the login process to the 80+ and growing cloud applications that we use within our tech stack.
- We can better manage the provisioning and deprovisioning process for our users to access these application, by use of automation and integration into our HRIS system.
- We can make trust and risk based decisions on authentication requirements to key assets, and adapt these to ensure a consistent user experience.

### What are the benefits to me using Okta as a user?

- A single Dashboard that is provided to all users, with all the applications you need in a single place.
- Managed SSO and Multi-Factor Authentication that learns and adapts to your login patterns, making life simpler to access the assets you need.
- Transparent Security controls with a friendly user experience.

### What are the benefits to me as an application administrator to using Okta?

- Automated provisioning and group management
- Ability to transparently manage shared credentials to web applications without disclosing the credentials to users
- Centralised access for users, making it easy to add, remove and change the application profile without the need to update all users.

## How do I get my Okta account set up?

All GitLab team members will have an Okta account set up during onboarding. You should receive an activation email in your personal email account before your start date. Please follow the steps in the email to activate your Okta account.

Once you’ve signed in to Okta, access your work Gmail and look for a 1Password activation email titled "Welcome to 1Password!" to set up your account.

**Important:** Set up Okta on your work computer (not on mobile or the mobile app) as the process includes setting up the Okta Verify mobile app.

GitLab requires all team members to use either Biometrics or YubiKey as your [Okta authentication](#i-want-to-add-touch-id--face-id--face-authentication--yubikey-to-okta)

### I want to add Touch ID / Face ID / Face Authentication / YubiKey to Okta

**Using [WebAuthn](https://www.okta.com/sites/default/files/pdf/How_WebAuthn_Works_0.pdf) authentication is required for all team members.**

1. While logged in to Okta from the device you wish to add, access the [Settings](https://gitlab.okta.com/enduser/settings) page.
1. In the 'Security Methods' section of the page, choose `Set up` or `Set up another` next to `Security Key or Biometric`.
1. You will then be presented with a password verification and passkey verification prompt.
1. After pressing `Set up` twice, a prompt from your web browser will appear, or a [1Password prompt](#adding-a-passkey-to-1password) may appear. Click the "YubiKey" icon to bypass if it appears and you wish to save it in iCloud Keychain (recommended) or the local Chrome browser.

<img src="/images/it/okta/1password-passkey.png" alt="1Password USB Key" width="300">

1. By default, you will be prompted to save it in your iCloud KeyChain.

    <img src="/images/security/corporate/Okta-Apple-Touch-ID-Popup.png" alt="Okta Apple Touch ID" width="300"/>

1. If you press cancel, you will be given options to save the passkey in different places.

    <img src="/images/security/corporate/Okta-Chrome-Passkey.png" alt="Okta Chrome Passkey" width="300"/>

1. For Security Key, choose "Use a phone, tablet, or security key" and a QR code will apepar. You can then tap the security key to save the passkey.

    <img src="/images/it/okta/Okta-Add-SecurityKey-1.png" alt="Okta Security Key #1" width="300"/>

1. You may be prompted for a PIN, and then finally click `Allow`.

    <img src="/images/it/okta/Okta-Add-SecurityKey-2.png" alt="Okta Security Key #2" width="300"/>

1. We recommend enrolling both Chrome and Safari for redundancy on your computer, as well as a mobile device. Each browser needs to be enrolled separately, unless you use iCloud Keychain. Note that separate Chrome browser profiles also need to be enrolled separately. You should enroll one computer browser (for example, Chrome), then add the [mobile device](#add-biometric-authentication-to-okta-for-mobile-devices-accessing-okta-apps-on-your-phone)), then if required add the other computer [browser](#i-want-to-login-or-add-a-new-computer-to-okta-and-i-have-a-mobile-device-enrolled) (for example, Safari).
1. If clearing your browser cache, please be careful as you can delete your passkey.
    1. In Chrome, if using "Clear Browsing Data" function please ensure that you [DO NOT check](https://internal.gitlab.com/handbook/it/end-user-services/self-help-troubleshooting/#clearing-google-chrome-cache-like-this-will-break-your-touchid-2fa) "Passwords and other sign-in data" (under "Advanced" tab). By default, this is unchecked.
    1. In Safari, the credential is stored under "Settings->Password". This is separate from the "Settings->Privacy" and "Manage Website Data" where you would click "Remove all" to remove the cache.

Follow the GitLab Okta [FAQ](/handbook/it/okta/okta-enduser-faq/).

We have also prepared Introductory Videos on [Configuring Applications](https://youtu.be/xS2CarGUPLc) and [Dashboard Tips](https://youtu.be/xQQwa_pbe2U).

### Adding a Passkey to 1Password

1. With the 1Password browser extension installed, access the [Settings](https://gitlab.okta.com/enduser/settings) page.
1. In the 'Security Methods' section of the page, choose `Set up` or `Set up another` next to `Security Key or Biometric`.
1. You may then be presented with another prompt to confirm if you wish to `Set up another`, followed by an `Enroll` prompt.
1. After pressing `Enroll`, a prompt from your web browser will appear.
1. From 1Password, you'll see a pop up notification from 1Password with the options "New Item" or "Update Existing". Select "Update Existing" and your Okta account to continue.

    <img src="/images/it/okta/1password-passkey.png" alt="Okta Passkey Key #1" width="300"/>

### Add biometric authentication to Okta for mobile devices (accessing Okta apps on your phone)

These steps are for an iPhone, and may be slightly different for Android.  If you are using an iPhone, you are required to have the "Passwords" app installed. We recommend enrolling a phone even if you don't plan to use it often, in case you need a way to [add a new computer or your credential gets accidentally removed on the computer](#i-want-to-login-or-add-a-new-computer-to-okta-and-i-have-a-mobile-device-enrolled).

1. On the computer, if using Chrome, please check that it is on the latest version by visiting the URL `chrome://settings/help` - if a new version is available, please use the `Relaunch` button to restart the browser.
1. On your Mac, please check under "System Settings"->"Privacy & Security"->"Bluetooth" and make sure that Google Chrome has Bluetooth access enabled.
    <img src="/images/it/okta/Okta-Mac-Bluetooth-1.png" alt="Okta Mac Bluetooth-1" width="300"/>
    <img src="/images/it/okta/Okta-Mac-Bluetooth-2.png" alt="Okta Mac Bluetooth-2" width="300"/>
1. On the computer, login into your [Okta](https://gitlab.okta.com).
1. On the computer, click on your name on the top right to open the drop down menu (similar to above) and navigate to "Settings".
1. On the computer, under Security Methods click "Set up another" beside Security Key or Biometric. This will take you to a setup authentication screen, click "Verify". Provide Touch ID.
1. On the computer, click "Set up", then click "Set up" again on the next screen.
1. On the computer, ignore all popups from the 1Password browser extension as it could interfere with the process of transferring the passkey. Click the "Yubikey" icon to bypass if it appears.

<img src="/images/it/okta/1password-passkey.png" alt="1Password USB Key" width="300">

1. On the computer, the next step depends on the browser and version.
    1. In Chrome and Safari you will see a pop up asking to "Use Touch ID to sign in?" Click "Cancel" to continue setting up your mobile device.

    <img src="/images/security/corporate/Okta-Apple-Touch-ID-Popup.png" alt="Okta Apple Touch ID" width="300"/>"

     Next, choose "Use a phone, tablet or security key".

    <img src="/images/security/corporate/Okta-Chrome-Passkey.png" alt="Okta Chrome Passkey" width="300"/>

     This should display a QR code that you can scan.

    1. In Safari, click "Other options", then choose "iPhone, iPad or Android device - save a passkey on a device with a camera", then "Continue".

1. On the mobile device, open your camera app and scan. (It may take a few seconds for it to connect). This requires Bluetooth to be enabled on both devices, but does not require pairing.
1. On the mobile device, a popup should show up to allow the credential to be saved.
    1. On a iPhone or iPad, it will prompt to create a passkey. Choose the Passwords app.
    1. If saving the credential fails, go to Settings->`your name`->iCloud and make sure that Passwords and Keychain is set to "On" and the "Passwords" app is installed.
    1. If it still fails, you can also try [force restart](https://support.apple.com/guide/iphone/force-restart-iphone-iph8903c3ee6/ios) and then trying to sign out of iCloud on your mobile device, and then sign back in to iCloud.
    1. On Android, this may appear "Use this device with screen lock". Choose this.
1. On the mobile device, attempt to sign in by visiting [Okta](https://gitlab.okta.com).

### I want to login or add a new computer to Okta and I have a mobile device enrolled

This method has been verified on Macs and Linux with Chrome. For Safari, it requires macOS Ventura 13+. Steps below for iPhone require iOS 16+, may be slightly different for Android.

1. On the computer, log in with username and password
1. On the computer, a popup appears to "Verify your identity with gitlab.okta.com"
1. On the computer, choose "Use phone with a QR code". This requires Bluetooth to be enabled on both the phone and the laptop, but doesn't require pairing.
1. On the mobile device, scan the code using the Camera app
1. On the mobile device, click "Sign in with a Passkey"
1. On the mobile device, a "Sign in" popup appears - "Do you want to sign in to "gitlab.okta.com" with your saved passkey for "xxxxx@gitlab.com"? Click Continue and provide biometric.
1. On the computer, you will now be signed in to Okta.
1. If applicable, follow the standard [steps](#add-biometric-authentication-to-okta-for-mobile-devices-accessing-okta-apps-on-your-phone) to enroll your Touch ID into Okta.

### I don't have an enrolled phone or computer but have a YubiKey

If both of previous devices are not available, you could use a [YubiKey](https://www.yubico.com/products/) as another form of authentication (if you have one set one up). Use that to access your settings page and follow the steps above to enroll a new device.

### I would like to get a YubiKey, how can I do so?

Please fill open up the Slack form using /yubikey in a DM to yourself, ([check out our guide for some additional information](/handbook/security/corporate/systems/yubikey/)), and we will coordinate shipment of one to you thru our group buy.

### Lost access to your 2FA or your OKTA account has been locked out because of failed attempts?

- Head to `#it_help` in Slack or email `it-help@gitlab.com` and ask for a 2FA Reset, please be prepared to verify your identity
- Once Okta 2FA is reset please reconfigure it by logging into your Okta account and setting up with either Biometrics or a YubiKey.
- If your account is locked please head to `#it_help` and ask to have your account unlocked. As a precaution, you will also need to change your Okta Password.

## Device Trust

Okta Device Trust ensures that team members are acccessing Okta applications from a managed device. For additional details and timelines, please see the [internal handbook](https://internal.gitlab.com/handbook/it/okta-device-trust/).

### Device Trust Setup on macOS

1. Open the Okta Verify application on macOS via Spotlight by selecting the magnifying glass in the menu bar (top right corner of display). Another method to open Spotlight is to use `cmd + Space`
![Spotlight Search](/images/it/okta/spotlight.png)

1. Search for `Okta Verify`
![Okta Verify Search](/images/it/okta/okta-verify-search.png)

1. Select `Get Started`
![Get Started](/images/it/okta/get-started.png)

1. Select `Next`
![Get Started-Next](/images/it/okta/get-started-2.png)

1. Confirm `gitlab.okta.com` is populated for Sign-in URL and then select `Next`
![Sign-in URL](/images/it/okta/signin-url.jpg)

1. A browser window will open to gitlab.okta.com to confirm your identity
![Identity](/images/it/okta/identity.png)

1. After doing so, you will see the `Your Identity is Verified` message and you can close the browser
![Identity Success](/images/it/okta/identity-success.png)

1. The Okta Verify application will refresh. Press `Next` if you are using Touch ID on your Mac (most common), or `Skip` if you are not. Okta Verify uses macOS's Touch ID capability, and the [mathematical calculation](https://support.apple.com/en-us/105095) is stored locally within Apple's Secure Enclave and not available to Okta or GitLab.
![Touch ID Prompt](/images/it/okta/touch-id-or-skip.png)

1. If you pressed `Next`, then click `Enable Touch ID`
![Touch ID Prompt 2](/images/it/okta/touch-id-prompt-2.png)

1. Your GitLab Okta account will now be available to use with Okta Verify on macOS
![Okta Verify Complete](/images/it/okta/okta-verify-complete.png)

### After enrolling

You will continue to be able to use a [YubiKey](/handbook/security/corporate/systems/yubikey/) in addition to Touch ID to login to Okta from macOS device. You will not be able to login from a personal macOS device.

A macOS device missing the certificate (even when enrolled with Okta Verify), will quickly show:
![No Certificate](/images/it/okta/no-certificate.png)

Then re-direct to the following error:
![No Certificate 2](/images/it/okta/no-certificate-2.png)

## Managing Okta Access Using Google Groups

The GitLab Team Member Enablement team has created a new process for Owners and Provisioners to manage access to Okta applications. If you are listed as an Owner/Provisioner for an application in the [tech stack](https://docs.google.com/spreadsheets/d/1mTNZHsK3TWzQdeFqkITKA0pHADjuurv37XMuHv12hDU/edit#gid=1906611965) you will be using the method below to add users to a Google group, which will then sync this group to Okta and assign the application to users. This process was created to empower business application owners to effect Access Requests which require Okta application assignment.

- Sign in to [Google Groups](https://groups.google.com/).
- Click My groups.
- Click the name of the group were you want to add/remove a user. (Note that all Google groups which manage users in Okta application start with okta-xxxxx-users)
- Next press the `People tab` on the left side and select `Members`.
<img src="https://gitlab.com/plaurinavicius/image-sources-for-runbooks/-/raw/master/Screenshot_2020-11-05_at_14.27.05.png" alt="Screenshot" width="150"/>

- This will show you all the members currently in the group.
- To add a member press the `Add Members` button. To remove access mouse over a user and press on the little white box that appears, this will mark the user. After that on the right side press the remove member button (Looks like a circle with a horizontal line across).

When a member is added/removed from the group it may take up to 1 hour for the sync to happen between Google and Okta. Once the sync happens the user will see the application in Okta, if removed the opposite.
If you have any questions or require assistance please reach out to the IT team in the #it-help Slack channel.

## Why isn't an application I need available in Okta?

Create a [new corpsec issue](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?issuable_template=corpsec_general_change) and tag `@gitlab-com/gl-security/corp/identity`

Okta is currently configured with assigned groups/roles based on a team member's role/group.
Refer to the [Access Change Request](/handbook/it/end-user-services/onboarding-access-requests/access-requests/#access-change-request) section of the handbook for additional information on why an application may not be available in Okta.

### How do I get my application set up within Okta?

If you are an application owner please submit an [Okta app change issue](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?description_template=okta_app_change) on the Okta project page for your application.
We will work with you to verify details and provide setup instructions.

### I have an application that uses a shared password for my team, can I move this to Okta?

Yes you can!
Submit a [new application setup issue](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new?description_template=okta_app_change) on the Okta project page for your application.
We will work with you to verify details and provide setup instructions.

If you are having problems with being asked for multiple MFA authentications during the day, please [log an issue](https://gitlab.com/gitlab-com/gl-security/corp/issue-tracker/-/issues/new), tag `gitlab-com/gl-security/corp/identity`, and we can look into it.

### Why does GitLab.com ask for an additional MFA when I login via Okta?

Your gitlab.com account will have 2FA installed as required by our policy.
Note that the 2FA for GitLab.com is different to the MFA you use to log into Okta.
[This issue](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues/7397) has been opened to propose a solution.

## GitLab Google Workspace on Android doesn't prompt for biometrics or security key after Okta sign-in

When attempting to add a Google Workspace account to an Android device, Okta authentication proceeds in the Android's embedded browser (WebView).

Since [Okta does not support embedded web browsers for WebAuthn based verification](https://help.okta.com/en-us/Content/Topics/Security/mfa/webauthn-compatibility.htm), which causes an issue where nothing prompts you after you sign-in to Okta, so you cannot add the Google Workspace account to Android devices.

Please reach out to [`#it_help`](https://gitlab.slack.com/messages/it_help) Slack channel to request temporary enable Okta Verify as a workaround.

## Where do I go if I have any questions?

- For Okta help, setup and integration questions: `#it_help` slack channel
