<!-- To edit the content, see: https://gitlab.com/gitlab-com/www-gitlab-com/-/tree/master/data/performance_indicators -->
{{ $publicHandbookRef := getenv "PUBLIC_HANDBOOK_REF" | default "master" }}
{{ .Page.Store.Set "hastableau" true -}}
{{- $data := slice }}
{{- $dataURL := printf "https://gitlab.com/gitlab-com/www-gitlab-com/-/raw/%s/data/performance_indicators/%s.yml" $publicHandbookRef (.Get 0) }}
{{- with resources.GetRemote $dataURL }}
  {{- with .Err}}
    <h2>Unable to fetch performance indicator Data</h2>
  {{- else }}
      {{ $data = . | transform.Unmarshal }}
  {{- end }}
{{- end }}

{{- $kpiData := where $data "is_key" "eq" true }}
{{- $rpiData := where $data "is_key" "eq" false }}

## Executive Summary

<table>
  <thead>
    <tr>
        <th>KPI</th>
        <th>Health</th>
        <th>Status</th>
    </tr>
  </thead>
  <tbody>
  {{- range $kpiData -}}
    <tr>
        <td>{{- $link := printf "%s#%s" $.Page.RelPermalink (anchorize .name) }}
            <a href="{{ $link }}">{{ .name }}</a>
        </td>
        <td>
          {{- with .health.level -}}
            {{- partial "performance-indicators/health-level" . -}}
          {{- else }}
            <span class="badge bg-dark">Unknown</span>
          {{- end -}}
        </td>
        <td>
          {{- with .health.reasons -}}
            {{- partial "performance-indicators/health-reasons" . -}}
          {{- end -}}
        </td>
    </tr>
  {{- end }}
  </tbody>
</table>

## Key Performance Indicators

{{-  range $kpiData }}
  {{- template "kpi" . }}
{{- end }}

{{- if gt (len $rpiData) 0 }}

## Regular Performance Indicators

{{-  range $rpiData }}
  {{- template "kpi" . }}
{{- end }}

{{- end }}

## Legends

{{ partial "performance-indicators/health-def" }}

## How pages like this work

{{ partial "performance-indicators/data-def" }}

{{- define "kpi" }}

### {{ .name }}

{{ .definition | markdownify }}

**Target:** {{ .target | safeHTML }}

{{- if eq .public false }}
**This KPI cannot be public**
{{- end }}

{{- with .health.level }}
**Health:** {{- partial "performance-indicators/health-level" . }}
{{- else }}
<span class="badge bg-dark">Unknown</span>
{{- end }}

{{- with .health.reasons }}
  {{- partial "performance-indicators/health-reasons" . }}
{{- end }}

{{- if not (eq .public false) -}}
  {{- $open := .is_key -}}
  {{- with .sisense_data -}}
    {{- partial "performance-indicators/chart" (dict "data" . "open" $open) -}}
  {{- end -}}
  {{- with .sisense_data_secondary -}}
    {{- partial "performance-indicators/chart" (dict "data" . "open" $open) -}}
  {{- end -}}
  {{- with .sisense_data_tertiary -}}
    {{- partial "performance-indicators/chart" (dict "data" . "open" $open) -}}
  {{- end -}}
  {{- with .tableau_data -}}
   {{- partial "performance-indicators/tableau-chart" (dict "data" . "open" $open) -}}
  {{ end }}
{{- end -}}

{{- with .urls }}
**URL(s):**

{{- range .}}

- [{{.}}]({{.}})
{{ end }}

{{- end }}

---

{{- end }}
