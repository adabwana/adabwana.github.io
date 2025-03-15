(ns adabwana.pages.projects
  (:require [adabwana.data :as data]
            [adabwana.components :as c]
            [adabwana.htmx :as htmx]))

(defn projects-page []
  [:div.container.mt-5
   [:div.row
    [:div.col-md-12
     [:h1.mb-4 "Projects & Research"]
     [:p.lead "My research focuses on machine learning operations, crime pattern analysis, and functional programming for data science."]]]
   
   [:div.row.mt-4
 [:div.col-md-12
  [:h2 "Project Spotlight"]
  [:div.row
   (for [project (filter :spotlight (:projects data/resume-data))]
     ^{:key (:title project)}
     [:div.col-md-6
      [:div.card.h-100.shadow-sm
       [:div.card-body
        [:h3.card-title (:title project)]
        [:h6.card-subtitle.mb-3.text-muted
         [:span (:organization project)] [:span " · " (:period project)]]
        [:div.mb-3
         (for [detail (:details project)]
           ^{:key detail}
           [:p.mb-2 detail])]
        (when (:url project)
          [:div.mt-3
           [:a.btn.btn-primary {:href (:url project) :target "_blank"}
            [:i.bi.bi-box-arrow-up-right.me-2] "View Project"]])]]])]]]

   [:div.row.mt-4
    [:div.col-md-12
     [:h2 "Technical Projects"]
     [c/project-list (:projects data/resume-data)]]]
    
   [:div.row.mt-4
    [:div.col-md-12
     [:h2 "Publications & Presentations"]
     [c/publications-section (:publications data/resume-data)]
     [c/presentations-section (:presentations data/resume-data)]]]
   
   [:div.row.mt-4
    [:div.col-md-12.text-center
     [:div.mt-5
      [:a.btn.btn-primary.me-2 {:href "/"} "Home"]
      [:a.btn.btn-primary {:href "/about"} "About Me"]]]]])