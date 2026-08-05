(ns user
  (:require [shadow.cljs.devtools.api :as shadow]
            [shadow.cljs.devtools.server :as server]))

(defn watch []
  (server/start!)
  (shadow/watch :static))

(defn repl []
  (server/start!)
  (shadow/repl :static))

(defn stop []
  (server/stop!))

(defn restart []
  (stop)
  (watch))

(println "Dev environment loaded. Available commands:")
(println "  (user/watch)       - Recompile :static generator on change")
(println "  (user/repl)        - Connect to CLJS REPL")
(println "  (user/stop)        - Stop development server")
(println "  (user/restart)     - Restart development server")
