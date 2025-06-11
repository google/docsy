---
title: Okta User iPhone Face ID Setup
---

<!-- FIXME -->

These steps are for an iPhone, and may be slightly different for Android.  If you are using an iPhone and receive a Developer or XCODE error, please upgrade to iOS 16+. We recommend enrolling a phone even if you don't plan to use it often, in case you need a way to add a new computer or your credential gets accidentally removed on the computer.

1. On the computer, if using Chrome, please check that it is on the latest version by visiting the URL `chrome://settings/help` - if a new version is available, please use the `Relaunch` button to restart the browser.

2. On your Mac, please also check that you are using macOS Ventura [13.0.1](https://support.apple.com/en-us/109033#:~:text=From%20the%20Apple%20menu%20%EF%A3%BF,version%20number%20to%20see%20it.) or newer.

3. On your Mac, please check under "System Settings"->"Privacy & Security"->"Bluetooth" and make sure that Google Chrome has Bluetooth access enabled.

    <img src="/images/business-technology/okta/Okta-Mac-Bluetooth-1.png" alt="Okta Mac Bluetooth-1" width="300"/>
    <img src="/images/business-technology/okta/Okta-Mac-Bluetooth-2.png" alt="Okta Mac Bluetooth-2" width="300"/>

4. On the computer, login into your [Okta](https://gitlab.okta.com)

5. On the computer, click on your name on the top right to open the drop down menu (similar to above) and navigate to "Settings".

6. On the computer, under Security Methods click "Set up another" beside Security Key or Biometric. This will take you to a setup authentication screen, click "Verify". Provide Touch ID.

7. On the computer, click "Set up", then click "Set up" again on the next screen

8. On the computer, ignore all popups from the 1Password browser extension as it could interfere with the process of transferring the passkey. Click the "Yubikey" icon to bypass if it appears.

<img src="/images/business-technology/okta/1password-passkey.png" alt="1Password USB Key" width="300">

1. On the computer, the next step depends on the browser and version.
    1. In Chrome, the pop up that opens states "Create a passkey for gitlab.okta.com" and has your email address listed. Choose "Use a different passkey" at the bottom left.

    <img src="/images/business-technology/okta/Okta-Chrome-Passkey-Popup.png" alt="Okta Chrome Passkey" width="300"/>

     Then, choose "Use a phone, tablet or security key".

     <img src="/images/business-technology/okta/Okta-Chrome-Passkey-2.png" alt="Okta Chrome Passkey-2" width="300"/>

      This should display a QR code that you can scan.
    2. In Safari, click "Other options", then choose "iPhone, iPad or Android device - save a passkey on a device with a camera", then "Continue".
2. On the mobile device, open your camera app and scan. (It may take a few seconds for it to connect). This requires Bluetooth to be enabled on both devices, but does not require pairing.
3. On the mobile device, a pop should show up to allow the credential to be saved.
    1. On a iPhone or iPad, it will prompt to save the credential to iCloud Key Chain. Allow this.
    2. If saving the credential fails, go to Settings->`your name`->iCloud and make sure that Passwords and Keychain is set to "On".
    3. If it still fails, you can also try [force restart](https://support.apple.com/guide/iphone/force-restart-iphone-iph8903c3ee6/ios) and then trying to sign out of iCloud on your mobile device, and then sign back in to iCloud.
    4. On Android, this may appear "Use this device with screen lock". Choose this.
4. On the mobile device, attempt to sign in by visiting [Okta](https://gitlab.okta.com).
