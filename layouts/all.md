# {{ .Title }}

{{ with .Description -}}
{{ strings.TrimSpace . }}

---

{{ end -}}


{{ with .RenderShortcodes -}}
{{ strings.TrimSpace . }}

---

{{ end -}}


{{ with .Pages -}}

Section pages:

{{ range . -}}
- [ {{- .Title -}} ]( {{- .RelPermalink -}} )
  {{- with .Description -}}
    : {{ strings.TrimSpace . -}}
  {{ end }}
{{ end -}}

{{ end -}}
