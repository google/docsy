---
title: "GitLab Agile Portfolio Management - Hands-On Lab: Create And Manage A Waterfall Board"
description: "This Hands-On Guide walks you through creating and managing a Waterfall board via issue boards."
---

> Estimated time to complete: 30 minutes

## Objectives

The Kanban and Scrum boards in previous labs showed the *progress* of issues as developers worked on them. A waterfall board shows the *health* of all the issues that your team is responsible for within in a single waterfall stage. With a pure waterfall workflow, all issues are due at the same time--at the end of the waterfall stage--so what you're tracking with the board is how likely they are to be done by that date.

## Task A. Make a milestone representing a waterfall stage

1. Navigate to the **Awesome Software** project.

1. In the left pane, click **Plan > Milestones**.

1. Click **New milestone**.

1. Type `Release 2.0-Dev` in the **Title** field.

1. Select today's date as the **Start Date** by clicking on today's date in the calendar.

1. Select 1 month from today's date as the **Due Date** by clicking on today's date in the calendar.

1. Write up a clear description for the milestone.

1. Click **Create milestone**.

## Task B. Add issues to the milestone

1. In the left pane, click **Issues**.

1. Click **Bulk Edit**.

1. Select a few issues of your choice by clicking the faint checkbox to the left of the search bar above the list of issues.

1. In the right pane, select **Release 2.0-Dev** from the **Milestone** dropdown.

1. At the top of the right pane, click **Update all** to apply the label to all selected issues.

## Task C. Simulate past work in the waterfall stage by setting issue health statuses

1. For each issue in the milestone, choose one of the scoped labels to apply: **Health::On Track**, **Health::Needs Attention**, or **Health::At Risk**.

> Remember, to apply a label to an issue, click on the issue. Then, on the right side of the screen next to the **Labels** keyword, click on **Edit**. From there, apply one of the labels by clicking on the label name, and then clicking off to set it.

## Task D. Make a board to track the health of issues in a single waterfall stage

1. In the left pane, click **Plan > Issue Boards**.

1. Using the dropdown at the top of the page, create a new board.

1. Title the board `Release 2.0 Dev Stage`

1. Deselect the **Show the open list** checkbox.

1. Leave the **Show the Closed list** checkbox selected.

1. Scope the board to display issues in the **Release 2.0-Dev** milestone.

1. Click **Create board**.

   > We will now create three new lists for the board: a list with a **Health::On Track** label, a list with a **Health::Needs Attention** label, and a list with a **Health::At Risk** label.

1. In the top right corner, click **Create list**.

1. Check that the **Label** radio button is selected in the Scope section of the list configuration pane.

1. Open the **Value** drop-down, and select **Health::On Track**.

1. Click **Add to board**.

1. In the top right corner, click **Create list**.

1. Check that the **Label** radio button is selected in the Scope section of the list configuration pane.

1. Open the **Value** drop-down, and select **Health::Needs Attention**.

1. Click **Add to board**.

1. In the top right corner, click **Create list**.

1. Check that the **Label** radio button is selected in the Scope section of the list configuration pane.

1. Open the **Value** drop-down, and select **Health::At Risk**.

1. Click **Add to board**.

> At this point, you have a complete board set up, but it is still recommended that you practice using this board as you would in production. For example, practice dragging and dropping your issues across different lists as their at-risk status increases or decreases. Or, simulate completing some issues by dragging them into the **Closed** list. Make sure to click on the issues themselves to confirm they are closed.

## Suggestions?

If you'd like to suggest changes, please submit them via merge request.
