---
title: "Technology Roadmap"
---

As GitLab continues to grow and mature, it is approaching a pivotal point in which faster growth across multiple large sites and an emphasis on the enterprise will become the main challenges to contend with over the next 12 months. All within the context of a relentless focus on security, availability, and performance.

In order to meet these challenges, we need to attain extremely high levels of **predictability** when operating the environments. This entails stricter standardization while providing the required flexibility to support both self-managed instances and GitLab sites, which enables the use of advanced automation by leveraging advanced tooling. But even with a high confidence level on predictability, **risk** is a factor we must manage: things will inevitably go wrong when effecting change in the environments. Thus, we must be able to quantify acceptable risk, to react fast in the face of failure to restore stability, and to so as a single Engineering unit.

As a company, GitLab advocates [cloud native](https://about.gitlab.com/topics/cloud-native/) as the future of software development: customers benefit from GitLab as a complete DevOps platform delivered as a single application (from issue tracking and source code management to CI/CD and monitoring, with a built-in container registry and Kubernetes integration). We must fully embrace this model ourselves. In this context then, our **most critical technical strategic investment will be our own full transition to Cloud Native on stateless components**, which will afford us the ability to operate and fine-tune a variety of configurations at scale while innovating feature-wise and being frugal. In tandem, we must also develop enterprise-level capabilities to meet stringent requirements imposed by said customers.

## Multi-Large Sites: Cloud Native

**Cloud native** is an approach to application development and operation built around cloud computing, shifting the focus from individual machines to services that rely on on-demand cloud resources to deliver high service levels while adapting to a never-ending stream of changes. It relies on technologies such as containers and strategies such a microservices to deploy at high frequencies in a consistent manner. This is reflected in our beliefs on the [Biggest Tailwinds](/handbook/leadership/biggest-tailwinds/), and enables a high degree of predictability, thus allowing us to better manage said service levels.

Today, GitLab consists of a monolithic GitLab Rails codebase and several supporting services (Gitaly, GitLab Workhorse, Registry, CI runners, GitLab Shell, and GitLab Pages, etc.). GitLab has therefore already adopted some facets of cloud native, but we need to move closer to this model to succeed.

However, we cannot do a wholesale switch to cloud native: we must evolve a single codebase that supports the wide variety of environments in which it runs along two parallel but distinct paths, scaling across multiple large sites while supporting self-managed instances. Thus, even as we embark on a fuller embrace of cloud native, we must find a balance that spans both paths, allowing for the necessary transitions from one to the other. This balance requires us to continuously evaluate our needs and identify opportunities to extract specific workloads from the monolith where appropriate without diving into the trap of creating an unmanageable set of *runaway microservices* while re-thinking how some of the supporting services scale in this context.

### Compartmentalizing State

In order to adopt container technologies, we must remove shared local state from all possible application components that do not require it, especially those using shared POSIX storage (NFS). Build logs and GitLab Pages are the two primary users of NFS in the environment, a dependency that must be eliminated.

While we will not be migrating stateful services to cloud native at this time, we need to align them with cloud native capabilities. In particular, the main database (Postgres) needs to support cloud native strategies in the application. To that end, we must implement near-zero downtime Postgres upgrades (i.e., upgrades that, at most, simply require a database failover to take effect), which will be done through Database Logical Replication, and provide testing environments with production-like data and traffic to validate database changes st scale.

A key aspect of adopting cloud native relies on the Registry, which is currently undergoing some massive changes, starting with a tighter dependency on database resources. Without the Registry, cloud native is non-functional.

### Managing Risk

Change is the main channel for the introduction of risk in the environment. We have made tremendous progress in CI/CD, where the frequency of deployments is now measured in hours. With higher deployment velocity, we need the tooling to carefully manage risk post-deployment. Features flags play a key tool to ship changes early, and safely rollout them to wide audience, ensuring that feature is both stable and performant. GitLab already uses feature flags extensively, but their current implementation needs to scale to enable their full potential is helping manage risk. We also need to be able to perform rollbacks of non-recoverable failed changes.

Finally, we must be able to quantify risk, and, in doing so, further quantify how much of it we are willing to accept. [Error budgets provide a framework](/handbook/engineering/error-budgets/) to do this, and an organizational adherence to error budgets enables us to think about the steps we need to take organizationally to handle what happens after error budgets have been depleted. Thus, we must deliver on a full technical and organizational implementation of error budgets.

## The Enterprise

### Disaster Recovery

As we move deeper into the enterprise, especially within the context of multi-large sites, disaster recovery becomes a critical capability that moves from a purely technical requirement into a critical business concern. Disaster Recovery is managed through [Geo](https://docs.gitlab.com/ee/administration/geo/index.html) on self-managed instances, but GitLab.com has presented a particular challenge at scale, both in terms of size and growth. Additionally, GitLab.com is a public instance with a wide variety of users. Geo operates at the instance level, but this may not be appropriate for GitLab.com. We should determine what our disaster recovery requirements are for GitLab.com (recovery times, user types), and then work towards enabling Geo to handle this unique situation (which will, over time, affect other multi-large sites). [Disaster recovery working group](/handbook/company/working-groups/disaster-recovery/) is tasked with answering the aforementioned questions.

### Repository Storage

Much work has taken place to strengthen repository storage, and we must take this work to completion. In particular, Gitaly clustering is key in managing storage tiers to provide the right level of availability, durability and performance required to meet customer demands.

### Cost Management

As DevOps streamlines application development, deployment and management, cost becomes a concern the application must help with. We must pivot from reactive to proactive cost management: as the application gains new capabilities and scale, its cost footprint also increases, and these cannot be managed entirely on a reactive basis outside the application. The application itself must gain a sense of awareness to aid in cost management. This awareness comes primarily through the integration with underlying infrastructure technologies, which is well-aligned with cloud native strategies: if the application is managing how much infrastructure it needs to use to deliver rock-solid service, it must also be able to provide the necessary metadata to tag resources and make decisions to optimize and manage costs.

## Roadmap

The single list of all the architectural blueprints being worked on and in
progress can be found in the [architecture tasks issue board](https://gitlab.com/gitlab-org/architecture/tasks/-/boards/2155153).
