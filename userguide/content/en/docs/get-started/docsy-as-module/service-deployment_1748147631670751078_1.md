---
owning-stage: "~devops::verify"
title: "Steps Runner Deployment and Lifecycle Management for Runner Integration."
toc_hide: true
---

This Blueprint is concerned with:

- The deployment or injection of the Step Runner binary into target
  environments. This includes build containers for Docker, Kubernetes and
  Instance executors.
- Startup of the Step Runner gRPC service in said environments.
- Any required install-time configuration.
- Service restart in the event of a crash.
- Step Runner binary upgrade for environments where the Step Runner service is long lived.
- Management of any resources used by the Step Runner service
