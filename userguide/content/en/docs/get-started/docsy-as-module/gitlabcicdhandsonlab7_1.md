---
title: "GitLab CI/CD - Hands-On Lab: Using Artifacts"
description: "This Hands-On Guide walks you through creating and storing job artifacts."
---

> Estimate time to complete: 20 - 25 minutes

## Objectives

Artifacts in GitLab are files that are created in a job, and then passed to other jobs in later stages. An artifact in one stage cannot be passed to a job in the same stage. You can later access and download any artifacts created in a pipeline. For more information, click [here](https://docs.gitlab.com/ee/ci/jobs/job_artifacts.html).

In this lab, you will learn how to create an artifact with your `.gitlab-ci.yml` file. After creating the artifact, you will view the artifact in the GitLab UI.

### Task A: Add a `main.go` File

1. Open your **CICD Demo** project from previous labs.

1. Navigate to **Code > Repository** and add a new file by clicking **+ > This directory > New file**

1. In the **Filename** field, enter `main.go`

1. Paste the following code into the file.

    ```go
    package main

    import (
        "fmt"
        "net/http"
    )

    func helloworld() string {
        return "Hello World!!"
    }

    func healthcheck() string {
        return "Health OK!"
    }

    func livenesscheck() string {
        return "I am alive!!!"
    }

    func main() {
        http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
            fmt.Fprintf(w, helloworld())
        })

        http.HandleFunc("/healthz", func(w http.ResponseWriter, r *http.Request) {
            fmt.Fprintf(w, healthcheck())
        })

        http.HandleFunc("/liveness", func(w http.ResponseWriter, r *http.Request) {
            fmt.Fprintf(w, livenesscheck())
        })

        http.ListenAndServe(":8080", nil)
    }

    ```

1. In the **Commit message** field, type `Add main.go file`, ensure the **Target Branch** is set to `main`, and click **Commit changes**.

### Task B: Add Artifacts to your Pipeline

1. In the left sidebar, click **Code > Repository**.

1. Select your `.gitlab-ci.yml` file to view its contents. Click **Edit > Edit single file**. Paste the following snippet at the end of the file.

    ```yml
    build app:
      image: golang:latest
      stage: build
      script:
        - go build -o app main.go
      artifacts:
        paths:
        - app
        expire_in: 1 hour
    ```

1. In the **Commit message** field, type `Add CI artifacts`, ensure the **Target Branch** is set to `main`, and click **Commit changes**.

1. In the left-hand navigation pane, click **Build > Pipelines** and click the status icon for the most recent pipeline run.

1. When the `build app` job finishes, click it to review the job's output log.

    > If the job fails with a message about being unable to find `go.mod`, retry the job until it passes. This is an intermittent Go build bug.

1. In the **Job artifacts** panel on the right of the page, click **Browse** and notice that the `app` artifact created by the **build app** pipeline job is available for download.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/gitlabcicdhandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab CI/CD*, please submit your changes via Merge Request!
