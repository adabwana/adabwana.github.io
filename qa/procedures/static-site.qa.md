# QA: Vanilla static site generation (US-05)

**Task:** `us-05-vanilla-static`
**Feature:** `features/static-site.feature`
**Host:** browser (served static)

## Preconditions

* Generator/build step present and produces `public/` HTML.
* `data.cljs` unchanged (content parity reference).

## Procedure

1. Run the generator; confirm four route HTML files exist under `public/`.
2. `grep -rn "reagent\|reitit\|react-dom\|adabwana.htmx" src/ deps.edn
   package.json` — must return nothing in `src/` and deps.
3. Serve `public/` (`python3 -m http.server`) and request each route:
   `/`, `/about/`, `/projects/`, `/hms-student-highlights/` — all 200 `text/html`.
4. Verify each page renders content **without JS**: open one with JS disabled
   or `curl | grep` for its data strings.
5. Check every internal link (nav/footer) resolves (200), including resume
   PDFs and student GitLab links.
6. Spot-check content parity: the same strings present as pre-migration
   (e.g. taught courses, student names, resume-downloads labels).

## Pass criteria

* All four routes are static HTML at 200.
* No framework dependency in `src/` or `deps.edn`/`package.json`.
* All internal links resolve; content strings match the pre-migration site.

## Failure handling

Reproduce, record command/output, compare with accepted feature before
changing code.

## Result

**Status:** pending
**Verified by:** pending
**Date:** pending
