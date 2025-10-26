# 1)
def get_grade(s1, s2, s3):
    avg = (s1 + s2 + s3) / 3
    
    if avg >= 90:
        return 'A'
    elif avg >= 80:
        return 'B'
    elif avg >= 70:
        return 'C'
    elif avg >= 60:
        return 'D'
    else:
        return 'F'
    
# 2)
def remove_exclamation_marks(s):
    result = ""
    for x in s:
        if x != "!":
            result += x
        return result

# 3)
def no_space(x):
    result = ""
    for y in x:
        if y != " ":
            result += y
    return result