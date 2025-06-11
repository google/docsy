---
title: ADWR
description: Support Operations documentation page for account deletion weekly reports
canonical_path: "/handbook/support/readiness/operations/docs/gitlab/adwr"
---

<sup>*Introduced via [support-team-meta#3190](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/3190)*</sup>

## What is the ADWR

ADWR (Account Deletion Weekly Report) is a project within gitlab.com that
generates weekly reports concerning account deletion requests.

The source code for it is located
[here](https://gitlab.com/gitlab-com/support/toolbox/adwr).

## How does the ADWR work

ADWR works by utilizing GitLab CI/CD and ruby scripts. It runs in two stages:

- gather
- create

### gather stage

This stage runs the `./bin/gather` script, which includes the ADWR lib files and
calls the function `ADWR::Gather.run!`. This function makes an API request to
gitlab.com to grab all the issues within the
[Account Deletion and Other Requests project](https://gitlab.com/gitlab-com/gdpr-request)
that are in an open state. It then compiles these issues into a JSON file, which
is stored as an artifact.

### create stage

This stage runs the `./bin/create` script, which includes the ADWR lib files and
calls the function `ADWR::Create.run!`. This function uses the artifact made in
the [gather stage](#gather-stage) to generate a report (which is an
[ADWR issue](https://gitlab.com/gitlab-com/support/internal-requests/-/issues?scope=all&state=opened&label_name[]=ADWR)).

The body of the created issues comes from parsing the issues from the artifact
made in the [gather stage](#gather-stage), skipping those without an assignee.

This report will contain a table with the following information:

- the issue title
- the assignee's gitlab.com username
- the assignee's manager's gitlab.com username
- labels the issue in question has.

## When does the ADWR run

Currently, ADWR runs every Sunday at 0000 UTC.

## Change management

Any merge requests made to the corresponding repos produce changes in real time.
As such, these are "on demand" style changes and all "scheduling" should occur
via the parent issue of the changes themselves.
