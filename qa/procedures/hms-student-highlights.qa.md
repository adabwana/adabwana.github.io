# QA: Teaching content and HMS student highlights (US-03)

**Task:** `us-03-teaching-highlights`
**Feature:** `features/hms-student-highlights.feature`
**Host:** browser

## Preconditions

* `npx shadow-cljs release app` succeeds.
* Teaching data mirrors `/home/slacker/Documents/projects/hms/curriculum/courses/`.
* Student highlights data matches
  `docs/user-stories/student-highlights-source.md`.

## Procedure

1. Build: `npx shadow-cljs release app` (must compile without errors).
2. Serve the built site (`python3 -m http.server`).
3. Confirm teaching section lists the four courses (Computers 6/7/8, PLTW App
   Creators) with purpose + units.
4. Open `/hms-student-highlights`: confirm all three trimesters under
   2025-26, each project with overview + GitLab link.
5. Confirm student links are external (`target="_blank"`), all 10 URLs from
   the source doc resolve over HTTP (200).
6. Code check: `:teaching` and `:student-highlights` are pure data maps;
   pages render via helpers; no hard-coded course/project markup; missing URL
   renders gracefully.

## Pass criteria

* Teaching section and highlights page render all declared content.
* 10 student project links all return 200 and open in a new tab.
* Adding a course or project is data-only (verified by reading components).
* `/hms-student-highlights` is reachable from navigation/footer.

## Failure handling

Reproduce the failure, record command/output, and compare with the accepted
feature before changing code.

## Result

**Status:** PASS (2026-08-05)
**Verified by:** swarmforge-QA
**Date:** 2026-08-05

### Evidence

* Build: `npx shadow-cljs release app` compiled clean (exit 0; one benign
  upstream deprecation warning in spec-tools). Note: the QA worktree lacks
  `node_modules/` (gitignored); `npm install` first, else the build fails
  with "react-dom not available".
* HTTP (python3 http.server + SPA fallback, rendered in headless Chromium,
  committed `public/js/main.js`):
  - `/hms-student-highlights` renders "HMS Student Highlights", lead line,
    three trimester cards under 2025-26 ("Trimester 1/2/3"), and all 10
    student entries with overview text and "View Live Project" buttons.
  - All 10 student links have `target="_blank"` and all 10 resolve over
    HTTP (200): 25-26-t1-a-fc1e88, 25-26-t1-b-e51595, 25-26-t1-d-71deb1,
    25-26-t1-f-51f750, 25-26-t2-a1-09214c, 25-26-t2-a2-d2cf63,
    25-26-t2-d-da565b, 25-26-t3-a1-653e27, 25-26-t3-a2-6260db,
    25-26-t3-d-186d41.
  - `/about` renders "Current Teaching Work" with Computers Teacher
    (Grades 6-8), Hudson Memorial School, curriculum built from scratch,
    and the four courses (Computers 6/7/8, PLTW App Creators) each with
    subject, overview, and units (Microsoft Word/PowerPoint/Excel, Problem
    Solving, HTML & CSS, Multi-Page Websites, Foundations & Logic,
    Collections & Iteration, Bakery Project, Algorithms, App Creators
    Foundations, Game Design, Advanced Development, Great App Challenge).
  - `/` renders the three resume download buttons (one-page, industry,
    full) and the navbar "Student Highlights" link to
    `/hms-student-highlights`; `/about` also shows Academic Background,
    Professional Experience, Technical Skills, Teaching Experience.
  - `/projects` renders Project Spotlight, Technical Projects,
    Publications, Video Presentations (no regression).
* PDF endpoints over HTTP all return `200 application/pdf` (industry 2
  pages, full 3 pages, one-page 1 page); `/resume/salvo_jaryt_resume_academic.pdf`
  correctly 404s (no academic resume link).
* New content strings present in `public/js/main.js` (committed bundle):
  "HMS Student Highlights", all 10 student URLs, all four course names.
* Code-level gates:
  - `:teaching` and `:student-highlights` are pure data maps in `data.cljs`
    (no rendering, no JS interop).
  - Pages render via helpers (`c/teaching-current`, `c/student-highlights`);
    no hard-coded course/project markup; adding a course or project is a
    data-only change.
  - `student-highlights` renders the URL inside `(when (:url entry) ...)` —
    a missing/blank URL produces no anchor (graceful degradation).
  - No stale academic resume reference in any source file or bundle; no
    business logic in presentation namespaces; no hidden host effects in
    data/components.
* Committed `public/js/main.js` renders all US-03 content (verified via
  headless Chromium against the committed bundle, not a local rebuild).
