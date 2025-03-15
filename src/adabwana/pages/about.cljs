(ns adabwana.pages.about
  (:require [adabwana.data :as data]
            [adabwana.components :as c]))

(defn about-page []
  [:div.container.mt-5
   [:div.row
    [:div.col-md-12
     [:h1.mb-4 "About Me"]
     [:p.lead "Ph.D. student in Data Science with a focus on machine learning operations and crime pattern analysis. 
               Experienced educator with international teaching background."]]]
   
   [:div.row.mt-4
    [:div.col-md-12
     [c/academic-background (:degrees data/resume-data)]]]
   
   [:div.row.mt-4
    [:div.col-md-12
     [c/professional-experience (:positions data/resume-data)]]]
   
   [:div.row.mt-4
    [:div.col-md-12
     [c/teaching-experience (:teaching-experience data/resume-data)]]]
   
   [:div.row.mt-4
    [:div.col-md-12.text-center
     [:div.mt-5
      [:a.btn.btn-primary.me-2 {:href "/"} "Home"]
      [:a.btn.btn-primary {:href "/projects"} "Projects"]]]]])