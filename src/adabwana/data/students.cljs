(ns adabwana.data.students
  "Top-rated student web-design projects grouped by school, then school year,
  then trimester. Canonical source: docs/user-stories/student-highlights-source.md")

(def student-highlights
  {"Hudson Memorial School"
   {:2025-26
    {:trimester-1
     [{:class "A"
       :students ["Bradley" "Jamison"]
       :overview "Best Animals — beautiful page; highlights include thematic coloring of webpages based on the animal itself"
       :url "https://25-26-t1-a-fc1e88.gitlab.io/index.html"}
      {:class "B"
       :students ["Maxwell" "Chris"]
       :overview "Community event in Southern New Hampshire — highlights include lovely borders on each page and image, nice documentation on each event"
       :url "https://25-26-t1-b-e51595.gitlab.io/"}
      {:class "D"
       :students ["Jackson" "Caleb"]
       :overview "Foods Around the World — highlights include nice containers around some of the recipes"
       :url "https://25-26-t1-d-71deb1.gitlab.io/index.html"}
      {:class "F"
       :students ["Seth" "Cody"]
       :overview "Food for Travel — highlights include nice navigation, good structure, and horizontal bars separating sections"
       :url "https://25-26-t1-f-51f750.gitlab.io/index.html"}]
     :trimester-2
     [{:class "A (winner)"
       :students ["Marcus" "Kevin"]
       :overview "Cats — beautiful page highlighting cats from all walks of life: house cats, tundra cats, savanna cats"
       :url "https://25-26-t2-a1-09214c.gitlab.io/"}
      {:class "A (runner-up)"
       :students ["Dante" "Sam"]
       :overview "Dinosaurs — wonderful website; highlights include thematic coloring of background and navigation links for each dinosaur category"
       :url "https://25-26-t2-a2-d2cf63.gitlab.io/"}
      {:class "D"
       :students ["Gavin"]
       :overview "Skis — an adventurous page; highlights include a funny contact-me section"
       :url "https://25-26-t2-d-da565b.gitlab.io/"}]
     :trimester-3
     [{:class "A (winner)"
       :students ["Isabelle" "Makenzie"]
       :overview "Marine Animals — beautiful page highlighting seals, whales, sharks, and turtles with lots of research behind the scenes and nicely structured, organized, styled pages"
       :url "https://25-26-t3-a1-653e27.gitlab.io/"}
      {:class "A (runner-up)"
       :students ["Lily"]
       :overview "Hockey goalkeeping — wonderful website covering gear recommendations, top goalies from the last couple of decades, and how to position by squaring-up"
       :url "https://25-26-t3-a2-6260db.gitlab.io/"}
      {:class "D"
       :students ["Sophia"]
       :overview "Freya Skye fan page — highlights Skye's variety of talents: acting in Zombies 4, top songs on streaming services, a 2026 tour"
       :url "https://25-26-t3-d-186d41.gitlab.io/"}]}}})
