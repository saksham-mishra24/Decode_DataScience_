# Logistic Regression & Classification Fundamentals 🎓

Master the foundations of binary classification and understand how machine learning models make decisions.

## 📚 Module Overview

This module takes you from linear regression to logistic regression, building intuition for classification problems through implementation, visualization, and optimization.

### Learning Objectives
By completing this module, you will understand:
- ✅ The relationship between linear and logistic regression
- ✅ How sigmoid functions transform outputs to probabilities
- ✅ Decision boundaries and classification rules
- ✅ Loss functions for classification (cross-entropy)
- ✅ Gradient descent optimization
- ✅ The importance of regularization
- ✅ Practical implementation with Scikit-learn

### Prerequisites
- Python basics (variables, loops, functions)
- Linear algebra fundamentals (vectors, matrices)
- Basic probability and statistics
- Familiarity with Jupyter notebooks

## 📁 Notebook Structure

| # | Notebook | Duration | Topics |
|---|----------|----------|--------|
| 1️⃣ | [01_linear_to_logistic](./01_linear_to_logistic.ipynb) | 1.5 hrs | Linear → Logistic Transformation |
| 2️⃣ | [02_decision_boundary](./02_decision_boundary.ipynb) | 1.5 hrs | Visualizing Boundaries & Margins |
| 3️⃣ | [03_loss_functions](./03_loss_functions.ipynb) | 1.5 hrs | Cross-Entropy & Binary CE |
| 4️⃣ | [04_gradient_descent](./04_gradient_descent.ipynb) | 2 hrs | Optimization from Scratch |
| 5️⃣ | [05_sklearn_implementation_v2](./05_sklearn_implementation_v2.ipynb) | 1.5 hrs | Using Scikit-learn |
| 6️⃣ | [06_regularization](./06_regularization.ipynb) | 1.5 hrs | L1 & L2 Regularization |

**Total Time Estimate: 8-10 hours**

## 🗺️ Recommended Learning Path

### Quick Start (3-4 hours)
1. Start with **01_linear_to_logistic** - Understand the core concept
2. Jump to **02_decision_boundary** - Visualize what's happening
3. Check **05_sklearn_implementation_v2** - See it in action

### Complete Learning (8-10 hours)
Follow notebooks 1-6 in order for deep understanding of theory and practice.

### Review Path (2-3 hours)
- **04_gradient_descent** - Understand optimization
- **06_regularization** - Learn about overfitting prevention

## 🎯 Key Concepts

### Logistic Regression Equation
```
z = w₀ + w₁x₁ + w₂x₂ + ... + wₙxₙ
σ(z) = 1 / (1 + e^(-z))   [Sigmoid function]
P(y=1|x) = σ(z)
```

### Decision Boundary
```
If P(y=1|x) >= 0.5, predict class 1
If P(y=1|x) < 0.5, predict class 0
```

### Cost Function (Cross-Entropy)
```
J(w) = -1/m * Σ[y*log(ŷ) + (1-y)*log(1-ŷ)]
```

### Regularization
- **L1 (Lasso)**: Forces some weights to zero
- **L2 (Ridge)**: Shrinks weights uniformly
- **Elastic Net**: Combination of L1 and L2

## 💻 Code Examples Quick Reference

### Load Data & Train Model
```python
from sklearn.linear_model import LogisticRegression
from sklearn.model_selection import train_test_split

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
model = LogisticRegression(max_iter=1000)
model.fit(X_train, y_train)
```

### Make Predictions
```python
predictions = model.predict(X_test)
probabilities = model.predict_proba(X_test)
```

### Evaluate Model
```python
from sklearn.metrics import accuracy_score, confusion_matrix, roc_auc_score

accuracy = accuracy_score(y_test, predictions)
cm = confusion_matrix(y_test, predictions)
auc = roc_auc_score(y_test, probabilities[:, 1])
```

## 📊 Practice Problems

### Problem 1: Customer Churn
**Dataset**: Customer behavioral data
**Task**: Predict if a customer will churn (leave the service)
**Questions**:
1. What's the baseline accuracy?
2. How does adding regularization help?
3. Which features are most important?

### Problem 2: Email Spam Detection
**Dataset**: Email features
**Task**: Classify emails as spam or not spam
**Questions**:
1. Why is precision/recall important here?
2. How would you adjust the decision threshold?
3. What are false positives vs false negatives?

### Problem 3: Loan Approval
**Dataset**: Applicant financial data
**Task**: Predict loan approval likelihood
**Questions**:
1. What's the class imbalance?
2. How does it affect model training?
3. Should we balance classes? How?

## 🔑 Key Takeaways

1. **Logistic regression** = Linear regression + sigmoid function
2. **Sigmoid function** constrains outputs to [0, 1] for probability
3. **Decision boundary** is where probability = 0.5
4. **Cross-entropy loss** measures classification error
5. **Gradient descent** finds optimal weights iteratively
6. **Regularization** prevents overfitting by penalizing large weights
7. **Different regularization strengths** affect model complexity

## 📈 Metrics for Classification

| Metric | Formula | When to Use |
|--------|---------|------------|
| Accuracy | (TP+TN)/(TP+TN+FP+FN) | Balanced datasets |
| Precision | TP/(TP+FP) | Important to avoid false positives |
| Recall | TP/(TP+FN) | Important to catch all positives |
| F1-Score | 2/(1/Precision + 1/Recall) | Balance precision & recall |
| ROC-AUC | Area under ROC curve | Compare models, imbalanced data |

## 🔗 Next Steps

After completing this module:
1. **Compare** with decision trees (next module)
2. **Apply** to portfolio project problems
3. **Explore** Support Vector Machines
4. **Understand** how neural networks extend these concepts
5. **Build** a complete end-to-end classification pipeline

## 📚 Additional Resources

### Recommended Reading
- Introduction to Statistical Learning (ISLR) - Chapter 4
- DL Book - Chapter 6 (Feedforward Networks)
- Stanford CS229 - Lecture on Classification

### Videos to Watch
- 3Blue1Brown: Neural Networks
- StatQuest: Logistic Regression

### Practice Datasets
- UCI ML Repository: Binary Classification datasets
- Kaggle: Classification competitions

## 🚀 Getting Started

1. Open **01_linear_to_logistic.ipynb**
2. Read theory sections carefully
3. Run all code cells
4. Study visualizations
5. Try modifying code examples
6. Move to next notebook

**Questions or stuck?** Check [Troubleshooting Guide](../../docs/TROUBLESHOOTING.md)

---

**Happy Learning! 🎓**
