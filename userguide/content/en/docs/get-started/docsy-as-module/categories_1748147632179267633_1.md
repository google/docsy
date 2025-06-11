{{ $sections := site.Data.public.sections }}
{{- $categories := dict }}
{{- range $k, $v := site.Data.public.categories }}
  {{- $categories = merge $categories (dict $k $v) }}
{{ end }}
{{ $stages := site.Data.public.stages.stages }}
{{ $features := site.Data.public.features }}
{{- range $section_key, $section_data := $sections }}
{{- $section_name := $section_data.name }}

### {{ $section_data.name }} section

{{ partial "categories/section-heading.html" $section_data }}

{{ partial "categories/section-stages-graph.md" (dict "section_key" $section_key "section_name" $section_name )}}

{{- range $key, $data := $stages }}
{{- if eq $section_key $data.section }}

#### {{ $data.display_name }} stage

{{ partial "categories/section-heading.html" $data }}

{{ range $k, $d := $data.groups }}

##### {{ $d.name }} group

{{ partial "categories/developer-count.html" $d }}

{{- $d = merge $d (dict "group" true) }}
{{- $d = merge $d (dict "display_name" .name) }}
{{ partial "categories/section-heading.html" $d }}

{{ with .categories }}
<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Maturity</th>
            <th>Links</th>
        </tr>
    </thead>
    <tbody>
{{- range . -}}
    {{- with (index $categories .) -}}
{{- $maturity := strings.Title .maturity -}}
{{- if eq .maturity "planned" -}}
    {{- $available := time .available -}}
    {{- $maturity = printf "Planned %s" (time.Format "2006" $available) -}}
{{- end -}}
    <tr>
        <td>{{ .name }}</td>
        <td class="text-center"><span class="badge bg-primary">{{- $maturity -}}</span></td>
        <td>
        {{- with .marketing_page -}}
        <a href="{{.}}">Marketing Page</a><br>
        {{- end -}}
        {{- with .documentation -}}
        <a href="{{.}}">Documentation Page</a><br>
        {{- end -}}
        {{- with .direction -}}
        <a href="https://about.gitlab.com{{.}}">Direction Page</a><br>
        {{- end -}}
        </td>
    </tr>
    {{- end -}}
{{- end -}}
    </tbody>
</table>
{{- end -}}
{{- end}}

{{- end }}
{{- end }}
{{- end }}
