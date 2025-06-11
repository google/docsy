---
title: Mobile DevOps Guides
---

A collection of simple guides to help getting started with Mobile DevOps.

## iOS

## How to create an App Identifier in the Apple Developer Portal

1. Login to the Apple Developer Portal and go to [https://developer.apple.com/account/resources/identifiers/list](https://developer.apple.com/account/resources/identifiers/list).
1. Click the `+` button next to `Identifiers`
1. Select `App IDs`, and click `Continue`
1. Click on the `App` type, and click `Continue`
1. Input a description for the app, i.e. `My Sample App`
1. Input an Explicit Bundle ID, i.e. `com.gitlab.my-sample-app`
1. Select any `Capabilities` or `App Services` if your app needs them
1. Click `Continue`
1. Verify the information is correct, then click `Register`

## How to create an App entry in App Store Connect

1. Login to Apple App Store Connect and go to [https://appstoreconnect.apple.com/apps](https://appstoreconnect.apple.com/apps)
1. Click the `+` button next to `Apps` and select `New App`
1. On the pop up, select the app's platform(s)
1. Input the name of the app (must be unique), i.e. `My Sample App 123`
1. Select the primary language
1. Select the Bundle ID from the list
1. A SKU is required, and can be any value you like
1. Select the User Access level, and click `Create`
1. Once the app has been created, you'll be redirect to the app configuration page. This page contains all the details about the app, and additional configuration options.

## How to generate a development provisioning profile from an existing certificate

Apple imposes a limit of three development signing certificates per account. Given that limit, if you are supporting multiple applications it is necessary to share those signing certificates across multiple provisioning profiles. Follow the steps below to generate a new provisioning profile from an existing signing certificate.

1. 1. Login to the Apple Developer Portal and go to [https://developer.apple.com/account/resources/profiles/list](https://developer.apple.com/account/resources/profiles/list).
1. Click the `+` button next to `Profiles`
1. In the Development section, select your app's platform (i.e. `iOS App Development`), and click `Continue`
1. Select a registered App ID from the list, and click `Continue`
1. Select one or more signing certificates to be included with the new provisioning profile, and click `Continue`
1. Select one or more test devices to be granted access to the new provisioning profile, and click `Continue`
1. Input a name for the provisioning profile, and click `Generate`
1. Wait for the new provisioning profile to be created, then click `Download`

## How to generate a distribution provisioning profile from an existing certificate

Apple imposes a limit of three distribution signing certificates per account. Given that limit, if you are supporting multiple applications it is necessary to share those signing certificates across multiple provisioning profiles. Follow the steps below to generate a new provisioning profile from an existing signing certificate.

1. 1. Login to the Apple Developer Portal and go to [https://developer.apple.com/account/resources/profiles/list](https://developer.apple.com/account/resources/profiles/list).
1. Click the `+` button next to `Profiles`
1. In the Distribution section, select your app's distribution channel (i.e. `App Store`), and click `Continue`
1. Select a registered App ID from the list, and click `Continue`
1. Select only one signing certificate to be included with the new provisioning profile, and click `Continue`
1. Input a name for the provisioning profile, and click `Generate`
1. Wait for the new provisioning profile to be created, then click `Download`
