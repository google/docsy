---
title: System Checkers
description: Information about the system checkers in place
canonical_path: "/handbook/security/customer-support-operations/docs/system_checkers"
---

## Calendly

<sup>*Introduced via [gitlab-com/support/support-ops/support-ops-project#1892](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/1892)*</sup>

Handles checking and notifying about the status for the Calendly system. Works
primarily off of RSS feed for https://www.calendlystatus.com. This scrapes the
information from that RSS feed once per hour to look for new incidents and
maintenance events.

The project is located at
[gitlab-support-readiness/system-checkers/calendly](https://gitlab.com/gitlab-support-readiness/system-checkers/calendly)

## GitLab

<sup>*Introduced via [gitlab-com/support/support-ops/support-ops-project#1895](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/1895)*</sup>

Handles checking and notifiying about potential pipelines issues on important
projects we utilize on gitlab.com. This checks for an abnormal amount of pending
jobs (50 or more) and abnormally long running jobs (25 minutes or longer).

The project is located at
[gitlab-support-readiness/system-checkers/gitlab](https://gitlab.com/gitlab-support-readiness/system-checkers/gitlab)

## Pagerduty

<sup>*Introduced via [gitlab-com/support/support-ops/support-ops-project#1891](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/1891)*</sup>

Handles checking and notifying about:

- the status for the Pagerduty system
- non-accessible Support schedules
- non-accessible Support services
- non-accessible Support escalation policies

Works off of the Pagerduty API and webhooks sent from
https://status.pagerduty.com/

The project is located at
[gitlab-support-readiness/system-checkers/pagerduty](https://gitlab.com/gitlab-support-readiness/system-checkers/pagerduty)

## Unbabel

<sup>*Introduced via [gitlab-com/support/support-ops/support-ops-project#1893](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/1893)*</sup>

Handles checking and notifying about the status for the Unbabel system. Works
off of the [Unbabel status API](https://status.unbabel.com/public-api) to check
for information about incidents.

The project is located at
[gitlab-support-readiness/system-checkers/unbabel](https://gitlab.com/gitlab-support-readiness/system-checkers/unbabel)

## Zendesk Global

<sup>*Introduced via [gitlab-com/support/support-ops/support-ops-project#1889](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/1889)*</sup>

Handles checking and notifying about the status for the Zendesk Global system.
Works off of the
[Zendesk status API](https://developer.zendesk.com/api-reference/status_api/status_api/)
to check for information about incidents and maintenances.

The project is located at
[gitlab-support-readiness/system-checkers/zendesk-global](https://gitlab.com/gitlab-support-readiness/system-checkers/zendesk-global)

## Zendesk US Government

<sup>*Introduced via [gitlab-com/support/support-ops/support-ops-project#1890](https://gitlab.com/gitlab-com/support/support-ops/support-ops-project/-/issues/1890)*</sup>

Handles checking and notifying about the status for the Zendesk US Government
system. Works off of the
[Zendesk status API](https://developer.zendesk.com/api-reference/status_api/status_api/)
to check for information about incidents and maintenances.

The project is located at
[gitlab-support-readiness/system-checkers/zendesk-us-government](https://gitlab.com/gitlab-support-readiness/system-checkers/zendesk-us-government)
