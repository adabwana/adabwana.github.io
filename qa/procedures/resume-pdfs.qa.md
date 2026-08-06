# QA: Refresh resume download PDFs

**Task:** `us-01-refresh-resume-pdfs`
**Feature:** `features/resume-pdfs.feature`
**Host:** browser

## Preconditions

* `npx shadow-cljs release app` succeeds.
* Typst sources render in the resume workspace (compile with
  `--font-path <resume>/typst/fonts` so Font Awesome icons embed).

## Procedure

1. Render the one-page PDFs from the resume workspace:
   `cd ~/Documents/projects/resume/typst && typst compile --font-path fonts resume_industry.typ && typst compile --font-path fonts resume_education.typ`
2. Copy both PDFs into `public/resume/` as `salvo_jaryt_resume_industry.pdf`
   and `salvo_jaryt_resume_education.pdf`.
3. Serve the built site (`python3 -m http.server`).
4. Confirm the home page shows "Download Industry Resume" and
   "Download Education Resume" buttons (and no stale full/onepage links).
5. Open each PDF asset over HTTP and confirm it is a valid one-page PDF.

## Pass criteria

* Both `/resume/*.pdf` URLs return 200 with `application/pdf` (1 page each).
* Industry PDF is one-page with the analytics/consulting + teaching framing;
  education PDF is one-page with the teaching/research framing; no PhD claim.
* Home page has no `/resume/salvo_jaryt_resume_onepage.pdf` or
  `/resume/salvo_jaryt_resume_full.pdf` links.
* Code-level gate: home-page link targets are declared once in a small data
  map and rendered by a helper; no duplicated button markup, no stale
  references in any source file.

## Failure handling

Reproduce the failure, record command/output, and compare with the accepted
feature before changing code.

## Result

**Status:** PASS (2026-08-05)
**Verified by:** swarmforge-QA (b12e6deff7)
**Date:** 2026-08-05
