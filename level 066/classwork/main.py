# 1
def summation(num):
    result = 0
    for i in range(1, num+1):
        result += i
    return result


# 2
def to_alternating_case(string):
    result = ""
    for i in string:
        if i.islower():
            result += i.upper()
        else:
            result += i.lower()
    return result


# 3
def explode(arr):  
    a, b = arr
    if type(a) not in (int, float) and type(b) not in (int, float):
        return "Void!"
    score = 0
    if type(a) in (int, float):
        score += a
    if type(b) in (int, float):
        score += b
    return [arr] * score


# 4
def to_jaden_case(string):
    name = string.split(" ")
    res = ""
    for i in name:
        res += i.capitalize() + " "
    return res[:-1:]