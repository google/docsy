---
title: "AI Integration"
description: "The GitLab AI Integration Working Group aims to define, coordinate and ramp up integration of AI capabilities into all product areas"
status: active
---

## Attributes

| Property        | Value                                                                                                                                             |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------|
| Date Created    | 2022-03-23       |
| End Date | 2022-11-13              |
| Slack           | CLOSED `#wg_ai_integration` - Slack channel for the working group and the high level alignment on getting AI ready for Production   |
| Slack           | `#ai_integration_dev_lobby` - Channel for all implementation related topics and discussions of actual AI features   |
| Slack | `#g_ai_framework` - Channel for the AI Framework Team which is building the base for all features (experimentation API, Abstraction Layer, Embeddings, etc.) |
| Slack | `#ai_strategy` - Discussion on strategic and business initiatives surrounding AI/ML at GitLab. |
| Slack | `#ai-infrastructure` - Infrastructure/Platform support for AI integration. See also [&969](https://gitlab.com/groups/gitlab-com/gl-infra/-/epics/969). |
| AI Architecture Documentation | [Doc](https://docs.gitlab.com/ee/development/ai_architecture/) |
| Google Doc      | [Working Group Agenda](https://docs.google.com/document/d/19jVbWVYUPW3m7d2SzsXa2zXIAW7pSb2tdQ-AXWzT_DE/edit) |
| Feature Tracking | [Sheet](https://docs.google.com/spreadsheets/d/1rDEQjJ6NYRdXL9GT6xCSgrRdA-VU3gSnIh-JrjxByA8/edit#gid=0) |
| YouTube playlist | [Playlist on GitLab Unfiltered](https://www.youtube.com/playlist?list=PL05JrBw4t0KqFfwW4qBmATBftnvEwxXpg) |
| Parent Epic     | [Parent epic](https://gitlab.com/groups/gitlab-org/-/epics/9997)           |
| Epic/Issue Working Group label | [`wg-ai-integration` issue board](https://gitlab.com/gitlab-org/gitlab/-/boards/5512012?label_name[]=wg-ai-integration) and [`wg-ai-integration` epic search](https://gitlab.com/groups/gitlab-org/-/epics?state=opened&page=1&sort=start_date_desc&label_name[]=wg-ai-integration)  |
| Epic label for prioritized prototypes | [`wg-ai-integration-prioritized-prototype`](https://gitlab.com/groups/gitlab-org/-/epics?state=opened&page=1&sort=start_date_desc&label_name[]=wg-ai-integration-prioritized-prototype) |
| Issue Board for AI Framework group | [Issue board link](https://gitlab.com/gitlab-org/gitlab/-/boards/5518200) using label `group::ai framework` |
| Overview & Status | See [Exit Criteria](#exit-criteria) below |
| Meeting schedule | Monday, Tuesday, and Wednesday at 8am Pacific and Thursdays at 1pm Pacific |

## Goal

The GitLab AI Integration Working Group aims to define, coordinate and ramp up integration of AI capabilities into all product areas

### Overview

[Corresponding Epic](https://gitlab.com/groups/gitlab-org/-/epics/9997)

We want to enable all product teams to be able to use advanced AI capabilities for improving and adding functionality to the product so users can be faster and more productive in their DevSecOps lifecycle. For product teams we want to establish a clear and fast way for going from idea, experiment to production when using AI functionality. Incorporating the services, models and knowhow that the MLOps group has built over time and can provide to the wider team.

The working group will facilitate fast experimentation and prototyping of AI capabilities. We will also advise on what must be considered (and in some cases, get explicit approval on) before moving to production, including legal approval, ethical use of AI, potential necessary changes to terms of service, performance implications, hosting cost implications, infrastructure readiness, security readiness, licensing of 3rd party software/services, appropriate GitLab licensing levels for features, value add in helping users achieve their goals and needs, etc.

More information on the effort and plans can be found in the [internal handbook](https://internal.gitlab.com/handbook/product/ai-strategy/ai-integration-effort/).

### Goals

This is a list of topics that we want to discuss:

- Classification of AI possibilities and complexities
- Ideation and understanding how experimentation can be done
- [Rapid ML Prototyping](https://docs.google.com/document/d/1y-g4DfxKgBRg7vJCGCIGIKL-XWtajyNQSXYldYWgAt4/edit#heading=h.cax3xpkdgfp)
  - API's and Framework for experimentation
  - Feature Flagged Prototypes
  - Determine how teams without Product Design representation can progress with validation
- Groundwork
  - Base API's for all teams
  - Infrastructure
  - Documentation
  - Understanding of Jobs and user needs to be affected
- Existing ML features
- Road to production for features
  - Different gates

### Exit Criteria

The following criteria should be met for the group to disband:

- Product teams have a clear method to build and integrate AI into GitLab product areas.
- The integration platform should have a [product group](/handbook/product/categories/) handling maintanence and feature development
- We have a structured methodology for evaluating new AI models, adding them to the integration platform to allow them to be consumed by product teams.
- We have a roadmap plan to achieve GA for our initial AI experiments.
- Documented process for handling AI feature proposals as part of the [prioritization framework](/handbook/product/product-processes/#prioritization)
- Move [SAFE](/handbook/legal/safe-framework/) content from the [internal handbook](https://internal.gitlab.com/handbook/product/ai-strategy/ai-integration-effort/) to the public handbook where appropriate and [SAFE](/handbook/legal/safe-framework/).
- Develop an evaluation process of user experience between options to make more intelligent decisions on which engineering solution we recommend.

### Q2 OKRs

[Deliver X experimental, Y beta, and Z GA AI features](https://gitlab.com/gitlab-com/gitlab-OKRs/-/work_items/2048)

## Roles and Responsibilities

| Working Group Role      | Username        | Person                                                                   | Title                                                           |
| :---------------------- | :-------------- | ------------------------------------------------------------------------ | :-------------------------------------------------------------- |
| Executive Stakeholder   | @hbenson        | [Hillary Benson](/handbook/company/team/#hbenson)       | Senior Director, Product Management - Sec, Data Science & Monitor              |
| Executive Stakeholder   | @timzallmann    | [Tim Zallmann](/handbook/company/team/#timzallmann)       | Senior Director of Engineering, Dev                             |
| Facilitator             | @tmccaslin  | [Taylor McCaslin](/handbook/company/team/#tmccaslin)   | Group Manager, Product - Data Science                    |
| Functional Lead - AI Model Validation      | @mray  | [Monmayuri Ray](https://gitlab.com/mray2020)   | Engineering Manager AI Model Validation |
| Functional Lead - UX             | @jmandell  | [Justin Mandell](/handbook/company/team/#jmandell)   | Product Design Manager: Analytics, Govern, ModelOps, and Secure |
| Functional Lead - UX             | @pedroms  | [Pedro Moreira da Silva](/handbook/company/team/#pedroms)   | Staff Product Designer |
| Functional Lead - Legal             | @m_taylor  | [Matthew Taylor](/handbook/company/team/#m_taylor)   | Sr. Director of Legal |
| Pricing representative             | TBH | TBH  | Principal Pricing Manager, Product |
| Product representative             | @mushakov | [Melissa Ushakov](/handbook/company/team/#mushakov)   | Group Manager, Product - Plan |
| Product representative             | @sarahwaldner | [Sarah Waldner](/handbook/company/team/#sarahwaldner)   | Group Manager, Product - Create |
| Product representative             | @abellucci| [Alana Bellucci](/handbook/company/team/#abellucci)   | Senior Product Manager, Govern:Threat Insights |
| Product representative             | @joshlambert | [Joshua Lambert](/handbook/company/team/#joshlambert)   | Director of Product, Enablement |
| Product representative             | @tlinz | [Torsten Linz](/handbook/company/team/#tlinz)   | PM, Source Code |
| Development representative             | @johnhope | [John Hope](/handbook/company/team/#johnhope)   | SEM, Plan |
| Development representative             | @andr3 | [André Luís](/handbook/company/team/#andr3)   | FEM: Source Code |
| Development representative             | @cdu1  | [Chun Du](/handbook/company/team/#cdu1)   | Director of Engineering, Enablement |
| Development representative             | @igor.drozdov  | [Igor Drozdov](/handbook/company/team/#igor.drozdov)   | Staff Backend Engineer, Source Code |
| Development representative             | @jeromezng | [Jerome Ng](/handbook/company/team/#jeromezng) | Director of Engineering, Fulfillment |
| Development representative             | @pcalder | [Phil Calder](/handbook/company/team/#pcalder) | Senior Engineering Manager, Anti-abuse, Govern, and Growth |
| Development representative             | @nmccorrison | [Neil McCorrison](/handbook/company/team/#nmccorrison) | Engineering Manager, Govern: Threat Insights |
| Development representative             | @carlad-gl | [Carla Drago](/handbook/company/team/#carlad-gl) | Senior Backend Engineer, Manage: Import & Integrate |
| Development representative             | @donaldcook | [Donald Cook](/handbook/company/team/#donaldcook)   | EM, Project Management |
| Legal representative             | @jbackerman | [Jesse Backerman](/handbook/company/team/#jbackerman)   | Managing Legal Counsel |
| Vulnerability Research Representative | @idawson | [Isaac Dawson](/handbook/company/team/#idawson) | Staff Vulnerability Researcher |
| Vulnerability Research Representative | @dbolkensteyn | [Dinesh Bolkensteyn](/handbook/company/team/#dbolkensteyn) | Sr. Vulnerability Researcher |
| Third Party Security Risk Representative | @tdilbeck | [Ty Dilbeck](/handbook/company/team/#tdilbeck) | Security Risk Manager |
| Governance and Field Security Representative | @jlongo_gitlab | [Joseph Longo](/handbook/company/team/#jlongo_gitlab) | Governance and Field Security Manager |
| Security Compliance Representative | @kbray | [Ken Bray](/handbook/company/team/#kbray) | Sr. Security Compliance Engineer (Dedicated Markets) |
| Security Compliance Representative | @lcoleman | [Liz Coleman](/handbook/company/team/#lcoleman) | Security Compliance Manager (Commercial) |
| Security Automation Representative | @agroleau | [Alexander Groleau](/handbook/company/team/#agroleau) | Senior Security Engineering Manager (Automation) |
| Security Automation Representative | @imand3r | [Ian Anderson](/handbook/company/team/#imand3r) | Staff Security Engineer (Automation) |
| Application Security Representative | @greg | [Greg Myers](/handbook/company/team/#greg) | Security Engineer (Application Security) |
| Solutions Architecture Representative / Rapid Prototyping Team Member | @bartzhang | [Bart Zhang](/handbook/company/team/#bartzhang) | Channel Solutions Architect |
| Product Marketing Representative| @laurenaalves | [Laurena Alves](/handbook/company/team/#laurenaalves) | Senior Product Marketing Manager |
| Developer Relations Representative | @johncoghlan | [John Coghlan](https://gitlab.com/johncoghlan) | Director, Developer Advocacy |
| Privacy Representative | @emccrann | [Eugene McCrann](/handbook/company/team/#emccrann) | Lead Legal Counsel, Privacy |
| Quality Engineering Representative | @at.ramya | [Ramya Authappan](/handbook/company/team/#at.ramya) | Engineering Manager, Quality, Dev & Analytics Section |
| Infrastructure | @lmcandrew  | [Liam McAndrew](/handbook/company/team/#lmcandrew)  | Engineering Manager, Scalability Frameworks |
| Infrastructure | @igorwwwwwwwwwwwwwwwwwwww | [Igor Wiedler](/handbook/company/team/#igorwwwwwwwwwwwwwwwwwwww) | Staff SRE, Scalability Frameworks |
| Infrastructure | @mbursi | [Michele Bursi](/handbook/company/team/#mbursi) | Engineering Manager, Delivery System |
| Support | @ralfaro | [Ronnie Alphero](https://gitlab.com/ralfaro) | Support Engineering Manager |
| Enablement | @cs.wang | [Christopher Wang](https://gitlab.com/cs.wang) | Sr. Manager, Enablement (Sales Development) |

## Engineering Groups

We currently have two core AI Development groups at GitLab: AI Framework group and AI Model Validation group.

### AI Model Validation group

The AI Model Validation group helps all product groups to match the right model(s) and AI/ML-based techniques to the user problem they must solve. They do that by evaluating, building, training, and tuning many of the models GitLab uses as well as by proactively sharing AI resources and experience. Today, they also directly build and maintain some user-facing AI features.

- [AI Model Validation group](/handbook/product/categories/#ai-powered-stage) develops in-house AI features that run natively within GitLab infrastructure. The group develops these models to meet capability, quality, customizability, privacy, and cost requirements.  These components include an inference engine, abstraction layer, and models.
- The custom-built models help in use cases when there is a need to train models on customer-proprietary data (like all merge requests and commits for a customer) and when 3rd party models do meet our needs.
- Their currently released features are [code suggestions](https://docs.gitlab.com/ee/user/project/repository/code_suggestions/) which is currently in customer beta and [suggested reviewer](https://docs.gitlab.com/ee/user/project/merge_requests/reviews/#suggested-reviewers) which is GA.
- This group can help evaluate models for functional correctness and [model perplexity](https://surge-ai.medium.com/evaluating-language-models-an-introduction-to-perplexity-in-nlp-f6019f7fb914) based on metrics and (often large) benchmark datasets, which is a more statistical evaluation than manual testing. This can help determine the most quality model for a feature's use-case.
- They work in many languages, including Ruby on Rails, Golang, Python (for machine learning and data science), and Typescript (for the VS Code Plugin). The group comprises of [ML Scientistists](https://medium.com/cogitotech/what-is-the-difference-between-machine-learning-engineer-vs-machine-learning-scientist-cfcf4e48363f), [MLOps Engineers](https://www.databricks.com/glossary/mlops) , [ML Infrastructure Engineers](https://www.reddit.com/r/MLQuestions/comments/zd55mv/what_exactly_is_a_machine_learning_infrastructure/), and [Fullstack engineers](/job-families/engineering/development/fullstack/).

You can contact this group via Slack in [#g_ai_model_validation](https://gitlab.slack.com/archives/C023YB2FEUC). View their [issue board here](https://gitlab.com/groups/gitlab-org/modelops/applied-ml/-/boards/5588960?label_name[]=group%3A%3Aai%20assisted&group_by=epic).  To see who is engaged on this effort please see [here](/handbook/product/categories/#ai-model-validation-group).

### AI Framework

AI Framework exposes AI services and the underlying models (third party or native GitLab models) to all product groups.

- The AI Framework group enables the rest of the development department to build AI features through the [abstraction layer](https://docs.gitlab.com/ee/development/ai_features/).
- The abstraction layer supports OpenAI and is being extended to support equivalent Google AI functionality. Other commercial, open-source, and GitLab custom-built models are also being considered.
- This group empowers other groups to evaluate models via *manual human testing*, through the [Experimentation API](https://docs.gitlab.com/ee/development/ai_features/).
- This group works with Ruby on Rails as they make it easy for the GitLab product to add AI functionality through the `gitlab/gitlab-org` repo.

You can contact this group via Slack in [#g_ai_framework](https://gitlab.slack.com/archives/C051K31F30R). View their [issue board here](https://gitlab.com/gitlab-org/gitlab/-/boards/5518200).

### AI Engineering Allocation

Because of the dynamic nature of the AI work and folks to be engaged, we are putting the AI work under an Engineering Allocation.   This means that assignments may change rapidly as focus and priorities shift.  Current focus is on Code Suggestions adoption.

| Name | Role | Area of Work |
| ---- | ---- | ------------ |
| Alexandru Croitor | Senior Backend Engineer | AI Enablement |
| Eulyeon Ko | Backend Engineer | AI Enablement |
| Nicolas Dular |  Senior Backend Engineer | AI Enablement |
| Denys Mishunov | Staff Frontend Engineer | AI Enablement |
| Jan Provaznik | Staff Backend Engineer | AI Enablement |
| Mikołaj Wawrzyniak | Staff Backend Engineer | AI Enablement |
| Pavel Shutsin | Senior Backend Engineer | AI Enablement |
| Max Woolf | Staff Backend Engineer | AI Enablement |
| Tan Le | Senior Fullstack Engineer | AI Enablement |
| Andras Herczeg | Backend Engineer | AI Enablement |
| Sebastian Rehm | Engineering Manager | AI Enablement |
| Daniel Tian | Senior Frontend Engineer | Threat Insights |
| Gregory Havenga | Backend Engineer | Threat Insights |
| Kerri Miller | Staff Backend Engineer | Code Review |
| Stanislav Lashmanov | Senior Frontend Engineer | Code Review |
| Simon Knox | Senior Frontend Engineer | Plan:Project Management |
| Nikola Milojevic | Senior Backend Engineer | Application Performance |
| Aleksei Lipniagov | Senior Backend Engineer | Application Performance |
| Matthias Käppler | Staff Backend Engineer | Application Performance |
| Roy Zwambag | Backend Engineer | Application Performance |
| Paul Phillips | Engineering Manager | Application Performance |
| Igor Drozdov | Staff Backend Engineer | Source Code |
| Patrick Cyiza | Backend Engineer | Source Code |
| Natalia Radina | Frontend Engineer | Source Code |
| Alper Akgun| Staff Fullstack Engineer | VS Code Extension |
| Tomas Vik| Staff Fullstack Engineer | VS Code Extension |
| Enrique| Staff Frontend Engineer | VS Code Extension |
| André Luís | Engineering Manager | Editor Extensions  |
| Mike Eddington | Staff Backend Engineer | Editor Extensions (Visual Studio) |
| Ross Fuhrman | Senior Backend Engineer | Editor Extensions (Visual Studio) |
| Gabriel Mazetto | Senior Backend Engineer | Editor Extensions (JetBrains) |
| Naman Gala | Senior Backend Engineer | Editor Extensions (JetBrains) |
| Marshall Cottrell | Principal | Editor Extensions (Code Suggestions/VS Code) |
| Illya Klymov | Senior Frontend Engineer | Editor Extensions (Code Suggestions/VS Code) |
| Lena Horal-Koretska | Senior Frontend Engineer | Editor Extensions (Language Server) |
| Erran Carey | Staff Incubation Engineer | Editor Extensions (Neovim) |
| Ash McKenzie | Staff Backend Engineer | Editor Extensions (Neovim) |
| Jay Swain | Engineering Manager |  Model Evaluation |
| Andrei Zubov | Senior Frontend Engineer | Deploy:Environments, Model Evaluation |
| Allison Browne | Senior Backend Engineer | Model Evaluation, Verify:Pipeline Execution |
| Dylan Bernardi | Associate Backend Engineer | Model Evaluation |
| Stephan Rayner | Senior Backend Engineer | Model Evaluation |
| Igor Wiedler | Staff Site Reliability Engineer | Model Evaluation |
| Alejandro Pineda | Staff Site Reliability Engineer | Model Evaluation |
