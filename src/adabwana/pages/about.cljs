(ns adabwana.pages.about
  (:require [adabwana.components :as c]
            [adabwana.data.education :as education]
            [adabwana.data.roles :as roles]
            [adabwana.data.skills :as skills]
            [adabwana.data.research :as research]
            [adabwana.data.teaching :as teaching]))

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
     [c/academic-background education/degrees]]]

   [:div.row.mt-4
    [:div.col-md-12
     [c/professional-experience roles/positions]]]

   [:div.row.mt-4
    [:div.col-md-12
     [c/skills-section skills/skills]]]

   [:div.row.mt-4
    [:div.col-md-12
     [c/courses-taught-section teaching/courses-taught]]]

   [:div.row.mt-4
    [:div.col-md-12
     [c/research-interests research/research-interests]]]

   [:div.row.mt-4
    [:div.col-md-12.text-center
     [:div.mt-5
      [:a.btn.btn-primary.me-2 {:href "/"} "Home"]
      [:a.btn.btn-primary {:href "/projects"} "Projects"]]]]])
