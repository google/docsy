---
title: "Debugging the Gitaly service"
---

## About this document

This document is intended for **Gitaly engineers**, to become familiar with GitLab's production layout and gain the ability to effectively debug production problems. While the focus is on SaaS, many of the skills transfer also to debugging self-managed instances.

## Generic GitLab background

Skim / read the following, focusing on an overview then on Gitaly:

- [Production Architecture](../../../../infrastructure/production/architecture/)
- [Monitoring](../../../../monitoring/#monitoring)

Other useful links:

- [Product sections, stages, groups, and categories](../../../../../../product/categories/)
- [Features by Group](../../../../../../product/categories/features/)

### Gitaly specific background

- Familiarize yourself with Gitaly's [README](https://gitlab.com/gitlab-org/gitaly/-/blob/master/README.md?ref_type=heads)
- Take a look at [SRE's runbooks](https://gitlab.com/gitlab-com/runbooks/-/tree/master/docs/gitaly)

### Gitaly in Production

Both `gitlab.com` and Dedicated use Gitaly in "sharded" mode, that is, without Praefect (Gitaly Cluster).

## Monitoring dashboards

We have some useful pre-built monitoring dashboards on GitLab's internal Grafana instance. All dashboards are listed in [this folder](https://dashboards.gitlab.net/dashboards/f/gitaly/gitaly-service). Please note that some of them are fairly outdated.

The following dashboards are most common:

- [Gitaly: Overview](https://dashboards.gitlab.net/d/gitaly-main/gitaly3a-overview?orgId=1&var-PROMETHEUS_DS=default&var-environment=gprd&var-stage=main). This dashboard contains cluster-wide aggregated metrics. It is used to determine the overall health of the cluster and make it easy to spot any outlier node.
- [Gitaly: Host details](https://dashboards.gitlab.net/d/gitaly-host-detail/gitaly3a-host-detail?orgId=1). This dashboard contains more detailed metrics of a particular node.
- [Gitaly Housekeeping statistics](https://dashboards.gitlab.net/d/Z2xwZIP7k/gitaly-housekeeping-statistics?orgId=1&refresh=5m). This dashboard shows detailed operational information of [Gitaly housekeeping feature](https://docs.gitlab.com/ee/administration/housekeeping.html).
- [Gitaly: Rebalance dashboard](https://dashboards.gitlab.net/d/gitaly-rebalancing/gitaly3a-rebalance-dashboard?from=now-6h%2Fm&to=now%2Fm&var-PROMETHEUS_DS=default&var-environment=gprd&var-fqdn=gitaly-cny-01-stor-gprd.c.gitlab-production.internal&orgId=1): This dashboard shows the relative balance between Gitaly nodes. It is used to determine when we need to relocate the repositories of a node to others.

A Gitaly dashboard could be either auto-generated or manually drafted. We use Jsonnet (a superset of JSON) to achieve dashboards-as-code. The definitions of such dashboards are located [in this folder](https://gitlab.com/gitlab-com/runbooks/-/tree/master/dashboards/gitaly?ref_type=heads). Recently, that's the recommended way to manage an observability dashboard. It allows us to use GitLab's built-in libraries, resulting in a highly standardized dashboard.

A standardized dashboard should have a top-level section containing environment filters, node filters, and useful annotations such as feature flag activities, deployments, etc. Some dashboards have an interlinked system that connects Grafana and Kibana with a single click.

Such dashboards usually include two parts. The second half contains panels of custom metrics collected from Gitaly. The first half is more complicated. It contains GitLab-wide indicators telling if Gitaly is "healthy" and node-level resource metrics. The aggregation and calculation are sophisticated. In summary, those dashboards tell us if Gitaly performs well according to predefined [thresholds](https://gitlab.com/gitlab-com/runbooks/-/blob/master/metrics-catalog/services/gitaly.jsonnet), . We could contact [Observability team](/handbook/engineering/infrastructure-platforms/production-engineering/observability/) for any questions.

![Gitaly Debug Indicators](/images/engineering/infrastructure-platforms/data-access/gitaly/gitaly-debug-indicators.png)

Some examples of using built-in dashboards to investigate production issues, from an Engineer's point of view:

- https://gitlab.com/gitlab-com/gl-infra/production/-/issues/18156#note_1965772736
- https://gitlab.com/gitlab-com/gl-infra/production/-/issues/15980#note_1457815084
- https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/23532#note_1374642198

## Gitaly's Prometheus metrics

A panel in a dashboard is a visualization of the aggregated version of underlying metrics. We use [Prometheus](https://prometheus.io/docs/introduction/overview/) to collect metrics. To simplify, the Gitaly server exposes an HTTP server ([code](https://gitlab.com/gitlab-org/gitaly/-/blob/master/internal/cli/gitaly/serve.go#L514)) that allows Prometheus instances to fetch metrics periodically.

In a dashboard, you can click on the top-right hamburger button and choose "Explore" to get access to the underlying metrics. Or you could use [the Explore page](https://dashboards.gitlab.net/explore) to play with metrics.

![Gitaly Debug Explore](/images/engineering/infrastructure-platforms/data-access/gitaly/gitaly-debug-explore.png)

Unfortunately, we don't have a curated list of all Gitaly metrics as well as their definition. So, you might need to look up their definition at multiple places. Here is [the list of all Gitaly-related metrics](https://dashboards.gitlab.net/explore?schemaVersion=1&panes=%7B%22pum%22%3A%7B%22datasource%22%3A%22mimir-gitlab-gprd%22%2C%22queries%22%3A%5B%7B%22refId%22%3A%22A%22%2C%22expr%22%3A%22group+by%28__name__%29+%28%7B__name__%3D%7E%5C%22.*gitaly.*%5C%22%2C+job%21%3D%5C%22prometheus%5C%22%7D%29%22%2C%22range%22%3Atrue%2C%22instant%22%3Atrue%2C%22datasource%22%3A%7B%22type%22%3A%22prometheus%22%2C%22uid%22%3A%22mimir-gitlab-gprd%22%7D%2C%22editorMode%22%3A%22code%22%2C%22legendFormat%22%3A%22__auto%22%7D%2C%7B%22refId%22%3A%22B%22%2C%22expr%22%3A%22group+by%28__name__%29+%28%7Btype%3D%5C%22gitaly%5C%22%2C+job%21%3D%5C%22prometheus%5C%22%7D%29%22%2C%22range%22%3Atrue%2C%22instant%22%3Atrue%2C%22datasource%22%3A%7B%22type%22%3A%22prometheus%22%2C%22uid%22%3A%22mimir-gitlab-gprd%22%7D%2C%22editorMode%22%3A%22code%22%2C%22legendFormat%22%3A%22__auto%22%7D%5D%2C%22range%22%3A%7B%22from%22%3A%22now-1h%22%2C%22to%22%3A%22now%22%7D%7D%7D&orgId=1). There are some sources

- Node-level or environmental metrics. Those metrics are powered by other systems that host the Gitaly process. They are not exposed by Gitaly but are very useful, for example: CPU metrics, memory metrics, or cgroup metrics.
- Gitaly-specific metrics. Those metrics are accounted for directly in the code. Typically, they have `gitaly_` prefixes.
- Aggregated metrics, such as combining different metrics or downsizing metrics due to high cardinality issues. The list of Gitaly's aggregated metrics is listed [in this file](https://gitlab.com/gitlab-com/runbooks/-/blob/master/mimir-rules/gitlab-gprd/gitaly/gitaly.yml).

![Gitaly Debug Metric Lists](/images/engineering/infrastructure-platforms/data-access/gitaly/gitaly-debug-list-metrics.png)

In the code, you'll see something like the following. Any registered metrics are available when Prometheus scrapes from the endpoint. Tracing those instances, you could find the usage of Gitaly-specific metrics.

```go
repoCounter := counter.NewRepositoryCounter(cfg.Storages)
prometheus.MustRegister(repoCounter)

packObjectsServedBytes = promauto.NewCounter(prometheus.CounterOpts{
  Name: "gitaly_pack_objects_served_bytes_total",
  Help: "Number of bytes of git-pack-objects data served to clients",
})
```

A metric has a set of labels. GitLab adds the following set of labels to all metrics:

- `env` or `environment`: the environment, including but not limited to `gprd`, `gstg`, `ops`, to name a few.
- `fqdn`: the fully qualified domain name. As Gitaly runs on VMs now, this label is equivalent to the identity of the hosting node.
- `region` and `zone`: the region and zone of the node.
- `stage`: the current stage of the process, either `main` or `cny`.
- `service`/`type`: for Gitaly, it's always `gitaly`.

In the future, when Gitaly runs on K8s, we properly have more K8s-specific labels.

The query uses [PromQL](https://prometheus.io/docs/prometheus/latest/querying/basics/) language. Some examples:

- [Calculate the rate (ops/s) of pack-refs housekeeping task by node](https://dashboards.gitlab.net/explore?schemaVersion=1&panes=%7B%22xxn%22:%7B%22datasource%22:%22PA258B30F88C30650%22,%22queries%22:%5B%7B%22datasource%22:%7B%22type%22:%22prometheus%22,%22uid%22:%22PA258B30F88C30650%22%7D,%22exemplar%22:true,%22expr%22:%22sum%28rate%28gitaly_housekeeping_tasks_total%7Benvironment%3D%5C%22gprd%5C%22,%20housekeeping_task%3D%5C%22packed_refs%5C%22%7D%5B$__rate_interval%5D%29%29%20by%20%28fqdn%29%20%3E%200%22,%22hide%22:false,%22interval%22:%22%22,%22legendFormat%22:%22%7B%7Bhousekeeping_task%7D%7D%22,%22refId%22:%22B%22,%22editorMode%22:%22code%22,%22range%22:true,%22instant%22:true%7D%5D,%22range%22:%7B%22from%22:%22now-6h%22,%22to%22:%22now%22%7D%7D%7D&orgId=1).
- [Calculate the dropped pack-objects/RPC requests due to limited in the last 2 days](https://dashboards.gitlab.net/explore?schemaVersion=1&panes=%7B%22rmc%22:%7B%22datasource%22:%22mimir-gitlab-gprd%22,%22queries%22:%5B%7B%22expr%22:%22sum%28rate%28gitaly_pack_objects_dropped_total%7Benv%3D%5C%22gprd%5C%22,environment%3D%5C%22gprd%5C%22,type%3D%5C%22gitaly%5C%22%7D%5B$__rate_interval%5D%29%29%20by%20%28fqdn,%20reason%29%20%3E%200%5Cn%22,%22format%22:%22time_series%22,%22interval%22:%22$__interval%22,%22intervalFactor%22:1,%22legendFormat%22:%22Pack-objects%20%7B%7Bfqdn%7D%7D%20%7B%7Breason%7D%7D%22,%22refId%22:%22A%22,%22datasource%22:%7B%22type%22:%22prometheus%22,%22uid%22:%22mimir-gitlab-gprd%22%7D,%22editorMode%22:%22code%22,%22range%22:true,%22instant%22:true%7D,%7B%22refId%22:%22B%22,%22expr%22:%22sum%28rate%28gitaly_requests_dropped_total%7Benv%3D%5C%22gprd%5C%22,environment%3D%5C%22gprd%5C%22,type%3D%5C%22gitaly%5C%22%7D%5B$__rate_interval%5D%29%29%20by%20%28fqdn,%20reason%29%20%3E%200%22,%22range%22:true,%22instant%22:true,%22datasource%22:%7B%22type%22:%22prometheus%22,%22uid%22:%22mimir-gitlab-gprd%22%7D,%22editorMode%22:%22code%22,%22legendFormat%22:%22Requests%20%7B%7Bfqdn%7D%7D%20%7B%7Breason%7D%7D%22%7D%5D,%22range%22:%7B%22from%22:%22now-2d%22,%22to%22:%22now%22%7D%7D%7D&orgId=1)
- [Calculate inflight commands of gitaly-cny node](https://dashboards.gitlab.net/explore?schemaVersion=1&panes=%7B%22imy%22:%7B%22datasource%22:%22mimir-gitlab-gprd%22,%22queries%22:%5B%7B%22refId%22:%22A%22,%22expr%22:%22gitaly_commands_running%7Benv%3D%5C%22gprd%5C%22,%20fqdn%3D%5C%22gitaly-cny-01-stor-gprd.c.gitlab-production.internal%5C%22%7D%22,%22range%22:true,%22instant%22:true,%22datasource%22:%7B%22type%22:%22prometheus%22,%22uid%22:%22mimir-gitlab-gprd%22%7D,%22editorMode%22:%22code%22,%22legendFormat%22:%22__auto%22%7D%5D,%22range%22:%7B%22from%22:%22now-30d%22,%22to%22:%22now%22%7D%7D%7D&orgId=1). As you can see, there was as peak on 2024-06-17. It was when [this incident](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/18156) occurs.

## Debugging and performance testing tools

- [gprcurl](https://github.com/fullstorydev/grpcurl): `curl` like tool but for gPRC
- [grpcui](https://github.com/fullstorydev/grpcui): lightweight `postman` like tool for gPRC
- [hyperfine](https://github.com/sharkdp/hyperfine): a performance tool that can benchmarks over time
  - hyperfine can be used together with grpcurl to check the response time of a gPRC call

### Enable Git trace

The `gitaly_log_git_traces` feature flag allows you to enable logging of Git trace2 spans for a specific user, group, or project. When enabled, Git outputs all trace2 spans to
gRPC logs issued by that particular actor.

```bash
/chatops run feature set --project=gitlab-org/gitlab gitaly_log_git_traces true
/chatops run feature set --user=myusername gitaly_log_git_traces true
```

Because of the frequency and noisiness of logs streaming in, customers should use a filter on server side logs to match the key and value of either:

- `"msg":"Git Trace2 API"`
- `"component":"trace2hooks.log_exporter"`

For more information, see:

- [Profile Git operations](https://docs.gitlab.com/ee/administration/gitaly/troubleshooting.html#profile-git-operations).
- [Use ChatOps to enable and disable feature flags](https://docs.gitlab.com/ee/development/feature_flags/controls.html).

On the client side, for Git trace v1, the customer can enable `GIT_TRACE*` variables, including:

```bash
GIT_TRACE=true
GIT_TRACE_PACK_ACCESS=true
GIT_TRACE_PACKET=true
GIT_TRACE_PERFORMANCE=true
```

For Git trace v2:

```bash
# Debugging git operations
# If GIT_TRACE2_PERF_BRIEF or trace2.perfBrief is true, the time, file, and line fields are omitted.
GIT_TRACE2_PERF_BRIEF=1 GIT_TRACE2_PERF=true git clone https://gitlab.com/gitlab-org/gitaly
GIT_TRACE2_PERF_BRIEF=1 GIT_TRACE2_PERF=$(pwd)/git-perf.log git clone https://gitlab.com/gitlab-org/gitaly

# Output git events in json format
GIT_TRACE2_BRIEF=true GIT_TRACE2_EVENT=$(pwd)/trace2.json git clone https://gitlab.com/gitlab-org/gitaly
```

Outputs can be configured in different formats:

```bash
# Normal format
export GIT_TRACE2=~/log.normal
# OR Performance format
export GIT_TRACE2_PERF=~/log.perf
# OR Event format
export GIT_TRACE2_EVENT=~/log.event
# OR JSON format
export GIT_TRACE2_EVENT=~/log.json
```

For more information, see:

- [Git Trace v1 API](https://git-scm.com/book/en/v2/Git-Internals-Environment-Variables)
- [Git Trace v2 API](https://git-scm.com/docs/api-trace2)

### strace

`strace(1)` a gitaly process:

```shell
strace -fttTyyy -s 1024 -o /paht/filename -p $(pgrep -fd, gitaly)
```

Or wrap a process to make it easy to strace, especially if it then spawns more processes:

```shell
#!/bin/bash/sh
echo $(date)" $PPID $@" >> /tmp/gitlab-shell.txt
exec /opt/gitlab/embedded/service/gitlab-shell/bin/gitlab-shell-orig "$@"
# strace -fttTyyy -s 1024 -o /tmp/sshd_trace-$PPID /opt/gitlab/embedded/service/gitlab-shell/bin/gitlab-shell-orig
```

[`strace` parser](https://gitlab.com/gitlab-com/support/toolbox/strace-parser) is useful to make the results more readable.

### fast-stats

[fast-stats](https://gitlab.com/gitlab-com/support/toolbox/fast-stats) is a useful tool developed by Support to quickly pull statistics from GitLab logs.

#### Examples

To find in one interval of 60m duration what the top methods called are from the gitaly logs.

```shell
fast-stats --interval 60m --limit 1 var/log/gitlab/gitaly/current
```

To find the top 10 User, Project, Client by Duration calling that method:

```shell
grep PostUploadPackWithSidechannel var/log/gitlab/gitaly/current | ~/bin/fast-stats --interval 60m top
```

### git

Snoop on Gitaly Git commands.

1. Stop Gitaly
1. Rename gitaly-git process `find /opt/gitlab/embedded/bin/gitaly-git-v* -exec mv {} {}_orig \;`
1. Create wrapper script for each git version. Make sure you replace `opt/gitlab/embedded/bin/gitaly-git-vX.XX_orig` on the scrip with the right version.

```shell
#!/bin/bash
GIT="/opt/gitlab/embedded/bin/gitaly-git-vX.XX_orig"
FILE="/tmp/gitaly-$(date +%Y-%m-%d@%H:%M)"
echo -e "\n$(date) $PPID $@\n" >> $FILE
exec $GIT "$@" | tee -a $FILE
echo -e "\n--------------\n" >> $FILE

```

1. Make scripts executable `find /opt/gitlab/embedded/bin/gitaly-git-v* -exec chmod 777 {} \;`
1. Start Gitaly

## Log analysis

Kibana (Elastic) Dashboards

- [gstg](https://nonprod-log.gitlab.net/app/r/s/J0jWx)
- [gprd](https://log.gprd.gitlab.net/app/r/s/XuXAI)

## CPU and memory profiling

[pprof](https://pkg.go.dev/runtime/pprof#hdr-Profiling_a_Go_program) metrics are exported to the [GCP Cloud Profiler](https://cloud.google.com/profiler/docs/about-profiler).

- [gstg](https://console.cloud.google.com/profiler/gitaly/cpu?project=gitlab-gitaly-gstg-164c)
- [gprd](https://console.cloud.google.com/profiler/gitaly/cpu?project=gitlab-gitaly-gprd-87a9)

Note that Gitaly nodes are distributed across a number of GCP projects. You can use the project dropdown on the top nav bar to
switch between the various `gitlab-gitaly-gstg-*` and `gitlab-gitaly-gprd-*` projects.

## Capacity management

Gitaly team is responsible for maintaining reasonable serving capacity for gitlab.com.

We get alerts from Tamland if capacity runs low, see [this issue comment](https://gitlab.com/gitlab-com/gl-infra/capacity-planning-trackers/gitlab-com/-/issues/1666#note_1786916965).

[Capacity planning](../../../production-engineering/observability/capacity_planning.md) documentation explains how this works in general.
