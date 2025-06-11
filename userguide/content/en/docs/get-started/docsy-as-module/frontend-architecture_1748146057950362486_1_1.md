---
title: Pipeline Authoring Frontend Architecture Process
description: >-
  This page documents the frontend architecture process used in the
  Verify:Pipeline Authoring group.
---

## Overview

This page documents the frontend architecture process used in the Verify:Pipeline Authoring group.

### Why Are We Doing This?

_Other teams don't have an architecture process like this_, you may be thinking. _Why do we?_

This process is the Pipeline Authoring group's approach for avoiding stumbling blocks we have encountered in the course of our work — late-breaking unexpected issues, lack of context, etc. This needs to be addressed by a process lighter than [the Architecture Evolution Workflow](/handbook/engineering/architecture/workflow/) and more specific to the needs and knowledges of the Pipeline Authoring team than [the frontend process](https://docs.gitlab.com/ee/development/fe_guide/architecture.html).

By writing down what we plan to do, we hope to create a space where:

- Domain experts can point out unanticipated pitfalls early and share their knowledge.
- Context about goals and decisions are captured so that when people go on vacation / are eaten by a whale, all knowledge does not disappear with them.
- Engineers can do less switching between global thinking and detailed thinking when they are ready to implement their work.

### When Do I Need to Use This Process?

This process should be used when an engineer is creating a new section; undertaking a significant refactor; or adding a large-ish feature that is not an extension of a existing pattern.

If you aren't sure if you need to do this, do it anyways! At worst you have spent some time thinking about your plan, and extra documentation never hurt anyone.

### I'm Convinced! What Should This Look Like?

Add the label `~"Needs Architecture"` to the feature issue, then link it to a new issue with a description containing:

- a description of the problem this work is intended to solve
- the goals for this work
- a proposal for the architecture, which may include one or many options

It does not need to address to the schedule. That can be handled in the traditional production issue.

The proposal should include:

- A component breakdown. This doesn't have to be perfect, but listing how, for instance, you might break up the work you are doing into sections, is good. This will feed into ...
- A data story! Where will the data we are displaying come from? Where does it go? How will subcomponents access it? What will the backend do, what will the frontend cover? Looking at the utility functions in the `app/assets/javascripts/pipelines/` and `app/assets/javascripts/pipeline_editor/` can help provide clues for what we already do.
- How these changes fit with the code that already exists. Does it follow the patterns? Does it diverge? Will it consume shared components?
- A list of unknowns. What don't you know? What are you unsure about? If this were a map, where would you write _here be dragons_?
- Finally, if any of the following base assumptions are to be contravened, this should be called out clearly and the reasoning explained.

This list may seem long, but for smaller changes, they should be able to be addressed in a sentence or two.

#### Base Assumptions For All Architectures

- We'll follow our other guidelines, both at the department level and those outlined in the [team resources page](/handbook/engineering/development/ops/verify/pipeline-authoring/team-resources/).
- We will use Apollo and GraphQL for our data fetching and state handling needs.
- Using data structures that are identical to current data structures whenever possible is a good plan. While we do process a fair amount of data on the frontend, adding exceptions within that processing to deal with slight variations on that data is best avoided.
- We will use the `reportFailure` error pattern as used in, for instance, `app/assets/javascripts/pipelines/components/graph/graph_component_wrapper.vue` or `app/assets/javascripts/pipelines/components/dag/dag.vue` to handle our errors.
- We will use a wrapper component at the top level, like `app/assets/javascripts/pipelines/components/graph/graph_component_wrapper.vue`, to deal with the initial data calls and errors, and other functionality will be instantiated in subcomponents. This pattern helps us confine mocks in tests and supports the testing patterns without mounting too much.

### Who Should Review?

Once you have your plan, share it with: the rest of the frontend team, backend, domain experts, product and UX.

No one on this list should be a blocker to the plan, but their input should be sought.

### How Long Should This Take?

The process should last between one week and one milestone. If the project seems so large that it will take longer than a milestone, a spike might be needed.
