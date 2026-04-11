# ML Learning & Portfolio 🎓

A comprehensive machine learning project combining learning materials, production-ready code, and portfolio showcase projects.

## 📖 Quick Navigation

| Section | Purpose | Contents |
|---------|---------|----------|
| **[notebooks/](./notebooks/)** | Learning path | 4 topics with 20+ Jupyter notebooks |
| **[src/](./src/)** | Production code | Reusable Python modules |
| **[portfolio/](./portfolio/)** | Showcase projects | Client-ready projects for employers |
| **[data/](./data/)** & **[datasets/](./datasets/)** | Data | Raw, processed, and external data |

---

## 🎯 Project Topics

### 1. Logistic Regression
Learn the fundamentals of binary classification from linear regression to logistic regression.
- Decision boundaries
- Loss functions (cross-entropy)
- Gradient descent optimization
- Regularization (L1/L2)
- **[Start here →](./notebooks/01_logistic_regression/)**

### 2. Decision Trees
Master tree-based classification algorithms.
- Information gain & entropy
- Gini impurity
- Tree construction
- Hyperparameter tuning
- **[Start here →](./notebooks/02_decision_tree/)**

### 3. Support Vector Machines
Understanding margin-based classifiers.
- SVM theory
- Kernel methods
- Multiclass classification
- **[Start here →](./notebooks/03_support_vector_machines/)**

### 4. Deep Learning
Neural networks from basics to advanced architectures.

#### 4.1 Artificial Neural Networks (ANN)
- Network architecture
- Forward & backward propagation
- Activation functions
- **[Start here →](./notebooks/04_deep_learning/01_ann/)**

#### 4.2 Convolutional Neural Networks (CNN)
- Convolution operations
- Pooling strategies
- Padding techniques
- Transfer learning
- Image classification projects
- **[Start here →](./notebooks/04_deep_learning/02_cnn/)**

#### 4.3 Recurrent Neural Networks (RNN)
- RNN fundamentals
- Sequence processing
- Text encoding
- Time series prediction
- **[Start here →](./notebooks/04_deep_learning/03_rnn/)**

---

## 💼 Portfolio Projects

Polished, production-ready demonstrations of ML skills.

### Project 1: Customer Churn Prediction
**Problem**: Predict which customers will churn
- **Model**: Artificial Neural Network
- **Challenge**: Handling class imbalance
- **Metrics**: Precision, Recall, F1-Score
- **[View Project →](./portfolio/projects/01_customer_churn/)**

### Project 2: Image Classification
**Problem**: Classify pet images (cats vs. dogs)
- **Model**: CNN with Transfer Learning
- **Dataset**: 10,000+ labeled images
- **Techniques**: Data augmentation, fine-tuning
- **[View Project →](./portfolio/projects/02_image_classification/)**

### Project 3: Time Series Prediction
**Problem**: Forecast future values
- **Model**: LSTM RNN
- **Techniques**: Sequence-to-sequence learning
- **[View Project →](./portfolio/projects/03_time_series_prediction/)**

---

## 🛠️ Installation & Setup

### Prerequisites
- Python 3.8+
- pip or conda

### Quick Start

```bash
# 1. Clone or navigate to project
cd ml-learning-portfolio

# 2. Create virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# 3. Install dependencies
pip install -r requirements.txt

# 4. Launch Jupyter
jupyter notebook

# 5. Open notebooks/ folder and start with 01_logistic_regression/
```

### Dependencies

```
numpy>=1.20.0
pandas>=1.3.0
scikit-learn>=1.0.0
tensorflow>=2.8.0
matplotlib>=3.4.0
seaborn>=0.11.0
jupyter>=1.0.0
```

See [requirements.txt](./requirements.txt) for full list.

---

## 📁 Project Structure

```
ml-learning-portfolio/
├── notebooks/                 # Learning materials (20+ notebooks)
├── src/                      # Production Python code
├── portfolio/                # Showcase projects
├── data/                     # Data files
├── datasets/                 # Large datasets
├── output/                   # Generated outputs
├── tests/                    # Unit tests
├── requirements.txt          # Dependencies
├── config.py                 # Configuration
└── setup.py                  # Package setup
```

Full structure details: [FOLDER_TREE_VISUAL.md](./FOLDER_TREE_VISUAL.md)

---

## 🎓 Learning Path

**Recommended progression**:
1. Start with [01_logistic_regression](./notebooks/01_logistic_regression/) (easiest)
2. Move to [02_decision_tree](./notebooks/02_decision_tree/) (intuitive)
3. Learn [03_support_vector_machines](./notebooks/03_support_vector_machines/) (mathematical)
4. Deep dive into [04_deep_learning](./notebooks/04_deep_learning/) (advanced)

Each notebook builds on previous concepts. **Run cells sequentially** for best results.

---

## 📊 Data

### Available Datasets

| Dataset | Size | Location | Purpose |
|---------|------|----------|---------|
| Pet Images | ~10GB | `datasets/pet_images/` | Image classification |
| Churn Modeling | ~20MB | `datasets/churn_data/` | ANN practice |
| MNIST | - | `datasets/mnist/` | Digit classification |

**Note**: Large image datasets are excluded from version control. Download via notebooks or scripts.

---

## 💻 Production Code (src/)

Reusable Python modules for real-world ML pipelines.

### Models
```python
from src.models import LogisticRegression, DecisionTree, SVM, CNN, LSTM

# Use in your own projects
model = CNN(input_shape=(224, 224, 3))
model.fit(X_train, y_train)
```

### Preprocessing
```python
from src.preprocessing import DataLoader, Encoder

loader = DataLoader('data/raw/dataset.csv')
data = loader.load()
```

### Training
```python
from src.training import Trainer

trainer = Trainer(model, loss='categorical_crossentropy')
trainer.fit(X_train, y_train, epochs=50)
```

---

## 🧪 Testing

Run unit tests:
```bash
pytest tests/
```

---

## 📈 Next Steps

- [ ] Complete learning notebooks (01-04)
- [ ] Build portfolio projects
- [ ] Extract techniques into src/ modules
- [ ] Create additional projects
- [ ] Share on GitHub
- [ ] Write blog posts explaining concepts

---

## 📚 Additional Resources

### Recommended Learning
- Andrew Ng's Machine Learning Course (Coursera)
- Fast.ai Deep Learning Course
- "Hands-On Machine Learning" by Aurélien Géron

### Tools & Libraries
- **scikit-learn**: Classical ML algorithms
- **TensorFlow/Keras**: Deep learning
- **Jupyter**: Interactive notebooks
- **Pandas**: Data manipulation

---

## 🤝 Contributing

Improvements welcome! Areas for contribution:
- Additional algorithms
- More portfolio projects
- Better documentation
- Code optimizations
- Bug fixes

---

## 📄 License

This project is for educational purposes.

---

## 👤 About

Created as a comprehensive resource for learning machine learning from fundamentals to advanced techniques, with real-world portfolio projects.

**Last Updated**: 2026  
**Notebooks**: 20+  
**Projects**: 3  
**Topics Covered**: 4 major areas

---

## 🚀 Quick Commands

```bash
# Run all tests
pytest tests/ -v

# Install in development mode
pip install -e .

# Generate API documentation
sphinx-build -b html docs docs/_build

# Format code
black src/ notebooks/

# Lint code
pylint src/
```

---

## ❓ FAQs

**Q: What's the best way to start?**  
A: Start with [notebooks/01_logistic_regression/01_linear_to_logistic.ipynb](./notebooks/01_logistic_regression/01_linear_to_logistic.ipynb)

**Q: Can I run notebooks offline?**  
A: Yes! Download datasets first, then run jupyter offline.

**Q: How do I use src/ modules in my own code?**  
A: Install locally: `pip install -e .` then `from src.models import CNN`

**Q: Are there pre-trained models?**  
A: Yes! Check [portfolio/assets/models/](./portfolio/assets/models/) for saved models.

---

**Ready to learn? [Start with Notebook 1 →](./notebooks/01_logistic_regression/01_linear_to_logistic.ipynb)**
