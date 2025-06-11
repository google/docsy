---
title: "Purple Teaming at GitLab"
no_list: true
---

The terms "Red Team" and "Blue Team" are used to describe the roles of attackers and defenders during planned security exercises. At GitLab, where collaboration and transparency are two of our [core values](/handbook/values/), we like to join forces and conduct what is commonly referred to as "Purple Teaming".

GitLab team members can contribute, comment, view, or interact with us on Slack in the `#purple-team-ops` channel where we discuss ongoing purple-team operations.

## Goals of Purple Teaming

Purple Team operations help GitLab to better understand our organization's ability to detect and respond to real-world attacks. Given this deeper understanding, we can continue to strengthen these defenses based on the hands-on experience gained during *emulated* attacks, as opposed to the real thing.

At a high level, the goals of an operation generally fall into one of the following categories:

- To gauge the effectiveness of existing defensive capabilities (*Is our SIEM capable of detecting a compromised admin account?*)
- To practice and refine our procedures for responding to a breach (*Do our runbooks make sense? Can anything be automated?*)
- To understand our ability to detect and respond to a specific type of threat (*What would happen if we were targeted by a ransomware operator?*)

## Purple Team Operations

### Flash Operations

These are very short (1-2 weeks) and start with the identification of a relevant threat. Generally Red Team members meet with Blue Team members to plan and carry out the execution.

1. We work with the [Threat Intelligence team](/handbook/security/security-operations/threat-intelligence) to identify one or more relevant TTPs (tool, technique and procedure) that's worth exploring collaboratively.
2. We arrange a time to run the TTP(s), usually inside a virtual machine, and the Blue Team confirms detection (or no detection).
3. The detections are created or improved, resulting in a better security result for GitLab.
4. We collaborate on a report and share it within the security division (and wider company if applicable), so everyone is aware.

### Longer-term collaborations

[Atomic Testing](atomic-testing.md) is our first long-term Purple Team collaboration, enabling the easy re-run of these TTPs, much like unit tests do.

See also [Red Team Resources](../_index.md#additional-resourcesfurther-reading)
