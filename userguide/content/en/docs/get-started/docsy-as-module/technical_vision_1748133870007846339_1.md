---
title: Cloud Connector - Technical vision
---

## Objective

Until today, Cloud Connector has delivered value primarily by expanding the Duo addressable market from multi-tenant gitlab.com to single-tenant Dedicated and self-managed environments. However, there are clear opportunities to improve our platform and
expand our reach in the following areas:

1. **From cloud-hosted to self-hosted.** There is demand for supporting self-hosted or hybrid single-tenant setups, where a service such as the AI gateway connected through Cloud Connector runs on premises. This is especially important to serve air-gapped environments.
2. **Streamline AI feature development.** Help to simplify development, reducing maintenance costs, and enabling feature teams to build autonomously. This foundation will address current AI needs and support future expansion to non-AI use cases.
3. **From AI to _any_ use case.** There is demand to deliver non-AI use cases such as Advanced SAST through Cloud Connector.

This creates a complex matrix of setups and use cases, which today requires bespoke solutions and raises ownership questions as we continue to expand our product offerings.
Moreover, because Cloud Connector operates both at the infrastructure and application level, we take on a wide range of responsibilities regardless of the feature
being integrated.

What we are missing are "paved roads" to ship new integrations broadly across all stages of the DevOps life-cycle and across all kinds of GitLab deployments, while reining in both the domain and technical complexity the team is exposed to today.

We propose a two-pronged approach to help the team create predictable roadmaps and to keep being a leverage point for GitLab to expand our audience:

1. Shift from a point integrations approach to a **platform approach**.
2. Define **clear ownership boundaries** for our permissioning framework.

## Rationale

Cloud Connector started with the [long term vision](https://gitlab.com/groups/gitlab-org/-/epics/308) of making it possible for customers to access GitLab features that are difficult to operate in self-managed environments. Such features tend to be accessible on gitlab.com only; examples include CI Runners and previously, AI. We are now 1.5 years into this vision and made great progress by delivering on a narrower goal: [Providing AI feature parity](https://gitlab.com/groups/gitlab-org/-/epics/10516) across our gitlab.com, Dedicated and self-managed offerings, while also expanding to support additional and evolving authentication and permission requirements, such as multiple Duo add-ons and cut-off dates.

However, the strong focus on AI has not allowed us to execute on a true platform approach as originally envisioned. This has led to a number of pain points that impede our original vision:

1. **Non-AI services are difficult to onboard.** While we have working integrations with the GitLab Observability Backend (GOB) and the SAST service (i.e. two non-AI use cases), we have no technical artifacts in place to support these services, which do not use the same tech stack as AI services. Support from our team is provided on a best-effort basis only and onboarding and maintaining new non-AI services is not sustainable given the solutions and capacity we have in place today.
2. **No integrated solution for self-hosted backends.** Earlier in 2024, the Custom Models team was tasked with supporting self-hosted AI gateway instances. This work happened largely in parallel to Cloud Connector, and uses some of our abstractions, not all of them  appropriate because Cloud Connector was not originally designed to support local services. Much of its complexity exists because it expects _remote, untrusted parties_ to dial into GitLab infrastructure, which is not what happens when you self-host. This disconnect is particularly clear as air-gapped customers are concerned, where it is impossible to "cloud-connect" anything, which led to insufficent interfaces and implementations built by Cloud Connector.
3. **Lack of guard rails and clear technical boundaries.** We have meanwhile identified new potential use cases (such as capturing product analytics into Snowplow), where some parts of Cloud Connector like its traffic layer may be useful, but it is unclear whether this project meets the requirements of such an integration because no such requirements exist today. Moreover, our permissioning layer has no clear ownership boundaries, with different parts owned by different stage groups. This slows down iterating and building new features.

We propose to resolve these issues in FY26 and beyond as outlined below.

### Execution

#### From point integrations to platform

We think that the most promising approach to deliver on this vision is via [Runway](https://docs.runway.gitlab.com/). Runway's [satellite service vision](https://docs.runway.gitlab.com/reference/blueprints/satellite-services-vision/) is to provide a single, uniform platform for deploying and operating satellite services integrated with the GitLab Rails monolith, accessible to all customers on gitlab.com (multi-tenant SaaS), Dedicated (single-tenant SaaS) and Self-Managed.

We propose for Cloud Connector to lean into this proposal by extending Runway's vision with the following objectives and goals:

1. **Leverage Runway as a "paved road" for Cloud Connector.** We will:
    1. Make Runway a requirement for Cloud Connector and build middleware with a focus on Runway services. This will be our "80% case" (Pareto principle.)
       We will continue to allow satellite services to run outside of Runway, but will provide support for these services either not at all, or on a best effort basis only,
       depending on the additional maintenance burden our team would be subjected to.
    2. Become a "plug-in" to Runway instead of operating independently. As such, we will streamline language used in blueprints and reuse existing configuration mechanisms already used by Runway, such as [service manifests](https://docs.runway.gitlab.com/reference/service-manifest/). Runway will parse and actuate Cloud Connector configuration,
    so as to replace the hand-rolled configuration for service integration used today. This will provide stage groups with clear interfaces for integrating via
    Cloud Connector and increase automation.
2. **Unify "cloud-hosted services" and "self-hosted services" into a single "connected services" approach.** This is a refinement of Runway's satellite services vision, which currently suggests to keep Cloud Connector focused on cloud-hosted services. Instead, we will provide uniform integration points for authenticating with _any_ satellite service, regardless of where it is deployed.
3. **Provide clear guard rails for what makes a feature compatible with Cloud Connector.** To preempt lengthy discussions about whether a particular use case should be in scope for Cloud Connector or not, we will provide clear guidelines that stage groups can use to test their requirements against.
   Any proposed integrations that fall outside of these specifications may require an escalated request to be approved in order for the Cloud Connector team to support it.
4. **[STRETCH] Become GitLab's standard for service authentication and request authorization.** Today, there is no single approach to authenticating requests entering a satellite service, let alone clearing individual permissions in such a service. Cloud Connector's approach to authentication and permission management is isolated to services integrated with us and does not cover existing integrations like CI runners or Gitaly. We have an opportunity to streamline authN/authZ to cover all current and future services.

#### Clear boundaries for permissioning framework

To speed up feature development in Cloud Connector integrations and bring clarity to how permissions are handled both in
satellite services and in the GitLab monolith, we will focus on designing, building, documenting and delivering
the basic framework through which permissions are defined and enforced in Cloud Connector integrations, and how this
framework is intended to be used through a combination of developer documentation and executable examples.

At a high level, we should think of Cloud Connector's role in permissioning to operate at the instance or namespace level
("Which entitlements does this customer have in aggregate?") not at the user level ("Can Alice access Code Suggestions?")

More specifically:

**We will continue to:**

- Provide interfaces and tools stage groups can use to enforce permission checks ("unit primitive checks") in Cloud Connector
  services and the GitLab monolith. We will commit to provide clear documentation and guidelines for how these interfaces are
  intended to be used.
- Build, own and operate the synchronization mechanisms through which permissioning data is made available to GitLab instances
  around the world.

**We will start:**

- Provide easier access to unit primitive data in form of a feature catalog that can be navigated.
  We started working on a proof-of-concept for this [here](https://gitlab.com/gitlab-org/cloud-connector/gitlab-cloud-connector/-/merge_requests/81).
- Reworking our permissioning framework, where necessary, to accomodate air-gapped customers.

**We will stop:**

- Owning code that deals with user-level checks in the GitLab monolith, such as roles and policies.
  We will hand this code over to the AI stage groups where necessary.
- Owning code that deals with seat assignments or licensing and purchase histories of a particular GitLab instance or namespace
  We will hand this code over to the Fulfillment:Provision group where necessary.

---

We think that we can execute on these objectives incrementally and iteratively as outlined below.

## Short term vision

In the near term, we intend to remain focused primarily on AI use cases, and iterate as an "AI platform team" first.
We will do so with non-AI uses cases in mind and make two-way door decisions, so as not to impede taking a more general
platform approach. _We will not integrate any new non-AI services in FY26._

- **Timeline:** End of FY26
- **Mission:** Address immediate pain points to improve AI feature development
- **Confidence:** high

### Key objectives

- **Observability, availability, security:**
  - Finish our rate limiting layer in Cloudflare to address immediate platform risk related to AI vendor quota management. [epic 13778](https://gitlab.com/groups/gitlab-org/-/epics/13778)
  - Improve insight into Cloud Connector code paths especially as regards performance and added latency to mitigate
    risk of regessions in end-user experience. [epic 14573](https://gitlab.com/groups/gitlab-org/-/epics/14573)
  - Separate Cloud Connector key management from shared OIDC keys to mitigate platform security risk and reduce blast radius
    should credentials leak or be routinely rotated. [epic 16215](https://gitlab.com/groups/gitlab-org/-/epics/16215)
- **Clear scope and interfaces:**
  - Establish a clear contract for which uses cases or services are considered in-scope for Cloud Connector, and which "technical shape" they must have. [issue 205](https://gitlab.com/gitlab-org/cloud-connector-team/team-tasks/-/issues/205)
  - Establish a clear interface for how stage groups can interrogate Unit Primitive data to test permissions.
  - Permissioning code modules in the GitLab monolith we deem outside of our ownership boundaries are refactored and handed over to other teams.
  - Stage group developers have access to a Unit Primitive directory using a web UI to see which permissions are owned by whom. [issue 41](https://gitlab.com/gitlab-org/cloud-connector/gitlab-cloud-connector/-/issues/41)
- **Self-hosted/air-gapped support:**
  - Streamline code and configuration to incorporate self-hosted services as a first-class Cloud Connector concept rather than a "special case". [epic 16149](https://gitlab.com/groups/gitlab-org/-/epics/16149)
  - Support self-hosting AI services (AI gateway, Duo Workflow) but accept no new service integrations for self-hosting until we have more clarity for how to streamline configuration and deployment.
  - Configuration and deployment on customer premises remains to be largely manual.
- **Investigate deeper integration with Cloud Provider IAM:**
  - With the arrival of Amazon Q, a different authentication and authorization model is used where GitLab instances integrate
    directly with AWS's IAM system. While it's unclear how this will affect Cloud Connector evolution,
    we should investigate and considering supporting these integrations at a platform level and for any cloud provider.
- **Runway integration - phase 1:**
  - Build a prototype that demonstrates how Cloud Connector configuration could be integrated with Runway service manifests. This will work for cloud-hosted satellites only. We will continue to hand-wire self-hosted backends while remaining compatible with cloud-hosted configuration format.

### Constraints

- Stage groups must use Python when integrating with Cloud Connector. Other languages are only supported on a best effort basis.
- Stage groups looking to integrate through Cloud Connector must adhere to a technical contract that will be defined by us (ex: only web services are supported, must use `cloud.gitlab.com` etc.) We are currently exploring what such constraints could look like in
[issue #10763](https://gitlab.com/gitlab-org/cloud-connector-team/team-tasks/-/issues/205).

## Medium term vision

From AI platform to service platform. Self-hosted services will not yet be on Runway.

- **Timeline:** Approximately 1–3 years in the future
- **Mission:** Expand focus beyond AI, become a universal platform to integrate cloud-hosted services
- **Confidence:** moderate

### Key objectives

- **Clear scope and interfaces:**
  - Stage group developers may choose any supported tech stack in their services, e.g. Ruby, Go, Python. Instead of integrating with backends at the applicational level, Cloud Connector provides support for authentication and authorization through a language agnostic solution (e.g. service sidecar container.)
- **Self-hosted/air-gapped support:**
  - For customers who self-host, the service will not be on Runway, but the setup experience is improved and removes most of today's manual configuration steps.
- **Runway integration - phase 2:**
  - Broaden support from AI services to _any_ services compatible with Runway. Runway as the primary road to deploy services in any environment.

### Constraints

- Services not already on Runway remain unsupported (ex: CI runners, Gitaly).
- While Cloud Connector configuration happens through Runway, self-hosted customers won't yet benefit from it.

## Long term vision ("North Star")

Runway + Cloud Connector provide a universal service integration platform for any type of deployment.

- **Timeline:** Approximately 3–5 years in the future
- **Mission:** Runway + Cloud Connector is GitLab's standard to operate satellite services in self-hosted and cloud-hosted environments
- **Confidence**: low

### Key objectives

- **Runway integration - phase 3:**
  - Runway and the "Cloud Connector plug-in" are the de-facto standards at GitLab to configure, deploy and authenticate with satellite services bundled with GitLab.
  - All satellite services are on Runway and use [Runway service manifests](https://docs.runway.gitlab.com/reference/service-manifest/) to configure all aspects of Cloud Connector, including services not formerly deployed via Runway.
  - Instance admins can configure all aspects of Runway and Cloud Connector through a web interface in the GitLab Rails application itself, greatly improving admin UX.
  - Unified secrets managements that allows managing keys and tokens for both token issuers and token validators using the GitLab UI.
    Secrets are rotated automatically.

### Constraints

- Assumes availability of Runway in self-managed environments, which at the time of this writing is still largely undefined.
- Assumes integration with GitLab's own Secrets Management service ("Tanukey").
- We may maintain exceptions for services of very high complexity where a migration may provide a poor cost/benefit trade-off.

## Non-goals and open questions

- We will not own solutions to how services are built, packaged or deployed. We only own aspects relevent to authentication and authorization and the configuration thereof.
- We should consider renaming Cloud Connector since we will start to pivot away from solely focusing on cloud-based work loads and will also support air-gapped setups.
  This could prove confusing over time and lead to mismatched expectations.
