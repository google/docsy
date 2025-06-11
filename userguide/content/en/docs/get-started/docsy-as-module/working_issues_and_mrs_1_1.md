---
title: Working issues and MRs
description: Support Operations policies page for working issues and MRs
canonical_path: "/handbook/support/readiness/operations/docs/policies/working_issues_and_mrs"
---

## Time tracking

We utilize the
[Time Tracking](https://docs.gitlab.com/ee/user/project/time_tracking.html)
feature of GitLab in the issues and merge requests we work on. We utilize this
time tracking to help with things like defining our hiring model and measuring
workload. As you work issues and merge requests, make sure you utilize this
feature.

### Labeling

Labels help you tag issues, merge requests, and epics within GitLab.

There are two types of labels:

- Project labels: ones existing at the project level only
- Group labels: ones existing at the group level, and are thus inherited to all
  subgroups and projects within the group

Support Operations uses Group labels so we can apply them to every item we work
on. We create them at either the
[gitlab-com group](https://gitlab.com/gitlab-com) level or the
[support-ops group](https://gitlab.com/gitlab-com/support/support-ops) level.

#### How we use them

We utilize labels on *every* issue and merge request we work. The exact label to
use is determined by what the issue/merge request is for, so refer to the
various documentation pages about that topic to determine the correct label to
use.

#### Scoped labels

As per
[GitLab](https://docs.gitlab.com/ee/user/project/labels.html#scoped-labels):

> Scoped labels allow teams to use the label feature to annotate issues, merge
> requests and epics with mutually exclusive labels. This can enable more
> complicated workflows by preventing certain labels from being used together.

To use a scoped label, it must contain two colons (`::`) in the title. This
makes it so the first part (before the double colons) is a category and the
second part (after the double colons) is the label for the category.

Do note only scoped label from a scoped label category can be present at any
time. Adding a new one will remove the other one from the scoped label category.

#### How to create a GitLab label

To create a label at the project level, go to the project in question within
GitLab and hover on `Project information` on the left-hand side of the page. In
the submenu that appears, click on `Labels`.

To create a label at the group level, go to the group in question within GitLab
and hover on `Group information` (or `Subgroup information` if you are using a
subgroup) on the left-hand side of the page. In the submenu that appears, click
on `Labels`.

From here, click the blue `New label` button in the top-right of the page. On
the page this takes you to, you will add a title for your label, a description
for your label, and a background color for the label. After you have filled
these out, click the blue `Create label` button to create the label. You will
now be able to use that label at the project level (for Project labels) or on
all projects/subgroups under the group (for Group labels).

#### How to edit a GitLab label

To edit a label at the project level, go to the project in question within
GitLab and hover on `Project information` on the left-hand side of the page. In
the submenu that appears, click on `Labels`.

To edit a label at the group level, go to the group in question within GitLab
and hover on `Group information` (or `Subgroup information` if you are using a
subgroup) on the left-hand side of the page. In the submenu that appears, click
on `Labels`.

From here, locate the label you wish to edit and click the pencil icon on the
right-hand side of the label box to edit it. Here you can change the title,
description, or background color. Keep in mind that changing this will change it
on all items the label is present on.

After you are done making your changes, click the blue `Save changes` button.

#### How to delete a GitLab label

To delete a label at the project level, go to the project in question within
GitLab and hover on `Project information` on the left-hand side of the page. In
the submenu that appears, click on `Labels`.

To delete a label at the group level, go to the group in question within GitLab
and hover on `Group information` (or `Subgroup information` if you are using a
subgroup) on the left-hand side of the page. In the submenu that appears, click
on `Labels`.

From here, locate the label you wish to delete and click the three vertical dots
on the right-hand side of the label box. On the submenu that appears, click the
`Delete` option. This will make a pop-up box appear asking you to confirm the
deletion. Keep in mind that doing so will remove the label from all items it
exists on. If you are sure you wish to confirm the deletion, click the red
`Delete label` button.

### Milestones

In regards to milestones, as per
[GitLab](https://docs.gitlab.com/ee/user/project/milestones/):

> Milestones in GitLab are a way to track issues and merge requests created to
> achieve a broader goal in a certain period of time.

#### How we use them

We utilizes milestones on *every* issue and merge request we work on. As such,
you should always ensure an issue or merge request you are working on contains
the relevant milestone. Through this, we can see what changes are occurring
during any given period of time.

#### Which milestone to use

The milestone to use is determined by which deployment date we are aiming for.

As an example, if you are aiming to deploy the changes 2023-06-01, you would use
the milestone "Support Ops Deployment: 2023-06-01".

As another example, if you are aiming to deploy the changes 2023-04-15, you
would use the milestone "Support Ops Deployment: 2023-05-01", as that is the
next available milestone.

You can find our milestones
[here](https://gitlab.com/groups/gitlab-com/support/support-ops/-/milestones).

#### How to create GitLab milestones

To create a milestone, you would go to the project or group page and then hover
over `Issues`. In the submenu that appears, you would then click `Milestones`'.

From here, you will click the blue `New milestone` button at the top-right of
the page.

After doing so, you will enter a title for the milestone, a start and end date
for the milestone, and a description for the milestone. After doing so, click
the blue `Create milestone` button.

#### How to edit GitLab milestones

To edit a milestone, you would go to the project or group page and then hover
over `Issues`. In the submenu that appears, you would then click `Milestones`'.

From here, locate the milestone in question and click on its title.

After doing so, you will then click the white `Edit` button towards the
top-right of the page. Doing so will allow you to edit the title for the
milestone, a start and end date for the milestone, and a description for the
milestone. After doing so, click the blue `Save changes` button.

#### How to close and delete a milestone

To close or delete a milestone, you would go to the project or group page and
then hover over `Issues`. In the submenu that appears, you would then click
`Milestones`'.

From here, locate the milestone in question and click on its title.

After doing so, you can close the milestone by clicking the white
`Close milestone` button at the top-right of the page. You can delete
the mileston by clicking the red `Delete` button (and confirming deletion by
clicking the red `Delete milestone` button that appears on the pop-up box).

#### Adding issues and merge requests to GitLab milestones

There are a few ways to add an issue or merge request to a milestone. The
easiest way is via the issue or merge request itself. On that page, you can do
one of the following:

- Make a comment containing the text `/milestone %"XXX"` (where `XXX` is the
  milestone title)
- Click the `Edit` button to the right of `Milestone` on the right-hand side of
  the page and select the milestone to use.
