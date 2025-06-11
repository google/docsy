{{- range $k, $v := site.Data.public.service_maturity }}

### {{ $k }} detail

- {{ $v.level }}
- [Link to {{ $k }} dashboard ](https://dashboards.gitlab.net/d/{{ $k }}-main)
- [Service definition of {{ $k }}](https://gitlab.com/gitlab-com/runbooks/-/blob/master/metrics-catalog/services/{{ $k }}.jsonnet)

<table>
    <thead>
        <tr>
            <th>Level</th>
            <th>Criterion</th>
            <th>Passed</th>
        </tr>
    </thead>
    <tbody>
        {{- range .details }}
        <tr>
        {{- $len := len .criteria }}
        <th rowspan="{{ $len }}">{{.name}}</th>
        {{- range $index, $element := .criteria }}
        <th>{{ $element.name }}</th>
        <td>
            {{- if eq $element.result "unimplemented" }}
            ⚪ Not Implemented
            {{- else if eq $element.result "failed" }}
            ❌
            {{- else if eq $element.result "skipped" }}
            ➖<br>Reason: {{ $element.evidence }}
            {{- else if eq $element.result "passed" }}
            {{- $evidence := slice | append .evidence }}
            {{- $elen := len $evidence }}
            ✅ {{- range $i, $d := $evidence }}
            {{- $url := "" }}
            {{- if reflect.IsMap . }}
                {{- $url = .url }}
            {{- else }}
                {{- $url = . }}
            {{- end }}
            <a href="{{urls.Parse $url}}">{{add $i 1}}</a>{{- if not (eq (add $i 1) $elen) }},{{- end }}
            {{- end }}
            {{- end }}
        </td>
        </tr>
        {{- if not (eq (add $index 1) $len) }}
        <tr>
        {{- end }}
        {{- end }}
        {{- end }}
    </tbody>
</table>
{{- end }}
