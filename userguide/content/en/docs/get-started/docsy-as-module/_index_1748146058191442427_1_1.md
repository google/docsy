---
title: Google Mail (Gmail) Verification Guide
description: How to verify email from GitLab.com is genuine.
---

## Verify an email from GitLab.com is genuine

Gmail supports three email security protocols to verify if email is genuine:

- [Sender Policy Framework (SPF)](https://en.wikipedia.org/wiki/Sender_Policy_Framework).
- [DomainKeys Identified Mail (DKIM)](https://en.wikipedia.org/wiki/DomainKeys_Identified_Mail).
- [Domain-based Message Authentication, Reporting and Conformance (DMARC)](https://en.wikipedia.org/wiki/DMARC).

GitLab.com sends email that supports all three protocols to help you verify that emails that claim to originate from GitLab.com are genuine.

To verify if an email from GitLab.com is genuine:

1. Open the email to verify.
1. On the top right side of the email, next to the reply button, select three vertical dots button and then select **Show original**.
1. The email to verify opens in a new window with a table of headers. At the bottom of the table, SPF, DKIM, and DMARC should be shown with a status:
    <img src="/images/security/corporate/systems/google/mail/verification/google_verification_example.png" alt="Google Verification Example" />
1. If you see all three rows, and the row contain 'PASS', the email is genuine.
