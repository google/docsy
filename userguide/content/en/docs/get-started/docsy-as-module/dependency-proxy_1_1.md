---
# TODO: Remove stage and group because the handbook doesn't need these attributes
stage: enablement
group: Tenant Scale
title: 'Cells: Dependency Proxy'
toc_hide: true
---

{{% alert %}}
This document is a work-in-progress and represents a very early state of the
Cells design. Significant aspects are not documented, though we expect to add
them in the future. This is one possible architecture for Cells, and we intend to
contrast this with alternatives before deciding which approach to implement.
This documentation will be kept even if we decide not to implement this so that
we can document the reasons for not choosing this approach.
{{% /alert %}}

[GitLab Dependency Proxy](https://docs.gitlab.com/ee/user/packages/dependency_proxy/) is a feature allowing storage of Docker container images in GitLab for use by CI jobs and end users. It acts as a pull-through cache of upstream registries such as Docker Hub, enabling faster image builds and avoiding restricted rate limits by upstream services.

As Dependency Proxy is a effectively a private image registry, it follows the same deployment pattern and challenges as the [GitLab container registry](container-registry.md).

## 1. Definition

The dependency proxy follows the same data usage and storage challenges as the [container registry](container-registry.md).

## 2. Data flow

The data flow for `docker login` is documented in [the container registry project](https://gitlab.com/gitlab-org/container-registry/-/blob/master/docs/auth-request-flow.md#login). The equivalent requests using `curl` are documented below.

### 2.1. Authorization request that is send by `docker login`

```shell
curl \
  --user "username:password" \
  "https://gitlab/jwt/auth?client_id=docker&offline_token=true&service=container_registry&scope=repository:gitlab-org/gitlab-build-images:push,pull"
```

Result is encoded and signed JWT token. Second base64 encoded string (split by `.`) contains JSON with authorized scopes.

```json
{"auth_type":"none","access":[{"type":"repository","name":"gitlab-org/gitlab-build-images","actions":["pull"]}],"jti":"61ca2459-091c-4496-a3cf-01bac51d4dc8","aud":"container_registry","iss":"omnibus-gitlab-issuer","iat":1669309469,"nbf":166}
```

### 2.2. Docker client fetching tags

```shell
curl \
  -H "Accept: application/vnd.docker.distribution.manifest.v2+json" \
  -H "Authorization: Bearer token" \
  https://registry.gitlab.com/v2/gitlab-org/gitlab-build-images/tags/list

curl \
  -H "Accept: application/vnd.docker.distribution.manifest.v2+json" \
  -H "Authorization: Bearer token" \
  https://registry.gitlab.com/v2/gitlab-org/gitlab-build-images/manifests/danger-ruby-2.6.6
```

### 2.3. Docker client fetching blobs and manifests

```shell
curl \
  -H "Accept: application/vnd.docker.distribution.manifest.v2+json" \
  -H "Authorization: Bearer token" \
  https://registry.gitlab.com/v2/gitlab-org/gitlab-build-images/blobs/sha256:a3f2e1afa377d20897e08a85cae089393daa0ec019feab3851d592248674b416
```

## 3. Proposal

Dependency Proxy can be run within a cell, similar to the proposal for the [container registry](container-registry.md).

## 4. Evaluation

Since multiple Cells can be run on the same top-level domain, and the Docker client stores authentication tokens per-hostname, users may not be able to access resources from one Cell while logged in to another on the same hostname.

To authenticate with the dependency proxy in a Cells environment, users will need to run:

```shell
docker login gitlab.example.com
```

Currently, [using your GitLab username and password is supported](https://docs.gitlab.com/ee/user/packages/dependency_proxy/#authenticate-with-the-dependency-proxy) by this flow. In a Cells architecture, this will only work for the legacy cell and default organization, since the username / password combination is not routeable.

The username can be anything; it is not used by dependency proxy. The "password" must be a Personal Access Token from a user, service account, or CI job token. The docker client will then submit this username and password combination to the `/jwt/auth` endpoint in GitLab Rails using HTTP Basic Auth.

The Cells http router will be able to determine the correct Cell to route this request to by supporting HTTP Basic Auth requests using access tokens as the password. Support for this is [currently being built](https://gitlab.com/gitlab-org/cells/http-router/-/issues/138).

The returned JWT will contain enough information (something like `scope: cell-1`) for the Cells Registry Router to route the authenticated requests to the correct container registry / cell.

## 4.1. Pros

## 4.2. Cons
