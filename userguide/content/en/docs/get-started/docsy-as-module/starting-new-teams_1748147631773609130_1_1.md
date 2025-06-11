---
title: Starting new teams
---

## Starting new teams

Our product offering is growing rapidly. Occasionally we start new teams. Backend teams should map to our [product categories](/handbook/product/categories/). Backend teams also map 1:1 to [product managers](/handbook/product/).

A dedicated team needs certain skills and a minimum size to be successful. But that doesn't block us from taking on new work. This is how we iterate our team size and structure as a feature set grows:

1. **Existing Team:** The existing PM schedules issues for most appropriate existing engineering team
    - If there is a second PM for this new feature, they work through the first PM to preserve the 1:1 interface
1. **Shared Manager Team:** Dedicated engineer(s) are identified on existing teams and given a specialty
    - The manager must do double-duty
    - Their title can reflect both specialties of their engineers _e.g._ Engineering Manager, Distribution & Package
    - Even if temporary, managing two teams is a valuable career opportunity for a manager looking to develop director-level skills
    - Each specialty can have its own process, for example: Capitalized team label, Planning meetings, Standups
1. **New Dedicated Team:**
    - Engineering Manager
    - Senior/Staff Engineer
    - Two approved fulltime vacancies
    - A dedicated PM

## Team Construction

Generally engineering teams at GitLab are fullstack, they are made up of Frontend, Backend, and Fullstack individual contributors with a single Engineering Manager.

An alternative team construction that could be considered for some circumstances is the **Functional Team**. This provided benefits while hiring at scale. Over time fullstack teams have become more common.

### Functional Team

Functional teams are made up of Frontend, Backend, or Fullstack individual contributors and an engineering manager with the same functional background. This provides for scalable hiring capabilities, technical credibility, and career development support for all team members. When hiring at scale, these functionally focussed teams are better able to hire and onboard people as well as supply them with ongoing, clear support.

## Team Page Template

``` markdown
## Vision

...

## Mission

...

## Team Members

The following people are permanent members of the [Blank] Team:

<%= direct_team(manager_role: 'Engineering Manager, [Blank]') %>

## Stable Counterparts

The following members of other functional teams are our stable counterparts:

<%= stable_counterparts(role_regexp: /[,&] Blank/, direct_manager_role: 'Engineering Manager, [Blank]') %>

## Hiring

Check out our [jobs page](https://about.gitlab.com/jobs/) for current openings.

## Common Links

 * Issue Tracker
 * Slack Channel
 * ...

 ## How to work with us

 ...
```

## Fast Boot Events

New teams may benefit from holding a [Fast Boot](/handbook/engineering/fast-boot/) event to help the jump start the team.
During a Fast Boot, the entire team gets together in a physical location to bond and
work alongside each other.
