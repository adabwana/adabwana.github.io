Feature: Resume PDF download assets

  The home page offers up-to-date resume PDFs derived from the Typst sources
  in the resume workspace. PDFs match the current synced content (Hudson
  Memorial role, GRA through Aug 2025, ACJS 2025, MSc/MA/BSc degrees) and
  render one-page industry + education resumes.

  Background:
    Given the static site has been generated

  Scenario: Resume PDF 01 industry asset exists and links
    Given the repository has a built industry resume PDF under public/resume/
    When a visitor opens the home page
    Then the "Download Industry Resume" button links to a real file
    And that file opens as a PDF (1 page)

  Scenario: Resume PDF 02 education asset exists and links
    Given the repository has a built education resume PDF under public/resume/
    When a visitor opens the home page
    Then an "Download Education Resume" button links to a real file
    And that file opens as a PDF (1 page)

  Scenario: Resume PDF 03 stale assets removed
    Given the site no longer offers the old full or one-page industry resumes
    When a visitor opens the home page
    Then no stale or remapped PDF links are present

  Scenario: Resume PDF 04 content currency
    Given each resume PDF was rendered from the current Typst sources with icons
    When QA inspects the PDF text
    Then it includes Hudson Memorial School or teaching/research content
    And it includes MSc or master's analytics
    And it does NOT claim a PhD

  Examples:
    | asset    | filename                        |
    | industry | salvo_jaryt_resume_industry.pdf |
    | education| salvo_jaryt_resume_education.pdf |
