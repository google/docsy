---
title: "Well-Articulated Product Security Risks Guide"
description: "This guide outlines the requirements for submitting high-quality risk entries to the [Product Security Risk Register](/handbook/security/product-security/security-platforms-architecture/risk-register/) so they can be used effectively to prioritize product security work."
---

If you believe you have identified a systemic product or platform security risk in GitLab, the first step is to document the problem statement in the form of a Well-Articulated Risk. Only after a Well-Articulated Risk is documented can Product Security begin the process to triage, assess, prioritize, and treat it. Those downstream processes are out of scope for initial risk documentation.

## What Makes a Well-Articulated Risk

A well-articulated product security risk clearly communicates:

1. **Problem Statement**: A specific, concise description of the security vulnerability, design weakness, functional logical issue, or capability gap that exposes GitLab (the product) to compromise.
1. **Potential Impact**: Clear explanation of the potential harm to GitLab and/or its customers if the risk remains unaddressed, including possible business impacts, data compromise scenarios, service or operational disruptions, etc.
1. **Supporting Evidence**: Concrete trends, data points, or proofs of concept that substantiate the risk is real and not merely theoretical that can help inform prioritization.
1. **Scope and Scale**: Information about how widespread the risk is and what parts of the product or infrastructure are affected.

If the risk you are describing is complex, consider including a flowchart or diagram to explain it effectively.

When you are initially reporting a risk, you may have ideas about possible solutions, or you may already know of challenges or blockers that need to be addressed. That's great! After you have created your Well-Articulated Risk, add those to the Issue as comments. Those will feed into the downstream risk treatment planning process.

## What a Well-Articulated Risk is NOT

1. **A Solution Statement**: "We need to implement X technology" or "build Y feature" without explaining the underlying risk.
1. **A Feature Request**: Describing desired functionality without connecting it to an actual security exposure.
1. **An Individual Vulnerability**: Specific CVEs or component-based vulnerabilities belonging elsewhere.
1. **A Vague or Generalized Problem**: "Our security posture is weak" without specific details.

## Additional Guidance

If you need help drafting an initial risk, see this [Risk Drafting Guidance](/handbook/security/security-assurance/security-risk/storm-program/#risk-drafting-guidance) from our Security Risk Team. Alternatively, reach out to the [Security Platforms and Architecture Team](/handbook/security/product-security/security-platforms-architecture/) in Slack in #security-spa.
