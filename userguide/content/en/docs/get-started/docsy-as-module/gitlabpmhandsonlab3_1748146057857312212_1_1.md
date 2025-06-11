---
title: "GitLab Agile Portfolio Management - Hands-On Lab: Use GitLab Planning Tools"
description: "This Hands-On Guide walks you through creating epics, iterations, and milestones in GitLab."
---

> Estimated time to complete: 45-60 minutes

## Objectives

To help you organize your work, GitLab provides epics, iterations, and milestones. In this lab, you will learn how to create, configure, and manage epics, iterations, and milestones in your projects.

## Task A. Review planning features in GitLab

1. *In a new browser tab*, navigate to the GitLab project source code at [https://gitlab.com/gitlab-org/gitlab](https://gitlab.com/gitlab-org/gitlab). Note the namespace structure indicated by the top of the page. You should be in the **GitLab** project inside the **GitLab.org** group.

1. At the top of the page above the project name, click **GitLab.org** to navigate to the parent group.

1. Note the number of epics, issues, and merge requests indicated in the left pane. These numbers represent work items across all subgroups and projects inside **Gitlab.org**.

1. In the left pane, click **Epics**. This takes you to a searchable list of epics in **GitLab.org** and all its subgroups.

1. In the left pane, click **Plan > Roadmap**. Epics and milestones in a group containing a start date or due date can be visualized in a form of a timeline (that is, a Gantt chart). The Roadmap page shows the epics and milestones in a group, one of its subgroups, or a project in one of the groups.

1. On the epic bars, you can see each epic's title, progress, and completed weight percentage. When you hover over an epic bar, a popover appears with the epic's title, start date, due date, and weight completed.

1. You can expand epics that contain child epics to show their child epics in the roadmap. You can select the chevron (v) next to the epic title to expand and collapse the child epics.

## Task B. Create an epic

> Epics provide a way to organize and manage a set of issues and sub-epics that share a strategic theme. In addition to logical grouping, epics enable project managers to perform higher level planning and build a roadmap with visual status tracking. You can read more about epics in the [documentation](https://docs.gitlab.com/ee/user/group/epics/).

1. *In the lab environment browser tab,* at the top of the page, click the `...` beside `GitLab Learn Labs`.

1. Click on **My Test Group**.

1. On the groups page, click on the **Awesome Inc** subgroup. Inside the subgroup, click **Software**.

1. In the left pane of the **Software** group landing page, click **Epics**.

1. In the upper-right corner above the search bar, click on the **New epic** button.

1. On the *New Epic* page, enter `Feature Category: Retirement Planning` in the **Title (required)** field. Having a descriptive title helps make it clear what issues and sub-epics should be associated with the epic.

1. In the **Description** field, paste the following:

    ```markdown
    # Overview

    This is the top-level epic for all features in the `Retirement Planning` category of Awesome Co.'s personal finance software.

    # Useful Links
    - *To-Do: add link to the feature strategy document*
    - *To-Do: add contributing team member information*
    ```

    > There is no need to change any other options for the epic, but it is still important to understand the options.

1. There are additional options that you can configure or leave at their default setting.

    - **Confidentiality**: Create private epics for internal use if you have a public facing project.

    - **Label**: Apply labels to your epic, which are metadata tags that can be used to sort and filter your epics.

    - **Start Date** and **Due Date**: Schedule your epics around project milestones.

    - **Color**: Customize the display color of the epic when used in roadmap timeline bars. Look at the **GitLab.org** group's Roadmap in Task A for an example.

## Task C: Create a child epic

> A parent epic can have multiple child epics. Use child epics to organize more complex topics into smaller, more focused epics and issues.

1. You will now create a new child epic to link to the parent epic. Navigate to your Epics page by clicking on **Plan > Epics** on the left pane.

1. Click the **New epic** button in the top right corner.

1. In the title section, type in `Investment Tracking`.

1. In the **Description** field, paste the following:

    ```markdown
    # Overview

    This epic tracks all work on `Investment Tracking` features and integrations, as part of the overall `Retirement Planning` category strategy.
    ```

1. Leave all other fields as they are, and click **Create epic**.

1. Return to the Software group's full list of epics by clicking **Epics** in the breadcrumbs at the top of the page.

1. Click into the **Feature Category: Retirement Planning** epic.

1. You will now designate the **Investment Tracking** epic as a child of the **Retirement Planning** epic. In the **Child issues and epics** tab, select the **Add** drop-down menu, and click **Add an existing epic**.

    > You can also use this menu to create a child epic from scratch.

1. Type `&` in the field provided, and select **Investment Tracking** from the list of epics.

    > The `&` symbol lets you refer to epics by their unique epic ID rather than their name. This is useful for when you have a large number of epics with similar names.

1. Click **Add** to link **Investment Tracking** as a child epic to the **Retirement Planning** parent epic.

## Task D. Set milestones to represent product goals

> Milestones in GitLab are a way to track issues and merge requests created to achieve a broader goal in a certain period of time. Milestones allow you to organize epics, issues and merge requests into a cohesive group, with an optional start date and an optional due date. You can read more about milestones in the [documentation](https://docs.gitlab.com/ee/user/project/milestones/).

1. Navigate to the **Awesome Inc** subgroup.

1. In the left pane, click **Plan > Milestones**. This will take you to the Milestones page.

1. Click **New milestone** in the top right corner.

1. In the **Title** section, type in `Organization Kickoff`.

1. In the **Start Date** section, use the calendar to enter in today's date.

1. In the **End Date** section, use the calender to enter 2 days from today's date as the milestone end date.

    > While a description is not necessary, it is recommended to type in a description to help clarify what the milestone is intended to be used for.

1. Click **Create milestone**.

1. In the breadcrumbs at the top of the page, click **Milestones**.

1. Click **New milestone** to create a second milestone.

1. In the **Title** section, type in `Backend services deployed`.

1. In the **Start Date** section, use the calendar to enter in today's date.

1. In the **End Date** section, use the calender to enter 2 weeks from today as the milestone end date.

1. Click **Create milestone**.

1. In the breadcrumbs at the top of the page, click **Milestones** to view your newly created milestones.

You will later assign tasks to the epics and milestones you created, allowing you to use roadmaps to view the progress of your initiatives.

## Task E. Schedule iterations as team sprints

> Iterations are mutually exclusive timeboxes intended to track team velocity, while milestones can represent larger, overlapping product goals. You can read more about iterations in the [documentation](https://docs.gitlab.com/ee/user/group/iterations/).

1. In your subgroup structure, navigate to **Awesome Inc > Software**.

1. In the left pane, click **Plan > Iterations**.

1. Click **New iteration cadence** in the top right corner.

1. In the **Title** section, type in `Team sprints` .

1. In the **Description** section, type in `Tracking team progress toward minimum viable product` .

1. In the **Automatic start date** input, use the calendar to enter in today's date.

1. In the **Duration** section, select 2 weeks as the duration of each iteration.

1. In the **Upcoming iterations** section, select 6 for the number of upcoming iterations.

1. Ensure the **Enable roll over** checkbox is selected.

    > At the end of the current iteration, all open issues are added to the next iteration when **Enable roll over** is selected.

1. Select **Create cadence**.

You will later assign individual tasks to iterations (sprints).

## Task F. Create a wiki for project documentation

> If you don't want to keep your documentation in your repository, but you want to keep it in the same project as your code, you can use the wiki GitLab provides in each GitLab project. Every wiki is a separate Git repository, so you can create wiki pages in the web interface, or locally using Git. GitLab wikis support Markdown, Rdoc, AsciiDoc, and Org for content. Wiki pages written in Markdown support all Markdown features, and also provide some wiki-specific behavior for links. You can read more about wikis [here](https://docs.gitlab.com/ee/user/project/wiki/).

1. Navigate to your **Family Budget Calculator** project in the **Software > Core** subgroup.

1. In the left pane, click **Plan > Wiki**.

1. Click **Create your first page** button in the middle of the page.

1. In the **Title** section, type in `Family Budget Calculator Documentation` as the page title.

1. Paste the following text in the content field underneath the title field.

    ```markdown
    ## Summary

    The Family Budget Calculator helps households stay on budget and save for the future.

    ## Contact

    Contact <YOUR-NAME> with questions or comments.
    ```

1. Click **Create Page**. You should see a new Wiki page with the content you created.

> If you'd like, edit the **Family Budget Calculator Documentation** page to add additional content or create additional wiki pages.

## Suggestions?

If you'd like to suggest changes, please submit them via merge request.
