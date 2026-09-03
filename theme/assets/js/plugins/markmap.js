import * as params from '@params';

// Configure the markmap autoloader before its (same-origin, vendored,
// deferred) script runs: manual mode, prism transform excluded, and render
// once ready.
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

  window.markmap = {
    autoLoader: {
      manual: true,
      onReady() {
        const { autoLoader, builtInPlugins } = window.markmap;
        autoLoader.transformPlugins = builtInPlugins.filter(
          (plugin) => plugin.name !== 'prism',
        );
        if (parents.size) autoLoader.renderAll();
      },
    },
  };
})();
