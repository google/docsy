---
title: Linux Desktop OS Setup Guide
---

## Setup and Deployment Steps

These steps assume you are using the work-purchased Dell running Ubuntu 22.04 LTS or later. This is because Ubuntu 22.04 is known to support the required software packages for remote management and EDR solutions that allow for Linux use in GitLab. If your situation is different and you are running different hardware and/or using a different Linux distribution, it _must_ be capable of supporting the required software packages.

1. **Ensure your laptop is running Linux**. Certain circumstances (world region and availability of hardware) might require the self installation of Linux on a Dell that was shipped with OEM Windows. If this is the case, you will need to set up a USB drive with Ubuntu and perform the installation.

For laptops shipped with OEM Windows you may want to make a full drive backup (e.g. by using open source utility [Clonezilla](https://clonezilla.org/)) to an external drive before installing Linux. That way you could restore your laptop to the original state at any time. It will make the RMA process much easier in case you need it. This is optional and not required.

1. **Ensure the hard drive is encrypted**. From a terminal window run the command `sudo dmsetup ls`. If there is a reference to something like `cryptdata` or `dm_crypt-0` in the output, encryption is enabled. If not, you will need to reinstall Ubuntu and enable drive encryption during the installation process.

1. **Ensure the firewall is enabled**. From a terminal window run the command `sudo ufw status`. If the response is `Status: inactive` run `sudo ufw enable`. If `ufw` is not installed, run `sudo apt install ufw` first.

1. **Ensure MDM is installed**. Follow the instructions listed [here](https://internal.gitlab.com/handbook/security/corporate/tooling/fleet/#enrolling-in-fleet) (internal link). This will also install the EDR tool.

1. **Regular Applications**. Use the regular approved applications such as Google Chrome (and sign into Okta), Zoom, and Slack. Install the other applications for your job description (e.g. development tools) as needed. Complete the steps in your onboarding issue and/or laptop equipment issue.

## Additional Steps

_Automatic Updates_ - While not required it is highly recommended that automatic updates are configured to ensure the latest security patches are available. As many of the Linux users in GitLab are developers, it is understood that there might be hesitancy that various components used for developments - particularly those impacting a build process - could cause difficulties. That being said, here are two recommended options for enabling automated updates:

- The GNOME Update Manager's _Software & Updates_ can be configured for automatic updates.
- Installation and configuration of the `unattended-upgrades` package.

More detail is available [here](https://help.ubuntu.com/community/AutomaticSecurityUpdates).

_Fingerprint Reader_ - If your Dell laptop has a fingerprint reader, modern Ubuntu may support it out of the box, if not consider the following steps (YMMV, it may require another solution):

```bash
sudo apt install libpam-fprintd
sudo systemctl status fprintd.service
sudo systemctl restart fprintd.service
```
