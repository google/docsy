---
title: AI Model Validation Group
description: "The Model Validation group is focused on supporting GitLab teams to make data-driven feature development decisions leveraging ML/AI."
---

## 📝 Mission

The AI Model Validation team mission is to support and improve the integrity, reliability, and effectiveness of Generative AI solutions through evaluation, validation, and research science processes for [GitLab Duo](https://about.gitlab.com/gitlab-duo/) Features. We offer a centralized evaluation framework that promotes data-driven decision-making and pragmatic refinement of AI features. We further explore methods and techniques on forward-deployed research science in the Gen AI space.

## Direction

[Here](https://about.gitlab.com/direction/ai-powered/ai_model_validation/) is the group direction page. We have two categories under this group: Category AI Evaluation and Category AI Research. This group is part of the [AI-Powered stage](/handbook/engineering/development/data-science/ai-powered/).

### Central Evaluation Framework (CEF)

Model validation is the primary maintainer of our [Central Evaluation Framework](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library) (CEF). This tool supports the entire end-to-end process of AI feature creation, from selecting the appropriate model for a use case to evaluating the AI features’ output. AI Validation works in concert with other types of evaluation, such as SET Quality testing and diagnostic testing, but is specifically focused on the interaction with Generative AI.

> Read about how we [How we validate and test AI models at scale](https://about.gitlab.com/blog/2024/05/09/developing-gitlab-duo-how-we-validate-and-test-ai-models-at-scale/) on the GitLab blog.

## 🚀 Team members

The team is composed of [ML engineers](/job-families/engineering/development/data-science/machine-learning/) focused on ML science and MLOps backend, and they are permanent members of the AI Model Validation Group.

| Who | Role |
| --- | --- |
| [Hongtao Yang](/handbook/company/team/#hongtaoyang) | ML Engineer |
| [Andras Herczeg](/handbook/company/team/#andrasherczeg) | Senior ML Engineer |
| [Stephan Rayner](/handbook/company/team/#srayner) | Senior ML Engineer |
| [Tan Le](/handbook/company/team/#tle_gitlab) | Senior ML Engineer |
| [Susie Bitters](/handbook/company/team/#susie.bee) | Senior Product Manager |

## ☎️ How to contact us

- Tag a team member in a merge request or issue
- Slack Channel: [`#g_ai_model_validation`](https://gitlab.enterprise.slack.com/archives/C05CJ1T3P0W)

## How we work

### Estimation

The estimation and planning process is managed primarily asynchronously; however, synchronous calls may be scheduled if necessary to clarify blockers or ensure alignment.

A week before the milestone is finalized, the team is provided with a list of issues to evaluate. Throughout that week, team members engage in discussions to assign estimates or weights to tasks. Any issues that are too large or lack team consensus are either reworked, removed from the milestone, or scheduled for further investigation as a spike.

The task estimation and planning process follows a structured workflow:

- The Product Manager (PM) maintains a comprehensive list of all issues relevant to the product's progress.
- The Engineering Manager (EM) works with the Product Manager (PM) to select the subset of issues that the team will evaluate for the upcoming release, ensuring the list is manageable and aligned with team priorities.
- Domain experts within the team may be consulted to clarify ambiguous issues before estimation, ensuring that tasks are well understood before being assigned weights.

By the end of the estimation process, every issue designated as a deliverable for the upcoming release must meet the following criteria:

- Each issue must have a weight or be time-boxed.
- There must be a clear description of one or more actionable tasks that make up the issue.
- The issue must include a definition of done to guide the development process and ensure clarity around when a task is considered complete.

### Weighting issues

We use weights to forecast the complexity of each given issue aimed at being scheduled into a given milestone. These weights help us ensure that the amount of scheduled work in a cycle is reasonable, both for the team as a whole and for each individual. We understand weights are mere forecasts and we accept the uncertainty that comes with this.

Before each milestone, the team sets weights on all issues currently aimed at the next milestone by Product and triaging processes, along with updating the description with the proposed solution if agreed upon. This exercise may require multiple team members to collaborate on some issues in order to properly set a weight and agree on a solution. The weights we use are:

| Weight     | Description  |
| ---------- | ------------ |
| 1: Trivial | The solution is understood, no extra investigation is required, and anyone can pick this up. This task should take no more than 1-2 hours. |
| 3: Medium  | The solution is understood, but some extra investigation or effort will be required to realize the solution. One engineer should be able to finish 2-3 of these tasks in a week.  |
| 5: Large   | The solution is outlined, but there are unknowns with the work—these issues can be scheduled but should be broken down first. Likely a major piece of work, potentially worked on by two engineers. |
| 8: Unknown | There are many unknowns with the proposed solution or how to implement it. These issues will not be scheduled and instead should be broken down, or a spike should be scheduled to investigate further. |

### Retrospectives

We conduct monthly async [retrospectives](/handbook/engineering/management/group-retrospectives/) which are [located here.](https://gitlab.com/gl-retrospectives/data-science/ai-powered/model-validation)

## Customer outcomes we are driving for GitLab Duo

The customer outcomes we are focused on can be divided into themes below:

### Benchmark for Quality and Performance Metric of Foundational Model and Feature

We first assess the models and the feature on a large-scale dataset to understand and benchmark quality metrics from a set of metrics. We provide dashboards for diagnostic purposes as well as a continuous daily run dashboard so we can track how the features are performing based on the benchmark.

### Evaluation as a Tool for Software Engineers to Experiment as They Iterate and Build AI Features

After the initial assessment, we have a dynamic dataset pull from scheduled runs so feature teams can run the datasets with every code and prompt change via CLI. This helps them understand how changes in code/prompt/system can impact quality based on the variance between control (before change) and test (after change) code on a primary metric of choice.

### Documentation as We Use New Ways and Processes for GenAI Evaluation

We are further iterating and documenting an evaluation-centric way of building GenAI features. This is mainly for the internal team, and the epic to track this can be found here.

Our current customers include GitLab [AI-powered Duo feature teams:](https://docs.gitlab.com/ee/user/gitlab_duo/index.html)

**The immediate customers include:**

1. [AI Powered: Duo-Chat team](https://about.gitlab.com/direction/ai-powered/duo_chat/)
2. [Create: Code Creation team](https://about.gitlab.com/direction/create/code_creation/)
3. [Security Risk Management: Threat Insights `AI Vulnerability Management` team](https://about.gitlab.com/direction/security_risk_management/threat_insights/vulnerability_management/)
4. [Root Cause Analysis](https://docs.gitlab.com/ee/user/gitlab_duo/index.html#root-cause-analysis)
5. [RAG Evaluation](/handbook/engineering/development/dev/foundations/search/)
6. [Issue Summarization](https://docs.gitlab.com/ee/user/gitlab_duo/index.html#issue-description-generation)
7. [AI Powered: Group Custom Models](https://about.gitlab.com/direction/ai-powered/custom_models/)

## 🧪 Top FY25 Priorities

Data-driven evaluated AI solutions with every code change.
We encompass two categories: AI Evaluation and AI Research. Our goal is to empower each team building AI features to confidently deliver meaningful and relevant features for GitLab customers. As a long-term initiative, we aim to expand our Centralized Evaluation Framework to assess various models, AI features, and components based on quality, cost, and latency. The primary decision factors for AI content quality are:

- Is it honest? (consistent with facts)
- Is it harmless? (does not include content that might offend and harm)
- Is it helpful? (accomplishing the end goal of the user)

We also aim for AI Engineers to leverage the Centralized Framework for experimenting and expanding from prompt engineering, RAG, Agent, to model tuning. This can be achieved through the Framework's API for the Prompt Library, recognizing that every code change significantly impacts the input and output of LLMs.

Further, there are novel research topics, and we would love for GitLab to be represented in the AI research community by publishing our approaches on evaluation.

## 📚 Prompt Library (Data)

We create large libraries (prompts as data) that serve as a proxy to production. We do this by understanding the various complexities of tasks and methods, allowing us to holistically evaluate a set of data beyond a few tests and more as a performance in production. We do this with a combination of industry benchmarks and customized dataset for various tasks. The current tasks we have included or are planning to include in the prompt library are as follows:

1. Code Completion
2. Code Generation
3. Code Explantation
4. Issue/Epic Question Answering
5. GitLab Documentation Question Answering Dataset
6. `/slash` Commands: `/explain`, `/test`, and `/refactor` (In Progress)
7. Vulnerability Explanation/ Resolve (In Progress)
8. Root Cause Analysis (In Progress)
9. Feature Summarization (To be added)

We further are planning to build customized workflow dataset particularly for System ( RAG , Agent) and Contextual Evaluation ( text follow up questions)

## 🔍 Metrics

There are a few different metrics that we use to assess. If we have established ground truth, we conduct an assessment with similarity and cross-similarity scores. If ground truth is not established, we use Consensus Filtering as an LLM-based evaluator through an Independent LLM Judge and a Collective LLM Judge. We are always iterating and evolving our metric pipeline.

### Similarity Score

This metric evaluates the degree of similarity between an answer generated by a point solution and those produced by other LLMs, such as Claude-2, Text-Bison, and GPT-4, in response to the same question or to ground truth.

### Independent LLM Judge

This metric involves soliciting evaluations from LLM Judges to assess the quality of answers provided given a specific question and context. Judges are tasked with assigning scores based on three key aspects: correctness, comprehensiveness, and readability. To enhance the credibility of these scores, multiple LLMs can participate as judges. For instance, if three judges unanimously agree that an answer is subpar, we can confidently conclude its quality.

### Collective LLM Judge

This metric operates similarly to the "LLM Judge" metric but consolidates all answers generated by each answering model into a single prompt. Judges are then tasked with comparing these consolidated responses and assigning scores accordingly.

### Performance Metrics (To be Added)

In addition to the similarity and consensus-based metrics, we also will track several performance metrics to evaluate the overall effectiveness of our AI models and features:

- **Latency**: We measure the time it takes for a model to generate a response, ensuring that the latency is within acceptable limits for a seamless user experience.

- **Requests per Second (Concurrency)**: We monitor the number of requests our models can handle per second, allowing us to understand the scalability and capacity of our AI infrastructure.

- **Tokens per Second**: We monitor the counts of the tokens rendered per second during LLM response streaming. This helps assesses the speed and efficiency of the LLM in generating and streaming responses, which is critical for user experience in real-time applications.

By continuously monitoring these performance metrics, we can make data-driven decisions to optimize the performance, reliability, and user experience of our AI-powered solutions through our synthetic CEF as proxy to production.

## 📦 Team Processes

We have a globally distributed team spanning across EMEA, AMER, and APAC. We hold two synchronous sessions weekly, emphasizing the team's preferences on the schedule and periodically changing the time based on these preferences. We have meetings dedicated to milestone planning, as well as engineering discussions and ideation.

### 📆 Regular Team Meetings

#### Team Meetings

1. **Weekly Team Sync**
   - **When:** Every Wednesday, 21:00 GMT
   - **What:** This meeting is dedicated to working on the vision and roadmap. The Engineering Manager and Product Manager ideate, discuss, and assign work as needed for the entire team.

2. **Weekly Engineering Sync**
   - **When:** Every Tuesday, 21:00 GMT
   - **What:** This meeting is dedicated to the engineering team for the purpose of syncing up on progress, discussing technical challenges, and planning the upcoming week and milestones. This is also to ideate on future milestones and building validation as a product.

3. **Quarterly Creative Destruction Labs**
   - **When:** Once in 10 weeks
   - **What:** This is a 48-hour working session, comprised of both synchronous and asynchronous activities, where the team comes together under the AI research category as part of a lab. The goal is to take a topic, deconstruct the old approach, and rebuild it in a new way to rapidly iterate toward the product roadmap and vision.

### 🌍 Shared Calendars

- AI-Powered Stage Calendar (Calendar ID: `c_n5pdr2i2i5bjhs8aopahcjtn84@group.calendar.google.com`)

### 🖖 Weekly and Quarterly Updates

Each week, the team publishes a report on the progress made during the past week and outlines the focus for the upcoming week. The report also includes a GenAI reading list to ensure that the engineers stay up-to-date in the ever-changing GenAI space [here](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/annoucements/-/issues).

We also publish a quarterly report that summarizes how we perform in reference to OKRs, highlights our achievements, celebrates milestones, identifies opportunities, and shares learnings [here](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/annoucements/-/issues/13).

### 📹 GitLab Playlist

We conduct regular walkthroughs as we add data, metrics, and evaluation workflows. [GitLab AI Model Validation Playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KrJQLuBcVpgFTPGMLfy5l_l) includes a list of these walkthroughs. Some videos published might be for internal purposes only.

### 🎯 Current OKR

Our current OKR can be viewed [here](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/6943) (GitLab internal).

### 🔗 Epics and Themes

We have two major epics that can be subdivided into further sub-epics and issues. The themes are based on the Category AI Evaluation and Category AI Research as below.

- [Category AI Evaluation](https://gitlab.com/groups/gitlab-org/modelops/ai-model-validation-and-research/-/epics/19)
- [Category AI Research](https://gitlab.com/groups/gitlab-org/modelops/ai-model-validation-and-research/ai-research/-/epics/1)

## 🔄 How to work with us?

We have issue templates for requesting a new model evaluation or for evaluating a feature (Internal Only). Below are the request templates that can be used.

1. If a feature team would like a model to be evaluated for a certain task, here is the request template: [Model Request](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library/-/blob/main/.gitlab/issue_templates/Model%20Request.md?ref_type=heads)
2. If a feature team would like to evaluate a certain use case, here is the request template: [Use-Case Request](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library/-/blob/main/.gitlab/issue_templates/Use%20Case%20Request.md?ref_type=heads)
3. If a feature team finds bugs that impact their ability to use the framework, here is a [template](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library/-/blob/main/.gitlab/issue_templates/Bug%20Fix%20Request.md?ref_type=heads) to request a fix in a [new issue](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library/-/issues/new?issuable_template=Bug%20Fix%20Request). Additionally encourage to post on [#g_ai_model_validation](https://gitlab.enterprise.slack.com/archives/C05CJ1T3P0W)

Further, we iterate and act more quickly with feedback and [here](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/prompt-library/-/issues/31) is the best place to provide feedback.

## 📝 Dashboards and Additional Resources (Internal Only)

- [GitLab Duo-Chat Evaluation Dashboard](https://lookerstudio.google.com/u/0/reporting/151b233a-d6ad-413a-9ebf-ea6efbf5387b/page/ay5gB)
- [GitLab Code Completion Foundational Model Dashboard](https://dashboards.gitlab.net/d/fecc5b69-8e38-4b4e-9fed-1c837f9c2b7m/code-completion-ai-evaluations-v1?orgId=1)
- [GitLab Code Suggestion Dashboard](https://lookerstudio.google.com/u/0/reporting/4a80a4ce-441c-4fb1-9454-ab5523d1cffc/page/ay5gB)
- [GitLab AI Testing and Evaluation Framework](https://internal.gitlab.com/handbook/product/ai-strategy/ai-integration-effort/ai_testing_and_evaluation/)
- [How to use CEF for Duo-chat Experimentation](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library/-/tree/main/doc/how-to?ref_type=heads#:~:text=1%20month%20ago-,run_duo_chat_eval.md,-Update%20duo%20chat)
- [How to use CEF for Code Suggestion Experimentation](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library/-/blob/main/doc/how-to/run_code_creation_eval.md?ref_type=heads)
- [Prompt Template for Models and Tasks Evaluated](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library/-/tree/main/data/prompts?ref_type=heads)
- [General Guidance of A/B Testing using CEF](https://docs.google.com/document/d/18c3GYxelFbVJOIjibshBIxT0orxDdNxqQM3RbZ3j34A/edit#heading=h.ek176csspj1b)

## 🔗 Additional Resources

- [Current Milestone Commitments](https://gitlab.com/groups/gitlab-org/-/boards/7476573) (don't forget to filter by current milestone!)
- [GitLab Validation Metrics](https://about.gitlab.com/direction/ai-powered/ai_model_validation/ai_evaluation/metrics/)
- [GitLab Evaluation Procedure](https://about.gitlab.com/direction/ai-powered/ai_model_validation/ai_evaluation/procedures/)
- [Blog: How we validate and test at scale](https://about.gitlab.com/blog/2024/05/09/developing-gitlab-duo-how-we-validate-and-test-ai-models-at-scale/)

**Required labels**

- Group: `~group::ai model validation`
