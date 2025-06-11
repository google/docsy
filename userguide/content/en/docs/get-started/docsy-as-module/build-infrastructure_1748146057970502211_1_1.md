---
title: "Distribution Team Infrastructure and Maintenance - Build Infrastructure"
description: "Details and maintenance tasks for the Distribution Team's build nodes"
---

## Common links

- [Distribution Team Handbook](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/)
- [Distribution Team Infrastructure and Maintenance](/handbook/engineering/infrastructure-platforms/gitlab-delivery/distribution/maintenance/)

## Build Infrastructure

Distribution uses GitLab CI to build GNU/Linux packages, Docker images, AWS
AMIs, and other artifacts that can be used to install GitLab in user's machines.
Many of these build processes require greater computing power and resources, and
hence Distribution maintains their own infrastructure to provide these resources.

### Runner manager machines

The Distribution team maintains 2 runner manager machines - one to be used in
GitLab.com and the other to be used in dev.gitlab.org. The configurations of
runner managers are maintained in the
[chef-repo](https://gitlab.com/search?search=distribution&project_id=26735010&group_id=1112072)
project, and the secrets to be used together with these configurations are
maintained in [Vault](https://vault.gitlab.net).

The runners are named using the syntax `runners-manager-distribution-(com|dev)-(blue|green)-<count>`.

NOTE: There is no blue/green deployments configured for these runner managers
yet, but [issue 1138](https://gitlab.com/gitlab-org/distribution/team-tasks/-/issues/1138)
discusses using a blue/green deployment for easier upgrades of GitLab
Runner in these runner manager machines. Currently, only a single "`blue`"
runner manager is available for each of `gitlab.com` and `dev.gitlab.org`.

### Build machines

Both `com` and `dev` runners spin up identical machines using the `docker-machine`
executor with `autoscale` configuration. The different type of machines spun up by
them are as follows:

1. `distribution-(com|dev)-amd64-runner-gcp` - These runners spin up
   `n1-highcpu-32` machines with 100GB SSD in GCP that are used for building
   `omnibus-gitlab` GNU/Linux packages for `amd64` architecture.

1. `distribution-(com|dev)-arm64-runner-gcp` - These runners spin up
   `t2a-standard-8` machines with 100GB SSD in GCP that are used for building
   `omnibus-gitlab` GNU/Linux packages for `arm64` architecture.

1. `distribution-(com|dev)-arm64-runner-aws` - These runners spin up
   `m6g.2xlarge` machines with 100 GB SSD in AWS that are usded for building
   `omnibus-gitlab` GNU/Linux packages for `armv7` architecture (Raspberry Pi).
   They are used because GCP's T2A machines
   [don't support 32-bit instruction set](https://cloud.google.com/compute/docs/general-purpose-machines#t2a_limitations)
   set that is used to build `armv7` packages while AWS's Graviton does.

### Maintenance tasks

**Requirements:**

- Access to the node.
- Access to specific folders in [Chef Vault](https://vault.gitlab.net/).
- Access to merge into master on the [ops chef repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo).
  This is not usually available to team members. So after opening an MR, get it
  reviewed and merged by someone with access - mostly someone from
  Infrastructure team.

#### Changing version of GitLab CI runner

*To be performed by any Distribution team member:*

   1. Create a new merge request on the chef repo that updates the runner version

   1. Ensure that CI passes, and the MR is reviewed by another team member

   1. Merge the change into the chef repo

   1. Login to the node and run,

      ```sh
      sudo /root/runner_upgrade.sh
      ```

      to perform the upgrade. This will stop the chef-client service, stop the
      runner and cleanup the machines, run the chef-client to fetch the new
      version and finally, start GitLab Runner again.
