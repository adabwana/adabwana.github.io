(ns adabwana.data)

;; Resume data
(def resume-data
  {:name "JARYT SALVO"
   :contact {:email "adazungu@gmail.com"
             :linkedin "https://www.linkedin.com/in/jaryt-s-703218191/"
             :github "https://gitlab.com/ds-w-clojure/projects-shell"}
   :degrees [{:institution "Bowling Green State University"
              :location "Bowling Green, OH"
              :degrees [{:title "Doctor of Philosophy (PhD)"
                        :field "Data Science"
                        :period "2024 – Present"}
                       {:title "Master of Science"
                        :field "Analytics"
                        :gpa "4.0/4.0"
                        :period "2020 – 2021"}
                       {:title "Master of Arts"
                        :field "Cross-Cultural and International Education"
                        :gpa "4.0/4.0"
                        :period "2017 – 2018"}
                       {:title "Bachelor of Science"
                        :field "Education, Minor in Mathematics"
                        :period "2011 – 2014"}]}]
   :teaching-experience [{:institution "Eswatini Medical Christian University"
                         :period "Fall 2023"
                         :courses [{:code "MCS 105"
                                  :name "Computer Foundation II"
                                  :details ["Advanced computing concepts utilizing William Fawcett Hill's 'Learning thru Discussion' format with 8-step process"
                                          "Introduced functional programming with Clojure and covered databases, information systems, and cybersecurity"]}
                                 {:code "MCS 305"
                                  :name "Linear Regression"
                                  :details ["Comprehensive coverage of regression analysis from simple linear to polynomial models with hands-on R implementation"
                                          "Developed practical skills through R scripts for variable selection, outlier analysis, and logistic regression"]}]}
                        {:institution "Eswatini Medical Christian University"
                         :period "Spring 2022"
                         :courses [{:code "MCS 100"
                                  :name "Computer Foundations I"
                                  :details ["Core concepts in information technology, internet architecture, and system components"
                                          "Practical applications in software systems, data storage, and network communications"]}
                                 {:code "MCS 301"
                                  :name "Database Warehousing & Mining"
                                  :details ["Exploratory data analysis techniques with interactive R programming exercises and visualizations"
                                          "Implemented statistical methods through R scripts covering resistant lines, median polish, and two-way plots"]}
                                 {:code "MCS 415"
                                  :name "Data Mining"
                                  :details ["Advanced machine learning algorithms with hands-on implementation using R programming"
                                          "Applied clustering, ensemble methods, and neural networks through guided R script walkthroughs"]}]}
                        {:institution "Bowling Green State University"
                         :period "Spring 2017"
                         :courses [{:code "EDFI 2990"
                                  :name "Field Experience in Cultural and Community Contexts"
                                  :details ["Directed learning via reflection prompts on community assessment, physical accessibility, demographic analysis"
                                          "Managed course learning management system"]}]}
                        {:institution "Japan Exchange and Teaching Program"
                         :period "2018 – 2020"
                         :courses [{:code "ESL"
                                  :name "English as a Second Language (Grades 3-9)"
                                  :details ["Taught at five different schools"
                                          "Developed comprehensive English curriculum"
                                          "Collaborated with Japanese faculty on innovative teaching approaches"]}]}
                        {:institution "Camp Imagine"
                         :period "Summer 2018"
                         :courses [{:code "SPED"
                                    :name "Special Education"
                                    :details ["Managed small group activities based on target goals and objectives derived from students' IEPs"]}]}
                        {:institution "Peace Corps, Malawi"
                         :period "2014 – 2016"
                         :courses [{:code "MATH"
                                  :name "Mathematics"
                                  :details ["Taught Geometry, Algebra I & II, and Precalculus"
                                          "Developed locally-adapted teaching materials and methodologies"
                                          "Mentored local teachers in educational best practices"]}
                                 {:code "ENG"
                                  :name "English Language Arts"
                                  :details ["Taught English in resource-limited settings"
                                          "Led community education initiatives"]}]}]
   :positions [{:title "Graduate Research Assistant"
                :period "Spring 2024 – Present"
                :organization "Center for Justice Research, BGSU"
                :details ["Developing MLOps pipeline using Meta's Prophet model for tract-level crime forecasting"
                         "Engineering interactive R Shiny dashboard for visualizing crime patterns across census tracts"
                         "Implementing automated ETL pipeline for processing daily police records using R and PostgreSQL"
                         "Conducting statistical analysis of spatial autocorrelation in crime patterns using GeoDa"]}
               {:title "Computer Science Lecturer"
                :period "Fall 2022 – Fall 2023"
                :organization "Eswatini Medical Christian University, Peace Corps Response"
                :details ["Designed and delivered curriculum for three computer science courses: Computer Foundations, Database Mining, and AI"
                         "Implemented R-based analytics curriculum covering regression, clustering, and neural networks"
                         "Created hands-on programming exercises and assessments using R and Google Classroom"
                         "Mentored students in developing data analysis and programming skills"]} 
               {:title "Data Analyst"
                :period "October 2021 – October 2022"
                :organization "Risk International"
                :details ["Developed Power BI dashboards for insurance claims analysis and risk assessment"
                         "Created automated data pipelines for processing insurance claims using Python and SQL"
                         "Implemented random forest models for risk assessment and prediction"
                         "Designed automated ETL workflows for data processing and reporting"]}
               {:title "Assistant Language Teacher (ALT)"
                :period "Aug 2018 – Aug 2020"
                :organization "Japan Exchange and Teaching (JET) Program"
                :details ["Developed and taught English curriculum for students across grades 3-9"
                         "Created culturally-responsive teaching materials to improve student engagement"
                         "Led cross-cultural programs for school and community engagement"
                         "Collaborated with Japanese faculty to implement effective teaching methods"]}
               {:title "Secondary Mathematics & English Teacher"
                :period "June 2014 – July 2016"
                :organization "Peace Corps Malawi"
                :details ["Taught Mathematics and English using locally-adapted teaching methods"
                         "Developed teaching materials optimized for resource-limited settings"
                         "Led World Map Project integrating geometry and art applications"
                         "Implemented Malaria Prevention Program for community health education"]}]
   :research-interests [{:topic "Machine Learning Operations and Crime Pattern Analysis"
                        :subtopics ["Recurrent Neural Networks for Sequential Modeling of Count Data"
                                  "Applications in Spatio-temporal Crime Pattern Prediction"]}
                       {:topic "Statistical Computing and Functional Programming"
                        :subtopics ["Lisp-family Languages (Clojure) for AI-compatible Functional Design"
                                  "Immutable Data Structures and Concurrent Processing"]}
                       {:topic "Novel Machine Learning Paradigms"
                        :subtopics ["Wolfram's Discrete Rule Array Models and Elementary Cellular Automata"
                                  "Evolutionary Algorithms in Vertically Layered Rule Arrays"]}]
   :projects [{:title "Tract-Level Crime Forecasting"
               :period "Jan 2024 – Present"
               :organization "Bowling Green State University"
               :url "https://gitlab.com/j.salvo/tract-level-crime-forecasting"
               :details ["Implemented Meta's Prophet model achieving 85% accuracy in tract-level crime prediction"
                        "Processed and analyzed 500K+ crime records across 6 categories and 90+ census tracts"
                        "Developed interactive R Shiny dashboard with real-time updates and filtering capabilities"
                        "Engineered automated data pipeline reducing manual processing time by 75%"]}
              {:title "Toledo Crimes & Calls Map"
               :period "Jan 2024 – Present"
               :organization "Bowling Green State University"
               :url "https://adabwana.shinyapps.io/MapApp/"
               :details ["Interactive visualization of crime and call data for Toledo, Ohio"
                        "Demographic information and trend exploration over time"
                        "Interactive maps showing crime by census tract"
                        "Visualization of demographic changes and crime rates comparison"]}
              {:title "Data Science with Clojure"
               :period "Jan 2024 – Present"
               :organization "Bowling Green State University"
               :url "https://gitlab.com/ds-w-clojure/projects-shell"
               :spotlight true
               :details ["Interactive environment for exploring data science concepts through hands-on Clojure notebooks"
                        "Implementation using Scicloj/Clay and Quarto for web-based notebooks"
                        "Docker containerization for reproducible environments"
                        "Comprehensive coverage of statistical and machine learning topics"]}
              {:title "Statistical Computing in Clojure: Functional Approaches to Unsupervised Learning"
               :period "Feb 2024"
               :organization "Bowling Green State University"
               :url "https://adabwana.github.io/f24-cs7300-final-project/"
               :spotlight true
               :details ["Implemented numerically stable algorithms for statistical computations"
                        "Developed eigendecomposition methods and PCA implementation"
                        "Comparative analysis against scikit-learn implementations"
                        "Utilized Neanderthal, tablecloth, and scicloj.clay libraries"]}
              {:title "Learning Commons Usage Prediction"
               :period "Feb 2024"
               :organization "Bowling Green State University"
               :url "https://adabwana.github.io/f24-m7550-final-project/"
               :details ["Analyzed two years of student visit data (2016-2018)"
                        "Implemented penalized spline models for occupancy forecasting"
                        "Achieved RMSE of 59.47 minutes for duration prediction"
                        "Built with Python and R in reproducible Docker environments"]}
              {:title "Unsupervised Learning with Autoencoders"
               :period "Feb 2024"
               :organization "Bowling Green State University"
               :url "https://adabwana.github.io/f24-cs7300-midterm/"
               :spotlight true
               :details ["Implemented convolutional autoencoders for image denoising"
                        "Compared dimensionality reduction techniques on Fashion-MNIST"
                        "Built with PyTorch, scikit-learn, and Clojure/Clay"]}
              {:title "Statistical Probability Analysis"
               :period "Feb 2024"
               :organization "Bowling Green State University"
               :url "https://adabwana.github.io/f24-m6410-hw2/"
               :details ["Developed utility functions for joint and conditional probabilities"
                        "Implemented solutions for inclusion/exclusion problems"
                        "Utilized fastmath and tablecloth libraries"]}
              {:title "Introduction to Probability with Clojure"
               :period "Jan 2024"
               :organization "Bowling Green State University"
               :url "https://adabwana.github.io/f24-m6410-hw1/"
               :details ["Created statistical plots for binomial and normal distributions"
                        "Implemented probability calculation utilities"
                        "Integrated with R's ggplot2 for visualization"]}
              {:title "Support Vector Machines Implementation"
               :period "Dec 2023"
               :organization "Bowling Green State University"
               :url "https://adabwana.github.io/support-vector-machine/"
               :details ["Generated synthetic datasets with non-linear decision boundaries"
                        "Implemented SVM models with different kernels"
                        "Performed cross-validation and hyperparameter tuning"]}
              {:title "Decision Trees for Concrete Strength Prediction"
               :period "Nov 2023"
               :organization "Bowling Green State University"
               :url "https://adabwana.github.io/decision-trees/"
               :details ["Implemented decision tree and random forest regression models"
                        "Utilized both Clojure (Smile) and R (Caret)"
                        "Performed grid search for hyperparameter optimization"]}
              {:title "Linear Discriminant Analysis Implementation"
               :period "Oct 2023"
               :organization "Bowling Green State University"
               :url "https://adabwana.github.io/linear-discriminate-analysis/"
               :details ["Implemented univariate and multivariate LDA"
                        "Performed 5-fold cross-validation and bootstrapping"
                        "Evaluated performance using multiple metrics"]}
              {:title "Resampling Methods for Boston Housing"
               :period "Sep 2023"
               :organization "Bowling Green State University"
               :url "https://adabwana.github.io/resampling/"
               :details ["Implemented Ridge, Lasso, and Best Subset Selection"
                        "Performed cross-validation and hyperparameter tuning"
                        "Compared models on raw and transformed data"]}
              {:title "Linear Regression with Regularization"
               :period "Sep 2023"
               :organization "Bowling Green State University"
               :url "https://adabwana.github.io/linear-regression/"
               :details ["Implemented ridge, lasso, and elastic net regularization"
                        "Compared Smile and Scikit-Learn implementations"
                        "Performed comprehensive model evaluation"]}
              {:title "Promotional Video – EMCU"
               :period "Jan 2023 – Apr 2023"
               :organization "Eswatini Medical Christian University"
               :url "https://www.youtube.com/watch?v=IMBb3q7E7nA"
               :spotlight true
               :details ["Created promotional video highlighting university features and programs"]}
              {:title "Policy Benchmarking"
               :period "Jan 2022 – Oct 2022"
               :organization "Risk International"
               :url "https://gitlab.com/j.salvo/policy-benchmarking"
               :details ["Created database for policies collected since 1986"
                        "Built custom R-coded charts and tables for policy analysis"
                        "Analyzed premium, limit, and deductible distributions"]}
              {:title "Management Report"
               :period "Jun 2022 – Aug 2022"
               :organization "Risk International"
               :url "https://gitlab.com/j.salvo/power-bi-management-report"
               :details ["Developed top-level view dashboard for managing directors"
                        "Engineered features for yearly hours roll-up"
                        "Implemented dynamic end-of-year forecasted hours per client"]}
              {:title "Hours Report"
               :period "Dec 2021 – Feb 2022"
               :organization "Risk International"
               :url "https://gitlab.com/j.salvo/hours-report"
               :details ["Built Power BI report for tracking billable hours"
                        "Implemented dynamic yearly goal tracking per client team"]}
              {:title "NBA: Defining Players by Functionality"
               :period "Mar 2021 – May 2021"
               :organization "Bowling Green State University"
               :url "https://gitlab.com/j.salvo/nba-defining-players-by-functionality"
               :details ["Built multiple clustering models for player classification"
                        "Analyzed 2020-21 NBA Player Stats to determine player functionalities"
                        "Identified three main player categories: In-the-Paints, Generals, and Versatiles"]}
              {:title "BGSU's International Programs & Partnerships"
               :period "Feb 2021"
               :organization "Bowling Green State University"
               :url "https://gitlab.com/j.salvo/bgsu-international-programs-and-partnerships"
               :details ["Analyzed Study Abroad student travel distances"
                        "Developed travel information analysis for semester planning"]}
              {:title "State Spending on Public Education"
               :period "Oct 2020 – Dec 2020"
               :organization "Bowling Green State University"
               :url "https://gitlab.com/j.salvo/state-spending-on-public-education"
               :details ["Developed linear model for estimating state education funding per student"
                        "Analyzed variables including population, SAT scores, and teacher salaries"]}
              {:title "Statewise Crime Rate Analysis"
               :period "Nov 2020 – Dec 2020"
               :organization "Bowling Green State University"
               :url "https://gitlab.com/j.salvo/statewise-crime1-rate"
               :details ["Modeled statewide violent crime rates"
                        "Analyzed correlations with property rate, metropolitan population, and education"]}
              {:title "Video Game Sales Analysis"
               :period "Nov 2020 – Dec 2020"
               :organization "Bowling Green State University"
               :url "https://gitlab.com/j.salvo/video-game-sales"
               :details ["Conducted Exploratory Data Analysis on video game sales"
                        "Analyzed popular genres per region and worldwide"]}
              {:title "BGSU's Dean's Office Assessment"
               :period "Jun 2017 – Aug 2018"
               :organization "Bowling Green State University"
               :url "https://gitlab.com/j.salvo/bgsu-dean-office-of-assessment-and-accreditation"
               :details ["Analyzed BGSU's performance on Ohio Assessments for Educators"
                        "Conducted comparative analysis against other state universities"]}]
   :publications [{:title "Forecasting Crime Trends in Toledo, Ohio: A Prophet-Based Modeling Approach"
                   :publisher "Academy of Criminal Justice Science 62nd Annual Meeting"
                   :url nil
                   :period "March 2025"
                   :details ["Presented research utilizing Meta's Prophet model for neighborhood-level crime forecasting"
                            "Analyzed six crime categories across Toledo census tracts using daily and monthly data"
                            "Demonstrated machine learning applications for law enforcement policy decisions"]}
                  {:title "Brain Tumor Detection with Topological Data Analysis and MLOps"
                   :publisher "Technical Blog Publication"
                   :url "https://www.linkedin.com/pulse/yet-another-machine-learning-operations-article-yano-malopa-salvo-tfa5c/"
                   :period "2024"
                   :details []}]
   :presentations [{:title "PCA in Clojure with Neanderthal"
                    :url "https://www.youtube.com/watch?v=6OI5C2qv2Ic"
                    :period "2024"
                    :spotlight true
                    :details ["Demonstrated implementation of Principal Component Analysis using Clojure's Neanderthal library"
                             "Covered mathematical foundations, optimization techniques, and practical applications"
                             "Showcased performance comparisons with Python's scikit-learn implementation"]}
                   {:title "MLOps and Topological Analysis for Brain Tumor Detection"
                    :url "https://www.youtube.com/watch?v=jPSfAPUtcms"
                    :period "2024"
                    :spotlight true
                    :details ["Presented novel approach combining topological data analysis with deep learning for tumor detection"
                             "Demonstrated MLOps pipeline implementation using DVC and GitHub Actions"
                             "Achieved 92% accuracy in tumor classification using ensemble approach"]}
                   {:title "Mall Customer Cluster Analysis"
                    :url "https://www.youtube.com/watch?v=lM-S4-HRaTQ"
                    :period "2021"
                    :spotlight true
                    :details ["Analyzed customer segmentation using K-means and hierarchical clustering"
                             "Demonstrated feature engineering techniques for demographic data"
                             "Identified 4 distinct customer segments with actionable insights"]}
                   {:title "Regression Analysis: State Spending on Education"
                    :url "https://www.youtube.com/watch?v=oTqLzrN_n4k"
                    :period "2021" 
                    :spotlight true
                    :details ["Presented multivariate regression analysis of education funding across 50 states"
                             "Demonstrated model selection and validation techniques"
                             "Identified key predictors explaining 85% of funding variance"]}
                   {:title "Power BI – Date Granularity Slicer"
                    :url "https://www.youtube.com/watch?v=6ks-ipmTZww"
                    :period "2021"
                    :details ["Tutorial on implementing dynamic date filtering in Power BI"
                             "Covered DAX calculations for custom time intelligence"
                             "Demonstrated performance optimization techniques"]}
                   {:title "Tableau – Dynamic Parameters"
                    :url "https://www.youtube.com/watch?v=MVvIU2CgIeg"
                    :period "2021"
                    :details ["Demonstrated advanced parameter techniques in Tableau"
                             "Covered calculated fields and parameter actions"
                             "Showed real-time dashboard filtering implementation"]}
                   {:title "Absenteeism and Engagement"
                    :url "https://www.youtube.com/watch?v=cGN9kq1gJQ4"
                    :period "2021"
                    :details ["Analyzed correlation between student attendance and academic performance"
                             "Presented statistical methods for engagement measurement"
                             "Demonstrated visualization techniques for temporal data"]}]})