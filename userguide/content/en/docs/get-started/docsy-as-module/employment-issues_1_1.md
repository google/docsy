---
title: Employment Issues
description: "Information on the commands used to create our onboarding, offboarding, and career mobility issues."
---

## Employment issues

People Connect Team members make use of GitLab's [ChatOps](https://docs.gitlab.com/ee/ci/chatops/)
functionality to automate creation of Onboarding, Offboarding and Career Mobility issues. By executing a
Slack command a pipeline is triggered in the `employment-automation` project, which runs the
related job and replies with a link to the newly created issue.

When these employment issues are created, we also add it to the team member's epic. If there's no
existing epic yet, we create one in the [Team Member Project](https://gitlab.com/gitlab-com/team-member-epics/).
The epic has the team member's name as the title and this is also how we do the lookup for the epic.

The templates used for the creation of the issues and the issues itself are in two different projects. Templates live within the [`people-group`](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/tree/main/.gitlab/issue_templates), while the issues live in the [`Team Member Epics`](https://gitlab.com/gitlab-com/team-member-epics/employment/-/issues) group. The templates are public but the issues remain private. Any updates to the templates can be done in the [Employment Templates](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/tree/main/.gitlab/issue_templates) project.

### Onboarding issues

See our [Onboarding Automation Flow](/handbook/people-group/engineering/onboarding#onboarding-issue-creation) for more information on current onboarding automations and manual triggers.

### Offboarding issues

See our [Offboarding Automation flow](/handbook/people-group/engineering/offboarding#automations) for more information on current offboarding automations.

### Career Mobility issues

See our [Career Mobility Automation Flow](/handbook/people-group/engineering/career-mobility#career-mobility-issue-creation) for more information on current Career Mobility automations and manual triggers.

### Epics

We add all the employment issues for the team member in
one epic. To de-clutter the epics, we set up automation to close these epics.

We have a scheduled pipeline to close those epics that
have no open issues linked to them. This pipeline will add a comment on the
epic that it is being automatically closed.

Currently, the pipeline is scheduled to be run at 11:00 AM UTC on every Wednesday

Note that when a new issue is added to a closed epic, we will re-open the epic.

### Creating an Employment Template

Many of our automation's regarding team members rely on some employment templates. These allow us to dynamically create department and role specific tasks that can then be maintained by the departments themselves.

#### Quick Links

| **Template Task** | **Project** |
|---|---|
| Access Request | [Click Me](https://gitlab.com/gitlab-com/team-member-epics/access-requests) |
| Career Mobility | [Click Me](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/tree/main/.gitlab/issue_templates/career_mobility_tasks) |
| Onboarding | [Click Me](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/tree/main/.gitlab/issue_templates/onboarding_tasks) |
| Offboarding | [Click Me](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/tree/main/.gitlab/issue_templates/offboarding_tasks) |

---

#### Finding the Right Project

First things first we will have to solve the issue of: `What project does or should my template live in?`.

We currently have a two different projects responsible for housing templates:

- **Team Member Epics** - [Access Requests](https://gitlab.com/gitlab-com/team-member-epics/access-requests)
  - Role baseline access request ( *AKA Role Based Entitlements* )
- **People Operations** - [Employment Templates](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates)
  - **Onboarding** - The steps a new team member needs to take in order to perform the tasks of their role.
  - **Career Mobility** - Any extra tasks needed to be completed when an internal team member is becoming a manager or transferring internally as one.
  - **Offboarding** - Country, Entity, Division, and Departmental specific required deprovisioning and compliance templates.

#### Finding the Associated Task

Now that we have successfully navigated to the corresponding project, we can start creating our template. To ensure that we are able to create the associated templates correctly, we follow quite a strict naming convention.

To start viewing the different potential tasks, lets navigate to the `.gitlab/issue_templates` folder of the associated project.

All of the `issue_templates` folder's children, ie: `onboarding_tasks, offboarding_tasks, etc` are mapped to a specific task.

##### All Task Folder Names

- **Onboarding** - [`onboarding_tasks`](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/tree/main/.gitlab/issue_templates/onboarding_tasks)
- **Access Requests** - [`role_baseline_access_request_tasks`](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/tree/master/.gitlab/issue_templates/role_baseline_access_request_tasks)
- **Career Mobility** - [`career_mobility_tasks`](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/tree/main/.gitlab/issue_templates/career_mobility_tasks)
- **Offboarding** - [`offboarding_tasks`](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/tree/main/.gitlab/issue_templates/offboarding_tasks)

In our task directory we can also create generalized tasks for a specific [entity](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/onboarding_tasks/entity_cxc.md), [country](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/onboarding_tasks/country_south_africa.md), or [department](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/blob/main/.gitlab/issue_templates/career_mobility_tasks/department_development.md).

These will be added to the specific task based on the team members current entity, country, department, and role. More on how these work in [this section](#template-creation-full-example).

#### Finding the Folder Name for your Department

Now that we have successfully navigated to the correct corresponding task folder, now comes the tricky part, finding the folder name for your department.

For all department folders they will follow this convention:

`department_<department_name>`

- Expects the **directory name** to start with `department_`.
- Expects `department_name` to be lowercase, and spaces replaced with `_` underscores.

For the majority of departments this will be the case, although we must note that these **can differ** from what your department is actually called. For example, **Public Sector** would be referred to as `department_pubsec`.

If you are unsure of what your departments name in Workday is, please [open an issue](https://gitlab.com/gitlab-com/people-group/peopleops-eng/people-group-engineering/-/issues/new?issuable_template=Employment%20Templates) in the [People Group Engineering project](https://gitlab.com/gitlab-com/people-group/peopleops-eng/people-group-engineering/) and we will get back to you with the name and location of the templates for the desired role.

#### Finding Role File Names

All of the **role** files will follow the same naming convention:

`role_<role_name>.md`

- Expects the **file name** to start with `role_`.
- Expects `<role_name>` to be lowercase, and spaces replaces with `_` underscores.

The `task` and `department` directories, as well as the `role` files will **always** follow the same naming convention.

### Template Creation Full Example

To help better understand the workflow on how this works, lets walk through creating a full blown template hierarchy.

> Let's say we have a new team member, John Doe, who is joining GitLab as a **People Group Fullstack Engineer**.
> John would be in the **People Group** division, and the **People Operations** department.
> John currently lives in the **United States** and would fall under the **GitLab Inc** entity.

Now that we have this information, we can go ahead and create templates for each of the highlighted fields if we would like to. Let's create some new templates for the **onboarding tasks** regarding this role.

To get started let's navigate to the correct project and associated [onboarding tasks folder](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/tree/main/.gitlab/issue_templates/onboarding_tasks).

Now that we are in our **task folder** we can see some directories following the `department_<department_name>` naming convention. Let's hold off on creating or finding that directory as we first would like to create **entity**, **country**, **division**, and **department** specific onboarding tasks.

Entity, country, division, and department templates will **always** be added to the specific tasks folder and **not** the associated departments folder.

> I find looking at the org chart in Workday (View All Apps > Directory > My Org Chart) to be useful for clarifying how some of these hierarchical structures roll into one another and can help clarify what the file name may be called.

#### Creating an Entity Specific Task

Let's start off with creating an **entity** wide template for anyone in the **Inc** department by creating a new file in the [onboarding tasks folder](https://gitlab.com/gitlab-com/people-group/people-operations/employment-templates/-/tree/main/.gitlab/issue_templates/onboarding_tasks).

Because our entity is referenced in Workday as `Inc`, and we must follow the same naming convention, our file would be named: `entity_inc.md`.
Now we can fill in our **entity specific** onboarding tasks into the template. Once merged this will then be added to **all** team members onboarding issues in that entity.

#### Creating a Country Specific Task

Since our new team member John lives in the United States, lets go ahead and create another file. This time we follow the same naming convention and name this: `country_united_states.md`.

We can then go in and fill out the desired information we wish to include here for all onboarding team members that live in the United States. Once merged, any new onboarding issues opened for team members in the United States, will include this template along with the rest of their department/role/entity specific tasks.

#### Creating a Division Specific Task

Let's also create a division specific task, not only for John, but everyone in the **People Group**.

Once again following the same naming convention, we would create a file named: `division_people_group.md`. Once we add the desired information to this file and merge, we will begin to see this added to all onboarding issues opened for individuals within the People Group.

#### Creating a Department Specific Task

And finally, before we get to the role specific onboarding task, lets create another task for anyone that may be in the **People Operations** department.

One more time following the same naming convention as some of the previous steps, let's create a file named: `department_people_operations.md` in which again we can add our information to and merge to start seeing the changes added to onboarding issues for **all** team members in the **People Operations** department.

#### Creating the Department Directory

Because John's department would be **People Operations**, we would follow pretty much exactly the same name as our **department wide** template above. We would name this **directory** `department_people_operations`.

We can now add **role specific** templates to this directory.

#### Creating the Role Specific Task

To create the role specific task file we will need to ensure we have the team members full job title. In this case, John is joining as a **People Group Fullstack Engineer**, which would follow the naming convention from above, and end up being named: `role_people_group_fullstack_engineer.md`.

Now any one in the in the **People Operations** department that is onboarding for the **People Group Fullstack Engineer** role will include this template in the onboarding issue.

Now finally we have successfully created country, entity, division, department, and role specific tasks for the new team member. 🎉
