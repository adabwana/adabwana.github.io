---
type: Template
title: Ordered story backlog
description: Dependency-aware story list for one-at-a-time swarm execution.
tags: [backlog, stories, adabwana]
status: draft
generated:
  by: human:adazungu
  at: 2026-08-05T00:00:00Z
---

# adabwana.github.io backlog

## Status legend

`backlog` -> `in-specifier` -> `awaiting-approval` -> `in-implementation` ->
`in-cleanup` -> `in-qa` -> `done`

## Rules

* One story is active in the full pipeline at a time.
* Each story is an externally visible behavior slice.
* The next story waits for QA and completion evidence.

## Ordered stories

| Order | ID | Story | Status | Depends on |
|------:|----|-------|--------|------------|
| 1 | US-01 | Refresh resume download PDFs (industry + full) | done | none |
| 2 | US-02 | Add industry one-page resume download (typst) + extensible resume styles | done | US-01 |
| 3 | US-03 | Current-work (HMS curriculum) + student highlights page | backlog | US-02 |
| 4 | US-04 | Home-page restructure: Teaching Experience in place of Research Interests (Research Interests → About) | backlog | US-03 |

## US-02 notes

* Asset: one-page industry resume from the resume workspace
  (`~/Documents/projects/resume/typst/resume_industry.typ` as a one-page
  fram/ing, or a dedicated one-page industry typst source). The AMN
  workforce-strategy file demonstrates one-page style but is **not** the
  deliverable name — US-02 ships an *industry* one-pager.
* Generalize: make `resume-downloads` data map support any number of resume
  styles without code changes, so future typst resumes (variants for
  different audiences) drop in via data + a rendered PDF.
* Source of truth: typst files under `/home/slacker/Documents/projects/resume/typst/`.

## US-03 notes

* Context: current teaching work lives in
  `/home/slacker/Documents/projects/hms/curriculum/courses/`
  (computers-6 = Office Suite, computers-7 = web dev, computers-8 = Clojure,
  pltw-app-creator = App Inventor).
* New page: **Student Highlights** — top-rated trimester web-design projects
  (Trimester 1, 2, 3) published on the site, each linking to the student's
  GitLab Pages site.
* New page/section: **Teaching / Current Work** surfacing the four active
  courses and their units from the HMS curriculum corpus.
* Student project links are external GitLab Pages URLs (keep as external
  links; do not vendor student sites).

## Parallel candidates

US-02 must land before US-03 only if US-03's page builds on the same
`resume-downloads`/data-map pattern. Independent slices (e.g. a standalone
student-highlights page) may be re-sequenced if US-02 is blocked.
