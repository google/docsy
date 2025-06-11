---
title: "Product and Solution Marketing Asset Inventory"
---
This page used to provide an inventory of assets created and maintained by the [Product and Solution Marketing](/handbook/marketing/brand-and-product-marketing/product-and-solution-marketing/) team. We have since updated the inventory so it includes all assets and it can now be found within [Marketing Strategy & Performance](/handbook/marketing/strategy-performance/)

We have kept the following info specific to the Product and Solution Marketing team as it may assist them in determining how to enter into the Marketing inventory.

</div>

## Which assets belong to Strategic — edge cases

### Things Product and Solution Marketing doesn't own within GitLab, but contributes to

Product and Solution Marketing often makes significant contributions to assets that are owned by other GitLab teams. Examples include a product release post with a PMM messaging lead, or a Sales enablement resource that heavily relies on competitive research. This raises the question of whether certain assets "belong to" SM enough to be in our inventory. Our bias will be to include these assets.

If we can identify an "SM DRI" and we made significant contributions, we will inventory the asset. We will also take care to not misrepresent that we wholly created or own the asset.

### Things GitLab doesn't own or manage, but contributes to

Product and Solution Marketing also contributes to assets that are owned or managed by others outside of GitLab, such as a recording of us speaking at a conference, or a piece we wrote in an industry publication. When those assets live somewhere GitLab does not manage, we will try to make a GitLab-owned and managed copy of the asset for internal use. Our bias will be to include assets like these in this inventory, even without our own copy of them.

### Things we just review and approve

We are interested in reviewing, vetting, and then including assets in the SM inventory even when our contributions are minimal or null, other than having reviewed and approved. Our motivations are first, to serve those searching for "everything related to X" and second, for this inventory to serve as a repository of high quality assets. As subject matter experts, SM team members are already, sometimes asked to review and approve of content or other assets. We want to multiply that value by inventorying what we've reviewed.

We celebrate that GitLab enables any team member, and in many cases even community members, to contribute on the company web site, Unfiltered blog, handbook, Unfiltered YouTube channel, and so on. Those are great examples of GitLab values and culture in action, and it's indisputably generative. We also acknowledge, however that this can result in impedingly uneven asset quality, such as in tone, focus, or technical depth. As a result, it can be difficult for non-SMEs to know whether an asset they find is fit for reuse in contexts with higher quality requirements.

We do not, at this time have a process for ingesting, reviewing, or including assets like these. While we consider adding additional metadata and process, you might already find some in the inventory.

## In due course - there have been several changes to the team recently, so this part may no longer be applicable but saving just in case

{{% panel header="**Update the inventory**" header-bg="info" %}}
New assets should be added to the inventory as part of our definition of done for SM Support Request Issues, i.e. as part of finishing the asset itself. We'll explore use of the template and whether we can provide useful links and e.g. require checking a particular box that in this issue, assets were either not created or were inventoried.

The team member who is the SM DRI for an asset — the primary creator, contributor, and/or decision maker from SM — is responsible for adding the asset to the inventory.

Creating assets is often a collaboration between Product and Solution Marketing and other GitLab team members or community members. By inventorying an asset here, we're not indicating it's "owned" by SM v. other parts of the department or company, only whether SM has contributed enough to identify a DRI for our team and in our view, to warrant having it here.

SM leadership will support team members in completion of the inventory, and they will support broader GitLab team members by serving as backup DRIs for their team's assets.
{{% /panel %}}

### **Lead a group conversation**

The SM group conversation lead could share this page and the inventory with the call, showing assets recently created. This handbook-first approach can reduce slides in the deck and relieve some of our six-week scramble to list all the things.

Since GC decks list both assets and activities, we'll need to either still list activities separately or find another source, like tagging Calendar events and pulling those into a shared view...

Demonstrating the inventory briefly and regularly would also encourage self service, before asking if we have a thing, where it is, or for us to make it.

### **Ask for help or suggest a change**

To make a change request, or if you have questions or need help please open an [SM support request](https://gitlab.com/gitlab-com/marketing/product-marketing/issues/new?issuable_template=A-SM-Support-Request).

You're also welcome to ask in our [#strategic_marketing Slack channel](https://gitlab.slack.com/archives/CPTKGRXHP), but remember it's ephemeral :)

We have a [backlog of change requests](https://gitlab.com/dashboard/issues?scope=all&utf8=%E2%9C%93&state=all&assignee_username=brianglanz&milestone_title=SM%20-%20Backlog&search=Inventory) for the database, dashboard, and project.

## Learn@GitLab Inventory

### Inventory Files

The inventory files provide a standardized way to capture, find, and reference created assets (inventory) which can be used by everyone. The data is kept in the yml files in the /data/inventory/ directory. There is one file per team to make ownership clear and make management easier.

#### Layout

The `inventory` folder lives under `/data` of the website and is organized in the following manner to enable scaling to multiple groups. The thought is that each group can be [CODEOWNERS](https://docs.gitlab.com/ee/user/project/codeowners/) for their own team inventory, but it should still be easy to search through the inventory of "everything" to find what you are looking for.

<pre>
/data/inventory
     |
     ---- learn.yml (Technical Marketing - will change to team name in another MR)
     |
     ---- pmm.yml (Product Marketing)
     |
     ---- ...
     |
     ---- team_name.yml (Team Name)
</pre>

#### Format

The search through the inventory of "everything" to find what you are looking for it is important that all team files use the same format and data fields. This file represents the SSoT for what that format and fields are. If you are making changes make them here first, then make sure everything else follows.

Accepted field descriptions are (fields in bold are required):

<pre>
- title*:                              (the display name of the asset)
   author*:                            (the author of the asset)
   team*:                              (the name of the team that created the asset)
   asset_type*:                        (currently one entry only. Expect this to grow as teams are added. asset type = video, demo)
   date_published*:                    (month and year content first published. In iso-date format. eg 2020-05)
   last_changed                        (date the asset was last changed)
   gitlab_release:                     (major.minor GitLab release # the asset is built about/on. eg 12.10)
   use_case*:                          (use case the asset focuses on. [Derived from customer use case page](/handbook/marketing/use-cases/). Acceptable values are:   )
      - vcc
      - ci
      - cd
      - devsecops
      - agile
      - simplify_devops
      - cloud_native
      - gitops
      - remote
      - other
   stage:                              (multi-select list of stages the asset focuses on. Values should match main entries in [stages.yml](/data/stages.yml))
   category:                           (multi-select list of categories the asset focuses on. Values should match main entries in [categories.yml](/data/categories.yml))
   link*:                              (link to the ungated asset)
   embedded_link:                      (link to embeddable version of asset - typically for videos and demos)
   gated_link:                         (link to the gated asset)
   short_description:                  (a short description of what the asset is about)
   learn:                              (values: true or false or blank. Does this asset show up on learn@gitlab.com. tech marketing team to add this only please)
</pre>

## Getting help

If you have questions or need help please open an [SM support request](https://gitlab.com/gitlab-com/marketing/product-marketing/issues/new?issuable_template=A-SM-Support-Request).
