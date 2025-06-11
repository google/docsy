---
title: Apps
description: Operations workflow page for Zendesk apps
canonical_path: "/handbook/security/customer-support-operations/workflows/zendesk/apps"
---

{{% alert title="Note" color="primary" %}}

All app creatrions are handled via an ad-hoc deployment.

All app updates are handled via a standard deployment.

{{% /alert %}}

All our apps are handled via the deployment cycle. This means updates traditonally are only applied on the first of each month.

## Creating a new app

Creating a new app is a more involved process. For this, you will:

1. Setup the project (see the [project setup workflow](../gitlab/project-setup) for more details)
1. Install the app in the sandbox Zendesk
1. Install the app in the production Zendesk
1. Setup the scheduled pipeline for the project

## Updating an app

Updating an app is done by updating the source code of the app.

You should also do this in a way that creates a MR. Said MR should always be peer reviewed before merging (the MR should enforce this).

## Deactivating an app

Deactivating an app requires a very manual process. When deactivating an app, you must:

1. Deactivate the app in the Zendesk instance
   1. Navigate to the Zendesk instance's admin center
   1. Navigate to `Apps and integrations` > `Apps` > `Zendesk Support apps`
   1. Hover over the app in question
   1. Click the gear icon
   1. Click the slider under `Enabled`
1. Deactivate the scheduled pipeline for the app
   1. Navigate to the app project
   1. Go to its scheduled pipelines
   1. Click the button to assume ownership of the scheduled pipeline
   1. Click the icon to edit it
   1. Uncheck the box next to `Activated`
   1. Click `Save Changes`

## Packaging an app

This is done by combining all the "app code" into a zipfile. To accomplish this, you need to access the app project's source code via CLI and zip the content up. This might look something like:

```bash
cd ~/dev/support-readiness/zendesk-global/apps/star
zip -r data/application.zip assets manifest.json translations
```

This will produce the zipfile `application.zip` in the `data` folder of your local repository (which git will ignore thanks to the .gitignore file you copied earlier).

## Exception deployment

Some changes, such as bug fixes, warrant an immediate deployment. 

To perform an exception deployment for an app, navigate to the app project in question, go to the scheduled pipelines page, and click the play button. This will trigger a sync job for the app.
