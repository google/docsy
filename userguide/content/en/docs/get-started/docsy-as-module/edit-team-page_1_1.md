---
title: "Edit your team page entry"
description: "Instructions on how to add yourself to the team page, and make edits."
aliases:
- /handbook/edit-team-page/
---

This page specifically covers how to add yourself to the team page, add your pets to the pets page, and edit the relevant entries.

For the handbook, see the [editing handbook page]({{< ref "editing-handbook" >}}).

## Add yourself to the Team Page

We are happy to have you join our company and to include you in our [team page](https://about.gitlab.com/company/team/)! [A sync](/handbook/people-group/engineering/onboarding/#sync-to-team-page) will add a basic entry for you on our team page on your third day of employment at GitLab. You are invited to personalize this entry and add more information to it. If an update is not properly reflected on the team page, verify that your Workday setting is correct.

Ask anyone in the company for help if you need it, including the `#mr-buddies` Slack channel. There are **three** ways to update the website:

1. [Add your info on GitLab.com using the Web IDE](#method-1-add-your-info-on-gitlabcom-using-web-ide)
1. [Add your info on GitLab.com using the 'web interface'](#method-2-add-your-info-on-gitlabcom-using-the-web-interface)
1. [Add your info using a Local Git clone (using the terminal and an IDE)](#method-3-add-your-info-using-a-local-git-clone-using-the-terminal-and-an-ide)

Choose the method below that feels most comfortable and have the following information handy:

- Name of the People Connect Team member helping you with onboarding.
<a name="picture-requirements"></a>
- A picture of yourself for the team page
  > **Picture Requirements**
  >
  > - Crop image to a perfect square.
  > - Keep maximum dimension under 400 by 400 pixels.
  > - Use the JPEG (`.jpg`) or PNG (`.png`) format.
  > - Keep the file size below 100k. Minify using something like [tinyjpg.com](https://www.tinyjpg.com).
  > - Test image in color and black-and-white (you will add the color version).
  > - The image file should be located in the folder `sites/uncategorized/source/images/team/`
  > - Name file `yournameinlowercase` and add the appropriate file extension.
- Story about your background and interests. (See other team member profiles for examples.)
- Add your personal LinkedIn / Twitter / GitLab handles. Make sure to only include your username without any links or `@` in front of them. ie. `LinkedIn: username`. (Some incorrect examples are: `LinkedIn: linkedin.com/in/username`, `LinkedIn: @username`.)
- A relative link to your role. If your link is `https://handbook.gitlab.com/job-families/engineering/support-engineer/` use `/job-families/engineering/support-engineer/`. Refer to other entries for reference.

### Method 1: Add your info on GitLab.com using Web IDE

1. Go to the [Team page](/handbook/company/team/) and find yourself. Note: if you choose `No` in Workday for `Export Name/Location to Team Page?` you will have to find yourself by your job title instead of your name.
1. Click on the avatar above your name (or job title). A modal will open.
1. In that modal, on the bottom, click `Edit this page`
1. Our web editor will open with your team page entry opened.
1. Once you have found the file with your name or slug in its title, in the directory `data/team_members/person/FIRST_LETTER_OF_YOUR_FIRST_NAME/` (make sure you are searching within the file you want to edit by clicking on the file first), update your details:
   - Update your `name` if needed to your `FirstName LastName`or `PreferredName LastName`
   - `locality` should be left empty
   - `country` should be set to `Remote`
   - Verify your `role`
   - If your position title is incorrect or not filled in, navigate to `job_families.yml` and use `command-F` (macOS) or `ctrl-F` (nix) to search for your job title. You can search for .yml files in the Web IDE using `command-P` (macOS) or `ctrl-P` (nix)
   - Check that your role links to your job description. If not, add a link. For example, change `<a href="">Solutions Architect</a>` to `<a href="/job-families/sales/solutions-architect/">Solutions Architect</a>`.
   - Verify `reports_to` lists your manager using the `slug` value from their team page entry
   - If you are a manager, verify the `reports_to` of your direct reports are referring to your `slug`
   - If you're currently on a borrow request, add `borrow` and set the `to` and `end_date` keys, e.g.

     ```yaml
     borrow:
       to: ramya-authappan
       end_date: 2023-09-15
     ```

   - Set your current work priorities in the `work_priorities` field, as an array, e.g.

     ```yaml
     work_priorities:
       - Product Analytics
       - ModelOps
     ```

   - Add the filename of your profile picture, making sure to match letter case. Delete `../gitlab-logo-extra-whitespace.png`, if present. The completed line should look like this: `picture: yournameinlowercase.jpg`.
   - Add your pronouns
   - Consider adding `pronunciation` for your full name to help others to pronounce your name correctly (e.g. sid see-brandy for Sid Sijbrandij)
   - Add your Twitter and GitLab handles without the leading `@`
   - Ensure your list of `departments` is accurate. Use other team members' as a reference.
   - Add your [`specialty`](/handbook/company/structure/#specialist)
   - Add your [`expertise`](/handbook/company/structure/#expert)
   - Add your own `story`. Use other team members' stories as a reference.
   - If remote work has [changed your life](/handbook/company/culture/all-remote/people/) in a meaningful way, consider adding your own `remote_story`, using other team members' remote stories as a [reference](https://gitlab.com/gitlab-com/marketing/corporate_marketing/corporate-marketing/uploads/8161ceac4523a9f36244f9533960ccbd/remote-story-example.png)
   - Update any data that was filled in but is incorrect

     **Important:** Do not use the `tab` character, and respect the spaces between lines to avoid breaking the page format. Referenced file names/extensions are case sensitive, and a file that is not found will cause a pipeline failure. The file should end with an empty newline or it will cause a pipeline failure.
1. To upload your image, ensure that it is prepared according to the [Picture Requirements](/handbook/editing-handbook/#add-yourself-to-the-team-page).
   1. Navigate to find the `team` folder using the path `sites/uncategorized/source/images/team/`. To do this, you must first notice that you are in a file that is within the `person` folder, which is within the `team_members` folder, which is within the `data` folder. You can close folders by clicking on the ⋁ to the left of the folder name. Once you have closed the `data` folder, you will see the `sites` folder 6 folders down. Open `sites` by clicking the >, then `uncategorized`, then `source`, then `images`, and finally `team`.
   1. Right click on `team` and choose `Upload`.
   1. Select the image you want to upload and Open.
   1. Now you will navigate back to your team page entry. You can do this by either closing the `sites` folder and opening `data`, then `team members`, `person`, and the folder containing you file; or you can notice your file tab on the top bar, and you can click on it to be taken to that file.
   1. Update your `picture` field to your filename. Delete the content that is this line after the `picture:` that starts with `../gitlab` etc. Make sure to match the letter case of your picture file. The completed line should look like this: `picture: yournameinlowercase.jpg` for example.
1. Once you have finished this, click the `Source Control` icon, as described in point 5 of [Using the new Web IDE to edit the handbook](/handbook/editing-handbook/practical-handbook-edits/#using-the-new-web-ide-to-edit-the-handbook).
1. Create a title for your MR, and enter it in the box above the `Commit & Push` button. An example title would be `Updating My Team Page Entry`.
1. Click the `Commit & Push` button.
1. Click on `Yes Commit to a new branch`.
1. You will then be in the `New branch name` section. Enter your branch name, in the format of `yourinitials-add-YOURNAME-to-team-page-date` or similar. Example: `plh-add-paulalilyherbert-to-team-page-feb06` and press `Return/Enter`.
1. Click on `Create MR`. If this message disappears, click on the notification bell icon on the bottom right, and it will bring back the message.
1. In the Desciption box, explain `Why is this change being made?` as decribed. For this specific MR, you can enter something like: `Adding my information and picture to the team page due to onboarding tasks.`
1. Scroll down and `Create merge request`.
1. Review the Author Checklist and check off all applicable tasks. Add your People Connect onboarding team member and Manager as Reviewers. If your manager has a gold triangle symbol with an exclamation mark on their bottom right section of their avatar photo, it means that they do not have merge rights to the team page so you can assign the MR to your People Connect team member if that is the case. If there is no triangle on your manager avatar, you may assign the MR to your manager.

### Method 2: Add your info on GitLab.com using the 'web interface'

1. Go to the [GitLab.com / www-gitlab-com](https://gitlab.com/gitlab-com/www-gitlab-com/) project.
1. Click the `+` under the red line near the top of the screen.
1. Click `New branch`.
1. For `Branch name`, name it something unique (it's temporary so don't worry too much about the exact name) like *your initials-team-page-update-yourdepartment-the date* and click `Create branch`. Example: `hk-team-page-update-custsupport-feb06`
1. Start by adding your image. Click on `Repository` on the left side then `Files`.
1. In the file browser, navigate to `sites/uncategorized/source/images/team`
1. At the top of the page click `+` and choose `Upload file` to upload your picture. Be sure to follow the [picture requirements](#picture-requirements). Add text *Add YourFirstName YourLastName to team page* and click `Upload file`.
1. Navigate on your branch near the top of the page following the text that has your unique branch name and click on the text that follows your branch name `www-gitlab-com`.
1. Now you will edit your biographical information. All the bio information displayed on the Team page is pulled from a data file. Click on `data`, and then scroll down to `team_members/person/FIRST_LETTER_OF_YOUR_FIRST_NAME/SLUG_REPLACE.yml` (you are looking for a file that specifies your name or slug).
1. Click on `edit` on the top right side of your screen.
1. See point 5 in the above [Method 1: Add your info on GitLab.com using Web IDE](#method-1-add-your-info-on-gitlabcom-using-web-ide) for the list of fields and how to fill them in.
1. After you add your information, add a comment to your commit and click on “Commit Changes”.
1. Now [Create a merge request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html) in [GitLab.com](https://gitlab.com/gitlab-com/www-gitlab-com) with the branch that you created by clicking `Create merge request` button.

   - Create a title that describes your changes at a high level.
   - Add a description of your changes
   - Assign the merge request to yourself
   - Make sure the source branch is the one you created `hk-team-page-update-custsupport-feb06` (as an example from above) and the target is `master`
   - Check the box `delete source branch when merge request is accepted`

1. Click `create merge request`  At the upper right of the new page, click `edit` next to `Reviewer` and set your manager as reviewer for this merge request.

### Method 3: Add your info using a Local Git clone (using the terminal and an IDE)

*Note:* This method may take longer than other methods, because it requires `git clone` for around 4GB size repository.

1. Download Git, following the [start using git documentation](https://docs.gitlab.com/ee/gitlab-basics/start-using-git.html).
1. Follow the steps to create and add your [SSH keys](https://docs.gitlab.com/ee/user/ssh.html).
1. Clone the [www-gitlab-com project](https://gitlab.com/gitlab-com/www-gitlab-com) through your shell, following the [command line commands documentation](https://docs.gitlab.com/ee/gitlab-basics/command-line-commands.html).
1. Create and checkout a new branch for the changes you will be making.
1. Add your picture to the `sites/uncategorized/source/images/team/` directory in the repository and `git add` it. Be sure to follow the [picture requirements](#picture-requirements).
1. Open `data/team_members/person/FIRST_LETTER_OF_YOUR_FIRST_NAME/SLUG_REPLACE.yml` in your favorite editor, specifically looking for the file with your name or slug.
1. See point 5 in the above [Method 1: Add your info on GitLab.com using Web IDE](#method-1-add-your-info-on-gitlabcom-using-web-ide) for the list of fields and how to fill them in.
1. Save the changes to the file in `data/team_members/person/FIRST_LETTER_OF_YOUR_FIRST_NAME/` that you just edited, and `git add` it.
1. To see your changes locally:
   1. Manually run a command to compile the changes you just made into a file that actually populates the team page:

      ```bash
      cd <WWW-GITLAB-COM REPO ROOT>
      bundle exec rake build:team_yml
      ```

   1. Start a middleman dev server in the `uncategorized` site:

      ```bash
      cd sites/uncategorized
      NO_CONTRACTS=true bundle exec middleman
      ```

   1. Open the team page and search for your name `http://localhost:4567/company/team`
1. After validating your changes, commit your changes to the branch of www-gitlab-com that you created in step 4, with a comment *Add FirstName LastName to team page* and push your branch. You may need to set the remote as upstream or you can use `--set-upstream` option and specify remote as upstream.
1. [Create a Merge Request](https://docs.gitlab.com/ee/user/project/merge_requests/creating_merge_requests.html) in [GitLab.com](https://gitlab.com/gitlab-com/www-gitlab-com) with the branch that you created and assign your manager as reviewer.

*Note:* When you test locally, the map on top of the page won't show your photo. This is because it is not populated with local data. [More about how the map works](https://gitlab.com/gitlab-com/teampage-map/-/blob/main/README.md#background). You will see your picture on the map as soon as your Merge Request is merged.
*Note:* Searching the handbook in your local environment yields production results, so navigate directly to the team page via URL to see your changes.

## Add your pet(s) to the Team Pets Page

Using what you learned in the [steps above](/handbook/editing-handbook/#add-yourself-to-the-team-page), consider adding your pet(s) to the [Team Pets page](/handbook/company/team-pets/). You can follow these instructions to add them via the Web IDE.

1. Again, find the picture that you'd like to add to the team pets page, and update the picture's name to the following format: `petname.jpg` or `petname.png`. Ensure the picture size is around 400x400 (*it must be square*, see [picture requirements](#picture-requirements)).
1. Go to the [GitLab.com / www-gitlab-com](https://gitlab.com/gitlab-com/www-gitlab-com/) project.
1. On the Repository page, you will see a Web IDE button near the middle of the page next to the Find File button.
1. In the browser window, navigate to `sites/uncategorized/source/images/team/pets`.
1. Right click on `pets` and choose `Upload`.
1. Select the image you want to upload and Open.
1. Next, navigate to `data/pets.yml` and click on it to open the editor.
1. Scroll to the end of the file. Add your pet by following the format of the existing pets on the page (you can copy and paste their lines of code, even). Ensure that you include your pet's name, your full name, and the name of the image you uploaded in step 1.
1. Once you have finished this, click the `Source Control` icon, as described in point 5 of [Using the new Web IDE to edit the handbook](/handbook/editing-handbook/practical-handbook-edits/#using-the-new-web-ide-to-edit-the-handbook).
1. Create a title for your MR. An example title would be `Adding my dog Gary to the Team Pets Page`.
1. Click the `Commit & Push` button.
1. Click on `Yes Commit to a new branch`.
1. You will then be in the `New branch name` section. Enter your branch name, in the format of `yourinitials-add-YOURNAME-to-team-page-date` or similar. Example: `plh-add-paulalilyherbert-to-team-page-feb06` and press `Return/Enter`.
1. Click on `Create MR`. If this message disappears, click on the notification bell icon on the bottom right, and it will bring back the message.
   1. Fill out the merge request details and assign it to your manager for review.
