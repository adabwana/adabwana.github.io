# QA: Vanilla static site generation (US-05)

**Task:** `us-05-vanilla-static`
**Feature:** `features/static-site.feature`
**Host:** browser (served static)

## Preconditions

* Generator/build step present and produces `public/` HTML.
* `data.cljs` unchanged (content parity reference).
* Static generator decision in `docs/user-stories/us-05-vanilla-static.md`
  (pure `static.cljc` renderer; `core.cljs` Node entrypoint writing the
  four route files) is the approved approach.

## Procedure

1. Run `npx shadow-cljs release static && node target/static/main.js`;
   confirm the four route HTML files
   exist under `public/` (`index.html`, `about/index.html`,
   `projects/index.html`, `hms-student-highlights/index.html`).
2. `grep -rn "reagent\|reitit\|react-dom\|adabwana.htmx" src/ deps.edn
   package.json` — must return nothing in `src/` and deps (note: htmx.org is
   no longer a package dependency; it was a runtime-fetched script).
3. Assert `src/adabwana/static.cljc` contains no host/JS/fs interop (grep for
   `js/`, `fs`, `require` of host namespaces) and `src/adabwana/core.cljs`
   is the only host writer; `htmx.cljs` is gone, and `core.cljs` has no
   reagent/reitit.
4. Serve `public/` (`python3 -m http.server -d public`) and request each
   route: `/`, `/about/`, `/projects/`, `/hms-student-highlights/` — all 200
   `text/html`.
5. Verify each page renders content **without JS**: open one with JS disabled
   or `curl | grep` for its data strings.
6. Check every internal link (nav/footer) and asset href resolves (200),
   including resume PDFs (`/resume/*.pdf`) and student GitLab links (external).
7. Spot-check content parity: the same strings present as pre-migration
   (e.g. taught courses, student names, resume-downloads labels).

## Pass criteria

* All four routes are static HTML at 200.
* No framework dependency in `src/` or `deps.edn`/`package.json`; no
   `core.cljs`/`htmx.cljs`; no host/JS interop in `static.cljc`.
* All internal links resolve; content strings match the pre-migration site.

## Failure handling

Reproduce, record command/output, compare with accepted feature before
changing code.

## Result

**Status:** pending
**Verified by:** pending
**Date:** pending
