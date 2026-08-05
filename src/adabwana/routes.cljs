(ns adabwana.routes
  (:require [adabwana.pages.home :refer [home-page]]
            [adabwana.pages.about :refer [about-page]]
            [adabwana.pages.projects :refer [projects-page]]
            [adabwana.pages.hms-student-highlights :refer [hms-student-highlights-page]]))

;; Single page-render map: one entry per static route. A route cannot silently
;; disappear from the generated site — the static generator iterates this map.
;; :file is relative to public/; :view is the pure hiccup page function.
(def site-pages
  {"/" {:label "Home"
        :file "index.html"
        :title "Jaryt Salvo - Data Scientist & ML Engineer"
        :description "Professional portfolio of Jaryt Salvo, a data scientist and machine learning engineer specializing in crime pattern analysis and statistical computing."
        :view home-page}
   "/about" {:label "About"
             :file "about/index.html"
             :title "About Jaryt Salvo"
             :description "Background, experience, skills, and teaching work of Jaryt Salvo."
             :view about-page}
   "/projects" {:label "Projects"
                :file "projects/index.html"
                :title "Projects & Research | Jaryt Salvo"
                :description "Machine learning operations, crime pattern analysis, and functional programming projects by Jaryt Salvo."
                :view projects-page}
   "/hms-student-highlights" {:label "Student Highlights"
                              :file "hms-student-highlights/index.html"
                              :title "HMS Student Highlights | Jaryt Salvo"
                              :description "Top-rated web-design projects from Hudson Memorial School, grouped by school year and trimester."
                              :view hms-student-highlights-page}})

(def page-order
  ["/" "/about" "/projects" "/hms-student-highlights"])
