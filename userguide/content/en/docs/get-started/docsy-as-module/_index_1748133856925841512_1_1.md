---
title: Okta Verify Device Trust macOS Setup Guide
---

<!-- FIXME -->

[Vendor Docs - macOS Setup](https://help.okta.com/eu/en-us/content/topics/end-user/ov-setup-macos.htm)
[Vendor Docs - FAQ and Troubleshooting](https://help.okta.com/eu/en-us/content/topics/end-user/ov-trbl-macos.htm)

## Overview

**Note**: Occasionally after a macOS version update, Okta Verify will need to be set up again. Following these steps will resolve the issue.

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
