---
title: Browser Extensions
description: Documentation for managing, developing, and publishing browser extensions for the GitLab Support team
---

The GitLab Support team manages several browser extensions that help Support Engineers with their daily workflows. This page documents how these extensions are managed, developed, and published.

## Current Extensions

The browser extensions currently maintained by the Support team and are available publicly:

| Extension Name | Browser | Description | URL |
|---------------|---------|------------|------|
| [Zendesk Download Router](https://gitlab.com/gitlab-com/support/toolbox/zd-dl-router) | Chrome | Automatically routes Zendesk downloads into separate folders by ticket number | [Chrome Web Store](https://chromewebstore.google.com/detail/zendesk-download-router/pgfhacdbkdeppdjgighdeejjfneifkml) |
| [Zendesk Download Router](https://gitlab.com/gitlab-com/support/toolbox/zd-dl-router) | Firefox | Automatically routes Zendesk downloads into separate folders by ticket number | [Firefox Add-ons](https://addons.mozilla.org/en-US/firefox/addon/zendesk-download-router/) |

A more complete list of recommended extensions can be found in [useful browser extensions](../engineering/_index.md#useful-browser-extensions).

## Publishing Extensions

Once an extension has been developed, it can be published to a browser extension store for public distribution.

- Chrome extensions are published and managed through a shared "GitLab Inc" publisher account on the Chrome Web Store. If you would like to use this, you will need to [request access](#requesting-access). You will also need to [register a developer account](https://developer.chrome.com/docs/webstore/register) and pay a $5 USD registration fee.
- Firefox extensions can be published and managed on a personal Mozilla account on [Firefox Add-Ons](https://addons.mozilla.org/en-GB/firefox/).

## Accessing the Chrome Web Store Developer Dashboard

The Chrome Web Store (CWA) Developer Dashboard for the shared "GitLab Inc" publisher account can be accessed through the [Chrome Web Store Developer Console](https://chrome.google.com/webstore/devconsole/5df5edac-ebab-45e2-9001-f6fb6fec07af).

## Access Management

### Chrome Web Store Publisher Access

The shared "GitLab Inc" publisher account has been vetted by the Legal team and has been disclosed as a trader account as per [Chrome Web Store's trader disclosure requirements](https://developer.chrome.com/docs/webstore/program-policies/trader-disclosure). Therefore for simplicity, it is best to use this account to publish all Chrome extensions.

We have a Google group `browser-extensions@gitlab.com` where all members of this group can publish Chrome extensions by using our group publisher account.

#### Requesting Access

To request access to the Chrome Web Store publisher account, contact Anton Smith (`@anton` in Slack).

Do note that an [access request](../../it/end-user-services/onboarding-access-requests/access-requests/_index.md) is not required.

#### Managing Access

To add or remove users to the `browser-extensions@gitlab.com` group:

1. Go to the [browser-extensions group members page](https://groups.google.com/a/gitlab.com/g/browser-extensions/members)
2. Add or remove members as needed (requires `Manager` role in the group)
3. Access the [Chrome Web Store developer dashboard settings](https://chrome.google.com/webstore/devconsole/5df5edac-ebab-45e2-9001-f6fb6fec07af/settings)
4. Under "Group publisher memberships," click "Sync" to update permissions
