---
title: Contact Management Projects
description: Operations documentation page for contact management projects
canonical_path: "/handbook/security/customer-support-operations/docs/gitlab/cmps"
---

<sup>*Introduced via [support-team-meta#4531](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/4531)*</sup>

{{% pageinfo color="warning" %}}

This is an information page for contact management projects.

If you are looking for information about managing contact management projects, please see [workflows](../../workflows/cmps).

{{% /pageinfo %}}

## What is a contact management project?

Contact management projects are projects on GitLab.com that allows a customer to manage their support contacts on Zendesk Global.

## How does it work

When commits are made on the project in question, a webhook triggers with specific variables to trigger a pipline on the [contacts project](https://gitlab.com/gitlab-support-readiness/zendesk-global/contacts).

The code itself parses the YAML file for the project that triggered the pipeline to determine what organization contact changes are required on Zendesk Global.

It will then perform a sync with the needed changes.

Depending on the results, a badge will be added to the project. This is to help the project developers know the current status of the sync.

![Success badge](https://img.shields.io/badge/Sync%20Status-Success-green)
![Failure badge](https://img.shields.io/badge/Sync%20Status-Failed-red)
