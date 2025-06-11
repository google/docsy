
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsPlumb/2.8.6/js/jsplumb.js" integrity="sha384-pge06D67Qc8qh00Apil8hJbKHA5hAv0SvX+NJUdI60b65mcgAguChL0072HWlC+7" crossorigin="anonymous"></script>
<script src="https://unpkg.com/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
<script src="https://unpkg.com/tooltip.js@1.3.3/dist/umd/tooltip.min.js" integrity="sha384-EebWk7GwYnOiMYxONecFC/D8xQKZ7e+QVT20Mom2m2HYhh4KyRZjZXNAiXK7ZCKU" crossorigin="anonymous"></script>

<div id="architecture">
  <div class="container">
    <ul id="legend">
      <li><span class="local swatch">Blue</span> = Local / custom</li>
      <li><span class="service swatch">Green</span> = Free service</li>
      <li><span class="global swatch">Yellow</span> = Open-source library</li>
    </ul>
    <div class="node global row1 site-column" id="open-sdg">
      Open SDG
      <i tabindex="0" class="fa fa-info-circle"></i>
      <span class="info">
        <a href="https://github.com/open-sdg/open-sdg">Open SDG</a> provides the core layouts, styling, and functionality for your site.
        <br><br>
        This is a <a href="https://jekyllrb.com/docs/themes/">Jekyll theme</a>
        designed to be easily customised if needed.
      </span>
    </div>
    <div class="node local row2 site-column" id="site-repo">
      Site repository
      <i tabindex="0" class="fa fa-info-circle"></i>
      <span class="info">
        This contains all the content, configuration, and customisations that
        are specific to your implementation. A starter template is available <a href="https://github.com/open-sdg/open-sdg-site-starter">here</a>.
        <br><br>
        This functions as your own custom <a href="https://jekyllrb.com">Jekyll</a>
        site.
      </span>
    </div>
    <div class="node service row1 data-column" id="prose-io">
      Github or<br>other source
      <i tabindex="0" class="fa fa-info-circle"></i>
      <span class="info">
        Data, metadata, and indicator configuration files can be stored on <a href="https://github.com">Github</a> and edited with built-in forms or offline.
        <br><br>
        Many alternative data sources can be used as well, such as APIs.
      </span>
    </div>
    <div class="node local row2 data-column" id="data-repo">
      Data repository
      <i tabindex="0" class="fa fa-info-circle"></i>
      <span class="info">
        This contains all the data, metadata, and indicator configuration for your implementation. A starter template is available <a href="https://github.com/open-sdg/open-sdg-data-starter">here</a>.
        <br><br>
        Data, metadata, indicator configuration, translation, and schema imports, validation, and pre-processing are all
        handled here.
      </span>
    </div>
    <div class="node service row3 site-column" id="automation-site">
      Automation tool
      <i tabindex="0" class="fa fa-info-circle"></i>
      <span class="info">
        Any automation tool, such as <a href="../automation/github-actions/">GitHub Actions</a>, performs configured actions in response to events or schedules.
      </span>
    </div>
    <div class="node global row4" id="jekyll">
      Jekyll
      <i tabindex="0" class="fa fa-info-circle"></i>
      <span class="info">
        <a href="https://jekyllrb.com/">Jekyll</a> is a static site generator that
        compiles the everything into a fast and secure website.
      </span>
    </div>
    <div class="node global row4 site-column" id="sdg-translations">
      Translations
      <i tabindex="0" class="fa fa-info-circle"></i>
      <span class="info">
        Translation repositories like <a href="https://github.com/open-sdg/sdg-translations">this one</a> provide translations of all the text used on your site.
        <br><br>
        These are stand-alone projects which can be forked and extended to translate
        any implementation-specific text as needed.
      </span>
    </div>
    <div class="node service row3 data-column" id="automation-data">
      Automation tool
      <i tabindex="0" class="fa fa-info-circle"></i>
      <span class="info">
        Any automation tool, such as <a href="../automation/github-actions/">GitHub Actions</a>, performs configured actions in response to events or schedules.
      </span>
    </div>
    <div class="node global row4 data-column" id="sdg-build">
      SDG Build
      <i tabindex="0" class="fa fa-info-circle"></i>
      <span class="info">
        <a href="https://github.com/open-sdg/sdg-build">SDG Build</a> handles the
        requisite pre-processing of your data, metadata, and indicator configuration.
        <br><br>
        This is a stand-alone library which does not require customisation.
      </span>
    </div>
    <div class="node service row5 site-column" id="hosting-site">
      Hosting provider
      <i tabindex="0" class="fa fa-info-circle"></i>
      <span class="info">
        Any hosting provider, such as <a href="../hosting/github-pages/">Github Pages</a> will receive the uploaded files to serve them as a static website.
      </span>
    </div>
    <div class="node service row5 data-column" id="hosting-data">
      Hosting provider
      <i tabindex="0" class="fa fa-info-circle"></i>
      <span class="info">
        Any hosting provider, such as <a href="../hosting/github-pages/">Github Pages</a> will receive the uploaded files to serve them as a static website.
      </span>
    </div>
    <div id="logos-automation" class="logos row3"><div class="logo-container">
      <img src="../img/github.png" alt="Logo for GitHub" title="GitHub" />
      <img src="../img/circleci.png" alt="Logo for CircleCI" title="CircleCI" />
      <img src="../img/travisci.png" alt="Logo for TravisCI" title="TravisCI" />
      <img src="../img/jenkins.png" alt="Logo for Jenkins" title="Jenkins" />
    </div></div>
    <div id="logos-hosting" class="logos row5"><div class="logo-container">
      <img src="../img/github.png" alt="Logo for GitHub" title="Github" />
      <img src="../img/aws.png" alt="Logo for AWS" title="AWS" />
      <img src="../img/linux.png" alt="Logo for Linux" title="Linux" />
      <img src="../img/netlify.png" alt="Logo for Netlify" title="Netlify" />
    </div></div>
    <div class="node local row6 site-column" id="prod-stage-site">
      Production and <br>staging domains
      <i tabindex="0" class="fa fa-info-circle"></i>
      <span class="info">
        The hosted site is available in two separate versions: <strong>staging</strong>
        and <strong>production</strong>.
      </span>
    </div>
    <div class="node local row6 data-column" id="prod-stage-data">
      Production and <br>staging domains
      <i tabindex="0" class="fa fa-info-circle"></i>
      <span class="info">
        The hosted data is available in two separate versions - <strong>staging</strong>
        and <strong>production</strong>.
      </span>
    </div>
  </div>
</div>

<script>
jsPlumb.ready(function () {

  // Helper function to get overlay labels as tooltips.
  function connectorTip(text, location) {
    if (!location) {
      location = 0.5;
    }
    var label = '' +
      '<div class="node connector-tooltip">' +
        '<i tabindex="0" class="fa fa-info-circle"></i>' +
        '<span class="info">' + text + '</span>' +
      '</div>';
    return [['Custom', {create: function() { return jQuery(label); }, location: location}]]
  }

  // Helper function to get overlay arrows.
  function connectorArrow(location) {
    if (!location) {
      location = 0.5;
    }
    return [["Arrow" , { width: 12, length: 12, location: location }]];
  }

  // Draw the connections using the jsPlumb library.
  jsPlumb.importDefaults({
    ConnectionsDetachable: false,
    Connector: 'Straight',
    Endpoint: [ 'Dot', { radius: 4 } ],
    Anchors: ['Bottom', 'Top'],
  });
  jsPlumb.connect({
    source: 'open-sdg',
    target: 'site-repo',
    overlays: connectorTip('Open SDG is used in your site via the <a href="https://github.com/benbalter/jekyll-remote-theme">jekyll_remote_theme</a> plugin.'),
  });
  jsPlumb.connect({
    source: 'site-repo',
    target: 'automation-site',
    overlays: connectorTip('The automation tool listens for changes in the repository code.'),
  });
  jsPlumb.connect({
    source: 'sdg-build',
    target: 'sdg-translations',
    anchors: ['Left', 'Right'],
    overlays: connectorTip('During the data build, the translations projects are used to get multilingual content.'),
  });
  jsPlumb.connect({
    source: 'prose-io',
    target: 'data-repo',
    overlays: connectorTip('Edits to the data/metadata/configuration are pushed to the data repository.'),
  });
  jsPlumb.connect({
    source: 'data-repo',
    target: 'automation-data',
    overlays: connectorTip('The automation tool listens for changes in the repository code.'),
  });
  jsPlumb.connect({
    source: 'prod-stage-data',
    target: 'jekyll',
    anchors: ['Left', 'Right'],
    overlays: connectorTip('The metadata and headline data is imported into the site at build time, which allows the platform to display data even without javascript.', 0.1),
  });
  jsPlumb.connect({
    source: 'automation-data',
    target: 'sdg-build',
    overlays: connectorTip('Whenever the repository code changes, the automation tool kicks in and validates and processes the data.'),
  });
  jsPlumb.connect({
    source: 'sdg-build',
    target: 'hosting-data',
    overlays: connectorTip('The automation tool continues by pushing the processed data on to the hosting provider.'),
  });
  jsPlumb.connect({
    source: 'jekyll',
    target: 'hosting-site',
    overlays: connectorTip('The automation tool continues by pushing the Jekyll build to the hosting provider'),
  });
  jsPlumb.connect({
    source: 'automation-site',
    target: 'jekyll',
    overlays: connectorTip('Whenever the repository code changes, the automation tool kicks in and starts a Jekyll build.'),
  });
  jsPlumb.connect({
    source: 'hosting-data',
    target: 'prod-stage-data',
    overlays: connectorArrow(),
  });
  jsPlumb.connect({
    source: 'hosting-site',
    target: 'prod-stage-site',
    overlays: connectorArrow(),
  });
  window.addEventListener('resize', function() {
    jsPlumb.repaintEverything();
  });

  // Add the tooltips with Popper.js.
  var repos = document.getElementsByClassName('node');
  for (var i = 0; i < repos.length; i++) {
    var button = repos[i].getElementsByClassName('fa-info-circle');
    var text = repos[i].getElementsByClassName('info');
    if (text.length && button.length) {
      var instance = new Tooltip(button[0], {
        title: text[0].innerHTML,
        placements: ['bottom', 'top'],
        trigger: 'hover focus',
        delay: {
          show: 50,
          hide: 150,
        },
        html: true,
        closeOnClickOutside: true,
        // Hijack the template to workaround a bug by adding an "inner" div.
        // @see https://github.com/FezVrasta/popper.js/issues/669
        template: '<div class="tooltip" role="tooltip">' +
                    '<div class="inner">' +
                      '<div class="tooltip-arrow"></div>' +
                      '<div class="tooltip-inner"></div>' +
                    '</div>' +
                  '</div>',
      });
    }
  }
});

</script>
