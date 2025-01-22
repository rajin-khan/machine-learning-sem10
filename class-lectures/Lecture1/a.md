* ML Pipeline
    * Define the project problem
    * 2: Collect (unprepared) dataset (the more, the better)
      * Why? Defined later.
      * Data collection depends on budget, use case, and system.
      * Always try to have more data than needed.
    * 3: Dataset preparation
      * Exploratory Data Analysis (EDA)
      * Feature Engineering (FE)
      * Data Preprocessing (DP)
      * Analyze and visualize dataset.
      * Determine important features and identify problems.
    * 4: Model Training
      * Select an appropriate model and train it.
      * This is often a black box; multiple models may be tried iteratively.
    * 5: Result Evaluation
      * If the result is unsatisfactory, reiterate the process:
         - Try different models.
         - Revisit dataset preparation.
         - If necessary, change dataset selection.
         - If all else fails, reconsider the project idea.
    * 6: Deployment (Batch/Online)
      * Only deploy if accuracy is acceptable.
      * The model is not useful until deployment.
      * Deployment allows integration into applications.
