// Fixture content and output probes shared across suites. One home for the
// doc-rooted recipe as tested (user guide: Adding content § Doc-rooted sites),
// so the llms, root-page and chrome fixtures exercise the same site shape.

export const frontMatter = (fields) =>
  `---\n${Object.entries(fields)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n')}\n---\n`;

// A home page that keeps its URL but renders nothing.
export const linkOnlyHome = (fields) =>
  frontMatter({ ...fields, build: '{ render: link }' });

// The doc-rooted recipe: the docs section published at each language root,
// link-only homes, two languages. Consumers append their outputs and cascades.
export const docRootedConfig = `permalinks:
  page:
    docs: /:sections[1:]/:slug/
  section:
    docs: /:sections[1:]
languages:
  en: { weight: 1, label: English }
  fr: { weight: 2, label: Français }
`;
export const docRootedHomes = (en = {}, fr = {}) => ({
  'content/_index.md': linkOnlyHome({ title: 'Home', ...en }),
  'content/_index.fr.md': linkOnlyHome({ title: 'Accueil', ...fr }),
});

// The head's llms.txt discovery links, in document order.
export const describedbyLinks = (html) =>
  html.split('</head>')[0].match(/<link rel="describedby" [^>]*>/g) ?? [];

// Shared-chrome regions and the placeholder that stands in for a dropped one.
export const chrome = {
  navbar: (h) => /class="td-navbar/.test(h),
  footer: (h) => /class="td-footer/.test(h),
  sidebar: (h) => /id="td-section-nav"/.test(h),
  placeholder: (h, region, donor) =>
    new RegExp(
      `class="td-chrome-placeholder" data-chrome-donor="${donor}" data-chrome-region="${region}"`,
    ).test(h),
};
