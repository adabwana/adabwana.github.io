(ns user
  (:require [shadow.cljs.devtools.api :as shadow]
            [shadow.cljs.devtools.server :as server]))

(defn watch []
  (server/start!)
  (shadow/watch :app))

(defn repl []
  (server/start!)
  (shadow/repl :app))

(defn browser-repl []
  (shadow/browser-repl))

(defn stop []
  (server/stop!))

(defn restart []
  (stop)
  (watch))

(println "Dev environment loaded. Available commands:")
(println "  (user/watch)       - Start development server")
(println "  (user/repl)        - Connect to CLJS REPL")
(println "  (user/browser-repl) - Start a browser REPL")
(println "  (user/stop)        - Stop development server")
(println "  (user/restart)     - Restart development server") 

