---
title: "Creating an AWS EKS cluster for a GitLab demo"
---

## Account info

We don't currently have a shared AWS account for using AWS resources. For now, open an account with your personal credit card and expense it. You can start with a free trial. I will look into a team shared account.

## Creating a cluster

There are many steps to set up a cluster in EKS, but there is a 3rd party script which I've found to be pretty good at orchestrating the work. It's called [eksctl](https://eksctl.io/). You'll need this local to were you run the script from. There are also a set of utilities we created (just shell scripts) to lessen the pain of creating a cluster and configuring GitLab for a demo. Those can be found at https://gitlab.com/dangordon/eks-utils.git.

From these scripts, the `create-cluster.sh` script can be used as a wrapper to eksctl to create a cluster to use.

## Attaching a cluster to GitLab

GitLab currently doesn't have a built-in integration to AWS EKS for attaching Kubernetes clusters. In order to attach an EKS cluster to GitLab you will need to use the "Add existing cluster" option on the Kubernetes "Add Kubernetes Cluster" page.

To do this you will need info specific to your cluster (API URL endpoint, CA Certificate, and the Service Token). The [eks-utils scripts](https://gitlab.com/dangordon/eks-utils.git) where made to capture the necessary details. You will also need a cluster name, which can be whatever you want, as this is for GitLab reference, but I suggest you name it the same as you named your cluster on EKS, so that it is easier to correlate the two.

This process and documentation needs to and should evolve. This is MVC. Possibilities are, for example, instead of eks-utils, re-writing them as a kubectl plugin for creating and adding a cluster to GitLab. Reference the one that DigitalOcean's [Eddie Zaneski wrote](https://gitlab.com/eddiezane/kubectl-gitlab_bootstrap.git) for his [GitLab Commit demo](https://youtu.be/-shvwiBwFVI).
