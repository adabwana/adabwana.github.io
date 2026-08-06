(ns adabwana.data.skills
  "Technical skill clusters.
  Mirrors the resume workspace's atoms/skills/.")

(def skills
  [{:cluster "Analytics"
    :items ["Time-series forecasting (Prophet)" "Regression and model selection"
            "Machine learning (RF, clustering, neural nets)"
            "Spatio-temporal / geospatial analysis (GeoDa)" "Hypothesis testing"
            "EDA" "Feature engineering" "Decision optimization" "Topological data analysis (applied)"]}
   {:cluster "Data & BI"
    :items ["SQL" "ETL / data pipelines" "Power BI (DAX, RLS)" "Excel" "Tableau"
            "Dashboard design" "Database modeling" "Root-cause analysis"
            "Policy & hours benchmarking systems"]}
   {:cluster "Programming"
    :items ["Clojure (Neanderthal, Smile, scicloj/Clay, tablecloth)"
            "Python (scikit-learn, PyTorch)"
            "R (Caret, Shiny, tidy analytics)"
            "Reproducible notebooks (Quarto/Clay)" "Statistical computing"]}
   {:cluster "AI & Tooling"
    :items ["Claude Code" "OpenAI Codex" "OpenRouter" "MLOps (DVC, GitHub Actions, MLflow, Airflow)"
            "Docker / Dev Containers" "Git" "Typst"]}
   {:cluster "Collaboration"
    :items ["Stakeholder communication" "Executive and practitioner briefings"
            "Technical training / curriculum design" "Cross-cultural teamwork"
            "Change adoption" "Capstone supervision" "Conference presentation (ACJS)"
            "Writing for technical and non-technical audiences"]}])
