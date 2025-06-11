---
title: "Getting Started Tutorials"
description: "The GitLab Demo Systems getting started tutorials provide step-by-step instructions for accessing and using our infrastructure and related business processes."
---

### Configuring GitLab with group-level Kubernetes cluster

[Configuring GitLab with group-level Kubernetes cluster](/handbook/customer-success/demo-systems/tutorials/getting-started/configuring-group-cluster)

After your GitLab Demo Cloud account has been created, your runners and CI jobs will use the pre-configured instance-level cluster by default. The instance-level cluster is designed to be transparent behind the scenes and does not support customization or administration and reporting capabilities as a demo systems user.

You can request your own Kubernetes cluster that is provisioned in Google Cloud's Google Kubernetes Engine (GKE) service by the demo systems team. By having your own cluster, you have full administrative access to the cluster for troubleshooting CI jobs and pods that are experiencing issues.

This tutorial shows you how to connect your cluster to your GitLab group after you are notified that your cluster is ready. You will access the Google Cloud Platform (GCP) console to see your cluster, use the Google Cloud Shell to run `kubectl` commands on your cluster, and access the GitLab Demo Cloud Omnibus instance to configure your pre-created group with a Kubernetes cluster. After your cluster has been added, we will install Helm, Prometheus and install your own GitLab Runner.
