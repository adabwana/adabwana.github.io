(ns adabwana.pages.about
  (:require [adabwana.data :as data]
            [adabwana.components :as c]))

(defn about-page []
  [:div.container.mt-5
   [:div.row
    [:div.col-md-12
     [:h1.mb-4 "About Me"]
     [:p.lead "Analytics professional and educator who turns operational data into clear recommendations.
               Combines risk-analytics consulting and applied research with a human-centered leadership style:
               designing training curricula, coaching non-specialists through technical change, and leading
               cross-functional work from analysis through delivery."]]]

   [:div.row.mt-4
    [:div.col-md-12
     [c/academic-background (:degrees data/resume-data)]]]

   [:div.row.mt-4
    [:div.col-md-12
     [c/professional-experience (:positions data/resume-data)]]]

   [:div.row.mt-4
    [:div.col-md-12
     [c/skills-section (:skills data/resume-data)]]]

   [:div.row.mt-4
    [:div.col-md-12
     [c/teaching-current data/teaching]]]

   [:div.row.mt-4
    [:div.col-md-12
     [c/teaching-experience (:teaching-experience data/resume-data)]]]

   [:div.row.mt-4
    [:div.col-md-12.text-center
     [:div.mt-5
      [:a.btn.btn-primary.me-2 {:href "/"} "Home"]
      [:a.btn.btn-primary {:href "/projects"} "Projects"]]]]])