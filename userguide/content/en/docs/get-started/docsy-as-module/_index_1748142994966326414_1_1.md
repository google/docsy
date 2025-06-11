---
title: "Data Security"
description: "GitLab's Data Security team investigates and remediates known unknowns in our data security and privacy posture."
---

## Team Identity

GitLab's Data Security team is responsible for investigating and remediating issues in data security and privacy across our product. We supplement the already excellent work being done by our colleagues in Product Security as well as all of Engineering by taking (often broad and vague) concerns, investigating them to find what (if anything) needs to be remediated, and then working to assist in cleanup. To put it another way, we [dot i's and cross t's](https://en.wikipedia.org/wiki/Tittle#Phrases) across GitLab.

The Data Security Team's remit includes (but isn't sharply limited to):

* Data stored out of compliance with our [data classification standard](/handbook/security/standards/data-classification-standard/) or our associated [infrastructure standards](/handbook/company/infrastructure-standards/)
* Secrets and encryption keys stored outside [KMS](https://en.wikipedia.org/wiki/Key_management#Key_management_system) or [HSM](https://en.wikipedia.org/wiki/Hardware_security_module) systems
* Copies of RED data outside official production systems
* Excessive permission grants in production systems that give the power to a single person to `rm -rf gitlab.com` (or similar)

Some high-priority initiatives for the team are:

* We're brand new (we began in August 2024)
* So we're working on these.
* Come back soon!

## Team Members

<table>
<thead>
<tr>
<th>Person</th>
<th>Role</th>
</tr>
</thead>
<tbody>
<tr>
<td>Julie Davila</td>
<td><a href="/job-families/security/security-leadership#vice-president-vp-security">VP, Product Security</a></td>
</tr>
<tr>
<td>Jacob Jernigan</td>
<td><a href="/job-families/security/security-leadership#senior-manager-infrastructure-security">Senior Manager, Infrastructure Security</a></td>
</tr>
<tr>
<td>Justin Cameron</td>
<td><a href="/job-families/security/security-engineer/#staff-security-engineer">Staff Security Engineer, Data Security</a></td>
</tr>
<tr>
<td>Brendan O'Connor</td>
<td><a href="/job-families/security/security-engineer/#staff-security-engineer">Staff Security Engineer, Data Security</a></td>
</tr>
</tbody>
</table>

## Working With Us

### Know about something scary and weird?

To ask us to look into an **area of potential scariness**, please create an issue using our [something weird template](https://gitlab.com/gitlab-com/gl-security/product-security/data-security/data-security-team/-/issues/new?issuable_template=something-weird).

### What We'll Do

We will look at every issue as it comes in. We may not respond to every issue immediately. We will investigate to the best of our abilities (including partnering with other teams to understand systems better). We'll try to get to the bottom of what's happening and work with the teams who are best-placed to fix the issue if there is one.

As our processes develop, we'll add more status labels and the like to our issues so it's easier for other teams to see what we're working on.

### Confidentiality

In keeping with [our value of Transparency](/handbook/values/#transparency), this issue tracker is open to everyone at GitLab. *If you feel a need to ask us to look into an issue in a way that will not be tagged with your identity, please DM someone on the team and have them create the issue for you.*

### Anything else

* [Create an issue in our tracker](https://gitlab.com/gitlab-com/gl-security/product-security/data-security/data-security-team/-/issues).
* Tag us on an issue (anywhere) using `@gitlab-com/gl-security/product-security/data-security` to mention the whole team.
* Come say hello in Slack in our `#security-datasec` channel. Feel free to share an amusing meme!

## How We Work

We'll add this once we know more.
