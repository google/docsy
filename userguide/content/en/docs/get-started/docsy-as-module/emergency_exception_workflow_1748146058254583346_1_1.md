---
title: Emergency Exception Workflow
category: On-call
description: "Describes the exception process for emergencies with some examples"
---

## Introduction

Support Engineers and Managers coordinate operational emergencies from GitLab customers. However, not all tickets raised as emergencies
fit our [definitions of support impact for a severity 1 case](https://about.gitlab.com/support/definitions/#severity-1). This workflow
describes what to do if you encounter a case that is of high business impact, but doesn't strictly match the definition of emergency.

### Exception Criteria

An exception to the strict definition of emergency may be granted if any of the following is true:

1. The problem poses a significant financial impact to the customer's company either immediately or as an after-effect
1. The problem is rendering GitLab essentially unusable for business purposes:
    1. One or more GitLab servers or services will not run, or
    1. GitLab features vital to a customer's daily operations are unavailable, or
    1. The GitLab instance is suffering a significant and persistent performance degradation, or
    1. Basic operations such as `clone`, `push`, or login are not working for a significant portion of users
1. The problem will create immediate legal problems for a customer's business
1. The problem will create immediate audit problems for a customer's business
1. The problem will create an immediate security risk for a customer's business

### Examples of situations that might (or might not) qualify for an exception

Following is a sample list of problems a customer might submit to GitLab Support as an emergency. For each problem we describe variations that either would or would not qualify the problem as an emergency, and we provide a brief summary of our reasoning.

#### A license has expired and a new license cannot be applied

- **Emergency**:  the absence of the paid features of GitLab is creating one or more of the problems listed under [Exception Criteria](#exception-criteria)
- **Not Emergency**:  the customer is able to proceed with business mostly as usual without the paid features of GitLab
- **Reasoning**:  By removing an expired license, the customer can still use all of GitLab's free features. Only if the customer relies heavily on one or more paid features can this qualify as an emergency.

#### You are getting 4xx or 5xx errors on GitLab pages

- **Emergency**:  the customers gets the errors from all of GitLab on every page
- **Not Emergency**:  the customer gets the errors on a few pages or individual projects
- **Reasoning**:  What's the scope of the problem? If most pages are ok, then this most likely does not qualify as an emergency.

#### Your users are unable to login to GitLab

- **Emergency**:  all users are unable to login
- **Not Emergency**:  some people can login, and some can't
- **Reasoning**:  If nobody can log in, then the instance is unusable and this is an emergency.

#### Pipelines are stuck

- **Emergency**:  the customer is seeing this in all projects
- **Not Emergency**:  the customer is seeing this in only a few projects, not all
- **Reasoning**:  Historically, stuck pipelines would not have qualified as emergencies because the GitLab instance is not down in these situations. We've come to realize that having stuck pipelines can mean that critical business processes are down, which can indicate an emergency. We also need to look at the scope. Are only a few projects affected, or are most or all affected? If it's the latter, and if the stuck pipelines are blocking critical business processes, then the situation qualifies as an emergency.

#### The customer is seeing performance degradation on their GitLab instance

- **Emergency**:  the entire instance is performing slowly enough to make it essentially unusable
- **Not Emergency**:  a single page is slow to load or GitLab is usable but slower than normal
- **Reasoning**:  If a GitLab instance is running so slowly that users have to sit and wait for an amount of time that is orders of magnitude greater than usual (10s instead of 1s, minutes instead of seconds, etc.), the instance is virtually unusable. Also, when system performance is degrading more and more, it can quickly turn into the system hanging or crashing.

#### Access tokens or SSH keys on the instance stopped working

- **Emergency**:  all access tokens or SSH keys on the instance stopped working
- **Not Emergency**:  a single access token or SSH key has stopped working
- **Reasoning**:  if the customer's GitLab instance is usable for most users, this isn't an emergency

#### Users are unable to clone from or push to projects

- **Emergency**:  all users are unable to clone from or push to most or all projects
- **Not Emergency**:  a small set of users is unable to clone from or push to any number of projects
- **Reasoning**:  if these functions are the customer's standard way of working, and nobody can use them, then it meets the criteria for an emergency because GitLab is essentially unusable

#### Security incident affecting a publicly-accessible and unpatched self-managed GitLab server

- **Emergency**:  We understand that a security incident can be very unnerving, and so we want to treat them all as emergencies by responding within 30 minutes, most likely not with a Zoom call, and advise the customer to implement measures to prevent access and then to restore from a backup.

### Situations that Are not Emergencies

#### GitLab Geo secondary site is down or not replicating

- **Reasoning**:  Even though the secondary site is down or not replicating, the primary site is still fully functional and so the customer's business is not impacted. This situation most likely should be treated as a normal support ticket with priority set to 'high', as it's not an emergency but it is still important to restore the secondary site quickly for business continuity purposes

#### Third party integration is not working

- **Reasoning**:  this is a problem to be addressed by the third party

#### Bringing attention to another ticket

- **Reasoning**:  bringing attention to a ticket is accomplished through our STAR process, not through declaring an emergency.

#### Docker Hub rate-limit preventing image pulls

- **Reasoning**:  the Docker Hub rate limit can be worked around by setting up a registry mirror

#### Configuration assistance

- **Reasoning**:  configuration of new instances or features is outside the scope of GitLab Support

#### Custom scripts not working (including upgrade scripts, configuration management scripts)

- **Reasoning**:  Custom scripts are outside the scope of GitLab Support

#### Elasticsearch integration is not working

- **Reasoning**:  Elasticsearch is only needed for our advanced search capabilities; on its absence, basic search can still be used.
