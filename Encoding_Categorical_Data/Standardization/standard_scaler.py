# ================================
# DAY 24 – STANDARD SCALING (BEGINNER FRIENDLY)
# Is file ka goal:
# 1) Data ko load karna
# 2) Train–Test split samajhna
# 3) StandardScaler kyu use karte hain (WHY)
# 4) Scaling ka effect models par dekhna
# =================================

# -------------------------------
# Step 0: Required libraries import
# -------------------------------
# numpy → maths / numerical operations ke liye
# pandas → data table (DataFrame) handle karne ke liye
# matplotlib → graphs / plots banane ke liye

import numpy as np              # numerical calculations
import pandas as pd             # data handling
import matplotlib.pyplot as plt # visualization

# -------------------------------
# Step 1: Dataset load karna
# -------------------------------
# CSV file ko read kar rahe hain
# Is file me user ka age, salary aur purchase info hai

df = pd.read_csv('Social_Network_Ads.csv')

# -------------------------------
# Step 2: Useful columns rakhna
# -------------------------------
# iloc[:, 2:] ka matlab:
# → first 2 columns ignore karo
# → sirf Age, EstimatedSalary, Purchased rakho
# Kyun?
# Kyunki pehle ke columns (UserID, Gender) ML ke liye zaroori nahi

df = df.iloc[:, 2:]

# Thoda data dekh lete hain taaki samajh aaye
# sample(5) random 5 rows dikhata hai

df.sample(5)

# ================================
# TRAIN–TEST SPLIT
# ================================
# Concept:
# Model ko exam se pehle question paper nahi dikhana chahiye
# Isliye data ko 2 parts me todte hain:
# 1) Training data → model yahin se seekhega
# 2) Test data → model ko check karenge

from sklearn.model_selection import train_test_split

# X = input features (Age, Salary)
# y = output / target (Purchased)
# 30% data test ke liye
# random_state = 0 → same result har baar mile

X_train, X_test, y_train, y_test = train_test_split(
    df.drop('Purchased', axis=1),  # features
    df['Purchased'],               # target
    test_size=0.3,
    random_state=0
)

# ================================
# STANDARD SCALER
# ================================
# Problem:
# Age → choti values (18–60)
# Salary → bahut badi values (15000–150000)
# Model confuse ho sakta hai

# Solution:
# StandardScaler sab values ko same level pe laata hai
# Mean ≈ 0
# Std ≈ 1

from sklearn.preprocessing import StandardScaler

# Scaler ka object banaya
scaler = StandardScaler()

# -------------------------------
# IMPORTANT RULE
# -------------------------------
# fit() → sirf TRAIN data pe
# Kyunki model/scaler sirf training data se seekhna chahiye

scaler.fit(X_train)

# -------------------------------
# transform() → rules apply karna
# -------------------------------
# Training aur test dono pe SAME rules apply hote hain

X_train_scaled = scaler.transform(X_train)
X_test_scaled = scaler.transform(X_test)

# Array ko DataFrame me convert kar rahe hain
# Kyunki column names wapas chahiye

X_train_scaled = pd.DataFrame(X_train_scaled, columns=X_train.columns)
X_test_scaled  = pd.DataFrame(X_test_scaled,  columns=X_test.columns)

# -------------------------------
# Before vs After scaling statistics
# -------------------------------
# describe() → mean, std, min, max dikhata hai
# round(1) → values ko readable banata hai

np.round(X_train.describe(), 1)
np.round(X_train_scaled.describe(), 1)

# ================================
# EFFECT OF SCALING (VISUAL)
# ================================
# Graph se clearly dikhega ki scaling ka kya effect hua

fig, (ax1, ax2) = plt.subplots(ncols=2, figsize=(12, 5))

# Before scaling
ax1.scatter(X_train['Age'], X_train['EstimatedSalary'])
ax1.set_title('Before Scaling')
ax1.set_xlabel('Age')
ax1.set_ylabel('Salary')

# After scaling
ax2.scatter(X_train_scaled['Age'], X_train_scaled['EstimatedSalary'])
ax2.set_title('After Scaling')
ax2.set_xlabel('Age (scaled)')
ax2.set_ylabel('Salary (scaled)')

plt.show()

# -------------------------------
# EXTRA VISUALIZATION (Distribution)
# -------------------------------
# Ye graphs dikhate hain ki scaling ke baad
# data ka shape same rehta hai, sirf scale change hota hai

import seaborn as sns

fig, (ax1, ax2) = plt.subplots(ncols=2, figsize=(12, 5))

# Before scaling (Age + Salary)
ax1.set_title('Before Scaling Distribution')
sns.kdeplot(X_train['Age'], ax=ax1)
sns.kdeplot(X_train['EstimatedSalary'], ax=ax1)

# After scaling
ax2.set_title('After Standard Scaling Distribution')
sns.kdeplot(X_train_scaled['Age'], ax=ax2)
sns.kdeplot(X_train_scaled['EstimatedSalary'], ax=ax2)

plt.show()

# ================================
# WHY SCALING IS IMPORTANT?
# ================================
# Same dataset par 2 models train karte hain:
# 1) Without scaling
# 2) With scaling
# Fir accuracy compare karte hain

from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score

# Logistic Regression without scaling
lr = LogisticRegression()
lr.fit(X_train, y_train)
y_pred = lr.predict(X_test)

# Logistic Regression with scaling
lr_scaled = LogisticRegression()
lr_scaled.fit(X_train_scaled, y_train)
y_pred_scaled = lr_scaled.predict(X_test_scaled)

print("Accuracy without scaling:", accuracy_score(y_test, y_pred))
print("Accuracy with scaling   :", accuracy_score(y_test, y_pred_scaled))

# -------------------------------
# Decision Tree comparison
# -------------------------------
# Decision Tree scaling pe zyada depend nahi karta
# Isliye yahan farq kam dikhega

from sklearn.tree import DecisionTreeClassifier

dt = DecisionTreeClassifier()
dt_scaled = DecisionTreeClassifier()

dt.fit(X_train, y_train)
dt_scaled.fit(X_train_scaled, y_train)

y_pred = dt.predict(X_test)
y_pred_scaled = dt_scaled.predict(X_test_scaled)

print("DT without scaling:", accuracy_score(y_test, y_pred))
print("DT with scaling   :", accuracy_score(y_test, y_pred_scaled))

# ================================
# EXTRA CONCEPT: scaler.mean_
# ================================
# scaler.mean_ dikhata hai ki scaler ne
# training data se kaunse averages seekhe
# Ye values baad me transform ke time use hoti hain

scaler.mean_

# ================================
# EXTRA EXAMPLE: Outliers ka effect
# ================================
# Ab hum jaan-bujhkar kuch extreme values add karte hain
# taaki samajh aaye scaling kyu important hai

# Extreme age aur salary add ki

df = df.append(
    pd.DataFrame({
        'Age': [5, 90, 95],
        'EstimatedSalary': [1000, 250000, 350000],
        'Purchased': [0, 1, 1]
    }),
    ignore_index=True
)

# Scatter plot se outliers clearly dikhenge
plt.scatter(df['Age'], df['EstimatedSalary'])
plt.title('Data with Outliers')
plt.xlabel('Age')
plt.ylabel('Salary')
plt.show()

# Phir se train-test split (kyunki data badal gaya)
X_train, X_test, y_train, y_test = train_test_split(
    df.drop('Purchased', axis=1),
    df['Purchased'],
    test_size=0.3,
    random_state=0
)

# Phir se scaling (same rules apply)
scaler = StandardScaler()
scaler.fit(X_train)

X_train_scaled = scaler.transform(X_train)
X_test_scaled = scaler.transform(X_test)

X_train_scaled = pd.DataFrame(X_train_scaled, columns=X_train.columns)
X_test_scaled  = pd.DataFrame(X_test_scaled,  columns=X_test.columns)

# Outliers ke baad bhi scaling ka effect dekho
fig, (ax1, ax2) = plt.subplots(ncols=2, figsize=(12, 5))

ax1.scatter(X_train['Age'], X_train['EstimatedSalary'])
ax1.set_title('Before Scaling (With Outliers)')

ax2.scatter(X_train_scaled['Age'], X_train_scaled['EstimatedSalary'], color='red')
ax2.set_title('After Scaling (With Outliers)')

plt.show()

# ================================
# SUMMARY (Students ke liye)
# ================================
# 1) Data split → fair testing ke liye
# 2) Scaling → sab features ko equal importance dene ke liye
# 3) fit() → sirf training data pe
# 4) transform() → training + test pe
# 5) Logistic Regression → scaling se fayda
# 6) Decision Tree → scaling ka kam effect
