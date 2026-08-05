(ns adabwana.static
  "Pure, host-agnostic static-site generation: hiccup to HTML strings and
  relative link derivation. No DOM, filesystem, or JS interop lives here."
  (:require [clojure.string :as str]))

;; ---------------------------------------------------------------------------
;; HTML escaping
;; ---------------------------------------------------------------------------

(defn escape-html
  "Escape &, <, >, and \" for safe text and attribute output."
  [s]
  (-> (str s)
      (str/replace "&" "&amp;")
      (str/replace "<" "&lt;")
      (str/replace ">" "&gt;")
      (str/replace "\"" "&quot;")))

;; ---------------------------------------------------------------------------
;; Hiccup -> HTML
;; ---------------------------------------------------------------------------

(def ^:private void-tags
  #{"area" "base" "br" "col" "embed" "hr" "img" "input" "link" "meta"
    "param" "source" "track" "wbr"})

(def ^:private ignored-attrs #{:key :ref})

(defn- attribute-name [k]
  (-> k name (str/replace "_" "-")))

(defn- style-string [style-map]
  (->> style-map
       (map (fn [[k v]] (str (attribute-name k) ": " v ";")))
       (str/join " ")))

(defn- format-attribute [[k v]]
  (cond
    (nil? v)   nil
    (false? v) nil
    (true? v)  (str " " (attribute-name k))
    (map? v)   (str " " (attribute-name k) "=\"" (escape-html (style-string v)) "\"")
    :else      (str " " (attribute-name k) "=\"" (escape-html (str v)) "\"")))

(defn- attribute-string [attrs]
  (->> attrs
       (remove (fn [[k _]] (contains? ignored-attrs k)))
       (keep format-attribute)
       (str/join)))

(defn- parse-tag [tag]
  (let [id (second (re-find #"#([\w-]+)" tag))
        classes (map second (re-seq #"\.([\w-]+)" tag))
        tag-name (str/replace (str/replace tag #"#[\w-]+" "") #"\.[\w-]+" "")]
    {:tag tag-name :id id :classes classes}))

(defn- element-parts [children]
  (if (and (seq children) (map? (first children)))
    [(first children) (rest children)]
    [{} children]))

(declare render-node render-children)

(defn- element [tag-node attrs children]
  (let [{:keys [tag id classes]} (parse-tag (name tag-node))
        explicit-class (when (string? (:class attrs)) (:class attrs))
        combined-class (str/join " " (concat classes (when explicit-class [explicit-class])))
        all-attrs (cond-> (dissoc attrs :class)
                    id (assoc :id id)
                    (not (str/blank? combined-class)) (assoc :class combined-class))]
    (str "<" tag (attribute-string all-attrs) ">"
         (render-children children)
         (when-not (contains? void-tags tag)
           (str "</" tag ">")))))

(defn- render-element-call [head children]
  (render-node (apply head children)))

(defn- render-vector [node]
  (if (seq node)
    (let [[head & child-nodes] node
          [attrs children] (element-parts child-nodes)]
      (cond
        (keyword? head) (element head attrs children)
        (string? head)  (element head attrs children)
        (fn? head)      (render-element-call head child-nodes)
        :else           (throw (ex-info "Unrecognized hiccup head in vector"
                                        {:head head :node node}))))
    ""))

(defn render-node [node]
  (cond
    (nil? node)        ""
    (string? node)     (escape-html node)
    (number? node)     (str node)
    (keyword? node)    (escape-html (name node))
    (vector? node)     (render-vector node)
    (sequential? node) (apply str (map render-node node))
    :else              (throw (ex-info "Unrecognized hiccup node"
                                       {:node node}))))

(defn render-children [children]
  (apply str (map render-node children)))

(defn hiccup->html
  "Render a hiccup tree to an HTML string. Supports keywords, strings,
  attributes maps, class/id shorthand, void elements, lazy sequences, and
  component calls whose vector head is a function."
  [node]
  (render-node node))

;; ---------------------------------------------------------------------------
;; Relative link derivation
;; ---------------------------------------------------------------------------

(defn route-segments
  "Split a route path into directory segments, e.g. \"/about\" -> [\"about\"]."
  [route]
  (->> (str/split (str route) #"/")
       (remove str/blank?)))

(defn- common-depth [as bs]
  (loop [as as bs bs depth 0]
    (if (and (seq as) (seq bs) (= (first as) (first bs)))
      (recur (rest as) (rest bs) (inc depth))
      depth)))

(defn relative-href
  "Relative URL from the directory of from-route to the index document of
  to-route, e.g. (relative-href \"/about\" \"/projects\") ->
  \"../projects/index.html\"."
  [from to]
  (let [from-segs (route-segments from)
        to-segs (route-segments to)
        shared (common-depth from-segs to-segs)
        up (repeat (- (count from-segs) shared) "..")
        down (drop shared to-segs)
        leaf (if (seq down) (concat down ["index.html"]) ["index.html"])]
    (str (str/join "/" (concat up leaf)))))

(defn asset-href
  "Relative URL from the directory of route to an asset rooted at the site
  root, e.g. (asset-href \"/about\" \"/css/styles.css\") ->
  \"../css/styles.css\"."
  [route path]
  (let [depth (count (route-segments route))
        segments (str/split (str/replace (str path) #"^/+" "") #"/")]
    (if (zero? depth)
      (str/join "/" segments)
      (str/join "/" (concat (repeat depth "..") segments)))))

(defn nav-links
  "Derive the ordered nav entries for a page: each {:label ... :href ...}
  relative to the current route. pages is a map of route -> config, order is a
  vector of routes."
  [pages order current]
  (mapv (fn [route]
          {:label (get-in pages [route :label])
           :href (relative-href current route)})
        order))

;; ---------------------------------------------------------------------------
;; Full document assembly
;; ---------------------------------------------------------------------------

(defn page-document
  "Wrap rendered body HTML in a complete standalone document. meta is a map of
  :title, :description, and :styles-href."
  [{:keys [title description styles-href]} body-html]
  (str "<!DOCTYPE html>\n"
       "<html lang=\"en\">\n"
       "<head>\n"
       "    <meta charset=\"UTF-8\">\n"
       "    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n"
       "    <title>" (escape-html title) "</title>\n"
       "    <meta name=\"description\" content=\"" (escape-html description) "\">\n"
       "    <link href=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css\" rel=\"stylesheet\">\n"
       "    <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.0/font/bootstrap-icons.css\">\n"
       "    <link href=\"" (escape-html styles-href) "\" rel=\"stylesheet\">\n"
       "    <link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/github.min.css\">\n"
       "</head>\n"
       "<body>\n"
       body-html
       "\n    <script src=\"https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js\"></script>\n"
       "    <script src=\"https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js\"></script>\n"
       "</body>\n</html>\n"))
