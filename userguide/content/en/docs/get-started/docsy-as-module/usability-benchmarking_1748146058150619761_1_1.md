---
title: "Usability benchmarking"
description: "The usability benchmarking process at GitLab"
---

According to the [Nielsen/Norman Group](https://www.nngroup.com/articles/product-ux-benchmarks/), usability or user experience benchmarking is "the process of evaluating a product or service's user experience by using metrics to gauge its relative performance against a meaningful standard." While benchmarking can require a good amount of time and effort, there are few alternate research methods that provide both the same volume of data and granularity of insights. This page describes the processes and considerations that we put into usability benchmarking at GitLab.

## Why conduct a usability benchmarking study

Usability benchmarking takes a collection of related workflows, breaks them down into discrete tasks, and measures how usable they are across several dimensions. What this generates is a rich body of quantitative and qualitative data that highlights specific pain points and areas for improvement. These pain points can then be turned into actionable insights which will improve the overall usability of a product. By performing a usability benchmarking study, you give your team validated, granular recommendations for making your product better.

## When to benchmark

Benchmarking can be a useful method for generating longitudinal, quantitative comparisons (for example, tracking the time it takes to complete a task before and after a significant change to the user interface). Because of the benefits of running benchmarking studies several times, it can be useful to think of benchmarking as a research *program*, as opposed to a one-off *activity*. This is how we tend to think of it at GitLab.

## Benchmarking at GitLab

Benchmarking is a thorough and time-intensive undertaking that requires a high degree of rigor from the research lead. This page lists guidelines and best practices to ensure the quality and uniformity of our benchmarking efforts and measues, while also reducing 'start-up costs' for new benchmarking efforts.

## Anatomy

Every benchmarking study has a similar 'skeleton' - the basic elements one needs in order to successfully run the study. Typically, these are:

- Protocol: The blueprint for each session that you run. This includes the things you (or the moderator) will say to each participant to introduce and explain the study, including each question you will ask and in what order. It generally serves as the script by which you conduct each session.
- Tasks: These are the discrete tasks that you will ask the participant to perform and that you will measure for your study.
- Metrics: Before your study begins, be explicit about what data you are gathering, which metrics you plan to report on, and the reasoning behind your methodology. With usability benchmarking, it's important to report out the same metrics being used across other benchmarks. However, additional metrics can also be reported out at the stage level if they add value.
- Timeline: Planning, conducting, and analyzing a benchmarking study takes time. Creating a timeline for yourself and your stakeholders keeps the study on track and keeps your team informed.

## Planning for a benchmarking study

When leading a benchmarking study, you will need to coordinate with several stakeholders including the Product Manager (PM) and Product Designer (PD) to ensure that everyone agrees upon the study protocol, tasks, metrics, and timeline. As with any UX research project that you're driving, don't forget to share the test plan with the UX Research team for a [peer review](/handbook/product/ux/ux-research/how-uxr-team-operates/#how-we-uphold-the-quality-of-our-work).

The early planning stages are crucial for setting the rest of your study up for success. In order to maximize the first few weeks of study planning, communicate with your stakeholders on how they would prefer to provide feedback. If you are getting feedback async, make sure to provide firm deadlines that are non-negotiable. In cases where those deadlines are not being met, try pivoting to sync communication such as a scheduled meeting to help stay on the research timeline.

### Sample and recruiting

You will want to consider your sample when recruiting for a usability benchmark study. While there are not set guidelines for the sample, you want to consider a general mix of participants across these factors:

- Persona(s) relevant to the area the study covers to make sure that you're testing with your target users.
- Company size that the participant works for, as that can influence the types of tasks that users typically perform and/or give them better mastery if they're working at Enterprise scale.
- Team size that the participant is directly on. Those on All-in-One teams will have more experience across the platform and will likely be more skilled at any tasks as they have a better understanding of how aspect of the platform work together. Team size greatly impacts how users interact with GitLab.
- SaaS vs Self-Managed license type for the company that the participant works for. Self-Managed users may be working with earlier versions of GitLab which might impact their performance.
- GitLab tenure for the individual participant. Those with more experience with GitLab have background knowledge to assist them on completing tasks. You may want to explicitly sample newer or brand-new users depending on the workflows and/or tasks. Generally, obtaining a mixture is good practice.
- Industry verticle of the company that the participant works for. Different industries may approach tasks in a different manner.
- Individual experience in their role, exclusive of their GitLab tenure. Those with more experience in their role will bring different background knowledge to completing tasks.
- Interface preference that the participant works in. Dependent on their preference some participants will use GitLab's web UI or the terminal. This will impact how they approach tasks.

You want to try to avoid over indexing on participants from any one of these factors. For example, avoid sampling all participants that have Self-Managed licensing. When opening you recruitment issue, describe your ideal target sample for your benchmark so that the Research Operations Coordinator can best match their recruitment efforts.

### Protocol

Each protocol is tailored to the topic and specifics of the study it belongs to, but often contains similar sections. Generally, you will want to cover the following (many of these are commmon to all moderated studies):

- Welcome the participant, and thank them for taking the time to help you out.
- Ensure they have provided consent to be recorded and for the recordings to be shared internally within GitLab.
- Explain why they are here, and offer a high-level overview of what the study is about.
- Ask warm-up questions about what their day-to-day is like, how long they've been using GitLab, and any other 'softball' questions to help get into rhythm.
- Explain the session. For benchmarking, this entails laying out how you're going to run each task, describing the behaviors that are encouraged or discouraged (for example, talking aloud is not usually done in benchmarking), and generally laying out the structure of what the participant can expect during your time together.

The [Usability Benchmarking template](https://docs.google.com/spreadsheets/d/1FK3rS0MaF57cpyVEFL7P9LwD-zwfLSLk-k6tul__cPI/edit?usp=sharing) contains some boilerplate language to work off of for your own study.

### Tasks

A few guidelines when selecting tasks for your study:

- Relate every task to a Job To Be Done for one of our personas.
- Review SUS feedback to identify areas that users provide negative feedback on. This is a useful exercise for two reasons:
     1) **To help in task creation** - If there are pain points identified through SUS, or other feedback mechanisms, it's good practice to look for opportunities where your tasks can explore them further. Doing so allows you to witness the pain points in person and understand more details around them.
     2) **For data triangulation** - After you analyze the benchmark data, you will have identified pain points through your tasks. You can use SUS data to understand if the pain points you identified in your benchmark were also seen in the SUS feedback. This is useful, because triangulation can help strengthen insights; for example, we can state "this pain point was also a theme in our SUS feedback in Q1." If the benchmark pain points weren't previously identified through SUS feedback, that's also worth pointing out and exploring further.
- Group individual tasks by workflow and in a sensible order (for example, don't have a 'close issue' task before an 'open issue' task).
- Determine a happy medium of complexity for tasks. Too easy is not meaningful. Too complex makes measuring specific parts of a workflow difficult.
- Consider setting a 'cut off' time limit for each task to ensure you get through all of them.
- Be careful. when describing tasks to the participant. Use language that is accurate but doesn't align exactly with UI text, so that you don't unintentionally lead participants to the right answer.
- Go through each yourself, and record the 'happy' or expected path. Get confirmation from your stakeholders if you are uncertain.
- Recruit 1 or 2 pilot participants to test out the task instructions, so you can make modifications if users are too unclear on what they need to do.
- Enumerate the completion criteria for each task. This will serve as a checklist of sorts to ensure you are consistent when recording completion.
- Identify all of the ways users can complete a task. In some cases, GitLab offers different routes to the same outcome (for example, users can approve a deployment on two unique pages in the UI, so either option would count as a successful task).
- Consider applying a weight or points to each task to help calculate priority or severity.

Here is an example of a singular task as written in the task list:

| Name | Example |
| ------ | ------ |
| Task Code | BRANCH_OPS_3 |
| Topic | Branch Operations |
| Task | Protect Branch |
| Cut off time | 5:00  |
| Description | Make this branch a protected branch, where devs and maintainers can merge, push, and force push. |
| Notes | Must be 'maintainer' role or higher. Will need to find project settings. Push rules are also allowed in GitLab Enterprise Edition. |
| Related JTBD | When product improvements are identified, I want to propose changes that address them, so that I can help build a better product. |
| Happy Path | Left nav, settings -> repository. Find protected branches section, click expand. Under protect a branch section, use dropdown to select 'newbranch'. In 'allowed to merge' and 'allowed to push' dropdowns, select 'Developers + Maintainers'. Toggle 'allowed to force push' to on. Click 'protect' button.  |
| Completion Criteria | •Correct branch is protected <br> •Allowed to merge checked <br> •Allowed to push checked <br> •Force push toggled <br>  •Protect button clicked |
| Weight | 5 |

#### A note on cut-off time

There isn't a hard and fast rule when it comes to assigning a cut-off time for your tasks. There are a few ways you might do this:

- Time yourself completing the tasks, and, if you're an expert, multiply that by 3 (a [guideline](https://pmc.ncbi.nlm.nih.gov/articles/PMC5738945/#:~:text=An%20expert%20can%20take%20longer,second%20nature%20for%20an%20expert.&text=For%20routine%20tasks%2C%20experts%20complete,1.3%20to%20multiple%20times%20faster.) for how long a novice might take).
- Perform a [KLM](https://measuringu.com/predicted-times/) (Keystroke Level Modeling) calculation to get a rough estimate of time on task.
- Run a pilot without enforcing any cut off. Measure time on task, and use that as a baseline. This comes with some caveats: you should consider adding time to the tasks that your pilot participant completed quickly and possibly subtracting time from the tasks that you felt took too long.

#### A note on weight

One way to do weighting is to look at the number of steps necessary in the completion criteria and use that number.  In the example above, note that there are five steps listed in the completion criteria section, and the assigned weight is five. This assigns weight as a proxy for task complexity (which may or may not be appropriate for your study). How you use the weight in your calculations is usually as a multiplier for reporting summative metrics.

As a simple example:

- Take 2 tasks: A and B.
- The score for task A is a perfect 20/20, and the score for task B is a dismal 10/20.
- Now, suppose task A has a weight of 1, and task B has a weight of 2. In this case, B should be weighted twice as much as A.
- When scoring the grade for the **combined** tasks, multiply each score by its weight. The score for A stays at 20/20, and the score from B becomes 20/40 (10 *2 = 20, 20* 2 = 40).
- Next, add the totals from the tasks to get the final weighted score (20 + 20 / 20 + 40).
- The total score is 40/60 or .67, not the unweighted average of 30/40 or .75, because we weighed task B more and task B performed worse.

### Metrics

The following metrics and definitions are the core of how GitLab performs benchmarking.

| Measure | Definition | Scope | Calculation | Example |
|:------------:|:-------------:|:-------:|:---------------:|:---------------:|
| **Completion Rate** | % of users who successfully complete the task | Measured per participant, reported per task | Completed = 1, incomplete = 0. <br> Then sum and divide by total participants. **Note:** completion criteria for each task should be carefully enumerated with your stakeholders prior to running your study |  4 completions out of 5 participants for task 3 results in 80% completion rate  |
| **Time on task** | Time spent from start to finish of task  | Measured per participant, reported per task for each participant who meets the task completion criteria  | Start timer on verbal cue, stop timer when participant signals that they have completed the task or report that they have no path forward | Avg. time to completion for task 9 = 2:11 |
| **CES** (Customer Effort Score) | Qualitative measure of perceived effort (1-7, 1 = extreme effort, 7 = effortless) | Measured per task, reported as average | At the end of the task, ask the participant, "On a scale of 1-7 where, 1 is extremely difficult and 7 is extremely easy, how easy was it for you to complete this task?"| Avg. CES for task 13 = 5.9 |
| **Error Type Count**  | Number of the different type of errors or mistakes made during task completion | Measured per task, reported as average or mean | Errors need to be defined alongside the 'happy' or optimal path the user should take  | 2.6 avg. errors for task X|
| **Error Rate** | The number of different types of errors observed over the number of steps in the task | Per task | Take the number of observed types of errors and divide by the number of steps or actions in that task. | Task A has 5 steps. There are 10 participants in the study. Our total steps (denominator) is therefore 50. The numerator is the observed errors across all participants for task A. Suppose there are 20 errors recorded for task A. Error rate is thus 20/50, or 40% |
| **Severity**  |  Judged severity of the problem   |   Per task, overall   |  See [this handbook page](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/) for details | Critical |
| **Grade**     |   A cumulative letter grade portraying the usability of the task overall      |       per task, overall          |    see 'Per task grade calculation section below'         | C |
| **UMUX lite** |  Canonically, UMUX lite is a 2-question survey that measures perceived usefulness and usability of a system or product. For benchmarking at GitLab, we tend to use it to measure usability against the specific JTBD in our study. |  Collected once per JTBD at end of session.  |    1 question, on a 7-point Likert scale from strongly disagree to strongly agree.    | On a scale of 1-7, where 1 is strongly disagree and 7 is strongly agree, how much to do agree with the statement, "This system helps me perform (insert description of JTBD here)" |

#### Notes on scoring and metrics

If participants *don't meet* the completion criteria for the task:

- **Do not** enter time on task for that participant on that specific task. We want to measure the time it takes to successfully complete each task.
- **Do** include the CES score and error count. We want to understand the experience for everyone who completed the task.
- Mark the task as **incomplete**, even if a participant believes they have finished the task, but they **have not** met the completion criteria.
- Mark the task as **incomplete**, even if a participant believes they have NOT completed the task, but they **have** met the completion criteria.

For per-task metrics:

- Report all metrics with a 95% confidence interval, unless you have a clear reason to do otherwise.
- For completion rate, use the [adjusted Wald calculation](https://measuringu.com/calculators/wald/) for the confidence interval.
- For time on task, use a natural log calculation for confidence interval, and report geometric mean rather than the median as a recommended [best practice](https://measuringu.com/calculators/ci-calc/).
- Precisely defining and accurately counting errors is **tricky** and does not always need to be performed. If you plan to do it, you must be very clear about the definition for errors in your tasks.
- If you collect error rate, report it per task. Count errors against all possible steps for that task, including multiple recorded errors from the same participant on the same part of a task (for example, clicking the same wrong link several times). This may leave you with an error rate greater than 100%.
- For the Customer Effort Score (CES): If your sample is less than 30, use the population standard deviation to calculate your confidence interval. If N is greater than 30, use the standard deviation calculation. [Here's a handy calculator](https://www.calculator.net/standard-deviation-calculator.html) that includes both options and confidence intervals.

For per-workflow overall grade calculation:

- If all per-workflow metrics within a workflow are in one category (e.g., "Fair") but the calculated score is in a different grading category (e.g., "Good"), represent the overall grade as the same category as the metrics (e.g., a workflow score of 80 with "Fair"-category sub-metrics is categorized as "Fair" as well).

#### Severity calculation

In each session, you will record (per task) the severity number that most closely represents that user's experience as defined on [this handbook page](/handbook/engineering/infrastructure/engineering-productivity/issue-triage/). This methodology is similar to the widely-known [Nielsen/Norman system](https://www.nngroup.com/articles/how-to-rate-the-severity-of-usability-problems/), but inverse (where low numbers in our system are of greater severity).

For each incomplete task, rate the severity as 1. For a very painful completion, rate the severity as 2. For a mildly painful completion, rate the severity as 3 (and so on). If the user doesn't encounter any usability issues, rate the severity as 5.

Average the severity score for each task, and assign the overall severity according to the following scores:

| Range | Severity |
| ------ | ------ |
| 0.0 - 1.9 | Severity 1: Blocker |
| 2.0 - 2.9 | Severity 2: Critical |
| 3.0 - 3.9 | Severity 3: Major |
| 4.0 - 5.0 | Severity 4: Low |

For example, pretend you have 10 participants in a study. For task A, the severity scores on the individual runs are *1, 4, 1, 2, 2, 3, 4, 5, 1, 3*, which sums to 26. Divide by 10, and you'll get the average of 2.6 and a severity assignment of *2: Critical* for that task.

#### Per-task overall grade calculation

For each task, calculate a final grade using the criteria below.

1. Start with the number of completions for each task (for example, you might have 15 completions from 20 participants).
1. Add the average CES score for that task to the number of completions. (Your avg. CES might be 5/7, so 5 + 15 = 20).
1. Next, add the average severity score for that task. (Take the 2.6 from above, for a score of 22.6).
1. Divide this number by the total possible points. Here, the total possible is the number of participants (20), plus the highest possible CES score (7), plus the highest (best) severity score (5). in our case 20 + 7 + 5 = 32). For our example, we have 22.6 points out of 32, so 22.6/32 = 0.70.
1. Multiply the result by 100 (to convert from a decimal) - so 0.70 * 100 = 70.
1. Use a letter-grading rubric (90-100 = A, 80-89 = B, and so on) to get your final grade: 70 = C.

Here's our above example in table form:

| Input | Action | Example |
|-------|--------|---------|
| Number off completions (out of total # of participants) | - | 15 (of 20) |
| Avg. CES for task (of 7) | add to completions | avg CES = 5, running score = 20 |
| Running total | Divide by total possible | 20 / 27 = 0.74 |
| Decimal result | multiply by 100 | 74 |
| Integer result | map to grading scale (letter grades in this case) | 74 = C |

#### SUS Companion Analysis

As noted above, triangulating the pain points identified during your benchmark study against the SUS verbatim for your stage helps teams identify which pain points to prioritize by understanding what percentage of the SUS verbatim they address.

Take the following steps to triangulate your benchmark study findings with the SUS verbatim for your stage.

1. Compile a set of verbatims from your stage to use in your analysis.
1. Take out verbatims that are positive-only (e.g., "it's pretty slick with ci") and those that are so brief as not to be informative (e.g., "ci")
1. Take a random sample of 25% of your verbatims to develop your categories.
1. Start with a list of the benchmark pain points for each task and UX theme and add categories as needed to capture new themes like Learnabilty and Documentation. Break-up complex verbatims that reflect multiple themes into separate verbatims. That will help you to apply the categories in a mutually exclusive manner, which is needed to represent the percentage of verbatims that align with different themes.
1. You should have a general category of NA (not applicable) for verbatims that can't be categorized. It makes sense that not all verbatim align with benchmark tasks and themes.
1. After you've developed your categories, apply them to the entire sample of verbatim that you're including in your analysis. Doing this will help you to make sure that you've considered all the possible categories for each verbatim.
1. Report the overall percentage of verbatims that align with benchmark tasks and themes, as well as each individual theme, task, workflow, those from the NA category and any additional categories that you observed (e.g,. Learnability and Documentation) in the appendix to your benchmark report entitled 'SUS Companion Analysis'.

#### Actionable Insights and Labels

UX Researchers and their teams will identify [Actionable Insights](/handbook/product/ux/ux-research/research-insights/#:~:text=Actionable%20insights%20are%20tracked%20at,long%20to%20be%20acted%20upon.), which are issues that articulate the next steps that we will take to address our findings.

Actionable Insights should get the following labels:

- `Usability benchmark`
- `Section::Stage` scoped labels to identify the section and stage(s) covered in the study
- `Actionable Insight::Product change` or `Actionable Insight::Exploration needed`
- NOTE: `Actionable Insight::Product change` require a Severity Label to be applied to each issue.
- It's also helpful for stakeholders and for you to rate the severity level of each Actionable Insights so that teams know how to prioritize them. You can use the task level Severity ratings described above to attribute severity levels for each Actionable Insight.

#### Timeline

Preparing and conducting a benchmarking study takes time. Below is a sample timeline for starting a typical benchmarking program and running the first study.

| Step | Description | Time |
|-------------|-------------|-------------|
| Clarify your goals and conduct background research. | Be clear on the why, what, who, when, and how you are going to approach the benchmarking.  | 1 week |
| Begin issue | Open a research issue and fill it out.  | 1 day |
| Conduct kickoff | Include your stakeholders in helping to refine the scope and direction of the study (focus areas, important metrics, personas, and so on) | 1 week |
| Plan: Overview | Begin your study plan, record the context, reasoning, metrics, personas, and outcomes for your study.  | 1 week |
| Plan: Protocol | Write your introduction (exactly what you are going to say), opening questions, and the general flow for your study.  | 1 week |
| Plan: Tasks | Enumerate the exact tasks you will measure, the happy path, completion criteria, and weight for each task.  | 2 weeks |
| Plan: Test environment | Set up your test environment with any projects and [sample data](/handbook/product/ux/ux-research/ux-cloud-sandbox) you will use for testing | 2 weeks |
| Recruitment | Open a research recruitment issue at least a month prior to when you wish to run your sessions. A typical benchmarking study uses about 20 participants. | Opening ticket: 1 day. Recruitment itself: 1 month |
| Run Pilot(s) | The week before your sessions, run 1 or 2 pilot sessions to perfect your protocol and tasks. | 1-2 days |
| Run Sessions | Benchmarking sessions typically last from 90 minutes to two hours. Meaning that for 20 participants, conducting two sessions per day, you are looking at a solid two to four weeks of conducting sessions. Note that you will need to invite more participants than necessary to fill 20 sessions, since not everyone who qualifies will accept the research invite. In order to maximize participant attendance and avoid late cancellations, send reminder emails within 24 hours of each session. | 2-4 weeks |
| Analyze the results. | Calculate metrics, extract recommendations, pull verbatim, put things into Dovetail, and so on.  | 2 weeks |
| Prepare the report and share it. | Produce research report, slides, recordings, and so on to disseminate your findings. | 2 weeks |

You should plan for a full quarter from start to finish for your first benchmarking study, but the time commitment will vary week to week. Benchmarking should not be the only research activity you plan during this time, with the exception of weeks when you are conducting sessions.
Note: This timeline may be significantly reduced in subsequent benchmarking studies for the same tasks and personas.

## Usability Benchmarking Toolkit

A few resources to help reduce the start-up cost for a new benchmarking effort:

- [Spreadsheet Template](https://docs.google.com/spreadsheets/d/1FK3rS0MaF57cpyVEFL7P9LwD-zwfLSLk-k6tul__cPI/edit?usp=sharing) - A Google Sheets template for recording your session notes and data, complete with pages and formulas for commonly reported metrics.
- [Google Slides Template](https://docs.google.com/presentation/d/1x2R1-qASZVhEFQwYcX9U2puR-8k3XwpsfRSDYkipsOY/copy) - A Google Slides template for creating your benchmarking report.
- [Google Slides from Q1FY23 Create Benchmarking](https://docs.google.com/presentation/d/1jX7bOij69uS_oT2tYEsB5Rwg5A9rErfmpi7YhcY1H3M/edit?usp=sharing) - The slide deck from the first benchmarking study, from which you can see the structure of the slides and general presentation flow.
- [Figjam template for Usability Benchmarking Alignment Workshop](https://www.figma.com/file/QQ30XlTxTSFx80lq8UpNDo/Usability-Benchmarking-Alignment-Template?type=whiteboard&node-id=0-1&t=o3p1uikRBbZQ5Bnh-0) - A Figjam template for running a Usability Benchmarking Alignment Workshop with your stakeholders.
- [Example Benchmarking Epic](https://gitlab.com/groups/gitlab-org/-/epics/7205)
- [Neilsen/Norman on Benchmarking - Process](https://www.nngroup.com/articles/product-ux-benchmarks/)
- [Neilsen/Norman on Benchmarking - Metrics](https://www.nngroup.com/articles/benchmarking-ux/)

## FAQ

**Q: How is benchmarking different from the Category Maturity Scorecard or UX Scorecard research?**

A: To borrow an analogy, you might think of CMS/UX scorecards as looking at usability through a magnifying glass. Usability benchmarking is like looking at usability through a microscope.
Benchmarking is more time intensive. It is not meant to be lightweight. You will speak with more participants (~20) for a longer period of time (~120 minutes, and you will run through more tasks (~25) that might cover more than one JTBD.
Benchmarking reports many of the same metrics (and more!), and those metrics are more likely to be representative due to greater N. At GitLab, we report metrics using industry-standard statistics (confidence intervals at 95%, adjusted Wald calculation for completion rate, and so on). In this sense, you can use benchmarking in concert with CMS or UX scorecards to validate and update those findings.
Benchmarking is also meant to be a program, rather than a one-off study. Benchmarking generates very granular recommendations for usability improvements, and once enough of those recommendations have been implemented, you can run the benchmarking again and start to see trends over time.

**Q: Does conducting a usablity benchmarking study mean that I do not need to run a UX Scorecard or CM Scorecard study?**

A: No, you should still conduct UX Scorecard and CM Scorecard studies in addition to usability benchmarking studies. All three types of studies are valuable for understanding the users' experience with the product.

**Q: How should I view this score vs the UX Scorecard score vs the CM Scorecard score?**

A: Since all three (UX scorecard, CMS, and benchmarking) provide an overall letter grade, it is ideal to see all of the grades agree when they are focused on the same task or JTBD.

**Q: How often should I conduct usability benchmarking?**

A: This is variable based on need and how quickly the recommendations from a previous benchmarking study are implemented. But, generally, there is no reason to conduct benchmarking more than once or twice a year for the same tasks.

**Q: Does usability benchmarking have to be conducted on the most current release?**

A: Yes. Benchmarking is far too heavy-handed to perform for solution validation of upcoming features, and while you *could* perform benchmarking on a previous release, the results you gather may already be invalid when you collect them. Given the time commitment, this is **highly discouraged**.

**Q: What GitLab environment should the usability benchmarking be tested on?**

A: The UX Researcher on the project can set up a cloud instance of GitLab and create sample data in a project by following the instructions on the [UX Cloud Sandbox](/handbook/product/ux/ux-research/ux-cloud-sandbox/) page. Make sure there is enough sample data to complete all tasks in the benchmarking study when you run your pilot study. You can also ask for help on the #ux-cloud-sandbox Slack channel.

**Q: How complex/realistic does my testing environment need to be?**

A: It depends. Basically you need to look at your task list and go through them, ensuring that every area of the project that you go to (or might reasonably expect participants to go) has something there. Ideally, there's more than 1 item there (file, merge request, comment, environment, deployment, etc.) so that the task time accounts for scanning and searching the desired path. Depending on the areas you're focused on, this may be a lot of sample data, or not so much.

**Q:Where does this fit in the [product lifecycle?](/handbook/product-development/product-development-flow/)**

A: Benchmarking lives at a space bridging the 'improve' stage of the build track and the 'collect ideas/understand the problem' parts of the validation track. Benchmarking is a great way to see how the current product is performing, so it fits well with the 'measure, learn, and improve' part of the cycle. The 'learn' and 'improve' parts of are then taken as inputs into the collect ideas/understand the problem parts of the validation track. So, in benchmarking, we're measuring our current product, validating existing problems we know of, and generating ideas on how to address these problems or generally improve the product.
Note: Benchmarking is somewhat outside of our normal workflow. Since it is so time intensive, it's not something that could or should be a part of every feature or issue, and it's not something we should conduct more than once or twice a year for the same tasks.

**Q: For efficiency, can I align a benchmarking study with an upcoming Category Maturity Scorecard study?**

A: Yes, this is a great use of benchmarking! You can easily modify your benchmarking study to allow for CMS results. For example, you might run a small number of participants through the CMS protocol in combination with the benchmarking tasks. Because these are both based off of JTBD, the tasks ought to align very well.

**Q: What score are we trying to achieve?**

A: Rather than aiming for a specific score off the bat, what you really want to see with benchmarking is improvement over time (from one benchmarking study to the next). That being said, benchmarking is metrics heavy, and there are a lot of 'scores' to sift through. Your goal is to get a 10,000-foot view at a glance, with overall grades for each task and each JTBD (A-F, severity 1-5), and also to provide detailed metrics for those who are curious.

**Q: Is the scoring dependent on the level of maturity of that category/JTBD?**

A: As it stands, no. You should consider maturity during the analysis and when setting expectations, but benchmarking just measures the current experience, however mature it is at the time.

**Q: How do Product Designers process and manage the recommendations?**

A: For benchmarking, the UX Researcher is responsible for much of the 'processing'. The UX Research team has an [FY23 objective](https://gitlab.com/groups/gitlab-org/-/epics/7367) to better utilize actionable insights. One of the main outputs of benchmarking is a set of recommendations that will then go through the process of turning into actionable insights or informative insights. Part of this [process](/handbook/product/ux/ux-research/research-insights/#how-to-document-actionable-insights) involves categorizing actionable insights into either 'exploration needed' or 'product change' categories, each of which becomes an issue with this label.

The UX Researcher is responsible for sharing the list of recommendations, along with all other findings from the benchmarking with all relevant stakeholders (specifically Product Designers and Product Managers). The exact structure of this will likely vary between different groups and stages, but part of this process needs to involve the communication and handoff of all 'product change' actionable insights. From there, the team should work together to prioritize these issues and ensure they are completed (which leads to the next question).

It's important to make sure that actionable insights are broken down into smaller, more immediately achievable chunks. Check with your team(s) (during the workshop is a good time) to make sure the actionable insights aren't too big by asking how they could be broken down into smaller issues.

**Q: How can I prevent recommendations from going stale (not prioritized/implemented)?**

A: This is *the* critical question. The research team has a [KR around research prioritization](https://gitlab.com/gitlab-org/ux-research/-/issues/1764) for the actionable insights marked `Actionable Insight::Exploration Needed` (needing more research) that are generated from benchmarking. These issues go through a [prioritization process](/handbook/product/ux/ux-research/research-prioritization/) for additional research. For those recommendations in the `Actionable Insight::Product change` category, and thus of more interest to Product Designers and Product Managers, there is a process where a severity label is applied. Generally, Product Designers will assign severity for 'product change' insights, and UX Researchers will assign severity labels for 'exploration needed' insights. For more on the process, refer to [this handbook page](/handbook/product/ux/ux-research/research-insights/#how-to-document-actionable-insights).

**Q: Does the GitLab benchmarking approach involve a competitive analysis?**

A: No, not at this time. To use the analogy above, [Competitive usability evaulations](https://www.nngroup.com/articles/competitive-usability-evaluations/) are also like a microscope, in that UX Researchers look at specific tasks and fine-grained aspects of performance. We might use some of our benchmark tasks in a competitive usability evaluation to see how we measure up to our competitors, but that work is currently out of scope. We first want to introduce the benchmarking approach with our own product, before we look at performance across competitors. Additionally, the first iteration for a competitive usability evaluation at GitLab might be to use them as a magnifying glass for looking at what we can learn from our competition before we put those tasks under the microscope.

**Q: How can my team request a benchmarking study?**

A: Speak with the UX Researcher on your team to get the process started!

**Q: What can I change about the benchmark study protocol?**

A: A key charactertistic of a benchmark study is consistentcy. However, flexibility can exist in many ways, such as: driving efficiencies with the data, workshopping the results to collaborate on the recommendations, how you shape your issues/epics, your storytelling, etc. You can even gather additional data around your tasks, too. If you would like to make a proposal for anything else, such as the metrics captured, start a Google document. In the Google document proposal, include the proposed change, the benefit of the change, the impact of the change, potential concerns you may be introducing, and how might that change get executed.
