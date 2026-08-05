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

**Status:** PASS
**Verified by:** QA
**Date:** 2026-08-05

## Evidence

* **Build (Static 01/07)** — `npx shadow-cljs release static` compiles clean
  (0 warnings, 58 files); `node target/static/main.js` writes all four route
  HTML files; regeneration under the QA worktree is byte-identical to the
  committed files (working tree clean). `public/js/` SPA bundle is gone.
* **Served routes (Static 05)** — `python3 -m http.server -d public`; `/`,
  `/about/`, `/projects/`, `/hms-student-highlights/` all return 200
  `text/html`; `/nonexistent` 404 (expected).
* **No framework (Static 02)** — `reagent`, `reitit`, `react`, `react-dom`,
  `htmx` absent from `src/`, `deps.edn`, `package.json`; generated HTML and
  compiled `target/static/main.js` carry 0 framework references; only the
  intended Bootstrap/Icons/highlight.js CDN tags remain.
* **Links (Static 03)** — 38 internal hrefs/src across the four pages resolve
  (31 direct 200, 7 clean 301-to-200 directory redirects, zero 404s); all
  three `public/resume/*.pdf` endpoints 200 valid PDF documents (full 3-page,
  onepage 1-page, industry 2-page); `css/styles.css` + `img/headshot.jpg`
  200. Nav/footer and resume labels render from the single `site-pages` map
  and `nav-links`/`asset-href` helpers — each link target declared once.
* **Content parity (Static 04)** — `src/adabwana/data.cljs` sha256
  `bbe8f49b` is byte-identical to pre-migration commit `744d988`. All four
  pages contain their expected data strings: home (nav/JARYT SALVO/data
  scientist), about (Hudson Memorial School, Computers Teacher, BGSU, four
  courses + units), projects (crime/ML/functional programming), and
  hms-student-highlights (all student names incl. Bradley, Jamison, Marcus,
  Kevin, Isabelle, Makenzie; project names Cats, Dinosaurs, Marine Animals;
  Trimester groups).
* **Pure core / host confinement (Static 06)** — `src/adabwana/static.cljc`
  requires only `clojure.string`; no `js/`, DOM, `fs`, or node globals;
  `core.cljs` is the only host writer (Node `fs`). No event handlers, atoms,
  or `js/` interop anywhere in `components`/`pages`/`layout`/`routes`.
* **No client entrypoint (Static 07)** — `src/adabwana/htmx.cljs` deleted;
  `core.cljs` contains no reagent/reitit; `routes.cljs` is data-only; no
  client router remains.
* **Unit suite** — `clojure -M:test` 32/32 green (incl. 9 hardender negative
  cases, escaping and link invariants).
* **Residual (parity-preserved, out of accepted scope)** — legacy
  `public/404.html` reitit-era redirect, `public/test/index.html` dead runner,
  `public/htmx/*` orphans, and the `/about#presentations` anchor with no
  matching About target; all identical to pre-migration behavior.
