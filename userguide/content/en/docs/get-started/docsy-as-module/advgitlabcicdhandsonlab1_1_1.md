---
title: "GitLab Advanced CI/CD - Hands-On Lab: GitLab Runners Deep Dive"
description: "This Hands-On Guide walks you through creating and maintaining a Docker runner"
---

Runner scalers rely on a consistent runner image to be able to spin up runner machines on demand. The first step to creating this image is understanding how the underlying runner functions. In this lab, you will learn how to create a Docker based runner. This runner will be able to serve as a basis for a Docker autoscaler.

> Estimated time to complete: 15 minutes

## Task A. Create a new project

To start, let's create a new project in the lab environment:

1. Select **Create a project**.

1. Select **Create blank project**.

1. For the project name, type **CICD Runner**.

1. Leave all other options as default and select **Create project**.

## Task B. Adding the runner to the project

1. Navigate to your project.

1. In the left sidebar, select **Settings > CI/CD**.

1. Select **Expand** next to Runners.

1. Select **New project runner**.

1. Select **Run untagged jobs**, leave all other settings as default, and select **Create runner**.

1. Ensure that Linux is selected as your operating system.

1. In the section titled **Step 1**, review the command, which will look something like this:

    ```shell
    gitlab-runner register  --url https://ilt.gitlabtraining.cloud  --token glrt-RrzYz4Kok-1X63pSqVJf
    ```

1. Take note of the value following `--token`. You will need this token later for the registration of your runner.

## Task C. Deploying a runner

We will manage the association of the runner and deployment of runner configuration through GitLab. This strategy allows you to have source control on your runner configuration, which is ideal for tracking changes.

Let's take a look at how this is structured:

1. Navigate to your project repository.

1. Select **+ > New file**.

1. In the filename, type `.gitlab-ci.yml`.

1. Add the deploy stage to the `.gitlab-ci.yml` file:

    ```yml
    stages:
        - deploy
    ```

1. Our first task is to setup our job to install the required dependencies for an SSH connection. Copy and paste the code below.

    ```yml
    deploy config:
        stage: deploy
        image: ubuntu:latest
        before_script:
        - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
        - eval $(ssh-agent -s)
        - chmod 400 "$SSH_PRIVATE_KEY"
        - ssh-add "$SSH_PRIVATE_KEY"
        - mkdir -p ~/.ssh
        - chmod 700 ~/.ssh
        - ssh-keyscan -t rsa,ed25519 $ip >> ~/.ssh/known_hosts
    ```

    > This job starts by installing and starting an ssh agent on the runner. When you redeemed your invitation code, an instance was created for you to deploy to and the SSH private key is stored in a variable named `SSH_PRIVATE_KEY`. This key is added to the SSH agent to use for connections.

1. As a script for the job, we are going to SSH into our server and register the gitlab runner on it. Make sure to replace `your-token-here` with your runner registration token.

    ```yml
        script:
        - ssh root@$ip 'gitlab-runner unregister --all-runners'
        - ssh root@$ip 'gitlab-runner register --non-interactive --url https://ilt.gitlabtraining.cloud --executor "docker" --docker-image alpine:latest  --token your-token-here'
    ```

   > The first command we run will unregister any current runners on your remote server. This prevents duplicate registrations of runners.
   >
   > The `–non-interactive` flag prevents the runner from prompting us for inputs during the installation process. Rather than entering a prompt, we provide the arguments for URL, executor, docker image, and token through command line arguments.
   >
   > In this configuration, the executor is set to docker. For the `docker-image`, you are setting the default Docker image to use for your pipelines. You can use any Docker image you like, for this example, we will use `alpine:latest` as the default image.

1. Select **Commit changes**.

1. Select **Build > Pipelines**.

1. Select your most recent pipeline.

1. Verify that the pipeline completes successfully.

To verify that the runner is registered:

1. In the left sidebar, select **Settings > CI/CD**.

1. Select **Expand** next to **Runners**. You should see a green circle next to your runner.

## Task D. View your runner configuration

When this runner is created, it will have a `config.toml` file that defines the configuration of the runner. Let's start by viewing our current runner configuration.

1. At the end of your `deploy config` job script, add the following command:

    ```yml
    - ssh root@$ip 'cat /etc/gitlab-runner/config.toml'
    ```

1. Commit this change and navigate to the pipeline created from the change.

1. View the `deploy config` job output.

1. You will see an output from the `cat` command similar to below:

    ```toml
    concurrent = 1
    check_interval = 0
    shutdown_timeout = 0

    [session_server]
      session_timeout = 1800

    [[runners]]
      name = "runner-test"
      url = "https://ilt.gitlabtraining.cloud"
      id = 1852
      token = "your-token-here"
      token_obtained_at = 2024-07-08T12:59:30Z
      token_expires_at = 0001-01-01T00:00:00Z
      executor = "docker"
      [runners.custom_build_dir]
      [runners.cache]
        MaxUploadedArchiveSize = 0
        [runners.cache.s3]
        [runners.cache.gcs]
        [runners.cache.azure]
      [runners.docker]
        tls_verify = false
        image = "alpine:latest"
        privileged = false
        disable_entrypoint_overwrite = false
        oom_kill_disable = false
        disable_cache = false
        volumes = ["/cache"]
        shm_size = 0
        network_mtu = 0
    ```

## Task E. Editing your runner configuration

For our configuration, we want to be able to run our job with Docker in Docker. To do this, we need to change two default configurations:

  ```toml
    privileged = true
    volumes = ["/certs/client", "/cache"]
  ```

To make these changes, we will push a `config.toml` file to the runner.

1. Navigate to your project repository.

1. Select **+ > New file**

1. In the filename, type `config.toml`.  

1. Copy the `config.toml` from your job output into the toml file you created in your repository.

    Your `config.toml` will look something like this (the `your-token` value will be your runner token instead):

    ```toml
    concurrent = 1
    check_interval = 0
    connection_max_age = "15m0s"
    shutdown_timeout = 0
    [session_server]
      session_timeout = 1800
    [[runners]]
      name = "docker-runner"
      url = "https://gitlab.com"
      id = 40174213
      token = "your-token"
      token_obtained_at = 2024-07-24T12:10:22Z
      token_expires_at = 0001-01-01T00:00:00Z
      executor = "docker"
      [runners.custom_build_dir]
      [runners.cache]
        MaxUploadedArchiveSize = 0
        [runners.cache.s3]
        [runners.cache.gcs]
        [runners.cache.azure]
      [runners.docker]
        tls_verify = false
        image = "alpine:latest"
        privileged = false
        disable_entrypoint_overwrite = false
        oom_kill_disable = false
        disable_cache = false
        volumes = ["/cache"]
        shm_size = 0
        network_mtu = 0
    ```

1. Before saving your `config.toml` file, update the following fields in your `config.toml`:

    ```toml
    privileged = true
    volumes = ["/certs/client", "/cache"]
    ```

1. Commit your `config.toml` file.

1. Select your `.gitlab-ci.yml` file.

1. Select **Edit > Edit in pipeline editor**.

1. After the `gitlab-runner register` command, add the following into the script:

    ```yml
    - scp config.toml root@$ip:/etc/gitlab-runner/config.toml
    - ssh root@$ip 'gitlab-runner restart'
    ```

1. After doing this, you will have the following `.gitlab-ci.yml` file:

    ```yml
    stages:
        - deploy

    deploy config:
      stage: deploy
      image: ubuntu:latest
      before_script:
        - 'which ssh-agent || ( apt-get update -y && apt-get install openssh-client git -y )'
        - eval $(ssh-agent -s)
        - chmod 400 "$SSH_PRIVATE_KEY"
        - ssh-add "$SSH_PRIVATE_KEY"
        - mkdir -p ~/.ssh
        - chmod 700 ~/.ssh
        - ssh-keyscan -t rsa,ed25519 $ip >> ~/.ssh/known_hosts
      script:
        - ssh root@$ip 'gitlab-runner unregister --all-runners'
        - ssh root@$ip 'gitlab-runner register --non-interactive --url https://ilt.gitlabtraining.cloud --executor "docker" --docker-image alpine:latest  --token glrt-71BkHhUV__N_4DDN-Xxz'
        - scp config.toml root@$ip:/etc/gitlab-runner/config.toml
        - ssh root@$ip 'gitlab-runner restart'
        - ssh root@$ip 'cat /etc/gitlab-runner/config.toml'
    ```

1. Select **Commit changes**.

This script copies your configuration to the runner machine. When the runner is registered, the new configuration is applied!

## Task F. Testing the Runner

To test the runner, let’s create a basic Docker in Docker configuration to use for a project.

1. Navigate to your `Runners` project.

1. Start by disabling instance level runners to ensure the jobs run on your project runner. To do this, navigate to **Settings > CI/CD**.

1. Select **Expand** next to the **Runners** option.

1. Toggle Enable instance runners for this project **off**.

1. Navigate back to your code repository.

1. Select **+ > New file**.

1. For the filename, type `Dockerfile`. Add the following content:

    ```Docker
    FROM node:latest

    WORKDIR /app
    CMD ["npm", "start"]
    ```

1. Select **Commit changes**.

1. Select your `.gitlab-ci.yml` file.

1. Select **Edit > Edit in pipeline editor**.

1. Delete all of your existing jobs and stages, leaving you with an empty file.

1. Add a build stage:

    ```yml
    stages:
      - build
    ```

1. Add the following build job:

    ```yml
    build image:
      stage: build
      image: docker:27
      services:
        - docker:27-dind
      variables:
        IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
      script:
        - docker login -u $CI_REGISTRY_USER -p $CI_REGISTRY_PASSWORD $CI_REGISTRY
        - docker build -t $IMAGE .
        - docker push $IMAGE
    ```

1. Select **Commit changes**.

When your pipeline runs, you should see your job succeed using your new Docker runner!

## Task G. Disabling the runner

For future labs, it is best to use the instance runners to ensure consistency in your results. To allow for this, disable your custom runner using the following steps:

1. Navigate to your project.

1. Select **Settings > CI/CD**.

1. Select **Expand** beside the **Runners** section.

1. Toggle **Enable instance runners for this project** to **on**.

1. Pause your assigned project runner by selecting the pause button.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/advgitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab Advanced CI/CD*, please submit your changes via Merge Request.
