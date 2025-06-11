---
title: Sandbox
description: Support Operations documentation page for Zendesk sandbox
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/sandbox"
---

## What is the Zendesk Sandbox

The Zendesk Sandbox is a replica Zendesk instance you can use to test, learn,
replicate, etc. in an environment that is separated from production instances.

We utilize the Zendesk Sandbox in all our change management processes. This
allows us a safe and secure place to test changes/updates/etc. so we can
ensure the implementations we push into production are both stable and well
vetted.

## Where are the sandboxes?

You can locate the sandboxes via:

- [Global](https://gitlab1707170878.zendesk.com/agent/)
- [US Federal](https://gitlabfederalsupport1585318082.zendesk.com/agent)

## How to access the Zendesk Sandbox

With the Sandbox instance, we only have 50% of the seats our production Zendesk
instance has available. As such, not every person has a Sandbox account. To
request one, please utilize an
[access request issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new)
to have one provisioned. Please make sure to include:

- Why you need access to it
- How long you need access to it
- If you need heightened permissions
- Why you need heightened permissions (if applicable)
- Which instance's Sandbox access is being requested (Global / U.S. Federal)

The provisioner for these requests will be the Support Operations Manager
(@jcolyer).

When going to login, keep in mind Okta is not able to be used on the sandboxes,
so you will have to login via email address and password.

## What do we use the sandbox for?

We utilize the sandbox heavily to test all change requests. Everything we do
related to Zendesk should be tested in the sandbox first, with the results of
said test reviewed by the requester.

## Test Users and Organizations

To help both facilitate easy testing and keep the sandbox in a clean state,
Support Operations has created some test organizations and users you can use.
Whenever possible, please utilize these organizations and users to test "end
user" experiences.

As the list is ever changing, please refer to our
[Google Sheet](https://docs.google.com/spreadsheets/d/1g6lJ3AUS4EYqoBYzAdExp4v1dkzOb3GWKaMIoZikjts/edit?usp=sharing)
containing the information.

If you find you need other test organizations/users, please create an issue via the
Support Operations
[issue tracker](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/new?).
