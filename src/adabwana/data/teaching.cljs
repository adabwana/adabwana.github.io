(ns adabwana.data.teaching
  "Current teaching work at Hudson Memorial School.
  Mirrors /home/slacker/Documents/projects/hms/curriculum/courses/.")

(def teaching
  {:role "Computers Teacher"
   :grades "Grades 6-8"
   :school "Hudson Memorial School"
   :context "curriculum built from scratch"
   :courses [{:name "Computers 6"
              :subject "Microsoft Office Suite"
              :overview "Digital productivity through the Microsoft Office Suite."
              :units [{:title "Microsoft Word"
                       :details "Professional document creation, formatting, images, tables, layout, and research reports"}
                      {:title "Microsoft PowerPoint"
                       :details "Presentation design, views, visuals, transitions, animations, speaker notes, and mini-movies"}
                      {:title "Microsoft Excel"
                       :details "Spreadsheets, formulas, functions, conditional formatting, tables, charts, and data integration"}]}
             {:name "Computers 7"
              :subject "Computational Thinking & Web Development"
              :overview "Computational thinking and web development."
              :units [{:title "Problem Solving"
                       :details "Define, Prepare, Try, Reflect; problem types; and constraints"}
                      {:title "HTML & CSS"
                       :details "HTML structure, CSS styling, classes, images, copyright, and accessibility"}
                      {:title "Multi-Page Websites"
                       :details "Divs, Flexbox, links, pseudo-classes, wireframes, and team websites"}]}
             {:name "Computers 8"
              :subject "Functional Programming in Clojure"
              :overview "Functional programming with Clojure through a REPL-first, project-based sequence."
              :units [{:title "Foundations & Logic"
                       :details "Programming foundations, prefix notation, functions, predicates, conditionals, and truth tables"}
                      {:title "Collections & Iteration"
                       :details "Hash-maps, vectors, sets, immutability, generators, and loops"}
                      {:title "The Bakery Project"
                       :details "Robot commands, helper functions, DRY code, predicates, sets, and bakery iteration"}
                      {:title "Algorithms"
                       :details "Higher-order functions, pipelines, algorithm choices, tracing, teaching, and live REPL demonstrations"}]}
             {:name "PLTW App Creators"
              :subject "App Inventor & Game Design"
              :overview "An eighth-grade app-development course centered on algorithms, event-driven programming, user interface design, and iterative design."
              :units [{:title "App Creators Foundations"
                       :details "Algorithms, event-driven programming, user interface design, variables, conditionals, and data"}
                      {:title "Game Design"
                       :details "Pair programming, loops, lists, and iterative design"}
                      {:title "Advanced Development"
                       :details "Procedures, debugging, and more advanced app features"}
                      {:title "The Great App Challenge"
                       :details "Full design-process capstone apps"}]}]})
