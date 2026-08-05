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

**Status:** awaiting-approval
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

## Architecture constraints

* PDFs are derived artifacts; Typst sources live in the external resume
  workspace and are not vendored into this repo.
* Keep home-page buttons consistent with `public/resume/` filenames.

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
| Specifier | pending | pending |
| Coder | pending | pending |
| Cleaner | pending | pending |
| QA | pending | pending |

## Residual risk

* Typst package versions (`basic-resume`, `fontawesome`) must resolve on this
  machine at render time.
