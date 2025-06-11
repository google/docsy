---
title: "Create:Code Creation: Code Suggestions Guide"
---

## Introduction

This document contains Code Suggestions development guidelines for engineers.

For an overview of Code Suggestions, please refer to [Create:Code Creation Group engineering guide](../engineering_overview.md)

## Supporting new AI models

As the Code Suggestions offering continues to mature and we discover more about our users' needs as well as available AI models,
we will need to add or switch to new AI models that Code Suggestions will use.

Integrating a new AI model into our systems generally consists of three steps:

1. [Evaluation](model_evaluation_guide.md) - to make sure that the AI model satisfies the requirements for our use cases.
2. [Implementation](implementation_guidelines.md) - once we have evaluated the AI model as satisfactory, we need to update our code base accordingly.
3. [Rollout](model_rollout_guide.md) - after we have added support for the new model, we need to follow a standard rollout process to slowly introduce it to our users.
