(ns adabwana.routes
  (:require [adabwana.pages.home :refer [home-page]]
            [adabwana.pages.about :refer [about-page]]
            [adabwana.pages.projects :refer [projects-page]]
            [adabwana.pages.hms-student-highlights :refer [hms-student-highlights-page]]))

(def routes
  [["/" {:name :home
         :view home-page}]
   ["/about" {:name :about
              :view about-page}]
   ["/projects" {:name :projects
                 :view projects-page}]
   ["/hms-student-highlights" {:name :hms-student-highlights
                               :view hms-student-highlights-page}]])
