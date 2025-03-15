(ns adabwana.components
  (:require [adabwana.data :as data]
            [adabwana.htmx :as htmx]))

;; Reusable UI Components
(defn contact-info [{:keys [email github linkedin]}]
  [:div.mt-4.d-flex.justify-content-center.align-items-center
   [:a.text-decoration-none {:href (str "mailto:" email)}
    [:i.bi.bi-envelope.me-2]
    email] 
   [:span.mx-3 "|"]
   [:a.text-decoration-none {:href github}
    [:i.bi.bi-github.me-2]
    "GitLab"]
   [:span.mx-3 "|"]
   [:a.text-decoration-none {:href linkedin}
    [:i.bi.bi-linkedin.me-2]
    "LinkedIn"]])

(defn research-interests [interests]
  [:div.card.mb-4
   [:div.card-body
    [:h2.card-title.mb-4 "Research Interests"]
    [:ul.list-group.list-group-flush
     (for [interest interests]
       ^{:key (:topic interest)}
       [:li.list-group-item
        [:div.fw-bold (:topic interest)]
        [:ul.mt-2
         (for [subtopic (:subtopics interest)]
           ^{:key subtopic}
           [:li subtopic])]])]]])

(defn featured-projects [projects]
  [:div.card.mb-4
   [:div.card-body
    [:h2.card-title.mb-4 "Featured Projects"]
    [:div.list-group
     (for [project (filter :spotlight projects)]
       ^{:key (:title project)}
       [:a.list-group-item.list-group-item-action
        {:href (or (:url project) "#")}
        [:div.d-flex.w-100.justify-content-between
         [:h5.mb-1 (:title project)]
         [:small (:period project)]]
        [:p.mb-1 (:organization project)]
        [:p.mb-1 (first (:details project))]])]
    [:div.text-end.mt-3
     [:a.btn.btn-outline-primary.btn-sm {:href "/projects"} "View All Projects"]]]])

(defn recent-publications [publications]
  [:div.card
   [:div.card-body
    [:h2.card-title.mb-4 "Recent Publications"]
    (for [pub (take 2 publications)]
      ^{:key (:title pub)}
      [:div.mb-4
       [:h5 (:title pub)]
       [:p.text-muted (:publisher pub) " · " (:period pub)]
       (when (:url pub)
         [:a.btn.btn-sm.btn-outline-secondary {:href (:url pub)} "Read More"])])]])

(defn recent-presentations [presentations]
  [:div.card.mb-4
   [:div.card-body
    [:h2.card-title.mb-4 "Recent Presentations"]
    [:div.row
     (for [pres (take 3 presentations)]
       ^{:key (:title pres)}
       [:div.col-md-12.mb-4
        [:div.card
         [:div.card-body
          [:h5.card-title (:title pres)]
          [:p.text-muted (:period pres)]
          (when (:details pres)
            [:ul.mt-2
             (for [detail (:details pres)]
               ^{:key detail}
               [:li.small detail])])
          [:div.mt-3
           [:a.btn.btn-sm.btn-outline-danger {:href (:url pres) :target "_blank"}
            [:i.bi.bi-youtube.me-2] "Watch Video"]]]]])]]])

(defn academic-background [degrees]
  [:div
   [:h2 "Academic Background"]
   (for [edu degrees]
     ^{:key (str (:institution edu))}
     [:div.card.mb-4
      [:div.card-body
       [:h5.card-title (:institution edu) [:span.text-muted.ms-2 (:location edu)]]
       [:ul.list-group.list-group-flush
        (for [degree (:degrees edu)]
          ^{:key (str (:title degree) (:field degree))}
          [:li.list-group-item
           [:strong (:title degree)] " in " (:field degree)
           (when (:gpa degree)
             [:span.text-muted " (GPA: " (:gpa degree) ")"])
           [:div.text-muted.small (:period degree)]])]]])])

(defn professional-experience [positions]
  [:div
   [:h2 "Professional Experience"]
   (for [pos positions]
     ^{:key (str (:title pos) (:period pos))}
     [:div.card.mb-4
      [:div.card-body
       [:h5.card-title (:title pos)]
       [:h6.card-subtitle.mb-2.text-muted (:organization pos) " · " (:period pos)]
       [:ul.mt-3
        (for [detail (:details pos)]
          ^{:key detail}
          [:li detail])]]])])

(defn project-list [projects]
  [:div.row
   (for [project projects]
     ^{:key (:title project)}
     [:div.col-md-6.mb-4
      [:div.card.h-100
       [:div.card-body
        [:h5.card-title (:title project)]
        [:h6.card-subtitle.mb-2.text-muted 
         [:span (:organization project)] [:span " · " (:period project)]]
        [:ul.mt-3
         (for [detail (:details project)]
           ^{:key detail}
           [:li detail])]
        (when (:url project)
          [:div.mt-3
           [:a.btn.btn-sm.btn-outline-primary {:href (:url project) :target "_blank"}
            [:i.bi.bi-box-arrow-up-right.me-2] "View Project"]])]]])])

(defn publications-section [publications]
  [:div.card.mb-4
   [:div.card-body
    [:h3 "Publications"]
    (for [pub publications]
      ^{:key (:title pub)}
      [:div.mb-4
       [:h5 (:title pub)]
       [:p.text-muted (:publisher pub) " · " (:period pub)]
       (when-not (empty? (:details pub))
         [:ul
          (for [detail (:details pub)]
            ^{:key detail}
            [:li detail])])
       (when (:url pub)
         [:a.btn.btn-sm.btn-outline-secondary {:href (:url pub)} "Read More"])])]])

(defn presentations-section [presentations]
  [:div.card
   [:div.card-body
    [:h3 "Video Presentations"]
    [:div.row
     (for [pres presentations]
       ^{:key (:title pres)}
       [:div.col-md-6.mb-4
        [:div.card.h-100
         [:div.card-body
          [:h5.card-title (:title pres)]
          [:p.text-muted (:period pres)]
          (when (:details pres)
            [:ul.mt-3
             (for [detail (:details pres)]
               ^{:key detail}
               [:li detail])])
          [:div.mt-3
           [:a.btn.btn-sm.btn-outline-danger {:href (:url pres) :target "_blank"}
            [:i.bi.bi-youtube.me-2] "Watch Video"]]]]])]]])

(defn teaching-experience [experience]
  [:div
   [:h2 "Teaching Experience"]
   (for [term experience]
     ^{:key (str (:institution term) (:period term))}
     [:div.card.mb-4
      [:div.card-body
       [:h5.card-title (:institution term)]
       [:h6.card-subtitle.mb-2.text-muted (:period term)]
       (for [course (:courses term)]
         ^{:key (:code course)}
         [:div.mb-3
          [:h6.mb-2.fw-bold (str (:code course) ": " (:name course))]
          [:ul
           (for [detail (:details course)]
             ^{:key detail}
             [:li detail])]])]])])