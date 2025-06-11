---
title: "Integration Technologies"
---

This is a collection of best practices collected from working with customers on each stage of the SDLC. This list is not supposed to be exhaustive but provide the SA with a few good pointers when going into a meeting on a specific stage or feature.

## Topics List

| Topics | Description |
| ----- | --------- |
| [1. Elasticsearch - Advanced Search](#advanced-search-with-elasticsearch) | Enabling Elasticsearch for faster and more accurate searching of artefacts in GitLab |

## Advanced Search with Elasticsearch

Search is a very important aspect in our everyday lives. From using navigation apps to guide us to our restaurants nearby to translating words that are not in our native language, it is crucial that the search functionality is fast, accurate and flexible to allow us to get the most relevant results possible.

With integrations with Elasticsearch, we are able to leverage on the [Lucene](https://lucene.apache.org/) library to provide advanced search functionalities for GitLab users.

### Architecture

Elasticsearch leverages on clustering to search, distribute tasks and index across nodes to achieve high performance search. Unless deployed in a test environment, typically an Elasticsearch cluster should have at least 3 nodes to establish [quorum](https://www.elastic.co/guide/en/elasticsearch/reference/master/modules-discovery-quorums.html).

As the cluster grows, more nodes can be added to the cluster to improve concurrency of users or improve [resiliency](https://www.elastic.co/guide/en/elasticsearch/reference/current/scalability.html)

### Installation & Integration

The [global search team](https://gitlab.slack.com/archives/C3TMLK465) maintains a [page](https://docs.gitlab.com/ee/integration/advanced_search/elasticsearch.html) on the basic "know-hows" of setting up Elasticsearch and integrating with GitLab.

#### Installation Options

Elasticsearch is able to install on most [platforms](https://www.elastic.co/guide/en/elasticsearch/reference/current/install-elasticsearch.html). Inline with our recommendations to push customers to adopt Kubernetes, Elasticsearch also has an official [Kubernetes operator](https://www.elastic.co/blog/introducing-elastic-cloud-on-kubernetes-the-elasticsearch-operator-and-beyond) and [docker image](https://www.docker.elastic.co/) that simplifies the deployment process and helps the cluster to scale out quickly as determined by search traffic.

### Demo Resources & Examples

Demo Examples:

- [Recently Viewed Suggestions](https://www.youtube.com/watch?v=a1Y9927eC4I) [VIDEO]
- [Advanced Search Syntax](https://docs.gitlab.com/ee/user/search/advanced_search.html)

### FAQ

**Question: Do you recommend running Elasticsearch on the same host as GitLab?**

**Answer:** No. Elasticsearch will consume memory and file descriptors that is not allocated to the JVM [heap](https://www.elastic.co/guide/en/elasticsearch/reference/current/important-settings.html#heap-size-settings) (e.g. results caching, aggregations, etc.) As a result, it may result in resource contention of the various systems resulting in instability of the whole setup.

**Question: Are Elasticsearch operations transactional?**

**Answer:** No, not out of the box. Elasticsearch was not designed to be [ACID](https://en.wikipedia.org/wiki/ACID) compliant.
