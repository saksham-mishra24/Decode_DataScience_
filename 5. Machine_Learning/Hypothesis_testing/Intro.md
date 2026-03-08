
# Hypothesis Testing in AI / ML 

## 🧠 First Question: Why Do We Even Need Hypothesis Testing?

Imagine Milo is training a **machine learning model** to predict whether students will **Pass or Fail**.

He improves the model and the **accuracy increases from 82% → 85%**.

Milo becomes excited:

> “My new model is better!”

But Professor Arjun asks a very important question:

> “Are you sure the improvement is real… or just random chance?”

This is the **core problem hypothesis testing solves**.

In real life:

* Data always contains **random noise**
* Results can change **just by chance**

So we need a **scientific way to test whether something is actually true**.

That scientific framework is called:

```text
Hypothesis Testing
```

---

# What is a Hypothesis?

A **hypothesis** is simply an **assumption or claim** that we want to test using data.

Example claim:

```text
"This new ML model performs better than the old model."
```

But we cannot just **believe it**.

We must **test it using statistics**.

---

# The Two Main Hypotheses

Every hypothesis test always contains **two competing ideas**.

Think of them like **two sides of an argument**.

---

## 1️⃣ Null Hypothesis (H₀)

This is the **default assumption**.

It assumes **nothing special is happening**.

Example:

```text
H₀: The new ML model is NOT better than the old model.
```

In simple words:

```text
Everything is just random chance.
```

---

## 2️⃣ Alternative Hypothesis (H₁ or Hₐ)

This is the claim we want to prove.

Example:

```text
H₁: The new ML model IS better than the old model.
```

So the battle becomes:

```text
H₀ vs H₁
```

---

# Visual Intuition

Think of a **bell curve (normal distribution)**.

Most normal results lie in the middle.

Extremely unusual results lie at the edges.

![Image](https://userpage.fu-berlin.de/soga/soga-py/200/2070_hypothesis_tests/img/Generalized_figure_of_two_sided_test.png)

![Image](https://365datascience.com/resources/blog/thumb%401024_2018-11-image14-2-1024x543.webp)

![Image](https://miro.medium.com/1%2A-s5M80lZLwE8R1htv5Ybfw.png)

<img width="446" height="300" alt="image" src="https://github.com/user-attachments/assets/f0db4aa8-a563-48bf-a4d8-10848a21310f" />

The shaded regions represent **extreme results** that would make us doubt the null hypothesis.

---

# Types of Hypotheses in AI / ML

Now let’s go deeper.

There are several types of hypotheses used in statistics and ML.

---

# 1️⃣ Simple Hypothesis

A **simple hypothesis** specifies an **exact value**.

Example:

```text
H₀: Model accuracy = 80%
```

There is **only one possible value**.

---

# 2️⃣ Composite Hypothesis

A **composite hypothesis** specifies a **range of values**.

Example:

```text
H₁: Model accuracy > 80%
```

Now many values are possible:

```text
81%
85%
90%
```

So it is **not a single value**.

---

# 3️⃣ One-Tailed Hypothesis

This type checks **one direction only**.

Example:

```text
H₁: New model accuracy > old model accuracy
```

We only care if the model is **better**.

Graphically:

![Image](https://www.statisticsfromatoz.com/uploads/7/3/2/1/73216723/comparison-table_3_orig.png)

![Image](https://ars.els-cdn.com/content/image/3-s2.0-B9780128008522000092-f09-07-9780128008522.jpg)

![Image](https://codefinity-content-media.s3.eu-west-1.amazonaws.com/a849660e-ddfa-4033-80a6-94a1b7772e23/Testing2.0/CriticalRegion.png)

![Image](https://images.ctfassets.net/083zfbgkrzxz/3lvYf1yhkREATaTP46mziA/dff46ae45daab32ebeaf244f857fca73/one-tailed_image_2.png)

Only **one side of the distribution** is tested.

---

# 4️⃣ Two-Tailed Hypothesis

Now we check **both directions**.

Example:

```text
H₁: New model accuracy ≠ old model accuracy
```

This means:

* It could be **better**
* Or **worse**

![Image](https://www.investopedia.com/thmb/TDKV_REnO8ek-F-_Hsnhq_gm0XI%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/dotdash_Final_Two_Tailed_Test_Sep_2020-01-b86f83d6c5f64f1a8e091d1cb0cd5f67.jpg)

![Image](https://codefinity-content-media.s3.eu-west-1.amazonaws.com/a849660e-ddfa-4033-80a6-94a1b7772e23/Testing2.0/CriticalRegion.png)

![Image](https://online.stat.psu.edu/statprogram/sites/statprogram/files/inline-images/s-3-2%20two%20tailed%20ex.png)

![Image](https://study.com/cimages/multimages/16/p-value_graph.png)

Now **both ends of the curve are rejection zones**.

---

# Why Hypothesis Testing Is Important in AI / ML

Hypothesis testing helps answer questions like:

### Model Comparison

```text
Is Model A better than Model B?
```

### Feature Importance

```text
Does this feature actually affect predictions?
```

### A/B Testing

```text
Does the new product recommendation system improve clicks?
```

### Algorithm Evaluation

```text
Is the improvement statistically significant?
```

Without hypothesis testing, ML becomes **guesswork**.

---

# The Complete Steps of Hypothesis Testing

Now let’s go through the **full process step-by-step**.

---

# Step 1 — Define the Hypotheses

First we define:

```text
H₀ (Null Hypothesis)
H₁ (Alternative Hypothesis)
```

Example:

```text
H₀: Model accuracy = 80%
H₁: Model accuracy > 80%
```

---

# Step 2 — Choose Significance Level (α)

The **significance level** is the **maximum probability of making a wrong decision**.

Most common value:

```text
α = 0.05
```

Meaning:

```text
We accept a 5% chance of making a wrong conclusion.
```

---

# Step 3 — Collect Data

Now we collect sample data.

Example:

```text
Sample size = 200 predictions
Correct predictions = 170
Accuracy = 85%
```

---

# Step 4 — Compute Test Statistic

We calculate a **test statistic**.

Examples include:

```
Z-score
t-score
Chi-square
F-statistic
```

Example Z-score formula:

```
Z = (Sample Mean − Population Mean) / Standard Error
```

This tells us:

```text
How far our result is from the expected value.
```

---

# Step 5 — Calculate the p-value

The **p-value** tells us:

```text
How likely this result is if H₀ were true.
```

Example:

```text
p = 0.02
```

Meaning:

```text
There is only a 2% chance that this happened randomly.
```

---

# Step 6 — Compare p-value with α

Decision rule:

```
If p ≤ α → Reject H₀
If p > α → Fail to reject H₀
```

Example:

```
p = 0.02
α = 0.05
```

Since:

```
0.02 < 0.05
```

We reject the null hypothesis.

---

# Step 7 — Draw the Final Conclusion

Now we interpret the result.

Example conclusion:

```text
The new ML model significantly improves accuracy.
```

---

# Types of Errors in Hypothesis Testing

Even good statistical tests can make mistakes.

---

# Type 1 Error (False Positive)

Rejecting a **true null hypothesis**.

Example:

```
We say the model is better
but actually it is not.
```

Probability = **α**

---

# Type 2 Error (False Negative)

Failing to reject a **false null hypothesis**.

Example:

```
The model is actually better
but we say it isn't.
```

---

# Final Mental Model

Think of hypothesis testing like a **court trial**.

```
H₀ : Defendant is innocent
H₁ : Defendant is guilty
```

We assume innocence until **strong evidence appears**.

Similarly:

```
We assume H₀ is true
until strong data proves otherwise
```

---

# Where Hypothesis Testing Appears in Machine Learning

You will see it used in:

* Feature selection
* Model evaluation
* A/B testing
* Experiment design
* Algorithm comparison

It is one of the **most important statistical tools behind AI**.

---

