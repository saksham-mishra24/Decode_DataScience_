# 🐛 Troubleshooting Guide

Solutions for common issues encountered while learning with this repository.

## 🔧 Installation & Setup Issues

### Issue: `pip install` command not found
**Windows:**
```bash
python -m pip install --upgrade pip
```

**macOS/Linux:**
```bash
python3 -m pip install --upgrade pip
```

### Issue: Virtual environment not activating

**Windows:**
```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
venv\Scripts\activate
```

**macOS/Linux:**
```bash
source venv/bin/activate
```

### Issue: ModuleNotFoundError when importing libraries

**Solution:** Ensure virtual environment is active and packages installed
```bash
which python
pip list
pip install -r requirements.txt
```

### Issue: Jupyter kernel error

**Solution:** Reinstall ipykernel
```bash
pip install --force-reinstall ipykernel
python -m ipykernel install --user
```

---

## 📓 Jupyter Notebook Issues

### Issue: Notebook won't open/load

**Solutions:**
- Clear browser cache (Ctrl+Shift+Delete)
- Try different browser
- Restart Jupyter server
```bash
jupyter notebook --no-browser
```

### Issue: Cells won't execute

**Solutions:**
- Kernel may be dead, restart it (Kernel → Restart)
- Missing imports, check all `import` statements
- Ensure working directory is correct

### Issue: Out of memory error

**Solutions:**
- Close other applications
- Clear notebook output: Kernel → Clear All Output
- Work with smaller data samples
- Increase virtual memory

### Issue: GPU not being used by TensorFlow

**Solutions:**
- Verify CUDA installation for GPU support
- For CPU-only: This is normal, TensorFlow will use CPU
```python
import tensorflow as tf
print(tf.config.list_physical_devices('GPU'))
```

---

## 📊 Data Loading Issues

### Issue: File not found error
```
FileNotFoundError: [Errno 2] No such file or directory: 'datasets/...'
```

**Solution:** Check working directory
```python
import os
print(os.getcwd())
# Should be root directory of repository
```

### Issue: CSV encoding error

**Solution:** Specify encoding
```python
import pandas as pd
df = pd.read_csv('file.csv', encoding='utf-8')
# Try 'latin1' or 'iso-8859-1' if utf-8 fails
```

### Issue: Image file path errors

**Solution:** Use absolute paths or relative from notebook location
```python
import os
image_path = os.path.join('../../datasets/pet_images/', 'image.jpg')
```

---

## 🧮 Machine Learning Issues

### Issue: Model not converging
- Reduce learning rate
- Scale features (normalize/standardize)
- Increase number of iterations
- Check data for issues (NaN, Inf values)

### Issue: Overfitting
- Reduce model complexity
- Add regularization (L1/L2)
- Increase training data
- Use early stopping
- Add dropout layers (for neural networks)

### Issue: Poor model performance
- Check data quality
- Verify train/test split
- Try different algorithms
- Adjust hyperparameters
- Check for class imbalance

### Issue: Extremely slow training
- Reduce dataset size for testing
- Use smaller model
- Enable GPU if available
- Check for numerical issues in data

---

## 🎨 Visualization Issues

### Issue: Plots not showing in notebook

**Solution:** Add matplotlib magic command at top of notebook
```python
%matplotlib inline
import matplotlib.pyplot as plt
```

### Issue: Plots are too small

**Solution:** Set figure size
```python
plt.figure(figsize=(12, 8))
# Your plotting code
```

### Issue: Text labels overlapping

**Solution:** Rotate and adjust layout
```python
plt.xticks(rotation=45)
plt.tight_layout()
```

---

## 🔋 Common Python Errors

### Error: `NameError: name 'X' is not defined`
- Variable not assigned before use
- Typo in variable name
- Cell executed out of order
- **Fix:** Re-run all cells from top to bottom

### Error: `ImportError: cannot import name X`
- Package not installed
- Wrong import name
- **Fix:** `pip install package_name`

### Error: `AttributeError: '...' object has no attribute 'X'`
- Wrong method/attribute name
- DataFrame column doesn't exist
- **Fix:** Check spelling and available attributes with `dir(object)`

### Error: `IndexError: index out of range`
- Accessing non-existent index
- Array/list smaller than expected
- **Fix:** Check data shape with `.shape` or `len()`

---

## 🔍 Debugging Tips

### 1. Print Debug Information
```python
print(f"Shape: {data.shape}")
print(f"Type: {type(data)}")
print(f"Head:\n{data.head()}")
```

### 2. Check Data Types
```python
print(data.dtypes)
print(data.info())
```

### 3. Find Missing Values
```python
print(data.isnull().sum())
```

### 4. Use Assertions
```python
assert data.shape[0] > 0, "Dataset is empty!"
assert not data.isnull().any(), "Data contains NaN values"
```

### 5. Step Through Code
- Use debugger: `import pdb; pdb.set_trace()`
- Execute cells individually
- Break complex operations into steps

---

## ❓ Still Having Issues?

1. **Check relevant module README** for topic-specific help
2. **Review notebook cells** that worked previously
3. **Search error message** on Stack Overflow
4. **Open GitHub Issue** with:
   - Error message (full traceback)
   - Your Python/library versions
   - Steps to reproduce
   - Operating system

### Useful Debug Commands
```python
import sys
sys.version  # Python version

import numpy as np
np.__version__  # NumPy version

import pandas as pd
pd.__version__  # Pandas version

import tensorflow as tf
tf.__version__  # TensorFlow version
```

---

**Can't find your issue? Create a GitHub Issue with details! 🎯**
