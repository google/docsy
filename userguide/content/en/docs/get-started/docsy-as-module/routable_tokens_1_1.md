---
stage: core platform
group: Tenant Scale
title: 'Cells: Routable Tokens'
status: proposed
---

This document describes design goals and architecture of Routable Tokens
used by Cells. This document explicitly focuses on objectives
of [Phase 4](https://gitlab.com/groups/gitlab-org/-/epics/14510).

## Purpose

GitLab uses machine-generated tokens extensively to provide various ways for Users/Services to interact with GitLab, for example, the [REST API Authentication](https://docs.gitlab.com/ee/api/rest/#authentication) and the [Token Overview](https://docs.gitlab.com/ee/security/tokens/index.html).
Tokens have different scopes as for example User, [project](https://docs.gitlab.com/ee/user/project/settings/project_access_tokens.html), and [group](https://docs.gitlab.com/ee/user/group/settings/group_access_tokens.html)

[HTTP Routing Service](http_routing_service.md) require the tokens to be routable,
so it can route the request to the correct Cell.

## Goals

This documents tries to describe the following goals:

- Routable tokens to be decoded by HTTP Router.
- Capture and describe usage of existing tokens.

## Non-goals

This document is not meant to re-assess the need for the following non-goals:

- The need for the secret in the first place, and their lifecycle or how they are managed by the application.
- Define support for many encryption keys
- Define the pattern allowing online encryption keys rotation
- Document how to deprecate and remove legacy encryption keys, or legacy strategies
- Unify storing of secrets and tokens
- Move away from `attr_encrypted` to use a single secrets framework
- Introduce transit/shared key to be used with [Org Mover](https://gitlab.com/groups/gitlab-org/-/epics/12857)

Those non-goals are meant to be solved with a new design document describing secrets management by the application.

### Tokens and cookies

The list of tokens at a current moment is shared as a [Google Spreadsheet](https://docs.google.com/spreadsheets/d/1n54lCX2axsTIt8DZBRFj9p44s6YcFp-UechVEHEim8Y/) to ease editing.

### Secrets

This document focuses only on Routable Tokens, not secrets stored at rest, like `CI Variables`.

## Existing implementation

### TokenAuthenticatable

Majority of the tokens in application use `TokenAuthenticatable` framework making it easy to change how the token is generated. Only some of the tokens use a custom `token_generator`, as in the following example:

```ruby
module Clusters
  class AgentToken < ApplicationRecord
    TOKEN_PREFIX = "glagent-"

    add_authentication_token_field :token,
      encrypted: :required,
      token_generator: -> { Devise.friendly_token(50) },
      format_with_prefix: :glagent_prefix

    def glagent_prefix
      TOKEN_PREFIX
    end
  end
end
```

## Proposal

This proposal is to make all tokens to encode routable information about object
to which the token is attached. This document does focus specifically first on tokens
that are required to be made routable in the Phase 4: [Personal Access Token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html), [CI/CD Job Token](https://docs.gitlab.com/ee/ci/jobs/ci_job_token.html) and [Runner Authentication Token](https://docs.gitlab.com/ee/security/tokens/#runner-authentication-tokens):

Currently tokens are generated with the following pattern: `<prefix><random-string>`. The Routable Token would change this to `<prefix><base64-payload>.<base64-payload-length><crc32>`.

### Specification

- The Routable Token would change the `<random-string>` to become `<base64-payload>.<base64-payload-length><crc32>`.

- The `<base64-payload>` is a base64-encoded string composed of 3 parts: `<routing-payload><random-bytes><random-bytes-length>`.
  - The `<routing-payload>` is a line-delimited string in the form of `c:3w5e11264sgsf\ng:3w5e11264sgsf\np:3w5e11264sgsf`.
    - It contains information that will allow the HTTP Router to route requests to the cell where the token is intended to be used.
    - Each routing line starts with a character indicating a type of value it describes. The type and value are separated by the `:` character.
    - Integer values must be encoded as base36 string for space efficiency.
    - Lines are sorted alphabetically (e.g. `c:` comes before `g:` etc.).
  - The `<random-bytes>` is a set of random bytes to ensure a high entropy, so the token cannot be forged.
  - The `<random-bytes-length>` is 1 byte (`8-bit unsigned (unsigned char)`) (i.e. `<integer>.pack("C")`) that stores the length of `<random-bytes>`.
- The `<base64-payload-length>` is an integer represented in base36, which we use 2 bytes and pad with 0 on the significant digit (i.e. `<integer>.to_s(36).rjust(2, '0')`) that store the length of `<base64-payload>`.
- The `<crc32>` is an integer represented in base36, which we use 7 bytes and pad with 0 on the significant digits (i.e. `<integer>.to_s(36).rjust(7, '0')` in Ruby) that store a CRC32 checksum of `<prefix><base64-payload>.<base64-payload-length>`.

#### Constraints

- Minimum number of routing parts is 1.
  - An exception should be raised if no routing part is defined.
- Maximum number of routing parts is 10.
  - An exception should be raised if more than 10 routing parts are defined.
- Minimum size of `<routing-payload>` is 3 bytes (i.e. `o:1`).
  - An exception should be raised if `<routing-payload>` is smaller than 3 bytes.
- Maximum size of `<routing-payload>` is 159 bytes: `'c:3w5e11264sgsf'.size * 10 + (10 - 1)` (see [Maximum token length](#maximum-token-length)).
  - An exception should be raised if `<routing-payload>` is bigger than 159 bytes.
- Valid routing part keys are currently `c`, `g`, `o`, `p`, `u`, `t`. Any other keys should raise an exception.
- Minimum number of random bytes is 16.
  - This is arbitrary to ensure a high entropy.
- Maximum number of random bytes is 65: `(maximum bytes before encoding) - (max size of <routing-payload>) - (size of <random-bytes-length>) = 225 - 159 - 1 = 65`
  - This ensures we can always encode the biggest `<routing-payload>`.
- Minimum size of `<base64-payload>` is 27 bytes (20 bytes before encoding: `(min size of <routing-payload>) + (min size of <random-bytes>) + (size of <random-bytes-length>) = 3 + 16 + 1 = 20`)
- Maximum size of `<base64-payload>` is 300 bytes (225 bytes before encoding).
  - This is arbitrary and should be enough to carry all the information we need for now.
  - An exception should be raised if `<base64-payload>` is bigger than 300 bytes.
- Minimum size of prefix is 0 bytes.
- Maximum size of prefix is 20 bytes.
  - An exception should be raised if prefix is bigger than 20 bytes.
- Minimum size of token is 37 bytes: `(min size of <base64-payload>) + (size of '.') + (size of <base64-payload-length>) + (size of <crc32>) = 27 + 1 + 2 + 7 = 37`
- Maximum size of token without prefix is 310 bytes: `(max size of <base64-payload>) + (size of '.') + (size of <base64-payload-length>) + (size of <crc32>) = 300 + 1 + 2 + 7 = 310`
- Maximum size of token with prefix is 330 bytes: `(max size of prefix) + (max size of <base64-payload>) + (size of '.') + (size of <base64-payload-length>) + (size of <crc32>) = 20 + 300 + 1 + 2 + 7 = 330`

#### Additional information

- The generated token is stored in whole as-is, and is validated against its full value by the Rails application. This doesn't change from the current logic.
  Note that this is contrary to JWT which usually a signature is used to validate authenticity of the token itself.
- The Rails application should never decode `<base64-payload>` and only use the whole token as-is for authentication purposes.
- The tokens as stored and validated by the application would not change.
- The ability to decode `<base64-payload>` is a feature reserved for the HTTP Router.
- The `<routing-payload>` can be easily retrieved from `<base64-payload>` (pseudo-code):
  1. Retrieve `<base64-payload-length>` and convert it from base36 to integer (i.e. `<token>[-9, 2].to_i(36)` in Ruby. `parseInt(<token>.slice(-9, -7), 36)` in JavaScript)
  1. Retrieve `<base64-payload>` (i.e. `<token>[(-10 - <base64-payload-length>), <base64-payload-length>]` in Ruby. `<token>.slice(-10 - <base64-payload-length>, -11)` in JavaScript)
  1. Base64-decode `<base64-payload>` to get `<payload>` (i.e. `Base64.urlsafe_decode64(<base64-payload>)` in Ruby. `atob(<base64-payload>.replace(/_/g, '/').replace(/-/g, '+'))` in JavaScript)
  1. Retrieve `<random-bytes-length>` and unpack it to a `1 byte unsigned char` (i.e. `<payload>[-1].unpack1("C")` in Ruby. `payload.slice(-1).charCodeAt(0)` in JavaScript)
  1. Retrieve `<routing-payload>` (i.e. `<payload>[...-<random-bytes-length> - 1]` in Ruby. `payload.slice(0, -<random-bytes-length> - 1)` in JavaScript)
- Secret detection tools will be able to check authenticity of tokens offline, and without base64-decoding the token (i.e. `Zlib.crc32(<token>[...-7]) == <token>[-7, 7].to_i(36)` in Ruby), since the checksum is included as the last 7 characters of the token.
- The `TokenAuthenticatable` framework will be updated to allow generating routable tokens.
- Secret detection tools will need to be changed to accommodate the longer and variable token length, and the new `.<base64-payload-length><crc32>` suffix:
  - `app/assets/javascripts/lib/utils/secret_detection_patterns.js`
  - [The GitLab Secret Detection gem](https://gitlab.com/gitlab-org/gitlab/-/tree/master/gems/gitlab-secret_detection)
  - [GitLab secrets SAST analyzer](https://gitlab.com/gitlab-org/security-products/secret-detection/secret-detection-rules)
  - [Tokinator](https://gitlab.com/gitlab-com/gl-security/appsec/tokinator/-/merge_requests/125)

### Pseudo code implementation

Each different tokens can encode different `id` for the need of the specific
token. Here we're using personal access token as an example, which we encode
the following ids:

- Cell id
- Organization id
- User id

Pseudo code for generating a routable token for personal access token:

```ruby
RANDOM_BYTES_LENGTH = 16
BASE64_PAYLOAD_LENGTH_HOLDER_BYTES = 2
CRC_BYTES = 7

def generate_routable_token(user)
  params = {
    c: Gitlab.cell.id.to_s(36),
    o: user.organization_id.to_s(36),
    u: user.id.to_s(36)
  }

  routing_payload = params.sort.map { |k,v| "#{k}:#{v}" }.compact_blank.join("\n")
  base64_payload = Base64.urlsafe_encode64("#{routing_payload}#{SecureRandom.random_bytes(RANDOM_BYTES_LENGTH)}#{[RANDOM_BYTES_LENGTH].pack("C")}", padding: false)
  base64_payload_length = base64_payload.size.to_s(36).rjust(BASE64_PAYLOAD_LENGTH_HOLDER_BYTES, '0')

  checksummable_payload = "#{PersonalAccessToken.token_prefix}#{base64_payload}.#{base64_payload_length}"
  crc = Zlib.crc32(checksummable_payload).to_s(36).rjust(CRC_BYTES, '0')

  "#{checksummable_payload}#{crc}"
end
```

Note that we encode integers into base36 strings to shorten the length of the eventual token.
It's also the reason why we're using raw random bytes instead of encoding them
in text. Users do not need to look at the random bytes and we encode the eventual token in base64 anyway.

### Minimum token length

Here's an example of a token having minimum id for a single routable part,
with no prefix showing the minimum length of a token (37 bytes):

```text
bzoxd_Rb5_cHeWe1JH56wr2FCBA.0r1pum4t4
```

Here is its routing payload:

```text
o:1
```

### Maximum token length

Here's an example of a token having maximum ids for all possible routable parts,
prefixed with the longest prefix (20 bytes) showing the maximum length of a token (330 bytes):

```text
++++++++++++++++++++YzozdzVlMTEyNjRzZ3NmCmc6M3c1ZTExMjY0c2dzZgpoOjN3NWUxMTI2NHNnc2YKajozdzVlMTEyNjRzZ3NmCms6M3c1ZTExMjY0c2dzZgpsOjN3NWUxMTI2NHNnc2YKbTozdzVlMTEyNjRzZ3NmCm86M3c1ZTExMjY0c2dzZgpwOjN3NWUxMTI2NHNnc2YKdTozdzVlMTEyNjRzZ3Nmw5bzMmayzK43Ugba9fl8T_I-nZqc5gxOGH2HsUF6-J7UesTG4lmc3PT2aoPyuiUndG5Ci5IMThAbaiNkUTR87KBB.8c1adh6iv
```

Here is its routing payload:

```text
c:3w5e11264sgsf
g:3w5e11264sgsf
h:3w5e11264sgsf
j:3w5e11264sgsf
k:3w5e11264sgsf
l:3w5e11264sgsf
m:3w5e11264sgsf
o:3w5e11264sgsf
p:3w5e11264sgsf
u:3w5e11264sgsf
```

Note that `3w5e11264sgsf` is `(2**64-1).to_s(36)` which is the largest number
for a bigint. Also note that `l`, `k`, `j`, `h`, `m` are not actual routing keys and are only there
to demonstrate the maximum theoretical size of a token.

In practice, it's unlikely that all routable parts would be set, but this can be useful to know that
maximum token length (e.g. for secret detection scripts).

### Meaning of fields

Since the payload holds a structured information, each single letter has a
particular meaning. The following fields are always required:

- `c`: Cell ID
- `o`: Organization ID

The following fields are optional. Each specific tokens can include them if needed:

- `g`: Group ID
- `p`: Project ID
- `u`: User ID
- `t`: Runner type (e.g., `t:1` for instance type, `t:2` for group type, and `t:3` for project type)

It's recommended that for tracing and observing purpose, we can include the
most important information for the specific token. For example, for a user
token, we also include user id. For a project token, we also include the
project id.

### Adding Classify to Topology Service

It is strongly desired that Classify endpoint of Topology Service could accept routable token payload in full (except for `r`), and make the best routing decision on its own based on available information.

The Topology Service once it receives the full payload should look at making routing decision
based on ID cardinality, preferring to search by Project ID, Group ID, Organization ID, User ID, Cell ID. As such adding support for new identifiers in Topology Service will not change HTTP Router implementation,
and will make those be automatically supported by Topology Service.

The request sent to Topology Service should never include `r` field that is meant to ensure that token is truly unique. Sending `r` is not required, and by us not sending it reduces attack surface on Topology Service, since Topology Service without `r` cannot reconstruct the token.

```proto
enum ClassifyType {
  ROUTABLE_TOKEN = 3;
}

message ClassifyRequest {
  ClassifyType type = 2;
  oneof value {
    string str = 3;
    map<string,string> routable_token = 4;
  };
}

service ClassifyService {
  rpc Classify(ClassifyRequest) returns (ClassifyResponse) {
    option (google.api.http) = {
      post: "/v1/classify",
      body: "*"
    };
  }
}
```

Assuming that we send to classify based on payload from the previous point
we would send the following request to Topology Service:

```ruby
classify_service.classify(
  ClassifyRequest.new(
    type: ClassifyType.ROUTABLE_TOKEN,
    routable_token: {
      "c": "100",
      "o": "1",
      "u": "100"
    }
  )
)
```

The Topology Service routes by the available information following this precedence:

1. `o`
1. `g`
1. `p`
1. `u`
1. `c`

### Integration into Token Authenticatable

The Routable Token is meant to be integrated into TokenAuthenticatable as a first-class
supported syntax. Once the `routable_token:` is used, it will change how the payload is generated.
The usage of `routable_token:` should not be used with `generator:` which is sometimes used to generate a random string of a different format.

```ruby
class PersonalAccessToken
  add_authentication_token_field :token,
    encrypted: :required,
    format_with_prefix: :prefix_from_application_current_settings,
    routable_token:
      if: ->(token_owner_record) { Feature.enabled?(:routable_token, token_owner_record.user) },
      payload: {
        o: ->(token_owner_record) { token_owner_record.organization_id.to_s(36) },
        u: ->(token_owner_record) { token_owner_record.user_id.to_s(36) }
      }
end
```

### Integration into Rules engine of HTTP Router

We intentionally encode more information to be able to change over time
the routing criteria by modifying HTTP Router rules. The HTTP Router would
introduce a stage of transforming information: `transform`.

```json
[
  {
    "match": [
      {
        "type": "header",
        "name": "private-token",
        "regex_value": "^glpat-(?<payload>.*)$"
      }
    ],
    "transform": [
      {
        "type": "base64-line-delimited",
        "input": "${payload}",
        "output": "decoded",
      }
    ],
    "action": "classify",
    "classify": {
      "type": "ROUTABLE_TOKEN",
      "routable_token": {
        "cell_id": "${decoded.c}",
        "organization_id": "${decoded.o}",
        "user_id": "${decoded.u}"
      }
    }
  }
]
```

Here we explicitly pass `c`, `o`, and `u` fields. If a field is missing value we'll just pass an empty string for them. We intentionally do not pass `r`.

#### HTTP Router support for JWT

Some tokens like `CI_JOB_TOKEN` will be [converted to JWT](../../ci_job_token/index.md).
The [JWT](https://en.wikipedia.org/wiki/JSON_Web_Token) is built from 3 different dot
separated base64 url encoded sections: JSON header, JSON payload and signature.

Support for `CI_JOB_TOKEN` is tracked at: [Phase 4.3: Routable Tokens of CI Job Token](https://gitlab.com/groups/gitlab-org/-/epics/15281).

In the following example, we assume that JWT payload does have `cell_id`
or `organization_id` or `user_id` fields. We explicitly re-map them to be
queried by `ROUTABLE_TOKEN`.

```json
[
  {
    "match": [
      {
        "type": "header",
        "name": "CI_JOB_JWT",
        "regex_value": "^(?<headers>\\w+)\\.(?<payload>\\w+)\\.(?<signature>\\w+)$"
      }
    ],
    "transform": [
      {
        "type": "base64-json",
        "input": "${payload}",
        "output": "decoded"
      }
    ],
    "action": "classify",
    "classify": {
      "type": "ROUTABLE_TOKEN",
      "routable_token": {
        "cell_id": "${decoded.cell_id}",
        "organization_id": "${decoded.organization_id}",
        "user_id": "${decoded.user_id}"
      }
    }
  }
]
```

##### Validating JWT signature

Potentially we could also support checking JWT signature. However, this
does require HTTP Router to be aware of JWT secrets in order to validate signature.
Since signature check is an expensive operation this will have meaningful impact
on CPU compute cost:

```json
[
  {
    "match": [
      {
        "type": "header",
        "name": "CI_JOB_JWT",
        "regex_value": "^(?<headers>\\w+)\\.(?<payload>\\w+)\\.(?<signature>\\w+)$"
      }
    ],
    "transform": [
      {
        "type": "jwt-signature",
        "input": "${headers}.${payload}",
        "output": "env.GITLAB_CI_JWT_PUBLIC_KEY"
      },
      {
        "type": "base64-json",
        "input": "${payload}",
        "output": "decoded"
      },
    ],
    "action": "classify",
    "classify": {
      "type": "ROUTABLE_TOKEN",
      "routable_token": {
        "cell_id": "${decoded.cell_id}",
        "organization_id": "${decoded.organization_id}",
        "user_id": "${decoded.user_id}"
      }
    }
  }
]
```

## Problems

- Passing `CI Job Token` as part of [POST body](https://docs.gitlab.com/ee/ci/jobs/ci_job_token.html#to-authenticate-a-rest-api-request).
- Passing `CI Trigger token` as part of [POST body](https://docs.gitlab.com/ee/ci/triggers/#use-curl).
- Some tokens use their own implementation instead of `TokensAuthenticatable`, like `EE::Project#external_webhook_token`.

## Questions

1. Application has a number of existing tokens generated in an old way. What happens with the legacy tokens?

- This document assumes that tokens have expiry date set.
- It means that over-time most of tokens will be rotated by the user.
- If some tokens cannot be made routable, they will be forever tied to Cell 1.
- In such case migrating organization to Cell 2 will imply that all tokens used
  by organization are to be rotated first before they can be migrated.
  This might require the organization to perform self-rotation of such tokens.

1. Why don't we use JWT?

The JWT is truly meant to be used as an ephemeral token, usually tied with the time-limited operation. It is strongly not preferred to store JWT for a long periods of time. JWT is also not user-friendly, and should rather be used in a concept of IDP frameworks like OAuth2.

1. What impact on changing Cell ID or Organization ID by an attacker has on the security of the token? What impact does lack of signature has, similar to the one present in JWT?

- This proposal does not change how "we use tokens", nor how we store them in database. The only thing it changes is to bring some additional meaning to random string.
- We do not treat the `payload` as security feature, rather as an aid to make a routing decision.
- Application does not decode payload, so if attacker changes Cell ID in a payload of the token such token will still be invalid from the perspective of the application.
- Application should always treat the token as a whole string without trying to understand its meaning.
- The only impact it might have is that attacker might force a request to be directed to a particular Cell, by forcing routing decision by HTTP Router.
- The HTTP Router will decode payload exclusively for the purpose of the making routing decision. Routing decision over time can be made on other factors as well, like hostname, URL path, or other parameters.
- The ability to validate authenticity of the payload is not a goal of this change. In case of DoS type of attack additional measures needs to be in place, like rate limiting to prevent those types of attacks.

## References

- [Token Prefixes documentation](https://docs.gitlab.com/ee/security/tokens/index.html#token-prefixes)
- [Routable Token generation PoC in Rails](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/157440)
- [Technical proposal for routable tokens](https://gitlab.com/gitlab-com/content-sites/handbook/-/merge_requests/8527)
- (Internal) Google Spreadsheet of various [tokens](https://docs.google.com/spreadsheets/d/1n54lCX2axsTIt8DZBRFj9p44s6YcFp-UechVEHEim8Y/) used by the GitLab.
- [Phase 4](https://gitlab.com/groups/gitlab-org/-/epics/14510).
