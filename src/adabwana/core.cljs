(ns adabwana.core
  (:require [reagent.dom :as rdom]
            [reagent.core :as r]
            [reitit.frontend :as rf]
            [reitit.frontend.easy :as rfe]
            [reitit.coercion.spec :as rcs]
            [adabwana.routes :as routes]
            [adabwana.layout :as layout]
            [adabwana.htmx :as htmx]))

;; Current page atom
(defonce current-page (r/atom nil))

;; Loading component
(defn loading-spinner []
  [:div.d-flex.justify-content-center.align-items-center {:style {:height "100vh"}}
   [:div.spinner-border.text-primary {:role "status"}
    [:span.visually-hidden "Loading..."]]])

;; Initialize function
(defn init []
  ;; Initialize HTMX
  (htmx/init-htmx)
  
  ;; Start router
  (rfe/start!
   (rf/router routes/routes {:data {:coercion rcs/coercion}})
   (fn [m] (reset! current-page (when m (layout/layout (:view (:data m))))))
   {:use-fragment false})
  
  ;; Render application
  (let [root-el (js/document.getElementById "app")]
    (rdom/render [#(if @current-page
                    @current-page
                    [loading-spinner])] root-el)))