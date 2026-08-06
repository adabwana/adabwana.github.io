(ns adabwana.data.roles
  "Professional positions.
  Mirrors the resume workspace's atoms/roles/.")

(def positions
  [{:title "Computer Science Teacher (Grades 6-8)"
    :period "Aug 2025 – Present"
    :organization "Hudson Memorial School / Hudson School District (SAU 81), NH"
    :details ["Designed and launched an original Computers 6–8 sequence spanning Microsoft Office Suite, HTML/CSS web development, and functional programming in Clojure"
             "Authored the full instructional system from scratch (unit plans, Typst lessons, labs, assessments) with AI-assisted drafting inside Git-reviewed, version-controlled materials"
             "Ran project-based capstones that force real delivery: partner websites shipped to the web and an algorithm-teaching final conducted live in the REPL"]}
   {:title "Graduate Research Assistant"
    :period "Jan 2024 – Aug 2025"
    :organization "Center for Justice Research, BGSU"
    :details ["Built automated cleaning and geocoding ETL pipelines for Toledo Police Department records—cutting manual processing time by ~75%"
             "Shipped an interactive R Shiny dashboard of crime and demographic patterns (tract maps, rate/count views, police-sector overlays) for researchers and practitioners"
             "Produced tract-level Meta Prophet forecasts across six crime categories and 90+ census tracts on 500K+ records; co-presented at ACJS 2025"]}
   {:title "Computer Science Lecturer"
    :period "Oct 2022 – Oct 2023"
    :organization "Eswatini Medical Christian University, Peace Corps Response"
    :details ["Designed and delivered five undergraduate CS courses—Foundations I & II, Data Mining (EDA), Regression Analysis, and AI/ML—end-to-end (lectures, labs, assessments) via Google Classroom"
             "Built an R-based analytics curriculum spanning exploratory data analysis, regression analysis, and AI/ML, with hands-on programming exercises for undergraduates"
             "Supervised capstone teams through production-minded projects, including a Library Management System for Eswatini's National Library in Mbabane"
             "Led university outreach as executive director of EMCU TV and stood up an Electronic Journal website for scholarly publications"]}
   {:title "Risk Analytics Specialist"
    :period "Oct 2021 – Oct 2022"
    :organization "Risk International"
    :details ["Built Einstein, a bespoke Risk Information Management System with custom R charts/tables mimicking Advisen-style reports for policy benchmarking"
             "Owned ETL-to-dashboard delivery: SQL transformations through DAX measures into Power BI reports for operational and executive review of multi-line insurance programs"
             "Delivered Total Cost of Risk (TCOR) analysis, program reviews, and broker-strategy recommendations that informed client risk decisions"]}
   {:title "Assistant Language Teacher (ALT)"
    :period "Aug 2018 – Aug 2020"
    :organization "Japan Exchange and Teaching (JET) Program"
    :details ["Developed and taught English curriculum for students across grades 3-9"
             "Created culturally-responsive teaching materials to improve student engagement"
             "Led cross-cultural programs for school and community engagement"
             "Collaborated with Japanese faculty to implement effective teaching methods"]}
   {:title "Secondary Mathematics & English Teacher"
    :period "June 2014 – July 2016"
    :organization "Peace Corps Malawi"
    :details ["Taught Mathematics and English using locally-adapted teaching methods"
             "Developed teaching materials optimized for resource-limited settings"
             "Led World Map Project integrating geometry and art applications"
             "Implemented Malaria Prevention Program for community health education"]}])
