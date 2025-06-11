---
title: "Creating a first click study in Qualtrics"
description: "This page details how to set-up first click tests in Qualtrics."
---

These instructions allow you to create a first click study, using Qualtrics, to examine what a participant would click first in the interface to complete their intended task.

A combination of [Text/ Graphic Question](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/static-content/descriptive-text-and-graphic/), [Heatmap](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/specialty-questions/heat-map/), and [Timing](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/advanced/timing/) question types are used to create task scenarios and record the respondent’s first click on the image.

Here's how to set that up:

**Step 1:** After logging into Qualtrics, click on "Create a new project" that appears in the bottom left of the side panel that is called "Welcome to XM".

**Step 2:** Choose to create a blank survey project

**Step 3:** Add your task scenario using the Text / Graphic question type
You can skip Steps 3 through 6 below by importing the "Heat Map Question Block" from the Questions folder in the [UX Research & Product Question Library](https://www.qualtrics.com/support/survey-platform/account-library/survey-library/#UsingABlockOrQuestionFromTheLibrary)

- Use a Text/ Graphic question type to create a place to describe your task scenario:
  - Create a new survey block
  - Select the +Add new question button that appears in the bottom right-hand corner of your new question block
  - When you've clicked into that question, you'll see the Question Type options displayed in the left panel
  - From the Question Type dropdown, select [‘Text / Graphic’](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/static-content/descriptive-text-and-graphic/)
  - Insert your task scenario in place of the text 'Click to write the question text'

**Step 4:** Add the graphic where you'd like your participants to perform their first click using the [Heat Map question type](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/specialty-questions/heat-map/)

- Use the following steps to set up a Heatmap question:
   1. Select the +Add new question button that appears in the bottom right-hand corner of each question block
   1. From the +Add new question dropdown, select ‘Heat Map’
   1. Click ‘Select a graphic to use for this question’
   1. Select a graphic you’ve already uploaded to your Qualtrics account (or upload a new one from your computer)
   1. Set the number of clicks each respondent may make on the image (‘1’ is the default) in the left side pannel
      - Note: If the respondent clicks more than the allowed number of times, their oldest click will be replaced with the newest one.
        - If you plan to analyze the data based on the user’s initial instinct (one click only), you should allow one click.
        - If you want to evaluate multiple correct locations or see the user’s first click and last click, you should allow more than one click.
   1. Click ‘Add Region’
      - Adding regions will help you calculate the percentage of users who clicked in the correct location more efficiently.
      - If you do not add regions for the correct locations, all the clicks will be grouped as "Other" in the data report from Qualtrics.
      - Regions are not required for a Heat Map question, but they can make reporting easier.
   1. Click and drag the region to move it, or click and drag the corners to resize it.
   1. Click the text box beneath the region to type a region name (make sure to use a descriptive name as this name will not display to respondents, but will be used in your survey results).
   1. Create a region for each area of content your participants might select (e.g., a button or a sub-heading in the Navigation panel)

**Step 5:** Add a Timing question to track how long participants spend on the page with your first click question

- Select the +Add new question button that appears in the bottom right-hand corner of each question block
- From the +Add new question dropdown, select ‘Timing’
- The timing question will not be displayed to participants, though it will show up if you preview the survey. That is done so that you can be sure the question is working.
- Insert a [page break](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/add-page-break/) after the timing question by hovering underneath the question and clickging "+Add page break" when that option appears

**Step 6:** Add a question that will help you understand why users clicked where they did or how they felt about their first click
Knowing why users clicked where they did will help you understand how to adjust your designs.

- Add a Text Entry question to have the user explain their motivation for clicking in a certain area. Example: Why did you click there? (open text)
- You can also use a [Multiple Choice](https://www.qualtrics.com/support/survey-platform/survey-module/editing-questions/question-types-guide/standard-content/multiple-choice/) question to have them rate their level of confidence.
  - Example: How confident are you that you clicked the correct location?
    - Completely confident
    - Somewhat confident
    - Neutral
    - Somewhat unsure
    - Completely unsure
