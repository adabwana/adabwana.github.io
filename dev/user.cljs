(ns user
  (:require [adabwana.core :as core]
            [reagent.core :as r]
            [reagent.dom :as rdom]))

(defn reload! []
  (js/console.log "Code updated.")
  (core/init))

(defn ^:dev/after-load after-load []
  (js/console.log "Hot reload")
  (reload!)) 