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

**Status:** pending
**Verified by:** pending
**Date:** pending
