# 1
def validate_hello(greetings):
    greeting = ["hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc"]
    greetings = greetings.lower()
    
    for word in greeting:
        if word in greetings:
            return True
    return False

# 2
def cookie(x):
    if type(x) == str:
        return "Who ate the last cookie? It was Zach!"
    elif type(x) == int or type(x) == float:
        return "Who ate the last cookie? It was Monica!"
    else:
        return "Who ate the last cookie? It was the dog!"
    
# 3
def grader(score):
    if score > 1 or score < 0.6:
        return "F"
    elif score >= 0.9:
        return "A"
    elif score >= 0.8:
        return "B"
    elif score >= 0.7:
        return "C"
    elif score >= 0.6:
        return "D"
    
# 4
def unusual_five():
    return len("aaaaa")

# 5
def xo(s):
    s = s.lower()
    x_count = 0
    o_count = 0
    
    for char in s:
        if char == 'x':
            x_count += 1
        elif char == 'o':
            o_count += 1
    
    return x_count == o_count

# 6
def sum_two_smallest_numbers(numbers):
    if numbers[0] < numbers[1]:
        smallest = numbers[0]
        second_smallest = numbers[1]
    else:
        smallest = numbers[1]
        second_smallest = numbers[0]
    for num in numbers[2:]:
        if num < smallest:
            second_smallest = smallest
            smallest = num
        elif num < second_smallest:
            second_smallest = num

    return smallest + second_smallest


# 7
def DNA_strand(dna):
    result = ""
    for x in dna:
        if x == "A":
            result += "T"
        elif x == "T":
            result += "A"
        elif x == "C":
            result += "G"
        elif x == "G":
            result += "C"
    return result


# 8
def find_it(seq):
    for num in seq:
        times = 0
        for x in seq:
            if x == num:
                times += 1
        if times % 2 == 1:
            return num