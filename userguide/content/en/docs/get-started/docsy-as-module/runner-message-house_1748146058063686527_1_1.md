---
title: "Runner Message House"
description: Messaging and positioning for GitLab Runner, the open source project that is used to run your jobs and send the results back to GitLab.
---

## Background info

### What is GitLab Runner?

Suppose you're a developer or part of a team responsible for building, testing, and deploying your applications. In that case, GitLab Runner is the engine that enables you to run fast, scalable continuous integration pipelines on your on-premise infrastructure or the cloud. As the build agent that works in conjunction with GitLab CI/CD, the Runner executes your build and deployment jobs with minimal maintenance and overhead for your development teams.

GitLab Runner is one of the most feature-rich and flexible build agents. You can use GitLab.com hosted Runners or install the Runner on your on-premise Kubernetes clusters, RedHat OpenShift, Linux, macOS or Windows Servers, and IBM Z mainframes.

For those organizations hosting workloads on public clouds, you can install the Runner on virtual machines on any public cloud platform. For larger organizations, you can also take advantage of the Runner's autoscaling and fleet management capabilities on many cloud platforms, including Google Compute Engine, Microsoft Azure, Amazon Web Services, and Digital Ocean.

### What does GitLab Runner do?

- Polls a GitLab instance for CI/CD jobs to execute.
- Automatically runs GitLab pipeline CI/CD jobs using a local shell or container.
- Can run multiple jobs in parallel.
- Sends the results of job execution and uploads job artifacts to your GitLab instance.
- Automatically scales new Runners on demand for cost-effective build agent autoscaling that actually works.
- Provides a secure job execution environment.
- Provides a configurable solution to address complex security or policy compliance requirements.

### What does GitLab Runner Mean?

- Your day to day as a developer is easier and more productive.
- You reduce operational complexity
- Low maintenance CI/CD build platform.
- You get exceptional build speed and reliability
- Code gets to production faster and you can release more often
- Minimize downtime risk
- You can onboard new teams without friction

## General messaging and positioning

### Messaging

GitLab Runner is the multi-platform, autoscaling agent that can run GitLab CI/CD pipeline jobs on your on-premise infrastructure, on GitLab.com or a public cloud provider.

Run your jobs in an environment best suited to your team's workflows and needs, whether that is a Kubernetes cluster, a local shell, or Docker containers. You have the flexibility and control to solve your CI/CD process requirements with a simple to set up and operate, almost no maintenance solution.

GitLab Runner is a shell-based excecution engine that can take any script and run it.

If you can write it you can run it!

## Runner headline promises

Options for marketing and web content.

### Runner headline 1

GitLab Runner works alongside GitLab CI/CD to provide a quicker, easier, way to run jobs based on your specific runtime environment and hosting requirements.

### Runner headline 2

Use GitLab Runner to orchestrate your CI/CD pipelines and optimize workflow execution at any scale.

## Value Statements

### GitLab Runner benefits

- Lightweight, simple workload execution
- Highly scalable
- Flexible hosting
- Straightforward configurations
- No hassle setup for easy adoption

### GitLab Runner capabilities

- Flexible, efficient builds
  - Build parallelization to run multiple jobs concurrently
  - Run builds locally or in the cloud using Docker containers
  - Autoscale resources and provision runners on-demand
- Any language, any platform, any cloud
  - Runner is written in Go and distributed as a single binary without any other requirements.
  - Supports Bash and Windows PowerShell.
  - Works on GNU/Linux, macOS, and Windows (pretty much anywhere you can run Docker).
  - Allows for customization of the job running environment.
- Straightforward to adopt and scale as you onboard new teams
  - Easy to use and setup initially with support for Docker, Docker-SSH, Parallels, or SSH running environments.
  - Easy installation as a service for GNU/Linux, macOS, and Windows.

See a full list of [Runner features](https://docs.gitlab.com/runner/#features))

### How Runner works

- GitLab Runners can be installed almost anywhere, dedicated virtual machines (on-premise or public cloud), Kubernetes clusters, bare metal.
- GitLab Runner supports Docker containerization, so users can define a custom container environment to build, define, test and run their code.
- GitLab Runner implements different types of `executors` for running your builds for various use cases and scenarios. An executor refers to an environment or command processor on the host O/S that the Runner is able to use for running a job.
- GitLab and the Runners only communicate through an API using the https protocol, so the only requirement is that the Runner's host machine has network access to the GitLab instance.  DevOps teams have the flexibility to deploy and host the Runner in a configuration such that all source code is always within the organization's network.

### Personas

- Developers
- Development leads
- DevOps roles: Engineer, architect, manager
- IT managers
