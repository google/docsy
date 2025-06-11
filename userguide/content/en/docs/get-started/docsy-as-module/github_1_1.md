<h1>Github and automated tests</h1>

<iframe width="560" height="315" src="https://www.youtube.com/embed/vTel8Ya4MO4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Whatever service you choose for automation, you will need to enable the "hooks" in your Github repositories so that the automated testing will happen. The goal is for automated tests to run every time a "pull request" is created. This way, if the pull request would have broken something, you will know in advance.

The procedure is the same for both the site repository and the data repository:

## Initial pull-requests

First you will need to have created any pull request and merged it. You can skip this part if you have already created a pull request and merged it in both repositories.

1. Go to the repository in GitHub.
1. Go to any file in the repository, such as README.md, and click the pencil icon to edit it.
1. Make any change to the file.
1. Towards the bottom, select "Create a new branch for this commit and start a pull request."
1. Beneath this, click "Propose changes".
1. Click on the green "Create pull request" button.
1. Wait a moment to see the message that says "Test PRs / test (pull_request) - in progress"
1. Wait until you see "All checks have passed". This takes about 5 minutes.
1. Click on the green "Merge pull request" button.

Perform the steps above for both the site repository and the data repository.

## Add branch protection rules

Next you can add the "branch protection rule" to require these tests to pass:

1. Go to the repository in GitHub.
1. Under the repository name, click "Settings".
1. In the left sidebar, click "Branches".
1. Make sure the "default" branch is: `develop`
1. Under "Branch protection rules" click "Add rule"
1. Under "Branch name pattern" enter `develop`
1. Check the box "Require status checks to pass before merging"
1. In "Search for status checks in the last week for this repository" type "test" and select the "test" option.

The last step above may be different depending on your choice of automation service, but that is where you tell GitHub that some tests need to pass.

Perform the steps above for both the site repository and the data repository.

## Results

Now that you have set up these branch protection rules, any time a pull-request is created, the "Merge" button will be disabled until the pull-requests passed all tests. This helps avoid the possibility of a breaking change making it onto your site.
