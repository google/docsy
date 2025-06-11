---

title: GitLab Dedicated Observability and Monitoring (Grafana)
category: GitLab Dedicated
description: "GitLab Dedicated Support - Observability and Monitoring"
---

## Grafana data is primarily for internal use

Monitoring and observability graphs from Grafana should not be shared with
customers by default.

If you think sharing graphs would benefit the customer, please read
[Sharing internal logs, data & graphs]({{< ref "dedicated#sharing-internal-logs-data--graphs" >}}).

## Accessing Grafana

The credentials for accessing the Grafana instance associated with each GitLab Dedicated tenant are stored in the `GitLab Dedicated - Support` [1Password Vault](/handbook/security/#vaults).  As with [the OpenSearch instances]({{< ref "dedicated_logs" >}}), the passwords are referred to by customer number. Use the information in the internal note in the ticket and the subdomain in the `website` field in 1Password to find the credentials for the correct GitLab Dedicated tenant.

## Finding Dashboards

When logging in for the first time, dashboards are not immediately visible and you will be greeted by a Grafana welcome screen. To find the dashboards:

1. Locate the four-box icon situated in the left pane. When you hover over it, a tooltip will appear identifying it as the Dashboards link.
1. Choose either the Dashboard option or the Browse option. Both will lead you to the same destination.
1. At the center, there is a folder named `General`. Expand this folder to view the available dashboards.

## Grafana tips

The `General / Triage` dashboard is most useful for an emergency as it has the pods all laid out in a single view. By default it has 6 hours of data. It is helpful for finding blips & dips. Use this data to correlate to other dashboards.

Remember that Grafana is used for visualizing issues and spotting problems. It won't tell us directly what is wrong. You must correlate to [the logs]({{< ref "dedicated_logs" >}}) to find the exact problem.

As an example, the Triage dashboard may show that `webservice` errors are increasing. Use this to correlate an approximate time and [filter]({{< ref "dedicated_logs#fields-and-filters" >}}) out the other logs by the `kubernetes.labels.app` to find the error for just `webservice`.

The `General / Triage` dashboard contains information about **Service Apdex** (application performance index), **Service Error Ratio**, **RPS** (requests per second) and **Saturation** information for each service included in that dashboard. In general, you should notice that increases in the **Service Error Ratio** correspond to decreases in the **Service Apdex**. Read more about [GitLab Dedicated SLAs](/handbook/engineering/infrastructure/team/gitlab-dedicated/slas/).
