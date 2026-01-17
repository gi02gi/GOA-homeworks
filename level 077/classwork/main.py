# 1
def sequence_sum(begin_number, end_number, step):
    res = 0
    if begin_number > end_number:
        return 0
    for i in range(begin_number, end_number+1, step):
        res += i
    return res


# 2
def number(lines):
    res = []
    if not lines:
        return []
    x = 1
    for i in lines:
        res.append(str(x) + ": " + i)
        x += 1
    return res


# 3
def array_diff(a, b):
    res = []
    for i in a:
        if i not in b:
            res.append(i)
    return res


# 4
def is_pangram(st):
    st = st.lower()
    for i in "abcdefghijklmnopqrstuvwxyz":
        if i not in st:
            return False
    return True