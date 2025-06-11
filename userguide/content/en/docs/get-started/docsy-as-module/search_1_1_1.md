---
layout: page
title: Search
permalink: search/
scripts:
  - /assets/js/search.js
---
Use this tool to check on existing translations, and to see contextual information about usage. Please let us know through the [issue queue](https://github.com/open-sdg/sdg-translations/issues) if any additional context would be helpful.

<div>
  <label for="search-bar">Search for translations</label>
  <input id="search-bar" name="search-bar" type="text">
</div>
<div id="search-results">
  <p>Matching translations will appear here.</p>
</div>

<script src="https://unpkg.com/lunr/lunr.js"></script>