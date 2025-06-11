---
title: "GitLab Integration Instructions"
description: Learn about integrating with GitLab, as well as partnership, marketing, and licensing opportunities.
---

## Instructions for getting listed as a GitLab Technology Partner

Once [these steps](https://about.gitlab.com/partners/technology-partners/integrate/#steps-to-become-a-technology-partner) along with the product integration have been completed, the last step is to submit a Merge Request to get listed on our [Technology Partners page](https://about.gitlab.com/partners/technology-partners/). To add your app, you will need:

- A URL page with details on the integration
- A link to the technical documentation on the steps required to set it up. A Screencast / video walk through is highly preferred.
- A short description of the integration (up to 314 characters)
- Listed name for the integration on the applications page
- Your logo
    > **Picture Requirements**
    >
    > - Crop your image to a perfect square or rectangle.
    > - Keep maximum dimensions under 800 by 800 pixels.
    > - Use the JPEG (`.jpg`) or PNG (`.png`) format.
    > - Name file `company_name_in_lowercase` and add the appropriate file extension.

## Adding your app to our Partners Page

Once you have the above items, follow these steps to add yourself to the Partners page:

1. Sign into gitlab.com and navigate to the home project of [www.gitlab.com](https://gitlab.com) found [here](https://gitlab.com/gitlab-com/marketing/digital-experience/buyer-experience/). Click on the **'Fork'** button at the top right to make a copy of the repository within your account.
1. Next, click on the **'Web IDE**' button to make changes to specific YAML files.
1. Navigate to the '/content' directory in the left pane and you will see the `apps.yml` file within the folder. Click on the file to open it within the WebIDE. Add the following fields to the correct category of the file and enter the following application information into each of the blank fields:

```yaml
- title: Company Name
     content:  Description
     links:
       - url: Company URL
         title: Company Name
       - url: Technical documentation URL
         title: Company Name for GitLab
```

Choose the app's category accordingly. The code block is to be added **to the end** of the category list it belongs to.

**Notes**:

- Write in sentence case, using capital letters for the beginning of the sentences, product names, method names, and feature names.
- Always write GitLab with a capital G and L.
- Respect the YAML file's indentation.
- Avoid special characters, particularly colons and quotes, otherwise they may need to be manually escaped to not break the YAML syntax.

1. After updating `apps.yml`, use the file browser on the left side of the screen to navigate to `static/nuxt-images/applications/apps/`.
1. Click the `⋁` icon next to the `apps` directory, select upload file, and upload you company logo. Be sure to follow the picture requirements listed above and confirm that the file name matches your `picture` entry in `apps.yml`.
    > **Note:** The image name should match the application title exactly. For example, if your app is titled 'GitLab Inc' then the image name being uploaded would be 'gitlab_inc.png' and it will then map to your app listing when the site is generated.
1. Once you have finished this, click the `Commit` button in the bottom left. It should say something like `2 unstaged and 0 staged changes`. This will bring up a sidebar with an `Unstaged` and `Staged` area.
1. Check the files to ensure your updates are what you expect. If they are, click the check mark next to the filename to "stage" these changes.
1. Once you have verified all of the edits, enter a short commit message including what you've changed. Choose `Create a new branch`. Name the branch in the format of `CompanyName-partners-page` or similar. Tick the `Start a new merge request` checkbox. Then click `Commit` once more.
1. A new merge request will then initiate and you will be able to fill out a description and details around the MR. Select the 'Applications' template and fill out the information accordingly.
1. When you have filled out the merge request details. **Please ensure you tick the box to `Allow commits from members who can merge to target branch` as detailed on the [Allow collaboration on merge requests across forks](https://docs.gitlab.com/ee/user/project/merge_requests/allow_collaboration.html#enabling-commit-edits-from-upstream-members) page in our docs.**
    > Make sure when submitting the MR, the source is the branch that was just created from the MR and the destination/target is the `/gitlab-com/marketing/digital-experience/buyer-experience/`.
1. Once the MR is created, use the Application template and complete the instructions.

## If you'd like to do further development

Open an issue in the [Alliance project](https://gitlab.com/gitlab-com/alliances/alliances) requesting a joint private project in the Alliance group.

- Review the checklist items on what needs to be done
- Share your GitLab username and your SEs as well. You will both be able to create sandbox projects for anyone wanting to get technical and hands-on experience.

This gives our partners a home base for testing integrations, workflows and a place to create any public-facing demos. Initially, it will be set to private, but once there is content in the projects, we can always switch the project to public.

We will need a list of the email addresses that were used to create a GitLab.com account. Within your group you'll be able to create projects and repositories for any development/testing.

## Questions?

We are here to help. The Alliance team works from issues and issue boards. If you are needing our assistance with any project, please [open an issue](https://gitlab.com/gitlab-com/alliances/alliances/-/issues/new/?issuable_template=general_alliance_request) and we'll get back to you as soon as we can! If it's technical assistance you're looking for, please see below for troubleshooting.

## Troubleshooting

We're always here to help you through your efforts of integration. If there's a missing API call from our current API, or you ran into other difficulties in your development please feel free to create a new issue on the [GitLab issue tracker](https://gitlab.com/gitlab-org/gitlab/-/issues) and apply the `devops::ecosystem` label.
