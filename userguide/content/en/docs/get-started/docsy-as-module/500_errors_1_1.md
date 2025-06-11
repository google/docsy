---
title: Diagnose Errors on GitLab.com
description: This guide provides resources for diagnosing HTTP 5XX errors on GitLab.com.
category: GitLab.com
subcategory: Troubleshooting
---

### Overview

This guide provides resources for the diagnosing of **5XX** errors on GitLab.com. This is used when a user contacts support stating they're receiving either a `500` or `503` error on GitLab.com.

### Reports of Slowness

If reports of slowness are received on GitLab.com, first take a look at the [GitLab Grafana Monitor](https://dashboards.gitlab.net/d/mnbqU9Smz/fleet-overview?orgId=1), especially:

- Worker CPU -> Git CPU Percent

- Worker Load -> Git Worker Load

#### Degraded Runner Performance

If a customer reports a shared runner running slower than it normally does, it is likely there is a degraded performance happening during the period the customer experienced slowness on the pipeline.

Check the [CI Runners Overview](https://dashboards.gitlab.net/d/ci-runners-main/ci-runners-overview?orgId=1) graphs where you will find an increase in queue apdex and latency.

Check on the [#feed_alerts](https://gitlab.slack.com/messages/C12RCNXK5), [#production](https://gitlab.slack.com/messages/C101F3796), and [#incident-management](https://gitlab.slack.com/messages/CB7P5CJS1) Slack channels to ensure this isn't an outage or infrastructure issue.

### If you notice slowness yourself on GitLab.com

Before you post to #production or make an issue, here are some helpful ways to capture data that help to narrow down the issue(s):

1. You can add `performance_bar=flamegraph` query parameter to generate a [CPU flamegraph](https://docs.gitlab.com/ee/development/profiling.html#speedscope-flamegraphs).
1. Use the [performance bar](https://docs.gitlab.com/ee/administration/monitoring/performance/performance_bar.html) by typing `pb` in your browser window.  Reload the page and grab the information from the server side.
1. If using Chrome, open the Chrome developer tools (View > Developer > Developer Tools), reload the page, and look at the Network tab.  This will show all of the requests and times.
1. If using Firefox, there is a similar network view under Tools > Web Developer > Network which will show requests and timing.

Screenshots from any of these tools will greatly help any engineers looking into the problems.

### Connection Troubleshooting

If our customer is reporting problems connecting to GitLab.com, we should ask for the following:

```shell
traceroute gitlab.com
curl http://gitlab.com/cdn-cgi/trace
curl https://gitlab.com/cdn-cgi/trace
curl -svo /dev/null https://gitlab.com
```

### Reports of File Corruption

A `503` error on a merge request page may also happen if the repository is corrupted. To confirm, a push to a corrupted repository may show the following:

```plaintext
data/repositories/@hashed/ee/98/ee98b34f343b4e48106fff666d12b61f23f.git/objects/f7/e7f4782) is corrupt
```

If the customer is reporting a similar error above, take the following steps to verify if their file server was affected:

1. Obtain the project URL of the affected repository.
1. Open the project admin page using the URL `https://gitlab.com/admin/projects/user-namespace`.
1. Locate the server of the repository by looking at `gitaly-storage-name`.
1. Search the [GitLab Infrastructure issue tracker](https://gitlab.com/gitlab-com/gl-infra/infrastructure/issues) for any related issue.
1. If an issue is found related to the file server, post the ticket number in the issue so an infrastructure engineer can look into it.

### Workflows

The following workflows will guide you on how to search Kibana and/or Sentry for the event in our logs that caused a particular `5XX` error.

#### Searching Kibana

See the [500-specific section in the Kibana]({{< ref "kibana#searching-kibana-for-500-level-errors" >}}) workflow.

#### Searching Sentry

See the [Sentry workflow]({{< ref sentry >}}).

A video walkthrough of investigating 500 errors using Kibana and Sentry can be seen [here](https://youtu.be/o02t3V3vHMs) (GitLab Unfiltered).

#### Get the results into an issue

Once results have been found in either Kibana or Sentry, do the following.

1. Gather as much information as possible. Make an internal note on the ticket including links to the logs found in either Kibana or Sentry.
1. Search the [GitLab issue tracker](https://gitlab.com/gitlab-org/gitlab) for any duplicate or related issue.
1. Confirm if the issue is known or unknown and proceed accordingly: [Issue is known](#issue-is-known) or [Issue is unknown](#issue-is-unknown).

In a Priority 1/Severity 1 situation, consider a [dev escalation](/handbook/engineering/development/processes/Infra-Dev-Escalation/process.html).

#### Responding to the user

##### Issue is known

If the issue is known it should have a corresponding issue in the GitLab issue tracker. If you found an entry in Sentry that has been converted into an issue, you should see the issue number in the header within Sentry:

![Sentry linked issue](/images/support/sentry-linked-issue.png)

Click the issue number to be taken directly to the issue where you can leave a comment to provide a link to the Zendesk ticket.

Then, respond to the user with information about the cause of the issue, provide a link to it, and invite them to subscribe to it for updates.

##### Issue is unknown

###### Issues found in Sentry

1. Convert the issue to a GitLab issue by using the "Create GitLab Issue" button on the issue page.
1. Comment on the issue providing a link to the Zendesk ticket.
1. Add any additional labels if needed such as `customer`, [priority and severity](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/development/contributing/issue_workflow.md#severity-labels), and the appropriate DevOps stage.
1. Respond to the user with information about the cause of the issue, provide a link to it, and invite them to subscribe to it for updates.

###### Issues found in Kibana

1. Get a ["short url"](https://www.elastic.co/guide/en/kibana/3.0/sharing-dashboards.html) to the Kibana logs.
1. Create a new [GitLab](https://gitlab.com/gitlab-org/gitlab) issue and be sure to include a link to the Zendesk ticket along with the Kibana logs.
1. Add the `bug` label and any others if needed such as `customer`, [priority and severity](https://gitlab.com/gitlab-org/gitlab-ce/blob/master/doc/development/contributing/issue_workflow.md#severity-labels), and the appropriate DevOps stage.
1. Respond to the user with information about the cause of the issue, provide a link to it, and invite them to subscribe to it for updates.

>**Note:** If a **5xx** error is found in Kibana then there is a high chance that there is also a Sentry issue for it. In those cases, add the `json.correlation_id` filter and search for the value in Sentry with `correlation_id:`
