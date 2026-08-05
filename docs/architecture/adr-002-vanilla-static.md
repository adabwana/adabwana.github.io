---
type: ArchitectureDecision
title: ADR-02 Vanilla ClojureScript static site, no client framework
description: Replace the React/Reagent + reitit SPA with build-time static HTML generation in pure ClojureScript.
tags: [adr, architecture, migration, static, cljs]
status: accepted
generated:
  by: human:adazungu
  at: 2026-08-05T00:00:00Z
---

# ADR-02 Vanilla ClojureScript static site, no client framework

## Context

The portfolio at adabwana.github.io is a content site: four static routes
(home, about, projects, HMS student highlights) rendering pure hiccup from
`data.cljs`. It currently runs as a client-side SPA via
React + Reagent (`core.cljs` mounts into `#app`, reitit swaps `current-page`),
plus a runtime-fetched htmx loader that no current page uses.

This stack is disproportionate to the need: the site has one `r/atom`
(`current-page`), no local component state, no forms, no live data, and
static routes. React/Reagent's ~97 KB gzip (plus react-dom) exists solely to
render static hiccup into a div.

Evaluated alternatives:

* **Reagami** (borkdude): minimal 9 KB zero-dep Reagent-like, but still a
  vDOM library; no router (must hand-roll routing), no atom auto-watch, and
  by the author's framing it is underengineered for education. Adds a
  framework to solve a problem the site barely has.
* **Stay on React/Reagent**: lowest churn, but keeps an overkill dependency
  and the runtime JS/SSR gap.

Decision: neither. The site needs no client UI framework at all.

## Decision

Generate the four routes as **static HTML at build time** using pure
ClojureScript. The existing `data.cljs`, `components`, `pages`, and `layout`
already produce hiccup as data; a small **static-generation entrypoint** turns
each route's hiccup into an HTML string and writes `public/index.html`,
`public/about/index.html`, `public/projects/index.html`, and
`public/hms-student-highlights/index.html` (or equivalent flat `.html`).

Remove `reagent`, `reitit`, `react`, `react-dom`, and `htmx.org` from
`deps.edn` and `package.json`. No client-side router is needed — nav links
point at real static files. A single `postcss`-free, dependency-free build
step emits all pages from the same pure functions.

## Consequences

### Positive

* Smallest possible artifact: static HTML, no framework JS on the client.
* Best-possible performance and SEO (server-rendered content by construction).
* The pure function graph is preserved and testable without a browser.
* Removes React/Reagami/vDOM as a risk surface; zero runtime library attack
  surface.

### Negative

* Route changes now touch the generator + output files rather than a router
  table (small static set, low cost).
* Content that needs client interactivity later (e.g. sorting/filtering) would
  need a small progressive-enhancement script — acceptable and explicit.

## Rejected alternatives

* **Reagami migration**: adopted in review but rejected — replaces React with
  a smaller framework while still needing hand-rolled routing and
  add-watch plumbing, for no benefit on a static content site.
* **Keep React/Reagent SPA**: keeps an overkill runtime and the JS bundle.

## Verification

* Each generated route contains its content strings (data parity).
* No `reagent`/`reitit`/`react` in `src/` or deps.
* All links resolve to real static files; resume + student links intact.
* Any one route's HTML is parseable and renders the expected content.
