Feature: Teaching content and HMS student highlights

  The site surfaces Jaryt's current teaching work at Hudson Memorial (four
  courses) and a single page of every published trimester's top student
  web-design projects, each with an overview and a GitLab link.

  Background:
    Given the site has been built with `npx shadow-cljs release app`

  Scenario: Teaching 01 current courses shown
    Given the site has teaching data for the four active HMS courses
    When a visitor opens the page showing teaching
    Then Computers 6, Computers 7, Computers 8, and PLTW App Creators are listed
    And each course shows its purpose and its units

  Scenario: Teaching 02 courses data-driven
    Given teaching courses are declared in a data map
    When the page renders
    Then no course is hard-coded in the page component
    And adding a course is a data-only change

  Scenario: Highlights 01 single page with all trimesters
    Given a HMS student highlights page exists at /hms-student-highlights
    When a visitor opens that page
    Then all three trimesters (1, 2, 3) are shown
    And they are grouped by year (2025-26) then trimester

  Scenario: Highlights 02 each project has overview and link
    Given a student highlights entry
    Then it shows a brief overview and a GitLab link to the live project

  Scenario: Highlights 03 external links open in new tab
    Given a student project link
    When the visitor follows it
    Then it opens the external GitLab Pages site in a new tab

  Scenario: Highlights 04 graceful missing link
    Given a student entry without a URL
    When the page renders
    Then it does not produce a broken anchor
