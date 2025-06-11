---
title: "Figma provisioning and deprovisioning"
description: "Guidance on how to provision/deprovision Figma"
---

Figma provisioners/deprovisioners are found in the [Tech Stack YAML file](https://gitlab.com/gitlab-com/www-gitlab-com/-/blob/master/data/tech_stack.yml#L1780).

While multiple departments have team members with [Editor](https://help.figma.com/hc/en-us/articles/360039960434-Roles-in-Figma#editor) roles as paid seats, the UX department is the business owner.

## Figma seats

### Seat types

At GitLab, we use two of three available [Figma seat types](https://help.figma.com/hc/en-us/articles/360039960434-Free-and-paid-seats-in-Figma): **Viewer-restricted** and **Full**.

* **Viewer-restricted:** Free seat. People with a **Viewer-restricted** seat can view and comment on files to collaborate.
* **Full:** Paid seat. People with a **Full** seat can create and edit files.

**Note:** We do not use the **Viewer** role as this can result in unexpected seat upgrades. All viewer roles should be marked as **Viewer-restricted**, which is also the default seat type when a user is added.

[Learn more about roles in Figma](https://help.figma.com/hc/en-us/articles/360039960434).

### Seat options

Figma has three different products that seat types can apply to:

* **[Design](https://www.figma.com/design-overview/):** A **Full** seat allows a team member to edit Design files. When you upgrade someone to a **Full** Design seat, they'll automatically get upgraded to a **Full** Dev Mode seat at no additional cost.
* **[Dev Mode](https://www.figma.com/dev-mode/):** Dev Mode is included with a **Full** Design seat and is also available as a standalone paid seat.
* **[FigJam](https://www.figma.com/figjam/):** A **Full** seat allows a team member to edit FigJam files.

## Provisioning

### Access request issues

Every approved Figma seat must have a corresponding access request issue with budget approval. Seat upgrades should not occur outside of access requests by using the Figma admin or sharing tools.

Provisioners will be pinged in the access request issue to grant access. As a provisioner, ensure:

* The team member's manager has approved access.
* The team member understands what seat option they need.
  * A **Viewer-restricted** role is often enough when a team member only needs to view and comment on files to collaborate.
  * The difference between a **Design** and **FigJam** seat can be confusing at first. Ensure the team member knows which seat they need in order to perform their role.
  * A team member may have the same, or a different seat type for **Design** and **FigJam**.
* There is budget approval. Billing group admins should work with their Finance partners to ensure seat counts are not going over the maximum spend allocated for the fiscal year.

### Quarterly audits

Our billing cycle includes quarterly true-ups. Each quarter, admins receive an email informing them of the upcoming invoice. This gives them an opportunity to review added seats before approving the new invoice.

To audit seats:

1. Review all new seats and ensure each team member (or [guest](https://help.figma.com/hc/en-us/articles/4420557314967-Members-versus-guests#guests)) has an approved access request issue.
1. Downgrade anyone who shouldn’t have a paid seat.
1. Mark your billing group as `Reviewed`.

Once confirmed, the Figma business owner will:

1. Lock in the final invoice amount.
1. Reach out to our Figma rep to share total seat counts for R&D, Marketing, and Sales. These will be added to line items on the invoice.
1. Ensure the invoice is uploaded to Coupa and goes through our full Procurement process.

## Deprovisioning

Deprovisioners are included on offboarding issue templates.

* To deprovision, search for the team member's email address from within your billing group. Use the ellipsis (⋯) menu to the right of the member's information and select 'Remove'.
* The team member is removed from the organization regardless of their seat type.
* When a member is removed:
  * Anyone with 'can edit' access to the member's files will be able to continue editing and can move the files.
  * Their draft files stay within the organization and admins can view and manage the files.

For more information, refer to Figma's [Remove people from an organization](https://help.figma.com/hc/en-us/articles/360040453453-Remove-people-from-an-organization) documentation.
