---
title: Custom domain verification on GitLab.com
category: GitLab.com
subcategory: Troubleshooting
description: How Support will verify a custom domain if required for GitLab.com.
---

### Overview

In GitLab 10.5, a verification system was introduced for GitLab Pages custom
domains. This is a security measure affecting custom domains served by
GitLab.io, preventing domains from being hijacked by unauthorized users.

Verification involves adding a GitLab-generated code to the DNS records for the
domain. Full details can be found [at this documentation page](https://docs.gitlab.com/user/project/pages/custom_domains_ssl_tls_certification/#dns-txt-record).

Domains can be verified or unverified. They can also be - separately - enabled or
disabled. When a new domain is added, it is both unverified and disabled. Once
verified, it becomes both verified and enabled. Verification re-occurs periodically;
if it fails, the domain becomes unverified but **remains enabled** for a grace period
of seven days. Once that grace period has elapsed, the domain becomes expired,
and is then disabled.

Existing custom domains in the database are given a grace period of 30 days; if
the required TXT records are not added during that time, these domains will also
be disabled.

### Logging

State changes for custom domains are logged to the Rails `application.log`,
and emailed to every maintainer of the owning project. View the events for
GitLab.com [on Kibana](https://log.gprd.gitlab.net/goto/10500a6d4eaa397a11701e2ddf10e883) and search for the domain name to see what actions
have been taken in the past week.

### Interaction with CNAME and A records

Custom domains need to be pointed to GitLab.io by adding either a CNAME or A
record to the DNS. If a CNAME is used, TXT records can't co-exist on the domain
name with it. Instead they need to be created on a special subdomain, e.g.:
`_gitlab-pages-verification-code.example.com`.

You can check whether a CNAME record is being used by running:

```sh
dig +short cname example.com
```

If this command returns any output, the verification TXT records *must* be
present on the special subdomain in the following steps.

### Checking TXT records

Support requests will generally center on a domain not being verified, when the
user believes the verification code has been added to DNS correctly. You can
check the TXT records for a custom domain by running the following commands
(replacing `example.com` with the correct domain throughout):

```sh
dig +short txt example.com
dig +short txt _gitlab-pages-verification-code.example.com
```

One or both of these commands should output a line of this form:

```text
"gitlab-pages-verification-code=78c8e1eb3311aecb7d6cffd1bc2e0e0f"
```

(It's OK if there are multiple lines, or the code appears in the middle of
a line mixed in with other data, as long as it's separated from them by
whitespace).

As an administrative user, you can view the *correct* verification code by
visiting the project on GitLab.com, then navigating to `Settings ➔ Pages` and
pressing the `Details` button for the appropriate custom domain.

You can also view the code in the rails console by running:

``` ruby
PagesDomain.find_by!(domain: "example.com").verification_code
```

If no records are present, or the verification code doesn't match, then the customer
hasn't configured their DNS records correctly. You can inform them about it, and
send them a link to the documentation. Note that incorrect records will be cached
for the `TTL` of the TXT record, so after uploading an incorrect record, the
customer may experience a delay in verification succeeding.

If the records **are** present, GitLab could have not performed a verification
check since they were added. You can press the `Verify ownership` button on the
custom domain details page to perform an immediate, synchronous check, which
might succeed.

If this check fails to verify the domain, and the TXT records were added or
changed recently, the most likely explanation is that an earlier failing check
has resulted in the failing records being cached in the DNS servers used by
GitLab.com.

**How long these records are cached for is controlled by the domain**
**owner:**

- If a "negative lookup" has been cached, it will be for a time specified by the
`MINIMUM` field of the [SOA record](https://en.wikipedia.org/wiki/SOA_record).
- TXT records containing the incorrect code will be cached for a time specified
by the TXT record's `TTL` field.

Unless the domain is due to expire very soon, you can just ask the customer to
wait for the cache to expire. Otherwise, you may want to extend the grace period
to a period later than the remaining cache time by following the instructions
below.

Finally, there may be a genuine bug in GitLab that prevents verification from
proceeding. If you encounter such a case, you can report it and manually extend
the domain's grace period with the following instructions.

### Manually enabling a custom domain

> **WARNING:** Only manually verify a custom domain if you are confident the
> customer is the rightful owner of the domain. This is a difficult question
> to answer in general; if in doubt, insist on the verification code being
> correct and present in the DNS before taking any action.

If caching or a GitLab bug is preventing verification from succeeding, you can
prevent the custom domain from being disabled by running the following command
in a Rails console (replacing `example.com` with the correct domain):

``` ruby
PagesDomain.find_by!(domain: "example.com").update!(enabled_until: 1.month.from_now)
```

This will give the domain an additional month for verification to complete,
enabling it if it had expired or never been verified. This should be long enough
for the cache to expire, or for the bug to be fixed.
