---

title: "Gainsight User Administration"
---
<link rel="stylesheet" type="text/css" href="/stylesheets/biztech.css" />

The specific aspects of user management in Gainsight are detailed here.

## GitLab Access Requests and Offboarding Issues

For a user to gain access to Gainsight, an [Access Request](/handbook/business-technology/end-user-services/onboarding-access-requests/access-requests/) (AR) must be created. These should be created automatically for new employees. Similarly, when users leave GitLab an Offboarding issue will be created. The following GitLab pages will show any ARs or Offboarding issues that need to be actioned by the CS Ops team:

- [Access Requests](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/?sort=milestone_due_desc&state=opened&label_name%5B%5D=CSOpsAR%3A%3AAction%20Needed&first_page_size=20&_gl=1*hm7n*_ga*MTc0NDE2MzMzOS4xNjE4NDE5NTU3*_ga_ENFH3X7M5Y*MTY3NTE3MzU0Ny4xMDMuMS4xNjc1MTczNTY4LjAuMC4w): When a user joins GitLab, the **CSOps::Action Needed** label should automatically be added to their AR (there may be situations where this will need to be added manually). If an AR has this tag it will appear on the list. Once the needed actions have been taken, change the label to **CSOpsAR::Completed** and it will no longer appear on the list.
- [Offboarding Issues](https://gitlab.com/gitlab-com/team-member-epics/employment/-/issues/?sort=milestone_due_desc&state=opened&label_name%5B%5D=offboarding&not%5Blabel_name%5D%5B%5D=CSOps%3A%3AOffboarding%20Completed&first_page_size=20&_gl=1*rt0jmx*_ga*MTc0NDE2MzMzOS4xNjE4NDE5NTU3*_ga_ENFH3X7M5Y*MTY3NTE3MzU0Ny4xMDMuMS4xNjc1MTczNTY4LjAuMC4w): Any issues that DO NOT have the **CSOps::Offboarding Complete** label will appear on this list. Once the needed actions have been taken, change the label to CSOps::Offboarding Complete and it will no longer appear on the list.

There are some situations where an AR is not automatically created. If this happens for a user that should receive a Gainsight license, direct the user/user’s manager to create an AR. Make sure to add the **CSOps::Action Needed** label to the AR once it is created so it will not get lost.

If a user that is not already approved to receive a Gainsight license requests access to Gainsight, work with CS Ops leadership to determine if the user should receive a Gainsight license or not.

## Salesforce Account Setup & License Provisioning

A Salesforce account should be automatically created when a user joins GitLab. If you cannot locate the user’s Salesforce account, see the [Troubleshooting](/#troubleshooting) section below.

Once you have located the user record, follow these steps. Although some of these steps may be already completed by Sales Systems, it is important to confirm that the user’s setup is done correctly in Salesforce before giving access in Gainsight.

1. In Salesforce, navigate to the SFDC **User** page:
    1. Setup → Manage Users → Users → Find user on list
2. On the user’s page, confirm that the following things are correct:
    1. The **Active** box is checked
    2. The **User License** = Salesforce
    3. The **Role** is populated/correct
    4. The **Profile** is populated/correct (will be Account Manager for most users)
    5. The **[Comp] CSM Team** is populated/correct
    6. The **Manager** field is populated/correct
3. Also on the user’s page, confirm they have the Gainsight permission set:
    1. At the top of the page click on **Permission Set Assignments** and confirm they have the “Gainsight NXT” permission set. If that is not on the list, click Edit Assignments. Find Gainsight NXT on the list and add to their list of permission sets, then click Save.

Once you have confirmed the user account is set up correctly, you will need to assign a license:

1. Navigate to [this link](https://gitlab.my.salesforce.com/ui/setup/mfpackage/UserLicenses/d?allPackageId=033U0000000CdVi&packageLicenseId=0504M000000XZsn&retURL=%2F0A3%3Fsetupid%3DImportedPackage%26retURL%3D%252Fui%252Fsetup%252FSetup%253Fsetupid%253DStudio) or follow these steps in Salesforce:
    1. Click Setup → Installed Packages → Gainsight CSM
    2. Click **Manage Licenses** (this will display the number of allowed vs used licenses)
    3. Click **Add Users** to find a person to add. They must already exist as a user in Salesforce to appear on the list.

You can see the amount of used and allowed licenses on the Gainsight CSM Package Details page. In a situation where we run out of Gainsight licenses, work with CS Ops leadership to determine a plan - will either need to remove licenses from existing users or purchase more licenses.

## Gainsight Account Setup

Once a license has been provisioned in Salesforce, you will need to perform some additional steps in Gainsight to complete the user setup.

### SFDC User Connector Job

**Important**: All users in Gainsight are imported from Salesforce, we do not create users directly within Gainsight.
{: .alert .alert-warning}

Gainsight uses the a Connector job to sync users and user information from Salesforce. This job is called `SFDC User Sync` and can be accessed on [this page in Gainsight](https://gitlab.gainsightcloud.com/v1/ui/connectors#/jobs) or by navigating to Administration → Integrations → Connectors 2.0 → Jobs tab.

This job runs once a day and brings in any new users as well as updates any information that has changed in Salesforce.

To confirm that a user has been synced successfully from Salesforce you can search for the user by:

1. Navigate to User Management and search for the user (recommended to search by email)
2. Click the ... menu and choose Edit User
3. Confirm that the following fields have synced from Salesforce and are correct:
    1. User Role
    2. Profile Name
    3. Manager

If the user has not yet been synced from Salesforce to Gainsight, you can either 1) wait until the next sync job or 2) trigger a manual sync. You can do a manual sync by clicking the 3 dots by the job name → Run Job → Data modified since last sync date and time.

**Note**: the `SFDC User Sync` job will only sync users that are Active in Salesforce. If the user has not yet been created in Salesforce or if they have not been set to Active, the sync will not bring them over to Gainsight.
{: .alert .alert-warning}

You can see the logs/details of a specific sync by navigating to Connectors 2.0 → Activities tab. Then find the sync in the list, click the 3 dots, and select Job Activity. From here you can see the number of successful and failed records. You also have the option to download any failed records to see the specific error messages.

For more information on troubleshooting specific errors, see the [Troubleshooting](/#troubleshooting) section below.

## Gainsight User Management

Once you have confirmed the user has synced from Salesforce successfully, you will need to do the following:

1. In User Management click Edit User
2. Confirm the following fields are filled out/have been synced from Salesforce:
   - The **User Role** is populated/correct
   - The **Manager** field is populated/correct
3. Under License Type, select Full User
4. Click Add Permission Bundles and add the user to the correct bundle (this is usually specified on the Access Request issue). For more information see the [Gainsight Bundles (Permission Sets)](#gainsight-bundles-permission-sets) section.
5. Perform these steps if applicable to the user:
   - *(If applicable)* For Sales users, fill in the Page Layout field to say “Account Planning”
   - *(If applicable)* For CSM Managers or anyone who needs to be able to edit the CSM assigned to an account, change the CSM Edit? field to “Yes”.
   - *(If applicable)* If the user is a PubSec CSM or leader, set the US PubSec User field to Yes.
   - *(If applicable)* From the main User Management page there will be a status next to the user’s name. Occasionally the user is inactive, and you will need to click the ... menu and select Activate User
6. Add the user to the Okta gainsight user group:
   1. Navigate to https://groups.google.com/ (you must be a groups.google.com admin any groups to appear).
   2. Go to the okta-gainsight-users group
   3. Go to Members, then Add Members and use the new user's email address to add them to the group. Once they have been added successfully, they will see a Gainsight tile in Okta (this may take some time to appear).

Note: The most important fields that you should confirm are filled out are the **User Role** field, and for PubSec users the **US PubSec User** field. These fields are used to automatically add the user to the correct Sharing Group (see more details below in the [Data Permissions/Sharing Groups](#data-permissions-and-sharing-groups) section.
{: .alert .alert-warning}

## Gainsight Bundles (Permission Sets)

Gainsight bundles give access to specific pages and modules in Gainsight. You can navigate here by going to Administration → Users and Permissions → Permission Bundles.

From here you can assign users to a bundle (can also be done from the user’s record as described above), check which users are in a specific bundle, create new bundles, or change access permissions for a specific bundle.

To add a user to a bundle or see a list of users in a bundle, click the 3 dots next to the bundle name → Assign users.

To change access for a specific bundle, click the 3 dots next to the bundle name → Edit.

**Note:** If Gainsight releases a new feature that a specific group of users will need access to, you will probably need to go into each applicable group, navigate to the new feature, and check the box. This will not be done automatically.
{: .alert .alert-info}

These are the most used bundles:

| Bundle Name                | Description                                                  |
| -------------------------- | ------------------------------------------------------------ |
| Default                    | Bundle assigned to GS admins, provides access to all areas of Gainsight. |
| GS Admin sans provisioning | This is a GS admin role that has access to everything except for User Management. |
| CSM Users                  | Permission group for CSM Users. Includes access to C360, Dashboards, Home, Timeline, Cockpit, Success Plans, and analytics for surveys and NPS. This is the bundle assigned to most users. |
| SAL Users                  | This is the role for SALs to run and manage their account planning. |
| View                       | Default View User Group allows admin to assign view access to resources for selected users. |
| View Analytics             | Default permission bundle for Viewer Analytics Licensed Users which gives access to Dashboards, Timeline, and Company 360. |

## Data Permissions and Sharing Groups

We use data permissions and sharing groups to grant or restrict access to specific records in Gainsight. This is used at GitLab specifically to protect PubSec data. You can access this by navigating to Administration → Users and Permissions → Data Permissions.

In order for a user to access Gainsight data they need to be assigned to a sharing group. They should be added to a group automatically based on their user role. If the user role is not filled out or wasn’t when the user was synced from Salesforce, you will need to add them to a sharing group manually.

1. In Data Permissions, click on the Sharing Groups tab
2. From the list, find the appropriate group for the user.
    1. The most important consideration is whether or not the user is PubSec or not. Most users are not PubSec and will be added to the Non_PubSec group. But in order for a PubSec user to access PubSec records in Gainsight, they must be added to a PubSec group.
3. Click the pencil icon to edit the group
4. If you have added the User Role on the user’s record, you can click on the *Refresh User Group* button and the user should be added to the correct group automatically. You can search for the user at the top of the list of users
5. To add a user manually, click *Add Users Manually*. From there you can search for the user, check the box by their name, and click Save.

You can see which account records are displayed to which sharing groups by navigating to Data permissions → Company → Rule based.

## Page Layouts

C360 page layouts allow us to hide or display different C360 views to users in Gainsight. You can view/edit layouts by navigating to Administration → 360 Layouts → C360. Users are automatically assigned to the Default layout unless specified otherwise.

We currently have three main C360 layouts:

| Name             | Description                                                  |
| ---------------- | ------------------------------------------------------------ |
| Default          | The default layout for CSMs and non-SALs. The CSM field is displayed but not editable. |
| CSM Edit         | An exact copy of the default layout except the CSM field is editable. This is assigned to users when the **CSM Edit?** field on the User record = Yes. |
| Account Planning | Layout specifically for Sales/SALs for account planning. This is assigned to users when the Page Layout field on the User record = Account Planning. |

## Removing Gainsight Access

When a user leaves GitLab or no longer requires access to Gainsight, you can remove deactivate their account and remove their license. For GitLab employees who leave GitLab, an offboarding issue should be created as detailed in [GitLab Access Requests and Offboarding Issues](/#gitlab-access-requests-and-offboarding-issues).

To deactive a user's Gainsight account:

1. Navigate to User Management and search for the user (recommended to search by email)
2. Click the ... menu and choose **Make Inactive**
3. You will now see a red "INACTIVE" box next to their name in the User list. This user will now not be able to log in or view Gainsight in any way.

You may also need to remove the user's Gainsight license in Salesforce:

1. Click Setup → Installed Packages → Gainsight CSM
2. Click **Manage Licenses**
3. Search for the user on the list and click the *Remove* next to their name.

## User Access to Gainsight

Users can access Gainsight directly from Okta or through Salesforce.

To access Gainsight through Okta:

1. Go to https://gitlab.okta.com/app/UserHome#
2. Click on the Gainsight tile.
   - If you don’t see the Gainsight tile, first try searching for it with the search bar at the top.
If you are unable to locate the Gainsight tile, ask for help on the #gainsight-users Slack channel

To access Gainsight through Salesforce:

1. Log in to Salesforce, and click on the "Gainsight NXT" tab at the top of the screen.
   - If you don't see "Gainsight NXT" as a choice, you can add it by clicking the "+" sign, choosing "Customize My Tabs" and choosing Gainsight NXT from the applications list.
To hide the Salesforce header to maximize Gainsight screen space, click the "double arrow" icon in the top right corner of the Gainsight header, next to your profile icon.

## Troubleshooting

Coming soon!
