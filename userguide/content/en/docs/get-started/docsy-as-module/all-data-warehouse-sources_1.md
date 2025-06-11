| Name | Pipeline | Raw Schema | Prep Schema | Audience | RF / SLO | MNPI | Tier |
|------|----------|------------|-------------|----------|----------|------|------|
{{- range site.Data.public.data_warehouse_sources }}
| {{.name}} | {{.pipeline}} | `{{.raw_schema}}` | `{{.prep_schema}}` | {{.audience}} | {{.rf_slo}} | {{.mnpi}} | {{.tier}} |
{{- end }}
