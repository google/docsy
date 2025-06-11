---
title: "Environments Canary Stage"
description: "Detailed information about how the Canary stage works in our Environments"
---

## Environments Canary Stage

Some of our environments in use at GitLab are split into two separate logical
deployments of components, called "stages". The two stages are "main" and "canary"
(sometimes shortened to `cny`).

The reason for the canary stages is to allow us to test new releases of the GitLab
software in a controlled and isolated fashion, before rolling it out to all users.

### What is different and what is shared between "canary" and "main" stages?

The Canary stage contains code functional elements like web, container registry
and git servers while sharing data elements such as sidekiq, database and file
storage with the main stage of the environment. This allows UX code and most
application logic code to be consumed by a smaller subset of users under real
world scenarios before being made available to all users on the environment.

Currently a canary stage covers the following services

* GitLab web
* GitLab api
* GitLab Git https
* GitLab websockets
* GitLab registry
* GitLab pages
* GitLab shell
* Gitaly *(see below)
* Praefect *(see below)

Currently a canary stage does *not* cover the following services (when using
canary for these services, you are using the version running in the "main" stage)

* Sidekiq
* GitLab Agent for Kubernetes
* Mailroom
* Redis
* PostgreSQL

### How does Gitaly and Praefect work in a canary stage?

As Gitaly and Praefect nodes are randomly (with weighting) chosen to store Git
data, it's not entirely possible to have a clean separation of Gitaly/Praefect
nodes between stages.

What this means is that when using an environment, the Gitaly/Praefect code used
(depending on the repository in question, see below) may be from either stage (main or canary),
regardless of what stage you are using through the web frontend, or what you have
selected in [next.gitlab.com](https://next.gitlab.com). What Gitaly/Prafect node
is used follows the following rules

* If you are modifying an existing repository, you will use the Gitaly server that the shard is currently assigned to.
* If you are forking a repository, you will stay on the same shard
* Otherwise, rails will select a random shard using weighted probabilities based on the weights assigned in the storage configuration

In the [production](/handbook/engineering/infrastructure/environments/#production) environment, the following well known groups/repos are run of
Gitaly/Praefect nodes in the `canary` stage exclusively

* https://gitlab.com/gitlab-org

### Accessing the canary stage of an environment

The credentials you use and permissions you have in the "canary" stage of an
environment is identical to the "main" stage of the environment.

At a technical level, access to the canary stage of an environment is accomplished
in one of the following ways

* Manually setting the `gitlab_canary` cookie to `true` in whatever browser/tool
you are using to talk to the environment
* Going to [next.gitlab.com](https://next.gitlab.com) and at the toggle on the
page, selecting "Next" instead of "Current". **Note** this changes which stage
you are using (main or canary) across **all** environments.

The canary stage is also automatically used in the following circumstances (with caveats)

* 5% of traffic for the "main" stage is automatically instead sent to the "canary"
stage of an environment if the `gitlab_canary` is not set which is the default for most users. If you wish to ensure your requests are never sent to
canary, manually set the `gitlab_canary` cookie to `false` in whatever
browser/tool you are using to talk to the environment or ensure that "current" is toggled on https://next.gitlab.com
* In the production environment only, the canary stage is forcibly enabled for all users visiting GitLab Inc. operated groups:
  * [GitLab.com](https://gitlab.com/gitlab-com)
  * [GitLab.org](https://gitlab.com/gitlab-org)
  * [charts](https://gitlab.com/charts)
  Unless you choose to manually opt out of using Canary on [next.gitlab.com](https://next.gitlab.com)
* The traffic share is not exactly 5%. [The current baseline is 4.7%](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/1745) determined by HAProxy weights,
  but the actual amount depends on several factors including: Availability of zones in GCP,
  time of day, share of traffic to GitLab groups.

### Confirming I am using the "canary" stage of an environment

The best method when using the UI is to [enable the performance bar](https://docs.gitlab.com/ee/administration/monitoring/performance/performance_bar.html)
and look at the name of the Kubernetes pod service your page. If it starts
with `gitlab-cny` (and has a baby chicken next to it), you are using the canary
stage. There will also be the word "next" in a green box next to the GitLab logo
in the top left.

### How do I view logs specifically for the canary stage of an environment?

When looking at logs for an environment in Elasticsearch, you can add a filter
for `json.stage.keyword` is `cny` and that will only show you logs from the
canary stage of the service in the environment.

### How do I view metrics specifically for the canary stage of an environment?

When looking at a metrics dashboard in [dashboards.gitlab.net](https://dashboards.gitlab.net)
for an environment, choose `cny` from the drop down for `stage` at the top.

### How do I change a feature flag for canary stage?

As the database (where feature flags are stored) is shared between main and
canary stage, enabling a feature flag following the normal [chatops process](/handbook/support/workflows/chatops/#feature-flags))
for the environment will change it for both main and canary stages of an environment.

Some examples for the most commonly used environments are as follows

Feature flags on staging and staging-canary:

* Enable:  `/chatops run feature set feature_flag_name true --staging`
* Disable: `/chatops run feature set feature_flag_name false --staging`

Feature flags on production and production-canary:

* Enable `/chatops run feature set feature_flag_name true`
* Disable `/chatops run feature set feature_flag_name false`

### How do I get console access to the canary stage?

Currently the canary stage has no console access, you can [standard console access process](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/teleport/Connect_to_Rails_Console_via_Teleport.md)
to access a console server in the environment running the main stage of the code
only. Note that as the database is shared between stages, depending on what
actions your perform in the console, it will affect the "canary" stage as well
as the "main" stage.

### Globally disabling the canary stage

The Infrastructure department teams can globally disable use of canary
in an environment if it is deemed necessary. As this is very disruptive to the testing
and deployment process, the typical process for doing starts with declaring
an incident.

#### Disabling canary stage in an environment

The chatops command to disable canary in an environment is as follows

```markdown
## Disable production-canary
/chatops run canary --disable --production

## Disable staging-canary
/chatops run canary --disable
```

#### Re-enabling canary stage in an environment

The chatops command to re-enable canary in an environment is as follows

```markdown
## Disable production-canary
/chatops run canary --enable --production

## Disable staging-canary
/chatops run canary --enable
```
