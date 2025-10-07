def even_or_odd(number):
    if number % 2 == 0:
        return "ლუწია"
    else:
        return "კენტია"
print(even_or_odd(int(input("enter number: "))))



def repeat_text(text, times):
    for i in range(times):
        print(text)
repeat_text("გიორგი", 3)



def greet(name):
    print("სალამი,", name + "!")

greet("გიორგი")