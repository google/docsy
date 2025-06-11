---
title: "Security Planning"
no_list: true
---

## Security Planning

The **Security Planning** page catalogs the planning work prior to
implementation offSecurity Department initiatives and projects that span
multiple security teams and projects, or across the entire GitLab
organization. This includes things from high level architecture designs for
tools used by the Security to developing new or maturing organizational
processes.

A **Security Plan** is done when the text is sufficient to create Epics,
Milestones, and Issues with a enough detail to begin work. Requiring further
work in the form of proof-of-concepts or spikes may also be an outcome of a
"complete" Plan.

**Security Plans** are *not* meant to be the single-source-of-truth (SSOT) once
implementation begins. Non-planning handbook pages, runbooks, and system
documentation in related source repositories should be kept up-to-date and
continue to be iterated on.

It is suggested to associate a **Security Plan** with a single Epic and maintain
a link to that Epic in this page. All created issues can be associated with
that Epic as an alternative to providing links in the **Security Plan**

## Workflow

**Security Plans** begin with an Epic or other action item that does not have
enough detail to begin an iteration or develop on MVC:

1. If source is an issue, promote it to an Epic.
1. Create a new **Security Plan** in this directory and link to the Epic.
1. Use MR comments to draw particular attention to any areas you would like
   specific feedback.
1. Issues can start being created from the **Plan** at any time.
1. Once the MR is merged, create issues for any remaining work that is not
   covered.

## Tips

- Use headers (`####`) or manually create anchors (`[](){: name="hello-world"}`)
  to make it easier to refer to particular section of the Plan from GitLab.

## Plans

| Plan | Other Resources and Links|
|------|--------------------------|
| [Security Requirements for Development and Deployment](/handbook/security/planning/security-development-deployment-requirements/) | |
