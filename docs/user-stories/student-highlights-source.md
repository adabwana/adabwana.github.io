# HMS student highlights — canonical source data (US-03)

Single source of truth for the `/hms-student-highlights` page. Mirrors the
published classroom updates verbatim. The `:student-highlights` data map in
`data.cljs` will group by **year → trimester → entries**.

## 2025-26 · Trimester 1 (Web Design unit — 7th graders)

| Class | Students | Overview | URL |
|-------|----------|----------|-----|
| A | Bradley & Jamison | Best Animals — beautiful page; highlights include thematic coloring of webpages based on the animal itself | https://25-26-t1-a-fc1e88.gitlab.io/index.html |
| B | Maxwell & Chris | Community event in Southern New Hampshire — highlights include lovely borders on each page and image, nice documentation on each event | https://25-26-t1-b-e51595.gitlab.io/ |
| D | Jackson & Caleb | Foods Around the World — highlights include nice containers around some of the recipes | https://25-26-t1-d-71deb1.gitlab.io/index.html |
| F | Seth & Cody | Food for Travel — highlights include nice navigation, good structure, and horizontal bars separating sections | https://25-26-t1-f-51f750.gitlab.io/index.html |

## 2025-26 · Trimester 2 (Web Design course)

| Class | Students | Overview | URL |
|-------|----------|----------|-----|
| A (winner) | Marcus & Kevin | Cats — beautiful page highlighting cats from all walks of life: house cats, tundra cats, savanna cats | https://25-26-t2-a1-09214c.gitlab.io/ |
| A (runner-up) | Dante & Sam | Dinosaurs — wonderful website; highlights include thematic coloring of background and navigation links for each dinosaur category | https://25-26-t2-a2-d2cf63.gitlab.io/ |
| D | Gavin | Skis — an adventurous page; highlights include a funny contact-me section | https://25-26-t2-d-da565b.gitlab.io/ |

## 2025-26 · Trimester 3 (Web Design course)

| Class | Students | Overview | URL |
|-------|----------|----------|-----|
| A (winner) | Isabelle & Makenzie | Marine Animals — beautiful page highlighting seals, whales, sharks, and turtles with lots of research behind the scenes and nicely structured, organized, styled pages | https://25-26-t3-a1-653e27.gitlab.io/ |
| A (runner-up) | Lily | Hockey goalkeeping — wonderful website covering gear recommendations, top goalies from the last couple of decades, and how to position by squaring-up | https://25-26-t3-a2-6260db.gitlab.io/ |
| D | Sophia | Freya Skye fan page — highlights Skye's variety of talents: acting in Zombies 4, top songs on streaming services, a 2026 tour | https://25-26-t3-d-186d41.gitlab.io/ |

## Notes

* Trimester 1 lists 7th-grade classes (A/B/D/F periods).
* All three trimesters appear on the single `/hms-student-highlights` page.
* Model: `{:2025-26 {:trimester-1 [...], :trimester-2 [...], :trimester-3 [...]}}`
  with each entry `{:students [...] :overview str :url str}` (omit `:url` if a
  site is later taken down; renderer degrades gracefully).
* All URLs are external GitLab Pages sites; render `target="_blank"`.
