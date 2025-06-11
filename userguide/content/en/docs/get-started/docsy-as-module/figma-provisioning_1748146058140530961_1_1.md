---
title: "Figma provisioning and deprovisioning"
description: "Guidance on how to provision/deprovision Figma"
---

Figma provisioners/deprovisioners are found in the [Tech Stack YAML file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml#L1780).

While multiple departments have team members with [Editor](https://help.figma.com/hc/en-us/articles/360039960434-Roles-in-Figma#editor) roles as paid seats, the UX department is the business owner.

## Figma seats

### Seat types

At GitLab, we use two of three available [Figma seat types](https://help.figma.com/hc/en-us/articles/360039960434-Free-and-paid-seats-in-Figma): **Viewer-restricted** and **Full**.

* **Viewer-restricted:** Free seat. People with a **Viewer-restricted** seat can view and comment on files to collaborate. All GitLab team members are added with this seat type during onboarding.
* **Full:** Paid seat. People with a **Full** seat can create and edit files. A paid seat requires [provisioning](#provisioning).

**Note:** We do not use the **Viewer** role as this can result in unexpected seat upgrades. All viewer roles should be marked as **Viewer-restricted**, which is also the default seat type when a user is added.

[Learn more about roles in Figma](https://help.figma.com/hc/en-us/articles/360039960434).

### Seat options

Figma has three different products that seat types can apply to:

* **[Design](https://www.figma.com/design/):** A **Full** seat allows a team member to edit Design files. When you upgrade someone to a **Full** Design seat, they'll automatically get upgraded to a **Full** Dev Mode seat at no additional cost.
* **[Dev Mode](https://www.figma.com/dev-mode/):** Dev Mode is included with a **Full** Design seat and is also available as a standalone paid seat.
* **[FigJam](https://www.figma.com/figjam/):** A **Full** seat allows a team member to edit FigJam files.

## Provisioning

### Access request issues

Every approved paid Figma seat must have a corresponding [access request issue](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?description_template=Individual_Bulk_Access_Request) with budget approval. Seat upgrades can only happen with Okta access through Google groups and not by using the Figma admin or Figma's sharing tools.

Provisioners need to be pinged in the access request issue to grant access. As a provisioner, ensure:

* The team member's manager has approved access.
* The team member understands what seat option they need.
  * A **Viewer-restricted** role is often enough when a team member only needs to view and comment on files to collaborate. All team members start with a **Viewer-restricted** role, so no action may be needed.
  * The difference between a **Design** and **FigJam** seat can be confusing at first. Ensure the team member knows which seat they need in order to perform their role.
  * A team member may have the same, or a different seat type for **Design** and **FigJam**.
* There is budget approval. Billing group admins should work with their Finance partners to ensure seat counts are not going over the maximum spend allocated for the fiscal year.

Once an access request issue has manager approval:

1. Sign in to [Google Groups](https://groups.google.com/).
1. Click **My groups**.
1. Click the name of the group that you want to add the user to. All Google groups which manage users in Figma application are formatting as `okta-figma-xxxxx-users` and include descriptions with access details. A user only needs to be added to the group that matches the highest level of permissions the user needs. 
1. Next press the **People** tab on the left side and select **Members**.
1. To add a member press the **Add Members** button. When a member is added from the group it may take a few minutes for the sync to happen between Google and Figma. Once the sync happens the user's details will be updated in the Figma admin. If you are unable to access a specific group, please reach out to another provisioner for help.
1. Request help in the `#figma_maintainers` Slack channel to have a Figma application admin (different from provisioner) confirm the user's status in Figma's admin and to assign a billing group and workspace (optional). Currently, it's not possible to automate assigning a team member to a billing group or workspace in Figma.

### Quarterly audits

Our billing cycle includes quarterly true-ups. Each quarter, admins receive an email informing them of the upcoming invoice. This gives them an opportunity to review added seats before approving the new invoice.

To audit seats:

1. Review all new seats and ensure each team member (or [guest](https://help.figma.com/hc/en-us/articles/4420557314967-Members-versus-guests#guests)) has an approved access request issue.
1. Downgrade anyone who shouldn't have a paid seat (see steps under [deprovisioning](#deprovisioning)).
1. Mark your billing group as `Reviewed`.

Once confirmed, the Figma business owner will:

1. Lock in the final invoice amount.
1. Reach out to our Figma rep to share total seat counts for R&D, Marketing, and Sales. These will be added to line items on the invoice.
1. Ensure the invoice is uploaded to Coupa and goes through our full Procurement process.

## Deprovisioning

A user will automatically be fully deprovisioned when they are no longer with GitLab. Additionally, a paid seat can manually be downgraded to an unpaid **Viewer-restricted** seat.

* When a member is fully removed:
  * Anyone with 'can edit' access to the member's files will be able to continue editing and can move the files.
  * Their draft files stay within the organization and Figma admins can view and manage the files.

For more information, refer to Figma's [Remove people from an organization](https://help.figma.com/hc/en-us/articles/360040453453-Remove-people-from-an-organization) documentation.

To downgrade a user to an unpaid seat:

1. Sign in to [Google Groups](https://groups.google.com/).
1. Click **My groups**.
1. Click the name of the group that you want to remove the user from. (Note that the group will correspond with their current access type.)
1. Next press the **People** tab on the left side and select **Members**. This will show you all the members currently in the group.
1. Hover over a user and select the checkbox that appears. Then click the remove member button (Looks like a circle with a horizontal line across) at the top of the member list. When a member is removed from the group it may take a few minutes for the sync to happen between Google and Figma. Once the sync happens the user's details will be updated in the Figma admin. If you are unable to access a specific group, please reach out to another provisioner for help.
1. Request help in the `#figma_maintainers` Slack channel to have a Figma application admin (different from provisioner) confirm the user's status.
