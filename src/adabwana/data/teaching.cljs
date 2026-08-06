(ns adabwana.data.teaching
  "All courses taught, current and prior, as one uniform list.
  Current: Hudson Memorial School courses.
  Prior: EMCU (computer science), and earlier teaching terms.
  Mirrors the resume workspace's atoms/roles/ teaching entries and
  /home/slacker/Documents/projects/hms/curriculum/courses/.")

(def courses-taught
  [{:title "Computers 6 — Microsoft Office Suite"
    :category :current
    :institution "Hudson Memorial School"
    :location "Hudson, NH"
    :period "Aug 2025 – Present"
    :org "Computers Teacher (Grades 6-8)"
    :overview "Digital productivity through the Microsoft Office Suite."
    :points ["Microsoft Word — professional document creation, formatting, images, tables, layout, and research reports"
            "Microsoft PowerPoint — presentation design, views, visuals, transitions, animations, speaker notes, and mini-movies"
            "Microsoft Excel — spreadsheets, formulas, functions, conditional formatting, tables, charts, and data integration"]}
   {:title "Computers 7 — Computational Thinking & Web Development"
    :category :current
    :institution "Hudson Memorial School"
    :location "Hudson, NH"
    :period "Aug 2025 – Present"
    :org "Computers Teacher (Grades 6-8)"
    :overview "Computational thinking and web development."
    :points ["Problem Solving — Define, Prepare, Try, Reflect; problem types; and constraints"
            "HTML & CSS — HTML structure, CSS styling, classes, images, copyright, and accessibility"
            "Multi-Page Websites — Divs, Flexbox, links, pseudo-classes, wireframes, and team websites"]}
   {:title "Computers 8 — Functional Programming in Clojure"
    :category :current
    :institution "Hudson Memorial School"
    :location "Hudson, NH"
    :period "Aug 2025 – Present"
    :org "Computers Teacher (Grades 6-8)"
    :overview "Functional programming with Clojure through a REPL-first, project-based sequence."
    :points ["Foundations & Logic — programming foundations, prefix notation, functions, predicates, conditionals, and truth tables"
            "Collections & Iteration — hash-maps, vectors, sets, immutability, generators, and loops"
            "The Bakery Project — robot commands, helper functions, DRY code, predicates, sets, and bakery iteration"
            "Algorithms — higher-order functions, pipelines, algorithm choices, tracing, teaching, and live REPL demonstrations"]}
   {:title "PLTW App Creators — App Inventor & Game Design"
    :category :future
    :institution "Hudson Memorial School"
    :location "Hudson, NH"
    :period "Trimester 3, 2026-2027"
    :org "Computers Teacher (Grades 6-8)"
    :overview "Upcoming eighth-grade app-development course centered on algorithms, event-driven programming, user interface design, and iterative design."
    :points ["App Creators Foundations — algorithms, event-driven programming, user interface design, variables, conditionals, and data"
            "Game Design — pair programming, loops, lists, and iterative design"
            "Advanced Development — procedures, debugging, and more advanced app features"
            "The Great App Challenge — full design-process capstone apps"]}
   {:title "MCS 105 · Computer Foundation II"
    :category :prior
    :institution "Eswatini Medical Christian University"
    :location "Mbabane, Eswatini"
    :period "Fall 2023"
    :org "Computer Science Lecturer (Peace Corps Response)"
    :overview "Introductory computer science with applied programming and systems fundamentals."
    :points ["Advanced computing concepts utilizing William Fawcett Hill's 'Learning thru Discussion' format with 8-step process"
            "Introduced functional programming with Clojure and covered databases, information systems, and cybersecurity"]}
   {:title "MCS 305 · Regression Analysis"
    :category :prior
    :institution "Eswatini Medical Christian University"
    :location "Mbabane, Eswatini"
    :period "Fall 2023"
    :org "Computer Science Lecturer (Peace Corps Response)"
    :overview "Regression modeling from simple linear to polynomial with applied R work."
    :points ["Comprehensive coverage of regression analysis from simple linear to polynomial models with hands-on R implementation"
            "Developed practical skills through R scripts for variable selection, outlier analysis, and logistic regression"]}
   {:title "MCS 100 · Computer Foundations I"
    :category :prior
    :institution "Eswatini Medical Christian University"
    :location "Mbabane, Eswatini"
    :period "Spring 2022"
    :org "Computer Science Lecturer (Peace Corps Response)"
    :overview "Core concepts in information technology and systems."
    :points ["Core concepts in information technology, internet architecture, and system components"
            "Practical applications in software systems, data storage, and network communications"]}
   {:title "MCS 301 · Database Warehousing & Mining"
    :category :prior
    :institution "Eswatini Medical Christian University"
    :location "Mbabane, Eswatini"
    :period "Spring 2022"
    :org "Computer Science Lecturer (Peace Corps Response)"
    :overview "Database warehousing and mining with applied R."
    :points ["Exploratory data analysis techniques with interactive R programming exercises and visualizations"
            "Implemented statistical methods through R scripts covering resistant lines, median polish, and two-way plots"]}
   {:title "MCS 415 · Artificial Intelligence II / Data Mining"
    :category :prior
    :institution "Eswatini Medical Christian University"
    :location "Mbabane, Eswatini"
    :period "Spring 2022"
    :org "Computer Science Lecturer (Peace Corps Response)"
    :overview "Advanced machine learning with hands-on implementation."
    :points ["Advanced machine learning algorithms with hands-on implementation using R programming"
            "Applied clustering, ensemble methods, and neural networks through guided R script walkthroughs"]}
   {:title "EMCU · Capstone Supervision, EMCU TV, and e-journal"
    :category :prior
    :institution "Eswatini Medical Christian University"
    :location "Mbabane, Eswatini"
    :period "Oct 2022 – Oct 2023"
    :org "Computer Science Lecturer (Peace Corps Response)"
    :overview "Capstone supervision and university outreach."
    :points ["Supervised capstone teams through production-minded projects, including a Library Management System for Eswatini's National Library in Mbabane"
            "Led university outreach as executive director of EMCU TV, directing a promotional film and growing institutional visibility on YouTube"
            "Stood up an Electronic Journal website for EMCU scholarly publications"]}
   {:title "EDFI 2990 · Field Experience in Cultural and Community Contexts"
    :category :prior
    :institution "Bowling Green State University"
    :location "Bowling Green, OH"
    :period "Spring 2017"
    :org "Graduate — Field Education"
    :overview "Community-based field education."
    :points ["Directed learning via reflection prompts on community assessment, physical accessibility, demographic analysis"
            "Managed course learning management system"]}
   {:title "ESL · English as a Second Language (Grades 3-9)"
    :category :prior
    :institution "Japan Exchange and Teaching Program"
    :location "Sasebo, Japan"
    :period "2018 – 2020"
    :org "Assistant Language Teacher"
    :overview "English instruction across elementary and junior high."
    :points ["Taught at five different schools"
            "Developed comprehensive English curriculum"
            "Collaborated with Japanese faculty on innovative teaching approaches"]}
   {:title "SPED · Special Education"
    :category :prior
    :institution "Camp Imagine"
    :location ""
    :period "Summer 2018"
    :org "Special Education"
    :overview "Small-group special education support."
    :points ["Managed small group activities based on target goals and objectives derived from students' IEPs"]}
   {:title "MATH · Mathematics"
    :category :prior
    :institution "Peace Corps, Malawi"
    :location "Luwazi, Malawi"
    :period "2014 – 2016"
    :org "Secondary School Math Teacher"
    :overview "Mathematics instruction in a rural secondary school."
    :points ["Taught Geometry, Algebra I & II, and Precalculus"
            "Developed locally-adapted teaching materials and methodologies"
            "Mentored local teachers in educational best practices"]}
   {:title "ENG · English Language Arts"
    :category :prior
    :institution "Peace Corps, Malawi"
    :location "Luwazi, Malawi"
    :period "2014 – 2016"
    :org "Secondary Education Specialist"
    :overview "English instruction in resource-limited settings."
    :points ["Taught English in resource-limited settings"
            "Led community education initiatives"]}])
