---
title: "Merge Trains Improvements (Fast-forward support) - Weekly Project Plan"
description: "Merge Trains Improvements (Fast-forward support) - Weekly Project Plan - Pipeline Execution Group."
---

## Merge Trains - Weekly Project Plan

We have released fast-forward support for merge trains as well as some additional bug fixes while we were focused on merge train development.
We will continue to work towards maturity level "Complete" for merge trains in future milestones. For now, I am closing this particular project
plan as the particular feature has shipped.

### Estimated Iteration Completion Milestones

- 16.4: Initial Beta Release of Fast Forward Merge Trains and Merge Immediately without Train Restart
- 16.5: GA Release of Fast Forward Merge Trains
- 16.6: Additional Bug Fixes

<details>
    <summary markdown="span">Archive</summary>

### Week of August 7, 2023 (W32)

#### Team Capacity

- 1 Backend Engineer

#### Goals

- [x] Merge [MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/128177) for refactoring of the Merge Request code for [issue](https://gitlab.com/gitlab-org/gitlab/-/issues/420668)
- [x] Merge [MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/127531) for creating a train ref using rebase.

### Week of August 14, 2023 (W33)

#### Team Capacity

- 2.5 Backend Engineers

#### Goals

- [x]  [Feature flag rollout](https://gitlab.com/gitlab-org/gitlab/-/issues/420949) of [refactoring of the Merge Request code](https://gitlab.com/gitlab-org/gitlab/-/issues/420668).
- [~]  Create MR(s) for [Add "Merge Immediately" option without interrupting merge train](https://gitlab.com/gitlab-org/gitlab/-/issues/414505)
- [~] [Feature flag rollout](https://gitlab.com/gitlab-org/gitlab/-/issues/420161) of creating train ref using rebase.

### Week of August 21, 2023 (W34)

#### Team Capacity

- 2.5 Backend Engineers

#### Goals

- [~] Merge [MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/125921) for fast forward merge of train ref into target branch
- [~] Merge MR(s) for [Add "Merge Immediately" option without interrupting merge train](https://gitlab.com/gitlab-org/gitlab/-/issues/414505)
- [~] Merge MR for [Merge request stuck in locked state when getting merged in a merge train](https://gitlab.com/gitlab-org/gitlab/-/issues/389044)
- [x] Create MR(s) for [Add "Merge Immediately" option without interrupting merge train](https://gitlab.com/gitlab-org/gitlab/-/issues/414505)

### Week of  August 28, 2023 (W35)

#### Team Capacity

- 2 Backend Engineers

#### Goals

- [x] Merge [MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/125921) for fast forward merge of train ref into target branch
- [x] Merge [MR](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/129820) for using a different commit message when doing fast forward merges
- [x] *Pulled forward* Merge [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/418819) for refactoring and aggregate specs
- [~] Merge [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/418822) for investigating if merge commit and squash_commit_sha tracking is needed
- [~] Merge MR(s) for [Add "Merge Immediately" option without interrupting merge train](https://gitlab.com/gitlab-org/gitlab/-/issues/414505)
- [~] Rollout feature flag for [Add "Merge Immediately" option without interrupting merge train](https://gitlab.com/gitlab-org/gitlab/-/issues/414505)
- [x] *Added* Bug fix for [Issue](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/130467) encountered during initial rollout

### Week of September 4, 2023 (W36)

#### Team Capacity

- 2 Backend Engineers

#### Goals

- [~] Merge [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/418822) for investigating if merge commit and squash_commit_sha tracking is needed
- [~] [Feature flag rollout](https://gitlab.com/gitlab-org/gitlab/-/issues/420161) of creating train ref using rebase.

</details>

### Week of September 11, 2023 (W37)

#### Team Capacity

- 2 Backend Engineers

#### Goals

- [~] Complete [Feature flag rollout](https://gitlab.com/gitlab-org/gitlab/-/issues/282442) of fast forward support or merge trains.
- [~] Merge [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/420000) (minor) for investigate concern that UI pipeline might not be created properly and/or status is delayed. This was raised during review of incomplete code. This might be fixed once all the parts are together)
- [~] Fast-follows for issues that arise during roll-out
- [~] Merge MR(s) for [Add "Merge Immediately" option without interrupting merge train](https://gitlab.com/gitlab-org/gitlab/-/issues/414505)
- [x] Merge MR for [keeping track of fast-forward merge train SHAs](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/130763)
- [x] Enable [standard commit messages for merge trains](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/131308) by default and on GitLab.com
- [x] Enable [improved merge train ref creation](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/131218) by default and on GitLab.com
- [x] Enable [Feature flag](https://gitlab.com/gitlab-org/gitlab/-/issues/420161) and one for SM of creating train ref using rebase.

### Milestone 16.5 (September 18, 2023 - October 16, 2023)

### Week of September 18, 2023 (W38)

#### Team Capacity

- 2 Backend Engineers

#### Goals

- [x] Merge MR(s) for [Add "Merge Immediately" option without interrupting merge train](https://gitlab.com/gitlab-org/gitlab/-/issues/414505)
- [~] Rollout [feature flag](https://gitlab.com/gitlab-org/gitlab/-/issues/422111) for [Add "Merge Immediately" option without interrupting merge train](https://gitlab.com/gitlab-org/gitlab/-/issues/414505)
- [x] Complete [Feature flag rollout](https://gitlab.com/gitlab-org/gitlab/-/issues/282442) of fast forward support or merge trains.
- [x] Merge [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/425100) for updating queries that associate rebased fast-forward merges with related MRs

### Week of September 25, 2023 (W39)

#### Team Capacity

- 2 Backend Engineers

#### Goals

- [~] Add [developer documentation](https://gitlab.com/gitlab-org/gitlab/-/issues/423893)

### Week of October 2, 2023 (W40)

#### Team Capacity

- 2 Backend Engineers

#### Goals

- [~] Merge MR for [Merge request stuck in locked state when getting merged in a merge train](https://gitlab.com/gitlab-org/gitlab/-/issues/389044)
- [x] Merge [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/420000) (minor) for investigate concern that UI pipeline might not be created properly and/or status is delayed. This was raised during review of incomplete code. This might be fixed once all the parts are together)
- [~] Investigate and maybe merge [Issue](https://gitlab.com/gitlab-org/gitlab/-/issues/425219) where commit verification gets lost on fast-forward merge trains
- [x] Fast-follows for issues that arise during roll-out

### Week of October 9, 2023 (W41)

#### Team Capacity

- 2 Backend Engineers

#### Goals

- [~] Complete bug fix - ["Merge" button appears instead of "Start merge train" when manual jobs are not triggered.](https://gitlab.com/gitlab-org/gitlab/-/issues/382394)
- [~] Duplicate - Complete bug fix - [Incorrect merge button appearing when waiting for manual action](https://gitlab.com/gitlab-org/gitlab/-/issues/300663)
- [x] Fast-follows for issues that arise during roll-out

### Week of October 16, 2023 (W42)

#### Team Capacity

- 1 Backend Engineers

#### Goals

- [x] Any remaining fast-follows for issues that arise during roll-out
- [~] Complete bug fix - [Merge train-enabled merge request fails with "Merge request is not mergeable", succeeds on retry without changes](https://gitlab.com/gitlab-org/gitlab/-/issues/344021)

### Milestone 16.6 (October 17, 2023 - November 10, 2023)

#### Team Capacity

- 1 Backend Engineer

#### Goals

- [~] Clean-up [Feature flag](https://gitlab.com/gitlab-org/gitlab/-/issues/420161) for creating train ref using rebase.
- [x] Clean-up [Feature flag](https://gitlab.com/gitlab-org/gitlab/-/issues/282442) for fast forward support or merge trains.
- [x] Clean-up feature flag for [Add "Merge Immediately" option without interrupting merge train](https://gitlab.com/gitlab-org/gitlab/-/issues/414505)
- [~] Merge MR(s) for [updating merge-result pipelines](https://gitlab.com/gitlab-org/gitlab/-/issues/421025) behind feature flag (breaking change)
- [~] Complete bug fix - [MergeTrain API failing with error `Branch has been updated since the merge was requested. Please review the changes. Try again`.](https://gitlab.com/gitlab-org/gitlab/-/issues/409339)
- [~] Complete bug fix - [Merge train-enabled merge request fails with "Merge request is not mergeable", succeeds on retry without changes](https://gitlab.com/gitlab-org/gitlab/-/issues/344021)
