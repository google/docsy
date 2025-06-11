---
title: "DevOps Solution Resource: Continuous Integration"
---

**Looking for a customer-facing overview of GitLab's Continuous Integration (CI) capabilities? See the [CI Solution](https://about.gitlab.com/solutions/continuous-integration/)**

The page below is intended to align GitLab sales and marketing efforts with a single source of truth for our go-to-market efforts around DevSecOps.

## Who to contact

| Product Marketing | Developer Advocate |
| ---- | --- |
| Daniel Hom (@danielhom) | Itzik Gan-Baruch ( @iganbaruch ) |

## The Market Viewpoint

## Continuous Integration

The Continuous Integration (CI) use case is a staple of modern software development in the digital age. It's unlikely that you hear the word "DevOps" without a reference to "Continuous Integration and Continuous Delivery" (CI/CD) soon after. In the most basic sense, the CI part of the equation enables development teams to automate building and testing their code.

When practicing CI, teams collaborate on projects by using a shared repository to store, modify and track frequent changes to their codebase. Developers check in, or integrate, their code into the repository multiple times a day and rely on automated tests to run in the background. These automated tests verify the changes by checking for potential bugs and security vulnerabilities, as well as performance and code quality degradations. Running tests as early in the software development lifecycle as possible is advantageous in order to detect problems before they intensify.

CI makes software development easier, faster, and less risky for developers. By automating builds and tests, developers can make smaller changes and commit them with confidence. They get earlier feedback on their code in order to iterate and improve it quickly increasing the overall pace of innovation. Studies done by DevOps Research and Assessment (DORA) have shown that [robust DevOps practices lead to improved business outcomes](https://cloud.google.com/devops/state-of-devops/). All of these "DORA 4" metrics can be improved by using CI:

- **Lead time:** Early feedback and build/test automation help decrease the time it takes to go from code committed to code successfully running in production.
- **Deployment frequency:** Automated build and test is a pre-requisite to automated deploy.
- **Time to restore service:** Automated pipelines enable fixes to be deployed to production faster reducing Mean Time to Resolution (MTTR)
- **Change failure rate:** Early automated testing greatly reduced the number of defects that make their way out to production.

[GitLab CI/CD](https://about.gitlab.com/solutions/continuous-integration/) comes built-in to GitLab's complete DevOps platform delivered as a single application. There's no need to cobble together multiple tools and users get a seamless experience out-of-the-box.

## Personas

### User Persona

The typical **user personas** for this usecase are the Developer, Development team lead, and DevOps engineer.

#### Software Developer Sacha

[Software developers](/handbook/product/personas/#sasha-software-developer) have expertise in all sorts of development tools and programming languages, making them an extremely valuable resource in the DevOps space. They take advantage of source code management and CI capabilities together to work fast and consistently deliver high quality code.

- Developers are problem solvers, critical thinkers, and love to learn. They work best on planned tasks and want to spend a majority of their time writing code that ends up being delivered to customers in the form of lovable features.

#### Development Team Lead Delaney

[Development team leads](/handbook/product/personas/#delaney-development-team-lead) care about their team's productivity and ability to deliver planned work on time. Leveraging CI helps maximize their team's productivity and minimize disruptions to planned tasks.

- Team Leads need to understand their team's capacity to assign upcoming tasks, as well as help resolve any blockers by assigning to right resources to assist.

#### DevOps Engineer Devon

[DevOps Engineers](/handbook/product/personas/) have a deep understanding of their organization's SDLC and provide support for infrastructure, environments, and integrations. CI makes their life easier by providing a single place to run automated tests and verify code changes integrated back into the SCM by development teams.

- DevOps Engineers directly support the development teams and prefer to work proactively instead of reactively. They split their time between coding to implement features and bug fixes, and helping developers build, test, and release code.

### Buyer Personas

CI purchasing typically does not require executive involvement. It is usually acquired and installed via our freemium offering without procurement or IT's approval. This process is commonly known as shadow IT. When the upgrade is required, the [Application Development Manager](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/) is the most frequent decision-maker. The influence of the [Application Development Director](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/roles-personas/buyer-persona/) is notable too.

## Industry Analyst Resources

Examples of comparative research for this use case are listed just below. Additional research relevant to this use case can be found in the [Analyst Reports - Use Cases](https://docs.google.com/spreadsheets/d/1vXpniM08Ql0v0yDd22pcNmXpDrA-NInJOwj25PRuHXA/edit?usp=sharing) spreadsheet.

- [Forrester Wave for Cloud-Native CI Tools](https://about.gitlab.com/analysts/forrester-cloudci19/)

## Market Requirements

| Market Requirement | Description | Typical capability-enabling features | Value/ROI |
|---------|-------------|-----------|------|
| 1) Build automation | Streamlines application development workflow by connecting simple, repeatable, automated tasks into a series of interdependent automatic builds. This includes compiling, linking, packaging, and ensuring that the binary libraries/files output are ready for testing. **Ensure software is consistently built without manual intervention, allowing developers to incorporate automated tests into their pipelines and start verifying/validating code changes.** Teams have control over where automated jobs run either in the cloud (public/private/hybrid) or using shared infrastructure. | CI/CD pipelines, scalable resources, job orchestration/work distribution, caching, external repository integrations. Automated builds support a wide variety of languages, frameworks, and libraries development teams rely on. | Increase build speeds. Development teams work more efficiently by reducing otherwise manual work. |
| 2) Test automation | Run and manage automated tests and validate changes before they're merged to production. This includes everything from basic to more in-depth tests and extends test automation into areas of functional, system, performance testing, and more. **Ensure software is consistently tested to meet both technical and business requirements without manual intervention, enabling developers to get rapid feedback if their code changes introduce potential defects or vulnerabilities.** | Ability to run isolated, automated, tests in CI/CD pipelines. Various tests may include but aren't limited to unit testing, code integration testing, regression testing, static code analysis, functional testing, and accessibility testing. | Catch potential errors sooner rather than later before they intensify.|
| 3) Pipeline configuration management | The CI solution makes it easy for developers to automate the build and test workflow, specifically connecting to their source code repository, defining specific actions/tasks in build pipelines, and set parameters for exactly how/when to run jobs, using scripts and/or a GUI to configure pipeline changes. Configurations are easily reproducible and traceability exists to allow for quick comparisons and tracking of changes to environments. | Configurations via web UI or supports config-as-code in a human readable syntax, like YAML. | Maximize development time and improves productivity. Less manual work. |
| 4) Visibility and collaboration | The solution enables development teams to have visibility into pipeline structure, specific job execution, and manage changes and updates to the pipeline jobs. The solution should enable teams to easily collaborate and make code changes, review work, and communicate directly. CI solutions should provide visibility and insights into the state of any build. | Pull requests or merge requests, commit history, automatic notifications/alerts, chatOps, code reviews, preview environments. | Faster feedback and less risk that changes cause builds to break. |
| 5) Platform and language support | Many organizations use a mix of operating systems and code stacks within their development teams.  The CI solution must operate on multiple operating systems (Windows, Linux, and Mac). The CI solution must also be language-agnostic supporting automation of build and test for a wide variety of development languages(Java, PHP, Ruby, C, etc.). | Option to use native packages, installers, downloads from source, and containers. Cloud-native platform support for public, private, or hybrid hosting. Runs on any OS. | Gives teams more flexibility, making it easier to adopt. |
| 6) Pipeline security |  Building security into an automated process ensures access to CI pipelines is consistently managed and controlled. Facilitate secure access to jobs/branches for the right users, safely store/manage sensitive data (such as secrets), and enforce governance and compliance policies without slowing anyone down. | Access control (like RBAC), enterprise-based access systems (like LDAP), data encryption, secrets management, and secure network connections. | Reduces business risk and protects intellectual property. Instills confidence in end-users. |
| 7) Built in compliance | The solution has capabilities and policies built in to ensure that code being delivered is compliant and secure in the event of an audit. Be able to track and manage important events, trace them back to who performed specific actions, as well as when they occurred.  | Automated security and compliance testing baked into CI pipelines. Automatic notifications for compliance issues. Audit controls and policies in place.  | Reduce risk and discover flaws or potential violations earlier in the development process.  |
| 8) Easy to get started | The steps required to successfully setup CI should be simple and straightforward with minimal barrier to entry. The time and effort required for teams to get started from initial installation,  configuration, onboarding users, and delivering value should be short (days, not weeks). | Supports both on-premise and SaaS implementations. Has robust documentation outlining steps to connect to a repository and get a CI server up and running quickly. Supports configuration-as-code or provides a GUI for initial configurations. Web interface to provision users. | Faster time to value. |
| 9) DevOps tools and integrations | The solution supports strong integrations to both upstream and downstream processes such as project management, source code management and version control, artifact repositories, security scanning, compliance management, continuous delivery, etc. A CI solution with strong DevOps integrations means there's flexibility for users who need or want a balance between native capabilities and integrations. | Integrations with build automation tools (Gradle, Maven etc.), code analysis tools, binary repos, CD tools, IDEs, APIs, third party libraries or extensibility via plugins. | Increases efficiency. Lessens cost and the extra work that comes along with potential migrations. |
| 10) Analytics | Capture and report on pipeline performance metrics and data throughout the build/test processes in order to identify bottlenecks, constraints, and other opportunities for improvement. Identify failing tests, code quality issues, and valuable trends in data indicative of overall application quality. | Build health, pipeline visualization, code coverage, logging, and performance metrics such as deployment frequency. | Increase efficiencies and reduce unnecessary costs. |
| 11) Elastic scalability | The solution supports elastic scaling leveraging well understood, third-party, mechanisms whenever possible. Supports build scalability around existing native per-cloud and per-virtual environment vendor capabilities since they represent already debugged code for a complex problem, and the customers architects/operators are much more likely to be familiar with these mechanisms in their chosen infrastructure/cloud provider. | Supports ephemeral provisioning. Utilizes strong Kubernetes integration at-scale or supports non-Kubernetes scaling options. For example, use AWS Autoscaling Groups in AWS, GCP scaling in GCP, and Azure Autoscale in Azure. | Faster and more efficient. Reduce infrastructure overhead with on-demand resources. Provides flexibility to scale large workloads using popular cloud providers. |
| 12) Artifact and dependency management | The solution allows for easy management of outputs and binaries from the build/test process. Manage repos, application packages, and containers with visibility into their dependencies. | View and download artifacts. Modify, store, and share images. Support for a wide range of common package formats and third-party integrations. Can be used on-prem or in the cloud. | Streamlines your CI/CD workflow and speeds up development. |

## The GitLab Solution

<iframe width="960" height="569" src="https://www.youtube.com/embed/ljth1Q5oJoo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## How GitLab Meets the Market Requirements

| Market Requirements | How GitLab Delivers | GitLab **Stage**/Category | Demos |
| ------ | ------ | ------ | ------ | ----
| Build automation | Architect CI pipelines with .gitlab-ci.yml files, structure CI processes, and build your app using GitLab Runner as the execution agent. Includes [CI services](https://docs.gitlab.com/ee/ci/services/), [parent-child pipelines](https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html#parent-child-pipelines), [multi-project pipelines](https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html#multi-project-pipelines), and [merge trains](https://docs.gitlab.com/ee/ci/pipelines/merge_trains.html) | [**Verify stage:**](https://about.gitlab.com/stages-devops-lifecycle/verify/) [CI](https://docs.gitlab.com/ee/ci/), [GitLab Runner](https://docs.gitlab.com/runner/), [Merge Trains](https://docs.gitlab.com/ee/ci/pipelines/merge_trains.html) | [![Build automation](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) Build and test automation](https://youtu.be/rti7T1yGrlw) |
| Test automation | Run various automated tests in your CI pipelines to verify/validate code pre-production. Includes Unit tests, integration testing, browser performance testing, code quality, code coverage, usability testing, and accessibility testing.  | [**Verify stage:**](https://about.gitlab.com/stages-devops-lifecycle/verify/) [CI](https://docs.gitlab.com/ee/ci/), [Code Quality](https://docs.gitlab.com/ee/ci/testing/code_quality.html), [Code Testing and Coverage](https://docs.gitlab.com/ee/ci/testing/unit_test_reports.html), [Web Performance](https://docs.gitlab.com/ee/ci/testing/browser_performance_testing.html), [Usability Testing](https://docs.gitlab.com/ee/ci/review_apps/#visual-reviews), [Accessibility Testing](https://docs.gitlab.com/ee/ci/testing/accessibility_testing.html)| [![Test automation](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) Build and test automation](https://youtu.be/rti7T1yGrlw) |
| Pipeline configuration management | [AutoDevOps](https://docs.gitlab.com/ee/topics/autodevops/index.html) automatically sets your CI/CD configuration based on pre-configured CI/CD templates. | [**Verify stage**](https://about.gitlab.com/stages-devops-lifecycle/verify/) <br> [**Package stage**](https://about.gitlab.com/stages-devops-lifecycle/package/) <br> [**Secure stage**](https://about.gitlab.com/stages-devops-lifecycle/secure/) <br> [**Release stage**](https://about.gitlab.com/stages-devops-lifecycle/release/) <br> [**Configure stage**](https://about.gitlab.com/stages-devops-lifecycle/configure/) <br> [**Monitor stage**](https://about.gitlab.com/stages-devops-lifecycle/monitor/) | [![Pipeline configuration management](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) Pipeline configuration management](https://youtu.be/opdLqwz6tcE) |
| Visibility and collaboration | See code quality analysis and code coverage details from source code. Get feedback on code changes directly in GitLab with [merge requests (MRs)](https://docs.gitlab.com/ee/user/project/merge_requests/) and [issues](https://docs.gitlab.com/ee/user/project/issues/): edit, comment, review, and share in one place. Preview changes in review apps, see commit history, and get automatic alerts on important events. | [**Verify stage:**](https://about.gitlab.com/stages-devops-lifecycle/verify/) [CI](https://docs.gitlab.com/ee/ci/), [Code Quality](https://docs.gitlab.com/ee/ci/testing/code_quality.html), [Code Testing and Coverage](https://docs.gitlab.com/ee/ci/testing/unit_test_reports.html) <br> [**Create stage:**](https://about.gitlab.com/stages-devops-lifecycle/create/) [Code Review](https://about.gitlab.com/stages-devops-lifecycle/create/), [Source Code Management](https://about.gitlab.com/solutions/source-code-management/), [Design Management](https://docs.gitlab.com/ee/user/project/issues/design_management.html) <br> [**Configure stage:**](https://about.gitlab.com/stages-devops-lifecycle/configure/) [ChatOps](https://docs.gitlab.com/ee/ci/chatops/) <br> [**Release stage:**](https://about.gitlab.com/stages-devops-lifecycle/release/) [Review Apps](https://docs.gitlab.com/ee/ci/review_apps/) | [![Visibility and collaboration](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) Visibility and collaboration](https://youtu.be/z8r3rFQT8xg) |
| Platform and language support | GitLab is multi-platform (Unix, Windows, OSX, and any other platform that supports Go) and multi-language (Java, PHP, Ruby, C, and any other language).  | [All](https://about.gitlab.com/stages-devops-lifecycle/) | tbd |
| Pipeline security | Security automation and scanning capabilities are built into GitLab's CI pipelines (SAST, DAST, dependency scanning, container scanning). Use Security scanning capabilities with Auto DevOps as well. | [**Verify stage:**](https://about.gitlab.com/stages-devops-lifecycle/verify/) [CI](https://docs.gitlab.com/ee/ci/) <br> [**Secure stage**](https://about.gitlab.com/stages-devops-lifecycle/secure/) | [![Shifting Security Left - GitLab DevSecOps Overview](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) Shifting Security Left - GitLab DevSecOps Overview](https://youtu.be/XnYstHObqlA) |
| Built in compliance |  Compliance testing and audit controls are built into GitLab's CI pipelines.  |  [**Manage stage:**](https://about.gitlab.com/stages-devops-lifecycle/) [Audit Events](https://docs.gitlab.com/ee/administration/audit_event_reports.html), [Compliance Management](https://docs.gitlab.com/ee/administration/compliance.html) <br> [**Verify stage:**](https://about.gitlab.com/stages-devops-lifecycle/verify/) [CI](https://docs.gitlab.com/ee/ci/) <br> [**Secure stage:**](https://about.gitlab.com/stages-devops-lifecycle/secure/) [License compliance](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html)|  [![Manage Compliance with GitLab](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) Manage Compliance with GitLab](https://youtu.be/QV2dIocn-hk) |
| Easy to get started | GitLab supports config-as-code via .gitlab-ci.yml files and Auto DevOps to predefine configurations or a web UI to get started quickly and easily.  | [**Verify stage:**](https://about.gitlab.com/stages-devops-lifecycle/verify/) [CI](https://docs.gitlab.com/ee/ci/) | [![Easy to get started](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) Easy to get started](https://youtu.be/e0iQD1qgxZg) |
| DevOps tools and integrations | Slack, Jira, Docker, Kubernetes, external repos like GitHub, Bitbucket, and any other Git-based repo. GitLab also supports various APIs and third-party libraries for connecting external services and build tools, as well as GDK and Frontend Foundations for community contributors. | [All](https://about.gitlab.com/stages-devops-lifecycle/) | tbd |
| Analytics | Manage and optimize your software delivery lifecycle with metrics and value stream insight in order to streamline and increase your delivery velocity. Visualize pipelines and report on performance metrics such as memory usage, load testing results, code complexity, and code coverage stastics. | [**Manage stage:**](https://about.gitlab.com/stages-devops-lifecycle/) [Insights](https://docs.gitlab.com/ee/user/project/insights/index.html), [Value Stream Management](https://about.gitlab.com/solutions/value-stream-management/) <br> [**Verify stage:**](https://about.gitlab.com/stages-devops-lifecycle/verify/) [CI](https://docs.gitlab.com/ee/ci/), [Code Quality](https://docs.gitlab.com/ee/ci/testing/code_quality.html), [Code Testing and Coverage](https://docs.gitlab.com/ee/ci/testing/unit_test_reports.html), [Web Performance](https://docs.gitlab.com/ee/ci/testing/browser_performance_testing.html) | tbd |
| Elastic scalability | Orchestrate and distribute workloads for parallel builds. Autoscale with GitLab Runner. | [**Verify stage:**](https://about.gitlab.com/stages-devops-lifecycle/verify/) [CI](https://docs.gitlab.com/ee/ci/), [GitLab Runner](https://docs.gitlab.com/runner/) <br> [**Release stage**](https://about.gitlab.com/stages-devops-lifecycle/release/) | tbd |
| Artifact and dependency management | Manage packages, repositories, and containers along with their dependencies in GitLab. View/download artifacts. Edit, store, and share images. | [**Package stage:**](https://about.gitlab.com/stages-devops-lifecycle/package/) [Package Registry](https://docs.gitlab.com/ee/user/packages/), [Container Registry](https://docs.gitlab.com/ee/user/packages/container_registry/), [Dependency Proxy](https://docs.gitlab.com/ee/user/packages/dependency_proxy/) | tbd |

## Top GitLab Features for CI

- **Multi-platform:** you can execute builds on Unix, Windows, OSX, and any other platform that supports Go.
- **Multi-language:** build scripts are command line driven and work with Java, PHP, Ruby, C, and any other language.
- **Parallel builds:** GitLab splits builds over multiple machines for fast execution.
- **Autoscaling:** you can automatically spin up and down VM's or Kubernetes pods to make sure your builds get processed immediately while minimizing costs.
- **Realtime logging:** a link in the merge request takes you to the current build log that updates dynamically.
- **Versioned tests:** a .gitlab-ci.yml file that contains your tests, allowing developers to contribute changes and ensuring every branch gets the tests it needs.
- **Flexible Pipelines:** define multiple jobs per stage and even trigger other pipelines.
- **Build artifacts:** upload binaries and other build artifacts to GitLab. Easily browse and download them.
- **Test locally:** reproduce tests locally using `gitlab-runner exec`.
- **Docker support:** use custom Docker images, spin up services as part of testing, build new Docker images, run on Kubernetes.
- **Container Registry:** built-in container registry to store, share, and use container images.
- *we'll add to this list as we continue to build out more lovable features!*

## Top 3 GitLab Differentiators

| Differentiator |  Value  |  Proof Point | Demos |
|----------|-------------|------|----|
| 1) Leading SCM, Code Review, and CI in one application |  You'll be able to streamline code reviews and increase collaboration at proven enterprise scale with GitLab, making development workflows easier to manage and minimizing context switching required between tools in complex DevOps toolchains. Release software faster and outpace the competition with the ability to quickly respond to changes in the market. | Forrester names GitLab among the leaders in [Continuous Integration Tools in 2017](https://about.gitlab.com/blog/2017/09/27/gitlab-leader-continuous-integration-forrester-wave/), Alteryx uses GitLab to have code reviews, source control, CI, and CD [all tied together](https://about.gitlab.com/customers/alteryx/). | [![Leading SCM and CI in one application](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) Leading SCM, CI and Code Review in one application](https://youtu.be/DvuqGA4FhXM) |
| 2) Uniquely enables rapid innovation |  Your organization's speed to market is directly impacted by how fast your development teams can move and adapt to change at an individual level. GitLab provides a complete DevOps platform that teams can use to innovate faster without sacrificing quality and enables cross-team collaboration in a central location. Combining powerful features "that just work" and leveraging automation in place of manual work wherever possible helps bring teams together across the entire SDLC regardless of role - product managers, designers, developers, managers, and all roles in between, can work more efficiently and stay involved as a part of a single conversation across the SDLC. | GitLab deploys over 160 times a day and is one of the [30 Highest Velocity Open Source Projects](https://about.gitlab.com/blog/2017/07/06/gitlab-top-30-highest-velocity-open-source/) from the CNCF, we're voted as a G2 Crowd Leader 2018 with more than 170 public reviews and a 4.4 rating noting "Powerful team collaboration for managing software development projects," and have over 2,900 active contributors. Forrester's [Total Economic Impact (TEI) of GitLab](https://about.gitlab.com/resources/study-forrester-tei-gitlab-ultimate/) study details the cost savings and business benefits of adopting GitLab. | [![Uniquely enabling rapid innovation](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) Uniquely enabling rapid innovation](https://youtu.be/MLrqJ1sxkjQ) |
| 3) Shift built in security and compliance "all the way left" | You get security features out-of-the-box and automated security testing with audit controls to facilitate policy compliance. Moving security testing farther left into the SDLC catches potential problems earlier and shortens feedback loops for developers. This means a faster time to market delivering secure, compliant, code and an increase in customer confidence. | Gartner mentions GitLab as a vendor in the Application Monitoring and Protection profile in its [2019 Hype Cycle for Application Security](https://www.gartner.com/en/documents/3953770/hype-cycle-for-application-security-2019). GitLab positioned in the [niche players quadrant of the 2020 Gartner Magic Quadrant for Application Security Testing](https://about.gitlab.com/press/releases/2020-05-11-gitlab-positioned-niche-players-quadrant-2020-gartner-magic-quadrant-application-security-testing/). Wag! takes advantage of [built-in security and faster releases with GitLab](https://about.gitlab.com/blog/2019/01/16/wag-labs-blog-post/), and Glympse makes their [audit process easier and remediates security issues faster](https://about.gitlab.com/customers/glympse/). |  [![Built in security and compliance](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/ci/youtube_social_icon_red-32x23.png) Built in security and compliance](https://youtu.be/Fd5DhebtScg) |

## CI Use Case Message House

The [message house](message-house/) provides a structure to describe and discuss the value and differentiators for Continuous Integration with GitLab.

### GitLab Runner Messaging and Positioning

The [runner message](runner-message-house/) house provides a structure to describe and discuss the value and differentiators for [GitLab Runner](https://docs.gitlab.com/runner/), the open source project that is used to run your jobs and send the results back to GitLab.

## Customer Facing Slides

<figure class="video_container">
<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vRmT3xh0VnNckhZOKRJz1x02tfY90ySaYb48YM55HInYMWa8fmSugK6lknvTChiNWSyYgy4ngK9FK3B/embed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
</figure>

### Discovery Questions

The sample discovery questions below are meant to provide a baseline and help you uncover opportunities when speaking with prospects or customers who are not currently using GitLab for CI. See a more complete list of questions, provide feedback, or comment with suggestions for [GitLab's CI discovery questions](https://docs.google.com/document/d/12NJZZr4A_CQWlODNc2JMWc1Gqtt2_uelPYLdT-VAm-M/edit?usp=sharing) and feel free to contribute!

#### Sample Discovery Questions

- CI/CD tool sprawl is one of the most common problems we see. How do you manage the complexities of many different teams using various tools and still meet their needs?
- We've heard that some customers struggle with managing complex pipelines and supporting integrations.  What difficulties do you and/or your team see in these areas?  Do you have a sense of how much time the team is spending?
- Many of our customers have multiple Jenkins administrators. Is this the case with you? What would it mean to your organization if you could free half of those people up to do more than manage pipelines?
- How happy are your teams with the usability and interface of their current CI solution?
- Has there been any discussion to standardize on a single solution for CI since you're already using GitLab for other needs?
- How are you currently supporting CI internally? Do you have a dedicated team or require in-house expertise for guidance, best practices, and fixing issues?
- How often is your day to day or planned work interrupted to fix or maintain your CI tool?
- How much productivity is lost because of delays due to managing your Jenkins environment separately from your source code?
- How much time does your team spend 'babysitting' their pipeline jobs?
- Is your organization investing to improve CI/CD in the short term or long term? Is there a clearly defined strategy or timeline?
  - What's the expectation on your team to support or facilitate this initiative?
  - Are you going to be onboarding additional teams in the next say, 12 months?
- What kind of roadblocks or hurdles does your team encounter when automating builds/tests at scale? How is this affecting your velocity as you scale?
- What is the workflow if a developer wants to create a new pipeline or add a job to an existing pipeline? How much time does that take the developer away from doing "real work?"
- What would be the impact if your team were able to self-service a working pipeline within 1 hour with confidence that all standards and best practices are followed?
- Would you be open to scheduling a follow-up call to discuss more about what GitLab CI can do for you and your team?

#### Additional Discovery Questions

- Has there been any discussion to standardize on a single solution for CI since you're already using GitLab for other needs?
- What is your strategy around improving CI/CD?
- Would it be valuable to have your CD solution use the same configuration and format as your CI, AND have visibility into the full product pipeline from idea to production?
- Tell me about the difficulties you're having managing complex pipelines and supporting integrations.

#### Jenkins-specific Discovery Questions

Please see the [Jenkins-specific questions](https://docs.google.com/document/d/1g0ftF3kSQ0_OUpvuM4WUseFUjd_iSsPXQoIqKR7Ledg/edit)  *(GitLab internal only)*

### Industry Analyst Relations (IAR) Plan

- The IAR Handbook page has been updated to reflect our plans for [incorporating Use Cases into our analyst conversations](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/analyst-relations/#how-we-incorporate-use-cases-into-our-industry-analyst-interactions).
- For  details specific to each use case, and in respect of our contractual confidentiality agreements with Industry Analyst firms, our engagement plans are available to GitLab team members in the following protected document: [IAR Use Case Profile and Engagement Plan](https://docs.google.com/spreadsheets/d/14UthNcgQNlnNfTUGJadHQRNZ-IrAe6T7_o9zXnbu_bk/edit#gid=0).

For a list of analysts with a current understanding of GitLab's capabilities for this use case, please reach out to Analyst Relations via Slack (#analyst-relations) or by submitting an [issue](https://gitlab.com/gitlab-com/marketing/product-marketing/issues/new) and selecting the "AR-Analyst-Validation" template.

## Competitive Comparison

Amongst the many competitors in the DevOps space, Jenkins and CircleCI are the closest competitors offering continuous integration capabilities.

## Proof Points - Customer Recognitions

### Quotes and reviews

#### Gartner Peer Insights

*Gartner Peer Insights reviews constitute the subjective opinions of individual end users based on their own experiences, and do not represent the views of Gartner or its affiliates. Obvious typos have been amended.*

>"We've migrated all our products from several "retired" VCS's to GitLab in only 6 months. - Including CI/CD process adoption - Without [loss] of code - Without frustrated developers - Without enormous costs"
>
> - **Application Development Manager**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1037269)
>
>"Finally, the most amazing thing about GitLab is how well integrated the [GitLab] ecosystem is. It covers almost every step of development nicely, from the VCS, to CI, and deployment."
>
> - **Software Engineer**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1038051)
>
>"One of the best ways to approach source code management (Git) and release pipeline management [CI/CD]. [GitLab] gives you a simple yet highly customizable approach to release management which is a complicated topic."
>
> - **System Engineer**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1045457)
>
>"The best software tool to manage all our projects and configure [CI/CD]. I will definitely recommend GitLab to everyone that wants to start a new project and doesn't want to use too many tools, GitLab has everything that you need to manage."
>
> - **Web Developer**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1063698)
>
>"Over the years, we have successfully taken advantage of [GitLab's] continuous deployment and integration mechanisms to build [and] maintain a robust and solid codebase."
>
> - **Co-Founder/CEO**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1111080)
>
>"One of the best [tools] for continuous integration and continuous deployment. "
>
> - **Lead - Mobile Apps**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1117401)
>
>"Overall, the experience with GitLab is very positive, it provides many powerful features especially regarding Continuous Integration and [Continuous Deployment]"
>
> - **Developer Analyst**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1140016)
>
>"[GitLab's] UI is so easy and manageable to understand. Built-in continuous integration is one of its best [features]."
>
> - **Technical Evangelist**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1092444)
>
>"GitLab isn't just for hosting your code, it's for the entire lifecycle of your code. Since they host code, it makes sense for them to provide services around development and getting code into production. Their integration into other services is really easy. They give you GitLab-CI for any CI/CD needs, driven from a yaml file."
>
> - **Testing Analyst**, [Gartner Peer Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/886423)
>
>"This is really an amazing source code repository toolset which enables the robust CI practices which are inbuilt features of GitLab. This can be utilized well in any enterprise looking for the smooth CI/CD pipelines."
>
> - **Software Engineer**, [Gartner Peer Review](https://www.gartner.com/reviews/market/enterprise-agile-planning-tools/vendor/gitlab/product/gitlab/review/view/1009762)

### Garter Peer Insights 'Voice of the Customer'

[GitLab Recognized as a Gartner Peer Insights Customers' Choice for ARO](https://www.gartner.com/en/documents/3982008)

> - [Gartner Peer Insights 'Voice of the Customer' Application Release Orchestration 2020](https://www.gartner.com/en/documents/3982008)

### Blogs

#### Jaguar Land Rover

[Jaguar Land Rover](https://about.gitlab.com/blog/2018/07/23/chris-hill-devops-enterprise-summit-talk/)

- **Problem:** JLR had **6 week feedback loops** resulting in slowdowns
- **Solution:** Premium (CI)
- **Result:** **Feedback loops reduced to 30 mins.** JLR is deploying within the engineering environment, 50-70 times per day of each individual piece of software to a target or to a vehicle.
- **Sales Segment:** Enterprise

#### Ticketmaster

[Ticketmaster](https://about.gitlab.com/blog/2017/06/07/continuous-integration-ticketmaster/)

- **Problem:** Long Jenkins build times slowed down CI pipeline
- **Solution:** Premium (CI)
- **Result:** Less than 8 minutes total from commit to build, test and generate artifacts
- **Sales Segment:** Enterprise

### Case Studies

#### Goldman Sachs

[Goldman Sachs](https://about.gitlab.com/customers/goldman-sachs/)

- **Problem** Needed to increase developer efficiency and software quality
- **Solution:** GitLab Premium (CI/CD, SCM)
- **Result:** Improved from **1 build every two weeks to over a 1000/day**, or releasing 6 times per day per developer, and an average cycle time from branch to merge is now 30 minutes; simplified workflow and simplified administration
All the new strategic pieces of 'software development platforms are tied into GitLab. GitLab is used as a complete ecosystem for development, source code control and reviews, builds, testing, QA, and production deployments.
- **Sales Segment:** Enterprise

#### Hotjar

[Hotjar](https://about.gitlab.com/customers/hotjar/)

- **Problem** Hotjar was looking to replace Jenkins and reduce complexity within their tool stack
- **Solution:** GitLab Silver (CI/CD)
- **Result:** Time of CI builds **decreased by 30%**, improved to 2-15 deploys per day, and 50% deployment time saved.
- **Sales Segment:** SMB

#### CERN

[CERN](https://about.gitlab.com/customers/cern/)

- **Problem:** CERN was looking for an open source way to host their pipelines
- **Solution:** GitLab Starter (CI)
- **Result:** The European-based particle physics laboratory, uses GitLab for more than **12,000 users and 120,000 CI jobs a month**
- **Sales Segment:** Enterprise

### References to help you close

[SFDC report of referenceable Verify customers](https://gitlab.my.salesforce.com/a6l4M000000kDwk) Note: Sales team members should have access to this report. If you do not have access, reach out to the [customer reference team](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/customer-advocacy/#which-customer-reference-team-member-should-i-contact) for assistance.

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

This table shows the recommended features to adopt, links to product documentation, the respective subscription tier for the feature, and [Service Ping](/handbook/customer-success/csm/service-ping-faq/) metrics.

| Feature                                           | F  | P  | U  | Service Ping metrics | Notes |
| ------------------------------------------------------------ | -----| ---- | ---- | --------- | ---- |
| [Try Auto DevOps](https://docs.gitlab.com/ee/topics/autodevops/#quick-start)  |   x    |   x   |  x    |     instance_auto_devops_enabled and counts.ci_pipeline_config_auto_devops       |    |
| [Enable shared runners](https://docs.gitlab.com/ee/ci/runners/)  |   x    |   x   |   x   |   gitlab_shared_runners_enabled        ||
| Enable [container registry](https://docs.gitlab.com/ee/administration/packages/container_registry.html#enable-the-container-registry) across instance  |   x    |  x   |   x   |   container_registry_enabled        |   GitLab.com container registry enabled at [Group level](https://docs.gitlab.com/ee/user/packages/container_registry/index.html#control-container-registry-for-your-group)  |
| Build [Instance Template Repository](https://docs.gitlab.com/ee/administration/settings/instance_template_repository.html)  |       |   x    |  x     |     counts.template_repositories      |     |
| Create [custom instance-level project templates](https://docs.gitlab.com/ee/administration/custom_project_templates.html) |       |   x   |  x    | counts.ci_pipeline_config_repository   |GitLab.com can utilize [group-level project templates](https://docs.gitlab.com/ee/user/group/custom_project_templates.html)  |
| Add.gitlab-ci.yml file to your repositories root directory    |   x    |    x  |   x   | redis_hll_counters.pipeline_authoring.o_pipeline_authoring_unique_users_committing_ciconfigfile_monthly |     |
| [Convert declarative Jenkinsfiles](https://docs.gitlab.com/ee/ci/migration/jenkins.html) *(Jenkins conversion only)* |    x   |   x   |  x    |     counts.projects_jenkins_active      |     |
| **Run your pipeline!** CI/CD examples can be [viewed here](https://docs.gitlab.com/ee/ci/examples/)  |   x    |  x    |  x    |     usage_activity_by_stage.verify.ci_pipelines       |    |
| Make use of GitLab's [CI feature index](https://docs.gitlab.com/ee/ci/#gitlab-cicd-features)   |   x    |   x   |   x   |      counts.ci_runners, counts.ci_builds     |     |
|[Trigger Deployments](https://docs.gitlab.com/ee/ci/environments/)    |   x    |   x   |   x   |  usage_activity_by_stage_monthly.release.deployments         |     |
| [Use Compliance Framework](https://docs.gitlab.com/ee/user/project/settings/#compliance-frameworks) | | x | x | usage_activity_by_stage.manage.projects_with_compliance_framework | |
|[View Audit Events](https://docs.gitlab.com/ee/administration/audit_event_reports.html)    |      |   x   |   x   |  compliance_unique_visits.g_compliance_audit_events         |     |
| [View Value Stream Analytics](https://docs.gitlab.com/ee/user/group/value_stream_analytics/) | x | x | x | analytics_unique_visits.p_analytics_valuestream| |
| [View DevOps Adoption](https://docs.gitlab.com/ee/user/group/devops_adoption/) | | | x | analytics_unique_visits.i_analytics_dev_ops_adoption| |
| [Migrate projects to GitLab](https://docs.gitlab.com/ee/user/project/import/) | x | x | x | usage_activity_by_stage.manage.project_imports.total | |
| [Authenticate with external providers](https://docs.gitlab.com/ee/administration/auth/) | x | x | x| usage_activity_by_stage.manage.user_auth_by_provider.standard| |

The table includes free/community and paid tiers associated with GitLab's self-managed and cloud offering.

- F = Free
- P = Premium
- U = Ultimate

### Product Adoption - Lighthouse Metrics and Leading Indicators for CI

The SSOT Handbook Page for Product Adoption - Lighthouse Metrics and Leading Indicators can be found in the [Enterprise Data Team Handbook](https://internal.gitlab.com/handbook/enterprise-data/company-kpis/product-adoption-lighthouse-metrics/)

#### Additional Documentation Links

- [Introduction to CI/CD with GitLab](https://docs.gitlab.com/ee/ci/quick_start/)
- [Getting started with GitLab CI/CD](https://docs.gitlab.com/ee/ci/quick_start/)
- [GitLab CI/CD Examples](https://docs.gitlab.com/ee/ci/examples/)
- [Migrating From CircleCI to GitLab](https://docs.gitlab.com/ee/ci/migration/circleci.html)
- [Migrating from Jenkins to GitLab](https://docs.gitlab.com/ee/ci/migration/jenkins.html#migrating-from-jenkins)

### Enablement and Training

The following will link to enablement and training videos and content.

- [Make Your Life Easier with CI/CD Presentation](https://docs.google.com/presentation/d/1scYkmV4Xdfj-8iwwpEiLCe0vBfpAdrL5pyA2w1Fgnf0/edit#slide=id.g7193b194b5_0_96)
- [CI/CD Overview Video](https://www.youtube.com/watch?v=wsbSvLyC2Z8)
- [Getting Started with GitLab CI/ CD](https://www.youtube.com/watch?v=sIegJaLy2ug&feature=youtu.be)
- [CS Skills Exchange: CI Deep Dive](https://www.youtube.com/watch?v=ZVUbmVac-m8&list=PL05JrBw4t0KorkxIFgZGnzzxjZRCGROt_&index=3&t=0s)
- [CS Skills Exchange: Runners Overview](https://www.youtube.com/watch?v=JFMXe1nMopo&list=PL05JrBw4t0KorkxIFgZGnzzxjZRCGROt_&index=11&t=0s)
- [CS Skills Exchange: Runners Overview](https://www.youtube.com/watch?v=JFMXe1nMopo&list=PL05JrBw4t0KorkxIFgZGnzzxjZRCGROt_&index=11&t=0s)
- [Technically Competing Against Microsoft Azure DevOps](https://drive.google.com/open?id=18jwSeeUylGXv8LoEedCMRfBZt9t7QLOYKCHJp-SvdqA) *(GitLab internal only)*
- [Competing Against Jenkins](https://drive.google.com/open?id=1IvftLfaQyKn5-n1GLgCZokOoLU-FFzQ8LfJ9cf0FVeg) *(GitLab internal only)*
- [CI Customer Use Case Learning Path](https://gitlab.edcast.com/insights/continuous-integration-customer)

### Professional Service Offers

GitLab offers a [variety of pre-packaged and custom services](https://about.gitlab.com/services/) for our customers and partners. The following are service offers specific to this solution. For additional services, see the [full service catalog](https://about.gitlab.com/services/catalog/).

- [GitLab CI Training](https://university.gitlab.com/pages/ci-cd-training/)
- [Jenkins Migration Services](https://about.gitlab.com/services/catalog/)
- [DevOps Fundamentals Training](https://university.gitlab.com/courses/gitlab-devops-fundamentals)

## Key Value (at tiers)

### Premium

**Why choose GitLab Premium for CI?**
As you scale CI throughout your organization and onboard additional teams, GitLab Premium unlocks a faster path to value for any number of teams with expert support, advanced configurations, and consistent standards.

- Gain peace of mind: take advantage of enterprise level priority support, including 24/7 uptime support, a named Customer Success Manager (CSM), and upgrade assistance.
- Reliability and compliance: get the ability to [audit logs](https://docs.gitlab.com/ee/administration/audit_event_reports.html), [auditor users](https://docs.gitlab.com/ee/administration/auditor_users.html), and have an actionable [disaster recovery strategy](https://docs.gitlab.com/ee/administration/geo/disaster_recovery/index.html) with support for [High Availability](https://docs.gitlab.com/ee/administration/reference_architectures/).

**Key features with Premium:**

- [Multi Project Pipelines](https://docs.gitlab.com/ee/ci/pipelines/downstream_pipelines.html#multi-project-pipelines)- link CI pipelines from multiple projects.
- [Operations dashboard](https://docs.gitlab.com/ee/user/operations_dashboard/index.html#doc-nav)- get a holistic view of the overall health of CI/CD pipelines and organization wide operations.
- [Browser Performance Testing](https://docs.gitlab.com/ee/ci/testing/browser_performance_testing.html)- detect performance regressions within your applications.
- [CI/CD for external repositories](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/)- connect your external repositories instead of moving your entire existing project(s) to get the benefits of GitLab CI/CD. This feature supports [GitHub](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/github_integration.html), [Bitbucket Cloud](https://docs.gitlab.com/ee/ci/ci_cd_for_external_repos/bitbucket_integration.html), and any other Git-based repository.

### Ultimate

**Why choose GitLab Ultimate for CI?**
Achieve advanced DevOps maturity with executive visibility, deeper insights/analytics around usage, and additional capabilities to keep your environments secure and compliant across the board.

- Enterprise-grade priority support, including 24/7 uptime support, a named Customer Success Manager (CSM), and upgrade assistance are all still included with Gold/Ultimate.
- Embed security and compliance into your CI Pipelines.
- Protect your IP and get access to free guest users.

**Key features with Ultimate:**

- [Static Application Security Testing](https://docs.gitlab.com/ee/user/application_security/sast/)- check for potential security issues by evaluating static code.
- [Dynamic Application Security Testing](https://docs.gitlab.com/ee/user/application_security/dast/)- analyze review applications to identify potential security issues.
- [Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/)- evaluate third-party dependencies to identify potential security issues.
- [Container Scanning](https://docs.gitlab.com/ee/user/application_security/container_scanning/)- analyze Docker images and check for potential security issues.
- [Security Dashboard](https://docs.gitlab.com/ee/user/application_security/security_dashboard/#project-security-dashboard)- visualize security status for projects.
- **License Compliance-** identify the presence of new software licenses included in your project and track project dependencies. Approve or deny the inclusion of a specific license.
- **Compliance Dashboard-** gives you the ability to see your group's Merge Request activity by providing a high-level view for all projects in the group and approvers for a given Merge Request.

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

### Continuous Integration Videos

- [CI/CD with GitLab](https://youtu.be/1iXFbchozdY)
- [GitLab for complex CI/CD: Robust, visible pipelines](https://youtu.be/qy8A7Vp_7_8)
- [How do Runners work?](https://youtu.be/IsthhMm64u8)

### Integrations Demo Videos

- [Migrating from Jenkins to GitLab](https://youtu.be/RlEVGOpYF5Y)
- [Using GitLab CI/CD pipelines with GitHub repositories](https://youtu.be/qgl3F2j-1cI)

### Clickthrough & Live Demos

- [Live Demo: GitLab CI/CD Deep Dive](https://youtu.be/pBe4t1CD8Fc)

## Buyer's Journey

Inventory of key pages in the buyer's Journey

| **Awareness** <br> learning about the problem  |  **Consideration** <br> looking for solution ideas  |  **Decision** <br> is this the right solution|
| ------ | -------- |-------- |
| topic page?  | solution page | proof points |
| landing pages? | ?comparisons?  | comparisons |
| -etc?            |   |  - product page x <br>  - product page y <br>  - product page z |
