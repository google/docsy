---
title: "Okta Admin Onboarding"
description: "The Okta Admin Onboarding runbook provides setup instructions for team members that have a separate admin account in Okta, Google Workspace, and 1Password."
---

## Overview

The Okta Admin Onboarding runbook provides setup instructions for team members that have been provisioned a BLACK admin account to get started with setting up Okta, Google Workspace, and 1Password that is configured separately from your PURPLE accounts.

- **Handbook Page:** [Access Level Wristband Colors](/it/policies/access-level-wristbands/)
- **Access Request Template:** [Admin_Black_Account](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/blob/master/.gitlab/issue_templates/Admin_Black_Account.md)
- **Provisioner Time to Complete:** 15-30 Minutes (not including approvals)
- **User Time to Complete:** 30 Minutes Assisted Sync or 45 Minutes Async
- **Who Can Provision:** [Erik Lentz](https://gitlab.com/ErikLentz),[Jacob Waters](https://gitlab.com/jacobdwaters), [Mohammed Al Kobaisy](https://gitlab.com/malkobaisy)
- **Runbook DRI:** [Erik Lentz](https://gitlab.com/ErikLentz), [David Zhu](https://gitlab.com/dzhu-gl)

## Transferring Black Accounts to New Laptops

If you're transferring a Black account to a new laptop, you will not need to follow all of the same tasks. This should be able to be self-serviced without a member of IT.

You should follow the process beginning at [### Task 1.2: Open a Chrome Incognito Browser Window](#task-12-open-a-chrome-incognito-browser-window). After that step, steps that are unique to the laptop transfer process are called out as notes under the relevant steps. If no note exists, you should assume the step is required for the transfer process.

## Step 0: Provisioner Pre-Work

### Provisioner Task 0.1: Verify Approvals

This runbook requires an access request using the [Admin_Black_Account](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/blob/master/.gitlab/issue_templates/Admin_Black_Account.md) template. All approvals must be completed before provisioning can take place.

### Provisioner Task 0.2: Create an Admin (Black) User Account

1. Create a new 1Password record in your `AR Temp Credentials` vault named `Okta Temp Admin - {firstInitial}{lastName}-admin@gitlab.com`.
1. Set the 1Password record username to `{firstInitial}{LastName}<-admin@gitlab.com>.
1. Use 1Password to generate a 64-char password with numbers and symbols.
1. Set the 1Password record website to `https://gitlab.okta.com`.
1. Save the 1Password record.
1. **Open Chrome** and choose your **Admin** profile.
1. Sign in to `https://gitlab.okta.com` and navigate to [Directory > People](https://gitlab-admin.okta.com/admin/users).
1. Click the **Add person** button.
    - User Type: `User`
    - First name: `{First name}`
    - Last name: `{Last name}`
    - Username: `{firstinitial}{lastname}-admin@gitlab.com`
    - Primary email: `{firstinitial}{lastname}-admin@gitlab.com`
    - Activation: `Activate Now`
    - I will set password: `(checked)`
    - Password: (copy from 1Password)
    - User must change password on first login: `(checked)`
1. Click **Save**.

### Provisioner Task 0.3: Add User to Admin Group

> This task will automatically provision the user's Google Workspace email account based on the `G Suite SSO` application being assigned to the group.

1. Navigate to [Directory > Groups](https://gitlab-admin.okta.com/admin/groups).
1. In the search bar, search for `tf_okta_admin_group_`.
1. Right click and open the groups in a new tab.
    - `tf_okta_admin_group_everyone`
    - `it_okta_admin_group_{role}` (based on the access request)
1. Open the `tf_okta_admin_group_everyone` tab.
1. Click the **Assign people** button.
1. In the search box, search for the `{firstInitial}{lastName}-admin@gitlab.com` (not their non-admin user).
1. Click the `+` icon to add the user to the group.
1. Click the **Done** button in the top right corner.
1. Close the browser tab.
1. Open the `tf_okta_admin_group_{role}` tab.
1. Click the **Assign people** button.
1. In the search box, search for the `{firstInitial}{lastName}-admin@gitlab.com` (not their non-admin user).
1. Click the `+` icon to add the user to the group.
1. Click the **Done** button in the top right corner.
1. Close the browser tab.

### Provisioner Task 0.4: Add User to 1Password Activation Workflow

> This task requires the Google Workspace user account to be initialize for a few minutes before 1Password invitation email can be sent to avoid undeliverable bounce messages. Please take this opportunity to update the access request with the steps that you have performed so far (including screenshots) before starting these steps.

1. Navigate to [Directory > Groups](https://gitlab-admin.okta.com/admin/groups).
1. In the search bar, search for `1PW-Workflow-Activation` and open the group.
1. Click the **Assign people** button.
1. In the search box, search for the `{firstInitial}{lastName}-admin@gitlab.com` (not their non-admin user).
1. Click the `+` icon to add the user to the group.
1. Click the **Done** button in the top right corner.
1. Close the browser tab.

### Provisioner Task 0.5: Create 1Password Share Link for Temporary Credentials

> **STOP!** This task should be performed on the same day that you perform the assisted onboarding call and should not be performed at the time that you provision the previous tasks.

1. Open 1Password and locate the previous record that you created in your `AR Temp Credentials` vault named `Okta Temp Admin - {firstInitial}{lastName}-admin@gitlab.com`.
1. Just before the Zoom assisted onboarding or migration call, right click on the 1Password record and choose **Share**.
    <img style="width: 400px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_0_3_9.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_0_3_9.png" />
1. Provide the share link via Slack DM or Zoom chat.
    > This is ephemeral for 60 minutes and the password is about to be changed so there is not a security risk with how you share it.

---

## Step 1: Okta Account Activation

### Task 1.1: Copy 1Password Temporary Credentials to Vault

> **Laptop Transfer?**: You can skip this task.

1. Open the 1Password share link that the provisioner provided you in the Slack DM.
    1. If you are not signed into 1Password, you will
1. Copy the 1Password record to your `Private` vault.
1. Open 1Password application and have this record available to quickly edit.

### Task 1.2: Open a Chrome Incognito Browser Window

> Until we have a Chrome Profile set up with your new email account, we will perform the next few tasks using an incognito browser window to avoid interfering with your existing Okta account.
>
> **Laptop Transfer?**: You should start with this task.

1. Open **Google Chrome**.
1. Press **Cmd+Shift+N** to open a new incognito browser window.

### Task 1.3: Sign in to Okta with temporary password

> These steps should be performed in a Chrome incognito browser window.
>
> **Laptop Transfer?** Use your existing 1Password credentials and recovery information from their previous device. Hint: Mac will copy and paste between devices if both use the same Apple ID to avoid typing out your passwords.

1. Open the 1Password record for your temporary credentials to allow you to easily copy the password.
1. Copy and paste `https://gitlab.okta.com` into the URL bar of your incognito browser window.
1. Use your new credentials:
    1. Username: `{firstInitial}{lastName}-admin@gitlab.com`
    1. Password: (copy from 1Password record)
        <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_1_3_3.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_1_3_3.png" />

### Task 1.4: Change Password

> **Laptop Transfer?** You can skip this task.

1. You will be prompted that `Your Okta password has expired`.
1. Edit the 1Password record and generate a new password with 64 characters (maximum length in 1Password Web UI). Click **Save**.
    <img style="width: 300px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_1_4_2.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_1_4_2.png" />
1. Copy the generated password into the browser in the **New password** and **Re-enter password** fields.
1. Click **Change Password**.

### Task 1.5: Set up MFA with YubiKey 5 FIPS

> Our Okta admin account policies require `YubiKey 5 FIPS` models that are verified by IT Engineering behind-the-scenes. There is no way to restrict these models in the Okta configuration, so please be sure not to enroll your Mac Touch ID or other WebAuthn factors. You will be contacted by IT if any of your factors are not allowed and were removed administratively.
>
> **Laptop Transfer?** You can skip this task if you are using the same YubiKey from your old laptop.

1. You will be prompted to `Set up security methods`.
1. Click the **Set up** button for `Security Key or Biometric Authenticator`.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_1_5_2.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_1_5_2.png" />
1. On the popup prompt, select **USB security key**.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_1_5_3.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_1_5_3.png" />
1. Touch your YubiKey to activate MFA.
1. You will be redirected to the Okta user dashboard for your new account.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_1_5_5.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_1_5_5.png" />

---

## Step 2: Google Account Activation

### Task 2.1: Configure your Google Account Profile Picture

> **Laptop Transfer?** You can skip this task.

1. On the Okta user dashboard for your new account, click the `G Suite SSO Account` tile.
1. On the `Welcome to your new account` screen with the terms and conditions, click the **I understand** button.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_1_2.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_1_2.png" />
1. You will be redirected to the Google Account homepage.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_1_3.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_1_3.png" />
1. Click the **Personal Info** link in the left navigation.
1. Click the **Photo** icon to upload an avatar. If you don't have a picture readily available, navigate to `https://gitlab.com/{username}` and right click on your avatar and choose **Save image as** to save it to your desktop.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_1_5.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_1_5.png" />

### Task 2.2: Configure Google Account 2FA

> **Laptop Transfer?** You can skip this task if you are using the same YubiKey from your old laptop.

1. Click the **Security** link in the left navigation.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_2_1.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_2_1.png" />
1. In the `Signing in to Google` section, click the **2-Step Verification** row.
1. In the prompt, click the **GET STARTED** button.
1. Ignore the phone number instructions and click the **Show more options** link in the bottom left corner, then click **Security Key**.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_2_4.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_2_4.png" />
1. When prompted for `Have your security key?`, click the **NEXT** button. You can ignore the instructions for `Make sure your key is with you, but not connected to your device`. You can leave your YubiKey inserted.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_2_5.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_2_5.png" />
1. When prompted, **touch your YubiKey**.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_2_6.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_2_6.png" />
1. After your Security Key has been registered, you will be prompted to **assign a name** to the YubiKey. This is at your discretion, however the model number is a best practice (ex. `YubiKey 5C FIPS`).
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_2_7.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_2_7.png" />
1. After your key has been enrolled, your Google Account activation is complete.
1. **Close the incognito browser window**.

### Task 2.3: Create Google Chrome Profile

1. Using your **normal** Google Chrome browser window (not in incognito mode), **click on your avatar in the top right corner**, then click the **Add** button below the `Other Profiles` section.
    <img style="width: 250px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_3_1.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_3_1.png" />
1. When prompted to `Set up your new Chrome profile`, click the **Sign in** button.
    <img style="width: 600px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_3_2.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_3_2.png" />
1. When prompted to `Sign in to Chrome`, enter your admin email address (ex. `dmurphy-admin@gitlab.com`).
    <img style="width: 600px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_3_3.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_3_3.png" />
1. You will be redirected to Okta to sign in with your `dmurphy-admin@gitlab.com` credentials. **Copy the password from the 1Password record**.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_3_4.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_3_4.png" />
1. Remember that we never save passwords in Chrome. You can click the **Never** button.
1. When prompted to verify your identity, click the **USB security key** option.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_3_6.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_3_6.png" />
1. You will be prompted by Google to verify it's you. Click the **Continue** button.
    <img style="width: 350px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_3_7.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_3_7.png" />
1. You will be prompted that `Your organization will manage this profile`. Click the **Continue** button.
    <img style="width: 450px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_3_8.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_3_8.png" />
1. When prompted to `Turn on sync?`, click the **Settings** button.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_3_9.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_3_9.png" />
1. Click the **Manage what you sync** section.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_3_10.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_3_10.png" />
1. Change the `Sync everything` to `Customize sync`, then **uncheck** the `Passwords` toggle.
1. Click the arrow to the left of `Manage what you sync` to return back to the main configuration screen.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_3_12.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_3_12.png" />
1. To the right of your name, click the **Confirm** button.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_3_13.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_3_13.png" />
1. Click the **Customize your Chrome profile** row.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_3_14.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_3_14.png" />
1. Set the **name** to `GitLab Admin (Black)` and choose a **theme color** (ex. Black). This name refers to the PURPLE vs BLACK wristband access levels.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_3_15.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_3_15.png" />
1. You can verify your Chrome profile in the top right corner by clicking on your avatar. You can switch between profiles as needed.
    <img style="width: 350px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_3_16.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_3_16.png" />

### Task 2.4: Add bookmarks for Okta and Gmail

> **Laptop Transfer?** You can skip this task since your profile should automatically sync.

1. In your Chrome browser window with your `GitLab Admin (Black)` profile selected, press **Cmd+Shift+B** to show the bookmarks menu bar.
1. Navigate to `https://gitlab.okta.com` and sign in with your `{handle}-admin@gitlab.com` account using the credentials stored in 1Password. You will be prompted to verify your identity with USB Key MFA and touching your YubiKey.
1. On the Okta user dashboard, **right click** on the `Admin` button and **open in a new tab**.
1. Press the star icon to bookmark this page, and edit the name to `Okta Admin`.
    <img style="width: 350px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_2_4_4.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_2_4_4.png" />
1. **Close** the browser tab.
1. On the Okta user dashboard, **right click** on the `G Suite SSO Mail` tile and **open in a new tab**.
1. Press the star icon to bookmark this page, and edit the name to `Gmail`.
1. Do not close the browser tab.

---

## Step 3: 1Password Configuration

### Task 3.1: Activate 1Password Account

> **Laptop Transfer?** You can skip this task.

1. In the Gmail browser tab, open the email titled `Join GitLab on 1Password`.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_3_1_1.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_3_1_1.png" />
1. Click the **Join now** button.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_3_1_2.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_3_1_2.png" />
1. You will be prompted to **enter a new 1Password master password**.
    1. This must be different than your current 1Password master password for your `{handle}@gitlab.com` account.
    1. This should be at least 24 characters, so it is suggested to use a phrase that you can memorably type rather than numbers and symbols that you can forget.
    1. Do not store this password in your 1Password vault. This should only be typed from memory and written on the printed Emergency Kit and stored in your home safe or other safe offline location.
    1. This is the one password that cannot be autofilled.
        <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_3_1_3.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_3_1_3.png" />
1. You will be showed your Secret Key. Click the button to **Download** your emergency kit.
    1. It is your discretion whether to store this in your existing 1Password private vault or only store it on paper in a safe location. Never store your secret key and master password in the same place digitally (only on paper).
    1. If you keep your credentials fully digital, never store your master password.
1. After the PDF has been downloaded, print this on your local printer. You can then write your password on it and store it in your home safe or another safe location.
    1. Do not store this piece of paper in a backpack or anything that travels with you.
    1. Do not put this in a drawer in your desk or put it anywhere visible to anyone.
1. Delete the `1Password Emergency Kit` PDF file from the `Downloads` folder.
    <img style="width: 400px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_3_1_6.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_3_1_6.png" />
1. Open your Trash from the dock. Right click on the `1Password Emergency Kit` PDF file and click **Delete Immediately**.
    <img style="width: 350px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_3_1_7.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_3_1_7.png" />
1. Your account has been successfully activated. You can ignore the message `your account administrator has been notified to complete the recovery`.

### Task 3.2: Configure Browser Extension

> **Warning:** You need to wait to receive a `Welcome to 1Password` email in your new `{handle}-admin@gitlab.com` Gmail inbox (not your normal email account). Please refresh your email inbox until this email appears indicating that your account has been provisioned. This allows time for the background job automation to provision your 1Password account. No manual intervention is needed by an administrator, this simply takes up to 5 minutes usually.
>
> **Laptop transfer?**: You will not receive an email, however you should follow all other steps to setup 1Password properly for your `-admin` credentials ONLY.

1. After you have received the email (see above), open a new browser tab, and navigate to `https://gitlab.1password.com`.
1. Sign in with your email address (`{handle}-admin@gitlab.com`), secret key, and master password.
1. In the `Get the 1Password browser extension` section, click the **Get it now** button.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_3_2_3.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_3_2_3.png" />
1. On the Chrome Extension page, click the **Add to Chrome** button.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_3_2_4.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_3_2_4.png" />
1. In the top right corner, click the plugin icon and click the pin icon for 1Password.
    <img style="width: 350px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_3_2_5.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_3_2_5.png" />
1. In the top right corner, click the plugin icon and click the dots icon for 1Password and select **Settings**.
    <img style="width: 400px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_3_2_6.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_3_2_6.png" />
1. On the **Settings > General** page, uncheck the toggle for `Integrate with 1Password app`. This allows us to add separate 1Password accounts that don't conflict with your normal user account on your laptop.
    <img style="width: 600px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_3_2_7.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_3_2_7.png" />
1. Scroll down to `Accounts & Vaults`.
1. (If exists) Click the arrows for your `gitlab` account and click **Sign Out**.
1. (If exists) Remove any personal/family accounts as well. This will not affect your 1Password usage in other Chrome profiles or on your Mac app.
1. Click the **Sign in to a new account** button.
1. Sign in with your email address (`{handle}-admin@gitlab.com`), secret key, and master password.
1. If this process gives you any trouble, you might need to repeat these steps to remove your existing 1Password accounts.
1. Your browser extension has now been configured and you can access your vault credentials for your `{handle}-admin@gitlab.com` 1Password account from this Chrome browser profile. You will not be able to access this 1Password account from the normal Mac app.
1. Click on the 1Password logo in the top right corner of your browser to open the extension. If you see your vault, this is working properly. If you have a spinning wheel, try closing and re-opening the Chrome browser window to be prompted to unlock your vault.

### Task 3.3 Add 1Password bookmark

1. Click the 1Password icon in the top right browser toolbar.
1. Click **New Item** and click **Login**.
    <img style="width: 500px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_3_3_2.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_3_3_2.png" />
1. You will be redirected to the 1Password website and automatically authenticated.
1. Click the **Cancel** button in the top right corner.
1. Click the 1Password **logo** in the top left corner.
    <img style="width: 700px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_3_3_5.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_3_3_5.png" />
1. Click the **Private** vault tile.
1. This is the vault web UI where you can add and manage records.
1. Click the **star** icon in the top right corner to bookmark this page. Edit the description to `1Password`.
    <img style="width: 350px; border: 1px #DCDCDE solid; padding: 2px;" alt="OktaAdminOnboarding_3_3_8.png" src="/images/it/runbooks/okta/admin/onboarding/OktaAdminOnboarding_3_3_8.png" />

### Task 3.4 Add Okta Account to New 1Password Vault

> **Laptop Transfer?**: You can skip this task.

1. In the 1Password webpage, click the `+` button to add a new `Login` record.
1. Use the following to fill out the record details.
    - **Title:** `Okta Admin`
    - **Username:** `{firstInitial}{lastName}-admin@gitlab.com`
    - **Password:** Click the key icon and generate a 64-character password with symbols and numbers.
    - **Website:** `https://gitlab.okta.com`
1. Click **Save**.
1. Drag this browser tab out of the current window to move it to it's own new window.

### Task 3.5 Change Okta Password

> This password change allows us to rotate your credentials now that the record is stored in your BLACK account vault, and ensures that your PURPLE account vault does not have the credentials to sign into your Okta Admin account.
>
> **Laptop Transfer?**: You can skip this task as long as you did not expose your password at any point.

1. Using the original browser window, click on the `Okta Admin` bookmark that you created.
1. In the top right corner of the Okta webpage, click on your name and click **Settings** from the dropdown list.
1. On the right side of the page, locate the `Password` security method and click the **Reset** button. Press **Yes** when prompted.
1. You will be prompted to sign in with your YubiKey and the old password (from the `Okta Temp Admin` 1Password record).
1. When prompted to set the new password, copy the value from the 1Password record that you just created in the Web UI.
1. After your password has been changed, delete the `Okta Temp Admin` record from your 1Password app since these credentials are no longer valid and are exclusively stored in your admin vault now.

---

## Questions and Feedback

If you experience any problems, please tag `@it-eng` in `#it_help` for assistance.

If you have feedback on this runbook, please create a new merge request with suggested changes.
