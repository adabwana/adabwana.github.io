---
type: UserStory
title: User story US-05
description: Replace the React/Reagent SPA with build-time static HTML generation in pure ClojureScript.
tags: [story, migration, static, cljs, react-free]
status: draft
generated:
  by: human:adazungu
  at: 2026-08-05T00:00:00Z
---

# US-05 Migrate portfolio to vanilla ClojureScript static site

**Status:** in-hardening
**Pack:** **full six-pack** (specifier -> coder -> cleaner -> architect ->
hardender -> QA) — architectural migration with dependency + parity risks.
**Depends on:** US-01..US-03 (done). US-04 (home teaching restructure) remains
**backlog** and does not block this story: content for US-05 is frozen at the
US-03 snapshot, so the framework removal is independent of the US-04 content
moves. Re-sequence US-04 after US-05 ships.
**Design:** see `docs/architecture/adr-002-vanilla-static.md`.

## Static generator decision (settled by specifier, approved by user)

### Approach: pure-client static generator emitted as a shadow-cljs "sites" build

* **How HTML is produced.** Existing `data.cljs` / `components.cljs` /
  `pages/*.cljs` / `layout.cljs` already emit hiccup as data with zero JS
  interop in `pages`, `components`, and `layout` (verified: no `js/` calls,
  no `:on-click`/`onClick`, no inline style fns outside pure maps). A new pure
  namespace `src/adabwana/static.cljc` renders that hiccup to an HTML string
  and wraps each route's body in the same shell as `public/index.html`
  (Bootstrap/Icons/highlight CDN links; matching `<title>` and meta). The
  host entrypoint `src/adabwana/core.cljs` (repurposed from the SPA mount)
  calls the render fns for the fixed four-route table and writes the files.
* **Build wiring.** Add a second shadow-cljs target `:static` whose init runs
  `adabwana.core/init` under **Node** (`:target :node-script`) with
  `:output-to "target/static/main.js"`, a disposable artifact. CI runs
  `npx shadow-cljs release static` then `node target/static/main.js`
  (replacing the old `release app` SPA build). Emitting the
  files happens through Node's `fs` at the **host boundary** only — `static.cljc`
  stays pure (`route -> html-string`), so the same render logic is unit-testable
  in CLJC and the generator itself never touches `js/document`.
* **Per-route output paths.** Four files only (see table in
  `features/static-site.feature`):
  `/ -> public/index.html`, `/about -> public/about/index.html`,
  `/projects -> public/projects/index.html`,
  `/hms-student-highlights -> public/hms-student-highlights/index.html`.
  Nav/footer already point at these real paths (`/about`, `/projects`,
  `/hms-student-highlights`) so no re-link is needed; QA asserts zero 404s.
* **Route table.** Replace reitit with a plain data map in `routes.cljs`
  (`route-path -> view-fn`). `core.cljs` iterates it; no client router remains.
* **Live-render is not reimplemented.** The React/reitit `core.cljs` client
  mount is gone; `core.cljs` now hosts static generation, and pages are
  static. Any late progressive-enhancement will be a
  separate story with an explicit small script (ADR-002).

### Tensions this approach settles vs. the alternatives

* **No external hiccup->HTML lib** (reagent's `render-to-static-markup`,
  hiccup, hickory/walk): each is a runtime or build-runtime dependency that
  pulls a vDOM/parse stack into the artifact the very story removes. The pure
  hand-written renderer is ~60 lines, matches the site's fixed sealed hiccup
  subset (verified: vectors of `[:tag.class ...]`, `{:href :src :download
  :target :style :alt :role}` attrs, keywords/strings/seqs, `^{:key}` meta),
  and keeps `data`/`pages`/`layout`/`components` untouched.
* **No Babashka static-gen** (vs. `bb`-driven build step): the site build is
  Node/shadow-cljs; `bb` is not required by CI or deps.edn, it is not warmed in
  the deployment `PATH`, and adding it would let generator and content build
  drift apart. Shadow-cljs `:node-script` reuses the exact same compiler +
  deps.edn set as `app`, so content/build stay in one toolchain.

### Boundary contract for the generator (architect gate will assert)

* `static.cljc` is pure: `render-route :: route -> string`, no host globals,
  no fs.
* `core.cljs` is the single host entrypoint (repurposed from the SPA mount):
  it reads the route table, renders to string, and writes files under `public/`
  via Node `fs`. It is the only namespace touching the host.
* `routes.cljs` keeps only data (the route map); `htmx.cljs` is deleted
  (`htmx` is runtime-loaded react/htmx JS that no page uses). The old
  `core.cljs` React mount/`reitit` router are removed; `core.cljs` now hosts
  generation instead of mounting a client app.
* Absolute hrefs in the current markup may be made relative only where needed
  for `gh-pages`; this is a documented parity-neutral rewrite, and QA must
  grep the generated globals.out for `reagent|reitit|react-dom|htmx`.

### Build + verification commands (replaces the open `<...>` placeholder)

```bash
npx shadow-cljs release static && node target/static/main.js   # writes the four public/ route HTML files
python3 -m http.server -d public 3000   # then curl each route + assets
# no-framework proof: grep -rn "reagent\|reitit\|react-dom\|adabwana.htmx" src/ deps.edn package.json
```

### Definition of done

* Four route HTML files generated under `public/`; each renders its content
  with JS disabled (parity with the pre-migration US-01..03 content).
* No `reagent`, `reitit`, `react`, `react-dom`, `htmx` in `deps.edn`,
  `package.json`, or `src/`; `htmx.cljs` deleted and the React mount removed
  from `core.cljs` (now the host); `routes.cljs` is data-only.
* Every nav/footer link and asset href resolves to a real static file (200).
* `static.cljc` is pure CLJC (architect asserts zero host imports);
  `core.cljs` is the only host file (Node `fs` writer); the generated
  `target/static/main.js` is disposable.

## Story

As the site owner, I want the portfolio served as **static HTML generated
from pure ClojureScript**, with no React/Reagami client framework, so the
deployed app is tiny, fast, and dependency-free.

## In scope

* **Build static pages** for all four routes (`/`, `/about`, `/projects`,
  `/hms-student-highlights`) from the existing pure hiccup functions in
  `src/adabwana/` (data, components, pages, layout) via a new static-generation
  entrypoint (hiccup -> HTML string -> `public/`).
* **Remove** `reagent`, `reitit`, `react`, `react-dom` from `deps.edn`;
  remove `react`, `react-dom`, `htmx.org` from `package.json`.
* **Remove** `rdom/render` + reitit from `core.cljs`; replace with the static
  generator. Drop unused `htmx.cljs` (no current page uses it).
* Nav/footer links point at **real static file paths** (no client router).
* Keep `data.cljs` content **unchanged** (pure data moved, not edited).

## Out of scope

* New content or design changes (content is unchanged from US-01..04).
* Any client interactive feature (sorting, filtering) beyond what exists.
* Adopting Reagami or any vDOM library (rejected by ADR-002).

## Acceptance criteria

* Four route HTML files are generated under `public/` and each renders its
  expected content without JS.
* No `reagent`, `reitit`, `react`, `react-dom`, `htmx` anywhere in `src/` or
  `deps.edn`/`package.json`.
* Every nav/footer link resolves to a real generated file (no broken anchors).
* `data.cljs` content string-parity: each page shows the same content as the
  pre-migration site.
* Static pages serve over HTTP.

## Engineering gates (per .okf/software-engineering/)

* **Clean Architecture**: pure namespaces (`data`, `components`, `pages`,
  `layout`) contain zero host/DOM/JS interop; only the generator entrypoint
  touches the DOM/host.
* **Functional core**: generator is a pure function
  `route -> HTML-string`; no hidden effects.
* **Clean Code / Immutability**: pages remain small hiccup fns; no mutation
  of shared state.
* **Make misuse difficult**: a single page-render map drives all routes; a
  route can't silently disappear.

## Architecture constraints

* Output relative links (`./`, `about/`, `projects/`) so it works under
  GitHub Pages without a router.
* The generator reads the same `data.resume-data`, `data.resume-downloads`,
  `data.teaching`, `data.student-highlights` maps.
* Keep Bootstrap/Icons/Highlight as CDN links (unchanged); drop the runtime
  htmx + react-dom scripts.

## Feature and QA

* Feature: `features/static-site.feature`
* Procedure: `qa/procedures/static-site.qa.md`

## Verification commands

```bash
npx shadow-cljs release static && node target/static/main.js
python3 -m http.server -d public   # then curl each route
```

## Handoff evidence

| Stage | Commit | Result |
|-------|--------|--------|
| Specifier | `744d988` | Approved US-05 + ADR-002 (full six-pack) |
| Coder | `b223b1f` | Implemented pure `static.cljc` generator + Node host, removed framework deps |
| Cleaner | `2439951` | Cleanup: dead field, dedup links, formatting, lockfile |
| Architect | `cc66c71` | PASS — boundaries, dependency direction, pure core/host separation, relative links, acyclic graph; evidence in Architecture review below |
| Hardender | `b63f9fa` | PASS — output parity, link integrity, no-framework guard, data parity + regeneration byte-identical; added 9 hardening specs (negative cases, escaping invariants, link invariants); see Hardening review below |
| QA | `(this commit)` | PASS — independent user-surface verification over HTTP of all seven static-site feature scenarios; see QA evidence below |

## Hardening review (hardender gate)

Reviewed the committed US-05 state at `7188f0b` (chain `b223b1f` → `2439951` → `cc66c71`).

**Output parity (Static 01/04)** — all four route HTML files exist under `public/`;
regeneration via `npx shadow-cljs release static && node target/static/main.js` is
deterministic — each of the four files is byte-identical to the committed version
(working tree clean after regen).

**Data parity (Static 04)** — `data.cljs` sha256 `bbe8f49b…` is identical to the
pre-migration `744d988` (pure data moved, not edited). A scripted scan of all 282
distinct content strings in `data.cljs` found 0 missing from the generated HTML
(Clojure-structure fragments excluded).

**Link integrity (Static 03)** — all 38 internal hrefs/src across the four pages
resolve to a real file or directory index; no broken anchors inside generated HTML.
Served over HTTP: `/`, `/about/`, `/projects/`, `/hms-student-highlights/`,
`/css/styles.css`, `/img/headshot.jpg`, all three resume PDFs, `404` — all 200.

**No-framework guard (Static 02)** — no `reagent`, `reitit`, `react`, `react-dom`,
`htmx` in `src/`, `deps.edn`, or `package.json`; zero JS/DOM interop outside
`core.cljs` (the only host). `htmx.cljs` deleted; `public/js/` no longer tracked.

**Hardening additions** — added 9 behavior-preserving specs to
`spec/adabwana/static_spec.clj` (negative/error cases for unrepresentable nodes,
escaping invariants incl. `<script>` and `&` leakage, and nav/relative-href link
invariants). Suite now 32/32 green; structure-check OK.

**Residual (unchanged from architect, out of scope):** legacy `public/404.html`
dead SPA redirect, `public/test/index.html` legacy runner (dead `/js/main.js`
ref), `public/htmx/*.html` orphans. None are linked from any generated route.
The `/about#presentations` anchor on the home page has no matching target on the
About page — this is pre-existing content behavior, identical before/after migration,
so it is parity-preserved and out of hardening scope.

## Architecture review (architect gate)

Reviewed merged HEAD (`cc66c71` = impl `2439951` + accepted spec `5e050e2`).

**Passed gates:**

* **Dependency direction** — `data <- (components, pages, layout) <- routes <- core` is strictly inward; graph is acyclic. `static.cljc` requires only `clojure.string`.
* **Pure core / host confinement** — `static.cljc` is pure CLJC (`hiccup->html`, relative-href/asset derivation, `page-document`); zero `js/`, DOM, `fs`, or node globals. The only host namespace is `core.cljs`, which reads the route map and writes `public/` via Node `fs`/`path`.
* **No framework residue** — `reagent`/`reitit`/`react`/`react-dom`/`htmx` absent from `deps.edn`, `package.json`, and `src/`; `htmx.cljs` deleted; `core.cljs` no longer mounts React or uses reitit. Compiled `target/static/main.js` contains no `reagent|reitit|react-dom|htmx` (Static 07). Bundle: 196K.
* **Single page-render map** — `routes.cljs` `site-pages` + `page-order` drive all routes; a route cannot silently disappear.
* **Relative links** — generator emits `./`, `../about/`, `../projects/index.html`, `../hms-student-highlights/index.html`; works on GitHub Pages without a router.
* **Build + tests** — `npx shadow-cljs release static` compiles clean (0 warnings); `clojure -M:test` 23/23 green; `node target/static/main.js` regenerates the four `public/` route files byte-identical to committed.
* **Served links (Static 03/05)** — `/`, `/about/`, `/projects/`, `/hms-student-highlights/` all 200 `text/html`; every nav/footer/asset href on all four pages resolves 200 (no 404s, redirects to directory indexes only).
* **Content parity (Static 04)** — data strings (`JARYT SALVO`, `Hudson Memorial School`, `Computers Teacher`, course titles, resume labels) present in generated HTML.

**Residual risk (handed to hardender/QA, out of accepted scope):**

* `public/404.html` still contains a dead reitit-era `window.location.href = '/?path='` redirect — no client router exists to honor `?path=` on this static site. GH Pages will serve this file on 404s. Consider a static-appropriate 404 page in a follow-up.
* `public/test/index.html` is a legacy Speclj test-runner page loading `/js/main.js` (a deleted bundle → 404). Not linked from any route.
* `public/htmx/*.html` are orphaned legacy demo fragments using `hx-*` attributes; not referenced by any generated route.

## Verification commands

```bash
npx shadow-cljs release static && node target/static/main.js
python3 -m http.server -d public   # then curl each route
```

## QA evidence (QA gate)

QA verified independently through the real user surface (served static site
over HTTP, per `qa/procedures/static-site.qa.md`):

* `npx shadow-cljs release static` compiles clean (0 warnings); the Node
  entrypoint regenerates the four `public/` route files byte-identical to
  committed (deterministic output).
* All seven feature scenarios pass. `/`, `/about/`, `/projects/`,
  `/hms-student-highlights/` each serve 200 `text/html` over HTTP; content
  renders with JS disabled (curl, zero framework references in HTML or the
  compiled bundle).
* All 38 internal hrefs/src resolve (31 direct 200, 7 clean 301-to-200
  directory redirects); the three `public/resume/*.pdf` endpoints resolve 200
  as valid PDFs (full 3-page, onepage 1-page, industry 2-page);
  styles/headshot 200.
* `data.cljs` sha256 `bbe8f49b` is byte-identical to pre-migration; all US-03
  content strings (teaching courses + units, student names and project
  titles) present in the generated pages.
* Code-level gates: `static.cljc` pure CLJC (only `clojure.string`); `core.cljs`
  the sole host writer; no event handlers/atoms/`js/` interop in
  `components`/`pages`/`layout`/`routes`; link/data targets declared once and
  rendered via helpers; no stale academic resume reference. `clojure -M:test`
  32/32 green.
* Residual: legacy `public/404.html` redirect, `public/test/` runner,
  `public/htmx/*` orphans, and the `/about#presentations` anchor are
  parity-preserved and out of the accepted scope.

## Residual risk

* GitHub Pages needs relative paths to work from the `gh-pages` branch —
  generator must emit them; QA verifies served links.
* `core.cljs`/`htmx.cljs` removal may orphan requires — architect asserts none;
  legacy `public/` artifacts (404 SPA redirect, test runner, htmx fragments)
  are listed in the architecture review above as out-of-scope residue for QA.
