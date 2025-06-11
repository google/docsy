---
title: Amazon Workspaces (VDI)
description: Amazon WorkSpaces enables you to provision virtual, cloud-based Microsoft Windows, Amazon Linux 2, Ubuntu Linux, or Red Hat Enterprise Linux desktops. You would need a Windows VDI when you are using software that works only with Windows.
---

## How to request access

Simply create an AR https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=Individual_Bulk_Access_Request

## How to authenticate

After provisioning us the user’s IPv4 address, we add the IP to the allowlist, then the user will need to download the AWS Workspace client from here:
https://clients.amazonworkspaces.com/

## Maintenance policy

The workspaces sometimes go into unhealthy status, rebooting it could fix it. If not then rebuilding the VDI.

## AWS Documentation

https://docs.aws.amazon.com/workspaces/latest/adminguide/amazon-workspaces.html
