# 1
def square_or_square_root(arr):
    result = []
    for n in arr:
        if int(n**0.5) == n**0.5:
            result.append(int(n**0.5))
        else:
            result.append(n*n)
    return result


# 2
def sum_mix(arr):
    total = 0
    for i in arr:
        total += int(i)
    return total


# 3
def logical_calc(array, op):
    if op == "AND":
        result = True
        for x in array:
            result = result and x
    elif op == "OR":
        result = False
        for x in array:
            result = result or x
    elif op == "XOR":
        result = False
        for x in array:
            result = result != x
    return result


# 4
def calculator(x, y, op):
    if type(x) not in [int, float] or type(y) not in [int, float]:
        return "unknown value"
    if op == "+":
        return x + y
    if op == "-":
        return x - y
    if op == "*":
        return x * y
    if op == "/":
        return x / y
    return "unknown value"


# 5
def count_sheep(n):
    result = ""
    for i in range(1, n + 1):
        result += str(i) + " sheep..."
    return result
