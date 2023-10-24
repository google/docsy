{{ with .Site.Params.markmap }}
{{ if .enable }}


(function($) {
    var needMarkmap = false;
    $('.language-markmap').parent().replaceWith(function() {
        needMarkmap = true;
        return $('<div class="markmap">').text($(this).text());
    });

    let { markmap } = window;
    if(needMarkmap) {
        markmap = {
            autoLoader : {
                manual: true,
                onReady() {
                    const { autoLoader, builtInPlugins } = window.markmap;
                    autoLoader.transformPlugins = builtInPlugins.filter(plugin => plugin.name !== 'prism');
                }
            }
        }
        markmap.autoLoader.renderAll();
    }

})(jQuery);
{{ end }}
{{ end }}
