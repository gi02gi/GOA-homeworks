# 1
def basic_op(operator, value1, value2):
    #your code here
    if operator == '+':
        return value1 + value2
    elif operator == '-':
        return value1 - value2
    elif operator == '*':
        return value1 * value2
    elif operator == '/':
        return value1 / value2
    
# 2
def check_for_factor(base, factor):
    # your code here
    return base % factor == 0

# 3
def find_average(numbers):
    # your code here
    if not numbers:
        return 0
    return sum(numbers) / len(numbers)

# 4
a = "code"
b = "wa.rs"
name = a + b