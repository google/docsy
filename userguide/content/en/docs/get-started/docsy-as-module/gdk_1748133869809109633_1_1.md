---
title: "Direction - GDK"
---

**Last reviewed**: 2021-01-16

- [GDK Project](https://gitlab.com/gitlab-org/gitlab-development-kit)
- [Issue List](https://gitlab.com/gitlab-org/gitlab-development-kit/-/issues)
- [Epic List](https://gitlab.com/groups/gitlab-org/-/epics?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=Category%3AGDK)

- Please comment, thumbs-up (or down!), and contribute to the linked issues and
  epics on this category page. Sharing your feedback directly on GitLab.com is
  the best way to contribute to our vision.
- Please share feedback directly via [email](mailto:contributors@gitlab.com),
  [Twitter](https://twitter.com/gitlab). There's also a [Discord #contribute channel](https://discord.gg/gitlab) you can give us feedback and ask questions in.
- If you're a GDK user, we'd always love to hear from you!

### Overview

The GDK team is responsible for the GitLab Development Kit (GDK). The GDK
provides a self-contained GitLab environment, which can be run locally or in a
virtual machine. It's useful for developers contributing to the [GitLab project](https://gitlab.com/gitlab-org/gitlab),
or anyone needing to test, experiment with, or validate GitLab functionality.

This category is responsible for improving the usability and reliability of
the [GDK](https://gitlab.com/gitlab-org/gitlab-development-kit).
The GDK is essential for locally developing and testing changes.
It is used by nearly all of the product development organization at GitLab as
well as our community of contributors and partners.

It is therefore critical to optimize this experience for two reasons:
productivity gains made through tool enhancements have compounding returns,
and it makes it easier to get started contributing.

In the longer term, the vision is for the GDK to be a simple, reliable, and
flexible tool that allows everyone to contribute. Developers should be able to
keep their local development environment up-to-date painlessly, designers
should be able to quickly check out a branch and validate a feature they
designed, and everyone using the GDK should be running few commands to achieve
this, and experience a highly-performant local installation when they do so.

#### Target audience

The GDK serves as a simple way to set up a local development environment for
working on GitLab. With that in mind, the target audience for the GDK is
_anyone who is contributing to the GitLab project_. This includes:

- **Software engineers** directly writing code
- **Software engineers in test** who are testing that code
- **Product designers** verifying designs are implemented correctly
- **UX researchers** demonstrating functionality to users for research purposes
- **Product managers and engineering managers** performing acceptance testing
  before code is merged to master
- **All of the above**, whether they are working for GitLab or are part of
  our broader community of contributors.

GitLab is an [Open Core](https://en.wikipedia.org/wiki/Open-core_model) product,
and our community is central to the continued success of our mission. This
means that tools that allow anyone to jump in and contribute are vital to
keeping that momentum going.

### Future Vision

We want to build towards a state in which any GitLab contributor can easily install and use the GDK
with minimal effort. By "lowering the bar" to getting started, we allow our contributors to focus
on designing and building our next great feature.

We're iterating toward a version of the GDK that can install in a single command, updates itself
painlessly, and allows contributors to check out a feature branch with minimal effort.

#### Challenges to address

**Getting started with the GDK** is straightforward for GitLab employees because
of the tribal knowledge and in-company training we do. We need to move that
knowledge in to the documentation and the handbook to make it just as easy for
anyone in the community to get ramped up.

**Examining a specific branch** is a central workflow for many of our personas.
These users would benefit greatly from a minimal-fuss, no-configuration way to
switch to a specific branch to verify various aspects of the application with
high velocity.

**Making GDK updates a smooth experience** is a high-priority issue, as there
are a large number of reports of breaks happening when upgrading. This makes it
painful to upgrade and smoothly continue working, or (even worse) discourages
developers from upgrading in a timely manner.

**Getting help with the GDK** isn't so bad for GitLab Team Members, since they
can just join the **#gdk** (internal) Slack channel. This
approach is not suitable for community members, and we need a better solution
that works well for everyone (so that everyone can contribute.)

#### What's Next & Why

[Accelerate `gdk install/update/reconfigure` commands](https://gitlab.com/groups/gitlab-org/-/epics/7309)
by optimizing logic to only perform necessary actions.

[Support installing `asdf` binary packages](https://gitlab.com/groups/gitlab-org/-/epics/8238)
which will greatly improve the speed and reliability when running `gdk install/update`.

[Improve Gitpod startup time](https://gitlab.com/groups/gitlab-org/-/epics/7589)
by optimizing Docker image size, creation workflow and performing less logic
on startup.

[Improve the GDK Documentation](https://gitlab.com/groups/gitlab-org/-/epics/3218)
to increase clarity particularly for new contributors. This will include
reorganizing content to make it more discoverable and scannable, improving our
_"Preparing your computer"_ recommendations, and updating the documentation
for the latest requirements and prerequisites.

#### What we are not doing

**Integrating the GitLab Compose Kit (GCK).** The [GCK project](https://gitlab.com/gitlab-org/gitlab-compose-kit)
is also building local development environment tooling, however, the architecture
of the two approaches are fundamentally incompatible. See [this note](https://gitlab.com/gitlab-org/gitlab-compose-kit#should-i-use-gdk-or-gck) on that project's readme for more information.

### Why is this important?

The GDK is key to [our Strategy](/handbook/company/strategy/#how),
as the GDK is the entrypoint to contribution to the GitLab project itself. Without
the GDK, many contributors would have to learn the specifics of every
service that a local environment must run to function, the commands required to
run each of those services, and the order they must be stood up in to function
properly. They'd have to run these commands manually, or more likely, write some
tooling that automates the process for them... which after significant amounts
of time and effort were put in to those scripts, it would probably look a lot like the GDK.
