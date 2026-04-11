# 📓 Notebooks & Learning Modules

This directory contains Jupyter notebooks organized by machine learning topics, progressing from fundamentals to advanced concepts.

## 📚 Module Overview

| # | Module | Topics | Duration | Level |
|---|--------|--------|----------|-------|
| 1️⃣ | [Logistic Regression](./01_logistic_regression/) | Classification, Decision Boundaries, Optimization | 8-10 hrs | Beginner |
| 2️⃣ | [Decision Trees](./02_decision_tree/) | Information Theory, Tree Construction, Tuning | 6-8 hrs | Intermediate |
| 3️⃣ | [SVM](./03_support_vector_machines/) | Margin-Based Learning, Kernels | 4-6 hrs | Intermediate |
| 4️⃣ | [Deep Learning](./04_deep_learning/) | Neural Networks, CNN, RNN | 35+ hrs | Advanced |

## 🎯 Quick Start

1. **First Time?** → Start with `00_tests/test_notebook.ipynb`
2. **Begin Learning?** → Go to `01_logistic_regression/`
3. **Check Progress?** → Follow the [Learning Path](../docs/LEARNING_PATH.md)

## 🗂️ Directory Structure

```
notebooks/
├── 00_tests/
│   └── test_notebook.ipynb         # Environment verification
│
├── 01_logistic_regression/         # Classification Fundamentals
│   ├── README.md
│   ├── 01_linear_to_logistic.ipynb
│   ├── 02_decision_boundary.ipynb
│   ├── 03_loss_functions.ipynb
│   ├── 04_gradient_descent.ipynb
│   ├── 05_sklearn_implementation.ipynb
│   └── 06_regularization.ipynb
│
├── 02_decision_tree/               # Tree-Based Methods
│   ├── README.md
│   ├── 01_tree_basics.ipynb
│   ├── 02_entropy_calculation.ipynb
│   ├── 03_gini_impurity.ipynb
│   ├── 04_sklearn_trees.ipynb
│   └── 05_hyperparameter_tuning.ipynb
│
├── 03_support_vector_machines/     # Advanced Classification
│   ├── README.md
│   └── 01_svm_basics.ipynb
│
├── 04_deep_learning/               # Deep Learning: ANN, CNN, RNN
│   ├── README.md
│   ├── 01_ann/                     # Artificial Neural Networks
│   ├── 02_cnn/                     # Convolutional Networks
│   ├── 03_rnn/                     # Recurrent Networks
│   └── (See deep_learning/README.md for details)
│
└── README.md                        # This file
```

## 🚀 How to Use These Notebooks

### General Approach
1. Open notebook in Jupyter
2. Read theory section first
3. Execute code cells sequentially
4. Study visualizations
5. Try practice exercises
6. Compare with key takeaways

### Cell Structure
```
[📝 Theory] Theory & mathematical background
    ↓
[💻 Code] Implementation with detailed comments
    ↓
[📊 Output] Results and visualizations
    ↓
[💡 Explanation] Interpretation of results
    ↓
[✅ Exercises] Practice problems
```

## 📈 Learning Progression

### Foundation Phase (Weeks 1-3)
- Logistic Regression & Classification
- Understanding decision boundaries
- Build intuition for optimization

### Intermediate Phase (Weeks 3-7)
- Decision Trees & tree methods
- Support Vector Machines
- Compare different algorithms

### Advanced Phase (Weeks 7-12+)
- Deep Neural Networks
- Convolutional Networks for images
- Recurrent Networks for sequences

## 💡 Learning Tips

✅ **DO:**
- Type code yourself (don't just read)
- Modify examples and observe changes
- Make notes about key concepts
- Do practice exercises
- Experiment with hyperparameters

❌ **DON'T:**
- Skip theory for code only
- Rush through topics
- Copy-paste without understanding
- Skip practice problems
- Ignore error messages

## 🔗 Navigation Guide

### By Goal
- **Want to learn classification?** → Start with [Logistic Regression](./01_logistic_regression/)
- **Interested in trees?** → Go to [Decision Trees](./02_decision_tree/)
- **Ready for deep learning?** → Check [Deep Learning](./04_deep_learning/)
- **Need practice?** → See practice questions in module READMEs

### By Topic
- **Optimization**: Logistic Regression → Notebook 4
- **Information Theory**: Decision Trees → Notebooks 2-3
- **Neural Networks**: Deep Learning → 01_ann/
- **Computer Vision**: Deep Learning → 02_cnn/
- **Sequences/Time Series**: Deep Learning → 03_rnn/

## 📋 Module Checklist

Track your progress:

```
Legend: ⬜ Not Started | 🟨 In Progress | ✅ Completed

[ ] 0️⃣ Test Environment
    └─ [ ] test_notebook.ipynb

[ ] 1️⃣ Logistic Regression  
    ├─ [ ] 01_linear_to_logistic
    ├─ [ ] 02_decision_boundary
    ├─ [ ] 03_loss_functions
    ├─ [ ] 04_gradient_descent
    ├─ [ ] 05_sklearn_implementation
    └─ [ ] 06_regularization

[ ] 2️⃣ Decision Trees
    ├─ [ ] 01_tree_basics
    ├─ [ ] 02_entropy_calculation
    ├─ [ ] 03_gini_impurity
    ├─ [ ] 04_sklearn_trees
    └─ [ ] 05_hyperparameter_tuning

[ ] 3️⃣ Support Vector Machines
    └─ [ ] 01_svm_basics

[ ] 4️⃣ Deep Learning
    ├─ [ ] ANN Module (04_deep_learning/01_ann/)
    ├─ [ ] CNN Module (04_deep_learning/02_cnn/)
    └─ [ ] RNN Module (04_deep_learning/03_rnn/)
```

## 🎓 After Completing Notebooks

1. **Review** key concepts from completed modules
2. **Apply** knowledge to portfolio projects
3. **Experiment** with your own datasets
4. **Combine** concepts to solve real problems
5. **Share** your learning in discussions

## 📚 Related Resources

- **Reading List**: See [../docs/LEARNING_PATH.md](../docs/LEARNING_PATH.md)
- **Setup Help**: See [../docs/SETUP.md](../docs/SETUP.md)
- **Troubleshooting**: See [../docs/TROUBLESHOOTING.md](../docs/TROUBLESHOOTING.md)
- **Resources**: See [../resources/](../resources/) folder

## 🔄 Environment Setup

Before starting, ensure:
- Python 3.8+ installed
- Virtual environment activated
- Required packages installed: `pip install -r requirements.txt`

Verify with: `python notebooks/00_tests/test_notebook.ipynb`

---

**Ready to Learn? Start with [Logistic Regression](./01_logistic_regression/) 🚀**
