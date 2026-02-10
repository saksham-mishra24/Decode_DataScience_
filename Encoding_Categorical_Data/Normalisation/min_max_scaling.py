# =====================================================
# DAY 25 – EXTREME BEGINNER VERSION (HINGLISH)
# Target audience: Jinko Python, ML, Data Science kuch bhi nahi aata
# Goal: Har single line ka WHY + WHAT explain karna
# =====================================================

# -----------------------------------------------------
# STEP 1: Libraries import karna
# -----------------------------------------------------

# NumPy ek Python library hai jo numbers, arrays aur maths operations ke liye use hoti hai
# ML aur Data Science me almost har jagah NumPy ka use hota hai
import numpy as np

# Pandas library ka use table-type data (rows & columns) ko handle karne ke liye hota hai
# Jaise Excel sheet hoti hai, waise hi Pandas DataFrame hota hai
import pandas as pd

# Matplotlib ek plotting library hai
# Iska use graphs / charts banane ke liye hota hai
import matplotlib.pyplot as plt

# Seaborn ek advanced visualization library hai
# Ye matplotlib ke upar kaam karti hai aur graphs ko zyada clean banati hai
import seaborn as sns


# -----------------------------------------------------
# STEP 2: Dataset load karna
# -----------------------------------------------------

# pd.read_csv ka matlab: CSV file ko read karke DataFrame banana
# 'wine_data.csv' = data file ka naam
# header=None = file me column names nahi diye gaye
# usecols=[0,1,2] = sirf first 3 columns use karenge

df = pd.read_csv('wine_data.csv', header=None, usecols=[0, 1, 2])

# Ab hum manually column names set kar rahe hain
# Taaki data samajhne me easy ho
# Class label = wine ka category number
# Alcohol aur Malic acid = wine ke chemical features

df.columns = ['Class label', 'Alcohol', 'Malic acid']


# -----------------------------------------------------
# STEP 3: Data dekhna
# -----------------------------------------------------

# Sirf df likhne se poora dataset display ho jata hai
# Isse hume confirm hota hai ki data sahi load hua hai
# Aur kaunsa column kis type ka hai

df


# -----------------------------------------------------
# STEP 4: Alcohol feature ka distribution
# -----------------------------------------------------

# sns.kdeplot ek smooth curve banata hai
# Ye batata hai ki Alcohol values kis range me zyada hain
# Distribution dekhna isliye zaroori hai taaki data ka behaviour samajh aaye

sns.kdeplot(df['Alcohol'])


# -----------------------------------------------------
# STEP 5: Malic Acid feature ka distribution
# -----------------------------------------------------

# Same kaam Malic acid ke liye
# Hum check karte hain values evenly spread hain ya nahi

sns.kdeplot(df['Malic acid'])


# -----------------------------------------------------
# STEP 6: Scatter plot banana
# -----------------------------------------------------

# Color dictionary banayi ja rahi hai
# Iska matlab: har class ko ek fixed color dena
# Taaki graph me easily differentiate kar sakein

color_dict = {1: 'red', 2: 'blue', 3: 'green'}

# sns.scatterplot do features ke beech relation dikhata hai
# x-axis = Alcohol values
# y-axis = Malic acid values
# hue = Class label (alag-alag wine categories)
# palette = humara custom color dictionary

sns.scatterplot(x=df['Alcohol'],
                y=df['Malic acid'],
                hue=df['Class label'],
                palette=color_dict)


# -----------------------------------------------------
# STEP 7: Train-Test Split
# -----------------------------------------------------

# Machine Learning rule:
# Model ko sikhane ke liye training data chahiye
# Aur test karne ke liye alag testing data

from sklearn.model_selection import train_test_split

# X = input features (Alcohol, Malic acid)
# y = output / target (Class label)

X_train, X_test, y_train, y_test = train_test_split(
    df.drop('Class label', axis=1),  # input columns
    df['Class label'],               # output column
    test_size=0.3,                   # 30% data testing ke liye
    random_state=0                   # repeatable result ke liye
)

# Shape dekh rahe hain
# Kitni rows training me aur kitni testing me gayi
X_train.shape, X_test.shape


# -----------------------------------------------------
# STEP 8: Feature Scaling
# -----------------------------------------------------

# Feature scaling ka matlab:
# Sabhi features ko same range me lana
# Kyunki ML models numbers se influence hote hain

from sklearn.preprocessing import MinMaxScaler

# MinMaxScaler values ko 0 se 1 ke beech convert karta hai
scaler = MinMaxScaler()

# fit() ka matlab: training data se min aur max seekhna
# Sirf training data pe fit karna ML ka golden rule hai
scaler.fit(X_train)

# transform() ka matlab: values ko scale karna
# Training aur testing dono ko same scaler se transform karte hain
X_train_scaled = scaler.transform(X_train)
X_test_scaled = scaler.transform(X_test)


# -----------------------------------------------------
# STEP 9: Scaled data ko DataFrame banana
# -----------------------------------------------------

# transform ke baad output numpy array hota hai
# Isliye hum usko wapas DataFrame me convert karte hain

X_train_scaled = pd.DataFrame(X_train_scaled, columns=X_train.columns)
X_test_scaled = pd.DataFrame(X_test_scaled, columns=X_test.columns)


# -----------------------------------------------------
# STEP 10: Original data ka summary
# -----------------------------------------------------

# describe() = mean, min, max, std jaise statistics deta hai
# round(1) = values ko 1 decimal tak round karna

np.round(X_train.describe(), 1)


# -----------------------------------------------------
# STEP 11: Scaled data ka summary
# -----------------------------------------------------

# Yahan hum verify karte hain
# Kya scaling ke baad values 0 aur 1 ke beech aa gayi hain

np.round(X_train_scaled.describe(), 1)


# -----------------------------------------------------
# STEP 12: Before vs After Scaling Scatter Plot
# -----------------------------------------------------

# plt.subplots ka use multiple graphs ek figure me banane ke liye hota hai
fig, (ax1, ax2) = plt.subplots(ncols=2, figsize=(12, 5))

# Scaling se pehle ka data plot kar rahe hain
ax1.scatter(X_train['Alcohol'], X_train['Malic acid'], c=y_train)
ax1.set_title("Before Scaling")

# Scaling ke baad ka data plot kar rahe hain
ax2.scatter(X_train_scaled['Alcohol'], X_train_scaled['Malic acid'], c=y_train)
ax2.set_title("After Scaling")

# Graph show karna zaroori hai warna display nahi hoga
plt.show()


# -----------------------------------------------------
# STEP 13: KDE Plot – Before vs After Scaling
# -----------------------------------------------------

fig, (ax1, ax2) = plt.subplots(ncols=2, figsize=(12, 5))

# Before scaling distributions
ax1.set_title('Before Scaling')
sns.kdeplot(X_train['Alcohol'], ax=ax1)
sns.kdeplot(X_train['Malic acid'], ax=ax1)

# After scaling distributions
ax2.set_title('After Scaling')
sns.kdeplot(X_train_scaled['Alcohol'], ax=ax2)
sns.kdeplot(X_train_scaled['Malic acid'], ax=ax2)

plt.show()


# -----------------------------------------------------
# STEP 14: Alcohol feature – detailed comparison
# -----------------------------------------------------

fig, (ax1, ax2) = plt.subplots(ncols=2, figsize=(12, 5))

ax1.set_title('Alcohol Before Scaling')
sns.kdeplot(X_train['Alcohol'], ax=ax1)

ax2.set_title('Alcohol After Scaling')
sns.kdeplot(X_train_scaled['Alcohol'], ax=ax2)

plt.show()


# -----------------------------------------------------
# STEP 15: Malic Acid feature – detailed comparison
# -----------------------------------------------------

fig, (ax1, ax2) = plt.subplots(ncols=2, figsize=(12, 5))

ax1.set_title('Malic Acid Before Scaling')
sns.kdeplot(X_train['Malic acid'], ax=ax1)

ax2.set_title('Malic Acid After Scaling')
sns.kdeplot(X_train_scaled['Malic acid'], ax=ax2)

plt.show()

# =====================================================
# END OF NOTEBOOK
# Agar koi student yeh poora file samajh leta hai
# Toh woh data loading, visualization, scaling aur ML basics samajh chuka hai
# =====================================================
