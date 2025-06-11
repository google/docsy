---
title: "Code Suggestions Model Evaluation Guide"
---

This document serves as a technical how-to guide for evaluating new Code Suggestions models.

## Evaluation template

When starting a model evaluation process, you must create an issue using the
[Model Evaluation Template](https://gitlab.com/gitlab-org/code-creation/code-suggestions-model-evaluation-hub/-/blob/main/.gitlab/issue_templates/model_evaluation_template.md).

## Evaluation criteria

Before supporting a model for Code Suggestions, we must evaluate that model against several criteria, including **correctness** and **latency**.
For a more detailed list of criteria to consider, please refer to the [evaluation template](#evaluation-template).

### Evaluating correctness

To evaluate model correctness, use [ELI5](#evaluating-by-eli5).

### Evaluating latency

To evaluate model latency, use either [ELI5](#evaluating-by-eli5)
or the [ai-model-latency-tester](#evaluating-by-ai-model-latency-tester).

When evaluating by latency, it is recommended to check requests coming from different regions.
The common regions to test are: **North America**, **Europe**, and **APAC**.

We can evaluate latency in the following ways:

- **Direct to provider**
  - Sending requests directly to the AI model provider, for example Vertex AI or Anthropic.
- **Routed through AIGW to provider**
  - Sending requests to the AIGW, which in turns sends requests to the provider.
  - Before this can be done, you will need to [implement the model in the AIGW](implementation_guidelines.md#ai-gateway).
    You can implement a model in the AIGW without making it generally available to GitLab users.

## Evaluation methods

### Evaluating by ELI5

[ELI5 (Eval like I'm 5)](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library/-/tree/main/doc/eli5) provides a structured way to evaluate AI models using [LangSmith](https://docs.smith.langchain.com/).
The ELI5 repository includes evaluation scripts, while the sample datasets and the result from the evaluations are stored in the [LangSmith platform](https://smith.langchain.com/).

#### Running and analyzing evaluations on ELI5

For guidance on:

- Running evaluations, see the [ELI5 documentation](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library/-/blob/main/doc/eli5/running_evaluation_locally/codesuggestions_evaluation.md).
- Evaluating correctness and latency, see the [Analyzing results documentation](https://gitlab.com/gitlab-org/modelops/ai-model-validation-and-research/ai-evaluation/prompt-library/-/blob/main/doc/eli5/running_evaluation_locally/codesuggestions_evaluation.md#analyzing-results).

**Running evaluations on a GCP instance**

Running ELI5 evaluations on a GCP instance is ideal for getting consistent latency values that are not affected by your internet connection or your current location.
Currently, there is no automated way to run evaluations on a GCP instance, so you must do this manually.

Please reach out to the `#g_code_creation` Slack channel for guidance.

### Evaluating by AI Model Latency Tester

The [AI Model/Provider Latency Tester](https://gitlab.com/gitlab-org/quality/ai-model-latency-tester)
automates the evaluation of latency of third-party AI service providers, using clients
in different geographic regions to simulate the experience of geographically dispersed users. It aims to assist in making
data-driven decisions regarding which models should power GitLab's AI features.

See the [Latency evaluations issue](https://gitlab.com/gitlab-org/quality/ai-model-latency-tester/-/issues/57)
for further guidance and updates.
