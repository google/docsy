---
title: "Network Security Management Procedure"
controlled_document: true
---

## Purpose

GitLab architects a defense-in-depth methodology that enforces the concept of “least functionality” through restricting network access to systems, applications and services and ensures sufficient security and privacy controls are executed to protect the confidentiality, integrity, availability and safety of the organization’s network infrastructure, as well as to provide situational awareness of activity on GitLab’s networks.

## Scope

GitLab's network architecture is available to both internal and external users and hosts our DNS with Cloudflare incluing gitlab.com and gitlab.net.

## Roles and Responsibilities

| Role  | Responsibility |
|-----------|-----------|
| Infrastructure Team | Responsible for configuration and management |
| Infrastructure Management (Code Owners) | Responsible for approving significant changes and exceptions to this procedure |

## Procedure

### Cloudflare

[Cloudflare](https://cloudflare.com) provides a web application firewall (WAF), domain name system
(DNS), and content delivery network (CDN) for the following zones:

- gitlab.com
- staging.gitlab.com
- gitlab.net

---

- [Cloudflare Statuspage](https://www.cloudflarestatus.com/)
- [Run a traceroute from the Cloudflare network](https://ops.gitlab.net/gitlab-com/gl-infra/cloudflare-traceroute)

### [On-Call Reference](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/cloudflare/oncall.md)

### [False Positive Triage Process](https://gitlab.com/gitlab-com/runbooks/-/blob/master/docs/cloudflare/troubleshooting.md#false-positive-triage-process)

### [Change Workflow](https://gitlab.com/gitlab-com/gl-infra/reliability/-/issues/10993)

### When to use a Page Rule vs WAF Rules vs [cf_allowlists](https://ops.gitlab.net/gitlab-com/gl-infra/terraform-modules/cf_allowlists) **internal-only**

Whatever it is, create an issue [**in the Firewall tracker**](https://gitlab.com/gitlab-com/gl-infra/cloudflare-firewall/-/issues) first and link it to the relevant issues. This firewall tracker is used to keep track of existing rules. This applies to all rules, regardless of how they are managed.

Next decide whether:

- Is it a redirect or changing a caching policy? Use page rules. Afterwards add an entry in the [`page_rules.json`](https://ops.gitlab.net/gitlab-com/gl-infra/cloudflare-audit-log/-/blob/cloudflare_import/page_rules.json) in the `cloudflare_import` and MR it as described [here](https://ops.gitlab.net/gitlab-com/gl-infra/cloudflare-audit-log#how-do-i-apply-a-cloudflare-change-then) **internal-only**
- Is it a bulk allow of IP addresses for internal customers? Use [cf_allowlists](https://ops.gitlab.net/gitlab-com/gl-infra/terraform-modules/cf_allowlists). **internal-only**
- Is it anything else? Use WAF Rules added via the firwall tracker and web UI.

### Quick reference: WAF Rules

**Temporary rules are subject to automatic expiration!** See [managing traffic](https://gitlab.com/gitlab-com/runbooks/-/blob/5bee8d98f19b68b912e9adda83bae1bf2fa3d0dd/docs/cloudflare/managing-traffic.md) for details.

To make it easier to know where to put the rule priority-wise, categorize the type of rule and pick the priority range from below

- 00000-14999: vulnerability hot-patch (block for everyone)
- 15000-29999: offender blocks (bots, attackers, etc.)
- 30000-44999: general WAF exceptions (bypass for everyone, except offenders)
- 45000-49999: internal and customer allow lists  (managed via [cf_allowlists](https://ops.gitlab.net/gitlab-com/gl-infra/terraform-modules/cf_allowlists). **Not to be used manually**)
- 50000-64999: WAF exceptions or blocks for non-allowlisted users

Then add the firewall tracker issue ID to the range. For example an attack, that is tracked in issue 1234 would get assigned priority `15000+1234` = `16234`.

### How we use Page Rules and WAF Rules to Counter Abuse and Attacks

[How we use Page Rules and WAF Rules to Counter Abuse and Attacks](https://gitlab.com/gitlab-com/gl-infra/reliability/-/issues/10277)

### Updating the WAF and Page Rules in Cloudflare

#### Adding Page Rules Using Terraform

The page rules are managed via Terraform. While changes can be made via the
Cloudflare Web UI, that is not the preferred method to manage rules.

#### Where to make changes

The three zones that use Cloudflare each have a dedicated
`cloudflare-pagerules.tf` file in its Terraform environment.

- [gitlab.net](https://ops.gitlab.net/gitlab-com/gitlab-com-infrastructure/-/blob/master/environments/ops/cloudflare-pagerules.tf)
- [gitlab.com](https://ops.gitlab.net/gitlab-com/gitlab-com-infrastructure/-/blob/master/environments/gprd/cloudflare-pagerules.tf)
- [staging.gitlab.com](https://ops.gitlab.net/gitlab-com/gitlab-com-infrastructure/-/blob/master/environments/gstg/cloudflare-pagerules.tf)

#### How to make changes

The Cloudflare provider for Terraform will not adhere to the `priority` value
set in a page rule's resource. All but the lowest priority rule will need a
`depends_on` section to point to the rule just below it in priority. And the
rule above it will need to be updated to depend on the new rule.

This forces Terraform to apply the rules in a specific order, preserving their
priority.

### Adding WAF Rules to the cf_allowlists

With any modification to the WAF rules in Cloudflare, the first step is
creating an issue in the [Firewall Issue Tracker](https://gitlab.com/gitlab-com/gl-infra/cloudflare-firewall).
Refer to the [managing traffic](https://gitlab.com/gitlab-com/runbooks/-/blob/5bee8d98f19b68b912e9adda83bae1bf2fa3d0dd/docs/cloudflare/managing-traffic.md) document to see how to
create the proper issue type with proper labels and description.

[cf_allowlists](https://ops.gitlab.net/gitlab-com/gl-infra/terraform-modules/cf_allowlists) **internal-only** is a Terraform module that we've written to write WAF rules allowing customers'
or GitLab service IPs to bypass Cloudflare and any block that it may cause. The
allowlist is handled in the `allowlist.json` of the linked module. To add an IP
to it, simply update the file with the required information. A sample entry is
provided in the README of the module. Once the change is merged to master, you
will need to run `terraform` on the `gstg` and `gprd` environments to apply the
rules. If you are running it locally, you may need to run `tf init -upgrade` to
ensure you fetch the latest module with your updates.

### Adding WAF Rules via the Web UI

Any modification to the WAF rules in Cloudflare requires an issue in the
[Firewall Issue Tracker](https://gitlab.com/gitlab-com/gl-infra/cloudflare-firewall).
Refer to the [managing traffic](https://gitlab.com/gitlab-com/runbooks/-/blob/5bee8d98f19b68b912e9adda83bae1bf2fa3d0dd/docs/cloudflare/managing-traffic.md) document to see how to
create the proper issues type with proper labels and description.

Making manual changes via the Cloudflare UI can be read about [here](https://developers.cloudflare.com/firewall/cf-dashboard/create-edit-delete-rules/).
A good practice is to create a new rule, but save it as a draft. This will
allow the rule to be turned on and off as part of a production change process.

### Verifying WAF and Page Rules

### How cf_audit works

The [cf_audit project](https://ops.gitlab.net/gitlab-com/gl-infra/cloudflare-audit-log)
is designed to help us keep a "known good" dump of our Cloudflare configuration.
This is only an audit tool and not used to update any configuration on its own.
The script itself gets all of the configuration data for our Cloudflare zones
and account from the API and outputs the data into the `reports/` directory of
the project.

There is a CI job that runs periodically to gather said data and commit it to
the `cloudflare_import` branch. The `cloudflare_import` branch is considered
the source of truth for the configuration. It then compares this information to
the `known_good` branch to determine what (if anything) has changed. The
`known_good` branch is considered to be the expected configuration. If a
configuration has changed, the job will be marked as failed, prompting manual
review of the changes.

If you'd like to watch a more detailed video about its inner workings, you can
view [this demonstration video](https://youtu.be/vTKyf-PS7Lo) which goes into
much more detail.

### [How Page Rules work](https://gitlab.com/gitlab-com/gl-infra/reliability/-/issues/10989)

### General Information

- [Vendor Info](https://gitlab.com/gitlab-com/runbooks/-/blob/5bee8d98f19b68b912e9adda83bae1bf2fa3d0dd/docs/cloudflare/vendor.md)
- [Services Locations](https://gitlab.com/gitlab-com/runbooks/-/blob/5bee8d98f19b68b912e9adda83bae1bf2fa3d0dd/docs/cloudflare/services-locations.md)
- [WAF Service Information](https://gitlab.com/gitlab-com/runbooks/-/blob/5bee8d98f19b68b912e9adda83bae1bf2fa3d0dd/docs/waf/README.md)

### Domain Name System (DNS)

- For the zones listed above, Cloudflare is the DNS resolver.
- [DNS in Terraform](https://ops.gitlab.net/gitlab-com/gitlab-com-infrastructure/-/tree/master/environments/dns) is used to manage Cloudflare DNS entries.

## Exceptions

Exceptions to this procedure will be tracked as per the [Information Security Policy Exception Management Process](/handbook/security/controlled-document-procedure/#exceptions).

## References

- Parent Policy: [Information Security Policy](/handbook/security/)
- [Production Architecture](/handbook/engineering/infrastructure/production/architecture/)
- [Encryption Policy](/handbook/security/product-security/vulnerability-management/encryption-policy.html#encryption-in-transit)
