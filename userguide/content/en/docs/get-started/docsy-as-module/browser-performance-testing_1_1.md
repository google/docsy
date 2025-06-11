---
title: "Browser Performance Testing"
description: "The GitLab Browser Performance Tool (GBPT) provides frontend performance testing capabilities for GitLab environments"
---

The [GitLab Browser Performance Tool](https://gitlab.com/gitlab-org/quality/performance-sitespeed) (GBPT) is a [SiteSpeed](https://www.sitespeed.io/) wrapper that measures frontend performance in browsers, providing insights into web page performance across GitLab environments. The tool is maintained by the [Performance Enablement team](_index.md).

## Overview

GBPT specifically focuses on web page frontend performance metrics in browsers. The tool runs against reference architecture environments to ensure consistent and reliable frontend performance measurements.

## Testing Process

### Test Environments

GBPT testing currently runs against the 1k Reference Architecture test environment, maintained by [GitLab Delivery: Framework](../../gitlab-delivery/framework/_index.md) and the Staging environment daily.

### Results and Analysis

Test results are maintained in the [GBPT Performance Wiki](https://gitlab.com/gitlab-org/quality/performance-sitespeed/-/wikis), including:

- Frontend performance metrics
- Page load timing data
- Browser-specific measurements
