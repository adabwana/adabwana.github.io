(ns adabwana.data.skills
  "Technical skill clusters.
  Source: resume workspace atoms/skills/ plus current agentic/HMS work.")

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
            "Python (scikit-learn, PyTorch; markitdown, edge-tts)"
            "R (Caret, Shiny, tidy analytics)"
            "Reproducible notebooks (Quarto/Clay)" "Statistical computing"]}
   {:cluster "AI & Tooling"
    :items ["Claude Code" "OpenAI Codex" "OpenRouter" "MLOps (DVC, GitHub Actions, MLflow, Airflow)"
            "Docker / Dev Containers" "Git" "Typst"]}
   {:cluster "Curriculum & Ed Tech"
    :items ["Typst document/review-game/exam authoring"
            "Curriculum design (UBD / backward design)"
            "Standards alignment (CSTA / state)"
            "edge-tts dictation-to-audio automation"
            "Blooket / review-game generation"
            "AI-assisted content authoring pipelines"]}
   {:cluster "Agentic Engineering"
    :items ["Specification-first delivery (Gherkin features)"
            "Multi-agent swarm workflows (specifier, coder, cleaner, architect, hardender, QA)"
            "Commit-based handoffs and worktree management"
            "QA procedures and verification scripts"]}
   {:cluster "Craft Standards"
    :items ["Clean Code & Clean Architecture (Uncle Bob)"
            "Functional design and immutability"
            "TDD and semantic-stability tests"
            "Dependency-rule and boundary discipline"
            "Reader-first, small-unit code"]}
   {:cluster "Knowledge Engineering"
    :items ["Open Knowledge Format (OKF v0.2) bundles"
            "Progressive-disclosure knowledge indexes"
            "Sources / trust / lifecycle metadata"
            "Agent-readable curriculum maps"]}
   {:cluster "Collaboration"
    :items ["Stakeholder communication" "Executive and practitioner briefings"
            "Technical training / curriculum design" "Cross-cultural teamwork"
            "Change adoption" "Capstone supervision" "Conference presentation (ACJS)"
            "Writing for technical and non-technical audiences"]}])
