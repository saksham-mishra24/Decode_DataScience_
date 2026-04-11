# Support Vector Machines (SVM) 🎯

Master margin-based classification with kernel methods for complex decision boundaries.

## 📚 Module Overview

This module explores Support Vector Machines - powerful algorithms that find optimal decision boundaries by maximizing margins and using kernel tricks for non-linear classification.

### Learning Objectives
By completing this module, you will understand:
- ✅ The concept of maximum margin classifiers
- ✅ Support vectors and their role
- ✅ Kernel methods and kernel tricks
- ✅ Soft margin and regularization in SVM
- ✅ Multi-class SVM approaches
- ✅ Practical SVM implementation
- ✅ When to use SVM vs other algorithms

### Prerequisites
- ✓ Complete Logistic Regression module
- ✓ Complete Decision Trees module
- ✓ Linear algebra fundamentals
- ✓ Optimization concepts

## 📁 Notebook Structure

| # | Notebook | Duration | Topics |
|---|----------|----------|--------|
| 1️⃣ | [01_svm_basics](./01_svm_basics.ipynb) | 4-6 hrs | Theory, Kernels, Implementation |

**Total Time Estimate: 4-6 hours**

## 🎯 Key Concepts

### Linear SVM (Separable Case)
```
Maximize margin: 2/||w||
Subject to: y_i(w·x_i + b) ≥ 1 for all i
```

### Soft Margin SVM (Non-separable)
```
Minimize: 1/2||w||² + C*Σξ_i
where ξ_i are slack variables
C is regularization parameter
```

### Kernel Trick
```
K(x_i, x_j) = φ(x_i)·φ(x_j)
Maps data to higher dimension implicitly
```

### Common Kernels

| Kernel | Formula | Use Case |
|--------|---------|----------|
| Linear | x_i·x_j | Linearly separable data |
| Polynomial | (x_i·x_j + c)^d | Moderate non-linearity |
| RBF | exp(-γ\|x_i-x_j\|²) | Complex patterns |
| Sigmoid | tanh(κx_i·x_j + θ) | Neural network-like |

## 💻 Quick Reference Code

### Basic SVM
```python
from sklearn.svm import SVC

svm = SVC(kernel='rbf', C=1.0, gamma='scale')
svm.fit(X_train, y_train)
predictions = svm.predict(X_test)
```

### SVM with Probability
```python
svm = SVC(kernel='rbf', probability=True)
probabilities = svm.predict_proba(X_test)
```

### Find Support Vectors
```python
support_vectors = svm.support_vectors_
n_support = len(svm.support_)
```

## 📊 SVM vs Other Algorithms

| Algorithm | Speed | Interpretability | Handles Non-linear | Scalability |
|-----------|-------|-----------------|-------------------|-------------|
| Logistic Reg | ⚡⚡ | ⭐⭐⭐ | ❌ | ⭐⭐⭐ |
| Decision Tree | ⚡⚡ | ⭐⭐⭐ | ✅ | ⭐⭐ |
| SVM | ⚡ | ⭐ | ✅ | ⭐ |
| Neural Net | 🐌 | ❌ | ✅ | ⭐⭐ |

## 🔑 Important Parameters

### C (Regularization)
- **Small C**: Larger margin, more misclassifications
- **Large C**: Smaller margin, fewer misclassifications
- Start with C=1.0

### Gamma (RBF Kernel)
- **Small γ**: Smooth decision boundary
- **Large γ**: Wiggly, complex boundary
- Default: 'scale' = 1/(n_features × X.var())

### Kernel Selection
- **Linear**: Try first, computationally efficient
- **RBF**: Non-linear, usually works well
- **Polynomial**: Specific non-linear patterns
- **Custom**: For domain-specific knowledge

## 💡 When to Use SVM

### ✅ Good For:
- Binary classification
- High-dimensional data
- Complex non-linear boundaries
- Cases where interpretability is less important
- Small to medium datasets

### ❌ Not Ideal For:
- Large datasets (slow training)
- Multi-class problems
- When interpretability is critical
- Imbalanced classes (tricky to tune)

## 📈 Practice Considerations

### Problem 1: Binary Classification
1. Start with linear kernel
2. If accuracy too low, try RBF
3. Tune C parameter
4. Validate hyperparameters with cross-validation

### Problem 2: Multi-class
- Use One-vs-Rest or One-vs-One
- SVC handles automatically
- Consider micro/macro averaging

### Problem 3: Imbalanced Data
- Use `class_weight='balanced'`
- Adjust C parameter
- Consider data resampling

## 🔗 Next Steps

After this module:
1. **Compare** all algorithms (Logistic, Trees, SVM)
2. **Combine** multiple algorithms (Ensemble)
3. **Move to** Deep Learning
4. **Build** complete ML pipeline
5. **Deploy** production model

## 📚 Additional Resources

### Theory
- ISLR - Chapter 9: Support Vector Machines
- Elements of Statistical Learning - Chapter 12

### Practice
- Kaggle SVM tutorials
- Sci-Kit Learn SVM documentation

## 🚀 Getting Started

1. Open **01_svm_basics.ipynb**
2. Understand geometric intuition first
3. Study kernel concept carefully
4. Practice hyperparameter tuning
5. Compare results with previous algorithms

---

**Ready to Master Margins? Let's Go! 🎯**
