---
title: "Red Team"
no_list: true
---

## What Are You Looking For?

- "**Is this the Red Team? / Is the activity I'm seeing part of a Red Team operation?**" Did you find something potentially malicious and you think it might be us? :point_right: [Is this the Red Team?](how-we-operate/#is-this-the-red-team)
- "**I have some attacker related ideas that could be quite interesting!**" :point_right: [Contact us](#contact-us)
- "**Do you do penetration testing?**" :point_right: No. :smile: We don't do vulnerability enumeration. See [Services we offer](#services-we-offer)
- "**I want to upskill in Red Teaming**" :point_right: See [resources](#additional-resourcesfurther-reading), [Club Red](opportunistic-attacks#club-red)
- "**Can you hack me?**" :point_right: GitLab team members can sign up to our [laptop opt-in programme](https://forms.gle/kMTJEjzktcjAbTVn9)
- "**Can you help us with an incident?** Does this look like hacker stuff in these logs?" :point_right: [Contact us](#contact-us)
- "**Can you help find bugs in GitLab the product?**" :point_right: You're better off asking [Security Research](../../product-security/security-platforms-architecture/security-research/)

## Contact Us

- GitLab team members:
  - Come chat with us on Slack in `#sd_security_redteam` or via Direct Message.
  - Open an issue [in our internal issue tracker](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-internal/red-team-operations/-/issues)
- General public:
  - Open an issue in one of [our public projects](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-public)

## General Information

### Vision

To continuously strengthen GitLab's defenses against evolving real-world threats while leading the offensive security industry through transparency, collaboration, and technical excellence.

### Mission

We emulate real-world adversaries to increase GitLab's threat resilience (our ability to prevent, detect, and respond to cyber attacks). By conducting well-planned exercises in a safe and controlled manner, we give teams across GitLab the chance to practice and improve their defensive capabilities.

We achieve this by:

- Working with Threat Intelligence to identify and emulate the most relevant threats
- Partnering with teams across GitLab to translate security observations into actionable improvements
- Collaborating openly with industry peers to share security practices

While our work requires us to think and act like adversaries, we remain firmly grounded in the GitLab values. We intentionally bring transparency and collaboration to Red Teaming, conducting all operations thoughtfully and safely to achieve the best possible results for our organization.

## The Team

The Red Team is part of the Security Operations department. [See the GitLab organizational chart in Workday and meet our team members](https://www.myworkday.com/gitlab/d/home.htmld).

Further details about Red Team roles can be found in the [job family description](/job-families/security/red-team).

## Services We Offer

In everything we do, we follow our [rules of engagement (RoE)](how-we-operate/rules-of-engagement).

### Stealth Operations

Our primary service. Stealth operations are typically 3-9 months in length and are focused on emulation of relevant threats to GitLab. We work closely with [Threat Intelligence](../threat-intelligence) to identify an adversary that might pose a security risk to GitLab. Using tools we've developed similar to those of the adversary, we carry out the attack on GitLab's systems. We use stealth, testing the defenses realistically and without introducing unnecessary risk. [Read more...](stealth-operations)

### Opportunistic Attacks

These are short (a few days), more spontaneous attacks against GitLab systems when a potential initial access vector comes to our attention. Depending on what we find, we can either raise an incident ourselves, or continue as attackers would until discovery. We're looking to formalise this to a framework for discovering initial access more efficiently and iteratively. [Read more...](opportunistic-attacks/)

### Purple Teaming

Purple Team represents a collaborative exercise between the Red Team and Blue Team (our defensive teams, usually [SIRT](../sirt/) or [Signals Engineering](../signals-engineering)). These can be:

- flash operations, which are 1-2 week exercises triggered by [Threat Intelligence Flash Reports](../threat-intelligence/#flash-reports) to rapidly test our defenses against emerging threats, or
- longer-term collaborations such as [Atomic Testing](purple-teaming/atomic-testing)

[Read more...](purple-teaming/)

### Research

Understanding emerging technologies and tools helps us anticipate adversaries' evolving tactics. It also means we can more effectively emulate those attackers.

Formalized operations and opportunistic attacks both require extensive research, and we factor that in when planning these activities. Outside of that context, the Red Team may conduct research with an intent to provide helpful information to others in the security industry and the wider GitLab community.

Examples include:

- social engineering techniques
- stealth and defense evasion techniques
- AI for offensive security
- tools such as enumeration/scanning tools, command and control (C2) frameworks
- malware found in the wild

We publish tech notes that summarize some of our research as part of responsible disclosure. Explore our [list of tech notes, blogs and other research](https://gitlab-com.gitlab.io/gl-security/security-tech-notes/red-team-tech-notes/) and [public Git repository of some past tooling and techniques](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-public/).

## How We Operate

The Red Team operates under a predefined set of [rules of engagement](how-we-operate/rules-of-engagement). These rules provide guidelines for determining scope, the values we employ during our engagements, how we collaborate as a security team, and how we escalate vulnerabilities and exploits we discover during those engagements.

We also track results via metrics which are available internally, including MITRE heatmap to ensure coverage of relevant attacker activity.

[Read more...](how-we-operate/)

## Additional Resources/Further Reading

### GitLab Resources

- [Public Red Team repository](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-public)
  - Contains tools, scripts/proofs of concept and tech notes that have been made public
- [Internal Red Team repository](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-internal) (Available for GitLab team members only)
- [Our list of tech notes, blogs and other research](https://gitlab-com.gitlab.io/gl-security/security-tech-notes/red-team-tech-notes/)
- [Our public Git repository of some past tooling and techniques](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-public/)

### External Resources

- [Red Team Development and Operations](https://redteam.guide/): An excellent book by Joe Vest and James Tubberville.
- [Purple Teaming Execution Framework](https://github.com/scythe-io/purple-team-exercise-framework): Another great resource written by Scythe.
- [MITRE ATT&CK: Getting Started](https://attack.mitre.org/resources/getting-started/): A collection of resources related to the ATT&CK framework, which is used as the foundation for much of our work.

## Is This The Red Team?

GitLab team members: See something potentially suspicious and want to check in with us? We won't answer this question. Read more about why in [_Is This the Red Team?_](how-we-operate/#is-this-the-red-team)

**All suspicious activity should be treated as potentially malicious and acted upon accordingly**.
