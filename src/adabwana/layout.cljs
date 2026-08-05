(ns adabwana.layout
  (:require [adabwana.data :as data]))

;; Presentation namespace: renders the links map derived by the static
;; generator. No link derivation lives here.

(defn navbar [{:keys [nav home]}]
  [:nav.navbar.navbar-expand-lg.navbar-dark.bg-primary
   [:div.container
    [:a.navbar-brand {:href home} "Jaryt Salvo"]
    [:button.navbar-toggler
     {:type "button"
      :data-bs-toggle "collapse"
      :data-bs-target "#navbarNav"}
     [:span.navbar-toggler-icon]]
    [:div#navbarNav.collapse.navbar-collapse
     [:ul.navbar-nav.ms-auto
      (for [{:keys [label href]} nav]
        ^{:key label}
        [:li.nav-item
         [:a.nav-link {:href href} label]])]]]])

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

(defn layout [links page]
  [:div
   [navbar links]
   page
   [footer]])
