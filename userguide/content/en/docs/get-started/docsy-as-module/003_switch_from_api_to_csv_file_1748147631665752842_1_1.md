---
owning-stage: "~devops::secure"
title: 'EPSS Support ADR 003: Switched from EPSS API to CSV File'
---

## Context

The EPSS Feeder in PMDB retrieves data from [the EPSS source](https://www.first.org/epss/data_stats) and publishes it via GCP's Pub/Sub. Two options were evaluated:

1. Using the API to fetch data directly
2. Downloading a compressed CSV file containing EPSS data

Initially, we chose the API. However, experience has shown significant stability issues with the API approach.
Specific examples of these issues can be found in [this GitLab issue](https://gitlab.com/gitlab-org/gitlab/-/issues/512806)

## Decision

Switch from the API to downloading and processing the compressed CSV file for retrieving EPSS data.

## Consequences

### Positive

- Improved stability of the license-feeder EPSS flow (both production and test environments).
- Single network request instead of multiple API calls.
- Faster processing.

### Negative

- Must keep all data in memory while processing them. Given the size of the CSV this is not a problem. 
- Can't choose to download only specific parts of the data (though this is not a relevant use case)

## Alternatives

Continue using the API with improved error handling and retry mechanisms, but this would add complexity without addressing the root cause of the stability issues.
