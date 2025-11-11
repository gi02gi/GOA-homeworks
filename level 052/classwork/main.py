# 1
def solution(string):   
    return string[::-1]

# 2
def unsure_question(s):
    if len(s) > 0 and s[-1] == "?":
        return s
    else:
        return s + "?"
    
    
# 3
def no_space(x):
    word = ""
    for i in x:
        if i != " ":
            word = word + i
    return word


# 4
def whose_move(last_player, win):
    if win == True:
        return last_player
    else:
        if last_player == "black":
            return "white"
        else: 
            return "black"
        