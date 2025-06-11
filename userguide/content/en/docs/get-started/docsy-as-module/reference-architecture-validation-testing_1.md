---
title: "Reference Architectures - Validation and Testing"
description: "The GitLab Delivery: Framework team maintains and validates the GitLab Reference Architectures - Validated, production-ready environment designs for deploying GitLab at scale."
---

The [GitLab Delivery: Framework team](_index.md) maintains and validates the [GitLab Reference Architectures](https://docs.gitlab.com/administration/reference_architectures) - production-ready environment designs for deploying GitLab at scale. This documentation details the testing process that ensures these architectures meet performance standards.

## Overview

The GitLab Reference Architectures undergo comprehensive testing to validate their performance, reliability, and scalability. The validation process involves multiple tools and automated pipelines that continuously test these architectures against the latest GitLab releases in efficient fashion.

## Testing Tools and Infrastructure

### GitLab Environment Toolkit

The [GitLab Environment Toolkit](https://gitlab.com/gitlab-org/gitlab-environment-toolkit) is a set of opinionated Terraform and Ansible scripts for deploying GitLab at scale. For our testing process, GET provides:

- Automated deployment of all Reference Architecture sizes (1k to 50k)
- Support for both Linux package and Cloud Native Hybrid architectures
- Consistent environment provisioning across GCP and AWS
- Built-in monitoring setup for performance validation
- Support for nightly builds testing
- Standardized configuration management aligned with Reference Architectures

### GitLab Performance Tool

The [GitLab Performance Tool](https://gitlab.com/gitlab-org/quality/performance) is our primary testing framework that measures server performance under load. Key capabilities include:

- Automated performance testing of critical GitLab endpoints
- Customizable load scenarios based on real-world usage patterns
- Detailed performance metrics and reporting
- Integration with CI/CD pipelines

For detailed information about current test scenarios, see the [Test Details wiki page](https://gitlab.com/gitlab-org/quality/performance/wikis/current-test-details).

## Test Process

Our testing process runs continuously against various Reference Architectures sizes across the main Cloud Providers using GitLab's latest or nightly releases, enabling early detection and remediation of performance issues.

1. **Environment Preparation**
   - Deploys or updates target environment using [test environment config](https://gitlab.com/gitlab-com/gl-infra/software-delivery/framework/get-environments/ra-test-environments)
   - Installs latest release package depending on environment type
   - Ensures consistent test conditions
   - Validates environment setup and health

2. **Performance Testing**
   - Executes standardized test suite covering:
     - API endpoints
     - Web interfaces
     - Git operations (pull/push)
   - Measures key metrics:
     - Response times
     - Throughput
     - Resource utilization
     - Error rates

3. **Results Processing**
   - Publishes detailed results to [Reference Architectures Wiki](https://gitlab.com/gitlab-org/reference-architectures/-/wikis/home/Benchmarks/Latest)
   - Posts summaries to [`#ref-arch-performance-tests`](https://gitlab.slack.com/archives/CH8J9EG49) Slack channel
   - Flags performance regressions for review

4. **Environment Management**
   - [Stops](https://cloud.google.com/compute/docs/instances/stop-start-instance) test environment instances
   - Optimizes resource usage and costs
   - Maintains environment state for next test cycle

## Testing Methodology

### Environment Isolation

We maintain dedicated test environments to ensure reliable and consistent results:

1. **Control over Test Conditions**
   - Eliminates interference from shared workloads
   - Ensures consistent test data and configuration
   - Enables accurate performance measurement

2. **Resource Management**
   - Prevents conflicts with other testing pipelines
   - Allows full environment access for troubleshooting
   - Maintains consistent resource availability

### Test Coverage

Our testing program includes:

- Daily and weekly testing of Linux package environments (all sizes) across GCP and AWS
- Weekly testing of Cloud Native Hybrid configurations on GCP and AWS
- Ad hoc validation of new architecture variations being explored
- Testing of cloud provider service integrations
