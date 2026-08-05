---
type: Template
title: Project design specification
description: Design, architecture, and verification contract for the adabwana.github.io portfolio.
tags: [design, specification, adabwana]
status: accepted
generated:
  by: human:adazungu
  at: 2026-08-05T00:00:00Z
---

# adabwana.github.io design specification

**Date:** 2026-08-05
**Status:** accepted
**Stack:** ClojureScript / shadow-cljs / Reagent / reitit / htmx / Bootstrap 5, GitHub Pages

## Purpose

A personal data-science and ML-engineering portfolio: professional summary,
experience, projects, publications, presentations, skills, and downloadable
resume PDFs. It mirrors the content curated in the resume workspace.

## Goals

* Site content stays in sync with `resume/atoms` + `resume/assemblies`.
* Industry-frame narrative (Hudson Memorial, GRA→Aug 2025, ACJS 2025).
* Clean single-page app with Home, About, Projects routes.

## Non-goals

* Backend, persistence, or user accounts (static site).
* Server-side rendering (client-rendered SPA via shadow-cljs).
* Desktop host (browser only).

## Architecture

* Pure content in `src/adabwana/data.cljs`; presentation in
  `src/adabwana/components.cljs`; pages in `src/adabwana/pages/`; routing in
  `routes.cljs`; init in `core.cljs`.
* CI builds `shadow-cljs release app` and deploys `public/` to GitHub Pages.

## Public surface

* `/` Home: name, contact, research interests, featured projects, videos, publications.
* `/about` About: degrees, positions, skills, teaching experience.
* `/projects` Projects: spotlight + full project list, publications, presentations.

## Domain invariants

* No PhD degree is displayed (industry frame; PhD unpursued since Aug 2025).
* Contact reflects the resume atoms (LinkedIn `/in/jaryt-d-s-703218191`).
* PDFs under `public/resume/` are named by convention
  `salvo_jaryt_resume_<frame>.pdf`.

## Host behavior

### Browser

Build: `npx shadow-cljs release app`. Dev: `npm run watch`. Serves `public/`.

## Testing and QA contract

* Build check: `npx shadow-cljs release app` (no errors).
* QA: serve `public/`, verify each route and PDF asset over HTTP.
* Content: confirm key strings present in `public/js/main.js`.
