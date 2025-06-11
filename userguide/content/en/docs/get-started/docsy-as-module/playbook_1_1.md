---

title: Incubation Engineer's Playbook
---







## Incubation Engineer's Playbook

This playbook contains useful tips and tricks an Incubation Engineer may employ for SEG and project success.

### Structuring each Project page

Each Incubation Engineering project has its own handbook page which is linked from our [list of current projects](/handbook/engineering/development/incubation/#current-focus).

The following sections are should be included:

#### Problem Statement

Outline the problem that we're trying to solve for our users.

#### Vision

How do we intend to solve the problem? What is our overall vision for this project and how it will fit into GitLab?

#### Milestones

What is the iterative approach that we'll be taking for each project?  How do we measure and demonstrate success?  Link to epics and issues as required.

#### Go to market strategy

Outline our marketing strategy.  How do we intend to find early adopters, build communities, and get potential users interested in our projects?

If you're building a feature that should have a distinct name then please reach out to #marketing for assistance, and take into account our [Product and Feature Naming Guidelines](/handbook/product/product-principles/#product-and-feature-naming-guidelines).

#### Jobs to be Done (JTBD)

JTBD is an important part of the process of establishing an SEG. Not only does writing job statements help the SEG to clearly identify their areas of focus, but it also helps to communicate the roadmap and rationale to the rest of the organization and the broader GitLab community.

Each SEG should add a section to their handbook page and create a table with 3 to 5 job statements for their area. Each row in the table should include the following columns:

* The job statement
* A maturity rating (can be empty initially)
* A link to a confidential research issue
* A link to a public roadmap issue or epic

**Job statements** should be written from the perspective of the user and describe the problem they are trying to solve. As in "When [situation], I want to [job], so I can [outcome]." See the JTBD page in the UX handbook for [guidance on writing job statements](/handbook/product/ux/jobs-to-be-done/#how-to-write-a-jtbd).

The **Maturity Rating** should align with how maturity is measured in GitLab (minimal, viable, etc.), and should be measured using the same criteria as [described in the Product handbook](https://about.gitlab.com/direction/maturity/).

The **Research Issue** should be a confidental issue in the SEG project with information that has been gathered by the SEG or other sources and should capture what has been learned about a specific JTBD. This can include notes or recordings from customer conversations, competitive research, or any other public industry information.

The **Roadmap Issue** (or Epic) should be a public resource for the SEG to communicate the planned roadmap and current state of development.

An example of this structure can be seen on the [Mobile DevOps Handbook Page](/handbook/engineering/development/incubation/mobile-devops/#jobs-to-be-done).

#### GitLab Product Development Group affinity

List the [product development groups](/handbook/product/categories/), if any, that the SEG project may impact as a link to the appropriate handbook page. In the early stages this may not be known and may change as the SEG project evolves, please update when there are changes.

#### References

Links to articles (both internal and external to GitLab), issues and epics that provide further information on our approach.

#### Glossary

It's important to use the correct market terminology, and to define terms that may be unfamiliar to readers.

### Converting an incubation backlog project to an active SEG

In order to maintain consistency, the process below should be followed when starting a new SEG from an incubation backlog project:

1. Request "Owner" access to the [Incubation Engineering group](https://gitlab.com/gitlab-org/incubation-engineering/) from one of your fellow department members.
1. Create a new subgroup within the [Incubation Engineering group](https://gitlab.com/gitlab-org/incubation-engineering/). For example: [`mobile-devops`](https://gitlab.com/gitlab-org/incubation-engineering/mobile-devops)
1. Create a `meta` project within that new group. For example: [mlops/meta](https://gitlab.com/gitlab-org/incubation-engineering/mlops/meta)
1. Create a twice montly update issue in that new `meta` project. This issue will replace the existing backlog project issue and be used to post bi-weekly demo recordings from the new SEG. For example: [jamstack](https://gitlab.com/gitlab-org/incubation-engineering/jamstack/meta/-/issues/5)
1. Add all labels from the original backlog issue to the issue you just created. For example: [original issue](https://gitlab.com/gitlab-org/gitlab/-/issues/329592) | [new issue](https://gitlab.com/gitlab-org/incubation-engineering/mobile-devops/readme/-/issues/7)
1. Add the new project to the `seg_issues_list` in the handbook direction generator module in the handbook. See this [MR](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/93485/diffs) for an example.
1. Close out the original backlog issue with a comment pointing to the new weekly update issue ([example](https://gitlab.com/gitlab-org/gitlab/-/issues/329592#note_676451924)).
1. Make sure the project maps to an existing stage and feature category, or create new ones if needed. For example: [Add No-code Automation SEG stage and feature category](https://gitlab.com/gitlab-com/www-gitlab-com/-/merge_requests/118730). [Feature categorization](https://docs.gitlab.com/ee/development/feature_categorization/#rspec-examples) is mandatory in RSpec examples to identify the group owning this file.

### Video demos / updates every two weeks

Every 2 weeks a meeting between the CEO and VP of Incubation Engineering is scheduled. In advance of that meeting
Incubation Engineering team members are expected to showcase their work in a short video. Beside the
[YouTube guidelines](/handbook/marketing/marketing-operations/youtube/), there are some
guidelines for said video:

1. Add your video to the playlists, and remove your older video from latest
1. No customer information should be displayed
1. Video should be public unless it shows confidential information
   1. if it does show confidential information, remove those parts and make it public
1. Videos should be around 3 minutes, think of it as your elevator pitch
   1. If you need more than 3 minutes, you can still do that but don't put it in the playlist `Incubation Engineering - latest`
1. Quality should be 1080p or higher so content on screens shared is still readable

#### Playlists

There are 2 playlist in general:

* [Incubation Engineering](https://www.youtube.com/playlist?list=PL05JrBw4t0KqqLZP0Jue3w2hz2PR6XTHi)
* [Incubation Engineering - Latest](https://www.youtube.com/playlist?list=PL05JrBw4t0KrQQ6BmQGY0Ji-vBaohNOlW)

And then there are the SEG specific playlists, you might need to make one and follow the naming convention:
`Incubation Engineering - <SEG>`

### Shadowing Field Marketing Events

Incubation Engineering team members benefit from shadowing customer / prospect events. This is aligned with the FY22-Q4 Engineering OKR "Increase focus on customer results..".

Field marketing has welcomed all Incubation Engineering team members to shadow upcoming field marketing events. These events are conducted with new prospects, existing customers and individual GitLab / DevOps enthusiasts.

Incubation Engineering team members may discover issues for upcoming events, and may request an invitation by commenting in the event's issue.

The following issue boards are to be used to discover upcoming events:

* [Field & Corporate, EMEA](https://gitlab.com/groups/gitlab-com/marketing/-/boards/933459?label_name[]=EMEA)
* [Field & Corporate, Central Europe](https://gitlab.com/groups/gitlab-com/marketing/-/boards/1438243?label_name[]=Central%20Europe&label_name[]=EMEA)
* [Field & Corporate, UK/I](https://gitlab.com/groups/gitlab-com/marketing/-/boards/1438265?label_name[]=UK%2FI)

Highlighting EMEA because majority of Incubation Engineers reside here. Other regions can be discovered in the Boards dropdown by searching for "Field & Corporate {region_name}".

Additionally, Field Marketing has active Slack channels where events are planned and prepped for. If useful, please consider joining:

* #emea_northern_europe_fieldmarketing
* #emea_central_europe_fieldmarketing
* #emea_southern_europe_fieldmarketing

...on Slack. Other relevant channels may be discovered via Slack search.

### User and customer conversations

User and customer conversations are considered to be an [important part of product development](https://www.svpg.com/pledge-to-customers/), and they are equally important when it comes to Incubation Engineering projects. Direct conversations with users will provide insights into their perspectives, expectations, and behaviors that would not be possible otherwise. Incubation Engineering team members should look for every opportunity to discuss their projects with users and leverage what they've learned to inform [JTBD](/handbook/product/ux/jobs-to-be-done/) and influence product direction.

Incubation Engineering team members should aspire to be involved in at least a couple of conversations each month. These conversations can take many forms - from direct conversations, to joining customer calls with folks in other departments, to conversations at a meetup or conference.

Take advantage of GitLab resources with guidance on how to [facilitate customer interviews](/handbook/product/ux/ux-research/facilitating-user-interviews/) and look for opportunities to join calls with other product leaders to learn about their approach.

For Incubation Engineering team members not familiar with customer conversations, it is perfectly okay to simply _shadow_ calls and to say nothing throughout the call. Introduce yourself if invited, and help GitLab team members by keeping notes.

Those comfortable with external interactions may offer their services to the Field Marketing event lead by means of answering questions and interacting with the participants when the GitLab speaker requests support.

### Quality & Support Guidelines for Incubation Projects

* Is your feature behind a feature flag? It's preferrable that it is.
* Can your feature be visually labeled as an `incubation` or `experimental` feature without distracting / taking away from the GitLab user experience?
* Error messages  / stack traces / logs may indicate that this is an `incubation` feature.
* Before feature flag roll-out, is the feature documented in sufficient detail? Documentation is the first resource for users and support agents working with the feature.
* Pro-actively reach out and make introductions before feature roll-out / general availability.

### Security Guidelines for Incubation Projects

Incubation Engineers should familiarize themselves with the [GitLab AppSec Review](/handbook/security/product-security/application-security/appsec-reviews.html) process and preferably have the AppSec review triggered early for each merge request when appropriate.

Incubation Engineers are often required to create prototypes or demo applications as they are iterating on ideas and gathering feedback. Below are some security guidelines to keep in mind while building these applications:

* Code for prototypes and demo projects should be hosted in the Incubation Engineering specific `gitlab-incubation-engineering-demos`. This is preferred because projects in a subgroup will inherit configurations from the parent group ([group access tokens](https://docs.gitlab.com/ee/user/group/settings/group_access_tokens.html) or [group CI variables](https://docs.gitlab.com/ee/ci/variables/#add-a-cicd-variable-to-a-group) for example), which can result in unintended behavior when an project hasn't accounted for the inherited configurations appropriately.
* Prototypes and demo projects should follow GitLab's [Secure Coding Guidelines](https://docs.gitlab.com/ee/development/secure_coding_guidelines.html).
* Use of [Personal Access Tokens is discouraged](/handbook/security/#tokens), Project Access Tokens are often sufficient.

### UX Engagement with Incubation Projects

For UX support, see how Product Designers [engage with Single Engineer Groups (SEGs)](/handbook/product/ux/product-designer/index.html#engagement-with-single-engineer-groups-segs).

### Releasing Features

When releasing features, ensure you engage the [Application Security team](/handbook/security/product-security/application-security/stable-counterparts.html) if your feature matches the [guidelines of what should be reviewed](/handbook/security/product-security/application-security/appsec-reviews.html#what-should-be-reviewed), and follow the [guidelines for documentation](/handbook/product/ux/technical-writing/workflow/#documentation-for-a-product-change).

### Write a Release Post

Once you expect your publicly visible feature to be in the
next release, it's time to write a [release post](/handbook/marketing/blog/release-posts/). Start this process as early as
possible, it's easier to move it to the next review cycle than to rush the
process.

Due to the SEG-nature of our group the process is slightly different from
the default. As you wear both the Engineer's and PM's hats, the process is
faster, but you'll also lack a second pair of eyes. Check out the [PM Contributors](/handbook/marketing/blog/release-posts/#pm-contributors)
section of the release post Handbook page for the default process. Here is a
Incubation-adjusted TL;DR:

1. If you created a feature issue that used the [feature issue template]
   (https://about.gitlab.com/handbook/product/product-processes/#feature-templates),
   use the [release post item generator](https://gitlab.com/gitlab-com/www-gitlab-com/blob/master/bin/release-post-item)
2. Alternatively, create your [Release post MR manually](/handbook/marketing/blog/release-posts/#option-2-manual-mr-creation)
3. Go through the "PM release post item checklist". Note that in Incubation
   Engineering **you act as both the PM and EM**.
4. The only required reviewer is the Technical Writer for the Stage/Group your
   feature is located in. See the [Tech Writer Assignments](/handbook/product/ux/technical-writing/#designated-technical-writers)
   to find out who that is.
5. Other Reviewers are optional, but it's recommended to add the PM for the
   group of the feature for visibility.
6. Since you are also doing the EM work, you can self-merge the Release post
   once approved by the TW.

### Tools Incubation Engineers Use

#### Video Recording and Editing

1. Zoom - Allows you to record you, your screen and participants
1. OBS - Allows you to record your screen
1. Final Cut Pro - Video editing
1. iMovie - Video editing
1. Kdenlive - Video editing
1. Loom - Allows you to record you, your screen, edit, and other things
1. Descript - Video editing, can remove your "ums," "uhs", "you knows", and other filler words

#### Code Editors / IDEs

1. Jetbrains IDEs
1. Visual Studio Code
1. Sublime Text
1. Vim
1. GitLab Web IDE

### How do I

#### Add a new API endpoint?

[This MR gives an example on how to add a brand new API endpoint](https://gitlab.com/gitlab-org/gitlab/-/merge_requests/95689)

1. Code under `/lib/api`
1. Entities tests under `requests/api/entities`
1. API tests under `/requests/api/`
1. use ApiGuard to assert api permissions

#### Get Community Engagement?

Engaging with the Community and getting feedback is tricky when starting an SEG, and more so if the SEG focuses on an area GitLab has not previously engaged in. Here is a list of things that have helped others find communities:

##### Communities

Find the Discord and Slack channels of your community and engage in conversations.

##### Polywork

To recruit external users, creating "Opportunities" in Polywork is a useful resource. But: asking for interviews straight away is too high a level of engagement for users.
A more successful strategy is to create a Google Form without too many freetext questions, then linking it as an Opportunity in Polywork.
Polywork embeds Google Forms, so the users don't have to leave the site.

If you ask for contact details for follow up questions, you have a set of recruits that may be more open to follow up in-person interviews if needed.
 (Note: Contact details are PII data. Do not use it beyond the usecase indicated on the form, do not save it elsewhere and delete immediately after use. Refer to our [Privacy Page](/handbook/legal/privacy/) for details)
