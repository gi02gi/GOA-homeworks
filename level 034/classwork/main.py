# პირველი დავალება
def greet():
    print("hello world")
    print("hello giorgi")

greet()

# მეორე დავალება
def x(s):
    number = 0
    for i in s:
        number = number + 1
    print(number)

# მესამე დავალება
def fi_nd(text, word):
    y = 0
    found = False
    while y < len(text) and y < len(word):
        if text[y] == word[y] and found == False:
            print(y)
            found = True
        y += 1
    if found == False:
        print(-1)

# მეოთხე დავალება
def ran_ge(start, stop):
    o = start
    while o < stop:
        print(o)
        o += 1


   