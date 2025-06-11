---
title: "UX Scorecards"
description: "The UX Scorecard is a process similar to a heuristic evaluation that helps identify usability issues and score a given experience."
---

## Intro and goal

The UX Scorecard is a way for us to identify and score the usability of an experience in our product based on a set of heuristics. We use UX Scorecards to gain an understanding of how a user interacts with our product and to quickly spot opportunities for improvement.

UX Scorecards should be done on every important workflow and should be repeated every 6 months from the last scorecard run. Allowing you and your team to continuously monitor the progress in making experiences better for our users. If it has been a while since a scorecard has been run in your group you should plan on doing one soon to reestablish the cadence.

As UX practitioners, we must think strategically about fixing usability challenges within the GitLab product in order to give our users a quality experience. Creating a UX Scorecard with associated recommendations enables us to identify, scope, and track the effort of addressing usability concerns within a specific workflow. When it's complete, we have the information required to collaborate with Product Managers on grouping fixes into meaningful iterations and prioritizing UX-related issues.

See all the completed scorecards below:

* [UX Scorecards](https://gitlab.com/groups/gitlab-org/-/epics/1714)
* [Category Maturity Scorecards](https://gitlab.com/groups/gitlab-org/-/epics/6930)

## About the process

The UX Scorecard process is meant to balance flexibility and consistency. There are several ways you can create your Scorecard, listed from lightest to heaviest. Select an appropriate approach based on the time you have, the priority of the workflow to users, or whether or not this is the first Scorecard for a Job To Be Done (JTBD).

### Scorecard approach

When doing a Scorecard, you have options:

#### Option A: conduct a heuristic evaluation

Review the current experience by doing a [heuristic](https://www.nngroup.com/articles/ten-usability-heuristics/) evaluation. This can be done in half a day, and it is a fast approach especially if you are working on a Scorecard for a task that has previously been scored.

Using an experience map, such as the one found in the [Scorecard Experience Template](https://www.figma.com/file/A2gorh1XtmbNMDCU8PgVP4/UX-Scorecard-journey-map-template?type=whiteboard&node-id=0%3A1&t=ghYu4VSvIoEC72XL-1), capture the screens and jot down observations. During the evaluation strive to wear the hat of the persona(s) relevant to the JTBD and while doing so try to see the UI from their perspective as if they were a new user. As you progress through your evaluation this will be easy to forget so it's recommended to put a reminder somewhere in your view, such as a post-it stuck on your monitor that says "You're a new user!"

Bear in mind that a Heuristic Evaluation is considered an expert evaluation, discount usability method. Where the "expert" in this context is a UX expert, not a user expert. It can therefore be thought of as a starting point for finding potential problems, not necessarily an endpoint. If you do find some areas of improvement then you might want your next step to be the Option B UX Scorecard outlined below as a way to validate things with real users.

#### Option B: perform a formative evaluation

You can do a [formative evaluation](https://www.nngroup.com/articles/formative-vs-summative-evaluations/) by having internal or external users try to accomplish the JTBD. The goal is to provide the participant context (the scenario of the JTBD) and listen and watch how they attempt to complete the job. What we learn may differ from participant to participant.

When doing a formative evaluation, do a "light" usability test to observe 3-5 internal or external users, as this provides valuable insights and removes subjectivity. This can be done in about a day, if the scenario you are evaluating is simple to set up in a test project. If your scenario is highly technical and requires complex customizations, plan ahead as it can take a couple of days just to set up an environment for the evaluation.

In every case,

* define the [JTBD](/handbook/product/ux/jobs-to-be-done/) prior to conducting the Scorecard.
* use our [heuristics](/handbook/product/ux/heuristics/) when evaluating the experience.
* use the [Grading Rubric](#grading-rubric) to provide an overall measurement that becomes the benchmark score for the experience.
* observation of users is preferred over a purely heuristic evaluation as it will remove subjectivity.

This is a process intended to help inform the design process and maintain a high bar of quality.

### How UX Scorecards relate to Category Maturity Scorecards

**When to create a UX Scorecard:**

* To quickly identify and prioritize usability issues and opportunities for improvement within an experience.
* When joining a new product area to become familiar with the workflows and to evaluate the experience from a fresh perspective.
* In conjunction with usability testing workflows.
* In order to evaluate the onboarding experience of your workflows.

**When to create a [Category Maturity Scorecard](/handbook/product/ux/category-maturity/category-maturity-scorecards/):**

* When more rigorous testing is required within a category in relation to a set of business requirements and/or features that are needed for the category to move up. This is a summative process (not for identifying usability concerns) that allows us to gather metrics and data that will help us understand how changes to the product impact the user experience over time. We grade the maturity of our product using this process.

## Setup

Below is a recommended step by step process for completing a UX Scorecard. Note that every scorecard is not the same. Product Designers are welcome to adapt the steps to their needs as long as they are as objective as possible and the spirit and outcome remains the same.

1. Create an (or locate the existing) epic that will contain all UX Scorecards for that stage group.
    > Example: “UX Scorecard - Create:Source Code”
1. If not already done, add the stage group epic to the [UX Scorecards -- All Evaluations](https://gitlab.com/groups/gitlab-org/-/epics/1714) epic.
1. Work with your Product Manager to identify the top jobs (in frequency or importance) for users of your stage group. Ideally, you will base this task list on user research (analytics or qualitative findings).
1. Select one of the top jobs to complete a UX Scorecard.
1. [Create an experience scoring issue](https://gitlab.com/gitlab-org/gitlab-design/issues/new?issuable_template=UX%20Scorecard%20Part%201), using the template “WIP: UX Scorecard Part 1”, and add it to the stage group epic.

This issue should have the **UX Scorecard** label. If it's related to an OKR, also apply the **OKR** label for easier tracking.

1. [Create a recommendations issue](https://gitlab.com/gitlab-org/gitlab-design/issues/new?issuable_template=UX%20Scorecard%20Part%202), using the template “WIP: UX Scorecard Part 2”, to be done after the experience scoring.
    1. If you're doing a Heuristic Buddy Evaluation skip this step and continue using the [Heuristic Buddy Scorecard template](https://gitlab.com/gitlab-org/gitlab-design/-/blob/master/.gitlab/issue_templates/Heuristic%20Buddy%20UX%20Scorecard.md)
1. Follow the instructions in the templates to complete the scorecard and use the Grading Rubric.
1. Once you have completed the evaluation and provided your recommendations, remove the "WIP:" prefix from the issue title.

If you'd like to view or edit the templates, you can find them here:

* [Part 1 - UX Scorecard](https://gitlab.com/gitlab-org/gitlab-design/blob/master/.gitlab/issue_templates/UX%20Scorecard%20Part%201.md)
* [Part 2 - Recommendations](https://gitlab.com/gitlab-org/gitlab-design/blob/master/.gitlab/issue_templates/UX%20Scorecard%20Part%202.md)
* [Heuristic Buddy Scorecard](https://gitlab.com/gitlab-org/gitlab-design/-/blob/master/.gitlab/issue_templates/Heuristic%20Buddy%20UX%20Scorecard.md)

## Grading rubric

### Overall Experience

| Badge | Summary | Description |
| ------ | ------ | ------ |
| [![Badge level A High Quality/Exceeds](https://about.gitlab.com/images/grade/grade_a.svg)](/handbook/product/ux/ux-scorecards/index.html#grading-rubric) | Exceeds Expectations | Experience exceeds expectations and the user feels the experience is delightful.<br>- Efficiency: *Extremely easy*<br>- Satisfaction: *Extremely good*<br>- Usefulness: *Strongly agree* |
| [![Badge level B Meets Expectations](https://about.gitlab.com/images/grade/grade_b.svg)](/handbook/product/ux/ux-scorecards/index.html#grading-rubric) | Meets Expectations | Meets expectations but does not exceed user needs. The user is able to reach the goal and complete the job.<br>- Efficiency: *Easy*<br>- Satisfaction: *Good*<br>- Usefulness: *Agree*  |
| [![Badge level C Average](https://about.gitlab.com/images/grade/grade_c.svg)](/handbook/product/ux/ux-scorecards/index.html#grading-rubric) | Average | The user can complete the job but it does not exceed their needs and requires unnecessary steps.<br>- Efficiency: *Neither easy nor difficult*<br>- Satisfaction: *Neither good nor bad*<br>- Usefulness: *Neither agree nor disagree*  |
| [![Badge level D Poor](https://about.gitlab.com/images/grade/grade_d.svg)](/handbook/product/ux/ux-scorecards/index.html#grading-rubric) | Poor | Experience is viewed as a poor experience and is difficult to complete.<br>- Efficiency: *Difficult*<br>- Satisfaction: *Bad*<br>- Usefulness: *Disagree*  |
| [![Badge level F Terrible](https://about.gitlab.com/images/grade/grade_f.svg)](/handbook/product/ux/ux-scorecards/index.html#grading-rubric) | Terrible | Too many users are unable to complete the job. Experience is viewed as extremely bad and extremely difficult to complete.<br>- Efficiency: *Extremely difficult*<br>- Satisfaction: *Extremely bad*<br>- Usefulness: *Strongly disagree*  |
| [![Badge level 0 Unknown](https://about.gitlab.com/images/grade/grade_-.svg)](/handbook/product/ux/ux-scorecards/index.html#grading-rubric) | Unknown | This job has yet to be graded.<br>- Efficiency: *Unknown*<br>- Satisfaction: *Unknown*<br>- Usefulness: *Unknown*  |

## Evaluating the onboarding experience

The onboarding experience of your product category can make a big difference in the adoption of GitLab stages. You can use a UX Scorecard to assess the UX of your onboarding experience and identify areas for improvement.

Onboarding can refer to many different scenarios, and this can impact the experience:

* a SaaS or self-managed user
* a brand new GitLab admin setting up a SaaS or self-managed account/instance
* a brand new GitLab user joining a company or team
* a trial user
* an existing user of GitLab joining a company or team
* an existing user of GitLab trying a feature in a new stage or category
* a GitLab feature, a set of features, or a complete DevOps stage

For example, an existing user of GitLab joining a new team might require some help on unfamiliar features, or getting oriented to the groups and projects on the team. While a brand new user would require more help getting oriented with the application itself.

### Steps to Evaluate Onboarding UX

* Think about the most important tasks/scenarios related to your JTBD.
* Identify the scenarios in which a user would do this task for the first time.
* Conduct a UX scorecard or usability test on those tasks/scenarios, incorporating each scenario.
* Focus your evaluation on the onboarding [heuristics and rubric](/handbook/product/ux/heuristics/) to rate the onboarding experience.
* Document the onboarding score and date (location TBD).

If you have a recent UX scorecard or a recent usability test with recordings, you can update these rather than starting over. For example, if you recently did a usability test on creating MRs, you can re-watch the sessions with the onboarding heuristics in mind to infer an initial score for the onboarding experience. However, it is highly recommended that at some point you intentionally evaluate the onboarding experience.
