# 1
def grow(arr):
    res = 1
    for i in arr:
        res *= i
    return res

# 2
def zero_fuel(distance_to_pump, mpg, fuel_left):
    return distance_to_pump <= mpg * fuel_left

# 3
def sum_array(arr):
    if not arr or len(arr) <= 1:
        return 0
    return sum(arr) - max(arr) - min(arr)

# 4
def double_char(s):
    result = ""
    for i in s:
        result += i * 2
    return result

# 5
def array_plus_array(arr1,arr2):
    return sum(arr1) + sum(arr2)

# 6
def is_even(n): 
    return n % 2 == 0

# 7
def maskify(cc):
    res = ""
    for i in cc[0:-4]:
        res += "#"
    for i in cc[-4::]:
        res += i
    return res

# 8
def number(bus_stops):
    total = 0
    for stop in bus_stops:
        total += stop[0]
        total -= stop[1]
    return total

# 9
def min_max(lst):
    res = []
    res.append(min(lst))
    res.append(max(lst))
    return res

# 10
def capitals(word):
    res = []
    x = 0
    for i in word:
        if i == i.upper():
            res.append(x)
        x += 1
    return res

# 11
def is_leap_year(year):
    if year % 400 == 0:
        return True
    if year % 100 == 0:
        return False
    if year % 4 == 0:
        return True
    return False

# 12
def vowel_indices(word):
    x = 1
    res = []
    for i in word:
        if i in "aeiouyAEIOUY":
            res.append(x)
        x += 1
    return res

# 13
def digital_root(n):
    while n >= 10:
        sum = 0
        for i in str(n):
            sum += int(i)
        n = sum
    return n

# 14
def is_valid_walk(walk):
    if len(walk) != 10:
        return False
    else:
        return walk.count("n") == walk.count("s") and walk.count("e") == walk.count("w")
    
# 15
def is_pangram(st):
    st = st.lower()
    for i in "abcdefghijklmnopqrstuvwxyz":
        if i not in st:
            return False
    return True