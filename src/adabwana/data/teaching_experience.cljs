(ns adabwana.data.teaching-experience
  "Course-work teaching history (prior teaching terms).
  Mirrors the resume workspace's atoms/roles/ teaching entries.")

(def teaching-experience
  [{:institution "Eswatini Medical Christian University"
    :period "Fall 2023"
    :courses [{:code "MCS 105"
               :name "Computer Foundation II"
               :details ["Advanced computing concepts utilizing William Fawcett Hill's 'Learning thru Discussion' format with 8-step process"
                       "Introduced functional programming with Clojure and covered databases, information systems, and cybersecurity"]}
              {:code "MCS 305"
               :name "Linear Regression"
               :details ["Comprehensive coverage of regression analysis from simple linear to polynomial models with hands-on R implementation"
                       "Developed practical skills through R scripts for variable selection, outlier analysis, and logistic regression"]}]}
   {:institution "Eswatini Medical Christian University"
    :period "Spring 2022"
    :courses [{:code "MCS 100"
               :name "Computer Foundations I"
               :details ["Core concepts in information technology, internet architecture, and system components"
                       "Practical applications in software systems, data storage, and network communications"]}
              {:code "MCS 301"
               :name "Database Warehousing & Mining"
               :details ["Exploratory data analysis techniques with interactive R programming exercises and visualizations"
                       "Implemented statistical methods through R scripts covering resistant lines, median polish, and two-way plots"]}
              {:code "MCS 415"
               :name "Artificial Intelligence II / Data Mining"
               :details ["Advanced machine learning algorithms with hands-on implementation using R programming"
                       "Applied clustering, ensemble methods, and neural networks through guided R script walkthroughs"]}]}
   {:institution "Eswatini Medical Christian University"
    :period "Oct 2022 – Oct 2023"
    :courses [{:code "EMCU"
               :name "Capstone supervision, EMCU TV, and e-journal"
               :details ["Supervised capstone teams through production-minded projects, including a Library Management System for Eswatini's National Library in Mbabane"
                       "Led university outreach as executive director of EMCU TV, directing a promotional film and growing institutional visibility on YouTube"
                       "Stood up an Electronic Journal website for EMCU scholarly publications"]}]}
   {:institution "Bowling Green State University"
    :period "Spring 2017"
    :courses [{:code "EDFI 2990"
               :name "Field Experience in Cultural and Community Contexts"
               :details ["Directed learning via reflection prompts on community assessment, physical accessibility, demographic analysis"
                       "Managed course learning management system"]}]}
   {:institution "Japan Exchange and Teaching Program"
    :period "2018 – 2020"
    :courses [{:code "ESL"
               :name "English as a Second Language (Grades 3-9)"
               :details ["Taught at five different schools"
                       "Developed comprehensive English curriculum"
                       "Collaborated with Japanese faculty on innovative teaching approaches"]}]}
   {:institution "Camp Imagine"
    :period "Summer 2018"
    :courses [{:code "SPED"
               :name "Special Education"
               :details ["Managed small group activities based on target goals and objectives derived from students' IEPs"]}]}
   {:institution "Peace Corps, Malawi"
    :period "2014 – 2016"
    :courses [{:code "MATH"
               :name "Mathematics"
               :details ["Taught Geometry, Algebra I & II, and Precalculus"
                       "Developed locally-adapted teaching materials and methodologies"
                       "Mentored local teachers in educational best practices"]}
              {:code "ENG"
               :name "English Language Arts"
               :details ["Taught English in resource-limited settings"
                       "Led community education initiatives"]}]}])
