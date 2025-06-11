---
title: Account deletions
description: Support Operations documentation page for the account deletion form and processor
canonical_path: "/handbook/support/readiness/operations/docs/gitlab/account_deletions"
---

<sup>*Introduced via [support-team-meta#1329](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/1329)*</sup>

## What is the account deletion form?

The account deletion form is a simple HTMl form generated via GitLab Pages that
is used for account deletion and data privacy requests.

The source code for it is located
[here](https://gitlab.com/gitlab-com/support/support-ops/forms/account-deletion).

## What is the account deletion processor?

The account deletion processor is a set of scripts that handle requests sent
from the account deletion form.

The source code for it is located
[here](https://gitlab.com/gitlab-support-readiness/processors/account-deletion-processor).

## What are the triage policies?

Utilizing the
[GitLab Triage Gem](https://gitlab.com/gitlab-org/ruby/gems/gitlab-triage), the
triage policies are a group of conditions and actions that are enacted upon
issues within the
[Account Deletion and Other Requests project](https://gitlab.com/gitlab-com/gdpr-request).

The source code for it is located
[here](https://gitlab.com/gitlab-com/gdpr-request/-/blob/master/.triage-policies.yml)

## How does it all work?

The account deletion form, when submitted, sends an AJAX request to trigger a
pipeline on ops.gitlab.net. This then runs the code of the account deletion
processor.

The account deletion processor will then analyze the response to determine the
validity of the request itself. The end result of this analyzing is an issue
being created via service desk.

The triage policies of the project where the issue is made then act on the issue
depending on the various conditions used within.

## Change management

Currently, the form is set to send the pipeline triggers to the `master` branch
of the processor. This means that any merge requests made to the corresponding
repos produce changes in real time. As such, these are "on demand" style changes
and all "scheduling" should occur via the parent issue of the changes
themselves.
