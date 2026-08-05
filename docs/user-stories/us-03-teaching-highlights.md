---
type: UserStory
title: User story US-03
description: Add current teaching-work content and a year/trimester student web-design highlights page.
tags: [story, teaching, hms, student-highlights]
status: draft
generated:
  by: human:adazungu
  at: 2026-08-05T00:00:00Z
---

# US-03 Current teaching work + HMS student highlights page

**Status:** done
**Pack:** trimmed (specifier -> coder -> cleaner -> QA)
**Depends on:** US-02 (done)
**Design:** two new surface additions — a Teaching/Current Work section and a
single **HMS Student Highlights** page with year + trimester sectioning.

## Story

As a visitor, I want to see Jaryt's current teaching work at Hudson Memorial
and every published trimester's top student web-design projects on one page,
so the portfolio reflects active classroom practice and real student outcomes.

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
* Present as a data-driven section (About page or dedicated Teaching page).
* Content (units, purpose) mirrored from the HMS corpus as site data.
* Shows Jaryt's role: Computers Teacher (Grades 6-8), Hudson Memorial School,
  curriculum built from scratch.
* The `teaching` data map established here is reused by US-04 (home page
  "Teaching Experience" card).

### B. HMS Student Highlights page (single page)

* **Route:** `/hms-student-highlights` (exact path).
* Single page listing **all published trimesters** of top-rated web-design
  projects.
* **Sectioning:** by **year** then **trimester** (e.g. "2025-26 · Trimester 1",
  "2025-26 · Trimester 2", "2025-26 · Trimester 3").
* Each student's work shows: **brief overview** (what was highlighted) and the
  **GitLab link** to the live project.
* All project links/overviews below are the canonical source — embed them
  verbatim in the data map.

#### 2025-26 · Trimester 1 (Web Design unit — 7th graders)

| Class | Students | Overview | Live link |
|-------|----------|----------|-----------|
| A | Bradley & Jamison | Best Animals — beautiful page; highlights include thematic coloring of webpages based on the animal itself | https://25-26-t1-a-fc1e88.gitlab.io/index.html |
| B | Maxwell & Chris | Community event in Southern New Hampshire — highlights include lovely borders on each page and image, nice documentation on each event | https://25-26-t1-b-e51595.gitlab.io/ |
| D | Jackson & Caleb | Foods Around the World — highlights include nice containers around some of the recipes | https://25-26-t1-d-71deb1.gitlab.io/index.html |
| F | Seth & Cody | Food for Travel — highlights include nice navigation, good structure, and horizontal bars separating sections | https://25-26-t1-f-51f750.gitlab.io/index.html |

#### 2025-26 · Trimester 2 (Web Design course)

| Class | Students | Overview | Live link |
|-------|----------|----------|-----------|
| A (winner) | Marcus & Kevin | Cats — beautiful page highlighting cats from all walks of life: house cats, tundra cats, savanna cats | https://25-26-t2-a1-09214c.gitlab.io/ |
| A (runner-up) | Dante & Sam | Dinosaurs — wonderful website; highlights include thematic coloring of background and navigation links for each dinosaur category | https://25-26-t2-a2-d2cf63.gitlab.io/ |
| D | Gavin | Skis — an adventurous page; highlights include a funny contact-me section | https://25-26-t2-d-da565b.gitlab.io/ |

#### 2025-26 · Trimester 3 (Web Design course)

| Class | Students | Overview | Live link |
|-------|----------|----------|-----------|
| A (winner) | Isabelle & Makenzie | Marine Animals — beautiful page highlighting seals, whales, sharks, and turtles with lots of research behind the scenes and nicely structured, organized, styled pages | https://25-26-t3-a1-653e27.gitlab.io/ |
| A (runner-up) | Lily | Hockey goalkeeping — wonderful website covering gear recommendations, top goalies from the last couple of decades, and how to position by squaring-up | https://25-26-t3-a2-6260db.gitlab.io/ |
| D | Sophia | Freya Skye fan page — highlights Skye's variety of talents: acting in Zombies 4, top songs on streaming services, a 2026 tour | https://25-26-t3-d-186d41.gitlab.io/ |

## Out of scope

* Vendoring or hosting student sites (external GitLab Pages links only).
* Importing every student file from the HMS repo (curated highlights only).
* Course materials themselves (slides/exams) — just the course overviews.

## Acceptance criteria

* A Teaching/Current Work section shows the four active courses with units and
  purpose, data-driven from a `teaching` data map.
* A **single** `/hms-student-highlights` page shows **all three trimesters**,
  grouped by year then trimester.
* Each student entry has a brief overview and a working GitLab link
  (`target="_blank"`).
* The page is reachable from navigation/footer.
* `npx shadow-cljs release app` compiles clean; content in `public/js/main.js`.

## Engineering gates (per .okf/software-engineering/)

* **Clean Code**: sections stay small; helper components render lists.
* **Clean Architecture**: course + student data in `data.cljs`; pages render;
  no business logic in presentation.
* **Functional core**: data maps are pure; adding a course or student is data-only.
* **Make misuse difficult**: student links are a declared map (name → URL);
  rendering a missing/blank URL degrades gracefully (no broken anchor).

## Architecture constraints

* New data maps: `:teaching` (courses) and `:student-highlights`
  (grouped year → trimester → entries `{students overview url}`).
* New page under `src/adabwana/pages/` (e.g. `hms-student-highlights.cljs`);
  component(s) in `components.cljs`; route in `routes.cljs`.
* Student links are external HTTPS GitLab Pages URLs, `target="_blank"`.

## Feature and QA

* Feature: `features/hms-student-highlights.feature`
* Procedure: `qa/procedures/hms-student-highlights.qa.md`

## Verification commands

```bash
npx shadow-cljs release app
```

## Handoff evidence

| Stage | Commit | Result |
|-------|--------|--------|
| Specifier | `ca83494` | Spec + feature + QA procedure + source data approved |
| Coder | `89c5c96` | Implemented: `:teaching`/`:student-highlights` data maps, highlights page + route, teaching section |
| Cleaner | `e01522b` | Cleanup: unused requires removed, EOF newlines, no behavior change |
| QA | `db14829` | PASS — build clean, all scenarios through rendered UI, 10 links 200 + `target="_blank"`, code gates |
| Merge | `a5b8776` | Merged to main; deployed by gh-pages on push |

## Residual risk

* Student sites are external and may be taken down after the school year;
  links must render gracefully if a target 404s.
* New trimesters/years extend the same year → trimester → entries model.
