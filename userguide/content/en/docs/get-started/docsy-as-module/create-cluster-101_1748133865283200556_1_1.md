---
title: "101 - Creating Kubernetes cluster"
---

## Objective:  Manually creating a Kubernetes cluster to use with Auto DevOps in GitLab

You will need Kubernetes cluster up and running in order to use GitLab Auto DevOps feature.
This is a step by step guide to help you to manually create a Kubernetes cluster in Google Cloud Platform.

More details [Auto DevOps](https://docs.gitlab.com/ee/topics/autodevops/)

### Preparation

You need a Google Cloud Platform account, GitLab employees will have this. Ensure you are logged in with your GitLab account.

### Steps to create Kubernetes cluster

|  **Step**   | **What it looks like** |
| 1. Open a browser and login to [Google Kubernetes Engine](https://console.cloud.google.com/kubernetes)  |
| 2. GitLab employees - Sign-in using your GitLab email.  |  |
| 3. GitLab employees should use the gitlab-demos project. Others should select or create a project to work in.| ![gitlab demos](/images/workshop/k8s/2_gitlab_demos.png)|
| 4. Under COMPUTE on the side bar select Kubernetes Engine -> Clusters.|  ![kubernetes engine](/images/workshop/k8s/3_clusters.png)|
| 5. Click CREATE CLUSTER. | ![kubernetes engine](/images/workshop/k8s/4_create_cluster.png)|
| 6. Set name for your cluster. <br> GitLab Product and Solution Marketing employees, the naming convention is sm_\<yourname\>, or, if you are in the Product Marketing sub-group use pmm_\<yourname\>, or for the Technical Marketing group use tmm_\<yourname\>. Keep the overall name short (up to 16 chars). <br>Set the number of nodes to 3, and expand the page for additional settings.| ![kubernetes engine](/images/workshop/k8s/5_name_pool.png)|
| 7. GitLab employees should select the 'demonet' network in Networking. Others should select or create network.  | ![kubernetes engine](/images/workshop/k8s/6_cluster_network.png)|
| 8. Enable legacy authorization. | ![kubernetes engine](/images/workshop/k8s/7_legacy_auth.png)|
| 9. You are ready to create the cluster, click Create. | ![kubernetes engine](/images/workshop/k8s/8_create.png)|
| 10. It will take a few minutes to create the cluster, once it is created, you will see your just created cluster on the list.| ![kubernetes engine](/images/workshop/k8s/9_cluster_list.png)|
| 11. Now you are ready to integrate your GitLab project with Kubernetes, and use the Auto DevOps feature.
| 12. Cleanup steps PLACEHOLDER ||
