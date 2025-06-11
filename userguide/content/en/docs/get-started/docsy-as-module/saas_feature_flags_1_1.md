---
title: Enabling feature flags for projects or groups on GitLab.com
category: GitLab.com
description: "Workflow to follow when customers request for feature flags to be enabled on theire GitLab.com projects or groups"
---

## Overview

This workflow covers cases where a customer requests support to enable [feature flags](https://docs.gitlab.com/ee/development/feature_flags/controls.html) on their GitLab.com groups or projects.

Enabling feature flags can be done via ChatOps. Before you can use ChatOps, you will need to [request access](https://docs.gitlab.com/ee/development/chatops_on_gitlabcom.html#requesting-access).

## Process

Once the request has been received via a support ticket:

1. Add the customer's Account Owner/Customer Success Manager found in ZendDesk as a CC on the ticket so that they are aware of the request.
1. If the feature flag issue does not already say it can be enabled for customers, comment on the feature flag issue to confirm that the product and development teams are comfortable with Support turning on the feature flag for customers.
1. Once enabled, add a comment on the feature flag issue with the group or project ID and a link to the ticket.

## ChatOps

To enable a feature flag using ChatOps, follow [the process](https://docs.gitlab.com/ee/development/feature_flags/controls.html#process) described in the Feature Flags documentation.
