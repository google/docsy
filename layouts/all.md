# {{ .Title -}}

{{/* Description ------------------------------------------------------- */ -}}

{{ with .Description | strings.TrimSpace }}

{{ . -}}
{{ if not (hasSuffix "." .) -}} . {{- end -}}

{{ end -}}

{{/* Page content ------------------------------------------------------ */ -}}

{{ with .RenderShortcodes | strings.TrimSpace }}

---

{{ . -}}
{{ end -}}

{{/* Section index, if any --------------------------------------------- */ -}}

{{ with .Pages }}

---

Section pages:

{{ range . -}}
- [ {{- .Title -}} ]( {{- .RelPermalink -}} )
  {{- with .Description -}}
    : {{ strings.TrimSpace . -}}
  {{ end }}
{{ end -}}

{{ end -}}
