# 🔧 Setup & Installation Guide

Complete guide to set up your development environment.

## System Requirements

- **Python**: 3.8 or higher
- **Operating System**: Windows, macOS, or Linux
- **RAM**: 4GB minimum (8GB recommended)
- **Disk Space**: 2GB for repository + dependencies

## Step 1: Clone Repository

```bash
git clone https://github.com/saksham-mishra24/Decode_DataScience_.git
cd Decode_DataScience_
```

## Step 2: Create Virtual Environment

### Windows
```bash
python -m venv venv
venv\Scripts\activate
```

### macOS/Linux
```bash
python3 -m venv venv
source venv/bin/activate
```

## Step 3: Install Dependencies

```bash
pip install --upgrade pip
pip install -r requirements.txt
```

### Key Libraries Installed
- **NumPy**: Numerical computing
- **Pandas**: Data manipulation
- **Scikit-learn**: Machine learning algorithms
- **TensorFlow/Keras**: Deep learning
- **Matplotlib/Seaborn**: Data visualization
- **Jupyter**: Interactive notebooks

## Step 4: Verify Installation

```bash
python -c "import tensorflow, torch, sklearn; print('All libraries installed successfully!')"
```

## Step 5: Start Jupyter

```bash
jupyter notebook
```

Then navigate to the notebooks folder and open any `.ipynb` file to get started.

## 📦 Package Versions

See `requirements.txt` for exact versions of all packages.

## 🐛 Troubleshooting

### Issue: Python not found
**Solution**: Ensure Python is in PATH or use full path to python.exe

### Issue: pip install fails
**Solution**: Try upgrading pip first
```bash
python -m pip install --upgrade pip
```

### Issue: Virtual environment not activating
**Solution**: Check script execution policy on Windows
```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Issue: Jupyter kernel not working
**Solution**: Reinstall ipykernel
```bash
pip install --force-reinstall ipykernel
```

### Issue: TensorFlow/GPU issues
**Solution**: Ensure CUDA compatibility for GPU support

## 🚀 Quick Start

1. Clone repo → Create venv → Install packages → Start Jupyter
2. Open `notebooks/01_logistic_regression/01_linear_to_logistic.ipynb`
3. Verify setup by running first cell
4. Follow the learning path in `LEARNING_PATH.md`

## 💾 Data Setup

Large datasets are included in `datasets/` folder:
- `churn_data/`: Customer churn modeling data
- `mnist/`: MNIST digit classification
- `pet_images/`: Image classification data

## 📚 Additional Resources

- [Python Documentation](https://docs.python.org/)
- [Sklearn API Reference](https://scikit-learn.org)
- [TensorFlow Docs](https://www.tensorflow.org/api_docs)
- [Jupyter Documentation](https://jupyter.readthedocs.io/)

---

**Ready? Start with [Learning Path](./LEARNING_PATH.md) 🎓**
