---
title: "Yubikey Self-Service Purchasing Guide"
description: "You can self-service purchase a YubiKey through our centralized ordering portal. YubiKeys cannot be purchased and expensed separately unless pre-approved by IT for countries that we do not support shipping to."
---

## Order Process

### New Team Members

> Upcoming Iteration in FY25-Q2

IT will automatically ship a primary YubiKey to new hire team members in the Engineering, Product, and Security divisions when they fill out their laptop order form. No action or approvals are required.

### Existing Team Members

In FY25-Q1, IT performed a mass distribution of the latest generation of YubiKey 5 FIPS keys to all team members in the Engineering, Product, and Security divisions. These divisions will be required to use a YubiKey for 2FA after IT completes our system configuration change management in FY25-Q2.

Any team member (any division) can request a YubiKey as an alternative to using Touch ID, no questions asked. Our policies are designed for mass distribution efficiency and do not prevent any user in other divisions from using a YubiKey.

### Self Service Order

You can self service order a primary YubiKey using the following process. We will be iterating on ordering backup keys in the near future.

If you would like a replacement YubiKey or a new YubiKey for the first time, verify that your country is the list of [supported countries](#countries). If your country in the list of [Unsupported Countries](#unsupported-countries) or you have questions, please ask in `#it_help` for guidance.

1. Open Slack.
2. Type `/yubikey` in any message or channel.
3. A self-service order form will open that you can fill out.
    > This is connected to our centralized ordering portal. Your order is paid for centrally by GitLab and you do not need to submit an expense report.
4. Please allow a few days for vendor processing. An email confirmation is sent to you when your YubiKeys have shipped.
5. Depending on your country, you will usually receive your YubiKey within 2 weeks.

## YubiKey Procurement Policy

### Who Uses a YubiKey

#### Engineer Users

> Effective FY25-Q2

All team members in the **Engineering**, **Product**, and **Security** divisions are required to use YubiKeys for accessing administrative systems, sensitive Okta applications, or AWS/GCP infrastructure. You can use Touch ID for non-sensitive Okta applications or any Mac applications that allow you to use Touch ID.

#### Business Users

Team members in the **CEO**, **Finance**, **Legal**, **Marketing**, **People**, or **Sales** divisions are **required to use MacBook Touch ID** (instead of a YubiKey) since the majority of applications used by these divisions are accessed through Okta where we have stronger device assurance policies. Any team member in these division can opt-in to use a YubiKey (no questions asked).

We originally wanted to deploy YubiKeys to the entire company, however we have a physical constraint since a YubiKey will occupy a USB-C port and most team members in these divisions have a 13" MacBook that only has 2 ports that are usually occupied for monitor and power cords.

We shifted our focus to team members with 14"/16" MacBook Pros with 3 ports + magsafe power. The Engineering, Product, and Security divisions access a wide range of applications, infrastructure, and backend systems that are not in Okta, so that is where we are focusing our efforts.

<img src="/images/security/corporate/systems/yubikey/yubikey-mac-13.jpg" alt="YubiKey Models" style="border: 1px #888 solid; padding: 3px;" /><br />

#### Linux Users

Any team members with Linux laptops are required to use a YubiKey for all 2FA.

#### Contractors and Temporary Service Providers

Any temporary service provider that does not have a GitLab-issued MacBook and cannot install 1Password (license provided by GitLab) can be shipped a YubiKey for authentication to Okta and any granted services. This is a common need for third party service providers that use Windows devices.

Please ask in `#it_help` for assistance.

### YubiKey Models

<img src="/images/security/corporate/systems/yubikey/yubikey-models.jpg" alt="YubiKey Models" style="border: 1px #888 solid; padding: 3px;" /><br />

#### YubiKey 5C Nano FIPS

A [YubiKey 5C Nano FIPS](https://www.yubico.com/product/yubikey-5c-nano-fips/) ("Nano") key has a small form factor that is designed to be permanently plugged into a USB-C port and doesn't have a risk of falling out or breaking off.

- Recommended as primary key (set it and forget it)
- Can be inserted in the laptop and left there for easy touch at any time (they practically disappear).
- It does not have the risk of breaking off or getting in your way as you move around with your laptop.
- Not recommended if you need to remove the key frequently since it's hard to grip and easy to lose.

<img src="/images/security/corporate/systems/yubikey/yubikey-nano-port.jpg" alt="YubiKey Nano Port" style="border: 1px #888 solid; padding: 3px;" /><br />

#### YubiKey 5C NFC FIPS

A [YubiKey 5C NFC FIPS](https://www.yubico.com/product/yubikey-5c-nfc-fips/) ("NFC") key acts just like a nano key with additional benefits when using mobile phones or a larger form factor for carrying a key with you.

A near field communication ("NFC") key looks like a USB thumb drive and has the ability to wirelessly act as an authenticator on mobile devices by holding the key up to the phone (for iPhone it is near the top by the camera) without needing to have a key plugged in.

This simply provides versatility. Since the authenticator is registered on the server side, you can use it by plugging it into your laptop, into the USB-C port of your iPad or tablet, or using NFC wireless technology on an iPhone with a lightning port (that doesn't have USB-C).

**We expect to continue using FaceID and will not enforce YubiKey on phones since we have a limited number of allowed mobile applications that do not include any applications with sensitive access or data. In other words, using a YubiKey for phone application 2FA is optional and is a personal preference.**

- Recommended as backup key due to its versatility.
- Can be put on a keychain and inserted or removed as needed.
- Can be left in your monitor port or docking station if your laptop is not reachable at your desk. You may need a USB-A key if you have an older monitor without USB-C ports. A small docking station or adapter may be better in some cases.
- NFC supports wireless authentication with recent [iPhone](/handbook/security/guides/yubikey/2fa/ios) and many [Android](/handbook/security/guides/yubikey/2fa/android) devices (if it supports tap payments, it should support YubiKey NFC).

<img src="/images/security/corporate/systems/yubikey/yubikey-nfc-port.jpg" alt="YubiKey NFC Port" style="border: 1px #888 solid; padding: 3px;" /><br />

#### Other YubiKey Models

The [YubiKey 5C FIPS](https://www.yubico.com/product/yubikey-5c-fips/) key works, however the NFC keys are recommended for the additional functionality and are what we stock our inventory with.

We no longer recommend [YubiKey 5Ci FIPS](https://www.yubico.com/product/yubikey-5ci-fips/) key that includes an Apple Lightning port since the recent generations of iPhones support NFC wireless keys. They are also awkward on keychains.

Any [non-FIPS](#fips-vs-non-fips) YubiKey [models](https://www.yubico.com/products/yubikey-5-overview/) are no longer supported and will not be allowed with our next-generation authentication policies that have string recognition matching for `YubiKey 5 FIPS` for FIPS-compliant models.

#### Form Factors

Since our MacBooks use USB-C, we default to USB-C models.

The only use case for USB-A is if you have USB-A ports on the side or bottom of your monitor or in your docking station that you can touch easier than reaching for your laptop when docked at your desk. These can be ordered through the self service [order process](#order-process).

### FIPS vs Non-FIPS

You will not notice any difference as a user.

A FIPS key will have `FIPS` printed on the key next to the serial number. You may need to turn the key over to see it if it's in your USB port.

To avoid a commingled mix of keys and protocols in our fleet, we have standardized on the YubiKey 5 FIPS models for future proofing as part of our Results for Customers value.

**Low Context:** A YubiKey 5 itself is secure as an MFA authenticator. The FIPS protocol provides advanced cryptographic security that meets audit and compliance requirements in some regulated sectors that GitLab works with and is a service provider for.

**Replacing Old Keys:** We are replacing keys for any team members that have a non-FIPS YubiKey.

**Technical Research:** The Federal Information Processing Standard ("FIPS") [140-2](https://csrc.nist.gov/pubs/fips/140-2/upd2/final#:~:text=This%20Federal%20Information%20Processing%20Standard,of%20potential%20applications%20and%20environments) specifies the security requirements that will be satisfied by a cryptographic module, providing four increasing, qualitative levels intended to cover a wide range of potential applications and environments. This validation enables government agencies and regulated industries to meet the highest authenticator assurance level 3 (AAL3) requirements from the new [NIST SP800-63B](https://csrc.nist.gov/pubs/sp/800/63/b/upd2/final) guidance.

You can learn more on the [Yubico website](https://www.yubico.com/products/yubikey-fips).

### Countries

#### Supported Countries

The following countries have standard shipping rates and will arrive in 1-2 weeks.

- Austria (AT)
- Belgium (BE)
- Bulgaria (BG)
- Cambodia (KH)
- Canada (CA)
- Chile (CL)
- Czechia (CZ)
- Germany (DE)
- Denmark (DK)
- Finland (FI)
- France (FR)
- Hungary (HU)
- Ireland (IE)
- Israel (IL)
- Italy (IT)
- Lithuania (LT)
- Luxembourg (LU)
- Latvia (LV)
- Malta (MT)
- Netherlands (NL)
- Norway (NO)
- Poland (PL)
- Portugal (PT)
- Romania (RO)
- Spain (ES)
- Sweden (SE)
- Slovenia (SI)
- Switzerland (CH)
- United Kingdom (GB)
- United States (US)

The following countries have higher shipping costs due to regional logistics factors. We still support shipping to these countries, however will try to ensure that we ship a primary and secondary/backup key to avoid the cost of future shipment costs if a key is broken or lost.

- Australia (AU)
- Indonesia (ID)
- Japan (JP)
- Mexico (MX)
- New Zealand (NZ)
- Philippines (PH)
- Singapore (SG)
- Taiwan (TW)

#### Unsupported Countries

Due to shipping provider support, we do not have standard processes to ship to the following countries. This list of countries represents a very small percentage of team members.

For some countries, we may ask team members if they use a proxy package/parcel service in another one of our supported countries. If that's not possible, IT will collaborate with you to evaluate company or self-procurement options on a case-by-case basis.

- Armenia (AM)
- Angola (AO)
- Bosnia (BA)
- Brazil (BR)
- Columbia (CO)
- Costa Rica (CR)
- Ecuador (EC)
- Egypt (EG)
- India (IN)
- Kenya (KE)
- Morocco (MA)
- Moldova (MD)
- Malaysia (MY)
- Panama (PA)
- Pakistan (PK)
- Paraguay (PY)
- Serbia (RS)
- South Africa (ZA)
- South Korea (KR)
- Turkey (TR)
- Ukraine (UA)
- Vietnam (VN)
