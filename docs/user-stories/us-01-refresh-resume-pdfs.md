---
type: Template
title: User story US-01
description: Refresh the site's resume download PDFs from current Typst sources.
tags: [story, resume, typst, pdf]
status: draft
generated:
  by: human:adazungu
  at: 2026-08-05T00:00:00Z
---

# US-01 Refresh resume download PDFs

**Status:** done
**Pack:** trimmed (specifier -> coder -> cleaner -> QA)
**Depends on:** none
**Design:** industry + full resume PDFs under `public/resume/`

## Story

As a visitor to Jaryt's portfolio, I want current, download-ready resume PDFs,
so that my industry and full resume reflect the same updated content as the
site (Hudson Memorial role, GRA through Aug 2025, ACJS 2025, MSc/MA/BSc).

## In scope

* Render `resume_industry.typ` -> `public/resume/salvo_jaryt_resume_industry.pdf`.
* Render `resume_full.typ`    -> `public/resume/salvo_jaryt_resume_full.pdf`.
* Update `home.cljs` download buttons (industry + full), remove the academic link.
* Keep `features/resume-pdfs.feature` scenarios green.

## Out of scope

* AMN workforce-strategy one-pager (deferred).
* Any change to `data.cljs` site content.
* Any change to the Typst sources themselves.

## Acceptance criteria

* Industry PDF exists under `public/resume/` and the home button links to it.
* Full PDF exists under `public/resume/` and the home page links to it.
* No academic resume link remains on the home page.
* Rendered PDFs contain Hudson Memorial School and no PhD claim.

## Engineering gates (per .okf/software-engineering/)

Every code change in this story is reviewed against the project's craft
criteria, not just the rendered output:

* **Reader-first / Clean Code** (`.okf/software-engineering/clean-code.md`,
  `principles.md`): changes to `home.cljs` / `components.cljs` stay small,
  well-named, one-thing functions; no clever compression; data shapes stay
  obvious.
* **Clean Architecture boundaries** (`clean-architecture.md`,
  `architecture.md`): `home.cljs` renders links from file names only — no
  business logic, no inline string search, no new data coupling. Content
  stays in `data.cljs`; presentation stays in components/pages.
* **Functional core / effects** (`functional-core.md`): all PDF-link logic is
  pure data; no hidden host effects, no external calls in render code.
* **Immutability** (`functional-design.md`): no mutation of shared state; the
  home page describes static link data.
* **Make misuse difficult** (`jane-street-house-style.md`): derive button link
  targets from one declared map (`{industry, full}`) rather than ad-hoc
  per-pattern strings, so a renamed asset can't silently break a link.

These gates substitute for the architect role in the trimmed chain; the
cleaner owns them and QA re-verifies the code-level criteria alongside the
user-surface checks.

## Architecture constraints

* PDFs are derived artifacts; Typst sources live in the external resume
  workspace and are not vendored into this repo.
* Keep home-page buttons consistent with `public/resume/` filenames.
* Home-page links are declared once (one data map), rendered by a small
  helper — no duplicated button markup.

## Feature and QA

* Feature: `features/resume-pdfs.feature`
* Procedure: `qa/procedures/resume-pdfs.qa.md`

## Verification commands

```bash
cd ~/Documents/projects/resume/typst && typst compile resume_industry.typ && typst compile resume_full.typ
```

## Handoff evidence

| Stage | Commit | Result |
|-------|--------|--------|
| Specifier | `0a42cd02` | Spec + engineering gates approved |
| Coder | `a373dea1` | Implemented: PDFs rendered, links via declared map, academic removed |
| Cleaner | `b12e6def` | Cleanup: helper extraction, dead code removed (`xxxcore.cljs`), comment fix |
| QA | `b12e6def` (verified) | PASS — all acceptance criteria + gates; no changes needed |
| Merge | `f9222b9` | Merged to main; deployed by gh-pages on push |

## Residual risk

* shadow-cljs release has run-to-run symbol-ordering nondeterminism in
  `public/js/main.js` (QA observation, no behavior impact).
* Typst package versions must resolve at render time (rendered 2026-08-05).
