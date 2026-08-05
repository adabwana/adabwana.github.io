Feature: Home page teaching experience and About research interests

  The home page surfaces Teaching Experience (current teaching work) in place
  of Research Interests; Research Interests moves to the About page. Renders
  as static HTML via the US-05 generator.

  Background:
    Given the static site has been generated

  Scenario: Home 01 teaching experience shown
    Given the home page is generated
    When a visitor opens it
    Then it shows a "Teaching Experience" section
    And the Hudson Memorial courses (Computers 6/7/8, PLTW App Creators) appear
    And prior EMCU teaching terms appear

  Scenario: Home 02 no research interests on home
    Given the home page
    Then it does not contain a "Research Interests" section

  Scenario: About 03 research interests present
    Given the about page
    When a visitor opens it
    Then it contains a "Research Interests" section
    And the research interest topics and subtopics are listed

  Scenario: About 04 existing content preserved
    Given the about page
    Then degrees, positions, skills, teaching, and current teaching still render

  Scenario: Static 05 site still serves without framework
    Given the generated site
    Then each route serves 200 text/html
    And served HTML contains no reagent, reitit, react-dom, or htmx references
