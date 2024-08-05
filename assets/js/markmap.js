window.markmap = {
  autoLoader: {
      manual: false,
      onReady() {
        const { autoLoader, builtInPlugins } = window.markmap;
        autoLoader.transformPlugins = builtInPlugins.filter(plugin => plugin.name !== 'prism');
      },
  },
};
