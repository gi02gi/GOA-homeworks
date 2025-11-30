# 1)
def add_numbers(x, y):
    return x + y

# 2)
def average(a, b, c):
    return (a + b + c) / 3

# 3)
def max_number(num1, num2):
    if num1 > num2:
        return num1
    elif num1 < num2:
        return num2

# 4)
def ever_or_odd(d):
    if d % 2 == 0:
        return "number is even"
    else: 
        return "number is odd"
    
# 5)
def sum_list(numbers):
    total = 0
    for num in numbers:
        total += num
    return total

# 6)
def filter_even(nums):
    evens= []
    for numb in nums:
        if numb % 2 == 0:
            evens.append(numb)
    return evens

# 7)
def word_length(word):
    return len(word)

# 8)
def longest_word(words):
    longest = ""
    for i in words:
        if len(i) > len(longest):
            longest = i
    return longest

# 9)
def square(numb):
    return numb ** 2
