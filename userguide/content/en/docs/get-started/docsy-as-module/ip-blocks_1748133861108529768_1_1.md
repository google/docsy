---
title: Identifying the Cause of IP Blocks on GitLab.com
description: "Workflow to try to determine what caused an IP address block and relay that information back to the user."
category: GitLab.com
subcategory: Troubleshooting
---

Users of GitLab.com can find that their IP address has been blocked due to rate limiting. Currently, rate limit parameters on GitLab.com are best described on the [GitLab.com settings docs page](https://docs.gitlab.com/user/gitlab_com/#gitlabcom-specific-rate-limits). The single source of truth for rate limiting on GitLab.com exists in our [infrastructure rate limiting documentation](../../../engineering/infrastructure/rate-limiting/). This page is intended to help Support Engineers troubleshoot issues related to rate limits and IP blocks.

## Responding

A standard response is available as a macro: [`Support::SaaS::Gitlab.com::Temp IP Ban`](https://gitlab.com/gitlab-com/support/zendesk-global/macros/-/blob/master/active/Support/SaaS/GitLab.com/Temp%20IP%20Ban.md?ref_type=heads)

Please also see [the log requests workflow](/handbook/support/workflows/log_requests) for what information we can provide when responding.

## Searching

### Search Condition

Start by adding a positive filter on `json.meta.remote_ip` for the IP address provided by the user:

![Add remote_ip filter](/images/support/ipblocks_add_remoteip_filter.png)

You can then drill down from there with positive and negative filters on [fields](#fields) to get the best results.

### Checking for Rack Attack Blocks

If a user has been blocked by [Rack Attack](https://docs.gitlab.com/development/application_limits/#implement-rate-limits-using-rackattack), we should be able to locate requests in Kibana that were blocked because of it.

To do so, enter the IP address into the main search field and set a positive filter on `json.message` for `Rack_Attack`.

![Searching for an IP](/images/support/ipblocks_rack_attack_search.png)

You should see results similar to the following:

![Checking Rack Attack results](/images/support/ipblocks_rack_attack_results.png)

The existence of these results tells us that this user was blocked by Rack Attack and we can add the `json.fullpath` field to see which exact path on GitLab.com each request tried to access.

It's common to see multiple failed authentication requests (401) trigger a Rack Attack block which causes a 403 Forbidden message. We block IP addresses if we receive [300 failed requests from a single IP in a one minute period](https://docs.gitlab.com/user/gitlab_com/#git-and-container-registry-failed-authentication-ban). It's worth noting that by default, Git operations are first tried unauthenticated so it's expected to see two 401 responses for every Git operation.

Rack Attack can also *throttle* traffic. If that is the case, this is recognizable by the HTTP 429 response code. The preferred solution to this is to have the user make fewer requests. Please refer to our [Bypass Policy](ip-blocks.md#bypass-policy) for more information.

### Checking the Application Rate Limiter

If you can't find a block in Rack Attack, try checking the application rate limits. It's possible to search this in Kibana where `json.message.keyword` is `Application_Rate_limiter_Request`. You'll be able to identify the different limits with `json.env` and still be able to filter by `json.meta.user` and `json.meta.remote_ip`.

![Checking Application Rate Limiter](/images/support/application_rate_limit.png)

### Fields

#### Primary

The following fields are the best to add to your search query in order to get the most important details on multiple requests at a glance.

- `json.status` - Outputs the HTTP status code that was returned for the request. We're usually looking for `401` (Unauthorized) and/or `403` (Forbidden).
- `json.path` - The path on GitLab.com that was accessed by the request or the API endpoint that was hit.
- `json.method` - Can be either `GET`, `POST`, `PUT`, `PATCH`, or `DELETE`. The first three are the most common.
- `json.env` - Can be `blocklist`, `throttle` or `track`. `track` is used for diagnostics when changing rate limiting settings and does not affect users: from a support perspective, ignore `track`. `blocklist` happens in reaction to too many failed authentication attempts, for example with automated Git HTTP traffic. `throttle` means a user or IP is making too many requests per minute.

#### Secondary

These fields can be helpful but aren't essential.

- `json.controller` - Gives you a clue as to what part of GitLab.com was being accessed by a particular request.
- `json.params` - Shows what user made the request, what action was taken, and on what resource it was taken on. This field shows what repository was targeted for requests to the container registry.
- `json.matched` - This is the name of the Rack Attack rule used to limit this request (when `json.env` is `throttle`). This can help you find out which of the [current limits](https://docs.gitlab.com/user/gitlab_com/#gitlabcom-specific-rate-limits) the request surpassed.

## Common Causes

### Container Registry

Numerous failed pushes or pulls to `registry.gitlab.com` can result in an IP block, from the [docs](https://docs.gitlab.com/user/gitlab_com/#git-and-container-registry-failed-authentication-ban):

> GitLab.com responds with HTTP status code 403 for 1 hour, if 30 failed authentication requests were received in a 3-minute period from a single IP address.

You can list all log results for hits on the container registry by searching for the provided IP address and setting a positive filter on `json.path` for `/jwt/auth`.

#### Useful Fields

- `json.status`
- `json.path`
- `json.params`
- `json.controller`

#### Failed Push and Pull Examples

##### Push

Failed pushes to the registry will always have `JwtController` for the `json.controller` field and `/jwt/auth` for the `json.path` field. Watch for `:push,pull` in the `json.params` field, indicating that the request is for a push.

A failed push will look like the following in Kibana.

![Failed Push](/images/support/ipblocks_registry_failed_push.png)

##### Pull

Similar to a push, failed pulls from the registry will always have `JwtController` for the `json.controller` field and `/jwt/auth` for the `json.path` field. However, in `json.params` only `:pull` will be present.

A failed pull will look like the following in Kibana.

![Failed Pull](/images/support/ipblocks_registry_failed_pull.png)

#### `gitlab-ci-token` Pulls

The `gitlab-ci-token` user is exempted from [rate-limiting](https://docs.gitlab.com/user/gitlab_com/#git-and-container-registry-failed-authentication-ban).

### LFS

Pushes or pulls to repositories containing LFS objects can result in an IP block if the user is unauthorized.

#### Useful Fields

- `json.action`
- `json.controller`
- `json.method`
- `json.status`

#### Examples

##### Push

Failed LFS pushes will always have `upload_authorize` in the `json.action` field, `Projects::LfsStorageController` for the `json.controller` field, and `PUT` for `json.method`.

A failed LFS push will look like the following in Kibana.

![Failed LFS Push](/images/support/ipblocks_lfs_failed_push.png)

### Cloning Fails

An IP can become blocked if a repository is cloned via HTTPS without authentication enough times.

The request will look like this:

![Log results for a failed clone](/images/support/ipblocks_failed_clone.png)

#### Useful Fields

- `json.status`: `401`

- `json.controller`: `Projects::GitHttpController`

- `json.action`: `info_refs`

- `json.path`: `/namespace/project.git/info/refs`

- `json.ua`: If the request did not come from a browser this will reveal the operating system of the machine that attempted the clone along with the version of Git installed on it. Examples: `git/2.11.1.windows.1`, `git/2.17.2 (Apple Git-113)`, `git/2.17.1` (Ubuntu 18.04 LTS), etc.

You should also see `git-upload-pack` in the `json.params` field.

### Project Export Rate-Limiting

An IP can become rate-limited if a customer attempts to export or download project exports too rapidly. See [Project Import/Export](https://docs.gitlab.com/user/project/settings/import_export/#rate-limits)

#### Useful Fields

- `json.method`: `Application_Rate_Limiter_Request`

- `json.controller`: `ProjectsController`

- `json.action`: `download_export`

- `json.path`: `/namespace/project/download_export`

### Email verification process

In certain cases, when the customer is using a shared user account to run pipelines, a signing sign in from a new IP address will trigger [Account email verifiation](https://docs.gitlab.com/security/email_verification/). this will block the account, and all tokens, until the signing is verify. This could cause enough `401` errors to trigger an [IP block](https://docs.gitlab.com/user/gitlab_com/#ip-blocks).

#### Useful Fields

- `json.details.custom_message` : `User access locked - sign in from untrusted IP address`
- `json.custom_message`: `User access locked - sign in from untrusted IP address`
- `json.entity_path` - The user name of the account

### Cloudflare troubleshooting

There may be cases where a user is being blocked or rate limited by Cloudflare. The absence of logs in Kibana or `RateLimit-*` headers is usually an indication to investigate at the Cloudflare level. You can typically request a screenshot of the Cloudflare "Access Denied" page or have the customer perform a `curl` with the `-i` flag to retrieve the relevant headers:

![Access Denied](/images/support/workflows/assets/AccessDenied.png)

```text
curl -i --header "PRIVATE-TOKEN: *****" https://gitlab.com

HTTP/2 403
date: Thu, 18 Nov 2021 13:48:09 GMT
content-type: text/plain; charset=UTF-8
content-length: 16
x-frame-options: SAMEORIGIN
referrer-policy: same-origin
cache-control: private, max-age=0, no-store, no-cache, must-revalidate, post-check=0, pre-check=0
expires: Thu, 01 Jan 1970 00:00:01 GMT
expect-ct: max-age=604800, report-uri="https://report-uri.cloudflare.com/cdn-cgi/beacon/expect-ct"
report-to: {"endpoints":[{"url":"https:\/\/a.nel.cloudflare.com\/report\/v3?s=AbCdeFgXXXXX"}],"group":"cf-nel","max_age":604800}
nel: {"success_fraction":0.01,"report_to":"cf-nel","max_age":604800}
strict-transport-security: max-age=31536000
x-content-type-options: nosniff
server: cloudflare
cf-ray: 6b01a12345abcde-KBP
error code: 1020
```

Note the `HTTP 403` response and `error code 1020`. You should also take note of the `cf-ray` ID to use in the Cloudflare Dashboard.

Once you obtain this information, you should [follow our guide](../../engineering/infrastructure/rate-limiting/troubleshooting.md) for troubleshooting Cloudflare. Some blocks may happen as a result of a mitigation effort, so you may want to verify that a [contact request](https://gitlab.com/gitlab-com/support/internal-requests/-/issues) is not open on the internal board.

Note that IP addresses may be blocked if they are identified as being from a [current US embargoed country](https://ofac.treasury.gov/sanctions-programs-and-country-information) as per [our Terms of Use](/handbook/legal/subscription-agreement/). Blocks are done automatically through Cloudflare's GeoLocation block methods and cannot be changed. You can [enter an IP address](https://www.maxmind.com/en/geoip2-precision-demo) to determine how it is classified and verify against [the list of countries](/handbook/legal/trade-compliance/). A user can consider [requesting a data correction](https://www.maxmind.com/en/geoip-data-correction-request) of their IP address but it is not guaranteed and GitLab has no control over this process.

## Bypass Policy

If a customer has concerns about being rate limited, work with them as much as possible to lower their traffic from a single IP address.

Please refer to our [Bypass Policy](../../engineering/infrastructure/rate-limiting/bypass-policy.md) for more information.
