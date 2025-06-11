---
title: Advanced Global Search Rollout on GitLab.com
---

## Steps and Enhancements

- 2019-11-05: [Search security rapid action](https://gitlab.com/gitlab-org/gitlab/-/issues/35705) started.
  - Advanced Global Search went through 3 rounds of enable-disable in the prior 2 months due to 3 security issues discovered by HackerOne only hours after going online. See [12.3.3](https://about.gitlab.com/releases/2019/10/02/security-release-gitlab-12-dot-3-dot-3-released/), [12.3.5](https://about.gitlab.com/releases/2019/10/07/security-release-gitlab-12-dot-3-dot-5-released/), and [12.4.1/12.3.6](https://about.gitlab.com/releases/2019/10/30/security-release-gitlab-12-dot-4-dot-1-released/).
  - Team decided to take a systematic approach to discover and fix issues.
  - [Rapid action weekly agenda](https://docs.google.com/document/d/1PW4x814ItUcgcsz9e6jCu1cTrOeB7zHSjANBiviH6ho/edit#heading=h.mjyv33y6vsrg).
  - All engineering attention (2 engineers) swarmed on the security rapid action.

- 2019-12-09: [Security rapid action completed](https://gitlab.com/gitlab-org/gitlab/-/issues/35705#note_258417259).
  - All known security issues were fixed.
  - A [comprehensive set of test matrices](https://docs.google.com/spreadsheets/d/170VAL071pARoYuhiSAgs6_YSTBRZvATkYiE3mQy9FeE/edit#gid=0) was executed by the AppSec team.

- 2019-12-16:
  - __[Advanced Global Search was re-enabled for gitlab-org group on GitLab.com.](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1461)__.
    - Only GitLab's own gitlab-org was enabled, restoring to the state before the security rapid action.
  - Margin analysis requested by CFO, [cost estimation issue created.](https://gitlab.com/gitlab-org/gitlab/-/issues/118571)

- 2020-01-15: [Cost analysis completed](https://gitlab.com/gitlab-org/gitlab/-/issues/118571#note_272165771).
  - Due to holidays, it took about one month to complete [initial estimation](https://gitlab.com/gitlab-org/gitlab/-/issues/118571#note_268219220) and margin analysis.

- 2020-01-17: [Financial approval](https://gitlab.com/gitlab-org/gitlab/-/issues/196973#note_272881031) completed.

- 2020-01-24: [First two customers](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1591) were scheduled to get Advanced Global Search enabled.
  - __[Elasticsearch cluster node crashed](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1591#note_277584126)__ due to out of memory during initial indexing.
  - The enabling process was stopped and Elasticsearch cluster was brought offline.
  - __Advanced Global Search service was completely offline.__

- 2020-01-27: [A retrospective of the incident](https://gitlab.com/gitlab-org/search-team/team-tasks/-/issues/8) was held.
  - Continued troubleshooting with the Infrastructure team.
  - Started engagement with an Elastic support engineer.

- 2020-01-30: [Discovered the root cause of the problem](https://gitlab.com/gitlab-org/gitlab/-/issues/199887) with help from Elastic support.
  - Out of memory was caused by the combination of fairly large bulk requests queued for ingestion and small heap.
  - Started the work of scaling indexing jobs by [utilizing Elasticsearch Bulk Import API and Redis sorted set](https://gitlab.com/gitlab-org/gitlab/-/issues/34086).

- 2020-02-04:
  - [Re-enabled the GitLab's own gitlab-org and gitlab-com groups.](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1608)
  - [Enabled the first customer.](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1626)

- 2020-02-09 ~ 2020-03-05:
  - Iterative learning of enabling new customers and monitoring production environment via indexing 7 new groups one-by-one, meanwhile developing tools and playbook for batch indexing.

- 2020-02-29: Merged [Add a bulk processor for elasticsearch incremental updates](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/24298).
  - It processes incremental database updates in batch. It's more efficient and can lower the load on Elasticsearch when it's busy.
  - It uses Redis sorted set, which can deduplicate the indexing jobs. It can also help lower the load on Elasticsearch cluster.

- 2020-03-06:
  - Merged [Use less expensive index_options](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/25992), __reduced index size by 36.6%.__
  - Merged [Bulk API related Elasticsearch version compatibility fix](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/26639).

- 2020-03-11: [First attempt of adding new groups in batch succeeded](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1724). Another 30 groups enabled. Total enabled groups were 39, including GitLab's own groups.

- 2020-03-12: Routing feature was turned on GitLab.com, which resulted in [5x-6x latency improvement](https://gitlab.com/gitlab-org/gitlab/-/issues/196838#note_303927892).

- 2020-03-26: Merged [Use prefix search instead of ngrams for sha fields](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/27597), reduced index size by another 12.3%, __total index size reduction is 44.4%__.

- 2020-04-07: Optimized __re-indexing__ process to achieve __zero downtime__.
  - [Elasticsearch index alias](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1907) was used in GitLab.com to make re-indexing operation more flexible, efficient, and robust.
  - Re-indexing does not require downtime any more on GitLab.com.
  - [Zero downtime re-indexing related work started](https://gitlab.com/groups/gitlab-org/-/epics/2752).

- 2020-04-08: More groups were enabled and the total enabled groups is about [__3%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1788).

- 2020-04-09:
  - More groups were enabled and the total enabled groups is about [__6%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1925).
  - Started investigating [how to speed up initial indexing of groups](https://gitlab.com/gitlab-org/gitlab/-/issues/214280)
    - Increasing the number of Sidekiq workers has been discussed.
    - [The impact on other parts of GitLab.com was also evaluated.](https://gitlab.com/gitlab-com/gl-infra/scalability/-/issues/377)

- 2020-04-27: More groups were enabled and the total enabled groups is about [__9%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/1977).

- 2020-04-28: [A blog post](https://about.gitlab.com/blog/2020/04/28/elasticsearch-update/) was published which shared lessons learned from rolling out Advanced Global Search on GitLab.com.

- 2020-04-30: More groups were enabled and the total enabled groups is about [__12%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2012).

- 2020-05-08: Started working on [moving repository indexing jobs to Redis sorted sets](https://gitlab.com/gitlab-org/gitlab/-/issues/205178), which would help
  - Boost indexing performance.
  - Isolate incremental index update and initial indexing to separate job queues, accelerating both indexing job types.

- 2020-05-20: More groups were enabled and the total enabled groups is about [__16%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2168).

- 2020-05-24: More groups were enabled and the total enabled groups is about [__17%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2185).

- 2020-05-27: Merged [remove partial word matching from code search](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/32771), which would help reduce the storage size significantly.

- 2020-06-04: [Another re-indexing](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2213) was done on GitLab.com. The last storage optimization change was applied. It saved another 75% storage over previous optimizations and resulted in __a total of 86.1% index size reduction__.

- 2020-06-09: More groups were enabled and the total enabled groups is about [__20%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2233).

- 2020-06-10: More groups were enabled and the total enabled groups is about [__21%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2234).

- 2020-06-14: More groups were enabled and the total enabled groups is about [__22%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2209). [More Sidekiq workers were added](https://gitlab.com/gitlab-com/gl-infra/k8s-workloads/gitlab-com/-/merge_requests/237) and the impact on overall GitLab.com was closely monitored during this rollout. The conclusion was made that it's safe to double the number of Sidekiq workers for Elasticsearch jobs.

- 2020-06-15: More groups were enabled and the total enabled groups is about [__25%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2275).

- 2020-06-15: More groups were enabled and the total enabled groups is about [__26%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2276). [Number of Sidekiq workers were doubled again](https://gitlab.com/gitlab-com/gl-infra/k8s-workloads/gitlab-com/-/merge_requests/266) and monitoring data showed it's safe to keep the number of Sidekiq workers used in this rollout. The increased processing power would allow much faster rollout.

- 2020-06-16: More groups were enabled and the total enabled groups is about [__27%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2279).

- 2020-06-16: More groups were enabled and the total enabled groups is about [__39%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2280).

- 2020-06-17: More groups were enabled and the total enabled groups is about [__64%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2287).

- 2020-06-23: More groups were enabled and the total enabled groups is about [__75%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2307). However, [a High CPU utilization](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2318) issue was encountered in the Elasticsearch cluster during this batch enablement. A problemetic regex in the code analyzer was believed to be the culprit.

- 2020-06-24: [the problemetic regex was fixed](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/35292)

- 2020-06-29: Following the code analyzer regex fix, [another Elasticsearch cluster re-indexing was done successfully](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2335).

- 2020-07-02: A new feature was added to ensure [newly created paid groups to be indexed](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/35172).

- 2020-07-06: More groups were enabled and the total enabled groups is about [__87%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2371).

- 2020-07-08: More groups were enabled and the total enabled groups is about [__93%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2372).

- 2020-07-09: More groups were enabled and the total enabled groups is about [__98%__](https://gitlab.com/gitlab-com/gl-infra/production/-/issues/2373).

- 2020-07-10: All the paid groups are enabled on GitLab.com!
