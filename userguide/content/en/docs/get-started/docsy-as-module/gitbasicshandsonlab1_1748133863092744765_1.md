---
title: "GitLab with Git Fundamentals - Hands-On Lab: Create a project and issue"
description: "This Hands-On Guide walks you through creating projects, issues, labels, as well as using quick actions."
---

> Estimated time to complete: 30 minutes

## Objectives

A GitLab Project is a repository where you can store your code, as well as supplemental files such as configuration files. You can also use projects to track issues, plan work, collaborate on code, and continuously build, test, and use built-in CI/CD to deploy your app. You can find out more information about GitLab projects in the [documentation](https://docs.gitlab.com/ee/user/project/organize_work_with_projects.html)

GitLab provides various tools for tracking and managing projects. In this lab, you will learn how to create a project, create an issue, create labels at a project level, and apply quick actions to an issue.

## Task A. Access your Training Group

1. Navigate to [**https://gitlabdemo.com/invite**](https://gitlabdemo.com/invite) in a web browser.

1. In the **Invitation Code** field, enter the invitation code provided by your instructor or in the LevelUp LMS.

1. Select **Provision Training Environment**.

1. You will need your **GitLab.com** username. To find your username, navigate to [Gitlab](https://gitlab.com).

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

## Task B. Create a project

1. Select the **Create blank project** tile.

1. In the **Project name** field, enter `Top Level Project`.

   > The project slug will automatically populate. You can change this to a shorter string if desired for your own project. Leave it at the default for this lab.

1. In the **Project URL** field, click the dropdown for the second half of the URL to make sure it's pointing to a **group name** and not a **username**. You should create this project inside a group, not directly in your user's namespace.

1. Under **Visibility Level**, ensure **Private** is selected.

   > Since the parent group above your group is private, all child groups and projects below will be private. You can learn more about project visibility levels in the [documentation](https://docs.gitlab.com/ee/user/public_access.html).

1. Check **Initialize repository with a README**.

1. Select **Create project**.

## Task C. Create an issue

> Issues are a core building block in GitLab that enable collaboration, discussions, planning and tracking of work. Issues belong to **Project** and **not** a Group. When viewing issues at the group-level, you can see all of the issues that have been created across all of the projects in that group. You can read more about them [here](https://docs.gitlab.com/ee/user/project/issues/).

1. In the left-hand navigation pane, navigate to **Plan > Issues**.

1. Click the **New issue** button.

1. In the **Title** field, type in `My first issue`

1. In the **Type** dropdown, make sure that `Issue` is selected.

1. The description is an optional section, but feel free to type in your own description for this issue.

   > In the description section, there is a dropdown to select a template. It is possible to create templates to help standardize issue descriptions. To learn more about issue templates, click [here](https://docs.gitlab.com/ee/user/project/description_templates.html).

1. Using the **Assignees** dropdown, assign the issue to yourself by clicking on the dropdown, and then clicking on your username.

   > Alternatively, you can also click **Assign to me** directly beside the Assignees dropdown to assign an issue to yourself.

1. While we will leave the options as they are for now, it is important to understand what they do:

   - **[Epic](https://docs.gitlab.com/ee/user/group/epics/):** Associates the issue with an epic. An epic is a parent grouping of one or more child issues. You can think of an epic as a initiative or meta-level topic and an issue as an objective or detailed task for that initiative.

   - **[Milestone](https://docs.gitlab.com/ee/user/project/milestones/):** Milestones in GitLab are a way to track issues and merge requests created to achieve a broader goal in a certain period of time, usually associated with a release and/or version number.

   - **[Labels](https://docs.gitlab.com/ee/user/project/labels.html):** Apply labels to your issue, which are metadata tags that can be used to sort and filter your issues.

   - **[Weight](https://docs.gitlab.com/ee/user/project/issues/issue_weight.html):** Apply a weight value to your issue to measure the time, complexity, or value a given issue has or costs.

   - **[Due date](https://docs.gitlab.com/ee/user/project/issues/due_dates.html):** Use in issues to keep track of deadlines and make sure features are shipped on time. You will receive an email reminder when an issue due date is approaching if it has not been closed yet.

   - **[Iteration](https://docs.gitlab.com/ee/user/group/iterations/):** Associate the issue with an iteration to track it over a period of time. This allows teams to track velocity and volatility metrics.

1. Click the **Create issue** button.

## Task D. Create custom labels

> Labels allow you to organize and tag your work. Using labels will make it easier for you to track issues you are interested in using features like dynamic filtering. Some examples of using labels include: categorizing epics, issues, and merge requests using colors and descriptive titles like bug, feature request, or docs. You can read more about labels in the [documentation](https://docs.gitlab.com/ee/user/project/labels.html).

1. In the left-hand navigation pane, navigate to **Manage > Labels**.

1. Click the **New label** button.

1. In the **Title** field, type `Opened`.

1. The **Description** field is an optional field used to describe a label. Feel free to enter anything in this field, or leave it blank.

1. Select any background color.

1. Click the **Create label** button.

   > When you create a label in a project, the label is created at the project level. This means that the label will not be available in any other projects. It is possible to also create a group level label, which is available to all projects in a group.

1. Using the previous three steps, create two additional labels with the titles `Completed` and `Needs documentation`. These labels can have any background colors that you desire.

1. You now have 3 labels that are now available for you to assign to any issue, merge request, or epic in your project.

## Task E. Assign labels to an issue

1. Navigate to **Plan > Issues**.

1. Click on the title of `My first issue` to open the issue.

1. In the right sidebar of **My first issue**, click **Labels > Edit**.

1. Click the **Opened** and **Needs documentation** labels you created earlier.

1. Click away from the **Labels** section. Notice that the issue now has both labels applied.

   > The labels won't apply to the issue until you click away from the labels section to close the multiselect box.

## Task F. Use a quick action

> A **quick action** is a text-based shortcut for common actions that are usually done by selecting buttons or dropdowns in the GitLab user interface. You can enter these commands in the description or comment for issues, epics, merge requests, and commits.
>
> For more information about quick actions and to see a full list of possible quick actions, see the [documentation](https://docs.gitlab.com/ee/user/project/quick_actions.html).

1. In the comment field for the issue from the previous task, type the quick action `/spend 1 hour`

2. Click the **Comment** button.

   > Notice that in the right-hand information pane, **Time tracking** now shows `Spent: 1h`. Instead of leaving a text comment, the quick action has updated the time spent working on the issue.

## Lab Guide Complete

You have completed this lab exercise. You can view the other [lab guides for this course](/handbook/customer-success/professional-services-engineering/education-services/gitbasicshandson).

## Suggestions?

If you'd like to suggest changes to the lab, please submit them via merge request.
