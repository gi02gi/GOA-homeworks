# 1
def numbers():
    count = 0
    for i in range(1, 101):
        if (i % 3 == 0 or i % 5 == 0) and not (i % 3 == 0 and i % 5 == 0):
            count += 1
    return count
print(numbers())

# 2
N = int(input("enter number: "))
for i in range(1, N +1):
    prime = True
    for j in range(2, i):
        if i % j == 0:
            prime = False
    if prime:
        print(i)

# 3
evens = 0
odds = 0
for i in range(50, 151):
    if i % 2 == 0:
        evens += i
    else:
        odds += i
print(evens)
print(odds)

# 4
def namess():
    names = []
    for i in range(5):
        name = input("შეიყვანე სახელი: ")
        names.append(name)
    return names

print(namess())

