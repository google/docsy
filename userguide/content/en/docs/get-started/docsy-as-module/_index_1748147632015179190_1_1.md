---
title: "Identity Architecture Boundaries"
description: "For our organization-level and product production systems access, we use paranoia-level defense in depth for device, user, permission, and lateral movement assurance. This page describes how the Identity Team uses a variety of mechanisms and tools to secure our castle wall boundaries."
---

## Security Risk Disclaimer

As part of our transparency, we share this high level explanation of what we do, but do not publicly share the details of how we do it. By exposing this high-level overview, we tend to hear feedback from the community about shortcomings that we can remediate to improve our posture.

The world's source code is more secure when we collaborate on best practices together. If you are able to penetrate this, we'd love to talk to you about joining our team.

Please report any vulnerabilities using our bug bounty and responsible disclosure process.

## Castle Walls

### Administrative Kingdoms

```mermaid
graph TB

subgraph Jamf MDM Profile
subgraph SentinelOne EDM Monitoring
subgraph Separate BLACK 1Password User Account and Vault
subgraph Separate BLACK Okta User Account
subgraph Separate BLACK Google Workspace User Account
subgraph Okta Verify Device Trust
subgraph Okta Hardware 2FA with YubiKey
subgraph NordLayer VPN with Dedicated Gateway Static IPs
subgraph Read-Only Role by Default
subgraph Teleport Two Person Verification for JIT Role Assumption
direction TB
subgraph AWS Identity Center 2FA with YubiKey
BLACK_OPS_KINGDOM["Black Ops Kingdom"]
end
subgraph Google Account Hardware 2FA with YubiKey
PRODUCT_PRD_KINGDOM["Product Prd Kingdom"]
end
end
end
end
end
end
end
end
end
end
end
IDENTITY_USER["Identity Team Member<br />with BLACK Admin Account"]
INFRA_USER["Infrastructure Team Member<br />with BLACK Admin Account"]
BLACK_OPS_KINGDOM --> IDENTITY_USER
PRODUCT_PRD_KINGDOM --> INFRA_USER
```

## Insider Access Trust

The lateral movement controls in each kingdom are different and are not shared publicly. We have additional hidden monitoring controls in sensitive areas to ensure that all activities are monitored by cross-functional teams and actions are verified with the user and mapped to justification documentation (incidents/issues/tickets/etc).

As we iterate from GitLab Identity v2 to GitLab Identity v3, we will be refining our scoped access policies to prevent the potential for lateral movement.
