---
title: "GitLab CI/CD - Hands-On Lab: Investigating Broken Pipelines"
description: "This Hands-On Guide demonstrates how to troubleshoot and fix CI/CD pipelines"
---

> Estimated time to complete: 15 minutes

## Objectives

- Syntax error catching
- Cases where no jobs run due to rules/workflows

In the next section, we are going to take a look at deploying an application using an SSH key. To start this process, we will need to add an SSH key as a variable to our pipeline. This process can sometimes cause errors due to the formatting of the SSH key. To help with implementing this process correctly, as well as learning how to troubleshoot, let’s take a look at a common error.

## Task A. Setup the SSH Connection

As a part of this course, you were provided with an SSH key to use for deployments. You will need to add this SSH key to GitLab to use it during your CI/CD process. To do this:

1. Navigate to your project in GitLab.

1. In the left sidebar, go to **Settings > CI/CD**.

1. Select **Expand** next to **Variables**.

1. In **Group variables (inherited)**, you will see a variable named `SSH_PRIVATE_KEY`

To demonstrate a common SSH related error, we will copy the SSH key and create a new variable based on its value:

1. Select the group next to the `SSH_PRIVATE_KEY` variable.

1. Select **Expand** next to **Variables**.

1. Select the **Copy** icon next to the value of the `SSH_PRIVATE_KEY` variable .

1. Select **Add variable**.

1. Set the **Type** to **file**.

1. In the `key` field, enter `SSH_INVALID_KEY`.

1. In the value, paste your SSH key.

1. Delete the new line at the end of the key value. Doing this will create an error when we try to use the key.

1. Select **Add variable**.

Your new SSH key variable will now be accessible during any CI/CD jobs you run in your group. Now, let’s create a job to test the SSH connection.

1. Navigate to your CI/CD project.

1. Select your `.gitlab-ci.yml` file.

1. Select **Edit > Edit in pipeline editor**.

1. Add a new stage named deploy:

    ```yaml
    stages:
      - test
      - build
      - run
      - release
      - deploy
    ```

1. For this stage, we will have a single job named deploy app.The first thing this job will do is check if there is an SSH agent available, and install one if not.

    ```yaml
    deploy app:
      stage: deploy
      script: 
        - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
        - eval $(ssh-agent -s)
    ```

1. Next, we will setup a pem file from our SSH key variable, setting the required permissions on the file so it can be used for SSH purposes. Note that we are using the `SSH_INVALID_KEY` variable.

    ```yaml
    deploy app:
      stage: deploy
      script: 
        - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
        - eval $(ssh-agent -s)
        - chmod 400 "$SSH_INVALID_KEY"
        - ssh-add "$SSH_INVALID_KEY"
        - mkdir -p ~/.ssh
        - chmod 700 ~/.ssh
    ```

1. Finally, we can add a simple SSH command to test if the connection is working.

```yaml
deploy app:
  stage: deploy
  script: 
    - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
    - eval $(ssh-agent -s)
    - chmod 400 "$SSH_INVALID_KEY"
    - ssh-add "$SSH_INVALID_KEY"
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
    - ssh-keyscan -t rsa,ed25519 $ip >> ~/.ssh/known_hosts
    - ssh root@$ip 'ls /'
```

When you commit these changes, you will see an error in your deploy job. To view this error, navigate to the **Build** > **Pipelines** page and view the failed pipeline and job. The output should look similar to the one below:

```bash
$ eval $(ssh-agent -s)
Agent pid 3211
$ chmod 400 "$SSH_INVALID_KEY"
$ ssh-add "$SSH_INVALID_KEY"
Error loading key "/builds/training-users/session-eff7bd34/iuztj7px/cicd-demo.tmp/SSH_INVALID_KEY": error in libcrypto
```

Let’s try to figure out what happened!

## Task B.1. Isolate the command that causes the error

The first logical step is to isolate the command that is causing the error. We can see in the logs that the `ssh-add "$SSH_INVALID_KEY"` command looks to cause the error.

With the command isolated, we can consider some ways to verify the command. One option would be to try running the command locally if possible. This can help rule out potential issues with the runner. For this example, we can assume the runners are working correctly, meaning the issue lies in the actual command itself.

In these cases, often the variable/input of the command is the main source of the error. From the error message, it looks that the key is not formatted correctly. Let's consult the documentation to see why.

## Task B.2. Search the Documentation

Often, common errors will be present in our documentation with solutions to the problems. To find this error:

1. Try searching for the error in the [documentation](https://docs.gitlab.com/). The first result you get is an article titled: **Using SSH keys with GitLab CI/CD**.

1. If you scroll to the Troubleshooting section of this page, you will see a section on the exact error we are facing.

The documentation tells us that the issue is not having a new line at the end of the key. Let’s try adding one and see if it fixes the problem.

1. Return to your variables by selecting **Settings > CI/CD > Variables**.

1. Select the group next to the `SSH_INVALID_KEY` variable.

1. Expand the group variable section and select the **Edit** icon next to the `SSH_INVALID_KEY` variable.

1. Add a new line to the end of the variable value, then select **Save Changes**.

To test if this fixes the error:

1. Navigate back to your CI/CD project.

1. Select **Build > Pipelines** from the left sidebar.

1. Select **New pipeline**.

1. Leave all values as default and select **New pipeline** again. You will now see the job complete successfully!

## Task C. Clean Up Deploy Job

Now that the job has been fixed, it is important to clean up the job so that the steps of the job are more clear. For example, we can move parts of the jobs from the `script` section to the `before_script` section.

1. Let's move the steps from the `'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'` to `chmod 700 ~/.ssh` into a `before_script` section. That way, it is clear which parts of the job are for setup, and which are the actual tasks being performed.

The deploy job should now look like this:

```yaml
deploy app:
  stage: deploy
  image: ubuntu:latest
  before_script:
    - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
    - eval $(ssh-agent -s)
    - chmod 400 "$SSH_PRIVATE_KEY"
    - ssh-add "$SSH_PRIVATE_KEY"
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
  script:
    - ssh-keyscan -t rsa,ed25519 $ip >> ~/.ssh/known_hosts
    - ssh root@$ip 'ls /'
```

1. Run the pipeline to make sure the changes did not break anything in the pipeline.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab CI/CD*, please submit your changes via Merge Request.
