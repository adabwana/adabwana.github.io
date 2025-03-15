(ns adabwana.core
  (:require [reagent.dom :as rdom]
            [reagent.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rcs]
            [applied-science.js-interop :as j]
            [promesa.core :as p]
            [adabwana.htmx :as htmx]))

;; Load resume data from academic resume
(def resume-data
  {:name "JARYT SALVO"
   :contact {:email "adazungu@gmail.com"
             :phone "(440) 396-2848"
             :github "https://gitlab.com/ds-w-clojure/projects-shell"}
   :degrees [{:institution "Bowling Green State University"
              :location "Bowling Green, OH"
              :degrees [{:title "Doctor of Philosophy (PhD)"
                         :field "Data Science"
                         :period "2024 -- Present"}
                        {:title "Master of Science"
                         :field "Analytics"
                         :gpa "4.0/4.0"
                         :period "2020 -- 2021"}
                        {:title "Master of Arts"
                         :field "Cross-Cultural and International Education"
                         :gpa "4.0/4.0"
                         :period "2017 -- 2018"}
                        {:title "Bachelor of Science"
                         :field "Education, Minor in Mathematics"
                         :period "2011 -- 2014"}]}]
   :positions [{:title "Computer Science Lecturer"
                :period "Fall 2022 -- Fall 2023"
                :organization "Eswatini Medical Christian University, Peace Corps Response"
                :details ["Developed AI and Database courses with focus on R-based analytics"
                          "Created and managed course content through Google Classroom platform"]}
               {:title "Graduate Research Assistant"
                :period "Spring 2024 -- Present"
                :organization "Center for Justice Research, BGSU"
                :details ["Lead researcher on Toledo Crime Analysis Project, developing MLOps pipelines and predictive models"
                          "Created interactive visualization tools for crime pattern analysis using R Shiny"
                          "Implemented Meta's Prophet model for time-series forecasting of neighborhood-level crime trends"
                          "Developed automated data processing pipelines for police department data"]}
               {:title "Risk International"
                :period "October 2021 -- October 2022"
                :organization "Data Analyst"
                :details ["Developed and maintained Power BI dashboards for risk analysis"
                          "Created automated data pipelines for insurance claims processing"
                          "Implemented machine learning models for risk assessment"]}]
   :research-interests ["Machine Learning Operations and Crime Pattern Analysis"
                       "Statistical Computing and Functional Programming"
                       "Novel Machine Learning Paradigms"]
   :projects [{:title "Tract-Level Crime Forecasting with Prophet"
               :period "Spring 2025"
               :url nil
               :details ["Developed time-series forecasting models for six crime categories across Toledo neighborhoods"
                         "Implemented Meta's Prophet model to capture seasonal patterns and holiday effects"
                         "Will be presenting findings at 2025 Academy of Criminal Justice Science Conference"]}
              {:title "Statistical Computing in Clojure"
               :period "Fall 2024"
               :url "https://adabwana.github.io/f24-cs7300-final-project/"
               :details ["Implemented PCA algorithms using functional programming paradigms"
                         "Developed statistical computing methods with focus on numerical stability"
                         "Created educational materials for functional programming in data science"]}
              {:title "Toledo Crime and Demographics Interactive Dashboard"
               :period "Spring 2024"
               :url "https://adabwana.shinyapps.io/MapApp/"
               :details ["Developed R Shiny application for visualizing crime and demographic patterns"
                         "Integrated police department data with census tract information"
                         "Created interactive maps and time-series visualizations"]}]
   :publications [{:title "Forecasting Crime Trends in Toledo, Ohio: A Prophet-Based Modeling Approach"
                   :publisher "Academy of Criminal Justice Science 62nd Annual Meeting"
                   :url nil
                   :period "March 2025"
                   :details ["Presented research utilizing Meta's Prophet model for neighborhood-level crime forecasting"
                             "Analyzed six crime categories across Toledo census tracts using daily and monthly data"
                             "Demonstrated machine learning applications for law enforcement policy decisions"]}
                  {:title "Brain Tumor Detection with Topological Data Analysis and MLOps"
                   :publisher "Technical Blog Publication"
                   :url "https://www.linkedin.com/pulse/yet-another-machine-learning-operations-article-yano-malopa-salvo-tfa5c/"
                   :period "2024"
                   :details []}]
   :presentations [{:title "PCA in Clojure with Neanderthal"
                    :url "https://www.youtube.com/watch?v=6OI5C2qv2Ic"
                    :period "2024"}
                   {:title "MLOps and Topological Analysis for Brain Tumor Detection"
                    :url "https://www.youtube.com/watch?v=jPSfAPUtcms"
                    :period "2024"}
                   {:title "Mall Customer Cluster Analysis"
                    :url "https://www.youtube.com/watch?v=lM-S4-HRaTQ"
                    :period "2021"}
                   {:title "Regression Analysis: State Spending on Education"
                    :url "https://www.youtube.com/watch?v=oTqLzrN_n4k"
                    :period "2021"}]})

;; Page Components
(defn home-page []
  [:div.container.mt-5
   [:div.row.justify-content-center
    [:div.col-md-8.text-center
     [:h1.display-4 (:name resume-data)]
     [:p.lead "Data Scientist & Machine Learning Engineer"]
     [:div.mt-4
      [:p
       [:i.bi.bi-envelope.me-2] 
       [:a {:href (str "mailto:" (get-in resume-data [:contact :email]))} 
        (get-in resume-data [:contact :email])]]
      [:p 
       [:i.bi.bi-telephone.me-2] 
       (get-in resume-data [:contact :phone])]
      [:p 
       [:i.bi.bi-github.me-2] 
       [:a {:href (get-in resume-data [:contact :github])} "GitLab"]]]]]
   
   [:div.row.mt-5
    [:div.col-md-6
     [:div.card.mb-4
      [:div.card-body
       [:h2.card-title.mb-4 "Research Interests"]
       [:ul.list-group.list-group-flush
        (for [interest (:research-interests resume-data)]
          ^{:key interest}
          [:li.list-group-item interest])]]]]
    
    [:div.col-md-6
     [:div.card.mb-4
      [:div.card-body
       [:h2.card-title.mb-4 "Featured Projects"]
       [:div.list-group
        (for [project (take 2 (:projects resume-data))]
          ^{:key (:title project)}
          [:a.list-group-item.list-group-item-action 
           {:href (or (:url project) "#")}
           [:div.d-flex.w-100.justify-content-between
            [:h5.mb-1 (:title project)]
            [:small (:period project)]]
           [:p.mb-1 (first (:details project))]])]
       [:div.text-end.mt-3
        [:a.btn.btn-outline-primary.btn-sm {:href "/projects"} "View All Projects"]]]]]]
   
   [:div.row.mt-4
    [:div.col-md-12
     [:div.card
      [:div.card-body
       [:h2.card-title.mb-4 "Recent Publications"]
       (for [pub (take 2 (:publications resume-data))]
         ^{:key (:title pub)}
         [:div.mb-4
          [:h5 (:title pub)]
          [:p.text-muted (:publisher pub) " · " (:period pub)]
          (when (:url pub)
            [:a.btn.btn-sm.btn-outline-secondary {:href (:url pub)} "Read More"])])]]]]
   
   [:div.row.mt-4
    [:div.col-md-12.text-center
     [:div.mt-5
      [:a.btn.btn-primary.me-2 {:href "/about"} "About Me"]
      [:a.btn.btn-primary {:href "/projects"} "All Projects"]]]]])

(defn about-page []
  [:div.container.mt-5
   [:div.row
    [:div.col-md-12
     [:h1.mb-4 "About Me"]
     [:p.lead "Ph.D. student in Data Science with a focus on machine learning operations and crime pattern analysis. 
               Experienced educator with international teaching background."]]]
   
   [:div.row.mt-4
    [:div.col-md-12
     [:h2 "Academic Background"]
     (for [edu (:degrees resume-data)]
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
             [:div.text-muted.small (:period degree)]])]]])]]
   
   [:div.row.mt-4
    [:div.col-md-12
     [:h2 "Professional Experience"]
     (for [pos (:positions resume-data)]
       ^{:key (str (:title pos) (:period pos))}
       [:div.card.mb-4
        [:div.card-body
         [:h5.card-title (:title pos)]
         [:h6.card-subtitle.mb-2.text-muted (:organization pos) " · " (:period pos)]
         [:ul.mt-3
          (for [detail (:details pos)]
            ^{:key detail}
            [:li detail])]]])]]
   
   [:div.row.mt-4
    [:div.col-md-12.text-center
     [:div.mt-5
      [:a.btn.btn-primary.me-2 {:href "/"} "Home"]
      [:a.btn.btn-primary {:href "/projects"} "Projects"]]]]])

(defn projects-page []
  [:div.container.mt-5
   [:div.row
    [:div.col-md-12
     [:h1.mb-4 "Projects & Research"]
     [:p.lead "My research focuses on machine learning operations, crime pattern analysis, and functional programming for data science."]]]
   
   [:div.row.mt-4
    [:div.col-md-12
     [:h2 "Research Projects"]
     [:div.row
      (for [project (:projects resume-data)]
        ^{:key (:title project)}
        [:div.col-md-6.mb-4
         [:div.card.h-100
          [:div.card-body
           [:h5.card-title (:title project)]
           [:h6.card-subtitle.mb-2.text-muted (:period project)]
           [:ul.mt-3
            (for [detail (:details project)]
              ^{:key detail}
              [:li detail])]
           (when (:url project)
             [:a.btn.btn-sm.btn-outline-primary.mt-3 {:href (:url project)} "View Project"])]]])]]]
   
   [:div.row.mt-4
    [:div.col-md-12
     [:h2 "Project Spotlight"]
     [:div#project-container
      [htmx/create-htmx-component "/htmx/project-details.html" "project-container"]]]]
   
   [:div.row.mt-4
    [:div.col-md-12
     [:h2 "Publications & Presentations"]
     [:div.card.mb-4
      [:div.card-body
       [:h3 "Publications"]
       (for [pub (:publications resume-data)]
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
            [:a.btn.btn-sm.btn-outline-secondary {:href (:url pub)} "Read More"])])]]
     
     [:div.card
      [:div.card-body
       [:h3 "Video Presentations"]
       [:div.row
        (for [pres (:presentations resume-data)]
          ^{:key (:title pres)}
          [:div.col-md-6.mb-3
           [:div.card
            [:div.card-body
             [:h5 (:title pres)]
             [:p.text-muted (:period pres)]
             [:a.btn.btn-sm.btn-outline-danger {:href (:url pres)} "Watch Video"]]]])]]]]]
   
   [:div.row.mt-4
    [:div.col-md-12.text-center
     [:div.mt-5
      [:a.btn.btn-primary.me-2 {:href "/"} "Home"]
      [:a.btn.btn-primary {:href "/about"} "About Me"]]]]])

;; Layout component that wraps all pages
(defn layout [page]
  [:div
   [:nav.navbar.navbar-expand-lg.navbar-dark.bg-primary
    [:div.container
     [:a.navbar-brand {:href "/"} "Jaryt Salvo"]
     [:button.navbar-toggler 
      {:type "button" 
       :data-bs-toggle "collapse" 
       :data-bs-target "#navbarNav"}
      [:span.navbar-toggler-icon]]
     [:div#navbarNav.collapse.navbar-collapse
      [:ul.navbar-nav.ms-auto
       [:li.nav-item
        [:a.nav-link {:href "/"} "Home"]]
       [:li.nav-item
        [:a.nav-link {:href "/about"} "About"]]
       [:li.nav-item
        [:a.nav-link {:href "/projects"} "Projects"]]]]]]
   
   [page]
   
   [:footer.bg-light.py-4.mt-5
    [:div.container
     [:div.row
      [:div.col-md-12.text-center
       [:p "© 2024 Jaryt Salvo - Data Scientist & Machine Learning Engineer"]
       [:div
        [:a.btn.btn-link {:href (str "mailto:" (get-in resume-data [:contact :email]))}
         [:i.bi.bi-envelope]]
        [:a.btn.btn-link {:href (get-in resume-data [:contact :github])}
         [:i.bi.bi-github]]]]]]]])

;; Current page
(defonce current-page (r/atom nil))

;; Routes
(def routes
  [["/" {:name :home
         :view home-page}]
   ["/about" {:name :about
              :view about-page}]
   ["/projects" {:name :projects
                 :view projects-page}]])

;; Initialize function
(defn init []
  (htmx/init-htmx)
  (rfe/start!
   (rf/router routes {:data {:coercion rcs/coercion}})
   (fn [m] (reset! current-page (when m (layout (:view (:data m))))))
   {:use-fragment false})
  (let [root-el (js/document.getElementById "app")]
    (rdom/render [#(if @current-page
                    @current-page
                    [:div.d-flex.justify-content-center.align-items-center {:style {:height "100vh"}}
                     [:div.spinner-border.text-primary {:role "status"}
                      [:span.visually-hidden "Loading..."]]])] root-el))) 