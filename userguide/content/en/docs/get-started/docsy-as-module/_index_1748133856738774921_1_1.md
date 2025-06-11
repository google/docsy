---
title: NordLayer VPN Setup Guide
---

## Access Request

Please request access to NordLayer through the Okta portal using [Lumos](/handbook/security/corporate/systems/lumos/ar/). Follow these steps to submit your request for NordLayer:

- Log in to the [Okta portal](https://gitlab.okta.com)
- Search for and select the "Lumos" application
- Select "NordLayer" from the available applications
- Choose the specific permission that matches your needs, either "Public WiFi" or ["Dedicated Gateway"](#nordlayer-for-system-administration)
- Lumos will automatically initiate the approval workflow and handle provisioning upon approval

The system will guide you through any additional information required to complete your request. You'll receive notifications about the status of your request through email.

## NordLayer Installation

After your access request is provisioned, you will receive an email from `nordlayer@nordlayer.com` with a link to download the application.

- MacOS:

  1. Enter `gitlab` as the organization.
  2. Authenticate with Okta.
  3. When prompted, select to **Allow** an upcoming prompt.

- Linux:

  1. Follow https://help.nordlayer.com/docs/installing-on-linux to download the application and add your user to the user group.
  1. Log out and log back in.
  1. In your terminal, run `nordlayer login`.
  1. Enter `gitlab` as the organization.
  1. Open the URL you get in your browser and authenticate with Okta.

- Android:

  1. Go to Google Play and search for NordLayer. Tap Install and download the app.
  1. Enter `gitlab` as the organization ID and tap `continue`.
  1. Tap `Log in with Okta` and follow the prompts.
  1. Tap `Allow access` to allow NordLayer access to your VPN settings.
  1. Tap `Ok` NordLayer to set up a VPN connection.
  1. Tap `Allow access` to allow NordLayer access to your location (for recommended servers).
  1. Tap `Allow access` to access VPN settings and you're all set!

- iOS:

  1. Go to the App Store and search for `NordLayer` and tap `Get` to download the app.
  1. Enter `gitlab` as the organization ID and tap `continue`.
  1. Tap `Log in with Okta` and follow the prompts.
  1. Tap `Allow access` to allow NordLayer access to your VPN settings.
  1. Tap `Allow` to allow NordLayer to add VPN configurations.
  1. Tap `Allow access` to allow NordLayer access to your location (for recommended servers) and you're all set!

## Configuration

We recommend you set NordLayer to auto-connect when using untrusted WiFi (networks with no password or weak encryption):

- MacOS:

  1. Go to NordLayer preferences and select the **Auto-Connect** tab.
  1. Select **When using untrusted Wi-Fi** (or **When app launches** and [add your home network as trusted](#add-your-home-network-to-the-trusted-list-macos-only)).

- Linux:

  1. If NordLayer is running, in your terminal run `nordlayer settings set`.
  1. Select **Auto-connect**, and then **When using untrusted Wi-Fi**.

  To learn more, see [NordLayer application usage on Linux](https://help.nordlayer.com/docs/nordlayer-application-usage-on-linux).

### Add Your Home Network to the Trusted List (MacOS only)

> When you add a trusted network to the list, your laptop will keep NordLayer disconnected while at home. This allows you to use the internet at full speed, and will automatically connect while you're on any untrusted network away from home.
>
> Please keep in mind that when you connect to a trusted network, you are no longer protected through a VPN. Do not do this if you're at a hotel, on a guest newtork, or anywhere outside of your home network (unless needed to get through initial wi-fi portal terms and conditions captive portal screen).

1. Go to NordLayer preferences and select the **Auto-Connect** tab.
1. Verify the Network listed under **Current Network** is your home network and select **Trust**.

## NordLayer for System Administration

NordLayer is also used for system administration purposes, providing secure access to internal systems and resources via dedicated IP addresses that are limited to certain GitLab Team Members. If you require acecss to these dedicated IP addresses, please request the access via [Lumos](/handbook/security/corporate/systems/lumos/ar/) and select `Permission:Dedicated Gateway`.

Here are some key points about using NordLayer for system administration:

1. Access Control: NordLayer allows for granular access control, ensuring that only system administrators can access specific resources.

2. Multi-Factor Authentication: For enhanced security, NordLayer is implemented with Okta Device Trust Authentication policies.

3. Secure Remote Access: System administrators can securely access internal systems from any location, enabling efficient remote work and incident response.

4. Network Segmentation: NordLayer supports network segmentation, allowing administrators to isolate sensitive systems and limit potential security risks.

5. Encrypted Communication: All traffic between the administrator's device and internal systems is encrypted, protecting sensitive data in transit.

6. Centralized Management: The NordLayer admin panel provides a centralized interface for managing user access, monitoring connections, and configuring security policies.

When using NordLayer for system administration, always follow GitLab's security best practices and ensure that you have the appropriate permissions before accessing any systems or data.

Dedicated IP's are listed below for reference by Security teams or incident response.

| Location | IP |
| --- | --- |
| GitLab - Los Angeles | 216.74.107.115 |
| GitLab - New York | 146.70.186.59 |
| GitLab - Atlanta | 205.234.251.167 |
| GitLab - Belgium | 146.70.55.7 |
| GitLab - Hungary | 217.138.192.12 |
| GitLab - Japan | 146.70.138.86 |
| GitLab - Australia | 88.216.59.30 |
