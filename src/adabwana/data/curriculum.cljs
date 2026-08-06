(ns adabwana.data.curriculum
  "HMS curriculum work at Hudson Memorial School: course materials, exams,
  review games, standards alignment, and AI-assisted authoring pipelines.
  Mirrors /home/slacker/Documents/projects/hms/curriculum/ (.okf/courses,
  shared/prompts, courses/*/exams, courses/*/games).")

(def curriculum
  {:context "Designed and maintain the full Computers 6-8 + PLTW computer science sequence with AI-assisted, version-controlled materials."
   :courses
   [{:title "Computers 6"
     :subject "Microsoft Office Suite & digital productivity"
     :materials ["Typst lesson decks" "Exams" "Review games" "Dictation tests (edge-tts audio)"]}
    {:title "Computers 7"
     :subject "Computational thinking, HTML/CSS, multi-page websites"
     :materials ["Typst lesson decks" "Exams" "Review games" "Student web projects"]}
    {:title "Computers 8"
     :subject "Functional programming in Clojure, REPL-first"
     :materials ["Typst lesson decks" "Exams" "Review games" "Bakery project" "Student Clojure projects"]}
    {:title "PLTW App Creators"
     :subject "MIT App Inventor, event-driven programming, game design, capstones"
     :materials ["Typst activity decks" "Assignments" "Exams" "App projects"]}]
   :authoring
   {:tools ["Typst themes + compilation"
            "AI-assisted slide / exam / review-game generation"
            "Blooket CSV and review-game prompts"
            "Prompt libraries for content generation"]
    :validation ["check_curriculum.sh" "OKF bundle checks" "Typst source checks"
                 "Exam structure checks" "Game count checks" "Image link checks"]}
   :standards "CSTA / state standards alignment (backward design / UBD)"})
