(ns adabwana.components
  (:require [clojure.string :as str]))

;; Reusable UI Components

(defn external-link [{:keys [href label]}]
  [:a.btn.btn-sm.btn-outline-primary {:href href :target "_blank"}
   [:i.bi.bi-box-arrow-up-right.me-2] label])

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

(defn skills-section [clusters]
  [:div
   [:h2 "Technical Skills"]
   [:div.row
    (for [cluster clusters]
      ^{:key (:cluster cluster)}
      [:div.col-md-6.mb-4
       [:div.card.h-100
        [:div.card-body
         [:h5.card-title (:cluster cluster)]
         (for [item (:items cluster)]
           ^{:key item}
           [:span.badge.bg-light.text-dark.border.me-2.mb-2 item])]]])]])

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

(defn- course-list [heading courses]
  (when (seq courses)
    [:div.mb-4
     [:h2.mb-3 heading]
     (for [course courses]
       ^{:key (str (:title course) (:period course))}
       [:div.card.mb-4
        [:div.card-body
         [:h5.card-title (:title course)]
         [:h6.card-subtitle.mb-2.text-muted
          (str (:institution course) " · " (:period course))]
         (when (:org course)
           [:h6.card-subtitle.mb-2.text-muted (:org course)])
         (when (:overview course)
           [:p.mt-2.mb-1 (:overview course)])
         [:ul.mt-2
          (for [point (:points course)]
            ^{:key point}
            [:li point])]]])]))

(defn courses-taught-section [courses]
  (let [current (filterv #(= :current (:category %)) courses)
        prior (filterv #(= :prior (:category %)) courses)
        future (filterv #(= :future (:category %)) courses)]
    [:div
     (course-list "Current Teaching Work" current)
     (course-list "Upcoming Courses" future)
     (course-list "Teaching Experience" prior)]))

(defn- student-entry [entry]
  [:div.list-group-item
   [:div.d-flex.w-100.justify-content-between.align-items-center
    [:h5.h6.mb-0 (str/join " & " (:students entry))]
    [:span.badge.bg-secondary "Class " (:class entry)]]
   [:p.mb-1 (:overview entry)]
   (when (:url entry)
     [:div.mt-2
      [external-link {:href (:url entry) :label "View Live Project"}]])])

(defn student-highlights [highlights]
  (letfn [(trimester-label [k]
            (-> k name (str/replace "-" " ") str/capitalize))]
    [:div
     (for [[school years] highlights]
       ^{:key school}
       [:div.mb-5
        [:h2.mb-3 school]
        (for [[year trimesters] years]
          ^{:key (str school year)}
          [:div.mb-4
           [:h3.h5.mb-3 year]
           (for [[trimester entries] trimesters]
             ^{:key (str year trimester)}
             [:div.card.mb-4
              [:div.card-header
               [:h4.h6.mb-0 (trimester-label trimester)]]
              [:div.card-body.p-0
               [:div.list-group.list-group-flush
                (for [entry entries]
                  ^{:key (str (:class entry) (str/join (:students entry)))}
                  (student-entry entry))]]])])])]))
