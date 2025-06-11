---
title: "Salesforce Mobile App Users Guide"
description: "Instructions on where to download and how to login to the Salesforce Mobile App"
---

## How to Login To The Salesforce Mobile App

Below you can find instructions on how to login to the Salesforce mobile app via Okta. If you run into any issues attempting to login, please reach out via #it_help channel in Slack.

### Prerequisites

* Download and Install the following Apps
  * Salesforce Mobile
    * [Google Play](https://play.google.com/store/apps/details?id=com.salesforce.chatter)
    * [Apple App Store](https://apps.apple.com/us/app/salesforce/id404249815)
  * Okta Verify
    * [Google Play](https://play.google.com/store/apps/details?id=com.okta.android.auth)
    * [Apple App Store](https://apps.apple.com/us/app/salesforce/id404249815)
  * Salesforce permission enabling access for Android and/or iOS access
    * Only users in the Sales organization are allowed to access Salesforce on mobile.
    * If you are not part of the Sales organization and would like to request access, open an [Access Request](https://www.google.com/addlinkhere) and provide business justification and the team will help process the request.

## Instructions

### Android

#### Recommended Method

1. Open the Salesforce app.
2. On the Login page, select **Use Custom Domain** in the bottom right-hand corner.
3. In the "Custom Domain" field enter `gitlab`, select **Continue**.
4. On the login page, select **Log in with Okta**.
5. Enter your Okta username and password, select **Verify**.
6. You'll be presented with options to verify your identity, select `Use Okta FastPass`.
    1. Warning: Selecting **Security Key or Biometric Authentication** may cause an error and be unable to login.
7. Verify your identity in Okta Verify and complete any additional login prompts. Biometric is required.
8. You'll be redirected back to the Salesforce App and the authentication process is complete.
    1. If this is your first time logging in, you may need to select **Allow** on the "Allow Access?" page.
9. You have logged into the Salesforce app 🎉.

#### Alternative Method

1. Open the Salesforce app.
2. On the Log In page, select the menu (three-dots) in the top right-hand corner.
3. Select **Change Server**.
4. Select **Add Connection**.
5. Give the new connection a name (e.g. GitLab)
6. Enter `https://gitlab.my.salesforce.com` for the URL, then select **Apply**.
7. Select the newly created connection.
8. Select the <- arrow to return to the Login page.
9. On the login page, select **Log in with Okta**.
10. Enter your Okta username and password, select **Verify**.
11. You'll be presented with options to verify your identity, select
    1. `Use Okta FastPass` to login via Okta Verify.
    2. Verify your identity in Okta Verify and complete any additional login prompts. Biometric is required.
12. You'll be redirected back to the Salesforce App and the authentication process is complete.
    1. If this is your first time logging in, you may need to select **Allow** on the "Allow Access?" page.
13. You have logged into the Salesforce app 🎉.

### iOS

#### Recommended Method

1. Open the Salesforce app.
2. on the Login page, select Use Custom Domain in the bottom right-hand corner.
3. In the "Custom Domain" field enter `gitlab`, select **Continue**.
4. On the login page, select **Log in with Okta**.
5. Enter your Okta username and password, select **Verify**.
6. You'll be presented with options to verify your identity, select `Use Okta FastPass`.
    1. Warning: Selecting **Security Key or Biometric Authentication** may cause an error and be unable to login.
7. Verify your identity in Okta Verify and complete any additional login prompts. Biometric is required.
8. You'll be redirected back to the Salesforce App and the authentication process is complete.
    1. If this is your first time logging in, you may need to select **Allow** on the "Allow Access?" page.
9. You have logged into the Salesforce app 🎉.

#### Alternative Method

1. Open the Salesforce app.
2. On the Log In page, select the ⚙ icon.
3. Select ➕ to add a login host.
4. Give the new host a label (e.g. GitLab).
5. Enter `gitlab.my.salesforce.com` for the host name, then select **Done**.
6. Select the newly created host.
7. On the login page, select **Log in with Okta**.
8. Enter your Okta username and password, select **Verify**.
9. You'll be presented with options to verify your identity, select
    1. `Use Okta FastPass` to login via Okta Verify.
    2. Verify your identity in Okta Verify and complete any additional login prompts. Biometric is required.
10. You'll be redirected back to the Salesforce App and the authentication process is complete.
    1. If this is your first time logging in, you may need to select **Allow** on the "Allow Access?" page.
11. You have logged into the Salesforce app 🎉.

## FAQ

### What requirements must my phone meet in order to be able to login to the Salesforce app?

#### Your phone must meet the following device posture requirements

* A minimum OS version
* Screen Lock
* Biometrics (including touch ID, Face ID, or other supported biometrics method)
* Device is encrypted
* Not jailbroken or rooted

### OAuth client error on Alternative Method login. Screen won't load. How to fix this login issue?

* If you receive an error and cannot load the login screen, select the settings option and select `Clear Cookies`. Then close the app completely and reload it.

### I do not wish to use biometric login with Okta Verify, can I login with a different method?

* You may be able to login using the Alternative Method with a security key or passkey that is configured with your Okta account. Not all yubikeys, security keys, or passkeys may be supported though.

### Can I login to multiple different Salesforce instances like Sandbox?

* Yes. To login to multiple different salesforce instances you will need to add a New Connector or New Host for each different Salesforce instance.
