# Decision Trees & Tree-Based Learning 🌳

Learn how machines learn patterns through tree-like decision structures using information theory.

## 📚 Module Overview

This module covers decision tree algorithms and tree construction principles using entropy, information gain, and Gini impurity. Build intuition for how trees make hierarchical decisions.

### Learning Objectives
By completing this module, you will understand:
- ✅ How decision trees partition data
- ✅ Information theory concepts (entropy, information gain)
- ✅ Gini impurity for splitting criteria
- ✅ Tree construction algorithms (ID3, C4.5, CART)
- ✅ Hyperparameter tuning for trees
- ✅ Overfitting and tree pruning
- ✅ Practical implementation with Scikit-learn

### Prerequisites
- ✓ Logistic Regression module completed
- ✓ Understanding of classification concepts
- ✓ Basic probability and statistics

## 📁 Notebook Structure

| # | Notebook | Duration | Topics |
|---|----------|----------|--------|
| 1️⃣ | [01_tree_basics](./01_tree_basics.ipynb) | 1.5 hrs | Tree Structure & Splitting |
| 2️⃣ | [02_entropy_calculation](./02_entropy_calculation.ipynb) | 1.5 hrs | Shannon Entropy & Information Gain |
| 3️⃣ | [03_gini_impurity](./03_gini_impurity.ipynb) | 1.5 hrs | Gini Index & Alternative Splitting |
| 4️⃣ | [04_sklearn_trees](./04_sklearn_trees.ipynb) | 1.5 hrs | Scikit-learn Implementation |
| 5️⃣ | [05_hyperparameter_tuning](./05_hyperparameter_tuning.ipynb) | 1 hr | Tree Optimization & Pruning |

**Total Time Estimate: 6-8 hours**

## 🗺️ Recommended Learning Path

### Quick Overview (2-3 hours)
1. **01_tree_basics** - Understand tree structure
2. **04_sklearn_trees** - See practical usage
3. **05_hyperparameter_tuning** - Learn optimization

### Complete Understanding (6-8 hours)
Follow notebooks 1-5 in order for comprehensive learning.

### Deep Theory (Advanced)
Focus on notebooks 2-3 for information theory details.

## 🎯 Key Concepts

### Entropy (Measure of Impurity)
```
H(S) = -Σ p_i * log₂(p_i)
where p_i is proportion of class i in set S
```
- Maximum entropy: 1 bit (maximum uncertainty)
- Minimum entropy: 0 bits (pure node, one class)

### Information Gain
```
IG(S, A) = H(S) - Σ (|Sᵥ|/|S|) * H(Sᵥ)
Measures uncertainty reduction by splitting on attribute A
```

### Gini Impurity
```
Gini(S) = 1 - Σ p_i²
Lower Gini = purer node
```

### Tree Splitting Decision
```
Choose split that maximizes information gain
or minimizes Gini impurity
```

## 💻 Code Examples Quick Reference

### Create and Train
```python
from sklearn.tree import DecisionTreeClassifier

tree = DecisionTreeClassifier(max_depth=5, min_samples_split=10)
tree.fit(X_train, y_train)
```

### Visualize Tree
```python
from sklearn import tree
import matplotlib.pyplot as plt

plt.figure(figsize=(20, 10))
tree.plot_tree(tree, feature_names=feature_names, 
               class_names=class_names, filled=True)
plt.show()
```

### Get Predictions
```python
predictions = tree.predict(X_test)
probabilities = tree.predict_proba(X_test)
feature_importance = tree.feature_importances_
```

### Evaluate
```python
from sklearn.metrics import accuracy_score, confusion_matrix

accuracy = accuracy_score(y_test, predictions)
print(confusion_matrix(y_test, predictions))
```

## 📊 Practice Problems

### Problem 1: Iris Classification
**Dataset**: Iris measurements
**Task**: Classify iris species from features
**Questions**:
1. What's the tree depth needed?
2. Which features are most important?
3. Can you draw the decision boundaries?

### Problem 2: Customer Segmentation
**Dataset**: Customer demographics
**Task**: Segment customers for marketing
**Questions**:
1. How many segments does the tree create?
2. What's the maximum depth needed?
3. How does pruning affect tree size?

### Problem 3: Loan Default Prediction
**Dataset**: Loan applicant data
**Task**: Predict probability of default
**Questions**:
1. What depth prevents overfitting?
2. Which features matter most?
3. How does min_samples_split affect performance?

## 🔑 Key Concepts Summary

### Tree Structure
- **Root Node**: First splitting point
- **Internal Nodes**: Decision points
- **Leaf Nodes**: Final predictions
- **Edges**: Split conditions

### Splitting Criteria
1. **Information Gain** (ID3): Based on entropy reduction
2. **Gini Impurity** (CART): Based on sample homogeneity
3. **Chi-square** (CHAID): Statistical test for independence

### Hyperparameters
| Parameter | Effect | Default |
|-----------|--------|---------|
| `max_depth` | Tree height limit | None |
| `min_samples_split` | Min samples to split | 2 |
| `min_samples_leaf` | Min samples in leaf | 1 |
| `criterion` | Split measure | 'gini' |

### Why Trees Can Overfit
- Grow too deep (memorize training data)
- Split on noise features
- Use too few samples per split
- Solution: Pruning and depth/sample limits

## 📈 Decision Tree Advantages & Disadvantages

### ✅ Advantages
- Easy to understand and interpret
- No data preprocessing needed (handles categorical data)
- Works with non-linear relationships
- Feature importance built-in
- Fast predictions

### ❌ Disadvantages
- Prone to overfitting
- Can be unstable (small changes → big tree changes)
- Greedy algorithm (not always optimal)
- Biased toward dominant classes

## 🔗 Next Steps

After this module:
1. **Compare** tree vs logistic regression
2. **Explore** ensemble methods (Random Forest, Gradient Boosting)
3. **Study** Support Vector Machines (next module)
4. **Build** complete decision pipeline
5. **Combine** multiple models for better performance

## 📚 Additional Resources

### Reading
- ISLR - Chapter 8: Tree-Based Methods
- Elements of Statistical Learning - Chapter 9

### Visualizations
- Interactive tree builders online
- Google PlayGround for visual learning

### Code References
- Scikit-learn: tree.DecisionTreeClassifier()
- Graphviz: For professional tree visualization

## 🚀 Getting Started

1. Start with **01_tree_basics.ipynb**
2. Understand tree structure before jumping to theory
3. Try notebooks 2-3 for information theory
4. Use **04_sklearn_trees.ipynb** for practical implementation
5. Complete with **05_hyperparameter_tuning.ipynb**

**Need help?** Check [Troubleshooting](../../docs/TROUBLESHOOTING.md)

---

**Let's Build Some Trees! 🌳**
