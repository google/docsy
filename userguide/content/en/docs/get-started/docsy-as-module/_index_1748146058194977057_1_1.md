---
title: Okta User macOS Setup Guide
---

<!-- FIXME -->

This method has been verified on Macs and Linux with Chrome. For Safari, it requires macOS Ventura 13+. Steps below for iPhone require iOS 16+, may be slightly different for Android.

1. On the computer, log in with username and password
1. On the computer, a popup appears to "Verify your identity with gitlab.okta.com"
1. On the computer, choose "Use phone with a QR code". This requires Bluetooth to be enabled on both the phone and the laptop, but doesn't require pairing.
1. On the mobile device, scan the code using the Camera app
1. On the mobile device, click "Sign in with a Passkey"
1. On the mobile device, a "Sign in" popup appears - "Do you want to sign in to "gitlab.okta.com" with your saved passkey for "xxxxx@gitlab.com"? Click Continue and provide biometric.
1. On the computer, you will now be signed in to Okta.
1. If applicable, follow the standard steps to enroll your [Touch ID](/handbook/security/corporate/systems/okta/user/touchid) into Okta.

### I don't have an enrolled phone or computer but have a YubiKey

If both of previous devices are not available, you could use a [YubiKey](https://www.yubico.com/products/) as another form of authentication (if you have one set one up). Use that to access your settings page and follow the steps above to enroll a new device.
