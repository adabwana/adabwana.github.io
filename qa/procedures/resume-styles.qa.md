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

**Status:** pending
**Verified by:** pending
**Date:** pending
