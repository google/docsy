---
title: "Emergency Change Processes for GitLab SaaS"
---

The Infrastructure Department, responsible for managing GitLab SaaS environment, has a number of processes that have an implicit emergency process component as a part of a regular workflow. This page serves as a high level overview of the most important components of those processes, with links to pages describing said processes in more depth.

## Workflow

An integral part of any irregular situation occurring on GitLab SaaS is the [incident management process](incident-management/_index.md).
This process is used for platform degradation and outage events, but it is also the process for emergency changes such as addressing critical vulnerabilities.

After an incident is declared, the person on call will follow the incident management process, which can require additional sets of actions when dealing with an emergency change.

The person on call can generally leverage emergency code patching, require a deployment, or follow the high criticality [change management process].

### Change management

In cases where a configuration or environment change is required in an emergency situation, the person on call will follow the [change management process](change-management.md). Any configuration change done on the underlying infrastructure will go through a regular Merge Request (MR) workflow where a configuration change is checked into source control.

Since time is the critical component in this type of situation, it is possible that the person on call will self approve the change in discussion with the other people in the emergency call. In this situation, the change issue will be logged after the emergency has been mitigated and the MR in question will be referenced. The MR will also be reviewed and approved by another team member if that was not the case during the mitigation attempt, after the fact.

### Post deployment patching (hot-patches)

In cases where an application code change prompts a time critical hot patch, the person on call will leverage the [post deployment patching] process.

This process is used to quickly mitigate an application issue, and also leverages a Merge Request (MR) workflow where the code patch is stored in [a source controlled repository](https://ops.gitlab.net/gitlab-com/gl-infra/patcher).

The person on call (whether they are an SRE on call or a Release Manager), will review the MR submitted by a team member from any department. The post deployment patch is reviewed and approved by the person on call, and the change is rolled out to environments once the MR is merged. The MR with the post deployment patch is always linked to an unmitigated production incident, tying it back into the incident management process.

### Deployments

In cases where an application code change triggers the emergency change process, and the previous methods can't be used to resolve the issue, the person on call has to work with developers and the Release Managers to fast-track the standard review process.

Developers follow the standard review process, where the codebase maintainers review, approve, and merge the MR to resolve the issue. The MR author has to follow the [auto-deploy process](/handbook/engineering/deployments-and-releases/deployments/#gitlabcom-pick-label), and once the deployment is ready, the Release Manager will promote the deployment to GitLab SaaS, in coordination with the person on call.

In cases where the emergency change is required as a means to rectify a security vulnerability, the [security release process](https://gitlab.com/gitlab-org/release/docs/-/blob/master/general/security/process.md) is followed.
