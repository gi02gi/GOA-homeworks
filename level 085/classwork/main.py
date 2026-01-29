# 1
def string_to_int_list(s):
    res = []
    x = s.split(",")
    for i in x:
        if i != "":
            num = int(i)
            res.append(num)
    return res

# 2
def vaporcode(s):
    res = ""
    x = True
    for i in s:
        if i != " ":
            if not x:
                res += "  "
            res += i.upper()
            x = False
    return res

# 3
def digital_root(n):
    while n >= 10:
        sum = 0
        for i in str(n):
            sum += int(i)
        n = sum
    return n

# 4
def move_zeros(lst):
    res = []
    for i in lst:
        if i != 0:
            res.append(i)
    for i in lst:
        if i == 0:
            res.append(i)
    return res