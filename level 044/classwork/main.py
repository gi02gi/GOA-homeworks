# 1)
def make_upper_case(s):
    return s.upper()

# 2)
def count_by(x, n):
    result = []
    for i in range(1, n+1):
        result.append(x * i)
    return result