(ns adabwana.pages.hms-student-highlights
  (:require [adabwana.components :as c]
            [adabwana.data.students :as students]))

(defn hms-student-highlights-page []
  [:div.container.mt-5
   [:div.row
    [:div.col-md-12
     [:h1.mb-4 "Student Highlights"]
     [:p.lead "Top-rated student web-design projects, grouped by school, school year, and trimester."]]]
   [:div.row.mt-4
    [:div.col-md-12
     [c/student-highlights students/student-highlights]]]
   [:div.row.mt-4
    [:div.col-md-12.text-center
     [:div.mt-5
      [:a.btn.btn-primary.me-2 {:href "/"} "Home"]
      [:a.btn.btn-primary {:href "/about"} "About Me"]]]]])
