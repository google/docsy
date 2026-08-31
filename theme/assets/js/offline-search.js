// Adapted from code by Matt Walters https://www.mattwalters.net/posts/2018-03-28-hugo-and-lunr/

(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(function () {
    const searchInputs = Array.from(
      document.querySelectorAll('.td-search input'),
    );
    if (searchInputs.length === 0) {
      return;
    }

    //
    // Register handlers
    //

    searchInputs.forEach((input) => {
      input.addEventListener('change', () => {
        render(input);

        // Hide keyboard on mobile browser
        input.blur();
      });

      // Prevent reloading page by enter key on sidebar search.
      // stopPropagation preserves the jQuery handler's `return false`
      // semantics: site-level delegated submit listeners never saw this
      // event before the conversion.
      const form = input.closest('form');
      if (form) {
        form.addEventListener('submit', (e) => {
          e.preventDefault();
          e.stopPropagation();
        });
      }
    });

    //
    // Lunr
    //

    let idx = null; // Lunr index
    const resultDetails = new Map(); // Will hold the data for the search results (titles and summaries)

    // Request the JSON data file that is created by Hugo's build process
    fetch(searchInputs[0].dataset.offlineSearchIndexJsonSrc)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP status ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        idx = lunr(function () {
          this.ref('ref');

          // If you added more searchable fields to the search index, list them here.
          // Here you can specify searchable fields to the search index - e.g. individual toxonomies for you project
          // With "boost" you can add weighting for specific (default weighting without boost: 1)
          this.field('title', { boost: 5 });
          this.field('categories', { boost: 3 });
          this.field('tags', { boost: 3 });
          // this.field('projects', { boost: 3 }); // example for an individual toxonomy called projects
          this.field('description', { boost: 2 });
          this.field('body');

          data.forEach((doc) => {
            this.add(doc);

            resultDetails.set(doc.ref, {
              title: doc.title,
              excerpt: doc.excerpt,
            });
          });
        });

        searchInputs.forEach((input) => {
          input.dispatchEvent(new Event('change', { bubbles: true }));
        });
      })
      .catch((error) => {
        console.error('Could not load the search index:', error);
      });

    const render = (targetInput) => {
      //
      // Dispose existing popover
      //

      {
        const popover = bootstrap.Popover.getInstance(targetInput);
        if (popover !== null) {
          popover.dispose();
        }
      }

      //
      // Search
      //

      if (idx === null) {
        return;
      }

      const searchQuery = targetInput.value;
      if (searchQuery === '') {
        return;
      }

      // An absent max-results attribute (a customized search-input
      // partial) means unlimited, as the jQuery-era data read had it;
      // NaN would silently slice to zero results.
      const maxResults = parseInt(
        targetInput.dataset.offlineSearchMaxResults,
        10,
      );

      const results = idx
        .query((q) => {
          const tokens = lunr.tokenizer(searchQuery.toLowerCase());
          tokens.forEach((token) => {
            const queryString = token.toString();
            q.term(queryString, {
              boost: 100,
            });
            q.term(queryString, {
              wildcard:
                lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING,
              boost: 10,
            });
            q.term(queryString, {
              editDistance: 2,
            });
          });
        })
        .slice(0, Number.isNaN(maxResults) ? undefined : maxResults);

      //
      // Make result html
      //
      // Result values (query, titles, excerpts) are user- or
      // index-controlled: only ever assign them via textContent.
      //

      const html = document.createElement('div');

      const header = document.createElement('div');
      Object.assign(header.style, {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '1em',
      });

      const headerTitle = document.createElement('span');
      headerTitle.textContent = 'Search results';
      headerTitle.style.fontWeight = 'bold';

      const closeButton = document.createElement('span');
      closeButton.classList.add('td-offline-search-results__close-button');

      header.append(headerTitle, closeButton);
      html.append(header);

      const searchResultBody = document.createElement('div');
      Object.assign(searchResultBody.style, {
        maxHeight: `calc(100vh - ${
          targetInput.getBoundingClientRect().top + 180
        }px)`,
        overflowY: 'auto',
      });
      html.append(searchResultBody);

      if (results.length === 0) {
        const noResults = document.createElement('p');
        noResults.textContent = `No results found for query "${searchQuery}"`;
        searchResultBody.append(noResults);
      } else {
        results.forEach((r) => {
          const doc = resultDetails.get(r.ref);
          // First input's base-href, like the jQuery collection read.
          const href =
            searchInputs[0].dataset.offlineSearchBaseHref +
            r.ref.replace(/^\//, '');

          const entry = document.createElement('div');
          entry.classList.add('mt-4');

          const entryRef = document.createElement('small');
          entryRef.classList.add('d-block', 'text-body-secondary');
          entryRef.textContent = r.ref;

          const entryLink = document.createElement('a');
          entryLink.classList.add('d-block');
          entryLink.style.fontSize = '1.2rem';
          entryLink.href = href;
          entryLink.textContent = doc.title;

          const entryExcerpt = document.createElement('p');
          entryExcerpt.textContent = doc.excerpt;

          entry.append(entryRef, entryLink, entryExcerpt);
          searchResultBody.append(entry);
        });
      }

      targetInput.addEventListener(
        'shown.bs.popover',
        () => {
          document
            .querySelectorAll('.td-offline-search-results__close-button')
            .forEach((button) => {
              button.addEventListener('click', () => {
                targetInput.value = '';
                targetInput.dispatchEvent(
                  new Event('change', { bubbles: true }),
                );
              });
            });
        },
        { once: true },
      );

      const popover = new bootstrap.Popover(targetInput, {
        content: html,
        html: true,
        customClass: 'td-offline-search-results',
        placement: 'bottom',
      });
      popover.show();
    };
  });
})();
