{{- $knownRoles := (slice "owner" "maintainer" "trainee_maintainer" "reviewer") -}}
{{- $projectTeams := dict -}}
{{- range $k, $d := site.Data.public.projects -}}
 {{- $owners := slice -}}
 {{- $maintainers := slice -}}
 {{- $trainees := slice -}}
 {{- $reviewers := slice -}}
 {{- $members := slice -}}
 {{- range site.Data.public.team -}}
  {{$member := . }}
  {{- range (append (index .projects $k) slice) -}}
   {{if hasPrefix . "owner"}}
    {{- $owners = append $member $owners -}}
   {{- end -}}
   {{if hasPrefix . "maintainer"}}
    {{- $maintainers = append $member $maintainers -}}
   {{- end -}}
   {{if hasPrefix . "trainee_maintainer"}}
    {{- $trainees = append $member $trainees -}}
   {{- end -}}
   {{if hasPrefix . "reviewer"}}
    {{- $reviewers = append $member $reviewers -}}
   {{- end -}}
   {{- $members = append $member $members -}}
  {{- end -}}
 {{- end -}}
 {{- $projectTeams = merge $projectTeams (dict $k (dict "members" $members "owners" $owners "maintainers" $maintainers "trainees" $trainees "reviewers" $reviewers)) -}}
{{- end -}}

{{ range $k, $d := site.Data.public.projects }}

## {{ $d.name }} {#{{ $k }}}

{{ $d.description | markdownify }}

{{- if gt (len (index $projectTeams $k).members) 0 }}

### Assignments

{{- $maintainerRoles := dict }}
{{- if gt (len (index $projectTeams $k).maintainers) 0 }}
 {{- range (index $projectTeams $k).maintainers }}
  {{- $member := . }}
  {{- $project := split (delimit (append (index .projects $k) (slice)) " ") " " }}
  {{- if eq (len $project) 1 }}
   {{- if (index $maintainerRoles " maintainers") }}
    {{- $members := index $maintainerRoles " maintainers" }}
    {{- $maintainerRoles = merge $maintainerRoles (dict " maintainers" (append $member $members)) }}
   {{- else }}
    {{- $maintainerRoles = merge $maintainerRoles (dict " maintainers" (slice $member)) }}
   {{- end }}
  {{- else }}
   {{- range $i, $r := $project }}
    {{- if not (in $knownRoles $r ) }}
     {{- if and (gt $i 0) (eq (index $project (sub $i 1)) "maintainer") }}
      {{- $role := $r}}
      {{- if (index $maintainerRoles $role) }}
       {{- $members := index $maintainerRoles $role }}
       {{- $maintainerRoles = merge $maintainerRoles (dict $role (append $member $members)) }}
      {{- else }}
       {{- $maintainerRoles = merge $maintainerRoles (dict $role (slice $member)) }}
      {{- end }}
     {{- end }}
    {{- end }}
   {{- end }}
  {{- end }}
 {{- end }}
{{- end }}

{{- $traineeRoles := dict }}
{{- if gt (len (index $projectTeams $k).trainees) 0 }}
 {{- range (index $projectTeams $k).trainees }}
  {{- $member := . }}
  {{- $project := split (delimit (append (index .projects $k) (slice)) " ") " " }}
  {{- if eq (len $project) 1 }}
   {{- if (index $traineeRoles " trainees") }}
    {{- $members := index $traineeRoles " trainees" }}
    {{- $traineeRoles = merge $traineeRoles (dict " trainees" (append $member $members)) }}
   {{- else }}
    {{- $traineeRoles = merge $traineeRoles (dict " trainees" (slice $member)) }}
   {{- end }}
  {{- else }}
   {{- range $i, $r := $project }}
    {{- if not (in $knownRoles $r ) }}
     {{- if and (gt $i 0) (eq (index $project (sub $i 1)) "trainee_maintainer") }}
      {{- $role := $r}}
      {{- if (index $traineeRoles $role) }}
       {{- $members := index $traineeRoles $role }}
       {{- $traineeRoles = merge $traineeRoles (dict $role (append $member $members)) }}
      {{- else }}
       {{- $traineeRoles = merge $traineeRoles (dict $role (slice $member)) }}
      {{- end }}
     {{- end }}
    {{- end }}
   {{- end }}
  {{- end }}
 {{- end }}
{{- end }}

{{- $reviewerRoles := dict }}
{{- if gt (len (index $projectTeams $k).reviewers) 0 }}
 {{- range (index $projectTeams $k).reviewers }}
  {{- $member := . }}
  {{- $project := split (delimit (append (index .projects $k) (slice)) " ") " " }}
  {{- if eq (len $project) 1 }}
   {{- if (index $reviewerRoles " reviewers") }}
    {{- $members := index $reviewerRoles " reviewers" }}
    {{- $reviewerRoles = merge $reviewerRoles (dict " reviewers" (append $member $members)) }}
   {{- else }}
    {{- $reviewerRoles = merge $reviewerRoles (dict " reviewers" (slice $member)) }}
   {{- end }}
  {{- else }}
   {{- range $i, $r := $project }}
    {{- if not (in $knownRoles $r ) }}
     {{- if and (gt $i 0) (eq (index $project (sub $i 1)) "reviewer") }}
      {{- $role := $r}}
      {{- if (index $reviewerRoles $role) }}
       {{- $members := index $reviewerRoles $role }}
       {{- $reviewerRoles = merge $reviewerRoles (dict $role (append $member $members)) }}
      {{- else }}
       {{- $reviewerRoles = merge $reviewerRoles (dict $role (slice $member)) }}
      {{- end }}
     {{- end }}
    {{- end }}
   {{- end }}
  {{- end }}
 {{- end }}
{{- end }}

<table style="display: table; width: 80%;">
 {{- if gt (len (index $projectTeams $k).owners) 0 }}
 <tr>
  <th>Product owners</th>
  <td>
   {{- range (index $projectTeams $k).owners }}
   {{ partial "member/with-team-link" . }}<br>
   {{- end }}
  </td>
 </tr>
 {{- end }}
 {{- if gt (len (index $projectTeams $k).maintainers) 0 }}
 <tr>
  <th>Maintainers</th>
  <td>
   {{- range $k, $m := $maintainerRoles}}
   {{- if not (eq $k " maintainers") }}<strong>{{ $k }} ({{ len $m }})</strong>{{- end }}
   <p>{{- range (uniq $m) }}
   {{ partial "member/with-team-link" . }}<br>
   {{- end }}&nbsp;<br>
   {{- end }}</p>
  </td>
 </tr>
 {{- end }}
 {{- if gt (len (index $projectTeams $k).trainees) 0 }}
 <tr>
  <th>Trainee Maintainers</th>
  <td>
   {{- range $k, $m := $traineeRoles}}
   {{- if not (eq $k " trainees") }}<strong>{{ $k }} ({{ len $m }})</strong>{{- end }}
   <p>{{- range (uniq $m) }}
   {{ partial "member/with-team-link" . }}<br>
   {{- end }}</p>
   {{- end }}
  </td>
 </tr>
 {{- end }}
 {{- if gt (len (index $projectTeams $k).reviewers) 0 }}
 <tr>
  <th>Reviewers</th>
  <td>
   {{- range $k, $m := $reviewerRoles}}
   {{- if not (eq $k " reviewers") }}<strong>{{ $k }} ({{ len $m }})</strong>{{- end }}
   <p>{{- range (uniq $m) }}
   {{ partial "member/with-team-link" . }}<br>
   {{- end }}</p>
   {{- end }}
  </td>
 </tr>
 {{- end }}
</table>

{{- end }}
{{- end }}
