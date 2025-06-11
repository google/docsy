---
title: "Workspaces"
status: ongoing
creation-date: "2022-11-15"
authors: [ "@vtak" ]
coach: "@grzesiek"
approvers: [ "@michelle-chen", "@adebayo_a" ]
owning-stage: "~devops::create"
participating-stages: []
toc_hide: true
no_list: true
---

{{< engineering/design-document-header >}}

## Introduction

A common obstacle faced by developers when first contributing to a project is the setup of their local development environment. The time-consuming process of managing interrelated dependencies and fixing version compatibility issues can be demotivating, especially for those who only contribute occasionally or switch between multiple projects frequently. In complicated environments, development teams may also impose restrictions, authentication credentials, build procedures, and standards that add to the fragile nature of the development environment.

At the end of the day, developers want to spend less time managing their development environment and more time contributing high-quality code. And at GitLab, our mission is to ensure everyone can contribute. With Workspaces, our goal is to eliminate the responsibility of configuring and maintaining a local development environment.

## Objectives

See our [Workspaces direction page](https://about.gitlab.com/direction/create/remote_development/workspaces/) for more information.

## Glossary

1. **GitLab VS Code fork**: An internal fork of the VSCode project.
1. **Web IDE**: An IDE built on top of GitLab VS Code fork by adding GitLab context.
This IDE runs purely in the browser.
1. **GitLab VS Code fork for Workspaces**: An IDE built on top of GitLab VS Code fork by applying patches making it suitable to use in Workspaces.
This IDE runs a server and an optional client which is used to connect remotely.
1. **GitLab Workflow extension**: An extension which adds GitLab features to VS Code.
1. **GitLab Agent for Kubernetes(agentk)**: A component for solving any GitLab<->Kubernetes integration tasks.
1. **GitLab Agent for Workspaces(agentw)**: A component for solving any GitLab<->Workspace integration tasks.
1. **GitLab Agent Server(KAS)**: A server running alongside GitLab Rails application to facilitate connections between different GitLab Agents(agentk, agentw) and GitLab and vice versa.

## Overview

Each workspace is run as a group of user provided containers in a Pod in Kubernetes through an integration with GitLab Agent for Kubernetes(agentk).
We inject an IDE(e.g. GitLab VS Code fork for Workspaces) in each Pod. We aim to be IDE agnostic.
The workspace can either be accessed through GitLab Workspaces Proxy deployed in the user's Kubernetes cluster
or through the bi-directional gRPC tunnel established by the GitLab Agent for Workspaces(agentw)
injected in the workspace.

## Architecture

See [Architecture for Kubernetes setup](./architecture_kubernetes_setup.md) for detailed implementation details.

## Decisions

1. [001: Configuration format to use](./decisions/001_configuration_format_to_use.md)
1. [002: Provision compute and storage for a workspace](./decisions/002_provision_compute_and_storage.md)
1. [003: Authorizing user to create and access a workspace](./decisions/003_authorizing_user_to_create_and_access_workspace.md)
1. [004: Authentication of user traffic to access a workspace](./decisions/004_authentication_of_user_traffic_to_access_workspace.md)
1. [005: Explicitly define the user/group ID of the containers at runtime](./decisions/005_explicitly_set_user_group_id_of_containers.md)
1. [006: Automatic termination of a workspace](./decisions/006_automatic_termination_of_workspace.md)
1. [007: Create workspaces from private projects](./decisions/007_create_workspace_from_private_projects.md)
1. [008: Use SSH to access non-HTTP services running in a workspace](./decisions/008_use_ssh_to_access_non_http_services.md)
1. [009: Allow mapping of GitLab Agent for Kubernetes(agentk) to groups](./decisions/009_allow_mapping_of_agentk_to_groups.md)
1. [010: Extensions marketplace for GitLab VS Code fork for Workspaces](./decisions/010_extensions_marketplace_for_vscode.md)
1. [011: Integrate GitLab Duo features inside a workspace](./decisions/011_integrate_duo_features_inside_workspace.md)
1. [012: Automatic suspension of a workspace](./decisions/012_automatic_suspension_of_workspace.md)
1. [013: Create workspaces from private container images](./decisions/013_create_workspace_from_private_container.md)
1. [014: Default container image and configuration for Workspaces](./decisions/014_default_container_image_and_configuration.md)
1. [015: Allow mapping of GitLab Agent for Kubernetes(agentk) to GitLab Cluster](./decisions/015_allow_mapping_of_agentk_to_gitlab_cluster.md)
1. [016: Allow users to run sudo commands inside a workspace](./decisions/016_allow_users_to_run_sudo_commands.md)
1. [017: Allow users to build and run containers inside a workspace](./decisions/017_allow_users_to_build_and_run_containers.md)
1. [018: Remove GitLab Workspaces Proxy to simplify setup](./decisions/018_remove_gitlab_workspaces_setup.md)

## Helpful Links

- [Workspaces direction](https://about.gitlab.com/direction/create/remote_development/workspaces/)
- [Workspaces | Category Strategy epic](https://gitlab.com/groups/gitlab-org/-/epics/7419)
- [Workspaces | Market analysis](https://gitlab.com/groups/gitlab-org/-/epics/8131)
- [Create Remote Development Group YouTube playlist](https://www.youtube.com/playlist?list=PL05JrBw4t0KrRQhnSYRNh1s1mEUypx67-)
