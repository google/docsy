---
title: "GitLab Security Essentials - Hands-On Lab: Enable and Scan Using a Scan Execution Policy"
description: "This Hands-On Guide walks you through enabling and using a Scan Execution Policy in a GitLab project."
---

> Estimated time to complete: 15 minutes

## Objectives

Compliance scans allow you to control merge requests and security scans in your instances, groups, and projects. This lab will demonstrate how to enable security and merge request policies at a group level.

## Task A. Setting up a Security Policy

1. Navigate to your group.

1. In the left sidebar, select **Secure > Policies**.

1. Select **New policy**.

1. Under **Scan execution policy**, select **Select policy**.

1. For the **Name**, enter `Group security policy`.

1. Ensure the **Policy status** is set to **Enabled**.

1. For **Policy Scope**, apply to **all projects in this group without exceptions**.

1. Under Actions, set the scan to run a **SAST scan**. Ensure that **Runner Tags** is set to **selected automatically** and **Security job template** is set to **default**.

1. Under Conditions, select **Triggers**. Have the policy run for **all branches** with **No exceptions**.

1. Select **Configure with a merge request**.

1. Select **Merge** to complete your configuration.

## Task B. Security Policy Scans in Action

1. Navigate to your group.

1. Select **New project**.

1. Select **Create blank project**.

1. In the **Project name** field input `Security Compliance Testing`.

1. Leave all other options as default and select **Create project**.

1. In the project repository, select **+ > New file**.

1. In the **Filename**, input `main.py`.

1. Add the following code to the file:

    ```py
    print("Testing scanners!")
    ```

1. Select **Commit changes**.

1. In the left sidebar, select **Build > Pipelines**.

1. Select the pipeline that was created from your commit.

1. Review the jobs in the pipeline. Notice how a `SAST` scan is run on this commit even though no `.gitlab-ci.yml` configuration exists.

Now, the projects in your group will always have security scans, even if they aren't defined in the `.gitlab-ci.yml` file yet.

## Task C. Merge Request Policies

With security scans in place, it would be ideal to be able to block merge requests that contain security vulnerabilities. In this section, you will create a merge request policy to achieve this goal.

1. Navigate to your group.

1. In the left sidebar, select **Secure > Policies**.

1. Select **New policy**.

1. Under **Merge request approval policy**, select **Select policy**.

1. In **Name**, enter the value `Merge Request Security`.

1. Under **Policy status**, ensure **Enabled** is selected.

1. For **Policy Scope**, apply the policy to all projects in this group, without exceptions.

1. Under **Rules**, set the scan type to **Security Scan**.

1. For the scanner, select **All scanners**.

1. Run the scan against **all default branches**.

1. Specify that the scan has **No exceptions** and finds **Any** vulnerabilites.

1. Set the severity level to **All severity levels**.

1. Set the status to **New** and **All vulnerability states**.

1. Under **Actions**, require 1 approval from the **Owner** role.

1. In **Override project approval settings**, make sure to **uncheck** the option **Prevent approval by merge request's author** and **Prevent approval by commit author**.

    > We are only setting these options to off because we have one account in our group. For production environments, this is often toggled on.

1. Leave all other options as default and select **Configure with a merge request**.

1. Select **Merge**.

## Task D. Merge Request Policies in Action

1. Return to your group.

1. Select your **Security Compliance Testing** project.

1. In the left sidebar, select **Code > Branches**.

1. Select **New branch**.

1. Name the branch `test_policy`, then select **Create branch**.

1. Select **Create merge request**.

1. Uncheck **Mark as draft**, then select **Create merge request**.

1. Select **Code > Open in Web IDE**.

1. Open your `main.py` file and add the following code to it:

    ```py

    in = input("Enter your server ip: ")
    subprocess.run(["ping", in])

    print("Attempting to connect to the server")
    print("Application authentication was successful")
    ```

1. Select the branch icon, then select `Commit and push to 'test_branch'`.

1. Return to your MR.

1. Allow you pipeline to complete. Once it completes, take note of the comment stating `This merge request has policy violations and errors`.

1. To resolve these issues, select **Code > Open in Web IDE**.

1. Open your `main.py` file and edit your `main.py` code to the following:

    ```py
    print("Attempting to connect to the server")
    print("Application authentication was successful")
    ```

1. Select the branch icon, then select `Commit and push to 'test_branch'`.

1. Return to your MR.

1. Allow your pipeline to complete. Once complete, take note of the comment stating `Security policy violations have been resolved`.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/secessentialshandson).

## Suggestions?

If you'd like to suggest changes to the *GitLab Security Essentials Hands-On Guide*, please submit them via merge request.
