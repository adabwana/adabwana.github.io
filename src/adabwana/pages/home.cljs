(ns adabwana.pages.home
  (:require [adabwana.components :as c]
            [adabwana.data.contact :as contact]
            [adabwana.data.projects :as projects]
            [adabwana.data.resume :as resume]
            [adabwana.data.teaching :as teaching]
            [adabwana.data.teaching-experience :as teaching-experience]))

(defn resume-download-links [downloads]
  (for [[_ download] downloads]
    ^{:key (:href download)}
    [:a.btn.btn-outline-primary.me-3 {:href (:href download) :download true}
     [:i.bi.bi-file-earmark-pdf.me-2] (:label download)]))

(defn home-page []
  [:div.container.mt-5
   [:div.row.justify-content-center
    [:div.col-md-8.text-center
     [:h1.display-4 contact/full-name]
     [:div.mb-4
      [:img.rounded-circle.shadow {:src "/img/headshot.jpg"
                                   :alt "Jaryt Salvo"
                                   :style {:width "245px"
                                           :height "300px"
                                           :object-fit "fill"}}]]
     [:p.lead "Data Scientist & Machine Learning Engineer"]
     [c/contact-info contact/contact]
     [:div.mt-4 (resume-download-links resume/resume-downloads)]]]

   [:div.row.mt-5
    [:div.col-md-6
     [c/teaching-current teaching/teaching]
     [c/teaching-experience (filter #(= "Eswatini Medical Christian University" (:institution %))
                                     teaching-experience/teaching-experience)]]
    [:div.col-md-6
     [c/featured-projects projects/projects]]]

   [:div.row.mt-4
    [:div.col-md-12
     [:div.card
      [:div.card-body
       [:h2.card-title.mb-4 "Video Presentations"]
       [:div.row
        (for [pres (filter :spotlight projects/presentations)]
          ^{:key (:title pres)}
          [:div.col-md-6.mb-4
           [:div.card.h-100
            [:div.card-body
             [:h5.card-title (:title pres)]
             [:h6.card-subtitle.mb-2.text-muted (:period pres)]
             [:ul.mt-3
              (for [detail (:details pres)]
                ^{:key detail}
                [:li detail])]
             [:div.mt-3
              [:a.btn.btn-sm.btn-outline-danger {:href (:url pres) :target "_blank"}
               [:i.bi.bi-youtube.me-2] "Watch Video"]]]]])]
       [:div.text-end.mt-3
        [:a.btn.btn-outline-primary.btn-sm {:href "/about#presentations"} "View All Videos"]]]]]]

   [:div.row.mt-4
    [:div.col-md-12
     [c/recent-publications projects/publications]]]

   [:div.row.mt-4
    [:div.col-md-12.text-center
     [:div.mt-5
      [:a.btn.btn-primary.me-2 {:href "/about"} "About Me"]
      [:a.btn.btn-primary {:href "/projects"} "All Projects"]]]]])
