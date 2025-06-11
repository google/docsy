---
title: "GitLab Duo Principles - Hands-On Lab: Working with Issues and Merge Requests"
description: "This Hands-On Guide walks you through using GitLab Duo to create Issues and merge requests."
---

> Estimated time to complete: 20 minutes

## Objectives

GitLab Duo extends beyond just code generation. GitLab Duo can support you through any stage of the DevSecOps lifecycle! In this lab, you will see how GitLab Duo can work with issues and merge requests inside of a project.

## Task A. Creating an Issue with GitLab Duo

1. Navigate to your GitLab Duo Principles Project.

1. In your project, from the left sidebar, select **Plan > Issues**.

1. Select **New issue**.

1. For the Title, input `Update hello world visuals`.

1. If your editor is in **rich text editing** mode, Select `Switch to plain text editing` at the bottom of the issue description.

   > GitLab Duo will only display in plain text editing mode. If you do not see the Tanuki button, you are likely in rich text editing mode.

1. In the Description box, select the Tanuki button, then select **Generate issue description**.

1. In the issue description generation box, type the prompt: `We want to make our "hello world" application more visually appealing for the end user. We want to incorporate the Go Figure module into our application to print out more exciting text.`

1. Select **Submit**.

   The response will look similar to the following:

   ```text
   Issue: The "hello world" application lacks visual appeal

   The current "hello world" application prints basic text without any formatting or visual elements. We want to enhance the user experience and make the application output more interesting to look at.

   The Go Figure module allows printing text in different styles and formats. Integrating this module into our "hello world" code will let us customize how the message is displayed, such as changing fonts, colors, effects and more. This will make our application stand out more and be more enjoyable for end users to interact with.

   ***
   _Description was generated using AI_

   ```

1. Assign the issue to yourself and select **Create issue**.

## Task B. Creating a Merge Request

1. From the issue you just created, select **Create merge request**.

1. Add a brief description similar to `This MR introduces the Go Figure module to our "hello world" application`.

1. Leave all other options as default and select **Create merge request**.

## Task C. Add Code to Your MR

1. In your MR, select **Code > Open in Web IDE**.

1. Select the Duo Chat icon from the left sidebar.

1. In the chat, write the prompt: `How could I use the go-figure module of go to print hello world in a different font?`

   You will get a response similar to this:

   ```go
   package main

   import (
       "github.com/common-nighthawk/go-figure"
   )

   func main() {
       myFigure := figure.NewFigure("hello world", "", true)
       myFigure.Print()
   }
   ```

1. Copy the generated code.

1. From the left sidebar, select the Explorer icon.

1. Select `main.go`.

1. Replace the contents of `main.go` with the AI generated code by copying and pasting or using the insert button on the code snippet in the Duo Chat window.

1. From the left sidebar, select **Source Control**.

1. Enter any commit message and select the **Commit** button to commit the code changes.

1. Select **Go to MR** to return back to your merge request.

## Task D. Summarizing your Code Changes

1. On your merge request, select **Edit**.

1. Just above the Description input, select **Summarize code changes**.

1. Review the new AI generated description.

1. Select **Save changes**.

## Task E. Root Cause Analysis

> Uh-oh! You may have noticed that our pipeline failed.

1. From the MR, select the most recent pipeline run that failed.

1. Select the job that failed.

1. At the bottom of the job output, select **Troubleshoot**.

1. This will open a Duo chat window with a description of the `root cause of failure`. **Note:** You could have also opened Duo chat and used the `/troubleshoot` command to generate this explanation.

1. Review the explanation of the failed job and the example fix.

   > The suggested fix follows a good practice of updating your Go dependencies locally. For our demo purposes we will add this dependency in the `.gitlab-ci.yml` file. Follow the steps below to apply this change. These instructions mirror the suggested fix from GitLab Duo.

1. Return to your merge request.

1. Select **Code > Open in Web IDE**.

1. Open your `.gitlab-ci.yml` file.

1. In the `script` section of your `build app` job, add the script to pull the `go-figure` dependency.

   Your configuration file should look like the file below:

   ```yml
   stages:
     - build

   default:
     image: golang:latest

   build app:
     stage: build
     script:
       - go get github.com/common-nighthawk/go-figure
       - go run main.go
   ```

1. From the left sidebar, select the Source Control icon.

1. Enter any commit message and select the **Commit** button to commit the code changes.

1. Select **Go to MR** to return back to your merge request.

1. From your merge request, wait for the pipeline to complete. You should see that your pipeline passed.

1. If you set your merge request as `Draft`, select `Mark as ready`.

1. Select **Merge** to merge your code updates into the main branch.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/devsecopswithduo).

## Suggestions?

If you'd like to suggest changes to the lab, please submit them via merge request.
