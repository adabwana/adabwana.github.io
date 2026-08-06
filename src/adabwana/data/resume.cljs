(ns adabwana.data.resume
  "Downloadable resume PDFs derived from the Typst sources in the resume workspace.
  Keys are stable link identifiers; values are button labels paired with the
  site's public asset paths.")

(def resume-downloads
  {:one-page {:label "Download One-Page Industry Resume"
              :href "/resume/salvo_jaryt_resume_industry_onepage.pdf"}
   :industry {:label "Download Industry Resume"
              :href "/resume/salvo_jaryt_resume_industry.pdf"}
   :full {:label "Download Full Resume"
          :href "/resume/salvo_jaryt_resume_full.pdf"}})
