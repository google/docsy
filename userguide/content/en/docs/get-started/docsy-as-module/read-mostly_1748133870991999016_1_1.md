---
title: "Read-Mostly Data"
description: "Blueprint for read-mostly data"
---

## Read-Mostly Data

This document describes the *read-mostly pattern* introduced in the [Database Scalability Working Group](/handbook/company/working-groups/database-scalability/#read-mostly-data). We discuss the characteristics of read-mostly data and propose best practices for GitLab development to consider in this context.

### Characteristics of read-mostly data

As the name already suggests, *read-mostly data* is about data that is much more often read than updated. Writing this data through updates, inserts, deletes is a very rare event compared to reading this data.

In addition, read-mostly data in this context is typically a small dataset. We explicitly don't deal with large datasets here, even though they often have a "write once, read often" characteristic, too.

#### Example: License data

Let's introduce a canonical example: License data in GitLab. A GitLab instance may have a license attached in order to use GitLab's enterprise features. This license data is held instance-wide, i.e. there typically only exist a few relevant records. This information is kept in a table `licenses` which is very small.

We consider this read-mostly data, because it follows above outlined characteristics:

1. Rare writes: License data very rarely sees any writes after having inserted the license.
1. Frequent reads: License data is read extremely often to check if enterprise features can be used.
1. Small size: This dataset is very small - on GitLab.com we have 5 records at < 50 kB total relation size.

#### Implications for the application and its database at scale

Given this dataset is small and read very often, we can expect data to nearly always reside in database caches and/or database disk caches. Thus, the concern with read-mostly data is typically not around database I/O overhead, since we typically don't read data from disk anyways. However, considering the high frequency reads, this has potential to incur overhead in terms of database CPU load and database context switches. Additionally, those high frequency queries go through the whole database stack and additional cause overhead on the database connection multiplexing components and load balancers. Also, the application spends cycles in preparing and sending queries to retrieve the data, deserialize the results and allocate new objects to represent the information gathered - all in a high frequency fashion.

In the example of license data above, the query to read license data was [identified](https://gitlab.com/gitlab-org/gitlab/-/issues/292900) to stand out in terms of query frequency. In fact, we were seeing around 6,000 queries per second (qps) on the cluster during peak times. With the cluster size at that time, we were seeing about 1,000 qps on each replica and less than 400 qps on the primary at peak times. The difference is explained by our [database load balancing for scaling reads](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/lib/gitlab/database/load_balancing.rb), which favors replicas for pure read-only transactions.

![Licenses Calls](/images/company/working-groups/database-scalability/read-mostly-licenses-calls.png)

The overall transaction throughput on the database primary at the time varied between 50,000 and 70,000 transactions per second (tps). In comparison to this, this query frequency only takes a small portion of the overall query frequency. However, we do expect this to still have considerable overhead in terms of context switches and hence it is worth removing this overhead, if we can.

### How to recognize read-mostly data

It can be difficult to recognize read-mostly data, even though there are clear cases like in our example.

One approach to this is to look at the [read/write ratio and statistics from e.g. the primary](https://dashboards.gitlab.net/goto/DNwjBl-NR?orgId=1). Here, we look at the TOP20 tables by their read/write ratio over 60 minutes (taken in a peak traffic time):

```sql
bottomk(20,
avg by (relname, fqdn) (
  (
      rate(pg_stat_user_tables_seq_tup_read{env="gprd"}[1h])
      +
      rate(pg_stat_user_tables_idx_tup_fetch{env="gprd"}[1h])
  ) /
  (
      rate(pg_stat_user_tables_seq_tup_read{env="gprd"}[1h])
      + rate(pg_stat_user_tables_idx_tup_fetch{env="gprd"}[1h])
      + rate(pg_stat_user_tables_n_tup_ins{env="gprd"}[1h])
      + rate(pg_stat_user_tables_n_tup_upd{env="gprd"}[1h])
      + rate(pg_stat_user_tables_n_tup_del{env="gprd"}[1h])
  )
) and on (fqdn) (pg_replication_is_replica == 0)
)
```

This yields a good impression of which tables are much more often read than written (on the database primary):

![Read Write Ratio TOP20](/images/company/working-groups/database-scalability/read-mostly-readwriteratio.png)

From here, we can [zoom](https://dashboards.gitlab.net/goto/sX_wflaNg?orgId=1) into e.g. `gitlab_subscriptions` and realize that index reads peak at above 10k tuples per second overall (there are no seq scans):

![Subscriptions: Reads](/images/company/working-groups/database-scalability/read-mostly-subscriptions-reads.png)

 We very rarely write to the table (there are no seq scans):

![Subscriptions: Writes](/images/company/working-groups/database-scalability/read-mostly-subscriptions-writes.png)

Additionally, the table is only 400 MB in size - so this may be another candidate we may want to consider in this pattern (see [#327483](https://gitlab.com/gitlab-org/gitlab/-/issues/327483)).

### Best practices

#### Caching

In order to reduce the database overhead, we implement a cache for the data and thus significantly reduce the query frequency on the database side. There are different scopes for caching available:

1. `RequestStore`: Per-request in-memory cache (based on [request_store gem](https://github.com/steveklabnik/request_store))
1. [`ProcessMemoryCache`](https://gitlab.com/gitlab-org/gitlab/blob/master/lib/gitlab/process_memory_cache.rb#L4): Per-process in-memory cache (a `ActiveSupport::Cache::MemoryStore`)
1. [`Gitlab::Redis::Cache`](https://gitlab.com/gitlab-org/gitlab/blob/master/lib/gitlab/redis/cache.rb) and `Rails.cache`: Full-blown cache in Redis

Continuing the above example, we had a `RequestStore` in place to cache license information on a per-request basis. However, that still leads to one query per request. When we [started to cache license information using a process-wide in-memory cache](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/50318) for 1 second, query frequency dramatically dropped:

![Licenses Calls - Fixed](/images/company/working-groups/database-scalability/read-mostly-licenses-fixed.png)

The choice of caching here highly depends on the characteristics of data in question. A very small dataset like license data that is nearly never updated is a good candidate for in-memory caching. A per-process cache is favorable here since this unties the cache refresh rate from the incoming request rate.

A caveat here is that our Redis setup is currently not using Redis secondaries and we rely on a single node for caching. That is, we need to strike a balance to avoid Redis falling over due to increased pressure. In comparison, reading data from postgres replicas can be distributed across several read-only replicas. Even though a query might be more expensive going to the database, the load is balanced across more nodes.

#### Read data from replica

With or without caching implemented, we also must make sure to read data from database replicas if we can. This supports our efforts to scale reads across many database replicas and removes unnecessary workload from the database primary.

GitLab's [database load balancing for reads](https://gitlab.com/gitlab-org/gitlab/-/blob/master/ee/lib/gitlab/database/load_balancing.rb) sticks to the primary after a first write or when opening an explicit transaction. In the context of read-mostly data, we strive to read this data outside of a transaction scope and before doing any writes. This is often possible given that this data is only seldomly updated (and thus we're often not concerned with reading slightly stale data, for example). However, it can be non-obvious that this query cannot be sent to a replica because of a previous write or transaction. Hence, when we encounter read-mostly data, it is a good practice to check the wider context and make sure this data can be read from a replica.

### Summary & Follow-Ups

We have defined read-mostly data and described its characteristics above. We then looked at the example of license data in GitLab, the impact on GitLab.com and the effects of elevating the caching level from a request store to a per-process memory cache, which led to a significant drop in query frequency for this data. We have described the importance of caching read-mostly data and also emphasized to check that this data is being read from a database replica whenever we can.

We acknowledged that even though we have many different caching strategies available today, there is no common framework to improve consistent and convenient use. This has been [called out as a potential follow-up](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/78560#note_550747741) to define a caching framework to simplify this.

We are also aware of the limitations from a single-node Redis cache. [memcached has been called out](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/78560#note_558782471) as a potential alternative for which Rails has built-in support for sharding across any number of memcached servers.
