---
owning-stage: "devops::software supply chain security"
title: 'Standardized machine identity: alternative solutions'
toc_hide: true
---

## Alternative Solutions

### Option 1 - using service accounts

In addition to the current proposal, we also considered the following additional
features:

#### System-generated service accounts

To support internal features and automation, some service accounts will be
created and managed automatically.
These system-generated service accounts differ from user-created service
accounts in terms of control and visibility.

To prevent accidental disruption of application flows, system-generated service
accounts will not be directly manageable by users or admins:

- they cannot be edited, deleted, or modified.
- their membership is automatically managed: the membership is added or removed
  based on the lifecycle of the feature or integration that depends on them.

This protects critical application flows from being broken due to
misconfigurations or malicious actions (eg. removing a necessary system account
from a project).

#### Creation and membership allowlists

Allowlists enable group or instance administrators to define and enforce
boundaries on where service accounts can be created and used.
They can restrict:

- Creation: Define which groups or projects are permitted to create new service
  accounts.
- Membership: Define which groups or projects a service account may be added to
  as a member.

This mechanism helps ensure that service accounts are not unintentionally or
maliciously created, or granted access to unrelated or sensitive parts of the
hierarchy.
It also allows top-level owners to retain control over the footprint of service
accounts created under their domain.

Note: these restrictions apply only to user-created service accounts.
System-generated service accounts can be created regardless of the allowlist to
avoid disrupting internal features and integrations.

#### Downsides

- Introduces 2 implicit types of service accounts (user-created vs
  system-generated).
  This distinction could be made explicit (see Option 2).
- Access model issues persist: while allowlists mitigate them to an extent, they
  don't fully resolve the problem, and increase the risk of misconfiguration.
  If a service account is added to multiple projects, neither the project
  owners, nor the service account owner (top-level group owner) has visibility
  into where it's used or what access it has.
- Allowlists and the 2 implicit types adds significant complexity to both user
  experience and the codebase.

### Option 2 - introduce a simplified user type

Service accounts have introduced significant complexity over time:

- It's a licensed feature
- They support multiple memberships, increasing the potential for accidental
  access sprawl.
- Ownership and membership are decoupled, with ownership limited to creation
  time and lacking visibility into access.
- User experience: administrative overhead

  The current model requires a project owner to go through the following steps:
    1. contact the instance admin and request a service account
    2. instance admin creates a service account
    3. project owner adds the service account as a project member
    4. contact the instance admin again, and request a PAT for the service
       account
    5. instance admin creates the PAT for the service account
    6. instance admin has to securely transfer the token to the project owner as
       this cannot be done in `gitlab-rails`

Option 1 adds further complexity:

- It introduces a distinction between user-created and system-generated service
  accounts.
- It relies on allowlists to partially mitigate the downsides of multiple
  memberships and limited visibility into access.

Since service accounts are already generally available, we cannot change their
behavior without disrupting existing user flows.
Instead:

- Preserve existing service accounts as-is for backward compatibility and as a
  machine identity option for users.
- Introduce a new user type (eg. service user) for all internal machine identity
  use cases, including token consolidation.

This service user would align more closely with the
[original proposal of service accounts](https://gitlab.com/gitlab-org/gitlab/-/issues/284393):

- Available in the `CE`
- Single membership: a service user can only belong to a single group or project
- No distinction between ownership and membership: the namespace that creates
  the service user retains full control.

This approach results in a significantly cleaner access model, avoids the
pitfalls of the existing service account implementation, and provides a
lightweight path forward for automation needs.

Cross-group or cross-project operations would still be supported with this
approach.
They would simply require a separate token for each group / project the service
user needs to access.
If those groups belong to different organizations, cross-organization access
using a single access token wouldn't be possible anyway, due to organization
isolation.

Via introducing breaking changes over time, we could be simplify the existing
service account model and eventually merge the two user types to reduce
maintenance overhead.

#### Downsides

- Builds on 2 user types for machine identity, instead of consolidating under a
  single one.
- Despite the access model being simpler, it introduces some challenges.
  Eg. Amazon Q integration would require adding the service account to the
  top-level group, granting it access to all projects in the hierarchy.

### Option 3 - some combination of 1 & 2

As an example: starting from a defined cutoff date, new memberships for service
accounts cannot be created.
This preserves current access while simplifying future behavior without
introducing a new user type.
