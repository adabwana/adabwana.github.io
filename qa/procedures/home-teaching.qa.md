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

**Status:** pending
**Verified by:** pending
**Date:** pending
