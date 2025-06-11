---
owning-stage: "~devops::secure"
title: 'EPSS Support ADR 001: Export all EPSS entries'
toc_hide: true
---

## Context

PMDB advisories are exported using deltas. New advisories and advisories which have changed since the last export are exported each time the [exporter](https://gitlab.com/gitlab-org/security-products/license-db/license-exporter) runs.
This can be observed in the PMDB advisory bucket, where exports are organized in directories titled with a timestamp.
Each directory contains the items changed since the preceding directory's timestamp.
This is done to avoid very large updates of data.

EPSS scores specify the probability that a vulnerability will be exploited in the next 30 days.
Therefore, all EPSS scores are updated every day.
This renders the delta approach unhelpful—if almost all values change every day, then the deltas will always be big and will save very little resources.

However, EPSS data is relatively small. There are around 250,000 entries (although this number grows every day) and the raw data doesn't pass 10MB.
The size of a DB table containing all EPSS scores data [was estimated as up to 25MB](https://gitlab.com/gitlab-org/gitlab/-/issues/468130).
It is likely to be smaller. This is not a very significant size to update once a day.

As a result, the MVC approach is to pull and export all EPSS scores each day, rather than using deltas.

## Decision

Pull and export all EPSS scores each day, rather than using deltas.

## Consequences

The implementation is simpler as we don't need to determine deltas.
The EPSS PMDB bucket will contain just one directory which will be overwritten with every pull, as all scores are updated.

This flow strays from the existing advisories approach of PMDB.

EPSS data grows slowly (as new vulnerabilities are released), so over time we will be exporting more and more data, up to around 30,000 new rows per year.
This should still not be a significant load, but we should ultimately consider a lighter approach.

## Alternatives

Using deltas is ultimately preferable to reduce the amount of data transferred and saved in GitLab instances each day.
This option was deferred due to the low impact of the size of EPSS data.
[A spike looking into actual data changes in EPSS](https://gitlab.com/gitlab-org/gitlab/-/issues/468286) demonstrated that some manipulation of the data (truncating values to two digits after the dot; not including percentile) allows reducing deltas significantly, and in the future we may implement this approach to support using deltas.
