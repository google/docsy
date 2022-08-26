{{ with .Site.Params.markmap }}
{{ if .enable }}


(function($) {
    var needMarkmap = false;
    $('.language-markmap').parent().replaceWith(function() {
        needMarkmap = true;
        return $('<div class="markmap">').text($(this).text());
    });

    if(needMarkmap) {
       window.markmap = {
            autoLoader : {
                manual: true,
                onReady() {
                    const { autoLoader, builtInPlugins } = window.markmap;
                    autoLoader.transformPlugins = builtInPlugins.filter(plugin => plugin.name !== 'prism');
                }
            }
        }
        window.markmap.autoLoader.renderAll();
    }

})(jQuery);
{{ end }}
{{ end }}
