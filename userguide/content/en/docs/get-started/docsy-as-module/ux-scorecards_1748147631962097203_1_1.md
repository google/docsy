---
title: "UX Scorecards"
description: "The UX Scorecard is a process similar to a heuristic evaluation that helps identify usability issues and score a given experience."
---

## Intro and goal

The UX Scorecard is a way for us to identify and score the usability of an experience in our product based on a set of heuristics. We use UX Scorecards to build empathy with users and to quickly spot opportunities for improvement.

UX Scorecards should be done on every main job and should be repeated on a regular cadence. Consider refreshing the UX Scorecard every 6 months, or after significant changes or improvements are made. This will allow you and your team to continuously monitor the progress in making experiences better for our users. If it has been a while since a scorecard has been run in your group you should plan on doing one soon to reestablish the cadence.

As UX practitioners, we must think strategically about fixing usability challenges within the GitLab product in order to give our users a quality experience. Creating a UX Scorecard with associated recommendations enables us to identify, scope, and track the effort of addressing usability concerns within a specific workflow. When it's complete, we have the information required to collaborate with Product Managers on grouping fixes into meaningful iterations and prioritizing UX-related issues.

See all the completed scorecards below:

* [UX Scorecards](https://gitlab.com/groups/gitlab-org/-/epics/1714)
* [Category Maturity Scorecards](https://gitlab.com/groups/gitlab-org/-/epics/6930)

## About the process

A UX Scorecard can be completed in 1-2 days. Some workflows might take a little longer but generally, if the process takes longer than this, then consider reducing the scope. The UX Scorecard process is meant to balance flexibility and consistency. There are several ways you can create your Scorecard, listed from lightest to heaviest. Select an appropriate approach based on the time you have, the priority of the workflow to users, or whether or not this is the first Scorecard for a job.

### Scorecard approach

When doing a Scorecard, you have options:

#### Option A: conduct a heuristic evaluation

Review the current experience by doing a [heuristic](https://www.nngroup.com/articles/ten-usability-heuristics/) evaluation. This can be done in half a day, and it is a fast approach especially if you are working on a Scorecard for a task that has previously been scored.

During the evaluation strive to wear the hat of the persona(s) relevant to the job and while doing so try to see the UI from their perspective as if they were a new user. As you progress through your evaluation this will be easy to forget so it's recommended to put a reminder somewhere in your view, such as a post-it stuck on your monitor that says "You're a new user!"

Bear in mind that a Heuristic Evaluation is considered an expert evaluation, discount usability method. Where the "expert" in this context is a UX expert, not a user expert. It can therefore be thought of as a starting point for finding potential problems, not necessarily an endpoint. If you do find some areas of improvement then you might want your next step to be the Option B UX Scorecard outlined below as a way to validate things with real users.

#### Option B: perform a formative evaluation

You can do a [formative evaluation](https://www.nngroup.com/articles/formative-vs-summative-evaluations/) by having internal or external users try to accomplish the job. The goal is to provide the participant context (the scenario) and listen and watch how they attempt to complete the job. What we learn may differ from participant to participant.

When doing a formative evaluation, do a "light" usability test to observe 3-5 internal or external users, as this provides valuable insights and removes subjectivity. This can be done in about a day, if the scenario you are evaluating is simple to set up in a test project. If your scenario is highly technical and requires complex customizations, plan ahead as it can take a couple of days just to set up an environment for the evaluation. Our preferred set up is an unmoderated study, but you may also moderate if that will result in a better evaluation.

In every case,

* define the [job](/handbook/product/ux/jobs-to-be-done/) prior to conducting the Scorecard.
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

## How to do a UX Scorecard

Note that every scorecard is not the same. Product Designers are welcome to adapt the steps to their needs as long as they are as objective as possible and the spirit and outcome remains the same.

Use the [UX Scorecard Template](https://gitlab.com/gitlab-org/gitlab-design/issues/new?issuable_template=UX%20Scorecard) in the GitLab Design project to create the issue and follow the instructions in the template. If you adapt the method, note that in the description.

If you'd like to view or edit the templates, you can find them here:

* [UX Scorecard](https://gitlab.com/gitlab-org/gitlab-design/blob/master/.gitlab/issue_templates/UX%20Scorecard.md)

* [Heuristic Buddy Scorecard](https://gitlab.com/gitlab-org/gitlab-design/-/blob/master/.gitlab/issue_templates/Heuristic%20Buddy%20UX%20Scorecard.md)

## Grading rubric

### Overall Experience

Following each scenario that is evaluated, a set of three questions are asked to help determine the appropriate score, or grade, to attribute to the scorecard.

#### Question 1: Single Ease Question (SEQ)

“Overall, this scenario was…”

* 5 - Extremely easy
* 4 - Easy
* 3 - Neither easy nor difficult
* 2 - Difficult
* 1 - Extremely difficult

#### Question 2: Satisfaction rating

“How would you rate the quality of this experience?”

* 5 - Extremely good
* 4 - Good
* 3 - Neither good nor bad
* 2 - Bad
* 1 - Extremely bad

#### Question 3: UMUX Lite, adjusted (Useful)

“You just experienced our implementation of `<Scenario>`. How would you agree or disagree with the following statement:

`<Scenario>` has the features I need for what I need to do in my own work.”

* 5 - Strongly agree
* 4 - Agree
* 3 - Neither agree nor disagree
* 2 - Disagree
* 1 - Strongly disagree

#### Calculating the score

To determine the overall score, use the [UX Scorecard Calculations sheet](https://docs.google.com/spreadsheets/d/1wv3OW3hFGGckTUVwOe5HcRGuc-wV2szwtBHoxhx2f0Y/edit?usp=sharing) (internal only).

| Badge | Summary | Description |
| ------ | ------ | ------ |
| [![Badge level A High Quality/Exceeds](https://about.gitlab.com/images/grade/grade_a.svg)](/handbook/product/ux/ux-scorecards/#grading-rubric) | High Quality / Exceeds Expectations | Experience exceeds expectations and the user feels the experience is delightful.<br>- Ease: *Extremely easy*<br>- Satisfaction: *Extremely good*<br>- Usefulness: *Strongly agree* |
| [![Badge level B Meets Expectations](https://about.gitlab.com/images/grade/grade_b.svg)](/handbook/product/ux/ux-scorecards/#grading-rubric) | Meets Expectations | Meets expectations but does not exceed user needs. The user is able to reach the goal and complete the job.<br>- Ease: *Easy*<br>- Satisfaction: *Good*<br>- Usefulness: *Agree*  |
| [![Badge level C Average](https://about.gitlab.com/images/grade/grade_c.svg)](/handbook/product/ux/ux-scorecards/#grading-rubric) | Average | The user can complete the job but it does not exceed their needs and requires unnecessary steps.<br>- Ease: *Neither easy nor difficult*<br>- Satisfaction: *Neither good nor bad*<br>- Usefulness: *Neither agree nor disagree*  |
| [![Badge level D Poor](https://about.gitlab.com/images/grade/grade_d.svg)](/handbook/product/ux/ux-scorecards/#grading-rubric) | Poor | Experience is viewed as a poor experience and is difficult to complete.<br>- Ease: *Difficult*<br>- Satisfaction: *Bad*<br>- Usefulness: *Disagree*  |
| [![Badge level F Terrible](https://about.gitlab.com/images/grade/grade_f.svg)](/handbook/product/ux/ux-scorecards/#grading-rubric) | Terrible | Too many users are unable to complete the job. Experience is viewed as extremely bad and extremely difficult to complete.<br>- Ease: *Extremely difficult*<br>- Satisfaction: *Extremely bad*<br>- Usefulness: *Strongly disagree*  |
| [![Badge level 0 Unknown](https://about.gitlab.com/images/grade/grade_-.svg)](/handbook/product/ux/ux-scorecards/#grading-rubric) | Unknown | This job has yet to be graded.<br>- Ease: *Unknown*<br>- Satisfaction: *Unknown*<br>- Usefulness: *Unknown*  |

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
