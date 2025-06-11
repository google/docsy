---
title: Support Global Groups - FAQ
description: Support Global Groups FAQ
---

## Collaboration

### Siloing

#### 1. Within SGG, how can we detect trends and do problem management?

   Take advantage of the facts that group views in SGG are globally visible and
   that broad collaboration is encouraged (Crush Sessions, Pairing, Senior Help
   Sessions, etc.). When working on a ticket, a Support Engineer can search
   Zendesk tickets, troubleshooting documents, product issues and Slack for
   similar situations that have already been reported. As FlexiPods become more
   widespread, they will provide an excellent space for trend detection as well.

#### 2. How does SGG impact people’s sense of belonging to a single global team?

   It can have that undesired impact if we are not diligent at encouraging and
   enabling various opportunities for collaborating outside of a group. A few
   ideas for encouraging broad collaboration are:

   1. Use cross-region crush sessions to collaborate with any peers
   1. Create SGG Office Hours to share tips and tricks between groups
   1. Set up regular coffee chats for yourself with colleagues outside of your group

#### 3. Does having per-group Slack channels make it harder to find unanswered questions where an SE still needs help?

   The reason for having the group channels is to make it easier to get
   answers when you post a question in Slack. Before SGG, asking a question in
   the really large channels (SM, SaaS, Support Team) very often resulted in
   no answers at all. Bystander effect. But it was consistently observed
   during the SGG trials that with the much smaller channels people got more
   and faster answers.

   This means that in SGG the number of questions left unanswered should be
   very low, and the people asking those questions should after a reasonable
   amount of time seek help in other channels or through mechanisms such as
   FlexiPods.

#### 4. Does having per-group Slack channels make it harder to find existing answers in Slack?

   This can happen. However, given that Slack purges older posts continuously,
   we shouldn’t be storing answers to ticket-related technical questions in
   Slack. Once a conversation in Slack has produced the needed answers, the
   ticket owner should save the information in an internal note in the ticket
   itself. That will allow others to search through ticket history to find
   what they need at any later time.

#### 5. When should information or a discussion in a group Slack channel be moved to a channel such as `#support_self-managed` or `#support_gitlab-com` that has a broader audience?

   The decision is largely up to the person who started the discussion.
   Some questions helpful to making a good decision are:

   1. Is the discussion about a newly-discovered product issue?
   1. Is the discussion about a new solution or workaround to a known product
      issue?
   1. Has the discussion stalled without providing a good answer to the question
      that was asked?
   1. Did we just learn something new?

      *In this case, by the way, please also put the new discovery into the SWIR.*

### Tickets in other groups

#### 1. Within SGG, how can SEs find and take tickets related to their topic of study?

   When a Support Engineer is working on a training module, they might need
   to look through other groups' views to find enough relevant tickets to meet
   the training requirements. They should feel free to assign to themselves
   any of those tickets that are at that time unassigned. When taking a ticket
   in this way, the Support Engineer should also select their group's name
   from the `SGG` field dropdown.

#### 2. Are SEs allowed to bring their expertise where it is needed, even outside of their group?

   Yes! Go where your knowledge is needed. Pair with the ticket assignee. Or
   add notes to their tickets to suggest solutions or next steps. If it makes
   more sense to become the assignee on a ticket from another group, do that -
   just be sure you change the `SGG` field to have your group’s name. FlexiPods
   should help with this as well, making it easier for others to find you, and
   for you to find tickets where your skills are needed.

#### 3. How do I move a ticket to a different group?

To move a ticket to a different group, all you need to do is set the value of
the `SGG` field to the name of the target group. **It doesn't matter whether
the assignee is in the target group, and it doesn't matter whether the assignee
field value looks like `SGG: groupname/username` or
`Support regionname/username`.**

If you have a need to find all of your tickets that are not assigned to your
group, see [Bulk editing SGG values]({{< ref "bulk-editing-sgg-values" >}}).

## Group Administration

### 1. How are the number and size of groups determined?

   We based the trial groups’ size on external studies of what range of group
   sizes is most effective, and settled on 14-15 as that would allow for six
   comparably-sized groups in a global deployment. After the trials, feedback
   led us to settle on a higher number of SEs per group, and fewer groups.
   Specifically:

   1. The timezone spread in APAC makes it so that our APAC groups are each
      practically two groups: APAC-E and APAC-W. The increased group size allows
      each APAC group to have at least three people in each of those subgroups,
      which makes the groups more resilient to absences.
   1. Even with the five people in each region of each of the trial groups, SE
      sometimes had trouble finding the help or expertise they needed within
      their groups. Adding one or two more people to each region of each group
      mitigates that problem at least a little.

### 2. What are the criteria for forming groups?

   1. Within each region, we determined each group’s membership by distributing
      as evenly as we could the following:
      1. Area of focus (SaaS vs. SM)
      1. Senior SEs
      1. Skill level
      1. Leadership tendency
      1. Skill set (CI, Geo, Runner, Elasticsearch, …)
      1. Non-male

      The distribution isn’t even close to perfect, and it can’t be. We think
      it’s reasonable, though.
   1. We did not take into account other special roles, such as Support Stable
      Counterparts

### 3. Is membership in a particular group permanent?

   Groups are intended to build camaraderie, comfort, a support system, and
   psychological safety. To do that, they should be as stable as possible over
   time. For that reason, mass rotations of group membership are not a part of
   the SGG plan. If groups want to transfer knowledge, they may consider a 1↔1
   member swap for a 1-2 week period. If a Support Engineer wants to make a
   long-term switch to another group, they should discuss their request with
   their manager, and the manager will work to facilitate the move if they
   agree with it.

### 4. If I get promoted will I need to switch groups?

   At the moment, we foresee that promotions and hiring will influence group changes.
   The way groups will be evolved is to be determined as folks are promoted and new hires join.

### 5. What happens when I do switch groups?

   1. Open an MR to change your SGG assignment in the [`support-team.yaml` file](https://gitlab.com/gitlab-com/support/team/-/blob/master/data/support-team.yaml). This is the SSOT for Zendesk and the [Support Team Page](https://gitlab-com.gitlab.io/support/team/sgg), so it's important to keep this updated.
   1. Add yourself to the Slack channel of your new SGG – they’re all public, so you can just join.
   1. Submit an [Access Request](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new?issuable_template=slack_googlegroup_1Passwordgroupvault) to have yourself removed from your old SGG-specific Slack groups (`@spt-sggname` and `@spt-sggname-region`) and added to the new ones.
   1. Update your tickets to the new SGG, using the [bulk edit method](/handbook/support/support-global-groups/bulk-editing-sgg-values).
   1. Have a look at the homepage of your new SGG (all linked from the [SGG handbook page](/handbook/support/support-global-groups/#the-system)) to learn about their established processes – it's probably also a good idea to ask your new colleagues if the information on the homepage is still correct.
   1. Book coffee chats and / or pairings with your new group members in your region. Also a good idea to book with group members in other regions, as it fits your working hours.

## Success Measurements

### 1. What is SGG trying to improve? (What is the purpose of SGG?)

   The essence of the move to SGG was that we wanted to take our team members
   out of a poorly defined system that didn’t support them well and put them
   into a new system that would. Feedback from the Support Engineers who
   participated in the SGG Trials indicated consistently that we had been
   successful. They felt less stressed, more comfortable and more happy. They
   were no longer overwhelmed by a large and seemingly unmanageable view of
   tickets. They started to collaborate with each other more and better, too.

   So why all the fuss about FRT? FRT is our only SLA. Everything we do should
   help us to achieve that SLA better. Although we saw only small improvements
   here from the trials, we were convinced by the results described above that
   moving forward was the right choice. Additionally, we knew from the start
   that the trial periods were almost certainly far too short to allow everyone
   to settle in to the new system and then to learn how to take full advantage
   of it to improve our KPIs such as FRT, SSAT, and TTR.

### 2. Will FRT baselines or monitoring change?

   Initially we will keep the FRT baselines unchanged. With everybody in SGG
   instead of just ⅓ of the global team (as was the case during the trial),
   there should be sufficient flow of new tickets into each group to allow
   everyone to meet or exceed the baseline. After everyone settles in to SGG -
   probably at least several months - it may become apparent that we will need
   to make changes in how we monitor and measure FRT SLA achievement.
   Additionally, as groups take different approaches to organizing ticket work,
   some may want to distribute the work within their group in a different way,
   and that could drive other changes to FRT measurement.

### 3. What happens if our FRT SLA achievement goes down?

   The entire Support Leadership Team (VP through managers) will continue to
   monitor all of our KPIs, as always. When and if we detect a trend in the
   wrong direction for any of them, we will follow our normal process, which
   currently is to put together a working group of managers to analyze the data
   and propose improvement plans. If at any point such a working group
   determines that the root cause of the problem is the SGG system itself, we
   will discuss options for different ways of working.

### 4. What are the actual success measures for SGG, and are they being compared with measures from before SGG?

During the SGG Trials, we had measures and goals specific to the trial so that
we could use those to help us determine the value of SGG. Now that SGG is
deployed for all of GitLab Support, the **only** measures and goals are those of
the Global Support Team. And we will make decisions to change direction based
not on whether we're more or less successful than we were before SGG, but on
whether we're successful in meeting our SLA and other goals.

## Organization and Leadership

### 1. What is the manager’s role with respect to SGG?

- Managers are available to work with any group that reaches out with
     questions, concerns, requests for guidance, requests for help, etc.
- Managers are encouraged to stay aware of group activity by watching the
     group Slack channels.
- Managers work primarily with their own team members to understand
     challenges and growth opportunities, to provide coaching and guidance, etc.

### 2. Why are managers not assigned to specific groups within the SGG system?

   If we were to assign managers to groups, we would either need to make each
   group a manager’s team, replacing their current team, or use matrix
   management. Since GitLab is a no matrix organization, that leaves only the
   first option, which doesn’t work for several reasons. If each manager took
   on the portion of a group in their region: the manager to IC ratio would be
   too high, about 1:6; and each group would have 3 managers, making global
   alignment challenging. Or, if each manager were assigned to a single global
   group: the manager to IC ratio would be far too low, about 1:21; only 5
   managers would have a group or we’d again have 3 managers per group; and ICs
   would have a manager in another region, which is not something that we
   currently do in Support

   Instead of dealing with the logistical nightmare described above, we decided
   to have the managers float around to the various groups. They can spend some
   time watching and contributing to each group channel each week. During their
   1:1s with each of their team members, they can ask how the team member is
   doing in their group, what interesting things the group is doing, whether
   the group needs any help, etc. And at any time if a group needs help, the
   managers with availability can step in. In all these ways, managers can
   observe the different successes, struggles and organization of each group and
   get a bigger picture of how we’re doing.

### 3. Without manager assignment to groups, how will we gain global alignment for future initiatives and changes?

   Nothing really changes with respect to gaining global alignment. Managers
   will discuss initiatives and changes with their team members in 1:1s, or team
   meetings, or in whatever forum they use with their team. SGG also opens up a
   new possibility that we didn’t have before, which is that managers can easily
   discuss these things with any or all groups. So it may actually be easier to
   gain global alignment in SGG than it was prior to SGG.

### 4. What happens if a group is not making progress on organizing itself, especially given that no manager will be assigned to them?

   We encourage groups to reach out for help when they are struggling with
   anything, including self-organization. They can ask one or more particular
   managers if they wish, or simply ask for help in the `#spt_gg_forest` channel.
   A group might also know that some other group has been more successful, and
   reach out to them for help.

   Managers might also observe a group struggling with something, and reach out
   proactively to ask if they would like some help.

### 5. Will managers be providing guidance and assistance to groups in self-organizing? If so, how?

   Yes, managers will provide both guidance and assistance beginning perhaps 2
   weeks after the rollout. During the first few weeks, we want the groups to
   be putting their efforts into acclimating to SGG without having to think
   about other process changes. In that period the SGG DRIs will be discussing
   and documenting how the management team can best contribute when groups are
   ready to undertake self-organizing.

### 6. What are the roles of Senior and Staff SEs in SGG?

Senior SEs are assigned to a group, just as Intermediate SEs are. A senior's
first priority is the success of their group, with an emphasis as usual on
assisting other SEs, sharing knowledge, and being leaders. They also look beyond
their group to other groups and Support as a whole, with the same emphasis.

Staff SEs are not assigned to any group, and work as they did prior to the SGG
rollout.

### 7. How do the L&R and USFed SEs fit within SGG?

- USFed SEs work as part of the USFed team, which operates in many ways like
  an SGG group. They have their own ticket view. They organize internally. They
  collaborate with other groups. One major difference is that this group
  operates only in the AMER region.

- 100% L&R SEs work as part of the global L&R Team, which also operates
  similarly to an SGG group. They have their own ticket view. They organize
  internally. They have team members in all regions. However, they collaborate
  more with the Fulfillment teams than with the rest of Support.

  *NOTE: SEs who have a partial L&R focus do work within an SGG group for their
  SaaS and SM responsibilities.*

### 8. How does SGG fit into the onboarding process for new SEs?

The new hire onboarding issue contains Support-specific steps for assigning
the new hire to a group and for configuring systems such as Zendesk with
the assignment information. These steps begin during the pre-start-date section
of the issue so that the chosen group can participate in welcoming the new team
member from day one. The group becomes an immediate source of information,
support and psychological safety as the new team member slowly integrates into
GitLab and the global Support Team.

The hiring manager is responsible for assigning the new team member to a group.
They should work with their regional SGG DRI to incorporate into the decision
many factors such as skills, skill levels, areas of focus, geography,
representation and so on. This is important for maintaining a balance across
all groups as new team members are added. When a new group is needed in order
to make room for a new team member, the group will be formed with a mix of
experienced and new SEs.

In selecting an onboarding buddy for the new team member, the hiring manager is
free to choose any appropriate person either in or out of the assigned group.
If the onboarding buddy is in the assigned group, that may provide some extra
comfort to the new person in getting to know their group. And if the onboarding
buddy is in another group, that may help the new person to connect more quickly
with the rest of Support.

## Tickets and Views

### 1. Should SEs respond to other SEs’ tickets?

   An important part of SGG is increasing collaboration on tickets, and that’s
   why all of a group’s tickets are visible in the group view and all SEs are
   encouraged to help on any ticket in their group view. This may sound like a
   return to the hot queue model, but there are key differences. First, all
   tickets should be assigned from the moment of the first response. Second, the
   preferred ways to help on someone else’s ticket are to pair with the assignee,
   to respond to Slack questions from the assignee, and to add internal notes to
   the ticket. However, if the next response is due, either according to the SLA
   clock or to an expectation set in the ticket, and the assignee is not
   available to send a response, then any other SE who can help should consider
   doing so. In this situation, be sure that your next steps align with the
   history of the ticket and the assignee's action plan.

### 2. If there are no tickets in my group view that are within my Area of Focus (SM or SaaS), what should I do?

   One of the benefits of SGG is that it provides a more supportive environment,
   your small group, for taking risks and growing. So when this situation
   arises, please consider stepping outside of your comfort zone a little by
   taking a ticket that is **not** in your Area of Focus and trying at least to
   provide the customer with a meaningful first response. And ask for help if
   you need it! For other choices, see the Prioritizing work topic on the SGG
   main page.

### 3. What should a group do if all of its SaaS or SM people are absent or dedicated to non-ticket work?

   First, remember that each group is represented in all 3 regions. It’s pretty
   unlikely that all 3 regions of a group would be completely absent all of its
   SEs in an Area of Focus. So the first option would be to check in with the
   other regions for help. Secondly, the group could try to see what progress
   it could make on its own. And thirdly the group can ask for help from other
   groups and from managers. We’re still a single global team. No group will
   ever be left alone.

   It is also highly recommended that each group agree on a plan for
   coordinating or at least dealing with planned absences. At a minimum, if the
   group agrees on a single way to keep all of its members informed as to
   upcoming and current absences, then there won’t be any unpleasant surprises.

### 4. Will Support FlexiPods work with SGG?

   Yes! These two systems provide different ways of dividing up the ticket
   work, with FlexiPods based on subject matter expertise and SGG based on the
   benefits of small group settings. Put together, they will allow SEs to focus
   first on their group's success and then on helping with or learning about
   their specific areas of interest. For additional important details about
   working within both of these systems simultaneously, please see the
   [Prioritizing work](/handbook/support/support-global-groups/#prioritizing-work)
   topic on the SGG main handbook page.

### 5. How should I reach out to a customer Support Focus Slack group?

   Some customers have an associated Slack group of SEs who have particular
   familiarity with their environment and who are available to provide
   assistance with tickets that require specific insight. The Slack group names
   follow the format `@spt_focus-<customer>`. The process for reaching out to a
   focus group does not change with the implementation of SGG. To reach out to
   a focus group, post a message to `#support_self-managed` pinging the group.
   Please note that the focus groups are intended to provide guidance to an SE
   handling a complex or sensitive ticket. They are not expected to own or
   manage every ticket from their associated customer.

## Urgent Situations

### 1. How are emergencies handled within SGG?

We handle emergencies within SGG very much as we did previously. When an
emergency ticket arrives the on-call engineer is paged. The ticket will not
automatically get assigned to a group. The SE who takes assignment of the
ticket should also assign the ticket to their group. Regardless of the group
assignment, the SE should seek help from any and all people with the skills or
knowledge needed to progress and solve the ticket.

### 2. How are escalations handled within SGG?

We handle escalations within SGG very much as we did previously. The
Manager-On-Call will in general reach out first to the assigned SE to
communicate the details of the escalation and to determine whether the SE is
available and able to give the ticket the needed attention. If they are not,
the manager is encouraged to seek help from the SE's group both because they
might already have knowledge of the ticket and because they are very likely to
respond to the request. As a last step, as before, the manager might reach out
to the rest of Support if more help is needed. Finally, and perhaps most
important of all, managers are expected to use their best judgment in taking
the steps that they feel are most relevant to resolving the escalation quickly
and efficiently.
