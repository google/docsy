---
title: "GitLab Agile Portfolio Management - Hands-On Lab: Organize and Manage Issues"
description: "This Hands-On Guide walks you through creating metadata for issues, as well as creating a description template in GitLab."
---

> Estimated time to complete: 45-60 minutes

## Objectives

To help you manage your issues, GitLab provides metadata for each issue. Metadata allows you to define details for an issue such as weight, and due dates. In this lab, you will learn how to view and manage issue metadata.

You can learn more about issues and metadata in the [documentation](https://docs.gitlab.com/ee/user/project/issues/).

## Task A. Set issue metadata

1. In your **Family Budget Calculator** project, click **Plan > Issues** from the left pane.

1. Click on the **Third-party financial services integration** issue that you created in a previous lab.

1. In the issue's metadata pane (on the right side of the screen), click **Edit** next to the **Epic** field.

1. Assign this issue to the **Investment Tracking** epic by clicking on the **Investment Tracking** in the list.

1. In the issue's metadata pane (on the right side of the screen), click **Edit** next to the **Iteration** field.

1. Assign this issue to the first most recent iteration in **Team sprints** by clicking on it in the list.

1. In the issue's metadata pane (on the right side of the screen), click **Edit** next to the **Due date** field.

1. Set the issue due date to 1 week from today's date by using the calendar.

1. In the issue's metadata pane (on the right side of the screen), click **Edit** next to the **Labels** field.

1. Apply the label **Status::WIP**. Note this replaces the previous **Status::Open** label, since an issue can't simultaneously have multiple labels with the same scope (the "Status::" part of the label).

   > For more information about scoped labels, see the [documentation](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels).

1. In the issue's metadata pane, click **Edit** next to the **Weight** field.

1. Enter a value of `2`, then click away from the metadata pane to set the issue's weight.

1. Navigate to **Awesome Inc > Software** group. In the left pane, click **Epics**. Click the **Investment Tracking** epic. Note that the **Third-party financial services integration** issue appears in the epic's details page.

1. In the left pane, click **Plan > Iterations**. Click the iteration to which you assigned the issue. Note that the **Third-party financial services integration** issue appears on the iteration's details page.

## Task B. Organize, promote, and link issues and epics

1. In your **Family Budget Calculator** project, click **Issues** in the left pane.

1. Click your **Backend services** issue. You realize that, considering the scope of this initiative, this issue would be better suited as an epic, with each To-Do in the description as a separate issue in the epic.

1. To promote this issue to an epic, use the `/promote` quick action in the issue's comment field, then click **Comment**.

   > A **quick action** is a text-based shortcut for common actions that are usually done by selecting buttons or dropdowns in the GitLab user interface. You can enter these commands in the descriptions or comments of issues, epics, merge requests, and commits. For more information about quick actions, click [here](https://docs.gitlab.com/ee/user/project/quick_actions.html).
   >
   > You can also promote an issue to an epic by clicking the **vertical ellipsis** next to the **Edit button**, then clicking **Promote to epic** in the resulting menu.

1. After applying the quick action, **Backend services** is now an epic at the **Core** group level. Note that there is no comment that says '/promote', as quick actions do not leave a comment. Using the breadcrumbs at the top of the page, click your **Core** subgroup.

1. In the left pane, click **Epics**.

1. Click into your new **Backend services** epic.

1. You'd like to link the epic's To-Do items as individual issues. While you can promote issues into epics, you cannot promote To-Do items into an issues. Instead, you will need to create a new issue for each To-Do item. Under the **Child issues and epics** tab, click **Add > Add a new issue**.

1. Enter `Create DB` as the issue title.

1. In the **Project** dropdown, select **Family Budget Calculator**, as it is the only project created so far, and all issues must belong to a project.

1. Click **Create issue** in the top right corner.

1. Follow the previous four steps to create the `Create service infrastructure` and `Backend documentation` issues, both linked to the **Backend services** epic.

1. Click on the **Create DB** issue.

1. In the issue's right metadata pane, assign the issue to the **Backend Services Deployed** milestone.

1. Assign the **Create service infrastructure** and **Backend documentation** issues to the **Backend Services Deployed** milestone. So far all issues have been created in the **Family Budget Calculator** project by necessity. But as requirements grow it may be best to move some issues into more suitable projects.

1. Navigate to your **Software > Core** subgroup.

1. From the **Core** group landing page, click **New project**, then **Create blank project**.

1. In the **Project name** field, enter `Database`

1. Leave the **Visibility Level** at the default selection.

1. Enable the **Initialize repository with a README** checkbox.

1. Click **Create project**.

1. Return to your **Family Budget Calculator** project in the **Core** subgroup.

1. In the left pane, click **Issues**.

1. Click into the **Create DB** issue.

1. On the issue's details page, scroll to the bottom of the right metadata pane and click **Move issue**.

1. Select your **Database** project, then click **Move**.

1. See that the project heading and breadcrumbs at the top of the page indicate your issue is now part of the **Database** project.

## Task C. Create and apply a description template

1. Navigate to your **Awesome Inc** group by using the breadcrumbs at the top of the page.

1. In the upper right corner of the group landing page, click **New Project**.

1. Click **Create blank project**.

1. Enter `Description Templates` in the **Project name** section. This project will hold templates that can be used to pre-populate issues and merge requests across the organization.

1. Enable the **Initialize repository with a README** checkbox, as we are not importing in a project that already exists from elsewhere. Leave all other options as their default.

1. Click **Create project**.

1. On the project landing page, click the **(+)** dropdown near the top of the page under the project title.

1. Click **This Directory > New file**.

1. In the **File name** field, enter `.gitlab/issue_templates/technical_spike.md`

1. For the file's content, paste the following:

   ```markdown
   ## Instructions
   Use this issue to capture research that must take place before continued development of a feature.

   ### Summary
   <!--In 2 sentences or fewer, describe the problem to be solved or the question to be answered.  -->

   ### Impact Statement
   <!-- Describe importance of solving the problem. How will it affect the feature or product direction?  -->

   ### Tasks

   - [ ] Assign participants and DRI
   - [ ] Apply appropriate priority and team labels
   - [ ] Assign to an upcoming product sprint

   /label ~"Status::Open"
   ```

   > Notice that the template is using a quick action to assign a label. Whenever this template is used, a label will automatically be assigned when it is created.

1. Click **Commit changes**.

   > **Security Warning**: Making direct commits on the main branch without a merge request is not recommended for enterprise level projects.

1. Using the breadcrumbs at the top of the page, navigate back to your **Awesome Inc** group.

1. In the left pane, click **Settings > General**.

1. Scroll to the **Templates** section and select **Expand**.

1. In the **Templates** dropdown, select your **Description Templates** project.

1. Click **Save changes**.

1. Now the template can be applied when creating an issue. Navigate to your **Awesome Inc > Software > Core > Database** project.

1. In the left pane, click **Plan > Issues**.

1. Click **New issue**.

1. In the **Title** field, type `Identify tuning parameters to reduce performance bottlenecks`

1. In the **Description** field, expand the **Choose a template** dropdown and select your **technical_spike** description template.

1. (Optional): Edit the description to fill in more details about the issue.

1. Assign the issue to yourself by clicking on the **Assign to me** link and click **Create issue**.

1. Review the pre-populated description and metadata on the issue's details page.

## Suggestions?

If you'd like to suggest changes to the merge request, please submit them via merge request.
