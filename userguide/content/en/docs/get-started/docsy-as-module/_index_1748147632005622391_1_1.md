---
title: Linux Desktop OS Security Standards
---

Linux is allowed as an alternative to an Apple Mac running macOS. Historically this was only allowed for the Engineering Division, but anyone in GitLab can use Linux. Just bear in mind it is assumed you are capable of self-support when running Linux - there is a #linux channel in Slack where one can exchange tips and tricks, but it is not intended as an official Helpdesk resource.

The following is the list of standards that Corporate Security is requiring for all Desktop OS laptops, including Linux:

- The hard drive must be encrypted.
- The approved EDR (Endpoint Detection and Response) solution is installed.
- The user account must be a regular user account, with the administrative account disabled from login. All administrative actions must be carried out using the the `sudo` command.
- The laptop must have the corporate-approved remote management tools. For Linux this is FleetDM. This is used to confirm certain settings are in use, confirm the hard drive is encrypted, firewall is enabled, deploy the EDR solution, and allow for remote hard drive wiping at "end of life" for the laptop before a new one is provided.
- The use of a YubiKey 5 FIPS to authenticate is also required. Please review the [ordering guide](/handbook/security/corporate/systems/yubikey/purchasing/) and associated [user guide](/handbook/security/corporate/systems/yubikey/2fa/).
