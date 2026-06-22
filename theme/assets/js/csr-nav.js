// Client-side hydration of the docs left-nav.
//
// A lean build drops the repeated left-nav from inner pages and leaves a
// placeholder behind (see _partials/sidebar.html). Here we fetch the section's
// "donor" page — the kept docs landing, named by data-nav-donor — extract its
// left-nav, inject it in place of the placeholder, and apply the active-page
// state client-side. The extracted nav is cached in sessionStorage so later
// pages in the same section reuse it without re-fetching.
//
// The same active-state pass also hydrates the cached inline nav that the donor
// (and bigger sites) render once and share across pages: that menu ships hidden,
// with no per-page active state baked in. Either way the resulting DOM matches a
// full, non-lean render, so a lean build stays functionally equivalent to a full
// one.

(function () {
  'use strict';

  const MENU_ID = 'td-sidebar-menu';
  const NAV_ID = 'td-section-nav';
  const CACHE_PREFIX = 'td-csr-nav:';

  const normalizePath = (path) => (path.endsWith('/') ? path : path + '/');

  // Apply the active-page classes to a freshly injected or shared nav. The
  // current page is matched by link href rather than a server-baked id, so one
  // shared fragment can serve every page under the same sidebar root.
  function applyActiveState(menu) {
    const nav = menu.querySelector('#' + NAV_ID);
    if (!nav) return;

    const here = normalizePath(window.location.pathname);
    let activeLink = null;
    for (const link of nav.querySelectorAll('a[href]')) {
      if (normalizePath(new URL(link.href).pathname) === here) {
        activeLink = link;
        break;
      }
    }
    if (!activeLink) return;

    activeLink.classList.add('active');
    const label = activeLink.querySelector('span');
    if (label) label.classList.add('td-sidebar-nav-active-item');

    const currentItem = activeLink.closest('li');

    // Mark the current item and all of its ancestors as the active path.
    for (
      let li = currentItem;
      li;
      li = li.parentElement && li.parentElement.closest('li')
    ) {
      li.classList.add('active-path');
    }

    // Expand every item on the active path (and tick its foldable checkbox).
    for (const li of nav.querySelectorAll('li.active-path')) {
      li.classList.add('show');
      const checkbox = li.querySelector(':scope > input');
      if (checkbox) checkbox.checked = true;
    }

    if (currentItem) {
      // Expand the current item's siblings and its direct children.
      for (const sibling of currentItem.parentElement.children) {
        if (sibling !== currentItem && sibling.tagName === 'LI') {
          sibling.classList.add('show');
        }
      }
      const childList = currentItem.querySelector(':scope > ul');
      if (childList) {
        for (const child of childList.children) {
          if (child.tagName === 'LI') child.classList.add('show');
        }
      }
    }
  }

  function hydrate(menu) {
    applyActiveState(menu);
    menu.classList.remove('d-none'); // reveal once the active state is in place
  }

  function readCache(key) {
    try {
      return window.sessionStorage.getItem(CACHE_PREFIX + key);
    } catch (e) {
      return null;
    }
  }

  function writeCache(key, value) {
    try {
      window.sessionStorage.setItem(CACHE_PREFIX + key, value);
    } catch (e) {
      // sessionStorage may be unavailable or full; injection still works.
    }
  }

  // Parse the stored/extracted menu markup into this document and swap it in for
  // the placeholder, then hydrate it.
  function injectMarkup(placeholder, menuMarkup) {
    const template = document.createElement('template');
    template.innerHTML = menuMarkup.trim();
    const menu = template.content.firstElementChild;
    if (!menu) return;
    placeholder.replaceWith(menu);
    hydrate(menu);
  }

  function injectFromDonor(placeholder) {
    const donor = placeholder.getAttribute('data-nav-donor');
    if (!donor) return;

    const cached = readCache(donor);
    if (cached) {
      injectMarkup(placeholder, cached);
      return;
    }

    fetch(donor)
      .then((response) =>
        response.ok ? response.text() : Promise.reject(response.status),
      )
      .then((html) => {
        // The donor is a full page; pull just the left-nav menu out of it.
        const donorDoc = new DOMParser().parseFromString(html, 'text/html');
        const menu = donorDoc.getElementById(MENU_ID);
        if (!menu) return;
        const markup = menu.outerHTML;
        writeCache(donor, markup);
        injectMarkup(placeholder, markup);
      })
      .catch(() => {
        // Leave the placeholder in place if the donor can't be fetched.
      });
  }

  function init() {
    const placeholder = document.querySelector(
      '.td-sidebar-csr-placeholder[data-nav-donor]',
    );
    if (placeholder) {
      injectFromDonor(placeholder);
      return;
    }
    // No placeholder: hydrate a shared/cached inline nav if one is present.
    const menu = document.getElementById(MENU_ID);
    if (menu && menu.classList.contains('d-none')) {
      hydrate(menu);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
