# 1
def get_count(sentence):
    count = 0
    for c in sentence:
        if c == 'a' or c == 'e' or c == 'i' or c == 'o' or c == 'u':
            count += 1
    return count

# 2
def is_leap_year(year):
    if year % 400 == 0:
        return True
    elif year % 100 == 0:
        return False
    elif year % 4 == 0:
        return True
    else:
        return False

# 3
def cap_me(arr):
    new = []
    for name in arr:
        name = name.capitalize()
        new.append()
    return new

# 4
def solution(s):
    result = ''
    uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    for char in s:
        if char in uppercase:
            result += ' ' + char
        else:
            result += char
    return result