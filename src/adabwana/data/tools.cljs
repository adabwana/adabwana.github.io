(ns adabwana.data.tools
  "Teaching/curriculum tools Jaryt builds and maintains.
  Mirrors /home/slacker/Documents/projects/hms/curriculum/ (tools/ and src/).")

(def tools
  [{:name "Curriculum validation suite"
    :what "Automated checks for the HMS curriculum publishing workflow."
    :details ["OKF bundle checks (frontmatter, links, required types)"
             "Typst source compilation checks"
             "Exam structure validation (point totals, question/solution counts)"
             "Review-game counting and topic-label checks"
             "Image and asset link verification"]}
   {:name "Dictation-to-MP3 pipeline"
    :what "edge-tts text-to-speech converter for student dictation tests."
    :details ["Converts course dictation TXT to MP3 with spoke-punctuation and speed variants"
             "Batch (all courses) or single-file conversion"
             "Mirrors input tree under exports/dictation; ffmpeg-based"]}
   {:name "OKF knowledge bundles"
    :what "Agent-readable Open Knowledge Format (v0.2) maps of curriculum and projects."
    :details ["Curriculum courses, pedagogy, publishing, prompts, and standards as OKF concepts"
             "Progressive-disclosure index with sources, status, and generated metadata"]}
   {:name "Content conversion utilities"
    :what "Docs-to-markdown and source-to-markdown converters for course authoring."
    :details ["Python converters (markitdown-based) for documents and source trees"]}])
