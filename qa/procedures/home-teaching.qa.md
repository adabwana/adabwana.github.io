# QA: Home teaching experience + About research interests (US-04)

**Task:** `us-04-home-teaching`
**Feature:** `features/home-teaching.feature`
**Host:** browser (served static)

## Preconditions

* Static site generated via `npx shadow-cljs release static && node target/static/main.js`.
* `data.cljs` content unchanged (teaching/positions/research-interests maps intact).

## Procedure

1. Regenerate the static site.
2. Serve `public/` (`python3 -m http.server -d public`).
3. Home (`/`): assert it shows Teaching Experience with the four HMS courses +
   EMCU terms; assert it does **not** contain a Research Interests section.
4. About (`/about/`): assert it contains Research Interests with topics and
   subtopics, and that degrees/positions/skills/teaching/current-teaching still
   render.
5. Assert no framework references in served HTML
   (`grep -c "reagent\|reitit\|react-dom\|htmx"` per route = 0).
6. Code check: `:research-interests` is still pure data in `data.cljs`; pages
   render it via helpers; no orphaned component requires.

## Pass criteria

* Home shows Teaching Experience, no Research Interests.
* About shows Research Interests + all prior sections.
* All routes 200, zero framework references.

## Failure handling

Reproduce, record command/output, compare with accepted feature before
changing code.

## Result

**Status:** PASS
**Verified by:** QA
**Date:** 2026-08-05

Independent user-surface verification through the served static site over HTTP
(per the QA gate in `.okf/workflow/quality-gates.md`):

* `npx shadow-cljs release static` compiles clean (0 warnings); the Node
  entrypoint regenerates the four `public/` route files byte-identical to the
  committed output.
* Home `/` shows a "Teaching Experience" area: `c/teaching-current` (Computers
  6/7/8, PLTW App Creators, Hudson Memorial School) plus `c/teaching-experience`
  filtered to the EMCU prior-teaching terms (Foundations I/II, Data Mining/EDA,
  Regression/AI, capstone supervision). No "Research Interests" section on
  home.
* About `/about/` shows a "Research Interests" section with all three topics and
  their subtopics; degrees, positions, skills, current teaching, and prior
  teaching all still render.
* All four routes serve 200 `text/html` with zero reagent/reitit/react-dom/htmx
  references; all three `/resume/*.pdf` links resolve 200 as valid PDFs.
* Code-level gates: `:research-interests` remains pure data in `data.cljs`
  (single definition) and renders only on About via the `c/research-interests`
  helper; home reuses existing `c/teaching-current` + `c/teaching-experience`
  helpers with no duplicated button markup; no business logic or host effects
  in `components`/`pages`; no stale academic references on home or About.
* `clojure -M:test` 32/32 green.
