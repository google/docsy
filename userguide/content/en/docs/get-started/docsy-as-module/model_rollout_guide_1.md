---
title: "Code Suggestions Model Rollout Guide"
---

This document serves as a guide for rolling out Code Suggestions models.

## Create a rollout plan

Create an issue using the [Rollout Plan Template](https://gitlab.com/gitlab-org/gitlab/-/issues/new?issuable_template=Code%20Suggestions%20Model%20Rollout%20Plan).
This must be done before or during the implementation of the new model.
Specific rollout plans may need to be created for different [rollout phases](#rollout-phases).

## Rollout method

Rollout of a new model will be done through a [`beta` feature flag](./implementation_guidelines.md#introduce-behind-a-feature-flag).

## Pre-rollout checklist

- Make sure that you have reviewed the [considerations when adding a new model](implementation_guidelines.md#considerations-when-adding-a-new-model).
- Make sure that the model provider or host can handle the volume of requests on AI Gateway.

## Rollout phases

Rollout of a new model is usually done in 3 phases:

1. Rollout to Code Creation team members and other interested stakeholders.
2. Rollout to all GitLab team members.
3. [Optional] Opt out selected customers from the new model
4. Rollout to all users.

### Roll out to Code Creation team members and other interested stakeholders

This is an optional but recommended step before rolling out to all GitLab team members. Code Creation team members and interested stakeholders will have more knowledge of the currently used models, and they can give valuable feedback around latency and correctness in comparison to current models.

Before rollout, make sure that an [internal feedback issue](https://gitlab.com/gitlab-org/code-creation/code-suggestions-model-evaluation-hub/-/blob/main/.gitlab/issue_templates/internal_feedback_template.md) has been created. Make sure to direct all feedback to the internal feedback issue.

### Roll out to all GitLab team members

This is a required step before rolling out to all users. With dogfooding from GitLab team members, the larger volume of requests can help us determine if:

- We need to increase the request quota for the model.
- Additional post-processing is needed for the completions coming from the model.
- We need to reach out to the model providers for bug fixes and other considerations.

Before rollout, make sure that the
[internal rollout](https://gitlab.com/gitlab-org/code-creation/code-suggestions-model-evaluation-hub/-/blob/main/.gitlab/issue_templates/internal_rollout.md)
and [internal feedback](https://gitlab.com/gitlab-org/code-creation/code-suggestions-model-evaluation-hub/-/blob/main/.gitlab/issue_templates/internal_feedback_template.md)
issues have been created. Make sure to direct all feedback to the internal feedback issue.

### [Optional] Opt out selected customers from the new model

Some customers may not be able to switch to the new model within the rollout timeline. We can opt them out by implementing an [opt-out feature flag](./implementation_guidelines.md#allow-customers-to-opt-out).

Ideally, we should enable this opt-out for the relevant customers _before_ rolling out to all users.

### Roll out to all users

This step is done when the model is ready for widespread use. Rollout to all users can be done by percentage of actors (recommended), or you can roll out to all users at once.

Since this is considered a feature release, ensure proper announcement of the release through appropriate channels before launch.
