---
title: "Merge Request Buddies"
description: "Merge request buddies at GitLab"
---

Merge Request buddies are available to help other team members who need help with merge requests that will update the GitLab handbook or website. Whether you are learning how to use the GitLab Web IDE, make updates to the handbook and website locally, or need answers to other Git and GitLab questions, Merge Request buddies are here to help.

For more serious problems, especially ones that are time sensitive or prohibiting access to important information, there is an [escalation process](/handbook/about/escalation/) to reach out to team members who are able to help resolve the problem.

Note: This role should not be confused with [Merge Request Coach](/job-families/expert/merge-request-coach). The main goal of a Merge Request Coach is to help
[merge requests from the community](https://gitlab.com/gitlab-org/gitlab-ce/merge_requests?label_name[]=Community%20contribution)
get merged into GitLab.

## Find a Merge Request Buddy

Visit the [GitLab Team page](/handbook/company/team/) and search for 'Merge Request Buddy', or ask on Slack in `#mr-buddies`.

## Become a Merge Request Buddy

If you're comfortable using Git and GitLab and want to help team members troubleshoot problems and accelerate their learning, please follow these steps to indicate your availability as a `Merge Request Buddy`:

1. Find your [`.yml` file](/handbook/about/editing-handbook/#add-yourself-to-the-team-page).
1. Add `Merge Request Buddy` to the `departments` section in your entry (keeping your existing departments):

   ```yaml
   departments:
     - ...
     - Merge Request Buddy
   ```

1. Add the following code above the `story` section in your entry:

   ```yaml
   expertise:  |
      <li><a href="/handbook/people-group/general-onboarding/mr-buddies/">Merge Request Buddy</a></li>
   ```

1. If you already have an `expertise` section, add the list item portion of the above code:

   ```html
   <li><a href="/handbook/people-group/general-onboarding/mr-buddies/">Merge Request Buddy</a></li>
   ```

1. Optionally [request maintainer access](https://gitlab.com/gitlab-com/team-member-epics/access-requests/-/issues/new) to <https://gitlab.com/gitlab-com/www-gitlab-com> to be able to merge team members merge requests for this project as an MR Buddy
