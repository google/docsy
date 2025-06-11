---
title: "Marketing Owned System Provisioning Instructions"
description: "Marketing Operations manages the majority of marketing-owned systems."
---

## Marketing Owned Systems

Marketing Operations manages the majority of marketing-owned systems. These can be found on the [Marketing Operations](/handbook/marketing/marketing-operations/) page under **Tech Stack**.

## Instructions

Below are instructions and accompnaying screenshots of how to provision new users within various marketing-owned systems.

### LinkedIn Sales Navigator (LISN)

1. From the [seat management](https://www.linkedin.com/sales/admin/seats?trk=d_sales2_nav_admin) tab of LISN, click the **Assign seats from CRM** button
     ![''](/images/handbook/marketing/LISN-SeatManagement.png)
1. Search for your desired user and click **Assign**
     1. You can search by *name*, *email*, or *SFDC User ID*
     ![''](/images/handbook/marketing/LISN-User-Search.png)

Some users are only given `Reporting` access. For these users you will provision them as above - then, once they have accepted the invite you will edit their user as follows:

1. Search for the user by name
1. Click the **Edit** drop-down on the right
1. Select the radio-button associated with their access leve (`Reporting-only`)
     ![''](/images/handbook/marketing/LISN-User-EditAccess.png)

### Marketo

1. From the Marketo Admin panel > Admin > Security > [Users & Roles](https://page.gitlab.com/#UR0A1), click the **Invite New User** button
     ![''](/images/handbook/marketing/Marketo-UsersAndRoles.png)
1. Populate the new user's info and click **Next**
     ![''](/images/handbook/marketing/Marketo-User-InviteNewUser.png)
1. Select the checkboxes for the relevant *permissions* - hint: to know what permissions to assign, look at other provisioned users of the same title/role
     ![''](/images/handbook/marketing/Marketo-User-Permissions.png)
1. *Step 3: Message* auto-generates a welcome message, all you have to do is click **Send**
     ![''](/images/handbook/marketing/Marketo-User-Message.png)

### Outreach

1. From [Settings > Users](https://app1a.outreach.io/users?direction=asc&order=first_name) within Outreach, select/search for the user you are provisioning
     ![''](/images/handbook/marketing/Outreach-Settings-Users.png)
1. If the lock symbol is **red** that is a locked user and you must first unlock them: Click the three dots on the right > Unlock
     ![''](/images/handbook/marketing/Outreach-User-Unlock.png)
1. To provision the user, click the three dots again > Send Claim Link
     ![''](/images/handbook/marketing/Outreach-User-SendClaimLink.png)

If the user you are provisioning does not show up in your search results, you can manually add them from Salesforce via an Import

1. Click the lightning bolt in the top right-hand corner
1. Choose **Salesforce Load**
     ![''](/images/handbook/marketing/Outreach-User-SFDC-Import.png)
1. From the pop-up, select **User** in the drop-down
1. Search for the *name*, *email*, or *SFDC User ID* in the search menu and select your desired user > Import
     ![''](/images/handbook/marketing/Outreach-User-SFDC-Import-User.png)
