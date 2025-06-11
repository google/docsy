---

title: "Postman"
description: "Guidelines and best practices for using Postman"
---

<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

## Postman Best Practices

## What is Postman?

[Postman](https://postman.com) is a great tool which helps developers run requests against HTTP APIs during development and testing to accelerate R&D when creating API based integrations.

## Best practices for sharing API credentials

### Environments and API Credential Sharing

Postman offers functionality for sharing variables using [Environments](https://learning.postman.com/docs/sending-requests/managing-environments/).

Clearly usage of this feature comes with some risks such as credential leakage. Unfortunately there's no way to share an environment without exposing the variables to the user. Because of this, the recommended approach is to **never** share Postman environments that contain production credentials.

If you have to use production credentials in an environment, that's fine but keep them out of the shared workspaces. For all other non-production environments, you can share viewer access to those environments so that they can be quickly and easily used by other devs.

The [Postman docs](https://learning.postman.com/docs/sending-requests/managing-environments/#working-with-environments-as-a-team) contain more guidance on how to manage environments in a team.
