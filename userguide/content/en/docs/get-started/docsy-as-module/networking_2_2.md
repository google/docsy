---
title: "Demo Systems Infrastructure - Networking"
description: “Discover GitLab’s networking solutions for Demo Systems Infrastructure”
---

## Global CIDR Ranges

Each of the region/zone CIDR ranges exist in the `10.128.0.0/9` CIDR range. We have partitioned the `/9` CIDR range into `/12` CIDR ranges for each of the regions/zones.

| CIDR                | IP Range                    | (GitLab) Assigned To                            |
|---------------------|-----------------------------|-------------------------------------------------|
| 10.128.0.0 /12      | 10.128.0.0 - 10.143.255.255 | `demosys-saas-us-vpc` (GCP us-central1)         |
| 10.144.0.0 /12      | 10.144.0.0 - 10.159.255.255 | `demosys-saas-eu-vpc` (GCP eu-west1)            |
| 10.160.0.0 /12      | 10.160.0.0 - 10.175.255.255 | `demosys-saas-asia-vpc` (GCP asia-southeast1)   |
| 10.176.0.0 /12      | 10.176.0.0 - 10.191.255.255 | (Reserved for GCP expansion)                    |
| 10.192.0.0 **/16**  | 10.192.0.0 - 10.192.255.255 | `demosys-mgmt-us-vpc` (GCP us-central1)         |
| 10.193.0.0 **/16**  | 10.193.0.0 - 10.193.255.255 | `demosys-mgmt-eu-vpc` (GCP eu-west1)            |
| 10.194.0.0 **/16**  | 10.194.0.0 - 10.194.255.255 | `demosys-mgmt-asia-vpc` (GCP asia-southeast1)   |
| 10.195.0.0 **/16**  | 10.195.0.0 - 10.195.255.255 | (reserved for future mgmt)                      |
| 10.196.0.0 **/16**  | 10.196.0.0 - 10.196.255.255 | (reserved for future mgmt)                      |
| 10.197.0.0 **/16**  | 10.197.0.0 - 10.197.255.255 | (reserved for future mgmt)                      |
| 10.198.0.0 **/16**  | 10.198.0.0 - 10.198.255.255 | (reserved for future mgmt)                      |
| 10.199.0.0 **/16**  | 10.199.0.0 - 10.199.255.255 | `demosys-mgmt-global-vpc` (GCP)                 |
| 10.200.0.0 **/13**  | 10.200.0.0 - 10.207.255.255 | (Reserved for AWS mgmt)                         |
| 10.208.0.0 /12      | 10.208.0.0 - 10.223.255.255 | (Reserved for AWS us-east-1)                    |
| 10.224.0.0 /12      | 10.224.0.0 - 10.239.255.255 | (Reserved for AWS expansion)                    |
| 10.240.0.0 /12      | 10.240.0.0 - 10.255.255.255 | (Reserved for AWS expansion)                    |

{{% panel header="**GitLab Implementation**" header-bg="info" %}}
We like human recognizable infrastructure design elements and have allocated all of the `10.1xx.` address space to GCP and all of the `10.2xx.` IP space to AWS. This allow us to easily recognize which cloud provider console we should access to troubleshoot an issue. Feel free to adopt this idea for multi-cloud implementations, however it's not required.

Since we don't need as large of an IP range for management infrastructure, we partitioned the `10.192.0.0/12` CIDR range into two `/13` ranges which allowed us to cleanly partition the IP space for our GCP and AWS management infrastructure. We further partitioned the `/13` for GCP into multiple `/16` ranges to allow us to divide our management infrastructure cleanly into multiple regions for redundancy.
{{% /panel %}}

### How We Allocated Subnets

The standard subnet range for GCP [VPC auto subnet mode](https://cloud.google.com/vpc/docs/vpc#auto-mode-considerations) is `10.128.0.0/9`. This leaves the `10.0.0.0/9` range unused which is normally used for corporate networks (does not apply to GitLab). Our instincts would be to avoid conflicts with auto-created subnets and stick to using networks in the `10.0.0.0/9` range.

Since each VPC network has its own subnets, we can use the entire `10.0.0.0/8` range without issues as long as we don't use "auto subnet mode". In the spirit of an open source design that applies to many companies, we will stick to the `10.128.0.0/9` subnet range to avoid potential conflicts with corporate networks.

### Global vs Regional Routing Tables

When configuring your VPC networks and routing tables, you can choose to create a global routing table with a `10.128.0.0/9` and subnets for each region/zone that can communicate with each other, or configure each region/zone to operate independently with a `/12` routing table. Keep in mind that usage of terminology varies by cloud provider. For example, a GCP VPC is a global resource and an AWS VPC has a lot of options that are different in regards to cross-region network design.

{{% panel header="**GitLab Implementation**" header-bg="info" %}}
We keep each region isolated by creating a separate VPC Network for each region so there is no chance of cross-region contamination if something goes wrong. Although there are trade-offs with ease-of-administration that we solve with infrastructure-as-code tools, we prefer it this way to allow us to build/destroy/rebuild an entire region without worrying about whether the top-level resources are affected.
{{% /panel %}}

### High-Availability with Multiple Availability Zones per Region

If you are designing a high-availability/fault-tolerant environment within a region and want to use multiple availability zones, you can choose to use a `/12` CIDR range per zone (recommended for simplicity), or partition a `/12` CIDR range into a `/13` (2 zones) or `/14` (3-4 zones). The documentation assumes that you're using a `/12` per zone.

{{% panel header="**GitLab Implementation**" header-bg="info" %}}
We like human recognizable infrastructure design elements and have allocated all of the `10.1xx.` address space to GCP and all of the `10.2xx.` IP space to AWS. This allow us to easily recognize which cloud provider console we should access to troubleshoot an issue. Feel free to adopt this idea for multi-cloud implementations, however it's not required.

Since our demo environment is replicated in multiple regions, we don't think multi-zone redundancy within a region is necessary (or worth the compute cost). If we have a problem in a region, we'll redirect users to another region.
{{% /panel %}}

## Region/Zone Subnet Ranges

The `/12` CIDR for each region/zone includes 16 `/16` CIDR ranges. In other words, there are 16 available values for the second octet of the IP address which provides 65,536 IPs per subnet. We have assigned an alpha character `a` through `p` to represent the 16 available values.

| Subnet CIDR     | Description                                        |
|-----------------|----------------------------------------------------|
| 10.a.10.0 /24    | demosys-{regionAbbrev}-mgmt-red-subnet            |
| 10.a.20.0 /24    | demosys-{regionAbbrev}-mgmt-yellow-subnet         |
| 10.a.30.0 /24    | demosys-{regionAbbrev}-app-red-subnet             |
| 10.a.40.0 /24    | demosys-{regionAbbrev}-app-yellow-subnet          |
| 10.b.0.0 /16    | (reserved for future)                              |
| 10.c.0.0 /20    | gke-{regionAbbrev}-gl-shared-runners               |
| 10.c.16.0 /20   | gke-{regionAbbrev}-gl-dedicated-runners            |
| 10.c.32.0 /20   | (reserved for future service)                      |
| 10.c.48.0 /20   | (reserved for future service)                      |
| 10.c.64.0 /20   | (reserved for future service)                      |
| 10.c.80.0 /20   | (reserved for future service)                      |
| 10.c.96.0 /20   | (reserved for future service)                      |
| 10.c.112.0 /20  | (reserved for future service)                      |
| 10.c.128.0 /20  | (reserved for future service)                      |
| 10.c.144.0 /20  | (reserved for future service)                      |
| 10.c.160.0 /20  | (reserved for future service)                      |
| 10.c.176.0 /20  | (reserved for future service)                      |
| 10.c.192.0 /20  | (reserved for future service)                      |
| 10.c.208.0 /20  | (reserved for future service)                      |
| 10.c.224.0 /20  | (reserved for future service)                      |
| 10.c.240.0 /20  | (reserved for future service)                      |
| 10.d.0.0 /16    | gke-{regionAbbrev}-gl-omnibus-instance             |
| 10.e.0.0 /16    | (reserved for future)                              |
| 10.f.0.0 /16    | (reserved for future)                              |
| 10.g.0.0 /16    | (reserved for future)                              |
| 10.h.0.0 /16    | (reserved for future)                              |
| 10.i.0.0 /16    | (reserved for future)                              |
| 10.j.0.0 /16    | (reserved for future)                              |
| 10.k.0.0 /16    | (reserved for future)                              |
| 10.l.0.0 /16    | (reserved for future)                              |
| 10.m.0.0 /16    | (255) demosys-{regionAbbrev}-k8s-sandbox-{rsvpID}  |
| 10.n.0.0 /16    | (255) demosys-{regionAbbrev}-k8s-sandbox-{rsvpID}  |
| 10.o.0.0 /16    | (255) demosys-{regionAbbrev}-k8s-sandbox-{rsvpID}  |
| 10.p.0.0 /16    | (255) demosys-{regionAbbrev}-k8s-sandbox-{rsvpID}  |

{{% panel header="**GitLab Implementation**" header-bg="info" %}}
This is where the "it depends" scenarios start with network design. You can allocate this IP space however you'd like including subnet partitioning or combining. All of the documentation is modeled after how we've implemented it at GitLab based on our use cases.
{{% /panel %}}

### Demo Systems Management

`demosys-mgmt-vpc`

| VPC Name               | Region               | CIDR                 |
|------------------------|----------------------|----------------------|
| demosys-mgmt-us-vpc    | (gcp) us-central1-c  | 10.192.0.0 /16       |

#### Subnets

| Subnet CIDR       | Subnet Name                                        |
|-------------------|----------------------------------------------------|
| 10.192.10.0 /24   | `demosys-mgmt-us-mgmt-red-subnet`                   |
| 10.192.20.0 /24   | `demosys-mgmt-us-mgmt-yellow-subnet`                |

#### Terraform Configuration

Learn more in our [Terraform US region configuration](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-terraform/environments/demosys-mgmt/us) and our [Terraform region VPC module](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-terraform/modules/demosys-mgmt/region-vpc).

```console
cd ~/Sites/gitlab-com/customer-success/demo-systems/infrastructure/demosys-terraform
cd environments/demosys-mgmt/us
terraform init
terraform plan
terraform apply
```

### US Demo Resources

| VPC Name               | Region               | CIDR                 |
|------------------------|----------------------|----------------------|
| demosys-saas-us-vpc    | (gcp) us-central1-c  | 10.128.0.0 /12       |

#### Subnets

| Subnet CIDR       | Subnet Name                                        |
|-------------------|----------------------------------------------------|
| 10.128.30.0 /24   | `demosys-saas-us-app-red-subnet`                   |
| 10.128.40.0 /24   | `demosys-saas-us-app-yellow-subnet`                |
| 10.130.0.0 /20    | `gke-us-k8s-gl-shared-runners-subnet-*`            |
| 10.130.16.0 /20   | `gke-us-k8s-gl-dedicated-runners-subnet-*`         |
| 10.131.0.0 /16    | `gke-us-k8s-gl-omnibus-instance-subnet-*`          |
| 10.140.0.0 /16    | (255) demosys-us-k8s-sandbox-{rsvpID}              |
| 10.141.0.0 /16    | (255) demosys-us-k8s-sandbox-{rsvpID}              |
| 10.142.0.0 /16    | (255) demosys-us-k8s-sandbox-{rsvpID}              |
| 10.143.0.0 /16    | (255) demosys-us-k8s-sandbox-{rsvpID}              |

#### Terraform Configuration

Learn more in our [Terraform US region configuration](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-terraform/environments/demosys-saas/us) and our [Terraform region VPC module](https://gitlab.com/gitlab-com/customer-success/demo-systems/infrastructure/demosys-terraform/modules/demosys-saas/region-vpc).

```console
cd ~/Sites/gitlab-com/customer-success/demo-systems/infrastructure/demosys-terraform
cd environments/demosys-saas/us
terraform init
terraform plan
terraform apply
```

### EU Demo Resources

`demosys-eu-vpc`

TODO

### Asia Demo Resources

`demosys-asia-vpc`

TODO

## Future Planning Considerations

We should...

1. have IP range capacity for 10x-100x our current requirements if it's a scalable service.
1. have fewer subnets with larger CIDR ranges to reduce complexity and plan for growth.
1. have separate subnets for each service that poses security or sandbox risk. For example, we should have a separate subnet for Kubernetes pods that users create or are using for sandbox purposes.
1. avoid re-using subnets across multiple VPCs to prevent human confusion and internal IP address overlapping. Keep in mind that Google Cloud uses internal DNS to avoid the issue with overlapping subnets, however this is a vendor-specific technology and is not something we should depend on with our vendor agnostic design.
