# 📚 Learning Path Guide

A structured progression through this AI & Data Science learning repository.

## 🎯 Recommended Sequence

### Phase 1: Fundamentals (Start Here)
**Duration: 2-3 weeks**

1. **[Logistic Regression](../notebooks/01_logistic_regression/)**
   - Learn classification fundamentals
   - Understand decision boundaries
   - Master gradient descent and optimization
   - **Topics:** Linear to Logistic, Boundaries, Loss Functions, Regularization
   - **Prerequisites:** Python basics, Linear Algebra

### Phase 2: Tree-Based Methods (Weeks 3-5)
**Duration: 2-3 weeks**

2. **[Decision Trees](../notebooks/02_decision_tree/)**
   - Understand information theory in ML
   - Learn tree construction algorithms
   - Master hyperparameter tuning
   - **Topics:** Entropy, Gini Impurity, Sklearn Implementation, Tuning
   - **Prerequisites:** Logistic Regression foundational understanding

### Phase 3: Advanced Classification (Weeks 5-7)
**Duration: 2 weeks**

3. **[Support Vector Machines](../notebooks/03_support_vector_machines/)**
   - Learn margin-based classification
   - Understand kernel methods
   - Apply to real-world problems
   - **Topics:** SVM Basics, Kernel Methods
   - **Prerequisites:** Decision Trees, Linear Algebra

### Phase 4: Deep Learning (Weeks 7-12)
**Duration: 5+ weeks**

4. **[Deep Learning - Artificial Neural Networks](../notebooks/04_deep_learning/01_ann/)**
   - Build neural networks from scratch
   - Understand backpropagation
   - Master TensorFlow/Keras
   - **Topics:** Forward/Backward Propagation, Architectures

5. **[Deep Learning - Convolutional Neural Networks](../notebooks/04_deep_learning/02_cnn/)**
   - Learn image processing with CNNs
   - Master convolution operations
   - Practice with real datasets (MNIST)
   - **Topics:** Convolution, Padding, Pooling, Transfer Learning, Custom Architectures
   - **Prerequisites:** ANN fundamentals

6. **[Deep Learning - Recurrent Neural Networks](../notebooks/04_deep_learning/03_rnn/)**
   - Understand sequence processing
   - Learn RNN architectures
   - Apply to time series and text
   - **Topics:** RNN Basics, Numpy Implementation, Encoding

## 📊 Estimated Time Commitment

| Section | Hours | Level |
|---------|-------|-------|
| Logistic Regression | 8-10 | Beginner |
| Decision Trees | 6-8 | Intermediate |
| SVM | 4-6 | Intermediate |
| ANN | 10-12 | Advanced |
| CNN | 12-15 | Advanced |
| RNN | 10-12 | Advanced |
| **Total** | **50-63** | - |

## 🛠️ Environment Setup

Before starting, ensure you have:
- Python 3.8+
- Jupyter Notebook
- Required packages (see [Setup Guide](./SETUP.md))

```bash
# Clone repository
git clone <repository-url>
cd <repository-name>

# Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

## 💡 Learning Tips

1. **Code Along**: Don't just read, type and execute every example
2. **Experiment**: Modify code to understand how changes affect output
3. **Take Notes**: Document your understanding in markdown cells
4. **Practice**: Solve practice problems in each module
5. **Review**: Revisit previous modules every 2 weeks
6. **Build**: Apply concepts to your own projects

## 🎓 How to Use Each Notebook

Each notebook in the modules follows this structure:

```
├── 📝 Theory & Explanation
├── 💻 Code Examples with Output
├── 🔍 Visualization & Intuition
├── 📚 Mathematical Foundations
├── ✅ Practice Exercises
├── 🎯 Key Takeaways
└── 🔗 Related Topics & Next Steps
```

## 📈 Progression Levels

- **Beginner** (Weeks 1-3): Decision boundary concepts, basic optimization
- **Intermediate** (Weeks 3-7): Tree methods, SVMs, kernel tricks
- **Advanced** (Weeks 7-12): Deep learning architecture design, training strategies

## 🚀 Getting Help

- **Errors in notebooks**: Check troubleshooting guides in each module
- **Conceptual confusion**: Review the theory section in earlier notebooks
- **Stuck on a problem**: Try the solution notebooks or seek help in discussions
- **Environment issues**: See [Setup Guide](./SETUP.md)

## 📝 Completion Checklist

Track your progress:

- [ ] Logistic Regression - All notebooks completed
- [ ] Decision Trees - All notebooks completed
- [ ] SVMs - All notebooks completed
- [ ] ANN - All notebooks completed
- [ ] CNN - All notebooks completed
- [ ] RNN - All notebooks completed
- [ ] Review & Reinforce - Revisit key concepts
- [ ] Real-world Project - Apply knowledge to portfolio project

## 🎯 Next Steps After Learning

1. **Build Projects**: Apply learned algorithms to real datasets
2. **Study Advanced Topics**: Regularization, ensemble methods, optimization techniques
3. **Deploy Models**: Learn Flask/Docker for production deployment
4. **Contribute**: Share your notebooks and improvements via GitHub

---

**Happy Learning! 🚀**
