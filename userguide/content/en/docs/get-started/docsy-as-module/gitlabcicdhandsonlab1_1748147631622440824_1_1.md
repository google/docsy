---
title: "GitLab CI/CD - Hands-On Lab: Configure a Pipeline to Build an Application"
description: "This Hands-On Guide walks you through building a basic pipeline for an application"
---

> Estimated time to complete: 15 minutes

## Objectives

In this lab, you will explore the process of creating a build process for an application.

## Task A. Creating a Project

1. Navigate to your GitLab group.

1. Select **Create new project** .

1. Select **Create blank project**.

1. In the project name, type `CICD Demo`.

1. Leave all other options as default and select **Create project**.

 > For this project, we are going to set up `main.go` so that it simply runs. Later, we will extend the functionality of the application to show more complex features of the CI/CD process.

## Task B. Setup Go Files

1. In your project, select **+ > New file**.

1. In the filename field, type `main.go`

1. Inside of `main.go`, add the following code:

    ```go
    package main

    import(
      "fmt"
    ) 

    func main() {
      fmt.Println("We are up and running!")
    }
    ```

1. Leave all options as default and select **Commit changes**.

    > Next, we will create a `go.mod` file:

1. Navigate back to your project main page.

1. Select **+ > New file**.

1. In the Filename field, type `go.mod`.

1. Add the following code to the file:

    ```go
    module array

    go 1.22.2
    ```

1. Leave all options as default and select **Commit changes**.

If we were developing this locally, we would be able to run this application using the command `go run .` and we could build the application using `go build`. Let’s see how we can replicate this process in a GitLab pipeline.

## Task C. Creating a Build Process

You will write all of your pipeline jobs in the `.gitlab-ci.yml file`. To start, create this file at the root of your project using the following steps:

1. Navigate to your project home page.

1. Select **+ > New file**.

1. In the Filename field, type `.gitlab-ci.yml`.

1. The script section requires you to provide any scripts or code that will run as a part of your job. Since we want to build the Go application. Copy the following code into your `.gitlab-ci.yml` file.

    ```yaml
    default:
      image: golang

    stages:
      - build

    build go:
      stage: build
      script:
        - go build
    ```

1. Leave all options as default and select **Commit changes**.

## Task D. View the Build

1. After committing your code, your pipeline will immediately start. To view the pipeline, navigate to **Build > Pipelines**.

    Here, you will see a summary of all of your project pipelines. Each pipeline shows the following details:
    - The status of the pipeline
    - The pipeline name, ID, branch, and triggering commit
    - Who created the pipeline
    - A breakdown of pipeline status by stage

1. To view more details about the pipeline, select the **Status** of the pipeline. In this UI, you will see a graph of the pipeline, showing each stage, and the jobs associated with the stage.

1. Select your **build go** job.

> On this screen, you will see details about your job, including all of the commands run during your job execution. On the right, you will see the duration of the job, when the job finished, how long the job was queued, the runner that completed the job, the commit that triggered the job, and further pipeline details related to the job.

Let’s explore each of these in detail. To start, navigate to your job:

1. Select **Build > Jobs**.

1. Select your *build go* job.

Let’s walk through the job log to better understand each job stage. The first thing you will see is something like this:

**Setting up your job environment**

```bash
Running with gitlab-runner 17.0.0~pre.88.g761ae5dd (761ae5dd)
  on green-6.saas-linux-small-amd64.runners-manager.gitlab.com/default YKxHNyexq, system ID: s_a201ab37b78a
Resolving secrets
Preparing the "docker+machine" executor
00:19
Using Docker executor with image golang ...
Using docker image sha256:5905f95343e84d1f8f14aff8f8b83747fb39ea0e0fad52a9d14cf41860295fff for golang with digest golang@sha256:f43c6f049f04cbbaeb28f0aad3eea15274a7d0a7899a617d0037aec48d7ab010 ...
Preparing environment
00:06
Running on runner-ykxhnyexq-project-58378461-concurrent-0 via runner-ykxhnyexq-s-l-s-amd64-1717165680-d1e5066e...
```

The GitLab lab environment uses runner managers to help with scaling jobs. When your job starts, it first enters a queue. When a runner manager is available, it picks up the job. It then creates an instance and sets it up with the defined Docker image, in this case, the golang image. This image is pulled and loaded onto the runner, making it ready to start processing your job request.

**Cloning your Git repository**
After the environment setup, GitLab will clone your repository onto the runner.

```bash
Getting source from Git repository
00:01
Fetching changes with git depth set to 20...
Initialized empty Git repository in /builds/scottcosentinogitlab/cicd_lab_rewrite/.git/
Created fresh repository.
Checking out 4ae4ca35 as detached HEAD (ref is main)...
Skipping Git submodules setup
$ git remote set-url origin "${CI_REPOSITORY_URL}"
```

After doing this, all of your code will be available on the runner. One important note is that your runner now has access to your Git repository and has a link to your remote repository. This means two things:

- You can access and use any files in your Git repository
- You can commit changes back to your repository if you make any during your job process

**Optional Task:**
Want to see this in action? Add the `ls` command to your job scripts. This will list the current directory, showing you all the files that were cloned to the runner.

```yaml
default:
  image: golang

stages:
  - build

build go:
  stage: build
  script:
    - ls
    - go build
```

**Executing your Scripts:**
After the environment is set up and your repository is cloned, your job scripts will run.

```bash
Executing "step_script" stage of the job script

Using docker image sha256:5905f95343e84d1f8f14aff8f8b83747fb39ea0e0fad52a9d14cf41860295fff for golang with digest golang@sha256:f43c6f049f04cbbaeb28f0aad3eea15274a7d0a7899a617d0037aec48d7ab010 ...
$ go build
Cleaning up project directory and file based variables

Job succeeded
```

To summarize, there are a few important ideas to keep in mind when considering running jobs in your pipeline.

- Jobs will generally use a Docker image to run your job scripts
- Every job runs on a separate runner, within its own Docker container, so there are no concerns about jobs interfering with each other
- You have full access to your Git repository and any other system resources during the execution of your jobs

## Task E. Artifacts, and sharing data between Stages

When we explored the way jobs run, you saw that each job runs on its own runner. In some cases, you will want to share data between jobs to avoid duplication of work. To do this, you can use an artifact. An artifact saves a result from a job and stores it in GitLab for use by other jobs. For example, consider the following job definitions:

```yaml
default:
  image: golang

stages:
  - build
  - run

build go:
  stage: build
  script:
    - go build

run go:
  stage: run
  script:
    - go build
    - ./array
```

In this set of jobs, we end up building the go application twice. It would be easier to just build the application once and pass it between jobs.

1. To do this, we can define an artifact for the app binary from the first job by adding the following code:

```yaml
  artifacts:
    paths: 
      - array
```

The job should now look like this:

```yaml
build go:
  stage: build
  script:
    - go build
  artifacts:
    paths: 
      - array
```

When this job runs, `go build` will build a new binary named `array`. The path property of artifacts tells GitLab to save the array file. Now, all future jobs will download the array binary and use it in their execution.

With this setup, we no longer need to run a `go build` command in the `run go` job, we can just run the binary, since it was downloaded from the previous job.

To test this:

1. Navigate to your `.gitlab-ci.yml` file.

1. Select **Edit > Edit in pipeline editor**.

1. Remove the `go build` command from the `run go` script. Doing this gives you the following configuration:

    ```yaml
    default:
      image: golang

    stages:
      - build
      - run

    build go:
      stage: build
      script:
        - go build
      artifacts:
        paths: 
          - array

    run go:
      stage: run
      script:
        - ./array
    ```

1. Select **Commit changes**.

1. Navigate to your pipeline by selecting **Build > Pipelines** in the left sidebar.

1. Verify that your jobs run successfully.

> In the `run go` job log, you will now see a line like `Downloading artifacts for build go (318742)`. This shows the actual download of artifacts between jobs.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab CI/CD*, please submit your changes via Merge Request.
