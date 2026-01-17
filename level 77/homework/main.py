#1
def flick_switch(lst):
    state = True
    result = []
    for item in lst:
        if item == "flick":
            state = not state
        result.append(state)
    return result

#2
def quadrant(x, y):
    if x > 0 and y > 0:
        return 1
    elif x < 0 and y > 0:
        return 2
    elif x < 0 and y < 0:
        return 3
    else:
        return 4
    
#3
def duplicate_encode(word):
    word = word.lower()
    result = ""
    for char in word:
        if word.count(char) == 1:
            result += "("
        else:
            result += ")"
    return result

#4
def divisors(integer):
    res = []
    for i in range(2, integer):
        if integer % i == 0:
            res.append(i)
    if res == []:
        res = f"{integer} is prime"
    return res

#5
def move_zeros(lst):
    res = []
    for i in lst:
        if i != 0:
            res.append(i)
    for i in lst:
        if i == 0:
            res.append(i)
    return res