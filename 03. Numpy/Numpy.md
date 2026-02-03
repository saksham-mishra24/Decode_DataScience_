# NumPy –  Notes

> **Purpose of this file**
> This document is designed for students as a **single, clean reference**.

---

## 1. What is NumPy?

NumPy is a Python library used for **scientific and numerical computing**.
It is mainly used when we need **fast calculations on large amounts of numerical data**.

### Why NumPy?
- Faster than normal Python lists
- Supports mathematical and statistical operations
- Foundation of Data Science, Machine Learning, and AI libraries

---

## 2. Core Concept: ndarray

The main object in NumPy is the **ndarray (n‑dimensional array)**.

Key properties of ndarray:
- Stores data of **same datatype** (homogeneous)
- Can be **1D, 2D, 3D or higher dimensional**
- Stored in **contiguous memory**, which makes it fast

---

## 3. NumPy vs Python Lists

| Feature | Python List | NumPy Array |
|------|-----------|-------------|
| Size | Dynamic | Fixed at creation |
| Datatype | Mixed allowed | Same datatype |
| Speed | Slower | Very fast |
| Math Operations | Loop required | Vectorized (no loops) |

Scientific libraries like **pandas, scipy, matplotlib** internally use NumPy arrays.

---

## 4. Importing NumPy

```python
import numpy as np
```
This imports NumPy using the standard alias `np`.

---

## 5. Creating NumPy Arrays

### 5.1 Using np.array()

```python
a = np.array([1, 2, 3])
```
Creates a **1D array (vector)**.

```python
b = np.array([[1, 2, 3], [4, 5, 6]])
```
Creates a **2D array (matrix)**.

```python
c = np.array([[[1, 2], [3, 4]], [[5, 6], [7, 8]]])
```
Creates a **3D array (collection of 2D arrays)**.

---

## 6. Array Dimensions and Size

```python
a.ndim     # Number of dimensions
a.size     # Total number of elements
```

---

## 7. Datatype (dtype)

By default, NumPy chooses an appropriate datatype automatically.

```python
np.array([1, 2, 3], dtype=np.float32)
```
Creates an array with float values.

### Why datatype matters?
Smaller datatypes consume **less memory** and improve performance.

---

## 8. Creating Arrays with Ranges

### 8.1 np.arange()

```python
np.arange(1, 11, 2)
```
Creates values from 1 to 10 with a step of 2.

---

## 9. Reshaping Arrays

Reshape changes the **structure** of an array without changing the data.

```python
np.arange(12).reshape(3, 4)
```

### Important Rule
```
Rows × Columns = Total elements
```

---

## 10. Predefined Arrays

```python
np.ones((3, 4))     # All values = 1
np.zeros((3, 4))    # All values = 0
np.eye(4)           # Identity matrix
```

---

## 11. Random Arrays

```python
np.random.random((3, 4))
```
Generates random values between 0 and 1.

```python
rng = np.random.default_rng(3)
rng.random((3, 4))
```
Using a seed ensures **reproducible results**.

---

## 12. Evenly Spaced Values (linspace)

```python
np.linspace(1, 10, 5)
```
Generates evenly spaced values between two numbers.
Useful for **graphs and visualizations**.

---

## 13. Array Attributes

```python
a.shape      # Structure of array
a.dtype      # Datatype of elements
a.itemsize   # Memory per element (bytes)
```

---

## 14. Changing Datatype

```python
a = a.astype(np.int32)
```
Converts the array to a new datatype.

---

## 15. Array Operations

### 15.1 Scalar Operations

```python
a + 2
a * 2
a ** 2
```
The operation is applied to **every element**.

### 15.2 Relational Operations

```python
a > 5
```
Returns a Boolean array.

### 15.3 Vectorized Operations

```python
a + b
```
Operations between two arrays happen **element‑wise**.

---

## 16. Common Array Functions

```python
a.max()
a.min()
a.sum()
a.mean()
a.var()
```
Used for statistical analysis.

---

## 17. Dot Product

```python
x @ y
```
Performs matrix multiplication.
Used in **linear algebra and machine learning**.

---

## 18. Indexing and Slicing

### 18.1 1D Array

```python
a[2:6]
a[::-1]
```

### 18.2 2D Array

```python
a[row, column]
a[0:2, 1:3]
```

### 18.3 3D Array

```python
a[array_index, row, column]
```

---

## 19. Iterating Arrays

```python
for x in a:
    print(x)
```

```python
for x in np.nditer(a):
    print(x)
```
`nditer` works for **any dimension**.

---

## 20. Transpose and Flattening

```python
a.T            # Transpose

a.ravel()      # Flatten to 1D (view)
a.flatten()    # Flatten to 1D (copy)
```

---

## 21. Stacking Arrays

```python
np.hstack((a, b))   # Horizontal stacking
np.vstack((a, b))   # Vertical stacking
```

---

## 22. Splitting Arrays

```python
np.hsplit(a, 2)
np.vsplit(a, 2)
```
Splits arrays into smaller parts.

---



