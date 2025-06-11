---
title: Cost optimization of Cloud Services
category: Infrastructure for troubleshooting
description: "Guideline on how to use cloud services cost effectively"
---

Cloud services are a valuable resource in support and give us the ability to host GitLab or GitLab related deployments in a wide variety of configurations.  We can use permanent instances as a daily resource and ephemeral deployments to test, verify, reproduce and explore new ideas rapidly without consuming our local resources such as CPU, memory and battery life.

Although highly beneficial cloud services come with a cost that can be hourly or on a per-term basis.  At first glance these costs can appear to be minimal however they can easily balloon to thousands of dollars per month.

The purpose of this page is to provide a workflow that will ensure we [spend company money as if it's our own](/handbook/finance/spending-company-money/#guidelines) while maintaining minimal impact on existing support workflows.

## Definition of "cloud service"

For the context of this page a cloud service is a billed infrastructure product leased from an IaaS provider such as Digital Ocean, Google Cloud Platform or Amazon Web Services.

## General tips for cost optimization

- If a service is no longer in use it can be destroyed / terminated
- If a service is not currently in use, but there are plans to use it later, then it can be powered off
- After deleting a deployment there may be other dependent services still running such as load balancers, databases which can be cleaned up
- Deploy to minimal spec services wherever possible
- Consider pricing when choosing between [Digital Ocean](https://www.digitalocean.com/pricing), [Google Cloud Platform](https://cloud.google.com/pricing) or [Amazon Web Services](https://aws.amazon.com/pricing/)
- If the nature of the deployment is permanent, it will most likely be cheaper to use reserved instances over an on-demand instance for your service

## Cloud Native GitLab Helm Chart

### Google Cloud Platform (GCP)

In a default configuration the [Cloud Native GitLab Helm Chart](https://gitlab.com/gitlab-org/charts/gitlab/-/tree/master) will deploy GitLab services to three Kubernetes nodes to meet availability requirements.  The recommendation for each node is the `n1-standard-4` [machine type](https://cloud.google.com/compute/docs/machine-types).  In total this deployment will utilize a whopping 12 vCPU and 45GB of memory.  For almost all support related scenarios this size of deployment is unnecessary and we can use the minimum spec instead.

To deploy the Cloud Native GitLab Helm Chart at a minimum spec:

- Set the environment variable `NUM_NODES=1` when executing the [cluster bootstrap script](https://docs.gitlab.com/charts/installation/cloud/gke.html#scripted-cluster-creation)
- Configure your deployment to use [the minimum spec values](https://gitlab.com/gitlab-org/charts/gitlab/-/blob/master/examples/values-gke-minimum.yaml).  This will ensure that your deployment will fit on a single node.  Ensure that you enable the task-runner in the minimum spec values before deploying as this is often required in support.

### Minikube

GCP is not a requirement and the default helm chart can also be [deployed locally using Minikube](https://docs.gitlab.com/charts/development/minikube/).
