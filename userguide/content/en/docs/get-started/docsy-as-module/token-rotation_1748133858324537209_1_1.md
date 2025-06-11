---
title: Token rotation
description: Operations proceses page for token rotation
canonical_path: "/handbook/security/customer-support-operations/workflows/token-rotation"
---

This page documents what to do when a token needs to be rotated (meaning one already existed).

## Rotating tokens

### For Zendesk API tokens

1. Navigate to the admin panel for the Zendesk instance in question:
   - [Zendesk Global](https://gitlab.zendesk.com/admin)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin)
1. Go to the Zendesk API option on the sidebar (under Apps and integrations > APIs)
1. Locate the existing entry for the token and delete it (click on it then click Delete)
1. Click the `Add API token` button at the top-right of the page
1. Enter an appropriate name (normally the link to the project using it)
1. Copy the API token generated
1. Put the token into place where needed

### For gitlab.com personal access tokens

1. Login to the gitlab.com user the token will be created from
1. Navigate to the [personal access tokens page](https://gitlab.com/-/user_settings/personal_access_tokens)
1. Sort through the list of existing tokens to locate the one you need to rotate
1. Click the swirling arrows (if you hover over it, it says `Rotate`) next to the correct token
1. Copy the API token generated
1. Put the token into place where needed

### For gitlab.com project access tokens

1. Navigate to the project iteself
1. Go to the `Access tokens` page (under Settings)
1. Sort through the list of existing tokens to locate the one you need to rotate
1. Click the swirling arrows (if you hover over it, it says `Rotate`) next to the correct token
1. Copy the API token generated
1. Put the token into place where needed

### For gitlab.com pipeline trigger tokens (as a regular user)

1. Login to the gitlab.com user the token will be created by
1. Navigate to the project iteself
1. Go to the `CI/CD` page (under Settings)
1. Expand the `Pipeline trigger tokens` section
1. Sort through the list of existing tokens to locate the one you need to rotate
1. Delete the existing token
1. Click the `Add new token` button at the top-rigth of the section
1. Enter an appropriate name:
   - If a Zendesk webhook, put the link to the webhook itself
   - If a Zendesk app, use the format `INSTANCE - NAME_OF_APP`
     - `INSTANCE` is the Zendesk instance itself (ex: Zendesk Global, Zendesk US Government)
     - `NAME_OF_APP` is the name of the app as Zendesk display it
   - If for a CI/CD job within the same project, put the name of the job
   - If for another project, put the link to the project
1. Copy the API token generated
1. Put the token into place where needed

### For gitlab.com pipeline trigger tokens (as a service bot)

1. Create a project access token for the project in question
1. Make note of the project's ID number
1. Use that API token to create a pipeline trigger token via the gitlab.com API

   ```bash
   curl --request POST \
     --header "PRIVATE-TOKEN: TOKEN_YOUR_COPIED" \
     --form description="APPROPRIATE_DESCRIPTION_HERE" \
     "https://gitlab.com/api/v4/projects/PROJECT_ID/triggers"
   ```

   - `TOKEN_YOUR_COPIED` is the project access token you copied
   - `APPROPRIATE_DESCRIPTION_HERE` is an appropriate description:
     - If a Zendesk webhook, put the link to the webhook itself
     - If a Zendesk app, use the format `INSTANCE - NAME_OF_APP`
       - `INSTANCE` is the Zendesk instance itself (ex: Zendesk Global, Zendesk
         US Government)
       - `NAME_OF_APP` is the name of the app as Zendesk display it
     - If for a CI/CD job within the same project, put the name of the job
     - If for another project, put the link to the project
1. Copy the API token generated
1. Put the token into place where needed

## Applying the new token

### For Zendesk apps

1. Navigate to the admin panel for the Zendesk instance in question:
   - [Zendesk Global](https://gitlab.zendesk.com/admin)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin)
1. Go to the Zendesk Support apps option on the sidebar (under Apps and integrations > Apps)
1. Locate the app in question and click on it
1. Locate the field that needs the API token in question
1. Put the token into that field
   - **NOTE** Do not populate or edit any other fields
1. Click the blue `Update` button at the bottom of the page

### For Zendesk webhooks

1. Navigate to the admin panel for the Zendesk instance in question:
   - [Zendesk Global](https://gitlab.zendesk.com/admin)
   - [Zendesk Global Sandbox](https://gitlab1707170878.zendesk.com/admin)
   - [Zendesk US Government](https://gitlab-federal-support.zendesk.com/admin)
   - [Zendesk US Government Sandbox](https://gitlabfederalsupport1585318082.zendesk.com/admin)
1. Go to the Webhooks option on the sidebar (under Apps and integrations > Actions and webhooks)
1. Locate the webhook in question
1. Click the 3 vertical dots to the far-right of the webhook in question
1. Click the `Edit` option
1. Click the `Next` link at the bottom-right of the page
1. Replace the old token with the new token where needed
1. Click the blue `Update` button at the bottom-right of the page

### For gitlab.com CI/CD variables

1. Navigate to the project iteself
1. Go to the `CI/CD` page (under Settings)
1. Expand the `Variables` section
1. Sort through the list of existing variables to locate the one you need to replace
1. Click the pencil icon at the far-right of the variable (if you hover over it, it says `Edit`)
1. Put the new token in the `Value` field
1. Click the blue `Save changes` button

### For gitlab.com webhooks

Due to being unable to edit the value of masked sections in webhooks, we have to "delete and create" it to rotate a token

1. Navigate to the project iteself
1. Go to the `Webhooks` page (under Settings)
1. Locate the webhook in question and copy all relevant information from it (the URL, what it triggers on, etc.)
1. Delete the webhook in question
1. Re-create the webhook using the revelant information and the new token

## OAuth Integrations

### Integrating a new OAuth Application into Zendesk

Adding an OAuth integration requires Owner access to Zendesk.

After an access request is approved: 

1. Remove the Okta login requirement for the integration user
2. Log in as the integration user
3. Perform the OAuth flow as directed by the application.
   - Verify the scopes requested are documented and approved in the access request. If they are not, STOP.
4. Log out as the integration user
5. Restore Okta login requirements for the integration user.
