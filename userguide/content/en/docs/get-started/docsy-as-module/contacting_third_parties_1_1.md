---
title: Contacting third parties
description: Support Operations policies page for contacting third parties
canonical_path: "/handbook/support/readiness/operations/docs/policies/contacting_third_parties"
---

Our Zendesk instances use many third-party applications to help agents in their
day-to-day tasks. Sometimes, we encounter issues specific to these the
third-party applications that cannot be fully resolved by Support Ops. In such
scenarios, the Support Ops team will need to contact the application's support
system.

## Process

1. The agent or a Support Ops team member will create an issue in the
   [Support Ops Project](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project).
1. The Support Ops DRI will then triage and investigate the issue at hand,
   which may include collecting items such as HAR files, Browser versions, and
   plugins.
1. The Support Ops DRI will open a ticket with the third-party app's support
   system, providing detailed information.
   - Always make sure to CC other Support Ops team members, especially a
     Support Ops Manager
1. The Support Ops DRI will update all the responses received from the
   third-party app's support team in the issue till the issue is fixed.

## Flowchart

```mermaid
graph TD;
  A-->B;
  B-->C;
  C-->D;
  D-->E;
  E-->F;
  F-->G;
  G-->H;
  H-->I;
  A(An issue occurs with a third-party app)
  B(Whomever discovered the issue reaches out to Support Ops)
  C(If there is no issue, Support Ops creates an issue)
  D(A Support Ops DRI is determined)
  E(Support Ops DRI investigates)
  F(Once the investigation is taken as far as possible, Support Ops DRI reaches out to app support)
  G(Support Ops DRI ensures other Support Ops team members are CC'd)
  H(Support Ops DRI updates issue as they receive updates from app support)
  I(Once the issue is resolved, Support Ops DRI closes the issue)
```
