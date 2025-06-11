---
title: Notify Oncall
description: Support Operations documentation page for the Notify Oncall mechanism
canonical_path: "/handbook/support/readiness/operations/docs/slack/notify_oncall"
---

## Where does it live

It lives within the Readiness namespace at the
[notify-oncall project](https://gitlab.com/gitlab-support-readiness/slack/notify-oncall).

## How does it work

A
[Pagerduty webhook](https://developer.pagerduty.com/docs/db0fa8c8984fc-overview)
is used when an incident is triggered on the
[Customer Support - US Federal service](https://gitlab.pagerduty.com/service-directory/P8K2XHK),
which in turn triggers a CI/CD pipeline within the
[notify-oncall project](https://gitlab.com/gitlab-support-readiness/slack/notify-oncall).

This then processes the payload from the Pagerduty webhook to determine if a
human is currently assigned to be oncall. If one is, the scripts exit with a 0
status code.

If no human is currently assigned, the scripts then determine a list of US
Government first shift agents who are available (i.e. not on PTO). Using this
list, the scripts ping the availabel agents via Slack in the
[#spt_us-government](https://gitlab.enterprise.slack.com/archives/C03RTN3JEJ2)
Slack channel.
