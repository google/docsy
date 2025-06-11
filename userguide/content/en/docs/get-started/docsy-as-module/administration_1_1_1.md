---
title: Administration
description: Support Operations documentation page for Zendesk app administration
canonical_path: "/handbook/support/readiness/operations/docs/zendesk/apps/administration"
---

## Change management

Keep in mind, all change management should be stemming from an issue, first and
foremost.

### Creating a new app

**NOTE** You should have really done this in the corresponding sandbox before
actually installing it into production!

Creating a brand new app for a Zendesk instance has 4 steps to get it from the
starting state of "nothing" to the end state of "live and managed by the sync
repos":

- [Create the project](#create-the-project)
- [Install it in Zendesk](#install-it-in-zendesk)
- [Update the source code](#update-the-source-code)
- [Setup the CI/CD](#setup-the-cicd)

#### Create the project

Creating a new app is a bit of a special process, as we don't have "all the
required information" to get everything in place at the start (namely the
application's ID).

As such, you will start be making the project itself. For information on doing
this, see [Project Setup](../../../policies/project_setup) to get you started.

For the code itself, you need two main components:

- The sync code
- The app code

For the sync code, it is *highly* recommended to copy it from an existing app.
As an example, if making a new Zendesk Global application, it is recommended
that you navigate to another Zendesk Global application's project, such as
[GitLab Super App](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/gitlab-super-app),
and copy the following to your new project:

- The `.gitlab` folder
- The `bin` folder
- The `data` folder
- The `lib` folder
- The `.gitignore` file
- The `.gitlab-ci.yml` file
- The `.rubocop.yml` file
- The `.ruby-version` file
- The `Gemfile` file
- The `Gemfile.lock` file

This will get you the nearly all the way done with the "sync code" part of your
new Zendesk application project. There will be some components to change in the
copied code, but this will occur after the new app has been installed into the
corresponding Zendesk instance.

With the project created and the initial code added, you are good to move onto
the next step.

#### Install it in Zendesk

Next, we need to install your new app into the Zendesk instance. For this, you
first need to *package* your application. This is done by combining all the
"app code" into a zipfile. To accomplish this, you need to access the app
project's source code via CLI and zip the content up. This might look something
like:

```bash
cd ~/dev/support-readiness/zendesk-global/apps/star
zip -r data/application.zip assets manifest.json translations
```

This will produce the zipfile `application.zip` in the `data` folder of your
local repository (which git will ignore thanks to the .gitignore file you copied
earlier).

With this in hand, you need to install the app into Zendesk. To do this, open
up the admin page of your corresponding Zendesk instance
([Global](https://gitlab.zendesk.com/admin) or
[US Government](https://gitlab-federal-support.zendesk.com/admin)), click
`Apps and integrations` on the left-hand side, and then click
`Zendesk Support apps`. On this page, you will want to click
`Upload private app` in the top-right corner of the page. On the page that is
brought up, you need to give you app a name. This name should be something that
makes it clear what the app is for (and should match your project's name). You
will then click `Choose File` to navigate your filesystem and select the zipfile
you made previously. After doing so, click the blue `Upload` button.

A pop-up modal should appear concerning creating a new app in Zendesk that
details some warnings and messages. Read through it and click the blue `Upload`
button once you are ready to proceed.

After your app is uploaded, you will be brought to the settings page for your
newly installed app. This is where you can adjust the title (name) of the app,
set the values for any parameters, enable (and set) role restrictions, and
enable (and set) groups restrictions. After filling all of that out, click the
blue `Install` button.

With all of that done, your app is installed, but we are not quite done yet!

#### Update the source code

Now that the app is installed, we need to update our source code a bit so we can
ensure the app utilizes our sync code properly. For this, we will need 3 items:

- The path of the source code's project
- The source code's project's ID
- The Zendesk app's ID

The path of the source code's project is simply the values of the project's URL
after 'gitlab.com/' So for a project like
[STAR](https://gitlab.com/gitlab-support-readiness/zendesk-global/apps/star),
the path would be `gitlab-support-readiness/zendesk-global/apps/star`.

With that in hand, you need the source code's project's ID. This can be found by
navigating to the source code's project, clicking the three vertical dots at the
top-right of the page, and clicking `Copy project ID`.

For the final piece of information, we need to get the Zendesk app's ID value.
To do this, we utilize the Zendesk API endpoint
[List Owned Apps](https://developer.zendesk.com/api-reference/ticketing/apps/apps/#list-owned-apps),
since you are the owner of the app (having been the one that installed it).
You'll need to review the output to locate your app, but if using something like
[jq](https://jqlang.github.io/jq/), you could do something like this:

```bash
curl -ss -X GET -H 'Content-Type: application/json' \
  -u $ZD_USERNAME/token:$ZD_TOKEN \
  https://gitlab.zendesk.com/api/v2/apps/owned \
  | jq '.apps[] | select(.name=="APP_NAME") | .id'
```

Replacing `APP_NAME` with the name you gave the app during installation.

With those three pieces of information handy, you need to modify the source
code a bit.

Create a merge request containing the following changes:

- On the `lib/app/client.rb` file, modify the `app_id` function to ensure the
  code uses your Zendesk app's ID instead of the one you copied earlier
- On the `lib/app/gitlab.rb` file, modify the `path` function to use the path of
  the source code's project instead of the one you copied earlier
- On the `lib/app/gitlab.rb` file, you need to modify the following functions to
  use the source code's project's ID instead of the one you copied earlier
  - `create_or_update_tag`
  - `create_tag`
  - `update_tag`

#### Setup the CI/CD

Once that merge request has been successfully merged into the default branch,
you will then configure any needed CI/CD variables in the project's settings. To
do that, hover over `Settings` on the project and click `CI/CD`. You will then
navigate to the `Variables` section and click `Expand`. For each variable you
need (determined by your code and setup), you need to click the `Add variable`
button to bring up a sub-menu. When doing these, ensure you uncheck the
`Protect variable` box, uncheck the `Mask variable` box, and check the
`Expand variable reference` box. Once you have entered your `Key` and `Value`,
click the blue `Add variable` button.

The final step will be creating the pipeline schedule this will use.

To setup a pipeline schedule, hover over `Build` and click `Pipeline schedules`.
Click the blue `Create a new pipeline schedule` button (for the first schedule)
or the blue `New schedule` button (for subsequent ones). For the description,
enter a description that states what it is doing (syncing to Zendesk, posting in
Slack, etc.). For the Interval Pattern, enter a cron-style string that reflects
when it will run ([crontab.guru](https://crontab.guru/) can help with that). For
the Cron timezone, use `UTC` (for Zendesk Global) or
`Pacific Time (US & Canada)` (for Zendesk US Government). For Select target
branch or tag, use `master` (this is our default). If you have any variables
dependent on this specific pipeline schedule, you can enter them here. Make sure
the `Activate` checkbox is checked, and then click the blue
`Create pipeline schedule` button.

With all that done, your new app is installed and part of our sync repos!

**NOTE** You probably need to update some form of our handbook for this new
project, so make sure that gets done!

### Updating an existing app

Updating your app is considerably easier than creating a new one. Simply change
change the code in the source project and it will occur via the sync repo.

The most important thing to remember to is to **always** update the app's
version in the `manifest.json` file. To do this, locate the attribute `version`
in the file and add 1 to the value after the decimal. As an example, if the
version was `1.9`, you would change it to `1.10`.

### How to deactivate a Zendesk App

**NOTE** To prevent the Zendesk admin app's page from becoming chaotic, we do
not "disable" apps in 99% of situations. If you believe you are in a situation
where you need to deactivate an app without uninstalling it, please speak to the
greater Support Readiness team.

If you are in the *very rare* situation that warrants deactivating an app, you
will want to open up the admin page of your corresponding Zendesk instance
([Global](https://gitlab.zendesk.com/admin) or
[US Government](https://gitlab-federal-support.zendesk.com/admin)), click
`Apps and integrations` on the left-hand side, and then click
`Zendesk Support apps`. On this page, locate the app in question, hover over it,
click the down arrow that appears, and click the slider under `Enabled`. Do note
this does not stop the app from syncing or being present on the Zendesk
instance.

No changes to the source code are required for this.

### How to uninstall a Zendesk App

To uninstall an app from a Zendesk instance, you will need to do two tasks:

- Archive the source code project of the app
- Uninstall the app in Zendesk

You will always want to start by archiving the source code project of the app,
as this will prevent potential sync runs from being attempted. To archive the
project, navigate to the project itself, click on `Settings` on the left-hand
side, and then click on `General`. In the `Project description` box, make sure
to put something like `DEPRECATED - ISSUE_LINK` (replacing `ISSUE_LINK` with the
link to the issue that brought this change about) and click the blue
`Save changes` button. After doing so locate the `Advanced` section and click
`Expand`. You will then locate the `Archive project` section and click the blue
button (and follow the instructions on the pop-up modal).

After you have archived the source code's project, you will then uninstall it
from the Zendesk instance. To do so, you will want to open up the admin page of
your corresponding Zendesk instance ([Global](https://gitlab.zendesk.com/admin)
or [US Government](https://gitlab-federal-support.zendesk.com/admin)), click
`Apps and integrations` on the left-hand side, and then click
`Zendesk Support apps`. On this page, locate the app in question, hover over it,
click the down arrow that appears, and click `Uninstall`. This will bring up a
pop-up modal asking you to confirm the action. Click the blue `Uninstall` button
to finalize the action.

### How to reinstall a previously uninstalled app

While rare, there might come a time where a previously uninstalled app needs to
installed once more. In this situation, you need to follow everything within
[Creating a new app](#creating-a-new-app), **except** for the "Create the
project" step. Instead of creating the project, you simply need to unarchive the
previously archived project. To do this, navigate to the project itself,
click on `Settings` on the left-hand side, and then click on `General`. Clear
out `Project description` box, and click the blue `Save changes` button. After
doing so locate the `Advanced` section and click `Expand`. You will then locate
the `Unarchive project` section and click the blue button (and follow the
instructions on the pop-up modal).

After doing that, following the remaining steps detailed in
[Creating a new app](#creating-a-new-app).

### Understanding Zendesk Apps

Before you can start creating and editing apps in Zendesk, it is important to
understand the ins and outs of both Zendesk Apps and
[Zendesk Apps framework](https://developer.zendesk.com/documentation/apps/app-developer-guide/using-the-apps-framework/).

There is a lot to this, so the Zendesk documentation is the best resource you
have to learn the various ins and outs. This training documentation will cover
what is viewed at "the most important" parts, but it is highly recommended you
read and reference the
[Zendesk developer documentation](https://developer.zendesk.com/documentation/apps/app-developer-guide/getting_started/)
as often as possible.

#### ZAT

ZAT, or Zendesk App Tools, is a ruby gem that makes working with Zendesk Apps
locally considerably easier. It is highly recommended you install it on your
computer:

```bash
gem install rake
gem install zendesk_apps_tools
```

To update it:

```bash
gem update rake
gem update zendesk_apps_tools
```

Sometimes on Mac terminal, you will get write permission error. You may use:

```bash
sudo gem update rake
sudo gem update zendesk_apps_tools
```

Note: ZAT is having issues with Ruby version `3.0.0 and plus`. You'll likely
need to use old stable versions like `2.6.3p62`

#### manifest.json

This file is used to configure you application. As such, it is very important
and vital it is accurate.

The common configuration settings are:

| Setting          | What it does | Required? |
|------------------|--------------|:---------:|
| name             | Specifies the name of the app | Y |
| author           | Specifies the author of the app | Y |
| version          | Specifies the app version | Y |
| frameworkVersion | Specifies the framework version to use | Y |
| location         | Specifies where the app appears | Y |
| defaultLocale    | Specifies the locale of the app | Y |
| parameters       | The parameters to pass to the app during installation | N |
| domainWhitelist  | The domains to allow use of secure parameters | N |
| private          | Specifies whether the app can be only be installed in the app developer's account or not | N |

#### Location

This setting determines where the app will appear and run. This is a very
important setting. The first setting determines the product type location, and
within that setting you can specify many other configurations, including the
physical location the app will appear in. For the product type location, we
always use `support`.

The physical locations are as follows:

| String                 | Location/Purpose |
|------------------------|------------------|
| `ticket_sidebar`       | The right side of all ticket view pages |
| `new_ticket_sidebar`   | The right side of all new ticket pages |
| `ticket_editor`        | A button on the ticket editor box |
| `nav_bar`              | An icon on the left-side navigation bar |
| `top_bar`              | An icon on the right side of the top menu |
| `user_sidebar`         | The right side of all user view pages |
| `organization_sidebar` | The right side of all organization view pages |
| `background`           | The app runs in the background and does not display anywhere |
| `modal`                | Used when the app creates modals |

Within the physical location settings, you can include more configuration
settings, with the most common being:

| String     | What it does | Variable type |
|------------|--------------|---------------|
| `autoHide` | Tells the app to auto-collapse on first load | Boolean |
| `autoLoad` | Tells the app to automaticall local (defaults to true) | Boolean |
| `signed`   | Specifies whether or not to use signed URLs | Boolean |
| `url`      | The URL of the page to display in the iframe of the app | String |
| `size`     | The initial app size (configure this in the app instead) | JSON |

As an example, to have an app load "<https://google.com>" automatically in the
ticket sidebar with a starting height of 200px, your configuration block would
look like this:

```json
"location": {
  "support": {
    "ticket_sidebar": {
      "autoLoad": true,
      "url": "https://google.com/",
      "size": {
        "height": "200px"
      }
    }
  }
}
```

As another example, to have your app load in both the user and organization
pages, rendering the locale `assets/iframe.html` file, you would do this:

```json
"location": {
  "support": {
    "user_sidebar": "assets/iframe.html",
    "organization_sidebar": "assets/iframe.html",
  }
}
```

#### Parameters

This is where you would define variables you want the app to use during
installation.

#### Domain whitelists

If your app is using secure parameters and you plan to make requests outside of
Zendesk, you must whitelist the domains in question. Each parameter is a hash
that contains the following:

- `name`: the name of the parameter
- `type`: the type of parameter
- `secure`: ensures users cannot see the variable value when making HTTP
   requests (you should *always* use this)
- `require`: specifies if the parameter is required for installation

As an example, to use two required parameters (`param1` and `param2`), both of which are text parameters in a secure way, you would do the following:

```json
"parameters": [
  {
    "name": "param1",
    "type": "text",
    "secure": true,
    "required": true
  },
  {
    "name": "param2",
    "type": "text",
    "secure": true,
    "required": true
  }
]
```

During the installation of the app, Zendesk will ask you to give the values for
these parameters. To utilize this in the code of your app, you will use this:

`{{setting.NAME_OF_PARAMETER}}`

Where `NAME_OF_PARAMETER` is the name you gave the parameter in the
manifest.json file.

#### init

To create a client instance of the ZAF (Zendesk App Framework) client, you need
to ensure the following is present in the javascript of your app:

```javascript
var client = ZAFClient.init();
```

#### App resizing

To resize the app during runtime, you would use the `invoke` class, specifying
you wish to invoke the `resize` function. This is done like so:

```javascript
// First line shown to clarify you use the ZAF client object to do this
var zafclient = ZAFClient.init();
zafclient.invoke('resize', { width: '100%', height: '100px' });
```

### Required javascript library

To utilize the ZAT, you must include the following javascript in your app's
HTML file(s):

```html
<script src="https://static.zdassets.com/zendesk_app_framework_sdk/2.0/zaf_sdk.min.js"></script>
```

#### Getting metadata

To get metadata and use it in your app, you need to use the ZAF client's `get`
function. This takes an array of values to get from the ticket metadata, which
you use in a function.

As an example, to get the ticket requester's name and the ticket's organization,
and then log them to the console, you would do the following:

```javascript
// First line shown to clarify you use the ZAF client object to do this
var zafclient = ZAFClient.init();
zafclient.get(['ticket.requester.name', 'ticket.organization']).then(function(data) {
  console.log("Ticket requester name: " + data['ticket.requester.name']);
  console.log("Ticket organization: " + data['ticket.organization']);
});
```

As another example, to get the ticket's due date and the due date notes (a
custom ticket field) and then log them to the console, you would do the
following:

```javascript
// First line shown to clarify you use the ZAF client object to do this
var zafclient = ZAFClient.init();
zafclient.get(['ticket.customField:due_date', 'ticket.customField:custom_field_360017383799']).then(function(data) {
  console.log("Due date": + data['ticket.customField:due_date']);
  console.log("Due date notes:" + data['ticket.customField:custom_field_360017383799']);
});
```

#### Making requests

Your app might need to make requests, whether they be "internal" (i.e. within
Zendesk itself) or external. To do this, we use the `request` function of the
client object.

The format of this is *very* close to that of making
[AJAX requests](https://api.jquery.com/jquery.ajax/) in jQuery. The format you
will normally use is:

```javascript
// First line shown to clarify you use the ZAF client object to do this
var zafclient = ZAFClient.init();
zafclient.request({
  method: 'REQUEST_TYPE',
  url: 'URL_TO_USE',
  contentType: 'CONTENT_MEDIA_TO_SEND',
  data: DATA_OBJECT,
  secure: BOOLEAN,
  headers: HEADERS_OBJECT
}).then(function(data) {
  // do stuff
});
```

The exact parameters in the request will vary from request to request.

As an example, if you wanted to update the due date of a ticket, you might do:

```javascript
// First line shown to clarify you use the ZAF client object to do this
var zafclient = ZAFClient.init();
zafclient.request({
  method: 'PUT',
  url: '/api/v2/tickets/123456.json',
  contentType: 'application/json',
  data: JSON.stringify({
    due_at: new Date('2021-01-01').toISOString()
  }),
  secure: BOOLEAN,
  headers: HEADERS_OBJECT
}).then(function(data) {
  console.log('Due date updated to 2021-01-01');
});
```

As another example, if you wanted to make a GET request to gitlab.com to find
information about user ID 987654, using a secure parameter from app
installation, you might do:

```javascript
// First line shown to clarify you use the ZAF client object to do this
var zafclient = ZAFClient.init();
zafclient.request({
  method: "GET",
  url: 'https://gitlab.com/api/v4/users/987654?private_token={{setting.GitLab_token}}',
  secure: true
}).then(function(data) {
  console.log('User email: ' + data.email);
});
```

### Testing an app

There are two ways to test a Zendesk app before you put it into production:

#### Locally

**Note**: This cannot be done if your app is using secure parameters. Instead,
you would need to install the app into the Sandbox and test from there.

To test your app locally, cd into the app directory on your local computer and
then run the `zat server` command. This will start up a ZAT server on your
computer. Once it has booted up, go to a Zendesk URL and put `?zat=true` at the
end. This will now load the apps from your local computer, allowing you to test
out the app locally.

#### Via the Sandbox

If your app is using secure parameters, you will need to test via the Sandbox
instead.
