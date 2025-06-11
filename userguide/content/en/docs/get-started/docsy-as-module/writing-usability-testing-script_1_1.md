---
title: "Writing a website usability testing script"
description: "How to create a usability testing script at GitLab"
---

## What is a usability study?

A usability study, or usability testing, employs a test script to ensure a systematic approach for:

- Testing whether users can carry out scripted tasks successfully
- Finding what their preferences for completing a task are
- Uncovering opportunities to improve the product

## What is a testing script?

At the heart of a usability study stands the testing script, or test script, which the moderator follows during test sessions in order to execute task based usability testing and ensure consistency.

A test script:

- **Helps to make sure you will be covering what you set out to cover.** It helps to ensure that you meet your usability study research objectives and that you come out of the study with the answers you need to make progress on your project.
- **Keeps you consistent between sessions.** It’s important to make sure you ask the same questions of all of your participants to maintain a rigorous methodology. It also makes your life easier during analysis.
- **Assists with collaboration.** In particular, it helps others more easily review your work.
- **Helps you keep time during sessions.** It’s important to keep your research sessions to the promised length.

It is virtually impossible to practice solid usability study research without having a test script. Don’t go in without one.

## How to write your first task based usability testing draft

Use this [Usability Testing Script template](https://docs.google.com/document/d/135OtPVzguF8ZmbtfVL9hqVeehcN48IxWceWr5g070T8/copy) (internal access only) as your starting point for writing a first draft for your usability study:

A usability study script typically follows 4 main parts:

1. [Introduction](#introduction)
1. [Warm-up questions](#warm-up-questions)
1. [Tasks](#tasks)
1. [Wrap-up questions and closing words](#wrap-up-questions-and-closing-words)

Here is a bit about each part (you may want to read this while going over the template).

### Introduction

This is where you introduce yourself and other attending members of the team. You also tell the participant of the usability study how the session is going to go and double check that you have their consent for recording and sharing the session.

Use the introduction to build rapport with the participant of the usability study. People are often hesitant, nervous, or even a little standoffish at the beginning of a research session. Simple comments such as "Oh, I've been to where you live and I loved it" can go a long way to making people feel comfortable and helping the study to run more smoothly.

Remember to distance yourself from the solution you are testing. Do not present yourself as the person who is involved in creating the concept that’s being tested (even if you were). Emphasize that the participant won’t hurt your feelings regardless of what they say during the testing. Remind them that we are testing the experience and not them. Also remind them that the main purpose of this exercise is to receive their candid feedback.

### Warm-up questions

Warm-up questions are meant to further break the ice, as well as get relevant background information on the participant.

Here are some standard warm up questions to consider:

- What’s your current role?
- How long have you been in that role?
- Do you have experience dealing with [topic of study]?
- Have you ever used GitLab? If so, what for?

**Tip 1**: Even if you don’t have anything you want to ask, have at least 2 quick questions here, as it will help to break the ice and make the participant feel more at ease.

**Tip 2**: Consider asking questions that will help you to understand the participant’s mental model and expectations prior to interacting with your designs (for example, "We have a page called Security Dashboard. What tasks would you expect to be able to accomplish with the help of that page?").

**Tip 3**: If needed and you have the time for it, you might include some additional interview questions here that would benefit either this study or a different one. (If it’s a different study, make sure it shares the same participant profile with this one!) In particular, consider asking questions that might be used later on as part of a persona or a JTBD study (for example, "What would you say are your top 3 tasks?").

### Tasks

This is the heart of the usability study script and the part that takes the longest to write. Usability studies usually (but not always) consist of 3–4 tasks.

**How to define good tasks**
When sitting down to write your tasks, you should already have [defined your research goals, objectives and hypotheses](/handbook/product/ux/ux-research/defining-goals-objectives-and-hypotheses/). To form good usability tests, start by going over your research objectives that detail what you and your stakeholders want to get out of the study, and consider how to best translate them into user tasks.

You should also have clear, agreed-upon measures to use when determining how a task, experience, or design/prototype performed. You need to define what Pass/Fail looks like, so you can determine when a participant has successfully completed the usability task.

The key thing to remember when moving from objectives to tasks is that **your tasks should reflect realistic user goals**.

For example, perhaps one of your objectives entails finding out whether users can quickly locate a CTA (call to action). But since no user ever goes into a website with the goal of locating a button, your task should never be, “Can you find and click the button?” Rather, it should be about *why* the participant might want to click the button in the first place (for example, “You want to enable feature X for your project. Can you do that please?”).

Another objective might be identifying potential improvements to the flow. Since real users don't generally go into websites with the sole purpose of finding faults in it, instead of asking the participant, “Can you please complete the following steps and tell me what we should improve?”, ask them to perform a task that would necessitate them attempting the flow, and observe them carefully to see where they fail, struggle, or hesitate.

**Tip**: Avoid using any words that are in the UI. When a task is written with easily identifiable words in the UI, participants tend to look for those words in the UI to complete the task.

Finally, pay close attention to how you phrase your tasks to avoid bias, leading the participant, and other common pitfalls.

- It is important to balance clarity and leading words when writing a scenario. The words you use should be words that are familiar to your participants. If you are not sure what those words should be, you should reach out a Researcher for guidance and feedback.
- If you use words which your participants use and still find they are scanning the interface to complete the task(s), change how you present the task. Start each task by asking the participant to describe the thing you are wanting them to do in the system and walk you through how they would normally do that task. Then you can use the words the participant has just used with you to direct them to do the task.
- It is imperative to ensure your participant fully understands the task given to them before they begin the task. As the facilitator, you have to balance the questions your participant asks when seeking clarification on the task, with not providing information which could be used to successfully complete the task.
- A usability study, or usability tests, should be focused on evaluating if the participant can accomplish the task given, not exploring how they might understand the task. If your participant can not proceed during some point of the task, ask them how they would normally proceed and encourage them to try that option.

To learn more about writing good tasks, we highly recommend reading [Write Better Qualitative Usability Tasks: Top 10 Mistakes to Avoid](https://www.nngroup.com/articles/better-usability-tasks/).

**Tip 1**: For each task, add a link in your script for the prototype/webpage that’s relevant for that task. Not only will it help your teammates who will review the script to understand what the task is about, but it will also allow you to quickly resend the relevant link should the participant need it again.

**Tip 2**: Consider noting under each task, in light gray, ‘What we expect them to do’ (for example, "Follow the CI pipeline and go into the SAST job output") to remind the moderator of the possible paths for completing the task. This will assist the moderator in helping participants to recover, in case they fail a task which is a prerequisite for the following task.

**How to order your tasks**

- If your tasks can build on top of each other in a sensible way, make sure you order your tasks to reflect that. For example, Task 1 could be around navigating to a certain page and Task 2 around reviewing that page.
- Cluster together tasks that belong to the same topic or area of the product.
- As a general rule, start with the tasks that matter most to you. It will take time mastering moderating usability sessions, and it is common to fall behind on time when you’re just starting out. Therefore, start with what matters most to you, and leave what’s merely nice to have to the end of the test.

**How to structure each usability testing scenario**

For each task, consider whether some setup is required to provide context and appropriate motivation for the participant. If so, describe a relevant scenario prior to giving the task. Let's look at some usability test cases examples:

Scenario: “Let’s say this is a project you’re working on, and you just committed some new code.”
Task: “Please test to see whether that code contains any security vulnerabilities.”

Then, consider adding some more specific questions and prompts that the moderator can utilize as the task unfolds, in case the participant doesn't bring up these topics on his or her own. Examples:

- What are you seeing on this page?
- What is this page about?
- Is SAST running right now?
- What would you do next, if anything?

### Wrap-up questions and closing words

Here, you can get the participant’s broad impressions about what they saw and experienced. These are some standard questions to consider:

- What do you think about this process you just went through?
- How does what you just experienced with GitLab fare in comparison to the tool you normally use?
- Anything else you’d like to add?

You can also include qualitative survey questions. Make sure to follow up with "Why did you choose that answer?" For example:

1. Completing the [insert task] was easy.
     - I completely agree
     - I somewhat agree
     - I’m neutral
     - I somewhat disagree
     - I completely disagree

Conclude the script with thanking your participant and mentioning when they are expected to get their compensation.

## You've completed your draft script. Now what?

### 1. Review your usability study draft

Once your draft is more or less done, give it another read and ask yourself:

- Does it cover the project’s objectives?
- Does it make sense timewise? Estimating time will get easier with experience. Keep in mind that usability tests should normally take between 30–45 minutes.

### 2. Let others review your draft

Edit as needed based on feedback received from your stakeholders/teammates.

### 3. Test the test

Run a pilot test with a colleague or internal participant to make sure your task instructions are clear and that you’re keeping time. Edit as needed, and notify your stakeholders of any big changes.

## A crash course on remote, moderated usability testing

{{< youtube "5MvpxvN9vLU" >}}
