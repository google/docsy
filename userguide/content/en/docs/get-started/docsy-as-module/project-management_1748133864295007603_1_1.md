---
title: "Developer Relations Program Management"
---

The Developer Relations team works from issues and [issue boards](#developer-relations-issue-boards). If you need our assistance with any project, please open an issue and use one of the [_main program labels_](#developer-relations-labels) anywhere within the GitLab repo.

## Developer Relations handbook updates

Merged updates to the handbook are posted to the [#community-relations-fyi](https://gitlab.slack.com/archives/C015YDXTREK) Slack channel.

MRs must be tagged with the `Developer Relations` labeled _before being merged_ in order to be posted to Slack. When you create a new MR, be sure to add the label upon creation so this step isn't forgotten. If you are assigned to merge an MR, ensure the label is added prior to merging.

## Developer Relations Roadmap

The Developer Relations team conducts project and content planning via the [Roadmap in the Developer Relations Group](https://go.gitlab.com/community-roadmap).

### Epics

Work items that fit into our team strategy, including events and content plans, are tracked in the roadmap by using Epics and Child Epics.

Please use this template when creating Epics for activities that should appear in the Developer Relations team roadmap:

```markdown
<!--  Epic Title Formatting Guide:

Dates should be using ISO dates, see https://handbook.gitlab.com/handbook/communication/#writing-style-guidelines

Event: Event Name, Location, Date
Content: Title, Date
Others: Title, Date

Reminder: Start and due dates are required in order for this Epic to display correctly in the team roadmap.
-->

## Activity Summary


## Goal or expected outcome



## Team or Individual DRIs
<!--  Please add team label to epic -->


## Relevant Issues, Epics or resources



<!-- Example

/label ~"Community::Events" ~"Region::AMER" ~"FY24-Q1"

Note: These are samples for guidance, please add relevant labels for activity region, type, quarter or any other labels relevant to your team/program. Please include additional relevant labels here.  -->

<!--Link to parent epic where necessary -->
/parent_epic URL

<!-- Link to Child epic where necessary -->
/child_epic URL

<!-- Mention team members that should be aware of the epic -->
/cc

```

## Developer Relations issue boards

| Board | Program | Usage | Notes |
| --- | --- | --- | --- |
| [OKRs](https://gitlab.com/groups/gitlab-com/marketing/community-relations/-/epics?label_name[]=OKR) | _Team_ | Quarterly OKR status tracking |  |
| [Community Team Content](https://gitlab.com/groups/gitlab-com/-/boards/1591627?label_name[]=Community%20Team%20Content) | _Team_ | Blog content the team is working on | Top level group board |
| [Community Team, by assignee](https://gitlab.com/groups/gitlab-com/-/boards/1591691) | _Team_ | Issue workload per team member | Top level group board |
| [Evangelist Program](https://gitlab.com/groups/gitlab-com/marketing/community-relations/-/boards/951386?label_name[]=Evangelist%20Program) | Evangelists | Work related to the Evangelist Program |  |
| [Meetups](https://gitlab.com/groups/gitlab-com/marketing/-/boards/962542?&label_name[]=Meetups) | Evangelists | Meetup tracking and organization |  |
| [Code Contributor Program](https://gitlab.com/groups/gitlab-com/marketing/community-relations/-/boards/1034162?&label_name[]=Code%20contributor%20program) | Code contributors | Work related to the Code Contributor Program |  |
| [Education Program](https://gitlab.com/groups/gitlab-com/marketing/community-relations/-/boards/952267?&label_name[]=education) | Education | Work related to the Education Program |  |
| [Developer Evangslism](https://gitlab.com/groups/gitlab-com/-/boards/1565342?label_name[]=dev-evangelism) | Developer Evangelism | Developer Evangelism issues across the entire `gitlab-com` group |  |
| [Consortium Memberships](https://gitlab.com/gitlab-com/marketing/community-relations/opensource-program/consortium-memberships/-/boards) | Open Source | Track all activities related to GitLab's [consortium memberships](/handbook/marketing/developer-relations/community-programs/open-source-program/#consortium-memberships-and-sponsorships) | |
| [Open Source Partners Support (Internal)](https://gitlab.com/gitlab-com/marketing/community-relations/open-source-program/open-source-partners-program/-/boards/2150795) | Open Source | Contains sensitive partner requests and therefore confidential. | |
| [Community Sponsorship Requests](https://gitlab.com/gitlab-com/marketing/community-relations/community-operations/community-sponsorship-requests/-/boards) | Community Ops | Requests from the community for event and other types of sponsorship | |

## Developer Relations labels

- We track the workflow with the [Marketing Status labels](/handbook/marketing/#boards-and-labels).
- Some programs use [scoped labels in addition](/handbook/marketing/#functional-team-labels).
- Main program labels are defined either at the top `gitlab-com` or the `gitlab-com/marketing` group level to facilitate cross-collaboration and visibility across issue boards

| Label | Program | Usage | Notes |
| --- | --- | --- | --- |
| `Developer Relations` | Developer Relations | **Main team label** | `gitlab-com` group label. Merge requests with this label generate automatic notifications for the Community team via the Slack channel #community-relations when they are merged |
| `Open Source Program` | Open Source | **Main program label** | `gitlab-com` group label |
| `Open Source` | Open Source |  | `gitlab-org` group label |
| `Open Source Partners::Backlog` | Open Source | Internal support issues members of the GitLab Open Source Partners program have filed |  |
| `Open Source Partners::Assigned` | Open Source | Internal issues someone has been assigned to address on behalf of GitLab Open Source Partners program members |  |
| `Open Source Partners::Working` | Open Source |  Internal issues we're working on behalf of GitLab Open Source Partners program members |  |
| `Open Source Partners::Complete` | Open Source | Internal issues we've resolved for members of the GitLab Open Source Partners program |  |
| `movingtogitlab` | Open Source | Track open source migrations |  |
| `Evangelist Program` | Evangelists |  **Main program label**: Tech meetups, tech speakers, and community-driven evangelism |  |
| `Meetups` | Evangelists | GitLab Meetups planning and tracking |  |
| `Heroes` | Evangelists |  Heroes applications, content, speaking engagements, and other Heroes program issues  |  |
| `Speaker Needed` | Evangelists |  Events or meetups that need a speaker |  |
| `become-a-speaker` | Evangelists |  Support for community members who want to become tech speakers  | Developer Relations group label |
| `heroes-content` | Evangelists |  For issues related to a blog, video, or other content generated by a GitLab Hero  | Project label |
| `heroes-talk` | Evangelists |  For issues related to a CFP submission or tech talk given by a GitLab Hero  | Project label |
| `request-for-heroes` | Evangelists | Share speaking, blogging, and other contribution opportunities with GitLab Heroes  | Project label |
| `Code contributor program` | Code contributors |  **Main program label**: for general issues related to the program  |  |
| `1st contribution` | Code contributors | [Automatic contribution label](/handbook/marketing/developer-relations/contributor-success/community-contributors-workflows/#labels) | `gitlab-com` group label |
| `1st contribution` | Code contributors | [Automatic contribution label](/handbook/marketing/developer-relations/contributor-success/community-contributors-workflows/#labels) | `gitlab-org` group label |
| `Community contribution` | Code contributors | [Automatic contribution label](/handbook/marketing/developer-relations/contributor-success/community-contributors-workflows/#labels) | `gitlab-com` group label |
| `Community contribution` | Code contributors | [Automatic contribution label](/handbook/marketing/developer-relations/contributor-success/community-contributors-workflows/#labels) | `gitlab-org` group label |
| `Hackathon` | Code contributors | Community contribution during GitLab Hackathon events | `gitlab-org` group label |
| `GitLab Hackathon` | Code contributors | Community contribution during GitLab Hackathon events | `gitlab-com` group label |
| `OKRs` | _Team_ | Quarterly team OKRs |  |
| `Community Team Content` | _Team_ | Track the status of content created by the team. Generally blog posts | Top-level group label |
| `education program` | Education | **Main program label**: for general issues related to the program |  |
| `dev-evangelism` | Developer Evangelism | Any issue in the `gitlab-com` group where the developer evangelism team is involved |  |
