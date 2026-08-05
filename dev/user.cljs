(ns user
  (:require [adabwana.core :as core]))

(defn reload! []
  (core/init))

(defn ^:dev/after-load after-load []
  (reload!))
