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

    // Reveal the active path. A foldable nav (the Docsy default for docs sites)
    // opens purely via checked checkboxes — exactly what a full build bakes — so
    // we set the same attribute and add nothing else, keeping the result
    // structurally identical to a full render. A non-foldable nav has no
    // checkboxes and instead uses the Bootstrap `show` class to open branches.
    const foldable = !!nav.querySelector('input[type="checkbox"]');
    for (const li of nav.querySelectorAll('li.active-path')) {
      const checkbox = li.querySelector(':scope > input[type="checkbox"]');
      if (checkbox) checkbox.setAttribute('checked', '');
      else if (!foldable) li.classList.add('show');
    }

    // In a non-foldable nav, also open the current item's siblings and direct
    // children; a foldable nav leaves these to the checkboxes, matching a full
    // build (which only checks the active path).
    if (currentItem && !foldable) {
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

  // --- Sidebar-root scoping (sidebar_root_for) ----------------------------
  // Self-contained so it's easy to review or remove. The donor ships the full
  // docs-landing tree; on a scoped page we prune it to the subtree rooted at
  // `navRoot` and re-point that root item "up" to its parent, matching a full
  // build's scoped sidebar. Functional parity only (same links, same active
  // item); wrappers and depth numbering may differ.
  function reRootMenu(menu, navRoot) {
    const nav = menu.querySelector('#' + NAV_ID);
    if (!nav) return;
    const rootUrl = new URL(navRoot, window.location.href);
    const rootPath = normalizePath(rootUrl.pathname);

    let rootLink = null;
    for (const link of nav.querySelectorAll('a[href]')) {
      if (normalizePath(new URL(link.href).pathname) === rootPath) {
        rootLink = link;
        break;
      }
    }
    const rootLi = rootLink && rootLink.closest('li');
    if (!rootLi) return; // hint didn't resolve; leave the full tree in place

    // Re-point the scope-root item up to its parent (the "up" affordance).
    rootLink.setAttribute('href', new URL('..', rootUrl).pathname);
    rootLink.classList.add('tree-root');

    // Promote the subtree to be the nav's sole top-level section.
    const topUl = nav.querySelector('ul');
    if (topUl) {
      rootLi.remove();
      topUl.replaceChildren(rootLi);
    }
  }

  // Parse the stored/extracted menu markup into this document and swap it in for
  // the placeholder, then hydrate it.
  function injectMarkup(placeholder, menuMarkup) {
    const template = document.createElement('template');
    template.innerHTML = menuMarkup.trim();
    const menu = template.content.firstElementChild;
    if (!menu) return;
    const navRoot = placeholder.getAttribute('data-nav-root');
    placeholder.replaceWith(menu);
    // Re-root once in-document, so link hrefs resolve to absolute URLs.
    if (navRoot) reRootMenu(menu, navRoot);
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

  // --- Page-invariant chrome (navbar, footer) -----------------------------
  // Lean render keeps the navbar and footer only on home pages. In CSR mode an
  // inner page leaves a placeholder per dropped region (see _partials/navbar.html
  // and _partials/footer.html) naming the home "donor". Here we fetch the donor
  // once, extract each region, and swap it in, so the page matches a full render.
  const CHROME_REGIONS = { navbar: '.td-navbar', footer: '.td-footer' };

  // Re-derive the navbar's active link for the current page. The home donor's
  // navbar carries the home page's active state, so clear it and mark the
  // nav-link whose target is the closest ancestor of the current path (longest
  // prefix), matching a full build's IsMenuCurrent/IsDescendant logic.
  function setNavbarActive(navbar) {
    const here = normalizePath(window.location.pathname);
    let best = null;
    let bestLen = -1;
    for (const link of navbar.querySelectorAll('.navbar-nav .nav-link')) {
      link.classList.remove('active');
      const raw = link.getAttribute('href');
      if (!raw || raw.startsWith('#')) continue; // skip dropdown toggles
      let path;
      try {
        path = normalizePath(new URL(link.href).pathname);
      } catch (e) {
        continue;
      }
      if ((here === path || here.startsWith(path)) && path.length > bestLen) {
        best = link;
        bestLen = path.length;
      }
    }
    if (best) best.classList.add('active');
  }

  // The navbar's version/language selectors carry per-page links that the home
  // donor renders for the home page, so re-derive each for the current page.
  // `donorPath` is the donor's path — the current locale's home — passed down
  // from restoreChrome.

  // Version links are exact: each is a version's base URL plus the page path
  // (when `version_menu_pagelinks` is on), so the donor's link is
  // `base + donorPath`. Strip that path and append this page's to reproduce the
  // full build's `base + thisPagePath`. Links without the page path (pagelinks
  // off) don't end with `donorPath`, so they're left untouched.
  function restoreVersionLinks(navbar, donorPath) {
    const here = normalizePath(window.location.pathname);
    for (const link of navbar.querySelectorAll(
      '.td-version-menu .dropdown-menu a[href]',
    )) {
      const href = link.getAttribute('href');
      if (!href.endsWith(donorPath)) continue;
      const base = href.slice(0, href.length - donorPath.length);
      link.setAttribute('href', base + here);
    }
  }

  // Language links point at the current page's counterpart in each locale; the
  // donor renders the home's, i.e. each locale's home. Swap the current locale's
  // home prefix (`donorPath`) for the target locale's to reproduce the full
  // build's link. Exact when translations share slugs and all exist (the common
  // case); otherwise a best-effort functional restore — see the caveat in
  // projects/docsy/tasks/csr/client-render.md (thoughtry).
  function restoreLangLinks(navbar, donorPath) {
    const here = normalizePath(window.location.pathname);
    if (!here.startsWith(donorPath)) return;
    const rel = here.slice(donorPath.length);
    for (const link of navbar.querySelectorAll(
      '.td-lang-menu .dropdown-menu a[href]',
    )) {
      const langHome = normalizePath(new URL(link.href).pathname);
      link.setAttribute('href', langHome + rel);
    }
  }

  function restoreSelectorLinks(navbar, donorPath) {
    restoreVersionLinks(navbar, donorPath);
    restoreLangLinks(navbar, donorPath);
  }

  // Fetch a donor page (cached across the session) and hand its parsed Document
  // to `callback`. Used to restore page-invariant chrome from the home page.
  function withDonorDoc(url, callback) {
    const cached = readCache('doc:' + url);
    if (cached) {
      callback(new DOMParser().parseFromString(cached, 'text/html'));
      return;
    }
    fetch(url)
      .then((response) =>
        response.ok ? response.text() : Promise.reject(response.status),
      )
      .then((html) => {
        writeCache('doc:' + url, html);
        callback(new DOMParser().parseFromString(html, 'text/html'));
      })
      .catch(() => {
        // Leave the placeholder in place if the donor can't be fetched.
      });
  }

  function restoreChrome() {
    const placeholders = document.querySelectorAll(
      '.td-csr-chrome-placeholder[data-chrome-donor]',
    );
    if (!placeholders.length) return;
    const donor = placeholders[0].getAttribute('data-chrome-donor');
    const donorPath = normalizePath(
      new URL(donor, window.location.href).pathname,
    );
    withDonorDoc(donor, (donorDoc) => {
      for (const placeholder of placeholders) {
        const region = placeholder.getAttribute('data-chrome-region');
        const selector = CHROME_REGIONS[region];
        const source = selector && donorDoc.querySelector(selector);
        if (!source) continue;
        const node = document.importNode(source, true);
        placeholder.replaceWith(node);
        if (region === 'navbar') {
          setNavbarActive(node);
          restoreSelectorLinks(node, donorPath);
        }
      }
    });
  }

  function init() {
    restoreChrome();
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
