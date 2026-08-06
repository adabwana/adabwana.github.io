(ns adabwana.static-spec
  (:require [speclj.core :refer :all]
            [adabwana.static :as s]))

(describe "hiccup->html"
  (it "renders a class-shorthand element"
    (should= "<div class=\"card\"></div>" (s/hiccup->html [:div.card])))

  (it "renders id and class shorthand together"
    (should= "<div id=\"app\" class=\"a b\"></div>"
             (s/hiccup->html [:div#app.a.b])))

  (it "escapes text content"
    (should= "<p>HTML &amp; CSS</p>" (s/hiccup->html [:p "HTML & CSS"])))

  (it "escapes attribute values"
    (should= "<a href=\"/x?a=1&amp;b=2\">go</a>"
             (s/hiccup->html [:a {:href "/x?a=1&b=2"} "go"])))

  (it "renders boolean attributes as bare names"
    (should= "<a download>dl</a>" (s/hiccup->html [:a {:download true} "dl"])))

  (it "drops nil and false attributes"
    (should= "<a href=\"#\">x</a>"
             (s/hiccup->html [:a {:href "#" :title nil :data-x false} "x"])))

  (it "renders style maps as inline css"
    (should= "<img style=\"width: 245px; height: 300px;\">"
             (s/hiccup->html [:img {:style {:width "245px" :height "300px"}}])))

  (it "renders void elements without a closing tag"
    (should= "<img src=\"h.jpg\">" (s/hiccup->html [:img {:src "h.jpg"}])))

  (it "renders nested elements"
    (should= "<ul><li>a</li><li>b</li></ul>"
             (s/hiccup->html [:ul [:li "a"] [:li "b"]])))

  (it "renders lazy sequences from for loops"
    (should= "<li>1</li><li>2</li><li>3</li>"
             (s/hiccup->html (map (fn [n] [:li n]) [1 2 3]))))

  (it "renders component calls whose head is a function"
    (let [chip (fn [label] [:span.badge label])]
      (should= "<span class=\"badge\">hi</span>"
               (s/hiccup->html [chip "hi"]))))

  (it "renders component calls nested inside elements"
    (let [row (fn [label] [:div.row label])]
      (should= "<div><div class=\"row\">x</div></div>"
               (s/hiccup->html [:div [row "x"]]))))

  (it "ignores nil children"
    (should= "<p>a</p>" (s/hiccup->html [:p "a" nil])))

  (it "renders keywords as text"
    (should= "<p>about</p>" (s/hiccup->html [:p :about]))))

(describe "relative-href"
  (it "siblings from the root page"
    (should= "about/index.html" (s/relative-href "/" "/about"))
    (should= "projects/index.html" (s/relative-href "/" "/projects")))

  (it "root link from a nested page"
    (should= "../index.html" (s/relative-href "/about" "/")))

  (it "sibling link between nested pages"
    (should= "../projects/index.html" (s/relative-href "/about" "/projects")))

  (it "self link from a nested page"
    (should= "index.html" (s/relative-href "/about" "/about")))

  (it "self link from the root page"
    (should= "index.html" (s/relative-href "/" "/"))))

(describe "asset-href"
  (it "assets from the root page"
    (should= "img/headshot.jpg" (s/asset-href "/" "/img/headshot.jpg"))
    (should= "css/styles.css" (s/asset-href "/" "/css/styles.css")))

  (it "assets from a nested page"
    (should= "../img/headshot.jpg" (s/asset-href "/about" "/img/headshot.jpg"))
    (should= "../css/styles.css" (s/asset-href "/projects" "/css/styles.css"))))

(describe "nav-links"
  (it "derives label + relative href per page for a nested page"
    (let [pages {"/" {:label "Home"}
                 "/about" {:label "About"}
                 "/projects" {:label "Projects"}}
          order ["/" "/about" "/projects"]]
      (should= [{:label "Home" :href "../index.html"}
                {:label "About" :href "index.html"}
                {:label "Projects" :href "../projects/index.html"}]
               (s/nav-links pages order "/about")))))

(describe "hardening: negative cases"
  (it "rejects an unrepresentable hiccup node"
    (should-throw Exception
                  (s/hiccup->html {:not "hiccup"})))

  (it "rejects an unrepresentable vector head"
    (should-throw Exception
                  (s/hiccup->html [42 "x"])))

  (it "rejects a node type that is not a string, number, keyword, vector, or seq"
    (should-throw Exception
                  (s/hiccup->html #{:a "b"}))))

(describe "hardening: escaping invariants"
  (it "escapes text so no raw & < > \" leaks into the document body"
    (let [html (s/hiccup->html [:p "<script>alert(\"x\")</script> & \"y\""])]
      (should-not-contain "<script>" html)
      (should-not-contain "</script>" html)))

  (it "escapes attribute values including quotes and ampersands"
    (let [html (s/hiccup->html [:a {:href "/x?a=1&b=2\"quote"} "a"])]
      (should-contain "&amp;" html)
      (should-contain "&quot;" html)))

  (it "never emits a raw & - all ampersands in output are escaped entities"
    (let [html (s/hiccup->html [:p "AT&T & Sons"])]
      (should-not-contain "AT&T" html)
      (should-contain "AT&amp;T" html)))

  (it "keeps the CDN style/script URLs intact while escaping text"
    (let [html (s/hiccup->html [:p "use https://x/y?a=1"])]
      (should-contain "a=1" html))))

(describe "hardening: link invariants"
  (it "every derived nav href points at a sibling/root index document"
    (let [pages {"/" {:label "Home"}
                 "/about" {:label "About"}
                 "/projects" {:label "Projects"}}
          order ["/" "/about" "/projects"]]
      (doseq [page order
              {:keys [href]} (s/nav-links pages order page)]
        (should-contain "index.html" href))))

  (it "relative-href round-trips a nested-to-root and root-to-nested"
    (should= "index.html" (s/relative-href "" "/"))
    (should= "about/index.html" (s/relative-href "/" "/about"))
    (should= "../index.html" (s/relative-href "/about" "/"))))

(describe "page-document"
  (it "assembles a complete html document"
    (let [html (s/page-document {:title "About | Jaryt D. Salvo"
                                 :description "About page"
                                 :styles-href "../css/styles.css"}
                                "<main>hi</main>")]
      (should-contain "<!DOCTYPE html>" html)
      (should-contain "<html lang=\"en\">" html)
      (should-contain "<title>About | Jaryt D. Salvo</title>" html)
      (should-contain "href=\"../css/styles.css\"" html)
      (should-contain "<main>hi</main>" html)
      (should-contain "</html>" html))))
