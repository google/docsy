---
title: "FY26 - Patching & OS Modernization"
---

## Background

In FY25, the Ops team took ownership over the patching processes that are applied to the supporting infrastructure of GitLab.com. An overview of the areas we currently have applied focus:

1. Establishing runbooks for VM-based patching operations
2. Automating notifications to service owners for required patches and reboots
3. Creating an automation framework for patching our VM fleet

## North star 

All deployed software represents a potential security risk: we aim to ensure that all vulnerabilities impacting the supporting infrastructure of our SaaS products are able to be detected and resolved in an automated fashion.

## Goal proposals for FY26

1. [Stop deploying new instances on Ubuntu 20.04](#stop-deploying-ubuntu-2004)
2. [Document services that must run on virtual machines](#document-services-that-must-run-on-virtual-machines)
3. [Address patch gaps in non-VM infrastructure workloads](#address-patch-gaps-in-non-vm-infrastructure-workloads)
4. [Align processes with Dedicated/Cells](#align-processes-with-dedicatedcells)
5. [Establish update cadence for shared runner COS images](#establish-update-cadence-for-shared-runner-cos-images)
6. Move runners-manager instances to Kubernetes

## Additional details

### Stop deploying Ubuntu 20.04

1. This OS reaches end of life in April 2025
2. Many instance types still need to run on VMs, with architecture migration unlikely before EOL
3. Production Engineering completed most Ubuntu 22.04 support work in FY25 Q4
4. We need additional testing with service owners before fully deprecating Ubuntu 20.04

### Document services that must run on virtual machines

1. Conversations come up regularly that discuss migrating a service into Kubernetes / replacing it with a cloud native offering. We could collect this knowledge in a handbook page (or similar) so that we understand why it is prohibitive to change the service's architecture, or any potential replacements and the prerequisites required before they become feasible.
2. Ideally this can help in determining feasible options for deploying the services on infrastructure that is easier to maintain, and facilitate future planning.

### Address patch gaps in non-VM infrastructure workloads

1. Examine infrastructure workloads such as: Kubernetes pods, CloudRun containers, Cloudflare workers, etc.
2. Determine whether or not existing workflows are satisfactorily keeping these up to date.
3. Add automation to address any shortcomings in the discovery and update processes.

### Establish update cadence for shared runner COS images

1. We will implement a standardized update schedule for Container Optimized OS on our CI job VMs to ensure consistent security patching

### Align processes with Dedicated/Cells

1. We should evaluate the existing state of security patching in the Cells/Dedicated deployments, and identify any overlap with the current GitLab.com deployment.
2. Identify and address any deficiencies in the patching processes
3. Look for potential efficiency gains by combining processes, removing redundancies where possible
