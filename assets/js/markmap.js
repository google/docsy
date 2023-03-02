{{ if lt hugo.Version "0.93.0" -}}
    $('.language-markmap').parent().replaceWith(function() {
        return $('<pre class="markmap">').text($(this).text());
    });
{{ end -}}

window.markmap = {
  autoLoader: {
      manual: false,
      onReady() {
        const { autoLoader, builtInPlugins } = window.markmap;
        autoLoader.transformPlugins = builtInPlugins.filter(plugin => plugin.name !== 'prism');
      },
  },
};
