{{ $sections := site.Data.public.sections }}
{{- $categories := dict }}
{{- range $k, $v := site.Data.public.categories }}
  {{- $categories = merge $categories (dict $k $v) }}
{{ end }}
{{ $stages := site.Data.public.stages.stages }}
{{ $features := site.Data.public.features }}

{{ range $key, $values := $sections }}

## {{ .name }} Section

{{ $section_name := $key }}
{{ range $stages }}
{{ $stageData := .}}
{{ if eq .section $section_name }}
{{ $stage_name := .display_name }}

### {{ $stage_name }}

{{ range $k, $v :=  .groups }}

#### {{ $stage_name }}: {{ .name }} Group {#{{ .name | urlize }}}

{{ partial "categories/section-heading" . }}

{{- if $v.categories }}

<table>
    <thead>
        <th>Category</th>
        <th>Features in Core</th>
        <th>Features in Premium</th>
        <th>Features in Ultimate</th>
    </thead>
    <tbody>
        {{- range $v.categories }}
        {{- $cat := . -}}
            {{- range $k, $v := $categories }}
                {{- if eq $k $cat }}
        <tr>
        <td>{{- $cat := lower $k }}<a href="{{ partial "categories/best-link" . }}">{{ $v.name }}</a></td>
        <td>
            {{- range $features.features }}
                {{- if in .category $cat }}
                    {{- if .gitlab_core }}
                    <p><a href="{{.link}}">{{.title}}</a></p>
                {{- end }}
                {{- end }}
            {{- end }}
        </td>
        <td>{{- range $features.features }}
                {{- if in .category $cat }}
                    {{- if and (not .gitlab_core) .gitlab_premium }}
                    <p><a href="{{.link}}">{{.title}}</a></p>
                {{- end }}
                {{- end }}
            {{- end }}</td>
        <td>{{- range $features.features }}
                {{- if in .category $cat }}
                    {{- if and (not .gitlab_core) (not .gitlab_premium) .gitlab_ultimate }}
                    <p><a href="{{.link}}">{{.title}}</a></p>
                {{- end }}
                {{- end }}
            {{- end }}</td>
        </tr>
                {{- end }}
            {{- end }}
        {{- end }}
    </tbody>
</table>

{{- end -}}
{{- end -}}
{{- end -}}
{{- end -}}
{{- end -}}
