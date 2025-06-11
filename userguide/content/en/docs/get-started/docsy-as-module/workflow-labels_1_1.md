{{- $groupLabel := "" }}
{{- $issueBoard := "https://gitlab.com/groups/gitlab-org/-/boards/363876" }}
{{- if .IsNamedParams }}
    {{- with (.Get "group-label") }}
        {{- $groupLabel = . }}
    {{- end }}
{{- else }}
    {{- with (.Get 0) }}
        {{- $groupLabel = . }}
    {{- else }}
        <h2>Requires a single position label for the group label</h2>
    {{- end }}
{{- end }}

The easiest way for engineering managers, product managers, and other stakeholders
to get a high-level overview of the status of all issues in the current milestone,
or all issues assigned to specific person, is through the
<a href="https://gitlab.com/groups/gitlab-org/-/boards/363876?scope=all&utf8=%E2%9C%93&state=opened&label_name[]={{- $groupLabel -}}&label_name[]=backend&label_name[]=Deliverable">Development issue board</a>,
which has columns for each of the workflow labels described on Engineering Workflow
handbook page under [Updating Issues Throughout Development](/handbook/engineering/workflow/#updating-issues-throughout-development).

As owners of the issues assigned to them, engineers are expected to keep the
workflow labels on their issues up to date, either by manually assigning the new
label, or by dragging the issue from one column on the board to the next.
