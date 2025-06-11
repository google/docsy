---
title: "MLOps Working Group"
description: "Learn more about the GitLab MLOps Working Group attributes, goals, roles and responsibilities."
---

## Attributes

| Property        | Value           |
|-----------------|-----------------|
| Date Created    | 2021-08-04 |
| Target End Date | 2022-02-24 |
| Slack           | #wg_mlops (only accessible from within the company) |
| Google Doc      | [MLOPs Working Group Agenda](https://docs.google.com/document/d/18iOB05cFxS5to1eT55GwsENirBfVSjHCQJ2ostoY3cw/edit?usp=sharing) (only accessible from within the company) |
| Board           | [gitlab-org board](https://gitlab.com/groups/gitlab-org/-/boards/3264088?label_name[]=WorkingGroup%3A%3AMLOps) |
| Issue Label     | ~WorkingGroup::MLOps  |

## Goals

This Working Group has the following goals:

1. Begin defining and refine the results driven business value stream of MLOps at GitLab.
1. Formalize the processes related to provenance, storage and access of GitLab.com production data for the purpose of model training.
1. Share knowledge and determine best practices for hyper-parameter tuning, retraining, versioning, and deploying new ML models
1. Determine best practices for benchmarking models built by different frameworks/libraries for different use cases in terms of accuracy and performance, and how to do it in a continuous basis.
1. Determine how to distribute machine learning models on self-managed instances
1. Define a security/legal process for security-related ML models and data pre-processing

## Definitions

### What is MLOps?

As per Wikipedia, **MLOps** or **ML Ops** is a set of practices that aims to deploy and maintain machine learning models in production reliably and efficiently.

![MLOps Vendiagram](../mlops.png)

Read more about the topic area from the links below:

- [MLOps Wikipedia](https://en.wikipedia.org/wiki/MLOps)
- [MLOps: Continuous delivery and automation pipelines in machine learning](https://cloud.google.com/architecture/mlops-continuous-delivery-and-automation-pipelines-in-machine-learning)
- [Machine Learning Operations](https://ml-ops.org/)
- [MLOps Slack Group](https://mlops.community/)

### Related GitLab Documentation

- [MLOps Single-Engineer Group](/handbook/engineering/incubation/mlops/)
- [MLOps Primer](/handbook/engineering/incubation/mlops/)
- [MLOps Exploration](https://gitlab.com/groups/gitlab-org/incubation-engineering/mlops/-/epics/1)
- [Product Stage Direction - ModelOps](/handbook/engineering/development/modelops)
- [Draft Group Direction - MLOps](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/source/direction/modelops/mlops/index.html.md.erb)
- [Group Direction - AI Model Validation](https://about.gitlab.com/direction/ai-powered/ai_model_validation/)
- [AI Model Validation Group](/handbook/engineering/development/data-science/ai-assisted/)

### Related GitLab projects

- [Spamcheck](https://gitlab.com/gitlab-org/spamcheck)
  - [Architecture Diagram](https://gitlab.com/gitlab-org/spamcheck#architecture-diagram)
- [Tanuki-Stan](https://gitlab.com/gitlab-org/ml-ops/tanuki-stan)
- [UnReview](/handbook/engineering/development/data-science/ai-assisted/projects/unreview/)
  - [Architecture Diagram](/handbook/engineering/development/data-science/appliedml/projects/unreview/#architecture)

### Related ML Slack channels

- #g_applied_ml
- #g_machine-learning
- #feed_tanuki-stan
- #security-ml

## Exit Criteria

The charter of this working group is to bridge the gap between different teams that are building ML products at GitLab by discussing overlapping architectural concerns:

1. Creation of a mission statement that the MLOps Working Group operates under, added to the handbook.
1. Create a handbook page discussing a deep analysis of the tooling for ML out there and a proof-of-concept framework using an ideal pathway that GitLab teams can refer to and easily extend when kicking off ML-related projects.
1. Creation of helpers/libraries (presumably in Python) that can be shared across teams and used for the purposes of similar tasks e.g. data access and storage, data pre-processing.

## Outcome

1. The Working Group has brought together various teams that are working on different ways to leverage Machine Learning within GitLab the product and in their day-to-day work. It has given these teams a platform to discuss their mission and an opportunity to share knowledge on projects they are currently undertaking and what they are looking to achieve in the near future.
1. We will move forward with the creation of a monthly MLOps meetup that focuses on sharing ideas and showcasing work done by different teams, in a less formalized structure, to enhance awareness across the company.

## Roles and Responsibilities

| Working Group Role    | Person                | Title                                           |
|-----------------------|-----------------------|-------------------------------------------------|
| Facilitator           | Alex Groleau          | Security Automation Manager |
| Functional Lead                | Roger Ostrander       | Senior Security Engineer, Trust & Safety        |
| Functional Lead                | Alexander Chueshev         | Senior Backend Engineer, AI Framework |
| Functional Lead                | Taylor McCaslin         | Group Manager, Product - Data Science |
| Functional Lead                | David DeSanto           | Senior Director, Product Management - Dev & Sec |
| Functional Lead                | Ethan Urie            | Senior Backend Engineer, Security Automation    |
| Functional Lead                | Jayson Salazar        | Senior Security Engineer, Security Automation   |
| Functional Lead                | Juliet Wanjohi        | Security Engineer, Security Automation          |
| Functional Lead                | Eduardo Bonet         | Staff Full Stack Engineer - MLOps, SEG |
| Functional Lead                | Monmayuri Ray         | Engineering Manager, AI Model Validation |
| Functional Lead                | Shawn Sichak         | Senior Security Engineer, Trust and Safety |
| Member                | Alexander Dietrich    | Senior Security Engineer, Security Automation   |
| Member                | Charl De Wit            | Security Manager, Trust & Safety |
| Member                | Wayne Haber         | Engineering director |
| Member                | Bartek Marnane         | VP, Incubation Engineering |
| Member                | Marshall Cottrell      | Strategy and Operations (Technical) Staff |
| Member                | Kelly Chen             | Analytics Manager at Finance |
| Member                | Jay Stemmer            | Manager, Analytics & Insights |
