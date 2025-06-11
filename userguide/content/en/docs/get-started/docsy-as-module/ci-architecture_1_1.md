---
aliases: /handbook/engineering/infrastructure/production/architecture/ci-architecture.html
title: "CI Service Architecture"
controlled_document: true
---

This document only covers our shared and GitLab shared runners, which are
available for GitLab.com users and managed by the [Infrastructure teams](../).

## General Architecture

{: #ci-general-arch}

Our CI infrastructure is hosted on Google Cloud Engine (GCE). In GCE we
use the `us-east1-c` and `us-east1-d`  All of them are configured via
Chef. These machines are manually created and added to chef and do NOT
use terraform at this time.

In each region we have few types of machines:

- **X-runners-manager** - hosts with the GitLab Runner process. These hosts
  handle job’s execution and autoscaled machines scheduling. For the second task
  they are using Docker Machine and API exposed by used cloud provider.
- **autoscaled-machine-N** - hosts created and managed by the GitLab Runner.
  They are used to run a job’s scripts inside of Docker containers. Currently
  we’re allowing a machine to be used only by one job at once. Machines created
  by `gitlab-shared-runners-manager-X` and `private-runners-manager-X` are
  re-used. However, machines created by `shared-runners-manager-X` are removed
  immediately after the job is finished.
- **Helpers** - hosts that provide auxiliary services such as monitoring and
  cache.
  - **Prometheus** - Prometheus servers in each region monitor machines.

Runner managers connect to the GitLab.com and dev.gitlab.org API in order to
fetch jobs that need to be run. The autoscaled machines clone the relevant
project via HTTPS.

The runners are connected as follows:

- **shared-runners-manager-X** (srm): connected to GitLab.com and are available
  to all GitLab.com users as shared runners.  Privileged mode is off.
- **gitlab-shared-runners-manager-X** (gsrm): connected to GitLab.com and
  dev.gitlab.org. They are available as shared runners to GitLab.com and tagged
  with `gitlab-org`. They provide services to `gitlab-ce` and `gitlab-ee`
  projects and all their forks. They are the generic shared runners on
  dev.gitlab.org. Privileged mode is off.
- **private-runners-manager-X** (prm): connected to both GitLab.com and
  dev.gitlab.org. They are registered as specific runners to the GitLab
  application projects and used only by us. Privileged mode is on.

## Detailed Architecture

{: #ci-detailed-arch-diagram}

<img src="/images/handbook/engineering/infrastructure/production-architecture/ci-cd-gce-arch.png" alt="">

[Source](https://docs.google.com/drawings/d/1tskQW-dCHNMN-f6mfrtbcWRGKC4vZzg5UiQrpR28wTU/edit?usp=sharing)

### Windows Architecture

<img src="/images/handbook/engineering/infrastructure/production-architecture/windows-ci-cd.png" alt="">

[Source](https://docs.google.com/drawings/d/1oApCYUuh7ft8hnm9ToWjG8Ce9g1Hvo8MKTBL5DtjDk8/edit)

## Data Flow

{: #ci-data-flow}

### Management Data Flow

- `prometheus.gprd.gitlab.net` scrapes each runner host with the job `ci-node`.
   Prometheus also scrapes specific prometheus nodes within the runners' regions
   using [prometheus federation](https://prometheus.io/docs/prometheus/latest/federation/).
- `chef.gitlab.com` server is accessed by all hosts from inside of Cloud
   Provider Region, excluding autoscaled machines.

### GitLab Data Flow

- **runners-manager-X** hosts are connected to one or more GitLab instances and
  are constantly asking the API for new jobs that should be executed. After the
  job is started Runners are also updating the job’s trace and status by sending
  updates to the GitLab instance. This communication uses Runner’s API from
  GitLab APIv4.

- **autoscaled-machine-N** hosts first access GitLab with the git+http(s)
  protocol to receive project sources with git pull or git fetch operations,
  depending on configuration. This operation uses the general git+http(s)
  protocol and specific type of authentication (using gitlab-ci-token feature).
  The job may also access project’s submodules using GitLab with the same
  protocol as for the project. These hosts may also upload and/or download
  artifacts to and from GitLab. The `gitlab-runner-helper` binary is used for
  this purpose which uses Runner’s API from GitLab APIv4.

### Cloud Region Internal Communication

- **runners-manager-X** to **autoscaled-machine-N** - Runner starts jobs
  on autoscaled machines using the Docker Engine API. After the machine
  is created, Runner receives IP:PORT information about where the Docker
  Engine API endpoint is available. In GCE this uses the internal IP
  address. Using the Docker Engine API, Runner first schedules the
  different containers used for the purpose of the job. It then starts
  job’s scripts and receive commands output. This output is then sent
  upstream to GitLab as it was described above.

- **prometheus-X** to **autoscaled-machine-N** - the Prometheus server requests
  the autoscaled machines for exported metrics. It uses the HTTP(S) protocol for
  this.

### Cloud Region External Communication

- **runner-manager-X** to **Cloud Provider API Gateway** - Runner, using Docker
  Machine, manages autoscaled machines used for executing jobs. It uses Cloud
  Providers API to schedule machines creation and removals. It also uses the
  same API to gather information about existing machines.

- After creating the machine Runner uses received IP:PORT to schedule containers
  and execute jobs scripts there.

- **autoscaled-machine-N** to **external Docker Registry** - Docker Engine,
  using Docker Registry API, pulls Docker Images from external machines. This
  could be Docker Hub, GitLab Registry, or any other Docker compatible registry.

## Deployment and Configuration Updates

{: #ci-configuration}

The Runner and it’s configuration is handled with Chef and defined on
chef.gitlab.com. The detailed upgrade process is described in the [associated runbook](https://gitlab.com/gitlab-com/runbooks/blob/master/howto/update-gitlab-runner-on-managers.md).

In summary:

- For a configuration update we need to:
  - update definitions in chef-repo and upload new definitions to
    chef.gitlab.com,
  - execute `sudo chef-client` on nodes where needed.
- For a Runner version update:
  - update definitions in chef-repo and upload new definitions to
    chef.gitlab.com,
  - execute `sudo /root/runner_upgrade.sh` on nodes where needed.

Why the difference?

When we’re updating Runner, the process needs to be stopped. If this is done
during job’s execution, it will break the job. That’s why we use Runner’s
feature named graceful shutdown. By sending SIGQUIT signal to the Runner, we’re
causing Runner to not request new jobs but still wait for existing ones to
finish. If this was done from inside of `chef-client` run it could fail in
unexpected way. With the `/root/runner_upgrade.sh` script we’re first stopping
Runner gracefully (with 7200 minutes timeout) and then starting `chef-client` to
update the version.

For Runner’s configuration update there is no need to stop/restart Runner’s
process and since we’re not changing Runner’s version, `chef-client` is not
upgrading package (which could trigger Runner’s process stop). In that case we
can simply run `sudo chef-client`. This will update the config.toml file and
Runner will automatically update most of the configuration.

Some of the general configuration parameters can’t be refreshed without
restarting the process. In that case we need to use the same script as for the
Runner Upgrade.

## Important Links and Metrics

{: #ci-important-info-links}

### Monitoring Information

- `prometheus-app.gprd.gitlab.net` - for metrics scraped from GitLab via unicorn
  exporter and GitLab Monitor project
- `prometheus.gprd.gitlab.net` - for Runner internal metrics, node metrics of
  Runner Manager machines, gathering metrics about our cloud providers,
  gathering metrics of autoscaled machines with federation from CI Prometheus
  servers (Ben is currently working on enabling Thanos there, so Grafana will
  access CI Prometheus servers directly)
- `prometheus-01.nyc1.do.gitlab-runners.gitlab.net`,
  `prometheus-01.us-east1-c.gce.gitlab-runners.gitlab.net`,
  `prometheus-01.us-east1-d.gce.gitlab-runners.gitlab.net` - for scraping
  metrics from exporters installed on autoscaled machines - currently node
  exporter only.
  - In GCP we’re using native GCP service discovery support that is available in
    Prometheus.
- Alerts are sent to #ci-cd-alerts channel on Slack

### Monitoring Links

- [CI Monitoring Overview](https://dashboards.gitlab.net/d/000000159/ci)
- [CI Cloud Provider Stats](https://dashboards.gitlab.net/d/sXVh89Imk/ci-autoscaling-providers)
- [CI Autoscaling Stats](https://dashboards.gitlab.net/d/sv_pUrImz/ci-autoscaled-machines-metrics)
- [CI Logs (only GCP)](https://log.gprd.gitlab.net/goto/28a7ad7581fa7e86d519247a5456addd)
- [CI Shared Runners Sentry (srm machines)](https://sentry.gitlab.net/gitlab/shared-gitlab-runners/)
- [CI Internal Runners Sentry (gsrm & prm machines)](https://sentry.gitlab.net/gitlab/internal-gitlab-runners/)
- [CI Alert Configuration](https://gitlab.com/gitlab-com/runbooks/blob/master/alerts/gitlab-com-ci.yml)
