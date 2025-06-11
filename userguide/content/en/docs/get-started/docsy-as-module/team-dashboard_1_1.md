{{- $filterValue := "" }}
{{- $filters := slice }}
{{- $section := false }}

{{- with (.Get "filters") }}
  {{ $filterValue = . }}
  {{- $filters =  slice (dict "name" "team_group" "value" (lower $filterValue) ) }}
{{- end }}

{{- $knownValues := slice "filters" }}
{{- range $k, $v := .Params }}
    {{- if not (in $knownValues $k) }}
        {{$filters = append (dict "name" $k "value" (lower $v)) $filters }}
    {{- end }}
{{- end }}

{{- with (.Get "section") }}
    {{- $section = . }}
    {{- $filters =  slice (dict "name" "development_section" "value" (lower $filterValue) ) }}
{{- end }}

{{- with (.Get "stage") }}
    {{- $section = . }}
    {{- $filters =  slice (dict "name" "stage" "value" (lower $filterValue) ) }}
{{- end }}

### Top Engineering Metrics dashboard

{{ partial "sisense-with-filter" (dict "dashboard" "1000952" "height" 750 "filters" $filters "visible" (slice "team_group" "stage" "development_section")) }}

### MR Types dashboard

{{ partial "sisense-with-filter" (dict "dashboard" "976854" "height" 750 "filters" $filters "visible" (slice "team_group" "stage" "development_section")) }}

### Development dashboard

<details>
  <summary><b>Dashboard</b></summary>
{{ partial "sisense-with-filter" (dict "dashboard" "681347" "height" 750 "filters" $filters "visible" (slice "team_group" "stage" "development_section")) }}
</details>

### Infrastructure dashboard

<details>
  <summary><b>Dashboard</b></summary>
{{ partial "sisense-with-filter" (dict "dashboard" "798401" "height" 750 "filters" $filters "visible" (slice "team_group" "stage" "development_section")) }}
</details>

### Quality dashboard

<details>
  <summary><b>Dashboard</b></summary>
{{ partial "sisense-with-filter" (dict "dashboard" "736012" "height" 750 "filters" $filters "visible" (slice "team_group" "stage" "development_section")) }}
</details>

### UX dashboard

<details>
  <summary><b>Dashboard</b></summary>
{{ partial "sisense-with-filter" (dict "dashboard" "736036" "height" 750 "filters" $filters "visible" (slice "team_group" "stage" "development_section")) }}
</details>

### Security dashboard

<details>
  <summary><b>Dashboard</b></summary>
{{ partial "sisense-with-filter" (dict "dashboard" "758795" "height" 750 "filters" $filters "visible" (slice "team_group" "stage" "development_section")) }}
</details>
