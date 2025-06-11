---
title: "GitLab System Admin - Hands-On Lab: Kubernetes Backup and Restore"
description: "This Hands-On Guide demonstrates how to backup and restore your GitLab Kubernetes instance"
---

> Estimated time to complete: 30 minutes

## Objectives

The objective of this lab is to demonstrate how to back up a GitLab instance on a virtual machine, and restore said instance to a previous state. For more information about backing up/restoring a GitLab instance, click [here](https://docs.gitlab.com/ee/administration/backup_restore/).

### Task A. Configure backup settings

1. Open an SSH session on your GitLab instance server.

1. Open your helm values using your text editor of choice.

1. Inside this file, you will need to update a few configurations to enable backups. To start, add the following `global` configuration:

    ```yml
    global:
      appConfig:
        artifacts:
          bucket: k8-lab-backup-bucket
        backups:
          bucket: k8-lab-backup-bucket
        lfs:
          bucket: k8-lab-backup-bucket
        packages:
          bucket: k8-lab-backup-bucket
        terraformState:
          bucket: k8-lab-backup-bucket
        tmpBucket:
          bucket: k8-lab-backup-bucket
        uploads:
          bucket: k8-lab-backup-bucket
    ```

    > These configurations set the name of the remote storage bucket for each backup type.

1. Kubernetes backups are made through the `toolbox` pod. To enable this pod to run backups, it needs to be able to connect to the backup provider. The following configuration can be added to the `gitlab` block to achieve this:

    ```yml
      toolbox:
        backups:
          objectStorage:
            backend: s3
            config:
              key: config
              secret: my-s3cfg
    ```

1. To be able to access these buckets, you need to provide credentials for an AWS service account. To do this, run the command `kubectl create secret generic my-s3cfg --from-file=config=/tmp/my-s3cfg`.

1. After adding this configuration, run the command `helm upgrade --install gitlab gitlab/gitlab --timeout 100s -f values.yml`.

### Task B. Backup the GitLab instance

1. To take a full backup, start by locating your `toolbox` pod.

    ```bash
    kubectl get pods -lapp=toolbox
    ```

1. Next, run the backup utility from the `toolbox` pod.

    ```bash
    kubectl exec <toolbox-name>  -it -- backup-utility
    ```

1. Finally, retrieve your Kubernetes secrets and save them to a file.

    ```bash
    #Get your rails secrets
    kubectl get secrets | grep rails-secret

    #Save the secrets to a local location
    kubectl get secrets <rails-secret-name> -o jsonpath="{.data['secrets\.yml']}" | base64 --decode > gitlab-secrets.yaml
    ```

At this point, the backup is now stored in your object storage. Take note of the file name, for example, `s3://bucket/1729261040_2024_10_18_17.4.1-ee_gitlab_backup.tar`

**Important:** Take note of the timestamp (in this example: 1729261040_2024_10_18_17.4.1-ee). You will need this for the restore process.

### Task C. Make some changes to GitLab settings

1. Sign into your GitLab instance with a web browser and open your sidebar. In the bottom left corner, click **Admin area**.

2. In the left sidebar, select **Settings** > **General**.

3. Expand **Account and limit** and change the maximum attachment size to 500 MiB, and the default project limits to 10000.

4. Click **Save changes** to save the changes.

5. Refresh the page and verify your changes were applied.

### Task D. Restore from backup

1. Return to the SSH session on your GitLab instance server.

1. Delete your current Kubernetes secrets:

    ```bash
    kubectl delete secret <rails-secret-name>
    ```

1. Create a new set of secrets based on your backed up Kubernetes secrets:

    ```bash
    kubectl create secret generic <rails-secret-name> --from-file=secrets.yml=gitlab-secrets.yaml
    ```

1. Restart your Kubernetes pods to apply the secret

    ```bash
    kubectl delete pods -lapp=sidekiq,release=gitlab
    kubectl delete pods -lapp=webservice,release=gitlab
    kubectl delete pods -lapp=toolbox,release=gitlab
    ```

1. To start the restore process, locate the name of your `toolbox` pod.

    ```bash
    kubectl get pods lapp=toolbox
    ```

1. Scale your Kubernetes pod replicas down to 0

    ```bash
    kubectl scale deploy -lapp=sidekiq,release=gitlab --replicas=0
    kubectl scale deploy -lapp=webservice,release=gitlab --replicas=0
    kubectl scale deploy -lapp=prometheus,release=gitlab --replicas=0
    ```

1. Run a restore using the timestamp ID you received from the backup command

    ```bash
    kubectl exec <Toolbox pod name> -it -- backup-utility --restore -t your-timestamp-id
    ```

    > If you are prompted to start the restore process, type **yes**.

1. After the restore process completes, scale your pods back up:

    ```bash
    kubectl scale deploy -lapp=sidekiq,release=gitlab --replicas=1
    kubectl scale deploy -lapp=webservice,release=gitlab --replicas=1
    kubectl scale deploy -lapp=prometheus,release=gitlab --replicas=1
    ```

1. Try to access your Kubernetes instance and verify that the restore completed successfully.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandson).

### Suggestions?

If you'd like to suggest changes to the GitLab System Admin Basics Hands-on Guide, please submit them via merge request.
