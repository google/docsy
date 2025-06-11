---
aliases: /handbook/customer-success/education-services/tech_stack/credly.html
title: "Credly Tech Stack Guide"
description: “Tech Stack Guide for Credly Digital Credentialing System"
---

The Tech Stack single source of truth is the [Tech Stack YAML](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml) and contains more detail about this app.

{{% tech-stack "Credly" %}}

### Implementation

The Implementation of this system took place in May/June of 2022 as all digital badges were switched from our previous system Badgr to Credly.

### System Diagram

The Credly digital credentialing system is a SaaS app and is integrated with the [Thought Industries LMS](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml).

```mermaid
graph TD
A[User starts completing content in Level Up] -->|Assignments/Submissions are graded| B(Level Up/Thought Industries registers completion and/or scores)
B --> C{Completion based on score}
C -->|Greater than 80%| D[Credly auto-issues the digital badge]
C -->|Less than 80%| E[Level Up sends an email to the user to retake]
```

### Data Model

The Data Model is as follows:

```mermaid
graph TD
A[Thought Industries collects user email and course completion/scores] -->|Assignments are graded| B(Course is completed successfully)
B -->|80% or better completion| C[TI sends user email through native integration with Credly]
C --> E[Credly issues digital credential to user via email]
```

### Integrations

The Credly digital credentialing system is a SaaS app and is integrated with the [Thought Industries LMS](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml).

### Key Reports / Dashboards

All Dashboards and Reports are a part of the system itself. No separate Sisense reports are available or planned.

### Support Guides and Step by Step Articles

The [Credly Support page](https://credlyissuer.zendesk.com/hc/en-us) offers a docs website with full articles on processes and step by step guides on using the system.
