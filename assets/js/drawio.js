{{with .Site.Params.drawio}}
{{if .enable }}
(function ($) {
  // find all the svg images
  $('img').each(function () {
    const $img = $(this);
    const src = $img.attr('src');
    if (!src.endsWith('.svg')) {
      return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open("GET", src);
    xhr.addEventListener("load", function () {
      const doc = new DOMParser().parseFromString(
        this.responseText.trim(), "image/svg+xml");
      if (!doc) {
        return;
      }
      const svg = doc.getElementsByTagName("svg");
      const content = svg && svg[0].getAttribute("content");
      if (!content || !content.startsWith('<mxfile')) {
        return;
      }

      var url = {{ .drawio_server | default "https://app.diagrams.net/" | jsonify }};
      url += "#R" + encodeURI(content);
      $img.wrap('<div class="drawio"></div>');
      $img.after('<a class="drawiobtn" href="' + url + '" target="_blank"><i class="fas fa-edit"></i></a>');

      $img.parent().hover(function () {
        $(this).parent().find('.drawiobtn').show();
        }, function () {
          $(this).parent().find('.drawiobtn').hide();
      });
    });

    xhr.send();
  });
}) (jQuery);
{{end}}
{{end}}
