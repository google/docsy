---
title: "Ownership and boundaries - Editor Extensions"
description: This page provides clarity and a clear expectation between all parties who author/maintain features in editor extensions systems.
---

## Context

Multiple groups contribute to features exposed through our editor extensions. This can create ambiguity regarding ownership and maintenance responsibilities. This document outlines an agreed-upon approach for consistent ownership attribution, aligning expectations and improving efficiency among all involved parties.

Owning a system part means being responsible for feature development, bug-fixes, and general maintenance of the affected part. Ideally, a team has maintainers in the system part they own to be more independent of the editor extensions team, but this is not a strict requirement.

## System overview

Currently, the external features being integrated via our Editor Extensions follow this architecture:

* UI component built on [gitlab-ui](https://gitlab.com/gitlab-org/gitlab-ui)
* Integration with Editors: Webview
  * Webview is a web page shown in the editor
* Integration with Editors: Business logic
  * Business logic represents the editor-specific integration (e.g. TypeScript and VS Code Extension API, Kotlin and JetBrains Plugin API)

## Legacy Ownership model

Currently used by **Duo Chat**:

| System part | Group responsible |
| ------ | ------ |
|    [Chat UI component in `gitlab-ui`](https://gitlab.com/gitlab-org/gitlab-ui/-/tree/main/src/components/experimental/duo/chat)     |   **AI-Powered:Duo Chat** group.     |
|    VS Code - [Chat Webview](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/tree/main/webviews/vue2/gitlab_duo_chat) (web page)    |     **AI-Powered:Duo Chat** group with support from **Create:Editor Extensions** group     |
|    VS Code - [Chat business logic](https://gitlab.com/gitlab-org/gitlab-vscode-extension/-/tree/main/src/common/chat?ref_type=heads) (extension)     |  **Create:Editor Extensions** group      |
|   JetBrains - [Chat Webview](https://gitlab.com/gitlab-org/editor-extensions/gitlab-jetbrains-plugin/-/tree/main/webview) (web page) |   **AI-Powered:Duo Chat** group with support from **Create:Editor Extensions** group      |
| JetBrains - [Chat business logic](https://gitlab.com/gitlab-org/editor-extensions/gitlab-jetbrains-plugin/-/tree/main/src/main/kotlin/com/gitlab/plugin/chat) (plugin) | **Create:Editor Extensions** group  |

## Ownership model for features implemented in Language Server

Currently used by **Duo Workflow** and soon to be used by **Duo Chat**.

| System part | Group responsible |
| ------ | ------ |
|    UI Component     |   Group owning the UI component     |
|    LS webview & plugin    |    Group owning the UI component with support from **Create:Editor Extensions** group  |
|    VS Code integration     |    **Create:Editor Extensions** group    |
|   JetBrains integration |    **Create:Editor Extensions** group    |
| Visual Studio integration | **Create:Editor Extensions** group |

## Process of notifying others

* When a team starts working on a feature that will require Editor Extensions support:
  * PM/EM will notify **Create:Editor Extensions** group's PM/EM - this allows the team to forecast the capacity necessary to support in the near future
* Feature implementation
  * Legacy ownership model (Duo Chat implemented separately in all extensions)
    * When the UI of the feature is ready:
      * the authoring team opens an integration MR
      * The **Create:Editor Extensions** group will assign an engineer to take over the MR and complete integration
    * Language Server ownership model
      * When the Language Server change is done, the feature team will notify **Create:Editor Extensions** group and they'll integrate the language server change to the editor extensions.
