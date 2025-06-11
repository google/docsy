---
title: "Demo Systems Infrastructure - Kubernetes"
description: "Discover GitLab's Kubernetes Cluster Design for different cluster sizes"
---

## Kubernetes Cluster Design

We have reduced the size of GKE's default cluster configuration to be right-sized for various use cases.

### Small Cluster (Reservation/User Sandbox)

We're going to make an assumption that we want a small cluster to fit within a /23 CIDR range. Based on lessons learned, you quickly run out of pod IPs if you use a /24 or smaller range.

We are going to reduce the number of pods per node down to 16. This uses a /27 CIDR range for pods per node. Based on lessons learned, a fresh Kubernetes cluster uses approximately 15 pods for Kubernetes management-related containers so this ensures that a new cluster uses only 1 node.

For documentation purposes, we're going to replace the second octet of the IP addresses and CIDR ranges with `x` to represent an unknown variable and `r` to represent the `/23` range allocated to a cluster. The `r` value will always be an even number (0, 2, 4, 6, up to 252) since a `/23` consumes two `/24` ranges (one even and one odd range).

| CIDR Range       | IP Range                      | Subnet Name                       | Capacity            |
|------------------|-------------------------------|-----------------------------------|---------------------|
| 10.x.r.0/27      | 10.x.r.0 - 10.x.r.31          | demosys-k8s-clusterName-nodes     | 9 Nodes             |
| varies           | 10.x.r.32 - 10.x.r.128        | (reserved for future)             | (future use)        |
| 10.x.r.128/25    | 10.x.r.128 - 10.x.r.255       | demosys-k8s-clusterName-services  | 127 Services        |
| 10.x.{r+1}.0/24  | 10.x.{r+1}.0 - 10.x.{r+1}.255 | demosys-k8s-clusterName-pods      | 144 Pods (16/node)  |

This design allows for 127 clusters per /16 CIDR range.

Learn more in our [Terraform configuration module](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-terraform/modules/gcp/gke-small-cluster).

### Medium Cluster (Specific Service)

We're going to make an assumption that we want each Kubernetes cluster for a specific service fit within a /20 CIDR range.

We are going to reduce the number of pods per node down to 55. As a rule of thumb, there should be a maximum of 4 for every 1 vCPU or 1GB Memory (whichever is less). This should be adjusted based on the gcp_machine_type chosen. With the /20 CIDR range of a medium cluster, we have /21 available for pods (1,022 addresses). With a maximum of 30 nodes in this cluster, this allows up to 34 pods per node with the appropriately sized machine type. For n1-highcpu-8 with 8 vCPU and 7.2gb memory, it is recommended to use a value of 32.

| CIDR Range /20         | Usable Host Range             |
|------------------------|-------------------------------|
| 10.x.0.0 /20           | 10.x.0.1 - 10.x.15.254        |
| 10.x.16.0 /20          | 10.x.16.1 - 10.x.31.254       |
| 10.x.32.0 /20          | 10.x.32.1 - 10.x.47.254       |
| 10.x.48.0 /20          | 10.x.48.1 - 10.x.63.254       |
| 10.x.64.0 /20          | 10.x.64.1 - 10.x.79.254       |
| 10.x.80.0 /20          | 10.x.80.1 - 10.x.95.254       |
| 10.x.96.0 /20          | 10.x.96.1 - 10.x.111.254      |
| 10.x.112.0 /20      | 10.x.112.1 - 10.x.127.254     |
| 10.x.128.0 /20      | 10.x.128.1 - 10.x.143.254     |
| 10.x.144.0 /20      | 10.x.144.1 - 10.x.159.254     |
| 10.x.160.0 /20      | 10.x.160.1 - 10.x.175.254     |
| 10.x.176.0 /20      | 10.x.176.1 - 10.x.191.254     |
| 10.x.192.0 /20      | 10.x.192.1 - 10.x.207.254     |
| 10.x.208.0 /20      | 10.x.208.1 - 10.x.223.254     |
| 10.x.224.0 /20      | 10.x.224.1 - 10.x.239.254     |
| 10.x.240.0 /20      | 10.x.240.1 - 10.x.255.254     |

This design allows for 16 clusters per /16 CIDR range.

For documentation purposes, we use characters `a` through `p` to represent the 16 possible values of the 3rd octet since the value varies depending on the `/20` CIDR range.

| CIDR Range     | IP Range                   | Subnet Name                       | Capacity        |
|----------------|----------------------------|-----------------------------------|-----------------|
| 10.x.a.0/24    | 10.x.a.0 - 10.x.a.255      | demosys-k8s-clusterName-nodes     | 32 Nodes        |
| varies         | 10.x.b.0 - 10.x.d.255      | (reserved for future)             | (future use)    |
| 10.x.e.0/22    | 10.x.e.1 - 10.x.h.254      | demosys-k8s-clusterName-services  | 1,024 Services  |
| 10.x.i.0/21    | 10.x.i.1 - 10.x.p.254      | demosys-k8s-clusterName-pods      | 1,024 Pods      |

Learn more in our [Terraform configuration module](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-terraform/modules/gcp/gke-medium-cluster).

### Large Cluster (Multi-Tenant/Production)

We're going to make an assumption that we want each multi-tenant Kubernetes cluster to fit within a /16 CIDR range.

We are going to reduce the number of pods per node down to 55. As a rule of thumb, there should be a maximum of 4 for every 1 vCPU or 1GB Memory (whichever is less). This should be adjusted based on the `gcp_machine_type` chosen. With the /16 CIDR range of a large cluster, we have /17 available for pods (14,080 addresses). With a maximum of 255 nodes in this cluster, this allows up to 55 pods per node with the appropriately sized machine type. For n1-highcpu-16 with 16 vCPU and 14.4gb memory, it is recommended to use a value of 55 (rounded down from 57.6).

For documentation purposes, we're going to replace the second octet of the IP addresses and CIDR ranges with `c` to represent a /16 cluster.

| CIDR Range     | IP Range                   | Subnet Name                       | Capacity        |
|----------------|----------------------------|-----------------------------------|-----------------|
| 10.c.0.0/23    | 10.c.0.0 - 10.c.1.255      | demosys-k8s-clusterName-nodes     | 255 Nodes       |
| varies         | 10.c.2.0 - 10.c.63.255     | (reserved for future)             | (future use)    |
| 10.c.64.0/18   | 10.c.64.1 - 10.c.127.254   | demosys-k8s-clusterName-services  | 16,384 Services |
| 10.c.128.0/17  | 10.c.128.1 - 10.c.255.254  | demosys-k8s-clusterName-pods      | 14,080 Pods     |

Learn more in our [Terraform configuration module](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-terraform/modules/gcp/gke-large-cluster).

## Kubernetes Scalability Considerations

### Google Kubernetes Engine IP allocation

This is an excerpt from the [Google Kubernetes Engine documentation](https://cloud.google.com/kubernetes-engine/docs/concepts/network-overview#ip-allocation)

- Each node has an IP address assigned from the cluster's Virtual Private Cloud (VPC) network. This node IP provides connectivity from control components like kube-proxy and the kubelet to the Kubernetes API server. This IP is the node's connection to the rest of the cluster.
- Each Service has an IP address, called the ClusterIP, assigned from the cluster's VPC network. You can optionally customize the VPC network when you create the cluster.
- Each node has a pool of IP addresses that GKE assigns Pods running on that node (a /24 CIDR block by default). You can optionally specify the range of IPs when you create the cluster. The Flexible Pod CIDR range feature allows you to reduce the size of the range for Pod IPs for nodes in a given node pool.
- You can run a maximum of 110 Pods on a node with a `/24` range, not 256 as you might expect. This provides a buffer so that Pods don't become unschedulable due to a transient lack of IP addresses in the Pod IP range for a given node. For ranges smaller than /24, roughly half as many Pods can be scheduled as IP addresses in the range.
Each Pod has a single IP address assigned from the Pod CIDR range of its node. This IP address is shared by all containers running within the Pod, and connects them to other Pods running in the cluster.

:::tip GitLab Lesson Learned
Our biggest IP allocation challenge is related to Kubernetes clusters and nodes that consume large blocks of IP addresses. When you have dozens or hundreds of users utilizing Kubernetes, there are several design considerations that need to be taken into account to ensure that you only allocate the necessary IP address blocks (ex. the default node subnet is a `/20` and a node consumes a `/24` subnet).

If each user has their own cluster with a pool of 3 nodes, it's very easy to run out of IP's at scale. This is a lesson that we learned the hard way.
:::

### Kubernetes and GKE Limitations

There are known limitations with a single Kubernetes cluster that seem beyond our needs, however should be considered for proper design and future growth.

[Learn more about Kubernetes limits](https://cloud.google.com/kubernetes-engine/docs/concepts/scalability#understanding_limits)

[Learn more about GKE design limitations](https://cloud.google.com/kubernetes-engine/docs/how-to/alias-ips#creating_cluster)

#### Kubernetes Limitations

| Quantity                | Limit per namespace       | Limit per cluster        |
|-------------------------|---------------------------|--------------------------|
| # Nodes                 | n/a                       | 5000                     |
| # Namespaces            | n/a                       | 10000                    |
| # Pods                  | 3000                      | 150000                   |
| # Pods per node         | min(110, 10*#cores)       | min(110, 10*#cores)      |
| # Services              | 5000                      | 10000                    |
| # Pods per service      | 250                       | n/a                      |

#### Pod CIDR Ranges

| # Pods per Node     | CIDR Range per Node |
|-----------------------|---------------------|
| 8                     | /28                 |
| 9-16                  | /27                 |
| 17-32                 | /26                 |
| 33-64                 | /25                 |
| 65-110                | /24                 |

#### Node CIDR Ranges

| # Nodes per Subnet | Subnet CIDR         |
|-----------------------|---------------------|
| 4                     | /29                 |
| 12                    | /28                 |
| 28                    | /27                 |
| 60                    | /26                 |
| 124                   | /25                 |
| 252                   | /24                 |
| 508                   | /23                 |
| 1,020                 | /22                 |
| 2,044                 | /21                 |
| 4,092 (GKE default)   | /20                 |
| 8,188                 | /19                 |
| 16,777,212            | /8                  |

#### Service CIDR Ranges

| # Services per Subnet | Subnet CIDR         |
|-----------------------|---------------------|
| 32                    | /27                 |
| 64                    | /26                 |
| 128                   | /25                 |
| 256                   | /24                 |
| 512                   | /23                 |
| 1,024                 | /22                 |
| 2,048                 | /21                 |
| 4,096 (GKE default)   | /20                 |
| 8,192                 | /19                 |
| 16,384                | /18                 |
| 32,768                | /17                 |
| 65,536                | /16                 |

## Multi-Dimension Limitations on Kubernetes Resources

| Pod Secondary IP Range | # Pod IP Addresses | # Nodes | # Pods  |
|------------------------|--------------------|---------|---------|
| /24                    | 256                | 1       | 110     |
| /23                    | 512                | 2       | 220     |
| /22                    | 1,024              | 4       | 440     |
| /21                    | 2,048              | 8       | 880     |
| /20                    | 4,096              | 16      | 1,760   |
| /19                    | 8,192              | 32      | 3,520   |
| /18                    | 16,384             | 64      | 7,040   |
| /17                    | 32,768             | 128     | 14,080  |
| /16                    | 65,536             | 256     | 28,160  |
| /15                    | 131,072            | 512     | 56,320  |
| /14 (GKE default)      | 262,144            | 1,024   | 112,640 |
| /13                    | 524,288            | 2,048   | 225,280 |
| /12                    | 1,048,576          | 4,096   | 450,560 |
| /11                    | 2,097,152          | 8,192   | 901,120 |

### Google Best Practices for Optimizing IP Allocation

[Learn more about flexible pod CIDR](https://cloud.google.com/kubernetes-engine/docs/how-to/flexible-pod-cidr)

By default, GKE configures nodes to run no more than 110 Pods. Kubernetes assigns each node a range of IP addresses, a CIDR block, so that each Pod can have a unique IP address. The size of the CIDR block corresponds to the maximum number of Pods per node.

With the default maximum of 110 Pods per node, Kubernetes assigns a /24 CIDR block (256 addresses) to each of the nodes. By having approximately twice as many available IP addresses as the number of pods that can be created on a node, Kubernetes is able to mitigate IP address reuse as Pods are added to and removed from a node.

Although having 110 Pods per node is a hard limit, you can reduce the number of Pods per node. If you reduce the number from the default value, Kubernetes assigns the node a correspondingly smaller CIDR block. The block always contains at least twice as many addresses as the maximum number of Pods per node. The table below lists the size of the CIDR block that Google Kubernetes Engine assigns to each node based on the maximum Pods per node.

When configuring the maximum number of Pods per node, you are indirectly configuring how much IP address space is required by each cluster node. For example, if you set the maximum Pods per node to 30 then, per the table above, a /26 CIDR range is used, and each Node is assigned 64 IP addresses. If you do not configure the maximum number of Pods per node, a /24 CIDR range is used, and each node is assigned 256 IP addresses.

Reducing the maximum number of Pods per node allows the cluster to have more nodes, since each node requires a smaller part of the total IP address space. Alternatively, you could support the same number of nodes in the cluster by specifying a smaller IP address space for Pods at cluster creation time.

Reducing the maximum number of Pods per node also lets you create smaller clusters that require fewer IP addresses. For example, with eight Pods per node, each node is granted a /28 CIDR. These Pod IP address ranges plus the user defined subnet and secondary ranges determine the number of IP addresses required to create a cluster successfully.

You can configure the maximum number of Pods per node at cluster creation time and at node pool creation time.

You can configure the maximum number of Pods per node when creating a cluster or when creating a node pool. You cannot change this setting after the cluster or node pool is created.

You can set the size of the Pod address range when creating a cluster with either gcloud or Google Cloud Console.

You can also specify the maximum number of Pods per node when creating a node pool in an existing cluster. Creating a new node pool lets you optimize IP address allocation, even in existing clusters where default-max-pods-per-node wasn't configured at the cluster level.

This value overrides the default-max-pods-per-node option which is applied at the cluster-level. If you omit the max-pods-per-node option when creating a node pool, the cluster-level default configuration is used.
