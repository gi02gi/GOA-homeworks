# 1)
def remove_every_other(my_list):
    return my_list[::2]

# 2)
def count_sheeps(sheep):
    count = 0
    for s in sheep:
        if s == True:
            count += 1
    return count

# 3)
def unusual_five():
    return len("five!")

# 4)
def bool_to_word(boolean):
    if boolean == True:
        return "Yes"
    if boolean == False:
        return "No"
    
# 5)
def quarter_of(month):
    return (month + 2) // 3

# 6)
def greet():
    return "hello world!"