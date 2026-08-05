---
type: UserStory
title: User story US-04
description: Restructure the home page to feature Teaching Experience, moving Research Interests to About.
tags: [story, home, teaching, research-interests]
status: draft
generated:
  by: human:adazungu
  at: 2026-08-05T00:00:00Z
---

# US-04 Home restructure: Teaching Experience on home, Research Interests on About

**Status:** backlog
**Pack:** three-role (specifier -> coder -> QA)
**Depends on:** US-05 (done) — established the static-site generator
**Design:** swap the home page's "Research Interests" card for a "Teaching
Experience" card; move Research Interests into the About page. Renders as
static HTML via the US-05 generator.

## Story

As a visitor, I should see Jaryt's **teaching experience** prominently on the
home page (it is his current work), and find **Research Interests** on the
About page, so the site mirrors what he does now: teach at Hudson Memorial and
continue course-work teaching (EMCU).

## In scope

### Home page
* Replace the "Research Interests" card (`c/research-interests`) on the home
  page with a **Teaching Experience** card.
* The Teaching Experience card surfaces:
  * **Current:** Computers Teacher (Grades 6-8) at Hudson Memorial School —
    the four active courses (Computers 6/7/8, PLTW App Creators) from
    `/home/slacker/Documents/projects/hms/curriculum/courses/`.
  * **Prior teaching (course-work):** the EMCU lecturer semesters from
    `:teaching-experience` (Foundations I/II, Data Mining/EDA, Regression/AI,
    capstone supervision, EMCU TV, e-journal).
* Data-driven from a teaching map; component renders cards/sections.

### About page
* Add a **Research Interests** section (from `:research-interests`), placed
  logically (e.g. after academic background / professional experience).
* Keep everything already on About (degrees, positions, skills, teaching).

## Out of scope

* Removing research-interests data (it moves, not deleted).
* Any change to resume PDFs (US-02) or the student-highlights page (US-03).
* Reordering other home sections (featured projects, videos, publications stay).

## Acceptance criteria

* Home page no longer shows a "Research Interests" card.
* Home page shows a "Teaching Experience" card with HMS courses and EMCU terms.
* About page shows a "Research Interests" section.
* `npx shadow-cljs release static && node target/static/main.js` compiles and
  regenerates; expected strings in the generated route HTML files.

## Engineering gates (per .okf/software-engineering/)

* **Clean Code**: teaching card is small; reuses/extends existing component(s)
  rather than duplicating markup.
* **Clean Architecture**: teaching data in `data.cljs`; home/about render; no
  business logic in presentation.
* **Functional core**: data maps pure; Research Interests stays data, just
  rendered on About.
* **Make misuse difficult**: no orphaned references — removing the home card
  must not leave dangling requires/components.

## Architecture constraints

* Reuse `c/teaching-experience` where sensible; add a `c/teaching-current`
  component for HMS course cards if needed.
* `research-interests` data unchanged (`data.cljs`); only its render location
  moves (home → about).
* No route changes (this story touches Home + About pages only).

## Feature and QA

* Feature: `features/home-teaching.feature`
* Procedure: `qa/procedures/home-teaching.qa.md`

## Verification commands

```bash
npx shadow-cljs release static && node target/static/main.js
python3 -m http.server -d public
```

## Residual risk

* Teaching Experience cards reuse the `teaching` data shape from US-03/US-05;
  the generator must re-emit all four routes after the page changes.
