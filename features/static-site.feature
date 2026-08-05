Feature: Vanilla static site generation

  The portfolio is served as static HTML generated from pure ClojureScript
  with no client-side framework (no React, Reagami, reitit, or htmx).

  Background:
    Given the project has pure hiccup functions in src/adabwana/
    And a static-site generator that emits HTML per route

  Scenario: Static 01 four routes generated
    Given the generator has been run
    Then HTML files exist for /, /about, /projects, and /hms-student-highlights
    And each is served as a static page without requiring JavaScript execution

  Scenario: Static 02 no framework in deps or src
    Given the repository
    Then deps.edn does not require reagent, reitit, react, or react-dom
    And package.json does not depend on react, react-dom, or htmx.org
    And no src adabwana file requires reagent, reitit, react-dom, or htmx

  Scenario: Static 03 links resolve to real static files
    Given the generated pages
    Then every nav and footer link resolves to an existing HTML file

  Scenario: Static 04 content parity
    Given the pre-migration site content in data.cljs
    When each route is generated
    Then each page contains its expected data-driven content strings

  Scenario: Static 05 serves over HTTP
    Given the public/ output
    When a browser requests each route
    Then it returns 200 with text/html

  Examples:
    | route | file                    |
    | /     | public/index.html       |
    | /about| public/about/index.html|
    | /projects | public/projects/index.html |
    | /hms-student-highlights | public/hms-student-highlights/index.html |
