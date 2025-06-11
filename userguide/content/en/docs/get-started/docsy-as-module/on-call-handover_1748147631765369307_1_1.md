---
title: "On-call handover"
---

## On-call handover

The [on-call-handovers](https://gitlab.com/gitlab-com/gl-infra/on-call-handovers/issues) project contains issues for each SRE's on-call shift. The outgoing EOC records the activities of their shift using the `handover` issue template to indicate a handoff and assigns it to the incoming EOC. The `/sre-oncall [handover]` slack command can also be used in the `#production` channel to simplify this process. It will automatically create a new issue and pre-populate some information such as outgoing/incoming EOC handles, open/closed incidents, resolved alerts, etc.

At the end of a SRE's on-call shift, a summary comment of notable events, incidents, etc. should be posted to the [Weekly Reliability (SRE) Team Newsletter](https://gitlab.com/gitlab-com/gl-infra/reliability-reports/-/issues/?label_name%5B%5D=Reliability-Team-Newsletter) as a comment. While we do not currently have a prescriptive format for this summary, EOCs can reference [this thread](https://gitlab.com/gitlab-com/gl-infra/infrastructure/-/issues/12323#note_487947960) for some examples; what specific information is deemed most notable for a given shift will necessarily differ week-to-week, and is left to the discretion of the outgoing EOC.

Once a week the production team has an on-call handover for changing the on-call shift. This meeting is optional but we encourage incoming and outgoing EOCs, Incident Managers, and anyone who is interested in GitLab.com operations to attend.

This meeting will be used to hand over the gitlab.com operations and discuss operational issues related to gitlab.com. There will be a short review of the current on-call report, open issues with the [oncall](https://gitlab.com/gitlab-com/infrastructure/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=oncall) label, user facing errors on the site as well as priorities for the next on-call team.

Team leads are invited and should join in case there are any specific issues related to the service they are responsible for or anything they would like to give attention to.

### Before the Meeting

The current on-call will update the document with a report link and items for discussion.

### During the Meeting

* Discuss items on the "GitLab Oncall Handover" document.
* Review 7 day graphs on the current [on-call issue report](https://gitlab.com/gitlab-com/infrastructure/issues?scope=all&utf8=%E2%9C%93&state=closed&label_name[]=oncall%20report).
* Assign all [open on-call issues](https://gitlab.com/gitlab-com/infrastructure/issues?scope=all&utf8=%E2%9C%93&state=opened&label_name[]=oncall) to the next on-call team.

### After the Meeting

The current on-call will close the report issue.
