{{ $color := .Get "color" | default "primary" -}}

<div class="alert alert-{{ $color }}" role="alert">
{{- with .Get "title" -}}
  <div class="h4 alert-heading">
    {{- . | safeHTML -}}
  </div>
{{/* Do **not** remove this comment! It ends the previous HTML block; see https://spec.commonmark.org/0.30/#html-blocks, 7. */}}
{{- end -}}
{{ .Inner -}}
</div>
