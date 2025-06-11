---
title: "Auxiliary Solution Resource: GitOps"
---

#### Who to contact

| Product Marketing | Developer Advocate |
| ---- | --- |
| Daniel Hom (@danielhom) | @csaavedra1 |

## The Market Viewpoint

## The need for GitOps

Modern applications are developed with rapid iteration and run at highly dynamic scale. In an organization with a mature DevOps culture code can be deployed to production hundreds of times per day. Applications can then run under highly dynamic loads from a few users to millions. Modern infrastructure needs to be elastic. Capacity that can be dynamically provisioned and de-provisioned is able to keep pace with load maintaining optimal performance and minimal cost. With the demands made on today's infrastructure it's becoming increasingly crucial manage infrastructure automation with a robust and cohesive methodology.

## What is GitOps?

```text
GitOps == IaC + MRs + CI/CD
```

> GitOps is an operational framework that takes DevOps best practices used for application development such as version control, collaboration, compliance, and CI/CD, and applies them to infrastructure automation.

<iframe width="100%" height="500" src="https://www.youtube.com/embed/JtZfnrwOOAw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[GitOps](https://about.gitlab.com/topics/gitops/) involves managing your IT infrastructure using practices well-known in software development such as version control, code review, and CI/CD pipelines. For example, infrastructure teams that practice GitOps use configuration files stored as code. Similar to how application source code generates the same application binaries every time it's built, GitOps configuration generates the same infrastructure environment every time it is deployed.

- *IaC* - GitOps uses a Git repository as the single source of truth for infrastructure definition. **Infrastructure as Code (IaC)** is the practice of keeping all infrastructure configuration stored as code. The actual desired state may or may not be not stored as code (e.g., number of replicas, pods).
- *MRs* - GitOps uses **Merge Requests (MRs)** as the change mechanism for all infrastructure updates. The MR is where teams can collaborate via reviews and comments and where formal approvals take place. Merge commits to your master(or trunk) branch serve as a change log for auditing and troubleshooting.
- *CI/CD* - GitOps automates infrastructure updates using a Git workflow with Continuous Integration and Continuous Delivery (CI/CD). When new code is merged, the CI/CD pipeline enacts the change in the environment. Any configuration drift, such as manual changes or errors, is overwritten by GitOps automation so the environment converges on the desired state defined in Git. GitLab uses CI/CD pipelines to manage and implement GitOps automation, but other forms of automation such as definitions operators could be used as well.

As with any emerging technology term, "GitOps" isn't strictly defined the same way by everyone across the industry. GitOps emerged in the cloud native community and some definitions restrict GitOps to say "Kubernetes is required to be doing GitOps." GitLab takes a broader approach. We've seen GitLab users and customers applying GitOps principals to all types of infrastructure automation including VMs and containers, as well as Kubernetes clusters.

While many tools and methodologies promise faster deployment and seamless management between code and infrastructure, GitOps differs by focusing on a developer-centric experience. Infrastructure management through GitOps happens in the same version control system as the application development, enabling teams to collaborate more in a central location while benefiting from all the built-in features of Git.

GitOps is a prescriptive workflow for using [Infrastructure as Code](https://about.gitlab.com/topics/gitops/infrastructure-as-code/). GitOps with GitLab helps you manage physical, virtual and cloud native infrastructures (including Kubernetes and serverless technologies) using tight integration with industry-leading infrastructure automation tools like Terraform, AWS Cloud Formation, Ansible, Chef, Puppet, and the like.

### Benefits of GitOps

- *Distribution of work* - Enable more engineers to collaborate on infrastructure changes. Since every change will go through the same change/merge request/review/approval/merge process, this enables senior engineers to focus on other areas beyond the critical infrastructure management while still maintaining the ability to review and contribute as needed.
- *Improved access control* There's no need to give credentials to all infrastructure components since changes are automated only by your CI/CD needs access.
- *Faster time to market* - execution via code is faster than manual point and click, test cases can be automated and hence repeatable in a consistent manner to deliver stable environments rapidly, at scale
- *Less risk* The shift-left approach to infrastructure as Code helps to identify and resolve issues before changes are rolled out to production preempting unexpected downtime and providing higher environment stability and reliability and better user experience.
- *More compliant* All changes to infrastructure are tracked, leaving traceability for audit and ability to rollback to a previous desired state with ease.
- *Reduce costs* - automation of infrastructure definition and testing eliminates manual tasks and rework improving productivity, reduced downtimes due to built in revert/rollback capability
- *Less error prone* - infrastructure definition is codified, hence repeatable and less prone to human error

### Push vs Pull GitOps (Agentless vs Agent Based GitOps)

As with any emerging technologies, there are different approaches to GitOps, each with their own pros and cons.

**Push or Agentless GitOps**
In this approach, your CI/CD tool pushes the changes to your environment. This approach is consistent with the approach used for application deployment.
*Pro*

- Ease of use. Well-known CI/CD - build, test, & deploy all use the same tech
- Deployment targets not limited to cloud native / Kubernetes only - can deploy to physical, virtual container - whether on premise or cloud etc.
*Con*
- Need to open your firewall to your cluster and grant admin access to external CI/CD

**Pull or Agent Bsed GitOps**
In this approach, an agent is installed in your cluster to pull changes whenever there is a drift from the desired configuration.
*Pro*

- Secure infrastructure - no need to open your firewall or grant admin access externally
*Con*
- Agent needs to be installed in every cluster
- Limited to k8s-only
- Uses different technology than application CI/CD

## Personas

### User Persona

Infrastructure as Code requires understanding of the platform and the desired state of the application environment. Users of Infrastructure as Code have a good understanding of both Git as a SCM tool as well as the platform they are expected to provision and manage. Below are a few power users Infrastructure as Code:

- [Sam, the SRE](/handbook/product/personas/)
  Sam works embedded into a service team with feature developers. They works on keeping the service up, deploying it, and managing the infrastructure needs of that service. They collaborate with the Platform team to systamatize best practices.

- [Devon, the DevOps Engineer](/handbook/product/personas/)
  Devon is often the Ops interface for the development team. He provides support for infrastructure, environments and integrations. Devon is fairly conversant with code and would prefer administering infrastructure via code rather than a multitude of different tools and context switches.

- [Priyanka, the Platform Operator](/handbook/product/personas/)
  Infrastructure management is one of the main responsibilities of the platform team. [Priyanka](/handbook/product/personas/#priyanka-platform-engineer) is responsible for providing, maintaining, and operating a shared platform - either traditional or modern cloud platform  - which the development teams utilize to ship and operate software more quickly.

- [Sydney, the System Administrator](/handbook/product/personas/#sidney-systems-administrator)
  Sydney defines, maintains and scales the infrastructure and configuration for the application teams. She often receives repetitive requests on the same task. Sydney's primary motivation is to automate repetitive tasks to minimize errors and save time as well as define the infrastructure and configuration in a way that changes are tracked and to stop infrastructure changes becoming the [wild west](https://en.wikipedia.org/wiki/Cowboy_coding).

### Buyer Personas

Buyers of Infrastructure as Code are usually leaders who lead infrastructure / automation initiatives. Typical buyer personas are:

- **CIO / Vice President of IT** - experience in planning, design and execution of digital transformation programs, implementing new operating models. Typically leads both engineering and operations teams
- **Vice President of IT Infrastructure** (also referred to as IT Operations in some organizations) - experience in planning, design and execution of IT infrastructure services - including deploying and managing cloud services, system management and Service Desk. Frequently has the agenda of reducing IT costs for the organization.
- **Vice President of Platform Engineering** - Managing a shared platform for development teams is one of the main agendas of the Platform Engineering team. The platform team has expertise in new technologies like Kubernetes. Key KPIs of the platform engineering team are Automation, Efficiency and Self Service.

## Analyst Coverage

List key analyst coverage of this use case

## Market Requirements

Below are the [market requirements](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/#market-requirements) for GitOps

### Foster Collaboration

- Description: The solution is designed to enable and foster collaboration among team members. The collaboration system includes manual gates and approvals as well as automated workflows.
- Typical features:
  - Add a general comment
  - Tag individuals or groups
  - Add an inline comment on code
  - Add a suggestion
  - Show the total unresolved threads at the tops
  - Show you can't merge until you resolve comments/suggestions
  - Resolve a thread
  - Resolve a thread by creating a new issue
  - Apply a suggestion (accept a suggestion)
  - Show codeowners
  - Show approval

- Other features
  - Quickly create new branches of a project
  - Add new files/assets
  - Collaborate on proposed changes (review comments, suggest changes, WebIDE, suggestion approvals, conflict resolution, merge, diffing, hand-offs)
  - Workflow automation
  - Wiki snippets
  - Version-controlled snippets
  - Automatically update or close related issue(s) when a merge request is merged
  - Configurable issue closing pattern
  - Display merge request status for builds in CI system
  - Terraform plan output
  - Visibility into security scans and build stats

- Value: Quality of the code changes being made increases which leads to
  - greater accuracy of fulfilled requests
  - greater infrastructure stability
  - and improved release velocity
        through team review and validation.

### Compliance and Auditing

- Description: All changes to production are automated and gated by merging to a Git branch. Permission and access are built-in via the Git management tool.
        Approvals and merge access can be restricted to certain personnel or groups.
        Commit history shows the log of changes.
- Typical Features: CMRs/PRs, code review features, RBAC, branch permissions, group permission setting, CodeOwners, MR approvals
- Value: Don't have to manage separate permissions for your infrastructure; they can match that of your development process.
        Strong adherence to internal and regulatory compliance standards.
        Audits take less time and are easier to conduct.
        Changes to infra are more secure because they are locked down.
        \

### Version controlled environments

- Description: Ability to roll back and roll forward your environments when their state is defined via text stored under Git version control.

### Test Automation

- Description: Run and manage automated tests and validate changes before they're merged to production. This includes everything from basic to more in-depth tests and extends test automation into areas of functional, system, performance testing, and more. Ensure software is consistently tested to meet both technical and business requirements without manual intervention, enabling developers to get rapid feedback if their code changes introduce potential defects or vulnerabilities.
- Typical Features: The ability to run automated tests in CI/CD pipelines in isolated and ephemeral environments. Various tests may include (but aren't limited to) unit testing, code integration testing, regression testing, static code analysis, functional testing, and accessibility testing. **Most types of testing for app code also apply to any type of code (infra, policy, etc.)**.
- Value: Catch potential errors sooner, rather than later- before they impact production.
Increase security by testing for potential vulnerabilities, before going to production.

### Pipeline configuration management

- Description: Engineers can automate the build and test workflow, specifically connecting to their source code repository, defining specific actions/tasks in build pipelines, and set parameters for exactly how/when to run jobs, using scripts and/or a GUI to configure pipeline changes. Configurations are repeatable and traceable to allow for quick comparisons and tracking of changes to environments.
- Typical Features: Configurations via web UI or supports config-as-code in a human readable syntax, like YAML.
      Pipeline templates. Project Templates.
      Pipeline linking - store pipeline template in central repo
      Pipeline dependency - child/parent, upstream/downstream
- Value: Maximize development time and improves productivity. Less manual work.
      Centralize management to lower administration.
      Increase consistency by using the templates to adhere to best practices and required testing.

## The GitLab Solution

## How GitLab Meets the Market Requirements

A collection of short demonstrations that show GitLab's GitOps capabilities.

| Market Requirements | How GitLab Delivers | GitLab **Stage**/Category | Demos |
| ------ | ------ | ------ | ------ | ----
| Foster Collaboration | Discussions, user tagging, general comments, inline comments, inline suggestions, unresolved thread tracking, issue creation from comment, suggestion management, CODEOWNERS, approvals |  [Discussions](https://docs.gitlab.com/ee/user/discussions/), [CODEOWNERS](https://docs.gitlab.com/ee/user/project/codeowners/), [MR approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/) | [![Foster Collaboration with GitOps](/images/marketing/brand-and-product-marketing/product-and-solution-marketing/usecase-gtm/gitops/youtube_social_icon_red-32x23.png) Foster Collaboration with GitOps](https://youtu.be/onFpj_wvbLM) |
| Compliance and Auditing | Compliance testing and audit controls are built into GitLab's CI/CD pipelines. | [Compliance at GitLab](https://about.gitlab.com/solutions/compliance/) <br> [Manage Stage](https://about.gitlab.com/stages-devops-lifecycle/): [Audit Events](https://docs.gitlab.com/ee/administration/audit_event_reports.html), [Audit Logs](https://docs.gitlab.com/ee/administration/logs/#audit_jsonlog), [Audit Reports](https://docs.gitlab.com/ee/administration/audit_event_reports.html), [Compliance Management](https://docs.gitlab.com/ee/administration/compliance.html), [Release Evidence](https://docs.gitlab.com/ee/user/project/releases/#release-evidence), [Chain of Custody](https://docs.gitlab.com/ee/user/compliance/compliance_center/#chain-of-custody-report), [Granular user roles and permissions, segregation of duties](https://docs.gitlab.com/ee/user/permissions.html) <br> [Secure Stage](https://about.gitlab.com/stages-devops-lifecycle/secure/): [License Compliance](https://docs.gitlab.com/ee/user/compliance/license_approval_policies.html), [Dependency Scanning](https://docs.gitlab.com/ee/user/application_security/dependency_scanning/) <br> [CODEOWNERS](https://docs.gitlab.com/ee/user/project/codeowners/), [MR approvals](https://docs.gitlab.com/ee/user/project/merge_requests/approvals/),  | |
| Version controlled environments | Using GitLab version control to store XaC (Infrastructure, policy, configuration etc) helps maintain track of changes. In addition, auto rollback in case of failure helps roll back to the previous successful deployment | [Environment Rollback](https://docs.gitlab.com/ee/ci/environments/#environment-rollback), [GitLab Agent for Kubernetes](https://docs.gitlab.com/ee/user/clusters/agent/) | |
| Test Automation | Include usability, performance testing as a part of the pipeline and roll back to a successful deployment in case of issues |   [Release versioning](https://docs.gitlab.com/ee/user/project/releases/), support [advanced deployment strategies](https://about.gitlab.com/blog/2020/11/23/cd-unified-monitor-deploy/) such as canary, incremental roll out, blue green deployments, Feature Flags, Review Apps, [Performance testing & validation](https://about.gitlab.com/blog/2020/02/18/how-were-building-up-performance-testing-of-gitlab/) | |
| Pipeline configuration Management | GitLab Pipeline Authoring allows users to create pipelines with minimal configuration, if required, and also create and visualize complex pipelines. This helps infrastructure engineers minimize manual work and create repeatable processes to maximize productivity | [Pipeline configuration](https://docs.gitlab.com/ee/ci/yaml/), [Types of Pipeline configurations](https://docs.gitlab.com/ee/ci/pipelines/#types-of-pipelines) | |

## Top 3 Differentiators

| Differentiator | Value | Proof Point  |
|-----------------|-------------|---------------|
| Choice of Agent-based and Agentless approach  |  Customers have a choice to pick the right approach for their environments. With an Agentless approach, users can have GitLab manage and orchestrate GitOps processes for K8s and non-K8s platforms without having to install and maintain agents at every destination infrastructure component leading to the consumption of less resources, and cost savings. With an Agent-based approach, users, with secured infrastructure components that sit behind a firewall, can leverage the GitLab Agent to keep their secured infrastructure up-to-date mitigating the risk of security breaches and unexpected downtimes. | TBD  |
| On-premise & cloud - physical, virtual, cloud native infrastructures |  GitLab meets customers where they are. Most competitors support GitOps for cloud native infrastructure only, GitLab supports GitOps for your on-prem or cloud deployments - whether it is physical servers, virtual servers or cloud native infrastructures. You don't need to purchase and maintain different GitOps solutions for your different kinds of infrastructure leading to cost savings and a consistent user experience for doing GitOps across your organization. | TBD  |
| Single application to foster collaboration across Infrastructure, Development and Operations team |  GitLab is a single application with most of the necessary ingredients for GitOps - version control, CI/CD and container registry & out-of-the-box integration for configuration management, orchestration & infrastructure provisioning. Most competitive solutions require 5-6 integrations to achieve the same. Consolidating into GitLab for all your GitOps leads to cost savings and its consistent user experience and integrated capabilities can help increase productivity and higher environment stability and reliability. | TBD  |

## Message House

The message house for the use case provides a structure to describe and discuss the value and differentiators for the use case.

Current messaging can be found in the [market viewpoint](#the-market-viewpoint) section for this page and on the topic page which answers [What is GitOps?](https://about.gitlab.com/topics/gitops/) along with some additional notes here:

"Infrastructure Platform" is a great phrase to use in connection with GitOps and GitLab. We need to be careful with its use so we don't portray ourselves as something we aren't. In the past we've been called out for claiming to have capabilities similar to Chef, Ansible, and Terraform, when we don't house the capabilities within GitLab, but instead seek to integrate with those tools. If we keep it clear that we provide infra platform capabilities via integrations then we have some strong messaging that connects with I&O buyers. See an [example use on the topic page](https://about.gitlab.com/topics/gitops/#why-gitlab)

### Discovery Questions

- How does your infrastructure team manage configurations, policies, variables etc consistently across your infrastructure?
- How are you able to keep track of the changes made to your infrastructure?
- Are you able to ensure that changes are reviewed and approved by the right individuals - to ensure minimal disruption to your staging / production environments?
- How many people have access to your environments console and are you able to track changes made in the console consistently? e.g., engineer logs into AWS / GCP console to make changes to create a break fix solution.
- How are you able to showcase proof of compliance of all the infrastructure changes done - that are essential audit requirements?
- How quickly are you able to recover from issues in your environment and roll back to the last successful deployment?
- Is your infrastructure team able to consistently repeat the steps to setup an environment every single time?
- Are your infrastructure teams and development teams using different tools - thereby reducing collaboration between the two teams?
- Are you able to consistently deploy your infrastructure policies and configurations to multiple clouds to ensure continuity across clouds and minimal tooling?
- We've heard some customers struggle with configuration files being stored in an ad-hoc manner. How are you managing your configuration files?
- Many customers have more than one infrastructure administrators managing their environment. How are you able to track the root cause of your production downtime when multiple people have access to make changes to the environment?
- How manual and repetitive is your infrastructure setup and maintenance activities?
- How much time do your engineers spend doing infrastructure setup and maintenance? How much of it is repetitive?
- How satisfied are your engineers with their workflow? What areas would they like to improve?
- How much productivity is lost due to manual changes to your environments?
- Is your organization interested in improving infrastructure workflows in favor of more automation?
  - Why do you believe you need infrastructure automation in your organization?
  - What type of roadblocks are you encountering with your current infrastructure workflows?
- What is the workflow for an infra engineer to make any changes to the current staging / production environments?
- How much time does it currently take to setup new infrastructure workflows? How repetitive are these workflows?

### Objection Handling

| Objection | Response |
| --------- | -------- |
| *Our environment is too complex for GitOps* | Large changes are always complex. But you can consider doing this iteratively - starting from your simplest test environment. GitLab also has a strong [professional services](https://about.gitlab.com/services/) team that can help you get started with your GitOps journey. |
| *GitOps gives more access to developers to fiddle with the deployments, and infrastructure teams are not comfortable with that* | GitOps empowers developers to work collaboratively with Infrastructure teams. GitOps with GitLab includes enough controls through merge request approvals, audit reports, compliance dashboards - that your infrastructure teams can use to ensure they are able to monitor what goes into production. |
| *(Infra / DevOps Engineer) I'm going to loose control over my work and environment* | GitOps empowers developers to work collaboratively with Infrastructure teams. GitOps with GitLab includes enough controls through merge request approvals, audit reports, compliance dashboards - that your infrastructure teams can use to ensure they are able to monitor what goes into production. |
| *I don't use Kubernetes, so GitOps is not relevant for me* | GitOps with GitLab will meet you where you are - we support deployments to physical, virtual and cloud native environments - whether on-premise or on cloud. |
| *I am not comfortable with a push-based / agentless approach that expects me to open up my firewall or give cluster access to GitLab CI/CD.* | We recently announced a [GitLab Agent for Kubernetes](https://about.gitlab.com/blog/2021/02/22/gitlab-kubernetes-agent-on-gitlab-com/) that would allow secure communication between the Kubernetes cluster and GitLab CI/CD using an agent-based approach. This would not require customers to open up their firewall or give cluster access to GitLab CI/CD. We support both options currently - and you can choose the approach that best suits your specific needs. |

## Competitive Comparison

### ArgoCD

ArgoCD is an Open Source Solution for GitOps deployments for Kubernetes. It was started by Intuit and is now a [CNCF incubation project](https://www.cncf.io/projects/argo/). It is part of the Argo Project family of products.

ArgoCD is competes directly with the GitLab Agent for Kubernetes.

ArgoCD works together with GitLab. It can supplement the build and secure steps run in GitLab CI/CD.

| Differentiator  | How competitor does it | How GitLab does it differently |
| - | ---------------------- | ------------------------- |
| Multiple products to achieve GitOps | ArgoCD focuses exclusively on the deployment part. There are other Argo projects for feature flags and advanced deployments strategy support. | GitLab provides all the required tooling integrated in a single platform |
| Multiple deployment targets | Focused on cloud native deployments only | Can deploy to On-premise & cloud, physical, virtual, cloud native infrastructures |
| Push & Pull based deployment Automation |  ArgoCD watches for new images and updates services in the K8S cluster according to policies chosen by the customer. Does not support push based deployment. | The GitLab Agent for Kubernetes watches for new K8S manifests and updates the K8S cluster accordingly. |
| Use GitOps principles to install and manage self | ArgoCD can bootstrap itself | The GitLab Agent can set up to manage itself |
| Synchronize state when deployment is rolled back | As a rollback is a new git commit or revert, this happens by design | As a rollback is a new git commit or revert, this happens by design when using the GitLab Agent |

### Weaveworks - using Flux OSS operator

Flux is an Open Source Solution for continuous and progressive delivery for Kubernetes. Flux was started at Weaveworks and is now a CNCF incubation project. It is part of the WeaveWorks Cloud solution for GitOps.

The WeaveWorks Cloud solution also works together with GitLab - with GitLab SCM and CI working with Flux CD to create a GitOps solution.

| Differentiator  | How competitor does it | How GitLab does it differently |
| - | ---------------------- | ------------------------- |
| Multiple products to achieve GitOps | The Weaveworks toolchain is GitHub for version control, CircleCI for CI , Quay.io for container registry, Weave Flux for CD in addition to other tools for configuration management, infrastructure provisioning and container orchestration [Source](https://web.archive.org/web/20231201061330/https://www.weave.works/blog/the-gitops-pipeline). Customers can choose any other Git, CI, container registry of their choice as well | Customers have at least 3 fewer tools to manage. Version control, CI/CD and container registry is offered by GitLab while we integrate with other tools for configuration management, infrastructure provisioning and container orchestration similar to Weaveworks. |
| Multiple deployment targets |  Focused on cloud native deployments only | Can deploy to On-premise & cloud, physical, virtual, cloud native infrastructures |
| Push & Pull based deployment Automation |  Flux watches for new images and updates services in the K8S cluster according to policies chosen by the customer. Does not support push based deployment. | The GitLab Agent for Kubernetes watches for new K8S manifests and updates the K8S cluster accordingly. Available on self managed and on invite only for SaaS. Currently - push based deployment is supported without agent. Roadmap includes push based deployment support as well using the agent. |
| Use GitOps principles to install and manage self | Flux v2 can create a git repo, manage flux manifests and updates using GitOps principles | TBD? |
| Synchronize state when deployment is rolled back | TBD? | TBD? |

### Industry Analyst Relations (IAR) Plan

- The IAR Handbook page has been updated to reflect our plans for [incorporating Use Cases into our analyst conversations](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/analyst-relations/#how-we-incorporate-use-cases-into-our-industry-analyst-interactions).
- For  details specific to each use case, and in respect of our contractual confidentiality agreements with Industry Analyst firms, our engagement plans are available to GitLab team members in the following protected document: [IAR Use Case Profile and Engagement Plan](https://docs.google.com/spreadsheets/d/14UthNcgQNlnNfTUGJadHQRNZ-IrAe6T7_o9zXnbu_bk/edit#gid=1124037301).

For a list of analysts with a current understanding of GitLab's capabilities for this use case, please reach out to Analyst Relations via Slack (#analyst-relations) or by submitting an [issue](https://gitlab.com/gitlab-com/marketing/product-marketing/issues/new) and selecting the "AR-Analyst-Validation" template.

## Adoption recommendation

This table shows the recommended use cases to adopt, links to product documentation, the respective subscription tier for the use case, and product analytics metrics.

| Feature / Use Case | Free | Premium | Ultimate | Product Analytics | Notes |
| ------------------ | ---- | ------- | -------- | ----------------- | ------ |
| [Try the GitLab Agent for Kubernetes](https://docs.gitlab.com/ee/user/clusters/agent/) | ✓ | ✓ | ✓ | `counts.kubernetes_agents_with_token` | |
| [Migrate from custom CI solution](https://docs.gitlab.com/ee/user/clusters/agent/ci_cd_workflow.html) | ✓ | ✓ | ✓ | `redis_hll_counters.kubernetes_agent.agent_users_using_ci_tunnel_monthly` | |
| [Use push based deployments](https://docs.gitlab.com/ee/user/clusters/agent/) | ⤬ | ✓ | ✓ | `redis_hll_counters.kubernetes_agent.agent_users_using_ci_tunnel_monthly` | |
| [Advanced permissions management for CI connection](https://docs.gitlab.com/ee/user/clusters/agent/ci_cd_workflow.html#restrict-access-of-authorized-projects-and-groups) | ⤬ | ✓ | ✓ | `redis_hll_counters.kubernetes_agent.agent_users_using_ci_tunnel_monthly` | |
| [Use pull-based deployments](https://docs.gitlab.com/ee/user/clusters/agent/gitops.html) | ✓ | ✓ | ✓ | [WIP](https://gitlab.com/gitlab-org/gitlab/-/issues/366294) | |

## Proof Points - customers

### Quotes and reviews

- [Video: kiwi.com on Infrastructure as Code](https://www.youtube.com/watch?v=Un2mJrRFSm4) - Learn how kiwi.com uses GitLab and Terraform to manage their infrastructure as code. Bonus info - see how they deploy self hosted GitLab instance from GitLab CI/CD and Infrastructure as Code
- [Video: VMWare - Infrastructure as Code with GitLab and Terraform Cloud](https://www.youtube.com/watch?v=qXj4ShQZ4IM) - GitLab and Terraform have worked well together for some time; Learn how VMWare uses GitLab CI/CD and Terraform Cloud to manage infrastructure as code
- [Video: ValidaTek's journey of DevOps and Infrastructure as code](https://www.youtube.com/watch?v=3uZE-ktP2Pc) - ValidaTek work with all areas of the US Federal government from civilian to military to IC. See how they's set up GitLab to manage their client's infrastructure.

#### Gartner Peer Insights

"Very efficient tool for managing releases and versions. We have a development and deployment process, and at all stages [GitLab] is involved. In addition to storing development code, we also store all packaging and deploy scripts in git"
>
> - Full-stack Developer, [Gartner Peer Insights Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1112407)

"Finally, the most amazing thing about GitLab is how well integrated the GitLab ecosystem is. It covers almost every step of development nicely, from the VCS, to CI, and deployment."
>
> - Software Engineer, [Gartner Peer Insights Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1038051)

"GitLab is the most preferred service in the world and its user community is very wide. We can authorize project or branch based user authorization on GitLab. In addition, continuous deployment integrations can be done very quickly. In addition, you can create merge requests within the constraints you want and easily manage them. It is very easy to prevent conflicts. A service that must be used for software development teams."
>
>- Software Development Lead, [Gartner Peer Insights Review](https://www.gartner.com/reviews/market/application-release-orchestration-solutions/vendor/gitlab/product/gitlab/review/view/1324677)

### Case Studies

-**[Northwestern Mutual](https://www.youtube.com/watch?v=yw7N82mXmZU)**

- **Problem**  Manual processes, provisioning of resources from On-Prem Datacenters created inefficient practices.
- **Solution** GitLab Premium (SCM,CI) and Terraform
- **Result** Drastically improved lead time to production, Environments can be created in under an hour. Everything is done as code and there are no risks from patching.
- **Sales Segment:** Enterprise

-**[Wag Labs](https://about.gitlab.com/blog/2019/01/16/wag-labs-blog-post/)**

- **Problem** Lack of control complex CI toolchain.
- **Solution** GitLab Ultimate (SCM,CI,CD) and Terraform
- **Result** It's so easy to deploy something and roll it back if there's an issue. It's taken the stress and the fear out of deploying into production.
- **Sales Segment:** Mid-Market

### References to help you close

- Find customers that are [using GitLab with GitOps](https://docs.google.com/spreadsheets/d/1j31jz71BBMM-8IPHZWUzi8IogYq2m-VhyofzJmd3wk8/edit?usp=sharing)

## Partners

GitLab is not a replacement for existing Infrastructure Automation tools, but rather complements them to provide a comprehensive solution. As per the [JetBrains DevOps Ecosystem 2019](https://www.jetbrains.com/lp/devecosystem-2019/devops/) survey, **Terraform** is the most popular infrastructure provisioning tool used by customers. Terraform is cloud-agnostic and helps manage complex infrastructures for distributed applications. GitLab will [focus on Terraform support](https://about.gitlab.com/direction/delivery/infrastructure_as_code/#whats-next) as the first step towards building a comprehensive GitOps solution.

## Resources

### Presentations

- GitOps Industry Talk - What is GitOps? Why is it important? How can you get started? - [slide deck](https://docs.google.com/presentation/d/18cuZjvkMT8uv241dqJZMdaWOyvZiwBOzFvRZ4HaP1iE/edit), [video](https://www.youtube.com/watch?v=JtZfnrwOOAw)

### WebPage, Whitepapers, infographics, blogs

- [What is GitOps?](https://about.gitlab.com/topics/gitops/)
- [Infrastructure as Code using GitLab & Ansible](https://about.gitlab.com/blog/2019/07/01/using-ansible-and-gitlab-as-infrastructure-for-code/)
- [Part 1 of 3: Why collaboration technology is critical for GitOps](https://about.gitlab.com/topics/gitops/gitops-gitlab-collaboration/)
- [Part 2 of 3: How infrastructure teams use GitLab and Terraform for GitOps](https://about.gitlab.com/topics/gitops/gitlab-enables-infrastructure-as-code/)
- [Part 3 of 3: How to deploy to any cloud using GitLab for GitOps](https://about.gitlab.com/topics/gitops/gitops-multicloud-deployments-gitlab/)

### Videos (including basic demo videos)

- [What is GitOps? Why is it important? How can you get started?](https://www.youtube.com/watch?v=JtZfnrwOOAw)
- [What is Infrastructure as Code](https://www.youtube.com/watch?v=zWw2wuiKd5o)
- [Infrastructure as Code using GitLab & Ansible](https://youtu.be/M-SgRTKSeOg)
- [Part 1 of 3: How GitLab supports GitOps: The Process](https://www.youtube.com/watch?v=wk7YAXijIZI)
- [Part 2 of 3: How GitLab supports GitOps: The Infrastructure](https://www.youtube.com/watch?v=5rqoLj8N5PA)
- [Part 3 of 3: How GitLab supports GitOps: The Application](https://www.youtube.com/watch?v=heQ1WY_08Tc)
- [GitOps with GitLab and Terraform](https://www.youtube.com/watch?v=G7JOjI6V3AY)
- [Using GitLab for GitOps to break down silos and encourage collaboration](https://www.youtube.com/watch?v=5ykRuaZvY-E)

### Clickthrough & Live Demos

- [GitOps Click Through Demo](https://drive.google.com/open?id=1UT32lLvXtwAslkK7o8asbko3a231WKrjmlcM0z9coPw)

## Buyer's Journey

Inventory of key pages in the buyer's Journey

| **Awareness** <br> learning about the problem  |  **Consideration** <br> looking for solution ideas  |  **Decision** <br> is this the right solution|
| ------ | -------- |-------- |
| topic page?  | solution page | proof points |
| landing pages? | ?comparisons?  | comparisons |
| -etc?            |   |  - product page x <br>  - product page y <br>  - product page z |
