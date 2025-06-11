---
title: "Proposed Usecase: Data Science"
---

## The Market Viewpoint

## Data Science — AKA DataOps, MLOps, etc

### Common challenges

Common challenges in data science are described on the [Data Science with GitLab use case page](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/data-science/) and generally include being cross-functional, agile, and iterative while unlocking the value in an organization's data. To do this, data teams need to:

- Collaborate both inside and outside their teams, and often inside and outside their organization
- Plan and manage projects and sprints, with tools flexible enough to support scrum, kanban, and more
- Version control everything: manage and track different versions of files, models, test cases, data sets
- Automate key workflow steps, that are otherwise slow and subject to manual errors
- Streamline testing and validation of work, making it much faster and more repeatable
- Simplify infrastructure management and often across multiple cloud providers

To be fleshed out as with [other use cases](/handbook/marketing/use-cases/).

### Keywords and definitions

[Keywords and definitions](keywords/)

## Personas

### User Personas

Who are the [users](/handbook/product/personas/#user-personas)

- Data Analyst
- Data Engineer
- Data Scientist
- Platform (or DataOps) Engineer
- AI Engineer

### Buyer Personas

Who are the [buyers](/handbook/product/personas/)

- Data Consumer (executive level)
- Enterprise Data Steward
- Data Team Manager
- Engineering Manager of Data Products, or of Data Infrastructure
- Director of Data and Analytics, or Chief Data Officer

## Message House

The [message house](message-house/) provides a structure to describe and discuss value and differentiators for data science.

### Discovery Questions

- list key discovery questions

## Analyst Coverage

[Media coverage, 20 Feb. of Gartner's 2020 Magic Quadrant For Data Science And Machine Learning Platforms.](https://www.forbes.com/sites/janakirammsv/2020/02/20/gartners-2020-magic-quadrant-for-data-science-and-machine-learning-platforms-has-many-surprises/#4b57dd763f55)

Internal to GitLab:

- [EMA research on the impact of AI on DevOps in the enterprise](https://drive.google.com/file/d/1pEum6vqD85v1A77z72e5U1EqtiQagl5d/view?usp=sharing)
- [Gartner on App Dev in the Era of AI, at App Summit](https://drive.google.com/file/d/18op1VgbtEZgyU8WLiEST-0DzZ1JY96Wm/view?usp=sharing)
- [Gartner on Git support as a baseline requirement in Data Science and Machine Learning Platforms](https://drive.google.com/file/d/1XPzdE-pT-1ThHZmNINn-ewyULeyThTSu/view) see pages 4, 7-8

**AR Plan:** We will not have an AR Plan for this usecase, at this time. Generally, usecase AR plans provide key details on how we intend to engage with the analyst community.

## Market Requirements

| Capability |  Description  |  Typical features enabling this capability |  Value/ROI |
|----------|-------------|----------------|-------|
| **Data Science tools integrations** |  Solution supports strong integrations both upstream and downstream such as with ETL, data warehouses, artifact repositories, security scanning, compliance management, etc. There is flexibility for users who need or want a balance between native capabilities and integrations.  |  Particular need for Open Core and Open Source support including Git and Docker, Kubernetes, Jupyter Notebooks, Python and R, Hadoop and Spark. Integrations generally with binary repos, IDEs, APIs, third party libraries, or extensibility via plugins.  |  Increases efficiency. Lessens cost and the extra work that comes along with potential migrations.  |
| **Protect and secure assets** | The solution provides mechanisms to host assets (repos), place and manage different change permissions for the users that access those repos as well as keep a detailed chain of custody of all changes these assets are subject of. | Single sign-on, code ownership, change reviews, change approvals, manage allowed IPs, Activity stream, GPG signed commit, Reject unsigned commits, Protected branches, branching, committer access rules, Compliance dashboard etc. | Secures IP and valuable assets. Provides information on project history changes   |
| **Supports numerous assets** | The solution is able to manage and maintain the version history of the diverse assets and support the development patterns that each asset implies | Component reuse, traceability, design management, branching, diffing, merging, object storage, design versioning | Able to manage assets and files for the entire development team, no matter how diverse, creating a single source of truth for the product configuration and making visibility and communication available at every level |
| **Foster Collaboration** | The solution is designed to enable and foster collaboration among team members. It also streamlines agreed collaboration with automation of repetitive tasks | Create fast new branches of the project, add new files/assets, collaborate on proposed changes, review comments, suggest changes, webIDE, suggestion approvals, conflict resolution, merge, diffing, hand-offs, Design management and operations, workflow automation, Wiki, snippets, version controlled snippets, Automatically update or close related issue(s) when a merge request is merged, Configurable issue closing pattern, display merge request status for builds in CI system, visibility into security scans and build stats. | Code quality increase and improved release velocity through team review and validation. |
| **Build and test automation** |  Streamlines application development workflow by connecting simple, repeatable, automated tasks into a series of interdependent automatic builds and associated tests. Run and manage automated tasks in the background, preview and validate changes before it's merged to production. Ensure software is consistently built and tested without manual intervention, enabling developers to get rapid feedback if their code changes introduce defects or vulnerabilities. Teams have control over where automated jobs run either in the cloud (public/private/hybrid) or using shared infrastructure.  |  CI/CD pipelines, scalable resources, job orchestration/work distribution, automated deployments, caching, external repository integrations, and the ability to run isolated, automated, tests (such as unit tests, regression tests, etc.).  |  Development teams can work with speed and efficiency. Catch potential errors sooner rather than later before they intensify.  |
| **Cloud-agnostic deploy and manage** |  asdf  |  asdf  |  asdf  |

## Top 3 Differentiators

| Differentiator | Value | Proof Point  |
|-----------------|-------------|---------------|
|  **Leading SCM and CI in one application**  | GitLab enables streamlined code reviews and collaboration at proven enterprise scale, making development workflows easier to manage and minimizing context switching required between tools in complex DevOps toolchains. Users can release software faster and outpace the competition with the ability to quickly respond to changes in the market. | Forrester names GitLab among the leaders in [Continuous Integration Tools in 2017](https://about.gitlab.com/blog/2017/09/27/gitlab-leader-continuous-integration-forrester-wave/), Alteryx uses GitLab to have code reviews, source control, CI, and CD [all tied together](https://about.gitlab.com/customers/alteryx/). Axway overcomes legacy SCM and complex toolchain.  |
|  **Open Source; Everyone Can Contribute**  | Open core development model allows anyone to contribute to the functionality of the product. Uniquely transparent product development process engaging customers, partners, and the community. Strong and growing community - thousands of organizations and millions of users.  | Over 3,000 active community code contributors. [Siemens](https://about.gitlab.com/blog/2018/12/18/contributor-post-siemens/) needed to improve and enhance their developer tools, and actively contribute to GitLab project with upstream commits.  |
|  **Deploy Your Software Anywhere**  | Deploy and manage your models in any environment, including any cloud with support for GCP, AWS, Azure, OpenShift, VMWare, On Prem, Bare Metal, etc. Gain workflow portability - one deployment workflow regardless of destination. Provides a complete DevOps platform that allows teams to have the same productivity metrics, governance, and other connective tissue, no matter what cloud they use.  |  [Ask Media Group](https://web.archive.org/web/20230129170441/https://www.askmediagroup.com/microservices-in-practice/) found it difficult to manage the process of building and deploying microservices. With GitLab Premium, their developers can immediately begin to contribute a new service that can be deployed to AWS as soon as they start.  [Gartner's 2019 Hype Cycle for Infrastructure and Operations Automation](https://www.gartner.com/en/documents/3947548/hype-cycle-for-i-o-automation-2019): GitLab helped to define the market, and is recognized as a relevant vendor for both Continuous Delivery and Toolchain Orchestration.  |

## The GitLab Solution

## Competitive Comparison

TBD - will be a comparison grid leveraging the capabilities

## Proof Points - customers

### Quotes and reviews

- List of customer quotes/reviews from public sites

### Case Studies

- List of case studies
NOTE: In short, concise value/ Proofpoint format

### References to help you close

- Link to SFDC list of usecase specific references

## Partners

- Describe how key partners help enable this usecase

## Key Value (at tiers)

### Premium

- Describe the value proposition of why Premium for this usecase

### Ultimate

- Describe the value proposition of why Ultimate for this usecase

## Resources

### Presentations

- LINK

### Whitepapers and infographics

- LINK

### Videos (including basic demo videos)

- LINK

### Integrations Demo Videos

- LINK

### Clickthrough & Live Demos

- Link
