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

**Status:** backlog
**Pack:** **full six-pack** (specifier -> coder -> cleaner -> architect ->
hardender -> QA) — architectural migration with dependency + parity risks.
**Depends on:** US-01..US-04 (done)
**Design:** see `docs/architecture/adr-002-vanilla-static.md`.

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
<build command that regenerates public/>   # decided by specifier in this story
npx shadow-cljs release app 2>/dev/null; true
python3 -m http.server   # then curl each route
```

## Residual risk

* GitHub Pages needs relative paths to work from the `gh-pages` branch —
  generator must emit them; QA verifies served links.
* `core.cljs`/`htmx.cljs` removal may orphan requires — architect asserts none.
