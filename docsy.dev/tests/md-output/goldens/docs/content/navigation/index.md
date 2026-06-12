# Navigation and Menus

> Customize site navigation for your Docsy site.

---

LLMS index: [llms.txt](/llms.txt)

---

Docsy provides multiple built-in navigation features for your sites, including
site menus, side navs, and page table of contents (TOC). This page shows you how
they work and how to configure and customize them to meet your needs.

## Site navbar

A site navbar appears at the top of every site page. It is built from Hugo
[menus][] and Docsy-generated elements. Hugo [menus][] consist of an array of
menu entries, accessible via the `.Site.Menus` site variable.

The `main` menu is built from:

- [Menu][] entries defined over the `main` menu.
- Docsy-generated menus (depending on your site configuration):
  - [Doc-version menu](#version-menu)
  - [Language menu](#language-menu)
  - [Light/dark theme menu](#lightdark-theme-menu)
- Docsy-generated [search box](#search-box)

### Adding `main` menu entries

Define [menu][] entries in your site's configuration file or via page front
matter. For example, here's how you can add a Documentation section to the
top-level navbar:

 
   <ul class="nav nav-tabs" id="tabs-0" role="tablist">
  <li class="nav-item">
      <button class="nav-link disabled"
          id="tabs-00-00-tab" data-bs-toggle="tab" data-bs-target="#tabs-00-00" role="tab"
          aria-controls="tabs-00-00" aria-selected="false">
        Front matter:
      </button>
    </li><li class="nav-item">
      <button class="nav-link active"
          id="tabs-00-01-tab" data-bs-toggle="tab" data-bs-target="#tabs-00-01" role="tab"
          data-td-tp-persist="toml" aria-controls="tabs-00-01" aria-selected="true">
        toml
      </button>
    </li><li class="nav-item">
      <button class="nav-link"
          id="tabs-00-02-tab" data-bs-toggle="tab" data-bs-target="#tabs-00-02" role="tab"
          data-td-tp-persist="yaml" aria-controls="tabs-00-02" aria-selected="false">
        yaml
      </button>
    </li><li class="nav-item">
      <button class="nav-link"
          id="tabs-00-03-tab" data-bs-toggle="tab" data-bs-target="#tabs-00-03" role="tab"
          data-td-tp-persist="json" aria-controls="tabs-00-03" aria-selected="false">
        json
      </button>
    </li>
</ul>

<div class="tab-content" id="tabs-0-content">
    <div class="tab-body tab-pane fade"
        id="tabs-00-00" role="tabpanel" aria-labelled-by="tabs-00-00-tab" tabindex="0">
        
    </div>
    <div class="tab-body tab-pane fade show active"
        id="tabs-00-01" role="tabpanel" aria-labelled-by="tabs-00-01-tab" tabindex="0">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-toml" data-lang="toml"><span class="line"><span class="cl"><span class="nx">title</span> <span class="p">=</span> <span class="s2">&#34;Welcome to Docsy&#34;</span>
</span></span><span class="line"><span class="cl"><span class="nx">linkTitle</span> <span class="p">=</span> <span class="s2">&#34;Documentation&#34;</span>
</span></span><span class="line"><span class="cl">
</span></span><span class="line"><span class="cl"><span class="p">[</span><span class="nx">menu</span><span class="p">.</span><span class="nx">main</span><span class="p">]</span>
</span></span><span class="line"><span class="cl"><span class="nx">weight</span> <span class="p">=</span> <span class="mi">20</span>
</span></span><span class="line"><span class="cl"><span class="nx">pre</span> <span class="p">=</span> <span class="s2">&#34;&lt;i class=&#39;fa-solid fa-book&#39;&gt;&lt;/i&gt;&#34;</span>
</span></span></code></pre></div>
    </div>
    <div class="tab-body tab-pane fade"
        id="tabs-00-02" role="tabpanel" aria-labelled-by="tabs-00-02-tab" tabindex="0">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-yaml" data-lang="yaml"><span class="line"><span class="cl"><span class="nt">title</span><span class="p">:</span><span class="w"> </span><span class="l">Documentation</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="nt">linkTitle</span><span class="p">:</span><span class="w"> </span><span class="l">Docs</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="nt">menu</span><span class="p">:</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">  </span><span class="nt">main</span><span class="p">:</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">    </span><span class="nt">weight</span><span class="p">:</span><span class="w"> </span><span class="m">20</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">    </span><span class="nt">pre</span><span class="p">:</span><span class="w"> </span><span class="l">&lt;i class=&#39;fa-solid fa-book&#39;&gt;&lt;/i&gt;</span><span class="w">
</span></span></span></code></pre></div>
    </div>
    <div class="tab-body tab-pane fade"
        id="tabs-00-03" role="tabpanel" aria-labelled-by="tabs-00-03-tab" tabindex="0">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-json" data-lang="json"><span class="line"><span class="cl"><span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;title&#34;</span><span class="p">:</span> <span class="s2">&#34;Documentation&#34;</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;linkTitle&#34;</span><span class="p">:</span> <span class="s2">&#34;Docs&#34;</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;menu&#34;</span><span class="p">:</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="nt">&#34;main&#34;</span><span class="p">:</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">      <span class="nt">&#34;weight&#34;</span><span class="p">:</span> <span class="mi">20</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">      <span class="nt">&#34;pre&#34;</span><span class="p">:</span> <span class="s2">&#34;&lt;i class=&#39;fa-solid fa-book&#39;&gt;&lt;/i&gt;&#34;</span>
</span></span><span class="line"><span class="cl">    <span class="p">}</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre></div>
    </div>
</div>


Navbar entries are ordered from left to right by `weight`. So, for example, a
section index or page with `weight: 30` would appear after the Documentation
section in the menu, while one with `weight: 10` would appear before it.

If you want to add a link to an external site to this menu, add it to your site
configuration:[^add-external-link-via]



   <ul class="nav nav-tabs" id="tabs-1" role="tablist">
  <li class="nav-item">
      <button class="nav-link disabled"
          id="tabs-01-00-tab" data-bs-toggle="tab" data-bs-target="#tabs-01-00" role="tab"
          aria-controls="tabs-01-00" aria-selected="false">
        Configuration file:
      </button>
    </li><li class="nav-item">
      <button class="nav-link active"
          id="tabs-01-01-tab" data-bs-toggle="tab" data-bs-target="#tabs-01-01" role="tab"
          data-td-tp-persist="toml" aria-controls="tabs-01-01" aria-selected="true">
        hugo.toml
      </button>
    </li><li class="nav-item">
      <button class="nav-link"
          id="tabs-01-02-tab" data-bs-toggle="tab" data-bs-target="#tabs-01-02" role="tab"
          data-td-tp-persist="yaml" aria-controls="tabs-01-02" aria-selected="false">
        hugo.yaml
      </button>
    </li><li class="nav-item">
      <button class="nav-link"
          id="tabs-01-03-tab" data-bs-toggle="tab" data-bs-target="#tabs-01-03" role="tab"
          data-td-tp-persist="json" aria-controls="tabs-01-03" aria-selected="false">
        hugo.json
      </button>
    </li>
</ul>

<div class="tab-content" id="tabs-1-content">
    <div class="tab-body tab-pane fade"
        id="tabs-01-00" role="tabpanel" aria-labelled-by="tabs-01-00-tab" tabindex="1">
        
    </div>
    <div class="tab-body tab-pane fade show active"
        id="tabs-01-01" role="tabpanel" aria-labelled-by="tabs-01-01-tab" tabindex="1">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-toml" data-lang="toml"><span class="line"><span class="cl"><span class="p">[[</span><span class="nx">menu</span><span class="p">.</span><span class="nx">main</span><span class="p">]]</span>
</span></span><span class="line"><span class="cl">  <span class="nx">name</span> <span class="p">=</span> <span class="s2">&#34;Example Site&#34;</span>
</span></span><span class="line"><span class="cl">  <span class="nx">weight</span> <span class="p">=</span> <span class="mi">40</span>
</span></span><span class="line"><span class="cl">  <span class="nx">url</span> <span class="p">=</span> <span class="s2">&#34;https://example.docsy.dev&#34;</span>
</span></span><span class="line"><span class="cl">  <span class="nx">post</span> <span class="p">=</span> <span class="s2">&#34;&lt;sup&gt;&lt;i class=&#39;fa-solid fa-up-right-from-square fa-xs&#39; aria-hidden=&#39;true&#39;&gt;&lt;/i&gt;&lt;/sup&gt;&#34;</span>
</span></span></code></pre></div>
    </div>
    <div class="tab-body tab-pane fade"
        id="tabs-01-02" role="tabpanel" aria-labelled-by="tabs-01-02-tab" tabindex="1">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-yaml" data-lang="yaml"><span class="line"><span class="cl"><span class="nt">menu</span><span class="p">:</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">  </span><span class="nt">main</span><span class="p">:</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">    </span>- <span class="nt">name</span><span class="p">:</span><span class="w"> </span><span class="l">Example Site</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">      </span><span class="nt">weight</span><span class="p">:</span><span class="w"> </span><span class="m">40</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">      </span><span class="nt">url</span><span class="p">:</span><span class="w"> </span><span class="l">https://example.docsy.dev</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">      </span><span class="nt">post</span><span class="p">:</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">        </span><span class="l">&lt;sup&gt;&lt;i class=&#34;ps-1 fa-solid fa-up-right-from-square fa-xs&#34;</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">        </span><span class="l">aria-hidden=&#34;true&#34;&gt;&lt;/i&gt;&lt;/sup&gt;</span><span class="w">
</span></span></span></code></pre></div>
    </div>
    <div class="tab-body tab-pane fade"
        id="tabs-01-03" role="tabpanel" aria-labelled-by="tabs-01-03-tab" tabindex="1">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-json" data-lang="json"><span class="line"><span class="cl"><span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;menu&#34;</span><span class="p">:</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="nt">&#34;main&#34;</span><span class="p">:</span> <span class="p">[</span>
</span></span><span class="line"><span class="cl">      <span class="p">{</span>
</span></span><span class="line"><span class="cl">        <span class="nt">&#34;name&#34;</span><span class="p">:</span> <span class="s2">&#34;Example Site&#34;</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">        <span class="nt">&#34;weight&#34;</span><span class="p">:</span> <span class="mi">40</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">        <span class="nt">&#34;url&#34;</span><span class="p">:</span> <span class="s2">&#34;https://example.docsy.dev&#34;</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">        <span class="nt">&#34;post&#34;</span><span class="p">:</span> <span class="s2">&#34;&lt;sup&gt;&lt;i class=&#39;fa-solid fa-up-right-from-square fa-xs&#39; aria-hidden=&#39;true&#39;&gt;&lt;/i&gt;&lt;/sup&gt;&#34;</span>
</span></span><span class="line"><span class="cl">      <span class="p">}</span>
</span></span><span class="line"><span class="cl">    <span class="p">]</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre></div>
    </div>
</div>


### Version menu

Docsy adds a version selector menu to the top-level navbar if you have doc
versions configured as explained in [Doc versioning][].

The version menu is visible in the navbar for all screen sizes. Version entries
can include text headings, separators, per-entry page-link behavior, and
kind-specific styling. For configuration details, see [Doc versioning][].

To style the version menu wrapper, apply your custom CSS to
`.td-navbar__version-menu`. To style the dropdown itself, use
`.td-version-menu`. Entries with a configured `kind` also get a
`dropdown-item-<kind>` class. These kind-specific class names and styles are
[experimental][].

Docsy includes built-in styling for these kinds:

- `latest`: adds a **(latest)** label and semibold text.
- `next`: adds a **(next)** label.
- `home`: adds a home icon.

Other `kind` values still add a matching `dropdown-item-<kind>` class, but do
not have built-in Docsy styling.

[Doc versioning]: /docs/content/versioning/
[experimental]: /project/about/changelog/#experimental

### Language menu

Docsy adds a language selector menu to the top-level navbar if you have a
[multilingual][] site configured as explained in [Multi-language support][].
Selecting a language takes the user to the translated version of the current
page, or the home page for the given language.

The menu is visible in the navbar for all screen sizes. By default, the current
site language name is shown. On narrow displays, this is replaced by the
language code.

> [!INFO] Legacy UX
>
> Prior to Docsy 0.13.0, the language selector menu could also be visible from
> the left sidebar, and its visibility in the navbar depended on the screen
> size. For details, including ways to restore the legacy behavior, see
> [Language menu visibility][lmv].
>
> [lmv]: /blog/2025/0.13.0/#language-menu-visibility

To style the language menu, apply your custom CSS to `.td-navbar__lang-menu`.

[multilingual]: https://gohugo.io/content-management/multilingual/

### Light/dark theme menu

Docsy adds a light/dark theme selector menu to the top-level navbar if you have
it configured as explained in [Light/dark mode menu][].

To style the light/dark mode menu, apply your custom CSS to
`.td-navbar__light-dark-menu`.

[Light/dark mode menu]: /docs/content/lookandfeel/#lightdark-mode-menu

### Search box

To configure site search, see [Search](/docs/content/search/). When configured,
the search box appears as the last item in the top-level navbar, as well as the
sidebar on mobile.

To style the search menu, apply your custom CSS to `.td-navbar__search`.

### Adding icons to the navbar

As described in the
[Hugo docs](https://gohugo.io/content-management/menus/#add-non-content-entries-to-a-menu),
you can add icons to the navbar by using the pre and/or post parameter for main
menu items defined in your site's `hugo.toml`/`hugo.yaml`/`hugo.json` or via
page front matter. For example, the following configuration adds the GitHub icon
to the GitHub menu item, and a **New!** alert to indicate that this is a new
addition to the menu.



   <ul class="nav nav-tabs" id="tabs-2" role="tablist">
  <li class="nav-item">
      <button class="nav-link disabled"
          id="tabs-02-00-tab" data-bs-toggle="tab" data-bs-target="#tabs-02-00" role="tab"
          aria-controls="tabs-02-00" aria-selected="false">
        Configuration file:
      </button>
    </li><li class="nav-item">
      <button class="nav-link active"
          id="tabs-02-01-tab" data-bs-toggle="tab" data-bs-target="#tabs-02-01" role="tab"
          data-td-tp-persist="toml" aria-controls="tabs-02-01" aria-selected="true">
        hugo.toml
      </button>
    </li><li class="nav-item">
      <button class="nav-link"
          id="tabs-02-02-tab" data-bs-toggle="tab" data-bs-target="#tabs-02-02" role="tab"
          data-td-tp-persist="yaml" aria-controls="tabs-02-02" aria-selected="false">
        hugo.yaml
      </button>
    </li><li class="nav-item">
      <button class="nav-link"
          id="tabs-02-03-tab" data-bs-toggle="tab" data-bs-target="#tabs-02-03" role="tab"
          data-td-tp-persist="json" aria-controls="tabs-02-03" aria-selected="false">
        hugo.json
      </button>
    </li>
</ul>

<div class="tab-content" id="tabs-2-content">
    <div class="tab-body tab-pane fade"
        id="tabs-02-00" role="tabpanel" aria-labelled-by="tabs-02-00-tab" tabindex="2">
        
    </div>
    <div class="tab-body tab-pane fade show active"
        id="tabs-02-01" role="tabpanel" aria-labelled-by="tabs-02-01-tab" tabindex="2">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-toml" data-lang="toml"><span class="line"><span class="cl"><span class="p">[[</span><span class="nx">menu</span><span class="p">.</span><span class="nx">main</span><span class="p">]]</span>
</span></span><span class="line"><span class="cl">  <span class="nx">name</span> <span class="p">=</span> <span class="s2">&#34;GitHub&#34;</span>
</span></span><span class="line"><span class="cl">  <span class="nx">weight</span> <span class="p">=</span> <span class="mi">50</span>
</span></span><span class="line"><span class="cl">  <span class="nx">url</span> <span class="p">=</span> <span class="s2">&#34;https://github.com/google/docsy/&#34;</span>
</span></span><span class="line"><span class="cl">  <span class="nx">pre</span> <span class="p">=</span> <span class="s2">&#34;&lt;i class=&#39;fa-brands fa-github&#39;&gt;&lt;/i&gt;&#34;</span>
</span></span><span class="line"><span class="cl">  <span class="nx">post</span> <span class="p">=</span> <span class="s2">&#34;&lt;span class=&#39;alert&#39;&gt;New!&lt;/span&gt;&#34;</span>
</span></span></code></pre></div>
    </div>
    <div class="tab-body tab-pane fade"
        id="tabs-02-02" role="tabpanel" aria-labelled-by="tabs-02-02-tab" tabindex="2">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-yaml" data-lang="yaml"><span class="line"><span class="cl"><span class="nt">menu</span><span class="p">:</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">  </span><span class="nt">main</span><span class="p">:</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">    </span>- <span class="nt">name</span><span class="p">:</span><span class="w"> </span><span class="l">GitHub</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">      </span><span class="nt">weight</span><span class="p">:</span><span class="w"> </span><span class="m">50</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">      </span><span class="nt">url</span><span class="p">:</span><span class="w"> </span><span class="s1">&#39;https://github.com/google/docsy/&#39;</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">      </span><span class="nt">pre</span><span class="p">:</span><span class="w"> </span><span class="l">&lt;i class=&#39;fa-brands fa-github&#39;&gt;&lt;/i&gt;</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">      </span><span class="nt">post</span><span class="p">:</span><span class="w"> </span><span class="l">&lt;span class=&#39;alert&#39;&gt;New!&lt;/span&gt;</span><span class="w">
</span></span></span></code></pre></div>
    </div>
    <div class="tab-body tab-pane fade"
        id="tabs-02-03" role="tabpanel" aria-labelled-by="tabs-02-03-tab" tabindex="2">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-json" data-lang="json"><span class="line"><span class="cl"><span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;menu&#34;</span><span class="p">:</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="nt">&#34;main&#34;</span><span class="p">:</span> <span class="p">[</span>
</span></span><span class="line"><span class="cl">      <span class="p">{</span>
</span></span><span class="line"><span class="cl">        <span class="nt">&#34;name&#34;</span><span class="p">:</span> <span class="s2">&#34;GitHub&#34;</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">        <span class="nt">&#34;weight&#34;</span><span class="p">:</span> <span class="mi">50</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">        <span class="nt">&#34;url&#34;</span><span class="p">:</span> <span class="s2">&#34;https://github.com/google/docsy/&#34;</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">        <span class="nt">&#34;pre&#34;</span><span class="p">:</span> <span class="s2">&#34;&lt;i class=&#39;fa-brands fa-github&#39;&gt;&lt;/i&gt;&#34;</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">        <span class="nt">&#34;post&#34;</span><span class="p">:</span> <span class="s2">&#34;&lt;span class=&#39;alert&#39;&gt;New!&lt;/span&gt;&#34;</span>
</span></span><span class="line"><span class="cl">      <span class="p">}</span>
</span></span><span class="line"><span class="cl">    <span class="p">]</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre></div>
    </div>
</div>


You can find a complete list of icons to use in the
[FontAwesome documentation](https://fontawesome.com/icons?d=gallery&p=2). Docsy
includes the free FontAwesome icons by default.

## Side navigation {#side-nav}

A side nav[^formerly_section_menu] for section navigation is shown in the left
panel of the `docs` and `blog` pages. It is automatically built from the
`content` tree. Like the navbar, it is ordered by page or section index `weight`
(or by page creation `date` if `weight` is not set), with the page or index's
`Title`, or `linkTitle` if different, as its link title in the menu. If a
section subfolder has pages other than `_index.md` or `_index.html`, those pages
will appear as a submenu, again ordered by `weight`. For example, here's the
metadata for this page showing its `weight` and `title`:

[^formerly_section_menu]: Formerly named the "section menu".

 
   <ul class="nav nav-tabs" id="tabs-3" role="tablist">
  <li class="nav-item">
      <button class="nav-link disabled"
          id="tabs-03-00-tab" data-bs-toggle="tab" data-bs-target="#tabs-03-00" role="tab"
          aria-controls="tabs-03-00" aria-selected="false">
        Front matter:
      </button>
    </li><li class="nav-item">
      <button class="nav-link active"
          id="tabs-03-01-tab" data-bs-toggle="tab" data-bs-target="#tabs-03-01" role="tab"
          data-td-tp-persist="toml" aria-controls="tabs-03-01" aria-selected="true">
        toml
      </button>
    </li><li class="nav-item">
      <button class="nav-link"
          id="tabs-03-02-tab" data-bs-toggle="tab" data-bs-target="#tabs-03-02" role="tab"
          data-td-tp-persist="yaml" aria-controls="tabs-03-02" aria-selected="false">
        yaml
      </button>
    </li><li class="nav-item">
      <button class="nav-link"
          id="tabs-03-03-tab" data-bs-toggle="tab" data-bs-target="#tabs-03-03" role="tab"
          data-td-tp-persist="json" aria-controls="tabs-03-03" aria-selected="false">
        json
      </button>
    </li>
</ul>

<div class="tab-content" id="tabs-3-content">
    <div class="tab-body tab-pane fade"
        id="tabs-03-00" role="tabpanel" aria-labelled-by="tabs-03-00-tab" tabindex="3">
        
    </div>
    <div class="tab-body tab-pane fade show active"
        id="tabs-03-01" role="tabpanel" aria-labelled-by="tabs-03-01-tab" tabindex="3">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-toml" data-lang="toml"><span class="line"><span class="cl"><span class="nx">title</span> <span class="p">=</span> <span class="s2">&#34;Navigation and Search&#34;</span>
</span></span><span class="line"><span class="cl"><span class="nx">linkTitle</span> <span class="p">=</span> <span class="s2">&#34;Navigation and Search&#34;</span>
</span></span><span class="line"><span class="cl"><span class="nx">date</span> <span class="p">=</span> <span class="mi">2017-01-05</span><span class="nx">T00</span><span class="err">:</span><span class="mi">00</span><span class="err">:</span><span class="mf">00.000</span><span class="nx">Z</span>
</span></span><span class="line"><span class="cl"><span class="nx">weight</span> <span class="p">=</span> <span class="mi">3</span>
</span></span><span class="line"><span class="cl"><span class="nx">description</span> <span class="p">=</span> <span class="s1">&#39;&#39;&#39;
</span></span></span><span class="line"><span class="cl"><span class="s1">Customize site navigation and search for your Docsy site.
</span></span></span><span class="line"><span class="cl"><span class="s1">&#39;&#39;&#39;</span>
</span></span></code></pre></div>
    </div>
    <div class="tab-body tab-pane fade"
        id="tabs-03-02" role="tabpanel" aria-labelled-by="tabs-03-02-tab" tabindex="3">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-yaml" data-lang="yaml"><span class="line"><span class="cl"><span class="nt">title</span><span class="p">:</span><span class="w"> </span><span class="s1">&#39;Navigation and Search&#39;</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="nt">linkTitle</span><span class="p">:</span><span class="w"> </span><span class="s1">&#39;Navigation and Search&#39;</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="nt">date</span><span class="p">:</span><span class="w"> </span><span class="ld">2017-01-05</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="nt">weight</span><span class="p">:</span><span class="w"> </span><span class="m">3</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="nt">description</span><span class="p">:</span><span class="w"> </span><span class="p">&gt;</span><span class="sd">
</span></span></span><span class="line"><span class="cl"><span class="sd">  Customize site navigation and search for your Docsy site.</span><span class="w">
</span></span></span></code></pre></div>
    </div>
    <div class="tab-body tab-pane fade"
        id="tabs-03-03" role="tabpanel" aria-labelled-by="tabs-03-03-tab" tabindex="3">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-json" data-lang="json"><span class="line"><span class="cl"><span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;title&#34;</span><span class="p">:</span> <span class="s2">&#34;Navigation and Search&#34;</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;linkTitle&#34;</span><span class="p">:</span> <span class="s2">&#34;Navigation and Search&#34;</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;date&#34;</span><span class="p">:</span> <span class="s2">&#34;2017-01-05T00:00:00.000Z&#34;</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;weight&#34;</span><span class="p">:</span> <span class="mi">3</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;description&#34;</span><span class="p">:</span> <span class="s2">&#34;Customize site navigation and search for your Docsy site.\n&#34;</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre></div>
    </div>
</div>


To hide a page or section from the left navigation menu, set `toc_hide: true` in
the front matter.

To hide a page from the section summary on a [docs section landing
page](http://localhost/docs/content/#docs-section-landing-pages), set
`hide_summary: true` in the front matter. If you want to hide a page from both
the TOC menu and the section summary list, you need to set both `toc_hide` and
`hide_summary` to `true` in the front matter.

 
   <ul class="nav nav-tabs" id="tabs-5" role="tablist">
  <li class="nav-item">
      <button class="nav-link disabled"
          id="tabs-05-00-tab" data-bs-toggle="tab" data-bs-target="#tabs-05-00" role="tab"
          aria-controls="tabs-05-00" aria-selected="false">
        Front matter:
      </button>
    </li><li class="nav-item">
      <button class="nav-link active"
          id="tabs-05-01-tab" data-bs-toggle="tab" data-bs-target="#tabs-05-01" role="tab"
          data-td-tp-persist="toml" aria-controls="tabs-05-01" aria-selected="true">
        toml
      </button>
    </li><li class="nav-item">
      <button class="nav-link"
          id="tabs-05-02-tab" data-bs-toggle="tab" data-bs-target="#tabs-05-02" role="tab"
          data-td-tp-persist="yaml" aria-controls="tabs-05-02" aria-selected="false">
        yaml
      </button>
    </li><li class="nav-item">
      <button class="nav-link"
          id="tabs-05-03-tab" data-bs-toggle="tab" data-bs-target="#tabs-05-03" role="tab"
          data-td-tp-persist="json" aria-controls="tabs-05-03" aria-selected="false">
        json
      </button>
    </li>
</ul>

<div class="tab-content" id="tabs-5-content">
    <div class="tab-body tab-pane fade"
        id="tabs-05-00" role="tabpanel" aria-labelled-by="tabs-05-00-tab" tabindex="5">
        
    </div>
    <div class="tab-body tab-pane fade show active"
        id="tabs-05-01" role="tabpanel" aria-labelled-by="tabs-05-01-tab" tabindex="5">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-toml" data-lang="toml"><span class="line"><span class="cl"><span class="nx">title</span> <span class="p">=</span> <span class="s2">&#34;My Hidden Page&#34;</span>
</span></span><span class="line"><span class="cl"><span class="nx">weight</span> <span class="p">=</span> <span class="mi">99</span>
</span></span><span class="line"><span class="cl"><span class="nx">toc_hide</span> <span class="p">=</span> <span class="kc">true</span>
</span></span><span class="line"><span class="cl"><span class="nx">hide_summary</span> <span class="p">=</span> <span class="kc">true</span>
</span></span><span class="line"><span class="cl"><span class="nx">description</span> <span class="p">=</span> <span class="s1">&#39;&#39;&#39;
</span></span></span><span class="line"><span class="cl"><span class="s1">Page hidden from both the TOC menu and the section summary list.
</span></span></span><span class="line"><span class="cl"><span class="s1">&#39;&#39;&#39;</span>
</span></span></code></pre></div>
    </div>
    <div class="tab-body tab-pane fade"
        id="tabs-05-02" role="tabpanel" aria-labelled-by="tabs-05-02-tab" tabindex="5">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-yaml" data-lang="yaml"><span class="line"><span class="cl"><span class="nt">title</span><span class="p">:</span><span class="w"> </span><span class="s1">&#39;My Hidden Page&#39;</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="nt">weight</span><span class="p">:</span><span class="w"> </span><span class="m">99</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="nt">toc_hide</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="nt">hide_summary</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="nt">description</span><span class="p">:</span><span class="w"> </span><span class="p">&gt;</span><span class="sd">
</span></span></span><span class="line"><span class="cl"><span class="sd">  Page hidden from both the TOC menu and the section summary list.</span><span class="w">
</span></span></span></code></pre></div>
    </div>
    <div class="tab-body tab-pane fade"
        id="tabs-05-03" role="tabpanel" aria-labelled-by="tabs-05-03-tab" tabindex="5">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-json" data-lang="json"><span class="line"><span class="cl"><span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;title&#34;</span><span class="p">:</span> <span class="s2">&#34;My Hidden Page&#34;</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;weight&#34;</span><span class="p">:</span> <span class="mi">99</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;toc_hide&#34;</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;hide_summary&#34;</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;description&#34;</span><span class="p">:</span> <span class="s2">&#34;Page hidden from both the TOC menu and the section summary list.\n&#34;</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre></div>
    </div>
</div>


### Side-nav options

By default, the side nav shows the current section fully expanded all the way
down. This may make the left nav too long and difficult to scan for bigger
sites. Try setting site parameter `ui.sidebar_menu_compact = true` in
`hugo.toml`.

With the compact menu (`.ui.sidebar_menu_compact = true`), only the current
page's ancestors, siblings and direct descendants are shown. You can use the
optional parameter `.ui.ul_show` to set a desired menu depth to always be
visible. For example, with `.ui.ul_show = 1` the first menu level is always
displayed.

The number of sidebar entries shown per section can be configured using the
`.ui.sidebar_menu_truncate` parameter (default: 100).

As well as the completely expanded and compact menu options, you can also create
a foldable menu by setting the site parameter `ui.sidebar_menu_foldable = true`
in `hugo.toml`. The foldable menu lets users expand and collapse menu sections
by toggling arrow icons beside the section parents in the menu.

On large sites (default: > 2000 pages) the side nav is not generated for each
page, but cached for the whole section. The HTML classes for marking the active
menu item (and menu path) are then set using JS. You can adjust the limit for
activating the cached side nav with the optional parameter
`.ui.sidebar_cache_limit`.

The tabbed pane below lists the menu section options you can define in your
project [configuration file][].



   <ul class="nav nav-tabs" id="tabs-6" role="tablist">
  <li class="nav-item">
      <button class="nav-link disabled"
          id="tabs-06-00-tab" data-bs-toggle="tab" data-bs-target="#tabs-06-00" role="tab"
          aria-controls="tabs-06-00" aria-selected="false">
        Configuration file:
      </button>
    </li><li class="nav-item">
      <button class="nav-link active"
          id="tabs-06-01-tab" data-bs-toggle="tab" data-bs-target="#tabs-06-01" role="tab"
          data-td-tp-persist="toml" aria-controls="tabs-06-01" aria-selected="true">
        hugo.toml
      </button>
    </li><li class="nav-item">
      <button class="nav-link"
          id="tabs-06-02-tab" data-bs-toggle="tab" data-bs-target="#tabs-06-02" role="tab"
          data-td-tp-persist="yaml" aria-controls="tabs-06-02" aria-selected="false">
        hugo.yaml
      </button>
    </li><li class="nav-item">
      <button class="nav-link"
          id="tabs-06-03-tab" data-bs-toggle="tab" data-bs-target="#tabs-06-03" role="tab"
          data-td-tp-persist="json" aria-controls="tabs-06-03" aria-selected="false">
        hugo.json
      </button>
    </li>
</ul>

<div class="tab-content" id="tabs-6-content">
    <div class="tab-body tab-pane fade"
        id="tabs-06-00" role="tabpanel" aria-labelled-by="tabs-06-00-tab" tabindex="6">
        
    </div>
    <div class="tab-body tab-pane fade show active"
        id="tabs-06-01" role="tabpanel" aria-labelled-by="tabs-06-01-tab" tabindex="6">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-toml" data-lang="toml"><span class="line"><span class="cl"><span class="p">[</span><span class="nx">params</span><span class="p">.</span><span class="nx">ui</span><span class="p">]</span>
</span></span><span class="line"><span class="cl"><span class="nx">sidebar_menu_compact</span> <span class="p">=</span> <span class="kc">true</span>
</span></span><span class="line"><span class="cl"><span class="nx">ul_show</span> <span class="p">=</span> <span class="mi">1</span>
</span></span><span class="line"><span class="cl"><span class="nx">sidebar_menu_foldable</span> <span class="p">=</span> <span class="kc">true</span>
</span></span><span class="line"><span class="cl"><span class="nx">sidebar_cache_limit</span> <span class="p">=</span> <span class="mi">1000</span>
</span></span></code></pre></div>
    </div>
    <div class="tab-body tab-pane fade"
        id="tabs-06-02" role="tabpanel" aria-labelled-by="tabs-06-02-tab" tabindex="6">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-yaml" data-lang="yaml"><span class="line"><span class="cl"><span class="nt">params</span><span class="p">:</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">  </span><span class="nt">ui</span><span class="p">:</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">    </span><span class="nt">sidebar_menu_compact</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">    </span><span class="nt">ul_show</span><span class="p">:</span><span class="w"> </span><span class="m">1</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">    </span><span class="nt">sidebar_menu_foldable</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">    </span><span class="nt">sidebar_cache_limit</span><span class="p">:</span><span class="w"> </span><span class="m">1000</span><span class="w">
</span></span></span></code></pre></div>
    </div>
    <div class="tab-body tab-pane fade"
        id="tabs-06-03" role="tabpanel" aria-labelled-by="tabs-06-03-tab" tabindex="6">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-json" data-lang="json"><span class="line"><span class="cl"><span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;params&#34;</span><span class="p">:</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="nt">&#34;ui&#34;</span><span class="p">:</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">      <span class="nt">&#34;sidebar_menu_compact&#34;</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">      <span class="nt">&#34;ul_show&#34;</span><span class="p">:</span> <span class="mi">1</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">      <span class="nt">&#34;sidebar_menu_foldable&#34;</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">      <span class="nt">&#34;sidebar_cache_limit&#34;</span><span class="p">:</span> <span class="mi">1000</span>
</span></span><span class="line"><span class="cl">    <span class="p">}</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre></div>
    </div>
</div>


### Adding icons to the side nav

You can add icons to the side nav in the sidebar by setting the `icon` parameter
in the page front matter (e.g. `icon: fa-solid fa-screwdriver-wrench`).

You can find a complete list of icons to use in the
[FontAwesome documentation](https://fontawesome.com/icons?d=gallery&p=2). Docsy
includes the free FontAwesome icons by default.

Out of the box, if you want to use icons, you should define icons for all items
on the same menu level in order to ensure an appropriate look. If the icons are
used in a different way, individual CSS adjustments are likely necessary.

### Adding manual links to the side nav

By default the side nav is entirely generated from your section's pages. If you
want to add a manual link to this menu, such as a link to an external site or a
page in a different section of your site, you can do this by creating a
_placeholder page file_ in the doc hierarchy with the appropriate weight and
some special parameters in its metadata (front matter) to specify the link
details.

To create a placeholder page, create a page file as usual in the directory where
you want the link to show up in the menu, and add a `manualLink` parameter to
its metadata. If a page has `manualLink` in its metadata, Docsy generates a link
for it in the side nav for this page and in the section index (the list of the
child pages of a section on a landing page - see
[description in the Docsy docs](/docs/content/adding-content/#docs-section-landing-pages)),
but the link destination is replaced by the value of `manualLink`. The link text
is the `title` (or `linkTitle` if set) of your placeholder page. You can
optionally also set the `title` attribute of the link with the parameter
`manualLinkTitle` and a link target with `manualLinkTarget` - for example if you
want an external link to open in a new tab you can set the link target to
`_blank`. Docsy automatically adds `rel=noopener` to links that open new tabs as
a security best practice.

You can also use `manualLink` to add an additional cross reference to another
existing page of your site. For internal links you can choose to use the
parameter `manualLinkRelref` instead of `manualLink` to use the built-in Hugo
function
[relref](https://gohugo.io/functions/relref/ 'External link to official Hugo Docs').
If `relref` can't find a unique page in your site, Hugo throws an error message.

> [!NOTE]
>
> Although all generated menu and landing page links based on your placeholder
> file are set according to the parameters `manualLink` or `manualLinkRelref`,
> Hugo still generates a regular HTML site page for the file, albeit one with no
> generated links to it. To avoid confusion if users accidentally land on a
> generated placeholder page, we recommend specifying the URL for the external
> link in the normal content and / or page description of the page.

### Section as sidebar root (EXPERIMENTAL) {#sidebar-root}

To help readers stay focused within a section, you can “root” a section in the
sidebar navigation. This is particularly useful when there are deeply nested
pages.

Enable the feature in your site configuration:

```yaml
params:
  ui:
    sidebar_root_enabled: true
```

Then add `sidebar_root_for` to a section’s `_index.md`. Available options are:

- `self` applies the rooted sidebar to the index page as well as descendants.
- `children` keeps the section’s index page in the global docs menu, but limits
  descendant pages to the rooted sidebar.

Example:

```yaml
---
title: API Reference v2.0
linkTitle: v2.0
sidebar_root_for: self
---
```



To navigate out of a rooted section, click the “up” icon in the sidebar next to
the section title.

Feature notes:

- You can nest rooted sections.
- Docsy will warn you if you set `sidebar_root_for` to `self` on a section root
  page, since it is redundant.
- Docsy will generally ignore `sidebar_root_for` for non "docs" pages and
  non-section index pages.

## Table of contents (TOC) {#table-of-contents}

Docsy provides a table of contents (TOC) for each [`docs` page][]. The TOC is
generated using Hugo's [TableOfContents][] function from the Markdown headings
in the page content. The TOC is displayed in the right-hand sidebar of the
page's main content area by default.

[`docs` page]: /docs/content/adding-content/#content-sections-and-templates
[TableOfContents]: https://gohugo.io/methods/page/tableofcontents/

<div class="alert alert-info" role="alert"><div class="h4 alert-heading" role="heading">Will shortcode headings appear in the TOC?</div>



The headings contained in [Markdown shortcodes][] `{{% ... %}}` get included
in the TOC, while those in standard shortcodes `{{< ... >}}` will not. For
details, see Hugo forum discussions [#55399][] and [#51940][].

[#55399]:
  https://discourse.gohugo.io/t/tableofcontents-doesnt-render-headings-correctly-that-contains-shortcode/55399
[#51940]:
  https://discourse.gohugo.io/t/can-hugo-include-shortcode-headings-in-toc/51940
[Markdown shortcodes]: /docs/content/shortcodes/#shortcode-delimiters

</div>


### TOC customization

To **hide** the TOC for a specific page, set the following parameters in that
page's front matter:

```yaml
notoc: true
```

You can use the following CSS classes to **style** TOC elements:

- `.td-toc` for the TOC container
- `.td-toc-title` for the TOC title element (which includes the "On this page"
  text and the top-of-page link)
- `.td-toc-title__text` for the TOC title text
- `.td-toc-title__link` for the TOC title link

The TOC labels "On this page" and "Top of page" can be **localized**, for
example:

```toml
# i18n/fr.toml
toc_on_this_page = "Sur cette page"
toc_top_of_page = "Haut de la page"
```



For details, see [Internationalization bundles][].

[Internationalization bundles]: /docs/language/#internationalization-bundles

### Active TOC entry tracking with ScrollSpy {#toc-entry-tracking}

Docsy highlights the active heading in the TOC sidebar using Bootstrap
[ScrollSpy][]. ScrollSpy uses `.td-toc` (mentioned in the previous section) as
`data-bs-target` selector to target the TOC container when tracking active
headings.

By default, headings become active when they reach 10% from the top of the
viewport (configured via `rootMargin`).

- To disable ScrollSpy for a specific page, set `ui.scrollSpy.disable: true` in
  that page's front matter. To disable for all pages in a section, [cascade][]
  the setting in the front matter of the section's index page.
- To globally adjust when headings become active, set `ui.scrollSpy.rootMargin`
  in your site configuration. The default is `0px 0px -10%`. Use a larger
  negative percentage (e.g., `-20%`) to activate headings earlier, or a smaller
  one (e.g., `-5%`) to activate them later.

  
  
     <ul class="nav nav-tabs" id="tabs-10" role="tablist">
  <li class="nav-item">
      <button class="nav-link disabled"
          id="tabs-10-00-tab" data-bs-toggle="tab" data-bs-target="#tabs-10-00" role="tab"
          aria-controls="tabs-10-00" aria-selected="false">
        Configuration file:
      </button>
    </li><li class="nav-item">
      <button class="nav-link active"
          id="tabs-10-01-tab" data-bs-toggle="tab" data-bs-target="#tabs-10-01" role="tab"
          data-td-tp-persist="toml" aria-controls="tabs-10-01" aria-selected="true">
        hugo.toml
      </button>
    </li><li class="nav-item">
      <button class="nav-link"
          id="tabs-10-02-tab" data-bs-toggle="tab" data-bs-target="#tabs-10-02" role="tab"
          data-td-tp-persist="yaml" aria-controls="tabs-10-02" aria-selected="false">
        hugo.yaml
      </button>
    </li><li class="nav-item">
      <button class="nav-link"
          id="tabs-10-03-tab" data-bs-toggle="tab" data-bs-target="#tabs-10-03" role="tab"
          data-td-tp-persist="json" aria-controls="tabs-10-03" aria-selected="false">
        hugo.json
      </button>
    </li>
</ul>

<div class="tab-content" id="tabs-10-content">
    <div class="tab-body tab-pane fade"
        id="tabs-10-00" role="tabpanel" aria-labelled-by="tabs-10-00-tab" tabindex="10">
        
    </div>
    <div class="tab-body tab-pane fade show active"
        id="tabs-10-01" role="tabpanel" aria-labelled-by="tabs-10-01-tab" tabindex="10">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-toml" data-lang="toml"><span class="line"><span class="cl"><span class="p">[</span><span class="nx">params</span><span class="p">.</span><span class="nx">ui</span><span class="p">.</span><span class="nx">scrollSpy</span><span class="p">]</span>
</span></span><span class="line"><span class="cl"><span class="nx">rootMargin</span> <span class="p">=</span> <span class="s2">&#34;0px 0px -15%&#34;</span>
</span></span></code></pre></div>
    </div>
    <div class="tab-body tab-pane fade"
        id="tabs-10-02" role="tabpanel" aria-labelled-by="tabs-10-02-tab" tabindex="10">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-yaml" data-lang="yaml"><span class="line"><span class="cl"><span class="nt">params</span><span class="p">:</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">  </span><span class="nt">ui</span><span class="p">:</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">    </span><span class="nt">scrollSpy</span><span class="p">:</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">      </span><span class="nt">rootMargin</span><span class="p">:</span><span class="w"> </span><span class="l">0px 0px -15%</span><span class="w">
</span></span></span></code></pre></div>
    </div>
    <div class="tab-body tab-pane fade"
        id="tabs-10-03" role="tabpanel" aria-labelled-by="tabs-10-03-tab" tabindex="10">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-json" data-lang="json"><span class="line"><span class="cl"><span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;params&#34;</span><span class="p">:</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="nt">&#34;ui&#34;</span><span class="p">:</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">      <span class="nt">&#34;scrollSpy&#34;</span><span class="p">:</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">        <span class="nt">&#34;rootMargin&#34;</span><span class="p">:</span> <span class="s2">&#34;0px 0px -15%&#34;</span>
</span></span><span class="line"><span class="cl">      <span class="p">}</span>
</span></span><span class="line"><span class="cl">    <span class="p">}</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre></div>
    </div>
</div>


> [!INFO] Smooth scrolling issue
>
> We previously enabled ScrollSpy's smooth scrolling, but it interfered with
> hash updates in the browser URL and in-page navigation, so it is disabled by
> default. For details see PR [#2291][].

#### Advanced ScrollSpy customization

For advanced customization, such as adjusting `threshold`, override
[layouts/_partials/td/scrollspy-attr.txt][]. For ScrollSpy configuration
details, see [ScrollSpy][].

> [!NOTE]
>
> ScrollSpy determines the active TOC entry using the browser's
> [IntersectionObserver API][], including its configurable [rootMargin][].
> Because of how these thresholds work, there can be brief moments while a user
> is scrolling when **no** heading is highlighted, especially when headings are
> close together or when the active region is small. For more details, see
> [ScrollSpy options][ss-opt] and the discussion in [Bootstrap issue
> #34958][bs-34958].
>
> [bs-34958]: https://github.com/twbs/bootstrap/issues/34958
> [ss-opt]: https://getbootstrap.com/docs/5.3/components/scrollspy/#options

[cascade]: https://gohugo.io/content-management/front-matter/#cascade-1
[IntersectionObserver API]:
  https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver
[layouts/_partials/td/scrollspy-attr.txt]:
  https://github.com/google/docsy/blob/main/layouts/_partials/td/scrollspy-attr.txt
[#2291]: https://github.com/google/docsy/pull/2291
[ScrollSpy]: https://getbootstrap.com/docs/5.3/components/scrollspy/
[rootmargin]:
  https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/rootMargin

## Breadcrumb navigation

[Breadcrumb navigation][] appears at the top of each non-index page by default.
To also display single-element breadcrumb lists in index pages, add the
following [style override][] to your project:

```scss
.td-breadcrumbs__single {
  display: inline !important;
}
```

[Breadcrumb navigation]: https://en.wikipedia.org/wiki/Breadcrumb_navigation
[style override]: /docs/content/lookandfeel/#project-style-files

Breadcrumb navigation is also shown for each item in the taxonomy results page
&mdash; that is, when you click one of the taxonomy labels such as _Categories_
or _Tags_.

As illustrated next, you can disable (non-taxonomy) breadcrumb navigation for an
entire project, by setting `ui.breadcrumb_disable` to true in your project
[configuration file][]. Similarly, you can disable taxonomy breadcrumbs by
setting `ui.taxonomy_breadcrumb_disable` to true:



   <ul class="nav nav-tabs" id="tabs-11" role="tablist">
  <li class="nav-item">
      <button class="nav-link disabled"
          id="tabs-11-00-tab" data-bs-toggle="tab" data-bs-target="#tabs-11-00" role="tab"
          aria-controls="tabs-11-00" aria-selected="false">
        Configuration file:
      </button>
    </li><li class="nav-item">
      <button class="nav-link active"
          id="tabs-11-01-tab" data-bs-toggle="tab" data-bs-target="#tabs-11-01" role="tab"
          data-td-tp-persist="toml" aria-controls="tabs-11-01" aria-selected="true">
        hugo.toml
      </button>
    </li><li class="nav-item">
      <button class="nav-link"
          id="tabs-11-02-tab" data-bs-toggle="tab" data-bs-target="#tabs-11-02" role="tab"
          data-td-tp-persist="yaml" aria-controls="tabs-11-02" aria-selected="false">
        hugo.yaml
      </button>
    </li><li class="nav-item">
      <button class="nav-link"
          id="tabs-11-03-tab" data-bs-toggle="tab" data-bs-target="#tabs-11-03" role="tab"
          data-td-tp-persist="json" aria-controls="tabs-11-03" aria-selected="false">
        hugo.json
      </button>
    </li>
</ul>

<div class="tab-content" id="tabs-11-content">
    <div class="tab-body tab-pane fade"
        id="tabs-11-00" role="tabpanel" aria-labelled-by="tabs-11-00-tab" tabindex="11">
        
    </div>
    <div class="tab-body tab-pane fade show active"
        id="tabs-11-01" role="tabpanel" aria-labelled-by="tabs-11-01-tab" tabindex="11">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-toml" data-lang="toml"><span class="line"><span class="cl"><span class="p">[</span><span class="nx">params</span><span class="p">.</span><span class="nx">ui</span><span class="p">]</span>
</span></span><span class="line"><span class="cl"><span class="nx">breadcrumb_disable</span> <span class="p">=</span> <span class="kc">true</span>
</span></span><span class="line"><span class="cl"><span class="nx">taxonomy_breadcrumb_disable</span> <span class="p">=</span> <span class="kc">true</span>
</span></span></code></pre></div>
    </div>
    <div class="tab-body tab-pane fade"
        id="tabs-11-02" role="tabpanel" aria-labelled-by="tabs-11-02-tab" tabindex="11">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-yaml" data-lang="yaml"><span class="line"><span class="cl"><span class="nt">params</span><span class="p">:</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">  </span><span class="nt">ui</span><span class="p">:</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">    </span><span class="nt">breadcrumb_disable</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="w">
</span></span></span><span class="line"><span class="cl"><span class="w">    </span><span class="nt">taxonomy_breadcrumb_disable</span><span class="p">:</span><span class="w"> </span><span class="kc">true</span><span class="w">
</span></span></span></code></pre></div>
    </div>
    <div class="tab-body tab-pane fade"
        id="tabs-11-03" role="tabpanel" aria-labelled-by="tabs-11-03-tab" tabindex="11">
        <div class="highlight"><pre tabindex="0" class="chroma"><code class="language-json" data-lang="json"><span class="line"><span class="cl"><span class="p">{</span>
</span></span><span class="line"><span class="cl">  <span class="nt">&#34;params&#34;</span><span class="p">:</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">    <span class="nt">&#34;ui&#34;</span><span class="p">:</span> <span class="p">{</span>
</span></span><span class="line"><span class="cl">      <span class="nt">&#34;breadcrumb_disable&#34;</span><span class="p">:</span> <span class="kc">true</span><span class="p">,</span>
</span></span><span class="line"><span class="cl">      <span class="nt">&#34;taxonomy_breadcrumb_disable&#34;</span><span class="p">:</span> <span class="kc">true</span>
</span></span><span class="line"><span class="cl">    <span class="p">}</span>
</span></span><span class="line"><span class="cl">  <span class="p">}</span>
</span></span><span class="line"><span class="cl"><span class="p">}</span>
</span></span></code></pre></div>
    </div>
</div>


To disable breadcrumbs in a specific page or section set `ui.breadcrumb_disable`
to true in the page or section-index front matter. Here is an example of the
latter:

```yaml
cascade:
  params:
    ui:
      breadcrumb_disable: true
```

## Heading self links

Docsy supports build-time generation of heading self links using Hugo's
`render-heading.html` [hook][].

To enable this feature in your project, define
`layouts/_markup/render-heading.html` as:

```go-html-template
{{ partial "td/render-heading.html" . }}
```

The heading self-link anchor class is `.td-heading-self-link`, which you can
customize for your project. By default, the heading self-link style has these
defaults:

- The self-link symbol is `#`.
- The symbol is always visible on mobile and touch devices, otherwise it is only
  visible on hover or focus.

Your projects can also reuse (in your own custom heading render hook) or
override the heading self-link partial `td/heading-self-link.html`, which is
defined in [layouts/_partials/td/render-heading.html][].

## Heading aliases and in-page targets <a id="a-heading-aliases"></a> {#heading-aliases}

By default, [heading IDs are auto-generated][] from heading text unless you set
an explicit ID. If you change the text or explicit ID, the heading ID changes
and existing [fragment][] links to the heading will break. Treat a heading ID
change like a page move: keep old fragments working with a heading ID alias.

To create a heading ID alias:

- Add an empty anchor element with the old ID to the heading.
- Add the new heading ID using the `{#some-id}` [Markdown attributes][] syntax.

For example, if you rename "Getting Started" to "Quickstart":

```html
## Quickstart <a id="get-started"></a> {#quickstart}
```

Now both `#get-started` and `#quickstart` target the same heading and scroll to
the right place.

Give the heading alias for this section a try:
[Heading aliases](#a-heading-aliases).[^might-not-scroll]

> [!TIP] In-page targets <a id="in-page-targets-tip"></a>
>
> Anchor elements with IDs can be used to define in-page targets as well. For
> example, you can link to this [in-page targets](#in-page-targets-tip)
> tip.[^might-not-scroll]

<!-- markdownlint-disable no-blanks-blockquote -->

> [!IMPORTANT]
>
> Use an empty `<a id="..."></a>` for target IDs. Avoid using other elements
> such as `<span>` to set targets since they can be unreliable in some browsers.

### Implementation notes {#heading-aliases-implementation-notes}

- A scroll offset is set for all in-page targets via `scroll-padding-top`.
- Docsy uses the `td-anchor-no-extra-offset` class for built-in block targets
  (such as the blocks that are targets for link-down anchors) to keep the navbar
  offset while canceling the extra scroll padding.

For details, see [scroll styles][].

[^might-not-scroll]:
    If the target is already visible, the page might not scroll.

[configuration file]:
  https://gohugo.io/getting-started/configuration/#configuration-file
[fragment]: https://gohugo.io/quick-reference/glossary/#fragment
[heading IDs are auto-generated]:
  https://gohugo.io/configuration/markup/#parserautoheadingid
[hook]: https://gohugo.io/templates/render-hooks/
[layouts/_partials/td/render-heading.html]:
  https://github.com/google/docsy/tree/main/layouts/_partials/td/render-heading.html
[Markdown attributes]: https://gohugo.io/content-management/markdown-attributes/
[menu]: https://gohugo.io/content-management/menus/
[menus]: https://gohugo.io/content-management/menus/
[Multi-language support]: /docs/language/
[scroll styles]:
  https://github.com/google/docsy/blob/main/assets/scss/td/_scroll.scss
