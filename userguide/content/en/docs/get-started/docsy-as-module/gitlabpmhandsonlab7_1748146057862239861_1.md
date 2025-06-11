---
title: "GitLab Agile Portfolio Management - Hands-On Lab: Create And Customize Issue Boards"
description: "This Hands-On Guide walks you through creating and managing an issue board."
---
> Estimated time to complete: 30 minutes

## Objectives

To help you plan, organize, and visualize a workflow, you can utilize an issue board.

The issue board is a software project management tool used to plan, organize, and visualize a workflow for a feature or product release. You can use it as a Kanban or a Scrum board. Issue boards can be configured to meet the needs of various project management frameworks.

You can learn more in the [documentation](https://docs.gitlab.com/ee/user/project/issue_board.html).

In this lab, you will learn how to create a simple issue board.

## Task A. View and customize project-level Issue boards

1. Navigate to your **Family Budget Calculator** project in the **Software > Core** subgroup.

2. In the left pane, click **Plan > Issue boards**.

    > The default **Development** board contains only 2 lists by default: issues with the **Open** status and issues with the **Closed** status. For this lab, we are going to add more lists that use issue labels.

3. In the top right corner, click **New list**.

4. Ensure the **Label** radio button is selected in the Scope section of the list configuration pane. You can also create lists that are based on other metadata.

    - **Assignee:** Who is directly responsible for an issue.

    - **Milestone:** The release/due date of issues.

    - **Iteration:** The velocity of issues.

5. Open the **Value** drop-down, and select **Status::WIP**.

6. Click **Add to board**. All issues tagged with **Status::WIP** should appear in the new list.

7. Add another custom list to the project board: in the top right corner, click **New list**.

8. The new list will be scoped by issue label. Verify that the **Label** radio button is selected in the Scope section of the list configuration pane.

9. Open the **Value** drop-down, and select **Status::Done**.

10. Click **Add to board**.

    > Your **Development** board should now include the custom lists **Status::WIP** and **Status::Done** along with the default lists **Open** and **Closed**.

11. Note the **Create service infrastructure** issue in the **Open** list. Use your mouse to drag the **Create service infrastructure** issue into the **Status::WIP** list.

12. Click into the **Create service infrastructure** issue card by clicking directly on the issue's title. Note the **Status::WIP** label was automatically applied to that issue when you dragged it to a new list.

13. On the issue details page, click the **Edit** button next to **Labels** in the metadata pane.

14. Select the **Status::Done** label, and click away from the metadata pane to apply the label.

15. Return to **Plan > Issue boards** using the left pane.

    > The **Create service infrastructure** issue should now appear in the **Status::Done** list.

## Task B. Manage group-level issue boards

> Boards can also be viewed and managed at the group level.

1. Using the breadcrumbs at the top of the page, navigate to your top level **Awesome Inc** group.

1. In the left sidebar, navigate to **Plan > Issue boards**.

    > Group-level boards will have a similar default board to project-level boards. This group-level issue board shows all issues across the group's subgroups and projects.

1. At the top of the page, click the options toggle directly to the right of the search bar. Toggle **Epic swimlanes** on. The board view should refresh and show a swimlane view of lists grouped by epic.

1. Scroll down to the bottom of the page and expand **Issues with no epic assigned**.

1. Click and drag the **Identify tuning parameters to reduce performance bottlenecks** issue into your **Backend services** epic.

1. Hover your mouse over the **Backend services** heading. Click the **Go to epic** link from the details box that appears.

1. Verify your **Identify tuning parameters to reduce performance bottlenecks** issue is part of the **Backend services** epic.

## Task C. Create a new issue board

1. Navigate to **Plan > Issue boards**.

1. At the top of the page, click the **Development** dropdown to access the **Switch board** menu.

1. Click **Create new board**.

1. Title the board `<YOUR NAME>`

1. **_Deselect_** the checkboxes next to **Show the Open list** and **Show the Closed list**. This will remove the default lists from your custom board.

1. Click the **Expand** button next to **Scope**.

1. Click **Edit** next to **Assignee** and select yourself.

1. Click **Create board**.

1. In the top right corner, click **New list**.

1. Check that the **Label** radio button is selected in the Scope section of the list configuration pane.

1. Open the **Value** drop-down, and select **Priority::High**.

1. Click **Add to board**.

1. In the top right corner, click **New list**.

1. Check that the **Label** radio button is selected in the Scope section of the list configuration pane.

1. Open the **Value** drop-down, and select **Status::WIP**.

1. Click **Add to board**.

1. In the top right corner, click **New list**.

1. Click on the **Milestone** radio button in the Scope section of the list configuration pane.

1. Open the **Value** drop-down, and select **Backend services deployed**.

1. Click **Add to board**.

1. Refresh the browser tab that contains your new board.

## Task D: Create a new issue for your board

1. In the **Priority::High** list, click the **(+)** icon to create a new high-priority issue.

1. Title the issue `Update family budget app personas`

1. Select **Family Budget Calculator** as the project for the issue to belong to.

1. Click **Create issue**.

1. An issue details pane should appear on the right side of the page. Assign the issue to yourself if it is not already assigned. Add an additional **Status::Open** label to the issue.

1. Click the **X** in the top right corner to close out of the issue details pane.

1. Click the diagonal arrows in the top right of the page to enter _Focus mode_. The rest of the GitLab navigation UI is now hidden, allowing you to focus on issues in the board.

1. Click the diagonal arrow again to leave Focus mode.

## Suggestions?

If you'd like to suggest changes, please submit them via merge request.
