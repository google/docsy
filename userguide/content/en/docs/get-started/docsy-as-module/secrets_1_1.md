---
stage: enablement
group: Tenant Scale
title: 'Cells: Secrets & Credentials'
toc_hide: true
---

{{% alert %}}
This document is a work-in-progress and represents a very early state of the
Cells design. Significant aspects are not documented, though we expect to add
them in the future. This is one possible architecture for Cells, and we intend to
contrast this with alternatives before deciding which approach to implement.
This documentation will be kept even if we decide not to implement this so that
we can document the reasons for not choosing this approach.
{{% /alert %}}

Where possible, each Cell should have its own distinct set of secrets.
However, there will be some secrets that will be required to be the same for all Cells in the cluster.

## 1. Definition

GitLab has a few [secrets](https://docs.gitlab.com/charts/installation/secrets.html) that need to be configured.
These secrets are [stored in different locations depending on the installation method](https://docs.gitlab.com/ee/development/application_secrets.html#where-the-secrets-are-stored).

- Secrets for encryption: `secret_key_base` (session data) and `db_key_base` (encryption at rest in the database).
- Secrets for features: `otp_key_base` and `openid_connect_signing_key`.
- Secret for encrypted files (similar to the [Rails credentials feature](https://guides.rubyonrails.org/security.html#custom-credentials)): `encrypted_settings_key_base`.

In addition to secrets stored in the "secrets" file, GitLab also uses specific secret files for inter-component
communication, for example, `GitLab Shell secret`, and used only within a Cell.

Last but not least, many features need credentials to be set up. These credentials are stored in different locations depending on the installation method:

- [`/etc/gitlab/gitlab.rb` for Omnibus](https://docs.gitlab.com/omnibus/settings/configuration.html)
- [Kubernetes secrets](https://docs.gitlab.com/charts/installation/secrets.html#smtp-password) for Charts
- [`config/gitlab.yml` for source installation](https://docs.gitlab.com/ee/administration/incoming_email.html#self-compiled-installations)

## 2. Data flow

## 3. Proposal

1. `secret_key_base` is used for: encrypted cookies, signed cookies, and Active Storage files, based on https://guides.rubyonrails.org/security.html#session-storage.
   We don't use Active Storage, as far as I know, so it's only cookies that are affected. Given that for Cells 1.0, users will be tied to a single cell, and since
   [the session cookie will include the cell ID in its name](../iterations/cells-1.0.md#proposal), it's fine to have a unique `secret_key_base` per Cell.
   Investigation issue: [`secret_key_base`](https://gitlab.com/gitlab-org/gitlab/-/issues/451146).
1. `db_key_base` is used for encryption at rest in the database, and will need to be consistent across all Cells, so that
   data can be moved easily between Cells.
   Investigation issue: [`db_key_base`](https://gitlab.com/gitlab-org/gitlab/-/issues/451148).
   1. This is especially true for the `db_key_base` secret which is used for
      encrypting data at rest in the database - so that Projects that are
      transferred to another Cell will continue to work. We do not want to have
      to re-encrypt such rows when we move Projects/Groups between Cells.
   1. In the future, we might support rotating such secrets, so that if the Org mover needs to move an organization
      from Cell1 to Cell2, it would decrypt data with Cell1 key and then re-encrypt it with Cell2 key. This is out of
      scope for Cells 1.0.
1. Secrets for features (`otp_key_base` and `openid_connect_signing_key`) will need to be consistent across all
   Cells, so that the UX is consistent.
   Investigation issues: [`otp_key_base`](https://gitlab.com/gitlab-org/gitlab/-/issues/451147), [`openid_connect_signing_key`](https://gitlab.com/gitlab-org/gitlab/-/issues/451149).
   1. Since we'll support cluster-wide Application Settings, we should first migrate these secrets to
      `ApplicationSetting` attributes first, so that the consistency of their value on each Cell is handled by
      the Application Settings synchonization mechanism.
1. Secrets for encrypted files can be different on each Cell, as long as the credentials inside the encrypted files
   are the same. That said, it might be simpler to also use the same `encrypted_settings_key_base` on all Cells for
   simplicity sake. [Investigation issue](https://gitlab.com/gitlab-org/gitlab/-/issues/451150).
1. Secrets for inter-component communication inside a Cell only should be uniquely generated per Cell.
1. In general, credentials for various features should be the same on all Cells, unless a feature is set up in a
   Cell-specific way (e.g. if LDAP needs to be set up on a specific Cell).
   GitLab Dedicated already have a solution for
   [sharing SMTP credentials in a multi-tenant environment](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/team/-/blob/main/runbooks/custom-smtp.md#sharing-smtp-credentials-in-a-multi-tenant-environment)
   so we should use a similar solution to set up cluster-wide configuration.

## 4. Evaluation

## 4.1. Pros

- Secrets are consistent accross most cells
- No need to handle data migration between cells

## 4.2. Cons

- Security of cells is not higher than the current GitLab.com installation
