---
title: "GitLab System Admin - Hands-On Lab: Exploring the GitLab Kubernetes Instance"
description: "This Hands-On Guide demonstrates how to access and work with command line tools in your GitLab Kubernetes instance"
---

## Objectives

In this lab, you will SSH into your GitLab instance and work with the various command line tools available in it. This will help you understand the different ways you can work with your GitLab installation.

## Task A. Accessing the GitLab Instance

You will access your GitLab installation using SSH. As a part of this class, you were provided an SSH key and instance IP to use for this process. The instance you were provided has an active connection with helm to a Kubernetes cluster. To SSH into your instance, you can use the following steps.

1. On your local computer, open a terminal window.

1. Navigate to the directory that contains the SSH key file for your server.

1. SSH connections require that your private key file is not accessible by others. On Linux and MacOS, you can do this with the following command:

    ```bash
    chmod 400 <keyfile_name>
    ```

    On Windows, you can do this with the following command:

    ```bash
    icacls .\keyname.pem /inheritance:r
    ```

1. Use your assigned IP address and SSH key file to log in to the server that will host your GitLab Omnibus install:

    ```bash
    ssh -i <keyfile_name> root@<vm_ip_address>
    ```

    > If you encounter an error like: WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!, you may need to reset your SSH known hosts. To do this, run the command `ssh-keygen -R <vm_ip_address>`.

1. Press Enter.

1. If your system displays an authentication warning, type `yes` and press Enter.

1. After typing yes, you will be connected to your server.

## Task B. Interacting with kubectl

The `kubectl` command line tool is one of the main ways you will check and verify the status of your GitLab instance. In this section, we will explore the different ways we can see the status of a GitLab instance.

1. On your instance, run the command `sudo kubectl get pods`. You will see an output similar to below:

    ```bash
        NAME                                              READY   STATUS      RESTARTS        AGE
        gitlab-certmanager-7c799d587-9czfz                1/1     Running     0               4m5s
        gitlab-certmanager-cainjector-9485f8595-976d7     1/1     Running     0               4m3s
        gitlab-certmanager-webhook-dcf65786c-kfvhg        1/1     Running     0               4m3s
        gitlab-gitaly-0                                   1/1     Running     0               4m3s
        gitlab-gitlab-exporter-76db6c9754-pcscv           1/1     Running     0               4m2s
        gitlab-gitlab-shell-557686d7fc-x6rhm              1/1     Running     0               4m5s
        gitlab-issuer-e45fa94-dp584                       0/1     Completed   0               4m3s
        gitlab-kas-5474bdbfdf-p6qw4                       1/1     Running     4 (2m59s ago)   4m5s
        gitlab-kas-5474bdbfdf-pzqwm                       1/1     Running     4 (2m57s ago)   3m50s
        gitlab-migrations-92d5ea2-x6lc5                   0/1     Completed   1               4m2s
        gitlab-minio-5d646cdfb7-cdgw7                     1/1     Running     0               4m5s
        gitlab-minio-create-buckets-5359da5-rccp6         0/1     Completed   0               4m3s
        gitlab-nginx-ingress-controller-5dd6f5f49-9k2cq   1/1     Running     0               4m5s
        gitlab-nginx-ingress-controller-5dd6f5f49-dgvft   1/1     Running     0               4m3s
        gitlab-postgresql-0                               2/2     Running     0               4m3s
        gitlab-prometheus-server-c7f9d89dc-wz48w          2/2     Running     0               4m5s
        gitlab-redis-master-0                             2/2     Running     0               4m3s
        gitlab-registry-79f74497dd-bk8gw                  1/1     Running     0               4m3s
        gitlab-registry-79f74497dd-g9s84                  1/1     Running     0               3m50s
        gitlab-sidekiq-all-in-1-v2-54dfb45f84-d5gbq       1/1     Running     0               4m2s
        gitlab-toolbox-9cdd66dc5-pz4gz                    1/1     Running     0               4m2s
        gitlab-webservice-default-67f8cbfd9b-cmn7p        2/2     Running     0               4m3s
    ```

    > The status command shows you an overview of the GitLab components running on your server. Your component names may differ from the ones shown here.

1. Next, let's view details about a specific pod. To do this, run the command `kubectl describe pod <your-webservice-pod-name>`

    > In this output, you will see in depth details about your webservice pod. This output is helpful for troubleshooting and monitoring your GitLab instance components.

## Task C. Working with helm

When you work with Kubernetes, many of your administration tasks will run through helm. To start, we will retrieve the values for our helm deployment, and make some small adjustments to the configuration.

1. To get your helm values, run the command `helm get values gitlab`. You will see an output of all your helm values.

1. Copy these into a file using the command `helm get values gitlab > values.yml`

1. Open the `values.yml` file in your text editor of choice.

1. Delete the top line written `USER-SUPPLIED VALUES:`.

1. Save the resulting file.

1. Let's try deploying our values file to verify that these values deploy successfully. To do this, run the command `helm upgrade gitlab gitlab/gitlab -f values.yml`.

    > This command may take several minutes to run.

1. Once the command completes, run `kubectl get pods`. Verify that all pods complete deployment successfully.

## Task C. Interacting with GitLab Rails

GitLab Rails is a command line tool which allows you to interact with GitLab directly through Ruby on Rails. This tool can be valuable for troubleshooting and fixing instance errors.

1. To access GitLab Rails, run the command `kubectl get pods -lapp=toolbox` to find your toolbox pod

1. Using your toolbox pod, launch an instance of `gitlab-rails` using the command `kubectl exec -it -c toolbox <toolbox-pod-name> -- gitlab-rails console`.

1. After the command completes, run `u = User.find_by_username('root')`.

    > This command will find a user in GitLab with the username `root` and store them in the variable `u`.

1. Print the user's attributes using `pp u.attributes`.

1. Print the user's username using `pp u.username`.

1. Once complete, type `quit` to exit the Rails console.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandson).

### Suggestions?

If you'd like to suggest changes to the GitLab System Admin Basics Hands-on Guide, please submit them via merge request.
