---
title: "Yubikey WebAuthn 2FA User Guide"
description: "Your YubiKey is used for two factor authentication (2FA) using the WebAuthn protocol. Several other protocols are supported by YubiKeys (OTP, U2F, etc.) however they are not used at GitLab. This guide provides a getting started to use your YubiKey for WebAuthn."
---

## Onboarding Guide

Congratulations on receiving your YubiKey(s) that you will use for two factor authentication (2FA). If you're familiar with using Touch ID, a YubiKey works almost the same way, however you do not need to register your fingerprint.

See [How It Works](#how-it-works) to learn more.

> Please repeat the steps below for each of the keys. You can perform the steps in parallel with both keys plugged in when configuring 2FA in each application.

1. Insert your YubiKey(s) into an available USB port on your laptop, monitor, or docking station.

2. Open a text editor a empty browser window and tap on the YubiKey's gold contact. You should see a [string get populated](#webauthn-authentication). `cccccbchbneclfhiefkkdgfkiuvukginvnhlefdcbuuc`. Your YubiKey is working!

3. Follow the instructions in the guides for each of our applications to configure your YubiKey as a 2FA authenticator. If you have multiple accounts, repeat the steps for each account.

    - [Okta Guide](/handbook/it/okta/#i-want-to-add-touch-id--face-id--face-authentication--yubikey-to-okta)
    - [Google Guide](/handbook/security/guides/yubikey/2fa/google)
    - [GitLab Guide](/handbook/security/guides/yubikey/2fa/gitlab)

4. You're all set!

## Day-to-Day Usage

### Using YubiKey for 2FA

When prompted to sign into a configuration application in the future, you may see a QR code or ask to use your passkey or Touch ID. Even if it says Passkey or Touch ID, touching your YubiKey still works. You simply need to touch your key, or click on the USB thumb drive icon in the prompt and then touch your key.

<img src="/images/security/corporate/systems/yubikey/yubikey-touchid.png" alt="YubiKey Models" style="border: 1px #888 solid; padding: 3px;" /><br />

### Adding New Applications

When prompted to enable 2FA in the future, simply tap your key when prompted with a QR code, to enable Touch ID, or to add a Passkey.

If the YubiKey is not working for that application, try using Touch ID, and then fall back to using 1Password to scan the QR code to save the one time password (OTP) to the appropriate record in your 1Password vault.

<img src="/images/security/corporate/systems/yubikey/yubikey-passkey-1password.png" alt="YubiKey Models" style="border: 1px #888 solid; padding: 3px;" /><br />

<img src="/images/security/corporate/systems/yubikey/yubikey-passkey-step1.png" alt="YubiKey Models" style="border: 1px #888 solid; padding: 3px;" /><br />

<img src="/images/security/corporate/systems/yubikey/yubikey-passkey-step2.png" alt="YubiKey Models" style="border: 1px #888 solid; padding: 3px;" /><br />

### Using YubiKey on Mobile Devices

If you have configured an NFC key, see the [Android](android/) and [iOS](ios/) guides for instructions on signing in with your YubiKey to approved mobile applications that do not use FaceID or biometrics.

### Leaving YubiKey Inserted or Removing

A frequently asked question is whether you should leave your YubiKey plugged in all the time?

This is a personal preference and you can use your own judgement.

#### Leave a Nano Key Plugged In

If it's your first time using a YubiKey and you're used to Touch ID, we suggest using the Nano key and leaving it plugged in. If you're working from home, you can leave it plugged in. If you travel to a coffee shop (low risk area), it's still fine.

If you are going to do a long trip, vacation, or anytime you head to the airport, you should unplug your YubiKey and keep it in a separate place from your laptop.

A Nano key is small and easy to lose. If you have a nano key, we recommend leaving it plugged in or stored in a safe place. Do not put it in your pocket or laptop bag without having a specific place to keep it. A life hack is that if you have wireless headphones with a USB-C port, you can plug it into the bottom of those for travel storage.

#### Separation with NFC Keys

Many engineering and security conscious people prefer to have it separated (ex. use an NFC key that is on a keyring), while others will leave it plugged in all the time (ex. in their monitor or docking station).

An NFC key is easy to break off when moving a laptop around, so please be sure to unplug the key before picking up your laptop and moving to a different seat.

You can unplug it and plug it back in at any time without "disconnecting/ejecting it" (like a thumb drive).

## How It Works

Each YubiKey is a piece of black plastic with an internal circuit board that exposes gold contacts (slivers of exposed metal). It has a USB-A or USB-C plug that you insert into your laptop or the side of your monitor or docking station.

You can insert it into *any* port. It is recommended to choose one that you do not use regularly for a power cord, monitor cord, or docking station cable.

<img src="/images/security/corporate/systems/yubikey/yubikey-models.jpg" alt="YubiKey Models" style="border: 1px #888 solid; padding: 3px;" /><br />

<img src="/images/security/corporate/systems/yubikey/yubikey-nano-port.jpg" alt="YubiKey Nano Port" style="border: 1px #888 solid; padding: 3px;" /><br />

<img src="/images/security/corporate/systems/yubikey/yubikey-nfc-port.jpg" alt="YubiKey NFC Port" style="border: 1px #888 solid; padding: 3px;" /><br />

### WebAuthn Authentication

When you are prompted for your passkey/2FA/Touch ID, you simply rest your finger on the gold contacts for a split second (similar to touching the fingerprint reader of TouchID sensor), and the YubiKey activates itself and sends a cryptographic string (as if you typed it) that is recognized by the 2FA technology (FIDO2/WebAuthn) on your computer and the server side. Each press generates a unique string, so the string you see below is useless after a few seconds.

`cccccbchbneclfhiefkkdgfkiuvukginvnhlefdcbuuc`

Simpler explanation? The oversimplified analogy is that it's similar in concept to SSH key public and private key pairs that are used when you authenticate via SSH (or Git).

<img src="/images/security/corporate/systems/yubikey/yubikey-nano-touch.jpg" alt="YubiKey Nano Port" style="border: 1px #888 solid; padding: 3px;" /><br />

<img src="/images/security/corporate/systems/yubikey/yubikey-nfc-touch.jpg" alt="YubiKey NFC Port" style="border: 1px #888 solid; padding: 3px;" /><br />

### Other Authentication Methods

A YubiKey supports a wide range of authntication methods including FIDO2/WebAuthn (hardware bound passkey), FIDO U2F, Yubico OTP, OATH-TOTP, OATH-HOTP, Smart card (PIV) and OpenPGP.

**At GitLab, we only use FIDO2/WebAuthn.** This works natively on your laptop **without installing any of the YubiKey software**. Simply insert your key into a USB port and touch the gold contacts when prompted to set up 2FA or a Passkey on any website.

From an IT perspective, we simply want users to insert their YubiKey (out of the box) and touch their key (to use FIDO2/WebAuthn) instead of using Touch ID when authenticating with web applications. All additional usage is at each engineer's discretion, unless it is included in your team's (ex. Site Reliability Engineer) onboarding instructions.

For advanced power users at your discretion (not mandated or supported by IT), you are welcome to install [YubiKey Manager](https://www.yubico.com/support/download/yubikey-manager/), optionally set a pin code on your YubiKey, use your YubiKey for SSH or GPG key storage, or configure slot 1 (short touch) and slot 2 (long touch).

### Primary and Secondary Keys

A YubiKey is similar to a car key. If you lose your car key, you can't start your car. With a secondary/backup car key, you can still get to your appointment on time.

If you lose your YubiKey, it's like losing the car key that allows you to sign in to the web application. With a second YubiKey, both keys are enrolled as 2FA authenticators and although you may only use the secondary/backup one occasionally, it provides assurance that you can still sign in. As a remote company, it's not possible to walk down the hall to the IT Helpdesk to get a new one and it's not logistically feasible to ship you a YubiKey overnight.

Unlike a software authenticator that can be reset by IT and re-enrolled, we can't get you into systems that use YubiKey authentication unless we add you to a bypass 2FA policy that lowers our security posture. We will do this when needed, and during our early deployment of YubiKeys until we can get everyone a secondary/backup key.
