### 📊 Sales Data Analysis & Dashboard 

---

## 🎯 **Objective**

Is dataset ko analyze karke meaningful insights nikaalo aur ek clear report + dashboard banao.

---

## 🧾 **Dataset Overview**

File me sales related data hai:

* Date
* Salesman
* Region
* Item
* Quantity (Qty)
* Price
* Total Amount

---

# 🧠 **TASKs**

## **Part 1: Data Cleaning (Compulsory)**

Sabse pehle data ko clean karo.

### Karna kya hai:

* Date column ko **proper date format** me convert karo
* Unnecessary columns (jaise "Unnamed") hatao
* Check karo:

  * Qty, Price, Amount → numeric hone chahiye
* Missing values handle karo

---

# 🧠 **PART 1: Data Cleaning (Excel Steps)**

## ✅ 1. Date Format Fix Karna

**Steps:**

1. Date column select karo
2. Top menu → **Home**
3. Number section → dropdown → **Short Date / Long Date**

👉 Agar format galat hai:

* Go to **Data → Text to Columns → Finish**

---

## ✅ 2. Unwanted Columns Remove Karna

**Steps:**

1. Column select karo (e.g. "Unnamed")
2. Right click → **Delete**

---

## ✅ 3. Numeric Format Check (Qty, Price, Amount)

**Steps:**

1. Column select karo
2. Home → Number section → **General / Number**

👉 Agar error ho:

* Data → **Text to Columns → Finish**

---

## ✅ 4. Missing Values Handle Karna

**Steps:**

1. Home → **Find & Select → Go To Special → Blanks**
2. Right click → Delete / Fill value

---
## **Part 2: Basic Analysis**

In questions ke answers nikaalo:

1. **Total Sales**

   * Total revenue kitna hai?

2. **Top Salesman**

   * Kis salesman ne sabse zyada sale ki?

3. **Top Region**

   * Kaunsa region sabse zyada revenue generate kar raha hai?

4. **Best-Selling Item**

   * Quantity ke basis pe kaunsa item sabse zyada bik raha hai?
   * Revenue ke basis pe kaunsa item top hai?

---
# 📊 **PART 2: Basic Analysis (Pivot Table)**

## ✅ Pivot Table Banana

**Steps:**

1. Pure data select karo
2. Go to → **Insert → Pivot Table**
3. New Worksheet → OK

---

## 🔹 1. Total Sales

* Pivot Fields:

  * Drag **Amount → Values**
* Result: Total Revenue

---

## 🔹 2. Top Salesman

* Drag:

  * Salesman → Rows
  * Amount → Values
* Sort:

  * Right click → **Sort → Largest to Smallest**

---

## 🔹 3. Top Region

* Drag:

  * Region → Rows
  * Amount → Values

---

## 🔹 4. Best-Selling Item

* For Quantity:

  * Item → Rows
  * Qty → Values

* For Revenue:

  * Item → Rows
  * Amount → Values

---

## **Part 3: Intermediate Analysis**

Thoda deeper jao:

1. **Sales Over Time**

   * Daily ya monthly sales trend dikhao

2. **Salesman Performance**

   * Sab salesmen ka comparison karo

3. **Region vs Sales**

   * Kaunsa region consistently acha perform kar raha hai?

4. **Average Order Value**

   * Ek order ka average revenue calculate karo

---
# 📈 **PART 3: Intermediate Analysis**

## 🔹 1. Sales Over Time

**Steps:**

1. Pivot Table me:

   * Date → Rows
   * Amount → Values

2. Graph:

   * Insert → **Line Chart**

---

## 🔹 2. Salesman Performance

* Pivot:

  * Salesman → Rows
  * Amount → Values

* Chart:

  * Insert → **Bar Chart**

---

## 🔹 3. Region vs Sales

* Pivot:

  * Region → Rows
  * Amount → Values

---

## 🔹 4. Average Order Value

**Formula:**

```
= Total Sales / Number of Orders
```

**Excel Steps:**

1. New cell me formula likho
2. Example:

```
=SUM(Amount)/COUNTA(Amount)
```

---

## **Part 4: Dashboard Creation (Recommended)**

Excel / Power BI / Tableau me dashboard banao

### Dashboard me include karo:

* **KPI Cards:**

  * Total Sales
  * Total Quantity
  * Top Salesman

* **Charts:**

  * Sales by Region (Bar Chart)
  * Sales by Item (Bar/Pie Chart)
  * Sales Trend (Line Chart)

* **Filters:**

  * Date
  * Region
  * Salesman

---
# 📊 **PART 4: Dashboard Creation**

## ✅ Charts Banana

1. Pivot Table select karo
2. Go to → **Insert → Charts**

   * Bar Chart
   * Pie Chart
   * Line Chart

---

## ✅ KPI Cards (Manual)

* Cell me likho:

  * Total Sales
  * Total Qty
* Font size bada karo → Bold

---

## ✅ Filters (Slicers)

**Steps:**

1. Pivot Table select karo
2. Go to → **Insert → Slicer**
3. Choose:

   * Date
   * Region
   * Salesman

---

# ✍️ **PART 5: Insights Likho**

Example:

* “North region sabse zyada sales generate kar raha hai”
* “Salesman A consistently top performer hai”
* “Product X ka demand high hai”

------




