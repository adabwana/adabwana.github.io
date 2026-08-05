# QA: Refresh resume download PDFs

**Task:** `us-01-refresh-resume-pdfs`
**Feature:** `features/resume-pdfs.feature`
**Host:** browser

## Preconditions

* `npx shadow-cljs release app` succeeds.
* Typst sources render in the resume workspace.

## Procedure

1. Render the PDFs from the resume workspace:
   `cd ~/Documents/projects/resume/typst && typst compile resume_industry.typ && typst compile resume_full.typ`
2. Copy both PDFs into `public/resume/` with the site's filenames.
3. Serve the built site (`python3 -m http.server`).
4. Confirm the home page shows "Download Industry Resume" and "Download Full Resume" and no academic link.
5. Open each PDF asset over HTTP and confirm it is a valid PDF.

## Pass criteria

* Both `/resume/*.pdf` URLs return 200 with `application/pdf`.
* Industry PDF text includes "Hudson Memorial School" and a master's analytics degree; no PhD.
* Home page has no `/resume/salvo_jaryt_resume_academic.pdf` link.
* Code-level gate: home-page link targets are declared once in a small data
  map and rendered by a helper (per `docs/user-stories/us-01-refresh-resume-pdfs.md`
  engineering gates); no duplicated button markup, no hidden host effects,
  no stale academic reference in any source file.

## Failure handling

Reproduce the failure, record command/output, and compare with the accepted
feature before changing code.

## Result

**Status:** PASS (2026-08-05)
**Verified by:** swarmforge-QA (b12e6deff7)
**Date:** 2026-08-05
