---

title: "Campaign Manager"
---







## <i class="" id="overview"></i> Managing Campaigns

### Overview Video

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/UldclhWi9Bg" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

### Features Demo Video

<figure class="video_container">
  <iframe src="https://www.youtube.com/embed/pjDUCiQwWqk" frameborder="0" allowfullscreen="true"> </iframe>
</figure>

## Use Cases

- Organize and manage links of marketing campaigns and track impressions
- Manage UTM Tracking for campaign links
- Shortened URLs using the GoGitLab domain name (go.gitlab.com)
- QR Code generation with dynamic links for use on marketing assets and scan impressions

## Setting up a new account

The Campaign manager uses the Google OAuth service for authentication and only supports GitLab accounts. New accounts are created automatically using Team member profile data from Google.

Data fetched from Google Accounts are:

- Full name
- Given Name
- Email
- Profile Photo
- User ID

To sign in, click on the "Log in" link in the top right corner of the home page and click on the Sign in with Google image to proceed to log in with Google after that.

![Home page image](/images/handbook/marketing/developer-relations/community-apps/campaign-manager/homepage.png "Home page")

![Sign In image](/images/handbook/marketing/developer-relations/community-apps/campaign-manager/signin.png "Sign In with Google")

## Managing Teams

The Campaign manager is structured around teams of users, and a personal team is created for every user on the first login, which can be used for personal campaigns not shared with any team.

The Dashboard currently shows teams where the logged-in user is a member, and a link to create a new team.

![Dashboard image](/images/handbook/marketing/developer-relations/community-apps/campaign-manager/dashboard.png "Home page image")

### Creating a new team

![Create New Team image](/images/handbook/marketing/developer-relations/community-apps/campaign-manager/create_team.png "Creating a New team")

- Click on the "Create team" button to open the Create team form
- Enter the Team Name & a short description about the team
- If your team has a `utm_content` prefix, you can supply it here, this is optional.
- If the team has a general campaign for all campaigns, specify the `utm_campaign` value here for the UTM Campaign field. For example, the Community team uses the `community` as the default value for all UTM tracking done by programs in the team. You can override this value, by setting specific campaign values.
- Enter the UTM Budget (`utm_budget`) for the team, this will be the default value for all campaigns, you can override this for specific campaigns.
- If you only want Admins of a team to create campaigns & manage campaign, enable the `Only Admins can create Campaigns` checkbox. When set, other members will be limited to creating campaign links.
- Click on Create team and you should be directed to the new team's page if successful.

### Managing Teams

![New Team Page](/images/handbook/marketing/developer-relations/community-apps/campaign-manager/new_team_page.png "New Team Page")

In the team page, you can update the team's data and change options set during creation. Other sections of the page are the list of the team's campaigns and Team members

#### Adding a team member

- Scroll to the Team member section of a team's page and click on the "Add Team Member" button
- A form will be displayed in a modal, containing a text box to provide an Email, enter the team member's email.
- Only team members that have signed in at least once can be added as team members.

![Add team member image](/images/handbook/marketing/developer-relations/community-apps/campaign-manager/add_team_member_page.png "Add Team member to team")

#### Remove team member

In the list of team members, every line has a red delete icon to remove a team member.

#### Add Team admins

Team members can be elevated to Admin. Admins can manage the update the team's data, manage other team members, and create campaigns if it is limited to only admins.

Click on the "Make Admin" button next to a team member to elevate their privileges.

![Team Member Admin image](/images/handbook/marketing/developer-relations/community-apps/campaign-manager/team_member_admin.png "Team member Admin")

## Campaigns

### Creating a new campaign

![Creating a new Campaign image](/images/handbook/marketing/developer-relations/community-apps/campaign-manager/create_new_campaign.png "Creating a new Campaign")

- To create a new Campaign, Click on the "New Campaign" button in a Team's page.
- The `Create New Campaign` form modal will pop up, provide a title and description for the campaign & click `Save`.
- You will be redirected to the newly created campaign's page if successful.
- An error message will be displayed in the team's page where new campaign creation is not successful

![New Campaign Page image](/images/handbook/marketing/developer-relations/community-apps/campaign-manager/new_campaign_page.png "New Campaign Page")

### Updating a campaign

![Updating a campaign image](/images/handbook/marketing/developer-relations/community-apps/campaign-manager/update_campaign_modal.png "Updating a Campaign")

- From a Campaign's page click on the Update button and the "Update Campaign" modal will be displayed.
- You can edit the title and description provided during creation.
- The status of the campaign can be changed from "Active", which is the default, to "Archived" when the campaign is no longer running but we still want to keep its data.
- The remaining UTM fields are optional but when set, they override defaults of same fields that are set at the team level, with the exception of UTM Content, which prepends the value set at team level. Only a prefix is set for UTM Content at team level and not the full value.
- Content, Budget & Campaign correspond with `utm_content`, `utm_budget` & `utm_campaign` respectively.

### Deleting a Campaign

![Delete Campaign image](/images/handbook/marketing/developer-relations/community-apps/campaign-manager/delete_campaign.png "Delete Campaign")

- On a Campaign's page, scroll to the bottom of the page and you'll see the red "Delete Campaign"
- Deleting a Campaign is irreversible, but as a safe guard, you can only delete a campaign if doesn't have any campaign link.

## Campaign Links

### Creating a Campaign Link

![Create Campaign Link image](/images/handbook/marketing/developer-relations/community-apps/campaign-manager/create_campaign_link.png "Creating Campaign Link")

- On a Campaign's page, scroll to the Campaign Links section and click on "Add Link"
- Specify a title that will make it easier to recognize this campaign link among others. Its recommended to describe the resource and the Medium/Source used, if you will be using UTM Tracking. This way you can use the same link before for different use.
- In the link field, enter the link you want to track
- The UTM Content field is optional, but you can use enter a value if you want this specific link to use a different `utm_content` value from other links in the campaign. The team's UTM Content Prefix will be prepended to the value supplied here.
- You can disable UTM Tracking during redirect, by setting the UTM Tracking Status to "Disabled", this makes the campaign link a URL shortener and UTM tracking codes are not appended to the link provided when a user visits.
- UTM Medium & Source are values corresponding to `utm_medium` and `utm_source` respectively.
- Click "Add link" and you will be directed to the newly created campaign link's page.

![New Campaign Link Page image](/images/handbook/marketing/developer-relations/community-apps/campaign-manager/new_campaign_link_page.png "New Campaign Link Page")

### Updating a campaign link

![Update Campaign Link](/images/handbook/marketing/developer-relations/community-apps/campaign-manager/update_campaign_link_modal.png "Update Campaign Link")

- On a campaign link's page, click on "Update Link"
- The form presented is similar to "Create Campaign Link" form shared in the previous section.
- Click "Update Link" once done.

### Deleting a Campaign link

![Delete Campaign Link](/images/handbook/marketing/developer-relations/community-apps/campaign-manager/delete_campaign_link.png "Delete Campaign Link")

- Scroll to the bottom of a Campaign link's page
- Click on the red "Delete link" button
- NB: Deleting a link also deletes impressions collected over time!!!

## UTM Tracking

To learn more about UTM Tracking, visit the [Marketing UTM Strategy](/handbook/marketing/utm-strategy/) page and for the Developer Relations, review Community Team's [UTM Strategy](/handbook/marketing/developer-relations/utm-strategy/) for specific guidelines for the team.

Campaign Manager currently supports `utm_campaign`, `utm_budget`, `utm_content`, `utm_medium` and `utm_source`. If you use case requires other UTM codes not supported, please [create a feature proposal issue](https://gitlab.com/gitlab-com/marketing/developer-relations/developer-advocacy/code/gitlab-community-app/-/issues) in the Community Apps project.

### I don't use UTM codes, can I use Campaign Manager?

Yes, to fully use Campaign Manager without UTM tracking, leave all UTM related fields empty at the Team, Campaign and Campaign link levels and disable UTM Tracking Status for all links. If you are part of team that uses UTM tracking but don't want to use it for a specific link, set UTM tracking status for the specific link to Disabled.

### UTM Tracking Precedence in Campaign Manager

Getting UTM code precedence right is important to make use of them and if you have complicated use case for UTM tracking. UTM Codes set a Campaign link level takes precedence over Campaign and Team level codes and codes set at the Campaign level take precedence over team level codes. Only UTM Content prefix at the team level, doesn't follow precedence, it will be prepended to UTM Content codes set at Campaign or Campaign link levels.
