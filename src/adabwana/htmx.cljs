(ns adabwana.htmx
  (:require [reagent.core :as r]
            [reagent.dom :as rdom]
            [applied-science.js-interop :as j]
            [promesa.core :as p]))

(defn init-htmx []
  "Initialize htmx on the page"
  (when (exists? js/window)
    (-> (js/fetch "https://unpkg.com/htmx.org@1.9.5")
        (.then #(.text %))
        (.then (fn [text]
                (let [script (js/document.createElement "script")]
                  (j/assoc! script :type "text/javascript")
                  (j/assoc! script :textContent text)
                  (js/document.head.appendChild script)
                  (js/console.log "HTMX loaded successfully")))))))

(defn highlight-code []
  "Initialize syntax highlighting on code blocks"
  (when (and (exists? js/window) (exists? js/hljs))
    (js/hljs.highlightAll)))

(defn create-htmx-component [url target-id]
  "Create a reagent component that loads content via htmx"
  (let [node-ref (r/atom nil)]
    (r/create-class
     {:component-did-mount
      (fn [this]
        (let [node @node-ref]
          (j/assoc! node :hx-get url)
          (j/assoc! node :hx-trigger "load")
          (j/assoc! node :hx-target (str "#" target-id))))
      
      :reagent-render
      (fn []
        [:div.htmx-container
         {:ref #(reset! node-ref %)}
         [:div.spinner-border.text-primary.m-5 {:role "status"}
          [:span.visually-hidden "Loading..."]]])})))

(defn handle-htmx-events []
  "Setup global event handlers for htmx events"
  (when (exists? js/window)
    (let [body (js/document.body)]
      (.addEventListener body "htmx:afterSwap"
                        (fn [_]
                          (highlight-code))))))

(defn setup []
  "Setup all htmx functionality"
  (init-htmx)
  (p/then (p/delay 500)
          (fn []
            (handle-htmx-events)))) 