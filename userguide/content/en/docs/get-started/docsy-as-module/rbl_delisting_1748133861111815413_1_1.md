---
title: Real Time Blocklist Delisting
category: GitLab.com
description: How to reach out to Mailgun support to remove our IP addresses from a Real-time Blocklist (RBL)
---

### Overview

In some rare cases, you may need to reach out to Mailgun support to remove our IP addresses from a Real-time Blocklist (RBL). This workflow will cover how to verify and resolve these issues.

### Check for Suppression in Mailgun

If a customer is reporting that they are not receiving a confirmation email, you'll want to go through the [confirmation email](/handbook/support/workflows/confirmation_emails) workflow first. When in the Mailgun panel, [check for a suppression](/handbook/support/workflows/confirmation_emails/#checking-mailgun).

### Verify the RBL listing

In the logs, if you see a mention of a rejection due to abuse or explicit confirmation of a blocklist, proceed to the link and look up the IP address. Every provider will be different, but if a lookup database is available, you should verify that it is listed and if a reason is stated.

```text
 "delivery-status": {
  "tls": true,
  "mx-host": "mx1.external-mailserver.com",
  "attempt-no": 1,
  "description": "",
  "session-seconds": 1.7985761165618896,
  "code": 550,
  "message": "5.7.1 H:M11 [192.237.158.143] Connection refused due to abuse. Please see https://mailspike.org/iplookup.html or contact your E-mail provider."
```

You can confirm that the IP address is ours by doing a "host" lookup on the IP address. It should always end in `mg.gitlab.com`.

```text
> host 192.237.158.143
143.158.237.192.in-addr.arpa domain name pointer do158-143.mg.gitlab.com.
```

### Open a Ticket With Mailgun

Navigate to Mailgun > [Support](https://app.mailgun.com/app/support) and click "Create Ticket". Be sure to include:

1. The IP Address that is blocklisted
1. The name of the RBL and link to it (Found in the Message returned by the mail server)
1. Copy of the Logs

### Follow up

Be sure to follow up with the customer and let them know that we've requested support through Mailgun. They should return a response within 24 hours. If we are blocklisted due to a specific account, please check in with Site Reliability Engineers in #production.
