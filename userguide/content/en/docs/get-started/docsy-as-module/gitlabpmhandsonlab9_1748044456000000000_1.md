---
title: "GitLab Agile Portfolio Management - Hands-On Lab: Create And Manage A Scrum Board"
description: "This Hands-On Guide walks you through creating and managing a Scrum board via an issue board."
---

> Estimated time to complete: 30 minutes

## Objectives

In this lab you'll configure a Scrum board and populate it with the same issues you used for the Kanban board. A Scrum board is a board that is used to keep track of the progress in a sprint. To learn more about Scrum, click [here](https://www.scrum.org/learning-series/what-is-scrum/what-is-scrum).

## Task A. Make Scrum-specific labels

> Compared to Kanban boards, Scrum boards normally require 2 extra labels to represent the project and sprint backlogs.

1. Navigate to the **Awesome Software** project.

1. In the left sidebar, click **Manage > Labels**

1. Click the **New Label** button in the top right.

1. Type in `Status::Project Backlog` into the title field.

1. Feel free to pick a color for the label and type in a description. When you are satisfied, click **Create label**.

1. Click the **New Label** button in the top right.

1. Type in `Status::Sprint Backlog` into the title field.

1. Feel free to pick a color for the label and type in a description. When you are satisfied, click **Create label**.

## Task B. Put all issues in the Project Backlog

1. In the left pane, click **Issues**.

1. Using the bulk issue edit technique you learned in the last lab, apply the **Status::Project Backlog** label to all issues. Because this is a scoped label, it will remove any other **Status** labels that are already applied to any issues.

## Task C. Make an iteration (sprint)

1. Iterations can only exist at the group or subgroup level. Using the breadcrumb trail, navigate to the **PM Workflows** subgroup.

1. In the left pane, click **Plan > Iterations**.

1. Click **New iteration cadence**.

1. Type `Sprint 6` in the **Title** section.

1. Select today's date via the calender in the **Start Date** section.

1. Select `2` as the number of weeks in the **Duration** section.

1. Select `2` as the number of iterations in the **Upcoming Iterations** section.

   > For the purposes of this lab, we will not worry about rollover, so there is no need to mark it.

1. Click **Create cadence**.

## Task D. Add some issues to the next sprint

> This step simulates the "sprint planning" ceremony, where your team decides which issues it will work on in the upcoming sprint.

1. Navigate to the **Awesome Software** project.

1. In the left sidebar, click **Issues**.

1. Pick a handful of issues that you want to work on in the next sprint and assign them to the **Sprint 6** first iteration. You can do this either with the bulk issue edit feature (selecting only the relevant issues), or by visiting each issue's details page.

1. Apply the **Status::Sprint Backlog** label to those same issues. You can do this either with the bulk issue edit feature (selecting only the relevant issues), or by visiting each issue's details page.

## Task E. Make a Scrum board for the next sprint

1. In the left pane, click on **Plan > Issue Boards** and view your existing Kanban from the last lab.

1. Click **Group by > Epic** if the board is not already showing that view.

1. At the top of the page, click the dropdown to view the **Switch boards** menu.

1. Click **Create new board**.

1. Title the new board `Sprint 6`

1. Deselect the **Show the Open list** checkbox, as we do not need to have an Open list for this kind of board.

1. Leave the **Show the Closed list** checkbox selected.

1. Next to **Scope**, click **Expand**.

1. In the scope pane, click **Edit** near Iteration option. Select **Current iteration**.

1. Click **Create board**.

   > We will now create three new lists for the board: a list with a **Status::Sprint Backlog** label, a list with a **Status::WIP** label, and a list with a **Status::QA** label.

1. In the top right corner, click **Create list**.

1. Check that the **Label** radio button is selected in the Scope section of the list configuration pane.

1. Open the **Value** drop-down, and select **Status::Sprint Backlog**.

1. Click **Add to board**.

1. In the top right corner, click **Create list**.

1. Check that the **Label** radio button is selected in the Scope section of the list configuration pane.

1. Open the **Value** drop-down, and select **Health::Needs Attention**.

1. Click **Add to board**.

1. In the top right corner, click **Create list**.

1. Check that the **Label** radio button is selected in the Scope section of the list configuration pane.

1. Open the **Value** drop-down, and select **Status::QA**.

1. Refresh the browser page to force the 3 new lists to appear in the same order that you created them.

   > At this point, you have a complete board set up, but it is still recommended that you practice using this board as you would in production. For example, practice dragging and dropping your issues across different lists as their at-risk status increases or decreases. Or, simulate completing some issues by dragging them into the **Closed** list. Make sure to click on the issues themselves to confirm they are closed.

## Task F. View your sprint progress

1. In the left pane, click **Plan > Iterations**.

1. Click into your **Sprint 6** iteration, and then click on the first week in the list.

1. Note the progress of issues in the burndown and burnup charts.

## Suggestions?

If you'd like to suggest changes, please submit them via merge request.
