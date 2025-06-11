---
title: "Code Suggestions Implementation Guidelines"
---

These are guidelines for supporting a model for Code Suggestions in the **[AI Gateway (AIGW)](#ai-gateway)**
and/or **[GitLab Rails](#gitlab-rails)**.

## Overview

Code Suggestion requests can be routed **direct to the AI Gateway** or **indirect through GitLab Rails**.

- For **direct-to-AIGW** requests, the IDE gets the model details from GitLab Rails through the
[Direct Connections API endpoint](https://docs.gitlab.com/ee/api/code_suggestions.html#fetch-direct-connection-information).
The IDE then sends a request to AIGW with the model details fetched from the GitLab Rails.
- For **indirect-through-GitLab-Rails** requests, the IDE sends a request to GitLab Rails'
[Code Completions API endpoint](https://docs.gitlab.com/ee/api/code_suggestions.html#generate-code-completions).
GitLab Rails then sends a request to the AIGW.

For a more in-depth overview of Code Completions vs Code Generations, and
direct-to-AIGW vs indirect-through-GitLab-Rails requests, please refer to the
[Code Suggestions Technical Overview](../engineering_overview.md#code-suggestions-technical-overview)
and the [Code Completion](../engineering_overview.md#code-completion) guides.

## AI Gateway

[AI Gateway repository](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist).

This is where the request to the AI model is implemented.
The AIGW serves as the hub between AI models and the rest of GitLab's systems.

You can introduce a new model in the AIGW without making it generally available to all GitLab users.
For example, you can introduce a new model for latency testing purposes. A new model only becomes
available to GitLab users when it is enabled through [GitLab Rails](#gitlab-rails).

### AIGW API endpoints

Code Completions and Code Generations requests to the AI Gateway are sent through the different Code Suggestions API endpoints. See the
[Code Suggestions API documentation](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/blob/main/docs/api.md#code-suggestions) for
further information about AIGW's Code Suggestions API.

### Considerations when adding a new model

- Make sure that you have specified **stop tokens** in the request to the model. (See [example MR](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/1298).)
- Depending on the model and use case, you may need to **include additional context** to the request. This can involve adding the content of open files, such as project libraries.
- Most models will require **post-processing**, such as trimming whitespaces or removing comments. You can use existing post-processors ([example MR](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/1351/)) or add a new one ([example MR](https://gitlab.com/gitlab-org/modelops/applied-ml/code-suggestions/ai-assist/-/merge_requests/1470)) as needed.

## GitLab Rails

[GitLab Rails repository](https://gitlab.com/gitlab-org/gitlab/).

GitLab Rails _does not_ send requests directly to an AI Model. It sends requests to the AIGW, which in turn sends requests to AI models.

GitLab Rails is the source of truth for which model to use for Code Completions or Code Generations. It toggles the current model through [feature flags](#introduce-behind-a-feature-flag).

For direct-to-AIGW requests, GitLab Rails specifies the model details through the Direct Access endpoint.
For indirect-through-GitLab-Rails requests, GitLab Rails includes the model details in the payload for its request
to the AIGW.

### GitLab Rails API endpoints

- [Direct Access endpoint](https://docs.gitlab.com/ee/api/code_suggestions.html#fetch-direct-connection-information) -
for direct-to-AIGW requests, this endpoint provides the information necessary to send a request to AIGW
- [Code Suggestions endpoint](https://docs.gitlab.com/ee/api/code_suggestions.html#generate-code-completions) -
this is the endpoint used for indirect-through-GitLab-Rails requests

## Generic guidelines for supporting a model

These are guidelines for when you are ready to support a model for Code Suggestions,
for example, after you have done evaluations and have considered the model to be acceptable.

### Create an epic

Introducing a model usually spans several tasks, so it is best to create an epic or sub-epic for this work.

### Create a rollout plan

You must create a rollout plan before deploying a new model.
Refer to the [Rollout Guide](model_rollout_guide.md#create-a-rollout-plan) for more details.

### Introduce behind a feature flag

For both the direct-to-AIGW and indirect-through-GitLab-Rails requests, the decision on what model to use
ultimately comes from GitLab Rails. When introducing a new model, you must
[create a `beta` type feature flag in GitLab Rails](https://docs.gitlab.com/ee/development/feature_flags/)
to toggle the enablement of the new model. This feature flag must have an accompanying
[rollout issue](https://gitlab.com/gitlab-org/gitlab/-/blob/master/.gitlab/issue_templates/Feature%20Flag%20Roll%20Out.md).

### Allow customers to opt out

Some customers may not be able to switch to the new model within the rollout timeline.
We can add an opt-out capability to give customers more time before switching to the new model.
This can be done by introducing an `ops` Feature Flag.
This should ideally be an _opt-out_ flag (instead of _opt-in_), and should always be `false` by default.

The Feature Flag actor can be decided on a case-by-case basis, but in general:

- On GitLab SaaS, the flag will be checked against the _top-level group_ that is providing the user with the [GitLab Duo Add-on](https://docs.gitlab.com/ee/subscriptions/subscription-add-ons.html) seat.
- On Self-Managed GitLab instances, the flag can be checked on the instance level.
