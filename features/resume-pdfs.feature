Feature: Resume PDF download assets

  The home page offers up-to-date resume PDFs derived from the Typst sources
  in the resume workspace. PDFs match the current synced content (Hudson
  Memorial role, GRA through Aug 2025, ACJS 2025, MSc/MA/BSc degrees).

  Background:
    Given the site has been built with `npx shadow-cljs release app`

  Scenario: Resume PDF 01 industry asset exists and links
    Given the repository has a built industry resume PDF under public/resume/
    When a visitor opens the home page
    Then the "Download Industry Resume" button links to a real file
    And that file opens as a PDF

  Scenario: Resume PDF 02 full asset exists and links
    Given the repository has a built full resume PDF under public/resume/
    When a visitor opens the home page
    Then a full resume download link is present
    And that file opens as a PDF

  Scenario: Resume PDF 03 academic asset removed
    Given the site no longer offers an academic resume download
    When a visitor opens the home page
    Then no academic resume PDF link is present

  Scenario: Resume PDF 04 content currency
    Given each resume PDF was rendered today from the current Typst sources
    When QA inspects the PDF text
    Then it includes Hudson Memorial School
    And it includes MSc or master's analytics
    And it does NOT claim a PhD

  Examples:
    | asset   | filename                    |
    | industry| salvo_jaryt_resume_industry.pdf |
    | full    | salvo_jaryt_resume_full.pdf |
