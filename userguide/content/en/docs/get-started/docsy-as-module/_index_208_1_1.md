---
title: Standardized machine identity
status: proposed
creation-date: "2025-02-19"
authors: [ "@ifarkas", "@bdenkovych", "@dblessing" ]
coaches: [ "@grzesiek" ]
dris: [ "@hsutor", "@adil.farrukh" ]
owning-stage: "devops::software supply chain security"
participating-stages: []
# Hides this page in the left sidebar. Recommended so we don't pollute it.
toc_hide: true
---

<!-- Design Documents often contain forward-looking statements -->
<!-- vale gitlab.FutureTense = NO -->

<!-- This renders the design document header on the detail page, so don't remove it-->
{{< engineering/design-document-header >}}

## Summary

GitLab currently supports more than 10 different bot user account types, each managed by different teams with inconsistent permission policies and authentication methods. This fragmentation creates challenges in ownership clarity, potential security vulnerabilities, customer visibility issues, and significant maintenance overhead. This proposal establishes service accounts as the core machine identity. Service accounts provide capabilities similar to regular users while enforcing important security constraints like UI sign-in restrictions and implementing streamlined permission policies. As part of this excercise, we would also need to ensure service accounts can be introduced on the free tier of GitLab with appropriate abuse prevention controls.

## Motivation

A consolidated approach to machine identities through service accounts will:

- Simplify GitLab's machine access story by providing a unified interface and code path
- Enhance security through consistent authentication methods and access controls
- Reduce engineering overhead by centralizing bot-related code and policies
- Improve customer experience by allowing management of machine identities alongside other users
- Establish clear ownership and responsibility for machine identities
- Create proper isolation between human users and machine identities to facilitate easier ownership transfer and management.

### Goals

- Enhance service accounts with features to support all required use-cases (e.g., project/group allow lists)
- Standardize on service accounts for all new machine identities
- Create migration paths for existing bot user types
- Simplify permission policies for machine identities
- Develop a revised monetization strategy for service accounts in collaboration with product teams
- Bring service accounts to GitLab Free tier with appropriate abuse prevention controls

### Non-Goals

The following efforts are handled separately in their respective blueprints, and
are out of scope for this proposal:

- Defining a Token Exchange Service
- Creating a low-privilege unified token as part of token consolidation

Machine identity consolidation, as proposed here, is already aligned with the
direction of these initiatives.

## Proposal

### User type definition

To enforce clearer security and permission boundaries, standardize types into
2 categories:

- human users
- service accounts (machine identities): non-human accounts used for automation,
  integrations, and machine-to-machine interactions.

All internal bot-related functionalities will be consolidated under service
account type.
This eliminates security inconsistencies by applying uniform authentication and
access control across all external and internal machine identities.

### Service accounts availability in the hierarchy

Service accounts are currently available at the top-group level on .com, and at
the instance level for self-managed.

To provide flexibility and support a wider range of use cases, service accounts
should be available at all levels in the hierarchy:

- instance level
- organizations
- groups and subgroups
- projects

Instance level service accounts enable global automation and system-wide
integrations. Group and project level service accounts allows granular control
and access over machine identities.

#### Permissions

The current permission model of service accounts will continue to be applied
across all hierarchy levels.
Owners of the namespace will be able to manage service accounts associated with
that specific namespace, regardless of who created them.

### Tiering

Service accounts are currently a Premium / Ultimate feature.
To fully support machine identities, Service accounts need to be available in
the Free tier while preserving as much functionality as possible to prevent edge
cases and code fragmentation.
However, additional limits may be necessary to prevent abuse and security risks
in the Free tier. Token expiration for Personal access tokens:

- In Premium / Ultimate, token expiry for PATs of service accounts is not
  enforced. PATs can be created with optional expiration.
- In Free tier, expiration should always be required to prevent long-lived
  tokens from becoming a security risk. Keeping optional expiry as a Premium /
  Ultimate feature maintains a balance between flexibility and security
  controls.

### Visibility

Service accounts are created at a specific point in the hierarchy and are only
visible and accessible within that hierarchical branch.
Eg. a service account created at a subgroup-level will not be visible by sibling
or parent groups, or unrelated organizations.

This restriction means that users outside of the service account's hierarchical
branch won't be able to discover or add them as members, nor will the service
account be able to access resources outside that scope.

This is considered a non-breaking change, as existing memberships remain
unaffected.
However, with this change enabled, service accounts will no longer be accessible
outside their hierarchical scope.

### System-generated service accounts

System-generated service accounts will follow the same visibility and access
rules as user-created ones.
Their management will also not differ: namespace owners will be able to manage
them like any other service account.
The UI may indicate that a service account is system-generated or user-created
for clarity.

### Further restrictions

To prevent potential abuse, service accounts will have the following
limitations:

- Service accounts do not have personal namespaces.
- Service accounts are prohibited from creating other service accounts.
  This prevents unintended proliferation of machine identities, lateral movement
  from potential malicious actors, and maintains clear ownership.
- Service accounts are prohibited from creating top-level namespaces.
  This ensures that all top-level groups remain under explicit human ownership.
- Free and trial namespaces will have a limit on the number of service accounts.
  To support token consolidation (where tokens may be backed by a
  system-generated system account), tokens in these namespaces may also be
  subject to limits.

### Open questions

- This proposal aligns with industry standards for service accounts, with a
  clear separation between human and machine identities, and leveraging the
  native access control mechanisms like memberships, roles, and inheritance.
  It may still be valuable to further validate that we are following common
  patterns and meeting user expectations.
- How do we decouple membership and access? How do we support cross-project
  access? Is relying on multiple service accounts acceptable, or do we need to
  support cross-project access under a single token?

## Alternative Solutions

See [Alternative Solutions](alternative_solutions.md).
