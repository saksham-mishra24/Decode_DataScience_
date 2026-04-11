# 📁 Project Structure Explained

A detailed breakdown of the repository organization and directory purposes.

## Directory Tree

```
Decode_DataScience_/
│
├── 📋 ROOT FILES
│   ├── README.md                    # Main repository overview
│   ├── requirements.txt             # Python dependencies
│   ├── setup.py                     # Package setup configuration
│   ├── config.py                    # Configuration settings
│   └── LICENSE                      # MIT License
│
├── 📚 docs/                         # Documentation & Guides
│   ├── LEARNING_PATH.md            # Recommended learning sequence
│   ├── SETUP.md                    # Installation guide
│   ├── PROJECT_STRUCTURE.md        # This file
│   ├── CONTRIBUTING.md             # Contribution guidelines
│   └── TROUBLESHOOTING.md          # Common issues & solutions
│
├── 📓 notebooks/                    # Learning Jupyter Notebooks
│   ├── 00_tests/
│   │   └── test_notebook.ipynb     # Quick environment test
│   │
│   ├── 01_logistic_regression/     # Classification Fundamentals
│   │   ├── 01_linear_to_logistic.ipynb
│   │   ├── 02_decision_boundary.ipynb
│   │   ├── 03_loss_functions.ipynb
│   │   ├── 04_gradient_descent.ipynb
│   │   ├── 05_sklearn_implementation.ipynb
│   │   ├── 06_regularization.ipynb
│   │   └── README.md               # Module guide
│   │
│   ├── 02_decision_tree/           # Tree-Based Classification
│   │   ├── 01_tree_basics.ipynb
│   │   ├── 02_entropy_calculation.ipynb
│   │   ├── 03_gini_impurity.ipynb
│   │   ├── 04_sklearn_trees.ipynb
│   │   ├── 05_hyperparameter_tuning.ipynb
│   │   └── README.md
│   │
│   ├── 03_support_vector_machines/ # Advanced Classification
│   │   ├── 01_svm_basics.ipynb
│   │   └── README.md
│   │
│   ├── 04_deep_learning/           # Neural Networks
│   │   ├── 01_ann/                 # Artificial Neural Networks
│   │   │   ├── 04_mnist_classification.ipynb
│   │   │   └── README.md
│   │   │
│   │   ├── 02_cnn/                 # Convolutional Networks
│   │   │   ├── 00_cnn_students.ipynb
│   │   │   ├── 01_convolution_operation.ipynb
│   │   │   ├── 02_padding_strategies_demo.ipynb
│   │   │   ├── 02_pooling_demo.ipynb
│   │   │   ├── 03_padding_strategies.ipynb
│   │   │   ├── 04_cnn_architecture.ipynb
│   │   │   ├── 05_transfer_learning.ipynb
│   │   │   ├── 06_custom_architectures.ipynb
│   │   │   ├── 07_image_classification_project.ipynb
│   │   │   └── README.md
│   │   │
│   │   ├── 03_rnn/                 # Recurrent Networks
│   │   │   ├── 01_rnn_basics.ipynb
│   │   │   ├── 02_rnn_numpy_implementation.ipynb
│   │   │   ├── 03_integer_encoding.ipynb
│   │   │   └── README.md
│   │   │
│   │   └── README.md               # Deep learning overview
│   │
│   └── README.md                   # Notebooks index
│
├── 💻 src/                         # Reusable Python Modules
│   ├── __init__.py
│   ├── models/                     # Model implementations
│   │   └── __init__.py
│   │
│   ├── preprocessing/              # Data preprocessing utilities
│   │   └── __init__.py
│   │
│   ├── training/                   # Training utilities
│   │   └── __init__.py
│   │
│   ├── evaluation/                 # Evaluation metrics
│   │   └── __init__.py
│   │
│   └── utils/                      # Helper functions
│       └── __init__.py
│
├── 📊 datasets/                    # Training & Test Data
│   ├── churn_data/
│   │   └── Churn_Modelling.csv     # Customer churn data
│   │
│   ├── mnist/                      # MNIST handwritten digits
│   │   └── (compressed files)
│   │
│   └── pet_images/                 # Pet image classification
│       └── (compressed files)
│
├── 📁 data/                        # Data Processing Pipeline
│   ├── raw/                        # Original unprocessed data
│   ├── processed/                  # Cleaned & transformed data
│   └── external/                   # External data sources
│
├── 🎯 portfolio/                   # Professional Showcase Projects
│   ├── cv/
│   │   ├── cv.ipynb               # Curriculum Vitae project
│   │   └── profile.py             # Profile information
│   │
│   ├── assets/
│   │   ├── images/                # Project visualizations
│   │   ├── models/                # Trained model files
│   │   └── results/               # Output results
│   │
│   └── projects/
│       ├── 01_customer_churn/      # Customer churn prediction
│       │   └── notebook.ipynb
│       │
│       ├── 02_image_classification/ # Image classification
│       │   └── (project files)
│       │
│       └── 03_time_series_prediction/ # Time series forecasting
│           └── (project files)
│
├── 📈 output/                      # Generated Results & Models
│   ├── logs/                       # Training logs
│   ├── models/                     # Saved model files
│   ├── plots/                      # Generated visualizations
│   └── results/                    # Analysis results
│
├── 🧪 tests/                       # Test Suite
│   └── __init__.py
│
├── 📚 resources/                   # Learning Resources
│   ├── TOOLS.md                   # Tools & libraries reference
│   ├── BOOKS.md                   # Recommended books
│   ├── LINKS.md                   # Useful external resources
│   └── CHEATSHEETS.md             # Quick reference guides
│
├── 🔧 scripts/                     # Utility Scripts
│   └── setup_data.py              # Data preparation scripts
│
├── 📦 .github/                     # GitHub Configuration
│   ├── workflows/                 # CI/CD pipelines
│   └── ISSUE_TEMPLATE/            # Issue templates
│
└── 🔖 VERSION.md                   # Version history

```

## 📖 File Descriptions

### Root Configuration Files
- **README.md**: Main entry point with overview and quick start
- **requirements.txt**: All Python package dependencies with versions
- **setup.py**: Package configuration for installation
- **config.py**: Project-wide configuration settings
- **LICENSE**: MIT License

### Documentation (`docs/`)
- **LEARNING_PATH.md**: Recommended study progression
- **SETUP.md**: Environment setup instructions
- **PROJECT_STRUCTURE.md**: This directory guide
- **CONTRIBUTING.md**: Contribution guidelines
- **TROUBLESHOOTING.md**: Common issues & solutions

### Notebooks (`notebooks/`)
- **Module Structure**: Each module (01_, 02_, etc.) contains focused notebooks
- **Progressive Topics**: Notebooks numbered in learning sequence
- **Module README**: Each module has its own guide

### Source Code (`src/`)
- **models/**: Machine learning model implementations
- **preprocessing/**: Data cleaning & transformation functions
- **training/**: Model training utilities and callbacks
- **evaluation/**: Metrics and evaluation functions
- **utils/**: Helper functions and utilities

### Data (`datasets/` & `data/`)
- **datasets/**: Pre-included training datasets
- **data/raw/**: Original data before processing
- **data/processed/**: Cleaned and transformed data
- **data/external/**: Additional external data

### Portfolio (`portfolio/`)
- Professional projects showcasing ML applications
- Client-ready implementations
- Real-world use case demonstrations

### Output (`output/`)
- Training logs and checkpoints
- Saved trained models
- Generated visualizations and plots
- Analysis and results

## 🔄 Data Flow

```
Raw Data (data/raw/)
    ↓
Preprocessing (src/preprocessing/)
    ↓
Processed Data (data/processed/)
    ↓
Model Training (src/training/)
    ↓
Trained Models (output/models/)
    ↓
Evaluation (src/evaluation/)
    ↓
Results & Plots (output/results/, output/plots/)
```

## 🎯 Usage Patterns

### Learning Path
1. Start with `notebooks/01_logistic_regression/`
2. Follow numbered sequences
3. Read module README for context
4. Check `docs/LEARNING_PATH.md` for recommendations

### Importing Source Code
```python
from src.preprocessing import clean_data
from src.training import train_model
from src.evaluation import evaluate_metrics
```

### Managing Data
- Keep raw data in `data/raw/`
- Save processed output to `data/processed/`
- Reference datasets stored in `datasets/`

### Saving Results
- Models → `output/models/`
- Plots → `output/plots/`
- Logs → `output/logs/`
- Other results → `output/results/`

## 📋 Adding New Content

### Adding a New Notebook Module
```
notebooks/
└── 0X_new_topic/
    ├── 01_introduction.ipynb
    ├── 02_concepts.ipynb
    ├── 03_implementation.ipynb
    └── README.md
```

### Adding New Source Code
```
src/
└── new_module/
    ├── __init__.py
    ├── utilities.py
    └── core.py
```

## ✅ Best Practices

1. **Keep notebooks educational** - Add explanations and visualizations
2. **Organize by topic** - Use numbered prefixes for sequencing
3. **Document changes** - Update README files when adding content
4. **Clean outputs** - Don't commit large output files
5. **Use meaningful names** - Avoid generic names like "test.ipynb"
6. **Version data** - Track data changes in version history

---

**Need help? Check [SETUP.md](./SETUP.md) or [TROUBLESHOOTING.md](./TROUBLESHOOTING.md) 🚀**
