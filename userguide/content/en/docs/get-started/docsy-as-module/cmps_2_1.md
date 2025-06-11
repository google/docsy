---
title: Contact Management Projects
description: Operations workflows page for contact management projects
canonical_path: "/handbook/security/customer-support-operations/workflows/cmps"
---

## Eligibility Criteria

To be eligible for a contact management project, all of the following criteria must be met:

- The requester must be associated to an organization
- The organization must have an active subscription with GitLab (it cannot be expired or within the grace period)
- The organization must have a qualifying subscription, which would be one of the following:
  - A GitLab Premium subscription (Self-Managed or gitlab.com)
  - A GitLab Ultimate subscription (Self-Managed or gitlab.com)
  - A GitLab Dedicated subscription
- The organization's valid subscription must be for at least 50 seats
- The requester must be one of the following:
  - The sold-to (purchasing party) of the subscription
  - An owner on the gitlab.com namespace

If any of those criteria are not met, you should reply to the ticket with the `Support::Support-Ops::Not qualified for CMP` macro.

If they have met all criteria, you can proceed to the setup section below.

## Setup

The setup and creation of a contact management project is completely performed via the Zendesk Global app `Support Ops Super App`. As such, you should use that to kick the process off after you have done the needed checks. The app will ask you for a comma-separated list of emails to use for the project's developers. After submission, a combination of the app and the ticket processor will handle the rest.

## Manual setup

{{% alert title="Note" color="danger" %}}

The below information details how to manually setup a contact management project. This should only ever be used in the event of a unfixable error from the application. Consider contacting the Fullstack Engineer, Customer Support Operations before proceeding in doing this manually.

{{% /alert %}}

These are setup via several stages that all work together to reflect a complete contact management project.

### Intro stage

In this stage, a customer has requested to have a contact management project setup via a Support Ops ticket. Before we can begin the setup, we need to confirm with the requester which user(s) will be the ones able to edit the contacts.yaml file. To do this, use the macro `Support::Support Ops::Contact management intro`.

Once the requester has confirmed the user(s) who will be maintaining the contacts.yaml file, you need to ensure the users provided are associated to the organization currently. If they are not, you should associate them to the organization first.

After doing so, you will need to get a list of the organization's current contacts for use in the setup stage.

After doing so, you are good to move to the next stage.

**Jason Pro-tip**

I would recommend exporting them as a CSV file via [Advanced search](https://gitlab.zendesk.com/agent/apps/advanced-search). When doing so, make sure the only columns that display are the user's name and email.

With the CSV file downloaded, you could then run the following code via terminal to change the CSV format into the YAML format you will need later:

```bash
awk -F',' '{if ($1!="Query"&&$1!=""&&$1!="\"name\"") {print "- name: "$1"\n  email: "$2}}' csv_file
```

This will work the majority of the time and make it a bit easier down the line.

### Project creation

For organizations without an existing collaboration project, we create all contact management projects within the [zd-global-orgs group](https://gitlab.com/groups/support/zd-global-orgs).

1. Navigate to that group and click the blue `New project` button at the upper right part of the page.
1. Select `Create from template`
1. Click the `Group` tab
1. Click the blue `Use template` button to the right of `Contact Management Project Template`
1. Set the `Project name` to `Organization XXXX` (replacing `XXXX` with the Zendesk Organizaton ID)
   - Ensure the `Project slug` is `organization-xxxx` (replacing `xxxx` with the Zendesk Organizaton ID)
1. Click the blue `Create project` button

After creation the project, you need to double check all settings are accurate. In theory, the template project will handle that, but it always best to be sure.

The items to check are:

- Settings
  - Settings > General
    - Visibility, project features, permissions
      - Project visibility: Private
      - Enable CVE ID requests in the issue sidebar: disabled
      - Forks: disabled
      - Git Large File Storage (LFS): disabled
      - CI/CD: disabled
      - Container registry: disabled
      - Analytics: disabled
      - Requirements: disabled
      - Secuirty & Compliance: disabled
      - Wiki: disabled
      - Snippets: disabled
      - Package registry: disabled
      - Pages: disabled
      - Monitor: disabled
      - Environments: disabled
      - Feature flags: disabled
      - Infrastructure: disabled
      - Releases: disabled
  - Settings > Repository
    - Branch defaults
      - Default branch: master
    - Protected branches
      - Branch: master
      - Allowed to merge: 2 roles (Maintainers+Developers)
      - Alowed to push: 2 roles (Maintainers+Developers)
      - Allowed to force push: disabled
      - Code owner approval: disabled
- Project files
  - CONTACTS.md
    - Verify the contents match what is detailed
      [here](https://gitlab.com/support/zd-global-orgs/project-templates/contact-management-project-template/-/blob/master/CONTACTS.md)
  - contacts.yaml
    - Verify the contents match what is detailed
      [here](https://gitlab.com/support/zd-global-orgs/project-templates/contact-management-project-template/-/blob/master/contacts.yaml)

After everything looks good to go, make sure to copy the project's ID. You'll need it in the next step.

### Webhook setup

Next, you'll need to setup the webhook for the project. To do this, navigate to `Settings > Webhooks` on the project.

You then need to create a new webhook using the following information:

- URL: `https://gitlab.com/api/v4/projects/39250741/ref/master/trigger/pipeline?token=TOKEN&variables[PROJECT_ID]=PROJECT_ID`
  - Replace TOKEN with the Contact Management Project Token found within the Customer Support Operations Vault in 1Password.
  - Replace PROJECT_ID with the project's ID.
- Click the bubble next to `Mask portions of URL`
  - Put the token value in the text field for `Sensitive portion of URL`
  - Put `TOKEN` in the text field for `How it looks in the UI`
  - Verify the URL preview value now looks like:
    - `https://gitlab.com/api/v4/projects/39250741/ref/master/trigger/pipeline?token={TOKEN}&variables[PROJECT_ID]=123456789`
- Check the box next to `Push events`
  - Select `Wildcard pattern` and enter `master` in the text field
- Check the box next to `Enable SSL verification`

Once all that is in place, click the blue `Add webhook` button.

### Organization update

Next, you will need to update the organization within Zendesk:

- You want to set the `Contact Management Project ID` field to have the project ID.

### Files setup

Next, you will add the contact's and add the organization ID to the contacts.yaml file of the project.

Every contact within that file uses the format:

```yaml
- name: NAME_OF_CONTACT
  email: EMAIL_OF_CONTACT
```

Where `NAME_OF_CONTACT` is the contact's name and `EMAIL_OF_CONTACT` is the contact's email. Both are required, so if you do not know the `NAME_OF_CONTACT`, use the `EMAIL_OF_CONTACT` value.

An example of a working and valid contacts.yaml can be found [here](https://gitlab.com/support/zd-global-orgs/aaa-jason-test-setup-zzz/-/blob/master/contacts.yaml).

You should ensure the contacts listed matching what the Zendesk organization *currently* has in place.

Once that is all setup, commit the changes to the file (this will kick off a sync pipeline).

### User invites

{{% alert title="Note" color="danger" %}}

Be exceeedingly careful here. You can cause a compromise if you invite users at the wrong permission level.

{{% /alert %}}

Next, you need to invite the user(s) who will maintain the contacts.yaml file. You should have a list of who to invite from your previous work in the ticket.

To invite the users, do the following:

1. Select `Manage > Members` from the menu in the left hand side of the page
1. Click the blue `Invite members` button at the top-right hand side of the page
1. Enter the email(s) to use under the `Username or email address` text box
1. Under `Select a role`, select `Developer`
1. Click the blue `Invite` button on the bottom-right of the modal

### Final stage

With all of that done, the final part is to update the ticket using the macro `Support::Support Ops::Contact management project setup`.

From there, the user might come back with questions or a need for assistance. Do your best to guide them and assist them however you can. If you get stuck, reach out in the support operations slack channel.

## Removal

{{% alert title="Note" color="warning" %}}

If the customer is over 30 contacts at the time of the removal request, ask the customer to use the contact management project to lower their contact numbers down to 30 first (as that is the limit for organization contacts when not using a contact management sync project).

{{% /alert %}}

To remove the setup, you need to do two steps:

1. Delete the contact management project
1. Remove the value of the `Contact Management Project ID` on the organization

## Common troubleshooting

### Pipeline failed due to "No org found"

This occurs when the pipeline was run before the Organization in Zendesk has the `Contact Management Project ID` field populated. Due to caching, this error will persist for up to an hour in normal situations, which is not ideal.

To fix this issue, go to the contact management project itself, go to the webhooks page, click `Test`, and select `Push events`. This will cause a new pipeline to run that should work outside of the caching.

### Pipeline failed due to "Too many orgs"

This means multiple organizations within Zendesk are using the same project ID. You will need to determine which organization incorrectly is also using the project ID and remove it.

After doing so, you should manually have the webhook trigger by going to the webhooks page, click `Test`, and select `Push events`. This will cause a new pipeline to run that should work outside of the caching.

### Pipeline failed due to "Error reading YAML file"

This means something within the contacts.yaml file of the project is in a bad formatting. To rectify this, you will need to do one of the following:

- Create a ticket to the customer asking them to fix it
- Go to the project and fix it yourself

Either method will work in the end, but the latter is quicker and better in terms of customer experience.

If this happens repeatedly to the same customer, consider reaching out to their Account Manager regarding it.

### Pipeline failed due to "Invalid project ID"

This means the `PROJECT_ID` value sent by the webhook is not a valid value. You need to go review the webhook you setup and correct it to use the correct value.

### Pipeline failed due to "Failed to sync contacts"

This means the Zendesk API returned a non-200 status code when it tried to add users to the organization. You will need to manually troubleshoot why this is and rectify the blocking issue.

### Pipeline failed due to "Failed to remove users"

This means the Zendesk API returned a non-200 status code when it tried to remove users to the organization. You will need to manually troubleshoot why this is and rectify the blocking issue.

### Pipeline failed due to "NoMethodError"

This means something within the contacts.yaml file of the project is missing required information. This can either be because it was left blank or because of a formatting issue (that does not make it an invalid YAML format). To rectify this, you will need to do one of the following:

- Create a ticket to the customer asking them to fix it
- Go to the project and fix it yourself

Either method will work in the end, but the latter is quicker and better in terms of customer experience.

If this happens repeatedly to the same customer, consider reaching out to their Account Manager regarding it.

### Pipeline failed due to "Unable to create user"

This reflects a Zendesk caching issue. It normally is a problem indicating that the user *was* created but the response from the creation task didn't render properly via the API. You can normally wait 5 or so minutes and then re-run the pipeline to resolve this problem. If you continue seeing issues:

- Create the user manually
- Associate the user to the org manually
- Wait 5 minutes
- Run a new sync by triggering the webhook on the project
