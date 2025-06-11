---
title: "Bypass Policy"
description: "This policy relates to the rate limits for GitLab.com, for Self-Managed and Dedicated please reach out to your administrator."
---

## Bypass Policy for GitLab.com

[Published rate limits](https://docs.gitlab.com/user/gitlab_com/#rate-limits-on-gitlabcom) apply to all customers and users with no exceptions. Rate limiting bypasses are only considered in exceptional circumstances for customers experiencing a high severity incident, such as a full outage. Even with this requirement satisfied, it is still possible that a bypass request will be rejected. Permanent bypasses are not made.

The reason for this strict policy is we want to help every customer as much as possible when they run into problems, but on GitLab.com, we have to prioritize the reliability and stability of the entire instance to protect all customers and users. Allowing even one customer to bypass rate limits creates a high risk situation where we have opened an avenue for a high severity production incident (such as GitLab.com being unavailable to all users) to occur. This is why it is always preferred to find ways to resolve the issue without needing to bypass rate limits.

## Bypass Requests

- Bypass requests can only be made for up to a 2 week period. Anything longer will be denied.
- If the 2 week period is ending and a customer needs more time, a new request can be made to extend the bypass, but it is not guaranteed.

We have two levels of rate limiting that we can potentially bypass:

**1. Rack Attack**

- This is the most common set of rate limits that users hit. It exists at the application level.
- These will be found in the [Kibana logs](https://log.gprd.gitlab.net/app/r/s/n5oQQ).
- As this is the most common bypass granted, requests may need to be denied if too many IPs are already on the bypass list, so be sure to only request when absolutely necessary to avoid potentially denying another customer that might have a higher severity need.

**2. Cloudflare**

- This is uncommon for users to hit. It exists at the network edge as a safety net above all the other rate limits to protect against DDoS (Distributed Denial of Service) and other attacks.
- These will be found only in [Cloudflare logs](https://dash.cloudflare.com/852e9d53d0f8adbd9205389356f2303d/gitlab.com/analytics/traffic?status-code=429). If you are seeing 429 responses and are unable to find matching log records in Kibana, then it is likely you are hitting the Cloudflare rate limits.
- Bypasses are rarely approved at the Cloudflare level due to the risk involved in opening IPs with no limit at this level, so if this is the rate limit being hit, it is likely that the bypass will be denied.

### Considerations

Things we consider when granting a bypass:

- How much additional traffic will be allowed through due to the bypass
- How many other IPs are currently being bypassed
- The current stability of GitLab.com
- Time of year (holidays, etc that could effect traffic)

This means that even if a customer checks all the boxes needed to obtain a bypass, there is still a chance that it will be denied due to reasons unrelated to the request.

### Requesting a Bypass

Before you request a bypass, please ensure you have:

- Identified why rate limits have started to be hit.
- Have tried to investigate and implement other solutions to mitigate the problem (such as staggering execution of automated pipelines, exponential backoff and retry for failed authentication attempts, etc...).
- Have a plan of action that the customer and/or Support will be following during this bypass period.
- The amount that traffic from this customer will increase if rate limits are bypassed.

### Process to Request a Bypass

1. Open a Production Engineering issue using the [Rate limiting template](https://gitlab.com/gitlab-com/gl-infra/production-engineering/-/issues/new?issuable_template=request-rate-limiting) and fill out the applicable fields. Be sure to include:
   1. The IPs needed to be bypassed.
   1. A description of the rate limiting problem the customer is hitting and how it is effecting their systems (how severe is this for the customer).
   1. The amount of traffic increase we expect to see if the rate limit is bypassed.
   1. The plan of action the customer and/or Support will be following during this bypass period.
   1. The requested duration of the bypass.

The issue will be triaged by the [Production Engineering::Foundations team](../../infrastructure-platforms/production-engineering/foundations/_index.md). A request may result in questions for more information. If a request is deemed valid, the Foundations team will seek approval from **Director+ level** of infrastructure engineering. If approval is given, the Foundations team will work to schedule the bypass.
