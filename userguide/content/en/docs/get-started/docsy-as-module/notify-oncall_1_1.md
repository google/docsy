---
title: Notify Oncall
description: Operations documentation page for the Notify Oncall mechanism
canonical_path: "/handbook/security/customer-support-operations/docs/slack/notify-oncall"
---

<sup>*Introduced via [gitlab-com/support/support-team-meta#6109](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/6109)*</sup>

{{% pageinfo color="info" %}}

This is an informational page for the notify oncall mechinism. It may not reflect the way we actually manage it.

If you are looking for information about maintaining it, please see [our workflows](../../workflows/)

{{% /pageinfo %}}

## Where does it live

It lives within the Readiness namespace at the [notify-oncall project](https://gitlab.com/gitlab-support-readiness/slack/notify-oncall).

## How does it work

A [Pagerduty webhook](https://developer.pagerduty.com/docs/db0fa8c8984fc-overview) is used when an incident is triggered on the [Customer Support - US Federal service](https://gitlab.pagerduty.com/service-directory/P8K2XHK), which in turn triggers a CI/CD pipeline within the [notify-oncall project](https://gitlab.com/gitlab-support-readiness/slack/notify-oncall).

This then processes the payload from the Pagerduty webhook to determine if a human is currently assigned to be oncall. If one is, the scripts exit with a 0 status code.

If no human is currently assigned, the scripts then determine a list of US Government first shift agents who are available (i.e. not on PTO). Using this list, the scripts ping the availabel agents via Slack in the [#spt_us-government](https://gitlab.enterprise.slack.com/archives/C03RTN3JEJ2) Slack channel.
