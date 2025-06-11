---
title: "GitLab Agile Portfolio Management - Hands-On Lab: Create And Manage A Kanban Board"
description: "This Hands-On Guide walks you through creating and managing a Kanban board via issue boards."
---

> Estimated time to complete: 30 minutes

## Objectives

Kanban boards show you the progress of all tickets in your project, as they move from the Backlog, to being worked on, to being checked by QA, to being closed. A real-world Kanban board might involve many more statuses than these 4, but these are adequate for a bare-bones Kanban demonstration. To learn more about Kanban boards, click [here](https://en.wikipedia.org/wiki/Kanban_board).

## Task A. Create a new subgroup to work in

1. In the GitLab environment, navigate to the `Awesome Inc` group.

1. Click on the **New subgroup** button in the top right.

1. Type `PM Workflows` into the **Subgroup name** field.

1. Click **Create subgroup** to create the subgroup.

## Task B. Create epics

1. From your new subgroup, in the left pane, click **Epics**. We will be creating three epics.

1. Click the **New Epic** button in the top right.

1. Type `Frontend` into the **Title (required)** field. We will be leaving all the other fields of the epic blank.

1. Click **Create epic**.

1. Click the **New Epic** button in the top right.

1. Type `Backend` into the **Title (required)** field. We will be leaving all the other fields of the epic blank.

1. Click **Create epic**.

1. Click the **New Epic** button in the top right.

1. Type `QA` into the **Title (required)** field. We will be leaving all the other fields of the epic blank.

1. Click **Create epic**.

## Task C. Use a project template with issues

> GitLab has a variety of project templates you can use to help jump start your projects. The one we will be using is called `Sample GitLab Project`, which will come with predefined issues. You can see all of GitLab's project template [here](https://gitlab.com/gitlab-org/project-templates).

1. Click the **PM Workflows** title tile in the left pane to return to the subgroup landing page.

1. At the top of the page, click **New project**.

1. Click the **Create from template** option in the top right section.

1. Scroll to the bottom of the built-in templates. Next to **Sample GitLab Project**, click on **Preview** to see the project in a new tab. It is always important to preview a project before using it as a template.

1. After you have explored the template, return to your previous tab, and click **Use template**.

1. Type in `Awesome Software` the **Title** section. Leave all other options as their default values.

1. Click the **Create project** button. GitLab will now import a project containing many pre-generated issues and merge requests. When the import process has finished, you will be taken to the new project's landing page.

## Task D. Assign some issues to epics

1. In the left pane, click **Plan > Issues**.

1. Click an issue of your choice.

1. Assign the issue to the **Backend** epic using the right metadata pane on the issue's details page.

1. Assign another issue of your choice to the **Frontend** epic using the right metadata pane on the issue's details page.

1. Assign another issue of your choice to the **QA** epic using the right metadata pane on the issues's details page.

## Task E. Create labels representing Kanban stages

1. Using the breadcrumbs at the top of the page, return to your **PM Workflows** subgroup.

1. In the left pane, click **Manage > Labels**.

1. Click the **New Label** button in the top right.

1. Type in `Status::Backlog` into the title field.

1. Feel free to pick a color for the label and type in a description. When you are satisfied, click **Create label**.

1. Click the **New Label** button in the top right.

1. Type in `Status::WIP` into the title field.

1. Feel free to pick a color for the label and type in a description. When you are satisfied, click **Create label**.

1. Click the **New Label** button in the top right.

1. Type in `Status::QA` into the title field.

1. Feel free to pick a color for the label and type in a description. When you are satisfied, click **Create label**.

    > You are **not** making a label to mark an issue as "done." Instead, you will close each issue when it is done. This lets GitLab register the issue as complete in burndown/burnup charts and on roadmaps.

1. Click the **New Label** button in the top right.

1. Type in `Health::On Track` into the title field.

1. Feel free to pick a color for the label and type in a description. When you are satisfied, click **Create label**.

1. Click the **New Label** button in the top right.

1. Type in `Health::Needs Attention` into the title field.

1. Feel free to pick a color for the label and type in a description. When you are satisfied, click **Create label**.

1. Click the **New Label** button in the top right.

1. Type in `Health::At Risk` into the title field.

1. Feel free to pick a color for the label and type in a description. When you are satisfied, click **Create label**.

### Task F. Put all issues in the Kanban backlog

> None of the issues have been worked on yet, so you need apply the **Status::Backlog** label to all of them. Fortunately you can perform bulk edits on issues.

1. In the left pane, click **Issues**.

1. Click **Bulk Edit**.

1. Select all the issues by clicking the faint checkbox to the left of the search bar above the list of issues.

1. In the right pane, select **Status::Backlog** from the **Labels** dropdown.

1. At the top of the right pane, click **Update all** to apply the label to all selected issues.

## Task G. Create the Kanban board

1. In the left pane, click **Plan > Issue Boards**.

1. At the top of the page, click the **Development** dropdown.

1. Select **Create new board** from the **Switch board** menu.

1. Type `Kanban` in the **Title** section.

1. Deselect the **Show the Open list** checkbox, as we will not need it for this board.

1. Keep the **Show the Closed list** checkbox selected.

1. Kanban boards generally show **all** your issues, so don't set a scope for the board.

1. Click **Create board**.

## Task H. Add a list for each stage

1. At the top right of the page, click **Create list**.

1. In the **New list** options, select **Label** as the list scope and **Status::Backlog** as the value.

1. Click **Add to board**.

1. At the top right of the page, click **Create list**.

1. In the **New list** options, select **Label** as the list scope and **Status::WIP** as the value.

1. Click **Add to board**.

1. At the top right of the page, click **Create list**.

1. In the **New list** options, select **Label** as the list scope and **Status::QA** as the value.

1. Click **Add to board**.

1. Refresh the browser page to force the 3 new lists to appear in the same order that you created them.

## Task I. Limit the allowed amount of work in progress

1. Click the gear icon at the top of the **Status::WIP** list to open list settings.

1. Next to **Work in progress limit**, click **Edit** button and set the value to `3`

1. Click the **X** in the top right corner to exit out of the list settings.

## Task J. Simulate work on issues

1. Practice dragging issues between different lists. For example, place more than 3 issues in the **WIP** list, and notice the results.

1. At the top of the page, click the **Preferences icon > Epic swimlanes** toggle on.

1. At the bottom of the page, expand **Issues with no epic assigned** to see the full list of issues in the **Backlog** list.

1. Practice dragging more issues, both to different lists and to different epics.

## Suggestions?

If you'd like to suggest changes, please submit them via merge request.
