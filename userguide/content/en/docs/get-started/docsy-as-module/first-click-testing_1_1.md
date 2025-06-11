---
title: "First click testing for navigation"
---

## What is first click testing?

First click testing is used to determine if participants are able to find something they're looking for in an interface within their first click. Assessing the first click is important because it is much more likely that a user will succeed in completing a task if they're able to click on the right path initially. First click testing will be able to tell you if participants are clicking the intended area for a given scenario. If they don’t, you can learn where else they would click, and why.

## Why should I use this method?

You have a navigation design that’s in the very early stages (it may just be a static mock or even a sketch) and you want to know if participants are able to correctly identify where to go to find certain elements/information, and if not, identify where they are going instead.

**Goal:** Learn where participants would initially click to complete a task and why. This testing is earlier than testing broader usability and will help to validate design ideas for navigation changes.

## What types of research questions can this method answer?

- *Do participants know where to first click to get to X?*
- *Where do participants click for a given task? Why?*
- *Does the proposed layout make sense?*
- *Does the hierarchy of your information architecture make sense?*
- *Do participants know where they are in the application?*
- *Are UI elements standing out to participants?*

## Methodology details

**Type of Facilitation:** Unmoderated

**Fidelity required:** static images, even a sketch if there is enough detail

**Recommended sample size:** 30* participants. There are additional factors that impact the sample size indicated for each study, please work with your UXR to determine this.

**Data to collect:**

- Quantitative: The table below outlines two quantiative metrics to capture in a first click test. This data should be explained further with qualitative insights to understand why participants made the selections they did. The goal is to understand their behavior to learn why the design is performing the way it is.

|Metric|Details|What it measures|
|----|----|----|
|Findability rate |If there are multiple correct options, a breakdown of how often each choice was selected (%)|Task success (can participants find the correct item?)|
|Confidence |1 = Not at all confident, 2 = Not very confident, 3 = Somewhat confident 4 = Very confident, 5 = Extremely confident) <br> And why they chose that rating| How confident participants are with their choice|

- Qualitative: Collect qualiative feedback to add understanding to their answers:
  - Ask **why** participants made their selection (open-ended question): Why did you click there?
  - Ask for their expectation for the selection: What would you expect to see after clicking there?

**Recommended testing platform:** Qualtrics

## How to set up a first-click test for navigation

- First, determine which tasks that you want your participants to complete. Choose tasks relevant to what you’re testing from the Core Navigation tasks list (in process).
- It’s recommended to have five tasks or less for the first click test.
- Randomize the order of tasks if you have more than one (unless tasks are dependent on each other and only make sense in a certain order). You can set randomization up easily within Qualtrics.
- A Navigation First Click Testing template is located in Qualtrics, within the [UX Research & Product library (internal link)](https://gitlab.eu.qualtrics.com/Q/SurveysSection?ContextLibraryID=GR_6ziMa2ooJx4Y6SF&LibraryID=GR_6ziMa2ooJx4Y6SF). For more details on how this template was set up or how to use Qualtrics for a first click study, please refer to the Creating design evaluations in Qualtrics handbook page.

## How to report results

To report brief/initial findings in Slack or in an Issue, please use the following format and utilize this template to create a chart:

- % of participants (A out of BB) correctly clicked the first item (note which item/items would be counted as correct).
- For the correct selections, the average confidence level was X/Z
- Note any themes about their correct choice “6 participants mentioned that they would expect to find X in choice B because…”
- Other common incorrect first click choices were:
  - Choice B: 27% of participants (6 out of 20)
  - Choice C: 27% of participants (6 out of 20)
- If there is anything to note about their confidence level and incorrect choices: Interestingly, participants felt more confident on average in choice B (3.5) than Choice A (2)
- Note any themes about their incorrect choice “4 participants mentioned that they would expect to find X in choice B because…”
- Can note any other interesting finding or verbatim.

If there's any context that you can provide in your interpretation of the results, that will be helpful. For example, if participants selected Merge Requests in the left sidebar, you can add that the common incorrect first click in this area may be due to the task calling out a merge request.
