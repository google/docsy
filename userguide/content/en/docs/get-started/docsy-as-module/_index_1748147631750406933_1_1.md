---
title: "Learning Resources"
description: "Learn about the various aspects of Cost Management"
---

---

## Vendor Specific Learning

[GCP](/handbook/engineering/infrastructure/cost-management/learning/gcp)
[AWS](/handbook/engineering/infrastructure/cost-management/learning/aws)

### Cloud Cost Buckets

The first thing to understand about infrastructure cost is that you can generally categorize it into a few main areas of focus. The areas are listed below in descending order of how much the bucket contributes to overall infra cost in general for most company's. Cloud Provider services may provide abstractions of these buckets, for instance serverless computing, but at their core each service can still be categorized into one of these 3 buckets of infra spend.

- Compute
  - server running cost, includes cpu/ram cost of the hardware used to run these services.
- Storage
  - cost of storing data, generally refers to Object Storage in cloud, but can refer aso refer to physical disk storage, database storage, etc.
- Networking
  - cost of sending data back and forth between customers or services

## General Cloud Cost Optimizations

There are some basic cloud optimizations that apply to all resources, regardless of what service is running. Further optimizations or taking action on these recommendations may require more detailed understanding of the application or service running.

### Compute Optimizations

- turn off un-needed resources
- downsize over-provisioned resources
- rightsize servers to make most efficient use of their performance characteristics (cpu v ram v storage)
- prefer using newer instance types
  - generally newer instance types will have better cost/performance

### Storage Optimizations

- use storage lifecycle policies to reduce cost by archiving un-accessed but needed data
- delete unnecessary data

### Networking Optimizations

- Take the most direct network path
  - traffic sent between providers/continents/regions is the most expensive, avoid this when possible
- Avoid network hairpinning

## Cost Dimensions

There are generic cost dimensions that apply to all company's, as well as some specific dimensions that are similar to other company's, but we define below.

### Generic Cost Dimensions

#### Vendor

- GCP
- AWS
- Azure
- Elastic
- Cloudflare

#### Service

This could also be called a "product", the two are interchangeable, and this can refer to internal or external services.

- Compute Engine / EC2
- Object Storage / S3
- GitLab CI

#### Sku

- N1 Predefine Instance Core running in Americas
- Standard Storage US Multi-region

#### Usage Type

- Compute
- Storage
- Networking

### GitLab Specific Dimensions

#### Feature

- CI Windows Runners
- Gitaly Dedicated Nodes
- Review Apps
- SAST

#### Tier

- Free
- GitLab Internal
- SaaS - Premium
- SaaS - Ultimate

## Resource Links

- [MultiCloud Service Comparison](https://comparecloud.in/)
