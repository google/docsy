---
title: "Compliance Frameworks ADR 008: Policy Relationships"
toc_hide: true
---

## Context

We need the ability to determine if a security policy exists that satisfies a compliance control.

## Option 1

We discussed using a join table between requirements and policies. We also discussed using a join table
between controls and policies. Both of these options would accomplish the goal of mapping policies.

The existing structure of security policies -> security controls is stored in YAML, while the structure of
compliance requirements -> compliance controls is stored in separate database tables. The misalignment in
storage patterns serves as a warning sign that any implementation connecting the two data structures won't
be as simple as we'd like it to be. For instance, updates to security policies will need to also sometimes
need to update the matching compliance records.

In this setup, the recurring compliance checks need to confirm these database records to update the
status records, and create violations records when appropriate.

## Option 2

The second option we discussed was relying on the evaluation engine to verify if a control has a corroborative
policy. This would allow us to avoid the complexity of keeping the security and compliance data in sync. This
approach doesn't require us to update database records when policies change.

## Decision

We decided to rely on the evaluation engine to determine if a security policy exists that satisfies a compliance
control. We will not utilize database records to match compliance controls to security policies.
