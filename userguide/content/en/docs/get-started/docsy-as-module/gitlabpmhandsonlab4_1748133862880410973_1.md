---
title: "GitLab Agile Portfolio Management- Hands-On Lab: Create Issues"
description: "This Hands-On Guide walks you through creating issues and labels in GitLab."
---

> Estimated time to complete: 45 minutes

## Objectives

Issues are a core building block in GitLab that enable collaboration, discussions, planning and tracking of work. Issues are defined in the scope of a **Project**, **not** a Group. You can read more about them in the [documentation](https://docs.gitlab.com/ee/user/project/issues/).

## Task A. Create and manage labels

> You can use labels to categorize epics, issues, and merge requests using colors and descriptive titles like bug, feature request, or docs. This allows you to dynamically filter and manage epics, issues, and merge requests. You can read more about them in the [documentation](https://docs.gitlab.com/ee/user/project/labels.html).

1. Navigate to your **Awesome Inc** group.

1. In the left pane, click **Manage > Labels**.

1. Click **New label** in the upper right hand corner.

1. In the **Title** field, enter `Status::Open`. The 2 colons in the label title mean that this will be a [scoped label](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels).

    > A scoped label uses a double-colon (::) syntax in its title, for example: `workflow::in-review`. An issue, merge request, or epic cannot have two scoped labels, of the form `key::value`, with the same key. If you add a new label with the same key but a different value, the previous key label is replaced with the new label.

1. In the **Description** field, type `Item that is ready to begin work` .

1. For the label's color, GitLab supports any hex color code. For this label, choose **Blue-gray** from the suggested color palette (or type `#6699cc` in the **Background color** field).

1. Click **Create label**.

1. Create the following additional labels, setting a description and background color of your choosing. Note that some of these are scoped and some are unscoped.
    - `Status::Open`
    - `Status::WIP`
    - `Status::Done`
    - `Priority::High`
    - `Priority::Medium`
    - `Priority::Low`
    - `Dev`
    - `QA`
    - `Security`

1. Go to your **Family Budget Calculator** project. The project is inside the **Awesome Inc > Software > Core** group hierarchy.

1. Click **Manage > Labels** from the left sidebar.

1. Click the star icon to the left of the **Subscribe** button to designate the following labels as prioritized labels. Prioritized labels appear at the top of your labels list.

     - **Priority::High**
     - **Priority::Medium**
     - **Priority::Low**

## Task B. Create issues for tracking work

1. In your **Family Budget Calculator** project, click **Plan > Issues** from the left sidebar.

1. Click the **New issue** button.

1. In the title section, type `Third-party financial services integration`.

1. The description is an optional section, but feel free to type in your own description for this issue.

1. Using the **Assignees** dropdown, assign the issue to yourself by clicking on the dropdown, and then clicking on your username. While we will leave the options as they are for now, it is important to understand what they do:

    - **Epic:** Associates the issue with an epic.

    - **Labels:** Apply labels to your issue, which are metadata tags that can be used to sort and filter your issues.

    - **Iteration:** Associate the issue with an iteration to track it over a period of time. This allows teams to track velocity and volatility metrics.

    - **Milestone:** Milestones in GitLab are a way to track issues and merge requests created to achieve a broader goal in a certain period of time.

    - **Weight:** Apply a weight value to your issue to measure the time, complexity, or value a given issue has or costs.

    - **Dates:** Use in issues to keep track of deadlines and make sure features are shipped on time.

    - **Health status:** You can associate one of four predefined health status labels to your issue: `on track`, `needs attention`, `at risk`, or `needs review`.

    - **Parent:** Connects an issue to an epic.

    - **Time Tracking:** Use time tracking to estimate and measure your team’s work on an issue, or how much work is expected to be done to complete the issue.

    - **Contacts:** Attach contacts to issues for additional collaboration, meeting follow-ups, or progress updates. This also adds the contact's avatar next to your issue.

1. Click the **Create issue** button.

1. In the issue metadata pane, click **Edit** next to the **Labels** field.

1. Select the **Status::Open** label, then click away from the metadata pane to apply the label to the issue.

1. Repeat the previous 2 steps to apply the **Priority::Medium** and **Dev** labels to the issue.

1. In the left pane, click **Plan > Issues**. You will see the issue you just created in the list along with its labels.

1. Create a second issue by clicking **New issue** in the top right of the issue list page.

1. In the **Title** section, type `Backend services`.

1. Paste the following in the **Description** section:

    ```markdown
    - Create DB
    - Create service infrastructure
    - Write documentation
    ```

1. Using the **Assignees** dropdown, assign the issue to yourself by clicking on the dropdown, and then clicking on your username.

1. Click the **Create issue** button.

1. Apply the following labels to the **Backend services** issue by clicking on tne label, then click away from the metadata pane to apply the label to the issue: **Dev**, **Status::Open**, and **Priority::High**.

1. In the left pane, click **Plan > Issues** to see both issues with their labels.

1. Create a third issue by clicking **New issue** in the top right of the issue list page.

1. In the **Title** section, type `Frontend services`.

1. Paste the following in the **Description** section:

    ```markdown
    - UX design
    - Integration
    - Write documentation
    ```

1. Using the **Assignees** dropdown, assign the issue to yourself by clicking on the dropdown, and then clicking on your username.

1. Click **Create issue**.

1. Apply the following labels to the **Frontend services** by clicking on tne label, then click away from the metadata pane to apply the label to the issue: **Dev**, **Status::WIP**, and **Priority::High**.

1. In the left pane, click **Plan > Issues** to see all 3 issues with their labels.

## Suggestions?

If you'd like to suggest changes, please submit them via merge request.
