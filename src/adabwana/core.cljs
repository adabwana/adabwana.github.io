(ns adabwana.core
  "Static-site generator host. This is the only namespace that touches the
  host: it reads the pure page map and writes HTML files under public/."
  (:require ["fs" :as fs]
            ["path" :as path]
            [adabwana.routes :as routes]
            [adabwana.static :as s]
            [adabwana.layout :as layout]))

(defn- ensure-dir! [dir]
  (.mkdirSync fs dir #js {:recursive true}))

(defn- write-page! [output-dir file document]
  (let [full (path/join output-dir file)
        dir (path/dirname full)]
    (ensure-dir! dir)
    (.writeFileSync fs full document "utf8")
    (println "wrote" full)))

(defn- links-for [route]
  {:nav (s/nav-links routes/site-pages routes/page-order route)
   :home (s/relative-href route "/")
   :styles (s/asset-href route "/css/styles.css")})

(defn- render-page [route]
  (let [{:keys [title description file view]} (get routes/site-pages route)]
    {:file file
     :html (s/page-document {:title title
                             :description description
                             :styles-href (:styles (links-for route))}
                            (s/hiccup->html (layout/layout (links-for route) (view))))}))

(defn generate-site! [output-dir]
  (doseq [route routes/page-order]
    (let [{:keys [file html]} (render-page route)]
      (write-page! output-dir file html))))

(defn init []
  (let [output-dir (path/join (js/process.cwd) "public")]
    (generate-site! output-dir)
    (println "Static site generated under" output-dir)))
