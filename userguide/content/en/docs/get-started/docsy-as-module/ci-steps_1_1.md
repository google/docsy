---

title: CI Steps - Key Project Plan
description: Weekly Engineering Project plan for CI Steps
---







## Weekly Project Plan

Epic: [https://gitlab.com/groups/gitlab-org/-/epics/11535](https://gitlab.com/groups/gitlab-org/-/epics/11535)

### %16.5

#### Week of 2023-09-17

- Engineering strategy meeting to discuss an initial iteration plan

#### Week of 2023-09-25

- Clarify the iteration plan and next steps, with estimates of:
  - Architectural Design doc updates to be merged in next 2-3 weeks
  - MVC to be completed in the next 2-3 months

#### Week of 2023-10-02

- Iterating on technical strategy in [Architectural blueprint](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/131688)

#### Week of 2023-10-09

- Iterating on technical strategy in [Architectural blueprint](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/131688)
- Designate a Pipeline Authoring (Rails) DRI to start collaborating with the Runner DRI

### %16.6

#### Week of 2023-10-16

- Set up sync meeting between Engineering and Product to discuss current progress and align on technical & product strategy and goals
- [Iterate on the Architectural blueprint MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/131688)

#### Week of 2023-10-23

- [Iterate on the Architectural blueprint MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/131688)
- Update the Step-Runner code based on decisions made in the blueprint

#### Week of 2023-10-30

- [Resolved threads and merge the Architectural blueprint MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/131688)
- Update the Step-Runner code to align with the blueprint
- Implement the golang, bash and docker engines

#### Week of 2023-11-06

- Update the Step-Runner code to align with the blueprint
- Have it work with local Steps
- Implement the golang, bash and docker engines

### %16.7

#### Week of 2023-11-13

- Implement the golang, bash and docker engines
- Start determining which teams internally who could dogfood the feature

#### Week of 2023-11-20

- Implement the golang, bash and docker engines

#### Week of 2023-11-27

- Build the Lua engine as a POC (adding in ability to script in unsupported languages)

#### Week of 2023-12-04

- Build the Lua engine as a POC (adding in ability to script in unsupported languages)
- Record a demo with working MVC that aligns with the blueprint

### %16.8

**Largely TBD given that this is a forecast 2 months out and subject to other team member availability**

#### Week of 2023-12-11

- Build out a few more officially supported steps, such as fetch sources, caching, artifacts. (scope TBD)

#### Week of 2023-12-18

- Create a runner feature flag to skip built-in steps.
- Discuss feasibility of getting Runner capacity to contribute (even starting in %16.7 or %16.8 once work can be parallelized)

#### Week of 2023-12-25

- End of Year PTO 🎄

#### Week of 2024-01-02

Discussg parallel tracks of effort (WIP plans and DRIs):

1. Implement GitLab CI Steps support in Rails. This will elevate the "steps in env variable" to a properly supported syntax, including CI Editor support. This also involves collaboration with a Rails Engineer on Pipeline Authoring.
1. Add more test coverage (unit tests, integration tests, e2e tests (and for each engine)). Up until this point, test coverage is expected to be minimal.
1. Build support for GitHub Actions in CI Steps (up until this point, only GitLab-based steps will be supported)
1. Setup publishing workflows for Step Runner and all the officially supported engines and steps. Because users will be referencing our steps directly in their workflows, we need to publish them.
1. Write clear documentation on how users should import steps. E.g. which ones need docker, what the recommended use is, etc... I don't think the Component Catalog will be ready to curate these yet, but we can at least have some nice README's when browsing our steps sub-group.
