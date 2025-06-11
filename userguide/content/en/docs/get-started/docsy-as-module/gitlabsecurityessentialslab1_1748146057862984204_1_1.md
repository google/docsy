---
title: "GitLab Security Essentials - Hands-On Lab: SAST and Secret Detection"
description: "This Hands-On Guide walks you through the process of enabling and using SAST and secret detection in your projects"
---

> Estimated time to complete: 15 minutes

### Task A. Create a Project

For this section of the course, we will use a template with prepopulated code to allow us to test out our security scanners. 

1. Select the **New project** button.

1. Select the **Create from template** tile.

1. Select the **Instance** tab.

1. Select **Use template** next to the **Security Essentials Labs** template.

1. In the **Project name** field, enter `Security Labs`.

    > The project slug will automatically populate. You can change this to a shorter string if desired for your own project. Leave it at the default for this lab.

1. In the **Project URL** field, click the dropdown for the second half of the URL to make sure it's pointing to a **group name** (starts with `training-users/*`) and not a **username**. You should create this project inside a group, not directly in your user's namespace.

1. Under **Visibility Level**, click **Private**.

    > Since the parent group above your group is private, all child groups and projects below will be private. You can learn more about project visibility levels in the <a target="_blank" href="https://docs.gitlab.com/ee/user/public_access.html">documentation</a>.

1. Click **Create project**.

## Task B. Enable and Configure SAST

> Static Application Security Testing, or SAST, is the process of examining source code for vulnerabilities. You can use a SAST scan to automatically scan a code repository for known vulnerabilities. You can also use a SAST scan to check merge requests for vulnerabilities before merging the request. This process helps ensure that your code stays vulnerability free.

1. Create a new file in the `main` branch by clicking **(+) > This directory > New file**.

1. In the **Filename** field, type `.gitlab-ci.yml`. You will see a template appear automatically that you can leave blank for this task.

1. Define a single **test** stage:

    ```yml
    stages:
      - test
    ```

    > Keep in mind that YAML files should be indented with two spaces. Your web IDE may try to use a tab with 4 spaces. Simply use the backspace to set 2 spaces if you are not copying and pasting the examples.

1. Enable SAST by pasting the following text after the stages definition in `.gitlab-ci.yml`:

    ```yml
    include:
      - component: ilt.gitlabtraining.cloud/components/sast/sast@main
    ```

    > It is also possible to configure SAST through the GitLab UI by navigating to **Secure > Security configuration** and clicking the **Configure SAST** button. We will be configuring it by editing the CI file for this lab to help you learn more about how it works under the hood.

1. Add an inputs section to the end of your `.gitlab-ci.yml` file and set the `excluded_paths: venv/`.

    ```yml
    include:
      - component: ilt.gitlabtraining.cloud/components/sast/sast@main
        inputs:
          excluded_paths: venv
    ```

    > You can customize your SAST by adding configurations to the inputs section of the `.gitlab-ci.yml` file. For example, the `excluded_paths` variable can exclude project paths from the SAST scan. This option can be set to prevent unnecessary scanning of files.
    >
    > As an example, Python projects often contain a `venv` directory that contains packages used by the project. Since this directory does not contain our own source code, we should exclude it from the SAST scan.
    >
    > A full list of SAST variables can be found in the <a target="_blank" href="https://docs.gitlab.com/ee/user/application_security/sast/#available-cicd-variables">documentation</a>.

1. Once complete, you will have a `.gitlab-ci.yml` file that looks like this:

    ```yml
    stages:
        - test

    include:
        - component: ilt.gitlabtraining.cloud/components/sast/sast@main
          inputs:
            excluded_paths: venv
    ```

1. Add an appropriate commit message (ex. `Add SAST template to .gitlab-ci.yml`), set the **Target Branch** to `add-security`. Ensure that **Start a new merge request with these changes** is checked, then click the **Commit changes** button.

1. In the **New merge request** window, enter any name for your merge request. Select **Create merge request**.

## Task C. Merge Request Vulnerability Report

> One of the main goals of security scanning is to prevent insecure code from making it into a repository. You can use the merge request vulnerability report to see all of the vulnerabilities that were detected in a single merge request. Note that this report will only show vulnerabilities that are newly introduced in the current merge request. If a vulnerability already exists in the repository, it will not show here, but will show in the project level vulnerability report.

1. After the pipeline completes, refresh the merge request screen. 

1. You should now see a message stating **Security Scanning detected 4 new potential vulnerabilities**. 

1. Select **View all pipeline findings**.

1. Review the vulnerabilities shown in the MR.

1. For now, we will merge these vulnerabilities so we can demonstrate other security features. In most cases however, you would aim to resolve the issues here.

1. Return to your merge request.

1. Leave `Delete source branch` checked and click **Merge**.

## Task D. Enable Advanced SAST

To provide more thorough scanning and vulnerability detection, we will opt to enable Advanced SAST in our project. To do this, we need to add another input to our SAST scan component.

1. In the Left sidebar, navigate to **Code > Repository**.

1. Select your `.gitlab-ci.yml` file

1. Select **Edit > Edit in pipeline editor**.

1. Below the `excluded_paths` input, add another input named `run_advanced_sast` with a value of `true`. Once complete, your file will look like this:

    ```yml
    stages:
    - test

    include:
    - component: ilt.gitlabtraining.cloud/components/sast/sast@main
        inputs:
        excluded_paths: venv
        run_advanced_sast: true
    ```

1. Set the branch to `sast-update` and click the checkbox near **Start a new merge request with these changes**. Click **Commit changes**.

1. In the MR page after this, provide an appropriate title (such as 'Enabled SAST in our pipeline'), and click **Create Merge Request**.

1. In the left sidebar, select **Build > Pipelines**.

1. Select your currently running pipeline. Note that there is now a job titled `gitlab-advanced-sast`.

1. When the pipeline successfully completes, return to your MR, and click on the **Merge** button.

The GitLab Advanced SAST scanner will provide us more utility from our SAST scanner. We will see how the results look when we investigate our vulnerability report later in the lab.

## Task E. Enable and Configure Secret Detection

> In the last section, you applied SAST to detect vulnerabilities in your source code. In addition to scanning code for vulnerabilities, GitLab can also scan your code for secrets like keys and API tokens. Adding secret detection to your code will prevent leaking sensitive data in your repositories.

The Secret Detection job belongs to the **test** stage by default. Since your `.gitlab-ci.yml` already defines that stage, you don't need to define it again.

1. In the Left sidebar, navigate to **Code > Repository**.

1. Click the `.gitlab-ci.yml` file. In the top right above the code, navigate to **Edit > Edit in pipeline editor**.

1. Enable Secret Detection by adding the component at the end of the existing `include:` section in `.gitlab-ci.yml`, below the component for SAST. This indent should be at the same level as the previous template.

    ```yml
    include:
    - component: ilt.gitlabtraining.cloud/components/sast/sast@main
      inputs:
        excluded_paths: venv
        run_advanced_sast: true
    - component: ilt.gitlabtraining.cloud/components/secret-detection/secret-detection@main
    ```

    > It is also possible to configure Secret Detection through the GitLab UI by navigating to **Secure > Security configuration** and clicking the **Configure Secret Detection** button. We will be configuring it by editing the CI file for this lab to help you learn more about how it works under the hood.

1. Configure Secret Detection to ignore the test directory by pasting this job definition below your component import.

    ```yml
    secret_detection:
      variables:
        SECRET_DETECTION_EXCLUDED_PATHS: tests/
    ```

    > To configure Secret Detection to use non-default behavior, you can override the **secret_detection** job definition and add variables inside it.
    >
    > A full list of Secret Detection variables can be found in the [documentation](https://docs.gitlab.com/ee/user/application_security/secret_detection/#available-cicd-variables).

1. Your `.gitlab-ci.yml` file will now look like this:

    ```yml
    stages:
        - test

    include:
      - component: ilt.gitlabtraining.cloud/components/sast/sast@main
        inputs:
          excluded_paths: venv/
          run_advanced_sast: true
      - component: ilt.gitlabtraining.cloud/components/secret-detection/secret-detection@main

    secret_detection:
      variables:
        SECRET_DETECTION_EXCLUDED_PATHS: tests
    ```

1. Set the branch to `main` and select **Commit changes**.

  > Note: It is considered best practice that all changes to a repository should be via an MR, and that MRs should be approved by other team members before merging. However, since this project only has one member (the person working on this lab), such a review is not possible. Therefore, it is common and accepted in small teams and demo environments to make direct commits to the main branch. In real-world scenarios, you should use merge requests.

1. Navigate to **Build > Pipelines**, review your jobs, and wait for all pipelines to complete.

## Task G. View the Project Level Vulnerability Report

> Every time you merge code into the main branch, the security pipeline will run and generate a project level vulnerability report that shows all vulnerabilities in *the latest commit to the default branch*. Think of this as the baseline set of vulnerabilities that you'll compare to vulnerabilities on other branches.

1. Navigate to **Secure > Vulnerability Report**.

1. Looking at the **Tool** column in the **Development vulnerabilities table**, you'll see a variety of vulnerability detections for each tool we enabled.

1. Select the **Improper neutralization of special elements used in an SQL command** vulnerability. You will see two tabs here, **Details** and **Code flow**. The **Details** tab shows general details about the vulnerability. The **Code flow** tab is a special feature provided by the advanced SAST scanner. This shows how your vulnerability is reached in your code.

1. Review these different results. In the next lab, we will discuss how to triage and resolve these vulnerabilities. 

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabsecurityessentials).

## Suggestions?

If you'd like to suggest changes to the *GitLab Security Essentials Hands-On Guide*, please submit them via merge request.
