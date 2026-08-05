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
  (let [{:keys [email github linkedin]} (:contact data/resume-data)]
    [:footer.bg-light.py-4.mt-5
     [:div.container
      [:div.row
       [:div.col-md-12.text-center
        [:p "© 2024 Jaryt Salvo - Data Scientist & Machine Learning Engineer"]
        [:div
         [:a.btn.btn-link {:href (str "mailto:" email)}
          [:i.bi.bi-envelope]]
         [:a.btn.btn-link {:href github}
          [:i.bi.bi-github]]
         [:a.btn.btn-link {:href linkedin}
          [:i.bi.bi-linkedin]]]]]]]))

(defn layout [page]
  [:div
   [navbar]
   [page]
   [footer]])