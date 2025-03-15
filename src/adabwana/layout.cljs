(ns adabwana.layout
  (:require [adabwana.data :as data]))

(defn navbar []
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
       [:a.nav-link {:href "/projects"} "Projects"]]]]]])

(defn footer []
  [:footer.bg-light.py-4.mt-5
   [:div.container
    [:div.row
     [:div.col-md-12.text-center
      [:p "© 2024 Jaryt Salvo - Data Scientist & Machine Learning Engineer"]
      [:div
       [:a.btn.btn-link {:href (str "mailto:" (get-in data/resume-data [:contact :email]))}
        [:i.bi.bi-envelope]]
       [:a.btn.btn-link {:href (get-in data/resume-data [:contact :github])}
        [:i.bi.bi-github]]
       [:a.btn.btn-link {:href (get-in data/resume-data [:contact :linkedin])}
        [:i.bi.bi-linkedin]]]]]]])

(defn layout [page]
  [:div
   [navbar]
   [page]
   [footer]])