(ns adabwana.pages.home
  (:require [adabwana.data :as data]
            [adabwana.components :as c]))

(defn home-page []
  [:div.container.mt-5
   [:div.row.justify-content-center
    [:div.col-md-8.text-center
     [:h1.display-4 (:name data/resume-data)]
     [:div.mb-4
      [:img.rounded-circle.shadow {:src "/img/headshot.jpg"
                                   :alt "Jaryt Salvo"
                                   :style {:width "245px"
                                           :height "300px"
                                           :object-fit "fill"}}]]
     [:p.lead "Data Scientist & Machine Learning Engineer"]
     [c/contact-info (:contact data/resume-data)]
     [:div.mt-4
      [:a.btn.btn-outline-primary.me-3 {:href "/resume/salvo_jaryt_resume_industry.pdf" :download true}
       [:i.bi.bi-file-earmark-pdf.me-2] "Download Industry Resume"]
      [:a.btn.btn-outline-primary {:href "/resume/salvo_jaryt_resume_academic.pdf" :download true}
       [:i.bi.bi-file-earmark-pdf.me-2] "Download Academic Resume"]]]]

   [:div.row.mt-5
    [:div.col-md-6
     [c/research-interests (:research-interests data/resume-data)]]
    [:div.col-md-6
     [c/featured-projects (:projects data/resume-data)]]]

   [:div.row.mt-4
    [:div.col-md-12
     [:div.card
      [:div.card-body
       [:h2.card-title.mb-4 "Video Presentations"]
       [:div.row
        (for [pres (filter :spotlight (:presentations data/resume-data))]
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
     [c/recent-publications (:publications data/resume-data)]]]

   [:div.row.mt-4
    [:div.col-md-12.text-center
     [:div.mt-5
      [:a.btn.btn-primary.me-2 {:href "/about"} "About Me"]
      [:a.btn.btn-primary {:href "/projects"} "All Projects"]]]]])