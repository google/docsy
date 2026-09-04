import * as params from '@params';

(function () {
  'use strict';

  // Unique parents: sibling markmap code blocks are replaced together with
  // their shared parent's full text.
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

  const style = document.createElement('style');
  style.textContent = `.markmap > svg { width: 100%; height: ${params.height || '300px'}; }`;
  document.head.append(style);

  // Merge, never replace: if the autoloader ran first (a deferred plugin
  // script), window.markmap holds its exports and its own auto-render takes
  // over; replacing the object would discard both.
  const markmap = (window.markmap = window.markmap || {});
  markmap.autoLoader = Object.assign(markmap.autoLoader || {}, {
    manual: true,
    onReady() {
      // The autoloader calls this on its own options snapshot (`this`), which
      // is what its renderer reads; setting the exports object does nothing.
      this.transformPlugins = window.markmap.builtInPlugins.filter(
        (plugin) => plugin.name !== 'prism',
      );
      if (parents.size) window.markmap.autoLoader.renderAll();
    },
  });
})();
