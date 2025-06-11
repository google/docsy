---
title: "Atomic Testing"
no_list: true
---

Atomic Testing is a way of testing detections in a more repeatable way, similar to how software benefits from unit testing to ensure it still behaves as expected.
Detection rulesets can be vulnerable to changes in their underlying technologies, so they benefit from a repeatable testing framework to catch changes in detection efficacy and ensure they still perform as expected against malicious TTPs (tactics, techniques and procedures).

GitLab uses forks of the [TTPForge](https://github.com/facebookincubator/TTPForge) and [ForgeArmory](https://github.com/facebookincubator/ForgeArmory) frameworks and have customised the collection of provided TTPs specific to our unique tech stack.

For more information, see [this epic](https://gitlab.com/groups/gitlab-com/gl-security/security-operations/redteam/redteam-internal/-/epics/66) and the [Atomic Testing trial report](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-internal/red-team-operations/-/issues/1364).

## Atomic Testing Process

### Get ready

1. Red Team: select a TTP from [GitLab's ForgeArmory fork](https://gitlab.com/gitlab-com/gl-security/security-operations/redteam/redteam-internal/redteam-tools/TTPForge) or develop a new one. SIRT can be involved with the selection since they are familiar with the detection suite, or the Threat Intelligence team who can provide TTPs that are relevant to current threats.
2. Red Team: Do a TTP test run to ensure it works in correct environment. Spin up a standalone VM running the relevant OS and _without_ the detection agent. This allows testing without creating unnecessary alerts. Clone and set up TTPForge and ForgeArmory from our forks and install any dependencies.
3. Red/Blue team: Create a new issue for testing the TTP under [this epic](https://gitlab.com/groups/gitlab-com/gl-security/security-operations/redteam/redteam-internal/-/epics/66)
4. Red Team: Ask a SIRT member who can analyse the logs (for example, who is not on call that week)
5. Red/Blue team: Agree on a time (synchronously works best initially if possible, but not required)

### Run the TTP

{:start="6"}

1. Red Team: Notify SIRT in the `#security-operations` channel of the selected TTP (with a link to the yml file) and the machine it's being run on, so that an incident isn't raised.
1. Red Team: Run the TTP live. On a machine or VM _with_ the detection agent installed, clone TTPForge and ForgeArmory from our forks, install dependencies. Run the TTP and immediately notify the Blue Team member to find and analyse logs.
1. Red Team: Ensure the issue created in point 3 above is updated with any commands run and output generated. Use `<details>` and `<summary>` to collapse long output sections.

### Analysis and recommendation

{:start="9"}

1. Blue Team: Analyse logs and identify improvements to detections
1. Red Team: If there is a potential improvement (even if not eventually adopted), create a [recommendation issue](https://gitlab.com/gitlab-com/gl-security/security-operations/sirt/operations/-/issues/new) with `~RTRec::Detection` and under [this epic](https://gitlab.com/groups/gitlab-com/gl-security/security-operations/redteam/redteam-internal/-/epics/66). Here's an [example](https://gitlab.com/gitlab-com/gl-security/security-operations/sirt/operations/-/issues/3431).
1. Blue Team: Create detection improvement MR (if applicable) and link in recommendation issue, and apply appropriate SIRT labels.
1. Red/Blue Team: Close issue with appropriate `RecOutcome::` label

Repeat as needed!
