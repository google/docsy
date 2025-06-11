{{- $groupLabel := "" }}
{{- $groupSlug := "" }}
{{- if .IsNamedParams }}
    {{- with (.Get "group-label") }}
        {{- $groupLabel = . }}
    {{- else }}
        <h2>Requires the group-label argument</h2>
    {{- end }}
{{- else }}
    {{- with (.Get 0) }}
        {{- $groupLabel = . }}
    {{- else }}
        <h2>Requires a single positional argument for group label</h2>
    {{- end }}
{{- end }}

[Career development](/handbook/engineering/careers/) conversations in the Create:{{- $groupLabel -}} BE team are centered
around a [Career Development Sheet](https://docs.google.com/spreadsheets/d/1u_123EK7Kts9wvA4wEDJtiHvMpsc7Q7GCpRIm8SydZY/edit#gid=0) that is based on the [Engineering Career Matrix for Individual Contributors](/handbook/engineering/careers/matrix/).
The sheet lists the expected current level
behaviors on the left, the next level behaviors on the right, and uses colored
columns in between to visually represent the extent to which the individual has
shown to have grown from the current level to the next. Columns to the right of
a next level behavior are used to collect specific examples of that behavior,
which serve as evidence of the individual's growth.

Both the matrix and the sheet are Works in Progress; the development of the career
matrix is tracked in [an epic](https://gitlab.com/groups/gitlab-com/-/epics/85), and as the matrix evolves,
the sheet will be updated to match.
