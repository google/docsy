---
title: "AI Continuity Plan"
description: "GitLab's Al Continuity Plan transparently lays out our process for selecting new Al vendors and how we intend to address any material changes our Al vendors may make to their practices with respect to the use of customer data."
---

## Purpose

Before selecting a third-party AI vendor, GitLab evaluates whether the vendor uses GitLab or GitLab customer content for developing, training, re-training, or fine tuning the vendor's language models.

The AI Continuity Plan outlines the process GitLab uses to (i) identify when third-party AI vendors modify their terms or practices to be inconsistent with the foregoing commitment; and (ii) transition to and implement alternative AI vendors that meet the foregoing commitment.

## Roles & Responsibilities

| Role  | Responsibility |
|-----------|-----------|
| GitLab Team Members | Responsible for following the requirements in this procedure |
| AI Powered Stage | Responsible for implementing and executing this procedure |
| Legal & Corporate Affairs (LACA) | Responsible for approving significant changes and exceptions to this procedure |
| Security Risk | Responsible for conducting periodic Business Impact Analysis and applying Critical System Tiers to Tech Stack Systems |

## Procedure

### Use the Subprocessor List to Identify Changes to AI Vendors

GitLab documents AI vendors who process customer data on our [Subprocessors list](https://about.gitlab.com/privacy/subprocessors/), which also allows anyone to sign up for notifications for Subprocessor changes. Those subscribed to this distribution list are notified whenever an event occurs that causes GitLab to amend its Subprocessor list, which may include the removal of AI vendors whose terms are likely to impact customers negatively.

### Process to Add AI Models

GitLab continuously evaluates the AI market to identify both proprietary and open source AI models that might be useful to power present and future GitLab AI features.

GitLab has a dedicated [model evaluation group](/handbook/product/categories/#ai-model-validation-group) that develops technologies to test new models. This group is chartered to identify, select, and validate the use of AI models for quality and performance to ensure they meet GitLab's needs. Read about their process [here](https://about.gitlab.com/direction/ai-powered/ai_model_validation/ai_evaluation/procedures/).

When a model is validated, a recommendation is made to the [AI Framework group](/handbook/product/categories/#ai-framework-group) to implement the selected model within the [GitLab AI Architecture](https://docs.gitlab.com/ee/development/ai_architecture.html). This triggers a variety of tasks including:

1. Procurement of new AI Model
    1. This includes Privacy, Security, and contractual reviews via GitLab's existing [procurement process](/handbook/finance/procurement/#vendor-lifecycle-management).
    1. GitLab Legal and Corporate Affairs evaluates any contractual terms relating to customer data usage with the AI vendor who offers the chosen model. They also negotiate terms as necessary to comply with our AI data retention policies and customer data usage policies.
    1. If the AI vendor requires an account, a GitLab corporate account will be provisioned and added to the GitLab [Tech Stack](/handbook/business-technology/tech-stack/). This allows GitLab to track which employees have access and limit access to only employees with a need to know. GitLab separates development and production account access whenever possible to reduce risk.
1. Notification of new AI Model
    1. The GitLab Subprocessor distribution list is leveraged to provide 30-day notice of new AI vendors. This waiting period provides customers with their contractual right to object to any new or materially different third-party processing of their data and a chance to terminate the services where third-party processing cannot be disabled. It also provides customers a window to audit planned usage and, where possible, opt-out of using unwanted AI features.
1. Implementation of AI Model
    1. The [AI Framework group](/handbook/product/categories/#ai-framework-group) implements support for the new AI model using the provisioned GitLab account and following the [GitLab development flow](/handbook/product-development/product-development-flow/).
    1. Coordination occurs with various teams who have implemented or will implement GitLab AI features based on this new AI model. This includes collaboration with the [Cloud Connector group](/handbook/product/categories/#cloud-connector-group) to ensure the model can be supported with all distributions of GitLab.
1. Rollout of AI model
    1. After the 30-day subprocessor notification period passes and the code changes pass the readiness review, then GitLab will proceed with rollout of the new AI vendor. It's common for GitLab to leverage feature flags and percentage rollouts to control and monitor the enablement of new functionality.

### Process to Switch AI Models

GitLab has developed an [AI abstraction layer](https://docs.gitlab.com/ee/development/ai_architecture.html#saas-based-ai-abstraction-layer), which GitLab uses to switch the underlying models that power our AI features. This abstraction layer helps reduce the technical complexity of changes, increases the speed at which GitLab can react to changes or failures from AI vendors, and standardizes the way GitLab Rails application interacts with AI models. The AI Abstraction layer also provides centralized telemetry and monitoring to help ensure that all AI vendors meet the production needs of GitLab AI functionality.

When GitLab identifies the need to switch an AI model powering GitLab's AI functionality, assuming the model is from an existing AI vendor and there is no other material change in the processing, no notification of change is triggered to customers. However, any [relevant documentation](https://docs.gitlab.com/ee/user/gitlab_duo/index.html) will be updated to reflect the AI model change as part of our Transparency policy with AI functionality.

If the model is from a new AI vendor, the Process to Add AI Vendors (described above) is triggered.

### Process when AI Vendor Terms Materially Change

GitLab has established subprocessor policy and term notification and review processes. When an AI vendor changes their terms, GitLab Legal is notified and reviews the changes to determine if they materially impact customers. In the event that term changes materially negatively affect customers, we will proceed with the following:

1. Consider temporarily disabling the affected AI functionality using the impacted AI vendor's models. Should disabling be necessary, GitLab will post a [status page](https://status.gitlab.com/) update indicating reduced functionality. Concurrently the following steps will be performed:
    1. Evaluate any alternative models that are already implemented in the [AI Abstraction layer](https://docs.gitlab.com/ee/development/ai_architecture.html#saas-based-ai-abstraction-layer). Should an alternative model be a candidate for replacement, a small scale test will be performed to ensure the model performs against the relevant use case. This will be performed by both the implementing team of that AI functionality and the AI Model Validation group. This ensures that AI functionality does not switch to a model which could significantly negatively impact the quality or performance of the feature.
        1. If the alternative model is validated as a reasonable replacement for the AI functionality, then code changes will immediately be implemented to route traffic to this new model. In most cases this will not require a GitLab version release, as the [GitLab AI Architecture](https://docs.gitlab.com/ee/development/ai_architecture.html) can be deployed outside GitLab's monthly release cadence.
    1. Should no relevant replacement model currently exist, procurement will begin to identify and select a new AI vendor with a model suitable for GitLab's AI functionality needs. This will then trigger the Process to Add AI Vendors (described above).

### Process for AI Vendor Security Incident

As with any security incident reported to GitLab, the Security Incident Response Team (SIRT) will engage to triage and facilitate remediation. Read more about the [SIRT incident response process](/handbook/security/security-operations/sirt/sec-incident-response/).

### Communication Plan and Role Assignments

When it comes to transitioning AI vendors to support GitLab's AI features and functionality, communication is of the essence. A plan is essential because it puts all team members on the same page and clearly outlines all communication.

Documents should all include updated team member contact information and each team member should understand exactly what their role is in the days following the triggering of the AI Continuity Plan.

Each GitLab team should be trained and ready to deploy in the event of a situation triggering the AI Continuity Plan.

Distribute and Verify the Plan / Approval from Senior Management

* GitLab documentation related to all procedure and guidelines that detail AI Continuity must be reviewed, updated, and formally approved by Product, Engineering, and LACA leadership.
* After developing basic guidelines, this plan will be distributed as a work in progress to the core team.
* The core team will review to verify that all technical details are covered and no deficiencies exist.
* The core team will review and add guidelines so that all related [DRIs](/handbook/people-group/directly-responsible-individuals/) are clear on what is required in all situations.
* Managers or team leads will share the relevant parts of the plan to all GitLab team members based on their role and department, and verify that they know what to do if the plan is triggered.
