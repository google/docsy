{{- $groupLabel := "" }}
{{- $groupSlug := "" }}
{{- if .IsNamedParams }}
    {{- with (.Get "group-label") }}
        {{- $groupLabel = . }}
    {{- else }}
        <h2>Requires the group-label argument</h2>
    {{- end }}
    {{- with (.Get "group-slug") }}
        {{- $groupSlug = . }}
    {{- else }}
        <h2>Requires the group-slug argument</h2>
    {{- end }}
{{- else }}
    <h2>Requires arguments for <code>group-label</code> and <code>group-slug</code></h2>
{{- end }}

<!-- markdownlint-disable MD052 -->
The Create: {{ $groupLabel }} group conducts [monthly retrospectives in GitLab issues](https://gitlab.com/gl-retrospectives/create-stage/{{ $groupSlug }}/issues?scope=all&utf8=%E2%9C%93&state=all&label_name[]=retrospective). These include
<!-- markdownlint-enable MD052 -->
the backend team, plus any people from frontend, UX, and PM who have worked with
that team during the release being retrospected.

These are confidential during the initial discussion, then made public in time
for each month's [GitLab retrospective](/handbook/engineering/workflow/#retrospective).
For more information, see [team retrospectives](/handbook/engineering/management/group-retrospectives/).

{{- if .Get "use-coordinator" }}

##### Retrospective Coordinator

For each retrospective we assign a retrospective coordinator whose responsibilities include:

* Invite team members to provide asynchronous feedback
* Provide updates on action points from previous retrospective
* Capture action points for the current retrospective
* Ensure a retrospective coordinator is assigned for the next retrospective

{{- end}}
