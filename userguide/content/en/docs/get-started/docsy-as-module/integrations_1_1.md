---

title: "Integration Demos"
---







In some cases, GitLab must be used with existing systems. The most common systems requested include Atlassian Jira for issue management, Jenkins for pipeline execution or GitHub for source code management. Jira to GitLab workflow, GitHub to GitLab CI/CD linkage or GitLab to Jenkins connections can be arranged quickly on a per-project basis using available integrations from GitLab.

The below demonstration highlights a simple flow of work between Jira issues and GitLab source code management, as well as between GitLab merge requests and Jenkins pipelines.

<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/Jn-_fyra7xQ" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</figure>

The below demonstration highlights a simple flow of work between GitHub pull requests and GitLab CI/CD.

<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/qgl3F2j-1cI" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</figure>

## Jira Integration Demo

There are 3 different Jira integrations avaialble.

1. Real-time MR/comments integration also known as “Jira Integration”. All Jira + GitLab customers should use this if they cannot use only GitLab.
2. Dev Panel (DVCS) integration. Only way to have GitLab feed Jira’s Dev Panel if using GitLab self-managed and/or Jira Server. Data sync once per hour `Premium`
3. Dev Panel integration using the GitLab for Jira app from the Atlassian Marketplace. Ideal for Jira Cloud integrating with GitLab SaaS because data is sync’d in real-time! - Works only with Jira Cloud and GitLab SaaS `Premium`

The following guide can be used to integrate GitLab.com with Jira Software Cloud:

- [GitLab Jira integration](https://docs.gitlab.com/ee/integration/jira/) - mention a Jira issue ID from GitLab and have this reflected in the Jira Issue’s comments.
- [Dev Panel integration using the GitLab for Jira app](https://docs.gitlab.com/ee/integration/jira/) - for each Jira issue, displays links with number of related commits, branches, and pull (merge) requests from GitLab.

Prerequisite: Must be a `Premium` group owner on GitLab.com

### GitLab Jira integration

1. You can either create your own free Jira Software Cloud environment or use the environment listed under `Jira Integration Demo Login` in 1Password.
   - If using the `Jira Integration Demo Login` select the `spring-integrations` project in Jira and go to the issue board.
2. Create a new Jira issue. Note the ID or copy it to the clipboard.
3. Log in to GitLab.com and create a new project within your Ultimate group
   - Under Settings > Integrations > Jira, configure the integration with the web URL, username, API token (you will need to generate a new token for your own use), and transition ID for your project.
4. Create a branch from Repository > Branches. Include your new Jira issue ID in branch name and description (such as `fixes-SI-X`, where `X` is the issue number).
5. Create a merge request with `SI-X` in the name and `Resolves SI-X` in the description.
6. Edit any non-essential code within the repository, then enter a commit message mentioning `SI-X` again.
7. When you merge the GitLab Merge Request, the Jira issue’s status is transitioned to **Done_**.
8. Go to Jira again via the link in the GitLab menu.
9. Navigate to the Jira issue board and select your issue (*SI-X* if using the `spring-integrations` project). Note the GitLab content is now present in the Comments area. If you have Jira open in another browser tab, the updated comments will show immediately upon refresh of the page’s content.

### Dev Panel integration using the GitLab for Jira app

1. Follow the [GitLab.com Development Panel](https://docs.gitlab.com/ee/integration/jira/index.html#configuration) instructions.
2. Navigate to the Jira issue board and select your issue (*SI-X* if using the `spring-integrations` project). Note the GitLab commit and branch information displayed in the Development panel on the right side.

## Jenkins Integration Demo

- Login to Jenkins using `Jenkins.Taunki.Cloud Login` in 1Password.
- Log into GitLab `spring-integrations` project on `demo.tanuki.cloud` via 1Password.
- Create a branch from Repository>Branches.
- Create a merge request.
- Edit any non-essential code within the repository and enter a generic commit message.
- Go to the created merge request and click on the pipeline to bring up the graphical view.
- Note the pipeline actually ran a Jenkins job in an `external` stage.
- Click on Jenkins job, noting that it takes you to the Jenkins console output.
- Return to the GitLab repository and highlight the Jenkinsfile maintained alongside the repo for consistency and versioning.

## Bamboo CI Integration Demo

- Log into GitLab using your credentials
- Create a new project from any template
- Delete `.gitlab-ci.yml`
- Login to Bamboo using `Bamboo Tanuki Cloud` in 1Password.
- Create a new plan by selecting `create -> create plan`
- Select an existing project or create a new project
- Specify a `plan name`
- Choose an existing repo or link to a new repository (credentials may be required when linking to a new repository)
- Keep `isolate build` set to `Agent Environment`
- Select `source code checkout` and enable `force clean build`
- Save the changes and drag the task into `final tasks`
- Select `Save and continue`
- Select triggers tab
- Delete default trigger and add a new `remote trigger`
- Specify the IP addresses associated with your demo GitLab instance (Keep in mind you will need to provide load balancing IPs)
- Make sure the plan is enabled
- Select `Run -> Run plan` to confirm the plan can build from GitLab
- Return to the GitLab project and select `settings -> integrations`
- Select `Atlassian Bamboo CI`
- Fill out all fields and make sure to set the integration to active
- If you are having trouble finding the build key, you can find it within the URL of the plan page within Bamboo
- Save changes and edit README.md to make a quick commit
- Check Bamboo dashboard to see build triggered
- Create new branch off of master
- Within the Bamboo plan configuration page `home page -> select plan -> 'actions > configure plan'`, select `create plan branch`
- Follow dialog and add new branch
- Edit README.md in new branch and commit the change
- Check Bamboo to confirm the change has been picked up by Bamboo

## OpenLDAP Integration Demo (Adding Users)

- Log into the OpenLDAP GUI (details can be found in the SA vault)
- In the left navigation panel, expand the LDAP tree
- Click on the `ou=users` organization unit
- In the main panel, click `Create a child entry`
- Select `Generic User Account` from the available templates a new user form will appear
- Enter the new users information in the provided form, ensuring all required fields are populated
- Click `Create Object`, you will be presented with the opportunity to check and finally `Commit`
- Commit the new user to LDAP by clicking the `Commit` button
- You will then be taken to the newly created user account
- Navigate to the GitLab login screen, here you will see the option to login using LDAP.
- Enter the user id and password used when creating your new user within OpenLDAP
- Click `Sign In`
- Newly created users will be taken to their profile page to update their `Email` field and confirm their Email address.

## GitHub Integration Demo

- Navigate to GitHub.com/signin and login using `GitHub Demo Login` in 1Password.
- Navigate to GitLab.com and login using `GitHub Demo Login (GitLab)` in 1Password.
- Begin the demo by showing how to create a GitLab project linked to a GitHub repo. Click on the `+` icon to create a new project in GitLab.
- Select the `CI/CD for external repo` tab and highlight that you’d use an access token from GitHub to access GitHub repos within GitLab. Don’t create a new project at this point (cancel).
- Switch to GitHub. Click into the `spring-boot-test` project repo.
- Create a new branch using the `Branch:master` button.
- Click into the `src/main/java/hello/HelloController.java` file and make a minor change to the screen message.
- Add a commit message and click the `Commit Changes` button.
- Click on the `Pull Requests` tab and click the `New pull request` button.
- Compare changes using `base:master` and `compare:yourbranch`.
- Click `Create pull request`.
- Scroll down a bit and note the amber wording `Some checks haven’t completed yet`.
- There is a GitLab logo when this check is expanded. Click the `Details` hyperlink inline with the GitLab logo.
- Note that you are taken directly to GitLab’s pipeline page in the associated project. This pipeline can take up to 10 minutes to run, but once complete, the pipeline status is returned to GitHub.
- While we wait for the pipeline to complete, note that the complete history is available for the pipelines run in GitLab.
- Also note that the repo and branches are mirroring from GitHub dynamically, but issue management and merge request options have bene removed from the GitLab UI since the GitHub issues and pull requests are used instead.
- After time has elapsed, return to the GitHub pull request to show the pass/fail status displayed in GitHub.
- Optional: Other existing pull requests may be used to show the linkage without committing changes or creating new pull requests.

## Conclusion

GitLab, leveraging built-in integrations, can work with existing Jira, GitHub or Jenkins systems, flowing work and updating status bi-directionally between those tools and GitLab.
