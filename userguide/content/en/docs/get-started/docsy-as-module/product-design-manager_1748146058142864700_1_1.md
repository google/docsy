---
title: "Product Design Manager Workflows"
description: "We support the business of GitLab by becoming experts in our stage group, educating ourselves about the entire product, and staying engaged with user and business goals. This page contains workflows specifix to Product Design Managers"
---

## Requesting a borrow

A [borrow](/handbook/product/product-processes/#borrow) is used when a team member is shifted from one team to another temporarily or assisting other teams part-time for an agreed-upon period of time.

There are two Borrow request options. Choose the one that makes the most sense for your situation.

- If multiple members (within or including outside of UX) are part of the borrow request, use the [Borrow issue template](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/Borrow-Request.md).
- If a borrow is limited to a single member of UX (such as a Product Designer) and no other stable counterparts, use the [Borrow Lite issue template](https://gitlab.com/gitlab-com/Product/-/blob/main/.gitlab/issue_templates/Borrow-Request-Lite.md).

Before a borrow takes place, make sure to have it approved by the appropriate director (Product Design, UX Research, or Technical Writing).

Utilizing these issues will help us understand the frequency and duration of borrows throughout the year. Tracking occurs by appending the `UX Borrow` label to each issue request.

## Team Skills Matrix

We conduct an annual team skills analysis based on a [process recommended by Nielsen-Norman](https://www.nngroup.com/articles/skill-mapping/).

The primary goal of the skills analysis is to inform individual team member's growth plans. Secondary benefits are that it allows us to see our strengths as a team, helps to identify team trainings that would benefit a large portion of the team, helps us identify strengths we'd like to add when hiring new team members and can also act as a resource for matching mentors and/or design pairs.

### How to conduct the team assessment

1. Make a copy of the [GitLab Team Skills Matrix (private to GitLab)](https://docs.google.com/spreadsheets/d/1MZsalURuFy60mNCBlzkQ2hhPSWsuSXtjJ-NlFac7jCA/edit?usp=sharing).
1. Review the template to make sure it makes sense for your team. Do consider changes carefully and discuss with other managers. We want to be able to have consistency so we can view them across multiple design teams.
1. Add your team members names to the spreadsheet.
1. Introduce this process to your team by sharing this page, the NN article and the GitLab focused template.
1. Ask team members to rate themselves (current and future state).
1. Review with your team member. You may suggest adjustments based on your observations, but ultimately this is a self-assessment.
1. Share the results in an issue -[Example Issue](https://gitlab.com/gitlab-org/gitlab-design/-/issues/1674).
1. To follow up on the results, the team members and their manager can identify opportunities to fill gaps where team members said they want to improve.
1. Repeat in Q1 on a yearly cadence.

## Team Member Updates

Whenever you need to update the area of the product a team member is supporting, such as on the [Product Categories page](/handbook/product/categories), you'll generally need to update or review the following pages and projects. For all updates you'll want to confirm that the name matches the name used on the team page.

### Section-level updates

For section-level updates you'll want to do the following:

1. Go to the [www-gitlab-com project > Repository > Files](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master)
1. Select the `data` directory
1. Scroll down and click on the `sections.yml` file
1. Select the editor type of your choice
1. Locate the person you need to update, make the change, commit/create an MR, and follow the MR process from there

### Group-level updates

For group-level updates you'll want to do the following:

1. Go to the [www-gitlab-com project > Repository > Files](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master)
1. Select the `data` directory
1. Scroll down and click on the `stages.yml` file
1. Select the editor type of your choice
1. Locate the person you need to update, make the change, commit/create an MR, and follow the MR process from there

### Update Team Member (Such as to remove/add from UX MR Reviewer Roulette)

Go to the [www-gitlab-com project > Repository > Files](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master) - [Documentation](https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/team_members/person#team-member-data-schema)

1. Navigate to the `data/team_members/person/product` directory
1. Locate the correct alphabet letter folder according to the team members first initial in their first name
1. Click on their .yml file
1. Select the editor type of your choice
1. **To remove from** the UX MR Reviewer Roulette bot:
    1. Delete the `gitlab: reviewer UX` line under the `projects:` section
    1. Commit/create an MR, and follow the MR process from there
1. **To add to** the UX MR Reviewer Roulette bot:
    1. Revert the original MR where the team member was removed or
    1. Find their .yml file again following the above steps
    1. Add back the `gitlab: reviewer UX` line under the `projects:` section
    1. Commit/create an MR, and follow the MR process from there

### Triage reports

In the [triage-ops project](https://gitlab.com/gitlab-org/quality/triage-ops), open an MR to add or remove team members from receiving triage reports. The file to edit is [group_definition.yml](https://gitlab.com/gitlab-org/quality/triage-ops/-/blob/383402bff66bcdb45e842f7f8dfb1b77a500c650/group-definition.yml).

### Retrospectives

In the [GitLab team retrospective group](https://gitlab.com/gl-retrospectives), find the team members section and group, and add and remove team members there. This step is required so that confidential issues can be seen by team members.

Also, open an MR to add or remove team members in the [team.yml](https://gitlab.com/gitlab-org/async-retrospectives/-/blob/master/teams.yml) file in [async-retrospectives](https://gitlab.com/gitlab-org/async-retrospectives).

### Growth & Development

When working with your team members on any Growth & Development requests, please refer to the [Growth and Development Benefit guidelines](/handbook/people-group/learning-and-development/growth-and-development/). After you have approved the request, please also remember to add the expense to the [UX Growth and Development Expenses spreadsheet](https://docs.google.com/spreadsheets/d/1hLm_XEX3Vux1Co_dMY5A74io8oqXArDAX6MonlBOYNg).
