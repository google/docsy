---
title: "Usability testing"
description: "Conducting usability testing at GitLab"
---

## Usability at GitLab

The term "usability" can mean a variety of things. At GitLab, we use the following definition of usability when we conduct user research and design our product:

**To be usable, an interactive system should be useful, efficient, effective, satisfying, and learnable.**

- **Usefulness** is the degree to which our product enables a user to achieve his or her goals.
- **Efficiency** is the quickness with which the user's goal can be accomplished accurately and completely in a period of time.
- **Effectiveness** refers to the extent to which the interactive system behaves in the way that users expect it to and the ease with which users can use it to do what they intend.
- **Learnability** is a part of effectiveness and has to do with the user's ability to operate the interactive system to some defined level of competence after some predetermined amount and period of training (which may be no time at all). It can also refer to the ability of infrequent users to relearn the system after periods of inactivity.
- **Satisfaction** refers to the user's perceptions, feelings, and opinions of the product.

*Note: This definition is based on information from the [Handbook of Usability Testing](https://www.amazon.com/Handbook-Usability-Testing-Conduct-Effective/dp/0470185481) and the [International Usability and UX Qualification Board curriculum](https://uxqb.org/en/documents/cpux-f-en-curriculum/).*

## Usability testing

Usability testing is the process of evaluating a product experience with representative users. The aim is to observe how users complete a set of tasks and to understand any problems they encounter. Since users often perform tasks differently than expected, this qualitative method helps to uncover why users perform tasks the way that they do, including understanding their motivations and needs. At GitLab, usability testing is part of [solution validation](/handbook/product/ux/ux-research/solution-validation-and-methods/).

We also conduct regular [Usability Benchmarking](/handbook/product/ux/ux-research/usability-benchmarking/) studies at GitLab. These are also focused on usability, and are used to set performance and ux benchmarks for specific tasks and workflows across GitLab. As such, they are much more rigorous and time-consuming than a normal usability test ought to be.

### Different types of usability testing

Generally speaking, we can differentiate between:

**Moderated versus unmoderated usability testing**

Moderated tests have a moderator present who guides participants through the tasks. This allows them to have a conversation about their experience, and it helps to find answers to "Why?" questions.

Conversely, users complete [unmoderated usability](/handbook/product/ux/ux-research/unmoderated-testing/) tests on their own without the presence of a moderator. This is helpful when you have a very direct question.

| Moderated usability testing                                                                                                                                                                                         | Unmoderated usability testing                                                                                                                                                       |
|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Complex questions/WHY? Questions, such as:<br><br>  "Why do users experience a problem when using a feature?"<br>  "Why are users not successful in using a feature?"<br>  "How do users go about using a feature?" | Direct questions, such as:<br><br>  "Do users find the entry point to complete their task?"<br> "Do users recognize the new UI element?"<br> "Which design option do users prefer?" |

**Formative versus summative usability testing**

Formative usability tests are continuous evaluations to discover usability problems. They tend to have a smaller scope, such as focusing on one specific feature of a product or just parts of it. Oftentimes, prototypes are used for evaluation.

Summative usability tests tend to be larger in scope and are run with the live product. They are useful if you lack details on why users are experiencing a particular problem or want to validate in the first place how easy it is to use.

### Steps for conducting a usability test

1. [Establish your research question](/handbook/product/ux/ux-research/defining-goals-objectives-and-hypotheses/#step-1---start-thinking-of-a-problem).
1. Identify the tasks you want to focus on for your usability test.
    - There is no magic number when it comes to how many tasks to include. A guideline is to have [3 - 4 tasks](/handbook/product/ux/ux-research/writing-usability-testing-script/#tasks), as this ensures that participants don't get tired and exhausted. Another aspect to consider is that unmoderated test sessions should be 15 - 20 minutes max and moderated sessions 60 minutes max.
    - The key thing to remember when writing your tasks is that [they reflect realistic user goals](/handbook/product/ux/ux-research/writing-usability-testing-script/#tasks). Taking the JTBD into account when creating your tasks helps keep the focus on user goals. See these [tips for writing good tasks](/handbook/product/ux/ux-research/writing-usability-testing-script/#tasks) that include examples.
1. Define what success looks like.
    - Before testing with users, reach agreement among your stakeholders about what success looks like, such as the target completion rate you are aiming for. For example, a completion rate greater than 80% translates to a Complete or Lovable [CM scorecard level](/handbook/product/ux/category-maturity/category-maturity-scorecards/#calculating-the-cm-scorecard-score). This article from [MeasuringU](https://measuringu.com/task-completion/) suggests using 78% as a baseline, whereas a minimum of 92% would satisfy a completion rate in the top quartile. However, it's not unreasonable to aim for even 100%; it's up to each team to determine the success criteria required for each study and each feature.
1. [Identify your target audience and initiate recruiting](/handbook/product/ux/ux-research/recruiting-participants/).
1. [Prepare your prototype or demo environment](/handbook/product/ux/category-maturity/category-maturity-scorecards/#step-2-prepare-your-testing-environment).
1. [Write your test script, including tasks and metrics to collect](https://docs.google.com/document/d/135OtPVzguF8ZmbtfVL9hqVeehcN48IxWceWr5g070T8/copy).
    - Set up your test to measure these [usability factors](/handbook/product/ux/ux-research/usability-testing/#usability-factors-to-measure), as this will help to measure improvements consistently over time and to assess their impact on [system usability](/handbook/product/ux/performance-indicators/system-usability-scale/). There are many other metrics that you can measure to understand usability problems, such as error rates or number of times a user needed help. If you find them helpful for your research topic, feel free to use them.
    - Remind participants to think aloud as they go through the tasks, especially in an unmoderated test.
    - Take a look at these more [detailed tips and tricks](/handbook/product/ux/ux-research/writing-usability-testing-script/) on how to write an excellent usability test script.
    - If you run an unmoderated usability test on UserTesting, create a test from the [usability metrics template](https://app.usertesting.com/share/314d003c-cba4-4fde-91bb-c524a169addd), located in the "Account templates" section. UserTesting has native options for *task success* and *difficulty* to capture metrics that are similar to ours, but these are not the same usability metrics needed for our studies. Please use the options listed in this template instead.
    - If you run an unmoderated usability test that will run under 5 minutes, toggle the Short test option *on* when building your test plan.
1. [Run a pilot session to test the usability test](/handbook/product/ux/ux-research/writing-usability-testing-script/#3-test-the-test).
1. [Analyze your research data](/handbook/product/ux/ux-research/analyzing-research-data/)
    - For each task, synthesize how many users succeeded or failed, and why they failed.
    - For each task, calculate the average score for the *efficiency* question. Look for patterns on why they gave a score.
    - Calculate the average score for the *satisfaction* and *usefulness* questions. Look for patterns on why they gave a score.
    - Note down any other interesting observations you had.
1. [Document your insights in Dovetail](/handbook/product/ux/dovetail/#the-ux-research-teams-guide-to-documenting-insights-in-dovetail). If you have actionable insights, ensure they are also [documented in the GitLab UX Research project](/handbook/product/ux/ux-research/research-insights/#how-to-document-actionable-insights).
1. Decide on the next steps.
    - Any [actionable insights](/handbook/product/ux/ux-research/research-insights/#actionable-insights) require a follow up. Work with your counterparts to determine priority for the identified usability problems. Remember to conduct another usability study to validate your proposed solution.

### Usability factors to measure

To learn more about these factors, see [our definition of usability](#usability-at-gitlab).

#### Effectiveness

- What's being measured?
  - Effectiveness can be determined by calculating the pass rate. This shows the success or completion rate of each task.
- How is it measured?
  - The pass rate can be determined by dividing the number of participants that were able to complete the task by the total number of participants.
  - Ensure that you are observing and documenting *why* participants are failing as well.
- Why are we measuring it?
  - We want users to succeed in reaching their goals. Understanding why and where they fail will help us improve the experience.

#### Efficiency

- What's being measured?
  - Efficiency can be measured by understanding the participants perception of how easy a task is.
- How is it measured?
  - After each task, ask the [Single Ease Question](/handbook/product/ux/category-maturity/category-maturity-scorecards/#the-3-questions-we-ask).
    - *"Overall, this task was…"* <br> *- Extremely difficult* <br> *- Difficult* <br> *- Neither easy nor difficult* <br> *- Easy* <br> *- Extremely easy* <br> *"Why?"*
  - Ensure that you are asking *why* participants rated it this way right after they reply.
- Why are we measuring it?
  - We also collect this during [Category Maturity Scorecards](/handbook/product/ux/category-maturity/category-maturity-scorecards/#the-3-questions-we-ask) (CM Scorecards). Collecting it as part of a usability test gives a prediction and pulse check for a later CM Scorecards study.
  - It is important to understand the participants' reasons for giving a rating, especially in situations where a rating is low. This is especially important in usability testing when the number of participants is also low.

#### Satisfaction

- What's being measured?
  - Satisfaction can be determined by understanding the participants' perception of how the experience is.
- How is it measured?
  - After all tasks are completed, ask the [Satisfaction rating question](/handbook/product/ux/category-maturity/category-maturity-scorecards/#the-3-questions-we-ask).
    - *"How would you rate the quality of this experience?"* <br> *- Extremely good* <br> *- Good* <br> *- Neither good nor bad* <br> *- Bad* <br> *- Extremely bad*
  - Ensure that you are asking *why* participants rated it this way right after they reply.
- Why are we measuring it?
  - We also collect this during CM Scorecards. Collecting it as part of a usability test gives a prediction and pulse check for a later CM Scorecards study.
  - It is important to understand the participants' reasons for giving a rating. This is especially important in usability testing when the number of participants is also low.

#### Usefulness

- What's being measured?
  - Usefulness can be determined by understanding the participants perception of how much the tested features would enable them to achieve their goals.
- How is it measured?
  - After all tasks are completed, ask our [adjusted UMUX Lite question](/handbook/product/ux/category-maturity/category-maturity-scorecards/#the-3-questions-we-ask).
    - *"You just experienced our implementation of <Feature/Scenario>. How would you agree or disagree with the following statement: <Feature/Scenario> has the capabilities I need for what I need to do in my own work."* <br> *- Strongly agree* <br> *- Agree* <br> *- Neither agree nor disagree* <br> *- Disagree* <br> *- Strongly disagree*
  - Ensure that you are asking *why* participants rated it this way right after they reply.
- Why are we measuring it?
  - We also collect this during CM Scorecards. Collecting it as part of a usability test gives a prediction and pulse check for a later CM Scorecards study.
  - This score highly correlates to the [System Usability Scale](/handbook/product/ux/performance-indicators/system-usability-scale/) (SUS) score, one of our [regular performance indicators](/handbook/product/ux/performance-indicators/#system-usability-scale-sus-score).
  - It is important to understand the participants' reasons for giving a rating, especially in situations where a rating is low. This is especially important in usability testing when the number of participants is also low.

## How usability testing relates to Category Maturity Scorecards (CM Scorecards)

Usability testing happens before you conduct a [CM Scorecard](/handbook/product/ux/category-maturity/category-maturity-scorecards/). Usability testing helps to identify the majority of problems users encounter, the reasons for these issues, and their impact when using GitLab, so we know what to improve.

If you run a CM Scorecard without prior usability testing, you will likely identify some of the usability problems users experience. However, the effort and rigor connected with the Category Maturity Scorecard to measure objectively the current maturity of the product doesn't justify skipping usability testing.
In addition, during usability testing you have opportunities to engage with participants directly and dive deeper into understanding their behaviors and problems. The Category Maturity Scorecard process does not allow for such interactions as it's designed to capture unbiased metrics and self-reported user sentiment.

## Frequently Asked Questions

**Why should I not ask in user testing if a participant completed a task successfully?**

It's a self-reported measure which may or may not be true. If a participant indicated they completed a task successfully, you still need to check if they really completed it based on how you defined success. It's important to capture only necessary data from users and considering you need to double-check their response with actual behaviour, we suggest to leave it out in the first place.

**Why should I not use UserTesting.com's native task metric *difficulty* to assess Efficiency? Isn't it the same?**

UserTesting.com's task metric *difficulty* is similar but it uses a different rating scale than the Single Ease Question. Currently, there is no option to change the scale labels in UserTesting.com to align with ours.
