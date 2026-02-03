# NumPy – Questions

> **Purpose of this file**
> This document is designed for students as a **single, clean reference**.

---

## Practice Questions (Hands-on)

These questions are designed to help you **practice NumPy step-by-step**. Try to solve them **without looking at notes first**.

---

### Section A: Basics & Understanding

1. What is NumPy used for? Write two reasons why NumPy is faster than Python lists.
2. What is an `ndarray`? How is it different from a Python list?
3. How many dimensions does the following array have?

   ```python
   a = np.array([[1, 2, 3], [4, 5, 6]])
   ```

---

### Section B: Array Creation

4. Create a 1D NumPy array containing numbers from 10 to 20.
5. Create a 2D NumPy array of shape (3, 3) filled with zeros.
6. Create an identity matrix of size 5×5.
7. Generate a NumPy array of 8 evenly spaced numbers between 0 and 1.

---

### Section C: Shape & Attributes

8. For the array below, find `ndim`, `shape`, `size`, and `dtype`.

   ```python
   a = np.arange(24).reshape(4, 6)
   ```
9. How much memory (in bytes) does one element of an `int32` array take?

---

### Section D: Reshaping & Datatypes

10. Reshape a 1D array of 12 elements into a 3×4 matrix.
11. What will happen if you try to reshape 12 elements into a 5×5 matrix? Explain why.
12. Convert a float array into an integer array.

---

### Section E: Array Operations

13. Create an array with values `[1, 2, 3, 4]` and multiply each element by 5.
14. Given two arrays `a` and `b`, perform element-wise addition.
15. Write code to check which elements of an array are greater than 10.

---

### Section F: Built-in Functions

16. Find the maximum, minimum, mean, and sum of the following array:

```python
a = np.array([10, 20, 30, 40])
```

17. Generate a random 3×3 array and round all values to two decimal places.

---

### Section G: Dot Product

18. Create two matrices of shape (2×3) and (3×2) and calculate their dot product.
19. Why is dot product important in machine learning?

---

### Section H: Indexing & Slicing

20. From the array `[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]`, extract:

* Elements from index 2 to 6
* Every second element
* The array in reverse order

21. From the 2D array below, extract the middle 2×2 sub-matrix:

```python
a = np.arange(16).reshape(4, 4)
```

22. From a 3D array, access the element present in:

* Second 2D array
* First row
* Second column

---

### Section I: Iteration

23. Write a loop to print all elements of a 2D NumPy array.
24. Why is `np.nditer()` preferred for multi-dimensional arrays?

---

### Section J: Advanced Operations

25. Transpose a 3×2 matrix.
26. Flatten a 2D array into a 1D array using two different methods.

---

### Section K: Stacking & Splitting

27. Horizontally stack two arrays of shape (3×4).
28. Vertically split a (4×4) array into two equal parts.

---

## Final Note for Students

Practice these questions **by writing code yourself**.
If you get errors, read the error message carefully — it often tells you what is wrong.
The more you practice, the more confident you will become with NumPy.
