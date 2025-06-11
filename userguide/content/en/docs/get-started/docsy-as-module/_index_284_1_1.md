---
# This is the title of your design document. Keep it short, simple, and descriptive. A
# good title can help communicate what the design document is and should be considered
# as part of any review.
title: Poly Repos
status: proposed
creation-date: "2025-04-10"
authors: [ "@stanhu", "@fabiopitino", "@shekharpatnaik" ]
coaches: [ "TBD" ]
dris: [ "@product-manager", "@engineering-manager" ]
owning-stage: "~devops::<stage>"
participating-stages: []
# Hides this page in the left sidebar. Recommended so we don't pollute it.
toc_hide: true
---

{{< engineering/design-document-header >}}

This document is a work in progress and outlines a plan to support
workflows that involve multiple repositories. We call this poly repos
for short.

## Summary

The "poly repos" architecture introduces "Change Sets" to GitLab, enabling organizations with multi-repository
codebases (like Android Open Source Project) to manage cross-repository changes as a single unit.
This delivers critical workflow improvements by allowing teams to review, test, and merge related changes across multiple repositories simultaneously, with the ability to revert these changes together if needed,
all while maintaining reproducible CI builds.

This capability directly addresses the complex integration challenges faced by enterprises working with
distributed codebases, reducing development friction and improving software delivery reliability.

## Motivation

Many customers have source code repositories that depend on other repositories. Android developers,
for example, may work with a handful of repositories, but there are over a thousand repositories involved with building Android. A sample:

- [platform/manifest](https://android.googlesource.com/platform/manifest) - The central repository that defines all other repositories needed for a build.
- [platform/frameworks/base](https://android.googlesource.com/platform/frameworks/base/) - Core Android framework
- [platform/system/core](https://android.googlesource.com/platform/system/core) - Low-level system components
- [platform/bionic](https://android.googlesource.com/platform/bionic) - Android's C library implementation

Currently GitLab only supports merge requests for a single project, but users
should be able to work across projects. Users should be able to:

1. Push changes that span projects.
1. Review these changes together in one place.
1. Ensure CI passes with these changes.
1. Merge when all tests pass.
1. Revert the changes if something goes wrong.

## Definition of terms

- **Change Set** - A group of proposed code changes that span multiple projects.
- **Target Product** - A group of projects that represents the target product for a Change Set.
  For example, the Android source code is one example of a product consisting of hundreds of
  individual Git repositories.
- **Manifest file** - typically an XML configuration file that declares your app's package name,
  components, dependencies between them and their current revision.

### Goals

1. Define how to identify projects that make up a target project.
1. Define how merges and reverts will work across multiple projects.
1. Define how to build changes across projects with a centralized pipeline.
1. Discuss how Code Review will work with poly repo changes.

### Non-Goals

## Proposal

## Design and implementation details

### What is a Change Set?

There are two main ways a Change Set could be represented:

- Patch Set: A group of individual Git patches that are applied to different projects.
- Grouped Merge Requests: A group of merge requests that cross project boundaries.

#### Grouped Merge Requests vs. Patch Set

In the GitLab model, merge requests could be grouped together into a logical set and represent the changes needed to be applied together. This has the advantage of working with existing workflows, such as code review, merge request pipelines, etc.

However, there are a number of disadvantages:

- Diffs have to be recomputed on the server every time the target branch
  changes. If there are many outstanding merge requests across many
  repositories, this could create a significant amount of load on the
  server. Note that this problem already exists for monorepos.
- Each change to a project requires creating a new branch for that
  project. Developers have to name and manage individual branches across
  many repositories.

Patch sets have a number of advantages:

- They are computed on the client side.
- They force developers to have good commit hygiene, keeping logical changes together.
- Merging and reverting individual patches might be more straightforward than reverting a large merge commit.

The main disadvantages:

- Using Patch Sets may reduce the quality of the code review
  experience. For example, the ability to view code coverage, run
  security scans, report quality metrics, view the entire content of a
  file, etc. may not work.
- It's not clear how CI jobs would be able to create reproducible builds.
  CI jobs would have to check out some revision and then apply the Patch Set.
  What revision should the job use?
- Updating a Patch Set may be cumbersome and result in poor user
  experience. If a reviewer requests changes, the user must recreate the
  patch set, which is kind of equivalent to squashing and overriding the
  branch history in a MR.
- There's not a great way to apply patch sets locally. According [to this discussion](https://groups.google.com/g/repo-discuss/c/43juvD1qGIQ)
  there is no `repo apply` command that allows someone to apply all patches across projects.

#### How are Change Sets created?

There should be a number of ways a Change Set can be created:

1. From the UI
1. Using the API
1. Git push options

A change set could be created right before pushing the changes or even
during the development time. It is a bucket where to add/remove MRs.

If a change set ID is allocated before pushing the changes we could use
push options to pass the changeset ID:

```bash
glab cset new --product=10 #=> CSET ID: 1234

cd ../proj-1
git push -o cset=1234 origin HEAD
cd ../proj-2
git push -o cset=1234 origin HEAD
...
```

This could be done automatically with `glab`:

```bash
# push changes to multiple repos using product ID=10 and allocate a CSET ID if doesn't exist
glab push --polyrepo --product=10 #=> CSET created: https://gitlab.com/-/csets/1234

# or
glab push --polyrepo-manifest=../manifest.xml
```

#### Constraints of change sets

1. A merge request that belongs to a change set can only be merged together with other MRs
   in the change set.
1. A merge request can only be present in at most 1 change set at a given point in time.
1. A changeset can not be deleted because it represents point in time information of when certain
   MRs were merged. Much like merge requests cannot be deleted.

Known unknowns:

- Should a merge request belonging to a change set be allowed to be closed?
  Should it instead be removed from the change set?
- Should modifying the change set (by adding or removing a merge requests) trigger a CI pipeline?
  Technically it would cause the overall diff of the change set to change, invalidating the build.

### Identify projects that make up a "product"

[Epic](https://gitlab.com/groups/gitlab-org/-/epics/17278)

An organization (loosely defined as instance or group) can have multiple “products”. There could be multiple poly-repos in a given organization.

The "product" is orthogonal to the group/sub-group/project hierarchy. It
can be a map of any arbitrary projects in the organization, not
necessarily belonging to the same group.

- organization has many “products”
- a product has many projects/repos
- a product has many changesets
- a changeset has many MRs (implicitly project + ref)

Organizations aren't generally available yet, but a top-level group might
be considered a temporary container until organizations are available.

Usually a Change Set will involve a subset of the projects involved in a
target project. Customers currently use a number of approaches to
identify a product. For example:

1. Monorepos
1. A central repository with Git submodules
1. An [Android manifest file](https://gerrit.googlesource.com/git-repo/+/master/docs/manifest-format.md)

For the purpose of this discussion focusing on poly repos, we will ignore monorepos.

#### Git submodules

Git submodules allow you to include other Git repositories within your
repository as subdirectories, while keeping commits separate. Key
characteristics:

1. Embeds specific commits of external repositories into your main repository.
1. Changes to submodules are tracked by the parent repository as single-commit pointers.
1. Requires explicit commands to update (git submodule update).
1. Native Git feature, no extra tools required.
1. Each submodule maintains its own .git directory.

Advantages:

1. Direct Git feature requiring no additional tooling.
1. Simple conceptual model - repositories inside repositories.
1. Works well for stable dependencies that change infrequently.
1. Good for libraries and components with fixed versions.

Challenges:

1. Notorious for usability issues and learning curve.
1. Easy to forget to update or initialize submodules.
1. Difficult to work with when frequently changing multiple repositories.
1. Commands can be verbose and error-prone.

#### Android manifest file

The Android manifest approach uses an XML file (typically `default.xml`)
to describe the repository structure, managed by Google's "repo" tool.
Key characteristics:

1. Uses a manifest XML file that specifies repositories, branches, and paths.
1. Repositories are cloned side by side rather than nested.
1. Centrally managed through a single manifest repository.
1. Designed specifically for handling large, complex projects with many repositories
1. Uses the "repo" tool as a wrapper around Git.

Advantages:

1. Better suited for large-scale projects with many components.
1. More flexible for managing branch tracking across repositories.
1. Simplifies syncing multiple repositories to consistent states.
1. Supports more complex workflows like topic branches across repositories.
1. Provides high-level commands that handle multiple repositories at once.

Challenges:

1. Requires learning the "repo" tool and its commands.
1. Additional dependency on the repo tool.
1. Less universally supported in Git hosting platforms and tools.

#### Shortcomings

Here are some limitations of the Android manifest approach:

1. Flat Structure: The manifest primarily defines a flat collection of Git repositories to be checked out at specific revisions or branches. It doesn't inherently track which repository depends on which.
1. No Dependency Resolution: There's no automatic resolution of dependencies or sub-dependencies. The manifest simply lists all repositories that should be present.
1. Manual Coordination: Project maintainers manually determine which versions of repositories work together and update the manifest accordingly.
1. No Transitive Dependencies: If Repository A depends on Repository B, which depends on Repository C, the manifest doesn't automatically resolve this chain--all three would need to be explicitly included.
1. Groups: The manifest does have a concept of "groups" which allows categorizing repositories, but this is for organizational purposes and doesn't represent dependency relationships.

One customer generates lockfile to handle this with the command `repo manifest -r -o lockfile.xml`. A pseudo-structure of a lockfile could be:

```yaml
repositories:
  framework/base:
    remote: aosp
    commit_hash: a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0
    depends_on:
      - system/core
      - external/protobuf
    description: "Android application framework"

  system/core:
    remote: aosp
    commit_hash: b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1
    depends_on:
      - external/libcutils
    description: "Core Android system components"

  external/protobuf:
    remote: aosp
    commit_hash: c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2
    depends_on: []
    description: "Protocol Buffers library"

  external/libcutils:
    remote: aosp
    commit_hash: d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3
    depends_on: []
    description: "Android C utility library"

  device/google/pixel:
    remote: google
    commit_hash: e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4
    depends_on:
      - hardware/qcom/display
    description: "Pixel device-specific code"

  hardware/qcom/display:
    remote: qcom
    commit_hash: f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5
    depends_on: []
    description: "Qualcomm display HAL"
```

## Iteration plan

As a thought experiment, let's suppose that we start on fully supporting poly-repos
workflows. Here is a rough outline on how it might proceed:

### v0.1: Introduce a Change Set object

1. Can create a Change Set and link MRs.
1. Change Set will aggregate merge request status from multiple merge requests.
1. Links to MR diffs.
1. API support for retrieving MRs

### v0.2: Change Set Merge V1

1. Best effort merging, no guarantees of atomicity.
2. Aggregate reverts across projects.
3. Simplistic permissions: Merge only available to user who can initiate merge for all projects?

### v0.3: Code Review with Change Sets V1

1. Change Set diffs aggregated in single view.
1. Possible to see diffs from one specific project.
1. Support of [rapid diffs](../rapid_diffs/_index.md).

### v0.4: Change Set Merge V2

1. GitLab will block merges from other merge requests while Change Set merge is happening.
1. Merge commits will be tracked for each merge.
1. Change Set revert: A revert will now be a set of reverts that can be merged together.

### v0.5: Change Set pipelines V1

1. Associate a Change Set with a target build project.
1. By default, any push to the Change Set will create a pipeline in the target build project.
1. Affected Change Set projects/files published in a CI variable.

### v0.6: CI runner integration with Change Sets

1. Support CI steps or native integration for checking out multiple
   repositories (e.g. via Android manifest file?).

## Known unknowns

This is a list of design aspects that have not yet been refined:

- Is the "product" purely a collection of repositories or does it require additional metadata?
  What permissions are required to create a product?
- Define limits. How many MRs can be associated to a single Change Set? How many products can a group or
  organization host?
- What is the lifecycle of a Change Set?
- Should the system have a way to handle dependency relationships or is it left to the user?
- How will merge conflicts across multiple repositories be detected, reported and resolved?
- Can true atomicity be achieved for merges across repositories, or what level of consistency guarantee
  can be provided?
- Can the Change Set contain MRs with different merge strategies? How can inconsistencies be checked and reported?
- How can a ChangeSet be used with auto-merge strategies (e.g. Merge When Checks Pass)?
  Do we need a mechanism that intercepts and manages the state of each MR to then issue the merge together?
- What permissions are required to perform the merge across multiple projects?
  Should customers use service accounts? Note that post-merge CI pipelines will run with that identity.
- How can GitLab provide the merged result pipelines experience in a "poly repo" environment?
- What changes to Glab CLI would be necessary to provide a smooth UX?
- What happens if a partial revert is needed, or if a revert fails in one repository but succeeds in others?
- Should issues be linked to change sets like they are with merge requests?
