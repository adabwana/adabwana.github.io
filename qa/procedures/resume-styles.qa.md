# QA: Resume style downloads (US-02)

**Task:** `us-02-resume-styles`
**Feature:** `features/resume-styles.feature`
**Host:** browser

## Preconditions

* Resume workspace has `typst/resume_industry_onepage.typ` (the generalized
  one-page industry source).
* `npx shadow-cljs release app` succeeds.

## Procedure

1. Compile the one-page industry resume from the resume workspace:
   `cd ~/Documents/projects/resume/typst && typst compile resume_industry_onepage.typ`,
   then copy `resume_industry_onepage.pdf` to
   `public/resume/salvo_jaryt_resume_industry_onepage.pdf`.
2. Verify the PDF is exactly 1 page (`pdfinfo ... | grep Pages`).
3. Confirm `resume-downloads` in `data.cljs` has the new entry plus existing
   industry/full entries.
4. Serve the built site; confirm home page shows all three download buttons.
5. Confirm each `/resume/*.pdf` returns 200 with `application/pdf`.
6. Code check: home page renders downloads from the data map only — no
   per-style branch, no hard-coded new href.

## Pass criteria

* One-page PDF present, 1 page, linked from home.
* Industry + full links from US-01 still work (no regression).
* Adding a style entry is data-only (verified by reading the component).

## Failure handling

Reproduce the failure, record command/output, and compare with the accepted
feature before changing code.

## Result

**Status:** PASS (2026-08-05)
**Verified by:** swarmforge-QA
**Date:** 2026-08-05

### Evidence

* Build: `npx shadow-cljs release app` compiled clean (exit 0; one benign
  upstream deprecation warning in spec-tools).
* HTTP (python3 http.server + SPA fallback, rendered in headless Chromium):
  - Home `/` renders "Download One-Page Industry Resume", "Download Industry
    Resume", "Download Full Resume" buttons, each `<a download>` to its PDF.
  - `/about` renders About Me / Academic Background / Professional Experience /
    Technical Skills / Teaching Experience.
  - `/projects` renders Project Spotlight / Technical Projects / Publications &
    Presentations.
* PDF endpoints over HTTP all return `200 application/pdf`:
  - `/resume/salvo_jaryt_resume_industry_onepage.pdf` (1 page — the industry resume)
  - `/resume/salvo_jaryt_resume_full.pdf` (3 pages)
* `resume-downloads` in `data.cljs` has one entry per style (`:industry` =
  the one-page industry resume, `:full`); home renders them generically via
  `resume-download-links` (no per-style branch, no hard-coded new href).
* New content strings present in `public/js/main.js`; no stale academic resume
  link in any source file or bundle.
* QA fix: refreshed `public/resume/salvo_jaryt_resume_industry_onepage.pdf`
  from today's `typst compile resume_industry_onepage.typ` render (content
  identical; only embedded CreationDate changed). Page count verified = 1.
