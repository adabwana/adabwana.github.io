---
type: UserStory
title: User story US-03
description: Add current-work teaching content and a student web-design highlights page.
tags: [story, teaching, hms, student-highlights]
status: draft
generated:
  by: human:adazungu
  at: 2026-08-05T00:00:00Z
---

# US-03 Current teaching work + student highlights page

**Status:** backlog
**Pack:** trimmed (specifier -> coder -> cleaner -> QA)
**Depends on:** US-02 (backlog)
**Design:** two new surface additions to the site — a Teaching/Current Work
section and a Student Highlights page.

## Story

As a visitor, I want to see Jaryt's current teaching work at Hudson Memorial
and examples of student web-design projects, so the portfolio reflects active
classroom practice, not just past analytics/teaching roles.

## In scope

### A. Teaching / Current Work

* Surface the four active HMS courses from
  `/home/slacker/Documents/projects/hms/curriculum/courses/`:
  - **Computers 6** — Microsoft Office Suite (Word, PowerPoint, Excel)
  - **Computers 7** — computational thinking + web development (problem
    solving, HTML/CSS, multi-page websites)
  - **Computers 8** — functional programming in Clojure (foundations/logic,
    collections/iteration, bakery project, algorithms)
  - **PLTW App Creators** — App Inventor, event-driven programming, game
    design, and capstone apps
* Present as a new section on the About page (or a dedicated Teaching page).
* Content mirrored from the HMS curriculum corpus (units, course purpose) as
  site data — keep it data-driven, not hard-coded markup.
* Shows Jaryt's role: Computers Teacher (Grades 6-8), Hudson Memorial School,
  building curriculum from scratch.

### B. Student Highlights page

* New page (e.g. `/students` or a section) titled "Student Highlights".
* Lists the top-rated web-design projects from each published trimester,
  grouped by trimester, each with: student/team names, project topic, a short
  highlight, and a link to the live project (GitLab Pages).
* Content comes from the posted updates (3 trimesters of winners + runner-ups).

## Out of scope

* Vendoring or hosting student sites (external GitLab Pages links only).
* Importing every student file from the HMS repo (curated highlights only).
* Course materials themselves (slides/exams) — just the course overviews.

## Acceptance criteria

* A Teaching/Current Work section shows the four active courses with their
  units and purpose, data-driven from a `teaching` data map.
* A Student Highlights page lists the published trimester winners with links.
* New route works in the SPA (`/students`), reachable from nav/footer.
* `npx shadow-cljs release app` compiles clean; content in `public/js/main.js`.

## Engineering gates (per .okf/software-engineering/)

* **Clean Code**: sections stay small; helper components render lists.
* **Clean Architecture**: course + student data in `data.cljs`; pages render;
  no business logic in presentation.
* **Functional core**: data maps are pure; adding a course or a student
  highlight is data-only.
* **Make misuse difficult**: student links are a declared map (name → URL);
  rendering a missing URL degrades gracefully (no broken anchor).

## Architecture constraints

* New data maps: `:teaching` (courses) and `:student-highlights` (trimester groups).
* New component(s) under `src/adabwana/components.cljs` / page under
  `src/adabwana/pages/`; route added in `routes.cljs`.
* Student sites are external HTTPS links (`https://25-26-tN-*.gitlab.io/...`),
  target `_blank`.

## Feature and QA

* Feature: `features/teaching-highlights.feature` (new)
* Procedure: `qa/procedures/teaching-highlights.qa.md` (new)

## Verification commands

```bash
npx shadow-cljs release app
```

## Residual risk

* Student sites are external and may be taken down after the school year;
  links should render gracefully if a target 404s.
* Trimester 1 winners listed are for 7th graders; 8th-grade trimester-1 work
  may be added later — keep the model per-trimester/groups so it extends.
