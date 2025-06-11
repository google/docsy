---

title: Cluster Web Terminal
description: >-
  Project plan for providing customer safe access to their Kubernetes clusters through the UI.
---







## Weekly Project Plan

Epic: [https://gitlab.com/groups/gitlab-org/-/epics/11015](https://gitlab.com/groups/gitlab-org/-/epics/11015)

### Milestone 16.3 (June 18, 2023 - July 17, 2023)

#### Goals

- [x] [Allow WebSockets KAS connections](https://gitlab.com/gitlab-org/gitlab/-/issues/420190)
- [x] [Support WebSocket Connections from Browser](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/438)

### Milestone 16.4 (August 18, 2023 - September 17, 2023)

#### Goals

- [-] [Design and craft a container that will allow for the shell environment to exist](https://gitlab.com/gitlab-org/gitlab/-/issues/418261)
- [x] [Add Pod Attach API to the cluster itnegration javascript client](https://gitlab.com/gitlab-org/cluster-integration/javascript-client/-/issues/2)

#### Week of Aug 28-Sept 1

- The bulk of the work is focused around updating the cluster javascript client, the DRI for this task had some PTO time
- The focus has shifted towards a p1/s1 security issue that then revelaed to be less impactful and has been downgraded to p4/s4

#### Week of Sept 4-8

- [x] *forecast*: Updating the javascript client library to connect to the cluster is completed or close to completition
- [-] *forecast*: The discussion around designing the container that will receive the connection proceeds and we have an initial tech proposal

#### Week of Sept 11-15

- [x] *forecast*: The discussion around designing the container that will receive the connection proceeds and we have an initial tech proposal

### Milestone 16.5 (September 17, 2023 - October 10, 2023)

#### Goals

- [x] [Design and craft a container that will allow for the shell environment to exist](https://gitlab.com/gitlab-org/gitlab/-/issues/418261)
- [-] Add the web terminal interface behind a feature flag

#### Week of Sept 15-22

- [x] *forecast*: The first version of the container is prepared and the tooiling to automatically release it are clear and a plan to create them is ready

#### Week of Sept 25-29

- [-] *forecast*: [https://gitlab.com/gitlab-org/gitlab/-/issues/418264](https://gitlab.com/gitlab-org/gitlab/-/issues/418264) and  [https://gitlab.com/gitlab-org/gitlab/-/issues/418266](https://gitlab.com/gitlab-org/gitlab/-/issues/418266) are completely refined
- [-] *forecast*: [https://gitlab.com/gitlab-org/gitlab/-/issues/418264](https://gitlab.com/gitlab-org/gitlab/-/issues/418264) and  [https://gitlab.com/gitlab-org/gitlab/-/issues/418266](https://gitlab.com/gitlab-org/gitlab/-/issues/418266) are both picked up and a draft MR is ready

#### Week of Oct 02-06

- [-] *forecast*: [https://gitlab.com/gitlab-org/gitlab/-/issues/418264](https://gitlab.com/gitlab-org/gitlab/-/issues/418264) and  [https://gitlab.com/gitlab-org/gitlab/-/issues/418266](https://gitlab.com/gitlab-org/gitlab/-/issues/418266) are completely refined
- [-] *forecast*: [https://gitlab.com/gitlab-org/gitlab/-/issues/418264](https://gitlab.com/gitlab-org/gitlab/-/issues/418264) and  [https://gitlab.com/gitlab-org/gitlab/-/issues/418266](https://gitlab.com/gitlab-org/gitlab/-/issues/418266) are both picked up and a draft MR is ready
- [x] We have shift our attention to create a [Design Document](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/1137) for the Cluster Web Terminal
- [x] A demo [video](https://drive.google.com/file/d/1ifmlXvqcC5zmGiZAdLGFy6_Vg7B8RCku/view?usp=sharing) with the current status of the feature has been created to further the discussion with the team

#### Week of Oct 09-13

- [-] [The Design Document](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/1137) for the Cluster Web Terminal is finalised and merged.

### Milestone 16.6 (October 17, 2023 - November 10, 2023)

#### Goals

- [x] Finalise [the Design Document](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/1137) for the Cluster Web Terminal

#### Week of Oct 16-20

- [-] *forecast*: [The Design Document](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/1137) for the Cluster Web Terminal is finalised and merged.

#### Week of Oct 23-27

- [x] *forecast*: [The Design Document](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/1137) for the Cluster Web Terminal is finalised and merged.

#### Week of Oct 30 Nov 03

- We hit the goal for this milestone a bit earlier, this allows us to recover some pace on the project.
- [x] *forecast*: now that [The Design Document](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/merge_requests/1137) is merged the necessary issues are created and refined

#### Week of Nov 06-10

- [-] *forecast* The issues created as the followup to the design document are refined:
  - [-] [https://gitlab.com/gitlab-org/gitlab/-/issues/426285](https://gitlab.com/gitlab-org/gitlab/-/issues/426285)
  - [-] [https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/479](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/479)
  - [-] [https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/480](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/480)

### Milestone 16.7 (November 13, 2023 - December 8, 2023)

#### Goals

- [ ] *forecast* The issues created as the followup to the design document are refined:
  - [ ] [https://gitlab.com/gitlab-org/gitlab/-/issues/426285](https://gitlab.com/gitlab-org/gitlab/-/issues/426285)
  - [ ] [https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/479](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/479)
  - [ ] [https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/480](https://gitlab.com/gitlab-org/cluster-integration/gitlab-agent/-/issues/480)

### Milestone 16.8 (December 11, 2023 - January 12, 2024)

#### Goals

- The effort on this key project are going to be pause due to limited backend availability and other priorities

### Milestone 16.9 (January 15, 2024 - February 9, 2024)

#### Goals

- We should be able to resume the work on this project in this milestone, the expected MVC is due in 2 to 3 milestones.

### Milestone 16.10 (February 12, 2024 - March 8, 2024)

#### Goals

-

### Milestone 16.11 (March 11, 2024 - April 12, 2024)

#### Goals

-

### Milestone 17.0 (April 15, 2024 - May 10, 2024)

#### Goals

-
