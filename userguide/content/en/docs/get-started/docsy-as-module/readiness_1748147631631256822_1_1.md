---
title: "Scoping a Readiness Assessment"
description: "Describes the process of scoping a readiness assessment engagement."
---

:warning: This page is under construction

## Scoping Information

## General Service Information

A Readiness Assessment aims at providing recommendations to prepare for upcoming growth based on findings from reviewing the Customer's architecture diagram and evaluating their production deployment.

This offering tends to be interesting to Customers who are:

1. Planning for growth - either additional users (e.g. 500 to 2,000) or additional usage (e.g. adopting CI at scale)
1. Deploying a new implementation of GitLab Self Managed and are looking to validate the architecture before onboarding the majority of their users.

A Readiness Assessment **is not** a service that investigates how to solve a current issue wit a GitLab deployment. GitLab support is chartered to help customers fix these kinds of problems.

The outcome of the Health check is a list of findings and recommendations in a [Health Check Report](https://docs.google.com/document/d/1j4Jmz_SCJEeeQT4uCIHiw6ngwsZyW_aAMVvSIyO2ndc/edit). We will not implement the recommendations in the report. This must be scoped in a second SOW or a change order.

## Discovery Questions

1. Is your GitLab instance deployed on prem or in a public cloud, which one?  (AWS, GCP, Azure Cloud)
1. What is your current GitLab deployment architecture?  Can you provide an architecture diagram?
1. Do you have a test environment that is similar in architecture and configuration to your production instance?
   - If yes, please describe any differences between the two environments.
   - If no, is there a period of time of low usage on your production instance where the server can be taken offline without being impacted?
1. Has monitoring been established on your production instance to be able to observe error rate, network latency, throughput speeds, disk I/O, and memory/CPU utilization?
    - What logging/observability tool do you have in place (e.g. AWS Cloudwatch, Splunk, GCP Cloud Operations. New Relic)?
    - which components are being monitored?
1. Are there any known issues with your production server or suspected issues based on end user feedback?
1. How many user licenses do you have for your GitLab instance?  How many active users?  If planning on growing your GitLab adoption, how many active users do you anticipate having one year from now?
1. Are you currently looking to scale out your GitLab implementation to suppport additional user load?  What is your desired end state for your implementation?

### Evaluation Method

Our preferred method of analyzing a Customer's deployment architecture is to run [GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance#gitlab-performance-tool) to analyze throughput speeds and errors objectively. However, we do not want to run this on a production GitLab deployment as the load introduced (e.g. dummy data) can have adverse effects on the production GitLab Deployment.

1. Does the Customer have a non-production environment with similar architecture characertistics that we can run GPT on?
    - If yes, move forward with scoping using GPT load method.
1. If not, does the customer have monitoring in place to understand error rate, network latency, throughput speeds, disk I/O, memory/CPU Utilization? Usually this is in the form of obeservability tools like [AWS Cloudwatch](https://aws.amazon.com/cloudwatch/), [GCP Cloud Operations](https://cloud.google.com/products/operations), [New Relic](https://newrelic.com/), [Splunk](https://www.splunk.com/), etc
    - If yes, get an understanding of how robust it is. Ask if they have all GitLab components (e.g. Rails nodes, databases, file systems, Redis cache, etc.) monitored.

### Typical Estimate Durations

The `Readiness Assessment (Health Check)` worksheet of the `PS Engagement Estimate Templates` workbook provides estimates for performing a stand alone readiness assessment via GPT or the User Load Method as part of a new implementation.  Note: the estimates are slightly smaller when performed as part of a new implementation PS engagement, since discovery and documentation are handled as part of already defined implementation activities.  See the `WIP - Implementation` worksheet for estimations for a GPT load readiness assessment as part of a PS-led implementation.
