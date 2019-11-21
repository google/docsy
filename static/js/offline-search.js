// Adapted from code by Matt Walters https://www.mattwalters.net/posts/hugo-and-lunr/

var idx = null;         // Lunr index
var resultDetails = []; // Will hold the data for the search results (titles and summaries)
var $searchInput;       // The search box element in the navbar

$(window).on('load', function() {

    'use strict';

    $searchInput = $('.td-search-input');

    //
    // Options for popover
    //

    $searchInput.data('html', true);
    $searchInput.data('placement', 'bottom');

    //
    // Register handler
    //

    // Disable keydown event handler on `search.js`.
    $(document).ready(function() {
        $(document).off('keypress', '.td-search-input')
    });

    // Prevent showing `/search` page by enter key.
    $searchInput.closest('form').on('submit', () => {
        return false;
    });

    // Set up for an Ajax call to request the JSON data file that is created by
    // Hugo's build process, with the template we added above
    var request = new XMLHttpRequest();

    request.overrideMimeType("application/json");
    request.open("GET", $searchInput.data('offline-search-index-json-url'), true); // Request the JSON file created during build
    request.onload = function() {
    if (request.status >= 200 && request.status < 400) {
        // Success response received in requesting the search-index file
        var searchDocuments = JSON.parse(request.responseText);

        // Build the index so Lunr can search it.  The `ref` field will hold the URL
        // to the page/post.  title, excerpt, and body will be fields searched.
        idx = lunr(function lunrIndex() {
        this.ref('ref');
        this.field('title');
        this.field('body');

          // Loop through all the items in the JSON file and add them to the index
          // so they can be searched.
        searchDocuments.forEach(function(doc) {
            this.add(doc);
            resultDetails[doc.ref] = {
                'title': doc.title,
                'excerpt': doc.excerpt,
            };
        }, this);
        });
    }
    };

    // Send the request to load the JSON
    request.send();

    // Register handler for the search input field
    registerSearchHandler();
});

function registerSearchHandler() {
    $searchInput.on('change', function(event) {
    var query = event.target.value;
      var results = search(query).slice(0, 10);  // Perform the search

      // Render search results
    renderSearchResults(results, $(event.target));
    });
}

function renderSearchResults(results, $targetSearchInput) {
    $targetSearchInput.popover('dispose');
    if ($targetSearchInput.val() === '') {
        return;
    }

    const $html = $('<div>');

    $html.append(
        $('<div>')
            .css({
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '1em'
            })
            .append(
                $('<span>')
                    .text('Search results')
                    .css({ fontWeight: 'bold' })
            )
            .append(
                $('<i>')
                    .addClass('fas fa-times search-result-close-button')
                    .css({
                        cursor: 'pointer'
                    })
            )
    );

    const $searchResultBody = $('<div>').css({
        maxHeight: `calc(100vh - ${$targetSearchInput.offset().top + 180}px)`,
        overflowY: 'auto'
    });
    $html.append($searchResultBody);

    if (results.length === 0) {
        $searchResultBody.append(
            $('<p>').text(`No results found for query "${$targetSearchInput.val()}"`)
        );
    } else {
        results.forEach(r => {
            const $cardHeader = $('<div>').addClass('card-header');
            const doc = resultDetails[r.ref];

            $cardHeader.append(
                $('<a>')
                    .attr('href', r.ref)
                    .text(doc.title)
            );

            const $cardBody = $('<div>').addClass('card-body');
            $cardBody.append(
                $('<p>')
                    .addClass('card-text text-muted')
                    .text(doc.excerpt)
            );

            const $card = $('<div>').addClass('card');
            $card.append($cardHeader).append($cardBody);

            $searchResultBody.append($card);
        });
    }

    $targetSearchInput.on('shown.bs.popover', () => {
        $('.search-result-close-button').on('click', () => {
            $targetSearchInput.val('');
            $targetSearchInput.trigger('change');
        });
    });

    $targetSearchInput.data('content', $html[0].outerHTML).popover('show');
}

function search(query) {
    return idx.query(q => {
        const tokens = lunr.tokenizer(query);
        tokens.forEach(token => {
            const tokenString = token.toString();
            q.term(tokenString, {
                boost: 100
            });
            q.term(tokenString, {
                wildcard:
                    lunr.Query.wildcard.LEADING | lunr.Query.wildcard.TRAILING,
                boost: 10
            });
            q.term(tokenString, {
                editDistance: 2
            });
        });
    });
}
