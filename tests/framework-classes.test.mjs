// Framework-class check for the semantic-classes migration
// (google/docsy#783): chrome partials listed in CLEARED_PARTIALS emit only
// Docsy-owned (td-) class names — no Bootstrap classes. The list grows
// partial by partial as the migration lands; a partial is added in the same
// PR that swaps its classes, red first, driven green by the swap.
//
// The Bootstrap inventory is derived from the dependency's own compiled CSS,
// so it tracks the installed Bootstrap version instead of a hand-kept list.

import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const repoRoot = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  '..',
);

// Theme partials cleared of framework classes, relative to theme/layouts/.
const CLEARED_PARTIALS = [];

// Cleared partials whose statically-called children are knowingly not yet
// cleared (visible migration staging), child paths per parent. An entry
// here is a debt marker: the parent's rendered output still carries the
// child's framework classes.
const PENDING_CHILDREN = {};

const bootstrapCss = path.join(
  repoRoot,
  'theme/node_modules/bootstrap/dist/css/bootstrap.css',
);

// Static partial calls a template makes, normalized to theme/layouts/
// paths ("theme-toggler" → _partials/theme-toggler.html). A cleared
// partial's rendered output includes its children's, so the no-framework
// guarantee holds only over this closure. Dynamic partial names are
// invisible here (review's job).
export function partialCalls(template) {
  const calls = new Set();
  for (const m of template.matchAll(
    /\{\{-?\s*(?:partial|partialCached)\s+"([^"]+)"/g,
  )) {
    const name = m[1].endsWith('.html') ? m[1] : `${m[1]}.html`;
    calls.add(`_partials/${name.replace(/^_?partials\//, '')}`);
  }
  return calls;
}

// Class names Bootstrap's stylesheet defines: every `.name` token in selector
// text (text outside `{…}` blocks, comments stripped).
export function bootstrapClasses(css) {
  const selectorText = css
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\{[^{}]*\}/g, '{}');
  const classes = new Set();
  for (const m of selectorText.matchAll(/\.(-?[_a-zA-Z][\w-]*)/g)) {
    classes.add(m[1]);
  }
  return classes;
}

// Class tokens a template may emit from its class attributes: an
// over-approximation of every rendered variant assembled from the
// attribute's quoted literals — branch alternatives, printf-verb
// enumeration, delimiter joins, and whole-pool composition (mechanics
// beside each step below). Over-cap attributes throw: fail closed, never
// under-scan. Strict by design: a literal that merely collides with a
// class name is a loud false positive, not a silent miss. A lint over
// these forms, not a boundary: fully computed attributes (class={{ $c }})
// and flows that transform literal text are review's job.
const VARIANT_CAP = 1024;
const FMT_CAP = 4096;
const POOL_CAP = 12;
const verbSrc = '%(?:\\[\\d+\\])?[-+ #0]*\\d*(?:\\.\\d+)?[a-zA-Z]';
const verbRe = new RegExp(verbSrc);
const verbReG = () => new RegExp(verbSrc, 'g');
const capError = () =>
  new Error(
    'class attribute exceeds the variant enumeration cap; simplify the template or scan it manually',
  );

export function classTokens(template) {
  const tokens = new Set();
  const add = (text) => {
    for (const token of text.split(/\s+/)) {
      if (token) tokens.add(token);
    }
  };

  const actionLiterals = (content) =>
    [...content.matchAll(/"([^"]*)"|`([^`]*)`/g)].map((m) => m[1] ?? m[2]);

  const processAction = (content) => {
    const lits = actionLiterals(content);
    for (const lit of lits) add(lit);
    const fmts = lits.filter((lit) => verbRe.test(lit));
    const plain = lits.filter((lit) => !verbRe.test(lit));
    if (fmts.length) {
      for (const fmt of fmts) {
        const parts = fmt.split(verbReG());
        const verbs = fmt.match(verbReG()) ?? [];
        // Verb-by-verb enumeration over the literal args (or the verb
        // itself, kept as a pattern) sidesteps Go's argument-cursor
        // semantics: whatever printf would emit from these literals is in
        // the enumerated set.
        const choices = [...new Set(plain), null];
        if (choices.length ** verbs.length > FMT_CAP) throw capError();
        const build = (vi, acc) => {
          if (vi === verbs.length) {
            add(acc + parts[vi]);
            return;
          }
          for (const c of choices) {
            build(vi + 1, acc + parts[vi] + (c ?? verbs[vi]));
          }
        };
        build(0, '');
      }
      return;
    }
    const delims = plain.filter(
      (lit) => lit.length <= 1 && !/[a-zA-Z0-9]/.test(lit),
    );
    const pieces = plain.filter((lit) => !delims.includes(lit));
    if (pieces.length > 1) {
      for (const d of new Set(delims.length ? delims : ['-', ''])) {
        add(pieces.join(d));
      }
    }
  };

  const attrRe = /(?:^|[<\s"'])class\s*=\s*(["'])/gi;
  let m;
  while ((m = attrRe.exec(template))) {
    const quote = m[1];
    let i = attrRe.lastIndex;
    // Lex the attribute value into text and action segments.
    const flat = [];
    let buf = '';
    while (i < template.length && template[i] !== quote) {
      if (template.startsWith('{{', i)) {
        const end = template.indexOf('}}', i + 2);
        if (end === -1) break;
        if (buf) {
          flat.push({ text: buf });
          buf = '';
        }
        flat.push({
          action: template
            .slice(i + 2, end)
            .replace(/^\s*-\s*/, '')
            .replace(/\s*-\s*$/, '')
            .trim(),
        });
        i = end + 2;
      } else {
        buf += template[i];
        i += 1;
      }
    }
    if (buf) flat.push({ text: buf });
    attrRe.lastIndex = i;

    // Attribute-wide literal-pool composition: any pipeline that only
    // rearranges these literals (range/with dot output, nested joins,
    // cross-action assembly) can emit nothing outside the composed set.
    const poolPieces = [];
    const poolDelims = new Set(['-', '']);
    for (const seg of flat) {
      if (seg.action !== undefined) {
        for (const lit of actionLiterals(seg.action)) {
          if (verbRe.test(lit)) continue; // format enumeration owns these
          if (lit.length <= 1 && !/[a-zA-Z0-9]/.test(lit)) {
            poolDelims.add(lit);
          } else {
            poolPieces.push(lit);
          }
        }
      } else {
        const t = seg.text.trim();
        if (t.length === 1 && !/[a-zA-Z0-9]/.test(t)) poolDelims.add(t);
      }
    }
    if (poolPieces.length > POOL_CAP) throw capError();
    const compose = (chosen) => {
      if (chosen.length >= 2) {
        for (const d of poolDelims)
          add(chosen.map((p) => poolPieces[p]).join(d));
      }
      if (chosen.length === 3) return;
      for (let p = 0; p < poolPieces.length; p += 1) {
        if (!chosen.includes(p)) compose([...chosen, p]);
      }
    };
    compose([]);

    // Group if/with/range…else…end into branch nodes.
    const parse = (pos) => {
      const nodes = [];
      while (pos < flat.length) {
        const seg = flat[pos];
        if (seg.text !== undefined) {
          nodes.push(seg);
          pos += 1;
          continue;
        }
        const kw = seg.action.split(/\s+/)[0];
        if (kw === 'end' || kw === 'else') return [nodes, pos];
        if (kw === 'if' || kw === 'with' || kw === 'range') {
          for (const lit of actionLiterals(seg.action)) add(lit);
          const branches = [];
          let body, next;
          [body, next] = parse(pos + 1);
          branches.push(body);
          while (
            next < flat.length &&
            flat[next].action !== undefined &&
            /^else\b/.test(flat[next].action)
          ) {
            for (const lit of actionLiterals(flat[next].action)) add(lit);
            [body, next] = parse(next + 1);
            branches.push(body);
          }
          if (next < flat.length) next += 1; // consume end
          nodes.push({ branches });
          pos = next;
          continue;
        }
        nodes.push(seg);
        pos += 1;
      }
      return [nodes, pos];
    };
    const [nodes] = parse(0);

    // Enumerate the attribute's rendered variants, capped.
    const variants = (list) => {
      let out = [''];
      for (const node of list) {
        let alts;
        if (node.text !== undefined) alts = [node.text];
        else if (node.branches) {
          alts = [''];
          for (const b of node.branches) alts = alts.concat(variants(b));
        } else {
          processAction(node.action);
          alts = [' '];
        }
        if (out.length * alts.length > VARIANT_CAP) throw capError();
        const next = [];
        for (const o of out) for (const a of alts) next.push(o + a);
        out = next;
      }
      return out;
    };
    for (const v of variants(nodes)) add(v);
  }
  return tokens;
}

// A literal class token is a fragment when it could assemble into an
// inventory name that token matching would miss: an edge-hyphenated piece
// (print "d-" "flex", d-{{ $bp }}-none) that some inventory name starts or
// ends with, or a printf format (d-%s-none) whose placeholder pattern
// matches an inventory name. Anchoring on the inventory keeps Docsy-own
// dynamic classes (ul-{{ $n }}, td-{{ .Kind }}) clean. Whole-name evasion
// via replace/printf composition of complete names stays review's job.
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
export function isClassFragment(token, inventory) {
  if (verbRe.test(token)) {
    // A pattern needs an alphanumeric anchor: bare-verb forms (%s-%s)
    // would match half the inventory on punctuation alone.
    if (!/[a-zA-Z0-9]/.test(token.replace(verbReG(), ''))) return false;
    const re = new RegExp(
      `^${token.split(verbReG()).map(escapeRe).join('.+')}$`,
    );
    for (const name of inventory) if (re.test(name)) return true;
    return false;
  }
  if (token.length > 1 && /[^-]-$/.test(token)) {
    for (const name of inventory) if (name.startsWith(token)) return true;
  }
  if (token.length > 1 && /^-[^-]/.test(token)) {
    for (const name of inventory) if (name.endsWith(token)) return true;
  }
  return false;
}

test('framework-class check: cleared partials emit no Bootstrap classes', () => {
  assert.ok(
    fs.existsSync(bootstrapCss),
    'bootstrap.css is installed (npm run install:theme-deps)',
  );
  const inventory = bootstrapClasses(fs.readFileSync(bootstrapCss, 'utf8'));
  assert.ok(inventory.size > 500, 'inventory parsed a full Bootstrap build');

  for (const partial of CLEARED_PARTIALS) {
    const file = path.join(repoRoot, 'theme/layouts', partial);
    assert.ok(fs.existsSync(file), `cleared partial ${partial} exists`);
    const source = fs.readFileSync(file, 'utf8');
    const tokens = [...classTokens(source)];
    assert.deepEqual(
      tokens.filter((token) => inventory.has(token)),
      [],
      `${partial} uses only Docsy-owned classes`,
    );
    assert.deepEqual(
      tokens.filter((token) => isClassFragment(token, inventory)),
      [],
      `${partial} class attributes carry only whole class names`,
    );
    // Rendered output includes children: each statically-called child is
    // cleared too, or carried as visible staging debt.
    const pending = PENDING_CHILDREN[partial] ?? [];
    for (const child of partialCalls(source)) {
      assert.ok(
        CLEARED_PARTIALS.includes(child) || pending.includes(child),
        `${partial} child ${child} is cleared or listed as pending`,
      );
    }
  }
});

// Self-test: prove the scanner's signal on synthetic templates, so an empty
// cleared list can't hide a broken scanner (false-green guard). The nested-
// quote and action-literal cases are real Hugo forms that defeated a naive
// attribute regex.
test('framework-class check: scanner flags Bootstrap classes', () => {
  const inventory = bootstrapClasses(fs.readFileSync(bootstrapCss, 'utf8'));
  for (const known of ['d-flex', 'breadcrumb', 'active', 'mb-4']) {
    assert.ok(inventory.has(known), `inventory contains .${known}`);
  }
  const offenders = (template) =>
    [...classTokens(template)].filter((t) => inventory.has(t)).sort();
  const classFragments = (template) =>
    [...classTokens(template)]
      .filter((t) => isClassFragment(t, inventory))
      .sort();

  assert.deepEqual(
    offenders('<nav class="td-x d-flex{{ if .Active }} active{{ end }}">'),
    ['active', 'd-flex'],
    'dirty template is flagged',
  );

  // Quotes inside actions must not truncate the attribute scan.
  assert.deepEqual(
    offenders(
      '<li class="breadcrumb-item{{ if eq .Status "active" }} active{{ end }}">',
    ),
    ['active', 'breadcrumb-item'],
    'nested-quote action is flagged',
  );

  // Class names emitted from string literals inside actions count too.
  assert.deepEqual(
    offenders('<div class="{{ delimit (slice "d-flex" "mb-4") " " }}">'),
    ['d-flex', 'mb-4'],
    'delimit-built class list is flagged',
  );
  assert.deepEqual(
    offenders(
      '<div class="{{ cond $single "breadcrumb d-flex" "breadcrumb" }}">',
    ),
    ['breadcrumb', 'd-flex'],
    'cond-built class list is flagged',
  );

  // Fragments are flagged only when completable to an inventory name
  // (contract: isClassFragment).
  assert.deepEqual(
    classFragments('<div class="{{ print "d-" "flex" }}">'),
    ['d-'],
    'concat fragment literal is flagged',
  );
  assert.deepEqual(
    classFragments('<div class="{{ printf "%s%s" "breadcrumb-" "item" }}">'),
    ['%sitem', 'breadcrumb-', 'breadcrumb-%s'],
    'printf fragment literal is flagged',
  );
  assert.deepEqual(
    classFragments('<div class="d-{{ .Bp }}-none">'),
    ['-none', 'd-'],
    'action-split class name is flagged',
  );
  assert.deepEqual(
    classFragments('<div class="{{ printf "d-%s-none" .Bp }}">'),
    ['d-%s-none'],
    'printf placeholder form is flagged',
  );
  // Literal assembly through printf args and delimiter expressions: the
  // assembled name must surface as an offender.
  assert.deepEqual(
    offenders('<div class="{{ printf "%s%s%s" "d" "-" "flex" }}">'),
    ['d-flex'],
    'printf-assembled class name is flagged',
  );
  assert.deepEqual(
    offenders(
      '<div class="{{ printf "%s%s%s%s%s" "d" "-" "md" "-" "none" }}">',
    ),
    ['d-md-none', 'd-none'],
    'multi-piece printf assembly is flagged',
  );
  assert.deepEqual(
    offenders('<div class="{{ printf "d-%[1]s-none" "md" }}">'),
    ['d-md-none'],
    'indexed printf verb is resolved and flagged',
  );
  assert.deepEqual(
    offenders('<div class="{{ delimit (slice "d" "flex") $dash }}">'),
    ['d-flex'],
    'variable-delimiter join is flagged',
  );

  // Child-partial closure: static calls resolve to _partials paths.
  assert.deepEqual(
    [
      ...partialCalls(
        '{{ partial "theme-toggler" . }}{{ partialCached "dark-mode-config.html" "k" }}{{ partial "navbar-lang-selector.html" . -}}',
      ),
    ].sort(),
    [
      '_partials/dark-mode-config.html',
      '_partials/navbar-lang-selector.html',
      '_partials/theme-toggler.html',
    ],
    'static partial calls are extracted and normalized',
  );
  assert.deepEqual(
    offenders(
      '<div class="{{ delimit (slice "d" "flex") (cond .Compact "-" "_") }}">',
    ),
    ['d-flex'],
    'conditional-delimiter join is flagged',
  );
  // Assembly through indexed/flagged verbs, surplus args, and cross-action
  // branch text.
  assert.deepEqual(
    offenders('<div class="{{ printf "%[1]s-%s" "d" "flex" }}">'),
    ['d-flex'],
    'indexed-plus-positional printf is flagged',
  );
  assert.deepEqual(
    offenders('<div class="{{ printf "%s-%s" (cond true "d" "td") "flex" }}">'),
    ['d-flex'],
    'surplus-arg printf is flagged',
  );
  assert.deepEqual(
    offenders(
      '<div class="{{ if .A }}d{{ else }}td{{ end }}-{{ if .B }}flex{{ else }}notice{{ end }}">',
    ),
    ['d-flex'],
    'cross-action branch assembly is flagged',
  );
  assert.deepEqual(
    offenders('<div class="{{ printf "d-%.4s" "flex" }}">'),
    ['d-flex'],
    'precision-verb printf is flagged',
  );
  assert.deepEqual(
    offenders(
      '<div class="{{ printf (cond true "%s-%s" "%s_%s") "d" "flex" }}">',
    ),
    ['d-flex'],
    'conditional-format printf is flagged',
  );
  // Literal value flow: dot-bound range/with output, nested joins,
  // cross-action composition.
  assert.deepEqual(
    offenders(
      '<div class="{{ range (slice "d" "-" "flex") }}{{ . }}{{ end }}">',
    ),
    ['d-flex'],
    'range-emitted literal assembly is flagged',
  );
  assert.deepEqual(
    offenders(
      '<div class="{{ with (cond .A "d" "td") }}{{ . }}{{ end }}-{{ with (cond .B "flex" "notice") }}{{ . }}{{ end }}">',
    ),
    ['d-flex'],
    'cross-action with-block assembly is flagged',
  );
  assert.deepEqual(
    offenders(
      '<div class="{{ printf "%s" (delimit (slice "d" "flex") "-") }}">',
    ),
    ['d-flex'],
    'nested delimit inside printf is flagged',
  );
  assert.deepEqual(
    offenders(
      '<div class="{{ printf "%s %s" "td-x" (delimit (slice "d" "flex") "-") }}">',
    ),
    ['d-flex'],
    'joined second printf argument is flagged',
  );
  assert.deepEqual(
    offenders(
      '<div class="{{ print (cond .A "d" "td") }}-{{ print (cond .B "flex" "notice") }}">',
    ),
    ['d-flex'],
    'cross-action print assembly is flagged',
  );
  // Over-cap attributes throw.
  assert.throws(
    () =>
      classTokens(
        `<div class="${'{{ if .X }}a{{ else }}b{{ end }}'.repeat(12)}">`,
      ),
    /variant/,
    'combinatorial attributes fail closed',
  );
  // Docsy-own assembly must stay clean (no wildcard-on-inventory false
  // dirty from the bare format token).
  assert.deepEqual(
    [...classTokens('<div class="{{ printf "%s-%s" "td" .Kind }}">')].filter(
      (t) => inventory.has(t) || isClassFragment(t, inventory),
    ),
    [],
    'td-prefixed printf stays clean',
  );
  assert.deepEqual(
    offenders('<div class="{{ delimit (slice "d" "flex") "-" }}">'),
    ['d-flex'],
    'delimiter-joined class name is flagged',
  );
  assert.deepEqual(
    classFragments('<ul class="ul-{{ $ulNr }} td-{{ .Kind }}">'),
    [],
    'Docsy-own dynamic classes are not fragments',
  );
  assert.deepEqual(
    classFragments('<div class="td-x{{ if .A }} td-x--on{{ end }}">'),
    [],
    'whole-token semantic template has no fragments',
  );

  // Only real class attributes are scanned.
  assert.deepEqual(
    offenders('<div data-class="d-flex" class="td-x">'),
    [],
    'data-class attribute is not scanned',
  );

  assert.deepEqual(
    offenders('<div CLASS="d-flex">'),
    ['d-flex'],
    'attribute name is case-insensitive',
  );

  assert.deepEqual(
    offenders('<nav class="td-x{{ if .Active }} td-x--active{{ end }}">'),
    [],
    'semantic template passes',
  );
});
