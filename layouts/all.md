# {{ .Title -}}

{{ $needSeparator := false -}}

{{/* Description ------------------------------------------------------- */ -}}

{{ with .Description | strings.TrimSpace }}

> {{ replace . "\n" "\n> " -}}
{{ $needSeparator = true -}}
{{ end -}}

{{/* Page content ------------------------------------------------------ */ -}}

{{ with .RenderShortcodes | strings.TrimSpace }}
{{ if $needSeparator }}
---

{{ else }}
{{ end -}}

{{ . -}}
{{ $needSeparator = true -}}
{{ end -}}

{{/* Section index, if any --------------------------------------------- */ -}}

{{ with .Pages }}
{{ if $needSeparator }}
---

{{ else }}
{{ end -}}

Section pages:

{{ range . -}}
- [ {{- .Title -}} ]( {{- .RelPermalink -}} )
  {{- with .Description -}}
    : {{ strings.TrimSpace . -}}
  {{ end }}
{{ end -}}

{{ end -}}
