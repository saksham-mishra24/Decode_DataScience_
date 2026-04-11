# 🎓 ML Learning & Portfolio Repository

> A comprehensive, beautifully structured machine learning learning platform combining educational content, production-ready code, and a professional portfolio showcase.

[![Python 3.8+](https://img.shields.io/badge/Python-3.8%2B-blue)](https://www.python.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](./LICENSE)
[![Contributions Welcome](https://img.shields.io/badge/Contributions-Welcome-brightgreen.svg)](./docs/CONTRIBUTING.md)

## 📚 Table of Contents

- [Quick Start](#-quick-start)
- [Repository Structure](#-repository-structure)  
- [Learning Modules](#-learning-modules)
- [Portfolio Projects](#-portfolio-projects)
- [Documentation](#-documentation)
- [Getting Help](#-getting-help)
- [Contributing](#-contributing)

---

## 🚀 Quick Start

### 1. Clone & Setup
```bash
git clone https://github.com/saksham-mishra24/Decode_DataScience_.git
cd Decode_DataScience_
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

### 2. Start Learning
```bash
jupyter notebook
```
Open `notebooks/01_logistic_regression/01_linear_to_logistic.ipynb` to begin.

### 3. Follow the Path
Start with the [Learning Path Guide](./docs/LEARNING_PATH.md) for recommended progression.

---

## 📁 Repository Structure

```
Decode_DataScience_/
├── 📖 docs/                    # 📚 Complete documentation
│   ├── LEARNING_PATH.md       # Recommended study sequence
│   ├── SETUP.md               # Installation guide
│   ├── PROJECT_STRUCTURE.md   # Directory breakdown
│   ├── CONTRIBUTING.md        # How to contribute
│   └── TROUBLESHOOTING.md     # Common issues & solutions
│
├── 📓 notebooks/              # 🎓 Learning modules (50+ hours)
│   ├── 00_tests/              # Environment verification
│   ├── 01_logistic_regression/     # Classification fundamentals (8-10 hrs)
│   ├── 02_decision_tree/           # Tree-based methods (6-8 hrs)
│   ├── 03_support_vector_machines/ # Margin-based classifiers (4-6 hrs)
│   └── 04_deep_learning/           # Neural networks (30+ hrs)
│       ├── 01_ann/            # Artificial Neural Networks
│       ├── 02_cnn/            # Convolutional Networks
│       └── 03_rnn/            # Recurrent Networks
│
├── 💻 src/                    # 🔧 Production code
│   ├── models/                # Model implementations
│   ├── preprocessing/         # Data utilities
│   ├── training/              # Training utilities
│   ├── evaluation/            # Metrics & evaluation
│   └── utils/                 # Helper functions
│
├── 💼 portfolio/              # 🎯 Professional projects
│   ├── projects/              # Real-world applications
│   │   ├── 01_customer_churn/
│   │   ├── 02_image_classification/
│   │   └── 03_time_series_prediction/
│   ├── assets/                # Models & visualizations
│   └── cv/                    # Curriculum vitae project
│
├── 📊 datasets/               # 📈 Training data
│   ├── churn_data/            # Customer data
│   ├── mnist/                 # Handwritten digits
│   └── pet_images/            # Image classification
│
├── 📁 data/                   # 🔄 Data pipeline
│   ├── raw/                   # Original data
│   ├── processed/             # Cleaned data
│   └── external/              # External sources
│
├── 📤 output/                 # 💾 Results & models
│   ├── models/                # Saved models
│   ├── logs/                  # Training logs
│   ├── plots/                 # Visualizations
│   └── results/              # Analysis results
│
├── 🧪 tests/                  # ✅ Test suite
├── 📚 resources/              # 🔗 Learning materials
├── 🔧 scripts/                # 🛠️ Utility scripts
└── 📋 ROOT FILES
    ├── README.md              # This file
    ├── requirements.txt       # Python dependencies
    ├── setup.py              # Package configuration
    ├── config.py             # Settings
    └── LICENSE               # MIT License
```

See [PROJECT_STRUCTURE.md](./docs/PROJECT_STRUCTURE.md) for detailed breakdown.

---

## 🎯 Learning Modules

Master machine learning with 4 progressive modules:

### 1️⃣ Logistic Regression (8-10 hours)
**Foundation of Classification**
- Linear to logistic transformation
- Decision boundaries
- Cross-entropy loss
- Gradient descent from scratch
- Regularization techniques
- **[Start Here →](./notebooks/01_logistic_regression/README.md)**

### 2️⃣ Decision Trees (6-8 hours)
**Tree-Based Learning**
- Information theory (entropy)
- Gini impurity calculations
- Tree construction algorithms
- Hyperparameter tuning
- Overfitting prevention
- **[Start Here →](./notebooks/02_decision_tree/README.md)**

### 3️⃣ Support Vector Machines (4-6 hours)
**Margin-Based Classification**
- Maximum margin principle
- Kernel methods
- Soft margin SVM
- Multi-class techniques
- **[Start Here →](./notebooks/03_support_vector_machines/README.md)**

### 4️⃣ Deep Learning (30+ hours)

#### 🧠 Artificial Neural Networks (10-12 hours)
- Network architecture & neurons
- Forward & backward propagation
- Activation functions
- MNIST digit classification
- **[Start Here →](./notebooks/04_deep_learning/01_ann/README.md)**

#### 🖼️ Convolutional Neural Networks (12-15 hours)
- Convolution operations
- Pooling & padding
- CNN architectures
- Transfer learning
- Image classification projects
- **[Start Here →](./notebooks/04_deep_learning/02_cnn/README.md)**

#### 🔄 Recurrent Neural Networks (10-12 hours)
- RNN fundamentals
- LSTM & GRU cells
- Sequence processing
- Time series prediction
- **[Start Here →](./notebooks/04_deep_learning/03_rnn/README.md)**

**Total Learning Time: 50-60+ hours**

---

## 💼 Portfolio Projects

Production-ready AI applications showcasing real-world ML skills:

### Project 1: Customer Churn Prediction 📊
**Challenge**: Predict customer attrition
- **Data**: 10,000 customer records
- **Target**: Binary churn classification
- **Model**: ANN with class balancing
- **Metrics**: Accuracy, Precision, Recall, F1, ROC-AUC
- **[View →](./portfolio/projects/01_customer_churn/)**

### Project 2: Image Classification 🖼️
**Challenge**: Cat vs Dog classification
- **Data**: 5,000+ labeled images
- **Model**: CNN with transfer learning (ResNet/VGG)
- **Techniques**: Data augmentation, fine-tuning
- **Metrics**: Accuracy, confusion matrix, ROC curves
- **[View →](./portfolio/projects/02_image_classification/)**

### Project 3: Time Series Prediction 📈
**Challenge**: Forecast future trends
- **Data**: Historical time series
- **Model**: LSTM recurrent network
- **Techniques**: Sequence-to-sequence learning
- **Metrics**: MAE, RMSE, R²
- **[View →](./portfolio/projects/03_time_series_prediction/)**

---

## 📖 Documentation

Complete guides for every aspect:

| Document | Purpose |
|----------|---------|
| [LEARNING_PATH.md](./docs/LEARNING_PATH.md) | **Start here!** Recommended study sequence |
| [SETUP.md](./docs/SETUP.md) | Environment setup & installation |
| [PROJECT_STRUCTURE.md](./docs/PROJECT_STRUCTURE.md) | Directory organization explained |
| [TROUBLESHOOTING.md](./docs/TROUBLESHOOTING.md) | Common issues & solutions |
| [CONTRIBUTING.md](./docs/CONTRIBUTING.md) | How to contribute |

---

## 🛠️ Installation & Setup

### Requirements
- **Python** 3.8 or higher
- **pip** or conda package manager
- **Git** for cloning repository
- **GPU** (optional for faster deep learning training)

### Step-by-Step Setup

```bash
# 1. Clone the repository
git clone https://github.com/saksham-mishra24/Decode_DataScience_.git
cd Decode_DataScience_

# 2. Create virtual environment
python -m venv venv

# 3. Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# 4. Install dependencies
pip install --upgrade pip
pip install -r requirements.txt

# 5. Verify installation
python -c "import tensorflow, torch, sklearn; print('✓ All libraries installed!')"

# 6. Start Jupyter
jupyter notebook
```

**Detailed setup guide**: See [SETUP.md](./docs/SETUP.md)

---

## 📚 Key Technologies

| Category | Tools |
|----------|-------|
| **Data Science** | NumPy, Pandas, Scikit-learn |
| **Visualization** | Matplotlib, Seaborn |
| **Deep Learning** | TensorFlow, Keras, PyTorch |
| **Computer Vision** | OpenCV, PIL |
| **NLP** | NLTK, SpaCy |

---

## 🎓 Course Outline

### Phase 1: Fundamentals (Weeks 1-3)
- Logistic Regression
- Decision Boundaries
- Optimization Fundamentals

### Phase 2: Classical ML (Weeks 3-7)
- Decision Trees
- Support Vector Machines
- Model Comparison

### Phase 3: Deep Learning (Weeks 7-12)
- Neural Networks
- CNNs for Computer Vision
- RNNs for Sequences

### Phase 4: Application (Weeks 12+)
- Portfolio Projects
- Deployment
- Production ML

---

## ✅ Quick Start Checklist

- [ ] Clone repository
- [ ] Set up Python virtual environment
- [ ] Install requirements
- [ ] Run test notebook
- [ ] Read [Learning Path](./docs/LEARNING_PATH.md)
- [ ] Open first notebook
- [ ] Begin learning! 🚀

---

## 💡 Learning Tips

✅ **Best Practices:**
- Code along with notebooks (don't just read)
- Experiment by modifying code
- Take notes in markdown cells
- Complete practice problems
- Review previous concepts regularly
- Build your own projects

❌ **Avoid:**
- Rushing through concepts
- Skipping theory for code
- Using someone else's code without understanding
- Ignoring errors and warnings
- Training huge models without GPU

---

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./docs/CONTRIBUTING.md) for:
- How to add notebooks
- Code style guidelines
- Pull request process
- Recognition for contributors

---

## ❓ Getting Help

### Resources
- **Documentation**: Check [docs/](./docs/) folder
- **Troubleshooting**: See [TROUBLESHOOTING.md](./docs/TROUBLESHOOTING.md)
- **GitHub Issues**: Report bugs or ask questions
- **Discussions**: Join community discussions

### Common Questions
- **Setup issues?** → See [SETUP.md](./docs/SETUP.md)
- **Learning path?** → See [LEARNING_PATH.md](./docs/LEARNING_PATH.md)
- **Structure?** → See [PROJECT_STRUCTURE.md](./docs/PROJECT_STRUCTURE.md)
- **Errors?** → See [TROUBLESHOOTING.md](./docs/TROUBLESHOOTING.md)

---

## 📊 Repository Statistics

- 📓 **20+ Jupyter Notebooks**
- 📖 **1,000+ Pages of Educational Content**
- 💻 **500+ Lines of Production Code**
- 📈 **3 Complete Portfolio Projects**
- ⏱️ **50-60+ Hours of Learning Material**
- 📚 **Comprehensive Documentation**

---

## 📜 License

This project is licensed under the **MIT License** - see [LICENSE](./LICENSE) file for details.

---

## 🙏 Acknowledgments

- Directorate General of Training (DGT)
- Microsoft for partnership
- Open-source community
- All learners and contributors

---

## 🌟 Quick Navigation

**First Time?** → Start with [Quick Start](#-quick-start) section

**Want to Learn?** → Check [Learning Modules](#-learning-modules)

**Need Help?** → See [Getting Help](#-getting-help)

**Want to Contribute?** → Read [CONTRIBUTING.md](./docs/CONTRIBUTING.md)

---

## 📞 Contact & Links

- **GitHub**: [@saksham-mishra24](https://github.com/saksham-mishra24)
- **Repository**: [Decode_DataScience_](https://github.com/saksham-mishra24/Decode_DataScience_)
- **Issues**: [Report bugs or suggest features](https://github.com/saksham-mishra24/Decode_DataScience_/issues)

---

<div align="center">

**🚀 Ready to Master Machine Learning?**

[Start Learning Now →](./docs/LEARNING_PATH.md)

---

Made with ❤️ for AI & Machine Learning Enthusiasts

**Last Updated**: April 2026

</div>

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
