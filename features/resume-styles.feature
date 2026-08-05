Feature: Resume style downloads (extensible)

  The home page offers any number of resume style PDFs, driven by the
  resume-downloads data map. Adding a style is a data + rendered-PDF change
  only (no component code change).

  Background:
    Given the site has been built with `npx shadow-cljs release app`

  Scenario: Resume styles 01 one-page industry asset exists and links
    Given a one-page industry resume PDF exists under public/resume/
    When a visitor opens the home page
    Then a "one-page industry" download button links to that file
    And that file opens as a PDF with exactly 1 page

  Scenario: Resume styles 02 existing styles still present
    Given the site's earlier industry and full resume PDFs still exist
    When a visitor opens the home page
    Then industry and full download buttons are also present
    And they each link to a real PDF file

  Scenario: Resume styles 03 data-only extension
    Given resume-downloads in data.cljs has one entry per style
    When a new style entry is added to that map with a rendered PDF
    Then the home page renders a download button without code changes
    And the build still compiles

  Scenario: Resume styles 04 no hard-coded style branches
    Given the home page renders downloads from the data map
    Then no per-style conditional or hard-coded href exists in the page code
