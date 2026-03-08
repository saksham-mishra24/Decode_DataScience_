

# 🧭 The Complete Map of Statistical Tests in AI / ML

Many beginners get confused because they hear many names:

```
Z-Test
T-Test
Chi-Square Test
ANOVA
Correlation Tests
```

It feels like **too many tests**.

But Professor Arjun tells Milo:

> “All statistical tests are just different tools to answer one question.”

The question is:

```
Is this result real or just random chance?
```

Let’s organize everything **in a simple mental map**.

---

# 🌍 The Big Picture

All statistical tests fall into **three main problems**.

```
1️⃣ Compare Means
2️⃣ Compare Categories
3️⃣ Measure Relationships
```

Each problem has **its own statistical test**.

---

# 1️⃣ Tests for Comparing Means

These tests answer questions like:

```
Did the average value change?
```

Example in ML:

```
Did the new model improve accuracy?
```

---

## Z-Test

Used when:

```
Sample size is large (n ≥ 30)
Population standard deviation is known
```

Example:

Milo tests whether a **new ML model improves accuracy**.

```
Old accuracy = 80%
New sample accuracy = 84%
```

We calculate a **z-score**.

![Image](https://d138zd1ktt9iqe.cloudfront.net/media/seo_landing_files/z-test-1640861740.png)

![Image](https://mathbitsnotebook.com/Algebra2/Statistics/normalstandard.jpg)

![Image](https://userpage.fu-berlin.de/soga/soga-py/200/2070_hypothesis_tests/img/Generalized_figure_of_right_tailed_test.png)

![Image](https://365datascience.com/resources/blog/2018-11-image15-2-1024x515.jpg)

The z-score tells us **how far the sample result is from the expected value**.

---

## T-Test

Used when:

```
Sample size is small
Population standard deviation unknown
```

In real ML projects, we usually use **t-tests** because we rarely know the true population variance.

Types of t-tests:

```
1️⃣ One-sample t-test
2️⃣ Independent t-test
3️⃣ Paired t-test
```

Example:

Comparing **two ML models**.

```
Model A accuracy
Model B accuracy
```

We test whether the difference is **statistically significant**.

---

# 2️⃣ Tests for Comparing Categories

Sometimes we are not comparing means.

Instead we compare **counts or categories**.

Example:

```
Did more users click the new recommendation system?
```

For this we use:

```
Chi-Square Test
```

---

## Chi-Square Test

Used for **categorical data**.

Example dataset:

| System | Click | No Click |
| ------ | ----- | -------- |
| Old    | 120   | 180      |
| New    | 170   | 130      |

We ask:

```
Is the click increase real?
```

![Image](https://statsandr.com/blog/chi-square-test-of-independence-in-r_files/figure-html/unnamed-chunk-4-1.png)

![Image](https://study.com/cimages/multimages/16/chisquare_disrr_for_df_52127271427552392832.png)

![Image](https://www.researchgate.net/publication/276166906/figure/fig1/AS%3A614020293881892%401523405254780/Results-of-the-Pearson-Chi-Square-test-of-Independence-indicating-how-the-nominal.png)

![Image](https://statistics.laerd.com/spss-tutorials/img/cstfa/chi-square-independence-12.png)

Chi-square measures **difference between observed and expected counts**.

Formula idea:

```
χ² = Σ (Observed − Expected)² / Expected
```

If the value becomes large → categories are **related**.

---

# 3️⃣ Tests for Comparing Multiple Means

Sometimes we compare **more than two groups**.

Example:

Milo tests **three machine learning models**.

```
Model A accuracy
Model B accuracy
Model C accuracy
```

Using multiple t-tests would cause **too many errors**.

So statisticians invented:

```
ANOVA
```

---

## ANOVA (Analysis of Variance)

ANOVA tests:

```
Are the group means different?
```

![Image](https://stpltrsrcscmnprdwus001.blob.core.windows.net/rsrcs/srm/images/research-methods-statistics-for-public-nonprofit-administrators-practical-guide/10.4135_9781544307763-fig10-1.jpg)

![Image](https://blog.minitab.com/hubfs/B2BML%20-%20NEW%20FILE%20MANAGER%20STRUCTURE/Blog%20Images/Imported_Blog_Media/f_distribution_probability-Jul-06-2025-12-38-11-1739-AM.png)

![Image](https://www.researchgate.net/publication/329788831/figure/fig2/AS%3A711397558206464%401546621803288/Graphical-representation-of-the-rationale-behind-the-analysis-of-variance-ANOVA-A.png)

![Image](https://www.investopedia.com/thmb/Fni-D-yFwtaHBGKExU8v78yHNPc%3D/1500x0/filters%3Ano_upscale%28%29%3Amax_bytes%28150000%29%3Astrip_icc%28%29/The-Normal-Distribution1-51cb75a3e0a34eb6bbff7e966557757e.jpg)

ANOVA compares:

```
Between-group variance
vs
Within-group variance
```

If between-group variation is **much larger**, the groups are **different**.

---

# 4️⃣ Tests for Measuring Relationships

Sometimes we don't compare groups.

Instead we ask:

```
Do two variables move together?
```

Example:

```
Does study time affect exam score?
```

For this we use:

```
Correlation
```

---

## Correlation Test

The most common is **Pearson Correlation**.

Value range:

```
-1 → Perfect negative relationship
0 → No relationship
+1 → Perfect positive relationship
```

<img width="497" height="172" alt="image" src="https://github.com/user-attachments/assets/4882f0c8-d9d6-4170-9d06-e60c1021d8a0" />

![Image](https://www.researchgate.net/publication/265174549/figure/fig2/AS%3A295938489896964%401447568642712/Pearson-product-moment-correlation-scatter-plot-examples-for-the-comparisons-with-the.png)

![Image](https://study.com/cimages/videopreview/scatter-plot-and-correlation_111765.jpg)

![Image](https://www.researchgate.net/publication/330484536/figure/fig4/AS%3A716477049102338%401547832848988/Scatter-plots-showing-relationships-between-variables-predicted-to-correlate-A-shows.png)

Example:

```
Study hours ↑
Exam score ↑
```

Positive correlation.

---

# The Complete Map of Statistical Tests

Now everything becomes simple.

```
STATISTICAL TESTS
       │
       │
 ┌─────┴─────────────┐
 │                   │
Compare Means     Compare Categories
 │                   │
 │                   │
Z-Test             Chi-Square
T-Test
ANOVA
```

And for **relationships**:

```
Correlation Tests
```

---

# How This Appears in Machine Learning

These tests appear everywhere in ML pipelines.

### Feature Selection

```
Does this feature affect prediction?
```

### A/B Testing

```
Does the new recommendation model increase clicks?
```

### Model Comparison

```
Is model A better than model B?
```

### Experiment Validation

```
Is this improvement statistically significant?
```

---

# Milo’s Final Realization

Milo finally understands something powerful.

All statistical tests follow the **same logic**:

```
1️⃣ Assume null hypothesis
2️⃣ Collect data
3️⃣ Calculate statistic
4️⃣ Compute probability
5️⃣ Reject or accept hypothesis
```

Different tests just handle **different types of data**.

---

