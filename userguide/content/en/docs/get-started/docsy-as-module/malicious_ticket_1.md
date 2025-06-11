---
title: Suspecting a ticket to be malicious
category: Handling tickets
subcategory: General
description: Documenting how and when to contact security if a ticket is looking suspicious/malicious in nature.
---

## Overview

Customers are inherently trusted partners and tickets are opened with positive intent. Although this will be true for the vast majority of tickets, it can happen that a resourceful adversary might purchase a GitLab license in order to try to abuse this trust.

## Potential risks

Malicious tickets could be attempts to:

- Extract sensitive information about GitLab's infrastructure or systems
- Socially engineer support staff to bypass security controls
- Request configuration changes that would create security vulnerabilities
- Upload malicious files disguised as evidence or troubleshooting artifacts
- Establish rapport for future more sophisticated attacks
- Obtain escalated access or permissions beyond what is necessary

## Warning signs

Although the following indicators will match legitimate behaviours of some clients, Support engineers should be alert to these potential indicators of malicious intent, especially when multiple of them are combined:

### Unusual ticket content

- Requests that seem outside the normal scope of support
- Vague problem descriptions that require excessive back-and-forth
- Inconsistencies in the reported technical details
- Requests for sensitive information not required to resolve the stated issue

### Customer behavior

- Excessive urgency or pressure to resolve quickly
- Attempts to build personal rapport followed by requests for exceptions to policy
- Reluctance to provide necessary information to troubleshoot (unless client has strict privacy restrictions like US Government or air gapped clients)
- Requesting support for capabilities that seem unrelated to the customer's known use case

### Technical red flags

- Attachments with unusual file extensions or double extensions (.txt.exe)
- Links to externally hosted materials instead of direct attachments
- Links to external sites that require authentication with GitLab credentials
- Requests to run scripts or executables on GitLab systems
- Requests to disable security features or monitoring
- Requests to log in to their self-managed GitLab instance
- Invitations to an external GitLab instance or group

## Response procedure

### Initial assessment

1. Trust your instincts - if something feels unusual, take it seriously
2. Do not click on suspicious links or download attachments that seem unusual
3. Do not share sensitive information, even if the request seems urgent
4. Document all concerning aspects of the ticket

### When in doubt, contact security

If you suspect a ticket may have malicious intent:

1. Do not communicate your suspicions to the customer
2. Continue normal communication while seeking guidance
3. Contact the security team via Slack by using `/security` and provide:
   - The ticket number
   - Specific elements that raised your concern
   - Any actions you've taken so far

### After reporting

- Continue normal communication until advised otherwise by the security team
- Follow instructions provided by security
- Do not take exceptional actions requested by the customer without security approval

## Remember

Most tickets are fortunately legitimate, this guidance is meant to help identify rare exceptions where caution is warranted. When in doubt, it's always better to consult with security than to ignore potential warning signs.
