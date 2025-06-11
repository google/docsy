---
title: System Checkers
description: Information about the system checkers in place
canonical_path: "/handbook/support/readiness/operations/docs/system_checkers"
---

## Calendly

Handles checking and notifying about the status for the Calendly system. Works
primarily off of RSS feed for https://www.calendlystatus.com. This scrapes the
information from that RSS feed once per hour to look for new incidents and
maintenance events.

The project is located at
[gitlab-support-readiness/system-checkers/calendly](https://gitlab.com/gitlab-support-readiness/system-checkers/calendly)

## GitLab

Handles checking and notifiying about potential pipelines issues on important
projects we utilize on gitlab.com. This checks for an abnormal amount of pending
jobs (10 or more) and abnormally long running jobs (25 minutes or longer).

The project is located at
[gitlab-support-readiness/system-checkers/gitlab](https://gitlab.com/gitlab-support-readiness/system-checkers/gitlab)

## Pagerduty

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

Handles checking and notifying about the status for the Unbabel system. Works
off of the [Unbabel status API](https://status.unbabel.com/public-api) to check
for information about incidents.

The project is located at
[gitlab-support-readiness/system-checkers/unbabel](https://gitlab.com/gitlab-support-readiness/system-checkers/unbabel)

## Zendesk Global

Handles checking and notifying about the status for the Zendesk Global system.
Works off of the
[Zendesk status API](https://developer.zendesk.com/api-reference/status_api/status_api/)
to check for information about incidents and maintenances.

The project is located at
[gitlab-support-readiness/system-checkers/zendesk-global](https://gitlab.com/gitlab-support-readiness/system-checkers/zendesk-global)

## Zendesk US Government

Handles checking and notifying about the status for the Zendesk US Government
system. Works off of the
[Zendesk status API](https://developer.zendesk.com/api-reference/status_api/status_api/)
to check for information about incidents and maintenances.

The project is located at
[gitlab-support-readiness/system-checkers/zendesk-us-government](https://gitlab.com/gitlab-support-readiness/system-checkers/zendesk-us-government)
