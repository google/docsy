---
title: "GitLab Compliance - Compliance Center and Frameworks"
description: "This Hands-On Guide demonstrates how to create and view Compliance Center events."
---

> Estimated time to complete: 15 minutes

## Objectives

Learners will run a few actions in GitLab that show up in the Compliance Center and view how you could see a framework in action.

## Task A. Creating Compliance Center Events

1. Navigate to your `Compliance Project` project.

1. In the left sidebar, select **Secure > Compliance Center**.

In this section, you will see three failed checks in your project. In cases where the **Status** is `Fail`, you will see `View details (fix available)` in the **More information** column. Let's see what information is shown in this section.

1. Select `View details (fix available)` in the `At least one non-author approval` row of your Compliance Center report.

1. Review the details outlined in this section.

1. Close the details panel.

Throughout the labs in this course, we will see how to fix each of these compliance issues.

## Task B. Creating Compliance Center violations

In this task, we will complete some actions in our project that will result in Compliance Center violations.

1. In the left sidebar, select **Code > Repository**.

1. Select **+ > New file**.

1. For the filename, enter `main.py`.

1. Add the following content to the file:

```python
print("Start compliance project")
```

1. Underneath the **Commit Message** in the **Target Branch** field, enter `new-main`.

1. Ensure that **Start a new merge request with these changes** is selected.

1. Select **Commit changes**.

1. In the resulting merge request, select **Assign to me** in the **Assignees** section.

1. Select **Create merge request**.

1. Select **Merge**.

1. After the merge request completes, select **Secure > Compliance Center**.

1. Select the **Violations** tab.

1. Review the violation labelled **Less than 2 approvers**.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/ilt-labs/gitlabcompliancehandson).

## Suggestions?

If you wish to make a change to the *Hands-On Guide for GitLab Compliance*, please submit your changes via Merge Request.
