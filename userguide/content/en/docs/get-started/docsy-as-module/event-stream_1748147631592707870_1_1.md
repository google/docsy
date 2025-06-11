---
title: "Event Stream Working Group"
description: "Develop a plan to implement a system-wide event stream for GitLab"
status: active
---

## Attributes

| Property        | Value           |
|-----------------|-----------------|
| Date Created    | 2021-09-20 |
| Target End Date | 2023-04-01 |
| Slack           | #wg_event-stream (only accessible from within the company) |
| Google Doc      | [Event Stream Working Group Agenda](https://docs.google.com/document/d/1unlrVd1M1N-d3GI2DP7R9gXJxBXHjY2rOKR5hsGHuKI/edit?usp=sharing) (only accessible from within the company) |
| Issue Label | ~WorkingGroup::EventStream |

## Context

There are currnetly 3+ methods for publishing and listening to events withint the GitLab product.
There is no single standard for events and there is no standard way of publishing and subscribing to events from other
GitLab systems and services.

There is a growing need to standardize events and how to publish and consume them for both GitLab.com and self-managed installs.

## Working Group Goals

This Working Group has the following goals:

 1. Document the current event systems
 1. Document the currently identified use cases for an event stream
 1. Define and socialize an architecture for a standardized event stream and events
    1. Architecture Blueprint for Event Stream usage within GitLab and self-managed
    1. Define sene and secure defaults. Provide security recommendations and guidelines.
 1. Define a rollout strategy and plan
    1. SaaS rollout strategy for current use cases
    1. Prepare the groundwork for adding the event stream to our reference architectures
 1. Develop a communication plan to socialize the outcome of the working group

### Exit Criteria Progress

| Criteria                                 | Start Date   | Completed Date   | Progress   | DRI   |
| ----------                               | ------------ | ---------------- | ---------- | ----- |
| Document current event systems           |              |                  |            |       |
| Document use cases                       |              |                  |            |       |
| Develop and social architecture stragety |              |                  |            |       |
| Develop rollout stragegy                 |              |                  |            |       |
| Develop and implement communication plan |              |                  |            |       |

## Definitions

### What is an Event Stream?

An event stream is simply a stream of events that occur within the product. More specifically, for us at GitLab, it will involve the software changes we need to make in the product, event schemas and protocols, and infrastructure.

### Potential Tools/Services

There are some tools/services that other companies are using for this

1. [Kafka](https://kafka.apache.org)
1. [NSQD](https://nsq.io)
1. [RabbitMQ](https://www.rabbitmq.com/)
1. [GCP PubSub](https://cloud.google.com/pubsub)

### Related GitLab Documentation or Issues

- https://gitlab.com/gitlab-org/gitlab/-/merge_requests/34042
- https://gitlab.com/gitlab-org/gitlab/-/issues/338454
- [Streaming Audit Events](https://gitlab.com/groups/gitlab-org/-/epics/5925)

## Exit Criteria

If it is decided that an Event Stream should be implemented, our exit criteria should be:

1. Define the tool(s)/service(s) we should use for SaaS and on-prem (they might be different)
1. Define system architecture
1. Define an implementation plan and philosophy
1. Define event structure

## Roles and Responsibilities

| Working Group Role | Person             | Title                                           |
|--------------------|--------------------|-------------------------------------------------|
| Facilitator        | Alex Groleau       | Security Automation Manager                     |
| Functional Lead    | Juliet Wanjohi     | Security Engineer, Security Automation          |
| Functional Lead    | Ethan Urie         | Senior Backend Engineer, Security Automation    |
| Functional Lead    | Jayson Salazar     | Senior Security Engineer, Security Automation   |
| Functional Lead    | Alexander Chueshev | Senior Backend Engineer, AI Framework           |
| Member             | David DeSanto      | Senior Director, Product Management - Dev & Sec |
| Member             | Taylor McCaslin    | Principal Product Manager, Secure               |
| Member             | Alexander Dietrich | Senior Security Engineer, Security Automation   |
| Member             | Wayne Haber        | Engineering director                            |
| Member             | Bartek Marnane     | VP, Incubation Engineering                      |
| Member             | Roger Ostrander    | Senior Security Engineer, Trust & Safety        |
| Member             | Shawn Sichak       | Senior Security Engineer, Trust & Safety        |
| Member             | Chad Woolley       | Senior Backend Engineer, Create::Editor         |
