# 1
def double_integer(i):
    return i * 2

# 2 
def friend(x):
    result = []
    for i in x:
        if len(i) == 4:
            result.append(i)
    return result

# 3
def grow(arr):
    result = 1
    for i in arr:
        result *= i
    return result

# 4
def find_average(numbers):
    result = 0
    for i in numbers:
        result += i
    if len(numbers) == 0:
        return 0
    return result / len(numbers)

# 5
def goals(laLiga, copaDelRey, championsLeague):
    return laLiga + copaDelRey + championsLeague

# 6
def double_char(s):
    result = ""
    for i in s:
        result += i * 2
    return result

# 7
def remove_url_anchor(url):
    result = ""
    for i in url:
        if i == '#':
            break
        result += i
    return result

# 8
def sum_cubes(n):
    result = 0
    for i in range(1, n+1):
        result += i**3
    return result
