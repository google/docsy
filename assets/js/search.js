/*
Copyright 2018 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

(function ($) {
  'use strict';

  var Search = {
    init: function () {
      $(document).ready(function () {
        $(document).on('keypress', '.td-search input', function (e) {
          if (e.keyCode !== 13) {
            return;
          }

          var query = $(this).val();
          //Get current language using multiple methods
          function getCurrentLanguage() {
            var htmlLang = document.documentElement.lang;
            if (htmlLang) return htmlLang;

            // Method 2: Extract from URL path
            var path = window.location.pathname;
            var pathParts = path.split('/').filter(Boolean);
            if (pathParts.length > 0 && pathParts[0].length === 2) {

              return pathParts[0];
            }

            //Method 3: Meta tag as as fallback
            var metaLang = document.querySelector('meta[property="og:locale"]');
            if (metaLang && metaLang.content) return metaLang.content;

            // Fallback to default language from Hugo template
            return '{{ .Site.Language.Lang}}';

          }

          var currentLang = getCurrentLanguage();
          var defaultLang = '{{ .Site.Language.Lang }}';
          var basePath = '{{ "/" | absURL }}';

          //Build the correct search based on language

          var searchPage;
          if (currentLang && currentLang !== defaultLang) {
            // For non-default languages: /fr/search?q==query
            searchPage = basePath + currentLang + '/search?q=' + encodeURIComponent(query);

          } else {
            // For default language: /search?q=query
            searchPage = basePath + 'search?q=' + encodeURIComponent(query);
          }

          document.location = searchPage;

          return false;
        });
      });
    },
  };

  Search.init();
})(jQuery);
