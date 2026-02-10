# =====================================================
# Topic: Categorical Data ko Numbers me kaise convert karein


# -----------------------------------------------------
# STEP 1: Required libraries import karna
# -----------------------------------------------------

# NumPy ka use numbers, arrays aur mathematical operations ke liye hota hai
# ML pipelines me NumPy har jagah use hota hai
import numpy as np

# Pandas ka use tabular data (rows & columns) handle karne ke liye hota hai
# Ye Excel sheet jaisa feel deta hai Python ke andar
import pandas as pd


# -----------------------------------------------------
# STEP 2: Dataset load karna
# -----------------------------------------------------

# pd.read_csv ka matlab: CSV file ko read karke DataFrame banana
# 'cars.csv' ek dataset hai jisme cars ki details stored hain

df = pd.read_csv('cars.csv')


# -----------------------------------------------------
# STEP 3: Data ka preview dekhna
# -----------------------------------------------------

# head() ka matlab: data ke first 5 rows dikhana
# Isse hume pata chalta hai columns ka naam aur data ka structure

df.head()


# -----------------------------------------------------
# STEP 4: Owner column ka analysis
# -----------------------------------------------------

# value_counts() ka matlab: har unique value kitni baar aayi hai
# Yahan hum check kar rahe hain owner category ka distribution

df['owner'].value_counts()


# -----------------------------------------------------
# STEP 5: One Hot Encoding using Pandas (basic method)
# -----------------------------------------------------

# pd.get_dummies categorical columns ko numbers me convert karta hai
# fuel aur owner columns ko encoding ke liye select kiya gaya hai

pd.get_dummies(df, columns=['fuel', 'owner'])


# -----------------------------------------------------
# STEP 6: Dummy Variable Trap avoid karna
# -----------------------------------------------------

# drop_first=True ka matlab:
# Har category ka ek column drop kar dete hain
# Taaki extra dependency (dummy variable trap) na bane

pd.get_dummies(df, columns=['fuel', 'owner'], drop_first=True)


# -----------------------------------------------------
# STEP 7: Train-Test Split
# -----------------------------------------------------

# ML me data ko training aur testing me divide karna compulsory hota hai
# Training data se model seekhta hai
# Testing data se model ka performance check hota hai

from sklearn.model_selection import train_test_split

# df.iloc[:,0:4] = pehle 4 columns as input features
# df.iloc[:,-1] = last column as target
# test_size=0.2 = 20% data testing ke liye
# random_state=2 = same result baar-baar lane ke liye

X_train, X_test, y_train, y_test = train_test_split(
    df.iloc[:, 0:4],
    df.iloc[:, -1],
    test_size=0.2,
    random_state=2
)


# -----------------------------------------------------
# STEP 8: Training data ka preview
# -----------------------------------------------------

# Sirf training data ke first 5 rows dekh rahe hain
# Taaki confirm ho sake data sahi split hua hai

X_train.head()


# -----------------------------------------------------
# STEP 9: OneHotEncoder import karna (Sklearn method)
# -----------------------------------------------------

# Sklearn ka OneHotEncoder ML pipelines ke liye zyada preferred hota hai
# Kyunki ye training aur testing data ko properly handle karta hai

from sklearn.preprocessing import OneHotEncoder


# -----------------------------------------------------
# STEP 10: OneHotEncoder object banana
# -----------------------------------------------------

# drop='first' = dummy variable trap avoid karne ke liye
# sparse=False = output numpy array me chahiye
# dtype=np.int32 = values integer form me chahiye

ohe = OneHotEncoder(drop='first', sparse=False, dtype=np.int32)


# -----------------------------------------------------
# STEP 11: Training data pe fit & transform
# -----------------------------------------------------

# fit_transform ka matlab:
# 1. Training data se categories seekhna
# 2. Usi training data ko encode karna

X_train_new = ohe.fit_transform(X_train[['fuel', 'owner']])


# -----------------------------------------------------
# STEP 12: Testing data pe sirf transform
# -----------------------------------------------------

# Testing data pe sirf transform hota hai
# fit nahi karte kyunki categories training se hi seekhni chahiye

X_test_new = ohe.transform(X_test[['fuel', 'owner']])


# -----------------------------------------------------
# STEP 13: Encoded training data ka shape dekhna
# -----------------------------------------------------

# shape batata hai kitni rows aur kitne new encoded columns bane

X_train_new.shape


# -----------------------------------------------------
# STEP 14: Numerical + Encoded features combine karna
# -----------------------------------------------------

# np.hstack ka matlab: horizontally data ko jodna
# brand aur km_driven numerical features hain
# Unko encoded categorical data ke saath merge kar rahe hain

np.hstack((
    X_train[['brand', 'km_driven']].values,
    X_train_new
))


# -----------------------------------------------------
# STEP 15–16: (Empty cells – no code present)
# -----------------------------------------------------
# Ye cells notebook me khali the
# Isliye yahan koi processing nahi ho rahi


# -----------------------------------------------------
# STEP 17: Brand column ka frequency analysis
# -----------------------------------------------------

# value_counts() batata hai kaunsa brand kitni baar aaya hai
# Ye step high-cardinality problem samajhne ke liye hota hai

counts = df['brand'].value_counts()


# -----------------------------------------------------
# STEP 18: Unique brands + threshold define karna
# -----------------------------------------------------

# nunique() batata hai kitne unique brands hain
# threshold = minimum frequency limit set kar rahe hain

# Matlab: jo brand 100 se kam baar aaya hai
# Usko rare / uncommon maan lenge

df['brand'].nunique()
threshold = 100


# -----------------------------------------------------
# STEP 19: Rare brands identify karna
# -----------------------------------------------------

# counts <= threshold ka matlab:
# Jo brands threshold se kam baar aaye

repl = counts[counts <= threshold].index


# -----------------------------------------------------
# STEP 20: Rare brands ko 'uncommon' me replace karna
# -----------------------------------------------------

# replace(repl, 'uncommon') ka matlab:
# Sab rare brands ko ek single category bana dena
# Isse columns kam bante hain after encoding

pd.get_dummies(
    df['brand'].replace(repl, 'uncommon')
).sample(5)

# ==============================================================