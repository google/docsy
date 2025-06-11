---
title: "GitLab System Admin - Hands-On Lab: Upgrading GitLab Kubernetes"
description: "This Hands-On Guide demonstrates how to upgrade your GitLab Kubernetes instance"
---

> Estimated time to complete: 30 minutes

## Objectives

The objective of this lab is to demonstrate how to upgrade a GitLab instance.

### Task A. View your current GitLab version

1. Navigate to your GitLab instance and sign in as the root user.

1. In the left sidebar, select **Help > Help**.

1. At the top of the page, you will see your full GitLab version. For this lab, you will see `17.4.1-ee`.

## Task B. View the available GitLab versions

Updates to GitLab Omnibus are completed through your package manager, by installing the Omnibus package that corresponds to your GitLab version. To view the versions of GitLab available for your package, you can SSH onto your instance and view package versions for your package manager.

1. SSH into your GitLab instance.

1. Run the command `helm repo update` to update your helm charts.

1. Run the command `helm search repo gitlab/gitlab --versions`.

1. For this lab, locate version `17.5.0-ee.0` (associated with helm chart version `8.5.0`). Take note of this version, we will be upgrading to this version of GitLab.

## Task C. Run the upgrade

With our target GitLab version identified, we can now run an upgrade of GitLab.

1. If you haven't already, SSH onto your GitLab instance.

1. Take a backup of your instance using the following commands:

    ```bash
    # find the toolbox pod
    kubectl get pods -lapp=toolbox

    # Run the backup utility
    kubectl exec <toolbox-name>  -it -- backup-utility

    #Get your rails secrets
    kubectl get secrets | grep rails-secret

    #Save the secrets to a local location
    kubectl get secrets <rails-secret-name> -o jsonpath="{.data['secrets\.yml']}" | base64 --decode > gitlab-secrets.yaml
    ```

1. Navigate to `https://gitlab-com.gitlab.io/support/toolbox/upgrade-path/`.

1. Input your current GitLab version (`17.4.1`) and your target version (`17.5.0`).

1. Ensure that **Edition** is set to **Enterprise**, and Distro is set to **Ubuntu**.

1. Select `Go!`.

In the upgrade path, you will see only a single step is required, which is to install `17.5.0`. Let's complete this process.

1. On your GitLab instance, run the command:

    ```bash
    helm upgrade gitlab gitlab/gitlab \
    --version 8.5.0 \
    -f gitlab.yaml
    ```

1. Wait for the installation to complete. Once it does, navigate to your instance in your web browser.

You should be met with a message `HTTP 502: Waiting for GitLab to boot`. Wait at this screen until the boot completes and you are navigated back to your GitLab instance.

## Task D. Validate the upgrade

At this point, you have been redirected to the login page of your instance. To validate your upgrade, complete the following steps:

1. Authenticate to your GitLab instance as the root user.

1. In the left sidebar, select **Admin**.

1. In the left sidebar, select **Monitoring > Background migrations**.

1. Review the table for any migrations in the **Queued** section. These migrations need to complete before you complete any additional upgrades. Once they complete, they will show in the **Finished** tab.

    > As an example, after this upgrade you will likely see the migration `BackfillIssuesCorrectWorkItemTypeId: issues`. Try to find this migration in either the **Queued** or **Finished** tab.

1. To validate your version, in the left sidebar, select **Help**. In the resulting menu, you should now see version `17.5`.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/sysadminhandson).

### Suggestions?

If you'd like to suggest changes to the GitLab System Admin Basics Hands-on Guide, please submit them via merge request.
