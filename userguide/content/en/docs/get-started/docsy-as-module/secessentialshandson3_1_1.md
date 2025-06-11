---
title: "GitLab Security Essentials - Hands-On Lab: Enable and Configure Container Scanning"
description: "This Hands-On Guide walks you through enabling and using Container Scanning in a GitLab project."
---


> Estimated time to complete: 15 to 20 minutes

## Objectives

Many projects depend on using containers that might contain vulnerabilities in the container image.

In this lab, you will learn how to scan for vulnerabilities in your containers.

## Prerequisites

1. Open your browser to the **Security Labs** project that you created in Lab 1.

    > If you closed the tab or lost the link, open a browser tab and start typing https://gitlab.com/gitlab-learn-labs in your URL if you are in Self-Paced Training, or https://ilt.gitlabtraining.cloud if you are in Instructor-Lead Training, and the project should appear in your history.

1. Before beginning this lab and all later labs, you should disable any scanners that you enabled in previous labs to speed up pipeline runtime. You should have already completed this in Lab 2.

## Task A. Add a Dockerfile

> A `Dockerfile` is a "recipe" that tells Docker how to assemble your application into a Docker image. You'll write a `Dockerfile` that installs your single-file Python application onto an Python 3.4 Docker image, and then packages that whole stack into a new Docker image.

1. Navigate to **Code > Repository**.

1. Above the repository file list, click **(+) > This directory > New file**.

1. In the **File name** field, type `Dockerfile`.

    > It is important that the first letter is capitalized for industry standards.

1. The `Dockerfile` must specify which Linux image to install your application on. For this lab you'll use an old version of Python that has security vulnerabilities for the Container Scanner to find. Paste this into `Dockerfile`:

    ```dockerfile
    FROM python:3.4-alpine
    ```

1. The Dockerfile must add your application to the Linux image specified above. Paste this at the bottom of `Dockerfile`:

    ```dockerfile
    ADD main.py .
    ```

1. Your completed `Dockerfile` should look like this. Make any corrections necessary.

    ```dockerfile
    FROM python:3.4-alpine
    ADD main.py .
    ```

1. Add a commit message, set the target branch to `main` and click **Commit changes**.

## Task B. Build the Docker image

> In this section you will define a job that builds a Docker image. To build a Docker image with a CI/CD pipeline job, you must use a GitLab Runner that's configured to use a Docker executor.

1. Navigate to **Code > Repository** and edit `.gitlab-ci.yml`.

1. Define a `build` stage by pasting this in your `.gitlab-ci.yml`, at the top of the stages list, before the `-test` stage. Make sure it has the same indentation as the existing `- test` entry beneath it:

    ```yml
    stages:
    - build
    - test
    ```

1. Name your new job and assign it to the **build** stage by pasting this at the end of `.gitlab-ci.yml`:

    ```yml
    build-and-push-docker-image:
      stage: build
    ```

1. Your job must run on a Docker image that contains Docker tools. This approach is sometimes called "Docker in Docker" or "dind". You'll need to specify a version of the image that we've tested and know to work well for this task. Paste this underneath the `build-and-push-docker-image` job that you added in the previous step:

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
    ```

1. Your job also needs a second Docker image that enables the Docker in Docker workflow. Specify the second image with the `services` keyword, by pasting this into your job definition:

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
      services:
        - docker:20.10.17-dind
    ```

1. It's helpful to define a variable to hold the full name and version of the Docker image you're creating, because you'll need to refer to that information more than once. You can assemble the name and version out of predefined variables that GitLab provides (remember that predefined variables generally start with `CI_`). Paste this into your job definition:

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
      services:
        - docker:20.10.17-dind
      variables:
        IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
    ```

1. If you set a variable telling Docker not to use TLS, you won't have to worry about setting up security certificates. Add the `DOCKER_TLS_CERTDIR` variable.

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
      services:
        - docker:20.10.17-dind
      variables:
        IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
        DOCKER_TLS_CERTDIR: ""
    ```

1. Tell Docker to build a Docker image using the recipe in `Dockerfile`. Add the `script:` and `docker-build` lines.

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
      services:
        - docker:20.10.17-dind
      variables:
        IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
        DOCKER_TLS_CERTDIR: ""
      script:
        - docker build --tag $IMAGE .
    ```

## Task C. Push the Docker image to Project Container Registry

> Your job needs to log in to the project's container registry so it can push your image to it. You can log in using a username, password, and registry URL that are stored in predefined variables.

1. Add the `docker login` line to the bottom of the `script` section.

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
      services:
        - docker:20.10.17-dind
      variables:
        IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
        DOCKER_TLS_CERTDIR: ""
      script:
        - docker build --tag $IMAGE .
        - docker login --username $CI_REGISTRY_USER --password $CI_REGISTRY_PASSWORD $CI_REGISTRY
    ```

1. Your job can push the image with a single Docker command. Add the `docker push` line to the bottom of the `script` section.

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
      services:
        - docker:20.10.17-dind
      variables:
        IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
        DOCKER_TLS_CERTDIR: ""
      script:
        - docker build --tag $IMAGE .
        - docker login --username $CI_REGISTRY_USER --password $CI_REGISTRY_PASSWORD $CI_REGISTRY
        - docker push $IMAGE
    ```

1. Your completed job definition should look like this. Make any corrections necessary to the job definition in your `.gitlab-ci.yml`.

    ```yml
    build-and-push-docker-image:
      stage: build
      image: docker:20.10.17
      services:
        - docker:20.10.17-dind
      variables:
        IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
        DOCKER_TLS_CERTDIR: ""
      script:
        - docker build --tag $IMAGE .
        - docker login --username $CI_REGISTRY_USER --password $CI_REGISTRY_PASSWORD $CI_REGISTRY
        - docker push $IMAGE
    ```

1. Commit the changes to the `main` branch with an appropriate commit message (`Adding a docker file definition`).

1. Navigate to **Build > Pipelines** to watch the progress of the new pipeline. Click on the pipeline to view the CI output for the build job.

1. When the pipeline finishes running, go to left navigation pane and click **Deploy > Container Registry**. Verify that your job created a new Docker image and pushed it into the project's container registry.

## Task D. Enable Container Scanning

> Your application's docker image may contain known vulnerabilities. In order to prevent these vulnerabilities from reaching production, you can detect them with Container Scanning. Now that your Docker image is being built and pushed, you can enable Container Scanning.

1. Add the Container Scanning template to the existing `include:` section of `.gitlab-ci.yml`:

    ```yml
    include:
    - template: Security/SAST.gitlab-ci.yml
    - template: Security/Secret-Detection.gitlab-ci.yml
    - template: Security/Container-Scanning.gitlab-ci.yml
    ```

    > This can be added anywhere in the list of templates.

1. Commit the changes with an appropriate commit message.

1. Navigate to **Build > Pipelines** to watch the progress of the new pipeline.

1. Open the `container_scanning` job to view the CI output. Wait for the pipeline to finish running.

## Task E. View the results

1. Navigate to **Secure > Vulnerability Report**.

1. In the **Tool** dropdown, click **Container Scanning**.

1. The vulnerabilities listed are vulnerabilities detected inside of the Docker container you created. Click on any individual vulnerability to view more details

## Task F. Lab Pipeline Cleanup

1. Navigate to **Code > Repository**.

1. Edit the `.gitlab-ci.yml` file.

1. Copy and paste this to overwrite all of the contents of your `.gitlab-ci.yml` file. This has commented out sections of jobs and scanners that we won't be using for the rest of the class to speed up our pipeline.

    ```yml
    stages:
    # - build
    - test
    # - dast

    include:
    - template: Security/SAST.gitlab-ci.yml
    # - template: Security/Secret-Detection.gitlab-ci.yml
    # - template: DAST.gitlab-ci.yml
    # - template: Security/Container-Scanning.gitlab-ci.yml

    # variables:
    #  SAST_EXCLUDED_PATHS: venv/
    #  DAST_WEBSITE: https://example.com

    #secret_detection:
    #  variables:
    #    SECRET_DETECTION_EXCLUDED_PATHS: tests/

    #build-and-push-docker-image:
    #  stage: build
    #  image: docker:20.10.17
    #  services:
    #    - docker:20.10.17-dind
    #  variables:
    #    IMAGE: $CI_REGISTRY_IMAGE/$CI_COMMIT_REF_SLUG:$CI_COMMIT_SHA
    #    DOCKER_TLS_CERTDIR: ""
    #  script:
    #    - docker build --tag $IMAGE .
    #    - docker login --username $CI_REGISTRY_USER --password $CI_REGISTRY_PASSWORD $CI_REGISTRY
    #    - docker push $IMAGE
    ```

    > Note that we need to keep at least one job enabled for the pipeline to succeed. In this example, the SAST job is left enabled since it is the quickest to complete.

1. Set the commit message to `Lab 3 pipeline reset` and commit your changes to the `main` branch.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/secessentialshandson).

## Suggestions?

If you'd like to suggest changes to the *GitLab Security Essentials Hands-On Guide*, please submit them via merge request.
