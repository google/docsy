---
title: Okta User Android Setup Guide
---

<!-- FIXME -->

## Google Workspace 2FA Prompts Missing

> When adding my GitLab Google Workspace account to my Android device, the biometrics or security key verification never prompts after signing in to Okta.

When attempting to add a Google Workspace account to an Android device, Okta authentication proceeds in the Android's embedded browser (WebView).

Since [Okta does not support embedded web browsers for WebAuthn based verification](https://help.okta.com/en-us/Content/Topics/Security/mfa/webauthn-compatibility.htm), which causes an issue where nothing prompts you after you sign-in to Okta, so you cannot add the Google Workspace account to Android devices.

Please reach out to [`#it_help`](https://gitlab.slack.com/messages/it_help) Slack channel to request temporary enable Okta Verify as a workaround.
