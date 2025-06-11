---
title: "GitLab CI/CD - Hands-On Lab: Defining Stages, Jobs, and Runners"
description: "This Hands-On Guide walks you through creating a .gitlab-ci.yml file, and a GitLab Runner."
---

> Estimate time to complete: 15 - 20 minutes

## Objectives

In this lab, you'll enabled CI/CD for a GitLab project. After creating your first `.gitlab-ci.yml` file, you will explore the CI/CD pipeline to better understand jobs and stages. Finally, you will learn how to install, run, and register a runner with a GitLab instance.

> Parts **D** through **G** in this exercise require admin rights to your local machine. If you are unable to install GitLab Runner locally, you may skip parts D through G and use the training environment's shared runners instead.

## Task A. Access your Lab Environment

1. Navigate to [**https://gitlabdemo.com/invite**](https://gitlabdemo.com/invite) in a web browser.

1. In the **Invitation Code** field, enter the invitation code provided by your instructor or in the LevelUp LMS.

1. Select **Provision Training Environment**.

1. For self-paced courses, you will need your **GitLab.com** username. To find your username, navigate to [Gitlab](https://gitlab.com).

1. In the left sidebar, select your profile image.

1. In the resulting dropdown, you will see a value starting with `@`. This is your GitLab username.

1. After inputting your invitation code, the portal prompts you for your **GitLab.com** username. Enter your GitLab.com user (excluding the leading `@` sign) in the field provided.

1. Select **Provision Training Environment**.

1. Select **My Group** at the bottom of the page.

1. Sign in with your GitLab.com credentials.

1. You will be redirected to a **My Test Group** group that provides a sandbox for you to perform training lab steps in.

   > This group has a GitLab Ultimate license to see all of the features while your personal username namespace requires a paid subscription or a free trial to access all of the features.
   >
   > If you receive a 404 error when accessing your group, it is likely due to the username input during the lab provisioning. Double check your GitLab username to make sure it is entered correctly.

1. From your **My Test Group** training subgroup, click the **New project** button.

1. Continue to Task B.

## Task B: Create a Project

1. From the **My Test Group** training subgroup, click the **New project** button.

1. Click the **Create blank project** tile.

1. In the **Project name** text box, enter `CICD Demo`.

   > The project slug will automatically populate. You can change this to a shorter string if desired for your own project. Leave it at the default for this lab.

1. In the Project URL field, click the dropdown for the second half of the URL to make sure it's pointing to a group name (starts with **gitlab-learn-labs/** if it is SPT, and **training-users/** if it is ILT) and not a username. You should create this project inside a group, not directly in your user's namespace.

1. Under **Visibility Level**, ensure **Private** is selected.

   > Since the parent group above your group is private, all child groups and projects below will be private. You can learn more about project visibility levels in the [documentation](https://docs.gitlab.com/ee/user/public_access.html).

1. Check **Initialize repository with a README**.

1. Ensure that the **Enable Static Application Security Testing (SAST)** checkbox remains unchecked.

1. Click the **Create project** button.

### Task C. Add a `.gitlab-ci.yml` File

> To use GitLab CI/CD, you start with a `.gitlab-ci.yml` file at the root of your project. The `.gitlab-ci.yml` file contains the configurations for your CI/CD pipeline. In this section, you will create a simple `gitlab-ci.yml` file.

1. Create a new file in the main branch by clicking **(+) > This directory > New file**.

1. In the **Filename** field, type `.gitlab-ci.yml`

1. Select the `Bash` template from the `Apply a template` dropdown. This will pre-populate the file.

1. To create a minimal `.gitlab-ci.yml` file:
   * Delete all lines above `build1`.
   * Delete all lines below `echo "For example run a test suite"` in the `test1` section.

1. Add `build` and `test` stages by pasting these lines at the top of the file.

   ```yml
   stages:
     - build
     - test
   ```

   > Keep in mind that YAML files should be indented with two spaces. Your web IDE may try to use a tab with 4 spaces. Simply use the backspace to set 2 spaces if you are not copying and pasting the examples.

1. Set the commit message to `Creating a simple .gitlab-ci.yml file`, and set the **Target Branch** to `main`.

1. Click **Commit changes**.

1. After committing the changes, you will have a `.gitlab-ci.yml` that looks like this:

   ```yml
   stages:
     - build
     - test

   build1:
     stage: build
     script:
       - echo "Do your build here"

   test1:
     stage: test
     script:
       - echo "Do a test here"
       - echo "For example run a test suite"
   ```

This file defines two stages: `build` and `test`. The `build1` job executes during the `build` stage, running all of the commands in `script`. The `test1` job executes during the `test` stage, running all of the commands in `script`.

### Task D. View a Pipeline's Status, Stages, Jobs, and GitLab Runner

> When you commit your `.gitlab-ci.yml` file, a pipeline is created. A pipeline comprises of jobs and stages. In the previous section, you defined two stages: `build` and `test`. Each of these stages contained jobs, which were defined in `script`. In this section, you will view the pipeline created from your `.gitlab-ci.yml` file.

1. In the left navigation pane, click **Build > Pipelines** to see an overview of all pipelines. The top row in the overview shows the pipeline that started a few seconds ago, when you committed `.gitlab-ci.yml`. The status icon at the left of the row should say either **running** or **passed**.

1. Click the status icon of the top row to see the details of the most recent pipeline. You'll see columns representing the pipeline's stages, and widgets representing jobs within each stage.

> The order of execution for stages generally reads left to right. In this example, the `build` stage is the leftmost column, since it is the first stage to execute.

1. Click each of the two jobs to see the output in a web terminal. Identify the gitlab-runner for each job

   > Hint: it's listed near the top of each job's output.

### Task E. Prepare to Install GitLab Runner Locally

> Jobs are executed by `runners`. If your project is hosted on `GitLab.com`, various SaaS runners are provided to build, test, and deploy your application on different environments. In some cases, you may want to host your own runners. Sections D, E, and F will outline the process of installing and registering a runner on your GitLab instance.

1. Depending on which OS you're on, run the appropriate command(s):

   * In a **Linux** terminal:

     ```sh
     sudo gitlab-runner status
     ```

   * In a **macOS** terminal:

     ```sh
     gitlab-runner status
     ```

   * In a **Windows** PowerShell window:

     ```powershell
     cd C:\GitLab-Runner
     .\gitlab-runner.exe status
     ```

1. If the command gives an output like: `gitlab-runner: Service is running`, then you already have a runner installed on your system. If a runner is already installed on your system, skip to Part F below. If the command throws an error, continue with the next section.

### Task F. Install the GitLab Runner Binary on your Computer

> This section outlines the steps required to install a GitLab runner on your computer. Follow only the instructions that match the operating system you're using.

#### Linux

1. Follow **steps 1 and 2 only** in [this documentation](https://docs.gitlab.com/runner/install/linux-repository.html#installing-gitlab-runner).

1. Verify that the gitlab-runner service has started by running this command:

```sh
sudo gitlab-runner status
```

If you see `Service is running` in the output, the gitlab-runner service is working as expected.

#### macOS

1. Follow **steps 1 and 2 only** in [this documentation](https://docs.gitlab.com/runner/install/osx.html#manual-installation-official).

1. Install gitlab-runner as a service and start the service:

   ```sh
   cd ~
   gitlab-runner install
   gitlab-runner start
   ```

1. Verify that the gitlab-runner service has started by running this command:

   ```sh
   gitlab-runner status
   ```

If you see `Service is running` in the output, the gitlab-runner service is working as expected.

#### Windows

1. Follow **steps 1 and 2 only** in [this documentation](https://docs.gitlab.com/runner/install/windows.html#installation).

1. Open an elevated PowerShell window:
   1. Click **Start**.

   1. Type `PowerShell`

   1. Right-click **Windows PowerShell**.

   1. Click **Run as administrator**.

1. From the elevated PowerShell window, install and start the gitlab-runner service:

   ```powershell
   cd C:\GitLab-Runner
   .\gitlab-runner.exe install
   .\gitlab-runner.exe start
   ```

1. Verify that the gitlab-runner service has started by running this command:

   ```powershell
   .\gitlab-runner.exe status
   ```

If you see `Service is running` in the output, the gitlab-runner service is working as expected.

### Task G. Register a Specific Runner Dedicated to your Project

> At this point, you have installed a runner on your system. To allow GitLab to use this runner for CI/CD jobs, you need to register the runner in the UI.

1. In your **CICD Demo** project, in the left navigation pane, click **Settings > CI/CD**.

1. Scroll down to the **Runners** section. Click the **Expand** button next to it.

1. Under the **Project runners** section, click the **New project runner** button.

1. Under **Tags**, select **Run untagged jobs**. Leave the rest of the options blank.

   > An untagged runner will run any jobs. To control the jobs that a runner can run, you can define tags for the runner. To learn more about this process, click [here](https://docs.gitlab.com/ee/ci/runners/configure_runners.html#use-tags-to-control-which-jobs-a-runner-can-run)

1. Click the **Create runner** button.

1. From the next page presented, select your operating system (Linux, MacOS, or Windows).

1. Copy the command under **Step 1** to your clipboard.

1. Back in your terminal, paste and run the command you copied in the previous step. Press `Enter` for the instance URL and `Enter` for the runner name to use the default values. (You can give this a custom name if desired).

1. When prompted for the executor, enter `shell`

1. Confirm that your gitlab-runner registered correctly by running the appropriate command(s) for your OS:
   * In a **Linux** terminal:

     ```sh
     sudo gitlab-runner list
     ```

   * In a **macOS** terminal:

     ```sh
     gitlab-runner list
     ```

   * In a normal (not elevated) **Windows** PowerShell window:

     ```powershell
     cd C:\GitLab-Runner
     .\gitlab-runner.exe list
     ```

> If your runner is registered correctly, you should see an output like this: </br>`gitlab-runner run Executor=shell Token=your-gl-token URL=https://gitlab.com`

1. If you're on Windows, follow these additional instructions to configure your gitlab-runner to use the right command to start PowerShell:
   1. Open `C:\GitLab-Runner\config.toml` in a text editor.

   1. Change this line:

      ```toml
      shell = "pwsh"
      ```

     to this:

      ```toml
      shell = "powershell"
      ```

1. Save the file.

## (Optional) Task H: Unregistrering a GitLab Runner

If you do not wish to keep the GitLab Runner on your device, you may follow the steps below to unregister the GitLab Runner.

1. Get the URL and the token of the GitLab Runner by running the following command (dependent on your OS):

   * In a Linux terminal: ```sudo gitlab-runner list```
   * In a macOS terminal: ```gitlab-runner list```
   * In a normal (not elevated) Windows PowerShell window:

   ```ps
   cd C:\GitLab-Runner
   .\gitlab-runner.exe list
   ```

1. Using the URL and token, run the unregister command: ```gitlab-runner unregister --url "https://gitlab.example.com/" --token t0k3n```

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab CI/CD*, please submit your changes via Merge Request!
