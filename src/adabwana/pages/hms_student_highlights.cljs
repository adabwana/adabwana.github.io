(ns adabwana.pages.hms-student-highlights
  (:require [adabwana.data :as data]
            [adabwana.components :as c]))

(defn hms-student-highlights-page []
  [:div.container.mt-5
   [:div.row
    [:div.col-md-12
     [:h1.mb-4 "HMS Student Highlights"]
     [:p.lead "Top-rated web-design projects from Hudson Memorial School, grouped by school year and trimester."]]]
   [:div.row.mt-4
    [:div.col-md-12
     [c/student-highlights data/student-highlights]]]
   [:div.row.mt-4
    [:div.col-md-12.text-center
     [:div.mt-5
      [:a.btn.btn-primary.me-2 {:href "/"} "Home"]
      [:a.btn.btn-primary {:href "/about"} "About Me"]]]]])

