---
title: Laptop Software Updates
---

## Overview

We believe in staying up to date with security patches on all endpoint operating systems and installed software to mitigate the risk of exploitable vulnerabilities.

## What to Expect

You should plan on performing software updates for 30-60 minutes every 2-3 weeks. It is easiest to plan for this towards the end of your workday or the end of the work week so that you can save any work and close any application windows before needing to restart your laptop.

When a new macOS version is released, our Security beta testers will perform testing on the latest version to ensure the upgrade goes smoothly without any breaking changes that impact your productivity. After 1-3 weeks of testing (except for critical vulnerabilities), we use [Jamf](/handbook/security/corporate/systems/jamf) and [Nudge](#nudge-for-macos-updates) to send desktop pop-up notifications to remind team members to update their operating system at their earliest convenience within the next few days.

## Configuration Steps

You need to ensure that macOS is configured to perform automatic software updates for security patches.

All applications should regularly be checked for updates by navigating to the application name in the top left of the menu bar and choosing the `About` or `Check for Updates` option (varies by application).

If you use `brew` or a package manager, it can keep your [software updated automatically](https://docs.brew.sh/FAQ#how-do-i-update-my-local-packages).

- [Vendor Docs - Apple MacOS](https://support.apple.com/guide/mac-help/keep-your-mac-up-to-date-mchlpx1065/mac)
- [Vendor Docs - Brew Packages](https://docs.brew.sh/FAQ#how-do-i-update-my-local-packages)
- [Vendor Docs - 1Password](https://support.1password.com/update-1password/)
- [Vendor Docs - Chrome](https://support.google.com/chrome/answer/95414?hl=en&co=GENIE.Platform%3DDesktop)
- [Vendor Docs - Slack](https://slack.com/help/articles/360048367814-Update-the-Slack-desktop-app)
- [Vendor Docs - VS Code](https://code.visualstudio.com/docs/setup/setup-overview#_update-cadence)
- [Vendor Docs - Zoom](https://support.zoom.com/hc/en/article?id=zm_kb&sysparm_article=KB0060716)

## Nudge for macOS Updates

This is a placeholder.

## Third Party Software Deployment and Patching

### New System Deployment

When a new macOS device completes enrollment, we automatically deploy our most commonly used applications through [Installomator](https://github.com/Installomator/Installomator). This process should kickoff within five minutes of when the team member reaches their Desktop for the first time.

### Process Details

1. The team member completes their initial account setup via Okta login and selected Setup Assistant panes, which include Location Services, Accessibility, Touch ID enrollment, and Light/Dark appearance selection.
1. Upon first Desktop access, Installomator should automatically launch within five minutes.
1. Installomator performs two primary functions:
   1. Installs our most commonly used applications (1Password, Google Chrome, Slack, Zoom)
   1. Optimizes the Dock configuration
1. Once Installomator finishes the installation process, the user clicks "Done" in the Installomator interface to exit.
1. The system will prompt the team member to logout, and then will initiates an automatic restart.
1. The restart completes the setup process, including prompting the team member to enable FileVault.

<img src="/images/security/corporate/services/laptops/security/updates/installomator-onboarding.png" alt="Installomator Notification" width="400">

This automated approach ensures consistent application deployment across all newly enrolled macOS devices while minimizing manual intervention.

## Jamf App Installers

Certain third party software is automatically patched by Jamf using their [app installers](https://learn.jamf.com/en-US/bundle/jamf-pro-documentation-current/page/App_Installers.html). Periodically users will recieve notifications in the top right corner of their screen to initiate an update. Users can either quit their software and reopen once complete or restart their computer in order for updates to complete. Updates typically take less than a minute to complete.

<img src="/images/security/corporate/services/laptops/security/updates/app-installer-example.png" alt="App Installer Notification" width="400">

## Jamf App Installers Troubleshooting

### Continuous notifications to update even after quitting the App

If you are still seeing update notifications even after quitting the app and re opening, try restarting the computer or look for areas where the application is still open, like in the task bar next to the clock.

<img src="/images/security/corporate/services/laptops/security/updates/1password-taskbar-quit.png" alt="1password taskbar quit" width="400">
