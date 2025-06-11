---
title: "Introducing a Messaging Layer to the GitLab Application"
status: proposed
creation-date: "2025-02-26"
authors: [ "@ankitbhatnagar", "@arun.sori"]
coach: [ "@andrewn" ]
approvers: [ "@dennis" ]
owning-stage: "~group::platform insights"
participating-stages: []
toc_hide: true
---

{{< engineering/design-document-header >}}

## Summary

This document proposes design, architecture and a rollout roadmap for adopting & using a _messaging layer_ to support data messaging & queuing needs at GitLab scale.

From some of our recent initiatives such as building the [Data Insights Platform](https://docs.google.com/document/d/1V3XRXfPquBrI_-ob9Fn2Jdskq7W4-heG6zBjJ66AOx8/edit?usp=sharing) or [Project Siphon](/handbook/engineering/architecture/design-documents/siphon/), it has become evident that we need a scalable & reliable queueing system within our technology stack to be able to ingest & process large amounts of data. Having gone through [multiple discussions around this](#additional-context), we have narrowed down our choices to [using NATS](https://docs.nats.io/nats-concepts/what-is-nats) as a solution to these needs - as explained later in this document.

## Motivation

A primary driver for having a _scalable messaging layer_ within our tech-stack is building our ability to ingest large amounts of data, especially analytical or monitoring data. While it is totally possible to persist data directly into our databases, it's riddled with scalability challenges. For example, when ingesting data into ClickHouse, the database given its architecture - performs much better when ingesting large batches of data across fewer writes than ingesting a large number of small writes. Some past context around [our experience with this](https://gitlab.com/gitlab-org/opstrace/opstrace/-/issues/2044).

Another key requirement is to be able to _process_ incoming data before it lands within a database. At minimum, we need the ability to perform operations such as:

- dynamically enrich incoming data with metadata from other systems & data catalog,
- ensure ingested data does not contain sensitive information and anonymize, pseudonymize, or redact data as needed,
- batch data outside of main storage while certain (logical) conditions are met,
- fan-out ingested/processed data to multiple destinations, etc.

From an architectural perspective, having a _data buffer_ available upstream to our persistent stores would help alleviate resource pressure downstream by absorbing large spikes in ingested data, which might happen quite frequently as we continue to generate and/or gather more data. We outline [other significant benefits of building such an abstraction](#benefits-of-building-an-events-based-platform-within-gitlab) later in this document.

Considering [our forward-looking use-cases](#looking-forward), we also need such a system to be __consistently available across all our deployment-models__ for GitLab instances, i.e. GitLab.com, Cells, Dedicated or Self-Managed. This would ensure we consolidate how we deal with any data stream generated across the product. With such a large deployment surface, it's important we minimize all distribution & operational complexities of running such a system while ensuring its reliable, scalable and capable of delivering performance at GitLab scale.

As elucidated later in this document, [NATS](https://nats.io/) stands out given its [minimal footprint](https://docs.nats.io/running-a-nats-service/introduction/installation#hardware-requirements), [ease of distribution](https://docs.nats.io/running-a-nats-service/introduction/installation#supported-operating-systems-and-architectures) and its ability to both be [embeddable](https://docs.nats.io/running-a-nats-service/clients#embedding-nats) within the product and scale out as a cluster when needed.

### Goals

- Establish scalable & reliable data queueing infrastructure for a few first adopters: Siphon, Data Insights Platform.
- Provide authenticated & authorized access to all ingested data into the messaging layer.
- Provide necessary documentation to allow developers to interact with the messaging layer.
- Integrate messaging layer implementation with existing GitLab infrastructure to enable the aforementioned use-cases.

### Non-goals

- Not aim to build a general-purpose event-bus for all our queueing/eventing needs _just yet_. Rather, the blueprint aims to lay the foundation for a future comprehensive event-bus with design decisions that should preserve compatibility with broader applications or use-cases looking forward.
- Not cover application-specific implementation details within the context of a messaging layer.

## Proposal

The core of this proposal is to __establish a foundational messaging piece__ within our tech-stack and build out necessary infrastructure well-integrated with GitLab installation(s).

For this first iteration, we _do not_ expect to have all GitLab services or applications interacting with this messaging layer directly. The only planned usage right now is the following:

- For Siphon to [buffer Postgres replication events](/handbook/engineering/architecture/design-documents/siphon/#main-components) before landing them in ClickHouse.

- Applications sending Snowplow-instrumented events to [Data Insights Platform](https://gitlab.com/groups/gitlab-org/architecture/gitlab-data-analytics/-/epics/12) via [event instrumentation layer](https://gitlab.com/groups/gitlab-org/architecture/gitlab-data-analytics/-/epics/13) which are [dynamically enriched](https://gitlab.com/groups/gitlab-org/architecture/gitlab-data-analytics/-/epics/33) and landed into ClickHouse and AWS S3.

### Looking forward

Once the aforementioned messaging layer is generally available, we aim to position it as the data queueing backbone for a more general-purpose [events-based data platform within the product](https://gitlab.com/groups/gitlab-org/-/epics/14860). Its existence helps ensure reliability and scalability for the various cross-platform data-related features at GitLab.

### Benefits of building an events-based platform within GitLab

Having a centralized events-based data platform within the product helps improve GitLab's logical architecture and its ability to scale well with time. As we build & continue to adopt such an architecture, the following key benefits come to mind:

- Enables __loose-coupling__ between data producers and consumers across GitLab allowing them to scale independently of each other.
- Encourages __asynchronous communication patterns__ between participating systems improving their scalability with increasing traffic volumes.
- Makes our architecture __extensible__ wherein new consumers of existing data can be added with trivial time & effort.
- Provides a __centralized, common architecture__ for sharing data useful for integrations across different parts of the product. This also leads to building over time singular sources of truth for important data across the product bringing consistency to product data.

The following discussions also explain why building an events-based abstraction is important for GitLab's architecture at its current scale:

- [Product Event Platform](https://gitlab.com/groups/gitlab-org/-/epics/14860)
- [GitLab Events Platform](/handbook/engineering/architecture/design-documents/gitlab_events_platform/)
- [GitLab Structured Events](https://gitlab.com/gitlab-org/opstrace/opstrace/-/issues/2046)

Note, while the existence of a centralized data-sharing platform helps alleviate scalability & reliability concerns from other parts of our infrastructure, esp. databases, we will also need to iron out a few other concerns such as [authorising clients](https://gitlab.com/groups/gitlab-org/-/epics/14860#note_2078181184), [routing data efficiently](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/113700#note_1322317107) and [decoupling away from the monolith](/handbook/engineering/architecture/design-documents/gitlab_events_platform/#challenges) to ensure such a system proves valuable to our logical architecture.

### Identified use-cases

Following is a detailed set of use-cases that benefit from the existence of a centralized data platform within the product.

| Teams/areas | Use-cases | Expected scale |
|---|---|---|
| __Enterprise Data/Infrastructure__ | Logically replicating data out of Postgres. | ~100GB of new data ingested from Postgres per hour. We'll also need to scale with Cells architecture. |
| __Platform Insights__ | Ingesting & processing large amounts of analytics data in real-time, then persisting it into ClickHouse.| Product Usage Data: 1200 events/sec (100M daily), ~15GB/hour, expected to increase with increase in instrumentation + 2.5x when pursuing [event-level data collection from the customer's domain](https://docs.google.com/document/u/0/d/1x8M4t0ELrPlnNJcSXx4juvavV-Yh_NWCom6zo8AmY9o/edit) (about 300M events daily). |
| __Machine Learning__ | Extracting & processing events/features from GitLab data to create training/test datasets for ML models at scale. |  |
| __Security & Compliance__ | Extracting and actioning upon events, e.g., audit events, from GitLab data in near real-time. | __Audit events saved to database per day__ (excludes streaming only audit events) - ~0.6M records are created per day _(audit event coverage has stalled due to load on Postgres, this is likely to increase if this migrates over to an event pipeline)_ <br><br> __Streaming only audit events generated per day__ (this excludes audit events saved to DB) - ~35M streaming only events are created per day. <br><br> Total estimates would be at __~40M events per day__. See [Kibana dashboard (internal)](https://log.gprd.gitlab.net/app/dashboards#/view/338615b0-1eea-11ee-8afc-c9851e4645c0?_g=\(\)). |
| __Product__ | [Generic Events Platform](/handbook/engineering/architecture/design-documents/gitlab_events_platform/) to asynchronously process data, events & tasks. Ingesting & processing external data via webhooks as a service. |  |
| __Product__ | Implementing real-time analytics features on top of an analytical database (ClickHouse). (primarily the Optimize team would be involved,other product teams might also contribute) | Data volume: Similar or less than what we observe with the PostgreSQL databases. Depends on how many tables we replicate (Siphon) to ClickHouse.   Enqueued event count: significantly lower as we’re batching the CDC events into packages. |
| __Plan__ | [JIRA Compete Strategy](https://gitlab.com/groups/gitlab-org/-/epics/364) |  |

### Considered alternatives

As a potential solution to the aforementioned use-cases, a few popular backends were considered throughout our discussions. The following comparison matrix helps assess different possible backends for messaging needs within GitLab.

Note, we considered the following four deployment targets (for GitLab) when assessing potential solutions:

- __GitLab.com SaaS__: Multi-tenant instance.
- __GitLab Dedicated__: Single-tenant, dedicated resources per instance.
- __Self-Managed on-cloud__: For this environment, we assume a GCP-environment to prefer using GCP resources, an AWS-environment to prefer using AWS resources, etc. accounting for deployment-homogeneity.
- __Self-Managed on-premise__: For this environment, we assume all environments to be air-gapped so as to not have to make other assumptions on behalf of our customers.

| Dimension / Solution |  [Apache Kafka](https://kafka.apache.org/) |  [RabbitMQ](https://www.rabbitmq.com/) |  [Google PubSub](https://cloud.google.com/pubsub?hl=en) |  [AWS Kinesis](https://aws.amazon.com/kinesis/) |  [NATS](https://nats.io/) | Our preferred solution for the given dimension(s) |
| ----- | ----- | ----- | ----- | ----- | ----- | ----- |
|  __Distribution__: Assessing packaging and distribution complexity of the system. | Available as a JVM-based application, [pre-packaged for most environments](https://kafka.apache.org/downloads) we intend to run it in. <br><br> __Score: 6/10__ | Available [pre-packaged for most environments](https://www.rabbitmq.com/docs/download) we intend to run it in, though having support for `Erlang` as a runtime makes distribution non-trivial compared to e.g. Go or Java. <br><br> __Score: 5/10__ | Externally managed cloud solution, available on Google Cloud Project. <br><br> __Score: 10/10__ | Externally managed cloud solution, available on Amazon Web Services. It scores slightly less than GCP considering our tight integrations on GCP for hosting .com SaaS. <br><br> __Score: 9/10__ | Available as a compiled, lightweight, single-binary developed in Golang. [NATS can be packaged and deployed in all environments we support](https://docs.nats.io/running-a-nats-service/introduction/installation) running GitLab instances in. <br><br> __Score: 8/10__ | NATS or cloud-managed services subject to self-hosting challenges. |
| __Operational Complexity__: Considering management of this solution in: <br> __GitLab.com SaaS__ (multitenant). <br> __GitLab Dedicated__ (single tenant). <br> __Self-Managed (SM) on Cloud__. <br> __Self-Managed (SM) on-premise__. |  Kafka can be non-trivial to operate, generally speaking. <br><br> __.com SaaS__: Should be non-trivial to add & support with a very large storage footprint. 🔴 <br><br> __Dedicated__: Should be non-trivial to add & support, though storage footprint might be manageable. 🟡  <br><br>  __SM on Cloud__: Should be trivial to add & support though it’s highly cost-intensive even on smaller reference architectures. See [\[1\]](https://gitlab.com/gitlab-org/distribution/team-tasks/-/issues/1589#note_2060391762), [\[2\]](https://gitlab.com/gitlab-org/architecture/gitlab-data-analytics/design-doc/-/issues/44#note_2025872500) for past discussions. <br><br> __SM on-prem__: High upfront capex & opex unless already available within the environment. 🔴 <br><br> __Score: 5/10__ | RabbitMQ can be non-trivial to operate, generally speaking. <br><br> __.com SaaS__: Should be non-trivial to add & support with a reasonably large large storage footprint. 🔴 <br><br> __Dedicated__: Should be non-trivial to add & support, though storage footprint should be manageable. 🟡  <br><br> __SM on Cloud__: Trivial to add support, though highly cost-intensive even with smaller reference architectures. 🔴 <br><br> __SM on-prem__: High upfront capex & opex unless already available within the environment. 🔴 <br><br> __Score: 4/10__ | Google PubSub comes with near-zero operational complexity being an externally managed cloud solution. <br><br> __.com SaaS__: Should be trivial to add & support. 🟢 <br><br> __Dedicated__: Should be trivial to add & support should we need to build Dedicated environments in GCP. 🟡 <br><br> __SM on Cloud__: Should be trivial to add & support. 🟢  <br><br> __SM on-prem__: Discarding the possibility of use assuming the environment to be air-gapped. 🔴  <br><br> __Score: 8/10__ | Amazon Kinesis comes with near-zero operational complexity being an externally managed cloud solution. <br><br> __.com SaaS__: Should be trivial to add & support. 🟢  <br><br> __Dedicated__: Should be trivial to add & support considering Dedicated environments already exist on AWS. 🟢  <br><br> __SM on Cloud__: Should be trivial to add & support. 🟢  <br><br> __SM on-prem__: Discarding the possibility of use assuming the environment to be air-gapped. 🔴  <br><br> It might also be worth noting that Dedicated uses Kinesis for log aggregation and frequently experiences performance problems with it. See [these issues](https://gitlab.com/gitlab-com/gl-infra/gitlab-dedicated/incident-management/-/issues/?sort=created_date&state=all&search=kinesis&first_page_size=100) for more context. <br><br> __Score: 7/10__ | NATS is reasonably trivial to operate, given its architecture. <br><br> __.com SaaS__: Should be trivial to add & support, storage footprint can be managed on a per use-case basis. 🟢  <br><br> __Dedicated__: Should be trivial to add & support, storage footprint can be managed on a per use-case basis. 🟢  <br><br> __SM on Cloud__: Support not available on major hyperclouds but available via [Synadia Cloud](https://www.synadia.com/cloud). 🟡  <br><br> __SM on-prem__: Should be non-trivial to add & support, storage footprint can be managed on a per use-case basis. 🟡 <br><br> __Score: 8/10__ | NATS or cloud-managed services subject to self-hosting challenges. Note, for most self-managed on-premise installations, NATS stands out as a potential solution. |
| __Availability as a Managed Service__: Do AWS, Google Cloud or Azure provide a managed service? | [AWS-managed Kafka (MSK)](https://aws.amazon.com/msk/) [GCP Managed service for Kafka](https://cloud.google.com/products/managed-service-for-apache-kafka?hl=en) [Azure Messaging Services](https://learn.microsoft.com/en-us/azure/messaging-services/) OR [Hosted Kafka on Azure](https://azuremarketplace.microsoft.com/en-us/marketplace/consulting-services/canonical.0001-com-ubuntu-managed-kafka), supported by Canonical. <br><br> __Score: 10/10__ | [Amazon MQ](https://aws.amazon.com/amazon-mq/) [Hosted RabbitMQ on Azure](https://azuremarketplace.microsoft.com/en-us/marketplace/apps/84codes.cloudamqp-v4?tab=overview) supported by CloudAMQP. <br><br> __Score: 6/10__ | Managed service. <br><br> __Score: 10/10__ | Managed service. <br><br> __Score: 9/10__ | Not available on the major hyperclouds directly but it is available as a [managed cloud solution via Synadia Cloud](https://www.synadia.com/cloud). <br><br> __Score: 6/10__ | Google PubSub or AWS Kinesis subject to which environment we’re deploying our applications to. <br><br> Integration with Synadia Cloud is pending exploration. |
| __Consistency/Maturity__: Jepson reports, other potential concerns with consistency? | Jepsen testing has been done for Kafka, no consistency concerns outside of normal distributed systems exist. <br><br> __Score: 9/10__ | Jepsen testing has been done for RMQ, no consistency concerns outside of normal distributed systems exist. <br><br> __Score: 9/10__ | No concerns. <br><br> __Score: 10/10__ | No concerns. <br><br> __Score: 10/10__ | Jepson tests have not been performed yet, though NATS has had considerable production presence across its set of adopters. <br><br> __Score: 8/10__ | No outright blockers against using any of the explored systems. |
| __Cloud Native Support__: How complex is it to run the service in Kubernetes? | Yes, popularly deployed via Kubernetes Operators such as [Strimzi](https://github.com/strimzi/strimzi-kafka-operator). <br><br> __Score: 5/10__ | Yes, also deployable via [the Kubernetes operator](https://www.rabbitmq.com/kubernetes/operator/operator-overview) officially supported by the RMQ team. <br><br> __Score: 5/10__ | Managed service, integration only. <br><br> __Score: 10/10__ | Managed service, integration only. <br><br> __Score: 10/10__ | Yes, [deployable via Helm charts](https://docs.nats.io/running-a-nats-service/nats-kubernetes). <br><br> __Score: 9/10__ | NATS or cloud-managed services subject to self-hosting challenges. |
| __License Compatibility__: Is the system being considered license-compatible with GitLab? As part of this we also considered the likelihood of license changes. | Kafka is licensed as Apache Version 2.0, available as open-source. <br><br> __Score: 10/10__ | RabbitMQ is dual-licensed under the Apache License 2.0 and the Mozilla Public License 2. <br> We have the freedom to use and modify RabbitMQ however we want. <br><br> __Score: 10/10__ | Managed, commercially licensed. <br><br> __Score: 10/10__ | Managed, commercially-licensed. <br><br> __Score: 10/10__ | NATS is licensed as Apache Version 2.0. Originally developed by Synadia, has now been donated to CNCF, and is currently under incubation. <br><br> __Score: 10/10__ | No red flags, most systems are appropriately licensed. |
| __Compatibility with our technology stack__: Is the technology stack compatible with our experience? | JVM-based system. <br><br> __Score: 2/10__ | RabbitMQ can potentially run on any platform that provides a supported Erlang version, from multi-core nodes and cloud-based deployments to embedded systems. <br><br> __Score: 1/10__ | Highly compatible with our technology stack, especially in how we approach systems and integrations at GitLab. <br><br> __Score: 10/10__ | Highly compatible with our technology stack, especially in how we approach systems and integrations at GitLab. Scores slightly less than PubSub given our existing presence within GCP. <br><br> __Score: 9/10__ | Reasonably compatible with our tech-stack, with NATS developed in Golang. Given it compiles to a single binary, it can run natively on host machines across our deployment surface with trivial effort. <br><br> __Score: 9/10__ | NATS or cloud-managed services subject to self-hosting challenges. |
| __Client/Language support__: How good/bad is client/language support for the given system, most notably Golang, Ruby and Python? | [Widely supported across major languages](https://docs.confluent.io/kafka-client/overview.html), with other languages supported via `librdkafka` wrappers. <br><br> Golang: ✅  <br> [Ruby](https://github.com/karafka/rdkafka-ruby): ✅  <br> Python: ✅  <br><br> __Score: 9/10__ | [Widely supported across languages.](https://www.rabbitmq.com/client-libraries/devtools) <br><br> Golang: ✅  <br> Ruby: ✅  <br> Python: ✅  <br><br> __Score: 10/10__ | [Has support for major languages via officially supported clients.](https://cloud.google.com/pubsub/docs/reference/libraries) <br><br> Golang: ✅  <br> Ruby: ✅  <br> Python: ✅  <br><br> __Score: 10/10__ | Provides [Kinesis Client Library](https://docs.aws.amazon.com/streams/latest/dev/kcl.html) (KCL) as a standalone Java software library designed to simplify the process of consuming and processing data from Amazon Kinesis Data Streams. We need to use language specific SDKs or KCL wrappers for other languages. <br><br> [Golang](https://docs.aws.amazon.com/sdk-for-go/api/service/kinesis/): ✅  <br> [Ruby](https://github.com/awslabs/amazon-kinesis-client-ruby): ✅  <br> [Python](https://pypi.org/project/kinesis-python/): ✅  <br><br> __Score: 8/10__ | [Widely supported across languages](https://docs.nats.io/using-nats/developer) <br><br> [Golang](https://github.com/nats-io/nats.go): ✅  <br> [Ruby](https://github.com/nats-io/nats-pure.rb): ✅  <br> Python: ✅  <br><br> __Score: 10/10__ | No clear winners here. All considered solutions have decent client-support for the three languages we need support in, with varying levels of support for other languages. |
| __Dependencies__: How much supply-chain risk do we introduce by including this dependency? How big/deep is the dependency graph for this project? | Needs Zookeeper or KRaft for cluster co-ordination, in addition to running Kafka brokers themselves. ZK can run natively on underlying hosts, while KRaft runs as an internal part of Kafka (broker) process. <br><br> __Score: 5/10__ | Needs the support for an Erlang runtime, code-developed in Erlang. The dependency-graph is mostly unfamiliar technology for our environments. <br><br> __Score: 4/10__ | Managed, closed-source systems. We do not actively manage the dependency graph on this system. <br><br> __Score: 9/10__ | Managed, closed-source systems. We do not actively manage the dependency graph on this system. <br><br> __Score: 9/10__ | Single Golang binary with no external dependencies, and runs natively on underlying hosts. <br><br> __Score: 8/10__ | NATS or cloud-managed services subject to self-hosting challenges. |
| __FIPS Compliance__: Assess FIPS 140-3 readiness and/or AWS GovCloud managed service options. | Kafka itself doesn’t support FIPS compliance but can be configured on runtime with a validated JDK/OpenSSL setup. <br><br> __Score: 6/10__ | Similar to Kafka, RabbitMQ must be run with a FIPS-compliant OpenSSL library and/or dependencies. <br><br> __Score: 6/10__ | Yes, implicit support via Google’s FIPS-compliant cryptography. <br><br> __Score: 10/10__ | Yes, deployments must be secured behind AWS FIPS endpoints. <br><br> __Score: 9/10__ | Go’s crypto-implementation isn’t FIPS ready but NATS deployments can be secured via a FIPS-compliant TLS implementation using OpenSSL. <br><br> Chainguard, a GitLab partner, does provide a [FIPS image for NATS](https://images.chainguard.dev/directory/image/nats-fips/versions). <br><br> __Score: 6/10__ | NATS or cloud-managed services subject to self-hosting challenges. |
| __Exploits and CVEs__: How many critical CVEs has the product experienced over the past 2 years? |  |  |  |  |  |  |
| __Community Adoption__: How widely adopted is the system? Contributions from multiple organisations, etc. | Widely adopted. <br><br> __Score: 10/10__ | Widely adopted. <br><br> __Score: 9/10__ | Widely adopted. <br><br> __Score: 10/10__ | Widely adopted. <br><br> __Score: 10/10__ | Widely adopted. <br><br> __Score: 9/10__ | No clear winners here. All considered solutions have decent footprints subject to the different dimensions applicable to different users. |
| __Operational costs:__ How expensive is it to adopt/run the system esp. at our scale? <br><br> __Note:__ See detailed analysis of costs and its breakdown with used reference architectures and underlying sizing [later in this document](#cost-estimation--analysis). | When compared to NATS or RabbitMQ, Kafka can be more resource intensive both in compute and storage given its replication overheads. It’ll consume more compute nodes if we use Zookeeper for cluster coordination OR more vCPUs in the case of using KRaft which works on the same JVM as the broker process. <br><br> __Score: 6/10__ | RabbitMQ can be slightly more compute intensive as compared to NATS given its acknowledgement mechanism, wherein it’s more suitable for more transactional streaming workloads. Operational costs roughly similar to NATS otherwise. <br><br> __Score: 7/10__ | Managed solution with a major share of costs coming from data transfer to & from the backing system. Additionally, having to retain data for longer costs more in GCP than AWS. <br><br> __Score: 4/10__ | Managed solution, with a major share of costs coming from data transfer to & from the backing system. <br><br> __Score: 5/10__ | Least compute intensive of the systems analysed, with a minimal footprint on storage as well. Scales horizontally with our reference architectures without incurring large overheads. <br><br> __Score: 9/10__ | NATS clearly stands out given its minimal footprint and lesser overheads assuming we can discount any self-hosting challenges. Any of the analysed managed services in the Cloud cost an order of magnitude more, especially at scale. |
| __Net Score__ | __83__ | __76__ | __111__ | __105__ | __100__ | \- |
|  | [Apache Kafka](https://kafka.apache.org/) | [RabbitMQ](https://www.rabbitmq.com/) | [Google PubSub](https://cloud.google.com/pubsub?hl=en) | [AWS Kinesis](https://aws.amazon.com/kinesis/) | [NATS](https://nats.io/) | - |

### Cost estimation & analysis

To ensure a comparable analysis for the different systems, we made some assumptions around how much data we need to host in each of the analysed systems.

__For example__, accounting for all Snowplow-instrumented data originating from .com SaaS, we estimate to generate 500GB of event data per day. If we then intend to retain this data for a week, we’ll roughly accumulate 3.5TB data which will need to be hosted on the underlying infrastructure at any given point in time. It can be assumed that data lifecycle policies kick-in correctly and this remains our maximum storage footprint within the context of this example.

- __Daily generated data__: 500GB
- __Retention__: 7 days
- __Maximum stored data__: 500GB \* 7 days \= 3.5TB

__The following is how all analysed backends fair with that amount of data.__

| System / Components | Deployment Target | Compute | Storage | Network | Support/Operational | Total Estimate |
| :---- | :---- | :---- | :---- | :---- | :---- | :---- |
| __Apache Kafka__ <br><br> Estimated with the simplest possible architecture comprising 3 brokers, each using 4 vCPUs \+ 16GB RAM, and attached to 1TB standard persistent disks each. <br><br> It’s also expected we either colocate Zookeeper with Kafka brokers or use KRaft instead. When deploying Zookeeper nodes standalone, costs for those nodes will be additional. <br><br> It’s also expected no replication is set up on the topics/partitions being used. Additional replication for HA will increase the storage footprint `n` times, where `n` is the replication factor used. | __.com SaaS__ | __GCP__ `n4-standard-4` (4 vCPUs and 16 GB RAM) @ $0.1895 per hour. <br><br> Monthly cost per VM: $0.1895/hour \* 730 hours/month \= $138.34 <br><br> Total for 3 VMs: 3 \* $138.34 \= $415.02. | __GCP__ Standard persistent disks @ $0.04 per GB per month. <br><br> Cost per 1 TB disk: 1,024 GB \* $0.04/GB \= $40.96 <br><br> Total for 3 disks: 3 \* $40.96 \= $122.88. | __GCP__ Subject to how the cluster is set up, the following [network pricing rules](https://cloud.google.com/vpc/network-pricing?hl=en) apply. <br><br> Intra-zone/Inter-zone data transfer costs may apply, i.e. VM-to-VM data transfer when the source and destination VM are in different zones of the same Google Cloud region. When zones are different, $0.01 per GiB bandwidth used. <br><br> We encourage both the server and the client to be in the same region to keep the communication efficient. Otherwise, inter-region data transfer costs apply for each GiB bandwidth used. |  | __GCP__ Monthly Estimate: $415.02 (compute) \+ $122.88 (storage) \= $537.90  |
|  |  | __AWS__ `t3a.xlarge` (4 vCPUs and 16 GB RAM) @ $0.0832 per hour. <br><br> Monthly cost per instance: $0.0832/hour \* 730 hours/month \= $60.74 <br><br> Total for 3 instances: 3 \* $60.74 \= $182.22. | __AWS__ General Purpose SSD `gp2` volumes @ $0.10 per GB per month. <br><br> Cost per 1 TB volume: 1,024 GB \* $0.10/GB \= $102.40 <br><br> Total for 3 volumes: 3 \* $102.40 \= $307.20. |  |  | __AWS__ Monthly Estimate: $182.22 (compute) \+ $307.20 (storage) \= $489.42 |
|  | __Dedicated__ | _(same as above)_ | _(same as above)_ |  |  | _(same as above)_ |
|  | __SM on-cloud__ | _(same as above)_ | _(same as above)_ |  |  | _(same as above)_ |
|  | __SM on-prem__ | _Estimated with reference architectures._ | _Estimated with reference architectures._ |  |  | _Estimated with reference architectures._ |
| __RabbitMQ__ | __.com SaaS__ |  |  |  |  |  |
|  | __Dedicated__ |  |  |  |  |  |
|  | __SM on-cloud__ |  |  |  |  |  |
|  | __SM on-prem__ |  |  |  |  |  |
| __NATS__ <br><br> Estimated with the simplest possible architecture comprising 3 NATS servers, each using 4 vCPUs \+ 16GB RAM, and attached to 1TB standard persistent disks each. No other dependencies are required. | __.com SaaS__ | __GCP__ `n4-standard-4` (4 vCPUs and 16 GB RAM) @ $0.1895 per hour <br><br> Monthly cost per VM: $0.1895/hour \* 730 hours/month \= $138.34 <br><br> Total for 3 VMs: 3 \* $138.34 \= $415.02. | __GCP__ Standard persistent disks @ $0.04 per GB per month. <br><br> Cost per 1 TB disk: 1,024 GB \* $0.04/GB \= $40.96 <br><br> Total for 3 disks: 3 \* $40.96 \= $122.88. |  |  | __GCP__ Monthly Estimate: $415.02 (compute) \+ $122.88 (storage) \= $537.90 |
|  |  | __AWS__ `t3a.xlarge` (4 vCPUs and 16 GB RAM) @ $0.0832 per hour. <br><br> Monthly cost per instance: $0.0832/hour \* 730 hours/month \= $60.74 <br><br> Total for 3 instances: 3 \* $60.74 \= $182.22. | __AWS__ General Purpose SSD `gp2` volumes @ $0.10 per GB per month. <br><br> Cost per 1 TB volume: 1,024 GB \* $0.10/GB \= $102.40 <br><br> Total for 3 volumes: 3 \* $102.40 \= $307.20. |  |  | __AWS__ Monthly Estimate: $182.22 (compute) \+ $307.20 (storage) \= $489.42 |
|  | __Dedicated__ | _(same as above)_ | _(same as above)_ |  |  | _(same as above)_ |
|  | __SM on-cloud__ | _(same as above)_ | _(same as above)_ |  |  | _(same as above)_ |
|  | __SM on-prem__ | _Estimated with reference architectures._ | _Estimated with reference architectures._ |  |  | _Estimated with reference architectures._ |
| __Google PubSub__ <br><br> Cost for PubSub has three main components: <br><br> __Throughput costs__ for message publishing & delivery. <br> __Data transfer costs__ associated with throughput that crosses a cloud zone or region boundary. <br> __Storage costs__. <br><br> Additionally: No zonal data transfer fees for usage. <br> No inbound data transfer fees are required when publishing from other cloud/private DCs. | __.com SaaS__ | Message Delivery Basic SKU @ $40 per TiB.  | Storage @ $0.27 per GiB-month. | Data transfer costs to be estimated via [VPC network rates](https://cloud.google.com/vpc/network-pricing?hl=en#vpc-pricing). Using standard tier pricing, $0.045 per GiB/month. |  | Given our capacity estimates: <br><br> Throughput: 500GB\*30\*$0.04 \= $600 per month. <br><br> Storage: 3.5TB\*1024\*0.27 \= $968 per month. <br><br> Delivery: 500GB\*30\*3\*$0.045 \= $1800 per month <br><br> Monthly estimate: \~ $3400 |
|  | __Dedicated__ | _(same as above)_ | _(same as above)_ | _(same as above)_ |  | _(same as above)_ |
|  | __SM on-cloud__ | _(same as above)_ | _(same as above)_ | _(same as above)_ |  | _(same as above)_ |
|  | __SM on-prem__ | _Estimated with reference architectures._ | _Estimated with reference architectures._ | _Estimated with reference architectures._ |  | _Estimated with reference architectures._ |
| __Amazon Kinesis__ | __.com SaaS__ | Shards: $0.015 per shard-hour | Storage (\>24h): $0.023 per GB-month. | Incoming data: $0.08 per GB Outgoing data: $0.04 per GB |  | Given our capacity estimates: <br><br> Ingestion: 500GB\*30\*$0.08 \= $1200 per month. <br><br> Delivery: 500GB\*30\*$0.04 \= $1800 per month <br><br> Storage: 3.5TB\*1024\*$0.023 \= $82 per month <br><br> Shards: 500GB \== 5.8MB/s \== 6 6\*24\*30\*$0.015 \= $65 <br><br> Monthly estimate: \~ $3200 |
|  | __Dedicated__ | _(same as above)_ | _(same as above)_ | _(same as above)_ |  | _(same as above)_ |
|  | __SM on-cloud__ | _(same as above)_ | _(same as above)_ | _(same as above)_ |  | _(same as above)_ |
|  | __SM on-prem__ | _Estimated with reference architectures._ | _Estimated with reference architectures._ | _Estimated with reference architectures._ |  | _Estimated with reference architectures._ |

### Cost analysis with respect to GitLab reference architectures

Read for more details: [https://docs.gitlab.com/administration/reference\_architectures/](https://docs.gitlab.com/administration/reference_architectures/)

Before estimating resources, we’ll need a measure of message traffic across the different reference architectures:

- __Message volume__: Estimating how many messages per second.
- __Message size__: Estimating message payload size in bytes.
- __Number of publishers/consumers__
- __Persistence/storage__: How much data needs to be stored and/or retained over how much time.

| Reference Architecture / System | Kafka | RabbitMQ | PubSub | Kinesis | NATS |
| ----- | ----- | ----- | ----- | ----- | ----- |
| __General overview, sizing constraints.__ | When compared to NATS or RabbitMQ, Kafka can be more resource intensive both in compute and storage given its replication overheads. It’ll consume more compute nodes if we use Zookeeper for cluster coordination OR more vCPUs in the case of using KRaft which works on the same JVM as the broker process. | RabbitMQ can be slightly more compute intensive as compared to NATS given its acknowledgement mechanism, wherein it’s more suitable for more transactional streaming workloads. | Estimated costs: <br><br> _Message ingestion: $40 per TB ($0.04/GB) <br><br> Message delivery: $40 per TB <br><br> Storage retention: $0.27/GB/month <br><br> Data transfer: Standard GCP egress fees._ | Estimated costs: <br><br> _Shards (compute): $0.015 per shard/hour <br><br> Ingestion (writes): $0.036 per million records <br><br> Data retention: $0.02 per GB per day <br><br> Data transfer: Standard AWS egress fees._ | A simple 3-nodes cluster should suffice, instance-sizing to be estimated with traffic estimates. |
| __Small__ (\~2000 users) |  | _Roughly similar to NATS._ | Sizing: 5000 messages per second. <br><br> Ingestion cost: $520 <br><br> Delivery cost: $520 <br><br> Storage cost: $2700 <br><br> Monthly estimate: $3700 at the minimum. | Sizing: 5000 messages per second, needing 3 shards. <br><br> Shard cost: $32.40 <br><br> Ingestion cost: $3.60 <br><br> Storage cost: $6000 <br><br> Monthly estimate: $6000 at the minimum | Sizing: 4vCPU, 8GB RAM, 100GB SSD, 1TB total data transfer. <br><br> Instances: 3 |
|  |  |  |  |  | __AWS__ `t3.xlarge` @ $0.16/hr \= $120 per month. <br><br> 100 GB EBS gp3 SSD \= $10 per month. <br><br> Bandwidth: 1TB @ $0.09GB \= $90 <br><br> Monthly estimate: $480 at the minimum. |
|  |  |  |  |  | __GCP__ `e2-standard-4` \= $108 per month. <br><br> Persistent SSD (100GB) \= \~$17 per month. <br><br> Bandwidth: 1TB @ $0.08GB \= $80 <br><br> Monthly estimate: $450 at the minimum. |
| __Medium__ (\~5000 users) |  | _Roughly similar to NATS._ | Sizing: 10000 messages per second. <br><br> Ingestion cost: $1040 <br><br> Delivery cost: $1040 <br><br> Storage cost: $2700 <br><br> Monthly estimate: $4700 at the minimum. | Sizing: 10000 messages per second, needing 5 shards. <br><br> Shard cost: $54 <br><br> Ingestion cost: $7.20 <br><br> Storage cost: $6000 <br><br> Monthly estimate: $6000 at the minimum | Sizing: 8vCPU, 16GB RAM, 100GB SSD, 2TB total data transfer. <br><br> Instances: 3 |
|  |  |  |  |  | __AWS__ `m6i.2xlarge` @ $0.38/hr \= $280 per month. <br><br> 100 GB EBS gp3 SSD \= $10 per month. <br><br> Bandwidth: 2TB @ $0.09GB \= $180 <br><br> Monthly estimate: $1050 |
|  |  |  |  |  | __GCP__ `n2-standard-8`\= $240 per month. <br><br> Persistent SSD (100GB) \= \~$17 per month <br><br> Bandwidth: 2TB @ $0.08GB \= $160 <br><br> Monthly estimate: $940 at the minimum. |
| __Large__ (\~10000 users) |  | _Roughly similar to NATS._ | Sizing: 50000 messages per second. <br><br> Ingestion cost: $5200 <br><br> Delivery cost: $5200 <br><br> Storage cost: $2700 <br><br> Monthly estimate: $13000 at the minimum. | Sizing: 50000 messages per second, needing 10 shards. <br><br> Shard cost: $110 <br><br> Ingestion cost: $36 <br><br> Storage cost: $6000 <br><br> Monthly estimate: $6200 at the minimum | Sizing: 8vCPU, 32GB RAM, 500GB SSD, 5TB total data transfer. <br><br> Instances: 5 |
|  |  |  |  |  | __AWS__ `m6i.4xlarge` @ $0.76/hr \= $560 per month. <br><br> 500 GB EBS gp3 SSD \= $50 per month. <br><br> Bandwidth: 5TB @ $0.09GB \= $450 <br><br> Monthly estimate: $3500 |
|  |  |  |  |  | __GCP__ `n2-standard-16`\= $480 per month. <br><br> Persistent SSD (500GB) \= \~$85 per month. <br><br> Bandwidth 5TB @ $0.08GB \= $400 <br><br> Monthly estimate: $3225 at the minimum. |
| __Extra Large__ (\~25000 users) |  | _Roughly similar to NATS._ | Sizing: 250000 messages per second. <br><br> Ingestion cost: $25000 <br><br> Delivery cost: $25000 <br><br> Storage cost: $2700 <br><br> Monthly estimate: $52700 at the minimum. | Sizing: 250,000 messages per second, needing 25 shards. <br><br> Shard cost: $500 <br><br> Ingestion cost: $360 <br><br> Storage cost: $6000 <br><br> Monthly estimate: $7000 at the minimum | Sizing: 16vCPU, 64GB RAM, 1TB SSD, 10TB total data transfer <br><br> Instances: 5+ |
|  |  |  |  |  | __AWS__ `c6i.8xlarge` @ $1.53/hr \= $1120 per month. <br><br> 1TB EBS gp3 SSD \= $100 per month. <br><br> Bandwidth: 10TB @ $0.09GB \= $900 <br><br> Monthly estimate: $7000 at the minimum. |
|  |  |  |  |  | __GCP__ `n2-highcpu-32`\= $1000 per month. <br><br> Persistent SSD (1TB) \= \~$130 per month. <br><br> Bandwidth: 10TB @ $0.08GB \= $800 <br><br> Monthly estimate: $6450 at the minimum. |

### Conclusions from a features & cost perspective

- A significant factor worth noting from analysing these backends is their high operational, distribution & support overheads both for running them ourselves OR expecting them to be available inside non-hosted environments such as Self-Managed.
- All things considered, NATS appears to be the _least expensive_ across all backends, considering it [ships as a single Go-binary](https://docs.nats.io/running-a-nats-service/introduction/installation) and can be installed in close-proximity to user services/applications with zero external dependencies. When needed, it can be scaled/sharded out across multiple servers/clusters subject to which reference architecture we run it within.
- The only factor favoring managed cloud-solutions instead is any support costs involved but their operational costs seem to outweigh any benefits we derive from using them, especially as their usage and/or adoption grows with our scale.

__The rest of this document focuses on building out the proposal to use NATS as the messaging solution within a GitLab instance.__

### Components

- One or more [JetStream-enabled](https://docs.nats.io/nats-concepts/jetstream) NATS servers
- Persistent volumes, preferably SSDs, for each deployed NATS server.
- Decentralized authentication callout server (long-term only) : For authentication/authorisation, we aim to start with leveraging hard-coded roles & credentials within NATS (centralized) but in the long-term, we expect to use a [decentralized server-side auth-callout implementation](https://docs.nats.io/running-a-nats-service/configuration/securing_nats/auth_callout) for authenticating inbound traffic.

### Deployments

With the intention to make NATS available to every GitLab installation, we aim to build necessary support for the following deployment models:

| Deployment type | Proposed topology |
|---|---|
| GDK | Running local to the installation |
| .com | One or more dedicated cluster(s) |
| Cells | One or more clusters subject to cells-topology |
| Dedicated | One dedicated cluster per instance |
| Self-Managed | Standalone cluster subject to distribution/instance-sizing |

### Tenancy

For all deployment-types, we expect a given __NATS cluster to be multi-tenant__, i.e. multiple users/services hosted on the deployment to share the same underlying NATS infrastructure for their messaging needs.

## Rollout roadmap

| Deliverables | Timeline |
|---|---|
| Pre-staging/Testing | FY26Q1 |
| Staging | TBD |
| Production: .com | TBD |
| Gradual rollout to Dedicated | TBD |
| Gradual rollout to Self-managed | TBD |

## Design & Implementation

### Architecture

The following diagram depicts a simple 3-node NATS cluster deployed as a `StatefulSet` with dedicated persistent volumes. A given application can then discover the service:

- using a headless service, or

```text
nats.default.svc.cluster.local
```

- addressing the pods directly

```text
nats-0.nats.default.svc.cluster.local
nats-1.nats.default.svc.cluster.local
nats-2.nats.default.svc.cluster.local
```

![server-setup](/images/engineering/architecture/design-documents/nats/server-setup.png)

### Setup

- Setup an N-nodes cluster subject to data volumes & retention.
- Enable data persistence via [NATS JetStream](https://docs.nats.io/nats-concepts/jetstream).
- Configure [stream replication](https://docs.nats.io/nats-concepts/jetstream/source_and_mirror) for subjects as needed.

### Connectivity

- NATS comes with support for both plaintext and TLS connections. We intend to use TLS-enabled connections to help authenticate all incoming traffic.

- Access to the NATS service will only be available to internal network clients. External clients will not be able to connect to the NATS service.

- External load-balancing is therefore not needed, which is also [highly advised against](https://docs.nats.io/running-a-nats-service/environment#load-balancers). Each NATS server in a given cluster must be reachable individually with all loadbalancing deferred to NATS itself.

- For Cells-based installations, we can leverage the use of [NATS Gateways](https://docs.nats.io/running-a-nats-service/configuration/gateways) to connect clusters should we need to, but we expect each cell to be serviceable in isolation for majority of our applications. While we believe that NATS Gateways may help with interconnection in future, this functionality is _out-of-scope_ for this iteration of the blueprint.

### Topology

- For all deployment-types, NATS will be deployed __region-local only__ similar to Redis or Sidekiq and __not Geo-replicated__ like Postgres. While it is possible to [mesh NATS clusters together](https://docs.nats.io/running-a-nats-service/configuration/gateways) as a feature, this functionality is _out-of-scope_ for this iteration of the blueprint.

- For `GitLab.com`, we intend to setup & run NATS clusters cloud-natively on Kubernetes with the assumption that the following potential overheads can be well-managed:
  - running stateful workloads within Kubernetes.
  - [performance overheads from routing traffic within Kubernetes services](https://docs.nats.io/running-a-nats-service/environment#virtualization-containerization).
  - load-balancing traffic via Kubernetes service-topology.

- From an operational perspective and considering we prefer new services to be built Kubernetes-based, it'll also be trivial for us to use the same configurations for GitLab.com, Dedicated, Cells and Self-Managed going forward.

- If running it cloud-natively does incur overheads, we can resort to running NATS directly on VMs within the same VPC/network-boundaries to leverage better utilization of the underlying hardware and reduce any operational complexity.

- We have also prototyped both of these deployment models:
  - using a Helm chart for cloud native installations, [initial POC](https://gitlab.com/gitlab-org/architecture/gitlab-data-analytics/nats-poc)
  - using Terraform to install NATS on cloud VMs directly - [initial POC](https://gitlab.com/gitlab-org/architecture/gitlab-data-analytics/nats-terraform)

### Data persistence

- NATS allows all ingested data to be stored in-memory or persisted on-disk.
- We intend to leverage [NATS JetStream](https://docs.nats.io/nats-concepts/jetstream) to persist all ingested data durably.
- We expect to use SSDs to improve the performance of all read/write operations.
- We intend to enforce [retention policies for ingested data](https://docs.nats.io/nats-concepts/jetstream/streams#retentionpolicy) and provision underlying storage with sufficient headroom to begin with especially as we tune our retention needs gradually. From an operational perspective, it is necessary we have the ability to increase underlying storage trivially when needed.
- We expect to enable data compression to reduce storage footprint further.

### Integration with GitLab

- We can add the aforementioned NATS connection string to the instance configuration to be used by services/applications. For example:
  - Add `nats['address'] = 'nats://nats.default.svc.cluster.local:4222'` to `/etc/gitlab/gitlab.rb`, or
  - Override `NATS_URL=nats://nats.default.svc.cluster.local:4222` in `gitlab.yml`.

## Security

### Authentication/Authorization

- NATS has prebuilt support for connections encrypted over TLS.
- It also comes with centralized auth support via JWT/NKEYS.
- We expect to promote the usage of separate principals (users/accounts) across distinct systems, e.g. producers/consumers of a given stream.
- NATS offers grouping of clients and subject space with [`accounts`](https://docs.nats.io/running-a-nats-service/configuration/securing_nats/accounts).

### Example authentication/authorization setup

We take [Siphon](/handbook/engineering/architecture/design-documents/siphon) as an example use-case here, wherein we cover:

- Creation of accounts to isolate clients.
  - Adding users to these accounts with specific permissions for available subjects. Authentication will be achieved via [nkeys](https://docs.nats.io/running-a-nats-service/configuration/securing_nats/auth_intro/nkey_auth).
  - Producers and consumers have their own users and permissions.
- Producer/Consumer `nkeys` are to be treated with the same security practices as we currently do for our database secrets.

Example `authorization.conf`

```text
listen: 127.0.0.1:4222
jetstream: enabled

producer_permissions = {
  publish = ">"
  subscribe = ">"
}

consumer_permissions = {
  publish = {
    deny = ">"
  }
  subscribe = ">"
}

accounts: {
    siphon: {
        users: [
            {nkey: Uxx, permissions: $producer_permissions},
            {nkey: Uxx, permissions: $consumer_permissions}
        ]
    }
}
```

In the above configuration, producer is allowed to publish and subscribe over all the subject space for `siphon` account while consumer is only allowed to subscribe to available subjects.

We can also apply further granularity on subject space if desired. The use of [`permissions`](https://docs.nats.io/running-a-nats-service/configuration/securing_nats/authorization#permissions-configuration-map) map allows for such fine-grained control.

Example usage of this configuration:

```go
func TestServerConfiguration(t *testing.T) {
    server, _ := RunServerWithConfig("authorization.conf")
    t.Logf(server.ClientURL())

    // producer_nkey.txt holds the nkey seed
    opt, err := nats.NkeyOptionFromSeed("producer_nkey.txt")
    if err != nil {
        t.Error(err)
        return
    }
    nc, err := nats.Connect(server.ClientURL(), opt)
    if err != nil {
        t.Error(err)
        return
    }
    js, err := nc.JetStream()
    if err != nil {
        t.Error(err)
        return
    }
    _ = js.Streams()
    defer nc.Close()
}
```

### Encryption

- While NATS has support for [encryption at rest](https://docs.nats.io/running-a-nats-service/nats_admin/jetstream_admin/encryption_at_rest), it recommends the use of filesystem encryption when available.

- Considering our deployment-targets, we intend to use disk-encryption - available on both [GCP](https://cloud.google.com/compute/docs/disks/disk-encryption) and [AWS](https://docs.aws.amazon.com/ebs/latest/userguide/ebs-encryption.html) with support for additional customer-managed key options.

### Auditing/Logging

- We intend to ship necessary [NATS logs](https://docs.nats.io/running-a-nats-service/configuration/logging) to our centralized logging infrastructure to enable any auditing/monitoring purposes.

## Operations

### Scalability

NATS is extremely lightweight and can support ingesting & digesting high amounts of messages with sub-millisecond latencies. Given its architecture, it's also optimized for handling backpressure and exercise flow-control subject to traffic volumes.

We ran the following preliminary tests against a Kubernetes-based NATS cluster with 3 servers, each such server (pod) running running on a `c2d-standard-16` GKE node and attached to a 100GB `pd-balanced` SSD persistent volume for data storage.

__Note__, the underlying GKE cluster is a regional cluster with cluster-nodes spread in 3 distinct AZs. NATS servers (pods) were carefully spread across the 3 AZs at all times during our tests.

### Key insights

- CPU usage is directly proportional to cluster usage with large spikes in the case of asynchronous publishers producing a very large number of events in a short period of time.
- Memory usage remained stable regardless of the amount of events ingested.
- Cross-AZ replication does affect cluster throughput but overall performance remains well-beyond our immediate needs.

### Synchronous publisher with stream replication

__CPU usage remained consistently low while write-throughput takes a notable hit.__

```text
➜  platform-pre-stg kubectl -n nats exec -it nats-box-6888bbc55c-kd6tm -- nats --server=nats://nats.nats.svc.cluster.local:4222 bench foobar --pub 1 --sub 5 --msgs=1000000 --js --maxbytes 20GB --purge --replicas=2 --syncpub
10:55:59 JetStream ephemeral ordered push consumer mode, subscribers will not acknowledge the consumption of messages
10:55:59 Starting JetStream benchmark [subject=foobar, multisubject=false, multisubjectmax=100000, js=true, msgs=1,000,000, msgsize=128 B, pubs=1, subs=5, stream=benchstream, maxbytes=20 GiB, storage=file, syncpub=true, pubbatch=100, jstimeout=30s, pull=false, consumerbatch=100, push=false, consumername=natscli-bench, replicas=2, purge=true, pubsleep=0s, subsleep=0s, dedup=false, dedupwindow=2m0s]

NATS Pub/Sub stats: 7,957 msgs/sec ~ 994.75 KB/sec
 Pub stats: 1,326 msgs/sec ~ 165.81 KB/sec
 Sub stats: 6,631 msgs/sec ~ 828.96 KB/sec
  [1] 1,326 msgs/sec ~ 165.80 KB/sec (1000000 msgs)
  [2] 1,326 msgs/sec ~ 165.80 KB/sec (1000000 msgs)
  [3] 1,326 msgs/sec ~ 165.80 KB/sec (1000000 msgs)
  [4] 1,326 msgs/sec ~ 165.79 KB/sec (1000000 msgs)
  [5] 1,326 msgs/sec ~ 165.81 KB/sec (1000000 msgs)
  min 1,326 | avg 1,326 | max 1,326 | stddev 0 msgs
```

### Asynchronous publisher with stream replication, publishing batches in sizes 100, 1000, 10000

__CPU usage is proportional to batch-size with write-throughput improving with moderately sized batches.__

```text
➜  platform-pre-stg kubectl -n nats exec -it nats-box-6888bbc55c-kd6tm -- nats --server=nats://nats.nats.svc.cluster.local:4222 bench foobar --pub 1 --sub 5 --msgs=1000000 --js --maxbytes 20GB --purge --replicas=2
11:13:02 JetStream ephemeral ordered push consumer mode, subscribers will not acknowledge the consumption of messages
11:13:02 Starting JetStream benchmark [subject=foobar, multisubject=false, multisubjectmax=100000, js=true, msgs=1,000,000, msgsize=128 B, pubs=1, subs=5, stream=benchstream, maxbytes=20 GiB, storage=file, syncpub=false, pubbatch=100, jstimeout=30s, pull=false, consumerbatch=100, push=false, consumername=natscli-bench, replicas=2, purge=true, pubsleep=0s, subsleep=0s, dedup=false, dedupwindow=2m0s]

NATS Pub/Sub stats: 274,880 msgs/sec ~ 33.55 MB/sec
 Pub stats: 46,073 msgs/sec ~ 5.62 MB/sec
 Sub stats: 229,066 msgs/sec ~ 27.96 MB/sec
  [1] 46,021 msgs/sec ~ 5.62 MB/sec (1000000 msgs)
  [2] 45,866 msgs/sec ~ 5.60 MB/sec (1000000 msgs)
  [3] 45,901 msgs/sec ~ 5.60 MB/sec (1000000 msgs)
  [4] 45,813 msgs/sec ~ 5.59 MB/sec (1000000 msgs)
  [5] 45,986 msgs/sec ~ 5.61 MB/sec (1000000 msgs)
  min 45,813 | avg 45,917 | max 46,021 | stddev 76 msgs

➜  platform-pre-stg kubectl -n nats exec -it nats-box-6888bbc55c-kd6tm -- nats --server=nats://nats.nats.svc.cluster.local:4222 bench foobar --pub 1 --sub 5 --msgs=1000000 --js --maxbytes 20GB --purge --replicas=2 --no-progress --pubbatch=1000
11:17:38 JetStream ephemeral ordered push consumer mode, subscribers will not acknowledge the consumption of messages
11:17:38 Starting JetStream benchmark [subject=foobar, multisubject=false, multisubjectmax=100000, js=true, msgs=1,000,000, msgsize=128 B, pubs=1, subs=5, stream=benchstream, maxbytes=20 GiB, storage=file, syncpub=false, pubbatch=1,000, jstimeout=30s, pull=false, consumerbatch=100, push=false, consumername=natscli-bench, replicas=2, purge=true, pubsleep=0s, subsleep=0s, dedup=false, dedupwindow=2m0s]

NATS Pub/Sub stats: 524,251 msgs/sec ~ 64.00 MB/sec
 Pub stats: 152,262 msgs/sec ~ 18.59 MB/sec
 Sub stats: 436,876 msgs/sec ~ 53.33 MB/sec
  [1] 100,985 msgs/sec ~ 12.33 MB/sec (1000000 msgs)
  [2] 88,393 msgs/sec ~ 10.79 MB/sec (1000000 msgs)
  [3] 88,367 msgs/sec ~ 10.79 MB/sec (1000000 msgs)
  [4] 87,896 msgs/sec ~ 10.73 MB/sec (1000000 msgs)
  [5] 87,375 msgs/sec ~ 10.67 MB/sec (1000000 msgs)
  min 87,375 | avg 90,603 | max 100,985 | stddev 5,204 msgs

➜  platform-pre-stg kubectl -n nats exec -it nats-box-6888bbc55c-kd6tm -- nats --server=nats://nats.nats.svc.cluster.local:4222 bench foobar --pub 1 --sub 5 --msgs=1000000 --js --maxbytes 20GB --purge --replicas=2 --no-progress --pubbatch=10000
11:17:57 JetStream ephemeral ordered push consumer mode, subscribers will not acknowledge the consumption of messages
11:17:57 Starting JetStream benchmark [subject=foobar, multisubject=false, multisubjectmax=100000, js=true, msgs=1,000,000, msgsize=128 B, pubs=1, subs=5, stream=benchstream, maxbytes=20 GiB, storage=file, syncpub=false, pubbatch=10,000, jstimeout=30s, pull=false, consumerbatch=100, push=false, consumername=natscli-bench, replicas=2, purge=true, pubsleep=0s, subsleep=0s, dedup=false, dedupwindow=2m0s]

NATS Pub/Sub stats: 424,064 msgs/sec ~ 51.77 MB/sec
 Pub stats: 70,985 msgs/sec ~ 8.67 MB/sec
 Sub stats: 353,386 msgs/sec ~ 43.14 MB/sec
  [1] 71,156 msgs/sec ~ 8.69 MB/sec (1000000 msgs)
  [2] 70,899 msgs/sec ~ 8.65 MB/sec (1000000 msgs)
  [3] 70,757 msgs/sec ~ 8.64 MB/sec (1000000 msgs)
  [4] 70,887 msgs/sec ~ 8.65 MB/sec (1000000 msgs)
  [5] 70,812 msgs/sec ~ 8.64 MB/sec (1000000 msgs)
  min 70,757 | avg 70,902 | max 71,156 | stddev 137 msgs
```

### Asynchronous publisher, testing pull vs push consumers

__Nothing noteworthy about CPU usage with pull consumers performing better than push ones.__

```text
➜  platform-pre-stg kubectl -n nats exec -it nats-box-6888bbc55c-kd6tm -- nats --server=nats://nats.nats.svc.cluster.local:4222 bench foobar --pub 1 --sub 5 --msgs=1000000 --js --maxbytes 20GB --purge --replicas=2 --no-progress --pubbatch=100 --push
11:24:53 JetStream durable push consumer mode, subscriber(s) will explicitly acknowledge the consumption of messages
11:24:53 JetStream ephemeral ordered push consumer mode, subscribers will not acknowledge the consumption of messages
11:24:53 Starting JetStream benchmark [subject=foobar, multisubject=false, multisubjectmax=100000, js=true, msgs=1,000,000, msgsize=128 B, pubs=1, subs=5, stream=benchstream, maxbytes=20 GiB, storage=file, syncpub=false, pubbatch=100, jstimeout=30s, pull=false, consumerbatch=100, push=true, consumername=natscli-bench, replicas=2, purge=true, pubsleep=0s, subsleep=0s, dedup=false, dedupwindow=2m0s]

NATS Pub/Sub stats: 65,697 msgs/sec ~ 8.02 MB/sec
 Pub stats: 32,912 msgs/sec ~ 4.02 MB/sec
 Sub stats: 32,848 msgs/sec ~ 4.01 MB/sec
  [1] 6,581 msgs/sec ~ 822.69 KB/sec (200000 msgs)
  [2] 6,586 msgs/sec ~ 823.28 KB/sec (200000 msgs)
  [3] 6,574 msgs/sec ~ 821.78 KB/sec (200000 msgs)
  [4] 6,575 msgs/sec ~ 821.90 KB/sec (200000 msgs)
  [5] 6,579 msgs/sec ~ 822.48 KB/sec (200000 msgs)
  min 6,574 | avg 6,579 | max 6,586 | stddev 4 msgs

➜  platform-pre-stg kubectl -n nats exec -it nats-box-6888bbc55c-kd6tm -- nats --server=nats://nats.nats.svc.cluster.local:4222 bench foobar --pub 1 --sub 5 --msgs=1000000 --js --maxbytes 20GB --purge --replicas=2 --no-progress --pubbatch=100 --pull
11:25:56 JetStream durable pull consumer mode, subscriber(s) will explicitly acknowledge the consumption of messages
11:25:56 Starting JetStream benchmark [subject=foobar, multisubject=false, multisubjectmax=100000, js=true, msgs=1,000,000, msgsize=128 B, pubs=1, subs=5, stream=benchstream, maxbytes=20 GiB, storage=file, syncpub=false, pubbatch=100, jstimeout=30s, pull=true, consumerbatch=100, push=false, consumername=natscli-bench, replicas=2, purge=true, pubsleep=0s, subsleep=0s, dedup=false, dedupwindow=2m0s]

NATS Pub/Sub stats: 95,057 msgs/sec ~ 11.60 MB/sec
 Pub stats: 47,747 msgs/sec ~ 5.83 MB/sec
 Sub stats: 47,528 msgs/sec ~ 5.80 MB/sec
  [1] 15,410 msgs/sec ~ 1.88 MB/sec (200000 msgs)
  [2] 12,056 msgs/sec ~ 1.47 MB/sec (200000 msgs)
  [3] 11,976 msgs/sec ~ 1.46 MB/sec (200000 msgs)
  [4] 9,556 msgs/sec ~ 1.17 MB/sec (200000 msgs)
  [5] 9,530 msgs/sec ~ 1.16 MB/sec (200000 msgs)
  min 9,530 | avg 11,705 | max 15,410 | stddev 2,157 msgs
```

### Monitoring

- Inbuilt monitoring exposed as Prometheus metrics, details [here](https://docs.nats.io/running-a-nats-service/nats_admin/monitoring).

### Cluster upgrades

- NATS provides [well-documented paths around upgrading clusters](https://docs.nats.io/running-a-nats-service/nats_admin/upgrading_cluster), as long as we provision multi-node clusters and can perform a gradual rolling-restart.

- In case of running NATS via Statefulsets on Kubernetes, this can be handled automatically by the underlying Kubernetes statefulset controller considering we use `.spec.updateStrategy` to be `RollingUpdate` which ensures an incremental rollout of the updates one pod at a time.

- In case of running NATS on bare VMs, an operator will have to perform such a rolling upgrade of the cluster either manually or via tooling depending on how the cluster is setup.

### Failure Scenarios

- In the event of total service unavailability of NATS, we might experience loss of data especially in scenarios where NATS is where we land incoming data first.

- In the event of loss of one or more nodes in a given NATS cluster, clients can still continue to push new events as long as other stream-replicas are configured and can assume new leadership for affected streams. For clients that cannot withstand loss of messages, stream replication is highly advised which ensures any affected streams will recover as soon as any cluster-deterioration is remedied.

- While stream replication ensures data redundancy for ingested data, asynchronous writes might still lead to loss of data. To minimize any loss of data, clients should prefer synchronous writes to ensure all ingested data is durably replicated before their writes get acknowledged, with the caveat that synchronous writes will reduce overall write-performance.

__Note__ Further details of how NATS publishers or consumers must be designed is out of scope for this blueprint. All user-facing documentation for building NATS applications will be developed separately.

- All ingested data is persisted durably via NATS JetStream. In the event of unrecoverable messages however, we can rely on an explicit [disaster recovery setup](https://docs.nats.io/running-a-nats-service/nats_admin/jetstream_admin/disaster_recovery) to recover data, which includes:
  - Automatic recovery in case of intact quorum nodes for replicated streams, or
  - Manual recovery from periodic stream backups.

__Note__ To ensure all persisted data is recoverable, we'll need to integrate such a disaster recovery procedure for NATS into our general GitLab DR plans & tooling, taking into consideration all GitLab deployment types.

__Note__, in the specific case of Siphon, all data buffered within NATS and due to be exported to ClickHouse _also_ remains available in Postgres. In the scenario where Siphon fails to connect to NATS or there is data loss on NATS, Siphon can perform a full-resync to ensure data consistency across Postgres & ClickHouse again. For other use-cases where this is not possible, we'll have to depend on recovering lost data automatically or manually from backups as stated above.

- We do not expect auth failures while using a centralized model with users/accounts setup within NATS at deployment-time but the introduction of an external auth callout service can add further failure domains to the system. As a dependency, we'll need to guarantee reliability SLOs on our implementation of an auth-server to be equal or higher than those for the NATS service itself. The development of such an abstraction is _out-of-scope_ for this iteration of the blueprint.

## Additional Context

### Why not Kafka?

Given our needs to queue/buffer data durably, Apache Kafka comes as an obvious first choice. However, given the operational & distribution complexity around running Kafka especially as we shift focus towards running GitLab as cloud-native deployments, it becomes _less favorable_ for our purposes. Following are some of our past discussions around the challenges Kafka brings:

- [Support for Kafka across deployment-environments is non-existent](https://gitlab.com/gitlab-org/opstrace/opstrace/-/issues/1878#note_1068741634).
- [Kafka can be cost-prohibitive regardless of scale](https://gitlab.com/gitlab-org/distribution/team-tasks/-/issues/1589#note_2060391762).
- [Kafka can be operationally intensive](https://gitlab.com/groups/gitlab-org/-/epics/14860#note_2080961778).
- [Non-trivial effort to replace current usage](https://gitlab.com/gitlab-org/gitlab/-/issues/338454).

### Key considerations when comparing Kafka with NATS

| Feature | Comparison |
| --- | --- |
| Architecture | Kafka is a larger, distributed event streaming system while NATS is comparatively lightweight & high-performance messaging system. While Kafka is optimized for publish-subscribe usage, NATS allows all publish-subscribe, request-reply and data queueing patterns of usage. |
| Operations | Kafka requires Zookeeper/KRaft for coordination across partitions/topics/brokers while NATS ships as a single-binary with no external dependencies. Extending Kafka clusters warrants rebalancing partitions across brokers while NATS allows horizontally adding nodes more seamlessly. Kafka also warrants running it on a [JVM](https://en.wikipedia.org/wiki/Java_virtual_machine) while NATS can run natively on the given host. |
| Deployments | While Kafka can run cloud-natively within Kubernetes, it is comparatively more resource-intensive and comes with larger support overheads as compared to NATS with fewer components to operate. |
| Availability & Distribution | Ensuring Kafka is available across all our deployment-environments is challenging work, especially on smaller reference architectures given Kafka's cost-prohibitive nature even at small cluster-topologies. NATS on the other hand can be run with minimal overhead, be deployed in close proximity to GitLab installations with much smaller distribution effort. |
