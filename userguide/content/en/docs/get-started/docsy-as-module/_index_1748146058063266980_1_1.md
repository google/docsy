---
title: "Auxiliary Solution Resource: Continuous Delivery"
---

#### Who to contact

| Product Marketing | Developer Advocate |
| ---- | --- |
| Daniel Hom (@danielhom) | Cesar Saavedra ( @csaavedra1 ) |

## The Market Viewpoint

## Continuous Delivery

> "Deployment is manual"
> "Functional tests are manual"
> "Time consuming or lack of rollback on performance degradation or production errors"
> "Hard to maintain environment configurations and hard to operate"
> "No consistency in deployment process"
> "Manual / hard coded configurations"
> "No standardized software artifact"
> "No release management in place"
> "Too dependent on other teams to get any release done"

If these are the typical problems you face, Continuous Delivery is for you.

Continuous Delivery is the next logical step after continuous integration and it streamlines and automates the application release process to make software delivery repeatable and on demand - from provisioning the infrastructure environment to deploying the tested application software to test/staging or production environments. Organizations practicing continuous delivery are able to plan their release processes and schedules, automate infrastructure and application deployments, manage deployed infrastructure and application resources resources, and analyze metrics to optimize the software delivery process.

### Why Continuous Delivery?

- **Consistent & repeatable release process** - lesser manual processes imply the release process is less error prone and hence can be repeatable for every minimal change to the code
- **Faster time to market** - automation of environment provisioning, software deployment and rapid feedback helps teams to iterate faster and rollback when necessary
- **Lower risk releases** - by using progressive delivery practices such as advanced deployments: incremental / blue green / canary deployments, review apps, feature flags and a deployment performance feedback loop, organizations are able to validate their software before widespread deployment

## Personas

### User Persona

The typical **user personas** for this use case are:

#### DevOps Engineer, Devon

The [DevOps engineer](/handbook/product/personas/) is the stable counterpart for the Developer to aid with support of the infrastructure, environment and integrations necessary for the developer to deploy their code to test/staging or production environments.

#### Systems Administrator, Sidney

The [Systems administrator](/handbook/product/personas/#sidney-systems-administrator) is the infrastructure expert - who contributes to modeling, maintaining and scaling the test/staging and production environments - including physical, virtual or cloud infrastructure and the application infrastructure like databases and middleware.

#### Release Manager, Rachel

The [release manager](/handbook/product/personas/#rachel-release-manager) has a central role in release planning, scheduling, identifying dependencies and resources to ensure that the release is timely. The release manager helps automating the release process.

#### Platform Engineer, Priyanka

The [platform engineer](/handbook/product/personas/#priyanka-platform-engineer) is a specialist in modern platforms and aims to empower developers to provision, deploy and decommission tiered environments in a self service manner.

#### Application Operations, Allison

The [operations specialist](/handbook/product/personas/#allison-application-ops) ensures that the deployed application is available and performing to the required performance parameters.

### Buyer Personas

The typical **buyer personas** for this use case are:

#### Infrastructure Engineering Director, Kennedy

The [Infrastructure Engineering Director](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/) is responsible for building and scaling highly available environments. He/She frequently has the agenda of Cloud initiatives and Cost Optimization in the organization.

#### Release and Change Management Director, Casey

The [Release and Change Management Director](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/) is responsible for managing complex releases from concept to delivery. The CIO may be the final decision maker or buyer, but the Release and Change Management Director has significant influence in the buying process.

## Industry Analyst Resources

Examples of comparative research for this use case are listed just below. Additional research relevant to this use case can be found in the [Analyst Reports - Use Cases](https://docs.google.com/spreadsheets/d/1vXpniM08Ql0v0yDd22pcNmXpDrA-NInJOwj25PRuHXA/edit?usp=sharing) spreadsheet.

## Market Requirements

| Market Requirement | Description | Typical capability-enabling features | Value/ROI |
|---------|-------------|-----------|------|
| 1) **Release Planning** | The solution should be able to define the planning of the release workflow which includes determining what goes into the release (Bill of Material of applications & services), what are the dependencies (application / micro services dependencies), who will do it (people resource management), when will it be done (scheduling), what is the readiness criteria, who will approve the release | - Bill of materials (release modeling) <br/> - Release dependencies <br/> - Release Versioning <br/> - Sequence of the release <br/> - Schedule of events and release calendar <br/> - Resource planning including forecasting <br/> - Readiness criteria <br/> - Approval gates  <br/> - List of isuues in the release and their status  <br/> - Release Evidence |  |
| 2) **Manage the artifacts and binary assets**  | The solution should be able to manage the inputs from continuous integration i.e., artifacts and binary assets to deploy the artifacts to the test, staging or production environments.  | - Maintain versions, dependencies, meta data for the application <br/> - Maintain container images <br/> - Retrieve application / binary artifacts for deployment <br/> - Separation of duties and access control <br/> - Support a range of common package formats and third party integrations <br/> - Repository / registry can be used on-prem or in the cloud |  |
| 3) **Environments management (i.e., Operating Environment)** | The solution should be able to enable consistent and repeatable modeling of the environment for test, staging and production - including on-prem, virtual, cloud (a mix of multi and hybrid cloud environments), maintain a system of record of the environment & various elements of the environment (akin to a CMDB) | - Infrastructure modeling (via UI / Infrastructure as a code, blueprints, runbooks) <br/> - Support hybrid infrastructure environments in modeling (phyical, virtual, cloud (both multi & hybrid)) <br/>  - System of record of various environments (test, stage, production) <br/>  - System of record of configurations & policies <br/>  - Access control / approvers for environment changes <br/>  - Configuration & Policy Change Management <br/>  - Automated environment discovery |  |
| 4) **Database Provisioning** | The solution should be able to model, provision and deploy to databases required to support the running application | - Model database dependencies <br/> - Discovery of databases <br/> - Provisioning and configuration of databases such as schema, stored procedures <br/> - Loading data (data provisioning) <br/> - Access control / approvers <br/> - Configuration Change |  |
| 5) **Middleware Provisioning** | The solution should be able to model, provision and deploy to middleware software required to support the running application | - Model middleware dependencies <br/> - Discovery of middleware <br/> - Configuration of middleware servers & clusters <br/> - Access control / approvers <br/> - Configuration Change |  |
| 6) **Application Release Automation & Delivery** | The application should be able to automate the end to end release activities including build & test (which is covered as part of continuous integration) and deployment automation which includes scheduling various tasks, deploying the application to the desired environments, rollout scenarios, rollback and system validation |  - Delivery Pipelines <br/> - Pipeline versioning <br/> - Task Scheduling & Sequencing <br/> - Rollout scenarios such as canary, incremental roll out, blue green deployments <br/> - Feature Flags <br/> - Review Apps <br/> - Performance testing & validation |  |
| 7) **Resource allocation and management** | The application should be able to provide a detailed and summarized view of the costs associated with the infrastructure and application infrastructure modeled as well as optimization recommendations | - Cost management <br/> - Cost optimization |  |
| 8) **Multi Platform/Cloud/Integration Support** | The application should be able to play well with multiple clouds, multiple platforms (e.g., Linux, Unix, Windows, container platforms, mainframe, midrange, mobile, specialized), multiple integrations (e.g., CMPs, Registries, Orchestration tools, APM tools, etc) | - Cloud Support (AWS, GCP, Azure, IBM, Oracle, etc) <br/> - Platform Support (Linux, Unix, Windows, container platforms, mainframe, midrange, mobile, specialized) <br/> - Integration Support (CMPs, Registries, Orchestration tools, APM tools) |  |
| 9) **Governance and Compliance** | The solution should be able to enforce separation of duties, access control, maintain a system of record of changes for compliance purposes, maintain release traceability back to requirements, enforce information security checks and policies | - Separation of duties including role based access control to pipelines and deployment environment <br/> - Credential management <br/> - Approver gates <br/> - Traceability to requirements <br/> - Security checks <br/> - Change logs <br/> - Compliance reports |  |
| 10) **Analytics and reporting** | The solution should be able to provide analytics and reports to visualize release status & statistics, pipeline status & statistics, deployment status & statistics, environment status & statistics, change reports for compliance | - Release status & statistics like release plan, timeline, status <br/> - Pipeline status & statistics like success, failure rates, pipeline heath <br/> - Deployment status & statistics like deployment frequency, change failure rates (DORA metrics) <br/> - Environment status & statistics like usage, availability, downtime, failure rates <br/> - Change logs, approvers & compliance reports - Release Evidence <br/>  |  |
| 11) **Enterprise readiness** | The solution should be able to support enterprise capabilities such as High Availability / Disaster Recovery, secure storage of data, access control | - High Availability, Disaster Recovery <br/> - Secure data storage <br/> - Separation of duties and access control |  |

## The GitLab Solution

<iframe width="960" height="569" src="https://www.youtube.com/embed/QArt7rqfbqk" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How GitLab Meets the Market Requirements

A collection of short demonstrations that show GitLab's CD capabilities.

| Market Requirements | How GitLab Delivers | GitLab **Stage**/Category | Demos |
| ------ | ------ | ------ | ------ |
| 1) **Release Planning** | A GitLab Release is a snapshot of the source, build output, artifacts, and other metadata associated with a released version of your code. The release evidence contains the bill of material of the release i.e., everything in the release including release milestones and release assets | [**Release Stage**](https://about.gitlab.com/stages-devops-lifecycle/release/): [Release Orchestration](https://docs.gitlab.com/ee/user/project/releases/), [Release Evidence](https://docs.gitlab.com/ee/user/project/releases/#release-evidence) | tbd |
| 2) **Manage the artifacts and binary assets**  | In the CD usecase, artifacts already created in the CI usecase can be viewed, downloaded, edited and shared. Various formats including maven, npm, nuget, amongst others are supported | [**Package stage**](https://about.gitlab.com/stages-devops-lifecycle/package/): [Package Registry](https://docs.gitlab.com/ee/user/packages/), [Container Registry](https://docs.gitlab.com/ee/user/packages/container_registry/), [Dependency Proxy](https://docs.gitlab.com/ee/user/packages/dependency_proxy/) | tbd |
| 3) **Environments management (i.e., Operating Environment)** | GitLab leverages partners like Terraform to model and discover hybrid environments. GitLab supports storing these environments and configurations as code, maintaining a system of record of various environments and their configurations as code, snapshot view of the environments in a dashboard and deploying to hybrid infrastructure environments. While you can use GitLab CD to deploy apps almost anywhere, GitLab naturally supports Kubernetes, with a keen sight to improving non-cloud native support | [**Configure stage**](https://about.gitlab.com/stages-devops-lifecycle/configure/): [Auto DevOps](https://docs.gitlab.com/ee/topics/autodevops/), [Kubernetes Management](https://about.gitlab.com/solutions/kubernetes/), [Runbooks](https://docs.gitlab.com/ee/user/project/clusters/runbooks/), [Infrastructure as Code](https://docs.gitlab.com/ee/user/infrastructure/), [Environments Dashboard](https://docs.gitlab.com/ee/ci/environments/environments_dashboard.html) <br> [Terraform based infrastructure automation](https://about.gitlab.com/webcast/gitops-gitlab-terraform/)| tbd |
| 4) **Database Provisioning** | GitLab integrates with Terraform to enable model and provision infrastructure, including databases. GitLab enables Infrastructure as code for Terraform - maintaining infrastructure and configurations of environments in source control within GitLab  | [Terraform based infrastructure automation](https://about.gitlab.com/webcast/gitops-gitlab-terraform/), [Infrastructure as code with Terraform and GitLab](https://docs.gitlab.com/ee/user/infrastructure/) | tbd |
| 5) **Middleware Provisioning** | GitLab integrates with Terraform to enable model and provision infrastructure, including middleware. GitLab enables Infrastructure as code for Terraform - maintaining infrastructure and configurations of environments in source control within GitLab | [Terraform based infrastructure automation](https://about.gitlab.com/webcast/gitops-gitlab-terraform/), [Infrastructure as code with Terraform and GitLab](https://docs.gitlab.com/ee/user/infrastructure/) | tbd |
| 6) **Application Release Automation & Delivery** | GitLab supports multiple advanced deployment strategies including progressive and incremental delivery. Review apps provide an opportunity to preview web applications before deployment, feature flags allow you to control the audience of features. GitLab CI/CD pipelines can be architected to configure and sequence your pipeline, gitlab-ci.yml file can be used to setup and define pipeline versions. Additionally, perform post deployment monitoring using browser performance testing for web applications and application performance testing using the monitor stage capabilities | [**Release Stage**](https://about.gitlab.com/stages-devops-lifecycle/release/): [Continuous Delivery](https://about.gitlab.com/stages-devops-lifecycle/continuous-delivery/), [Review Apps](https://docs.gitlab.com/ee/ci/review_apps/), [Advanced Deployments](https://docs.gitlab.com/ee/topics/autodevops/index.html#incremental-rollout-to-production), [Feature Flags](https://docs.gitlab.com/ee/operations/feature_flags.html), [Release Evidence](https://docs.gitlab.com/ee/user/project/releases/#release-evidence), [Secrets Management](https://docs.gitlab.com/ee/integration/vault.html) <br> [**Monitor Stage**](https://about.gitlab.com/stages-devops-lifecycle/monitor/): [Metrics](https://docs.gitlab.com/ee/operations/metrics/), [Logging](https://docs.gitlab.com/ee/administration/logs/), [Tracing](https://docs.gitlab.com/ee/operations/tracing.html), [Error Tracking](https://docs.gitlab.com/ee/operations/error_tracking.html) <br> [**Verify**](https://about.gitlab.com/stages-devops-lifecycle/verify/): [Browser Performance Testing](https://docs.gitlab.com/ee/ci/testing/browser_performance_testing.html)  | [![Incremental rollout](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/cd/youtube_social_icon_red-32x23.png) Application Release Automation & Delivery](https://youtu.be/ZAYBxLLcZrM) <br> [![Feature Flags](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/cd/youtube_social_icon_red-32x23.png) Feature flags](https://youtu.be/_BZDM8LgGzg) |
| 7) **Resource allocation and management** | Users can utilize GitLab CI and Monitoring capabilities to chart their resource allocation and consumption and setup alerts when thresholds have been met as well as view cost implications of proposed Infrastructure as Code changes in their Merge Request. Native support for this capability is part of the GitLab roadmap | [Cluster Cost Optimization](https://about.gitlab.com/direction/delivery/#what-we-arent-focused-on-now) [Limiting the number of deployments to a specific resource](https://docs.gitlab.com/ee/ci/yaml/#resource_group) - If multiple jobs belonging to the same resource group are enqueued simultaneously, only one of the jobs is picked by the runner, and the other jobs wait until the resource_group is free.  | tbd |
| 8) **Multi Platform/Cloud/Integration Support** | GitLab can be installed on AWS, Google Cloud, Azure and can be deployed to multiple clouds including AWS, Google Cloud, Azure, VMWare, IBM amongst others. GitLab installations support only Linux based distributions.  | **All Stages**: [GitLab Installation Clouds](https://docs.gitlab.com/ee/install/#install-gitlab-on-cloud-providers) [Cloud Deployment Targets](https://about.gitlab.com/install/), [Install Requirements](https://docs.gitlab.com/ee/install/requirements.html), [Integrations](https://docs.gitlab.com/ee/user/project/integrations/) | tbd |
| 9) **Governance and Compliance** | Compliance testing and audit controls are built into GitLab's CI pipelines. | [Compliance at GitLab](https://about.gitlab.com/solutions/compliance/) <br> [Manage Stage](https://about.gitlab.com/stages-devops-lifecycle/): [Audit Events](https://docs.gitlab.com/ee/administration/audit_event_reports.html), [Audit Logs](https://docs.gitlab.com/ee/administration/logs/#audit_jsonlog), [Audit Reports](https://docs.gitlab.com/ee/administration/audit_event_reports.html), [Compliance Management](https://docs.gitlab.com/ee/administration/compliance.html), [Release Evidence](https://docs.gitlab.com/ee/user/project/releases/#release-evidence) <br> [Secure Stage](https://about.gitlab.com/stages-devops-lifecycle/secure/): [License Compliance](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html), [Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/)| tbd |
| 10) **Analytics and reporting** | GitLab provides a variety of Executive Insights, Productivity Insights, Operations Insights and Security Insights | **All Stages**: <br> **Executive Insights** DevOps Score, Value Stream Analytics, CI/CD Charts, Roadmaps <br> **Operations Insights**: Operations Dashboard, Environments Dashboard, Environments <br> **Other insights** such as Productivity Insights and Developer Insights are applicable to other usecases| tbd |
| 11) **Enterprise readiness** | GitLab supports enterprise grade authentication and authorization, access management, audit information, compliance, high availability and disaster recovery, geographic replication for great user experience across locations, large user reference architectures, infrastructure as code amongst others  | **All Stages** particularly [Manage Stage](https://about.gitlab.com/direction/dev/#manage), [Enablement Section](https://about.gitlab.com/direction/core_platform/#enablement-section-overview) | tbd |

## Top Roadmap Items for CD

- [Natively support hypercloud deployments](https://gitlab.com/groups/gitlab-org/-/epics/1804)
- [Advanced deploys (Blue/green, Canary, Traffic vectoring)](https://gitlab.com/groups/gitlab-org/-/epics/2213)
- [Streamline AWS Deployments](https://gitlab.com/groups/gitlab-org/-/epics/2351)
- [Advanced Deployments for AWS](https://gitlab.com/groups/gitlab-org/-/epics/3798)
- [Get Feature Flags to Enterprise Grade](https://gitlab.com/groups/gitlab-org/-/epics/3976)
- [Feature Flag Strategies](https://gitlab.com/groups/gitlab-org/-/epics/3978)
- [Post-deployment monitoring (continuous verification) MVC](https://gitlab.com/groups/gitlab-org/-/epics/3088)
- [A/B testing based on Feature Flags](https://gitlab.com/groups/gitlab-org/-/epics/2966)
- [Feature Flags with Review Apps enabled](https://gitlab.com/groups/gitlab-org/-/epics/2683)
- [Pre-packaged and extensible deploy templates](https://gitlab.com/groups/gitlab-org/-/epics/2608)
- [Review Apps For Deployment to Mobile](https://gitlab.com/groups/gitlab-org/-/epics/2372)

## Top 3 GitLab Differentiators

| Differentiator |  Value  |  Proof Point | Demos |
|----------|-------------|------|----|
| 1) **Unified deployment and monitoring strategies** | GitLab provides the ability to visualise what goes into production (via [Review Apps](https://docs.gitlab.com/ee/ci/review_apps/)), what to deploy to production (via [Feature Flags](https://docs.gitlab.com/ee/operations/feature_flags.html)), who to deploy it to (via [Progressive Delivery](https://docs.gitlab.com/ee/ci/environments/incremental_rollouts.html) and deployment strategies like [Canary](https://docs.gitlab.com/ee/user/project/canary_deployments.html)), monitor performance of deployment (via [browser performance testing](https://docs.gitlab.com/ee/ci/testing/browser_performance_testing.html), performance monitoring/tracing) and rollback based on performance via [post deployment monitoring](https://gitlab.com/groups/gitlab-org/-/epics/3088), **all from a single application**. | Strong Performer in the [Forrester Wave for Continuous Delivery and Release Automation Q2 2020](https://about.gitlab.com/blog/2020/07/08/forrester-cdra2020/) <br/> - James Governor from RedMonk talking about [GitLab's focus on Progressive Delivery](https://redmonk.com/jgovernor/2019/07/10/progressive-delivery-at-gitlab/) - GitLab is an interesting case for a couple of key reasons: <br/> a) It has a significant and fast growing enterprise footprint, notably with its CD product. <br/> b) It develops software at high velocity, with a monthly release schedule and a strong bias to shipping, so you can watch improvements in real time. The company ships open source software and has a strong culture of corporate observability. | [![Unified and integrated monitoring and deployment strategies](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/cd/youtube_social_icon_red-32x23.png) Unified and integrated monitoring and deployment strategies](https://youtu.be/ihdxpO5rgSc) |
| 2) **Automated and Integrated Continuous Delivery** |  GitLab [Auto DevOps](https://docs.gitlab.com/ee/topics/autodevops/index.html) simplifies and accelerates delivery with a complete delivery pipeline out of the box. Simply commit code and GitLab does the rest. GitLab also provides an integrated dashboard that spans across the CI/CD pipeline status and deployment status | - The built-in features of Auto DevOps have made our experience more rewarding and effective - [Daniel B on G2 Peer Reviews](https://www.g2.com/products/gitlab/reviews/gitlab-review-572450)<br/> - It has really helped us to shorten lead time, which has positively affected every single metric we measure - [Chorus.ai](https://about.gitlab.com/customers/chorus/) <br/> - GitLab Auto DevOps also delivered the technology component required for true CI/CD, accelerating product delivery with an end-to-end pipeline out of the box. - [ExtraHop Networks](https://about.gitlab.com/customers/extra-hop-networks/) | [![Automated and integrated Continuous Delivery](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/cd/youtube_social_icon_red-32x23.png) Automated and integrated Continuous Delivery](https://youtu.be/blJT8f6ZDH8)  |
| 3) **Modern Compliance for Continuous Delivery** | GitLab simplifies [compliance](https://docs.gitlab.com/ee/administration/compliance.html#compliance-features) with helping customers **define granular policies** such as who can approve MR, push to production, segregation of duties, release governance etc, **define security policies** such as license compliance, password policies, credential inventories etc, **track adherence to compliance** such as  user actions such as commits, permission changes, approval changes, logins, password changes, release evidence etc - all within a single application which allows **traceability** from deployment all the way back to code changes and requirements | - During a recent audit for SOC2 compliance, the auditors said that Chorus had the fastest auditing process they have seen and most of that is due to the capabilities of GitLab - [Chorus.ai](https://about.gitlab.com/customers/chorus/) <br/> - There is no longer a need for license keys or several different logins, because of the built-in security and compliance. Software is deployed anywhere, which relieves developers localization constraints.| tbd |

## Message house

The [message house](message-house/) provides a structure to describe and discuss the value and differentiators for Continuous Delivery with GitLab.

## Customer Facing Slides

<figure class="video_container">
<iframe src="https://docs.google.com/presentation/d/1bGdjQNfHxmYKYz_ZsrtyhEyXLGlv8UoTavi_aGl3UNc/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</figure>

### Discovery Questions

-

#### Sample Discovery Questions

-

#### Additional Discovery Questions

-

### Industry Analyst Relations (IAR) Plan

- The IAR Handbook page has been updated to reflect our plans for [incorporating Use Cases into our analyst conversations](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/analyst-relations/#how-we-incorporate-use-cases-into-our-industry-analyst-interactions).
- For  details specific to each use case, and in respect of our contractual confidentiality agreements with Industry Analyst firms, our engagement plans are available to GitLab team members in the following protected document: [IAR Use Case Profile and Engagement Plan](https://docs.google.com/spreadsheets/d/14UthNcgQNlnNfTUGJadHQRNZ-IrAe6T7_o9zXnbu_bk/edit#gid=0).

For a list of analysts with a current understanding of GitLab's capabilities for this use case, please reach out to Analyst Relations via Slack (#analyst-relations) or by submitting an [issue](https://gitlab.com/gitlab-com/marketing/product-marketing/issues/new) and selecting the "AR-Analyst-Validation" template.

## Competitive Comparison

## Proof Points - Customer Recognitions

### Quotes and reviews

#### Gartner Peer Insights

*Gartner Peer Insights reviews constitute the subjective opinions of individual end users based on their own experiences, and do not represent the views of Gartner or its affiliates. Reviews have been edited to account for errors and readability.*

"GitLab is the most preferred service in the world and its user community is very wide. We can authorize project or branch based user authorization on GitLab. In addition, continuous deployment integrations can be done very quickly. In addition, you can create merge requests within the constraints you want and easily manage them. It is very easy to prevent conflicts. A service that must be used for software development teams."

> - Software Development Lead, [Gartner Peer Insights Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1324677)

"GitLab supports my [company's] entire continuous integration and continous delivery(Ci/Cd) process. It has a smooth integration with Jira , which we use for software process management. "

> - Principal Android Engineer, [Gartner Peer Insights Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1210153)

"At my company we use [GitLab] to host all the different projects as it very easy to use and collaborate with may developers. Every project has access to specific set of people who has access to view, build features in the project. Peer reviews are very simple to view the code changes in a split window. Easy to create pipelines with CI/CD"

> - Software Engineer, [Gartner Peer Insights Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1187975)

#### G2

"For me, the most impressive part of their toolchain would have to be the CI/CD Platform, the ease of use and it's flexibility is wonderful. Building CI/CD pipelines never felt easier."

> - Luca Favaretto Marques, Software Engineer, Mid-Market, [G2](https://www.g2.com/products/gitlab/reviews/gitlab-review-4215029)

"GitLab does a great job at creating a unified experience for our developers. We previously had several best-of bread solutions (code repository, issue tracker, CI runners and deployment pipelines) co-exist between our team, but we managed to consolidate this into a single solutions, which meets most of our needs."

> - Joël Cox, Partner, Small Business, [G2](https://www.g2.com/products/gitlab/reviews/gitlab-review-3160908)

"The main reason why I chose GitLab over years of using Github was because of their CI/CD tool. Github doesn't come with it out of the box and we needed a solution in a team where nobody is a DevOps but js developers"

> - Cynthia Sanchez, Founder, Product-Manager, SMB, [G2](https://www.g2.com/products/gitlab/reviews/gitlab-review-4193586)

"GitLab has helped me master Git, CI/CD pipelines, and software development in general through the many resources it offers. I don't have to spend time learning so many separate services and figuring out how everything fits together. I would strongly recommend it to anyone looking for a great tool for their development activities."

> - Justin Smith, System Administrator, Mid-Market, [G2](https://www.g2.com/products/gitlab/reviews/gitlab-review-3606488)

### Garter Peer Insights 'Voice of the Customer'

[GitLab Recognized as a Gartner Peer Insights Customers' Choice for ARO](https://www.gartner.com/en/documents/3982008)

> - [Gartner Peer Insights 'Voice of the Customer' Application Release Orchestration 2020](https://www.gartner.com/en/documents/3982008)

### Blogs

#### Wag

[Wag!](https://about.gitlab.com/blog/2019/01/16/wag-labs-blog-post/)

- **Problem:** Slow, fragile and manual release process impacted developer efficiency
- **Solution:** GitLab Premium (CI/CD)
- **Result:** What previously took 40 minutes to an hour to accomplish, now takes just six minutes.
- **Sales Segment:** SMB
- **Safe Deployments** (https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/51235)

#### Athlinksx

[Athlinks](https://about.gitlab.com/blog/2019/12/17/athlinks-cuts-runtime-in-half-with-giltab/)

- **Problem:** Complex toolchain that hindered deploy times and disempowered developers
- **Solution:** GitLab Ultimate (SCM,CI,CD) and Terraform
- **Result:** Athlinks cuts runtime in half with GitLab
- **Sales Segment:** Enterprise

### Case Studies

#### Hemmersbach

- **Problem** [Hemmersbach](https://about.gitlab.com/customers/hemmersbach/) was burdened by multiple tools and communication inefficiencies, resulting in slow production builds and manual processes
- **Solution:** GitLab Ultimate (CI/CD)
- **Result:** Having all of the collaboration capabilities under one umbrella has enabled unprecedented deployment speed (up to 30 automated daily deploys)
- **Sales Segment:** Enterprise

#### BI Worldwide

- **Problem** [BI Worldwide](https://about.gitlab.com/customers/bi_worldwide/) was looking for a way to increase collaboration and efficiency in its developer environment and to reduce toolchain complexity
- **Solution:** GitLab Ultimate (SCM/CI/CD)
- **Result:** Deployments increased to 10 times daily
- **Sales Segment:** Enterprise

#### Glympse

[Glympse](https://about.gitlab.com/customers/glympse/)

- **Problem** A complex developer tech stack with over 20 distinct tools that was hard to maintain and impeded innovation
- **Solution:** GitLab Ultimate (SCM/CI/CD)
- **Result:** 8 times faster deploys (from 4 hours to less than 30 minutes)
- **Sales Segment:** Enterprise

#### KnowBe4

- **Problem** [KnowBe4](https://about.gitlab.com/customers/knowbe4/) was looking for a tool to keep code in-house and that offered the capabilities of several tools in one
- **Solution:** GitLab Ultimate (CI/CD) and AWS
- **Result:** 5+ production deploys per day for any given application plus 20+ development environment deploys per day
- **Sales Segment:** Enterprise

#### MGA

- **Problem** MGA was looking for a cost efficient CI platform that could improve workflow, knowledge, and code quality.
- **Solution:** GitLab Starter (SCM/CI/CD)
- **Result:** 10 times better success rate with CD than with manual deploys plus 80% time saved moving to CD
- **Sales Segment:** SMB

### References to help you close

[SFDC Report of referencable Release customers](https://gitlab.my.salesforce.com/a6l4M000000kDwa).  Note: Sales team members should have access to this report. If you do not have access, reach out to the [customer reference team](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/#which-customer-reference-team-member-should-i-contact) for assistance.

Request reference calls by pressing the "Find Reference Accounts" button at the top of your stage 3 or later opportunity.

## Adoption Guide

The following section provides resources to help CSMs lead capabilities adoption, but can also be used for prospects or customers interested in adopting GitLab stages and categories.

### Playbook Steps

1. Ask Discovery Questions to identify customer need
2. Complete the deeper dive discovery sharing demo, proof points, value positioning, etc.
3. Deliver [pipeline conversion workshop](/handbook/customer-success/playbooks/ci-verify/) and user enablement example
4. Agree to adoption roadmap, timeline and change management plans, offering relevant services (as needed) and updating the success plan (as appropriate)
5. Lead the adoption plan with the customer, enabling teams and tracking progress through engagement and/or product analytics data showing use case adoption

### Adoption Recommendation

This table shows the recommended use cases to adopt, links to product documentation, the respective subscription tier for the use case, and product analytics metrics.

| Feature / Use Case                                           | F  | P  | U  | Product Analytics | Notes |
| ------------------------------------------------------------ | -----| ---- | ---- | --------- | ---- |
| [Try Auto DevOps](https://docs.gitlab.com/ee/topics/autodevops/#quick-start) | x | x |x | instance_auto_devops_enabled and counts.ci_pipeline_config_auto_devops | |
| [Setup GitLab CI](https://docs.gitlab.com/ee/ci/quick_start/) | x | x | x |  | Having a .gitlab-ci.yml is the basis of using GitLab for deployment |
| [Setup an Environment](https://docs.gitlab.com/ee/ci/environments/) | x | x | x | counts.environmnets | |
| [Deploy to an Environment](https://docs.gitlab.com/ee/ci/environments/#view-environments-and-deployments) | x | x | x | counts.deployments, usage_activity_by_stage_monthly.release.deployments | |
| [Create a Release](https://docs.gitlab.com/ee/user/project/releases/) | x | x | x | counts.releases | |
| [Create Release Evidence](https://docs.gitlab.com/ee/user/project/releases/#release-evidence) | x | x | x | | |
| [Setup and use feature flags](https://docs.gitlab.com/ee/operations/feature_flags.html) | x | x | x | | |

#### Additional Documentation Links

- [Introduction to CI/CD with GitLab](https://docs.gitlab.com/ee/ci/quick_start/)
- [Getting started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/)
- [GitLab CI/CD Examples](https://docs.gitlab.com/ee/ci/examples/)

### Enablement and Training

The following will link to enablement and training videos and content.

- [Make Your Life Easier with CI/CD Presentation](https://docs.google.com/presentation/d/1scYkmV4Xdfj-8iwwpEiLCe0vBfpAdrL5pyA2w1Fgnf0/edit#slide=id.g7193b194b5_0_96)
- [CI/CD Overview Video](https://www.youtube.com/watch?v=wsbSvLyC2Z8)
- [CS Skills Exchange: CI Deep Dive](https://www.youtube.com/watch?v=ZVUbmVac-m8&list=PL05JrBw4t0KorkxIFgZGnzzxjZRCGROt_&index=3&t=0s)
- [CS Skills Exchange: Runners Overview](https://www.youtube.com/watch?v=JFMXe1nMopo&list=PL05JrBw4t0KorkxIFgZGnzzxjZRCGROt_&index=11&t=0s)
- [CS Skills Exchange: Runners Overview](https://www.youtube.com/watch?v=JFMXe1nMopo&list=PL05JrBw4t0KorkxIFgZGnzzxjZRCGROt_&index=11&t=0s)
- [Technically Competing Against Microsoft Azure DevOps](https://drive.google.com/open?id=18jwSeeUylGXv8LoEedCMRfBZt9t7QLOYKCHJp-SvdqA) *(GitLab internal only)*
- [Competing Against Jenkins](https://drive.google.com/open?id=1IvftLfaQyKn5-n1GLgCZokOoLU-FFzQ8LfJ9cf0FVeg) *(GitLab internal only)*
- *Coming soon.... CD Learning Path*

### Professional Service Offers

## Key Value (at tiers)

### Core/Free

**Why choose GitLab Core/Free for CD?**
We are committed to lowering the barriers for organizations embarking on their CI/CD journey. In March 2020, we announced a number of features CD features that are [moving to core](https://about.gitlab.com/blog/2020/03/30/new-features-to-core/).

**Key features with Core/Free:**

- [Package repository](https://docs.gitlab.com/ee/user/packages/): private repository for a variety of package managers
- Deployment Strategies: support for [canary deployments](https://docs.gitlab.com/ee/user/project/canary_deployments.html), [incremental roll outs](https://docs.gitlab.com/ee/ci/environments/incremental_rollouts.html), [blue green deployments](https://docs.gitlab.com/ee/ci/environments/incremental_rollouts.html#blue-green-deployment) and feature flags to give you confidence in your releases
- [Deploy boards](https://docs.gitlab.com/ee/user/project/deploy_boards.html): gives a consolidated view of health and status of Kubernetes deployments
- [Multiple Kubernetes Clusters](https://docs.gitlab.com/ee/user/group/clusters/#multiple-kubernetes-clusters): allows you to maintain different clusters for different environments such as for test, staging and production
- [Environments and Deployments](https://docs.gitlab.com/ee/user/group/clusters/#multiple-kubernetes-clusters): configure multiple environments, manage and monitor them from GitLab
- [GitLab Pages](https://docs.gitlab.com/ee/user/project/pages/): deploy static web pages directly from GitLab
- [Deploy Tokens](https://docs.gitlab.com/ee/user/project/deploy_tokens/): secure your package and container registry images by requiring username/password for access
- [Release Evidence](https://docs.gitlab.com/ee/user/project/releases/index.html#release-evidence): snapshot of releases data to compare and audit releases
- [Vault integrations](https://docs.gitlab.com/ee/ci/secrets/hashicorp_vault.html): authentication of secrets via Hashicorp Vault
- [ChatOps](https://docs.gitlab.com/ee/ci/chatops/): interact with GitLab via chat services
- [AutoDevOps](https://docs.gitlab.com/ee/topics/autodevops/): simplify build, test, deploy, monitor of your applications

### Premium

**Why choose GitLab Premium for CD?**
Premium  is ideal for scaling organizations for multi team usage, enabling organizations scale their DevOps delivery with advanced configuration, consistent standards and compliance. Take advantage of enterprise level priority support, including 24/7 uptime support, a named Customer Success Manager (CSM), and upgrade assistance.

**Key features with Premium:**

- [Dependency Proxy](https://docs.gitlab.com/ee/user/packages/dependency_proxy/) - local proxy for packages
- [Multi Project Pipelines](https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html#multi-project-pipelines)- link CI pipelines from multiple projects.
- [Operations dashboard](https://docs.gitlab.com/ee/user/operations_dashboard/index.html#doc-nav)- get a holistic view of the overall health of CI/CD pipelines and organization wide operations.
- [Environments dashboard](https://docs.gitlab.com/ee/ci/environments/environments_dashboard.html) - cross project environment based view to track deployment status
- [CI/CD for external repositories](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/)- connect your external repositories instead of moving your entire existing project(s) to get the benefits of GitLab CI/CD. This feature supports [GitHub](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/github_integration.html), [Bitbucket Cloud](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/bitbucket_integration.html), and any other Git-based repository.

### Ultimate

**Why choose GitLab Ultimate for CD?**
[Ultimate](https://about.gitlab.com/pricing/ultimate/) is ideal for projects with executive visibility while managing priorities, security, risk, and compliance.

**Key features with Ultimate:**

- [Compliance dashboard](https://docs.gitlab.com/ee/user/compliance/compliance_center/) - high level view of project compliance status and merge request approvers
- [Container Scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/)- analyze Docker images and check for potential security issues.
- [Dynamic Application Security Testing](https://docs.gitlab.com/ee/user/application_security/dast/)- analyze review applications to identify potential security issues on running web applications before deployment

## Resources

### What is CI/CD?

Check out this introductory video to learn the basics of CI/CD as software development best practices and how they apply with GitLab CI/CD!
<!-- blank line -->
<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/nLwJtVWXN70" frameborder="0" allowfullscreen="true"> </iframe>
</figure>
<!-- blank line -->

### Presentations

- [Why CI/CD?](https://docs.google.com/presentation/d/1OGgk2Tcxbpl7DJaIOzCX4Vqg3dlwfELC3u2jEeCBbDk)

### Continuous Delivery Videos

- [CI/CD with GitLab](https://youtu.be/1iXFbchozdY)
- [GitLab for complex CI/CD: Robust, visible pipelines](https://youtu.be/qy8A7Vp_7_8)
- [How do Runners work?](https://youtu.be/IsthhMm64u8)
- [Mastering CI/CD](https://about.gitlab.com/webcast/mastering-ci-cd/)
- [What is Auto DevOps?](https://www.youtube.com/watch?v=pPRF1HEtQ3s&feature=youtu.be)

### Integrations Demo Videos

- [Migrating from Jenkins to GitLab](https://youtu.be/RlEVGOpYF5Y)
- [Using GitLab CI/CD pipelines with GitHub repositories](https://youtu.be/qgl3F2j-1cI)

### Clickthrough & Live Demos

- [Live Demo: GitLab CI/CD Deep Dive](https://youtu.be/pBe4t1CD8Fc)

### Blogs and articles

- [Auto DevOps 101: How we're making CI/CD easier](https://about.gitlab.com/blog/2019/10/07/auto-devops-explained/)
- [Progressive Delivery](https://about.gitlab.com/blog/2019/04/19/progressive-delivery-using-review-apps/)

### Interesting reads

- [How We Switched to a Continuous Delivery Pipeline in 3 months](https://faun.pub/how-we-switch-to-a-continuous-delivery-pipeline-in-3-months-9667b9f65f7a)

## Buyer's Journey

Inventory of key pages in the buyer's Journey

| **Awareness** <br> learning about the problem  |  **Consideration** <br> looking for solution ideas  |  **Decision** <br> is this the right solution|
| ------ | -------- |-------- |
| topic page?  | solution page | proof points |
| landing pages? | ?comparisons?  | comparisons |
| -etc?            |   |  - product page x <br>  - product page y <br>  - product page z |
