# Program to create a calculator for BMI (Body Mass Index)

# Function to calculate BMI
def calculate_bmi(weight, height):
    bmi = weight / (height ** 2)
    return bmi
# Function to determine BMI category
def bmi_category(bmi):
    if bmi < 18.5:
        return "Underweight"
    elif 18.5 <= bmi < 24.9:
        return "Normal weight"
    elif 25 <= bmi < 29.9:
        return "Overweight"
    else:
        return "Obesity"
# Main function to get user input and display results
def main():
    weight = float(input("Enter your weight in kilograms: "))
    height = float(input("Enter your height in meters: "))
    56
    bmi = calculate_bmi(weight, height)
    category = bmi_category(bmi)
    
    print(f"Your BMI is: {bmi:.2f}")
    print(f"You are classified as: {category}")
if __name__ == "__main__":    main()
