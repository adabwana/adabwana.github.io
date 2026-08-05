---
type: UserStory
title: User story US-02
description: Add an industry one-page resume download and make resume styles extensible.
tags: [story, resume, typst, one-page]
status: draft
generated:
  by: human:adazungu
  at: 2026-08-05T00:00:00Z
---

# US-02 Add industry one-page resume + extensible resume styles

**Status:** backlog
**Pack:** trimmed (specifier -> coder -> cleaner -> QA)
**Depends on:** US-01 (done)
**Design:** one-page industry resume PDF under `public/resume/`, with the
site's download list able to accept any number of resume styles.

## Story

As a visitor, I want a **one-page industry resume** download, so that
recruiters get a concise single-page framing, and so future resume styles can
be added to the site without code changes.

## In scope

* Produce a **one-page industry resume** PDF from the resume workspace
  (`~/Documents/projects/resume/typst/`). The exact source is either a new
  one-page variant of `resume_industry.typ` or a dedicated one-page typst
  file — the deliverable is the rendered one-page *industry* PDF, **not** the
  AMN file (which stays a reference for one-page style only).
* Place it under `public/resume/` with a conventional name, e.g.
  `salvo_jaryt_resume_industry_onepage.pdf`.
* Generalize `resume-downloads` (currently `data.cljs`) to support N resume
  styles: each entry is a `{label href}` pair; adding a resume is a data +
  PDF change only, no component/code change.
* Add the one-page entry to the home page download buttons.

## Out of scope

* The AMN workforce-strategy one-pager as a site asset (reused only as a
  one-page layout reference).
* Editing the Typst sources' content (content lives in the resume workspace).
* The student-highlights page (US-03).

## Acceptance criteria

* One-page industry PDF exists under `public/resume/` and is linked on the home page.
* The one-page PDF is exactly 1 page.
* `resume-downloads` supports an arbitrary number of styles with no code
  changes per new entry (data-only extension).
* Existing industry + full links continue to work (US-01 not regressed).
* `npx shadow-cljs release app` compiles clean; new content in `public/js/main.js`.

## Engineering gates (per .okf/software-engineering/)

* **Clean Code**: the download-list extension pattern stays small; no
  duplicated button markup; names reveal intent.
* **Clean Architecture**: home page renders links from the data map only; no
  business logic in presentation.
* **Functional core**: resume-downloads remains pure data; adding a style is
  data-only.
* **Make misuse difficult**: rendering must not hard-code a per-style branch
  — a new map entry automatically renders.

## Architecture constraints

* Resume PDFs are derived artifacts; typst sources live in the resume workspace.
* Filenames under `public/resume/` follow `salvo_jaryt_resume_<style>.pdf`.
* The extensible map keeps `:industry`/`:full` keys and adds the one-page key;
  existing tests/links (if any) must not break.

## Feature and QA

* Feature: `features/resume-styles.feature` (new)
* Procedure: `qa/procedures/resume-styles.qa.md` (new)

## Verification commands

```bash
cd ~/Documents/projects/resume/typst && typst compile <one-page industry source>
npx shadow-cljs release app
```

## Residual risk

* One-page layout may require trimming content in the typst source (done in
  the resume workspace, not here); page-count must be verified at render.
