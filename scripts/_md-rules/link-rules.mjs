// @ts-check

import { createLinkPatternRule } from 'markdownlint-rule-link-pattern';
import noShortcutRefLink from 'markdownlint-rule-no-shortcut-ref-link';

export default [
  createLinkPatternRule(
    'no-docsy-dev-external-urls',
    'Use a local path instead of an external URL for site-local pages',
  ),
  noShortcutRefLink,
];
