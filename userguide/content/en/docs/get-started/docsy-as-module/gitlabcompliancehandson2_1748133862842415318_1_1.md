---
title: "GitLab Compliance - Hands-On Lab: Scan Execution Policies"
description: "This Hands-On Guide walks you through enabling and using Scan Execution Policies in your projects."
---

> Estimated time to complete: 15 minutes

## Objectives

Scan execution policies allow you to run security scans against projects and groups in a consistent manner. In this lab, you will learn how to add a scan execution policy to your project.

## Task A. Create a scan execution policy

1. In the left sidebar, select **Secure > Policies**. 

1. Select **New policy**.

1. Under **Scan execution policy**, select **Select policy**.

1. In the name, input `run scan`.

1. In the **Actions**, set the scan to run a **Secret Detection** scan. Leave all action configurations at default.

1. In the **Conditions** section, set to **Triggers:** for **all branches** with **No exceptions**.

1. Select **Configure with a Merge Request**.

1. Select **Merge**.

## Task B. Testing your scan execution policy

1. Navigate back to your `Compliance Project` project.

1. Select **+ > New file**.

1. Enter anything for the **Filename** and file contents.

1. Select **Commit changes**.

1. Select **Create Merge Request**.

1. Review the Merge Request pipeline. Note that there is now a secret detection scan job.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcompliancehandson).

## Suggestions?

If you'd like to suggest changes to the *Hands-On Guide for GitLab Compliance*, please submit them via Merge Request.
