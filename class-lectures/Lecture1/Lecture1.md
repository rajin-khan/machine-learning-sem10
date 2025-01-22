# Machine Learning (CSE 445)

## Lecture 1 (Date: 18/01/25)

### Introduction to Machine Learning

**Machine Learning (ML):** Loosely defined, it refers to enabling computers to perform tasks that humans typically do, without human intervention.

There are claims from various companies about achieving Artificial General Intelligence (AGI) or even Artificial Super Intelligence (ASI).

### The ML Pipeline

All ML models operate based on a structured pipeline.

#### What is a pipeline?


<img src="./a.png" />


### Responsibilities in ML Development

- **Steps 1-5** (From problem definition to result evaluation): Handled by ML engineers.
- **Step 6** (Deployment and integration): Handled by software engineers.

#### Types of Learning

1. **Batch Learning:**
   - The model is trained once and deployed.
   - Further data cannot be used to retrain the model.

2. **Online Learning:**
   - The model continues learning from new data even after deployment.

This entire process constitutes the **end-to-end pipeline** or the **AI product lifecycle.**

### Redefining ML

Machine learning is based on three core components:

- **Task (T):** The objective to be solved.
- **Experience (E):** The learning derived from training.
- **Performance (P):** The measure of success (P improves with more experience).

#### Difference between Software Engineering (SWE) and ML

- **SWE:**
  - Logic is provided by humans.
  - Deterministic (always correct).

- **ML:**
  - Logic is derived from data (experience).
  - Probabilistic (accuracy ranges from 0-99%).

### Example: Even/Odd Classification

#### Software Engineering Approach:
1. Humans define logic (e.g., `if n % 2 == 0: print("even") else print("odd")`).
2. The logic is implemented directly into software.

#### Machine Learning Approach:
1. Provide a dataset (numbers and their classifications: odd/even).
2. Train the model (learning from data).
3. Evaluate the model and improve through retraining.

---

### Key Differences Between SWE and ML

| Aspect          | Software Engineering (SWE) | Machine Learning (ML) |
|-----------------|---------------------------|-----------------------|
| Dataset         | Not provided               | Provided               |
| Logic           | Given by humans            | Derived from experience|
| Accuracy        | Always correct             | 0-99% accuracy          |

---

### AI Categories: Machine Learning vs. Deep Learning

**Artificial Intelligence (AI)** can be categorized into:

1. **Machine Learning (ML)**
2. **Deep Learning (DL)**

#### Differences Between ML and DL

| Feature            | Machine Learning (ML)       | Deep Learning (DL)         |
|-------------------|----------------------------|----------------------------|
| Approach          | Based on statistics/calculus| Built on neural networks   |
| Feature Engineering | Done by humans (EDA, correlation matrices) | No manual feature engineering |
| Computational Power | Less intensive             | More intensive              |
| Cost               | Lower                       | Higher                      |
| Accuracy           | May be lower                | Generally higher            |

Due to its cost-effectiveness, ML is still more widely used compared to DL.

---