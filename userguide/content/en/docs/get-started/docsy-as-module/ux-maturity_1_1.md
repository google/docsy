---
title: "UX maturity guidelines for AI-assisted features"
description: "When to move an AI-assisted feature from Experiment to Beta, and to Generally Available (GA), from a UX perspective."
---

## Summary

The following guidelines focus on the **UX** aspect of the maturity of AI-assisted features. [Other aspects](https://docs.gitlab.com/ee/policy/alpha-beta-support.html), like stability or documentation, should also be taken into account to determine the appropriate feature maturity.

To evaluate the UX maturity of AI-assisted features, use three criteria from the [Product Development Flow](/handbook/product-development-flow/):

1. **Validation: Problem validation**: How well do we understand the problem?
1. **Validation: Solution validation**: How well does the solution address the problem?
1. **Build: Improve**: How successful is the solution?

## Suggested validation for AI features

| Criteria/Maturity | Experiment | Beta | GA |
|-|-|-|-|
| [Problem validation](#validation-problem-validation) | Can be based only on assumptions (evidence not required). | Mix of evidence and assumptions. | Only evidence or no high-risk assumptions. |
| [Solution validation](#validation-solution-validation) | Not required. | Solution validation with 6 internal users. | Solution validation with 6 external users. |
| [Improve](#build-improve) | Not applicable (no data before launch). | Quality goals set by the team are reached. | Quality goals set by the team are reached. |

### Validation: Problem validation

In order to determine a solution, it's essential to understand the customer problem. See [guidelines for AI problem validation](/handbook/product/ux/ux-research/research-in-the-ai-space/#guideline-1-problem-validation---identify-and-understand-user-needs).

### Validation: Solution validation

AI solutions follow the standard [solution validation](/handbook/product/ux/ux-research/solution-validation-and-methods/) process, with some additional considerations:

* It can beneficial to simulate the AI system's output in testing early to inform engineering efforts.
* AI systems can produce inaccurate or unpredictable output. It's important to collect user feedback about AI errors, trust, and risk.

See [guidelines for AI solution validation](/handbook/product/ux/ux-research/research-in-the-ai-space/#guideline-2-pre-solution-validation---collect-user-feedback-on-your-idea-before-building-anything) for more information.

### Build: Improve

**How successful is the solution?** To answer this, in this context of feature UX maturity, teams should look beyond feature usage as the success metric and try to include [usability](/handbook/product/ux/ux-research/usability-testing/#usability-at-gitlab) signals. High usage doesn't necessarily mean the feature is successful. Usability signals help assess solution success in terms of how _useful, efficient, effective, satisfying, and learnable_ it is.

It's also important to include AI response accuracy in your success metrics. AI-powered features can generate a response or output that is incorrect, irrelevant, or harmful. The risk of an incorrect response depends on the feature. It's important to test the AI system's responses as part of a formative evaluation. For example, you can have one or more expert evaluators (internal or external) test different scenarios to assess the AI responses.
