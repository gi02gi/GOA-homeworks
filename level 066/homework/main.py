# 1
def twice_as_old(dad_years_old, son_years_old):
    if dad_years_old < son_years_old*2:
        return son_years_old*2 - dad_years_old
    else:
        return dad_years_old - son_years_old*2


# 2
def final_grade(exam, projects):
    if exam > 90 or projects > 10:
        return 100
    elif exam > 75 and projects >= 5:
        return 90
    elif exam > 50 and projects >= 2:
        return 75
    else:
        return 0


# 3
def hero(bullets, dragons):
    return bullets >= dragons*2


#4
def type_validation(variable, _type): 
    return _type in str(type(variable))


# 5
def odd_count(n):
    return n // 2


# 6
def nth_even(n):
    return 2 * (n - 1)


# 7
def zero_fuel(distance_to_pump, mpg, fuel_left):
    return distance_to_pump <= mpg * fuel_left


# 8
def litres(time):
    return time // 2


# 9
def invert(lst):
    list = []
    for i in lst:
        list.append(-i)
    return list


# 10
def to_jaden_case(string):
    name = string.split(" ")
    res = ""
    for i in name:
        res += i.capitalize() + " "
    return res[:-1:]