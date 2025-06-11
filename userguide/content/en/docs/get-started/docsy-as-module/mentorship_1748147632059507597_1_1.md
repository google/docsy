---
title: Support Engineering Mentorship
description: This page covers the expectations of Senior+ Engineers and how they can engage in mentorship at GitLab
---

### Expectations of a mentee

As a mentee, it's important to remember the following:

1. This is a learning opportunity, not a 'hand-off'. The Mentor should not take over the issue, but instead support and guide you to learn.
1. Try to state the problem clearly, and do at least 15 minutes of prep work beforehand to help speed up troubleshooting.
1. If the mentor is moving too fast or not explaining something clearly enough, let them know. It can be scary, but they should understand.
1. Your mentor is human too. They may not know the answer either, but hopefully through pairing, you can both get closer to the right answer.

### Expectations of a mentor

#### How to set up quick mentoring as pairing sessions

Anyone in Support Engineering can act as a mentor, but this page is specifically about how Senior+ Engineers can set up and be intentional about mentoring others. Through a [trial in November 2019](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/2704) we determined the following guidelines:

1. Senior Engineers should aim for an average of 1 pairing per working day, or 5 pairing sessions a week. This is not a limit or even a floor, but an intention. Some weeks it could be higher, and others lower, but if so, done with intention.
1. They can be scheduled or as issues arise.
1. Senior Engineers can hold office hours as a form of mentorship.
1. If you see a ticket where you are an expert, and can offer help, consider pairing with that engineer.
1. You can use #support-donut to find possible engineers to pair with if no one springs to mind.
1. Through a [more recent initiative to offer help and encourage FRT](https://gitlab.com/gitlab-com/support/support-team-meta/-/issues/3829), Senior Engineers can lead and participate in Senior Help Sessions:
   - Senior Help Sessions are [tracked as pairing sessions using the `senior-help-sessions` label](https://gitlab.com/gitlab-com/support/support-pairing/-/issues?scope=all&state=all&label_name[]=senior-help-sessions).
   - They are slightly different from pairing sessions in that they focus solely on helping SE's determine the next best step(s) to progress a ticket, such as scheduling a pairing session with a particular subject matter expert in the team, or offering guidance on who to connect with based on [DevOps Stage categories](/handbook/product/categories/#devops-stages).
   - Currently, AMER holds one help session per day on a rotation such that each Senior leads one session per week.
   - This gives all engineers an opportunity to obtain help more frequently.
1. Senior+ Engineers can assist others in fulfilling their [responsibilities](/handbook/support/support-engineer-responsibilities) (such as meeting the [Ticket baseline](/handbook/support/support-engineer-responsibilities#ticket-baseline) in the effort to [Meet our FRT SLA](/handbook/support/workflows/meeting-frt-sla)) through mentorship on technical issues, time management, etc.

We've started with these simple guidelines to help outline ways you can connect with others.

#### How to engage in mentoring

As a mentor it's important to remember:

1. Explain your thought process as clearly as possible.
1. Seek to land on a common understanding so that it's clear that you both understand each other.
1. Try to avoid using "shortcuts" or "simplifications" unless you and the mentee agree there is a common understanding.
1. Empathy is key. Meet the engineer where they are, and support them as we would a customer.
Beyond just Pairing, Senior+ Engineers can consider more longer-form  structured mentorship. We currently advise aiming for a 6 week long program with a concrete goal for the close of the mentorship program to help keep both parties focused and moving forward.

### Example Mentoring Program

The following is an outline of a six-week mentoring program on log parsing with `jq` and interpreting `strace`, with one-hour meetings held weekly.  Example projects include creating a runbook and adding new pages to our troubleshooting documentation.

- Week 1:
  - Intro: What does the mentee want from this, what can the mentor offer
  - Goals: If possible, decide what the mentee is most interested in and potential projects for them to take on
    - It's fine if this is not clear yet, it should become easier to answer as the program continues
  - Mentor gives intro to topics
- Week 2:
  - Mentor demos `jq`
  - Mentee solves sample problems
  - Mentee is given a take-home assignment
- Week 3:
  - Review take-home assignment results
  - Go over `strace` of a simple program
  - Mentee runs their own trace and explains what they see
  - Take-home assignment, review `strace` for cause of error
- Week 4:
  - Review take-home assignment
  - Review more complex `strace` output, such as Gitaly
  - Finalize mentee project, if not already done
- Week 5:
  - Advanced `jq` techniques
  - Advanced `strace` techniques
  - Check-in on project status
- Week 6:
  - Review/finalize project
  - Post-mortem: what went worked? what didn't?

Depending on the complexity and time available to the mentee, finishing the project may take several more weeks, with meetings held as needed.
