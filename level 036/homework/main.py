# პირველი დავალება
# return არის keyword Python-ში, რომელიც გამოიყენება ფუნქციაში რათა დააბრუნოს რაიმე მნიშვნელობა.
# ანუ გზავნის შედეგს იქ სადაც გამოიძახეს

def add_numbers(a, b):
    result = a + b       # ორი რიცხვის შეკრება
    return result         # შედეგის დაბრუნება
sum = add_numbers(5, 3)   # ფუნქციის გამოძახება
print(sum)                # დაბეჭდავს დაბრუნებულ მნიშვნელობას


# მეორე დავალება
def multiply_numbers(numbers):
    x = 1
    for num in numbers:
        x = x * num
    return x
nums = [2, 3, 4, 5]
print(multiply_numbers(nums))


# მესამე დავალება
def first_function(y):
    return y
def second_function(e):
    return e
u = second_function(first_function(15))
print(u)


