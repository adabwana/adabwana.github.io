(ns adabwana.data.resume
  "Downloadable resume PDFs derived from the Typst sources in the resume workspace.
  Keys are stable link identifiers; values are button labels paired with the
  site's public asset paths.")

(def resume-downloads
  {:industry {:label "Download Industry Resume"
              :href "/resume/salvo_jaryt_resume_industry.pdf"}
   :education {:label "Download Education Resume"
               :href "/resume/salvo_jaryt_resume_education.pdf"}})
