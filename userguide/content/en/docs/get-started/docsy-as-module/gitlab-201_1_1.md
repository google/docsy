---
title: GitLab 201
---

## Welcome

Welcome to GitLab 201. This is a set of reading material and video tutorials for GitLab team members who are in non-engineering roles (i.e. talent acquisition, peopleops, marketing, finance, etc) and/or have not used a DevOps tool like GitLab before. This can also be helpful for non-engineering people outside of GitLab wanting to learn how to use GitLab for personal projects.

### Objectives

1. Learn how to create epics
1. Learn how to review and make suggestions to a merge request
1. Learn how to create a new handbook page

## Lesson 1: Epics

Epics let you manage your portfolio of projects more efficiently and with less effort by tracking groups of issues that share a theme, across projects and milestones. Epics are great for [project management](/handbook/marketing/project-management-guidelines/epics/) as they help to better [enhance your workflow](https://about.gitlab.com/blog/2020/01/21/epics-three-features-accelerate-your-workflow/).

### Uses

1. Suppose your team is working on a project/OKR that involves multiple discussions throughout different issues created in distinct projects within a Group.  With epics, you can track all the related activities that together contribute to that single project/OKR.
1. Track when the work for the group of issues is targeted to begin, and when it’s targeted to end.
1. Discuss and collaborate on ideas and scope at a high level.
1. Helps to report on the health status of the different issues attached.

### How to create an epic

Epics are created on group level. To create an epic, navigate to the project’s group, on the left panel,

1. Click ‘epics’
1. Then click ‘New epic’
1. Type in the title of the epic and click create epic
1. This epic is referred to as the parent epic

You may choose to mark confidential by selecting Make this epic confidential checkbox.

### Video: How to create an epic (~2 minutes)

{{< youtube "hxUmalpYHF4" >}}

### Child epics

A child epic is a sub epic created within the parent epic. You may think about it like a folder with sub folders and multiple files. Child epics may be added to a parent epic.

![epic organisation](/images/handbook/people-group/EPIC_GRAPHIC.png)

To add a child epic:

1. Navigate to the parent epic, click the add dropdown button
1. Click Add an epic
1. Type in the title
1. Create epic

### Video: How to create a child epic (~2 minutes)

{{< youtube "2OjWGpOsBsM" >}}

### How to link epics and issues

An epic contains a list of issues and an issue can be associated with at most one epic. When you add an issue that’s already linked to an epic, the issue is automatically unlinked from its current parent.

### How to add an issue to an epic

In the epic, click the Add dropdown button.

![epic dropdown](/images/handbook/people-group/add_issue_to_epic_1.png)

1. Click Add an existing issue
1. Either paste the link of the issue or enter the issue id
1. If there are multiple issues to be added, press the spacebar and repeat this step
1. Click Add

### Add an epic to an issue

For an existing issue, navigate to the side bar,

![issue sidebar](/images/handbook/people-group/show_epic_in_side_bar_2.png)

click epic, type in the title of the epic you want to add and then select it from the drop down menu.

![issue dropdown](/images/handbook/people-group/add_epic_to_issue_dropdown_3.png)

Once the desired epic has been selected, it will be shown on the issue like this:

![issue sidebar](/images/handbook/people-group/epic_added_to_issue_4.png)

### Helpful Tips

**Issues** - medium for collaborating on ideas and planning work in GitLab

**Boards** - set up similar to how a kanban board would look. An issue board shows you what issues your team is working on, who is assigned to each, and where in the workflow those issues are.

**Epic** - helps to track issues across multiple projects efficiently. Epics give a high level view of the health status of different issues attached to that epic.

## Lesson 2: Merge Requests

In GitLab 101, we learned how to [create merge requests]({{< ref "gitlab-101#lesson-3-gitlab-merge-requests" >}}). In this lesson, we will dive deeper into merge requests.

### Reviewing a merge request

You can review a merge request to provide feedback to the author. You can start a review in the merge request diff. Diff is the view of changes to a file between branches or commits.

To review a merge request:
Click on the "Changes" tab in the merge request.

Click on the line you want to comment on, using the 'add a comment icon'

![comment icon](/images/handbook/people-group/comment_icon_in_diff_5.png)

Write your comment in the dialogue box and click on the start a review button.

![comment dialogue](/images/handbook/people-group/start_a_review_dialogue_box_6.png)

To add more comments to a review, start writing a comment as normal and click the ‘Add to review’ button.

To resolve a thread, when replying to a comment, click the checkbox to resolve thread.

Click "submit review" to publish all documents.

### Suggesting changes to a merge request

You can suggest changes in the merge request diff threads. The Merge Request author is able to apply these suggestions with a click, which will generate a commit in the merge request.

Choose a line to be changed, click add a comment icon

![comment icon](/images/handbook/people-group/comment_icon_in_diff_5.png)

Then click on the Insert suggestion icon in the toolbar

![suggestion in mr](/images/handbook/people-group/insert_suggestion_in_mr_7.png)

In the comment, add your suggestion to the pre-populated code block

![suggestion in mr](/images/handbook/people-group/Suggestion_in_mr_code_block_8.png)

Click "Start a review" to add your comment to a review, or "Add comment now" to add the comment immediately.

The suggestion in the comment can be applied by the merge request author directly from the merge request.

Once the suggestion has been applied, a new commit will be created and the suggested change will be pushed to the merge request's branch.

### WIP/Draft merge requests

If you are still working on a merge request and not ready for it to be merged, add `WIP:` or `Draft:` to the start of the merge request’s title, this will prevent the merge request from being merged.

To update a WIP MR, in the changes tab, click on the pencil icon to edit the merge request.

![pencil icon](/images/handbook/people-group/edit_icon_in_WIP_MR_9.png)

Make your changes.  Click "commit changes".

When you are ready for it to be merged, simply remove the `WIP:` or `Draft:` prefix from the title of the MR.

Save changes, and assign the merge request to the DRI of the page.

## Lesson 3: How to create a new handbook page

Before creating a new handbook page, ensure the information does not already exist in the handbook or if it can be added to an existing page.

### Video: How to create a new handbook page and WIP MR (~9 minutes)

{{< youtube "HBgdX1YuM3s" >}}

### How to create a new handbook page

1. Navigate to www-gitlab-com project
1. Click on sites - handbook - source - handbook
1. Navigate to the specific folder that will house the new page
1. In that folder, click the + icon and select new file
1. Name the file path and ensure it ends in `/index.html.md`.
1. To ensure the page is set up correctly, copy/paste the following to the top of your new handbook page. Remember to edit appropriately.

    ```markdown
    ---
    title: "[insert title of your page]"
    description: "[insert a short sentence to appear as part of search results]"
    ---
    ```

1. Type in the commit message and click `commit changes`.
1. Update the merge request template and assign the merge request to the appropriate reviewer.

### Helpful tips for updating the handbook

1. To locate the handbook on gitlab.com, navigate to `www-gitlab-com` project, click sites - handbook - source - handbook. Click the section of the handbook you want to navigate to (eg people group, marketing), the folders are arranged alphabetically.
1. The [markdown guide](/docs/markdown-guide#markdown-style-guide-for-aboutgitlabcom) page contains useful tips for updating the handbook, such as adding images, embedding documents and much more.
1. If you don’t know how to do something - find another instance of it in the handbook. For example, if you want to add a table to the handbook. Navigate to a section of the handbook that contains a table, the [People Group](/handbook/people-group) page is a good example. Click `view source` to see how the table looks. You may copy/paste, then edit to suit your needs.
