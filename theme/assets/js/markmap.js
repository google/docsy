{{ with .Site.Params.markmap }}
{{ if .enable }}

(function () {
  'use strict';

  const codeBlocks = document.querySelectorAll('.language-markmap');
  codeBlocks.forEach((code) => {
    const container = document.createElement('div');
    container.className = 'markmap';
    container.textContent = code.textContent;
    code.parentElement.replaceWith(container);
  });

  if (codeBlocks.length) {
    window.markmap.autoLoader.renderAll();
  }
})();
{{ end }}
{{ end }}
