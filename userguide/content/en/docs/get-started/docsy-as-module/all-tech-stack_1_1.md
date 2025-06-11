{{- range site.Data.public.tech_stack }}

## {{ .title }}

{{ .description  | markdownify }}

{{- with .handbook_link }}
**Handbook Guide:** {{ . | markdownify }}
{{- end }}
{{- end }}
