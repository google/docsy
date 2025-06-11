---
title: Staff Backend Engineer
---

Backend Engineers at GitLab work on our product. This includes both the open source version of GitLab, the enterprise editions, and the GitLab.com service as well. They work with peers on teams dedicated to areas of the product. They work together with product managers, designers, and frontend engineers towards common goals.

## Job Grade

The Staff Backend Engineer is a [grade 8](/handbook/total-rewards/compensation/compensation-calculator/#gitlab-job-grades).

## Responsibilities

- Develop features and improvements to the GitLab product in a secure, well-tested, and performant way.
- Collaborate with Product Management and other stakeholders within Engineering (Frontend, UX, etc.) to maintain a high bar for quality in a fast-paced, iterative environment.
- Advocate for improvements to product quality, security, and performance.
- Solve technical problems of moderate scope and complexity.
- Craft code that meets our internal standards for style, maintainability, and best practices for a high-scale web environment. Maintain and advocate for these standards through code review.
- Recognize impediments to our efficiency as a team ("technical debt"), propose and implement solutions.
- Represent GitLab and its values in public communication around specific projects and community contributions.
- Ship small features and improvements with minimal guidance and support from other team members. Collaborate with the team on larger projects.
- Participate in either Tier 2 or Tier 3 weekday and weekend and occasional night [on-call rotations](/handbook/engineering/development/processes/infra-dev-escalation/process/) to assist troubleshooting product operations, security operations, and urgent engineering issues **OR** the [Incident Management on-call rotation](/handbook/engineering/infrastructure/incident-management/#incident-manager-responsibilities) to help ensure the availability goals for GitLab.com are met, by working with reliability engineers and development team members.
- Complete [Interview Training](/handbook/hiring/conducting-a-gitlab-interview/#interviewer-training-requirements) in support of hiring efforts for the department. Participation as either a technical interviewer or part of their team's interview panel may be expected from hiring managers, given ongoing hiring needs.

## Requirements

- Ability to use GitLab.
- Significant professional experience with Ruby on Rails or language required by the specialty.
- Professional experience with any other technologies that may be required by the specialty.
- Proficiency in the English language, both written and verbal, sufficient for success in a remote and largely asynchronous work environment.
- Demonstrated capacity to clearly and concisely communicate about complex technical, architectural, and/or organizational problems and propose thorough iterative solutions.
- Experience with performance and optimization problems and a demonstrated ability to both diagnose and prevent these problems.
- Comfort working in a highly agile, intensely iterative software development process.
- Demonstrated ability to onboard and integrate with an organization long-term.
- Positive and solution-oriented mindset.
- Effective communication skills: Regularly achieve consensus with peers, and clear status updates.
- An inclination towards communication, inclusion, and visibility.
- Experience owning a project from concept to production, including proposal, discussion, and execution.
- Self-motivated and self-managing, with excellent organizational skills.
- Demonstrated ability to work closely with other parts of the organization.
- Share our values, and work in accordance with those values.
- Ability to thrive in a fully remote organization.

## Levels

- [Intermediate](/job-families/engineering/development/backend/intermediate/)
- [Senior](/job-families/engineering/development/backend/senior/)
- Staff

### Staff

#### Staff Responsibilities

- Advocate for improvements to product quality, security, and performance that have particular impact across your team and others.
- Solve technical problems of the highest scope and complexity for your team.
- Exert significant influence on the overall objectives and long-range goals of your team.
- Shepherd the definition and improvement of our internal standards for style, maintainability, and best practices for a high-scale web environment. Maintain and advocate for these standards through code review.
- Drive innovation on the team with a willingness to experiment and to boldly confront problems of immense complexity and scope.
- Actively seek out difficult impediments to our efficiency as a team ("technical debt"), propose and implement solutions that will enable the entire team to iterate faster
- Represent GitLab and its values in public communication around broad initiatives, specific projects, and community contributions. Interact with customers and other external stakeholders as a consultant and spokesperson for the work of your team.
- Provide mentorship for all Engineers on your team to help them grow in their technical responsibilities and remove blockers to their autonomy.
- Confidently ship large features and improvements with minimal guidance and support from other team members. Collaborate with the team on larger projects.

#### Staff Requirements

- TBD

### Distribution:Build

The Build team closely partners with our greater engineering organization to build and distribute GitLab services. The Build team is tasked with ensuring the components that make up GitLab are up to date, license compliant, and available for our users' platforms and architectures. This group manages the build pipelines, researches support for new services, platforms, and architectures, as well as maintains existing ones. We strive to respond efficiently to build failures, security results, and dependency changes in order to ensure a safe reliable product for our users.

Distribution Build engineering regularly interfaces with broader development teams in supporting newly created features. Notably, the Distribution Deploy team is the Build team's biggest internal collaborator, so there is significant team interdependency. The Distribution Build team is involved with diverse projects and tasks that include assisting community packaging efforts.

#### Requirements

- Experience with building Docker images and docker build tooling
- Extensive Linux experience, comfortable between Debian and RHEL based systems
- Experience building and packaging archives such as .deb and .rpm
- Familiar with building and packaging cloud native applications
- Familiar with multi-stage build systems
- Experience using Continuous Integration systems (e.g., GitLab CI, Jenkins, Travis).

#### Responsibilities

- Research for the support of new clouds, platforms, architecture, and components
- Access controls, permissions, and CVE patches
- Dependency updates
- License management
- Submissions to Partners for validations/certifications
- The install, update, and upgrade pages
- Build and own the infrastructure used for creating the various installation methods
- Maintaining infrastructure used in Distribution

### Distribution:Deploy

The Deploy team closely partners with our greater engineering organization to configure and automate GitLab deployments.
The Deploy team is tasked with delivering an intuitive, clear, and frictionless installation experience, followed by smooth, seamless upgrade and maintenance processes for deployments of any scale. We strive to deliver ongoing operational behaviors for scaling, little to zero downtime upgrades, and highly reliable experiences for not only instance administrators but their users.

Distribution Deploy engineering regularly interfaces with broader development teams in supporting newly created features.
Notably, our infrastructure team is the deploy team's biggest internal customer, so there is significant team interdependency.
The Distribution Deploy team is involved with diverse projects and tasks that include assisting community packaging efforts.

#### Requirements

- Experience with Docker and Kubernetes in production use cases
- Chef experience (writing complex cookbooks from scratch, custom providers, custom resources, etc.)
- Extensive Linux experience, comfortable between Debian and RHEL based systems
- Experience running applications at scale in Kubernetes
- Experience transforming existing applications to cloud native oriented applications

#### Responsibilities

- Initial installation and composability for self-managed installations and GitLab.com
- Upgrades / Downgrades
- Scaling deployments
- Migration between platforms or providers
- Data lifecycle management
- Secure configuration & communication
- Research of clouds and platforms for integration to existing tools

### Package

Package engineers are focused on creating the binary repository management system that will extend our Continuous Integration (CI) functionality to allow access and management of artifacts manipulated by projects.

By extending the current CI artifacts system, the Package team will expose GitLab as a package repository allowing access to the most common package managers, e.g. Maven and APT and similar. Additionally, the Package team is improving the Container Registry and is responsible for items listed under [Package product category](/handbook/product/categories/#package).

#### Responsibilities

- Develop the architecture by extending existing features.
- Work with the Distribution team on replacing their current delivery system.
- Create and maintain observability of the newly defined features.
- Work with customers on defining their needs to replace existing package repository solutions.

### Software Supply Chain Security

Focus on security protection features for GitLab (including policy, vulnerability, dependency, and compliance management). This role will report to and collaborate directly with a Software Supply Chain Security Engineering Manager.

#### Requirements

- Strong engineer with Go and Ruby experience.
- Passion for security.
- Understanding of all levels of OSI network model and common network protocols.
- Understanding of infrastructure & application deployment models (Kubernetes, Docker, AWS/GCP/Azure).
- Understanding of detecting and preventing attacks at the network, container, operating system, and application level.
- Understanding of vulnerability lifecycle (including CVE).
- A passion for learning new languages & technologies.
- Experience with open source security tools (such as Kali, ModSecurity, Wireshark, Falco, etc).
- Experience in using GitLab and GitLab CI.

#### Responsibilities

- Develop security components from proposal to polished end result.
- Integrating 3rd party security tools into production environments deployed by GitLab.

### Secure

Focus on security features for GitLab. This role will specifically focus on security; if you want to work with Ruby on Rails and not security, please apply to our Backend Engineer role instead. This role will report to and collaborate directly with the Secure Engineering Manager.

#### Requirements

- Strong Go and/or Ruby engineer with security expertise or proven security interest.
- Passion and interest toward security (scanning, dependencies, etc.).
- Experience in using GitLab and GitLab CI.

#### Responsibilities

- Develop security tools from proposal to polished end result.
- Integrating 3rd party security tools into GitLab.
- Complete our internal Advisories Database.
- Manage metadata related to dependencies.
- Key aspects of this role are focused on security tools and features.
- The complexity of this role will increase over time.
- If you are willing to stick to working on these features for at least a year, then this role is for you.

### Configuration

The configuration team works on GitLab's Application Control Panel, Infrastructure Configuration features, our ChatOps product, Feature flags, and our entire Auto DevOps feature set. It is part of our collection of Ops Backend teams.

#### Requirements

- Experienced engineer who is capable of leading and growing a team of senior engineers.
- For this position, a significant amount of experience with Ruby is a strict requirement. Experience with Go is a plus as we expect that you will likely work on Go during your journey at GitLab.
- Experience with Docker, Kubernetes platform development.
- Experience or interest in functions-as-a-service.

#### Responsibilities

- Implement and improve upon our constellation of configuration feature set.
- Work with the PM team to execute on the roadmap.
- Ensure we deliver on our commitments to the market by communicating clearly with stakeholders.
- Implement the appropriate monitoring and alerting on new and existing features owned by the team.
- Help others adopt and use the configuration features.

### CI/CD

CI/CD Backend Engineers are primarily tasked with improving the Continuous Integration (CI) and Continuous Deployment (CD) functionality in GitLab. Engineers should be willing to learn Kubernetes and Container Technology. CI/CD Engineers should always have three goals in mind:

- Provide value to the user and communicate such with product managers,
- Introduce features that work at scale and in untrusting environments,
- Always focus on defining and shipping [the Minimal Valuable Change](/handbook/product/product-principles/#the-minimal-valuable-change-mvc).

We, as a team, cover end-to-end integration of CI/CD in GitLab, with components being written in Rails and Go. We work on a scale of processing a few million of CI/CD jobs on GitLab.com monthly. CI/CD engineering is interlaced with a number of teams across GitLab. We build new features by following our [direction](https://about.gitlab.com/direction/#ci--cd). Currently, we focus on providing a deep integration of Kubernetes with GitLab:

- by automating application testing and deployment through Auto DevOps,
- by managing GitLab Runners on top of Kubernetes,
- by working with other teams that provide facilities to monitor all running applications,
- in the future implement A-B testing, feature flags, etc.

Additionally, we also focus on improving the efficiency, performance, and scalability of all aspects of CI/CD:

- Improve performance of developer workflows, e.g. faster CI testing, by improving parallelization,
- Improve performance of implementation, ex.:by allowing us to run 10-100x more in one year,
- Identify and add features needed by us, ex.:to allow us to test more reliably and ship faster.

The CI/CD Engineering Manager also does weekly stand-up with a team and product managers to talk about plan for the work in the upcoming week and coordinates a deployment of CI/CD related services with infrastructure team.

#### Requirements

- Go developer with a lot of Kubernetes production experience is a plus.

### Geo

[GitLab Geo](https://docs.gitlab.com/ee/administration/geo/) is an enterprise product feature, built to help speed up the development of distributed teams by providing one or more read-only mirrors of a primary GitLab instance. This mirror (a Geo secondary node) reduces the time to clone or fetch large repositories and projects, or can be part of a Disaster Recovery solution.

#### Responsibilties

- Work with the Product Manager to carefully assess technical feasibility of feature requests.
- Deliver proof-of-concept proposals to help guide technical discussions.
- Identify ways to deliver complex technical projects in an iterative fashion.
- Take [ownership](/handbook/engineering/infrastructure-platforms/tenant-scale/geo/process/#work-ownership) of feature implementation.
- Respond quickly to customer requests for support.

#### Requirements

- Experience designing and building fault-tolerant, distributed systems.
- Experience building and scaling highly-available systems.
- Experience with queueing and messaging systems.
- In-depth experience with Ruby on Rails, Go, and/or Git.
- Experience with provisioning tools is beneficial but not essential.

### Growth

Growth Engineers work with a cross-functional team to influence the growth of GitLab as a business. In helping us iterate and learn rapidly, these engineers enable us to more effectively meet the needs of potential users.

#### Requirements

- Strong self-direction (this team is being bootstrapped).
- Experience with A/B, multivariate, or other data-driven methods of testing.
- Comfort multitasking in a highly iterative environment.

### Engineering Productivity

Engineering Productivity Engineers are full-stack engineers primarily tasked with improving the productivity of the GitLab developers (from both GitLab Inc and the rest of the community), and making the GitLab project maintainable in the long-term.

#### Responsibilities

- Build automated measurements and dashboards to gain insights into Engineering Productivity
to understand what is working and what is not.
- Make suggestions for engineering workflow improvements, monitor the results and iterate.
- Increase contributor and developer productivity by improving the development setup, workflow, processes, and tools.
- Improve Review apps for CE/EE.
- Build automated tooling to speed up issue and merge request review and triage.
- Ensure workflow and label hygiene in our system which feeds into our metrics dashboard.
- Build automated tooling to ensure the consistency and quality of the codebase and merge request workflow.
- Help with maintaining GitLab Docs.

#### Requirements

- Experience developing in Ruby (this is a strict requirement).
- Experience in with test automation frameworks for both front-end and back-end testing.
- Experience in designing and developing tools and solutions used across teams.
- Development experience in object-oriented programming languages and patterns.
- Excellent oral and written communication skills.
- Experience with a front-end charting/visualization library.
- Experience using test automation tools. (Selenium, Capybara, Watir).
- Experience using Continuous Integration systems (e.g., GitLab CI, Jenkins, Travis).
- Experience using Docker and containerized architectures (e.g. Kubernetes).

See the description of the [Developer Experience stage](/handbook/engineering/infrastructure-platforms/developer-experience/) for more details. The position also involves working with the community as [Merge Request Coach](/job-families/expert/merge-request-coach/), and working together with other [Backend Engineers](/job-families/engineering/backend-engineer/) to respond and address issues from the community.

### Application Performance

The Application Performance team works to improve availability, reliability, and performance of the application. We analyze the behavior, recognize bottlenecks, and propose changes. We work to make GitLab a responsive and performant DevOps platform, which offers a great user experience at any scale.

#### Responsibilities

- Identify, troubleshoot, improve and manage memory-intensive aspects of the GitLab application.
- Explore alternatives outside of the GitLab application for reducing memory consumption through contributions to, e.g., Rails, Ruby, Puma, or other key third-party components.
- Define and help implement best practices for creating efficient and performant code.
- Setting standards that changes are not affecting memory utilization and can be validated.
- Partner with the Quality team to maintain effective performance reporting and  monitoring through instrumentation and testing.

#### Requirements

An ideal engineer candidate -

- Expert of Ruby on Rails.
- Experience of performance tuning and/or architecture, [Example](https://rubykaigi.org/2018/presentations/tenderlove.html).
- Experience of memory leak troubleshooting, [Example 1](https://web.archive.org/web/20220826233628/https://www.be9.io/2015/09/21/memory-leak/), [Example 2](https://samsaffron.com/archive/2015/03/31/debugging-memory-leaks-in-ruby).

Alternatively, some of the following qualifications, may not necessarily be all -

- **Must** be proficient in one or more of the following in preference order
  - Ruby.
  - Go.
  - Similar OOP languages (e.g. Python, C++, Java, C#, etc.).
- AND/OR proficient in one or more of the following
  - Proven record of building scalable solutions.
  - Top notch understanding of DB principles and optimization mechanisms.
  - Familiar with a framework similar to the concepts of Rails (e.g. CakePHP, Ember, Node.js, Angular, J2EE, etc.) - For reference and apply with due diligence.
  - High-level principles: has knowledge of existing perf testing tools and test automation with some Ruby.
  - Low-level principles: Understands internals, how memory works, garbage collection. Sorting algorithms.
- **Nice to have**
  - Tuning up performance from architecture/design perspective.
  - Troubleshooting memory leaks (any language).
  - Optimizing full stack implementation, e.g. I/O, caching.
  - Good knowledge of performance testing.
- Strong problem analysis and solving skills, methodological in problem solving.
- **Must** be a proven fast-learner and self-starter.

### Ecosystem

The Ecosystem team is responsible for seamless integration between GitLab and 3rd party products as well as making GitLab products available on cloud service providers' marketplaces such as AWS. The team plays a critical role in developing APIs and SDK and expanding GitLab market opportunities.

#### Responsibilities

- Design, build, and maintain APIs, Webhooks, and SDK of GitLab products.
- Design, build, and maintain solutions to integrate to partner and 3rd party platforms.
- Design, build, and maintain solutions for integrating with cloud service provider marketplaces, such as AWS.
- Develop documentation and instructions of how to work with GitLab SDK & APIs.

#### Requirements

- Previous experience developing REST and/or GraphQL APIs using a variety of technologies.
- Previous experience working with Open API standards such as Swagger.
- Proficient with Ruby.
- Proficient or fluent with one or more of other common languages: Go, Python, Java, Node, JavaScript, etc.
- Familiar with full web technology stack (e.g. HTTP, cookies, asset loading, caching).

### Gitaly

Gitaly is a service that handles git and other filesystem operations for GitLab instances, and aims to improve reliability and performance while scaling to meet the needs of installations with thousands of concurrent users, including our site GitLab.com. This position reports to the Gitaly Lead.

#### Responsibilities

- Participate in architectural discussions and decisions surrounding Gitaly.
- Scope, estimate and describe tasks to reach the team's goals.
- Collaborate on designing RPC interfaces for the Gitaly service.
- Instrument, monitor and profile Gitaly in the production environment.
- Build dashboards and alerts to monitor the health of your services.
- Conduct acceptance testing of the features you've built.
- Educate all team members on best practices relating to high availability.

#### Requirements

- Mandatory: production experience building, debugging, optimising software in large-scale, high-volume environments.
- Mandatory: Solid production Ruby experience.
- Highly desirable: Experience working with Go. It's important that candidates must be willing to learn and work in both Go and Ruby.
- Highly desirable: experience with gRPC.
- Highly desirable: a good understanding of git's internal data structures or experience running git servers. You can reason about software, algorithms, and performance from a high level.
- Understanding of how to build instrumented, observable software systems.
- Experience highly-available systems in production environments.

### Database

A database specialist is an engineer that focuses on database related changes and improvements. You will spend the majority of your time making application changes to improve database performance, availability, and reliability.

Unlike the [Database Engineer](/job-families/engineering/database-engineer/) position the database specialist title has a balance of application development and knowledge of PostgreSQL. As such Ruby knowledge is absolutely required and deep PostgreSQL knowledge is equally important.

#### Requirements

- Significant professional software engineering experience with Ruby on Rails and PostgreSQL in large production environments.
- Demonstrated experience with Ruby on Rails or other Ruby frameworks such as Sinatra or Hanami.
- Expert-level understanding of relational databases, SQL and query optimization techniques and demonstrated ability to both diagnose and prevent performance problems.
- Significant experience working in a distributed production environment.

### Gitter

[Gitter](https://gitter.im) specialists are full-stack JavaScript developers who are able to write JavaScript code that is shared between multiple environments. Gitter uses a JavaScript stack running Node.js on the server, and bundled with webpack on the client. The [iOS](https://gitlab.com/gitlab-org/gitter/gitter-ios-app), [Android](https://gitlab.com/gitlab-org/gitter/gitter-android-app), macOS (Cocoa) and [Linux/Windows (NW.js)](https://gitlab.com/gitlab-org/gitter/desktop/) clients reuse [much of the same codebase](https://gitlab.com/gitlab-org/gitter/webapp) but also require some knowledge of Objective-C, Swift and Java. Gitter uses MongoDB, Redis, and Elasticsearch for backend storage.

#### Requirements

- Strong client-side JavaScript experience.
- Strong production Node.js experience.
- Highly desirable: MongoDB, Elasticsearch, and Redis experience.
- Desirable: Some Java, Objective-C or Swift experience building mobile apps.
- Desirable: DevOps experience, working with Linux, Ansible, AWS or similar products.

#### Responsibilities

- Fix prioritized issues from the issue tracker.
- Triage issues (duplicates, clarification, reproduction steps, prioritization).
- Create high quality frontend and backend code.
- Review community contributions.
- Provide second-level support to the Production Team to ensure that all Gitter production services remain stable.
- Document tribal knowledge, particularly around runbooks and production incident processes.
- Keep an eye on Sentry to find regressions and ensure application errors are addressed.
- Continually improve the quality of Gitter by using discretion of where you think changes are needed.
- Continue to migrate the codebase from old repository locations to GitLab, while open-sourcing as much of it as possible.
- Maintain the iOS, Android, and desktop applications.
- Provide community support for Gitter via [Gitter rooms](https://gitter.im/gitterHQ/gitter), [Twitter](https://twitter.com/gitchat), Zendesk, etc.

### Infrastructure

[Infrastructure](/handbook/engineering/infrastructure/) specialists work alongside DBREs and SREs and are experienced Ruby/GoLang developers who work in the product with a focus on reliability, observability, performance and scalability at the application level, as well as on resource optimization from an Infrastructure perspective and on operationally relevant features.

#### Requirements

- Strong Ruby and Golang experience required.
- Strong experience with profiling and metrics analysis.
- Strong experience with observability tools, including metrics (Prometheus is a plus), structured logging and distributed tracing.
- Desirable: DevOps experience, working with Linux, GCP/AWS, Chef/Ansible, or similar products.
- ActiveRecord and SQL expertise.

#### Responsibilities

- Fix relevant Infrastructure-related issues from the issue tracker.
- Develop operations-related features.
- Focus on reliability, performance and scalability, as well as resource optimization.

### Delivery

Delivery specialist is an engineer that focuses on improving the engineering release workflows, creates new tools, improves release process and works closely with the whole Engineering team to ensure that every GitLab release reaches the public in time.

#### Responsibilities

- Assures the [GitLab Release Process](/handbook/engineering/releases/).
- Creates new tools to automate the release process.
- Builds new GitLab release features to replace existing custom tooling.
- Works with individual teams on defining and implementing solutions that will help them release quicker.
- Creates frameworks that allow engineers to write code that scales with demand.
- Helps teams instrument their code and helps recognize parts of code that could benefit from increased observability.
- Works closely with peer Infrastructure teams to control the impact of application code running in user facing products.
- Helps communicate the release schedule clearly with others.
- Develop monitoring and alerting to measure release process velocity.
- Identify process bottlenecks and introduce optimizations.

### Scalability

The [Scalability team](/handbook/engineering/infrastructure/team/scalability/) is responsible for optimising GitLab.com
performance through improving the reliability, availability and performance of individual GitLab services and the application as a whole.

#### Responsibilities

- Create, analyze, and maintain GitLab.com [Service Level Objectives](https://en.wikipedia.org/wiki/Service-level_objective) (SLOs).
- Resolve problems that contribute to missed SLOs.
- Find, define, and resolve application bottlenecks as observed on GitLab.com.
- Work with other engineering stakeholders on resolving larger architectural bottlenecks and participate as a representative of GitLab.com.
- Provide guidance to other engineering stakeholders on scaling considerations.
- Work closely with embedded Site Reliability Engineers to prepare and perform production changes.
- Prepare and deliver scaling projects as a Directly Responsible Individual (DRI).
- Participate in many scaling initiatives concurrently.
- Enable others to perform systems analysis on scaling problems.

#### Requirements

Candidate should ideally be:

- Methodical when troubleshooting and solving problems.
- Experienced in working on large scale systems.
- Experienced in application and systems observability.
- Have working knowledge of one or more of the services used to deliver GitLab.com.
- Able to articulate systems performance concepts to team members outside of Engineering.

Other qualifications include:

- Language expertise. Application contributions are expected in Ruby and the ability to contribute in Go is helpful.
- Knowledge of profiling, and performance testing.
- Understanding of basic database principles and optimisation mechanisms.

### Search

Elasticsearch engineers are focused on delivering a first class global search experience throughout GitLab products.  They are experienced Ruby/GoLang developers who focus on implementing core Elasticsearch functions while advising other development teams on best practices (e.g. indexing).

#### Requirements

- Elasticsearch experience - modeling, processing, nodes and index management.
- Proficient in Go (Golang) and/or Ruby, Ruby on Rails.
- Desirable: DevOps experience, working with Linux, GCP/AWS, Chef/Ansible, or similar products.
- Desirable: PostgreSQL experience.

#### Responsibilities

- Building a first class global search implementation.
- Improve and implement our indexing strategies.
- Own architecture, performance and scaling of the Elasticsearch solution.
- Build responsive and scalable services and APIs in Go.
- Self-managed installation mechanisms.

## Performance Indicators

- [Backend Unit Test Coverage](/handbook/engineering/development/performance-indicators/#backend-unit-test-coverage)
- [Open MR Review Time (OMRT)](/handbook/engineering/development/performance-indicators/#open-mr-review-time-omrt)
- [Open MR Age (OMA)](/handbook/engineering/development/performance-indicators/#open-mr-age-oma)

## Hiring Process

Candidates for this position can generally expect the hiring process to follow the order below. Note that as candidates indicate preference or aptitude for one or more specialties, the hiring process will be adjusted to suit. Please keep in mind that candidates can be declined from the position at any stage of the process. To learn more about someone who may be conducting the interview, find their job title on our [team page](/handbook/company/team/).

- As part of the application, candidates are asked to complete a short technical questionnaire, with a possibility of additional technical questions being asked if needed after the application is submitted.
- Next, candidates will be invited to schedule a 30 minute [screening call](/handbook/hiring/candidate-faq/#screening-call) with one of our Technical Recruiters.
- Next, candidates will be invited to schedule a 90 minute technical interview with one of our Backend Engineers.
- Next, candidates will be invited to schedule a 60 minute interview with one of our Backend Engineering Managers.
- Next, candidates will be invited to schedule a 60 minute interview with our Director of Engineering
- Successful candidates will subsequently be made an offer.
Additional details about our process can be found on our [hiring page](/handbook/hiring/).
