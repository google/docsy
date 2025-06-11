<h1>Triggered site builds</h1>

When the site repository is separate from the data repository, making a change to the data will *not* cause those changes to appear on the site. This is because the change to the data only triggers a data rebuild, but the site will not change until it is rebuilt. Out of the box, the only way to rebuild the site is to change a file in the site repository.

This means that, in order to see their updated data on the site, data managers must change a site file to trigger a site build. To avoid this hassle, we recommend that you automate this process. There are two ways to automated the process:

1. Automatically trigger a site build when data changes
2. Perform scheduled builds on a nightly basis

We recommend the first option. Both are detailed below.

## 1. Automatically trigger a site build when data changes

<iframe width="560" height="315" src="https://www.youtube.com/embed/OBbIhiiy9ik" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Creating an access token

1. Create a personal access token (classic) described in [this official GitHub documentation](https://help.github.com/en/github/authenticating-to-github/creating-a-personal-access-token-for-the-command-line#creating-a-token). Notes:
    * Make sure you set up a 'classic' token, not a 'fine-grained' token.
    * Select the `repo` permission, as indicated in those instructions.
    * Save the token somewhere private.
1. Copy the access token so that you can paste in the next steps.

### Adding the access token as a "secret"

1. Go to the *site repository*.
1. Under the repository name, click "Settings".
1. In the left sidebar, click "Secrets and variables".
1. Click "Actions"
1. Click "New repository secret".
1. Under "Name", type the following (case-sensitive): `token`
1. Under "Value", paste in the access token you copied earlier.
1. Click the green "Add secret" button.

Then repeat this for the data repository, as follows:

1. Go to the *data repository*.
1. Under the repository name, click "Settings".
1. In the left sidebar, click "Secrets and variables".
1. Click "Actions"
1. Click "New repository secret".
1. Under "Name", type the following (case-sensitive): `token`
1. Under "Value", paste in the access token you copied earlier.
1. Click the green "Add secret" button.

### Configuring the automatic rebuild

1. In the list of files in the *data repository*, click on `.github/workflows`.
1. Click on `deploy-to-staging.yml`.
1. Click the pencil to edit the file.
1. Make changes to the file by following the instructions in the notes.
1. Towards the right, click "Start commit"
1. Select "Create a new branch for this commit and start a pull request."
1. Beneath this, click "Propose changes".
1. Click on the green "Create pull request" button.
1. Wait a moment to see the message that says "Test PRs / test (pull_request) - in progress"
1. Wait until you see "All checks have passed". This takes about 5 minutes.
1. Click on the green "Merge pull request" button.

## 2. Perform scheduled builds on a nightly basis

Alternatively, you can instead set up scheduled nightly builds. This is easier to setup, but is not preferred, because of the 24 hour delay before changes become visible on the site.

### Configuring the scheduled build

1. In the list of files in the *site repository*, click on `.github/workflows`.
1. Click on `deploy-to-staging.yml`.
1. Click the pencil to edit the file.
1. Uncomment the line that says `schedule:` and also uncomment the `cron` line below it. To "uncomment" a line simply remove the `#` character, making no other changes.
1. Towards the right, click "Start commit"
1. Select "Create a new branch for this commit and start a pull request."
1. Beneath this, click "Propose changes".
1. Click on the green "Create pull request" button.
1. Wait a moment to see the message that says "Test PRs / test (pull_request) - in progress"
1. Wait until you see "All checks have passed". This takes about 5 minutes.
1. Click on the green "Merge pull request" button.
