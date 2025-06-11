{{ range .Params }}
{{ $tier := . }}

##### {{ . }}

    {{- range site.Data.public.pricing_themes }}
        {{- if eq .tier $tier }}

1. {{ .name }}
        {{- end }}
    {{- end }}
{{- end }}
