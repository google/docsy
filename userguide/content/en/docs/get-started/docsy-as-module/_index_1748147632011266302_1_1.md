---
title: NordLayer VPN Troubleshooting Guide
---

## Overview

- [Vendor Docs](https://help.nordlayer.com/)

## FAQs

### Linux VPN Protocol

In case you are experiencing any issues with your NordLayer connection, the first course of action would be to change the VPN protocol. You can do so by running the following command `nordlayer settings set` and selecting **VPN protocol**.

### Windows 10 Sufficient Privileges

`Verify that you have sufficient privileges to start system services`

If you are getting an error 'Verify that you have sufficient privileges to start system services' on Windows 10 while installing the NordLayer application - please make sure that you are using an up-to date Windows 10 version.

### Linux Nonresponsive

If you encounter this situation, you need to force-close and restart the application by entering the following command:

```shell
sudo systemctl kill -s SIGKILL nordlayer.service
sudo systemctl start nordlayer.service
```

### VPN Authentication on Mac

If the VPN authentication window is constantly popping up on your screen, go to **System Preferences -> Network** and select the NordLayer connection. Make sure that **Connect on Demand** is disabled, then click **Cancel** and it should not reappear.

If you are still seeing the pop-up, restart your Mac and drag the NordLayer app to the trash. Once that is done, re-install NordLayer application directly from the AppStore.
