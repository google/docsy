---
aliases: /handbook/engineering/infrastructure/core-platform/systems/distribution/maintenance/build-machines.html

title: "Distribution Team Infrastructure and Maintenance - Build Machines"
description: "Details and maintenance tasks for the Distribution Team's build nodes"
---








## Common links

- [Distribution Team Handbook](/handbook/engineering/infrastructure/core-platform/systems/distribution/)
- [Distribution Team Infrastructure and Maintenance](/handbook/engineering/infrastructure/core-platform/systems/distribution/maintenance/)

## Build Machines

GitLab CI runner manager is responsible for creating build machines for package
builds.  This node configuration is managed by
[cookbook-gitlab-runner](https://gitlab.com/gitlab-cookbooks/cookbook-wrapper-gitlab-runner).
Configuration values are stored in the vault named the same as the node,
[see example](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/a62742886ed1dec291d66df3508e37163431538d/roles/build-trigger-runner-manager-gitlab-org.json#L37).

Currently, the version of GitLab CI runner is locked. We aim to be close to the
current version of runner in order to get the fixes that we need without getting
into issues that could cause a failure. These failures could prevent the release
from going out so be careful with unnecessary changes on these nodes.

### Runner manager machines

Distribution team maintains 2 runner manager machines for running different
types of pipelines. Both these machines are in GCP project
`omnibus-build-runners`.

1. build-runners.gitlab.org:
1. build-trigger-runner-manager.gitlab.org

#### build-runners-gitlab-org

This runner manager manages the machines used for building and publishing
official GitLab CE and EE packages. It is locked to the [omnibus-gitlab](https://dev.gitlab.org/gitlab/omnibus-gitlab/)
and [`cookbooks/gitlab-omnibus-builder`](https://dev.gitlab.org/cookbooks/gitlab-omnibus-builder/) projects in dev.gitlab.org.

Its configuration can be found in the [private `gitlab-com/gl-infra/chef-repo` project](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/master/roles/build-runners-gitlab-org.json).

It spins up the following types of machines:

1. [`x86_64` machines for building packages](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/a33687bcfaa6728fd4c3255f53cefd80c90a7436/roles/build-runners-gitlab-org.json#L63-106).
   They are `n1-highcpu-32` machines with 80GB SSD disks, spawned inside GCP using `google` docker-machine driver.

1. [`arm64-builder-dev-gitlab` for building Docker images for ARM and RPi](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/a33687bcfaa6728fd4c3255f53cefd80c90a7436/roles/build-runners-gitlab-org.json#L149-183).
   They are `m6g.2xlarge` machines with 80GB solid state disks spawned inside AWS using the `amazonec2` docker-machine driver. This is used in <https://dev.gitlab.org/cookbooks/gitlab-omnibus-builder>.

1. [`arm64-runners-manager-dev-gitlab` for building ARM and RPi packages](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/a33687bcfaa6728fd4c3255f53cefd80c90a7436/roles/build-runners-gitlab-org.json#L184-226).
   They are `m6g.2xlarge` machines with 80GB solid state disks spawned inside AWS using the `amazonec2` docker-machine driver.

1. [`package-promotion` machines for uploading packages](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/a33687bcfaa6728fd4c3255f53cefd80c90a7436/roles/build-runners-gitlab-org.json#L107-148).
   Since they are only used to upload packages, they are scaled down to save costs. They are `n2d-standard-2` machines, spawned inside GCP using `google` docker-machine driver.

#### build-trigger-runner-manager-gitlab-org

This runner manager manages the machines used for building packages as part of
triggered pipeline used by developers to test their changes.

Its configuration can be found in the [private `gitlab-com/gl-infra/chef-repo` project](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/master/roles/build-trigger-runner-manager-gitlab-org.json).

It spins up the following types of machines:

1. [`x84_64` machines for building packages](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/a33687bcfaa6728fd4c3255f53cefd80c90a7436/roles/build-trigger-runner-manager-gitlab-org.json#L95-139)
   in the [`gitlab-org/omnibus-gitlab-mirror`](https://gitlab.com/gitlab-org/omnibus-gitlab-mirror) project.
   They are `n1-highcpu-32` machines with 80GB SSD disks, spawned inside GCP using `google` docker-machine driver.

1. [ARM64 machines for buidling arm64 and Raspberry Pi builder images](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/a33687bcfaa6728fd4c3255f53cefd80c90a7436/roles/build-trigger-runner-manager-gitlab-org.json#L140-174).
   They are `m6g.2xlarge` machines with 80GB solid state disks spawned inside AWS using the `amazonec2` docker-machine driver.

1. [`qa-builder` machines for running end-to-end tests](https://gitlab.com/gitlab-com/gl-infra/chef-repo/-/blob/a33687bcfaa6728fd4c3255f53cefd80c90a7436/roles/build-trigger-runner-manager-gitlab-org.json#L54-94)
   in the [`gitlab-org/gitlab-qa`](https://gitlab.com/gitlab-org/gitlab-qa) and [`gitlab-org/gitlab-qa-mirror`](https://gitlab.com/gitlab-org/gitlab-qa-mirror) projects.
   They are `n2d-standard-2` machines with 50GB disks, spawned inside GCP using `google` docker-machine driver.

### Maintenance tasks

**Requirements:**

- Access to the node
- Access to merge into master on the [ops chef repo](https://gitlab.com/gitlab-com/gl-infra/chef-repo)
- Some tasks need access to a Chef Vault admin. At minimum, contact the Engineering Manager,
  Distribution for help.

#### Changing version of GitLab CI runner

*To be performed by any team member:*

   1. Create a new merge request on the chef repo that updates the runner version

   1. Ensure the CI pass, and the MR is reviewed by another team member

   1. Merge the change into the chef repo

   1. Login to the node and run,

      ```sh
      sudo /root/runner_upgrade.sh
      ```

      to perform the upgrade. This will stop the chef-client service, stop the
      runner and cleanup the machines, run the chef-client to fetch the new
      version and finally, start GitLab Runner again.

#### When builds are pending on dev.gitlab.org

The common reason for builds to be pending on dev.gitlab.org project is that the
number of failed machines is high. Failed machines prevent the runner manager
from starting up new machines and this can slow down or even block the release.
To resolve this, we need to clean those failed machines. The steps to do this
are:

  1. Login to the [build machine](#build-machines) node

  1. Enter the root session: `sudo su`. This is required because
     `docker-machine` command will list running machines for currently active
     user

  1. Run `docker-machine ls`. This will print out the list of machines that are
     either in `Running`, `Error` or have an empty state.

  1. To list only machines in `Error` state, you can use

      ```sh
      /root/machines_operations.sh list-failing
      ```

  1. To safely clean the machines with `Error` state, run

      ```sh
      /root/machines_operations.sh remove-failing
      ```

  1. If the machine has an empty state, you can always remove the machine
     manually. Running

      ```sh
      docker-machine ls | grep -v 'Running' | awk '{print $1}' | xargs docker-machine rm --force
      ```

      will remove all machines that do not have `Running` state.
