---
title: Zero Trust
---

## Zero Trust

As part of raising that bar, GitLab is implementing Zero Trust, or the practice of  shifting access control from the perimeter of the org to the individuals, the assets and the endpoints. You can learn more about this strategy from the [Google BeyondCorp whitepaper: A New Approach to Enterprise Security](https://ai.google/research/pubs/pub43231).

In our case, Zero Trust means that all devices trying to access an endpoint or asset within our GitLab environment will need to authenticate and be authorized. Because Zero Trust relies on dynamic, risk-based decisions, this also means that users must be authorized and validated: what department are they in, what role do they have, how sensitive is the data and the host that they are trying to access?  We’re at the beginning stages in our Zero Trust roadmap, but as we move along in the journey, we’ll document our lessons learned, process and progress in our [Security blog](https://about.gitlab.com/blog/categories/security/).

To learn more about the concept of Zero Trust and our roadmap for implementation, see this GitLab presentation from GoogleNext19: <https://www.youtube.com/watch?v=DrPiCBtaydM>

You can also check out our [Zero Trust Networking (ZTN) blog series](https://about.gitlab.com/blog/tags.html#zero-trust) where we detail the ZTN implementation challenges we foresee ahead, some we've already managed to work through, and where we'll go from here:

- Part one: [The evolution of Zero Trust](https://about.gitlab.com/blog/2019/04/01/evolution-of-zero-trust/)
- Part two: [Zero Trust at GitLab: Problems, goals, and coming challenges](https://about.gitlab.com/blog/2019/08/09/zero-trust-at-gitlab-problems-goals-challenges)
- Part three: [Zero Trust at GitLab: The data classification and infrastructure challenge](https://about.gitlab.com/blog/2019/08/21/zero-trust-at-gitlab-the-data-classification-and-infrastructure-challenge/)
- Part four: [Zero Trust at GitLab: Mitigating challenges with data zones and authentication scoring](https://about.gitlab.com/blog/2019/09/06/zero-trust-at-gitlab-data-zones-and-authentication-scoring/)
- Part five: [Zero Trust at GitLab: Implementation challenges](https://about.gitlab.com/blog/2019/10/02/zero-trust-at-gitlab-implementation-challenges/)
- Part six: [Zero Trust at GitLab: Where do we go from here?](https://about.gitlab.com/blog/2019/10/15/zero-trust-at-gitlab-where-do-we-go-from-here/)

Head over to the /r/netsec subreddit to see our [October 29, 2019 Reddit AMA](https://www.reddit.com/r/netsec/comments/d71p1d/were_a_100_remote_cloudnative_company_and_were/) on Zero Trust where we fielded questions around our ZTN implementation, roadmap, strategy and more.

Identity is a critical element of the implementation of a ZTN framework. GitLab is moving forward with an implementation of Okta to allow us to standardize authentication for Cloud Application access and implement user-friendly SSO. See our [Okta](/handbook/business-technology/okta/) page for more details.

### Why We Don't Have a Corporate VPN

In many enterprise environments, virtual private networks (VPN) are used to
allow access to less secured resources, typically also protected by an
enterprise firewall. Adding corporate VPN connectivity only marginally improves
the security of using those systems and assumes a network perimeter is in place.
At GitLab, as an all remote company, we do most of our work using other
Software-as-a-Service (SaaS) providers that we rely on to maintain
confidentiality of communication and data.

In relation to [Zero Trust](#zero-trust), a corporate VPN is a perimeter, which
ZTN architecture deemphasizes as a basis for making authorization decisions.
Current access to critical systems is managed through alternative controls.

While a corporate VPN is not implemented at this time, there are other valid
use cases for which individual team members may still wish to use a *personal*
VPN, such as privacy or preventing traffic aggregation. Team members that
wish to use a personal VPN service for any reason may still [expense one](/handbook/finance/expenses/).

For the use case of laptop usage in untrusted environments, such as coffee
shops and coworking spaces, team members should prioritize a baseline of always-on host protections,
such as up-to-date security patching, host firewalls, and antivirus, by following the
[system configuration guidelines](/handbook/business-technology/it/security/system-configuration/#laptop-or-desktop-system-configuration)
at a minimum. That said, a personal VPN may provide additional protections in these situations.
For more on personal VPNs see the [Personal VPN]({{< ref "personal-vpn" >}}) page.
