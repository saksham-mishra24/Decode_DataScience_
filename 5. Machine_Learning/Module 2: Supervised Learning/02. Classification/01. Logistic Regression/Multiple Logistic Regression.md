# Step 13: Multiple Logistic Regression

![Image](https://www.researchgate.net/publication/325813999/figure/fig5/AS%3A638669773893635%401529282148432/Classification-decision-boundary-using-logistic-regression-The-blue-area-corresponds-to.png)

![Image](https://codefinity-content-media.s3.eu-west-1.amazonaws.com/b71ff7ac-3932-41d2-a4d8-060e24b00129/PolyDecisionBoundary.gif)

![Image](https://scipython.com/media/old_blog/logistic_regression/decision-boundary.png)

![Image](https://miro.medium.com/0%2ANM7JbD9nt2OEVwbx)

Alright… our story continues. 📖

Till now, our **model** was solving a very simple problem.

It was using **only one feature**.

Example:

```id="ex1"
House Price → predict if Expensive or Not
```

or

```id="ex2"
Hours studied → Pass or Fail
```

But real life is **never that simple**.

Usually decisions depend on **many factors together**.

So our model now says:

> "One feature is not enough… give me more information!"

And that brings us to the next step.

---

# The Characters Return

Same characters again:

* 🤖 **Model** – trying to make predictions
* 📉 **Loss Function** – measuring mistakes
* 🧭 **Gradient** – telling how to update weights

But now something changes.

Instead of **one input**, we now have **many inputs**.

---

# Earlier: Single Logistic Regression

Previously our equation looked like this:

```id="eq1"
z = w1x1 + b
```

Then we passed it through **Sigmoid**:

```id="eq2"
p = σ(z)
```

Which gave a probability.

Example:

```id="ex3"
x1 = hours studied
p = probability of passing exam
```

Very simple.

---

# Now: Multiple Logistic Regression

Now we introduce **multiple features**.

Example problem:

Predict if a person will **buy a product**.

Inputs could be:

```id="ex4"
x1 = age
x2 = salary
x3 = time spent on website
```

Now the model thinks like this:

```id="eq3"
z = w1x1 + w2x2 + w3x3 + b
```

Then again we apply **Sigmoid**:

```id="eq4"
p = σ(z)
```

So the final probability becomes:

```id="eq5"
p = 1 / (1 + e^-(w1x1 + w2x2 + w3x3 + b))
```

Don't worry — it looks big, but it's the **same idea** as before.

Just **more inputs**.

---

# Think of It Like Voting

Each feature gives a **vote**.

Example:

```id="ex5"
Age → vote
Salary → vote
Website time → vote
```

Each vote has a **weight**.

```id="ex6"
w1 → importance of age
w2 → importance of salary
w3 → importance of website time
```

The model combines all votes to decide:

> "Will the user buy the product?"

---

# Example Prediction

Imagine the model learned these weights:

```id="ex7"
w1 = 0.02
w2 = 0.003
w3 = 0.8
b = -4
```

Input data:

```id="ex8"
age = 30
salary = 50000
time_on_site = 5
```

Model computes:

```id="ex9"
z = (0.02×30) + (0.003×50000) + (0.8×5) - 4
```

Then sigmoid converts it into a **probability**.

Maybe the result becomes:

```id="ex10"
p = 0.82
```

Meaning:

> **82% chance the user will buy the product.**

---

# What Changed From Before?

Only one thing changed.

Before:

```id="cmp1"
z = w1x1 + b
```

Now:

```id="cmp2"
z = w1x1 + w2x2 + w3x3 + ... + wn xn + b
```

Everything else stays the same:

✔ Sigmoid
✔ Loss Function
✔ Gradient Descent

The model just has **more weights to learn**.

---

# Visual Intuition

With **one feature**, the decision boundary looked like a **point on a line**.

With **two features**, it becomes a **line on a plane**.

With **three features**, it becomes a **plane in space**.

More features → **higher dimensional decision boundaries**.

But the math stays exactly the same.

---

# Our Model During Training

During training the model keeps adjusting weights:

```id="loop1"
w1
w2
w3
...
b
```

Using gradient descent:

```id="loop2"
New Weight = Old Weight - Learning Rate × Gradient
```

Until the loss becomes **small**.

Then the model says:

> "Okay… now I understand how these features affect the decision."

---

# Why This Step Is Important

This is where machine learning becomes **actually powerful**.

Real problems always involve **multiple features**.

Examples:

Spam detection:

```id="real1"
email length
number of links
presence of certain words
sender reputation
```

Medical diagnosis:

```id="real2"
age
blood pressure
cholesterol
symptoms
```

All these features together help the model make better predictions.

---

# Quick Recap

Multiple Logistic Regression simply means:

```id="recap1"
Many inputs → one probability output
```

Mathematically:

```id="recap2"
p = σ(w1x1 + w2x2 + ... + wnxn + b)
```

Same model.

Just **more features**.

---

