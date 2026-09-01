{{ with .Site.Params.markmap }}
{{ if .enable }}

(function () {
  'use strict';

  // Unique parents, like the jQuery original: sibling markmap code blocks
  // are replaced together with their shared parent's full text.
  const parents = new Set(
    Array.from(
      document.querySelectorAll('.language-markmap'),
      (code) => code.parentElement,
    ),
  );
  parents.forEach((parent) => {
    const container = document.createElement('div');
    container.className = 'markmap';
    container.textContent = parent.textContent;
    parent.replaceWith(container);
  });

  if (parents.size) {
    window.markmap.autoLoader.renderAll();
  }
})();
{{ end }}
{{ end }}
